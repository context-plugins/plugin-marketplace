import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V2AccountsRequest1 = {
  phone?: string;
  legalBusinessName?: string;
  profile?: Record<string, unknown>;
  legalInfo?: Record<string, unknown>;
  contactName?: string;
  contactInfo?: Record<string, unknown>;
  apps?: Record<string, unknown>;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v2AccountsRequest1Properties: s.Shape<V2AccountsRequest1> = {
  phone: s.optional(s.string()),
  legalBusinessName: s.optional(s.string()),
  profile: s.optional(s.record(s.string(), s.unknown())),
  legalInfo: s.optional(s.record(s.string(), s.unknown())),
  contactName: s.optional(s.string()),
  contactInfo: s.optional(s.record(s.string(), s.unknown())),
  apps: s.optional(s.record(s.string(), s.unknown())),
  notes: s.optional(s.record(s.string(), s.string())),
  _keysMap: {
    legalBusinessName: "legal_business_name",
    legalInfo: "legal_info",
    contactName: "contact_name",
    contactInfo: "contact_info",
  },
};

export const v2AccountsRequest1InternalSchema: Schema<V2AccountsRequest1> = s.object<V2AccountsRequest1>(
  v2AccountsRequest1Properties,
  { additionalProperties: s.json() },
);

export const v2AccountsRequest1Schema: Schema<V2AccountsRequest1> = s.lazySchema(() =>
  s.object<V2AccountsRequest1>(
    {
      ...v2AccountsRequest1Properties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
