import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The user's language */
export const Lang = {
  Cs: "cs",
  Da: "da",
  De: "de",
  En: "en",
  Es: "es",
  Fi: "fi",
  Fr: "fr",
  It: "it",
  Ja: "ja",
  Ko: "ko",
  Nl: "nl",
  Pl: "pl",
  PtBr: "pt_BR",
  Ru: "ru",
  Sv: "sv",
  Tr: "tr",
  ZhCn: "zh_CN",
  ZhTw: "zh_TW",
} as const;
export type Lang = (typeof Lang)[keyof typeof Lang] | (string & {});

export const langSchema: EnumSchema<Lang> = s.enumOf<Lang>(Lang);
