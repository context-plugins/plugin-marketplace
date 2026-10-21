import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Combinator = {
  OneOf: "oneOf",
  AllOf: "allOf",
} as const;
export type Combinator = (typeof Combinator)[keyof typeof Combinator] | (string & {});

export const combinatorSchema: EnumSchema<Combinator> = s.enumOf<Combinator>(Combinator);
