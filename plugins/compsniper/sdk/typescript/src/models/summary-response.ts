import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { priceSummarySchema, type PriceSummary } from "./price-summary.js";

export type SummaryResponse = {
  keyword: string;
  totalResults?: string | null;
  totalItems: number;
  rawMedian?: number | null;
  rawSampleCount?: number | null;
  /** Deterministic price intelligence over the returned sold items. */
  summary?: PriceSummary | null;
  cached: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const summaryResponseSchema: Schema<SummaryResponse> = s.object<SummaryResponse>(
  {
    keyword: s.string(),
    totalResults: s.optionalNullable(s.string()),
    totalItems: s.int(),
    rawMedian: s.optionalNullable(s.float64()),
    rawSampleCount: s.optionalNullable(s.int()),
    summary: s.optionalNullable(s.lazy(() => priceSummarySchema)),
    cached: s.boolean(),
  },
  { additionalProperties: s.json() },
);
