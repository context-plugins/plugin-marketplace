import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of update (status or bulk) */
export const BulkSubscriptionUpdatesGetResponseDataType = {
  Bulk: "bulk",
  Status: "status",
} as const;
export type BulkSubscriptionUpdatesGetResponseDataType =
  | (typeof BulkSubscriptionUpdatesGetResponseDataType)[keyof typeof BulkSubscriptionUpdatesGetResponseDataType]
  | (string & {});

export const bulkSubscriptionUpdatesGetResponseDataTypeSchema: EnumSchema<BulkSubscriptionUpdatesGetResponseDataType> =
  s.enumOf<BulkSubscriptionUpdatesGetResponseDataType>(BulkSubscriptionUpdatesGetResponseDataType);
