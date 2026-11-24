import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The operation status for the replicated bot applicable. */
export const BotReplicaStatus = {
  Enabling: "Enabling",
  Enabled: "Enabled",
  Deleting: "Deleting",
  Failed: "Failed",
} as const;
export type BotReplicaStatus = (typeof BotReplicaStatus)[keyof typeof BotReplicaStatus] | (string & {});

export const botReplicaStatusSchema: EnumSchema<BotReplicaStatus> =
  s.enumOf<BotReplicaStatus>(BotReplicaStatus);
