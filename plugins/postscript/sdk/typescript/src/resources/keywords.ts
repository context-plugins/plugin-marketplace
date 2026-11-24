import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  apiV2KeywordsResponseSchema,
  type ApiV2KeywordsResponse,
} from "../models/api-v2-keywords-response.js";
import {
  apiV2KeywordsResponse1Schema,
  type ApiV2KeywordsResponse1,
} from "../models/api-v2-keywords-response1.js";
import {
  apiV2Keywords403Error1Schema,
  type ApiV2Keywords403Error1,
} from "../models/api-v2-keywords403-error1.js";
import {
  apiV2Keywords404Error1Schema,
  type ApiV2Keywords404Error1,
} from "../models/api-v2-keywords404-error1.js";
import type { Servers } from "../servers.js";

/**
 * Read the opt-in keywords configured for a shop.
 */
export class Keywords {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Keyword
   *
   * @remarks
   * Get a Keyword by its ID
   *
   * @returns 200
   *
   * @throws {@link Keywords.GetKeywordError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PostscriptError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getKeyword(
    request: Keywords.GetKeywordRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2KeywordsResponse, Keywords.GetKeywordError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/keywords/{id}"),
        auth: this.#auth.sec0,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-Postscript-Shop-Token",
            value: request.xPostscriptShopToken,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2KeywordsResponseSchema },
        errorFactory: Keywords.GetKeywordError,
      },
      options,
    );
  }

  /**
   * Get Keywords
   *
   * @remarks
   * Get a list of all active keywords for a shop.
   *
   * @returns 200
   *
   * @throws {@link Keywords.GetKeywordsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PostscriptError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getKeywords(
    request: Keywords.GetKeywordsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV2KeywordsResponse1, Keywords.GetKeywordsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/keywords"),
        auth: this.#auth.sec0,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Postscript-Shop-Token",
            value: request.xPostscriptShopToken,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2KeywordsResponse1Schema },
        errorFactory: Keywords.GetKeywordsError,
      },
      options,
    );
  }
}

export namespace Keywords {
  export type GetKeywordRequest = {
    /** ID of the keyword you'd like to receive. */
    id: string;
    /**
     * Shop API Token. **Required for partners**. This header should be used *only* by partners.
     * Shops should include their API token in the *Authorization* header.
     */
    xPostscriptShopToken?: string;
  };

  export class GetKeywordError extends ApiError {
    declare readonly payload: Declared<"apiV2Keywords404Error1", ApiV2Keywords404Error1> | Undeclared;

    static readonly errors: ErrorDecoders<GetKeywordError> = [
      {
        on: 404,
        kind: "apiV2Keywords404Error1",
        decode: { kind: "json", schema: apiV2Keywords404Error1Schema },
      },
    ];
  }

  export type GetKeywordsRequest = {
    /**
     * Shop API Token. **Required for partners**. This header should be used *only* by partners.
     * Shops should include their API token in the *Authorization* header.
     */
    xPostscriptShopToken?: string;
  };

  export class GetKeywordsError extends ApiError {
    declare readonly payload: Declared<"apiV2Keywords403Error1", ApiV2Keywords403Error1> | Undeclared;

    static readonly errors: ErrorDecoders<GetKeywordsError> = [
      {
        on: 403,
        kind: "apiV2Keywords403Error1",
        decode: { kind: "json", schema: apiV2Keywords403Error1Schema },
      },
    ];
  }
}
