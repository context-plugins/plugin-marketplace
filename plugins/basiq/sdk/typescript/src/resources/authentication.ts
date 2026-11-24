import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { tokenResponseSchema, type TokenResponse } from "../models/token-response.js";
import { token400Error1Schema, type Token400Error1 } from "../models/token400-error1.js";
import { token404Error1Schema, type Token404Error1 } from "../models/token404-error1.js";
import { token500Error1Schema, type Token500Error1 } from "../models/token500-error1.js";
import type { Servers } from "../servers.js";

export class Authentication {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Generate an auth token
   *
   * @remarks
   * Use this endpoint to retrieve a token that will be passed as authorization header for Basiq API
   *
   * @returns Return token object that will be used for Basiq API requests.
   *
   * @throws {@link Authentication.PostTokenError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postToken(
    request: Authentication.PostTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<TokenResponse, Authentication.PostTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/token"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [
          { name: "basiq-version", value: request.basiqVersion, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "scope", value: request.scope, schema: s.optional(s.string()) },
            { name: "userId", value: request.userId, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: tokenResponseSchema },
        errorFactory: Authentication.PostTokenError,
      },
      options,
    );
  }
}

export namespace Authentication {
  export type PostTokenRequest = {
    basiqVersion: string;
    scope?: string;
    userId?: string;
  };

  export class PostTokenError extends ApiError {
    declare readonly payload:
      | Declared<"token400Error1", Token400Error1>
      | Declared<"token404Error1", Token404Error1>
      | Declared<"token500Error1", Token500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostTokenError> = [
      { on: 400, kind: "token400Error1", decode: { kind: "json", schema: token400Error1Schema } },
      { on: 404, kind: "token404Error1", decode: { kind: "json", schema: token404Error1Schema } },
      { on: 500, kind: "token500Error1", decode: { kind: "json", schema: token500Error1Schema } },
    ];
  }
}
