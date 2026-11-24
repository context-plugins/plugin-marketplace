import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { slotTypeFilterSchema, type SlotTypeFilter } from "./slot-type-filter.js";
import { slotTypeSortBySchema, type SlotTypeSortBy } from "./slot-type-sort-by.js";

export type ListSlotTypesRequest = {
  /** The unique identifier of the bot that contains the slot types. */
  botId: string;
  /** The version of the bot that contains the slot type. */
  botVersion: string;
  /**
   * The identifier of the language and locale of the slot types to list. The string must match one
   * of the supported locales. For more information, see Supported languages.
   */
  localeId: string;
  sortBy?: SlotTypeSortBy;
  /**
   * Provides the specification of a filter used to limit the slot types in the response to only
   * those that match the filter specification. You can only specify one filter and only one string
   * to filter on.
   */
  filters?: SlotTypeFilter[];
  /**
   * The maximum number of slot types to return in each page of results. If there are fewer results
   * than the max page size, only the actual number of results are returned.
   */
  maxResults?: number;
  /**
   * If the response from the ListSlotTypes operation contains more results than specified in the
   * maxResults parameter, a token is returned in the response. Use that token in the nextToken
   * parameter to return the next page of results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listSlotTypesRequestSchema: Schema<ListSlotTypesRequest> = s.object<ListSlotTypesRequest>(
  {
    botId: s.string(),
    botVersion: s.string(),
    localeId: s.string(),
    sortBy: s.optional(s.lazy(() => slotTypeSortBySchema)),
    filters: s.optional(s.array(s.lazy(() => slotTypeFilterSchema))),
    maxResults: s.optional(s.int()),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
