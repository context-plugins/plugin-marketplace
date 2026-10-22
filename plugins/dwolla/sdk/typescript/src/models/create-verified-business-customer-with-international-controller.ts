import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessTypeSchema, type BusinessType } from "./business-type.js";
import { controller2Schema, type Controller2 } from "./controller2.js";

/** Create a Verified Business customer with an international (non US) controller */
export type CreateVerifiedBusinessCustomerWithInternationalController = {
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
  controller: Controller2;
  businessType: BusinessType;
};

export const createVerifiedBusinessCustomerWithInternationalControllerSchema: Schema<CreateVerifiedBusinessCustomerWithInternationalController> =
  s.object<CreateVerifiedBusinessCustomerWithInternationalController>({
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
    controller: controller2Schema,
    businessType: businessTypeSchema,
  });
