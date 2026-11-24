import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataDeletionRequestInfoSchema, type DataDeletionRequestInfo } from "./data-deletion-request-info.js";

export type DataDeletionRequestIndexResponse = {
  data?: DataDeletionRequestInfo[];
  /**
   * The limit placed on the results. If no limit was specified in the request, this defaults to 10.
   */
  limit?: number;
  /** Whether there are more results available after this page. */
  hasMore?: boolean;
  /** The cursor to use for the next page of results. */
  nextCursor?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataDeletionRequestIndexResponseSchema: Schema<DataDeletionRequestIndexResponse> =
  s.object<DataDeletionRequestIndexResponse>(
    {
      data: s.optional(s.array(s.lazy(() => dataDeletionRequestInfoSchema))),
      limit: s.optional(s.int()),
      hasMore: s.optional(s.boolean()),
      nextCursor: s.optional(s.string()),
      _keysMap: {
        hasMore: "has_more",
        nextCursor: "next_cursor",
      },
    },
    { additionalProperties: s.json() },
  );
