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
  applicationsEnvironmentsSettingsAppInsightsKeyRequestSchema,
  type ApplicationsEnvironmentsSettingsAppInsightsKeyRequest,
} from "../models/applications-environments-settings-app-insights-key-request.js";
import { environmentSettingsSchema, type EnvironmentSettings } from "../models/environment-settings.js";
import {
  errorResponseBusinessCentralAdministrationCenterEnvironmentSettingsSchema,
  type ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings,
} from "../models/error-response-business-central-administration-center-environment-settings.js";
import type { Servers } from "../servers.js";

/**
 * Manage environment settings and configuration
 */
export class EnvironmentSettingsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Environment Settings
   *
   * @remarks
   * Returns settings for the specified environment.
   *
   * @returns Successfully retrieved environment settings
   *
   * @throws {@link EnvironmentSettingsApi.GetEnvironmentSettingsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getEnvironmentSettings(
    request: EnvironmentSettingsApi.GetEnvironmentSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<EnvironmentSettings, EnvironmentSettingsApi.GetEnvironmentSettingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
          "/applications/{applicationFamily}/environments/{environmentName}/settings",
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
        success: { kind: "json", schema: environmentSettingsSchema },
        errorFactory: EnvironmentSettingsApi.GetEnvironmentSettingsError,
      },
      options,
    );
  }

  /**
   * Set Application Insights Key
   *
   * @remarks
   * Sets the Azure Application Insights instrumentation key for the environment.
   *
   * @returns Key set successfully
   *
   * @throws {@link EnvironmentSettingsApi.SetAppInsightsKeyError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  setAppInsightsKey(
    request: EnvironmentSettingsApi.SetAppInsightsKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, EnvironmentSettingsApi.SetAppInsightsKeyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
          "/applications/{applicationFamily}/environments/{environmentName}/settings/appInsightsKey",
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
        body: {
          kind: "json",
          value: request.body,
          schema: applicationsEnvironmentsSettingsAppInsightsKeyRequestSchema,
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: EnvironmentSettingsApi.SetAppInsightsKeyError,
      },
      options,
    );
  }
}

export namespace EnvironmentSettingsApi {
  export type GetEnvironmentSettingsRequest = {
    /** The application family (e.g., BusinessCentral) @default "BusinessCentral" */
    applicationFamily?: string;
    /** The name of the environment */
    environmentName: string;
  };

  export class GetEnvironmentSettingsError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterEnvironmentSettings",
          ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEnvironmentSettingsError> = [
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterEnvironmentSettings",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterEnvironmentSettingsSchema,
        },
      },
    ];
  }

  export type SetAppInsightsKeyRequest = {
    /** The application family (e.g., BusinessCentral) @default "BusinessCentral" */
    applicationFamily?: string;
    /** The name of the environment */
    environmentName: string;
    body: ApplicationsEnvironmentsSettingsAppInsightsKeyRequest;
  };

  export class SetAppInsightsKeyError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterEnvironmentSettings",
          ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<SetAppInsightsKeyError> = [
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterEnvironmentSettings",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterEnvironmentSettingsSchema,
        },
      },
    ];
  }
}
