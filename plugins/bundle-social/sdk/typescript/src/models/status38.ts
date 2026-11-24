import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status38 = {
  Open: "OPEN",
  Archived: "ARCHIVED",
} as const;
export type Status38 = (typeof Status38)[keyof typeof Status38] | (string & {});

export const status38Schema: EnumSchema<Status38> = s.enumOf<Status38>(Status38);
