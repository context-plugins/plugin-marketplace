import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the alias. The status is Deleting while the alias is in the process of
 * being deleted. Once the alias is deleted, it will no longer appear in the list of aliases
 * returned by the ListBotAliases operation.
 */
export const BotAliasStatus2 = {
  Creating: "Creating",
  Available: "Available",
  Deleting: "Deleting",
  Failed: "Failed",
} as const;
export type BotAliasStatus2 = (typeof BotAliasStatus2)[keyof typeof BotAliasStatus2] | (string & {});

export const botAliasStatus2Schema: EnumSchema<BotAliasStatus2> = s.enumOf<BotAliasStatus2>(BotAliasStatus2);
