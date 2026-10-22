import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AmericanIndianOrAlaskaNative = {
  True: "true",
  False: "false",
} as const;
export type AmericanIndianOrAlaskaNative =
  | (typeof AmericanIndianOrAlaskaNative)[keyof typeof AmericanIndianOrAlaskaNative]
  | (string & {});

export const americanIndianOrAlaskaNativeSchema: EnumSchema<AmericanIndianOrAlaskaNative> =
  s.enumOf<AmericanIndianOrAlaskaNative>(AmericanIndianOrAlaskaNative);
