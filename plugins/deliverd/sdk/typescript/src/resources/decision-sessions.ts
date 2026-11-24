import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1DecisionSessionsExpireResponseSchema,
  type ApiV1DecisionSessionsExpireResponse,
} from "../models/api-v1-decision-sessions-expire-response.js";
import {
  apiV1DecisionSessionsResponseSchema,
  type ApiV1DecisionSessionsResponse,
} from "../models/api-v1-decision-sessions-response.js";
import type { Servers } from "../servers.js";

export class DecisionSessions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * A decision session's state
   *
   * @remarks
   * `open`, `verified` (the approver confirmed who they are), `complete` (they decided, here or
   * anywhere else) or `expired`, with their decision and the request's own status. Never the
   * secret. Needs approvals:read.
   *
   * @returns The session
   *
   * @throws {@link DecisionSessions.GetApiV1DecisionSessionsByIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1DecisionSessionsById(
    request: DecisionSessions.GetApiV1DecisionSessionsByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1DecisionSessionsResponse, DecisionSessions.GetApiV1DecisionSessionsByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/decision-sessions/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1DecisionSessionsResponseSchema },
        errorFactory: DecisionSessions.GetApiV1DecisionSessionsByIdError,
      },
      options,
    );
  }

  /**
   * End a decision session early
   *
   * @remarks
   * A decision already made through it stays made. Needs approvals:write.
   *
   * @returns The session
   *
   * @throws {@link DecisionSessions.PostApiV1DecisionSessionsByIdExpireError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1DecisionSessionsByIdExpire(
    request: DecisionSessions.PostApiV1DecisionSessionsByIdExpireRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1DecisionSessionsExpireResponse,
    DecisionSessions.PostApiV1DecisionSessionsByIdExpireError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/decision-sessions/{id}/expire"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1DecisionSessionsExpireResponseSchema },
        errorFactory: DecisionSessions.PostApiV1DecisionSessionsByIdExpireError,
      },
      options,
    );
  }
}

export namespace DecisionSessions {
  export type GetApiV1DecisionSessionsByIdRequest = {
    id: string;
  };

  export class GetApiV1DecisionSessionsByIdError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1DecisionSessionsByIdError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1DecisionSessionsByIdExpireRequest = {
    id: string;
  };

  export class PostApiV1DecisionSessionsByIdExpireError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1DecisionSessionsByIdExpireError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
