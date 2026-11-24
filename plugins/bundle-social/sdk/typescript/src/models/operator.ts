import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Operator = {
  Contains: "CONTAINS",
  Equals: "EQUALS",
  MatchesAny: "MATCHES_ANY",
} as const;
export type Operator = (typeof Operator)[keyof typeof Operator] | (string & {});

export const operatorSchema: EnumSchema<Operator> = s.enumOf<Operator>(Operator);
