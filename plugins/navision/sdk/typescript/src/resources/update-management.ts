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
  errorResponseBusinessCentralAdministrationCenterUpdateManagementApiSchema,
  type ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi,
} from "../models/error-response-business-central-administration-center-update-management-api.js";
import { scheduledUpgradeSchema, type ScheduledUpgrade } from "../models/scheduled-upgrade.js";
import { updateSettingsSchema, type UpdateSettings } from "../models/update-settings.js";
import type { Servers } from "../servers.js";

/**
 * Manage environment updates
 */
export class UpdateManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Scheduled Upgrade
   *
   * @remarks
   * Returns information about any pending scheduled upgrade for the environment.
   *
   * @returns Successfully retrieved scheduled upgrade information
   *
   * @throws {@link UpdateManagement.GetScheduledUpgradeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getScheduledUpgrade(
    request: UpdateManagement.GetScheduledUpgradeRequest,
    options?: RequestOptions,
  ): ApiPromise<ScheduledUpgrade, UpdateManagement.GetScheduledUpgradeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
          "/applications/{applicationFamily}/environments/{environmentName}/scheduledUpgrade",
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
        success: { kind: "json", schema: scheduledUpgradeSchema },
        errorFactory: UpdateManagement.GetScheduledUpgradeError,
      },
      options,
    );
  }

  /**
   * Set Update Settings
   *
   * @remarks
   * Sets the update window and other update-related settings for the environment.
   *
   * @returns Update settings applied
   *
   * @throws {@link UpdateManagement.SetUpdateSettingsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  setUpdateSettings(
    request: UpdateManagement.SetUpdateSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, UpdateManagement.SetUpdateSettingsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
          "/applications/{applicationFamily}/environments/{environmentName}/settings/upgrade",
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
        body: { kind: "json", value: request.body, schema: updateSettingsSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: UpdateManagement.SetUpdateSettingsError,
      },
      options,
    );
  }
}

export namespace UpdateManagement {
  export type GetScheduledUpgradeRequest = {
    /** The application family (e.g., BusinessCentral) @default "BusinessCentral" */
    applicationFamily?: string;
    /** The name of the environment */
    environmentName: string;
  };

  export class GetScheduledUpgradeError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterUpdateManagementApi",
          ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<GetScheduledUpgradeError> = [
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterUpdateManagementApi",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterUpdateManagementApiSchema,
        },
      },
    ];
  }

  export type SetUpdateSettingsRequest = {
    /** The application family (e.g., BusinessCentral) @default "BusinessCentral" */
    applicationFamily?: string;
    /** The name of the environment */
    environmentName: string;
    body: UpdateSettings;
  };

  export class SetUpdateSettingsError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterUpdateManagementApi",
          ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<SetUpdateSettingsError> = [
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterUpdateManagementApi",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterUpdateManagementApiSchema,
        },
      },
    ];
  }
}
