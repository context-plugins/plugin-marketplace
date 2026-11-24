import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  botVersionReplicaSummarySchema,
  type BotVersionReplicaSummary,
} from "./bot-version-replica-summary.js";

export type ListBotVersionReplicasResponse = {
  /** The unique ID of the bots in the list of replicated bots. */
  botId?: string;
  /** The source region used for the bots in the list of replicated bots. */
  sourceRegion?: string;
  /** The region used for the replicated bots in the list of replicated bots. */
  replicaRegion?: string;
  /** The information summary used for the replicated bots in the list of replicated bots. */
  botVersionReplicaSummaries?: BotVersionReplicaSummary[];
  /** The next token used for the replicated bots in the list of replicated bots. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBotVersionReplicasResponseSchema: Schema<ListBotVersionReplicasResponse> =
  s.object<ListBotVersionReplicasResponse>(
    {
      botId: s.optional(s.string()),
      sourceRegion: s.optional(s.string()),
      replicaRegion: s.optional(s.string()),
      botVersionReplicaSummaries: s.optional(s.array(s.lazy(() => botVersionReplicaSummarySchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
