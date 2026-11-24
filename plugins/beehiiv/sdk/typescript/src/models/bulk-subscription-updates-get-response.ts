import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  bulkSubscriptionUpdatesGetResponseDataSchema,
  type BulkSubscriptionUpdatesGetResponseData,
} from "./bulk-subscription-updates-get-response-data.js";

export type BulkSubscriptionUpdatesGetResponse = {
  data?: BulkSubscriptionUpdatesGetResponseData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkSubscriptionUpdatesGetResponseSchema: Schema<BulkSubscriptionUpdatesGetResponse> =
  s.object<BulkSubscriptionUpdatesGetResponse>(
    {
      data: s.optional(s.lazy(() => bulkSubscriptionUpdatesGetResponseDataSchema)),
    },
    { additionalProperties: s.json() },
  );
