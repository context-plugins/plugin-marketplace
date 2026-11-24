import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteBotReplicaRequest = {
  /** The unique ID of the replicated bot to be deleted from the secondary region */
  botId: string;
  /** The secondary region of the replicated bot that will be deleted. */
  replicaRegion: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteBotReplicaRequestSchema: Schema<DeleteBotReplicaRequest> =
  s.object<DeleteBotReplicaRequest>(
    {
      botId: s.string(),
      replicaRegion: s.string(),
    },
    { additionalProperties: s.json() },
  );
