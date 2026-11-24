import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The category by which to filter the sessions. The descriptions for each option are as follows:
 * BotAlias – The name of the bot alias. BotVersion – The version of the bot. LocaleId – The locale
 * of the bot. Modality – The modality of the session with the bot (audio, DTMF, or text). Channel –
 * The channel that the bot is integrated with. Duration – The duration of the session.
 * conversationEndState – The final state of the session. SessionId – The identifier of the session
 * with the bot. OriginatingRequestId – The identifier of the first request in a session. IntentPath
 * – The order of intents taken i
 */
export const Name13 = {
  BotAliasId: "BotAliasId",
  BotVersion: "BotVersion",
  LocaleId: "LocaleId",
  Modality: "Modality",
  Channel: "Channel",
  Duration: "Duration",
  ConversationEndState: "ConversationEndState",
  SessionId: "SessionId",
  OriginatingRequestId: "OriginatingRequestId",
  IntentPath: "IntentPath",
} as const;
export type Name13 = (typeof Name13)[keyof typeof Name13] | (string & {});

export const name13Schema: EnumSchema<Name13> = s.enumOf<Name13>(Name13);
