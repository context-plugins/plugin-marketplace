import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
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
  containerCompletionsBodySchema,
  type ContainerCompletionsBody,
} from "../models/unions/container-completions-body.js";
import {
  containerCompletionsStreamBodySchema,
  type ContainerCompletionsStreamBody,
} from "../models/unions/container-completions-stream-body.js";
import type { Servers } from "../servers.js";

export class ContainerCompletions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
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
   * @throws {@link ContainerCompletions.ContainerCompletionsCompleteError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  containerCompletionsComplete(
    request: ContainerCompletions.ContainerCompletionsCompleteRequest,
    options?: RequestOptions,
  ): ApiPromise<CompletionsResult, ContainerCompletions.ContainerCompletionsCompleteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/completions"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: containerCompletionsBodySchema },
      },
      {
        success: { kind: "json", schema: completionsResultSchema },
        errorFactory: ContainerCompletions.ContainerCompletionsCompleteError,
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
   * @throws {@link ContainerCompletions.ContainerCompletionsStreamError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  containerCompletionsStream(
    request: ContainerCompletions.ContainerCompletionsStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<
    EventStream<StreamedCompletionsResult>,
    ContainerCompletions.ContainerCompletionsStreamError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/completions#stream"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: containerCompletionsStreamBodySchema },
      },
      {
        success: { kind: "eventStreamJson", dataSchema: streamedCompletionsResultSchema },
        errorFactory: ContainerCompletions.ContainerCompletionsStreamError,
      },
      options,
    );
  }
}

export namespace ContainerCompletions {
  export type ContainerCompletionsCompleteRequest = {
    body: ContainerCompletionsBody;
  };

  export class ContainerCompletionsCompleteError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ContainerCompletionsCompleteError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ContainerCompletionsStreamRequest = {
    body: ContainerCompletionsStreamBody;
  };

  export class ContainerCompletionsStreamError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ContainerCompletionsStreamError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
