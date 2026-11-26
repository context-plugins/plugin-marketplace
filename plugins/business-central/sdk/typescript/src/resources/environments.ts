import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  applicationsEnvironmentsAvailableRestorePeriodsResponseSchema,
  type ApplicationsEnvironmentsAvailableRestorePeriodsResponse,
} from "../models/applications-environments-available-restore-periods-response.js";
import {
  applicationsEnvironmentsRenameRequestSchema,
  type ApplicationsEnvironmentsRenameRequest,
} from "../models/applications-environments-rename-request.js";
import {
  applicationsEnvironmentsResponseInternalSchema,
  type ApplicationsEnvironmentsResponse,
} from "../models/applications-environments-response.js";
import {
  copyEnvironmentRequestSchema,
  type CopyEnvironmentRequest,
} from "../models/copy-environment-request.js";
import {
  createEnvironmentRequestSchema,
  type CreateEnvironmentRequest,
} from "../models/create-environment-request.js";
import { environmentOperationSchema, type EnvironmentOperation } from "../models/environment-operation.js";
import { environmentInternalSchema, type Environment } from "../models/environment.js";
import {
  errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema,
  type ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi,
} from "../models/error-response-business-central-administration-center-environments-api.js";
import {
  restoreEnvironmentRequestSchema,
  type RestoreEnvironmentRequest,
} from "../models/restore-environment-request.js";
import type { Servers } from "../servers.js";

/**
 * Manage Business Central environments
 */
export class Environments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Copy an Environment
   *
   * @remarks
   * Creates a new environment as a copy of an existing environment's data.
   *
   * @returns Copy initiated (API v2.8 and earlier)
   *
   * @throws {@link Environments.CopyEnvironmentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  copyEnvironment(
    request: Environments.CopyEnvironmentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Environment, Environments.CopyEnvironmentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
          "/applications/{applicationFamily}/environments/{environmentName}/copy",
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
          { name: "environmentName", value: request.environmentName, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: copyEnvironmentRequestSchema },
      },
      {
        success: { kind: "json", schema: environmentInternalSchema },
        errorFactory: Environments.CopyEnvironmentError,
      },
      options,
    );
  }

  /**
   * Create a New Environment
   *
   * @remarks
   * Creates a new environment with sample data. The operation is asynchronous; poll the environment
   * operations endpoint to track status.
   *
   * @returns Environment creation initiated (API v2.8 and earlier)
   *
   * @throws {@link Environments.CreateEnvironmentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  createEnvironment(
    request: Environments.CreateEnvironmentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Environment, Environments.CreateEnvironmentError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
          "/applications/{applicationFamily}/environments/{environmentName}",
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
          { name: "environmentName", value: request.environmentName, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createEnvironmentRequestSchema },
      },
      {
        success: { kind: "json", schema: environmentInternalSchema },
        errorFactory: Environments.CreateEnvironmentError,
      },
      options,
    );
  }

  /**
   * Delete an Environment
   *
   * @remarks
   * Soft deletes the specified environment. The environment is retained for 14 days during which it
   * can be recovered. Environments with status Creating Failed or Removing Failed are permanently
   * deleted immediately.
   *
   * @returns Delete operation scheduled
   *
   * @throws {@link Environments.DeleteEnvironmentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  deleteEnvironment(
    request: Environments.DeleteEnvironmentRequest,
    options?: RequestOptions,
  ): ApiPromise<EnvironmentOperation, Environments.DeleteEnvironmentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
          "/applications/{applicationFamily}/environments/{environmentName}",
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
          { name: "environmentName", value: request.environmentName, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: environmentOperationSchema },
        errorFactory: Environments.DeleteEnvironmentError,
      },
      options,
    );
  }

  /**
   * Get Available Restore Periods
   *
   * @remarks
   * Returns an ordered list of available restore periods for the environment.
   *
   * @returns Successfully retrieved restore periods
   *
   * @throws {@link Environments.GetAvailableRestorePeriodsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getAvailableRestorePeriods(
    request: Environments.GetAvailableRestorePeriodsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApplicationsEnvironmentsAvailableRestorePeriodsResponse,
    Environments.GetAvailableRestorePeriodsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
          "/applications/{applicationFamily}/environments/{environmentName}/availableRestorePeriods",
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
          { name: "environmentName", value: request.environmentName, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: applicationsEnvironmentsAvailableRestorePeriodsResponseSchema },
        errorFactory: Environments.GetAvailableRestorePeriodsError,
      },
      options,
    );
  }

  /**
   * Get an Environment
   *
   * @remarks
   * Returns the properties for the specified environment.
   *
   * @returns Successfully retrieved environment
   *
   * @throws {@link Environments.GetEnvironmentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getEnvironment(
    request: Environments.GetEnvironmentRequest,
    options?: RequestOptions,
  ): ApiPromise<Environment, Environments.GetEnvironmentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
          "/applications/{applicationFamily}/environments/{environmentName}",
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
          { name: "environmentName", value: request.environmentName, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: environmentInternalSchema },
        errorFactory: Environments.GetEnvironmentError,
      },
      options,
    );
  }

  /**
   * List All Environments
   *
   * @remarks
   * Returns a list of all environments across all application families for the tenant.
   *
   * @returns Successfully retrieved environments
   *
   * @throws {@link Environments.ListAllEnvironmentsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listAllEnvironments(
    options?: RequestOptions,
  ): ApiPromise<ApplicationsEnvironmentsResponse, Environments.ListAllEnvironmentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
          "/applications/environments",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: applicationsEnvironmentsResponseInternalSchema },
        errorFactory: Environments.ListAllEnvironmentsError,
      },
      options,
    );
  }

  /**
   * List Environments by Application Family
   *
   * @remarks
   * Returns a list of environments for the specified application family.
   *
   * @returns Successfully retrieved environments
   *
   * @throws {@link Environments.ListEnvironmentsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listEnvironments(
    request: Environments.ListEnvironmentsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApplicationsEnvironmentsResponse, Environments.ListEnvironmentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
          "/applications/{applicationFamily}/environments",
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
        success: { kind: "json", schema: applicationsEnvironmentsResponseInternalSchema },
        errorFactory: Environments.ListEnvironmentsError,
      },
      options,
    );
  }

  /**
   * Recover a Deleted Environment
   *
   * @remarks
   * Recovers a soft-deleted environment.
   *
   * @returns Recovery operation scheduled
   *
   * @throws {@link Environments.RecoverEnvironmentError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  recoverEnvironment(
    request: Environments.RecoverEnvironmentRequest,
    options?: RequestOptions,
  ): ApiPromise<EnvironmentOperation, Environments.RecoverEnvironmentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
          "/applications/{applicationFamily}/environments/{environmentName}/recover",
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
          { name: "environmentName", value: request.environmentName, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: environmentOperationSchema },
        errorFactory: Environments.RecoverEnvironmentError,
      },
      options,
    );
  }

  /**
   * Rename an Environment
   *
   * @remarks
   * Schedules a rename operation on an environment.
   *
   * @returns Rename operation scheduled
   *
   * @throws {@link Environments.RenameEnvironmentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  renameEnvironment(
    request: Environments.RenameEnvironmentRequest,
    options?: RequestOptions,
  ): ApiPromise<EnvironmentOperation, Environments.RenameEnvironmentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
          "/applications/{applicationFamily}/environments/{environmentName}/rename",
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
          { name: "environmentName", value: request.environmentName, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: applicationsEnvironmentsRenameRequestSchema },
      },
      {
        success: { kind: "json", schema: environmentOperationSchema },
        errorFactory: Environments.RenameEnvironmentError,
      },
      options,
    );
  }

  /**
   * Restore an Environment
   *
   * @remarks
   * Restores an existing environment from a point in time in the past.
   *
   * @returns Restore operation scheduled
   *
   * @throws {@link Environments.RestoreEnvironmentError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  restoreEnvironment(
    request: Environments.RestoreEnvironmentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<EnvironmentOperation, Environments.RestoreEnvironmentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
          "/applications/{applicationFamily}/environments/{environmentName}/restore",
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
          { name: "environmentName", value: request.environmentName, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: restoreEnvironmentRequestSchema },
      },
      {
        success: { kind: "json", schema: environmentOperationSchema },
        errorFactory: Environments.RestoreEnvironmentError,
      },
      options,
    );
  }
}

export namespace Environments {
  export type CopyEnvironmentRequestParams = {
    /** The application family (e.g., BusinessCentral) @default "BusinessCentral" */
    applicationFamily?: string;
    /** The name of the environment */
    environmentName: string;
    body: CopyEnvironmentRequest;
  };

  export class CopyEnvironmentError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi",
          ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi
        >
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi2",
          ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<CopyEnvironmentError> = [
      {
        on: 400,
        kind: "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema,
        },
      },
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi2",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema,
        },
      },
    ];
  }

  export type CreateEnvironmentRequestParams = {
    /** The application family (e.g., BusinessCentral) @default "BusinessCentral" */
    applicationFamily?: string;
    /** The name of the environment */
    environmentName: string;
    body: CreateEnvironmentRequest;
  };

  export class CreateEnvironmentError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi",
          ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi
        >
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi2",
          ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi
        >
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi3",
          ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateEnvironmentError> = [
      {
        on: 400,
        kind: "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema,
        },
      },
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi2",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema,
        },
      },
      {
        on: 409,
        kind: "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi3",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema,
        },
      },
    ];
  }

  export type DeleteEnvironmentRequest = {
    /** The application family (e.g., BusinessCentral) @default "BusinessCentral" */
    applicationFamily?: string;
    /** The name of the environment */
    environmentName: string;
  };

  export class DeleteEnvironmentError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi",
          ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi
        >
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi2",
          ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteEnvironmentError> = [
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema,
        },
      },
      {
        on: 404,
        kind: "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi2",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema,
        },
      },
    ];
  }

  export type GetAvailableRestorePeriodsRequest = {
    /** The application family (e.g., BusinessCentral) @default "BusinessCentral" */
    applicationFamily?: string;
    /** The name of the environment */
    environmentName: string;
  };

  export class GetAvailableRestorePeriodsError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi",
          ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAvailableRestorePeriodsError> = [
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema,
        },
      },
    ];
  }

  export type GetEnvironmentRequest = {
    /** The application family (e.g., BusinessCentral) @default "BusinessCentral" */
    applicationFamily?: string;
    /** The name of the environment */
    environmentName: string;
  };

  export class GetEnvironmentError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi",
          ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi
        >
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi2",
          ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEnvironmentError> = [
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema,
        },
      },
      {
        on: 404,
        kind: "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi2",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema,
        },
      },
    ];
  }

  export class ListAllEnvironmentsError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi",
          ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAllEnvironmentsError> = [
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema,
        },
      },
    ];
  }

  export type ListEnvironmentsRequest = {
    /** The application family (e.g., BusinessCentral) @default "BusinessCentral" */
    applicationFamily?: string;
  };

  export class ListEnvironmentsError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi",
          ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi
        >
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi2",
          ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEnvironmentsError> = [
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema,
        },
      },
      {
        on: 404,
        kind: "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi2",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema,
        },
      },
    ];
  }

  export type RecoverEnvironmentRequest = {
    /** The application family (e.g., BusinessCentral) @default "BusinessCentral" */
    applicationFamily?: string;
    /** The name of the environment */
    environmentName: string;
  };

  export class RecoverEnvironmentError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi",
          ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<RecoverEnvironmentError> = [
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema,
        },
      },
    ];
  }

  export type RenameEnvironmentRequest = {
    /** The application family (e.g., BusinessCentral) @default "BusinessCentral" */
    applicationFamily?: string;
    /** The name of the environment */
    environmentName: string;
    body: ApplicationsEnvironmentsRenameRequest;
  };

  export class RenameEnvironmentError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi",
          ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<RenameEnvironmentError> = [
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema,
        },
      },
    ];
  }

  export type RestoreEnvironmentRequestParams = {
    /** The application family (e.g., BusinessCentral) @default "BusinessCentral" */
    applicationFamily?: string;
    /** The name of the environment */
    environmentName: string;
    body: RestoreEnvironmentRequest;
  };

  export class RestoreEnvironmentError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi",
          ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<RestoreEnvironmentError> = [
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterEnvironmentsApi",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterEnvironmentsApiSchema,
        },
      },
    ];
  }
}
