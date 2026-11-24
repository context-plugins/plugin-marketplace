import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { costIngestRequestSchema, type CostIngestRequest } from "../models/cost-ingest-request.js";
import { costIngestResponseSchema, type CostIngestResponse } from "../models/cost-ingest-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

export class Costs {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Submit cost and/or usage data
   *
   * @remarks
   * Ingests a batch of cost records. Each record is either a pre-computed `cost` (caller supplies
   * amount + currency) or a `usage` record (caller supplies vendor/model/token counts and Paid
   * prices it server-side). The batch is all-or-nothing: if any record fails validation, the entire
   * request is rejected with a 400 and nothing is persisted.
   *
   * @returns 200
   *
   * @throws {@link Costs.CreateCostsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCosts(
    request: Costs.CreateCostsRequest,
    options?: RequestOptions,
  ): ApiPromise<CostIngestResponse, Costs.CreateCostsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/costs/bulk"),
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
          schema: s.optional(s.lazy(() => costIngestRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: costIngestResponseSchema },
        errorFactory: Costs.CreateCostsError,
      },
      options,
    );
  }
}

export namespace Costs {
  export type CreateCostsRequest = {
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: CostIngestRequest;
  };

  export class CreateCostsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCostsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
