import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  bulkSubscriptionUpdatesGetResponseDataStatusSchema,
  type BulkSubscriptionUpdatesGetResponseDataStatus,
} from "./bulk-subscription-updates-get-response-data-status.js";
import {
  bulkSubscriptionUpdatesListResponseDataItemTypeSchema,
  type BulkSubscriptionUpdatesListResponseDataItemType,
} from "./bulk-subscription-updates-list-response-data-item-type.js";

export type BulkSubscriptionUpdatesListResponseDataItem = {
  /** The ID of the update object */
  id?: string;
  /** The type of update (status or bulk) */
  type?: BulkSubscriptionUpdatesListResponseDataItemType;
  /** The parameters passed in for the update */
  params?: string;
  /** The status of the update */
  status?: BulkSubscriptionUpdatesGetResponseDataStatus;
  /** The publication ID associated with this update */
  publicationId?: string;
  /** If the job as a whole fails, this will detail the errors encountered */
  failureReason?: string;
  /** The timestamp of the job's completion */
  completed?: number;
  /** The timestamp of the job's creation */
  created?: number;
  /** The timestamp of the job's update */
  updated?: number;
  /** An array of errors encountered for individual updates within the job */
  errorLog?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkSubscriptionUpdatesListResponseDataItemSchema: Schema<BulkSubscriptionUpdatesListResponseDataItem> =
  s.object<BulkSubscriptionUpdatesListResponseDataItem>(
    {
      id: s.optional(s.string()),
      type: s.optional(s.lazy(() => bulkSubscriptionUpdatesListResponseDataItemTypeSchema)),
      params: s.optional(s.string()),
      status: s.optional(s.lazy(() => bulkSubscriptionUpdatesGetResponseDataStatusSchema)),
      publicationId: s.optional(s.string()),
      failureReason: s.optional(s.string()),
      completed: s.optional(s.int()),
      created: s.optional(s.int()),
      updated: s.optional(s.int()),
      errorLog: s.optional(s.array(s.string())),
      _keysMap: {
        publicationId: "publication_id",
        failureReason: "failure_reason",
        errorLog: "error_log",
      },
    },
    { additionalProperties: s.json() },
  );
