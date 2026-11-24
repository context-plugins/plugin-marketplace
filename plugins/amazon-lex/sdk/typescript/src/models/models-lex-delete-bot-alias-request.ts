import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ModelsLexDeleteBotAliasRequest = {
  /** The name of the alias to delete. The name is case sensitive. */
  name: string;
  /** The name of the bot that the alias points to. */
  botName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelsLexDeleteBotAliasRequestSchema: Schema<ModelsLexDeleteBotAliasRequest> =
  s.object<ModelsLexDeleteBotAliasRequest>(
    {
      name: s.string(),
      botName: s.string(),
    },
    { additionalProperties: s.json() },
  );
