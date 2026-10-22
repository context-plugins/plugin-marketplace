import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sorting = {
  Asc: "asc",
  Desc: "desc",
} as const;
export type Sorting = (typeof Sorting)[keyof typeof Sorting] | (string & {});

export const sortingSchema: EnumSchema<Sorting> = s.enumOf<Sorting>(Sorting);
