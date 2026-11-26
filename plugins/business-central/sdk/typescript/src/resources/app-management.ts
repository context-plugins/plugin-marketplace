import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { appInstallRequestSchema, type AppInstallRequest } from "../models/app-install-request.js";
import { appUpdateRequestSchema, type AppUpdateRequest } from "../models/app-update-request.js";
import {
  applicationsEnvironmentsAppsAppIdUninstallRequestSchema,
  type ApplicationsEnvironmentsAppsAppIdUninstallRequest,
} from "../models/applications-environments-apps-app-id-uninstall-request.js";
import {
  applicationsEnvironmentsAppsResponseSchema,
  type ApplicationsEnvironmentsAppsResponse,
} from "../models/applications-environments-apps-response.js";
import { environmentOperationSchema, type EnvironmentOperation } from "../models/environment-operation.js";
import {
  errorResponseBusinessCentralAdministrationCenterAppManagementApiSchema,
  type ErrorResponseBusinessCentralAdministrationCenterAppManagementApi,
} from "../models/error-response-business-central-administration-center-app-management-api.js";
import type { Servers } from "../servers.js";

/**
 * Manage installed applications
 */
export class AppManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Install an App
   *
   * @remarks
   * Installs the specified app in the environment.
   *
   * @returns App installation scheduled
   *
   * @throws {@link AppManagement.InstallAppError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  installApp(
    request: AppManagement.InstallAppRequest,
    options?: RequestOptions,
  ): ApiPromise<EnvironmentOperation, AppManagement.InstallAppError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
          "/applications/{applicationFamily}/environments/{environmentName}/apps/{appId}/install",
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
          { name: "appId", value: request.appId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: appInstallRequestSchema },
      },
      {
        success: { kind: "json", schema: environmentOperationSchema },
        errorFactory: AppManagement.InstallAppError,
      },
      options,
    );
  }

  /**
   * List Installed Apps
   *
   * @remarks
   * Returns a list of apps installed in the specified environment.
   *
   * @returns Successfully retrieved installed apps
   *
   * @throws {@link AppManagement.ListInstalledAppsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listInstalledApps(
    request: AppManagement.ListInstalledAppsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApplicationsEnvironmentsAppsResponse, AppManagement.ListInstalledAppsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
          "/applications/{applicationFamily}/environments/{environmentName}/apps",
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
        success: { kind: "json", schema: applicationsEnvironmentsAppsResponseSchema },
        errorFactory: AppManagement.ListInstalledAppsError,
      },
      options,
    );
  }

  /**
   * Uninstall an App
   *
   * @remarks
   * Uninstalls the specified app from the environment.
   *
   * @returns App uninstallation scheduled
   *
   * @throws {@link AppManagement.UninstallAppError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  uninstallApp(
    request: AppManagement.UninstallAppRequest,
    options?: RequestOptions,
  ): ApiPromise<EnvironmentOperation, AppManagement.UninstallAppError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
          "/applications/{applicationFamily}/environments/{environmentName}/apps/{appId}/uninstall",
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
          { name: "appId", value: request.appId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => applicationsEnvironmentsAppsAppIdUninstallRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: environmentOperationSchema },
        errorFactory: AppManagement.UninstallAppError,
      },
      options,
    );
  }

  /**
   * Update an App
   *
   * @remarks
   * Schedules an update of the specified app to a newer version.
   *
   * @returns App update scheduled
   *
   * @throws {@link AppManagement.UpdateAppError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  updateApp(
    request: AppManagement.UpdateAppRequest,
    options?: RequestOptions,
  ): ApiPromise<EnvironmentOperation, AppManagement.UpdateAppError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
          "/applications/{applicationFamily}/environments/{environmentName}/apps/{appId}/update",
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
          { name: "appId", value: request.appId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: appUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: environmentOperationSchema },
        errorFactory: AppManagement.UpdateAppError,
      },
      options,
    );
  }
}

export namespace AppManagement {
  export type InstallAppRequest = {
    /** The application family (e.g., BusinessCentral) @default "BusinessCentral" */
    applicationFamily?: string;
    /** The name of the environment */
    environmentName: string;
    appId: string;
    body: AppInstallRequest;
  };

  export class InstallAppError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterAppManagementApi",
          ErrorResponseBusinessCentralAdministrationCenterAppManagementApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<InstallAppError> = [
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterAppManagementApi",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterAppManagementApiSchema,
        },
      },
    ];
  }

  export type ListInstalledAppsRequest = {
    /** The application family (e.g., BusinessCentral) @default "BusinessCentral" */
    applicationFamily?: string;
    /** The name of the environment */
    environmentName: string;
  };

  export class ListInstalledAppsError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterAppManagementApi",
          ErrorResponseBusinessCentralAdministrationCenterAppManagementApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<ListInstalledAppsError> = [
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterAppManagementApi",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterAppManagementApiSchema,
        },
      },
    ];
  }

  export type UninstallAppRequest = {
    /** The application family (e.g., BusinessCentral) @default "BusinessCentral" */
    applicationFamily?: string;
    /** The name of the environment */
    environmentName: string;
    appId: string;
    body?: ApplicationsEnvironmentsAppsAppIdUninstallRequest;
  };

  export class UninstallAppError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterAppManagementApi",
          ErrorResponseBusinessCentralAdministrationCenterAppManagementApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<UninstallAppError> = [
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterAppManagementApi",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterAppManagementApiSchema,
        },
      },
    ];
  }

  export type UpdateAppRequest = {
    /** The application family (e.g., BusinessCentral) @default "BusinessCentral" */
    applicationFamily?: string;
    /** The name of the environment */
    environmentName: string;
    appId: string;
    body: AppUpdateRequest;
  };

  export class UpdateAppError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterAppManagementApi",
          ErrorResponseBusinessCentralAdministrationCenterAppManagementApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateAppError> = [
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterAppManagementApi",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterAppManagementApiSchema,
        },
      },
    ];
  }
}
