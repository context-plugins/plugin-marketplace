import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sortByAwsCodeBuildFleetApiSchema,
  type SortByAwsCodeBuildFleetApi,
} from "./sort-by-aws-code-build-fleet-api.js";
import {
  sortOrderAwsCodeBuildFleetApiSchema,
  type SortOrderAwsCodeBuildFleetApi,
} from "./sort-order-aws-code-build-fleet-api.js";

export type ListFleetsInput = {
  /**
   * During a previous call, if there are more than 100 items in the list, only the first 100 items
   * are returned, along with a unique string called a nextToken. To get the next batch of items in
   * the list, call this operation again, adding the next token to the call. To get all of the items
   * in the list, keep calling this operation with each subsequent next token that is returned,
   * until no more next tokens are returned.
   */
  nextToken?: string;
  /**
   * The maximum number of paginated compute fleets returned per response. Use nextToken to iterate
   * pages in the list of returned compute fleets.
   */
  maxResults?: number;
  /**
   * The order in which to list compute fleets. Valid values include: ASCENDING: List in ascending
   * order. DESCENDING: List in descending order. Use sortBy to specify the criterion to be used to
   * list compute fleet names.
   */
  sortOrder?: SortOrderAwsCodeBuildFleetApi;
  /**
   * The criterion to be used to list compute fleet names. Valid values include: CREATED_TIME: List
   * based on when each compute fleet was created. LAST_MODIFIED_TIME: List based on when
   * information about each compute fleet was last changed. NAME: List based on each compute fleet's
   * name. Use sortOrder to specify in what order to list the compute fleet names based on the
   * preceding criteria.
   */
  sortBy?: SortByAwsCodeBuildFleetApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listFleetsInputSchema: Schema<ListFleetsInput> = s.object<ListFleetsInput>(
  {
    nextToken: s.optional(s.string()),
    maxResults: s.optional(s.int()),
    sortOrder: s.optional(s.lazy(() => sortOrderAwsCodeBuildFleetApiSchema)),
    sortBy: s.optional(s.lazy(() => sortByAwsCodeBuildFleetApiSchema)),
  },
  { additionalProperties: s.json() },
);
