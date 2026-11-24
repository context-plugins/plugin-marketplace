import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { appEventBatchInternalSchema, type AppEventBatch } from "../models/app-event-batch.js";
import { batchErrorResponseInternalSchema, type BatchErrorResponse } from "../models/batch-error-response.js";
import { errorResponseInternalSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

export class AppEvents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Send a batch of app events to justtrack
   *
   * @remarks
   * Sends batches of batches of events where each inner batch is for a single app and user. Follows
   * a bulk processing paradigm where individual AppEventBatches in the InputBatch are processed
   * independently from each other. If an AppEventBatch fails to be processed, this does not affect
   * the processing of the other AppEventBatches in the InputBatch. For all AppEventBatches that
   * fail an individual error status is set for its batchId for the "207" status code. An individual
   * AppEventBatch is processed "all or nothing". After acceptance of a batch, there is delayed
   * processing of it in subsequent components where additional validation happens. This means that
   * even though a batch was successfully accepted, not necessarily all events will pass processing.
   * This subsequent processing includes but is not limited to:
   * - deduplication
   * - additional semantic validation
   * - user identity resolution User Identity is determined once for the whole batch for an app user
   *   combination, using the newest information which predates the newest event in the batch.
   *
   * @returns OK
   *
   * @throws {@link AppEvents.PostAppEventBatchError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApplikeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postAppEventBatch(
    request: AppEvents.PostAppEventBatchRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchErrorResponse[], AppEvents.PostAppEventBatchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/appevents/v1"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.lazy(() => appEventBatchInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => batchErrorResponseInternalSchema)) },
        errorFactory: AppEvents.PostAppEventBatchError,
      },
      options,
    );
  }
}

export namespace AppEvents {
  export type PostAppEventBatchRequest = {
    body: AppEventBatch[];
  };

  export class PostAppEventBatchError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"error502", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostAppEventBatchError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseInternalSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseInternalSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseInternalSchema } },
      { on: 502, kind: "error502", decode: { kind: "empty" } },
    ];
  }
}
