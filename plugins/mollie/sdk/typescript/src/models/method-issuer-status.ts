import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the issuer. If the status is `pending-issuer`, an additional action from your side
 * may be required with the issuer.
 */
export const MethodIssuerStatus = {
  Activated: "activated",
  PendingIssuer: "pending-issuer",
} as const;
export type MethodIssuerStatus = (typeof MethodIssuerStatus)[keyof typeof MethodIssuerStatus] | (string & {});

export const methodIssuerStatusSchema: EnumSchema<MethodIssuerStatus> =
  s.enumOf<MethodIssuerStatus>(MethodIssuerStatus);
