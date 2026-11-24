import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { auditLogEntitySchema, type AuditLogEntity } from "../models/audit-log-entity.js";
import { SortBy, sortBySchema } from "../models/sort-by.js";
import { SortOrder, sortOrderSchema } from "../models/sort-order.js";
import type { Servers } from "../servers.js";

export class AuditLog {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get Audit Log For Feature
   *
   * @throws {@link AuditLog.AuditLogControllerFindAllError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  auditLogControllerFindAll(
    request: AuditLog.AuditLogControllerFindAllRequest,
    options?: RequestOptions,
  ): ApiPromise<AuditLogEntity[], AuditLog.AuditLogControllerFindAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/features/{feature}/audit"),
        auth: noneAuth,
        pathParams: [
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.float64(), 1) },
          { name: "perPage", value: request.perPage, schema: s.defaulted(s.float64(), 100) },
          { name: "sortBy", value: request.sortBy, schema: s.defaulted(sortBySchema, SortBy.CreatedAt) },
          {
            name: "sortOrder",
            value: request.sortOrder,
            schema: s.defaulted(sortOrderSchema, SortOrder.Desc),
          },
          { name: "environment", value: request.environment, schema: s.optional(s.string()) },
          { name: "a0_user", value: request.a0User, schema: s.optional(s.string()) },
          { name: "startDate", value: request.startDate, schema: s.optional(s.dateTime()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.dateTime()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => auditLogEntitySchema)) },
        errorFactory: AuditLog.AuditLogControllerFindAllError,
      },
      options,
    );
  }
}

export namespace AuditLog {
  export type AuditLogControllerFindAllRequest = {
    /** A Feature key or ID */
    feature: string;
    /** A Project key or ID */
    project: string;
    /** @default 1 */
    page?: number;
    /** @default 100 */
    perPage?: number;
    /** @default SortBy.CreatedAt */
    sortBy?: SortBy;
    /** @default SortOrder.Desc */
    sortOrder?: SortOrder;
    environment?: string;
    a0User?: string;
    startDate?: Date;
    endDate?: Date;
  };

  export const auditLogControllerFindAllRequestSchema: Schema<AuditLogControllerFindAllRequest> =
    s.lazySchema(() =>
      s.object<AuditLogControllerFindAllRequest>({
        feature: s.string(),
        project: s.string(),
        page: s.defaulted(s.float64().check(s.gte(1)), 1),
        perPage: s.defaulted(s.float64().check(s.gte(1), s.lte(1000)), 100),
        sortBy: s.defaulted(sortBySchema, SortBy.CreatedAt),
        sortOrder: s.defaulted(sortOrderSchema, SortOrder.Desc),
        environment: s.optional(s.string()),
        a0User: s.optional(s.string()),
        startDate: s.optional(s.dateTime()),
        endDate: s.optional(s.dateTime()),
      }),
    );

  export class AuditLogControllerFindAllError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<AuditLogControllerFindAllError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
