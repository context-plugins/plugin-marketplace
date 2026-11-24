import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { apiV2MeResponseSchema, type ApiV2MeResponse } from "../models/api-v2-me-response.js";
import { apiV2Me400Error1Schema, type ApiV2Me400Error1 } from "../models/api-v2-me400-error1.js";
import type { Servers } from "../servers.js";

/**
 * Verify the identity and scope of the calling API token.
 */
export class Identity {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Verify Identity
   *
   * @returns 200
   *
   * @throws {@link Identity.VerifyIdentityError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PostscriptError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  verifyIdentity(
    request: Identity.VerifyIdentityRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV2MeResponse, Identity.VerifyIdentityError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/me"),
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
        success: { kind: "json", schema: apiV2MeResponseSchema },
        errorFactory: Identity.VerifyIdentityError,
      },
      options,
    );
  }
}

export namespace Identity {
  export type VerifyIdentityRequest = {
    xPostscriptShopToken?: string;
  };

  export class VerifyIdentityError extends ApiError {
    declare readonly payload: Declared<"apiV2Me400Error1", ApiV2Me400Error1> | Undeclared;

    static readonly errors: ErrorDecoders<VerifyIdentityError> = [
      { on: 400, kind: "apiV2Me400Error1", decode: { kind: "json", schema: apiV2Me400Error1Schema } },
    ];
  }
}
