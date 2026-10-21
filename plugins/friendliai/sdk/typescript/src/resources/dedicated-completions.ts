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
  dedicatedCompletionsBodySchema,
  type DedicatedCompletionsBody,
} from "../models/unions/dedicated-completions-body.js";
import {
  dedicatedCompletionsStreamBodySchema,
  type DedicatedCompletionsStreamBody,
} from "../models/unions/dedicated-completions-stream-body.js";
import { xFriendliTeamSchema, type XFriendliTeam } from "../models/unions/xfriendli-team.js";
import type { Servers } from "../servers.js";

export class DedicatedCompletions {
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
   * @throws {@link DedicatedCompletions.DedicatedCompletionsCompleteError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedCompletionsComplete(
    request: DedicatedCompletions.DedicatedCompletionsCompleteRequest,
    options?: RequestOptions,
  ): ApiPromise<CompletionsResult, DedicatedCompletions.DedicatedCompletionsCompleteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/dedicated/v1/completions"),
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
        body: { kind: "json", value: request.body, schema: dedicatedCompletionsBodySchema },
      },
      {
        success: { kind: "json", schema: completionsResultSchema },
        errorFactory: DedicatedCompletions.DedicatedCompletionsCompleteError,
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
   * @throws {@link DedicatedCompletions.DedicatedCompletionsStreamError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedCompletionsStream(
    request: DedicatedCompletions.DedicatedCompletionsStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<
    EventStream<StreamedCompletionsResult>,
    DedicatedCompletions.DedicatedCompletionsStreamError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/dedicated/v1/completions#stream"),
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
        body: { kind: "json", value: request.body, schema: dedicatedCompletionsStreamBodySchema },
      },
      {
        success: { kind: "eventStreamJson", dataSchema: streamedCompletionsResultSchema },
        errorFactory: DedicatedCompletions.DedicatedCompletionsStreamError,
      },
      options,
    );
  }
}

export namespace DedicatedCompletions {
  export type DedicatedCompletionsCompleteRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: DedicatedCompletionsBody;
  };

  export class DedicatedCompletionsCompleteError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedCompletionsCompleteError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type DedicatedCompletionsStreamRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: DedicatedCompletionsStreamBody;
  };

  export class DedicatedCompletionsStreamError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedCompletionsStreamError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
