import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { businessType1Schema, type BusinessType1 } from "./business-type1.js";
import { legalInfo1Schema, type LegalInfo1 } from "./legal-info1.js";
import { profile1Schema, type Profile1 } from "./profile1.js";

export type V2AccountsRequest = {
  /** Contact email. Cannot be changed after creation. */
  email: string;
  /** Phone number with country code. */
  phone?: string;
  legalBusinessName?: string;
  /** Cannot be changed after creation. */
  businessType?: BusinessType1;
  /** @default "route" */
  type?: "route";
  profile: Profile1;
  legalInfo?: LegalInfo1;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v2AccountsRequestProperties: s.Shape<V2AccountsRequest> = {
  email: s.string(),
  phone: s.optional(s.string()),
  legalBusinessName: s.optional(s.string()),
  businessType: s.optional(s.lazy(() => businessType1Schema)),
  type: s.defaulted(s.literal("route"), "route"),
  profile: profile1Schema,
  legalInfo: s.optional(s.lazy(() => legalInfo1Schema)),
  notes: s.optional(s.record(s.string(), s.string())),
  _keysMap: {
    legalBusinessName: "legal_business_name",
    businessType: "business_type",
    legalInfo: "legal_info",
  },
};

export const v2AccountsRequestInternalSchema: Schema<V2AccountsRequest> = s.object<V2AccountsRequest>(
  v2AccountsRequestProperties,
  { additionalProperties: s.json() },
);

export const v2AccountsRequestSchema: Schema<V2AccountsRequest> = s.lazySchema(() =>
  s.object<V2AccountsRequest>(
    {
      ...v2AccountsRequestProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
