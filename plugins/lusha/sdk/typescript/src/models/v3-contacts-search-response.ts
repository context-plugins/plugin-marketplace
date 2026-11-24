import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { v3BillingSchema, type V3Billing } from "./v3-billing.js";
import { v3ContactPreviewSchema, type V3ContactPreview } from "./v3-contact-preview.js";

export type V3ContactsSearchResponse = {
  requestId?: string;
  results?: V3ContactPreview[];
  /** Credit usage summary for a V3 API request */
  billing?: V3Billing;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3ContactsSearchResponseSchema: Schema<V3ContactsSearchResponse> =
  s.object<V3ContactsSearchResponse>(
    {
      requestId: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => v3ContactPreviewSchema))),
      billing: s.optional(s.lazy(() => v3BillingSchema)),
    },
    { additionalProperties: s.json() },
  );
