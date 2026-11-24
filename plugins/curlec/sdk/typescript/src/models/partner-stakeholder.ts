import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  addressesRazorpayPartnerStakeholdersApiSchema,
  type AddressesRazorpayPartnerStakeholdersApi,
} from "./addresses-razorpay-partner-stakeholders-api.js";
import {
  entityRazorpayLinkedAccountsApiSchema,
  type EntityRazorpayLinkedAccountsApi,
} from "./entity-razorpay-linked-accounts-api.js";
import {
  kycRazorpayPartnerStakeholdersApiSchema,
  type KycRazorpayPartnerStakeholdersApi,
} from "./kyc-razorpay-partner-stakeholders-api.js";
import {
  phoneRazorpayPartnerStakeholdersApiSchema,
  type PhoneRazorpayPartnerStakeholdersApi,
} from "./phone-razorpay-partner-stakeholders-api.js";
import {
  relationshipRazorpayPartnerStakeholdersApiSchema,
  type RelationshipRazorpayPartnerStakeholdersApi,
} from "./relationship-razorpay-partner-stakeholders-api.js";

/**
 * A stakeholder (director/executive) associated with a sub-merchant account. Multiple stakeholders
 * allowed per account (unlike Route which allows only 1).
 */
export type PartnerStakeholder = {
  /** Stakeholder ID with prefix sth_ */
  id?: string;
  entity?: EntityRazorpayLinkedAccountsApi;
  name?: string;
  email?: string;
  percentageOwnership?: number;
  relationship?: RelationshipRazorpayPartnerStakeholdersApi;
  phone?: PhoneRazorpayPartnerStakeholdersApi;
  addresses?: AddressesRazorpayPartnerStakeholdersApi;
  kyc?: KycRazorpayPartnerStakeholdersApi;
  notes?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const partnerStakeholderSchema: Schema<PartnerStakeholder> = s.object<PartnerStakeholder>(
  {
    id: s.optional(s.string()),
    entity: s.optional(s.lazy(() => entityRazorpayLinkedAccountsApiSchema)),
    name: s.optional(s.string()),
    email: s.optional(s.string()),
    percentageOwnership: s.optional(s.float64()),
    relationship: s.optional(s.lazy(() => relationshipRazorpayPartnerStakeholdersApiSchema)),
    phone: s.optional(s.lazy(() => phoneRazorpayPartnerStakeholdersApiSchema)),
    addresses: s.optional(s.lazy(() => addressesRazorpayPartnerStakeholdersApiSchema)),
    kyc: s.optional(s.lazy(() => kycRazorpayPartnerStakeholdersApiSchema)),
    notes: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      percentageOwnership: "percentage_ownership",
    },
  },
  { additionalProperties: s.json() },
);
