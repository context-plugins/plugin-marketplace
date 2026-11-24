import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { v3BillingSchema, type V3Billing } from "./v3-billing.js";
import {
  v3SearchAndEnrichContactResultInternalSchema,
  v3SearchAndEnrichContactResultSchema,
  type V3SearchAndEnrichContactResult,
} from "./v3-search-and-enrich-contact-result.js";

export type V3ContactsSearchAndEnrichResponse = {
  requestId?: string;
  results?: V3SearchAndEnrichContactResult[];
  /** Credit usage summary for a V3 API request */
  billing?: V3Billing;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3ContactsSearchAndEnrichResponseProperties: s.Shape<V3ContactsSearchAndEnrichResponse> = {
  requestId: s.optional(s.string()),
  results: s.optional(s.array(s.lazy(() => v3SearchAndEnrichContactResultInternalSchema))),
  billing: s.optional(s.lazy(() => v3BillingSchema)),
};

export const v3ContactsSearchAndEnrichResponseInternalSchema: Schema<V3ContactsSearchAndEnrichResponse> =
  s.object<V3ContactsSearchAndEnrichResponse>(v3ContactsSearchAndEnrichResponseProperties, {
    additionalProperties: s.json(),
  });

export const v3ContactsSearchAndEnrichResponseSchema: Schema<V3ContactsSearchAndEnrichResponse> =
  s.lazySchema(() =>
    s.object<V3ContactsSearchAndEnrichResponse>(
      {
        ...v3ContactsSearchAndEnrichResponseProperties,
        results: s.optional(s.array(s.lazy(() => v3SearchAndEnrichContactResultSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
