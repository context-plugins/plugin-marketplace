import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  dedicatedEndpointCreateBodySchema,
  type DedicatedEndpointCreateBody,
} from "../models/dedicated-endpoint-create-body.js";
import {
  dedicatedEndpointListResponseSchema,
  type DedicatedEndpointListResponse,
} from "../models/dedicated-endpoint-list-response.js";
import {
  dedicatedEndpointSpecSchema,
  type DedicatedEndpointSpec,
} from "../models/dedicated-endpoint-spec.js";
import {
  dedicatedEndpointStatusSchema,
  type DedicatedEndpointStatus,
} from "../models/dedicated-endpoint-status.js";
import {
  dedicatedEndpointUpdateBodySchema,
  type DedicatedEndpointUpdateBody,
} from "../models/dedicated-endpoint-update-body.js";
import {
  dedicatedEndpointVersionHistoryResponseSchema,
  type DedicatedEndpointVersionHistoryResponse,
} from "../models/dedicated-endpoint-version-history-response.js";
import {
  dedicatedEndpointWandbArtifactCreateBodySchema,
  type DedicatedEndpointWandbArtifactCreateBody,
} from "../models/dedicated-endpoint-wandb-artifact-create-body.js";
import {
  dedicatedEndpointWandbArtifactCreateResponseSchema,
  type DedicatedEndpointWandbArtifactCreateResponse,
} from "../models/dedicated-endpoint-wandb-artifact-create-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { cursorSchema, type Cursor } from "../models/unions/cursor.js";
import { limitSchema, type Limit } from "../models/unions/limit.js";
import { projectId1Schema, type ProjectId1 } from "../models/unions/project-id1.js";
import { xFriendliTeamSchema, type XFriendliTeam } from "../models/unions/xfriendli-team.js";
import type { Servers } from "../servers.js";

export class DedicatedEndpoint {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new endpoint
   *
   * @remarks
   * Create a new endpoint and return its status
   *
   * @returns Successfully created the endpoint.
   *
   * @throws {@link DedicatedEndpoint.DedicatedCreateEndpointError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedCreateEndpoint(
    request: DedicatedEndpoint.DedicatedCreateEndpointRequest,
    options?: RequestOptions,
  ): ApiPromise<DedicatedEndpointStatus, DedicatedEndpoint.DedicatedCreateEndpointError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/dedicated/beta/endpoint"),
        auth: this.#auth.token,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: dedicatedEndpointCreateBodySchema },
      },
      {
        success: { kind: "json", schema: dedicatedEndpointStatusSchema },
        errorFactory: DedicatedEndpoint.DedicatedCreateEndpointError,
      },
      options,
    );
  }

  /**
   * Delete endpoint
   *
   * @remarks
   * Delete a specific endpoint
   *
   * @returns Successful Response
   *
   * @throws {@link DedicatedEndpoint.DedicatedDeleteEndpointError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedDeleteEndpoint(
    request: DedicatedEndpoint.DedicatedDeleteEndpointRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, DedicatedEndpoint.DedicatedDeleteEndpointError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/dedicated/beta/endpoint/{endpoint_id}"),
        auth: this.#auth.token,
        pathParams: [{ name: "endpoint_id", value: request.endpointId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: DedicatedEndpoint.DedicatedDeleteEndpointError,
      },
      options,
    );
  }

  /**
   * Create endpoint from W&B artifact
   *
   * @remarks
   * Create an endpoint from Weights & Biases artifact. If the idempotency key is provided, the API
   * will check if the endpoint already exists, and rollout the existing endpoint if it does. In
   * such cases, the project id must be provided.
   *
   * @returns Successfully created the endpoint from W&B artifact.
   *
   * @throws {@link DedicatedEndpoint.DedicatedEndpointWandbArtifactCreateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedEndpointWandbArtifactCreate(
    request: DedicatedEndpoint.DedicatedEndpointWandbArtifactCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DedicatedEndpointWandbArtifactCreateResponse,
    DedicatedEndpoint.DedicatedEndpointWandbArtifactCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/dedicated/endpoint/wandb-artifact-create"),
        auth: this.#auth.token,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: dedicatedEndpointWandbArtifactCreateBodySchema },
      },
      {
        success: { kind: "json", schema: dedicatedEndpointWandbArtifactCreateResponseSchema },
        errorFactory: DedicatedEndpoint.DedicatedEndpointWandbArtifactCreateError,
      },
      options,
    );
  }

  /**
   * Get endpoint specification
   *
   * @remarks
   * Get the specification of an endpoint
   *
   * @returns Successfully retrieved the endpoint specification.
   *
   * @throws {@link DedicatedEndpoint.DedicatedGetEndpointError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedGetEndpoint(
    request: DedicatedEndpoint.DedicatedGetEndpointRequest,
    options?: RequestOptions,
  ): ApiPromise<DedicatedEndpointSpec, DedicatedEndpoint.DedicatedGetEndpointError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/dedicated/beta/endpoint/{endpoint_id}"),
        auth: this.#auth.token,
        pathParams: [{ name: "endpoint_id", value: request.endpointId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dedicatedEndpointSpecSchema },
        errorFactory: DedicatedEndpoint.DedicatedGetEndpointError,
      },
      options,
    );
  }

  /**
   * Get endpoint status
   *
   * @remarks
   * Get the status of a specific endpoint
   *
   * @returns Successfully retrieved the endpoint status.
   *
   * @throws {@link DedicatedEndpoint.DedicatedGetEndpointStatusError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedGetEndpointStatus(
    request: DedicatedEndpoint.DedicatedGetEndpointStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<DedicatedEndpointStatus, DedicatedEndpoint.DedicatedGetEndpointStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/dedicated/beta/endpoint/{endpoint_id}/status"),
        auth: this.#auth.token,
        pathParams: [{ name: "endpoint_id", value: request.endpointId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dedicatedEndpointStatusSchema },
        errorFactory: DedicatedEndpoint.DedicatedGetEndpointStatusError,
      },
      options,
    );
  }

  /**
   * Get endpoint version history
   *
   * @remarks
   * Get version history of a specific endpoint
   *
   * @returns Successfully retrieved the endpoint version history.
   *
   * @throws {@link DedicatedEndpoint.DedicatedGetEndpointVersionHistoryError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedGetEndpointVersionHistory(
    request: DedicatedEndpoint.DedicatedGetEndpointVersionHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DedicatedEndpointVersionHistoryResponse,
    DedicatedEndpoint.DedicatedGetEndpointVersionHistoryError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/dedicated/beta/endpoint/{endpoint_id}/version"),
        auth: this.#auth.token,
        pathParams: [{ name: "endpoint_id", value: request.endpointId, schema: s.string() }],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.lazy(() => cursorSchema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.lazy(() => limitSchema)) },
        ],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dedicatedEndpointVersionHistoryResponseSchema },
        errorFactory: DedicatedEndpoint.DedicatedGetEndpointVersionHistoryError,
      },
      options,
    );
  }

  /**
   * List all endpoints
   *
   * @remarks
   * List all endpoint statuses
   *
   * @returns Successfully listed endpoints.
   *
   * @throws {@link DedicatedEndpoint.DedicatedListEndpointsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedListEndpoints(
    request: DedicatedEndpoint.DedicatedListEndpointsRequest,
    options?: RequestOptions,
  ): ApiPromise<DedicatedEndpointListResponse, DedicatedEndpoint.DedicatedListEndpointsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/dedicated/beta/endpoint"),
        auth: this.#auth.token,
        pathParams: [],
        query: [
          {
            name: "project_id",
            value: request.projectId,
            schema: s.optional(s.lazy(() => projectId1Schema)),
          },
          { name: "cursor", value: request.cursor, schema: s.optional(s.lazy(() => cursorSchema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.lazy(() => limitSchema)) },
        ],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dedicatedEndpointListResponseSchema },
        errorFactory: DedicatedEndpoint.DedicatedListEndpointsError,
      },
      options,
    );
  }

  /**
   * Restart endpoint
   *
   * @remarks
   * Restart a FAILED or TERMINATED endpoint
   *
   * @returns Successfully requested to restart the endpoint.
   *
   * @throws {@link DedicatedEndpoint.DedicatedRestartEndpointError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedRestartEndpoint(
    request: DedicatedEndpoint.DedicatedRestartEndpointRequest,
    options?: RequestOptions,
  ): ApiPromise<DedicatedEndpointStatus, DedicatedEndpoint.DedicatedRestartEndpointError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/dedicated/beta/endpoint/{endpoint_id}/restart"),
        auth: this.#auth.token,
        pathParams: [{ name: "endpoint_id", value: request.endpointId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dedicatedEndpointStatusSchema },
        errorFactory: DedicatedEndpoint.DedicatedRestartEndpointError,
      },
      options,
    );
  }

  /**
   * Sleep endpoint
   *
   * @remarks
   * Put a specific endpoint to sleep
   *
   * @returns Successfully requested to put the endpoint to sleep.
   *
   * @throws {@link DedicatedEndpoint.DedicatedSleepEndpointError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedSleepEndpoint(
    request: DedicatedEndpoint.DedicatedSleepEndpointRequest,
    options?: RequestOptions,
  ): ApiPromise<DedicatedEndpointStatus, DedicatedEndpoint.DedicatedSleepEndpointError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/dedicated/beta/endpoint/{endpoint_id}/sleep"),
        auth: this.#auth.token,
        pathParams: [{ name: "endpoint_id", value: request.endpointId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dedicatedEndpointStatusSchema },
        errorFactory: DedicatedEndpoint.DedicatedSleepEndpointError,
      },
      options,
    );
  }

  /**
   * Terminate endpoint
   *
   * @remarks
   * Terminate a specific endpoint
   *
   * @returns Successfully requested to terminate the endpoint.
   *
   * @throws {@link DedicatedEndpoint.DedicatedTerminateEndpointError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedTerminateEndpoint(
    request: DedicatedEndpoint.DedicatedTerminateEndpointRequest,
    options?: RequestOptions,
  ): ApiPromise<DedicatedEndpointStatus, DedicatedEndpoint.DedicatedTerminateEndpointError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/dedicated/beta/endpoint/{endpoint_id}/terminate"),
        auth: this.#auth.token,
        pathParams: [{ name: "endpoint_id", value: request.endpointId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dedicatedEndpointStatusSchema },
        errorFactory: DedicatedEndpoint.DedicatedTerminateEndpointError,
      },
      options,
    );
  }

  /**
   * Update endpoint spec
   *
   * @remarks
   * Update the specification of a specific endpoint
   *
   * @returns Successfully updated the endpoint specification.
   *
   * @throws {@link DedicatedEndpoint.DedicatedUpdateEndpointError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedUpdateEndpoint(
    request: DedicatedEndpoint.DedicatedUpdateEndpointRequest,
    options?: RequestOptions,
  ): ApiPromise<DedicatedEndpointSpec, DedicatedEndpoint.DedicatedUpdateEndpointError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/dedicated/beta/endpoint/{endpoint_id}"),
        auth: this.#auth.token,
        pathParams: [{ name: "endpoint_id", value: request.endpointId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: dedicatedEndpointUpdateBodySchema },
      },
      {
        success: { kind: "json", schema: dedicatedEndpointSpecSchema },
        errorFactory: DedicatedEndpoint.DedicatedUpdateEndpointError,
      },
      options,
    );
  }

  /**
   * Wake endpoint
   *
   * @remarks
   * Wake up a specific endpoint
   *
   * @returns Successfully requested to wake up the endpoint.
   *
   * @throws {@link DedicatedEndpoint.DedicatedWakeEndpointError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedWakeEndpoint(
    request: DedicatedEndpoint.DedicatedWakeEndpointRequest,
    options?: RequestOptions,
  ): ApiPromise<DedicatedEndpointStatus, DedicatedEndpoint.DedicatedWakeEndpointError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/dedicated/beta/endpoint/{endpoint_id}/wake"),
        auth: this.#auth.token,
        pathParams: [{ name: "endpoint_id", value: request.endpointId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dedicatedEndpointStatusSchema },
        errorFactory: DedicatedEndpoint.DedicatedWakeEndpointError,
      },
      options,
    );
  }
}

export namespace DedicatedEndpoint {
  export type DedicatedCreateEndpointRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: DedicatedEndpointCreateBody;
  };

  export class DedicatedCreateEndpointError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedCreateEndpointError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DedicatedDeleteEndpointRequest = {
    /** The ID of the endpoint. */
    endpointId: string;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
  };

  export class DedicatedDeleteEndpointError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedDeleteEndpointError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DedicatedEndpointWandbArtifactCreateRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: DedicatedEndpointWandbArtifactCreateBody;
  };

  export class DedicatedEndpointWandbArtifactCreateError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedEndpointWandbArtifactCreateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type DedicatedGetEndpointRequest = {
    /** The ID of the endpoint. */
    endpointId: string;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
  };

  export class DedicatedGetEndpointError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedGetEndpointError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type DedicatedGetEndpointStatusRequest = {
    /** The ID of the endpoint. */
    endpointId: string;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
  };

  export class DedicatedGetEndpointStatusError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedGetEndpointStatusError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type DedicatedGetEndpointVersionHistoryRequest = {
    /** The ID of the endpoint. */
    endpointId: string;
    /** Cursor for pagination. */
    cursor?: Cursor;
    /** Limit of items per page. */
    limit?: Limit;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
  };

  export class DedicatedGetEndpointVersionHistoryError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedGetEndpointVersionHistoryError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type DedicatedListEndpointsRequest = {
    /** The ID of the project. If omitted, query all endpoints under the team. */
    projectId?: ProjectId1;
    /** Cursor for pagination. */
    cursor?: Cursor;
    /** Limit of items per page. */
    limit?: Limit;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
  };

  export class DedicatedListEndpointsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedListEndpointsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type DedicatedRestartEndpointRequest = {
    /** The ID of the endpoint. */
    endpointId: string;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
  };

  export class DedicatedRestartEndpointError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedRestartEndpointError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DedicatedSleepEndpointRequest = {
    /** The ID of the endpoint. */
    endpointId: string;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
  };

  export class DedicatedSleepEndpointError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedSleepEndpointError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type DedicatedTerminateEndpointRequest = {
    /** The ID of the endpoint. */
    endpointId: string;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
  };

  export class DedicatedTerminateEndpointError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedTerminateEndpointError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type DedicatedUpdateEndpointRequest = {
    /** The ID of the endpoint. */
    endpointId: string;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: DedicatedEndpointUpdateBody;
  };

  export class DedicatedUpdateEndpointError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedUpdateEndpointError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DedicatedWakeEndpointRequest = {
    /** The ID of the endpoint. */
    endpointId: string;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
  };

  export class DedicatedWakeEndpointError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedWakeEndpointError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
