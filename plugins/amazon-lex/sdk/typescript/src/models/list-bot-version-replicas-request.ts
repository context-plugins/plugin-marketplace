import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  botVersionReplicaSortBySchema,
  type BotVersionReplicaSortBy,
} from "./bot-version-replica-sort-by.js";

export type ListBotVersionReplicasRequest = {
  /** The request for the unique ID in the list of replicated bots. */
  botId: string;
  /** The request for the region used in the list of replicated bots. */
  replicaRegion: string;
  /** The maximum results given in the list of replicated bots. */
  maxResults?: number;
  /** The next token given in the list of replicated bots. */
  nextToken?: string;
  sortBy?: BotVersionReplicaSortBy;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBotVersionReplicasRequestSchema: Schema<ListBotVersionReplicasRequest> =
  s.object<ListBotVersionReplicasRequest>(
    {
      botId: s.string(),
      replicaRegion: s.string(),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
      sortBy: s.optional(s.lazy(() => botVersionReplicaSortBySchema)),
    },
    { additionalProperties: s.json() },
  );
