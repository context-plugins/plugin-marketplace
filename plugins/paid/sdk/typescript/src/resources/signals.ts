import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { bulkSignalsRequestSchema, type BulkSignalsRequest } from "../models/bulk-signals-request.js";
import { bulkSignalsResponseSchema, type BulkSignalsResponse } from "../models/bulk-signals-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

export class Signals {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create signals in bulk
   *
   * @remarks
   * Create multiple signals (usage events) in a single request. Each signal must include a customer
   * attribution (either customerId or externalCustomerId) and a product attribution (either
   * productId or externalProductId).
   *
   * @returns 200
   *
   * @throws {@link Signals.CreateSignalsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSignals(
    request: Signals.CreateSignalsRequest,
    options?: RequestOptions,
  ): ApiPromise<BulkSignalsResponse, Signals.CreateSignalsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/signals/bulk"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => bulkSignalsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: bulkSignalsResponseSchema },
        errorFactory: Signals.CreateSignalsError,
      },
      options,
    );
  }
}

export namespace Signals {
  export type CreateSignalsRequest = {
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: BulkSignalsRequest;
  };

  export class CreateSignalsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSignalsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
