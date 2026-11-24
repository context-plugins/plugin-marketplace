import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Identifies if the transaction is of debit or credit type. */
export const Direction = {
  Debit: "debit",
  Credit: "credit",
} as const;
export type Direction = (typeof Direction)[keyof typeof Direction] | (string & {});

export const directionSchema: EnumSchema<Direction> = s.enumOf<Direction>(Direction);
