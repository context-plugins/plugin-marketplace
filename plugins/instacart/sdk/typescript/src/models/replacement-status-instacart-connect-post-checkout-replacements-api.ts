import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The updated replacement status. */
export const ReplacementStatusInstacartConnectPostCheckoutReplacementsApi = {
  Approved: "APPROVED",
  Rejected: "REJECTED",
} as const;
export type ReplacementStatusInstacartConnectPostCheckoutReplacementsApi =
  | (typeof ReplacementStatusInstacartConnectPostCheckoutReplacementsApi)[keyof typeof ReplacementStatusInstacartConnectPostCheckoutReplacementsApi]
  | (string & {});

export const replacementStatusInstacartConnectPostCheckoutReplacementsApiSchema: EnumSchema<ReplacementStatusInstacartConnectPostCheckoutReplacementsApi> =
  s.enumOf<ReplacementStatusInstacartConnectPostCheckoutReplacementsApi>(
    ReplacementStatusInstacartConnectPostCheckoutReplacementsApi,
  );
