import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AppHttpResourcesApiAddressResource = {
  address1: string;
  address2: string | null;
  city: string;
  state: string | null;
  zipcode: string | null;
  country: string;
  type: string;
  isPrimary: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const appHttpResourcesApiAddressResourceSchema: Schema<AppHttpResourcesApiAddressResource> =
  s.object<AppHttpResourcesApiAddressResource>(
    {
      address1: s.string(),
      address2: s.nullable(s.string()),
      city: s.string(),
      state: s.nullable(s.string()),
      zipcode: s.nullable(s.string()),
      country: s.string(),
      type: s.string(),
      isPrimary: s.boolean(),
      createdAt: s.nullable(s.dateTime()),
      updatedAt: s.nullable(s.dateTime()),
      _keysMap: {
        address1: "address_1",
        address2: "address_2",
        isPrimary: "is_primary",
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    },
    { additionalProperties: s.json() },
  );
