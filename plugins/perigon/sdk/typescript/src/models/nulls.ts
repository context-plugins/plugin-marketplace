import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Placement of null values in sorted results. Accepts first or last. */
export const Nulls = {
  First: "first",
  Last: "last",
} as const;
export type Nulls = (typeof Nulls)[keyof typeof Nulls] | (string & {});

export const nullsSchema: EnumSchema<Nulls> = s.enumOf<Nulls>(Nulls);
