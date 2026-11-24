import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cardBatchResultInternalSchema,
  cardBatchResultSchema,
  type CardBatchResult,
} from "./card-batch-result.js";
import { statusSchema, type Status } from "./status.js";

export type CardBatchJob = {
  jobId?: string;
  status?: Status;
  totalCards?: number;
  processedCards?: number;
  remainingCards?: number;
  succeededCards?: number;
  failedCards?: number;
  error?: string | null;
  results?: CardBatchResult[];
  /** Present when processing stopped because the account quota was exhausted. */
  upgradeUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cardBatchJobProperties: s.Shape<CardBatchJob> = {
  jobId: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusSchema)),
  totalCards: s.optional(s.int()),
  processedCards: s.optional(s.int()),
  remainingCards: s.optional(s.int()),
  succeededCards: s.optional(s.int()),
  failedCards: s.optional(s.int()),
  error: s.optionalNullable(s.string()),
  results: s.optional(s.array(s.lazy(() => cardBatchResultInternalSchema))),
  upgradeUrl: s.optional(s.string()),
};

export const cardBatchJobInternalSchema: Schema<CardBatchJob> = s.object<CardBatchJob>(
  cardBatchJobProperties,
  { additionalProperties: s.json() },
);

export const cardBatchJobSchema: Schema<CardBatchJob> = s.lazySchema(() =>
  s.object<CardBatchJob>(
    {
      ...cardBatchJobProperties,
      results: s.optional(s.array(s.lazy(() => cardBatchResultSchema))),
      upgradeUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
