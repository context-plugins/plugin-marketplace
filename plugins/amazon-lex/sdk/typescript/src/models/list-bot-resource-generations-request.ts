import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { generationSortBySchema, type GenerationSortBy } from "./generation-sort-by.js";

export type ListBotResourceGenerationsRequest = {
  /** The unique identifier of the bot whose generation requests you want to view. */
  botId: string;
  /** The version of the bot whose generation requests you want to view. */
  botVersion: string;
  /** The locale of the bot whose generation requests you want to view. */
  localeId: string;
  sortBy?: GenerationSortBy;
  /** The maximum number of results to return in the response. */
  maxResults?: number;
  /**
   * If the total number of results is greater than the number specified in the maxResults, the
   * response returns a token in the nextToken field. Use this token when making a request to return
   * the next batch of results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBotResourceGenerationsRequestSchema: Schema<ListBotResourceGenerationsRequest> =
  s.object<ListBotResourceGenerationsRequest>(
    {
      botId: s.string(),
      botVersion: s.string(),
      localeId: s.string(),
      sortBy: s.optional(s.lazy(() => generationSortBySchema)),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
