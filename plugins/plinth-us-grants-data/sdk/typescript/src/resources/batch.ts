import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { batchRequestSchema, type BatchRequest } from "../models/batch-request.js";
import { batchResponseSchema, type BatchResponse } from "../models/batch-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import type { Servers } from "../servers.js";

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
   * Look up one field for each of up to 500 organizations in one call
   *
   * @remarks
   * The spreadsheet endpoint. Each row names an organization (an EIN, or a name to resolve) and ONE
   * field from the published vocabulary (`GET /api/v1/batch/fields`); the values come back in the
   * same order, each with a status that says whether it is an answer, an unresolved name, a field
   * the key's plan does not reach, or an error. Costs one call per 50 rows rather than one per row,
   * charged against the same allowance as every other endpoint. Rows the request cannot pay for are
   * refused as a whole before any work is done, with the number of rows the balance does cover.
   *
   * @returns One result per request row, in order.
   *
   * @throws {@link Batch.BatchLookupError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  batchLookup(
    request: Batch.BatchLookupRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchResponse, Batch.BatchLookupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/batch"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchRequestSchema },
      },
      {
        success: { kind: "json", schema: batchResponseSchema },
        errorFactory: Batch.BatchLookupError,
      },
      options,
    );
  }

  /**
   * The field vocabulary POST /batch answers, with the plan each needs
   *
   * @remarks
   * Keyless. The same list the Sheets and Excel functions offer as autocomplete, read from one
   * configuration file so the client and the server cannot disagree about a field.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listBatchFields(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/batch/fields"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Batch {
  export type BatchLookupRequest = {
    body: BatchRequest;
  };

  export class BatchLookupError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<BatchLookupError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
