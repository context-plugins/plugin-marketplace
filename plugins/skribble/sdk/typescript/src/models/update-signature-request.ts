import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attachmentWhenSignedSchema, type AttachmentWhenSigned } from "./attachment-when-signed.js";
import { signatureLegislationSchema, type SignatureLegislation } from "./signature-legislation.js";
import { signatureQualitySchema, type SignatureQuality } from "./signature-quality.js";

export type UpdateSignatureRequest = {
  /** Unique ID of the signature request. */
  id: string;
  /** Title of the signature request. */
  title?: string;
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
  signatures?: Record<string, unknown>[] | null;
  /** Callback-URL which is called on overall success. */
  callbackSuccessUrl?: string;
  /** Callback-URL which is called in case of an error. */
  callbackErrorUrl?: string;
  /** Callback-URL which is called in case of an update. */
  callbackUpdateUrl?: string;
  /**
   * Callback-URL which is called when a signer starts the signature process (only for Express QES).
   */
  callbackStartSignUrl?: string;
  /** Callback-URL which is called when the identification of a signer requires manual review. */
  callbackIdentPendingUrl?: string;
  /** Callback-URL which is called when the identification of a signer ends in an error. */
  callbackIdentErrorUrl?: string;
  attachOnSuccess?: AttachmentWhenSigned[] | null;
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
   * To clear an existing expiry date, call `DELETE /signature-requests/{SR_ID}/expires-at`.
   *
   * **Constraints**
   *
   * - Must be today or later.
   * - Must be at most 6 months in the future.
   * - If the owning business has a retention policy configured, `expires_at` must be at most one
   *   day before the configured retention deletion date.
   * - Mutable on `status_overall=DRAFT` only. Updating on a non-`DRAFT` request returns `400 Bad
   *   Request`.
   */
  expiresAt?: string;
  writeAccess?: string[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateSignatureRequestProperties: s.Shape<UpdateSignatureRequest> = {
  id: s.string(),
  title: s.optional(s.string()),
  message: s.optional(s.string()),
  legislation: s.optional(s.lazy(() => signatureLegislationSchema)),
  quality: s.optional(s.lazy(() => signatureQualitySchema)),
  signatures: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
  callbackSuccessUrl: s.optional(s.string()),
  callbackErrorUrl: s.optional(s.string()),
  callbackUpdateUrl: s.optional(s.string()),
  callbackStartSignUrl: s.optional(s.string()),
  callbackIdentPendingUrl: s.optional(s.string()),
  callbackIdentErrorUrl: s.optional(s.string()),
  attachOnSuccess: s.optionalNullable(s.array(s.lazy(() => attachmentWhenSignedSchema))),
  expiresAt: s.optional(s.dateOnly()),
  writeAccess: s.optionalNullable(s.array(s.string())),
  _keysMap: {
    callbackSuccessUrl: "callback_success_url",
    callbackErrorUrl: "callback_error_url",
    callbackUpdateUrl: "callback_update_url",
    callbackStartSignUrl: "callback_start_sign_url",
    callbackIdentPendingUrl: "callback_ident_pending_url",
    callbackIdentErrorUrl: "callback_ident_error_url",
    attachOnSuccess: "attach_on_success",
    expiresAt: "expires_at",
    writeAccess: "write_access",
  },
};

export const updateSignatureRequestInternalSchema: Schema<UpdateSignatureRequest> =
  s.object<UpdateSignatureRequest>(updateSignatureRequestProperties, { additionalProperties: s.json() });

export const updateSignatureRequestSchema: Schema<UpdateSignatureRequest> = s.lazySchema(() =>
  s.object<UpdateSignatureRequest>(
    {
      ...updateSignatureRequestProperties,
      callbackSuccessUrl: s.optional(s.string().check(s.url())),
      callbackErrorUrl: s.optional(s.string().check(s.url())),
      callbackUpdateUrl: s.optional(s.string().check(s.url())),
      callbackStartSignUrl: s.optional(s.string().check(s.url())),
      callbackIdentPendingUrl: s.optional(s.string().check(s.url())),
      callbackIdentErrorUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
