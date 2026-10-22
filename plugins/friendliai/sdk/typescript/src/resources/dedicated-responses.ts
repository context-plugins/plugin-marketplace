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
  dedicatedResponsesBodySchema,
  type DedicatedResponsesBody,
} from "../models/dedicated-responses-body.js";
import {
  dedicatedResponsesStreamBodySchema,
  type DedicatedResponsesStreamBody,
} from "../models/dedicated-responses-stream-body.js";
import {
  dedicatedResponsesStreamSuccessSchema,
  type DedicatedResponsesStreamSuccess,
} from "../models/dedicated-responses-stream-success.js";
import {
  dedicatedResponsesSuccessSchema,
  type DedicatedResponsesSuccess,
} from "../models/dedicated-responses-success.js";
import { xFriendliTeamSchema, type XFriendliTeam } from "../models/unions/xfriendli-team.js";
import type { Servers } from "../servers.js";

export class DedicatedResponses {
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
   * @throws {@link DedicatedResponses.DedicatedResponsesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedResponses(
    request: DedicatedResponses.DedicatedResponsesRequest,
    options?: RequestOptions,
  ): ApiPromise<DedicatedResponsesSuccess, DedicatedResponses.DedicatedResponsesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/dedicated/v1/responses"),
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
        body: { kind: "json", value: request.body, schema: dedicatedResponsesBodySchema },
      },
      {
        success: { kind: "json", schema: dedicatedResponsesSuccessSchema },
        errorFactory: DedicatedResponses.DedicatedResponsesError,
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
   * @throws {@link DedicatedResponses.DedicatedResponsesStreamError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedResponsesStream(
    request: DedicatedResponses.DedicatedResponsesStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<
    EventStream<DedicatedResponsesStreamSuccess>,
    DedicatedResponses.DedicatedResponsesStreamError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/dedicated/v1/responses#stream"),
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
        body: { kind: "json", value: request.body, schema: dedicatedResponsesStreamBodySchema },
      },
      {
        success: { kind: "eventStreamJson", dataSchema: dedicatedResponsesStreamSuccessSchema },
        errorFactory: DedicatedResponses.DedicatedResponsesStreamError,
      },
      options,
    );
  }
}

export namespace DedicatedResponses {
  export type DedicatedResponsesRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: DedicatedResponsesBody;
  };

  export class DedicatedResponsesError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedResponsesError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type DedicatedResponsesStreamRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: DedicatedResponsesStreamBody;
  };

  export class DedicatedResponsesStreamError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedResponsesStreamError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
