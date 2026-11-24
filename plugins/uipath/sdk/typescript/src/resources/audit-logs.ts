import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  auditEventCollectionInternalSchema,
  type AuditEventCollection,
} from "../models/audit-event-collection.js";
import { auditSourcesSchema, type AuditSources } from "../models/audit-sources.js";
import {
  errorResponseUiPathPlatformManagementAuditLogsApiSchema,
  type ErrorResponseUiPathPlatformManagementAuditLogsApi,
} from "../models/error-response-ui-path-platform-management-audit-logs-api.js";
import type { Servers } from "../servers.js";

/**
 * Retrieve and download organization and tenant audit event logs
 */
export class AuditLogs {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * UiPath Get Organization Audit Event Sources
   *
   * @remarks
   * Retrieves metadata about available audit event sources at the organization level. Returns the
   * list of services that generate audit events along with available event types and categories for
   * use as filters in the query events endpoint. Requires the PM.Audit or PM.Audit.Read OAuth
   * scope.
   *
   * @returns Available organization audit event sources
   *
   * @throws {@link AuditLogs.GetOrganizationAuditSourcesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrganizationAuditSources(
    request: AuditLogs.GetOrganizationAuditSourcesRequest,
    options?: RequestOptions,
  ): ApiPromise<AuditSources, AuditLogs.GetOrganizationAuditSourcesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathPlatformManagementAuditLogsApi(
          "/{organizationName}/orgaudit_/api/query/sources",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "organizationName", value: request.organizationName, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: auditSourcesSchema },
        errorFactory: AuditLogs.GetOrganizationAuditSourcesError,
      },
      options,
    );
  }

  /**
   * UiPath Query Organization Audit Events
   *
   * @remarks
   * Retrieves audit events at the organization level filtered by time range, event source, event
   * type, user, and other criteria. Returns a paginated list of audit events with actor
   * information, event details, and status. Requires the PM.Audit or PM.Audit.Read OAuth scope.
   *
   * @returns Audit events matching the query criteria
   *
   * @throws {@link AuditLogs.QueryOrganizationAuditEventsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryOrganizationAuditEvents(
    request: AuditLogs.QueryOrganizationAuditEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<AuditEventCollection, AuditLogs.QueryOrganizationAuditEventsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathPlatformManagementAuditLogsApi(
          "/{organizationName}/orgaudit_/api/query/events",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "organizationName", value: request.organizationName, schema: s.string() }],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.dateTime()) },
          { name: "to", value: request.to, schema: s.optional(s.dateTime()) },
          { name: "source", value: request.source, schema: s.optional(s.array(s.string())) },
          { name: "maxCount", value: request.maxCount, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: auditEventCollectionInternalSchema },
        errorFactory: AuditLogs.QueryOrganizationAuditEventsError,
      },
      options,
    );
  }

  /**
   * UiPath Query Tenant Audit Events
   *
   * @remarks
   * Retrieves audit events scoped to a specific tenant, filtered by time range, event source, event
   * type, user, and other criteria. Tenant-level audit events cover actions within Orchestrator,
   * Document Understanding, and other tenant-scoped services. Requires the PM.Audit or
   * PM.Audit.Read OAuth scope.
   *
   * @returns Tenant-level audit events matching the query criteria
   *
   * @throws {@link AuditLogs.QueryTenantAuditEventsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryTenantAuditEvents(
    request: AuditLogs.QueryTenantAuditEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<AuditEventCollection, AuditLogs.QueryTenantAuditEventsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathPlatformManagementAuditLogsApi(
          "/{organizationName}/{tenantName}/tenantaudit_/api/query/events",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "organizationName", value: request.organizationName, schema: s.string() },
          { name: "tenantName", value: request.tenantName, schema: s.string() },
        ],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.dateTime()) },
          { name: "to", value: request.to, schema: s.optional(s.dateTime()) },
          { name: "source", value: request.source, schema: s.optional(s.array(s.string())) },
          { name: "maxCount", value: request.maxCount, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: auditEventCollectionInternalSchema },
        errorFactory: AuditLogs.QueryTenantAuditEventsError,
      },
      options,
    );
  }
}

export namespace AuditLogs {
  export type GetOrganizationAuditSourcesRequest = {
    /** The name of the UiPath organization */
    organizationName: string;
  };

  export class GetOrganizationAuditSourcesError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOrganizationAuditSourcesError> = [
      {
        on: 401,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
    ];
  }

  export type QueryOrganizationAuditEventsRequest = {
    /** The name of the UiPath organization */
    organizationName: string;
    /** Start of the audit event time range (ISO 8601 datetime) */
    from?: Date;
    /** End of the audit event time range (ISO 8601 datetime) */
    to?: Date;
    /** Filter by event source service name */
    source?: string[];
    /** Maximum number of audit events to return */
    maxCount?: number;
  };

  export const queryOrganizationAuditEventsRequestSchema: Schema<QueryOrganizationAuditEventsRequest> =
    s.lazySchema(() =>
      s.object<QueryOrganizationAuditEventsRequest>({
        organizationName: s.string(),
        from: s.optional(s.dateTime()),
        to: s.optional(s.dateTime()),
        source: s.optional(s.array(s.string())),
        maxCount: s.optional(s.int().check(s.gte(1), s.lte(1000))),
      }),
    );

  export class QueryOrganizationAuditEventsError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<QueryOrganizationAuditEventsError> = [
      {
        on: 401,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
    ];
  }

  export type QueryTenantAuditEventsRequest = {
    /** The name of the UiPath organization */
    organizationName: string;
    /** The name of the UiPath tenant */
    tenantName: string;
    /** Start of the audit event time range (ISO 8601 datetime) */
    from?: Date;
    /** End of the audit event time range (ISO 8601 datetime) */
    to?: Date;
    /** Filter by event source service name */
    source?: string[];
    /** Maximum number of audit events to return */
    maxCount?: number;
  };

  export const queryTenantAuditEventsRequestSchema: Schema<QueryTenantAuditEventsRequest> = s.lazySchema(() =>
    s.object<QueryTenantAuditEventsRequest>({
      organizationName: s.string(),
      tenantName: s.string(),
      from: s.optional(s.dateTime()),
      to: s.optional(s.dateTime()),
      source: s.optional(s.array(s.string())),
      maxCount: s.optional(s.int().check(s.gte(1), s.lte(1000))),
    }),
  );

  export class QueryTenantAuditEventsError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<QueryTenantAuditEventsError> = [
      {
        on: 401,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
    ];
  }
}
