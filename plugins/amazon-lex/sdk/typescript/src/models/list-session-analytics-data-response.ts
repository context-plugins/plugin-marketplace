import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sessionSpecificationSchema, type SessionSpecification } from "./session-specification.js";

export type ListSessionAnalyticsDataResponse = {
  /** The unique identifier of the bot that the sessions belong to. */
  botId?: string;
  /**
   * If the response from the ListSessionAnalyticsData operation contains more results than
   * specified in the maxResults parameter, a token is returned in the response. Use the returned
   * token in the nextToken parameter of a ListSessionAnalyticsData request to return the next page
   * of results. For a complete set of results, call the ListSessionAnalyticsData operation until
   * the nextToken returned in the response is null.
   */
  nextToken?: string;
  /** A list of objects, each of which contains information about a session with the bot. */
  sessions?: SessionSpecification[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listSessionAnalyticsDataResponseSchema: Schema<ListSessionAnalyticsDataResponse> =
  s.object<ListSessionAnalyticsDataResponse>(
    {
      botId: s.optional(s.string()),
      nextToken: s.optional(s.string()),
      sessions: s.optional(s.array(s.lazy(() => sessionSpecificationSchema))),
    },
    { additionalProperties: s.json() },
  );
