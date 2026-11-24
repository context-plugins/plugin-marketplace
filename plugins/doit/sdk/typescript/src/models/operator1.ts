import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Comparison operator for period-over-period deltas: `gt` (Greater Than), `gte` (Greater Than or
 * Equals), `lt` (Less Than), `lte` (Less Than or Equals), `b` (Between), `nb` (Not Between).
 */
export const Operator1 = {
  Gt: "gt",
  Gte: "gte",
  Lt: "lt",
  Lte: "lte",
  B: "b",
  Nb: "nb",
} as const;
export type Operator1 = (typeof Operator1)[keyof typeof Operator1] | (string & {});

export const operator1Schema: EnumSchema<Operator1> = s.enumOf<Operator1>(Operator1);
