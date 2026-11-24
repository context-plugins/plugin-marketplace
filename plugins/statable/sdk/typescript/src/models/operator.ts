import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** e = equals, b = begins with, c = contains. */
export const Operator = {
  E: "e",
  B: "b",
  C: "c",
} as const;
export type Operator = (typeof Operator)[keyof typeof Operator] | (string & {});

export const operatorSchema: EnumSchema<Operator> = s.enumOf<Operator>(Operator);
