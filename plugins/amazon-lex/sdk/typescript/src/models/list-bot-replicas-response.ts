import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botReplicaSummarySchema, type BotReplicaSummary } from "./bot-replica-summary.js";

export type ListBotReplicasResponse = {
  /** the unique bot IDs in the list of replicated bots. */
  botId?: string;
  /** The source region of the source bots in the list of replicated bots. */
  sourceRegion?: string;
  /** The summary details for the replicated bots. */
  botReplicaSummaries?: BotReplicaSummary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBotReplicasResponseSchema: Schema<ListBotReplicasResponse> =
  s.object<ListBotReplicasResponse>(
    {
      botId: s.optional(s.string()),
      sourceRegion: s.optional(s.string()),
      botReplicaSummaries: s.optional(s.array(s.lazy(() => botReplicaSummarySchema))),
    },
    { additionalProperties: s.json() },
  );
