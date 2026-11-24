import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { BinaryContent, FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createSendToResponseInternalSchema,
  type CreateSendToResponse,
} from "../models/create-send-to-response.js";
import { problemInternalSchema, type Problem } from "../models/problem.js";
import { trackSendToResponseSchema, type TrackSendToResponse } from "../models/track-send-to-response.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for the Send-To signing flow.
 */
export class SendTo {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create a Send-To Request
   *
   * @remarks
   * Starts the signing process by uploading the PDF document `content` and assigning it a `title`.
   *
   * ### Limited lifetime
   *
   * > Send-To objects and their related Documents and SignatureRequests are only > guaranteed for a
   * **limited lifetime**. > > - A Send-To request that is not claimed by a user — i.e. where a user
   * > does not add the document to their list of documents to sign — is > deleted automatically
   * after one day. > > - All Send-To objects and their related Documents and SignatureRequest >
   * objects, regardless of status, are deleted automatically after 90 days.
   *
   * @returns OK
   *
   * @throws {@link SendTo.CreateSendToError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSendTo(
    request: SendTo.CreateSendToRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateSendToResponse, SendTo.CreateSendToError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultSkribbleSendToApi("/sendto"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "title", value: request.title, schema: s.string() },
            { kind: "file", name: "content", value: request.content },
          ],
        },
      },
      {
        success: { kind: "json", schema: createSendToResponseInternalSchema },
        errorFactory: SendTo.CreateSendToError,
      },
      options,
    );
  }

  /**
   * Delete a Send-To Request
   *
   * @remarks
   * To call the `delete` endpoint, you must include the value of the `access_code` field—received
   * when creating the `Send-To` object—in the request header `X-Accesscode`.
   *
   * This call deletes the involved `Send-To`, `Document`, and `SignatureRequest` objects regardless
   * of the current `Send-To` state.
   *
   * @returns OK
   *
   * @throws {@link SendTo.DeleteSendToError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSendTo(
    request: SendTo.DeleteSendToRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SendTo.DeleteSendToError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultSkribbleSendToApi("/sendto/{SEND_TO_ID}"),
        auth: noneAuth,
        pathParams: [{ name: "SEND_TO_ID", value: request.sendToId, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-Accesscode", value: request.xAccesscode, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SendTo.DeleteSendToError,
      },
      options,
    );
  }

  /**
   * Download Send-To Document
   *
   * @remarks
   * To call the `download` endpoint, you must include the value of the `access_code` field—received
   * when creating the `Send-To` object—in the request header `X-Accesscode`.
   *
   * The response contains the originally provided PDF document in its current state, which may be
   * signed, declined, withdrawn, or still open for signing. The current status can be retrieved
   * using the `track` endpoint.
   *
   * @returns OK
   *
   * @throws {@link SendTo.DownloadSendToError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadSendTo(
    request: SendTo.DownloadSendToRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, SendTo.DownloadSendToError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleSendToApi("/sendto/{SEND_TO_ID}/download"),
        auth: noneAuth,
        pathParams: [{ name: "SEND_TO_ID", value: request.sendToId, schema: s.string() }],
        query: [],
        headers: [{ name: "X-Accesscode", value: request.xAccesscode, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: SendTo.DownloadSendToError,
      },
      options,
    );
  }

  /**
   * Track a Send-To Request
   *
   * @remarks
   * To call the `track` endpoint, you must include the value of the `access_code` field—received
   * when creating the `Send-To` object—in the request header `X-Accesscode`.
   *
   * @returns OK
   *
   * @throws {@link SendTo.TrackSendToError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  trackSendTo(
    request: SendTo.TrackSendToRequest,
    options?: RequestOptions,
  ): ApiPromise<TrackSendToResponse, SendTo.TrackSendToError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleSendToApi("/sendto/{SEND_TO_ID}/track"),
        auth: noneAuth,
        pathParams: [{ name: "SEND_TO_ID", value: request.sendToId, schema: s.string() }],
        query: [],
        headers: [{ name: "X-Accesscode", value: request.xAccesscode, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: trackSendToResponseSchema },
        errorFactory: SendTo.TrackSendToError,
      },
      options,
    );
  }
}

export namespace SendTo {
  export type CreateSendToRequestParams = {
    /** Title of the document. */
    title: string;
    /** PDF file to upload. */
    content: FileInput;
  };

  export class CreateSendToError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSendToError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 406, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type DeleteSendToRequest = {
    /** Unique ID received when creating the Send-To object */
    sendToId: string;
    /** Access code received when creating the Send-To object */
    xAccesscode: string;
  };

  export class DeleteSendToError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSendToError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 404, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type DownloadSendToRequest = {
    /** Unique ID received when creating the Send-To object */
    sendToId: string;
    /** Access code received when creating the Send-To object */
    xAccesscode: string;
  };

  export class DownloadSendToError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<DownloadSendToError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 404, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type TrackSendToRequest = {
    /** Unique ID received when creating the Send-To object */
    sendToId: string;
    /** Access code received when creating the Send-To object */
    xAccesscode: string;
  };

  export class TrackSendToError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<TrackSendToError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 404, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }
}
