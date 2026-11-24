import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { SignatureLanguage, signatureLanguageSchema } from "./signature-language.js";

/** Optional (no-account) signer identity information. */
export type SignerIdentityData = {
  /** Email address of no-account-signer. Mandatory when `quality` is `SES`. */
  emailAddress?: string;
  /** First name of no-account-signer */
  firstName?: string;
  /** Last name of no-account-signer */
  lastName?: string;
  /**
   * Mobile number of the no-account-signer in E.164 format without the leading `+`: country code +
   * area code + number, no spaces or special characters.
   */
  mobileNumber?: string;
  /**
   * Determines in which language e-mails are sent to the user, if the user has not set their
   * language preference yet.
   *
   * @default SignatureLanguage.En
   */
  language?: SignatureLanguage;
  /** Evidence provider where Skribble can verify the signer's identity data. */
  provider?: string;
  /**
   * Optional customer-generated identifier for further identification. When set together with
   * `notify: false`, the TAN-based email validation for No-Account-Signers (SES) is skipped,
   * allowing signers to sign directly without the Skribble TAN process.
   */
  identityReference?: string;
  /**
   * (optional) if set, even if the signer is already identified, a new identification process is
   * started to get fresh evidence records. Only supported when the signature request's quality is
   * `QES` and Express QES is enabled for the business; otherwise the request fails with a
   * validation error.
   */
  identificationRequireEvidence?: boolean;
  /**
   * (optional) if set to `true`, this signer is always identified via the standard QES flow and is
   * never routed through Express QES, regardless of the business's Express QES setting or other
   * identity flags such as `identification_require_evidence`.
   */
  forceStandardQes?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signerIdentityDataProperties: s.Shape<SignerIdentityData> = {
  emailAddress: s.optional(s.string()),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  mobileNumber: s.optional(s.string()),
  language: s.defaulted(signatureLanguageSchema, SignatureLanguage.En),
  provider: s.optional(s.string()),
  identityReference: s.optional(s.string()),
  identificationRequireEvidence: s.optional(s.boolean()),
  forceStandardQes: s.optional(s.boolean()),
  _keysMap: {
    emailAddress: "email_address",
    firstName: "first_name",
    lastName: "last_name",
    mobileNumber: "mobile_number",
    identityReference: "identity_reference",
    identificationRequireEvidence: "identification_require_evidence",
    forceStandardQes: "force_standard_qes",
  },
};

export const signerIdentityDataInternalSchema: Schema<SignerIdentityData> = s.object<SignerIdentityData>(
  signerIdentityDataProperties,
  { additionalProperties: s.json() },
);

export const signerIdentityDataSchema: Schema<SignerIdentityData> = s.lazySchema(() =>
  s.object<SignerIdentityData>(
    {
      ...signerIdentityDataProperties,
      emailAddress: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
