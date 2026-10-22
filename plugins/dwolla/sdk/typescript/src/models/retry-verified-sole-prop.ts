import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Retry Verification for Verified Business Customer (Sole Proprietorship) */
export type RetryVerifiedSoleProp = {
  firstName: string;
  lastName: string;
  email: string;
  ipAddress?: string;
  type: string;
  dateOfBirth: string;
  ssn: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  businessClassification: string;
  businessType: string;
  businessName: string;
  ein: string;
};

export const retryVerifiedSolePropSchema: Schema<RetryVerifiedSoleProp> = s.object<RetryVerifiedSoleProp>({
  firstName: s.string(),
  lastName: s.string(),
  email: s.string(),
  ipAddress: s.optional(s.string()),
  type: s.string(),
  dateOfBirth: s.string(),
  ssn: s.string(),
  address1: s.string(),
  city: s.string(),
  state: s.string(),
  postalCode: s.string(),
  businessClassification: s.string(),
  businessType: s.string(),
  businessName: s.string(),
  ein: s.string(),
});
