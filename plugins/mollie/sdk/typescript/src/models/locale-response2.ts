import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Preset the language to be used for the login screen, if applicable. For the consent screen, the
 * preferred language of the logged in merchant will be used and this parameter is ignored.
 *
 * When this parameter is omitted, the browser language will be used instead.
 */
export const LocaleResponse2 = {
  CaEs: "ca_ES",
  CsCz: "cs_CZ",
  DaDk: "da_DK",
  DeAt: "de_AT",
  DeCh: "de_CH",
  DeDe: "de_DE",
  DeLu: "de_LU",
  ElGr: "el_GR",
  EnBe: "en_BE",
  EnGb: "en_GB",
  EnNl: "en_NL",
  EnUs: "en_US",
  EsEs: "es_ES",
  FiFi: "fi_FI",
  FrBe: "fr_BE",
  FrFr: "fr_FR",
  FrLu: "fr_LU",
  HuHu: "hu_HU",
  IsIs: "is_IS",
  ItIt: "it_IT",
  LtLt: "lt_LT",
  LvLv: "lv_LV",
  NbNo: "nb_NO",
  NlBe: "nl_BE",
  NlNl: "nl_NL",
  PlPl: "pl_PL",
  PtPt: "pt_PT",
  SkSk: "sk_SK",
  SlSi: "sl_SI",
  SvSe: "sv_SE",
  TrTr: "tr_TR",
} as const;
export type LocaleResponse2 = (typeof LocaleResponse2)[keyof typeof LocaleResponse2] | (string & {});

export const localeResponse2Schema: EnumSchema<LocaleResponse2> = s.enumOf<LocaleResponse2>(LocaleResponse2);
