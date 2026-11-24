import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { internalServerErrorSchema, type InternalServerError } from "../models/internal-server-error.js";
import {
  OrderByHightouchEventsApi,
  orderByHightouchEventsApiSchema,
} from "../models/order-by-hightouch-events-api.js";
import { syncTemplateCreateSchema, type SyncTemplateCreate } from "../models/sync-template-create.js";
import { syncTemplateUpdateSchema, type SyncTemplateUpdate } from "../models/sync-template-update.js";
import { syncTemplateSchema, type SyncTemplate } from "../models/sync-template.js";
import {
  syncTemplatesResponseSchema,
  type SyncTemplatesResponse,
} from "../models/sync-templates-response.js";
import {
  syncTemplatesResponse1Schema,
  type SyncTemplatesResponse1,
} from "../models/unions/sync-templates-response1.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../models/validate-error-json.js";
import type { Servers } from "../servers.js";

export class SyncTemplates {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Sync Template
   *
   * @remarks
   * Create a new sync template
   *
   * A sync template holds a destination configuration that syncs created from it share.
   * `overrideConfig` names the configuration fields those syncs may set for themselves; every other
   * field is locked to the template's value. Create a sync from the template with `POST /syncs` and
   * `syncTemplateId`.
   *
   * @returns Ok
   *
   * @throws {@link SyncTemplates.CreateSyncTemplateError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSyncTemplate(
    request: SyncTemplates.CreateSyncTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncTemplatesResponse1, SyncTemplates.CreateSyncTemplateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sync-templates"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: syncTemplateCreateSchema },
      },
      {
        success: { kind: "json", schema: syncTemplatesResponse1Schema },
        errorFactory: SyncTemplates.CreateSyncTemplateError,
      },
      options,
    );
  }

  /**
   * Get Sync Template
   *
   * @remarks
   * Retrieve a sync template given its ID
   *
   * @returns Ok
   *
   * @throws {@link SyncTemplates.GetSyncTemplateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSyncTemplate(
    request: SyncTemplates.GetSyncTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncTemplate, SyncTemplates.GetSyncTemplateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sync-templates/{syncTemplateId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "syncTemplateId", value: request.syncTemplateId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncTemplateSchema },
        errorFactory: SyncTemplates.GetSyncTemplateError,
      },
      options,
    );
  }

  /**
   * List Sync Templates
   *
   * @remarks
   * List all the sync templates in the current workspace
   *
   * @returns Ok
   *
   * @throws {@link SyncTemplates.ListSyncTemplatesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSyncTemplates(
    request: SyncTemplates.ListSyncTemplatesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<SyncTemplatesResponse, SyncTemplates.ListSyncTemplatesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sync-templates"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.float64(), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.float64(), 100) },
          {
            name: "orderBy",
            value: request.orderBy,
            schema: s.defaulted(orderByHightouchEventsApiSchema, OrderByHightouchEventsApi.Id),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncTemplatesResponseSchema },
        errorFactory: SyncTemplates.ListSyncTemplatesError,
      },
      options,
    );
  }

  /**
   * Update Sync Template
   *
   * @remarks
   * Update an existing sync template
   *
   * Patch a sync template based on its Hightouch ID. The `destinationId` of a sync template cannot
   * be changed after creation. Syncs created from the template pick up a new `configuration` on
   * their next run; a new `overrideConfig` replaces the previous one and applies to the next write
   * of each sync's `syncTemplateOverrides`.
   *
   * @returns Ok
   *
   * @throws {@link SyncTemplates.UpdateSyncTemplateError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSyncTemplate(
    request: SyncTemplates.UpdateSyncTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncTemplatesResponse1, SyncTemplates.UpdateSyncTemplateError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/sync-templates/{syncTemplateId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "syncTemplateId", value: request.syncTemplateId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: syncTemplateUpdateSchema },
      },
      {
        success: { kind: "json", schema: syncTemplatesResponse1Schema },
        errorFactory: SyncTemplates.UpdateSyncTemplateError,
      },
      options,
    );
  }
}

export namespace SyncTemplates {
  export type CreateSyncTemplateRequest = {
    body: SyncTemplateCreate;
  };

  export class CreateSyncTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"internalServerError", InternalServerError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSyncTemplateError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 500, kind: "internalServerError", decode: { kind: "json", schema: internalServerErrorSchema } },
    ];
  }

  export type GetSyncTemplateRequest = {
    /** The id of the sync template */
    syncTemplateId: number;
  };

  export class GetSyncTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSyncTemplateError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
    ];
  }

  export type ListSyncTemplatesRequest = {
    /** filter based on name */
    name?: string;
    /** set the offset on results (for pagination) @default 0 */
    offset?: number;
    /** limit the number of objects returned (default is 100) @default 100 */
    limit?: number;
    /** specify the order @default OrderByHightouchEventsApi.Id */
    orderBy?: OrderByHightouchEventsApi;
  };

  export class ListSyncTemplatesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListSyncTemplatesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type UpdateSyncTemplateRequest = {
    /** The sync template's ID */
    syncTemplateId: number;
    body: SyncTemplateUpdate;
  };

  export class UpdateSyncTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"internalServerError", InternalServerError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSyncTemplateError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 500, kind: "internalServerError", decode: { kind: "json", schema: internalServerErrorSchema } },
    ];
  }
}
