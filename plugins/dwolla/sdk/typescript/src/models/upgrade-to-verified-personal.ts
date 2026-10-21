import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Upgrade Unverified Customer to Verified Personal Customer */
export type UpgradeToVerifiedPersonal = {
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

export const upgradeToVerifiedPersonalSchema: Schema<UpgradeToVerifiedPersonal> =
  s.object<UpgradeToVerifiedPersonal>({
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
