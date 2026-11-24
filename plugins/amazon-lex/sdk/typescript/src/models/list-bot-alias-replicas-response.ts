import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botAliasReplicaSummarySchema, type BotAliasReplicaSummary } from "./bot-alias-replica-summary.js";

export type ListBotAliasReplicasResponse = {
  /** The unique bot ID of the replicated bot created from the source bot alias. */
  botId?: string;
  /** The source region of the replicated bot created from the source bot alias. */
  sourceRegion?: string;
  /** The secondary region of the replicated bot created from the source bot alias. */
  replicaRegion?: string;
  /** The summary information of the replicated bot created from the source bot alias. */
  botAliasReplicaSummaries?: BotAliasReplicaSummary[];
  /** The next token for the replicated bots created from the source bot alias. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBotAliasReplicasResponseSchema: Schema<ListBotAliasReplicasResponse> =
  s.object<ListBotAliasReplicasResponse>(
    {
      botId: s.optional(s.string()),
      sourceRegion: s.optional(s.string()),
      replicaRegion: s.optional(s.string()),
      botAliasReplicaSummaries: s.optional(s.array(s.lazy(() => botAliasReplicaSummarySchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
