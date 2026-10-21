import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Retry Verification for Verified Personal Customer */
export type RetryVerifiedPersonal = {
  firstName: string;
  lastName: string;
  email: string;
  ipAddress?: string;
  type: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
};

export const retryVerifiedPersonalSchema: Schema<RetryVerifiedPersonal> = s.object<RetryVerifiedPersonal>({
  firstName: s.string(),
  lastName: s.string(),
  email: s.string(),
  ipAddress: s.optional(s.string()),
  type: s.string(),
  address1: s.string(),
  city: s.string(),
  state: s.string(),
  postalCode: s.string(),
  dateOfBirth: s.string(),
  ssn: s.string(),
});
