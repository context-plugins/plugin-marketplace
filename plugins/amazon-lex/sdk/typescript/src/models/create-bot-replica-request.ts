import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateBotReplicaRequest = {
  /**
   * The request for the unique bot ID of the source bot to be replicated in the secondary region.
   */
  botId: string;
  /**
   * The request for the secondary region that will be used in the replication of the source bot.
   */
  replicaRegion: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createBotReplicaRequestSchema: Schema<CreateBotReplicaRequest> =
  s.object<CreateBotReplicaRequest>(
    {
      botId: s.string(),
      replicaRegion: s.string(),
    },
    { additionalProperties: s.json() },
  );
