import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1SchedulesRequestSchema,
  type ApiV1SchedulesRequest,
} from "../models/api-v1-schedules-request.js";
import {
  apiV1SchedulesRequest1Schema,
  type ApiV1SchedulesRequest1,
} from "../models/api-v1-schedules-request1.js";
import {
  apiV1SchedulesResponseSchema,
  type ApiV1SchedulesResponse,
} from "../models/api-v1-schedules-response.js";
import {
  apiV1SchedulesResponse1Schema,
  type ApiV1SchedulesResponse1,
} from "../models/api-v1-schedules-response1.js";
import { dueSchema, type Due } from "../models/due.js";
import type { Servers } from "../servers.js";

export class Schedules {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Stop asking for a recurring publish
   *
   * @remarks
   * The report and its versions are untouched. Use `PATCH` with `{"enabled": false}` to pause one
   * instead, which keeps the record that it existed.
   *
   * @returns Removed
   *
   * @throws {@link Schedules.DeleteApiV1SchedulesByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteApiV1SchedulesById(
    request: Schedules.DeleteApiV1SchedulesByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Schedules.DeleteApiV1SchedulesByIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/schedules/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Schedules.DeleteApiV1SchedulesByIdError,
      },
      options,
    );
  }

  /**
   * List recurring publishing schedules
   *
   * @remarks
   * An agent key sees only its own schedules. `due=1` narrows to the ones waiting on a publish: a
   * schedule is due once it has fired and the report has had no new version since, and publishing
   * clears it — there is nothing to acknowledge.
   *
   * @returns Schedules visible to this key
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1Schedules(
    request: Schedules.GetApiV1SchedulesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1SchedulesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/schedules"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "due", value: request.due, schema: s.optional(s.lazy(() => dueSchema)) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1SchedulesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Change a schedule's cadence, or turn it on or off
   *
   * @remarks
   * Changing the recurrence re-times the next run, so a weekly publish moved from Friday to Monday
   * does not fire once more on the Friday. Turning one back on does the same, because a schedule
   * that has been off for a month carries a next run a month in the past.
   *
   * @returns Updated
   *
   * @throws {@link Schedules.PatchApiV1SchedulesByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchApiV1SchedulesById(
    request: Schedules.PatchApiV1SchedulesByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1SchedulesResponse1, Schedules.PatchApiV1SchedulesByIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/schedules/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1SchedulesRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1SchedulesResponse1Schema },
        errorFactory: Schedules.PatchApiV1SchedulesByIdError,
      },
      options,
    );
  }

  /**
   * Ask an agent for a recurring publish
   *
   * @remarks
   * `recurrence` is a five-field cron expression evaluated in UTC, and it has to have a next
   * occurrence — `0 0 30 2 *` is five well-formed fields and a date that never arrives, and is
   * refused rather than stored.
   *
   * An **agent key is refused**: a schedule is an instruction *to* an agent, so setting one is a
   * person's decision. The schedule says when the agent is asked for a new version, not who hears
   * about one — publishing emails the report's audience either way. Nothing publishes by itself:
   * the agent polls `GET /schedules?due=1` and does the work.
   *
   * @returns Created
   *
   * @throws {@link Schedules.PostApiV1SchedulesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1Schedules(
    request: Schedules.PostApiV1SchedulesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1SchedulesResponse1, Schedules.PostApiV1SchedulesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/schedules"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1SchedulesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1SchedulesResponse1Schema },
        errorFactory: Schedules.PostApiV1SchedulesError,
      },
      options,
    );
  }
}

export namespace Schedules {
  export type DeleteApiV1SchedulesByIdRequest = {
    id: string;
  };

  export class DeleteApiV1SchedulesByIdError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteApiV1SchedulesByIdError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetApiV1SchedulesRequest = {
    /** Return only schedules waiting on a publish */
    due?: Due;
  };

  export type PatchApiV1SchedulesByIdRequest = {
    id: string;
    body?: ApiV1SchedulesRequest1;
  };

  export class PatchApiV1SchedulesByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchApiV1SchedulesByIdError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1SchedulesRequest = {
    body?: ApiV1SchedulesRequest;
  };

  export class PostApiV1SchedulesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1SchedulesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }
}
