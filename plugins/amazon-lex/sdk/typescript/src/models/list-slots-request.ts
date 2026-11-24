import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { slotFilterSchema, type SlotFilter } from "./slot-filter.js";
import { slotSortBySchema, type SlotSortBy } from "./slot-sort-by.js";

export type ListSlotsRequest = {
  /** The identifier of the bot that contains the slot. */
  botId: string;
  /** The version of the bot that contains the slot. */
  botVersion: string;
  /**
   * The identifier of the language and locale of the slots to list. The string must match one of
   * the supported locales. For more information, see Supported languages.
   */
  localeId: string;
  /** The unique identifier of the intent that contains the slot. */
  intentId: string;
  sortBy?: SlotSortBy;
  /**
   * Provides the specification of a filter used to limit the slots in the response to only those
   * that match the filter specification. You can only specify one filter and only one string to
   * filter on.
   */
  filters?: SlotFilter[];
  /**
   * The maximum number of slots to return in each page of results. If there are fewer results than
   * the max page size, only the actual number of results are returned.
   */
  maxResults?: number;
  /**
   * If the response from the ListSlots operation contains more results than specified in the
   * maxResults parameter, a token is returned in the response. Use that token in the nextToken
   * parameter to return the next page of results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listSlotsRequestSchema: Schema<ListSlotsRequest> = s.object<ListSlotsRequest>(
  {
    botId: s.string(),
    botVersion: s.string(),
    localeId: s.string(),
    intentId: s.string(),
    sortBy: s.optional(s.lazy(() => slotSortBySchema)),
    filters: s.optional(s.array(s.lazy(() => slotFilterSchema))),
    maxResults: s.optional(s.int()),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
