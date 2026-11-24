import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteBotLocaleRequest = {
  /** The unique identifier of the bot that contains the locale. */
  botId: string;
  /** The version of the bot that contains the locale. */
  botVersion: string;
  /**
   * The identifier of the language and locale that will be deleted. The string must match one of
   * the supported locales. For more information, see Supported languages.
   */
  localeId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteBotLocaleRequestSchema: Schema<DeleteBotLocaleRequest> = s.object<DeleteBotLocaleRequest>(
  {
    botId: s.string(),
    botVersion: s.string(),
    localeId: s.string(),
  },
  { additionalProperties: s.json() },
);
