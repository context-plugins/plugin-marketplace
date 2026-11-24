import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The category by which to filter the intent paths. The descriptions for each option are as
 * follows: BotAlias – The name of the bot alias. BotVersion – The version of the bot. LocaleId –
 * The locale of the bot. Modality – The modality of the session with the bot (audio, DTMF, or
 * text). Channel – The channel that the bot is integrated with.
 */
export const Name12 = {
  BotAliasId: "BotAliasId",
  BotVersion: "BotVersion",
  LocaleId: "LocaleId",
  Modality: "Modality",
  Channel: "Channel",
} as const;
export type Name12 = (typeof Name12)[keyof typeof Name12] | (string & {});

export const name12Schema: EnumSchema<Name12> = s.enumOf<Name12>(Name12);
