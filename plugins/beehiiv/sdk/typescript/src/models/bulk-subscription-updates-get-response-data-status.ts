import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the update */
export const BulkSubscriptionUpdatesGetResponseDataStatus = {
  Pending: "pending",
  Processing: "processing",
  Complete: "complete",
  Failed: "failed",
} as const;
export type BulkSubscriptionUpdatesGetResponseDataStatus =
  | (typeof BulkSubscriptionUpdatesGetResponseDataStatus)[keyof typeof BulkSubscriptionUpdatesGetResponseDataStatus]
  | (string & {});

export const bulkSubscriptionUpdatesGetResponseDataStatusSchema: EnumSchema<BulkSubscriptionUpdatesGetResponseDataStatus> =
  s.enumOf<BulkSubscriptionUpdatesGetResponseDataStatus>(BulkSubscriptionUpdatesGetResponseDataStatus);
