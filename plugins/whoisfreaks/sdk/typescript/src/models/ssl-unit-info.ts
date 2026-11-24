import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SslUnitInfo = {
  commonName?: string;
  organization?: string;
  organizationalUnit?: string;
  locality?: string;
  state?: string;
  country?: string;
  incCountry?: string;
  incState?: string;
  businessCategory?: string;
  street?: string;
  postalCode?: string;
  serialNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sslUnitInfoSchema: Schema<SslUnitInfo> = s.object<SslUnitInfo>(
  {
    commonName: s.optional(s.string()),
    organization: s.optional(s.string()),
    organizationalUnit: s.optional(s.string()),
    locality: s.optional(s.string()),
    state: s.optional(s.string()),
    country: s.optional(s.string()),
    incCountry: s.optional(s.string()),
    incState: s.optional(s.string()),
    businessCategory: s.optional(s.string()),
    street: s.optional(s.string()),
    postalCode: s.optional(s.string()),
    serialNumber: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
