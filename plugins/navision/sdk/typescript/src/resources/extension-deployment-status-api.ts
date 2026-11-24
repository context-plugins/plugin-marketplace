import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  companiesApiExtensionDeploymentStatusResponseSchema,
  type CompaniesApiExtensionDeploymentStatusResponse,
} from "../models/companies-api-extension-deployment-status-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

/**
 * Monitor extension installation progress
 */
export class ExtensionDeploymentStatusApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Extension Deployment Statuses
   *
   * @remarks
   * Returns a list of ongoing extension deployment statuses.
   *
   * @returns Successfully retrieved deployment statuses
   *
   * @throws {@link ExtensionDeploymentStatusApi.ListExtensionDeploymentStatusesError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listExtensionDeploymentStatuses(
    request: ExtensionDeploymentStatusApi.ListExtensionDeploymentStatusesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    CompaniesApiExtensionDeploymentStatusResponse,
    ExtensionDeploymentStatusApi.ListExtensionDeploymentStatusesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/extensionDeploymentStatus",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [{ name: "company_id", value: request.companyId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesApiExtensionDeploymentStatusResponseSchema },
        errorFactory: ExtensionDeploymentStatusApi.ListExtensionDeploymentStatusesError,
      },
      options,
    );
  }
}

export namespace ExtensionDeploymentStatusApi {
  export type ListExtensionDeploymentStatusesRequest = {
    /** The unique identifier of the company */
    companyId: string;
  };

  export class ListExtensionDeploymentStatusesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListExtensionDeploymentStatusesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
