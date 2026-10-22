import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Create a Verified Business customer (Sole Proprietorship) */
export type CreateVerifiedSolePropCustomer = {
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
  ssn: string;
  dateOfBirth: string;
  businessClassification: string;
  businessName: string;
  doingBusinessAs?: string;
  ein?: string;
  website?: string;
  /** @default "soleProprietorship" */
  businessType?: "soleProprietorship";
};

export const createVerifiedSolePropCustomerSchema: Schema<CreateVerifiedSolePropCustomer> =
  s.object<CreateVerifiedSolePropCustomer>({
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
    ssn: s.string(),
    dateOfBirth: s.string(),
    businessClassification: s.string(),
    businessName: s.string(),
    doingBusinessAs: s.optional(s.string()),
    ein: s.optional(s.string()),
    website: s.optional(s.string()),
    businessType: s.defaulted(s.literal("soleProprietorship"), "soleProprietorship"),
  });
