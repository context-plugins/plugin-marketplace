import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { v3BillingSchema, type V3Billing } from "./v3-billing.js";
import {
  v3SignalScoreContactResultInternalSchema,
  v3SignalScoreContactResultSchema,
  type V3SignalScoreContactResult,
} from "./v3-signal-score-contact-result.js";

export type V3SignalScoreContactsResponse = {
  requestId?: string;
  results?: V3SignalScoreContactResult[];
  /** Credit usage summary for a V3 API request */
  billing?: V3Billing;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3SignalScoreContactsResponseProperties: s.Shape<V3SignalScoreContactsResponse> = {
  requestId: s.optional(s.string()),
  results: s.optional(s.array(s.lazy(() => v3SignalScoreContactResultInternalSchema))),
  billing: s.optional(s.lazy(() => v3BillingSchema)),
};

export const v3SignalScoreContactsResponseInternalSchema: Schema<V3SignalScoreContactsResponse> =
  s.object<V3SignalScoreContactsResponse>(v3SignalScoreContactsResponseProperties, {
    additionalProperties: s.json(),
  });

export const v3SignalScoreContactsResponseSchema: Schema<V3SignalScoreContactsResponse> = s.lazySchema(() =>
  s.object<V3SignalScoreContactsResponse>(
    {
      ...v3SignalScoreContactsResponseProperties,
      results: s.optional(s.array(s.lazy(() => v3SignalScoreContactResultSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
