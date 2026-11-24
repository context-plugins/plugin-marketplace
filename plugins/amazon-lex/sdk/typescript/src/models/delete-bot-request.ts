import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteBotRequest = {
  /** The identifier of the bot to delete. */
  botId: string;
  /**
   * By default, Amazon Lex checks if any other resource, such as an alias or bot network, is using
   * the bot version before it is deleted and throws a ResourceInUseException exception if the bot
   * is being used by another resource. Set this parameter to true to skip this check and remove the
   * bot even if it is being used by another resource.
   */
  skipResourceInUseCheck?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteBotRequestSchema: Schema<DeleteBotRequest> = s.object<DeleteBotRequest>(
  {
    botId: s.string(),
    skipResourceInUseCheck: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
