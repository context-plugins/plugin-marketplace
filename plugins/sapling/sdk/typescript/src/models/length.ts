import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Length = {
  Short: "short",
  Medium: "medium",
  Long: "long",
} as const;
export type Length = (typeof Length)[keyof typeof Length] | (string & {});

export const lengthSchema: EnumSchema<Length> = s.enumOf<Length>(Length);
