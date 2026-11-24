import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { slotTypeSummarySchema, type SlotTypeSummary } from "./slot-type-summary.js";

export type ListSlotTypesResponse = {
  /** The identifier of the bot that contains the slot types. */
  botId?: string;
  /** The version of the bot that contains the slot types. */
  botVersion?: string;
  /** The language and local of the slot types in the list. */
  localeId?: string;
  /**
   * Summary information for the slot types that meet the filter criteria specified in the request.
   * The length of the list is specified in the maxResults parameter of the request. If there are
   * more slot types available, the nextToken field contains a token to get the next page of
   * results.
   */
  slotTypeSummaries?: SlotTypeSummary[];
  /**
   * A token that indicates whether there are more results to return in a response to the
   * ListSlotTypes operation. If the nextToken field is present, you send the contents as the
   * nextToken parameter of a ListSlotTypes operation request to get the next page of results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listSlotTypesResponseSchema: Schema<ListSlotTypesResponse> = s.object<ListSlotTypesResponse>(
  {
    botId: s.optional(s.string()),
    botVersion: s.optional(s.string()),
    localeId: s.optional(s.string()),
    slotTypeSummaries: s.optional(s.array(s.lazy(() => slotTypeSummarySchema))),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
