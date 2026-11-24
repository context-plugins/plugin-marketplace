import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Terms of Service acceptance. Required for the console and web channels. */
export type TermsConsent = {
  /**
   * Terms version shown to the requester; must be a version the API currently accepts, otherwise
   * terms_version_outdated.
   */
  version: string;
  accepted: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const termsConsentSchema: Schema<TermsConsent> = s.object<TermsConsent>(
  {
    version: s.string(),
    accepted: s.boolean(),
  },
  { additionalProperties: s.json() },
);
