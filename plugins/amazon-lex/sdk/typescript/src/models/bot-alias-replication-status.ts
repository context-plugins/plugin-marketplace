import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The replication statuses for all the alias bot replications. */
export const BotAliasReplicationStatus = {
  Creating: "Creating",
  Updating: "Updating",
  Available: "Available",
  Deleting: "Deleting",
  Failed: "Failed",
} as const;
export type BotAliasReplicationStatus =
  | (typeof BotAliasReplicationStatus)[keyof typeof BotAliasReplicationStatus]
  | (string & {});

export const botAliasReplicationStatusSchema: EnumSchema<BotAliasReplicationStatus> =
  s.enumOf<BotAliasReplicationStatus>(BotAliasReplicationStatus);
