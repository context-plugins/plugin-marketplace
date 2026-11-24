import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createStreamlinedEventRequestSchema,
  type CreateStreamlinedEventRequest,
} from "../models/create-streamlined-event-request.js";
import { errorResponseDtoSchema, type ErrorResponseDto } from "../models/error-response-dto.js";
import type { Servers } from "../servers.js";

/**
 * This resource represents events. Use this resource to send events into an event source.
 */
export class Events {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Send event
   *
   * @remarks
   * Sends an event into an event source. This API is rate limited. Only 100 requests per user per
   * minute are allowed.
   *
   * @returns Returned if the process of sending of an event is started.
   *
   * @throws {@link Events.CreateCompassEventError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AtlassianCompassError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createCompassEvent(
    request: Events.CreateCompassEventRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Events.CreateCompassEventError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/compass/v1/events"),
        auth: this.#auth.basicAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createStreamlinedEventRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Events.CreateCompassEventError,
      },
      options,
    );
  }
}

export namespace Events {
  export type CreateCompassEventRequest = {
    body: CreateStreamlinedEventRequest;
  };

  export class CreateCompassEventError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseDto", ErrorResponseDto>
      | Declared<"errorResponseDto2", ErrorResponseDto>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCompassEventError> = [
      { on: 400, kind: "errorResponseDto", decode: { kind: "json", schema: errorResponseDtoSchema } },
      { on: 404, kind: "errorResponseDto2", decode: { kind: "json", schema: errorResponseDtoSchema } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
