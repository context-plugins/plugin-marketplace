import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Delivery, deliverySchema } from "./delivery.js";
import { EbaySite, ebaySiteSchema } from "./ebay-site.js";
import { itemConditionSchema, type ItemCondition } from "./item-condition.js";
import { sellerTypeSchema, type SellerType } from "./seller-type.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";
import { aspectFilterSchema, type AspectFilter } from "./unions/aspect-filter.js";

export type MaxSearchRequest = {
  keyword: string;
  /** @default 10 */
  maxPages?: number;
  /** @default Delivery.Inline */
  delivery?: Delivery;
  /** @default 240 */
  count?: number;
  /** @default EbaySite.EbayCom */
  ebaySite?: EbaySite;
  categoryId?: string;
  sortOrder?: SortOrder;
  minPrice?: number;
  maxPrice?: number;
  itemCondition?: ItemCondition;
  conditionId?: number;
  sellerType?: SellerType;
  /** @default true */
  sold?: boolean;
  /** @default false */
  exactMatch?: boolean;
  aspectFilter?: Record<string, AspectFilter>;
};

const maxSearchRequestProperties: s.Shape<MaxSearchRequest> = {
  keyword: s.string(),
  maxPages: s.defaulted(s.int(), 10),
  delivery: s.defaulted(deliverySchema, Delivery.Inline),
  count: s.defaulted(s.int(), 240),
  ebaySite: s.defaulted(ebaySiteSchema, EbaySite.EbayCom),
  categoryId: s.optional(s.string()),
  sortOrder: s.optional(s.lazy(() => sortOrderSchema)),
  minPrice: s.optional(s.float64()),
  maxPrice: s.optional(s.float64()),
  itemCondition: s.optional(s.lazy(() => itemConditionSchema)),
  conditionId: s.optional(s.int()),
  sellerType: s.optional(s.lazy(() => sellerTypeSchema)),
  sold: s.defaulted(s.boolean(), true),
  exactMatch: s.defaulted(s.boolean(), false),
  aspectFilter: s.optional(
    s.record(
      s.string(),
      s.lazy(() => aspectFilterSchema),
    ),
  ),
};

export const maxSearchRequestInternalSchema: Schema<MaxSearchRequest> =
  s.object<MaxSearchRequest>(maxSearchRequestProperties);

export const maxSearchRequestSchema: Schema<MaxSearchRequest> = s.lazySchema(() =>
  s.object<MaxSearchRequest>({
    ...maxSearchRequestProperties,
    keyword: s.string().check(s.maxLength(300)),
    maxPages: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
    count: s.defaulted(s.int().check(s.gte(1), s.lte(240)), 240),
    conditionId: s.optional(s.int().check(s.gte(0))),
  }),
);
