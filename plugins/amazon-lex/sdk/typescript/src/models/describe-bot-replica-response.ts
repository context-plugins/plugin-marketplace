import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botReplicaStatus3Schema, type BotReplicaStatus3 } from "./bot-replica-status3.js";

export type DescribeBotReplicaResponse = {
  /** The unique bot ID of the replicated bot being monitored. */
  botId?: string;
  /** The region of the replicated bot being monitored. */
  replicaRegion?: string;
  /** The source region of the replicated bot being monitored. */
  sourceRegion?: string;
  /** The creation date and time of the replicated bot being monitored. */
  creationDateTime?: Date;
  /** The operational status of the replicated bot being monitored. */
  botReplicaStatus?: BotReplicaStatus3;
  /** The failure reasons the bot being monitored failed to replicate. */
  failureReasons?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeBotReplicaResponseSchema: Schema<DescribeBotReplicaResponse> =
  s.object<DescribeBotReplicaResponse>(
    {
      botId: s.optional(s.string()),
      replicaRegion: s.optional(s.string()),
      sourceRegion: s.optional(s.string()),
      creationDateTime: s.optional(s.dateTime()),
      botReplicaStatus: s.optional(s.lazy(() => botReplicaStatus3Schema)),
      failureReasons: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
