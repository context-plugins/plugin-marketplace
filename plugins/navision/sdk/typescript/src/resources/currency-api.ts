import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  companiesApiCurrenciesResponseInternalSchema,
  type CompaniesApiCurrenciesResponse,
} from "../models/companies-api-currencies-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

/**
 * Manage currencies and exchange rates
 */
export class CurrencyApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Currencies
   *
   * @remarks
   * Returns a list of currency objects.
   *
   * @returns Successfully retrieved currencies
   *
   * @throws {@link CurrencyApi.ListCurrenciesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listCurrencies(
    request: CurrencyApi.ListCurrenciesRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesApiCurrenciesResponse, CurrencyApi.ListCurrenciesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies({company_id})/currencies"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [{ name: "company_id", value: request.companyId, schema: s.string() }],
        query: [
          { name: "$top", value: request.top, schema: s.optional(s.int()) },
          { name: "$skip", value: request.skip, schema: s.optional(s.int()) },
          { name: "$filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "$select", value: request.select, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesApiCurrenciesResponseInternalSchema },
        errorFactory: CurrencyApi.ListCurrenciesError,
      },
      options,
    );
  }
}

export namespace CurrencyApi {
  export type ListCurrenciesRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** Maximum number of items to return */
    top?: number;
    /** Number of items to skip */
    skip?: number;
    /** OData filter expression */
    filter?: string;
    /** Comma-separated list of properties to include in the response */
    select?: string;
  };

  export const listCurrenciesRequestSchema: Schema<ListCurrenciesRequest> = s.lazySchema(() =>
    s.object<ListCurrenciesRequest>({
      companyId: s.string(),
      top: s.optional(s.int().check(s.gte(0))),
      skip: s.optional(s.int().check(s.gte(0))),
      filter: s.optional(s.string()),
      select: s.optional(s.string()),
    }),
  );

  export class ListCurrenciesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListCurrenciesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
