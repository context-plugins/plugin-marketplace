import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The category by which to filter the intents. The descriptions for each option are as follows:
 * BotAlias – The name of the bot alias. BotVersion – The version of the bot. LocaleId – The locale
 * of the bot. Modality – The modality of the session with the bot (audio, DTMF, or text). Channel –
 * The channel that the bot is integrated with. SessionId – The identifier of the session with the
 * bot. OriginatingRequestId – The identifier of the first request in a session. IntentName – The
 * name of the intent. IntentEndState – The final state of the intent.
 */
export const Name2 = {
  BotAliasId: "BotAliasId",
  BotVersion: "BotVersion",
  LocaleId: "LocaleId",
  Modality: "Modality",
  Channel: "Channel",
  SessionId: "SessionId",
  OriginatingRequestId: "OriginatingRequestId",
  IntentName: "IntentName",
  IntentEndState: "IntentEndState",
} as const;
export type Name2 = (typeof Name2)[keyof typeof Name2] | (string & {});

export const name2Schema: EnumSchema<Name2> = s.enumOf<Name2>(Name2);
