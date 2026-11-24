import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sortBy2Schema, type SortBy2 } from "./sort-by2.js";
import { sortOrder6Schema, type SortOrder6 } from "./sort-order6.js";

export type ListSharedProjectsInput = {
  /**
   * The criterion to be used to list build projects shared with the current Amazon Web Services
   * account or user. Valid values include: ARN: List based on the ARN. MODIFIED_TIME: List based on
   * when information about the shared project was last changed.
   */
  sortBy?: SortBy2;
  /**
   * The order in which to list shared build projects. Valid values include: ASCENDING: List in
   * ascending order. DESCENDING: List in descending order.
   */
  sortOrder?: SortOrder6;
  /**
   * The maximum number of paginated shared build projects returned per response. Use nextToken to
   * iterate pages in the list of returned Project objects. The default value is 100.
   */
  maxResults?: number;
  /**
   * During a previous call, the maximum number of items that can be returned is the value specified
   * in maxResults. If there more items in the list, then a unique string called a nextToken is
   * returned. To get the next batch of items in the list, call this operation again, adding the
   * next token to the call. To get all of the items in the list, keep calling this operation with
   * each subsequent next token that is returned, until no more next tokens are returned.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listSharedProjectsInputSchema: Schema<ListSharedProjectsInput> =
  s.object<ListSharedProjectsInput>(
    {
      sortBy: s.optional(s.lazy(() => sortBy2Schema)),
      sortOrder: s.optional(s.lazy(() => sortOrder6Schema)),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
