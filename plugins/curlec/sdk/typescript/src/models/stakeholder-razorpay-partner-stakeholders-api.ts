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
  kyc1RazorpayPartnerStakeholdersApiSchema,
  type Kyc1RazorpayPartnerStakeholdersApi,
} from "./kyc1-razorpay-partner-stakeholders-api.js";
import { phoneSchema, type Phone } from "./phone.js";
import {
  relationship1RazorpayPartnerStakeholdersApiSchema,
  type Relationship1RazorpayPartnerStakeholdersApi,
} from "./relationship1-razorpay-partner-stakeholders-api.js";

/**
 * A business owner or director associated with a Linked Account. Only one stakeholder is allowed
 * per Route Linked Account. Prefix: sth_
 */
export type StakeholderRazorpayPartnerStakeholdersApi = {
  /** Stakeholder ID. Prefix: sth_ */
  id?: string;
  entity?: EntityRazorpayLinkedAccountsApi;
  /** Full name of the stakeholder. */
  name?: string;
  /** Email address. */
  email?: string;
  /** Ownership percentage (0-100). */
  percentageOwnership?: number;
  relationship?: Relationship1RazorpayPartnerStakeholdersApi;
  phone?: Phone;
  addresses?: AddressesRazorpayPartnerStakeholdersApi;
  kyc?: Kyc1RazorpayPartnerStakeholdersApi;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  createdAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const stakeholderRazorpayPartnerStakeholdersApiProperties: s.Shape<StakeholderRazorpayPartnerStakeholdersApi> =
  {
    id: s.optional(s.string()),
    entity: s.optional(s.lazy(() => entityRazorpayLinkedAccountsApiSchema)),
    name: s.optional(s.string()),
    email: s.optional(s.string()),
    percentageOwnership: s.optional(s.float64()),
    relationship: s.optional(s.lazy(() => relationship1RazorpayPartnerStakeholdersApiSchema)),
    phone: s.optional(s.lazy(() => phoneSchema)),
    addresses: s.optional(s.lazy(() => addressesRazorpayPartnerStakeholdersApiSchema)),
    kyc: s.optional(s.lazy(() => kyc1RazorpayPartnerStakeholdersApiSchema)),
    notes: s.optional(s.record(s.string(), s.string())),
    createdAt: s.optional(s.int()),
    _keysMap: {
      percentageOwnership: "percentage_ownership",
      createdAt: "created_at",
    },
  };

export const stakeholderRazorpayPartnerStakeholdersApiInternalSchema: Schema<StakeholderRazorpayPartnerStakeholdersApi> =
  s.object<StakeholderRazorpayPartnerStakeholdersApi>(stakeholderRazorpayPartnerStakeholdersApiProperties, {
    additionalProperties: s.json(),
  });

export const stakeholderRazorpayPartnerStakeholdersApiSchema: Schema<StakeholderRazorpayPartnerStakeholdersApi> =
  s.lazySchema(() =>
    s.object<StakeholderRazorpayPartnerStakeholdersApi>(
      {
        ...stakeholderRazorpayPartnerStakeholdersApiProperties,
        notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
      },
      { additionalProperties: s.json() },
    ),
  );
