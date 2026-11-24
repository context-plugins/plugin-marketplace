import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the update */
export const BulkSubscriptionUpdatesListResponseDataItemStatus = {
  Pending: "pending",
  Processing: "processing",
  Complete: "complete",
  Failed: "failed",
} as const;
export type BulkSubscriptionUpdatesListResponseDataItemStatus =
  | (typeof BulkSubscriptionUpdatesListResponseDataItemStatus)[keyof typeof BulkSubscriptionUpdatesListResponseDataItemStatus]
  | (string & {});

export const bulkSubscriptionUpdatesListResponseDataItemStatusSchema: EnumSchema<BulkSubscriptionUpdatesListResponseDataItemStatus> =
  s.enumOf<BulkSubscriptionUpdatesListResponseDataItemStatus>(
    BulkSubscriptionUpdatesListResponseDataItemStatus,
  );
