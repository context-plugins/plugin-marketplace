import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { signatureLegislation2Schema, type SignatureLegislation2 } from "./signature-legislation2.js";
import { signatureQuality2Schema, type SignatureQuality2 } from "./signature-quality2.js";
import { signatureStatusCode1Schema, type SignatureStatusCode1 } from "./signature-status-code1.js";
import {
  signerIdentityDataInResponseInternalSchema,
  signerIdentityDataInResponseSchema,
  type SignerIdentityDataInResponse,
} from "./signer-identity-data-in-response.js";
import { visualSignatureResponseSchema, type VisualSignatureResponse } from "./visual-signature-response.js";

export type SignatureCallbacksResponse1 = {
  sid?: string;
  /**
   * The state of a signature.
   *
   * Possible values:
   *   - **OPEN** Waiting for the user to sign a signature.
   *   - **WAITING** The signer is waiting for a preceding signer in the sequence to complete.
   *   - **DECLINED** The user declined to sign.
   *   - **WITHDRAWN** The owner has withdrawn the signature request.
   *   - **SIGNED** The user signed the document.
   *   - **ERROR** A technical error occurred.
   */
  statusCode?: SignatureStatusCode1;
  accountEmail?: string;
  /** Signer identity information returned as part of the SignatureRequest response. */
  signerIdentityData?: SignerIdentityDataInResponse;
  sequence?: number;
  /**
   * Whether Skribble sends notification emails to this signer. When set to `false` together with
   * `signer_identity_data.identity_reference`, the TAN-based email validation for
   * No-Account-Signers (SES) is skipped.
   */
  notify?: boolean;
  /**
   * A personalized signing URL for this specific signer, distinct from the top-level signing_url of
   * the SignatureRequest. It points to the Skribble web application and will directly open the
   * document for signing provided that the user is known to Skribble and is logged in. Otherwise,
   * the user must login or register first to be able to see the document.
   *
   * When the user visits this URL, they will be forwarded to a special preview page of the PDF
   * document and can start the signature process as usual.
   *
   * You can add the following query parameters to this signing_url. Skribble will respect these
   * parameters and redirect the user to the provided URLs once the signature process is finished.
   *
   * Example:
   * `https://my.skribble.com/view/4f43614a-de50-bfe1-2df3-4c881fc7840e/cd16bd0802d146fd94ff736d7d7bf551?exitURL=https%3A%2F%2Fmy-app.com%2Fsigned&redirectTimeout=10`
   *
   * | Parameter | Type | Description |
   * | --- | --- | --- |
   * | `exitURL` | string (URL-encoded) | Optional URL to redirect after the signature process finished. Example: `https%3A%2F%2Fgoogle.com` |
   * | `errorURL` | string (URL-encoded) | Optional URL to redirect in case of an error. Defaults to `exitURL`. Ignored if `exitURL` is not set. Example: `https%3A%2F%2Fbing.com` |
   * | `declineURL` | string (URL-encoded) | Optional URL to redirect when the user declines. Defaults to `exitURL`. Ignored if `exitURL` is not set. |
   * | `hidedownload` | boolean | Optional flag to hide the download button on the success screen. Requires `exitURL` to be set. Example: `true` |
   * | `redirectTimeout` | integer | Optional seconds before auto-redirect after signing. Min 0 (instant), max 90. Default: 45. Example: `20` |
   * | `lang` | string | Optional language code to display the signing page in a specific language. Supported values: `en` (default), `de`, `fr`. Example: `lang=fr` |
   * | `overlay` | boolean | Optional flag to show or hide the Skribble overlay on the signing page. |
   */
  signingUrl?: string;
  /**
   * The message provided by the signer when declining the signature request. Only present if the
   * signer declined and provided a message.
   */
  declineMessage?: string;
  /** Timestamp when this signer signed the document. */
  signedAt?: Date;
  /**
   * The legislation under which this signer's signature was created. Only present after signing.
   */
  signedLegislation?: SignatureLegislation2;
  /** The actual quality of this signer's signature. Only present after signing. */
  signedQuality?: SignatureQuality2;
  /** Timestamp when this signer last viewed the document. */
  lastViewedAt?: Date;
  /** Language preference for this signer. */
  language?: string;
  /** Visual signature placement information. */
  visualSignature?: VisualSignatureResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signatureCallbacksResponse1Properties: s.Shape<SignatureCallbacksResponse1> = {
  sid: s.optional(s.string()),
  statusCode: s.optional(s.lazy(() => signatureStatusCode1Schema)),
  accountEmail: s.optional(s.string()),
  signerIdentityData: s.optional(s.lazy(() => signerIdentityDataInResponseInternalSchema)),
  sequence: s.optional(s.int()),
  notify: s.optional(s.boolean()),
  signingUrl: s.optional(s.string()),
  declineMessage: s.optional(s.string()),
  signedAt: s.optional(s.dateTime()),
  signedLegislation: s.optional(s.lazy(() => signatureLegislation2Schema)),
  signedQuality: s.optional(s.lazy(() => signatureQuality2Schema)),
  lastViewedAt: s.optional(s.dateTime()),
  language: s.optional(s.string()),
  visualSignature: s.optional(s.lazy(() => visualSignatureResponseSchema)),
  _keysMap: {
    statusCode: "status_code",
    accountEmail: "account_email",
    signerIdentityData: "signer_identity_data",
    signingUrl: "signing_url",
    declineMessage: "decline_message",
    signedAt: "signed_at",
    signedLegislation: "signed_legislation",
    signedQuality: "signed_quality",
    lastViewedAt: "last_viewed_at",
    visualSignature: "visual_signature",
  },
};

export const signatureCallbacksResponse1InternalSchema: Schema<SignatureCallbacksResponse1> =
  s.object<SignatureCallbacksResponse1>(signatureCallbacksResponse1Properties, {
    additionalProperties: s.json(),
  });

export const signatureCallbacksResponse1Schema: Schema<SignatureCallbacksResponse1> = s.lazySchema(() =>
  s.object<SignatureCallbacksResponse1>(
    {
      ...signatureCallbacksResponse1Properties,
      accountEmail: s.optional(s.string().check(s.email())),
      signerIdentityData: s.optional(s.lazy(() => signerIdentityDataInResponseSchema)),
      signingUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
