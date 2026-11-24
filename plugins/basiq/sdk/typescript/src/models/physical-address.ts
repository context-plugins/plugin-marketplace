import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  pafIdentityIdentitiesApiSchema,
  type PafIdentityIdentitiesApi,
} from "./paf-identity-identities-api.js";

export type PhysicalAddress = {
  /** Physical Address Type. */
  type?: string;
  /** AddressLine1. */
  addressLine1?: string;
  /** AddressLine2. */
  addressLine2?: string;
  /** AddressLine3. */
  addressLine3?: string;
  /** Postcode. */
  postcode?: string;
  /** City. */
  city?: string;
  /** State. */
  state?: string;
  /** Country. */
  country?: string;
  /** Country Code. */
  countryCode?: string;
  /** Formatted Address. */
  formattedAddress?: string;
  /** Postal Address File */
  paf?: PafIdentityIdentitiesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const physicalAddressSchema: Schema<PhysicalAddress> = s.object<PhysicalAddress>(
  {
    type: s.optional(s.string()),
    addressLine1: s.optional(s.string()),
    addressLine2: s.optional(s.string()),
    addressLine3: s.optional(s.string()),
    postcode: s.optional(s.string()),
    city: s.optional(s.string()),
    state: s.optional(s.string()),
    country: s.optional(s.string()),
    countryCode: s.optional(s.string()),
    formattedAddress: s.optional(s.string()),
    paf: s.optional(s.lazy(() => pafIdentityIdentitiesApiSchema)),
  },
  { additionalProperties: s.json() },
);
