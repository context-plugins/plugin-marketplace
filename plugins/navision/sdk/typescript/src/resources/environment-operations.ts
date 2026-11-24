import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  applicationsEnvironmentsOperationsResponseSchema,
  type ApplicationsEnvironmentsOperationsResponse,
} from "../models/applications-environments-operations-response.js";
import {
  environmentsOperationsResponseSchema,
  type EnvironmentsOperationsResponse,
} from "../models/environments-operations-response.js";
import {
  errorResponseBusinessCentralAdministrationCenterEnvironmentSchema,
  type ErrorResponseBusinessCentralAdministrationCenterEnvironment,
} from "../models/error-response-business-central-administration-center-environment.js";
import type { Servers } from "../servers.js";

/**
 * View and track environment operations
 */
export class EnvironmentOperations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Operations on All Environments
   *
   * @remarks
   * Returns operations that have occurred on all environments for the application family.
   *
   * @returns Successfully retrieved operations
   *
   * @throws {@link EnvironmentOperations.ListAllEnvironmentOperationsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listAllEnvironmentOperations(
    request: EnvironmentOperations.ListAllEnvironmentOperationsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ApplicationsEnvironmentsOperationsResponse,
    EnvironmentOperations.ListAllEnvironmentOperationsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
          "/applications/{applicationFamily}/environments/operations",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          {
            name: "applicationFamily",
            value: request.applicationFamily,
            schema: s.defaulted(s.string(), "BusinessCentral"),
          },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: applicationsEnvironmentsOperationsResponseSchema },
        errorFactory: EnvironmentOperations.ListAllEnvironmentOperationsError,
      },
      options,
    );
  }

  /**
   * List Environment Operations
   *
   * @remarks
   * Returns a list of operations that have been performed on the environment.
   *
   * @returns Successfully retrieved operations
   *
   * @throws {@link EnvironmentOperations.ListEnvironmentOperationsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listEnvironmentOperations(
    request: EnvironmentOperations.ListEnvironmentOperationsRequest,
    options?: RequestOptions,
  ): ApiPromise<EnvironmentsOperationsResponse, EnvironmentOperations.ListEnvironmentOperationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
          "/environments/{environmentName}/operations",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [{ name: "environmentName", value: request.environmentName, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: environmentsOperationsResponseSchema },
        errorFactory: EnvironmentOperations.ListEnvironmentOperationsError,
      },
      options,
    );
  }
}

export namespace EnvironmentOperations {
  export type ListAllEnvironmentOperationsRequest = {
    /** The application family (e.g., BusinessCentral) @default "BusinessCentral" */
    applicationFamily?: string;
  };

  export class ListAllEnvironmentOperationsError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterEnvironment",
          ErrorResponseBusinessCentralAdministrationCenterEnvironment
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAllEnvironmentOperationsError> = [
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterEnvironment",
        decode: { kind: "json", schema: errorResponseBusinessCentralAdministrationCenterEnvironmentSchema },
      },
    ];
  }

  export type ListEnvironmentOperationsRequest = {
    /** The name of the environment */
    environmentName: string;
  };

  export class ListEnvironmentOperationsError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterEnvironment",
          ErrorResponseBusinessCentralAdministrationCenterEnvironment
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEnvironmentOperationsError> = [
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterEnvironment",
        decode: { kind: "json", schema: errorResponseBusinessCentralAdministrationCenterEnvironmentSchema },
      },
    ];
  }
}
