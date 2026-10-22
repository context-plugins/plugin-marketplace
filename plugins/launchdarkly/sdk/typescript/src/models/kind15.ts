import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Kind15 = {
  Exact: "exact",
  Canonical: "canonical",
  Substring: "substring",
  Regex: "regex",
} as const;
export type Kind15 = (typeof Kind15)[keyof typeof Kind15] | (string & {});

export const kind15Schema: EnumSchema<Kind15> = s.enumOf<Kind15>(Kind15);
