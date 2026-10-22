import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Allows you to preset the language to be used in the hosted payment pages shown to the customer.
 * Setting a locale is highly recommended and will greatly improve your conversion rate. When this
 * parameter is omitted the browser language will be used instead if supported by the payment
 * method. You can provide any `xx_XX` format ISO 15897 locale, but our hosted payment pages
 * currently only support the specified languages.
 *
 * For bank transfer payments specifically, the locale will determine the target bank account the
 * customer has to transfer the money to. We have dedicated bank accounts for Belgium, Germany, and
 * The Netherlands. Having the customer use a local bank account greatly increases the conversion
 * and speed of payment.
 */
export const Locale2 = {
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
export type Locale2 = (typeof Locale2)[keyof typeof Locale2] | (string & {});

export const locale2Schema: EnumSchema<Locale2> = s.enumOf<Locale2>(Locale2);
