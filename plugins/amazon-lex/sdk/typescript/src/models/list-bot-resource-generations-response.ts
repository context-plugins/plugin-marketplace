import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { generationSummarySchema, type GenerationSummary } from "./generation-summary.js";

export type ListBotResourceGenerationsResponse = {
  /** The unique identifier of the bot for which the generation requests were made. */
  botId?: string;
  /** The version of the bot for which the generation requests were made. */
  botVersion?: string;
  /** The locale of the bot for which the generation requests were made. */
  localeId?: string;
  /**
   * A list of objects, each containing information about a generation request for the bot locale.
   */
  generationSummaries?: GenerationSummary[];
  /**
   * If the total number of results is greater than the number specified in the maxResults, the
   * response returns a token in the nextToken field. Use this token when making a request to return
   * the next batch of results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBotResourceGenerationsResponseSchema: Schema<ListBotResourceGenerationsResponse> =
  s.object<ListBotResourceGenerationsResponse>(
    {
      botId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      localeId: s.optional(s.string()),
      generationSummaries: s.optional(s.array(s.lazy(() => generationSummarySchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
