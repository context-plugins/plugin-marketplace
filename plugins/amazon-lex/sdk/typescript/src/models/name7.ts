import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The category by which to filter the intent stages. The descriptions for each option are as
 * follows: BotAlias – The name of the bot alias. BotVersion – The version of the bot. LocaleId –
 * The locale of the bot. Modality – The modality of the session with the bot (audio, DTMF, or
 * text). Channel – The channel that the bot is integrated with. SessionId – The identifier of the
 * session with the bot. OriginatingRequestId – The identifier of the first request in a session.
 * IntentName – The name of the intent. IntentStageName – The stage in the intent.
 */
export const Name7 = {
  BotAliasId: "BotAliasId",
  BotVersion: "BotVersion",
  LocaleId: "LocaleId",
  Modality: "Modality",
  Channel: "Channel",
  SessionId: "SessionId",
  OriginatingRequestId: "OriginatingRequestId",
  IntentName: "IntentName",
  IntentStageName: "IntentStageName",
} as const;
export type Name7 = (typeof Name7)[keyof typeof Name7] | (string & {});

export const name7Schema: EnumSchema<Name7> = s.enumOf<Name7>(Name7);
