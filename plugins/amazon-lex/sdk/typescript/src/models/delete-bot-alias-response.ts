import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botAliasStatus2Schema, type BotAliasStatus2 } from "./bot-alias-status2.js";

export type DeleteBotAliasResponse = {
  /** The unique identifier of the bot alias to delete. */
  botAliasId?: string;
  /** The unique identifier of the bot that contains the alias to delete. */
  botId?: string;
  /**
   * The current status of the alias. The status is Deleting while the alias is in the process of
   * being deleted. Once the alias is deleted, it will no longer appear in the list of aliases
   * returned by the ListBotAliases operation.
   */
  botAliasStatus?: BotAliasStatus2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteBotAliasResponseSchema: Schema<DeleteBotAliasResponse> = s.object<DeleteBotAliasResponse>(
  {
    botAliasId: s.optional(s.string()),
    botId: s.optional(s.string()),
    botAliasStatus: s.optional(s.lazy(() => botAliasStatus2Schema)),
  },
  { additionalProperties: s.json() },
);
