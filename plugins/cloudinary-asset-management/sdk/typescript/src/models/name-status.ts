import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NameStatus = {
  All: "all",
  Named: "named",
  Unnamed: "unnamed",
} as const;
export type NameStatus = (typeof NameStatus)[keyof typeof NameStatus] | (string & {});

export const nameStatusSchema: EnumSchema<NameStatus> = s.enumOf<NameStatus>(NameStatus);
