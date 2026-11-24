import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListBotAliasReplicasRequest = {
  /** The request for the unique bot ID of the replicated bot created from the source bot alias. */
  botId: string;
  /**
   * The request for the secondary region of the replicated bot created from the source bot alias.
   */
  replicaRegion: string;
  /**
   * The request for maximum results to list the replicated bots created from the source bot alias.
   */
  maxResults?: number;
  /** The request for the next token for the replicated bot created from the source bot alias. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBotAliasReplicasRequestSchema: Schema<ListBotAliasReplicasRequest> =
  s.object<ListBotAliasReplicasRequest>(
    {
      botId: s.string(),
      replicaRegion: s.string(),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
