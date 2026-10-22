import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { localeResponse2Schema, type LocaleResponse2 } from "./locale-response2.js";

/** Personal data of your customer. */
export type Owner = {
  /**
   * The email address of your customer.
   *
   * If the domain contains non-ASCII characters, encode it as Punycode per [RFC
   * 3492](https://www.rfc-editor.org/rfc/rfc3492).
   */
  email: string;
  /** The given name (first name) of your customer. */
  givenName: string;
  /** The family name (surname) of your customer. */
  familyName: string;
  /**
   * Preset the language to be used for the login screen, if applicable. For the consent screen, the
   * preferred language of the logged in merchant will be used and this parameter is ignored.
   *
   * When this parameter is omitted, the browser language will be used instead.
   */
  locale?: LocaleResponse2 | null;
};

export const ownerSchema: Schema<Owner> = s.object<Owner>({
  email: s.string(),
  givenName: s.string(),
  familyName: s.string(),
  locale: s.optionalNullable(s.lazy(() => localeResponse2Schema)),
});
