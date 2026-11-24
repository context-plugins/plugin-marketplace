import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cardBatchOptionsInternalSchema,
  cardBatchOptionsSchema,
  type CardBatchOptions,
} from "./card-batch-options.js";
import { cardInputInternalSchema, cardInputSchema, type CardInput } from "./card-input.js";

export type CardBatchRequest = {
  cards: CardInput[];
  options?: CardBatchOptions;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cardBatchRequestProperties: s.Shape<CardBatchRequest> = {
  cards: s.array(s.lazy(() => cardInputInternalSchema)),
  options: s.optional(s.lazy(() => cardBatchOptionsInternalSchema)),
};

export const cardBatchRequestInternalSchema: Schema<CardBatchRequest> = s.object<CardBatchRequest>(
  cardBatchRequestProperties,
  { additionalProperties: s.json() },
);

export const cardBatchRequestSchema: Schema<CardBatchRequest> = s.lazySchema(() =>
  s.object<CardBatchRequest>(
    {
      ...cardBatchRequestProperties,
      cards: s.array(s.lazy(() => cardInputSchema)).check(s.minLength(1), s.maxLength(100)),
      options: s.optional(s.lazy(() => cardBatchOptionsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
