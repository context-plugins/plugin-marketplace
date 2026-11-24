import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createSignRequestInputInternalSchema,
  createSignRequestInputSchema,
  type CreateSignRequestInput,
} from "../models/create-sign-request-input.js";
import { error1Schema, type Error1 } from "../models/error1.js";
import { notFound1Schema, type NotFound1 } from "../models/not-found1.js";
import {
  signRequestsCancelResponseInternalSchema,
  type SignRequestsCancelResponse,
} from "../models/sign-requests-cancel-response.js";
import {
  signRequestsResponseInternalSchema,
  type SignRequestsResponse,
} from "../models/sign-requests-response.js";
import {
  signRequestsResponse1InternalSchema,
  type SignRequestsResponse1,
} from "../models/sign-requests-response1.js";
import {
  signRequestsResponse2InternalSchema,
  type SignRequestsResponse2,
} from "../models/sign-requests-response2.js";
import {
  signRequestsSendResponseInternalSchema,
  type SignRequestsSendResponse,
} from "../models/sign-requests-send-response.js";
import {
  statusJuriSignSignRequestsApiSchema,
  type StatusJuriSignSignRequestsApi,
} from "../models/status-juri-sign-sign-requests-api.js";
import { unauthenticated1Schema, type Unauthenticated1 } from "../models/unauthenticated1.js";
import { validationError1Schema, type ValidationError1 } from "../models/validation-error1.js";
import type { Servers } from "../servers.js";

/**
 * Create, send, and track signature requests
 */
export class SignRequests {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel Sign Request
   *
   * @remarks
   * Cancel a pending signature request. Only requests in `pending` status can be cancelled.
   *
   * @returns Request cancelled
   *
   * @throws {@link SignRequests.CancelSignRequestError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelSignRequest(
    request: SignRequests.CancelSignRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<SignRequestsCancelResponse, SignRequests.CancelSignRequestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sign-requests/{id}/cancel"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: signRequestsCancelResponseInternalSchema },
        errorFactory: SignRequests.CancelSignRequestError,
      },
      options,
    );
  }

  /**
   * Create Sign Request
   *
   * @remarks
   * Create a new signature request with one or more signers. The request is created in `draft`
   * status and must be sent explicitly via the send endpoint.
   *
   * @returns Sign request created
   *
   * @throws {@link SignRequests.CreateSignRequestError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSignRequest(
    request: SignRequests.CreateSignRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<SignRequestsResponse1, SignRequests.CreateSignRequestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sign-requests"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: createSignRequestInputInternalSchema },
      },
      {
        success: { kind: "json", schema: signRequestsResponse1InternalSchema },
        errorFactory: SignRequests.CreateSignRequestError,
      },
      options,
    );
  }

  /**
   * Download Audit Proof
   *
   * @remarks
   * Download the audit proof PDF, containing a detailed log of all signing actions with timestamps
   * and IP addresses.
   *
   * @returns Audit proof PDF
   *
   * @throws {@link SignRequests.DownloadProofError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadProof(
    request: SignRequests.DownloadProofRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, SignRequests.DownloadProofError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sign-requests/{id}/proof"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: SignRequests.DownloadProofError,
      },
      options,
    );
  }

  /**
   * Download Signed PDF
   *
   * @remarks
   * Download the signed PDF document. Only available after all signers have completed signing.
   *
   * @returns Signed PDF file
   *
   * @throws {@link SignRequests.DownloadSignedPdfError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadSignedPdf(
    request: SignRequests.DownloadSignedPdfRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, SignRequests.DownloadSignedPdfError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sign-requests/{id}/download"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: SignRequests.DownloadSignedPdfError,
      },
      options,
    );
  }

  /**
   * Get Sign Request
   *
   * @remarks
   * Retrieve full details of a signature request, including signers, signature zones, and download
   * links.
   *
   * @returns Sign request details
   *
   * @throws {@link SignRequests.GetSignRequestError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSignRequest(
    request: SignRequests.GetSignRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<SignRequestsResponse2, SignRequests.GetSignRequestError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sign-requests/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: signRequestsResponse2InternalSchema },
        errorFactory: SignRequests.GetSignRequestError,
      },
      options,
    );
  }

  /**
   * List Sign Requests
   *
   * @remarks
   * Retrieve a paginated list of signature requests.
   *
   * @returns Sign requests list
   *
   * @throws {@link SignRequests.ListSignRequestsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSignRequests(
    request: SignRequests.ListSignRequestsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<SignRequestsResponse, SignRequests.ListSignRequestsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sign-requests"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusJuriSignSignRequestsApiSchema)),
          },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 20) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: signRequestsResponseInternalSchema },
        errorFactory: SignRequests.ListSignRequestsError,
      },
      options,
    );
  }

  /**
   * Send Sign Request
   *
   * @remarks
   * Send the signature request to all signers. This changes the status from `draft` to `pending`
   * and sends invitation emails.
   *
   * @returns Request sent to signers
   *
   * @throws {@link SignRequests.SendSignRequestError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sendSignRequest(
    request: SignRequests.SendSignRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<SignRequestsSendResponse, SignRequests.SendSignRequestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sign-requests/{id}/send"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: signRequestsSendResponseInternalSchema },
        errorFactory: SignRequests.SendSignRequestError,
      },
      options,
    );
  }
}

export namespace SignRequests {
  export type CancelSignRequestRequest = {
    /** Resource UUID */
    id: string;
  };

  export class CancelSignRequestError extends ApiError {
    declare readonly payload:
      | Declared<"unauthenticated1", Unauthenticated1>
      | Declared<"notFound1", NotFound1>
      | Declared<"error1", Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelSignRequestError> = [
      { on: 401, kind: "unauthenticated1", decode: { kind: "json", schema: unauthenticated1Schema } },
      { on: 404, kind: "notFound1", decode: { kind: "json", schema: notFound1Schema } },
      { on: 422, kind: "error1", decode: { kind: "json", schema: error1Schema } },
    ];
  }

  export type CreateSignRequestRequest = {
    /**
     * Optional. Send a unique key (for example your own order reference) to make this call safely
     * repeatable. If the network drops after your request reaches us but before you get the
     * response, replay the exact same call with the same key: you receive the original response —
     * same body, same status, with an `Idempotent-Replayed: true` header — and no second signature
     * request is created, so no second SMS is billed. Reusing a key with a DIFFERENT body returns
     * 409: that is an integration bug, not a retry. Keys are scoped to your organization and
     * honoured for 24 hours. Failed responses never consume a key.
     */
    idempotencyKey?: string;
    body: CreateSignRequestInput;
  };

  export const createSignRequestRequestSchema: Schema<CreateSignRequestRequest> = s.lazySchema(() =>
    s.object<CreateSignRequestRequest>({
      idempotencyKey: s.optional(s.string().check(s.maxLength(255))),
      body: createSignRequestInputSchema,
    }),
  );

  export class CreateSignRequestError extends ApiError {
    declare readonly payload:
      | Declared<"unauthenticated1", Unauthenticated1>
      | Declared<"validationError1", ValidationError1>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSignRequestError> = [
      { on: 401, kind: "unauthenticated1", decode: { kind: "json", schema: unauthenticated1Schema } },
      { on: 422, kind: "validationError1", decode: { kind: "json", schema: validationError1Schema } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type DownloadProofRequest = {
    /** Resource UUID */
    id: string;
  };

  export class DownloadProofError extends ApiError {
    declare readonly payload:
      | Declared<"unauthenticated1", Unauthenticated1>
      | Declared<"notFound1", NotFound1>
      | Undeclared;

    static readonly errors: ErrorDecoders<DownloadProofError> = [
      { on: 401, kind: "unauthenticated1", decode: { kind: "json", schema: unauthenticated1Schema } },
      { on: 404, kind: "notFound1", decode: { kind: "json", schema: notFound1Schema } },
    ];
  }

  export type DownloadSignedPdfRequest = {
    /** Resource UUID */
    id: string;
  };

  export class DownloadSignedPdfError extends ApiError {
    declare readonly payload:
      | Declared<"unauthenticated1", Unauthenticated1>
      | Declared<"notFound1", NotFound1>
      | Undeclared;

    static readonly errors: ErrorDecoders<DownloadSignedPdfError> = [
      { on: 401, kind: "unauthenticated1", decode: { kind: "json", schema: unauthenticated1Schema } },
      { on: 404, kind: "notFound1", decode: { kind: "json", schema: notFound1Schema } },
    ];
  }

  export type GetSignRequestRequest = {
    /** Resource UUID */
    id: string;
  };

  export class GetSignRequestError extends ApiError {
    declare readonly payload:
      | Declared<"unauthenticated1", Unauthenticated1>
      | Declared<"notFound1", NotFound1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSignRequestError> = [
      { on: 401, kind: "unauthenticated1", decode: { kind: "json", schema: unauthenticated1Schema } },
      { on: 404, kind: "notFound1", decode: { kind: "json", schema: notFound1Schema } },
    ];
  }

  export type ListSignRequestsRequest = {
    /** Filter by status */
    status?: StatusJuriSignSignRequestsApi;
    /** @default 20 */
    perPage?: number;
    /** @default 1 */
    page?: number;
  };

  export class ListSignRequestsError extends ApiError {
    declare readonly payload: Declared<"unauthenticated1", Unauthenticated1> | Undeclared;

    static readonly errors: ErrorDecoders<ListSignRequestsError> = [
      { on: 401, kind: "unauthenticated1", decode: { kind: "json", schema: unauthenticated1Schema } },
    ];
  }

  export type SendSignRequestRequest = {
    /** Resource UUID */
    id: string;
  };

  export class SendSignRequestError extends ApiError {
    declare readonly payload:
      | Declared<"unauthenticated1", Unauthenticated1>
      | Declared<"notFound1", NotFound1>
      | Declared<"error1", Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SendSignRequestError> = [
      { on: 401, kind: "unauthenticated1", decode: { kind: "json", schema: unauthenticated1Schema } },
      { on: 404, kind: "notFound1", decode: { kind: "json", schema: notFound1Schema } },
      { on: 422, kind: "error1", decode: { kind: "json", schema: error1Schema } },
    ];
  }
}
