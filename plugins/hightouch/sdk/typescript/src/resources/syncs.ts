import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  approveSyncDraftInputInternalSchema,
  type ApproveSyncDraftInput,
} from "../models/approve-sync-draft-input.js";
import { internalServerErrorSchema, type InternalServerError } from "../models/internal-server-error.js";
import {
  OrderByHightouchDestinationsApi,
  orderByHightouchDestinationsApiSchema,
} from "../models/order-by-hightouch-destinations-api.js";
import { OrderBy1, orderBy1Schema } from "../models/order-by1.js";
import {
  rejectSyncDraftInputInternalSchema,
  type RejectSyncDraftInput,
} from "../models/reject-sync-draft-input.js";
import { syncCreateSchema, type SyncCreate } from "../models/sync-create.js";
import { syncDraftDetailSchema, type SyncDraftDetail } from "../models/sync-draft-detail.js";
import { syncDraftListSchema, type SyncDraftList } from "../models/sync-draft-list.js";
import { syncDraftStatusSchema, type SyncDraftStatus } from "../models/sync-draft-status.js";
import { syncDraftSchema, type SyncDraft } from "../models/sync-draft.js";
import { syncUpdateSchema, type SyncUpdate } from "../models/sync-update.js";
import { syncSchema, type Sync } from "../models/sync.js";
import { syncsResponseSchema, type SyncsResponse } from "../models/syncs-response.js";
import { syncsRunsResponseSchema, type SyncsRunsResponse } from "../models/syncs-runs-response.js";
import {
  triggerRunCustomInputInternalSchema,
  type TriggerRunCustomInput,
} from "../models/trigger-run-custom-input.js";
import { triggerRunInputSchema, type TriggerRunInput } from "../models/trigger-run-input.js";
import { triggerRunOutputSchema, type TriggerRunOutput } from "../models/trigger-run-output.js";
import { syncsResponse1Schema, type SyncsResponse1 } from "../models/unions/syncs-response1.js";
import { syncsResponse11Schema, type SyncsResponse11 } from "../models/unions/syncs-response11.js";
import {
  syncsTriggerResponseSchema,
  type SyncsTriggerResponse,
} from "../models/unions/syncs-trigger-response.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../models/validate-error-json.js";
import type { Servers } from "../servers.js";

export class Syncs {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Approve Sync Draft
   *
   * @remarks
   * Approve a sync draft and apply its change. Fails with 409 and applies nothing when the draft or
   * the sync changed after the versions you send.
   *
   * @returns Ok
   *
   * @throws {@link Syncs.ApproveSyncDraftError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  approveSyncDraft(
    request: Syncs.ApproveSyncDraftRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncDraft, Syncs.ApproveSyncDraftError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/syncs/{syncId}/drafts/{draftId}/approve"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "syncId", value: request.syncId, schema: s.float64() },
          { name: "draftId", value: request.draftId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: approveSyncDraftInputInternalSchema },
      },
      {
        success: { kind: "json", schema: syncDraftSchema },
        errorFactory: Syncs.ApproveSyncDraftError,
      },
      options,
    );
  }

  /**
   * Create Sync
   *
   * @remarks
   * Create a new sync
   *
   * A sync either owns its configuration (`destinationId` and `configuration`) or is created from a
   * sync template (`syncTemplateId`). A sync created from a template uses the template's
   * destination and configuration, and may set the fields the template's `overrideConfig` marks as
   * overridable through `syncTemplateOverrides`. The effective configuration is validated for the
   * destination either way, and `configuration.` errors on a template sync refer to that merged
   * configuration.
   *
   * @returns Ok
   *
   * @throws {@link Syncs.CreateSyncError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSync(
    request: Syncs.CreateSyncRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncsResponse1, Syncs.CreateSyncError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/syncs"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: syncCreateSchema },
      },
      {
        success: { kind: "json", schema: syncsResponse1Schema },
        errorFactory: Syncs.CreateSyncError,
      },
      options,
    );
  }

  /**
   * Delete Sync
   *
   * @remarks
   * Delete a sync
   *
   * @returns Ok
   *
   * @throws {@link Syncs.DeleteSyncError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSync(
    request: Syncs.DeleteSyncRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncsResponse11, Syncs.DeleteSyncError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/syncs/{syncId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "syncId", value: request.syncId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncsResponse11Schema },
        errorFactory: Syncs.DeleteSyncError,
      },
      options,
    );
  }

  /**
   * Get Sync
   *
   * @remarks
   * Retrieve sync from sync ID
   *
   * @returns Ok
   *
   * @throws {@link Syncs.GetSyncError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSync(request: Syncs.GetSyncRequest, options?: RequestOptions): ApiPromise<Sync, Syncs.GetSyncError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/syncs/{syncId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "syncId", value: request.syncId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncSchema },
        errorFactory: Syncs.GetSyncError,
      },
      options,
    );
  }

  /**
   * Get Sync Draft
   *
   * @remarks
   * Retrieve a sync draft with the sync as it is now and as approval would leave it. Send its
   * `draftVersion` and `resourceVersion` to approve it.
   *
   * @returns Ok
   *
   * @throws {@link Syncs.GetSyncDraftError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSyncDraft(
    request: Syncs.GetSyncDraftRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncDraftDetail, Syncs.GetSyncDraftError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/syncs/{syncId}/drafts/{draftId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "syncId", value: request.syncId, schema: s.float64() },
          { name: "draftId", value: request.draftId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncDraftDetailSchema },
        errorFactory: Syncs.GetSyncDraftError,
      },
      options,
    );
  }

  /**
   * List Drafts for a Sync
   *
   * @remarks
   * List one sync's drafts, oldest change first.
   *
   * @returns Ok
   *
   * @throws {@link Syncs.ListDraftsForSyncError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDraftsForSync(
    request: Syncs.ListDraftsForSyncRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncDraftList, Syncs.ListDraftsForSyncError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/syncs/{syncId}/drafts"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "syncId", value: request.syncId, schema: s.float64() }],
        query: [
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => syncDraftStatusSchema)) },
          { name: "updatedSince", value: request.updatedSince, schema: s.optional(s.dateTime()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.float64(), 100) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncDraftListSchema },
        errorFactory: Syncs.ListDraftsForSyncError,
      },
      options,
    );
  }

  /**
   * List Syncs
   *
   * @remarks
   * List all the syncs in the current workspace
   *
   * @returns Ok
   *
   * @throws {@link Syncs.ListSyncError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSync(
    request: Syncs.ListSyncRequest = {},
    options?: RequestOptions,
  ): ApiPromise<SyncsResponse, Syncs.ListSyncError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/syncs"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "slug", value: request.slug, schema: s.optional(s.string()) },
          { name: "modelId", value: request.modelId, schema: s.optional(s.float64()) },
          { name: "destinationId", value: request.destinationId, schema: s.optional(s.float64()) },
          { name: "after", value: request.after, schema: s.optional(s.dateTime()) },
          { name: "before", value: request.before, schema: s.optional(s.dateTime()) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.float64(), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.float64(), 100) },
          {
            name: "orderBy",
            value: request.orderBy,
            schema: s.defaulted(orderByHightouchDestinationsApiSchema, OrderByHightouchDestinationsApi.Id),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncsResponseSchema },
        errorFactory: Syncs.ListSyncError,
      },
      options,
    );
  }

  /**
   * List Sync Drafts
   *
   * @remarks
   * List sync drafts across every sync in the workspace, oldest change first. Poll with
   * `status=pending` and read every page each time: the list shows the current state, not a feed of
   * changes.
   *
   * @returns Ok
   *
   * @throws {@link Syncs.ListSyncDraftsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSyncDrafts(
    request: Syncs.ListSyncDraftsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<SyncDraftList, Syncs.ListSyncDraftsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/syncs/drafts"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => syncDraftStatusSchema)) },
          { name: "syncId", value: request.syncId, schema: s.optional(s.float64()) },
          { name: "updatedSince", value: request.updatedSince, schema: s.optional(s.dateTime()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.float64(), 100) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncDraftListSchema },
        errorFactory: Syncs.ListSyncDraftsError,
      },
      options,
    );
  }

  /**
   * List Sync Runs
   *
   * @remarks
   * List all sync runs under a sync
   *
   * @returns Ok
   *
   * @throws {@link Syncs.ListSyncRunsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSyncRuns(
    request: Syncs.ListSyncRunsRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncsRunsResponse, Syncs.ListSyncRunsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/syncs/{syncId}/runs"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "syncId", value: request.syncId, schema: s.float64() }],
        query: [
          { name: "runId", value: request.runId, schema: s.optional(s.float64()) },
          { name: "after", value: request.after, schema: s.optional(s.dateTime()) },
          { name: "before", value: request.before, schema: s.optional(s.dateTime()) },
          { name: "within", value: request.within, schema: s.optional(s.float64()) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.float64(), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.float64(), 100) },
          { name: "orderBy", value: request.orderBy, schema: s.defaulted(orderBy1Schema, OrderBy1.Id) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncsRunsResponseSchema },
        errorFactory: Syncs.ListSyncRunsError,
      },
      options,
    );
  }

  /**
   * Reject Sync Draft
   *
   * @remarks
   * Reject a sync draft. The draft closes without applying its change; to try again, the requester
   * edits the sync.
   *
   * @returns Ok
   *
   * @throws {@link Syncs.RejectSyncDraftError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  rejectSyncDraft(
    request: Syncs.RejectSyncDraftRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncDraft, Syncs.RejectSyncDraftError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/syncs/{syncId}/drafts/{draftId}/reject"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "syncId", value: request.syncId, schema: s.float64() },
          { name: "draftId", value: request.draftId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: rejectSyncDraftInputInternalSchema },
      },
      {
        success: { kind: "json", schema: syncDraftSchema },
        errorFactory: Syncs.RejectSyncDraftError,
      },
      options,
    );
  }

  /**
   * Trigger Sync
   *
   * @remarks
   * Trigger a new run for the given sync.
   *
   * If a run is already in progress, this queues a sync run that will get executed immediately
   * after the current run completes.
   *
   * @returns Ok
   *
   * @throws {@link Syncs.TriggerRunError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  triggerRun(
    request: Syncs.TriggerRunRequest,
    options?: RequestOptions,
  ): ApiPromise<TriggerRunOutput, Syncs.TriggerRunError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/syncs/{syncId}/trigger"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "syncId", value: request.syncId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => triggerRunInputSchema)) },
      },
      {
        success: { kind: "json", schema: triggerRunOutputSchema },
        errorFactory: Syncs.TriggerRunError,
      },
      options,
    );
  }

  /**
   * Trigger Sync From ID or Slug
   *
   * @remarks
   * Trigger a new run globally based on sync id or sync slug
   *
   * If a run is already in progress, this queues a sync run that will get executed immediately
   * after the current run completes.
   *
   * @returns Ok
   *
   * @throws {@link Syncs.TriggerRunCustomError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  triggerRunCustom(
    request: Syncs.TriggerRunCustomRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncsTriggerResponse, Syncs.TriggerRunCustomError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/syncs/trigger"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: triggerRunCustomInputInternalSchema },
      },
      {
        success: { kind: "json", schema: syncsTriggerResponseSchema },
        errorFactory: Syncs.TriggerRunCustomError,
      },
      options,
    );
  }

  /**
   * Update Sync
   *
   * @remarks
   * Update an existing sync
   *
   * Patch a sync based on its Hightouch ID. A sync bound to a sync template takes its configuration
   * from the template: change this sync's values with `syncTemplateOverrides`, bind it to another
   * template or detach it with `syncTemplateId`, but do not set `configuration` while it is bound.
   *
   * @returns Ok
   *
   * @throws {@link Syncs.UpdateSyncError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSync(
    request: Syncs.UpdateSyncRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncsResponse1, Syncs.UpdateSyncError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/syncs/{syncId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "syncId", value: request.syncId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: syncUpdateSchema },
      },
      {
        success: { kind: "json", schema: syncsResponse1Schema },
        errorFactory: Syncs.UpdateSyncError,
      },
      options,
    );
  }
}

export namespace Syncs {
  export type ApproveSyncDraftRequest = {
    /** The id of the sync */
    syncId: number;
    /** The id of the draft */
    draftId: string;
    body: ApproveSyncDraftInput;
  };

  export class ApproveSyncDraftError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"error413", undefined>
      | Declared<"validateErrorJson2", ValidateErrorJson>
      | Undeclared;

    static readonly errors: ErrorDecoders<ApproveSyncDraftError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 409, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson2", decode: { kind: "json", schema: validateErrorJsonSchema } },
    ];
  }

  export type CreateSyncRequest = {
    body: SyncCreate;
  };

  export class CreateSyncError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"validateErrorJson2", ValidateErrorJson>
      | Declared<"internalServerError", InternalServerError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSyncError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 422, kind: "validateErrorJson2", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 500, kind: "internalServerError", decode: { kind: "json", schema: internalServerErrorSchema } },
    ];
  }

  export type DeleteSyncRequest = {
    /** The sync's ID */
    syncId: number;
  };

  export class DeleteSyncError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"validateErrorJson2", ValidateErrorJson>
      | Declared<"internalServerError", InternalServerError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSyncError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 409, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 422, kind: "validateErrorJson2", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 500, kind: "internalServerError", decode: { kind: "json", schema: internalServerErrorSchema } },
    ];
  }

  export type GetSyncRequest = {
    /** The id of the sync */
    syncId: number;
  };

  export class GetSyncError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetSyncError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetSyncDraftRequest = {
    /** The id of the sync */
    syncId: number;
    /** The id of the draft */
    draftId: string;
  };

  export class GetSyncDraftError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSyncDraftError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListDraftsForSyncRequest = {
    /** The id of the sync */
    syncId: number;
    /** filter on the draft's status (default `pending`) */
    status?: SyncDraftStatus;
    /** only drafts changed at or after this ISO timestamp */
    updatedSince?: Date;
    /** the most drafts to return on a page, from 1 to 100 (default 100) @default 100 */
    limit?: number;
    /** the `nextCursor` from the previous page */
    cursor?: string;
  };

  export class ListDraftsForSyncError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListDraftsForSyncError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
    ];
  }

  export type ListSyncRequest = {
    /** filter based on slug */
    slug?: string;
    /** filter based on modelId */
    modelId?: number;
    /** filter based on destinationId */
    destinationId?: number;
    /** select syncs that were run after given ISO timestamp */
    after?: Date;
    /** select syncs that were run before given ISO timestamp */
    before?: Date;
    /** set the offset on results (for pagination) @default 0 */
    offset?: number;
    /** limit the number of objects returned (default is 100) @default 100 */
    limit?: number;
    /** specify the order @default OrderByHightouchDestinationsApi.Id */
    orderBy?: OrderByHightouchDestinationsApi;
  };

  export class ListSyncError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSyncError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
    ];
  }

  export type ListSyncDraftsRequest = {
    /** filter on the draft's status (default `pending`) */
    status?: SyncDraftStatus;
    /** only drafts for this sync */
    syncId?: number;
    /** only drafts changed at or after this ISO timestamp */
    updatedSince?: Date;
    /** the most drafts to return on a page, from 1 to 100 (default 100) @default 100 */
    limit?: number;
    /** the `nextCursor` from the previous page */
    cursor?: string;
  };

  export class ListSyncDraftsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSyncDraftsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
    ];
  }

  export type ListSyncRunsRequest = {
    syncId: number;
    /** query for specific run id */
    runId?: number;
    /** select sync runs that are started after given ISO timestamp */
    after?: Date;
    /** select sync runs that are started before certain ISO timestamp */
    before?: Date;
    /** select sync runs that are started within last given minutes */
    within?: number;
    /** set the offset on results (for pagination) @default 0 */
    offset?: number;
    /** limit the number of objects returned (default is 100) @default 100 */
    limit?: number;
    /** specify the order @default OrderBy1.Id */
    orderBy?: OrderBy1;
  };

  export class ListSyncRunsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSyncRunsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
    ];
  }

  export type RejectSyncDraftRequest = {
    /** The id of the sync */
    syncId: number;
    /** The id of the draft */
    draftId: string;
    body: RejectSyncDraftInput;
  };

  export class RejectSyncDraftError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"error413", undefined>
      | Declared<"validateErrorJson2", ValidateErrorJson>
      | Undeclared;

    static readonly errors: ErrorDecoders<RejectSyncDraftError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 409, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson2", decode: { kind: "json", schema: validateErrorJsonSchema } },
    ];
  }

  export type TriggerRunRequest = {
    /** The id of the sync to trigger a run */
    syncId: string;
    body?: TriggerRunInput;
  };

  export class TriggerRunError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Undeclared;

    static readonly errors: ErrorDecoders<TriggerRunError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
    ];
  }

  export type TriggerRunCustomRequest = {
    body: TriggerRunCustomInput;
  };

  export class TriggerRunCustomError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Undeclared;

    static readonly errors: ErrorDecoders<TriggerRunCustomError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
    ];
  }

  export type UpdateSyncRequest = {
    /** The sync's ID */
    syncId: number;
    body: SyncUpdate;
  };

  export class UpdateSyncError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"internalServerError", InternalServerError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSyncError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 500, kind: "internalServerError", decode: { kind: "json", schema: internalServerErrorSchema } },
    ];
  }
}
