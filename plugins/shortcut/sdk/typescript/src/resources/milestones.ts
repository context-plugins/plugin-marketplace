import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { createMilestoneInternalSchema, type CreateMilestone } from "../models/create-milestone.js";
import { epicSlimInternalSchema, type EpicSlim } from "../models/epic-slim.js";
import { milestoneInternalSchema, type Milestone } from "../models/milestone.js";
import {
  unusableEntitlementErrorInternalSchema,
  type UnusableEntitlementError,
} from "../models/unusable-entitlement-error.js";
import { updateMilestoneInternalSchema, type UpdateMilestone } from "../models/update-milestone.js";
import type { Servers } from "../servers.js";

export class Milestones {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Milestone
   *
   * @remarks
   * (Deprecated: Use 'Create Objective') Create Milestone allows you to create a new Milestone in
   * Shortcut.
   *
   * @returns Resource
   *
   * @throws {@link Milestones.CreateMilestoneError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  createMilestone(
    request: Milestones.CreateMilestoneRequest,
    options?: RequestOptions,
  ): ApiPromise<Milestone, Milestones.CreateMilestoneError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/milestones"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createMilestoneInternalSchema },
      },
      {
        success: { kind: "json", schema: milestoneInternalSchema },
        errorFactory: Milestones.CreateMilestoneError,
      },
      options,
    );
  }

  /**
   * Delete Milestone
   *
   * @remarks
   * (Deprecated: Use 'Delete Objective') Delete Milestone can be used to delete any Milestone.
   *
   * @returns No Content
   *
   * @throws {@link Milestones.DeleteMilestoneError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  deleteMilestone(
    request: Milestones.DeleteMilestoneRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Milestones.DeleteMilestoneError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/milestones/{milestone-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "milestone-public-id", value: request.milestonePublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Milestones.DeleteMilestoneError,
      },
      options,
    );
  }

  /**
   * Get Milestone
   *
   * @remarks
   * (Deprecated: Use 'Get Objective') Get Milestone returns information about a chosen Milestone.
   *
   * @returns Resource
   *
   * @throws {@link Milestones.GetMilestoneError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getMilestone(
    request: Milestones.GetMilestoneRequest,
    options?: RequestOptions,
  ): ApiPromise<Milestone, Milestones.GetMilestoneError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/milestones/{milestone-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "milestone-public-id", value: request.milestonePublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: milestoneInternalSchema },
        errorFactory: Milestones.GetMilestoneError,
      },
      options,
    );
  }

  /**
   * List Milestone Epics
   *
   * @remarks
   * (Deprecated: Use 'List Objective Epics') List all of the Epics within the Milestone.
   *
   * @returns Resource
   *
   * @throws {@link Milestones.ListMilestoneEpicsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  listMilestoneEpics(
    request: Milestones.ListMilestoneEpicsRequest,
    options?: RequestOptions,
  ): ApiPromise<EpicSlim[], Milestones.ListMilestoneEpicsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/milestones/{milestone-public-id}/epics"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "milestone-public-id", value: request.milestonePublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => epicSlimInternalSchema)) },
        errorFactory: Milestones.ListMilestoneEpicsError,
      },
      options,
    );
  }

  /**
   * List Milestones
   *
   * @remarks
   * (Deprecated: Use 'List Objectives') List Milestones returns a list of all Milestones and their
   * attributes.
   *
   * @returns Resource
   *
   * @throws {@link Milestones.ListMilestonesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  listMilestones(options?: RequestOptions): ApiPromise<Milestone[], Milestones.ListMilestonesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/milestones"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => milestoneInternalSchema)) },
        errorFactory: Milestones.ListMilestonesError,
      },
      options,
    );
  }

  /**
   * Update Milestone
   *
   * @remarks
   * (Deprecated: Use 'Update Objective') Update Milestone can be used to update Milestone
   * properties.
   *
   * @returns Resource
   *
   * @throws {@link Milestones.UpdateMilestoneError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  updateMilestone(
    request: Milestones.UpdateMilestoneRequest,
    options?: RequestOptions,
  ): ApiPromise<Milestone, Milestones.UpdateMilestoneError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/milestones/{milestone-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "milestone-public-id", value: request.milestonePublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateMilestoneInternalSchema },
      },
      {
        success: { kind: "json", schema: milestoneInternalSchema },
        errorFactory: Milestones.UpdateMilestoneError,
      },
      options,
    );
  }
}

export namespace Milestones {
  export type CreateMilestoneRequest = {
    body: CreateMilestone;
  };

  export class CreateMilestoneError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"unusableEntitlementError", UnusableEntitlementError>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateMilestoneError> = [
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

  export type DeleteMilestoneRequest = {
    /** The ID of the Milestone. */
    milestonePublicId: number;
  };

  export class DeleteMilestoneError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteMilestoneError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type GetMilestoneRequest = {
    /** The ID of the Milestone. */
    milestonePublicId: number;
  };

  export class GetMilestoneError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMilestoneError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ListMilestoneEpicsRequest = {
    /** The ID of the Milestone. */
    milestonePublicId: number;
  };

  export class ListMilestoneEpicsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMilestoneEpicsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export class ListMilestonesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMilestonesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type UpdateMilestoneRequest = {
    /** The ID of the Milestone. */
    milestonePublicId: number;
    body: UpdateMilestone;
  };

  export class UpdateMilestoneError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateMilestoneError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
