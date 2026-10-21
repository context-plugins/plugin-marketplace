import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error = {
  code: string;
  message: string;
  path: string;
  links?: Record<string, unknown>;
};

export const errorSchema: Schema<Error> = s.object<Error>({
  code: s.string(),
  message: s.string(),
  path: s.string(),
  links: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    links: "_links",
  },
});
