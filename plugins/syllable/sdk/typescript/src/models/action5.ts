import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Populate default input values. */
export const Action5 = {
  Get: "get",
  Load: "load",
} as const;
export type Action5 = (typeof Action5)[keyof typeof Action5] | (string & {});

export const action5Schema: EnumSchema<Action5> = s.enumOf<Action5>(Action5);
