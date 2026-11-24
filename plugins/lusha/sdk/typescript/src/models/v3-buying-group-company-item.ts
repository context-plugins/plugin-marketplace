import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Identifies one target company. Provide exactly one of domain or id. */
export type V3BuyingGroupCompanyItem = {
  /** Optional caller-supplied token, echoed back on the matching result. */
  clientReferenceId?: string;
  domain?: string;
  /** Lusha company ID. */
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3BuyingGroupCompanyItemSchema: Schema<V3BuyingGroupCompanyItem> =
  s.object<V3BuyingGroupCompanyItem>(
    {
      clientReferenceId: s.optional(s.string()),
      domain: s.optional(s.string()),
      id: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
