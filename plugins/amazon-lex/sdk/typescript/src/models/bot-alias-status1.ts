import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the alias. The alias is first put into the Creating state. When the alias
 * is ready to be used, it is put into the Available state. You can use the DescribeBotAlias
 * operation to get the current state of an alias.
 */
export const BotAliasStatus1 = {
  Creating: "Creating",
  Available: "Available",
  Deleting: "Deleting",
  Failed: "Failed",
} as const;
export type BotAliasStatus1 = (typeof BotAliasStatus1)[keyof typeof BotAliasStatus1] | (string & {});

export const botAliasStatus1Schema: EnumSchema<BotAliasStatus1> = s.enumOf<BotAliasStatus1>(BotAliasStatus1);
