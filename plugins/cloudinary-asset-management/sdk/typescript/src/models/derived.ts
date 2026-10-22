import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Derived = {
  transformation?: string;
  format?: string;
  bytes?: number;
  id?: string;
  url?: string;
  secureUrl?: string;
};

export const derivedSchema: Schema<Derived> = s.object<Derived>({
  transformation: s.optional(s.string()),
  format: s.optional(s.string()),
  bytes: s.optional(s.int()),
  id: s.optional(s.string()),
  url: s.optional(s.string()),
  secureUrl: s.optional(s.string()),
  _keysMap: {
    secureUrl: "secure_url",
  },
});
