import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botAliasStatusSchema, type BotAliasStatus } from "./bot-alias-status.js";

export type BotAliasSummary = {
  /**
   * The unique identifier assigned to the bot alias. You can use this ID to get detailed
   * information about the alias using the DescribeBotAlias operation.
   */
  botAliasId?: string;
  /** The name of the bot alias. */
  botAliasName?: string;
  /** The description of the bot alias. */
  description?: string;
  /** The version of the bot that the bot alias references. */
  botVersion?: string;
  /** The current state of the bot alias. If the status is Available, the alias is ready for use. */
  botAliasStatus?: BotAliasStatus;
  /** A timestamp of the date and time that the bot alias was created. */
  creationDateTime?: Date;
  /** A timestamp of the date and time that the bot alias was last updated. */
  lastUpdatedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botAliasSummarySchema: Schema<BotAliasSummary> = s.object<BotAliasSummary>(
  {
    botAliasId: s.optional(s.string()),
    botAliasName: s.optional(s.string()),
    description: s.optional(s.string()),
    botVersion: s.optional(s.string()),
    botAliasStatus: s.optional(s.lazy(() => botAliasStatusSchema)),
    creationDateTime: s.optional(s.dateTime()),
    lastUpdatedDateTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
