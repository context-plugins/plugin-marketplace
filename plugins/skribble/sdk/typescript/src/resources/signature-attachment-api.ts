import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createSignatureAttachmentRequestSchema,
  type CreateSignatureAttachmentRequest,
} from "../models/create-signature-attachment-request.js";
import { problemInternalSchema, type Problem } from "../models/problem.js";
import {
  signatureResponseSkribbleSignatureAttachmentApiInternalSchema,
  type SignatureResponseSkribbleSignatureAttachmentApi,
} from "../models/signature-response-skribble-signature-attachment-api.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for managing attachments on a signature request.
 */
export class SignatureAttachmentApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add an attachment to a signature request
   *
   * @remarks
   * Use this endpoint to provide supplementary documents (for example, Terms & Conditions or
   * appendices) to participants of a `SignatureRequest`.
   *
   * Attachments are delivered to participants together with the `SignatureRequest`.
   *
   * **Content type limits**: The Skribble API accepts PDF files, image files, Microsoft Office
   * files, and plain text files.
   *
   * Allowed content types:
   * - application/pdf
   * - application/x-tika-msoffice
   * - application/x-tika-ooxml
   * - application/msword
   * - application/vnd.openxmlformats-officedocument.wordprocessingml.document
   * - application/vnd.ms-word.document.macroEnabled.12
   * - application/vnd.ms-excel
   * - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
   * - application/vnd.ms-excel.sheet.macroenabled.12
   * - application/vnd.ms-powerpoint
   * - application/vnd.openxmlformats-officedocument.presentationml.presentation
   * - application/vnd.ms-powerpoint.presentation.macroEnabled.12
   * - image/gif
   * - image/jpeg
   * - image/png
   * - text/plain
   *
   * **Content size limits**: The maximum size of a single attachment is approximately 40 MB. The
   * maximum request size is 60 MB. Exceeding it is rejected by the gateway in front of the API
   * before the request reaches it, returning a `403 Forbidden` response. This currently returns a
   * plain body instead of the standard Problem+JSON error envelope used elsewhere in this API; a
   * fix to align it is planned.
   *
   * **Amount limits**: There is currently no limit on the number of attachments per
   * SignatureRequest. Abuse of this service may result in enforced limits.
   *
   * @returns OK
   *
   * @throws {@link SignatureAttachmentApi.CreateSignatureAttachmentError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSignatureAttachment(
    request: SignatureAttachmentApi.CreateSignatureAttachmentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    SignatureResponseSkribbleSignatureAttachmentApi,
    SignatureAttachmentApi.CreateSignatureAttachmentError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultSkribbleSignatureAttachmentApi(
          "/signature-requests/{SR_ID}/attachments",
        ),
        auth: this.#auth.bearer,
        pathParams: [{ name: "SR_ID", value: request.srId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createSignatureAttachmentRequestSchema },
      },
      {
        success: { kind: "json", schema: signatureResponseSkribbleSignatureAttachmentApiInternalSchema },
        errorFactory: SignatureAttachmentApi.CreateSignatureAttachmentError,
      },
      options,
    );
  }

  /**
   * Remove an attachment from a signature request
   *
   * @remarks
   * Deletes the attachment identified by `ATTACHMENT_ID` from the `SignatureRequest` with the ID
   * `SR_ID`.
   *
   * @returns OK
   *
   * @throws {@link SignatureAttachmentApi.DeleteSignatureAttachmentError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSignatureAttachment(
    request: SignatureAttachmentApi.DeleteSignatureAttachmentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SignatureAttachmentApi.DeleteSignatureAttachmentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultSkribbleSignatureAttachmentApi(
          "/signature-requests/{SR_ID}/attachments/{ATTACHMENT_ID}",
        ),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "SR_ID", value: request.srId, schema: s.string() },
          { name: "ATTACHMENT_ID", value: request.attachmentId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SignatureAttachmentApi.DeleteSignatureAttachmentError,
      },
      options,
    );
  }

  /**
   * Get Signature Attachment content
   *
   * @remarks
   * Downloads the content of the attachment identified by `ATTACHMENT_ID` for the
   * `SignatureRequest` with the ID `SR_ID`.
   *
   * @returns Binary attachment content.
   *
   * @throws {@link SignatureAttachmentApi.GetSignatureAttachmentContentError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSignatureAttachmentContent(
    request: SignatureAttachmentApi.GetSignatureAttachmentContentRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, SignatureAttachmentApi.GetSignatureAttachmentContentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleSignatureAttachmentApi(
          "/signature-requests/{SR_ID}/attachments/{ATTACHMENT_ID}/content",
        ),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "SR_ID", value: request.srId, schema: s.string() },
          { name: "ATTACHMENT_ID", value: request.attachmentId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: SignatureAttachmentApi.GetSignatureAttachmentContentError,
      },
      options,
    );
  }
}

export namespace SignatureAttachmentApi {
  export type CreateSignatureAttachmentRequestParams = {
    /** Unique ID received when creating the Signature Request object */
    srId: string;
    /** Request body to create a SignatureAttachment object */
    body: CreateSignatureAttachmentRequest;
  };

  export class CreateSignatureAttachmentError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Declared<"problem7", Problem>
      | Declared<"problem8", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSignatureAttachmentError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 403, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 404, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 406, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem7", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem8", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type DeleteSignatureAttachmentRequest = {
    /** Unique ID received when creating the Signature Request object */
    srId: string;
    /** Unique ID returned when the Signature Attachment is created. */
    attachmentId: string;
  };

  export class DeleteSignatureAttachmentError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSignatureAttachmentError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 404, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type GetSignatureAttachmentContentRequest = {
    /** Unique ID received when creating the Signature Request object */
    srId: string;
    /** Unique ID returned when the Signature Attachment is created. */
    attachmentId: string;
  };

  export class GetSignatureAttachmentContentError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSignatureAttachmentContentError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 404, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }
}
