import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botReplicaStatusSchema, type BotReplicaStatus } from "./bot-replica-status.js";

export type BotReplicaSummary = {
  /** The replica region used in the replication statuses summary. */
  replicaRegion?: string;
  /** The creation time and date for the replicated bots. */
  creationDateTime?: Date;
  /** The operation status for the replicated bot applicable. */
  botReplicaStatus?: BotReplicaStatus;
  /** The reasons for the failure for the replicated bot. */
  failureReasons?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botReplicaSummarySchema: Schema<BotReplicaSummary> = s.object<BotReplicaSummary>(
  {
    replicaRegion: s.optional(s.string()),
    creationDateTime: s.optional(s.dateTime()),
    botReplicaStatus: s.optional(s.lazy(() => botReplicaStatusSchema)),
    failureReasons: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
