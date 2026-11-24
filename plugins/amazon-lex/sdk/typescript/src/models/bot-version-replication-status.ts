import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The version replication status for all the replicated bots. */
export const BotVersionReplicationStatus = {
  Creating: "Creating",
  Available: "Available",
  Deleting: "Deleting",
  Failed: "Failed",
} as const;
export type BotVersionReplicationStatus =
  | (typeof BotVersionReplicationStatus)[keyof typeof BotVersionReplicationStatus]
  | (string & {});

export const botVersionReplicationStatusSchema: EnumSchema<BotVersionReplicationStatus> =
  s.enumOf<BotVersionReplicationStatus>(BotVersionReplicationStatus);
