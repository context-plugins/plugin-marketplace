import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { controller3Schema, type Controller3 } from "./controller3.js";

/** Upgrade Unverified Customer to Verified Business Customer */
export type UpgradeToVerifiedBusiness = {
  firstName: string;
  lastName: string;
  email: string;
  ipAddress?: string;
  type: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  controller: Controller3;
  businessClassification: string;
  businessType: string;
  businessName: string;
  ein: string;
};

export const upgradeToVerifiedBusinessSchema: Schema<UpgradeToVerifiedBusiness> =
  s.object<UpgradeToVerifiedBusiness>({
    firstName: s.string(),
    lastName: s.string(),
    email: s.string(),
    ipAddress: s.optional(s.string()),
    type: s.string(),
    address1: s.string(),
    city: s.string(),
    state: s.string(),
    postalCode: s.string(),
    controller: controller3Schema,
    businessClassification: s.string(),
    businessType: s.string(),
    businessName: s.string(),
    ein: s.string(),
  });
