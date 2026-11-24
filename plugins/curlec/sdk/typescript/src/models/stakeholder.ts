import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addresses1Schema, type Addresses1 } from "./addresses1.js";
import {
  entityRazorpayLinkedAccountsApiSchema,
  type EntityRazorpayLinkedAccountsApi,
} from "./entity-razorpay-linked-accounts-api.js";
import { kycSchema, type Kyc } from "./kyc.js";
import { phoneSchema, type Phone } from "./phone.js";
import { relationshipSchema, type Relationship } from "./relationship.js";

/**
 * A business owner or director associated with a Linked Account. Only one stakeholder is allowed
 * per Route Linked Account. Prefix: sth_
 */
export type Stakeholder = {
  /** Stakeholder ID. Prefix: sth_ */
  id?: string;
  entity?: EntityRazorpayLinkedAccountsApi;
  /** Full name of the stakeholder. */
  name?: string;
  /** Email address. */
  email?: string;
  /** Ownership percentage (0-100). */
  percentageOwnership?: number;
  relationship?: Relationship;
  phone?: Phone;
  addresses?: Addresses1;
  kyc?: Kyc;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  createdAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const stakeholderProperties: s.Shape<Stakeholder> = {
  id: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entityRazorpayLinkedAccountsApiSchema)),
  name: s.optional(s.string()),
  email: s.optional(s.string()),
  percentageOwnership: s.optional(s.float64()),
  relationship: s.optional(s.lazy(() => relationshipSchema)),
  phone: s.optional(s.lazy(() => phoneSchema)),
  addresses: s.optional(s.lazy(() => addresses1Schema)),
  kyc: s.optional(s.lazy(() => kycSchema)),
  notes: s.optional(s.record(s.string(), s.string())),
  createdAt: s.optional(s.int()),
  _keysMap: {
    percentageOwnership: "percentage_ownership",
    createdAt: "created_at",
  },
};

export const stakeholderInternalSchema: Schema<Stakeholder> = s.object<Stakeholder>(stakeholderProperties, {
  additionalProperties: s.json(),
});

export const stakeholderSchema: Schema<Stakeholder> = s.lazySchema(() =>
  s.object<Stakeholder>(
    {
      ...stakeholderProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
