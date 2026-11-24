import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { SignatureLanguage, signatureLanguageSchema } from "./signature-language.js";

/** Signer identity information returned as part of the SignatureRequest response. */
export type SignerIdentityDataInResponse = {
  /** Email address of the no-account-signer. */
  emailAddress?: string;
  /** First name of the no-account-signer. */
  firstName?: string;
  /** Last name of the no-account-signer. */
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
  /** Customer-generated identifier for further identification of the signer. */
  identityReference?: string;
  /**
   * If set, a new identification process is started to get fresh evidence records, even if the
   * signer is already identified.
   */
  identificationRequireEvidence?: boolean;
  /**
   * If set to `true`, this signer is always identified via the standard QES flow and is never
   * routed through Express QES, regardless of the business's Express QES setting or other identity
   * flags such as `identification_require_evidence`.
   */
  forceStandardQes?: boolean;
  /** Evidence provider used to verify the signer's identity. */
  provider?: string;
  /**
   * ID of the evidence records created during identification. Populated in the `SignatureRequest`
   * response once the identification process has been completed.
   */
  evidenceId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signerIdentityDataInResponseProperties: s.Shape<SignerIdentityDataInResponse> = {
  emailAddress: s.optional(s.string()),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  mobileNumber: s.optional(s.string()),
  language: s.defaulted(signatureLanguageSchema, SignatureLanguage.En),
  identityReference: s.optional(s.string()),
  identificationRequireEvidence: s.optional(s.boolean()),
  forceStandardQes: s.optional(s.boolean()),
  provider: s.optional(s.string()),
  evidenceId: s.optional(s.string()),
  _keysMap: {
    emailAddress: "email_address",
    firstName: "first_name",
    lastName: "last_name",
    mobileNumber: "mobile_number",
    identityReference: "identity_reference",
    identificationRequireEvidence: "identification_require_evidence",
    forceStandardQes: "force_standard_qes",
    evidenceId: "evidence_id",
  },
};

export const signerIdentityDataInResponseInternalSchema: Schema<SignerIdentityDataInResponse> =
  s.object<SignerIdentityDataInResponse>(signerIdentityDataInResponseProperties, {
    additionalProperties: s.json(),
  });

export const signerIdentityDataInResponseSchema: Schema<SignerIdentityDataInResponse> = s.lazySchema(() =>
  s.object<SignerIdentityDataInResponse>(
    {
      ...signerIdentityDataInResponseProperties,
      emailAddress: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
