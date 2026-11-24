import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { heartbeatCreateSchema, type HeartbeatCreate } from "../models/heartbeat-create.js";
import type { Servers } from "../servers.js";

export class Heartbeats {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create heartbeat
   *
   * @returns Created heartbeat.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createHeartbeat(
    request: Heartbeats.CreateHeartbeatRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/heartbeats"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: heartbeatCreateSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Remove heartbeat
   *
   * @returns Removed.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteHeartbeat(
    request: Heartbeats.DeleteHeartbeatRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/heartbeats/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get heartbeat
   *
   * @returns Heartbeat.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getHeartbeat(
    request: Heartbeats.GetHeartbeatRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/heartbeats/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Heartbeat availability
   *
   * @returns Availability summary.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getHeartbeatAvailability(
    request: Heartbeats.GetHeartbeatAvailabilityRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/heartbeats/{id}/availability"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List heartbeats
   *
   * @returns A page of heartbeats.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listHeartbeats(
    request: Heartbeats.ListHeartbeatsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/heartbeats"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "per_page", value: request.perPage, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update heartbeat
   *
   * @returns Updated heartbeat.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateHeartbeat(
    request: Heartbeats.UpdateHeartbeatRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/heartbeats/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: heartbeatCreateSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Heartbeats {
  export type CreateHeartbeatRequest = {
    body: HeartbeatCreate;
  };

  export type DeleteHeartbeatRequest = {
    id: string;
  };

  export type GetHeartbeatRequest = {
    id: string;
  };

  export type GetHeartbeatAvailabilityRequest = {
    id: string;
  };

  export type ListHeartbeatsRequest = {
    perPage?: number;
    page?: number;
  };

  export const listHeartbeatsRequestSchema: Schema<ListHeartbeatsRequest> = s.lazySchema(() =>
    s.object<ListHeartbeatsRequest>({
      perPage: s.optional(s.int().check(s.gte(1), s.lte(50))),
      page: s.optional(s.int().check(s.gte(1))),
    }),
  );

  export type UpdateHeartbeatRequest = {
    id: string;
    body: HeartbeatCreate;
  };
}
