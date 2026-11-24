import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { oAuthJoinResponseSchema, type OAuthJoinResponse } from "../models/oauth-join-response.js";
import type { Servers } from "../servers.js";

export class OAuth {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Join Oauth App Team
   *
   * @remarks
   * Make the OAuth access token's user a member of its application's team.
   *
   * Idempotent. A user who is already a member keeps their role; a new user joins as an external
   * member, whom a team admin can promote. A user who was removed from the team is refused until a
   * team admin invites them again. Every other endpoint answers ``principal_not_found`` for the
   * token until its user has joined.
   *
   * @returns Successful Response
   *
   * @throws {@link OAuth.JoinOauthAppTeamV2OauthJoinPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  joinOauthAppTeamV2OauthJoinPost(
    options?: RequestOptions,
  ): ApiPromise<OAuthJoinResponse, OAuth.JoinOauthAppTeamV2OauthJoinPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/oauth/join"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: oAuthJoinResponseSchema },
        errorFactory: OAuth.JoinOauthAppTeamV2OauthJoinPostError,
      },
      options,
    );
  }
}

export namespace OAuth {
  export class JoinOauthAppTeamV2OauthJoinPostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Declared<"errorResponse8", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<JoinOauthAppTeamV2OauthJoinPostError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 502, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse8", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
