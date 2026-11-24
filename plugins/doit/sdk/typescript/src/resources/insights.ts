import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { category1Schema, type Category1 } from "../models/category1.js";
import {
  createResourceResultsBodySchema,
  type CreateResourceResultsBody,
} from "../models/create-resource-results-body.js";
import { createResultsBodyInternalSchema, type CreateResultsBody } from "../models/create-results-body.js";
import { displayStatus1Schema, type DisplayStatus1 } from "../models/display-status1.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  insightMetadataRequestInternalSchema,
  type InsightMetadataRequest,
} from "../models/insight-metadata-request.js";
import { insightResponseSchema, type InsightResponse } from "../models/insight-response.js";
import { priority1Schema, type Priority1 } from "../models/priority1.js";
import {
  resourceResultsResponseSchema,
  type ResourceResultsResponse,
} from "../models/resource-results-response.js";
import { resultsBodySchema, type ResultsBody } from "../models/results-body.js";
import { resultsErrorSchema, type ResultsError } from "../models/results-error.js";
import { sourceIdSchema, type SourceId } from "../models/source-id.js";
import { updateStatusRequestSchema, type UpdateStatusRequest } from "../models/update-status-request.js";
import type { Servers } from "../servers.js";

/**
 * Manage cloud insights representing recommendations and findings for cloud resources.
 */
export class Insights {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete an insight
   *
   * @remarks
   * Permanently deletes a single insight and all its associated resource results. Only insights
   * created via the public API can be deleted.
   *
   * @returns No content
   *
   * @throws {@link Insights.DeleteInsightResultError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteInsightResult(
    request: Insights.DeleteInsightResultRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Insights.DeleteInsightResultError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/insights/v1/results/source/{sourceID}/insight/{insightKey}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "sourceID", value: request.sourceId, schema: sourceIdSchema },
          { name: "insightKey", value: request.insightKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Insights.DeleteInsightResultError,
      },
      options,
    );
  }

  /**
   * Delete insights (batch)
   *
   * @remarks
   * Deletes all insights matching the specified key from the batch source. This removes the insight
   * and all its associated resource results. For single-insight deletion, use `DELETE
   * /source/{sourceID}/insight/{insightKey}` instead.
   *
   * @returns No content
   *
   * @throws {@link Insights.DeleteInsightResultsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteInsightResults(
    request: Insights.DeleteInsightResultsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Insights.DeleteInsightResultsError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/insights/v1/results"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [{ name: "insightKey", value: request.insightKey, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Insights.DeleteInsightResultsError,
      },
      options,
    );
  }

  /**
   * List resource results for an insight
   *
   * @remarks
   * Returns a paginated list of individual resource-level results for a specific insight. Each
   * resource result represents a single cloud resource (e.g. an EC2 instance, a GCS bucket)
   * affected by the insight, along with its risk scores or potential savings.
   *
   * @returns Successful operation
   *
   * @throws {@link Insights.GetInsightResourceResultsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInsightResourceResults(
    request: Insights.GetInsightResourceResultsRequest,
    options?: RequestOptions,
  ): ApiPromise<ResourceResultsResponse, Insights.GetInsightResourceResultsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/insights/v1/results/source/{sourceID}/insight/{insightKey}/resource-results",
        ),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "sourceID", value: request.sourceId, schema: s.string() },
          { name: "insightKey", value: request.insightKey, schema: s.string() },
        ],
        query: [
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 1000) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: resourceResultsResponseSchema },
        errorFactory: Insights.GetInsightResourceResultsError,
      },
      options,
    );
  }

  /**
   * Retrieve an insight
   *
   * @remarks
   * Returns the metadata and aggregate summary for a single insight identified by source and key.
   * Does not include individual resource-level results — use the resource-results endpoint for
   * those.
   *
   * @returns Successful operation
   *
   * @throws {@link Insights.GetInsightResultError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInsightResult(
    request: Insights.GetInsightResultRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightResponse, Insights.GetInsightResultError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/insights/v1/results/source/{sourceID}/insight/{insightKey}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "sourceID", value: request.sourceId, schema: s.string() },
          { name: "insightKey", value: request.insightKey, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightResponseSchema },
        errorFactory: Insights.GetInsightResultError,
      },
      options,
    );
  }

  /**
   * List insights
   *
   * @remarks
   * Returns a paginated list of insights with their aggregate summaries (savings, risk counts). Use
   * query parameters to filter by status, category, provider, or priority. Does not include
   * individual resource-level results — use the resource-results endpoint for those.
   *
   * @returns Successful operation
   *
   * @throws {@link Insights.GetInsightResultsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInsightResults(
    request: Insights.GetInsightResultsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ResultsBody, Insights.GetInsightResultsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/insights/v1/results"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "searchTerm", value: request.searchTerm, schema: s.optional(s.string()) },
          {
            name: "displayStatus",
            value: request.displayStatus,
            schema: s.optional(s.array(s.lazy(() => displayStatus1Schema))),
          },
          { name: "category", value: request.category, schema: s.optional(s.lazy(() => category1Schema)) },
          { name: "cloudProvider", value: request.cloudProvider, schema: s.optional(s.string()) },
          { name: "source", value: request.source, schema: s.optional(s.array(s.string())) },
          {
            name: "priority",
            value: request.priority,
            schema: s.optional(s.array(s.lazy(() => priority1Schema))),
          },
          { name: "tag", value: request.tag, schema: s.optional(s.array(s.string())) },
          { name: "easyWin", value: request.easyWin, schema: s.optional(s.boolean()) },
          { name: "cloudFlows", value: request.cloudFlows, schema: s.optional(s.boolean()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: resultsBodySchema },
        errorFactory: Insights.GetInsightResultsError,
      },
      options,
    );
  }

  /**
   * Replace resource results for an insight
   *
   * @remarks
   * Replaces all resource results for the specified insight. Any existing unresolved resource
   * results not present in the new set will be removed. The response includes server-computed
   * fields (severity, resolved, enhancement) for each resource result. To delete all resource
   * results, send an empty array.
   *
   * @returns Resource results created/replaced successfully
   *
   * @throws {@link Insights.PostInsightResourceResultsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postInsightResourceResults(
    request: Insights.PostInsightResourceResultsRequest,
    options?: RequestOptions,
  ): ApiPromise<ResourceResultsResponse, Insights.PostInsightResourceResultsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/insights/v1/results/source/{sourceID}/insight/{insightKey}/resource-results",
        ),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "sourceID", value: request.sourceId, schema: sourceIdSchema },
          { name: "insightKey", value: request.insightKey, schema: s.string() },
        ],
        query: [{ name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 1000) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createResourceResultsBodySchema },
      },
      {
        success: { kind: "json", schema: resourceResultsResponseSchema },
        errorFactory: Insights.PostInsightResourceResultsError,
      },
      options,
    );
  }

  /**
   * Create or update an insight
   *
   * @remarks
   * Creates or updates a single insight for the given source and key. If an insight with the same
   * key already exists for the source, it will be updated. Resource results are managed separately
   * via the resource-results endpoint.
   *
   * @returns Successful operation
   *
   * @throws {@link Insights.PostInsightResultError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postInsightResult(
    request: Insights.PostInsightResultRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightResponse, Insights.PostInsightResultError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/insights/v1/results/source/{sourceID}/insight/{insightKey}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "sourceID", value: request.sourceId, schema: sourceIdSchema },
          { name: "insightKey", value: request.insightKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: insightMetadataRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: insightResponseSchema },
        errorFactory: Insights.PostInsightResultError,
      },
      options,
    );
  }

  /**
   * Create insights (batch)
   *
   * @remarks
   * Creates or updates multiple insights in a single batch request. Each insight in the batch
   * includes its metadata and resource results inline. For granular control over insight metadata
   * and resource results independently, use the single-insight and resource-results endpoints
   * instead.
   *
   * @returns Successful operation
   *
   * @throws {@link Insights.PostInsightResultsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postInsightResults(
    request: Insights.PostInsightResultsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ResultsError[], Insights.PostInsightResultsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/insights/v1/results"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createResultsBodyInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => resultsErrorSchema)) },
        errorFactory: Insights.PostInsightResultsError,
      },
      options,
    );
  }

  /**
   * Update Insight Status
   *
   * @remarks
   * Updates the display status (e.g. actionable, acknowledged, dismissed) of a single insight. Only
   * insights created via the public API can have their status changed. Deprecated: use the status
   * field on the create/update insight endpoint instead.
   *
   * @returns Status updated successfully
   *
   * @throws {@link Insights.UpdateInsightStatusError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  updateInsightStatus(
    request: Insights.UpdateInsightStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Insights.UpdateInsightStatusError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default(
          "/insights/v1/results/source/{sourceID}/insight/{insightKey}/status",
        ),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "sourceID", value: request.sourceId, schema: sourceIdSchema },
          { name: "insightKey", value: request.insightKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateStatusRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Insights.UpdateInsightStatusError,
      },
      options,
    );
  }
}

export namespace Insights {
  export type DeleteInsightResultRequest = {
    /**
     * Only insights created via the public API can be managed. Currently only "public-api" is
     * supported.
     */
    sourceId: SourceId;
    /** The unique key identifying the insight to delete. */
    insightKey: string;
  };

  export class DeleteInsightResultError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteInsightResultError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteInsightResultsRequest = {
    /** The unique key identifying the insight to delete. */
    insightKey: string;
  };

  export class DeleteInsightResultsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteInsightResultsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetInsightResourceResultsRequest = {
    /** The identifier of the source that generated the insight. */
    sourceId: string;
    /** The unique key identifying the insight. */
    insightKey: string;
    /** Token from a previous response to fetch the next page. */
    pageToken?: string;
    /** Maximum number of results per page (default 1000, max 5000). @default 1000 */
    maxResults?: number;
  };

  export const getInsightResourceResultsRequestSchema: Schema<GetInsightResourceResultsRequest> =
    s.lazySchema(() =>
      s.object<GetInsightResourceResultsRequest>({
        sourceId: s.string(),
        insightKey: s.string(),
        pageToken: s.optional(s.string()),
        maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(5000)), 1000),
      }),
    );

  export class GetInsightResourceResultsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInsightResourceResultsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetInsightResultRequest = {
    /** The identifier of the source that generated the insight. */
    sourceId: string;
    /** The unique key identifying the insight. */
    insightKey: string;
  };

  export class GetInsightResultError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInsightResultError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetInsightResultsRequest = {
    /** Free-text search term to filter insights by title or description. */
    searchTerm?: string;
    /** Filter by one or more display statuses. */
    displayStatus?: DisplayStatus1[];
    /** Filter by insight category. */
    category?: Category1;
    /** Filter by cloud provider (e.g. "aws", "gcp", "azure"). */
    cloudProvider?: string;
    /** the source that generated insights */
    source?: string[];
    /** Filter by one or more priority levels. */
    priority?: Priority1[];
    /** Filter by one or more tags (e.g. security certification labels like "ISO"). */
    tag?: string[];
    /** When true, return only insights flagged as easy wins. */
    easyWin?: boolean;
    /** When true, return only insights that have associated CloudFlow automations. */
    cloudFlows?: boolean;
    /** Token from a previous response to fetch the next page. */
    pageToken?: string;
    /** Maximum number of results per page (default 50, max 500). @default 50 */
    maxResults?: number;
  };

  export const getInsightResultsRequestSchema: Schema<GetInsightResultsRequest> = s.lazySchema(() =>
    s.object<GetInsightResultsRequest>({
      searchTerm: s.optional(s.string()),
      displayStatus: s.optional(s.array(s.lazy(() => displayStatus1Schema))),
      category: s.optional(s.lazy(() => category1Schema)),
      cloudProvider: s.optional(s.string()),
      source: s.optional(s.array(s.string())),
      priority: s.optional(s.array(s.lazy(() => priority1Schema))),
      tag: s.optional(s.array(s.string())),
      easyWin: s.optional(s.boolean()),
      cloudFlows: s.optional(s.boolean()),
      pageToken: s.optional(s.string()),
      maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 50),
    }),
  );

  export class GetInsightResultsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInsightResultsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PostInsightResourceResultsRequest = {
    /**
     * Only insights created via the public API can be managed. Currently only "public-api" is
     * supported.
     */
    sourceId: SourceId;
    /** The unique key identifying the insight. */
    insightKey: string;
    /**
     * Maximum number of results per page in the response (default 1000, max 5000).
     *
     * @default 1000
     */
    maxResults?: number;
    body: CreateResourceResultsBody;
  };

  export const postInsightResourceResultsRequestSchema: Schema<PostInsightResourceResultsRequest> =
    s.lazySchema(() =>
      s.object<PostInsightResourceResultsRequest>({
        sourceId: sourceIdSchema,
        insightKey: s.string(),
        maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(5000)), 1000),
        body: createResourceResultsBodySchema,
      }),
    );

  export class PostInsightResourceResultsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostInsightResourceResultsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PostInsightResultRequest = {
    /**
     * Only insights created via the public API can be managed. Currently only "public-api" is
     * supported.
     */
    sourceId: SourceId;
    /** The unique key identifying the insight. */
    insightKey: string;
    body: InsightMetadataRequest;
  };

  export class PostInsightResultError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostInsightResultError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PostInsightResultsRequest = {
    body?: CreateResultsBody;
  };

  export class PostInsightResultsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostInsightResultsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateInsightStatusRequest = {
    /**
     * Only insights created via the public API can be managed. Currently only "public-api" is
     * supported.
     */
    sourceId: SourceId;
    /** The unique key identifying the insight to update. */
    insightKey: string;
    body: UpdateStatusRequest;
  };

  export class UpdateInsightStatusError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateInsightStatusError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
