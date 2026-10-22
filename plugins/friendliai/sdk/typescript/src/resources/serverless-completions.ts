import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { EventStream } from "../core/event-stream.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { completionsResultSchema, type CompletionsResult } from "../models/completions-result.js";
import {
  streamedCompletionsResultSchema,
  type StreamedCompletionsResult,
} from "../models/streamed-completions-result.js";
import {
  serverlessCompletionsBodySchema,
  type ServerlessCompletionsBody,
} from "../models/unions/serverless-completions-body.js";
import {
  serverlessCompletionsStreamBodySchema,
  type ServerlessCompletionsStreamBody,
} from "../models/unions/serverless-completions-stream-body.js";
import { xFriendliTeamSchema, type XFriendliTeam } from "../models/unions/xfriendli-team.js";
import type { Servers } from "../servers.js";

export class ServerlessCompletions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Completions
   *
   * @remarks
   * Generate a text completion from a prompt or token sequence. Supports streaming and configurable
   * generation parameters.
   *
   * @returns Successfully generated a completion response.
   *
   * @throws {@link ServerlessCompletions.ServerlessCompletionsCompleteError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  serverlessCompletionsComplete(
    request: ServerlessCompletions.ServerlessCompletionsCompleteRequest,
    options?: RequestOptions,
  ): ApiPromise<CompletionsResult, ServerlessCompletions.ServerlessCompletionsCompleteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/serverless/v1/completions"),
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
        body: { kind: "json", value: request.body, schema: serverlessCompletionsBodySchema },
      },
      {
        success: { kind: "json", schema: completionsResultSchema },
        errorFactory: ServerlessCompletions.ServerlessCompletionsCompleteError,
      },
      options,
    );
  }

  /**
   * Stream completions
   *
   * @remarks
   * Generate a text completion from a prompt or token sequence. Supports streaming and configurable
   * generation parameters.
   *
   * @returns Successfully generated a completion response.
   *
   * @throws {@link ServerlessCompletions.ServerlessCompletionsStreamError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  serverlessCompletionsStream(
    request: ServerlessCompletions.ServerlessCompletionsStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<
    EventStream<StreamedCompletionsResult>,
    ServerlessCompletions.ServerlessCompletionsStreamError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/serverless/v1/completions#stream"),
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
        body: { kind: "json", value: request.body, schema: serverlessCompletionsStreamBodySchema },
      },
      {
        success: { kind: "eventStreamJson", dataSchema: streamedCompletionsResultSchema },
        errorFactory: ServerlessCompletions.ServerlessCompletionsStreamError,
      },
      options,
    );
  }
}

export namespace ServerlessCompletions {
  export type ServerlessCompletionsCompleteRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: ServerlessCompletionsBody;
  };

  export class ServerlessCompletionsCompleteError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ServerlessCompletionsCompleteError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ServerlessCompletionsStreamRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: ServerlessCompletionsStreamBody;
  };

  export class ServerlessCompletionsStreamError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ServerlessCompletionsStreamError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
