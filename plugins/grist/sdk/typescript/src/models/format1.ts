import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The format keyword options for `string` are `default`, `email`, `uri`, `binary`, and `uuid`. */
export const Format1 = {
  Default: "default",
  Email: "email",
  Uri: "uri",
  Binary: "binary",
  Uuid: "uuid",
} as const;
export type Format1 = (typeof Format1)[keyof typeof Format1] | (string & {});

export const format1Schema: EnumSchema<Format1> = s.enumOf<Format1>(Format1);
