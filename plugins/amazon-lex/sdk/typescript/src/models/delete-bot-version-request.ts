import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteBotVersionRequest = {
  /** The identifier of the bot that contains the version. */
  botId: string;
  /** The version of the bot to delete. */
  botVersion: string;
  /**
   * By default, Amazon Lex checks if any other resource, such as an alias or bot network, is using
   * the bot version before it is deleted and throws a ResourceInUseException exception if the
   * version is being used by another resource. Set this parameter to true to skip this check and
   * remove the version even if it is being used by another resource.
   */
  skipResourceInUseCheck?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteBotVersionRequestSchema: Schema<DeleteBotVersionRequest> =
  s.object<DeleteBotVersionRequest>(
    {
      botId: s.string(),
      botVersion: s.string(),
      skipResourceInUseCheck: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
