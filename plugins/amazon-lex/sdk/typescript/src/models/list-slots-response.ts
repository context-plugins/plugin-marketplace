import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { slotSummarySchema, type SlotSummary } from "./slot-summary.js";

export type ListSlotsResponse = {
  /** The identifier of the bot that contains the slots. */
  botId?: string;
  /** The version of the bot that contains the slots. */
  botVersion?: string;
  /** The language and locale of the slots in the list. */
  localeId?: string;
  /** The identifier of the intent that contains the slots. */
  intentId?: string;
  /**
   * Summary information for the slots that meet the filter criteria specified in the request. The
   * length of the list is specified in the maxResults parameter of the request. If there are more
   * slots available, the nextToken field contains a token to get the next page of results.
   */
  slotSummaries?: SlotSummary[];
  /**
   * A token that indicates whether there are more results to return in a response to the ListSlots
   * operation. If the nextToken field is present, you send the contents as the nextToken parameter
   * of a ListSlots operation request to get the next page of results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listSlotsResponseSchema: Schema<ListSlotsResponse> = s.object<ListSlotsResponse>(
  {
    botId: s.optional(s.string()),
    botVersion: s.optional(s.string()),
    localeId: s.optional(s.string()),
    intentId: s.optional(s.string()),
    slotSummaries: s.optional(s.array(s.lazy(() => slotSummarySchema))),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
