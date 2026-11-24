import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the bot alias. When the status is Available the alias is ready for use. */
export const BotAliasStatus4 = {
  Creating: "Creating",
  Available: "Available",
  Deleting: "Deleting",
  Failed: "Failed",
} as const;
export type BotAliasStatus4 = (typeof BotAliasStatus4)[keyof typeof BotAliasStatus4] | (string & {});

export const botAliasStatus4Schema: EnumSchema<BotAliasStatus4> = s.enumOf<BotAliasStatus4>(BotAliasStatus4);
