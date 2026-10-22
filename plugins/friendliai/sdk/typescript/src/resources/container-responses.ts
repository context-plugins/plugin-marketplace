import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { EventStream } from "../core/event-stream.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  containerResponsesBodySchema,
  type ContainerResponsesBody,
} from "../models/container-responses-body.js";
import {
  containerResponsesStreamBodySchema,
  type ContainerResponsesStreamBody,
} from "../models/container-responses-stream-body.js";
import {
  containerResponsesStreamSuccessSchema,
  type ContainerResponsesStreamSuccess,
} from "../models/container-responses-stream-success.js";
import {
  containerResponsesSuccessSchema,
  type ContainerResponsesSuccess,
} from "../models/container-responses-success.js";
import type { Servers } from "../servers.js";

export class ContainerResponses {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
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
   * @throws {@link ContainerResponses.ContainerResponsesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  containerResponses(
    request: ContainerResponses.ContainerResponsesRequest,
    options?: RequestOptions,
  ): ApiPromise<ContainerResponsesSuccess, ContainerResponses.ContainerResponsesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/responses"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: containerResponsesBodySchema },
      },
      {
        success: { kind: "json", schema: containerResponsesSuccessSchema },
        errorFactory: ContainerResponses.ContainerResponsesError,
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
   * @throws {@link ContainerResponses.ContainerResponsesStreamError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  containerResponsesStream(
    request: ContainerResponses.ContainerResponsesStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<
    EventStream<ContainerResponsesStreamSuccess>,
    ContainerResponses.ContainerResponsesStreamError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/responses#stream"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: containerResponsesStreamBodySchema },
      },
      {
        success: { kind: "eventStreamJson", dataSchema: containerResponsesStreamSuccessSchema },
        errorFactory: ContainerResponses.ContainerResponsesStreamError,
      },
      options,
    );
  }
}

export namespace ContainerResponses {
  export type ContainerResponsesRequest = {
    body: ContainerResponsesBody;
  };

  export class ContainerResponsesError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ContainerResponsesError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ContainerResponsesStreamRequest = {
    body: ContainerResponsesStreamBody;
  };

  export class ContainerResponsesStreamError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ContainerResponsesStreamError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
