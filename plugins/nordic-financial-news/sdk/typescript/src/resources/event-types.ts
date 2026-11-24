import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  apiV1EventTypesResponseSchema,
  type ApiV1EventTypesResponse,
} from "../models/api-v1-event-types-response.js";
import { problemDetailsSchema, type ProblemDetails } from "../models/problem-details.js";
import type { Servers } from "../servers.js";

export class EventTypes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Event Types
   *
   * @remarks
   * Returns all active event types, grouped by category (in the categories' defined order) and
   * ordered by slug within each. Event type slugs are the values for the `event_type` filter on
   * `GET /api/v1/events`.
   *
   * @returns Event types retrieved successfully
   *
   * @throws {@link EventTypes.GetApiV1EventTypesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1EventTypes(
    request: EventTypes.GetApiV1EventTypesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1EventTypesResponse, EventTypes.GetApiV1EventTypesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/event_types"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "fields", value: request.fields, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1EventTypesResponseSchema },
        errorFactory: EventTypes.GetApiV1EventTypesError,
      },
      options,
    );
  }
}

export namespace EventTypes {
  export type GetApiV1EventTypesRequest = {
    /**
     * Comma-separated list of fields to include. Available fields: `id`, `slug`, `label`,
     * `category`, `summary`. `id` is always included.
     */
    fields?: string;
  };

  export class GetApiV1EventTypesError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1EventTypesError> = [
      { on: 401, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsSchema } },
      { on: 403, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsSchema } },
    ];
  }
}
