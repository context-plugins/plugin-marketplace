import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ThreeDSecureMethodEnum = {
  Challenge: "challenge",
  Frictionless: "frictionless",
} as const;
export type ThreeDSecureMethodEnum =
  | (typeof ThreeDSecureMethodEnum)[keyof typeof ThreeDSecureMethodEnum]
  | (string & {});

export const threeDSecureMethodEnumSchema: EnumSchema<ThreeDSecureMethodEnum> =
  s.enumOf<ThreeDSecureMethodEnum>(ThreeDSecureMethodEnum);
