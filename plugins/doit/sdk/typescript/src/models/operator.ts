import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Comparison operator for filtering metric values: `gt` (Greater Than), `lt` (Less Than), `lte`
 * (Less Than or Equals), `gte` (Greater Than or Equals), `b` (Between), `nb` (Not Between), `e`
 * (Equals), `ne` (Not Equals).
 */
export const Operator = {
  Gt: "gt",
  Lt: "lt",
  Lte: "lte",
  Gte: "gte",
  B: "b",
  Nb: "nb",
  E: "e",
  Ne: "ne",
} as const;
export type Operator = (typeof Operator)[keyof typeof Operator] | (string & {});

export const operatorSchema: EnumSchema<Operator> = s.enumOf<Operator>(Operator);
