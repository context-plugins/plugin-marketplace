import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  companiesApiSecurityGroupsResponseSchema,
  type CompaniesApiSecurityGroupsResponse,
} from "../models/companies-api-security-groups-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

/**
 * Manage security groups
 */
export class SecurityGroups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Security Groups
   *
   * @remarks
   * Returns a list of security groups.
   *
   * @returns Successfully retrieved security groups
   *
   * @throws {@link SecurityGroups.ListSecurityGroupsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listSecurityGroups(
    request: SecurityGroups.ListSecurityGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesApiSecurityGroupsResponse, SecurityGroups.ListSecurityGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/securityGroups",
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
        success: { kind: "json", schema: companiesApiSecurityGroupsResponseSchema },
        errorFactory: SecurityGroups.ListSecurityGroupsError,
      },
      options,
    );
  }
}

export namespace SecurityGroups {
  export type ListSecurityGroupsRequest = {
    /** The unique identifier of the company */
    companyId: string;
  };

  export class ListSecurityGroupsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListSecurityGroupsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
