import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  errorResponseBusinessCentralAdministrationCenterSupportSettingsApiSchema,
  type ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi,
} from "../models/error-response-business-central-administration-center-support-settings-api.js";
import { supportSettingsInternalSchema, type SupportSettings } from "../models/support-settings.js";
import type { Servers } from "../servers.js";

/**
 * Manage support settings
 */
export class SupportSettingsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Support Settings
   *
   * @remarks
   * Returns the support contact settings for the specified environment.
   *
   * @returns Successfully retrieved support settings
   *
   * @throws {@link SupportSettingsApi.GetSupportSettingsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getSupportSettings(
    request: SupportSettingsApi.GetSupportSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<SupportSettings, SupportSettingsApi.GetSupportSettingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
          "/applications/{applicationFamily}/environments/{environmentName}/supportSettings",
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
        success: { kind: "json", schema: supportSettingsInternalSchema },
        errorFactory: SupportSettingsApi.GetSupportSettingsError,
      },
      options,
    );
  }
}

export namespace SupportSettingsApi {
  export type GetSupportSettingsRequest = {
    /** The application family (e.g., BusinessCentral) @default "BusinessCentral" */
    applicationFamily?: string;
    /** The name of the environment */
    environmentName: string;
  };

  export class GetSupportSettingsError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterSupportSettingsApi",
          ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSupportSettingsError> = [
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterSupportSettingsApi",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterSupportSettingsApiSchema,
        },
      },
    ];
  }
}
