import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addressTypeSchema, type AddressType } from "./address-type.js";
import { simpleSchema, type Simple } from "./simple.js";

export type Address = {
  /** The type of address object present. */
  addressType?: AddressType;
  simple?: Simple;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const addressSchema: Schema<Address> = s.object<Address>(
  {
    addressType: s.optional(s.lazy(() => addressTypeSchema)),
    simple: s.optional(s.lazy(() => simpleSchema)),
  },
  { additionalProperties: s.json() },
);
