import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV1FaxesResponseInternalSchema,
  type ApiV1FaxesResponse,
} from "../models/api-v1-faxes-response.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { faxInternalSchema, type Fax } from "../models/fax.js";
import { Format, formatSchema } from "../models/format.js";
import { sendFaxRequestInternalSchema, type SendFaxRequest } from "../models/send-fax-request.js";
import {
  statusCallnodeIoFaxesApiSchema,
  type StatusCallnodeIoFaxesApi,
} from "../models/status-callnode-io-faxes-api.js";
import type { Servers } from "../servers.js";

/**
 * Hosted fax: send a PDF or TIFF as a fax, list and retrieve faxes sent and received on your
 * numbers, download the document, delete it. Billed per page for the pages actually transmitted;
 * documents are kept until you delete them.
 */
export class Faxes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a fax and its documents
   *
   * @remarks
   * Removes the PDF and TIFF and the fax record. The billing entry stays. A fax still in progress
   * answers 409 `job_in_progress`.
   *
   * @returns Deleted.
   *
   * @throws {@link Faxes.DeleteFaxError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteFax(
    request: Faxes.DeleteFaxRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Faxes.DeleteFaxError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/faxes/{id}"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Faxes.DeleteFaxError,
      },
      options,
    );
  }

  /**
   * Download the document
   *
   * @remarks
   * Received faxes have both formats; sent faxes keep the original PDF and the transmitted TIFF.
   *
   * @returns The document bytes.
   *
   * @throws {@link Faxes.DownloadFaxError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadFax(
    request: Faxes.DownloadFaxRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, Faxes.DownloadFaxError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/faxes/{id}/download"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Pdf) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: Faxes.DownloadFaxError,
      },
      options,
    );
  }

  /**
   * Retrieve a fax
   *
   * @returns The fax with its result fields.
   *
   * @throws {@link Faxes.GetFaxError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFax(request: Faxes.GetFaxRequest, options?: RequestOptions): ApiPromise<Fax, Faxes.GetFaxError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/faxes/{id}"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: faxInternalSchema },
        errorFactory: Faxes.GetFaxError,
      },
      options,
    );
  }

  /**
   * List faxes
   *
   * @remarks
   * Newest first, keyset-paginated. Test keys list test faxes only.
   *
   * @returns A page of faxes.
   *
   * @throws {@link Faxes.ListFaxesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFaxes(
    request: Faxes.ListFaxesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1FaxesResponse, Faxes.ListFaxesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/faxes"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusCallnodeIoFaxesApiSchema)),
          },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1FaxesResponseInternalSchema },
        errorFactory: Faxes.ListFaxesError,
      },
      options,
    );
  }

  /**
   * Send a fax
   *
   * @remarks
   * Converts the document to a fax TIFF and queues it from one of your numbers. Gates run in order:
   * number ownership, business verification, destination class, suppression (do-not-contact),
   * wholesale contract posture, document limits (20 MB, 50 pages), a per-page rate on your plan,
   * and a balance of at least `pages × rate`. Only the pages actually transmitted are charged, when
   * the fax finishes. A `cn_test_` key runs every gate and then simulates the transmission. The
   * 8am–9pm called-party window is not applied to faxes.
   *
   * @returns Queued. `estimatedCost` is the ceiling (every page at the rate); `costUsd` is filled
   * in when the fax finishes.
   *
   * @throws {@link Faxes.SendFaxError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sendFax(
    request: Faxes.SendFaxRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Fax, Faxes.SendFaxError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/faxes"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Idempotency-Key", value: request.xIdempotencyKey, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: sendFaxRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: faxInternalSchema },
        errorFactory: Faxes.SendFaxError,
      },
      options,
    );
  }
}

export namespace Faxes {
  export type DeleteFaxRequest = {
    id: string;
  };

  export class DeleteFaxError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteFaxError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DownloadFaxRequest = {
    id: string;
    /** @default Format.Pdf */
    format?: Format;
  };

  export class DownloadFaxError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<DownloadFaxError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFaxRequest = {
    id: string;
  };

  export class GetFaxError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetFaxError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListFaxesRequest = {
    direction?: Direction;
    status?: StatusCallnodeIoFaxesApi;
    /** @default 25 */
    limit?: number;
    /** The `nextCursor` of the previous page. */
    cursor?: string;
  };

  export const listFaxesRequestSchema: Schema<ListFaxesRequest> = s.lazySchema(() =>
    s.object<ListFaxesRequest>({
      direction: s.optional(s.lazy(() => directionSchema)),
      status: s.optional(s.lazy(() => statusCallnodeIoFaxesApiSchema)),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 25),
      cursor: s.optional(s.string()),
    }),
  );

  export class ListFaxesError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<ListFaxesError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SendFaxRequestParams = {
    /** A UUID. Replaying the same key returns the original result rather than acting twice. */
    xIdempotencyKey?: string;
    body: SendFaxRequest;
  };

  export class SendFaxError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Declared<"error8", Error>
      | Declared<"error9", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SendFaxError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 415, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error7", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error8", decode: { kind: "json", schema: errorSchema } },
      { on: 502, kind: "error9", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
