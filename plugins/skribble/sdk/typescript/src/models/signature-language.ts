import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Determines in which language e-mails are sent to the user, if the user has not set their language
 * preference yet.
 */
export const SignatureLanguage = {
  En: "en",
  De: "de",
  Fr: "fr",
  It: "it",
} as const;
export type SignatureLanguage = (typeof SignatureLanguage)[keyof typeof SignatureLanguage] | (string & {});

export const signatureLanguageSchema: EnumSchema<SignatureLanguage> =
  s.enumOf<SignatureLanguage>(SignatureLanguage);
