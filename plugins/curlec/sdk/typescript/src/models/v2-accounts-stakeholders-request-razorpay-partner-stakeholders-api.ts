import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { kyc1Schema, type Kyc1 } from "./kyc1.js";
import {
  relationshipRazorpayPartnerStakeholdersApiSchema,
  type RelationshipRazorpayPartnerStakeholdersApi,
} from "./relationship-razorpay-partner-stakeholders-api.js";

export type V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi = {
  name: string;
  email: string;
  percentageOwnership?: number;
  relationship?: RelationshipRazorpayPartnerStakeholdersApi;
  phone?: Record<string, unknown>;
  addresses?: Record<string, unknown>;
  kyc?: Kyc1;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApiProperties: s.Shape<V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi> =
  {
    name: s.string(),
    email: s.string(),
    percentageOwnership: s.optional(s.float64()),
    relationship: s.optional(s.lazy(() => relationshipRazorpayPartnerStakeholdersApiSchema)),
    phone: s.optional(s.record(s.string(), s.unknown())),
    addresses: s.optional(s.record(s.string(), s.unknown())),
    kyc: s.optional(s.lazy(() => kyc1Schema)),
    notes: s.optional(s.record(s.string(), s.string())),
    _keysMap: {
      percentageOwnership: "percentage_ownership",
    },
  };

export const v2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApiInternalSchema: Schema<V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi> =
  s.object<V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi>(
    v2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApiProperties,
    { additionalProperties: s.json() },
  );

export const v2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApiSchema: Schema<V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi> =
  s.lazySchema(() =>
    s.object<V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi>(
      {
        ...v2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApiProperties,
        notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
      },
      { additionalProperties: s.json() },
    ),
  );
