import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How the active subscription was purchased. */
export const ActivationMethod = {
  Stripe: "stripe",
  Appstore: "appstore",
  Playstore: "playstore",
  Teams: "teams",
  Manual: "manual",
} as const;
export type ActivationMethod = (typeof ActivationMethod)[keyof typeof ActivationMethod] | (string & {});

export const activationMethodSchema: EnumSchema<ActivationMethod> =
  s.enumOf<ActivationMethod>(ActivationMethod);
