import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botReplicaStatus1Schema, type BotReplicaStatus1 } from "./bot-replica-status1.js";

export type CreateBotReplicaResponse = {
  /** The unique bot ID of the replicated bot generated. */
  botId?: string;
  /** The region of the replicated bot generated. */
  replicaRegion?: string;
  /** The source region for the source bot used for the replicated bot generated. */
  sourceRegion?: string;
  /** The creation date and time of the replicated bot generated. */
  creationDateTime?: Date;
  /** The operational status of the replicated bot generated. */
  botReplicaStatus?: BotReplicaStatus1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createBotReplicaResponseSchema: Schema<CreateBotReplicaResponse> =
  s.object<CreateBotReplicaResponse>(
    {
      botId: s.optional(s.string()),
      replicaRegion: s.optional(s.string()),
      sourceRegion: s.optional(s.string()),
      creationDateTime: s.optional(s.dateTime()),
      botReplicaStatus: s.optional(s.lazy(() => botReplicaStatus1Schema)),
    },
    { additionalProperties: s.json() },
  );
