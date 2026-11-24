import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteBotAliasRequest = {
  /** The unique identifier of the bot alias to delete. */
  botAliasId: string;
  /** The unique identifier of the bot associated with the alias to delete. */
  botId: string;
  /**
   * By default, Amazon Lex checks if any other resource, such as a bot network, is using the bot
   * alias before it is deleted and throws a ResourceInUseException exception if the alias is being
   * used by another resource. Set this parameter to true to skip this check and remove the alias
   * even if it is being used by another resource.
   */
  skipResourceInUseCheck?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteBotAliasRequestSchema: Schema<DeleteBotAliasRequest> = s.object<DeleteBotAliasRequest>(
  {
    botAliasId: s.string(),
    botId: s.string(),
    skipResourceInUseCheck: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
