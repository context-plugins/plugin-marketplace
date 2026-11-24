import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** User physical addresses holding the connection. */
export type PhysicalAddresses = {
  /** User address. */
  addressLine1: string;
  /** Always "null" */
  addressLine2: string | null;
  /** Always "null" */
  addressLine3: string | null;
  /** City */
  city: string;
  country?: string;
  /** Country code */
  countryCode: string;
  /** Address formatted. */
  formattedAddress: string;
  /** Post code */
  postcode: string;
  /** State */
  state: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const physicalAddressesSchema: Schema<PhysicalAddresses> = s.object<PhysicalAddresses>(
  {
    addressLine1: s.string(),
    addressLine2: s.nullable(s.string()),
    addressLine3: s.nullable(s.string()),
    city: s.string(),
    country: s.optional(s.string()),
    countryCode: s.string(),
    formattedAddress: s.string(),
    postcode: s.string(),
    state: s.string(),
  },
  { additionalProperties: s.json() },
);
