import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createObjectiveHealthSchema,
  type CreateObjectiveHealth,
} from "../models/create-objective-health.js";
import { createObjectiveInternalSchema, type CreateObjective } from "../models/create-objective.js";
import { epicSlimInternalSchema, type EpicSlim } from "../models/epic-slim.js";
import { healthSchema, type Health } from "../models/health.js";
import { objectiveInternalSchema, type Objective } from "../models/objective.js";
import {
  unusableEntitlementErrorInternalSchema,
  type UnusableEntitlementError,
} from "../models/unusable-entitlement-error.js";
import { updateObjectiveInternalSchema, type UpdateObjective } from "../models/update-objective.js";
import type { Servers } from "../servers.js";

export class Objectives {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Objective
   *
   * @remarks
   * Create Objective allows you to create a new Objective in Shortcut.
   *
   * @returns Resource
   *
   * @throws {@link Objectives.CreateObjectiveError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createObjective(
    request: Objectives.CreateObjectiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Objective, Objectives.CreateObjectiveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/objectives"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createObjectiveInternalSchema },
      },
      {
        success: { kind: "json", schema: objectiveInternalSchema },
        errorFactory: Objectives.CreateObjectiveError,
      },
      options,
    );
  }

  /**
   * Create Objective Health
   *
   * @remarks
   * Create a new health status for the specified Objective.
   *
   * @returns Resource
   *
   * @throws {@link Objectives.CreateObjectiveHealthError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createObjectiveHealth(
    request: Objectives.CreateObjectiveHealthRequest,
    options?: RequestOptions,
  ): ApiPromise<Health, Objectives.CreateObjectiveHealthError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/objectives/{objective-public-id}/health"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "objective-public-id", value: request.objectivePublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createObjectiveHealthSchema },
      },
      {
        success: { kind: "json", schema: healthSchema },
        errorFactory: Objectives.CreateObjectiveHealthError,
      },
      options,
    );
  }

  /**
   * Delete Objective
   *
   * @remarks
   * Delete Objective can be used to delete any Objective.
   *
   * @returns No Content
   *
   * @throws {@link Objectives.DeleteObjectiveError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteObjective(
    request: Objectives.DeleteObjectiveRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Objectives.DeleteObjectiveError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/objectives/{objective-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "objective-public-id", value: request.objectivePublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Objectives.DeleteObjectiveError,
      },
      options,
    );
  }

  /**
   * Get Objective
   *
   * @remarks
   * Get Objective returns information about a chosen Objective.
   *
   * @returns Resource
   *
   * @throws {@link Objectives.GetObjectiveError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getObjective(
    request: Objectives.GetObjectiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Objective, Objectives.GetObjectiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/objectives/{objective-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "objective-public-id", value: request.objectivePublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: objectiveInternalSchema },
        errorFactory: Objectives.GetObjectiveError,
      },
      options,
    );
  }

  /**
   * Get Objective Health
   *
   * @remarks
   * Get the current health for the specified Objective.
   *
   * @returns Resource
   *
   * @throws {@link Objectives.GetObjectiveHealthError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getObjectiveHealth(
    request: Objectives.GetObjectiveHealthRequest,
    options?: RequestOptions,
  ): ApiPromise<Health, Objectives.GetObjectiveHealthError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/objectives/{objective-public-id}/health"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "objective-public-id", value: request.objectivePublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: healthSchema },
        errorFactory: Objectives.GetObjectiveHealthError,
      },
      options,
    );
  }

  /**
   * List Objective Epics
   *
   * @remarks
   * List all of the Epics within the Objective.
   *
   * @returns Resource
   *
   * @throws {@link Objectives.ListObjectiveEpicsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listObjectiveEpics(
    request: Objectives.ListObjectiveEpicsRequest,
    options?: RequestOptions,
  ): ApiPromise<EpicSlim[], Objectives.ListObjectiveEpicsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/objectives/{objective-public-id}/epics"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "objective-public-id", value: request.objectivePublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => epicSlimInternalSchema)) },
        errorFactory: Objectives.ListObjectiveEpicsError,
      },
      options,
    );
  }

  /**
   * List Objective Healths
   *
   * @remarks
   * List the history of health statuses for the specified Objective, most recent first.
   *
   * @returns Resource
   *
   * @throws {@link Objectives.ListObjectiveHealthsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listObjectiveHealths(
    request: Objectives.ListObjectiveHealthsRequest,
    options?: RequestOptions,
  ): ApiPromise<Health[], Objectives.ListObjectiveHealthsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/objectives/{objective-public-id}/health-history"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "objective-public-id", value: request.objectivePublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => healthSchema)) },
        errorFactory: Objectives.ListObjectiveHealthsError,
      },
      options,
    );
  }

  /**
   * List Objectives
   *
   * @remarks
   * List Objectives returns a list of all Objectives and their attributes.
   *
   * @returns Resource
   *
   * @throws {@link Objectives.ListObjectivesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listObjectives(options?: RequestOptions): ApiPromise<Objective[], Objectives.ListObjectivesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/objectives"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => objectiveInternalSchema)) },
        errorFactory: Objectives.ListObjectivesError,
      },
      options,
    );
  }

  /**
   * Update Objective
   *
   * @remarks
   * Update Objective can be used to update Objective properties.
   *
   * @returns Resource
   *
   * @throws {@link Objectives.UpdateObjectiveError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateObjective(
    request: Objectives.UpdateObjectiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Objective, Objectives.UpdateObjectiveError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/objectives/{objective-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "objective-public-id", value: request.objectivePublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateObjectiveInternalSchema },
      },
      {
        success: { kind: "json", schema: objectiveInternalSchema },
        errorFactory: Objectives.UpdateObjectiveError,
      },
      options,
    );
  }
}

export namespace Objectives {
  export type CreateObjectiveRequest = {
    body: CreateObjective;
  };

  export class CreateObjectiveError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"unusableEntitlementError", UnusableEntitlementError>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateObjectiveError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      {
        on: 403,
        kind: "unusableEntitlementError",
        decode: { kind: "json", schema: unusableEntitlementErrorInternalSchema },
      },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type CreateObjectiveHealthRequest = {
    /** The unique ID of the Objective. */
    objectivePublicId: number;
    body: CreateObjectiveHealth;
  };

  export class CreateObjectiveHealthError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateObjectiveHealthError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type DeleteObjectiveRequest = {
    /** The ID of the Objective. */
    objectivePublicId: number;
  };

  export class DeleteObjectiveError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteObjectiveError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type GetObjectiveRequest = {
    /** The ID of the Objective. */
    objectivePublicId: number;
  };

  export class GetObjectiveError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetObjectiveError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type GetObjectiveHealthRequest = {
    /** The unique ID of the Objective. */
    objectivePublicId: number;
  };

  export class GetObjectiveHealthError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetObjectiveHealthError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ListObjectiveEpicsRequest = {
    /** The ID of the Objective. */
    objectivePublicId: number;
  };

  export class ListObjectiveEpicsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListObjectiveEpicsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ListObjectiveHealthsRequest = {
    /** The unique ID of the Objective. */
    objectivePublicId: number;
  };

  export class ListObjectiveHealthsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListObjectiveHealthsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export class ListObjectivesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListObjectivesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type UpdateObjectiveRequest = {
    /** The ID of the Objective. */
    objectivePublicId: number;
    body: UpdateObjective;
  };

  export class UpdateObjectiveError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateObjectiveError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
