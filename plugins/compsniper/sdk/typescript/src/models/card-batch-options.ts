import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ebaySiteSchema, type EbaySite } from "./ebay-site.js";
import { itemConditionSchema, type ItemCondition } from "./item-condition.js";
import { OutputMode, outputModeSchema } from "./output-mode.js";

export type CardBatchOptions = {
  ebaySite?: EbaySite;
  /** Maximum sold comps inspected per card. Compact output is capped at 60. @default 60 */
  count?: number;
  itemCondition?: ItemCondition;
  soldAfter?: string;
  soldBefore?: string;
  /**
   * Remove eBay's explicit Results matching fewer words section for each card search.
   *
   * @default false
   */
  exactMatch?: boolean;
  /** @default true */
  relevance?: boolean;
  /**
   * compact also returns compact sold-listing rows, including bestOfferAccepted, and is limited to
   * 25 cards with count <= 60.
   *
   * @default OutputMode.Summary
   */
  outputMode?: OutputMode;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cardBatchOptionsProperties: s.Shape<CardBatchOptions> = {
  ebaySite: s.optional(s.lazy(() => ebaySiteSchema)),
  count: s.defaulted(s.int(), 60),
  itemCondition: s.optional(s.lazy(() => itemConditionSchema)),
  soldAfter: s.optional(s.dateOnly()),
  soldBefore: s.optional(s.dateOnly()),
  exactMatch: s.defaulted(s.boolean(), false),
  relevance: s.defaulted(s.boolean(), true),
  outputMode: s.defaulted(outputModeSchema, OutputMode.Summary),
};

export const cardBatchOptionsInternalSchema: Schema<CardBatchOptions> = s.object<CardBatchOptions>(
  cardBatchOptionsProperties,
  { additionalProperties: s.json() },
);

export const cardBatchOptionsSchema: Schema<CardBatchOptions> = s.lazySchema(() =>
  s.object<CardBatchOptions>(
    {
      ...cardBatchOptionsProperties,
      count: s.defaulted(s.int().check(s.gte(1), s.lte(240)), 60),
    },
    { additionalProperties: s.json() },
  ),
);
