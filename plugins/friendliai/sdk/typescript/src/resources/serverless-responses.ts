import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { EventStream } from "../core/event-stream.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  serverlessResponsesBodySchema,
  type ServerlessResponsesBody,
} from "../models/serverless-responses-body.js";
import {
  serverlessResponsesStreamBodySchema,
  type ServerlessResponsesStreamBody,
} from "../models/serverless-responses-stream-body.js";
import {
  serverlessResponsesStreamSuccessSchema,
  type ServerlessResponsesStreamSuccess,
} from "../models/serverless-responses-stream-success.js";
import {
  serverlessResponsesSuccessSchema,
  type ServerlessResponsesSuccess,
} from "../models/serverless-responses-success.js";
import { xFriendliTeamSchema, type XFriendliTeam } from "../models/unions/xfriendli-team.js";
import type { Servers } from "../servers.js";

export class ServerlessResponses {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Responses
   *
   * @remarks
   * Generate a model response from text or image inputs. Follows the OpenAI Responses API format,
   * with support for streaming, function and custom tool calls, structured outputs, and reasoning
   * controls.
   *
   * @returns Successfully generated a response.
   *
   * @throws {@link ServerlessResponses.ServerlessResponsesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  serverlessResponses(
    request: ServerlessResponses.ServerlessResponsesRequest,
    options?: RequestOptions,
  ): ApiPromise<ServerlessResponsesSuccess, ServerlessResponses.ServerlessResponsesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/serverless/v1/responses"),
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
        body: { kind: "json", value: request.body, schema: serverlessResponsesBodySchema },
      },
      {
        success: { kind: "json", schema: serverlessResponsesSuccessSchema },
        errorFactory: ServerlessResponses.ServerlessResponsesError,
      },
      options,
    );
  }

  /**
   * Stream responses
   *
   * @remarks
   * Generate a model response from text or image inputs. Follows the OpenAI Responses API format,
   * with support for streaming, function and custom tool calls, structured outputs, and reasoning
   * controls.
   *
   * @returns Successfully generated a streamed response.
   *
   * @throws {@link ServerlessResponses.ServerlessResponsesStreamError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  serverlessResponsesStream(
    request: ServerlessResponses.ServerlessResponsesStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<
    EventStream<ServerlessResponsesStreamSuccess>,
    ServerlessResponses.ServerlessResponsesStreamError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/serverless/v1/responses#stream"),
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
        body: { kind: "json", value: request.body, schema: serverlessResponsesStreamBodySchema },
      },
      {
        success: { kind: "eventStreamJson", dataSchema: serverlessResponsesStreamSuccessSchema },
        errorFactory: ServerlessResponses.ServerlessResponsesStreamError,
      },
      options,
    );
  }
}

export namespace ServerlessResponses {
  export type ServerlessResponsesRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: ServerlessResponsesBody;
  };

  export class ServerlessResponsesError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ServerlessResponsesError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ServerlessResponsesStreamRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: ServerlessResponsesStreamBody;
  };

  export class ServerlessResponsesStreamError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ServerlessResponsesStreamError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
