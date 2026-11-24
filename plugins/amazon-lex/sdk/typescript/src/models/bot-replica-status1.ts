import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The operational status of the replicated bot generated. */
export const BotReplicaStatus1 = {
  Enabling: "Enabling",
  Enabled: "Enabled",
  Deleting: "Deleting",
  Failed: "Failed",
} as const;
export type BotReplicaStatus1 = (typeof BotReplicaStatus1)[keyof typeof BotReplicaStatus1] | (string & {});

export const botReplicaStatus1Schema: EnumSchema<BotReplicaStatus1> =
  s.enumOf<BotReplicaStatus1>(BotReplicaStatus1);
