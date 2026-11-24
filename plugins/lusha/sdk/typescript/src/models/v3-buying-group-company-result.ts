import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  v3BuyingGroupContactInternalSchema,
  v3BuyingGroupContactSchema,
  type V3BuyingGroupContact,
} from "./v3-buying-group-contact.js";
import { v3ItemErrorSchema, type V3ItemError } from "./v3-item-error.js";

export type V3BuyingGroupCompanyResult = {
  clientReferenceId?: string;
  companyId?: string;
  contacts?: V3BuyingGroupContact[];
  /** Per-item error in a batch response */
  error?: V3ItemError;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3BuyingGroupCompanyResultProperties: s.Shape<V3BuyingGroupCompanyResult> = {
  clientReferenceId: s.optional(s.string()),
  companyId: s.optional(s.string()),
  contacts: s.optional(s.array(s.lazy(() => v3BuyingGroupContactInternalSchema))),
  error: s.optional(s.lazy(() => v3ItemErrorSchema)),
};

export const v3BuyingGroupCompanyResultInternalSchema: Schema<V3BuyingGroupCompanyResult> =
  s.object<V3BuyingGroupCompanyResult>(v3BuyingGroupCompanyResultProperties, {
    additionalProperties: s.json(),
  });

export const v3BuyingGroupCompanyResultSchema: Schema<V3BuyingGroupCompanyResult> = s.lazySchema(() =>
  s.object<V3BuyingGroupCompanyResult>(
    {
      ...v3BuyingGroupCompanyResultProperties,
      contacts: s.optional(s.array(s.lazy(() => v3BuyingGroupContactSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
