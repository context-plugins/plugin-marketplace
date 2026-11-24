import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { batchSchema, type Batch } from "./batch.js";

/** A list of batch workloads. */
export type ListBatchesResponse = {
  /**
   * A token, which can be sent as page_token to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /**
   * Output only. List of Batches that could not be included in the response. Attempting to get one
   * of these resources may indicate why it was not included in the list response.
   */
  unreachable?: string[];
  /** Output only. The batches from the specified collection. */
  batches?: Batch[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBatchesResponseSchema: Schema<ListBatchesResponse> = s.object<ListBatchesResponse>(
  {
    nextPageToken: s.optional(s.string()),
    unreachable: s.optional(s.array(s.string())),
    batches: s.optional(s.array(s.lazy(() => batchSchema))),
  },
  { additionalProperties: s.json() },
);
