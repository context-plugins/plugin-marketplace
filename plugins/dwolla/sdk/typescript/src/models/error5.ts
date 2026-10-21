import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error5 = {
  code?: string;
  message?: string;
  path?: string;
  links?: Record<string, unknown>;
};

export const error5Schema: Schema<Error5> = s.object<Error5>({
  code: s.optional(s.string()),
  message: s.optional(s.string()),
  path: s.optional(s.string()),
  links: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    links: "_links",
  },
});
