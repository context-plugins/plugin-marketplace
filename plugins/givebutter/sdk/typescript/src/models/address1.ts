import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Address1 = {
  id?: number;
  address1?: string | null;
  address2?: string | null;
  city?: string | null;
  state?: string | null;
  zipcode?: string | null;
  country?: string | null;
  isPrimary?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const address1Properties: s.Shape<Address1> = {
  id: s.optional(s.int()),
  address1: s.optionalNullable(s.string()),
  address2: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  state: s.optionalNullable(s.string()),
  zipcode: s.optionalNullable(s.string()),
  country: s.optionalNullable(s.string()),
  isPrimary: s.optional(s.boolean()),
  _keysMap: {
    address1: "address_1",
    address2: "address_2",
    isPrimary: "is_primary",
  },
};

export const address1InternalSchema: Schema<Address1> = s.object<Address1>(address1Properties, {
  additionalProperties: s.json(),
});

export const address1Schema: Schema<Address1> = s.lazySchema(() =>
  s.object<Address1>(
    {
      ...address1Properties,
      address1: s.optionalNullable(s.string().check(s.maxLength(255))),
      address2: s.optionalNullable(s.string().check(s.maxLength(255))),
      city: s.optionalNullable(s.string().check(s.maxLength(255))),
      state: s.optionalNullable(s.string().check(s.maxLength(255))),
      zipcode: s.optionalNullable(s.string().check(s.maxLength(255))),
      country: s.optionalNullable(s.string().check(s.maxLength(255))),
    },
    { additionalProperties: s.json() },
  ),
);
