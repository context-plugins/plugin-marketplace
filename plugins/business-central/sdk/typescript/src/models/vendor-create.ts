import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  blockedDynamics365BusinessCentralApiV20VendorsApiSchema,
  type BlockedDynamics365BusinessCentralApiV20VendorsApi,
} from "./blocked-dynamics365-business-central-api-v20-vendors-api.js";

export type VendorCreate = {
  number?: string;
  displayName: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  phoneNumber?: string;
  email?: string;
  website?: string;
  taxRegistrationNumber?: string;
  currencyCode?: string;
  taxLiable?: boolean;
  blocked?: BlockedDynamics365BusinessCentralApiV20VendorsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const vendorCreateProperties: s.Shape<VendorCreate> = {
  number: s.optional(s.string()),
  displayName: s.string(),
  addressLine1: s.optional(s.string()),
  addressLine2: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  country: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  phoneNumber: s.optional(s.string()),
  email: s.optional(s.string()),
  website: s.optional(s.string()),
  taxRegistrationNumber: s.optional(s.string()),
  currencyCode: s.optional(s.string()),
  taxLiable: s.optional(s.boolean()),
  blocked: s.optional(s.lazy(() => blockedDynamics365BusinessCentralApiV20VendorsApiSchema)),
};

export const vendorCreateInternalSchema: Schema<VendorCreate> = s.object<VendorCreate>(
  vendorCreateProperties,
  { additionalProperties: s.json() },
);

export const vendorCreateSchema: Schema<VendorCreate> = s.lazySchema(() =>
  s.object<VendorCreate>(
    {
      ...vendorCreateProperties,
      number: s.optional(s.string().check(s.maxLength(20))),
      displayName: s.string().check(s.maxLength(100)),
      addressLine1: s.optional(s.string().check(s.maxLength(100))),
      addressLine2: s.optional(s.string().check(s.maxLength(50))),
      city: s.optional(s.string().check(s.maxLength(30))),
      state: s.optional(s.string().check(s.maxLength(20))),
      country: s.optional(s.string().check(s.maxLength(10))),
      postalCode: s.optional(s.string().check(s.maxLength(20))),
      phoneNumber: s.optional(s.string().check(s.maxLength(30))),
      email: s.optional(s.string().check(s.maxLength(80))),
      website: s.optional(s.string().check(s.maxLength(80))),
      taxRegistrationNumber: s.optional(s.string().check(s.maxLength(20))),
      currencyCode: s.optional(s.string().check(s.maxLength(10))),
    },
    { additionalProperties: s.json() },
  ),
);
