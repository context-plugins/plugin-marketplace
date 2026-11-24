import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createSignatureRequestInternalSchema,
  type CreateSignatureRequest,
} from "../models/create-signature-request.js";
import { problemInternalSchema, type Problem } from "../models/problem.js";
import {
  signatureDocumentUploadSchema,
  type SignatureDocumentUpload,
} from "../models/signature-document-upload.js";
import {
  signatureResponseV3InternalSchema,
  type SignatureResponseV3,
} from "../models/signature-response-v3.js";
import { signatureResponseInternalSchema, type SignatureResponse } from "../models/signature-response.js";
import {
  withdrawSignatureRequestInternalSchema,
  type WithdrawSignatureRequest,
} from "../models/withdraw-signature-request.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for creating and managing signature requests.
 */
export class Signature {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add an additional document
   *
   * @remarks
   * Adds an additional document to the `SignatureRequest` while it is still in `DRAFT` status.
   *
   * **Content size limits**: Very large document content is rejected by the gateway in front of the
   * API before the request reaches it, returning a `403 Forbidden` response. This currently returns
   * a plain body instead of the standard Problem+JSON error envelope used elsewhere in this API; a
   * fix to align it is planned.
   *
   * @returns OK
   *
   * @throws {@link Signature.AddDocumentInSignatureRequestError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addDocumentInSignatureRequest(
    request: Signature.AddDocumentInSignatureRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Signature.AddDocumentInSignatureRequestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultSkribbleSignatureApi("/signature-requests/{SR_ID}/documents"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "SR_ID", value: request.srId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: signatureDocumentUploadSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Signature.AddDocumentInSignatureRequestError,
      },
      options,
    );
  }

  /**
   * Create a Signature Request
   *
   * @remarks
   * Creates a new `SignatureRequest`, which is the primary object of the Skribble API. A
   * `SignatureRequest` defines who signs what and under which conditions. It specifies the
   * documents to be signed, the list of required signers, the desired signature quality and
   * legislation, and optional settings such as signing sequences, callback URLs, and access
   * control.
   *
   * Compared to API v2, this version supports attaching multiple documents to a single
   * `SignatureRequest`. Additionally, the request no longer triggers invitations immediately.
   * Instead, the `SignatureRequest` is created with a `status_overall` of `DRAFT`.
   *
   * If you specify an owner using the `creator` field, that user will find the request in the
   * Drafts section of their account, where they can review and complete the setup.
   *
   * Once ready, call `/initiate` to start the `SignatureRequest` and send out invitations.
   *
   * @returns Created
   *
   * @throws {@link Signature.CreateSignatureRequestError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSignatureRequest(
    request: Signature.CreateSignatureRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<SignatureResponseV3, Signature.CreateSignatureRequestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultSkribbleSignatureApi("/signature-requests"),
        auth: this.#auth.bearer,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createSignatureRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: signatureResponseV3InternalSchema },
        errorFactory: Signature.CreateSignatureRequestError,
      },
      options,
    );
  }

  /**
   * Remove a document
   *
   * @remarks
   * Deletes the document identified by `DOC_ID` from the `SignatureRequest` with the ID `SR_ID`.
   *
   * @returns OK
   *
   * @throws {@link Signature.DeleteDocumentInSignatureRequestError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDocumentInSignatureRequest(
    request: Signature.DeleteDocumentInSignatureRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Signature.DeleteDocumentInSignatureRequestError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultSkribbleSignatureApi(
          "/signature-requests/{SR_ID}/documents/{DOC_ID}",
        ),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "SR_ID", value: request.srId, schema: s.string() },
          { name: "DOC_ID", value: request.docId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Signature.DeleteDocumentInSignatureRequestError,
      },
      options,
    );
  }

  /**
   * Delete a Signature Request
   *
   * @remarks
   * Deletes a `SignatureRequest` by its ID.
   *
   * **Important:** A `SignatureRequest` can only be deleted via the API if:
   *
   * 1. the `SignatureRequest` has `status_overall=OPEN`, and
   *
   * 2. the API user has sufficient rights on the `SignatureRequest`, e.g. when it was created by
   *    the API user.
   *
   * Deleting a `SignatureRequest` does not necessarily remove it from the system immediately.
   *
   * **WITHDRAWN**
   *
   * When the API user is the **owner** of the `SignatureRequest` and it is still in
   * `status_overall=OPEN`, the `SignatureRequest` will be **WITHDRAWN**.
   *
   * This means the `SignatureRequest` will transition to `status_overall=WITHDRAWN` and all pending
   * signatures will be marked with `status_code=WITHDRAWN`. Sign and read rights for all signers
   * will be revoked, so invited signers can no longer read or sign the `SignatureRequest`.
   *
   * **REMOVE AS PARTICIPANT**
   *
   * When the API user is a participant but not the owner of the `SignatureRequest`, the `DELETE`
   * request will only remove the API user as a participant.
   *
   * In this case, the system will remove the `SignatureRequest` and its related documents once the
   * last remaining user deletes it via the Skribble web application.
   *
   * **DELETING**
   *
   * When the API user is the last user with access rights to the `SignatureRequest` (e.g. after a
   * **WITHDRAW**), the `SignatureRequest` and its related documents will be permanently removed
   * from the system.
   *
   * @returns OK
   *
   * @throws {@link Signature.DeleteSignatureRequestError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSignatureRequest(
    request: Signature.DeleteSignatureRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Signature.DeleteSignatureRequestError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultSkribbleSignatureApi("/signature-requests/{SR_ID}"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "SR_ID", value: request.srId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Signature.DeleteSignatureRequestError,
      },
      options,
    );
  }

  /**
   * Get a Signature Request
   *
   * @remarks
   * Fetches a `SignatureRequest` by its ID.
   *
   * @returns OK
   *
   * @throws {@link Signature.GetSignatureRequestDetailsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSignatureRequestDetails(
    request: Signature.GetSignatureRequestDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<SignatureResponseV3, Signature.GetSignatureRequestDetailsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleSignatureApi("/signature-requests/{SR_ID}"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "SR_ID", value: request.srId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: signatureResponseV3InternalSchema },
        errorFactory: Signature.GetSignatureRequestDetailsError,
      },
      options,
    );
  }

  /**
   * Invite signers and start signing process
   *
   * @remarks
   * Starts the signing process for a `SignatureRequest` in `DRAFT` status.
   *
   * This action sends out invitation emails and transitions `status_overall` from `DRAFT` to
   * `OPEN`. Once initiated, the `SignatureRequest` is no longer visible in the Drafts section and
   * will appear in the appropriate section (e.g. Pending) for each participant.
   *
   * @returns OK
   *
   * @throws {@link Signature.InitiateSignatureRequestError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  initiateSignatureRequest(
    request: Signature.InitiateSignatureRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Signature.InitiateSignatureRequestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultSkribbleSignatureApi("/signature-requests/{SR_ID}/initiate"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "SR_ID", value: request.srId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Signature.InitiateSignatureRequestError,
      },
      options,
    );
  }

  /**
   * Withdraw a Signature Request
   *
   * @remarks
   * Withdraws a `SignatureRequest`, for example when signing becomes unnecessary or an error
   * occurred during the invitation process. As the inviter, you can explicitly withdraw the
   * `SignatureRequest`. This removes all signers and observers as participants and notifies them
   * with a specified `message`.
   *
   * Similar to deletion, the `withdraw` action can only be executed if:
   *
   * - The `SignatureRequest` has `status_overall=OPEN`
   *
   * - The API user has sufficient rights on the `SignatureRequest`, such as when it was created by
   *   the API user.
   *
   * > **Note** > We recommend using the `delete` endpoint, which automatically determines > the
   * appropriate action. For example, if the API user does not have > withdrawal rights, they may
   * instead be removed as a participant, or the > document may be deleted directly. > > Use the
   * `withdraw` endpoint specifically when you need to withdraw the > `SignatureRequest` while
   * keeping it in Skribble.
   *
   * @returns OK
   *
   * @throws {@link Signature.WithdrawSignatureRequestError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  withdrawSignatureRequest(
    request: Signature.WithdrawSignatureRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<SignatureResponse, Signature.WithdrawSignatureRequestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultSkribbleSignatureApi("/signature-requests/{SR_ID}/withdraw"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "SR_ID", value: request.srId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => withdrawSignatureRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: signatureResponseInternalSchema },
        errorFactory: Signature.WithdrawSignatureRequestError,
      },
      options,
    );
  }
}

export namespace Signature {
  export type AddDocumentInSignatureRequestRequest = {
    /** Unique ID received when creating the Signature Request object */
    srId: string;
    /** Request body to add a Document */
    body: SignatureDocumentUpload;
  };

  export class AddDocumentInSignatureRequestError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddDocumentInSignatureRequestError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 403, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type CreateSignatureRequestRequest = {
    /** Request body to create a SignatureRequest object */
    body: CreateSignatureRequest;
  };

  export class CreateSignatureRequestError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSignatureRequestError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 403, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type DeleteDocumentInSignatureRequestRequest = {
    /** Unique ID received when creating the Signature Request object */
    srId: string;
    /** Unique ID received when creating the Document Request object */
    docId: string;
  };

  export class DeleteDocumentInSignatureRequestError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDocumentInSignatureRequestError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 404, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type DeleteSignatureRequestRequest = {
    /** Unique ID received when creating the Signature Request object */
    srId: string;
  };

  export class DeleteSignatureRequestError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Declared<"problem7", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSignatureRequestError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 403, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 404, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem7", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type GetSignatureRequestDetailsRequest = {
    /** Unique ID received when creating the Signature Request object */
    srId: string;
  };

  export class GetSignatureRequestDetailsError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSignatureRequestDetailsError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 404, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type InitiateSignatureRequestRequest = {
    /** Unique ID received when creating the Signature Request object */
    srId: string;
  };

  export class InitiateSignatureRequestError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<InitiateSignatureRequestError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 403, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type WithdrawSignatureRequestRequest = {
    /** Unique ID received when creating the Signature Request object */
    srId: string;
    /** Request body to withdraw a SignatureRequest object */
    body?: WithdrawSignatureRequest;
  };

  export class WithdrawSignatureRequestError extends ApiError {
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

    static readonly errors: ErrorDecoders<WithdrawSignatureRequestError> = [
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
}
