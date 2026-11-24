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

export type UpdateSignatureRequest1 = {
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
  signatures?: SignatureRecipient[] | null;
  ccEmailAddresses?: string[] | null;
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
  writeAccess?: string[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateSignatureRequest1Properties: s.Shape<UpdateSignatureRequest1> = {
  id: s.string(),
  title: s.optional(s.string()),
  message: s.optional(s.string()),
  legislation: s.optional(s.lazy(() => signatureLegislationSchema)),
  quality: s.optional(s.lazy(() => signatureQualitySchema)),
  signatures: s.optionalNullable(s.array(s.lazy(() => signatureRecipientInternalSchema))),
  ccEmailAddresses: s.optionalNullable(s.array(s.string())),
  callbackSuccessUrl: s.optional(s.string()),
  callbackErrorUrl: s.optional(s.string()),
  callbackUpdateUrl: s.optional(s.string()),
  callbackStartSignUrl: s.optional(s.string()),
  callbackIdentPendingUrl: s.optional(s.string()),
  callbackIdentErrorUrl: s.optional(s.string()),
  attachOnSuccess: s.optionalNullable(s.array(s.lazy(() => attachmentWhenSignedSchema))),
  writeAccess: s.optionalNullable(s.array(s.string())),
  _keysMap: {
    ccEmailAddresses: "cc_email_addresses",
    callbackSuccessUrl: "callback_success_url",
    callbackErrorUrl: "callback_error_url",
    callbackUpdateUrl: "callback_update_url",
    callbackStartSignUrl: "callback_start_sign_url",
    callbackIdentPendingUrl: "callback_ident_pending_url",
    callbackIdentErrorUrl: "callback_ident_error_url",
    attachOnSuccess: "attach_on_success",
    writeAccess: "write_access",
  },
};

export const updateSignatureRequest1InternalSchema: Schema<UpdateSignatureRequest1> =
  s.object<UpdateSignatureRequest1>(updateSignatureRequest1Properties, { additionalProperties: s.json() });

export const updateSignatureRequest1Schema: Schema<UpdateSignatureRequest1> = s.lazySchema(() =>
  s.object<UpdateSignatureRequest1>(
    {
      ...updateSignatureRequest1Properties,
      signatures: s.optionalNullable(s.array(s.lazy(() => signatureRecipientSchema))),
      ccEmailAddresses: s.optionalNullable(s.array(s.string().check(s.email()))),
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
