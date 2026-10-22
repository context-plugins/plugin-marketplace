import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Defines if this payment service has 3DS enabled. */
export type ThreeDSecureEnabled = boolean;

export const threeDSecureEnabledSchema: Schema<ThreeDSecureEnabled> = s.of<ThreeDSecureEnabled>(
  s.union([s.boolean()]),
);
