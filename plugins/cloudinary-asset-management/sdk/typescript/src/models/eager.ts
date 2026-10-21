import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Eager = {
  transformation?: string;
  width?: number;
  height?: number;
  bytes?: number;
  format?: string;
  url?: string;
  secureUrl?: string;
};

export const eagerSchema: Schema<Eager> = s.object<Eager>({
  transformation: s.optional(s.string()),
  width: s.optional(s.int()),
  height: s.optional(s.int()),
  bytes: s.optional(s.int()),
  format: s.optional(s.string()),
  url: s.optional(s.string()),
  secureUrl: s.optional(s.string()),
  _keysMap: {
    secureUrl: "secure_url",
  },
});
