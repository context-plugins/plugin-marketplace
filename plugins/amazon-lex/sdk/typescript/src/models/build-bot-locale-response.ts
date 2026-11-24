import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botLocaleStatus1Schema, type BotLocaleStatus1 } from "./bot-locale-status1.js";

export type BuildBotLocaleResponse = {
  /** The identifier of the specified bot. */
  botId?: string;
  /** The version of the bot that was built. This is only the draft version of the bot. */
  botVersion?: string;
  /** The language and locale specified of where the bot can be used. */
  localeId?: string;
  /**
   * The bot's build status. When the status is ReadyExpressTesting you can test the bot using the
   * utterances defined for the intents and slot types. When the status is Built, the bot is ready
   * for use and can be tested using any utterance.
   */
  botLocaleStatus?: BotLocaleStatus1;
  /** A timestamp indicating the date and time that the bot was last built for this locale. */
  lastBuildSubmittedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buildBotLocaleResponseSchema: Schema<BuildBotLocaleResponse> = s.object<BuildBotLocaleResponse>(
  {
    botId: s.optional(s.string()),
    botVersion: s.optional(s.string()),
    localeId: s.optional(s.string()),
    botLocaleStatus: s.optional(s.lazy(() => botLocaleStatus1Schema)),
    lastBuildSubmittedDateTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
