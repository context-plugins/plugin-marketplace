import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { builtInIntentSummarySchema, type BuiltInIntentSummary } from "./built-in-intent-summary.js";

export type ListBuiltInIntentsResponse = {
  /**
   * Summary information for the built-in intents that meet the filter criteria specified in the
   * request. The length of the list is specified in the maxResults parameter of the request. If
   * there are more intents available, the nextToken field contains a token to get the next page of
   * results.
   */
  builtInIntentSummaries?: BuiltInIntentSummary[];
  /**
   * A token that indicates whether there are more results to return in a response to the
   * ListBuiltInIntents operation. If the nextToken field is present, you send the contents as the
   * nextToken parameter of a ListBotAliases operation request to get the next page of results.
   */
  nextToken?: string;
  /** The language and locale of the intents in the list. */
  localeId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBuiltInIntentsResponseSchema: Schema<ListBuiltInIntentsResponse> =
  s.object<ListBuiltInIntentsResponse>(
    {
      builtInIntentSummaries: s.optional(s.array(s.lazy(() => builtInIntentSummarySchema))),
      nextToken: s.optional(s.string()),
      localeId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
