import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entityQueryRequestInternalSchema, type EntityQueryRequest } from "../models/entity-query-request.js";
import {
  entityRecordCollectionInternalSchema,
  type EntityRecordCollection,
} from "../models/entity-record-collection.js";
import { entityRecordSchema, type EntityRecord } from "../models/entity-record.js";
import {
  errorResponseUiPathPlatformManagementAuditLogsApiSchema,
  type ErrorResponseUiPathPlatformManagementAuditLogsApi,
} from "../models/error-response-ui-path-platform-management-audit-logs-api.js";
import type { Servers } from "../servers.js";

/**
 * Perform CRUD operations on custom data entity records
 */
export class Entities {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * UiPath Create an Entity Record
   *
   * @remarks
   * Creates a new record for the specified custom entity type. The request body must conform to the
   * entity's schema definition. System-generated fields such as Id, CreatedOn, and CreatedBy are
   * populated automatically and should not be included in the request body. Requires the
   * DataService.Data scope.
   *
   * @returns Entity record created successfully
   *
   * @throws {@link Entities.CreateEntityRecordError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createEntityRecord(
    request: Entities.CreateEntityRecordRequest,
    options?: RequestOptions,
  ): ApiPromise<EntityRecord, Entities.CreateEntityRecordError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultUiPathDataServiceEntitiesApi("/{entityName}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "entityName", value: request.entityName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: entityRecordSchema },
        errorFactory: Entities.CreateEntityRecordError,
      },
      options,
    );
  }

  /**
   * UiPath Delete an Entity Record
   *
   * @remarks
   * Permanently deletes an entity record by its unique identifier. This action cannot be undone.
   * Requires the DataService.Data scope.
   *
   * @returns Entity record deleted successfully
   *
   * @throws {@link Entities.DeleteEntityRecordError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteEntityRecord(
    request: Entities.DeleteEntityRecordRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Entities.DeleteEntityRecordError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultUiPathDataServiceEntitiesApi("/{entityName}/{recordId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "entityName", value: request.entityName, schema: s.string() },
          { name: "recordId", value: request.recordId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Entities.DeleteEntityRecordError,
      },
      options,
    );
  }

  /**
   * UiPath Get an Entity Record by ID
   *
   * @remarks
   * Retrieves a single entity record by its unique identifier. Returns all fields of the record
   * including system fields. Supports the $select parameter to limit the fields returned. Requires
   * the DataService.Data.Read or DataService.Data scope.
   *
   * @returns The requested entity record
   *
   * @throws {@link Entities.GetEntityRecordError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEntityRecord(
    request: Entities.GetEntityRecordRequest,
    options?: RequestOptions,
  ): ApiPromise<EntityRecord, Entities.GetEntityRecordError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathDataServiceEntitiesApi("/{entityName}/{recordId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "entityName", value: request.entityName, schema: s.string() },
          { name: "recordId", value: request.recordId, schema: s.string() },
        ],
        query: [
          { name: "$select", value: request.select, schema: s.optional(s.string()) },
          { name: "$expand", value: request.expand, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: entityRecordSchema },
        errorFactory: Entities.GetEntityRecordError,
      },
      options,
    );
  }

  /**
   * UiPath List Records for an Entity
   *
   * @remarks
   * Retrieves a list of records for the specified custom entity type. Supports filtering with query
   * expressions, ordering, pagination via skip and top, and field selection. The available entity
   * names and their fields depend on the schema configured within the tenant's Data Service
   * instance. Requires the DataService.Data.Read or DataService.Data scope.
   *
   * @returns A list of entity records matching the query criteria
   *
   * @throws {@link Entities.ListEntityRecordsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEntityRecords(
    request: Entities.ListEntityRecordsRequest,
    options?: RequestOptions,
  ): ApiPromise<EntityRecordCollection, Entities.ListEntityRecordsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathDataServiceEntitiesApi("/{entityName}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "entityName", value: request.entityName, schema: s.string() }],
        query: [
          { name: "$filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "$orderby", value: request.orderby, schema: s.optional(s.string()) },
          { name: "$top", value: request.top, schema: s.optional(s.int()) },
          { name: "$skip", value: request.skip, schema: s.optional(s.int()) },
          { name: "$select", value: request.select, schema: s.optional(s.string()) },
          { name: "$expand", value: request.expand, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: entityRecordCollectionInternalSchema },
        errorFactory: Entities.ListEntityRecordsError,
      },
      options,
    );
  }

  /**
   * UiPath Query Entity Records with Advanced Filtering
   *
   * @remarks
   * Performs an advanced query against the entity using a structured filter expression in the
   * request body. Supports complex conditions, nested field filtering, and joining conditions with
   * AND and OR operators. Returns a paginated list of matching records. Requires the
   * DataService.Data.Read or DataService.Data scope.
   *
   * @returns Records matching the query criteria
   *
   * @throws {@link Entities.QueryEntityRecordsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryEntityRecords(
    request: Entities.QueryEntityRecordsRequest,
    options?: RequestOptions,
  ): ApiPromise<EntityRecordCollection, Entities.QueryEntityRecordsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultUiPathDataServiceEntitiesApi("/{entityName}/query"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "entityName", value: request.entityName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: entityQueryRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: entityRecordCollectionInternalSchema },
        errorFactory: Entities.QueryEntityRecordsError,
      },
      options,
    );
  }

  /**
   * UiPath Update an Entity Record
   *
   * @remarks
   * Updates an existing entity record by its unique identifier. The request body should include
   * only the fields to update. System-managed fields such as Id, CreatedOn, and CreatedBy cannot be
   * modified. ModifiedOn and ModifiedBy are updated automatically. Requires the DataService.Data
   * scope.
   *
   * @returns Entity record updated successfully
   *
   * @throws {@link Entities.UpdateEntityRecordError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateEntityRecord(
    request: Entities.UpdateEntityRecordRequest,
    options?: RequestOptions,
  ): ApiPromise<EntityRecord, Entities.UpdateEntityRecordError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultUiPathDataServiceEntitiesApi("/{entityName}/{recordId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "entityName", value: request.entityName, schema: s.string() },
          { name: "recordId", value: request.recordId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: entityRecordSchema },
        errorFactory: Entities.UpdateEntityRecordError,
      },
      options,
    );
  }
}

export namespace Entities {
  export type CreateEntityRecordRequest = {
    /**
     * Name of the custom entity type as defined in the tenant's Data Service schema. Entity names
     * are case-sensitive.
     */
    entityName: string;
    body: Record<string, unknown>;
  };

  export class CreateEntityRecordError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi2",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi3",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateEntityRecordError> = [
      {
        on: 400,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
      {
        on: 401,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi2",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
      {
        on: 403,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi3",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
    ];
  }

  export type DeleteEntityRecordRequest = {
    /**
     * Name of the custom entity type as defined in the tenant's Data Service schema. Entity names
     * are case-sensitive.
     */
    entityName: string;
    /** Unique identifier of the entity record */
    recordId: string;
  };

  export class DeleteEntityRecordError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi2",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi3",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteEntityRecordError> = [
      {
        on: 401,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
      {
        on: 403,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi2",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
      {
        on: 404,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi3",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
    ];
  }

  export type GetEntityRecordRequest = {
    /**
     * Name of the custom entity type as defined in the tenant's Data Service schema. Entity names
     * are case-sensitive.
     */
    entityName: string;
    /** Unique identifier of the entity record */
    recordId: string;
    /** Comma-separated list of field names to include in the response */
    select?: string;
    /** Related entity references to expand inline in the response */
    expand?: string;
  };

  export class GetEntityRecordError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi2",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi3",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEntityRecordError> = [
      {
        on: 401,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
      {
        on: 403,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi2",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
      {
        on: 404,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi3",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
    ];
  }

  export type ListEntityRecordsRequest = {
    /**
     * Name of the custom entity type as defined in the tenant's Data Service schema. Entity names
     * are case-sensitive.
     */
    entityName: string;
    /** Filter expression to narrow results by field values */
    filter?: string;
    /** Field name and direction to sort results (e.g., CreatedOn desc) */
    orderby?: string;
    /** Maximum number of records to return */
    top?: number;
    /** Number of records to skip for pagination */
    skip?: number;
    /** Comma-separated list of field names to include in the response */
    select?: string;
    /** Related entity references to expand inline in the response */
    expand?: string;
  };

  export const listEntityRecordsRequestSchema: Schema<ListEntityRecordsRequest> = s.lazySchema(() =>
    s.object<ListEntityRecordsRequest>({
      entityName: s.string(),
      filter: s.optional(s.string()),
      orderby: s.optional(s.string()),
      top: s.optional(s.int().check(s.gte(1), s.lte(1000))),
      skip: s.optional(s.int().check(s.gte(0))),
      select: s.optional(s.string()),
      expand: s.optional(s.string()),
    }),
  );

  export class ListEntityRecordsError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi2",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi3",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi4",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEntityRecordsError> = [
      {
        on: 400,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
      {
        on: 401,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi2",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
      {
        on: 403,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi3",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
      {
        on: 404,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi4",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
    ];
  }

  export type QueryEntityRecordsRequest = {
    /**
     * Name of the custom entity type as defined in the tenant's Data Service schema. Entity names
     * are case-sensitive.
     */
    entityName: string;
    body: EntityQueryRequest;
  };

  export class QueryEntityRecordsError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi2",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<QueryEntityRecordsError> = [
      {
        on: 400,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
      {
        on: 401,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi2",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
    ];
  }

  export type UpdateEntityRecordRequest = {
    /**
     * Name of the custom entity type as defined in the tenant's Data Service schema. Entity names
     * are case-sensitive.
     */
    entityName: string;
    /** Unique identifier of the entity record */
    recordId: string;
    body: Record<string, unknown>;
  };

  export class UpdateEntityRecordError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi2",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi3",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi4",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateEntityRecordError> = [
      {
        on: 400,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
      {
        on: 401,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi2",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
      {
        on: 403,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi3",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
      {
        on: 404,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi4",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
    ];
  }
}
