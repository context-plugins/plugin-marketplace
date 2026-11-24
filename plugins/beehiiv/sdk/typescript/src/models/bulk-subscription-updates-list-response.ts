import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  bulkSubscriptionUpdatesListResponseDataItemSchema,
  type BulkSubscriptionUpdatesListResponseDataItem,
} from "./bulk-subscription-updates-list-response-data-item.js";

export type BulkSubscriptionUpdatesListResponse = {
  /** An array of Subscription Update objects */
  data?: BulkSubscriptionUpdatesListResponseDataItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkSubscriptionUpdatesListResponseSchema: Schema<BulkSubscriptionUpdatesListResponse> =
  s.object<BulkSubscriptionUpdatesListResponse>(
    {
      data: s.optional(s.array(s.lazy(() => bulkSubscriptionUpdatesListResponseDataItemSchema))),
    },
    { additionalProperties: s.json() },
  );
