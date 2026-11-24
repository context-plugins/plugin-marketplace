import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cardInputInternalSchema, cardInputSchema, type CardInput } from "./card-input.js";
import { compactSoldItemSchema, type CompactSoldItem } from "./compact-sold-item.js";
import { priceSummarySchema, type PriceSummary } from "./price-summary.js";

export type CardBatchResult = {
  reference?: string;
  /**
   * Supply an exact keyword, or structured fields. subject is universal; player and character are
   * convenient aliases.
   */
  card?: CardInput;
  keyword: string;
  ok: boolean;
  totalResults?: string | null;
  totalItems?: number;
  rawMedian?: number | null;
  rawSampleCount?: number | null;
  /** Deterministic price intelligence over the returned sold items. */
  summary?: PriceSummary | null;
  cached?: boolean;
  items?: CompactSoldItem[];
  error?: string;
  code?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cardBatchResultProperties: s.Shape<CardBatchResult> = {
  reference: s.optional(s.string()),
  card: s.optional(s.lazy(() => cardInputInternalSchema)),
  keyword: s.string(),
  ok: s.boolean(),
  totalResults: s.optionalNullable(s.string()),
  totalItems: s.optional(s.int()),
  rawMedian: s.optionalNullable(s.float64()),
  rawSampleCount: s.optionalNullable(s.int()),
  summary: s.optionalNullable(s.lazy(() => priceSummarySchema)),
  cached: s.optional(s.boolean()),
  items: s.optional(s.array(s.lazy(() => compactSoldItemSchema))),
  error: s.optional(s.string()),
  code: s.optional(s.string()),
};

export const cardBatchResultInternalSchema: Schema<CardBatchResult> = s.object<CardBatchResult>(
  cardBatchResultProperties,
  { additionalProperties: s.json() },
);

export const cardBatchResultSchema: Schema<CardBatchResult> = s.lazySchema(() =>
  s.object<CardBatchResult>(
    {
      ...cardBatchResultProperties,
      card: s.optional(s.lazy(() => cardInputSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
