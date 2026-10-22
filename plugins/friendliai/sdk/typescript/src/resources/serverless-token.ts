import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  serverlessDetokenizationBodySchema,
  type ServerlessDetokenizationBody,
} from "../models/serverless-detokenization-body.js";
import {
  serverlessDetokenizationSuccessSchema,
  type ServerlessDetokenizationSuccess,
} from "../models/serverless-detokenization-success.js";
import {
  serverlessTokenizationBodySchema,
  type ServerlessTokenizationBody,
} from "../models/serverless-tokenization-body.js";
import {
  serverlessTokenizationSuccessSchema,
  type ServerlessTokenizationSuccess,
} from "../models/serverless-tokenization-success.js";
import { xFriendliTeamSchema, type XFriendliTeam } from "../models/unions/xfriendli-team.js";
import type { Servers } from "../servers.js";

export class ServerlessToken {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Detokenization
   *
   * @remarks
   * Convert a list of token IDs back into text.
   *
   * @returns Successfully detokenized the tokens.
   *
   * @throws {@link ServerlessToken.ServerlessDetokenizationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  serverlessDetokenization(
    request: ServerlessToken.ServerlessDetokenizationRequest,
    options?: RequestOptions,
  ): ApiPromise<ServerlessDetokenizationSuccess, ServerlessToken.ServerlessDetokenizationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/serverless/v1/detokenize"),
        auth: this.#auth.token,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: serverlessDetokenizationBodySchema },
      },
      {
        success: { kind: "json", schema: serverlessDetokenizationSuccessSchema },
        errorFactory: ServerlessToken.ServerlessDetokenizationError,
      },
      options,
    );
  }

  /**
   * Tokenization
   *
   * @remarks
   * Convert text input into token IDs.
   *
   * @returns Successfully tokenized the text.
   *
   * @throws {@link ServerlessToken.ServerlessTokenizationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  serverlessTokenization(
    request: ServerlessToken.ServerlessTokenizationRequest,
    options?: RequestOptions,
  ): ApiPromise<ServerlessTokenizationSuccess, ServerlessToken.ServerlessTokenizationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/serverless/v1/tokenize"),
        auth: this.#auth.token,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: serverlessTokenizationBodySchema },
      },
      {
        success: { kind: "json", schema: serverlessTokenizationSuccessSchema },
        errorFactory: ServerlessToken.ServerlessTokenizationError,
      },
      options,
    );
  }
}

export namespace ServerlessToken {
  export type ServerlessDetokenizationRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: ServerlessDetokenizationBody;
  };

  export class ServerlessDetokenizationError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ServerlessDetokenizationError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ServerlessTokenizationRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: ServerlessTokenizationBody;
  };

  export class ServerlessTokenizationError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ServerlessTokenizationError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
