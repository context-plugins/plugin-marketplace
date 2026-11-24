import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tableWriteSchema, type TableWrite } from "./table-write.js";
import { v3BillingSchema, type V3Billing } from "./v3-billing.js";
import {
  v3EnrichedContactInternalSchema,
  v3EnrichedContactSchema,
  type V3EnrichedContact,
} from "./v3-enriched-contact.js";

export type V3ContactsEnrichResponse = {
  requestId?: string;
  results?: V3EnrichedContact[];
  /**
   * Added to a Prospecting, Enrich, Signals, or Lookalike response when `tableId` is passed on the
   * request. The primary response is unaffected even if the table write fails.
   */
  tableWrite?: TableWrite;
  /** Credit usage summary for a V3 API request */
  billing?: V3Billing;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3ContactsEnrichResponseProperties: s.Shape<V3ContactsEnrichResponse> = {
  requestId: s.optional(s.string()),
  results: s.optional(s.array(s.lazy(() => v3EnrichedContactInternalSchema))),
  tableWrite: s.optional(s.lazy(() => tableWriteSchema)),
  billing: s.optional(s.lazy(() => v3BillingSchema)),
};

export const v3ContactsEnrichResponseInternalSchema: Schema<V3ContactsEnrichResponse> =
  s.object<V3ContactsEnrichResponse>(v3ContactsEnrichResponseProperties, { additionalProperties: s.json() });

export const v3ContactsEnrichResponseSchema: Schema<V3ContactsEnrichResponse> = s.lazySchema(() =>
  s.object<V3ContactsEnrichResponse>(
    {
      ...v3ContactsEnrichResponseProperties,
      results: s.optional(s.array(s.lazy(() => v3EnrichedContactSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
