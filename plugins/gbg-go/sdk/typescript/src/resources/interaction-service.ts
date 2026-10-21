import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  journeyInteractionFetchRequestSchema,
  type JourneyInteractionFetchRequest,
} from "../models/journey-interaction-fetch-request.js";
import {
  journeyInteractionSubmitRequestSchema,
  type JourneyInteractionSubmitRequest,
} from "../models/journey-interaction-submit-request.js";
import {
  journeyInteractionFetchResponse3Schema,
  type JourneyInteractionFetchResponse3,
} from "../models/unions/journey-interaction-fetch-response3.js";
import {
  journeyInteractionSubmitResponse2Schema,
  type JourneyInteractionSubmitResponse2,
} from "../models/unions/journey-interaction-submit-response2.js";
import type { Servers } from "../servers.js";

export class InteractionService {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Fetch Interaction
   *
   * @remarks
   * Fetch Interaction
   *
   * @returns Success
   *
   * @throws {@link InteractionService.FetchInteractionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GbgGoNextGenFlowCaptainApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  fetchInteraction(
    request: InteractionService.FetchInteractionRequest,
    options?: RequestOptions,
  ): ApiPromise<JourneyInteractionFetchResponse3, InteractionService.FetchInteractionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/journey/interaction/fetch"),
        auth: this.#auth.interactionAccess,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => journeyInteractionFetchRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: journeyInteractionFetchResponse3Schema },
        errorFactory: InteractionService.FetchInteractionError,
      },
      options,
    );
  }

  /**
   * Submit Interaction
   *
   * @remarks
   * Submit Interaction
   *
   * @returns Success
   *
   * @throws {@link InteractionService.SubmitInteractionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GbgGoNextGenFlowCaptainApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  submitInteraction(
    request: InteractionService.SubmitInteractionRequest,
    options?: RequestOptions,
  ): ApiPromise<JourneyInteractionSubmitResponse2, InteractionService.SubmitInteractionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/journey/interaction/submit"),
        auth: this.#auth.interactionAccess,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => journeyInteractionSubmitRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: journeyInteractionSubmitResponse2Schema },
        errorFactory: InteractionService.SubmitInteractionError,
      },
      options,
    );
  }
}

export namespace InteractionService {
  export type FetchInteractionRequest = {
    body?: JourneyInteractionFetchRequest;
  };

  export class FetchInteractionError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error405", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchInteractionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 405, kind: "error405", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type SubmitInteractionRequest = {
    body?: JourneyInteractionSubmitRequest;
  };

  export class SubmitInteractionError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error405", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SubmitInteractionError> = [
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
