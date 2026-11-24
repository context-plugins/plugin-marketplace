import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the certificate update. The following are valid values: PENDING_DOMAIN_VALIDATION –
 * The certificate update is waiting for domain ownership validation to complete. SUCCESS – The
 * certificate was updated successfully. FAILED – The certificate update failed.
 */
export const Status3 = {
  PendingDomainValidation: "PENDING_DOMAIN_VALIDATION",
  Success: "SUCCESS",
  Failed: "FAILED",
} as const;
export type Status3 = (typeof Status3)[keyof typeof Status3] | (string & {});

export const status3Schema: EnumSchema<Status3> = s.enumOf<Status3>(Status3);
