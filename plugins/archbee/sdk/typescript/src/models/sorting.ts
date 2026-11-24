import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** OPTIONAL. Specify the type of ordering for document insertion. */
export const Sorting = {
  Alphabetical: "alphabetical",
  Chronological: "chronological",
} as const;
export type Sorting = (typeof Sorting)[keyof typeof Sorting] | (string & {});

export const sortingSchema: EnumSchema<Sorting> = s.enumOf<Sorting>(Sorting);
