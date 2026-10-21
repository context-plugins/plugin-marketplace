import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { journeyStartRequestSchema, type JourneyStartRequest } from "../models/journey-start-request.js";
import { journeyStartResponseSchema, type JourneyStartResponse } from "../models/journey-start-response.js";
import {
  journeyStateFetchRequestSchema,
  type JourneyStateFetchRequest,
} from "../models/journey-state-fetch-request.js";
import {
  journeyStateFetchResponseSchema,
  type JourneyStateFetchResponse,
} from "../models/journey-state-fetch-response.js";
import type { Servers } from "../servers.js";

export class FlowDispatchService {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get State Data
   *
   * @remarks
   * Get State Data
   *
   * @returns Success
   *
   * @throws {@link FlowDispatchService.GetJourneyStateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GbgGoNextGenFlowCaptainApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getJourneyState(
    request: FlowDispatchService.GetJourneyStateRequest,
    options?: RequestOptions,
  ): ApiPromise<JourneyStateFetchResponse, FlowDispatchService.GetJourneyStateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/journey/state/fetch"),
        auth: this.#auth.customerAccess,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => journeyStateFetchRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: journeyStateFetchResponseSchema },
        errorFactory: FlowDispatchService.GetJourneyStateError,
      },
      options,
    );
  }

  /**
   * Start Journey
   *
   * @remarks
   * Start Journey
   *
   * @returns Start Response contains the Journey Instance Id
   *
   * @throws {@link FlowDispatchService.StartJourneyError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link GbgGoNextGenFlowCaptainApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  startJourney(
    request: FlowDispatchService.StartJourneyRequest,
    options?: RequestOptions,
  ): ApiPromise<JourneyStartResponse, FlowDispatchService.StartJourneyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/journey/start"),
        auth: this.#auth.customerAccess,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => journeyStartRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: journeyStartResponseSchema },
        errorFactory: FlowDispatchService.StartJourneyError,
      },
      options,
    );
  }
}

export namespace FlowDispatchService {
  export type GetJourneyStateRequest = {
    body?: JourneyStateFetchRequest;
  };

  export class GetJourneyStateError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error405", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetJourneyStateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 405, kind: "error405", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type StartJourneyRequest = {
    body?: JourneyStartRequest;
  };

  export class StartJourneyError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error405", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartJourneyError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 405, kind: "error405", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }
}
