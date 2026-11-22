import { fileURLToPath } from "node:url";

export default {
  turbopack: {
    root: fileURLToPath(new URL(".", import.meta.url)),
  },
  async redirects() {
    return [{ source: "/showcase", destination: "/", permanent: false }];
  },
};
