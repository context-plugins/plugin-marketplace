import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of update (status or bulk) */
export const BulkSubscriptionUpdatesListResponseDataItemType = {
  Status: "status",
  Bulk: "bulk",
} as const;
export type BulkSubscriptionUpdatesListResponseDataItemType =
  | (typeof BulkSubscriptionUpdatesListResponseDataItemType)[keyof typeof BulkSubscriptionUpdatesListResponseDataItemType]
  | (string & {});

export const bulkSubscriptionUpdatesListResponseDataItemTypeSchema: EnumSchema<BulkSubscriptionUpdatesListResponseDataItemType> =
  s.enumOf<BulkSubscriptionUpdatesListResponseDataItemType>(BulkSubscriptionUpdatesListResponseDataItemType);
