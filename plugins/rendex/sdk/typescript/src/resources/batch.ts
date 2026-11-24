import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { batchRequestInternalSchema, type BatchRequest } from "../models/batch-request.js";
import { batchResponseSchema, type BatchResponse } from "../models/batch-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

/**
 * Multi-URL batch capture
 */
export class Batch {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Batch capture multiple URLs
   *
   * @remarks
   * Submit up to 500 URLs for capture in a single request. Each URL is processed asynchronously.
   * Returns a `batchId` that can be polled via `GET /v1/batches/{batchId}`. Shared defaults apply
   * to all URLs unless overridden per-item.
   *
   * @returns Batch accepted for processing
   *
   * @throws {@link Batch.PostScreenshotBatchError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link RendexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postScreenshotBatch(
    request: Batch.PostScreenshotBatchRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchResponse, Batch.PostScreenshotBatchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/screenshot/batch"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: batchResponseSchema },
        errorFactory: Batch.PostScreenshotBatchError,
      },
      options,
    );
  }
}

export namespace Batch {
  export type PostScreenshotBatchRequest = {
    body: BatchRequest;
  };

  export class PostScreenshotBatchError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostScreenshotBatchError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
