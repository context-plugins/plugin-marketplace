import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current state of the bot alias. If the status is Available, the alias is ready for use. */
export const BotAliasStatus = {
  Creating: "Creating",
  Available: "Available",
  Deleting: "Deleting",
  Failed: "Failed",
} as const;
export type BotAliasStatus = (typeof BotAliasStatus)[keyof typeof BotAliasStatus] | (string & {});

export const botAliasStatusSchema: EnumSchema<BotAliasStatus> = s.enumOf<BotAliasStatus>(BotAliasStatus);
