import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The category by which to filter the utterances. The descriptions for each option are as follows:
 * BotAlias – The name of the bot alias. BotVersion – The version of the bot. LocaleId – The locale
 * of the bot. Modality – The modality of the session with the bot (audio, DTMF, or text). Channel –
 * The channel that the bot is integrated with. SessionId – The identifier of the session with the
 * bot. OriginatingRequestId – The identifier of the first request in a session. UtteranceState –
 * The state of the utterance. UtteranceText – The text in the utterance.
 */
export const Name18 = {
  BotAliasId: "BotAliasId",
  BotVersion: "BotVersion",
  LocaleId: "LocaleId",
  Modality: "Modality",
  Channel: "Channel",
  SessionId: "SessionId",
  OriginatingRequestId: "OriginatingRequestId",
  UtteranceState: "UtteranceState",
  UtteranceText: "UtteranceText",
} as const;
export type Name18 = (typeof Name18)[keyof typeof Name18] | (string & {});

export const name18Schema: EnumSchema<Name18> = s.enumOf<Name18>(Name18);
