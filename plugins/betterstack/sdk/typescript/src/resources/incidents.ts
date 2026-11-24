import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { incidentCreateInternalSchema, type IncidentCreate } from "../models/incident-create.js";
import type { Servers } from "../servers.js";

export class Incidents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Acknowledge incident
   *
   * @returns Acknowledged.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  acknowledgeIncident(
    request: Incidents.AcknowledgeIncidentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/incidents/{id}/acknowledge"),
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
   * Create incident
   *
   * @returns Created incident.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createIncident(
    request: Incidents.CreateIncidentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/incidents"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: incidentCreateInternalSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Remove incident
   *
   * @returns Removed.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteIncident(
    request: Incidents.DeleteIncidentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/incidents/{id}"),
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
   * Escalate incident
   *
   * @returns Escalated.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  escalateIncident(
    request: Incidents.EscalateIncidentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/incidents/{id}/escalate"),
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
   * Get incident
   *
   * @returns Incident.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIncident(
    request: Incidents.GetIncidentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/incidents/{id}"),
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
   * List incident timeline
   *
   * @returns Timeline entries.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIncidentTimeline(
    request: Incidents.GetIncidentTimelineRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/incidents/{id}/timeline"),
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
   * List incidents
   *
   * @returns A page of incidents.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listIncidents(
    request: Incidents.ListIncidentsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/incidents"),
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
   * Reopen incident
   *
   * @returns Reopened.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  reopenIncident(
    request: Incidents.ReopenIncidentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/incidents/{id}/reopen"),
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
   * Resolve incident
   *
   * @returns Resolved.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resolveIncident(
    request: Incidents.ResolveIncidentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/incidents/{id}/resolve"),
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
}

export namespace Incidents {
  export type AcknowledgeIncidentRequest = {
    id: string;
  };

  export type CreateIncidentRequest = {
    body: IncidentCreate;
  };

  export type DeleteIncidentRequest = {
    id: string;
  };

  export type EscalateIncidentRequest = {
    id: string;
  };

  export type GetIncidentRequest = {
    id: string;
  };

  export type GetIncidentTimelineRequest = {
    id: string;
  };

  export type ListIncidentsRequest = {
    perPage?: number;
    page?: number;
  };

  export const listIncidentsRequestSchema: Schema<ListIncidentsRequest> = s.lazySchema(() =>
    s.object<ListIncidentsRequest>({
      perPage: s.optional(s.int().check(s.gte(1), s.lte(50))),
      page: s.optional(s.int().check(s.gte(1))),
    }),
  );

  export type ReopenIncidentRequest = {
    id: string;
  };

  export type ResolveIncidentRequest = {
    id: string;
  };
}
