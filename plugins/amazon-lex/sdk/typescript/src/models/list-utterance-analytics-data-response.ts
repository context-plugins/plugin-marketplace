import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { utteranceSpecificationSchema, type UtteranceSpecification } from "./utterance-specification.js";

export type ListUtteranceAnalyticsDataResponse = {
  /** The unique identifier of the bot that the utterances belong to. */
  botId?: string;
  /**
   * If the response from the ListUtteranceAnalyticsData operation contains more results than
   * specified in the maxResults parameter, a token is returned in the response. Use the returned
   * token in the nextToken parameter of a ListUtteranceAnalyticsData request to return the next
   * page of results. For a complete set of results, call the ListUtteranceAnalyticsData operation
   * until the nextToken returned in the response is null.
   */
  nextToken?: string;
  /**
   * A list of objects, each of which contains information about an utterance in a user session with
   * your bot.
   */
  utterances?: UtteranceSpecification[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listUtteranceAnalyticsDataResponseSchema: Schema<ListUtteranceAnalyticsDataResponse> =
  s.object<ListUtteranceAnalyticsDataResponse>(
    {
      botId: s.optional(s.string()),
      nextToken: s.optional(s.string()),
      utterances: s.optional(s.array(s.lazy(() => utteranceSpecificationSchema))),
    },
    { additionalProperties: s.json() },
  );
