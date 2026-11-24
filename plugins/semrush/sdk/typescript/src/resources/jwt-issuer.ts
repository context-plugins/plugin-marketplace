import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { issuerJwtRequestSchema, type IssuerJwtRequest } from "../models/issuer-jwt-request.js";
import { issuerJwtResponseSchema, type IssuerJwtResponse } from "../models/issuer-jwt-response.js";
import type { Servers } from "../servers.js";

export class JwtIssuer {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Semrush Request API access token
   *
   * @remarks
   * Retrieves JWT for accessing Semrush API. Documentation
   *
   * @returns OK
   *
   * @throws {@link JwtIssuer.PostAppCenterApiV2JwtTokenError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SemrushError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postAppCenterApiV2JwtToken(
    request: JwtIssuer.PostAppCenterApiV2JwtTokenRequest = {},
    options?: RequestOptions,
  ): ApiPromise<IssuerJwtResponse, JwtIssuer.PostAppCenterApiV2JwtTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/app-center-api/v2/jwt-token/"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => issuerJwtRequestSchema)) },
      },
      {
        success: { kind: "json", schema: issuerJwtResponseSchema },
        errorFactory: JwtIssuer.PostAppCenterApiV2JwtTokenError,
      },
      options,
    );
  }
}

export namespace JwtIssuer {
  export type PostAppCenterApiV2JwtTokenRequest = {
    body?: IssuerJwtRequest;
  };

  export class PostAppCenterApiV2JwtTokenError extends ApiError {
    declare readonly payload:
      | Declared<"error400", string>
      | Declared<"error401", string>
      | Declared<"error403", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostAppCenterApiV2JwtTokenError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.string() } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: s.string() } },
      { on: 403, kind: "error403", decode: { kind: "text", schema: s.string() } },
    ];
  }
}
