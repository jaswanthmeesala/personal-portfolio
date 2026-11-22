"use client";

import { useEffect, useState } from "react";

const calendar = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "numeric",
  timeZone: "Asia/Kolkata",
});

function formatTenure(startYear, startMonth) {
  const parts = calendar.formatToParts(new Date());
  const year = Number(parts.find(part => part.type === "year").value);
  const month = Number(parts.find(part => part.type === "month").value);
  const totalMonths = Math.max(0, (year - startYear) * 12 + month - startMonth);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const duration = [];

  if (years) duration.push(`${years} year${years === 1 ? "" : "s"}`);
  if (months || !years) duration.push(`${months} month${months === 1 ? "" : "s"}`);

  return `${duration.join(" ")} full-time experience`;
}

export default function FullTimeTenure({ startYear, startMonth, fallback }) {
  const [label, setLabel] = useState(fallback);

  useEffect(() => {
    const update = () => setLabel(formatTenure(startYear, startMonth));
    update();
    const timer = window.setInterval(update, 60_000);
    window.addEventListener("focus", update);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener("focus", update);
    };
  }, [startYear, startMonth]);

  return <span className="showcase-tenure">{label}</span>;
}
