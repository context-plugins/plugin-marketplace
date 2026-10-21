import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  dedicatedDetokenizationBodySchema,
  type DedicatedDetokenizationBody,
} from "../models/dedicated-detokenization-body.js";
import {
  dedicatedDetokenizationSuccessSchema,
  type DedicatedDetokenizationSuccess,
} from "../models/dedicated-detokenization-success.js";
import {
  dedicatedTokenizationBodySchema,
  type DedicatedTokenizationBody,
} from "../models/dedicated-tokenization-body.js";
import {
  dedicatedTokenizationSuccessSchema,
  type DedicatedTokenizationSuccess,
} from "../models/dedicated-tokenization-success.js";
import { xFriendliTeamSchema, type XFriendliTeam } from "../models/unions/xfriendli-team.js";
import type { Servers } from "../servers.js";

export class DedicatedToken {
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
   * @throws {@link DedicatedToken.DedicatedDetokenizationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedDetokenization(
    request: DedicatedToken.DedicatedDetokenizationRequest,
    options?: RequestOptions,
  ): ApiPromise<DedicatedDetokenizationSuccess, DedicatedToken.DedicatedDetokenizationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/dedicated/v1/detokenize"),
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
        body: { kind: "json", value: request.body, schema: dedicatedDetokenizationBodySchema },
      },
      {
        success: { kind: "json", schema: dedicatedDetokenizationSuccessSchema },
        errorFactory: DedicatedToken.DedicatedDetokenizationError,
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
   * @throws {@link DedicatedToken.DedicatedTokenizationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedTokenization(
    request: DedicatedToken.DedicatedTokenizationRequest,
    options?: RequestOptions,
  ): ApiPromise<DedicatedTokenizationSuccess, DedicatedToken.DedicatedTokenizationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/dedicated/v1/tokenize"),
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
        body: { kind: "json", value: request.body, schema: dedicatedTokenizationBodySchema },
      },
      {
        success: { kind: "json", schema: dedicatedTokenizationSuccessSchema },
        errorFactory: DedicatedToken.DedicatedTokenizationError,
      },
      options,
    );
  }
}

export namespace DedicatedToken {
  export type DedicatedDetokenizationRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: DedicatedDetokenizationBody;
  };

  export class DedicatedDetokenizationError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedDetokenizationError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type DedicatedTokenizationRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: DedicatedTokenizationBody;
  };

  export class DedicatedTokenizationError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedTokenizationError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
