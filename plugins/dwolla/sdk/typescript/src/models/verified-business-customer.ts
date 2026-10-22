import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessTypeSchema, type BusinessType } from "./business-type.js";
import { controllerSchema, type Controller } from "./controller.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";
import { status3Schema, type Status3 } from "./status3.js";

/**
 * Verified business customer (LLC, Corporation, Partnership) - distinguished from
 * VerifiedSolePropCustomer by presence of a controller object
 */
export type VerifiedBusinessCustomer = {
  links: Record<string, HalLink>;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  correlationId?: string;
  created: Date;
  /** @default "business" */
  type?: "business";
  status: Status3;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: string;
  phone?: string;
  website?: string;
  businessName: string;
  doingBusinessAs?: string;
  businessType: BusinessType;
  businessClassification: string;
  controller: Controller;
};

export const verifiedBusinessCustomerSchema: Schema<VerifiedBusinessCustomer> =
  s.object<VerifiedBusinessCustomer>({
    links: s.record(
      s.string(),
      s.lazy(() => halLinkSchema),
    ),
    id: s.string(),
    firstName: s.string(),
    lastName: s.string(),
    email: s.string(),
    correlationId: s.optional(s.string()),
    created: s.dateTime(),
    type: s.defaulted(s.literal("business"), "business"),
    status: status3Schema,
    address1: s.string(),
    address2: s.optional(s.string()),
    city: s.string(),
    state: s.string(),
    postalCode: s.string(),
    phone: s.optional(s.string()),
    website: s.optional(s.string()),
    businessName: s.string(),
    doingBusinessAs: s.optional(s.string()),
    businessType: businessTypeSchema,
    businessClassification: s.string(),
    controller: controllerSchema,
    _keysMap: {
      links: "_links",
    },
  });
