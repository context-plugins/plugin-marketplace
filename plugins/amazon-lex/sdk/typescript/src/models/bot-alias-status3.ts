import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the alias. When the alias is Available, the alias is ready for use with
 * your bot.
 */
export const BotAliasStatus3 = {
  Creating: "Creating",
  Available: "Available",
  Deleting: "Deleting",
  Failed: "Failed",
} as const;
export type BotAliasStatus3 = (typeof BotAliasStatus3)[keyof typeof BotAliasStatus3] | (string & {});

export const botAliasStatus3Schema: EnumSchema<BotAliasStatus3> = s.enumOf<BotAliasStatus3>(BotAliasStatus3);
