import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  botVersionReplicationStatusSchema,
  type BotVersionReplicationStatus,
} from "./bot-version-replication-status.js";

export type BotVersionReplicaSummary = {
  /** The bot version for the summary information for all the version replication statuses. */
  botVersion?: string;
  /** The version replication status for all the replicated bots. */
  botVersionReplicationStatus?: BotVersionReplicationStatus;
  /** The creation date and time of the replication status for all the replicated bots. */
  creationDateTime?: Date;
  /** The reasons for replication failure for all the replicated bots. */
  failureReasons?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botVersionReplicaSummarySchema: Schema<BotVersionReplicaSummary> =
  s.object<BotVersionReplicaSummary>(
    {
      botVersion: s.optional(s.string()),
      botVersionReplicationStatus: s.optional(s.lazy(() => botVersionReplicationStatusSchema)),
      creationDateTime: s.optional(s.dateTime()),
      failureReasons: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
