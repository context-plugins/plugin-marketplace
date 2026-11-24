import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The customer's decision on the replacement. APPROVED accepts the replacement. REJECTED declines
 * the replacement and triggers an automatic refund.
 */
export const StatusInstacartConnectPostCheckoutReplacementsApi = {
  Approved: "APPROVED",
  Rejected: "REJECTED",
} as const;
export type StatusInstacartConnectPostCheckoutReplacementsApi =
  | (typeof StatusInstacartConnectPostCheckoutReplacementsApi)[keyof typeof StatusInstacartConnectPostCheckoutReplacementsApi]
  | (string & {});

export const statusInstacartConnectPostCheckoutReplacementsApiSchema: EnumSchema<StatusInstacartConnectPostCheckoutReplacementsApi> =
  s.enumOf<StatusInstacartConnectPostCheckoutReplacementsApi>(
    StatusInstacartConnectPostCheckoutReplacementsApi,
  );
