import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Address = {
  address1?: string | null;
  address2?: string | null;
  city?: string | null;
  state?: string | null;
  zipcode?: string | null;
  country?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const addressProperties: s.Shape<Address> = {
  address1: s.optionalNullable(s.string()),
  address2: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  state: s.optionalNullable(s.string()),
  zipcode: s.optionalNullable(s.string()),
  country: s.optionalNullable(s.string()),
  _keysMap: {
    address1: "address_1",
    address2: "address_2",
  },
};

export const addressInternalSchema: Schema<Address> = s.object<Address>(addressProperties, {
  additionalProperties: s.json(),
});

export const addressSchema: Schema<Address> = s.lazySchema(() =>
  s.object<Address>(
    {
      ...addressProperties,
      address1: s.optionalNullable(s.string().check(s.maxLength(255))),
      address2: s.optionalNullable(s.string().check(s.maxLength(255))),
      city: s.optionalNullable(s.string().check(s.maxLength(255))),
      state: s.optionalNullable(s.string().check(s.maxLength(255))),
      zipcode: s.optionalNullable(s.string().check(s.maxLength(255))),
    },
    { additionalProperties: s.json() },
  ),
);
