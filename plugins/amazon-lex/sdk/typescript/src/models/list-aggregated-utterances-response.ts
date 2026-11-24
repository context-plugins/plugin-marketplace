import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  aggregatedUtterancesSummarySchema,
  type AggregatedUtterancesSummary,
} from "./aggregated-utterances-summary.js";
import {
  utteranceAggregationDurationSchema,
  type UtteranceAggregationDuration,
} from "./utterance-aggregation-duration.js";

export type ListAggregatedUtterancesResponse = {
  /** The identifier of the bot that contains the utterances. */
  botId?: string;
  /**
   * The identifier of the bot alias that contains the utterances. If you specified the bot version,
   * the bot alias ID isn't returned.
   */
  botAliasId?: string;
  /**
   * The identifier of the bot version that contains the utterances. If you specified the bot alias,
   * the bot version isn't returned.
   */
  botVersion?: string;
  /** The identifier of the language and locale that the utterances are in. */
  localeId?: string;
  aggregationDuration?: UtteranceAggregationDuration;
  /**
   * The date and time that the aggregation window begins. Only data collected after this time is
   * returned in the results.
   */
  aggregationWindowStartTime?: Date;
  /**
   * The date and time that the aggregation window ends. Only data collected between the start time
   * and the end time are returned in the results.
   */
  aggregationWindowEndTime?: Date;
  /**
   * The last date and time that the aggregated data was collected. The time period depends on the
   * length of the aggregation window. Hours - for 1 hour time window, every half hour; otherwise
   * every hour. Days - every 6 hours Weeks - for a one week time window, every 12 hours; otherwise,
   * every day
   */
  aggregationLastRefreshedDateTime?: Date;
  /**
   * Summaries of the aggregated utterance data. Each response contains information about the number
   * of times that the utterance was seen during the time period, whether it was detected or missed,
   * and when it was seen during the time period.
   */
  aggregatedUtterancesSummaries?: AggregatedUtterancesSummary[];
  /**
   * A token that indicates whether there are more results to return in a response to the
   * ListAggregatedUtterances operation. If the nextToken field is present, you send the contents as
   * the nextToken parameter of a ListAggregatedUtterances operation request to get the next page of
   * results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listAggregatedUtterancesResponseSchema: Schema<ListAggregatedUtterancesResponse> =
  s.object<ListAggregatedUtterancesResponse>(
    {
      botId: s.optional(s.string()),
      botAliasId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      localeId: s.optional(s.string()),
      aggregationDuration: s.optional(s.lazy(() => utteranceAggregationDurationSchema)),
      aggregationWindowStartTime: s.optional(s.dateTime()),
      aggregationWindowEndTime: s.optional(s.dateTime()),
      aggregationLastRefreshedDateTime: s.optional(s.dateTime()),
      aggregatedUtterancesSummaries: s.optional(s.array(s.lazy(() => aggregatedUtterancesSummarySchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
