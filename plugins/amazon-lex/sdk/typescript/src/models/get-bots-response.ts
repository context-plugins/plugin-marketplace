import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botMetadataSchema, type BotMetadata } from "./bot-metadata.js";

export type GetBotsResponse = {
  /** An array of botMetadata objects, with one entry for each bot. */
  bots?: BotMetadata[];
  /**
   * If the response is truncated, it includes a pagination token that you can specify in your next
   * request to fetch the next page of bots.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getBotsResponseSchema: Schema<GetBotsResponse> = s.object<GetBotsResponse>(
  {
    bots: s.optional(s.array(s.lazy(() => botMetadataSchema))),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
