import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth, orAnonymous } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "../models/error.js";
import { usageLimitErrorSchema, type UsageLimitError } from "../models/usage-limit-error.js";
import {
  v1RecallsBatchResultsResponseSchema,
  type V1RecallsBatchResultsResponse,
} from "../models/v1-recalls-batch-results-response.js";
import {
  v1RecallsBatchStatusResponseSchema,
  type V1RecallsBatchStatusResponse,
} from "../models/v1-recalls-batch-status-response.js";
import {
  v1RecallsBatchSubmitRequestSchema,
  type V1RecallsBatchSubmitRequest,
} from "../models/v1-recalls-batch-submit-request.js";
import {
  v1RecallsBatchSubmitResponseSchema,
  type V1RecallsBatchSubmitResponse,
} from "../models/v1-recalls-batch-submit-response.js";
import { v1RecallsResponseSchema, type V1RecallsResponse } from "../models/v1-recalls-response.js";
import { v1RecallsYmmResponseSchema, type V1RecallsYmmResponse } from "../models/v1-recalls-ymm-response.js";
import type { Servers } from "../servers.js";

/**
 * Safety recalls by VIN, including bulk batches
 */
export class Recalls {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Download bulk recalls batch results
   *
   * @remarks
   * Download the results of a completed batch as CSV.
   *
   * @returns CSV results file.
   *
   * @throws {@link Recalls.DownloadRecallsBatchResultsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CarsXeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadRecallsBatchResults(
    request: Recalls.DownloadRecallsBatchResultsRequest,
    options?: RequestOptions,
  ): ApiPromise<string, Recalls.DownloadRecallsBatchResultsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/recalls-batch/download"),
        auth: anyAuth(this.#auth.apiKeyQuery, this.#auth.recallsBatchToken),
        pathParams: [],
        query: [{ name: "batchId", value: request.batchId, schema: s.string() }],
        headers: [
          { name: "X-CarsXE-Batch-Token", value: request.xCarsXeBatchToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "text", schema: s.string() },
        errorFactory: Recalls.DownloadRecallsBatchResultsError,
      },
      options,
    );
  }

  /**
   * Get bulk recalls batch results
   *
   * @remarks
   * Fetch the per-VIN recall results of a completed batch as JSON.
   *
   * @returns Batch results retrieved.
   *
   * @throws {@link Recalls.GetRecallsBatchResultsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CarsXeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRecallsBatchResults(
    request: Recalls.GetRecallsBatchResultsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1RecallsBatchResultsResponse, Recalls.GetRecallsBatchResultsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/recalls-batch/results"),
        auth: anyAuth(this.#auth.apiKeyQuery, this.#auth.recallsBatchToken),
        pathParams: [],
        query: [{ name: "batchId", value: request.batchId, schema: s.string() }],
        headers: [
          { name: "X-CarsXE-Batch-Token", value: request.xCarsXeBatchToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1RecallsBatchResultsResponseSchema },
        errorFactory: Recalls.GetRecallsBatchResultsError,
      },
      options,
    );
  }

  /**
   * Get bulk recalls batch status
   *
   * @remarks
   * Check the processing status of a previously submitted batch.
   *
   * @returns Batch status retrieved.
   *
   * @throws {@link Recalls.GetRecallsBatchStatusError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CarsXeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRecallsBatchStatus(
    request: Recalls.GetRecallsBatchStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<V1RecallsBatchStatusResponse, Recalls.GetRecallsBatchStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/recalls-batch/status"),
        auth: anyAuth(this.#auth.apiKeyQuery, this.#auth.recallsBatchToken),
        pathParams: [],
        query: [{ name: "batchId", value: request.batchId, schema: s.string() }],
        headers: [
          { name: "X-CarsXE-Batch-Token", value: request.xCarsXeBatchToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1RecallsBatchStatusResponseSchema },
        errorFactory: Recalls.GetRecallsBatchStatusError,
      },
      options,
    );
  }

  /**
   * Recalls by Year, Make & Model
   *
   * @remarks
   * Retrieve open safety recalls for a vehicle by year, make, and model — no VIN required.
   *
   * @returns Recall data retrieved.
   *
   * @throws {@link Recalls.GetRecallsByYmmError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CarsXeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRecallsByYmm(
    request: Recalls.GetRecallsByYmmRequest,
    options?: RequestOptions,
  ): ApiPromise<V1RecallsYmmResponse, Recalls.GetRecallsByYmmError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/recalls-ymm"),
        auth: orAnonymous(anyAuth(this.#auth.apiKeyQuery, this.#auth.x402Payment)),
        pathParams: [],
        query: [
          { name: "year", value: request.year, schema: s.string() },
          { name: "make", value: request.make, schema: s.string() },
          { name: "model", value: request.model, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1RecallsYmmResponseSchema },
        errorFactory: Recalls.GetRecallsByYmmError,
      },
      options,
    );
  }

  /**
   * Vehicle Recalls
   *
   * @remarks
   * Retrieve open safety recalls for a vehicle by VIN.
   *
   * @returns Recall data retrieved.
   *
   * @throws {@link Recalls.GetVehicleRecallsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CarsXeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVehicleRecalls(
    request: Recalls.GetVehicleRecallsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1RecallsResponse, Recalls.GetVehicleRecallsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/recalls"),
        auth: orAnonymous(anyAuth(this.#auth.apiKeyQuery, this.#auth.x402Payment)),
        pathParams: [],
        query: [{ name: "vin", value: request.vin, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1RecallsResponseSchema },
        errorFactory: Recalls.GetVehicleRecallsError,
      },
      options,
    );
  }

  /**
   * Submit a bulk recalls batch
   *
   * @remarks
   * Submit up to 10,000 VINs for asynchronous recall processing. Provide VINs as a JSON array
   * (`vins`), inline CSV text (`csv`), or an HTTPS link to a CSV file (`csvUrl`). Optionally
   * provide a `webhookUrl` that CarsXE will POST to when the batch finishes. Poll the status
   * endpoint or wait for the webhook, then fetch results.
   *
   * x402 submissions must use the JSON `vins` array. The `csv` and `csvUrl` forms require CarsXE
   * API-key authentication.
   *
   * @returns Batch accepted and queued for processing.
   *
   * @throws {@link Recalls.SubmitRecallsBatchError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CarsXeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  submitRecallsBatch(
    request: Recalls.SubmitRecallsBatchRequest,
    options?: RequestOptions,
  ): ApiPromise<V1RecallsBatchSubmitResponse, Recalls.SubmitRecallsBatchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/recalls-batch/submit"),
        auth: orAnonymous(anyAuth(this.#auth.apiKeyQuery, this.#auth.x402Payment)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1RecallsBatchSubmitRequestSchema },
      },
      {
        success: { kind: "json", schema: v1RecallsBatchSubmitResponseSchema },
        errorFactory: Recalls.SubmitRecallsBatchError,
      },
      options,
    );
  }
}

export namespace Recalls {
  export type DownloadRecallsBatchResultsRequest = {
    /** The batch ID returned from the submit endpoint. */
    batchId: string;
    /**
     * Batch-scoped token returned by an x402 submit call. Use this instead of the key query
     * parameter for status, results, and download requests.
     */
    xCarsXeBatchToken?: string;
  };

  export class DownloadRecallsBatchResultsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error404", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DownloadRecallsBatchResultsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type GetRecallsBatchResultsRequest = {
    /** The batch ID returned from the submit endpoint. */
    batchId: string;
    /**
     * Batch-scoped token returned by an x402 submit call. Use this instead of the key query
     * parameter for status, results, and download requests.
     */
    xCarsXeBatchToken?: string;
  };

  export class GetRecallsBatchResultsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRecallsBatchResultsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetRecallsBatchStatusRequest = {
    /** The batch ID returned from the submit endpoint. */
    batchId: string;
    /**
     * Batch-scoped token returned by an x402 submit call. Use this instead of the key query
     * parameter for status, results, and download requests.
     */
    xCarsXeBatchToken?: string;
  };

  export class GetRecallsBatchStatusError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRecallsBatchStatusError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetRecallsByYmmRequest = {
    /** The 4-digit model year (e.g. `2019`). */
    year: string;
    /** The vehicle manufacturer name (e.g. `Toyota`). Case-insensitive. */
    make: string;
    /** The vehicle model name (e.g. `Camry`). Case-insensitive. */
    model: string;
  };

  export class GetRecallsByYmmError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"usageLimitError", UsageLimitError>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRecallsByYmmError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "usageLimitError", decode: { kind: "json", schema: usageLimitErrorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetVehicleRecallsRequest = {
    /** The 17 character long vehicle identification number. */
    vin: string;
  };

  export const getVehicleRecallsRequestSchema: Schema<GetVehicleRecallsRequest> = s.lazySchema(() =>
    s.object<GetVehicleRecallsRequest>({
      vin: s.string().check(s.minLength(17), s.maxLength(17)),
    }),
  );

  export class GetVehicleRecallsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"usageLimitError", UsageLimitError>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetVehicleRecallsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "usageLimitError", decode: { kind: "json", schema: usageLimitErrorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubmitRecallsBatchRequest = {
    body: V1RecallsBatchSubmitRequest;
  };

  export class SubmitRecallsBatchError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"usageLimitError", UsageLimitError>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SubmitRecallsBatchError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 405, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "usageLimitError", decode: { kind: "json", schema: usageLimitErrorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 502, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
