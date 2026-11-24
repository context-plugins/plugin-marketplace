import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attachmentWhenSignedSchema, type AttachmentWhenSigned } from "./attachment-when-signed.js";
import { signatureAttachmentSchema, type SignatureAttachment } from "./signature-attachment.js";
import {
  signatureCallbacksResponseInternalSchema,
  signatureCallbacksResponseSchema,
  type SignatureCallbacksResponse,
} from "./signature-callbacks-response.js";
import {
  signatureDocumentResponseSchema,
  type SignatureDocumentResponse,
} from "./signature-document-response.js";
import { signatureLegislationSchema, type SignatureLegislation } from "./signature-legislation.js";
import { signatureQualitySchema, type SignatureQuality } from "./signature-quality.js";
import { signatureStatusOverallSchema, type SignatureStatusOverall } from "./signature-status-overall.js";
import {
  signatureObserverResponseInternalSchema,
  signatureObserverResponseSchema,
  type SignatureObserverResponse,
} from "./unions/signature-observer-response.js";

export type SignatureResponseV3 = {
  id?: string;
  title?: string;
  message?: string;
  documents?: SignatureDocumentResponse[];
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
   * The URL for the SignatureRequest owner to view and manage the request in the Skribble web
   * application. This URL is not intended for signers — each signer has their own dedicated
   * signing_url within the signatures array.
   */
  signingUrl?: string;
  /**
   * Overall signing status of the document.
   *
   * Possible values:
   *   - **DRAFT** The signature request has not yet been placed.
   *   - **OPEN** At least one user has not signed or declined their signature yet.
   *   - **DECLINED** At least one user declined to sign. The signature request failed.
   *   - **WITHDRAWN** The owner has withdrawn the signature request.
   *   - **SIGNED** All users signed the document. The signature request was successfully completed.
   *   - **EXPIRED** The owner-set `expires_at` date has passed before all signers signed. Terminal
   *     status.
   *   - **ERROR** A technical error occurred. The signature request cannot be completed.
   */
  statusOverall?: SignatureStatusOverall;
  businessId?: string;
  signatures?: SignatureCallbacksResponse[];
  origin?: string;
  observers?: SignatureObserverResponse[];
  /**
   * Server-managed date on which this signature request and its related documents are automatically
   * deleted in line with the owning business's retention policy. Not directly settable by API
   * clients. May be absent or `null` when no retention policy applies.
   */
  autoDeleteAt?: string;
  /**
   * Owner-set expiry date for this signature request. When this date passes, the request
   * transitions to `status_overall=EXPIRED`. Set via `expires_at` on create/update; clear via
   * `DELETE /signature-requests/{SR_ID}/expires-at`. Absent or `null` when no owner-set expiry has
   * been configured.
   */
  expiresAt?: string;
  attachments?: SignatureAttachment[];
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
  /** Custom field for storing application-specific data related to this signature request. */
  custom?: string;
  owner?: string;
  /** Users or API keys with read access to this signature request. */
  readAccess?: string[];
  /** Users or API keys with write access to this signature request. */
  writeAccess?: string[];
  createdAt?: Date;
  updatedAt?: Date;
  initiatedAt?: Date;
  /**
   * Callback URL called on overall success. See the request schema for supported placeholders and
   * retry behaviour.
   */
  callbackSuccessUrl?: string;
  /**
   * Callback URL called when a signer declines or the request is withdrawn. See the request schema
   * for supported placeholders and retry behaviour.
   */
  callbackErrorUrl?: string;
  /**
   * Callback URL called on any update (e.g. one signer signed). See the request schema for
   * supported placeholders and retry behaviour.
   */
  callbackUpdateUrl?: string;
  /**
   * Callback URL called when a signer starts the signature process (only for Express QES). See the
   * request schema for supported placeholders and retry behaviour.
   */
  callbackStartSignUrl?: string;
  /**
   * Callback URL called when the identification of a signer requires manual review. See the request
   * schema for supported placeholders and retry behaviour.
   */
  callbackIdentPendingUrl?: string;
  /**
   * Callback URL called when the identification of a signer ends in an error. See the request
   * schema for supported placeholders and retry behaviour.
   */
  callbackIdentErrorUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signatureResponseV3Properties: s.Shape<SignatureResponseV3> = {
  id: s.optional(s.string()),
  title: s.optional(s.string()),
  message: s.optional(s.string()),
  documents: s.optional(s.array(s.lazy(() => signatureDocumentResponseSchema))),
  legislation: s.optional(s.lazy(() => signatureLegislationSchema)),
  quality: s.optional(s.lazy(() => signatureQualitySchema)),
  signingUrl: s.optional(s.string()),
  statusOverall: s.optional(s.lazy(() => signatureStatusOverallSchema)),
  businessId: s.optional(s.string()),
  signatures: s.optional(s.array(s.lazy(() => signatureCallbacksResponseInternalSchema))),
  origin: s.optional(s.string()),
  observers: s.optional(s.array(s.lazy(() => signatureObserverResponseInternalSchema))),
  autoDeleteAt: s.optional(s.dateOnly()),
  expiresAt: s.optional(s.dateOnly()),
  attachments: s.optional(s.array(s.lazy(() => signatureAttachmentSchema))),
  attachOnSuccess: s.optional(s.array(s.lazy(() => attachmentWhenSignedSchema))),
  custom: s.optional(s.string()),
  owner: s.optional(s.string()),
  readAccess: s.optional(s.array(s.string())),
  writeAccess: s.optional(s.array(s.string())),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  initiatedAt: s.optional(s.dateTime()),
  callbackSuccessUrl: s.optional(s.string()),
  callbackErrorUrl: s.optional(s.string()),
  callbackUpdateUrl: s.optional(s.string()),
  callbackStartSignUrl: s.optional(s.string()),
  callbackIdentPendingUrl: s.optional(s.string()),
  callbackIdentErrorUrl: s.optional(s.string()),
  _keysMap: {
    signingUrl: "signing_url",
    statusOverall: "status_overall",
    businessId: "business_id",
    autoDeleteAt: "auto_delete_at",
    expiresAt: "expires_at",
    attachOnSuccess: "attach_on_success",
    readAccess: "read_access",
    writeAccess: "write_access",
    createdAt: "created_at",
    updatedAt: "updated_at",
    initiatedAt: "initiated_at",
    callbackSuccessUrl: "callback_success_url",
    callbackErrorUrl: "callback_error_url",
    callbackUpdateUrl: "callback_update_url",
    callbackStartSignUrl: "callback_start_sign_url",
    callbackIdentPendingUrl: "callback_ident_pending_url",
    callbackIdentErrorUrl: "callback_ident_error_url",
  },
};

export const signatureResponseV3InternalSchema: Schema<SignatureResponseV3> = s.object<SignatureResponseV3>(
  signatureResponseV3Properties,
  { additionalProperties: s.json() },
);

export const signatureResponseV3Schema: Schema<SignatureResponseV3> = s.lazySchema(() =>
  s.object<SignatureResponseV3>(
    {
      ...signatureResponseV3Properties,
      signingUrl: s.optional(s.string().check(s.url())),
      signatures: s.optional(s.array(s.lazy(() => signatureCallbacksResponseSchema))),
      observers: s.optional(s.array(s.lazy(() => signatureObserverResponseSchema))),
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
