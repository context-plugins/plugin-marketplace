import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  v3SignalScoreCompanyItemInternalSchema,
  v3SignalScoreCompanyItemSchema,
  type V3SignalScoreCompanyItem,
} from "./v3-signal-score-company-item.js";

export type V3SignalScoreCompaniesRequest = {
  companies: V3SignalScoreCompanyItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3SignalScoreCompaniesRequestProperties: s.Shape<V3SignalScoreCompaniesRequest> = {
  companies: s.array(s.lazy(() => v3SignalScoreCompanyItemInternalSchema)),
};

export const v3SignalScoreCompaniesRequestInternalSchema: Schema<V3SignalScoreCompaniesRequest> =
  s.object<V3SignalScoreCompaniesRequest>(v3SignalScoreCompaniesRequestProperties, {
    additionalProperties: s.json(),
  });

export const v3SignalScoreCompaniesRequestSchema: Schema<V3SignalScoreCompaniesRequest> = s.lazySchema(() =>
  s.object<V3SignalScoreCompaniesRequest>(
    {
      ...v3SignalScoreCompaniesRequestProperties,
      companies: s
        .array(s.lazy(() => v3SignalScoreCompanyItemSchema))
        .check(s.minLength(1), s.maxLength(100)),
    },
    { additionalProperties: s.json() },
  ),
);
