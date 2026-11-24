import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiV2EventsRequestSchema, type ApiV2EventsRequest } from "../models/api-v2-events-request.js";
import { apiV2EventsResponseSchema, type ApiV2EventsResponse } from "../models/api-v2-events-response.js";
import type { Servers } from "../servers.js";

/**
 * Send custom events for use in Postscript Flows and triggers.
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
   * Create Custom Event
   *
   * @remarks
   * Send a Custom Event to use in Flows
   *
   * @returns 202
   *
   * @throws {@link Events.CreateCustomEventError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PostscriptError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomEvent(
    request: Events.CreateCustomEventRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV2EventsResponse, Events.CreateCustomEventError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/events"),
        auth: this.#auth.sec0,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Postscript-Shop-Token",
            value: request.xPostscriptShopToken,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV2EventsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV2EventsResponseSchema },
        errorFactory: Events.CreateCustomEventError,
      },
      options,
    );
  }
}

export namespace Events {
  export type CreateCustomEventRequest = {
    /**
     * Shop API Token. **Required for partners**. This header should be used *only* by partners.
     * Shops should include their API token in the *Authorization* header.
     */
    xPostscriptShopToken?: string;
    body?: ApiV2EventsRequest;
  };

  export class CreateCustomEventError extends ApiError {
    declare readonly payload: Declared<"error400", Record<string, unknown>> | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomEventError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
    ];
  }
}
