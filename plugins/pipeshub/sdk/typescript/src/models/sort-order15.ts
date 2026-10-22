import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortOrder15 = {
  Asc: "asc",
  Desc: "desc",
} as const;
export type SortOrder15 = (typeof SortOrder15)[keyof typeof SortOrder15] | (string & {});

export const sortOrder15Schema: EnumSchema<SortOrder15> = s.enumOf<SortOrder15>(SortOrder15);
