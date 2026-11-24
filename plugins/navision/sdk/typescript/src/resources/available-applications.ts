import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  applicationsAvailableApplicationVersionsResponseSchema,
  type ApplicationsAvailableApplicationVersionsResponse,
} from "../models/applications-available-application-versions-response.js";
import {
  applicationsAvailableCountriesResponseSchema,
  type ApplicationsAvailableCountriesResponse,
} from "../models/applications-available-countries-response.js";
import {
  errorResponseBusinessCentralAdministrationCenterAvailableSchema,
  type ErrorResponseBusinessCentralAdministrationCenterAvailable,
} from "../models/error-response-business-central-administration-center-available.js";
import type { Servers } from "../servers.js";

/**
 * Query available application versions and countries
 */
export class AvailableApplications {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Available Countries
   *
   * @remarks
   * Returns a list of countries where environments can be created.
   *
   * @returns Successfully retrieved available countries
   *
   * @throws {@link AvailableApplications.ListAvailableCountriesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listAvailableCountries(
    request: AvailableApplications.ListAvailableCountriesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApplicationsAvailableCountriesResponse, AvailableApplications.ListAvailableCountriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
          "/applications/{applicationFamily}/availableCountries",
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
        success: { kind: "json", schema: applicationsAvailableCountriesResponseSchema },
        errorFactory: AvailableApplications.ListAvailableCountriesError,
      },
      options,
    );
  }

  /**
   * List Available Application Versions
   *
   * @remarks
   * Returns a list of available application versions for the specified application family.
   *
   * @returns Successfully retrieved available versions
   *
   * @throws {@link AvailableApplications.ListAvailableVersionsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listAvailableVersions(
    request: AvailableApplications.ListAvailableVersionsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ApplicationsAvailableApplicationVersionsResponse,
    AvailableApplications.ListAvailableVersionsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
          "/applications/{applicationFamily}/availableApplicationVersions",
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
        success: { kind: "json", schema: applicationsAvailableApplicationVersionsResponseSchema },
        errorFactory: AvailableApplications.ListAvailableVersionsError,
      },
      options,
    );
  }
}

export namespace AvailableApplications {
  export type ListAvailableCountriesRequest = {
    /** The application family (e.g., BusinessCentral) @default "BusinessCentral" */
    applicationFamily?: string;
  };

  export class ListAvailableCountriesError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterAvailable",
          ErrorResponseBusinessCentralAdministrationCenterAvailable
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAvailableCountriesError> = [
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterAvailable",
        decode: { kind: "json", schema: errorResponseBusinessCentralAdministrationCenterAvailableSchema },
      },
    ];
  }

  export type ListAvailableVersionsRequest = {
    /** The application family (e.g., BusinessCentral) @default "BusinessCentral" */
    applicationFamily?: string;
  };

  export class ListAvailableVersionsError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterAvailable",
          ErrorResponseBusinessCentralAdministrationCenterAvailable
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAvailableVersionsError> = [
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterAvailable",
        decode: { kind: "json", schema: errorResponseBusinessCentralAdministrationCenterAvailableSchema },
      },
    ];
  }
}
