import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { typosquattingResponseSchema, type TyposquattingResponse } from "../models/typosquatting-response.js";
import type { Servers } from "../servers.js";

/**
 * Detect typo variants of brand domains
 */
export class Typosquatting {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Typosquatting Lookup
   *
   * @remarks
   * Find typo variants of a brand. 5 credits per page.
   *
   * @returns Successful response
   *
   * @throws {@link Typosquatting.TyposquattingError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  typosquatting(
    request: Typosquatting.TyposquattingRequest = {},
    options?: RequestOptions,
  ): ApiPromise<TyposquattingResponse, Typosquatting.TyposquattingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.0/domain/typos"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "keyword", value: request.keyword, schema: s.optional(s.string()) },
          { name: "pattern", value: request.pattern, schema: s.optional(s.string()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: typosquattingResponseSchema },
        errorFactory: Typosquatting.TyposquattingError,
      },
      options,
    );
  }
}

export namespace Typosquatting {
  export type TyposquattingRequest = {
    keyword?: string;
    pattern?: string;
    pageToken?: string;
  };

  export class TyposquattingError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<TyposquattingError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
