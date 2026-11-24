import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Logical operator to combine multiple rules */
export const Combinator = {
  And: "AND",
  Or: "OR",
} as const;
export type Combinator = (typeof Combinator)[keyof typeof Combinator] | (string & {});

export const combinatorSchema: EnumSchema<Combinator> = s.enumOf<Combinator>(Combinator);
