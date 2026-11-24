import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { buyingFormatSchema, type BuyingFormat } from "./buying-format.js";
import { ebaySiteSchema, type EbaySite } from "./ebay-site.js";
import { itemConditionSchema, type ItemCondition } from "./item-condition.js";
import { itemLocationSchema, type ItemLocation } from "./item-location.js";
import { sellerTypeSchema, type SellerType } from "./seller-type.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";
import { aspectFilterSchema, type AspectFilter } from "./unions/aspect-filter.js";

/** Shared page-one options applied independently to every keyword. */
export type BulkSearchOptions = {
  /** @default 240 */
  count?: number;
  ebaySite?: EbaySite;
  categoryId?: string;
  sortOrder?: SortOrder;
  minPrice?: number;
  maxPrice?: number;
  itemLocation?: ItemLocation;
  itemCondition?: ItemCondition;
  conditionId?: number;
  buyingFormat?: BuyingFormat;
  sellerType?: SellerType;
  includeCompleteListing?: boolean;
  /** @default true */
  sold?: boolean;
  soldAfter?: string;
  soldBefore?: string;
  /** @default false */
  exactMatch?: boolean;
  aspectFilter?: Record<string, AspectFilter>;
  /** @default true */
  relevance?: boolean;
};

const bulkSearchOptionsProperties: s.Shape<BulkSearchOptions> = {
  count: s.defaulted(s.int(), 240),
  ebaySite: s.optional(s.lazy(() => ebaySiteSchema)),
  categoryId: s.optional(s.string()),
  sortOrder: s.optional(s.lazy(() => sortOrderSchema)),
  minPrice: s.optional(s.float64()),
  maxPrice: s.optional(s.float64()),
  itemLocation: s.optional(s.lazy(() => itemLocationSchema)),
  itemCondition: s.optional(s.lazy(() => itemConditionSchema)),
  conditionId: s.optional(s.int()),
  buyingFormat: s.optional(s.lazy(() => buyingFormatSchema)),
  sellerType: s.optional(s.lazy(() => sellerTypeSchema)),
  includeCompleteListing: s.optional(s.boolean()),
  sold: s.defaulted(s.boolean(), true),
  soldAfter: s.optional(s.dateOnly()),
  soldBefore: s.optional(s.dateOnly()),
  exactMatch: s.defaulted(s.boolean(), false),
  aspectFilter: s.optional(
    s.record(
      s.string(),
      s.lazy(() => aspectFilterSchema),
    ),
  ),
  relevance: s.defaulted(s.boolean(), true),
};

export const bulkSearchOptionsInternalSchema: Schema<BulkSearchOptions> =
  s.object<BulkSearchOptions>(bulkSearchOptionsProperties);

export const bulkSearchOptionsSchema: Schema<BulkSearchOptions> = s.lazySchema(() =>
  s.object<BulkSearchOptions>({
    ...bulkSearchOptionsProperties,
    count: s.defaulted(s.int().check(s.gte(1), s.lte(240)), 240),
    conditionId: s.optional(s.int().check(s.gte(0))),
  }),
);
