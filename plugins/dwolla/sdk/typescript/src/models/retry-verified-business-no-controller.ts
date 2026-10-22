import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Retry Verification for Verified Business Customer where only Business Details need to be retried
 */
export type RetryVerifiedBusinessNoController = {
  firstName: string;
  lastName: string;
  email: string;
  ipAddress?: string;
  type: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  businessClassification: string;
  businessType: string;
  businessName: string;
  ein: string;
};

export const retryVerifiedBusinessNoControllerSchema: Schema<RetryVerifiedBusinessNoController> =
  s.object<RetryVerifiedBusinessNoController>({
    firstName: s.string(),
    lastName: s.string(),
    email: s.string(),
    ipAddress: s.optional(s.string()),
    type: s.string(),
    address1: s.string(),
    city: s.string(),
    state: s.string(),
    postalCode: s.string(),
    businessClassification: s.string(),
    businessType: s.string(),
    businessName: s.string(),
    ein: s.string(),
  });
