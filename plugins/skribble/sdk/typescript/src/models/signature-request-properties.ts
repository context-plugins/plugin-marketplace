import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attachmentWhenSignedSchema, type AttachmentWhenSigned } from "./attachment-when-signed.js";
import { signatureLegislationSchema, type SignatureLegislation } from "./signature-legislation.js";
import { signatureQualitySchema, type SignatureQuality } from "./signature-quality.js";
import {
  signatureRecipientInternalSchema,
  signatureRecipientSchema,
  type SignatureRecipient,
} from "./signature-recipient.js";

export type SignatureRequestProperties = {
  /** Title of the signature request. */
  title: string;
  /** Message sent to the other participants along with this signature request. */
  message?: string;
  /**
   * Legislation under which the signatures are created. Required when `quality` is `QES` or
   * `AES_MINIMAL`.
   *
   * | Legislation | Description |
   * | --- | --- |
   * | **ZERTES** | QES according to Swiss law. This is the **default**. |
   * | **EIDAS** | QES according to EU law. |
   */
  legislation?: SignatureLegislation;
  /**
   * Minimal quality of the signatures for this signature request.
   *
   * | Quality | Description |
   * | --- | --- |
   * | **QES** | Every signer must use QES. This is the **default** quality. Requires a `legislation` parameter. |
   * | **AES_MINIMAL** | Signers will use QES if available, otherwise AES. At least AES is guaranteed. Requires a `legislation` parameter. |
   * | **AES** | Every signer uses AES. |
   * | **SES** | Every signer uses SES. |
   * | **DEMO** | Every signer uses a DEMO signature with **no legal binding**. API demo users (`api_demo_example_*`) get this quality by default. |
   * | **PART11** | Signers use a signature compliant with 21 CFR Part 11 regulations. |
   */
  quality?: SignatureQuality;
  /**
   * List of recipients required to sign the document.
   *
   * It is possible to create a SignatureRequest where one or more invited participants won't need a
   * Skribble account to sign the SignatureRequest. Those signers are called No-Account-Signers
   * (NAS).
   *
   * To invite a No-Account-Signer (NAS), include an entry in the signatures array without an
   * `account_email` and provide the signer's details using `signer_identity_data` instead.
   *
   * Each entry in the signatures array will be treated as a distinct identity. This means two
   * entries with the same `signer_identity_data` are treated as two different identities and
   * require that this person signs the document twice.
   *
   * Optionally you can combine `signer_identity_data` and `account_email` in your requests. In this
   * case, the system checks first if there is a Skribble account with the specified e-mail address.
   * If one is found the existing Skribble user will be invited to sign the document. Otherwise, the
   * specified user in `signer_identity_data` will be invited to sign.
   *
   * > **Good to know** > We recommend combining `signer_identity_data` and `account_email` if you
   * are unsure whether the > user has a Skribble account. > The benefit is that an existing
   * Skribble user will afterwards find the SignatureRequest in the > "To sign" section of their
   * account on my.skribble.com. > Conversely, if you invite them using only `signer_identity_data`,
   * the document will not appear in > their Skribble account, even if they have one. Instead, they
   * will have to access the document > using the specific link provided in their signature
   * invitation email.
   *
   * Missing fields like first name and last name can easily be adjusted by the signer through the
   * Skribble web client.
   */
  signatures?: SignatureRecipient[];
  /**
   * Observer email addresses of users who are granted read access and to whom notifications are
   * sent. Any email address is accepted, regardless of whether the recipient already has a Skribble
   * account. If the observer does not yet have an account, they will need to create one to access
   * the document.
   */
  ccEmailAddresses?: string[];
  /**
   * Callback URL called via POST when all signers have signed (overall success).
   *
   * The URL supports the following placeholders, replaced with current SignatureRequest data before
   * each call:
   * - `SKRIBBLE_SIGNATURE_REQUEST_ID` — the SignatureRequest ID
   * - `SKRIBBLE_DOCUMENT_ID` — the final signed document ID
   *
   * **Retry:** If the endpoint is unreachable, Skribble retries every 10 minutes for up to 2 hours.
   * The endpoint can return a `Retry-After` header (seconds) to control the retry interval.
   */
  callbackSuccessUrl?: string;
  /**
   * Callback URL called via POST when a signer declines or the SignatureRequest is withdrawn.
   *
   * The URL supports the following placeholders, replaced with current SignatureRequest data before
   * each call:
   * - `SKRIBBLE_SIGNATURE_REQUEST_ID` — the SignatureRequest ID
   * - `SKRIBBLE_DOCUMENT_ID` — the most recent document ID
   *
   * **Retry:** If the endpoint is unreachable, Skribble retries every 10 minutes for up to 2 hours.
   * The endpoint can return a `Retry-After` header (seconds) to control the retry interval.
   */
  callbackErrorUrl?: string;
  /**
   * Callback URL called via POST on any change to the SignatureRequest (e.g. one signer has
   * signed).
   *
   * The URL supports the following placeholders, replaced with current SignatureRequest data before
   * each call:
   * - `SKRIBBLE_SIGNATURE_REQUEST_ID` — the SignatureRequest ID
   * - `SKRIBBLE_DOCUMENT_ID` — the most recent document ID
   * - `SKRIBBLE_SIGNATURE_ID` — the Signature ID (SID) of the signature just made
   *
   * **Retry:** If the endpoint is unreachable, Skribble retries every 10 minutes for up to 2 hours.
   * The endpoint can return a `Retry-After` header (seconds) to control the retry interval.
   */
  callbackUpdateUrl?: string;
  /**
   * Callback URL called via POST when a signer starts the signature process (only for Express QES).
   *
   * The URL supports the following placeholders, replaced with current SignatureRequest data before
   * each call:
   * - `SKRIBBLE_SIGNATURE_REQUEST_ID` — the SignatureRequest ID
   * - `SKRIBBLE_DOCUMENT_ID` — the most recent document ID
   *
   * **Retry:** If the endpoint is unreachable, Skribble retries every 10 minutes for up to 2 hours.
   * The endpoint can return a `Retry-After` header (seconds) to control the retry interval.
   */
  callbackStartSignUrl?: string;
  /**
   * Callback URL called via POST when the identification of a signer requires manual review.
   *
   * The URL supports the following placeholders, replaced with current SignatureRequest data before
   * each call:
   * - `SKRIBBLE_SIGNATURE_REQUEST_ID` — the SignatureRequest ID
   * - `SKRIBBLE_DOCUMENT_ID` — the most recent document ID
   *
   * **Retry:** If the endpoint is unreachable, Skribble retries every 10 minutes for up to 2 hours.
   * The endpoint can return a `Retry-After` header (seconds) to control the retry interval.
   */
  callbackIdentPendingUrl?: string;
  /**
   * Callback URL called via POST when the identification of a signer ends in an error.
   *
   * The URL supports the following placeholders, replaced with current SignatureRequest data before
   * each call:
   * - `SKRIBBLE_SIGNATURE_REQUEST_ID` — the SignatureRequest ID
   * - `SKRIBBLE_DOCUMENT_ID` — the most recent document ID
   *
   * **Retry:** If the endpoint is unreachable, Skribble retries every 10 minutes for up to 2 hours.
   * The endpoint can return a `Retry-After` header (seconds) to control the retry interval.
   */
  callbackIdentErrorUrl?: string;
  /** Custom field for storing application-specific data related to this signature request. */
  custom?: string;
  /**
   * **Early access.** This field is available to opted-in businesses only. To request access,
   * contact [support@skribble.com](mailto:support@skribble.com).
   *
   * Setting `expires_at` requires the signature-request expiry feature to be enabled for the
   * business. If it is not, the request fails with `403 Forbidden` (problem type
   * `feature-not-enabled`).
   *
   * Owner-set expiry date for this signature request (ISO 8601 date, e.g. `2026-12-31`).
   *
   * When set, the `SignatureRequest` transitions to `status_overall=EXPIRED` at the end of the
   * given day if it has not been completed. `EXPIRED` is a terminal status.
   *
   * **Constraints**
   *
   * - Must be today or later.
   * - Must be at most 6 months in the future.
   * - If the owning business has a retention policy configured, `expires_at` must be at most one
   *   day before the configured retention deletion date.
   *
   * Omit or send `null` to leave the request without an owner-set expiry.
   */
  expiresAt?: string;
  /**
   * When a SignatureRequest has been signed by all signers, all signers and all observers are
   * notified by email. Skribble provides the option to attach two types of attachments
   * automatically to this email:
   *   - the signed document and
   *   - the signature protocol.
   *
   * This can be configured via the business settings, which can be used to define that these
   * documents should generally be attached for all SignatureRequests created by business members.
   *
   * Alternatively it is possible to define the attachments on demand per SignatureRequest by using
   * this field.
   */
  attachOnSuccess?: AttachmentWhenSigned[];
  /** Set a business member as the owner of this signature request, in addition to the API user. */
  creator?: string;
  /** Users or API keys with write access to this signature request. */
  writeAccess?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signatureRequestPropertiesProperties: s.Shape<SignatureRequestProperties> = {
  title: s.string(),
  message: s.optional(s.string()),
  legislation: s.optional(s.lazy(() => signatureLegislationSchema)),
  quality: s.optional(s.lazy(() => signatureQualitySchema)),
  signatures: s.optional(s.array(s.lazy(() => signatureRecipientInternalSchema))),
  ccEmailAddresses: s.optional(s.array(s.string())),
  callbackSuccessUrl: s.optional(s.string()),
  callbackErrorUrl: s.optional(s.string()),
  callbackUpdateUrl: s.optional(s.string()),
  callbackStartSignUrl: s.optional(s.string()),
  callbackIdentPendingUrl: s.optional(s.string()),
  callbackIdentErrorUrl: s.optional(s.string()),
  custom: s.optional(s.string()),
  expiresAt: s.optional(s.dateOnly()),
  attachOnSuccess: s.optional(s.array(s.lazy(() => attachmentWhenSignedSchema))),
  creator: s.optional(s.string()),
  writeAccess: s.optional(s.array(s.string())),
  _keysMap: {
    ccEmailAddresses: "cc_email_addresses",
    callbackSuccessUrl: "callback_success_url",
    callbackErrorUrl: "callback_error_url",
    callbackUpdateUrl: "callback_update_url",
    callbackStartSignUrl: "callback_start_sign_url",
    callbackIdentPendingUrl: "callback_ident_pending_url",
    callbackIdentErrorUrl: "callback_ident_error_url",
    expiresAt: "expires_at",
    attachOnSuccess: "attach_on_success",
    writeAccess: "write_access",
  },
};

export const signatureRequestPropertiesInternalSchema: Schema<SignatureRequestProperties> =
  s.object<SignatureRequestProperties>(signatureRequestPropertiesProperties, {
    additionalProperties: s.json(),
  });

export const signatureRequestPropertiesSchema: Schema<SignatureRequestProperties> = s.lazySchema(() =>
  s.object<SignatureRequestProperties>(
    {
      ...signatureRequestPropertiesProperties,
      signatures: s.optional(s.array(s.lazy(() => signatureRecipientSchema))),
      ccEmailAddresses: s.optional(s.array(s.string().check(s.email()))),
      callbackSuccessUrl: s.optional(s.string().check(s.url())),
      callbackErrorUrl: s.optional(s.string().check(s.url())),
      callbackUpdateUrl: s.optional(s.string().check(s.url())),
      callbackStartSignUrl: s.optional(s.string().check(s.url())),
      callbackIdentPendingUrl: s.optional(s.string().check(s.url())),
      callbackIdentErrorUrl: s.optional(s.string().check(s.url())),
      creator: s.optional(s.string().check(s.email())),
      writeAccess: s.optional(s.array(s.string().check(s.email()))),
    },
    { additionalProperties: s.json() },
  ),
);
