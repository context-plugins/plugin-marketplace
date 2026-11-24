import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botLocaleStatus3Schema, type BotLocaleStatus3 } from "./bot-locale-status3.js";

export type DeleteBotLocaleResponse = {
  /** The identifier of the bot that contained the deleted locale. */
  botId?: string;
  /** The version of the bot that contained the deleted locale. */
  botVersion?: string;
  /** The language and locale of the deleted locale. */
  localeId?: string;
  /**
   * The status of deleting the bot locale. The locale first enters the Deleting status. Once the
   * locale is deleted it no longer appears in the list of locales for the bot.
   */
  botLocaleStatus?: BotLocaleStatus3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteBotLocaleResponseSchema: Schema<DeleteBotLocaleResponse> =
  s.object<DeleteBotLocaleResponse>(
    {
      botId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      localeId: s.optional(s.string()),
      botLocaleStatus: s.optional(s.lazy(() => botLocaleStatus3Schema)),
    },
    { additionalProperties: s.json() },
  );
