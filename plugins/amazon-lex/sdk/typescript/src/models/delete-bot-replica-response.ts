import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botReplicaStatus1Schema, type BotReplicaStatus1 } from "./bot-replica-status1.js";

export type DeleteBotReplicaResponse = {
  /** The unique bot ID of the replicated bot generated. */
  botId?: string;
  /** The region of the replicated bot generated. */
  replicaRegion?: string;
  /** The operational status of the replicated bot generated. */
  botReplicaStatus?: BotReplicaStatus1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteBotReplicaResponseSchema: Schema<DeleteBotReplicaResponse> =
  s.object<DeleteBotReplicaResponse>(
    {
      botId: s.optional(s.string()),
      replicaRegion: s.optional(s.string()),
      botReplicaStatus: s.optional(s.lazy(() => botReplicaStatus1Schema)),
    },
    { additionalProperties: s.json() },
  );
