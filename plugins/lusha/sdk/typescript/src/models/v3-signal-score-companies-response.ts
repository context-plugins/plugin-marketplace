import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { v3BillingSchema, type V3Billing } from "./v3-billing.js";
import {
  v3SignalScoreCompanyResultInternalSchema,
  v3SignalScoreCompanyResultSchema,
  type V3SignalScoreCompanyResult,
} from "./v3-signal-score-company-result.js";

export type V3SignalScoreCompaniesResponse = {
  requestId?: string;
  results?: V3SignalScoreCompanyResult[];
  /** Credit usage summary for a V3 API request */
  billing?: V3Billing;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3SignalScoreCompaniesResponseProperties: s.Shape<V3SignalScoreCompaniesResponse> = {
  requestId: s.optional(s.string()),
  results: s.optional(s.array(s.lazy(() => v3SignalScoreCompanyResultInternalSchema))),
  billing: s.optional(s.lazy(() => v3BillingSchema)),
};

export const v3SignalScoreCompaniesResponseInternalSchema: Schema<V3SignalScoreCompaniesResponse> =
  s.object<V3SignalScoreCompaniesResponse>(v3SignalScoreCompaniesResponseProperties, {
    additionalProperties: s.json(),
  });

export const v3SignalScoreCompaniesResponseSchema: Schema<V3SignalScoreCompaniesResponse> = s.lazySchema(() =>
  s.object<V3SignalScoreCompaniesResponse>(
    {
      ...v3SignalScoreCompaniesResponseProperties,
      results: s.optional(s.array(s.lazy(() => v3SignalScoreCompanyResultSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
