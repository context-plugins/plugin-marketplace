import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { singleEnrichmentRequestSchema, type SingleEnrichmentRequest } from "./single-enrichment-request.js";

export type BulkEnrichmentRequest = {
  /** Up to 500 records per POST */
  data: SingleEnrichmentRequest[];
  /** URL Leadspace calls back when bulk processing completes */
  callbackUrl?: string;
  externalBulkId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bulkEnrichmentRequestProperties: s.Shape<BulkEnrichmentRequest> = {
  data: s.array(s.lazy(() => singleEnrichmentRequestSchema)),
  callbackUrl: s.optional(s.string()),
  externalBulkId: s.optional(s.string()),
  _keysMap: {
    externalBulkId: "external_bulk_id",
  },
};

export const bulkEnrichmentRequestInternalSchema: Schema<BulkEnrichmentRequest> =
  s.object<BulkEnrichmentRequest>(bulkEnrichmentRequestProperties, { additionalProperties: s.json() });

export const bulkEnrichmentRequestSchema: Schema<BulkEnrichmentRequest> = s.lazySchema(() =>
  s.object<BulkEnrichmentRequest>(
    {
      ...bulkEnrichmentRequestProperties,
      data: s.array(s.lazy(() => singleEnrichmentRequestSchema)).check(s.maxLength(500)),
    },
    { additionalProperties: s.json() },
  ),
);
