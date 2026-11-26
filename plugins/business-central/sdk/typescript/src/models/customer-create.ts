import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { blocked1Schema, type Blocked1 } from "./blocked1.js";
import { type1Schema, type Type1 } from "./type1.js";

export type CustomerCreate = {
  number?: string;
  displayName: string;
  type?: Type1;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  phoneNumber?: string;
  email?: string;
  website?: string;
  taxLiable?: boolean;
  taxRegistrationNumber?: string;
  currencyCode?: string;
  blocked?: Blocked1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const customerCreateProperties: s.Shape<CustomerCreate> = {
  number: s.optional(s.string()),
  displayName: s.string(),
  type: s.optional(s.lazy(() => type1Schema)),
  addressLine1: s.optional(s.string()),
  addressLine2: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  country: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  phoneNumber: s.optional(s.string()),
  email: s.optional(s.string()),
  website: s.optional(s.string()),
  taxLiable: s.optional(s.boolean()),
  taxRegistrationNumber: s.optional(s.string()),
  currencyCode: s.optional(s.string()),
  blocked: s.optional(s.lazy(() => blocked1Schema)),
};

export const customerCreateInternalSchema: Schema<CustomerCreate> = s.object<CustomerCreate>(
  customerCreateProperties,
  { additionalProperties: s.json() },
);

export const customerCreateSchema: Schema<CustomerCreate> = s.lazySchema(() =>
  s.object<CustomerCreate>(
    {
      ...customerCreateProperties,
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
