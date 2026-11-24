import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { appsSchema, type Apps } from "./apps.js";
import {
  businessTypeRazorpayLinkedAccountsApiSchema,
  type BusinessTypeRazorpayLinkedAccountsApi,
} from "./business-type-razorpay-linked-accounts-api.js";
import { contactInfoSchema, type ContactInfo } from "./contact-info.js";
import { legalInfoSchema, type LegalInfo } from "./legal-info.js";
import { profileSchema, type Profile } from "./profile.js";
import {
  statusRazorpayLinkedAccountsApiSchema,
  type StatusRazorpayLinkedAccountsApi,
} from "./status-razorpay-linked-accounts-api.js";
import {
  typeRazorpayLinkedAccountsApiSchema,
  type TypeRazorpayLinkedAccountsApi,
} from "./type-razorpay-linked-accounts-api.js";

/**
 * A sub-merchant (Linked Account) created under a Route marketplace account. Linked Accounts can
 * receive transfers and settlements. Prefix: acc_
 */
export type LinkedAccount = {
  /** Account ID. Prefix: acc_ */
  id?: string;
  /** Account type. Always 'route' for Route marketplace accounts. */
  type?: TypeRazorpayLinkedAccountsApi;
  /** Account status. */
  status?: StatusRazorpayLinkedAccountsApi;
  /** Contact email. Cannot be updated after creation. */
  email?: string;
  /** Contact phone number with country code (e.g., +919876543210). */
  phone?: string;
  /** Registered legal name of the business. */
  legalBusinessName?: string;
  /** Business type. Cannot be updated after creation. */
  businessType?: BusinessTypeRazorpayLinkedAccountsApi;
  profile?: Profile;
  legalInfo?: LegalInfo;
  /** Name of the primary contact person. */
  contactName?: string;
  contactInfo?: ContactInfo;
  apps?: Apps;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  createdAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const linkedAccountProperties: s.Shape<LinkedAccount> = {
  id: s.optional(s.string()),
  type: s.optional(s.lazy(() => typeRazorpayLinkedAccountsApiSchema)),
  status: s.optional(s.lazy(() => statusRazorpayLinkedAccountsApiSchema)),
  email: s.optional(s.string()),
  phone: s.optional(s.string()),
  legalBusinessName: s.optional(s.string()),
  businessType: s.optional(s.lazy(() => businessTypeRazorpayLinkedAccountsApiSchema)),
  profile: s.optional(s.lazy(() => profileSchema)),
  legalInfo: s.optional(s.lazy(() => legalInfoSchema)),
  contactName: s.optional(s.string()),
  contactInfo: s.optional(s.lazy(() => contactInfoSchema)),
  apps: s.optional(s.lazy(() => appsSchema)),
  notes: s.optional(s.record(s.string(), s.string())),
  createdAt: s.optional(s.int()),
  _keysMap: {
    legalBusinessName: "legal_business_name",
    businessType: "business_type",
    legalInfo: "legal_info",
    contactName: "contact_name",
    contactInfo: "contact_info",
    createdAt: "created_at",
  },
};

export const linkedAccountInternalSchema: Schema<LinkedAccount> = s.object<LinkedAccount>(
  linkedAccountProperties,
  { additionalProperties: s.json() },
);

export const linkedAccountSchema: Schema<LinkedAccount> = s.lazySchema(() =>
  s.object<LinkedAccount>(
    {
      ...linkedAccountProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
