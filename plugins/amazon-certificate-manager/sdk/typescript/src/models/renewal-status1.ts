import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Filter by certificate renewal status. */
export const RenewalStatus1 = {
  PendingAutoRenewal: "PENDING_AUTO_RENEWAL",
  PendingValidation: "PENDING_VALIDATION",
  Success: "SUCCESS",
  Failed: "FAILED",
} as const;
export type RenewalStatus1 = (typeof RenewalStatus1)[keyof typeof RenewalStatus1] | (string & {});

export const renewalStatus1Schema: EnumSchema<RenewalStatus1> = s.enumOf<RenewalStatus1>(RenewalStatus1);
