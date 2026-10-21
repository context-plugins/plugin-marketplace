import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { controller4Schema, type Controller4 } from "./controller4.js";

/**
 * Retry Verification for Verified Business Customer where Business Details as well as Controller
 * Details need to be retried
 */
export type RetryVerifiedBusinessWithController = {
  firstName: string;
  lastName: string;
  email: string;
  ipAddress?: string;
  type: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  controller: Controller4;
  businessClassification: string;
  businessType: string;
  businessName: string;
  ein: string;
};

export const retryVerifiedBusinessWithControllerSchema: Schema<RetryVerifiedBusinessWithController> =
  s.object<RetryVerifiedBusinessWithController>({
    firstName: s.string(),
    lastName: s.string(),
    email: s.string(),
    ipAddress: s.optional(s.string()),
    type: s.string(),
    address1: s.string(),
    city: s.string(),
    state: s.string(),
    postalCode: s.string(),
    controller: controller4Schema,
    businessClassification: s.string(),
    businessType: s.string(),
    businessName: s.string(),
    ein: s.string(),
  });
