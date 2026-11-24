import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Operator = {
  Equals: "EQUALS",
  NotEquals: "NOT_EQUALS",
  Contains: "CONTAINS",
  NotContains: "NOT_CONTAINS",
  IncludingRegex: "INCLUDING_REGEX",
  ExcludingRegex: "EXCLUDING_REGEX",
} as const;
export type Operator = (typeof Operator)[keyof typeof Operator] | (string & {});

export const operatorSchema: EnumSchema<Operator> = s.enumOf<Operator>(Operator);
