import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessTypeSchema, type BusinessType } from "./business-type.js";
import { controller1Schema, type Controller1 } from "./controller1.js";

/** Create a Verified Business customer with a US controller */
export type CreateVerifiedBusinessCustomerWithController = {
  firstName: string;
  lastName: string;
  email: string;
  ipAddress?: string;
  phone?: string;
  correlationId?: string;
  /** @default "business" */
  type?: "business";
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: string;
  businessClassification: string;
  businessName: string;
  doingBusinessAs?: string;
  ein: string;
  website?: string;
  controller: Controller1;
  businessType: BusinessType;
};

export const createVerifiedBusinessCustomerWithControllerSchema: Schema<CreateVerifiedBusinessCustomerWithController> =
  s.object<CreateVerifiedBusinessCustomerWithController>({
    firstName: s.string(),
    lastName: s.string(),
    email: s.string(),
    ipAddress: s.optional(s.string()),
    phone: s.optional(s.string()),
    correlationId: s.optional(s.string()),
    type: s.defaulted(s.literal("business"), "business"),
    address1: s.string(),
    address2: s.optional(s.string()),
    city: s.string(),
    state: s.string(),
    postalCode: s.string(),
    businessClassification: s.string(),
    businessName: s.string(),
    doingBusinessAs: s.optional(s.string()),
    ein: s.string(),
    website: s.optional(s.string()),
    controller: controller1Schema,
    businessType: businessTypeSchema,
  });
