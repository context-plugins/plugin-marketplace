import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  experimentCreateRequestSchema,
  type ExperimentCreateRequest,
} from "../models/experiment-create-request.js";
import { experimentPropertiesSchema, type ExperimentProperties } from "../models/experiment-properties.js";
import { experimentResponseSchema, type ExperimentResponse } from "../models/experiment-response.js";
import {
  experimentResultsResponseSchema,
  type ExperimentResultsResponse,
} from "../models/experiment-results-response.js";
import {
  experimentStartResponseSchema,
  type ExperimentStartResponse,
} from "../models/experiment-start-response.js";
import {
  experimentUpdateRequestSchema,
  type ExperimentUpdateRequest,
} from "../models/experiment-update-request.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  listResponseExperimentResponseSchema,
  type ListResponseExperimentResponse,
} from "../models/list-response-experiment-response.js";
import { endDatetime3Schema, type EndDatetime3 } from "../models/unions/end-datetime3.js";
import { fields6Schema, type Fields6 } from "../models/unions/fields6.js";
import { orderByDirection1Schema, type OrderByDirection1 } from "../models/unions/order-by-direction1.js";
import { orderBy6Schema, type OrderBy6 } from "../models/unions/order-by6.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import { startDatetime3Schema, type StartDatetime3 } from "../models/unions/start-datetime3.js";
import type { Servers } from "../servers.js";

export class Experiments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Experiment
   *
   * @remarks
   * Create a new experiment.
   *
   * @returns Successful Response
   *
   * @throws {@link Experiments.ExperimentsCreateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  experimentsCreate(
    request: Experiments.ExperimentsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<ExperimentResponse, Experiments.ExperimentsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/experiments/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: experimentCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: experimentResponseSchema },
        errorFactory: Experiments.ExperimentsCreateError,
      },
      options,
    );
  }

  /**
   * Delete Experiment
   *
   * @remarks
   * Delete a (non-running) experiment.
   *
   * @returns Successful Response
   *
   * @throws {@link Experiments.ExperimentsDeleteError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  experimentsDelete(
    request: Experiments.ExperimentsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Experiments.ExperimentsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/experiments/{experiment_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "experiment_id", value: request.experimentId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Experiments.ExperimentsDeleteError,
      },
      options,
    );
  }

  /**
   * Get Experiment By Id
   *
   * @remarks
   * Get an experiment by its ID
   *
   * @returns Successful Response
   *
   * @throws {@link Experiments.ExperimentsGetByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  experimentsGetById(
    request: Experiments.ExperimentsGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ExperimentResponse, Experiments.ExperimentsGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/experiments/{experiment_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "experiment_id", value: request.experimentId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: experimentResponseSchema },
        errorFactory: Experiments.ExperimentsGetByIdError,
      },
      options,
    );
  }

  /**
   * Experiments List
   *
   * @remarks
   * List the existing experiments
   *
   * @returns Successful Response
   *
   * @throws {@link Experiments.ExperimentsListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  experimentsList(
    request: Experiments.ExperimentsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseExperimentResponse, Experiments.ExperimentsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/experiments/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => experimentPropertiesSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy6Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fields6Schema)) },
          {
            name: "start_datetime",
            value: request.startDatetime,
            schema: s.optional(s.lazy(() => startDatetime3Schema)),
          },
          {
            name: "end_datetime",
            value: request.endDatetime,
            schema: s.optional(s.lazy(() => endDatetime3Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseExperimentResponseSchema },
        errorFactory: Experiments.ExperimentsListError,
      },
      options,
    );
  }

  /**
   * Get Experiment Results
   *
   * @remarks
   * Get the number of sessions each variant of an experiment has handled.
   *
   * @returns Successful Response
   *
   * @throws {@link Experiments.ExperimentsResultsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  experimentsResults(
    request: Experiments.ExperimentsResultsRequest,
    options?: RequestOptions,
  ): ApiPromise<ExperimentResultsResponse, Experiments.ExperimentsResultsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/experiments/{experiment_id}/results"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "experiment_id", value: request.experimentId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: experimentResultsResponseSchema },
        errorFactory: Experiments.ExperimentsResultsError,
      },
      options,
    );
  }

  /**
   * Start Experiment
   *
   * @remarks
   * Start an experiment. (Only an experiment in 'draft' status can be started.)
   *
   * @returns Successful Response
   *
   * @throws {@link Experiments.ExperimentsStartError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  experimentsStart(
    request: Experiments.ExperimentsStartRequest,
    options?: RequestOptions,
  ): ApiPromise<ExperimentStartResponse, Experiments.ExperimentsStartError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/experiments/{experiment_id}/start"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "experiment_id", value: request.experimentId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: experimentStartResponseSchema },
        errorFactory: Experiments.ExperimentsStartError,
      },
      options,
    );
  }

  /**
   * Stop Experiment
   *
   * @remarks
   * Stop a running experiment.
   *
   * @returns Successful Response
   *
   * @throws {@link Experiments.ExperimentsStopError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  experimentsStop(
    request: Experiments.ExperimentsStopRequest,
    options?: RequestOptions,
  ): ApiPromise<ExperimentResponse, Experiments.ExperimentsStopError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/experiments/{experiment_id}/stop"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "experiment_id", value: request.experimentId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: experimentResponseSchema },
        errorFactory: Experiments.ExperimentsStopError,
      },
      options,
    );
  }

  /**
   * Update Experiment
   *
   * @remarks
   * Update an experiment. Only an experiment in 'draft' status can be updated.
   *
   * @returns Successful Response
   *
   * @throws {@link Experiments.ExperimentsUpdateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  experimentsUpdate(
    request: Experiments.ExperimentsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<ExperimentResponse, Experiments.ExperimentsUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/experiments/{experiment_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "experiment_id", value: request.experimentId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: experimentUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: experimentResponseSchema },
        errorFactory: Experiments.ExperimentsUpdateError,
      },
      options,
    );
  }
}

export namespace Experiments {
  export type ExperimentsCreateRequest = {
    body: ExperimentCreateRequest;
  };

  export class ExperimentsCreateError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExperimentsCreateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ExperimentsDeleteRequest = {
    experimentId: number;
  };

  export class ExperimentsDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExperimentsDeleteError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ExperimentsGetByIdRequest = {
    experimentId: number;
  };

  export class ExperimentsGetByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExperimentsGetByIdError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ExperimentsListRequest = {
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: ExperimentProperties[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy6;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The fields to include in the response */
    fields?: Fields6;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class ExperimentsListError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExperimentsListError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ExperimentsResultsRequest = {
    experimentId: number;
  };

  export class ExperimentsResultsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExperimentsResultsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ExperimentsStartRequest = {
    experimentId: number;
  };

  export class ExperimentsStartError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error409", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExperimentsStartError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ExperimentsStopRequest = {
    experimentId: number;
  };

  export class ExperimentsStopError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExperimentsStopError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ExperimentsUpdateRequest = {
    experimentId: number;
    body: ExperimentUpdateRequest;
  };

  export class ExperimentsUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error409", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExperimentsUpdateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
