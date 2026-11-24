import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The operational status of the replicated bot being monitored. */
export const BotReplicaStatus3 = {
  Enabling: "Enabling",
  Enabled: "Enabled",
  Deleting: "Deleting",
  Failed: "Failed",
} as const;
export type BotReplicaStatus3 = (typeof BotReplicaStatus3)[keyof typeof BotReplicaStatus3] | (string & {});

export const botReplicaStatus3Schema: EnumSchema<BotReplicaStatus3> =
  s.enumOf<BotReplicaStatus3>(BotReplicaStatus3);
