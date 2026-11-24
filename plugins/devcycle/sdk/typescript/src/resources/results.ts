import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { periodSchema, type Period } from "../models/period.js";
import {
  resultEvaluationsByHourDtoSchema,
  type ResultEvaluationsByHourDto,
} from "../models/result-evaluations-by-hour-dto.js";
import {
  resultProjectEvaluationsByHourDtoSchema,
  type ResultProjectEvaluationsByHourDto,
} from "../models/result-project-evaluations-by-hour-dto.js";
import {
  sdkTypeDevCycleManagementResultsApiSchema,
  type SdkTypeDevCycleManagementResultsApi,
} from "../models/sdk-type-dev-cycle-management-results-api.js";
import type { Servers } from "../servers.js";

export class Results {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Project Variable Evaluations (unique user)
   *
   * @remarks
   * Fetch unique user variable evaluations per hour for a project
   *
   * @throws {@link Results.ResultsControllerGetEvaluationsPerHourByProjectError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resultsControllerGetEvaluationsPerHourByProject(
    request: Results.ResultsControllerGetEvaluationsPerHourByProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ResultProjectEvaluationsByHourDto,
    Results.ResultsControllerGetEvaluationsPerHourByProjectError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/results/evaluations"),
        auth: noneAuth,
        pathParams: [{ name: "project", value: request.project, schema: s.string() }],
        query: [
          { name: "startDate", value: request.startDate, schema: s.optional(s.float64()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.float64()) },
          { name: "environment", value: request.environment, schema: s.optional(s.string()) },
          { name: "period", value: request.period, schema: s.optional(s.lazy(() => periodSchema)) },
          {
            name: "sdkType",
            value: request.sdkType,
            schema: s.optional(s.lazy(() => sdkTypeDevCycleManagementResultsApiSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: resultProjectEvaluationsByHourDtoSchema },
        errorFactory: Results.ResultsControllerGetEvaluationsPerHourByProjectError,
      },
      options,
    );
  }

  /**
   * Feature Variable Evaluations (total)
   *
   * @remarks
   * Fetch total variable evaluations per hour for a feature
   *
   * @throws {@link Results.ResultsControllerGetTotalEvaluationsPerHourByFeatureError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resultsControllerGetTotalEvaluationsPerHourByFeature(
    request: Results.ResultsControllerGetTotalEvaluationsPerHourByFeatureRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ResultEvaluationsByHourDto,
    Results.ResultsControllerGetTotalEvaluationsPerHourByFeatureError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{project}/features/{feature}/results/total-evaluations",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [
          { name: "startDate", value: request.startDate, schema: s.optional(s.float64()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.float64()) },
          { name: "platform", value: request.platform, schema: s.optional(s.string()) },
          { name: "variable", value: request.variable, schema: s.optional(s.string()) },
          { name: "environment", value: request.environment, schema: s.optional(s.string()) },
          { name: "period", value: request.period, schema: s.optional(s.lazy(() => periodSchema)) },
          {
            name: "sdkType",
            value: request.sdkType,
            schema: s.optional(s.lazy(() => sdkTypeDevCycleManagementResultsApiSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: resultEvaluationsByHourDtoSchema },
        errorFactory: Results.ResultsControllerGetTotalEvaluationsPerHourByFeatureError,
      },
      options,
    );
  }

  /**
   * Project Variable Evaluations (total)
   *
   * @remarks
   * Fetch total variable evaluations per hour for a project
   *
   * @throws {@link Results.ResultsControllerGetTotalEvaluationsPerHourByProjectError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resultsControllerGetTotalEvaluationsPerHourByProject(
    request: Results.ResultsControllerGetTotalEvaluationsPerHourByProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ResultProjectEvaluationsByHourDto,
    Results.ResultsControllerGetTotalEvaluationsPerHourByProjectError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/results/total-evaluations"),
        auth: noneAuth,
        pathParams: [{ name: "project", value: request.project, schema: s.string() }],
        query: [
          { name: "startDate", value: request.startDate, schema: s.optional(s.float64()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.float64()) },
          { name: "environment", value: request.environment, schema: s.optional(s.string()) },
          { name: "period", value: request.period, schema: s.optional(s.lazy(() => periodSchema)) },
          {
            name: "sdkType",
            value: request.sdkType,
            schema: s.optional(s.lazy(() => sdkTypeDevCycleManagementResultsApiSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: resultProjectEvaluationsByHourDtoSchema },
        errorFactory: Results.ResultsControllerGetTotalEvaluationsPerHourByProjectError,
      },
      options,
    );
  }
}

export namespace Results {
  export type ResultsControllerGetEvaluationsPerHourByProjectRequest = {
    /** A Project key or ID */
    project: string;
    startDate?: number;
    endDate?: number;
    /** A Environment key or ID */
    environment?: string;
    period?: Period;
    /** SDK type to filter evaluation results by */
    sdkType?: SdkTypeDevCycleManagementResultsApi;
  };

  export class ResultsControllerGetEvaluationsPerHourByProjectError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResultsControllerGetEvaluationsPerHourByProjectError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ResultsControllerGetTotalEvaluationsPerHourByFeatureRequest = {
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
    startDate?: number;
    endDate?: number;
    platform?: string;
    variable?: string;
    /** A Environment key or ID */
    environment?: string;
    period?: Period;
    /** SDK type to filter evaluation results by */
    sdkType?: SdkTypeDevCycleManagementResultsApi;
  };

  export class ResultsControllerGetTotalEvaluationsPerHourByFeatureError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResultsControllerGetTotalEvaluationsPerHourByFeatureError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ResultsControllerGetTotalEvaluationsPerHourByProjectRequest = {
    /** A Project key or ID */
    project: string;
    startDate?: number;
    endDate?: number;
    /** A Environment key or ID */
    environment?: string;
    period?: Period;
    /** SDK type to filter evaluation results by */
    sdkType?: SdkTypeDevCycleManagementResultsApi;
  };

  export class ResultsControllerGetTotalEvaluationsPerHourByProjectError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResultsControllerGetTotalEvaluationsPerHourByProjectError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
