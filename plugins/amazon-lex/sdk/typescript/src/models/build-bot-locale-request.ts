import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BuildBotLocaleRequest = {
  /**
   * The identifier of the bot to build. The identifier is returned in the response from the
   * CreateBot operation.
   */
  botId: string;
  /** The version of the bot to build. This can only be the draft version of the bot. */
  botVersion: string;
  /**
   * The identifier of the language and locale that the bot will be used in. The string must match
   * one of the supported locales. All of the intents, slot types, and slots used in the bot must
   * have the same locale. For more information, see Supported languages.
   */
  localeId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buildBotLocaleRequestSchema: Schema<BuildBotLocaleRequest> = s.object<BuildBotLocaleRequest>(
  {
    botId: s.string(),
    botVersion: s.string(),
    localeId: s.string(),
  },
  { additionalProperties: s.json() },
);
