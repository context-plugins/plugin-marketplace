import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  featureChangeRequestSummaryInternalSchema,
  type FeatureChangeRequestSummary,
} from "../models/feature-change-request-summary.js";
import {
  notFoundErrorResponseSchema,
  type NotFoundErrorResponse,
} from "../models/not-found-error-response.js";
import { SortBy, sortBySchema } from "../models/sort-by.js";
import { SortOrder, sortOrderSchema } from "../models/sort-order.js";
import {
  status1DevCycleManagementProjectChangeRequestsApiSchema,
  type Status1DevCycleManagementProjectChangeRequestsApi,
} from "../models/status1-dev-cycle-management-project-change-requests-api.js";
import type { Servers } from "../servers.js";

export class ProjectChangeRequests {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get a list of Feature Change Requests for a Project
   *
   * @throws {@link
   * ProjectChangeRequests.ProjectChangeRequestsControllerGetFeatureChangeRequestsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  projectChangeRequestsControllerGetFeatureChangeRequests(
    request: ProjectChangeRequests.ProjectChangeRequestsControllerGetFeatureChangeRequestsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    FeatureChangeRequestSummary[],
    ProjectChangeRequests.ProjectChangeRequestsControllerGetFeatureChangeRequestsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/projects/{project}/change-requests"),
        auth: noneAuth,
        pathParams: [{ name: "project", value: request.project, schema: s.string() }],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.float64(), 1) },
          { name: "perPage", value: request.perPage, schema: s.defaulted(s.float64(), 100) },
          { name: "sortBy", value: request.sortBy, schema: s.defaulted(sortBySchema, SortBy.CreatedAt) },
          {
            name: "sortOrder",
            value: request.sortOrder,
            schema: s.defaulted(sortOrderSchema, SortOrder.Desc),
          },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "createdBy", value: request.createdBy, schema: s.optional(s.string()) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => status1DevCycleManagementProjectChangeRequestsApiSchema)),
          },
          { name: "reviewer", value: request.reviewer, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => featureChangeRequestSummaryInternalSchema)) },
        errorFactory: ProjectChangeRequests.ProjectChangeRequestsControllerGetFeatureChangeRequestsError,
      },
      options,
    );
  }
}

export namespace ProjectChangeRequests {
  export type ProjectChangeRequestsControllerGetFeatureChangeRequestsRequest = {
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
    search?: string;
    createdBy?: string;
    status?: Status1DevCycleManagementProjectChangeRequestsApi;
    reviewer?: string;
  };

  export const projectChangeRequestsControllerGetFeatureChangeRequestsRequestSchema: Schema<ProjectChangeRequestsControllerGetFeatureChangeRequestsRequest> =
    s.lazySchema(() =>
      s.object<ProjectChangeRequestsControllerGetFeatureChangeRequestsRequest>({
        project: s.string(),
        page: s.defaulted(s.float64().check(s.gte(1)), 1),
        perPage: s.defaulted(s.float64().check(s.gte(1), s.lte(1000)), 100),
        sortBy: s.defaulted(sortBySchema, SortBy.CreatedAt),
        sortOrder: s.defaulted(sortOrderSchema, SortOrder.Desc),
        search: s.optional(s.string().check(s.minLength(3))),
        createdBy: s.optional(s.string()),
        status: s.optional(s.lazy(() => status1DevCycleManagementProjectChangeRequestsApiSchema)),
        reviewer: s.optional(s.string()),
      }),
    );

  export class ProjectChangeRequestsControllerGetFeatureChangeRequestsError extends ApiError {
    declare readonly payload:
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"error405", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ProjectChangeRequestsControllerGetFeatureChangeRequestsError> = [
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
      { on: 405, kind: "error405", decode: { kind: "empty" } },
    ];
  }
}
