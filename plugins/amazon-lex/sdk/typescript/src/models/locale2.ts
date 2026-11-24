import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the target locale for the bot. Any intent used in the bot must be compatible with the
 * locale of the bot. The default is en-US.
 */
export const Locale2 = {
  DeDe: "de-DE",
  EnAu: "en-AU",
  EnGb: "en-GB",
  EnIn: "en-IN",
  EnUs: "en-US",
  Es419: "es-419",
  EsEs: "es-ES",
  EsUs: "es-US",
  FrFr: "fr-FR",
  FrCa: "fr-CA",
  ItIt: "it-IT",
  JaJp: "ja-JP",
  KoKr: "ko-KR",
} as const;
export type Locale2 = (typeof Locale2)[keyof typeof Locale2] | (string & {});

export const locale2Schema: EnumSchema<Locale2> = s.enumOf<Locale2>(Locale2);
