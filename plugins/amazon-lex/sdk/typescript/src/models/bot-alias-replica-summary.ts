import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  botAliasReplicationStatusSchema,
  type BotAliasReplicationStatus,
} from "./bot-alias-replication-status.js";

export type BotAliasReplicaSummary = {
  /** The bot alias ID for all the alias bot replications. */
  botAliasId?: string;
  /** The replication statuses for all the alias bot replications. */
  botAliasReplicationStatus?: BotAliasReplicationStatus;
  /** The bot version for all the alias bot replications. */
  botVersion?: string;
  /** The creation time and date for all the alias bot replications. */
  creationDateTime?: Date;
  /** The last time and date updated for all the alias bot replications. */
  lastUpdatedDateTime?: Date;
  /** The reasons for failure for the aliases bot replications. */
  failureReasons?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botAliasReplicaSummarySchema: Schema<BotAliasReplicaSummary> = s.object<BotAliasReplicaSummary>(
  {
    botAliasId: s.optional(s.string()),
    botAliasReplicationStatus: s.optional(s.lazy(() => botAliasReplicationStatusSchema)),
    botVersion: s.optional(s.string()),
    creationDateTime: s.optional(s.dateTime()),
    lastUpdatedDateTime: s.optional(s.dateTime()),
    failureReasons: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
