import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeBotReplicaRequest = {
  /** The request for the unique bot ID of the replicated bot being monitored. */
  botId: string;
  /** The request for the region of the replicated bot being monitored. */
  replicaRegion: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeBotReplicaRequestSchema: Schema<DescribeBotReplicaRequest> =
  s.object<DescribeBotReplicaRequest>(
    {
      botId: s.string(),
      replicaRegion: s.string(),
    },
    { additionalProperties: s.json() },
  );
