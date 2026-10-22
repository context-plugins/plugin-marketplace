import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  customDatasourceConfigSchema,
  type CustomDatasourceConfig,
} from "../models/custom-datasource-config.js";
import { errorInfoResponseSchema, type ErrorInfoResponse } from "../models/error-info-response.js";
import {
  getDatasourceConfigRequestSchema,
  type GetDatasourceConfigRequest,
} from "../models/get-datasource-config-request.js";
import {
  restApiIndexSubmissionsResponseSchema,
  type RestApiIndexSubmissionsResponse,
} from "../models/rest-api-index-submissions-response.js";
import type { Servers } from "../servers.js";

/**
 * Manage datasources.
 */
export class Datasources {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add or update datasource
   *
   * @remarks
   * Add or update a custom datasource and its schema.
   *
   * @returns OK
   *
   * @throws {@link Datasources.AddOrUpdateDatasourceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  addOrUpdateDatasource(
    request: Datasources.AddOrUpdateDatasourceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Datasources.AddOrUpdateDatasourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/adddatasource"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: customDatasourceConfigSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Datasources.AddOrUpdateDatasourceError,
      },
      options,
    );
  }

  /**
   * Get datasource config
   *
   * @remarks
   * Fetches the datasource config for the specified custom datasource.
   *
   * @returns OK
   *
   * @throws {@link Datasources.GetDatasourceConfigError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getDatasourceConfig(
    request: Datasources.GetDatasourceConfigRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CustomDatasourceConfig, Datasources.GetDatasourceConfigError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/getdatasourceconfig"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getDatasourceConfigRequestSchema },
      },
      {
        success: { kind: "json", schema: customDatasourceConfigSchema },
        errorFactory: Datasources.GetDatasourceConfigError,
      },
      options,
    );
  }

  /**
   * Submit datasource data
   *
   * @remarks
   * Validates and asynchronously processes a datasource-specific submission.
   *
   * @returns Accepted
   *
   * @throws {@link Datasources.SubmitDatasourceDataError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  submitDatasourceData(
    request: Datasources.SubmitDatasourceDataRequest,
    options?: RequestOptions,
  ): ApiPromise<RestApiIndexSubmissionsResponse, Datasources.SubmitDatasourceDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/index/submissions/{datasourceInstance}/{type}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "datasourceInstance", value: request.datasourceInstance, schema: s.string() },
          { name: "type", value: request.type, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: restApiIndexSubmissionsResponseSchema },
        errorFactory: Datasources.SubmitDatasourceDataError,
      },
      options,
    );
  }
}

export namespace Datasources {
  export type AddOrUpdateDatasourceRequest = {
    body: CustomDatasourceConfig;
  };

  export class AddOrUpdateDatasourceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AddOrUpdateDatasourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type GetDatasourceConfigRequestParams = {
    body: GetDatasourceConfigRequest;
  };

  export class GetDatasourceConfigError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDatasourceConfigError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type SubmitDatasourceDataRequest = {
    /** Datasource instance that should process the submission */
    datasourceInstance: string;
    /** Submission type registered for the datasource */
    type: string;
    body: Record<string, unknown>;
  };

  export class SubmitDatasourceDataError extends ApiError {
    declare readonly payload:
      | Declared<"errorInfoResponse", ErrorInfoResponse>
      | Declared<"errorInfoResponse2", ErrorInfoResponse>
      | Declared<"errorInfoResponse3", ErrorInfoResponse>
      | Declared<"error405", undefined>
      | Declared<"error413", undefined>
      | Declared<"errorInfoResponse4", ErrorInfoResponse>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SubmitDatasourceDataError> = [
      { on: 400, kind: "errorInfoResponse", decode: { kind: "json", schema: errorInfoResponseSchema } },
      { on: 401, kind: "errorInfoResponse2", decode: { kind: "json", schema: errorInfoResponseSchema } },
      { on: 404, kind: "errorInfoResponse3", decode: { kind: "json", schema: errorInfoResponseSchema } },
      { on: 405, kind: "error405", decode: { kind: "empty" } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 500, kind: "errorInfoResponse4", decode: { kind: "json", schema: errorInfoResponseSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }
}
