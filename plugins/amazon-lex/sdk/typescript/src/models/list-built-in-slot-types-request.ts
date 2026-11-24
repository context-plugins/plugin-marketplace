import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { builtInSlotTypeSortBySchema, type BuiltInSlotTypeSortBy } from "./built-in-slot-type-sort-by.js";

export type ListBuiltInSlotTypesRequest = {
  /**
   * The identifier of the language and locale of the slot types to list. The string must match one
   * of the supported locales. For more information, see Supported languages.
   */
  localeId: string;
  sortBy?: BuiltInSlotTypeSortBy;
  /**
   * The maximum number of built-in slot types to return in each page of results. If there are fewer
   * results than the max page size, only the actual number of results are returned.
   */
  maxResults?: number;
  /**
   * If the response from the ListBuiltInSlotTypes operation contains more results than specified in
   * the maxResults parameter, a token is returned in the response. Use that token in the nextToken
   * parameter to return the next page of results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBuiltInSlotTypesRequestSchema: Schema<ListBuiltInSlotTypesRequest> =
  s.object<ListBuiltInSlotTypesRequest>(
    {
      localeId: s.string(),
      sortBy: s.optional(s.lazy(() => builtInSlotTypeSortBySchema)),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
