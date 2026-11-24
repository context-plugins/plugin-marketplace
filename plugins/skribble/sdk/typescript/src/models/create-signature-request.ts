import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attachmentWhenSignedSchema, type AttachmentWhenSigned } from "./attachment-when-signed.js";
import { signatureDocumentSchema, type SignatureDocument } from "./signature-document.js";
import { signatureLegislationSchema, type SignatureLegislation } from "./signature-legislation.js";
import { signatureQualitySchema, type SignatureQuality } from "./signature-quality.js";

export type CreateSignatureRequest = {
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
  /** List of documents to be signed (Maximum 50). */
  documents: SignatureDocument[];
  signatures?: Record<string, unknown>[] | null;
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
   * - Only settable while `status_overall=DRAFT`.
   *
   * Omit or send `null` to leave the request without an owner-set expiry.
   */
  expiresAt?: string;
  attachOnSuccess?: AttachmentWhenSigned[] | null;
  creator?: string | null;
  writeAccess?: string[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createSignatureRequestProperties: s.Shape<CreateSignatureRequest> = {
  title: s.string(),
  message: s.optional(s.string()),
  legislation: s.optional(s.lazy(() => signatureLegislationSchema)),
  quality: s.optional(s.lazy(() => signatureQualitySchema)),
  documents: s.array(s.lazy(() => signatureDocumentSchema)),
  signatures: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
  callbackSuccessUrl: s.optional(s.string()),
  callbackErrorUrl: s.optional(s.string()),
  callbackUpdateUrl: s.optional(s.string()),
  callbackStartSignUrl: s.optional(s.string()),
  callbackIdentPendingUrl: s.optional(s.string()),
  callbackIdentErrorUrl: s.optional(s.string()),
  custom: s.optional(s.string()),
  expiresAt: s.optional(s.dateOnly()),
  attachOnSuccess: s.optionalNullable(s.array(s.lazy(() => attachmentWhenSignedSchema))),
  creator: s.optionalNullable(s.string()),
  writeAccess: s.optionalNullable(s.array(s.string())),
  _keysMap: {
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

export const createSignatureRequestInternalSchema: Schema<CreateSignatureRequest> =
  s.object<CreateSignatureRequest>(createSignatureRequestProperties, { additionalProperties: s.json() });

export const createSignatureRequestSchema: Schema<CreateSignatureRequest> = s.lazySchema(() =>
  s.object<CreateSignatureRequest>(
    {
      ...createSignatureRequestProperties,
      documents: s.array(s.lazy(() => signatureDocumentSchema)).check(s.maxLength(50)),
      callbackSuccessUrl: s.optional(s.string().check(s.url())),
      callbackErrorUrl: s.optional(s.string().check(s.url())),
      callbackUpdateUrl: s.optional(s.string().check(s.url())),
      callbackStartSignUrl: s.optional(s.string().check(s.url())),
      callbackIdentPendingUrl: s.optional(s.string().check(s.url())),
      callbackIdentErrorUrl: s.optional(s.string().check(s.url())),
      creator: s.optionalNullable(s.string().check(s.email())),
      writeAccess: s.optionalNullable(s.array(s.string().check(s.email()))),
    },
    { additionalProperties: s.json() },
  ),
);
