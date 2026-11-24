import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IpSecurityAsn = {
  asNumber?: string;
  organization?: string;
  country?: string;
  type?: string;
  domain?: string;
  dateAllocated?: string;
  rir?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ipSecurityAsnSchema: Schema<IpSecurityAsn> = s.object<IpSecurityAsn>(
  {
    asNumber: s.optional(s.string()),
    organization: s.optional(s.string()),
    country: s.optional(s.string()),
    type: s.optional(s.string()),
    domain: s.optional(s.string()),
    dateAllocated: s.optional(s.string()),
    rir: s.optional(s.string()),
    _keysMap: {
      asNumber: "as_number",
      dateAllocated: "date_allocated",
    },
  },
  { additionalProperties: s.json() },
);
