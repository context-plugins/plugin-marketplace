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
import {
  cloudDiagramCostSnapshotInternalSchema,
  type CloudDiagramCostSnapshot,
} from "../models/cloud-diagram-cost-snapshot.js";
import {
  cloudDiagramExportJsonResponseSchema,
  type CloudDiagramExportJsonResponse,
} from "../models/cloud-diagram-export-json-response.js";
import {
  cloudDiagramLayerSnapshotSchema,
  type CloudDiagramLayerSnapshot,
} from "../models/cloud-diagram-layer-snapshot.js";
import {
  cloudDiagramNodeActivitySchema,
  type CloudDiagramNodeActivity,
} from "../models/cloud-diagram-node-activity.js";
import {
  cloudDiagramSnapshotActivityGroupSchema,
  type CloudDiagramSnapshotActivityGroup,
} from "../models/cloud-diagram-snapshot-activity-group.js";
import { cloudDiagramStatsSchema, type CloudDiagramStats } from "../models/cloud-diagram-stats.js";
import {
  cloudDiagramStatussheetComponentsSchema,
  type CloudDiagramStatussheetComponents,
} from "../models/cloud-diagram-statussheet-components.js";
import {
  cloudDiagramStatussheetGetRequestInternalSchema,
  type CloudDiagramStatussheetGetRequest,
} from "../models/cloud-diagram-statussheet-get-request.js";
import {
  cloudDiagramsGetRequestSchema,
  type CloudDiagramsGetRequest,
} from "../models/cloud-diagrams-get-request.js";
import {
  cloudDiagramsGetResponseSchema,
  type CloudDiagramsGetResponse,
} from "../models/cloud-diagrams-get-response.js";
import {
  cloudDiagramsSearchRequestInternalSchema,
  type CloudDiagramsSearchRequest,
} from "../models/cloud-diagrams-search-request.js";
import {
  cloudDiagramsSearchResponseSchema,
  type CloudDiagramsSearchResponse,
} from "../models/cloud-diagrams-search-response.js";
import { Depth, depthSchema } from "../models/depth.js";
import {
  diagramRelationshipsResponseInternalSchema,
  type DiagramRelationshipsResponse,
} from "../models/diagram-relationships-response.js";
import { Direction, directionSchema } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  findCloudDiagramsRequestSchema,
  type FindCloudDiagramsRequest,
} from "../models/find-cloud-diagrams-request.js";
import {
  findCloudDiagramsResponseInternalSchema,
  type FindCloudDiagramsResponse,
} from "../models/find-cloud-diagrams-response.js";
import { interval1Schema, type Interval1 } from "../models/interval1.js";
import { Kind, kindSchema } from "../models/kind.js";
import { nodeType1Schema, type NodeType1 } from "../models/node-type1.js";
import { type10Schema, type Type10 } from "../models/type10.js";
import type { Servers } from "../servers.js";

/**
 * Cloud Diagrams visualize your cloud infrastructure and resource relationships.
 */
export class CloudDiagrams {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Export diagram as JSON
   *
   * @remarks
   * Exports the full content of a diagram layer as a structured JSON document, including all
   * components and export metadata.
   *
   * @returns OK - Diagram exported as JSON.
   *
   * @throws {@link CloudDiagrams.ExportCloudDiagramJsonError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  exportCloudDiagramJson(
    request: CloudDiagrams.ExportCloudDiagramJsonRequest,
    options?: RequestOptions,
  ): ApiPromise<CloudDiagramExportJsonResponse, CloudDiagrams.ExportCloudDiagramJsonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/clouddiagrams/v1/statussheet/{id}/export-json"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cloudDiagramExportJsonResponseSchema },
        errorFactory: CloudDiagrams.ExportCloudDiagramJsonError,
      },
      options,
    );
  }

  /**
   * Find diagrams
   *
   * @remarks
   * Returns diagram URLs matching the provided resource IDs.
   *
   * @returns OK - Diagram URLs matching the criteria returned.
   *
   * @throws {@link CloudDiagrams.FindCloudDiagramsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  findCloudDiagrams(
    request: CloudDiagrams.FindCloudDiagramsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<FindCloudDiagramsResponse[], CloudDiagrams.FindCloudDiagramsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/clouddiagrams/v1/scheme/find"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: findCloudDiagramsRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => findCloudDiagramsResponseInternalSchema)) },
        errorFactory: CloudDiagrams.FindCloudDiagramsError,
      },
      options,
    );
  }

  /**
   * Get diagram components
   *
   * @remarks
   * Returns diagram and layer data. When the request body is empty, returns all diagrams the caller
   * has access to. When the body is populated, returns full diagram data including layer components
   * projected to key display and cloud fields.
   *
   * @returns OK - Diagram and component data returned.
   *
   * @throws {@link CloudDiagrams.GetCloudDiagramComponentsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCloudDiagramComponents(
    request: CloudDiagrams.GetCloudDiagramComponentsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CloudDiagramsGetResponse, CloudDiagrams.GetCloudDiagramComponentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/clouddiagrams/v1/scheme/get"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "components", value: request.components, schema: s.optional(s.boolean()) },
          { name: "external", value: request.external, schema: s.optional(s.boolean()) },
          { name: "element", value: request.element, schema: s.optional(s.boolean()) },
          { name: "link", value: request.link, schema: s.optional(s.boolean()) },
          { name: "group", value: request.group, schema: s.optional(s.boolean()) },
          { name: "note", value: request.note, schema: s.optional(s.boolean()) },
          { name: "combiner", value: request.combiner, schema: s.optional(s.boolean()) },
          { name: "type", value: request.type, schema: s.optional(s.array(s.lazy(() => type10Schema))) },
          { name: "node_type", value: request.nodeType, schema: s.optional(s.lazy(() => nodeType1Schema)) },
          { name: "alarms_count", value: request.alarmsCount, schema: s.optional(s.boolean()) },
          { name: "issues_count", value: request.issuesCount, schema: s.optional(s.boolean()) },
          { name: "skip_empty", value: request.skipEmpty, schema: s.optional(s.boolean()) },
          { name: "exclude_default_vpc", value: request.excludeDefaultVpc, schema: s.optional(s.boolean()) },
          {
            name: "exclude_empty_subnets",
            value: request.excludeEmptySubnets,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => cloudDiagramsGetRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: cloudDiagramsGetResponseSchema },
        errorFactory: CloudDiagrams.GetCloudDiagramComponentsError,
      },
      options,
    );
  }

  /**
   * Get diagram cost snapshot
   *
   * @remarks
   * Returns a bounded cost snapshot for the specified diagram layer over a date window. The
   * response composes the diagram's total spend, period-over-period change, top resources by cost
   * (capped at 5), top services by cost (capped at 5), and a trend series (most recent 12 buckets
   * at the requested interval).
   *
   * @returns OK - Diagram cost snapshot returned.
   *
   * @throws {@link CloudDiagrams.GetCloudDiagramCostSnapshotError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCloudDiagramCostSnapshot(
    request: CloudDiagrams.GetCloudDiagramCostSnapshotRequest,
    options?: RequestOptions,
  ): ApiPromise<CloudDiagramCostSnapshot, CloudDiagrams.GetCloudDiagramCostSnapshotError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/clouddiagrams/v1/statussheet/{id}/costs"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "startDate", value: request.startDate, schema: s.dateOnly() },
          { name: "endDate", value: request.endDate, schema: s.dateOnly() },
          { name: "interval", value: request.interval, schema: s.optional(s.lazy(() => interval1Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cloudDiagramCostSnapshotInternalSchema },
        errorFactory: CloudDiagrams.GetCloudDiagramCostSnapshotError,
      },
      options,
    );
  }

  /**
   * Get a layer snapshot
   *
   * @remarks
   * Returns a single snapshot of the specified diagram layer identified by its ID.
   *
   * @returns OK - Snapshot returned.
   *
   * @throws {@link CloudDiagrams.GetCloudDiagramLayerSnapshotError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCloudDiagramLayerSnapshot(
    request: CloudDiagrams.GetCloudDiagramLayerSnapshotRequest,
    options?: RequestOptions,
  ): ApiPromise<CloudDiagramLayerSnapshot, CloudDiagrams.GetCloudDiagramLayerSnapshotError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/clouddiagrams/v1/statussheet/{id}/snapshot"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "snapshot_id", value: request.snapshotId, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cloudDiagramLayerSnapshotSchema },
        errorFactory: CloudDiagrams.GetCloudDiagramLayerSnapshotError,
      },
      options,
    );
  }

  /**
   * Get resource relationships
   *
   * @remarks
   * Walks the diagram graph from the anchor resource and returns related resources. Edge traversal
   * walks the diagram's link set (same-scheme guard, BFS, cycle-safe); group traversal walks the
   * group membership set. The result list is capped at 200 relations; `truncated` is `true` when
   * the cap is hit. Read-only: does not mutate diagram state.
   *
   * @returns OK - Related resources returned.
   *
   * @throws {@link CloudDiagrams.GetCloudDiagramResourceRelationshipsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCloudDiagramResourceRelationships(
    request: CloudDiagrams.GetCloudDiagramResourceRelationshipsRequest,
    options?: RequestOptions,
  ): ApiPromise<DiagramRelationshipsResponse, CloudDiagrams.GetCloudDiagramResourceRelationshipsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/clouddiagrams/v1/statussheet/{id}/resources/{rid}/relationships",
        ),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "rid", value: request.rid, schema: s.string() },
        ],
        query: [
          {
            name: "direction",
            value: request.direction,
            schema: s.defaulted(directionSchema, Direction.Both),
          },
          { name: "depth", value: request.depth, schema: s.defaulted(depthSchema, Depth.Direct) },
          { name: "kind", value: request.kind, schema: s.defaulted(kindSchema, Kind.Edges) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: diagramRelationshipsResponseInternalSchema },
        errorFactory: CloudDiagrams.GetCloudDiagramResourceRelationshipsError,
      },
      options,
    );
  }

  /**
   * Get diagrams with stats
   *
   * @remarks
   * Returns a list of all diagrams with activity stats for the given time period.
   *
   * @returns OK - List of diagrams with stats returned.
   *
   * @throws {@link CloudDiagrams.GetCloudDiagramsStatsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCloudDiagramsStats(
    request: CloudDiagrams.GetCloudDiagramsStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<CloudDiagramStats[], CloudDiagrams.GetCloudDiagramsStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/clouddiagrams/v1/scheme/stats"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "start", value: request.start, schema: s.dateTime() },
          { name: "end", value: request.end, schema: s.dateTime() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => cloudDiagramStatsSchema)) },
        errorFactory: CloudDiagrams.GetCloudDiagramsStatsError,
      },
      options,
    );
  }

  /**
   * Get layer components
   *
   * @remarks
   * Returns the specified components of a diagram layer. Provide at least one component type with
   * one or more IDs in the request body (for example, `node` or `element`).
   *
   * @returns OK - Layer components returned.
   *
   * @throws {@link CloudDiagrams.GetStatussheetComponentsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getStatussheetComponents(
    request: CloudDiagrams.GetStatussheetComponentsRequest,
    options?: RequestOptions,
  ): ApiPromise<CloudDiagramStatussheetComponents, CloudDiagrams.GetStatussheetComponentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/clouddiagrams/v1/statussheet/{id}/get"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "p", value: request.p, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: cloudDiagramStatussheetGetRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: cloudDiagramStatussheetComponentsSchema },
        errorFactory: CloudDiagrams.GetStatussheetComponentsError,
      },
      options,
    );
  }

  /**
   * List activity groups for a layer
   *
   * @remarks
   * Returns snapshot activity groups for the specified diagram layer, ordered by timestamp
   * descending. Each group contains a snapshot reference and the individual activity records that
   * belong to it.
   *
   * @returns OK - Activity groups returned.
   *
   * @throws {@link CloudDiagrams.ListCloudDiagramActivityGroupsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCloudDiagramActivityGroups(
    request: CloudDiagrams.ListCloudDiagramActivityGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<CloudDiagramSnapshotActivityGroup[], CloudDiagrams.ListCloudDiagramActivityGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/clouddiagrams/v1/activity"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "ss_id", value: request.ssId, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "tags", value: request.tags, schema: s.optional(s.array(s.string())) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => cloudDiagramSnapshotActivityGroupSchema)) },
        errorFactory: CloudDiagrams.ListCloudDiagramActivityGroupsError,
      },
      options,
    );
  }

  /**
   * List layer snapshots
   *
   * @remarks
   * Returns the list of saved snapshots for the specified diagram layer.
   *
   * @returns OK - Snapshots returned.
   *
   * @throws {@link CloudDiagrams.ListCloudDiagramLayerSnapshotsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCloudDiagramLayerSnapshots(
    request: CloudDiagrams.ListCloudDiagramLayerSnapshotsRequest,
    options?: RequestOptions,
  ): ApiPromise<CloudDiagramLayerSnapshot[], CloudDiagrams.ListCloudDiagramLayerSnapshotsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/clouddiagrams/v1/statussheet/{id}/snapshots"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => cloudDiagramLayerSnapshotSchema)) },
        errorFactory: CloudDiagrams.ListCloudDiagramLayerSnapshotsError,
      },
      options,
    );
  }

  /**
   * List node activities
   *
   * @remarks
   * Returns individual activity records for the specified component node, ordered by timestamp
   * descending.
   *
   * @returns OK - Node activity records returned.
   *
   * @throws {@link CloudDiagrams.ListCloudDiagramNodeActivitiesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCloudDiagramNodeActivities(
    request: CloudDiagrams.ListCloudDiagramNodeActivitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<CloudDiagramNodeActivity[], CloudDiagrams.ListCloudDiagramNodeActivitiesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/clouddiagrams/v1/activity/node-activities"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "ss_id", value: request.ssId, schema: s.string() },
          { name: "nodeId", value: request.nodeId, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => cloudDiagramNodeActivitySchema)) },
        errorFactory: CloudDiagrams.ListCloudDiagramNodeActivitiesError,
      },
      options,
    );
  }

  /**
   * Search diagrams and components
   *
   * @remarks
   * Full-text search across diagram layers, components by name, and components by property values.
   * Returns three result categories: diagram (matching layers), component (matching components by
   * name), and prop (matching components by property values).
   *
   * @returns OK - Search results returned.
   *
   * @throws {@link CloudDiagrams.SearchCloudDiagramsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchCloudDiagrams(
    request: CloudDiagrams.SearchCloudDiagramsRequest,
    options?: RequestOptions,
  ): ApiPromise<CloudDiagramsSearchResponse, CloudDiagrams.SearchCloudDiagramsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/clouddiagrams/v1/scheme/search"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: cloudDiagramsSearchRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: cloudDiagramsSearchResponseSchema },
        errorFactory: CloudDiagrams.SearchCloudDiagramsError,
      },
      options,
    );
  }
}

export namespace CloudDiagrams {
  export type ExportCloudDiagramJsonRequest = {
    /** Layer ID. */
    id: string;
  };

  export class ExportCloudDiagramJsonError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExportCloudDiagramJsonError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FindCloudDiagramsRequestParams = {
    body: FindCloudDiagramsRequest;
  };

  export class FindCloudDiagramsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FindCloudDiagramsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCloudDiagramComponentsRequest = {
    /** Include components in the layer response. */
    components?: boolean;
    /** Include external (cross-diagram) components. */
    external?: boolean;
    /** Include elements. */
    element?: boolean;
    /** Include links. */
    link?: boolean;
    /** Include groups. */
    group?: boolean;
    /** Include notes. */
    note?: boolean;
    /** Include combiners. */
    combiner?: boolean;
    /** Filter diagrams by type. */
    type?: Type10[];
    /** Filter components by node type. */
    nodeType?: NodeType1;
    /** Include alarm counts (default true). */
    alarmsCount?: boolean;
    /** Include issue counts. */
    issuesCount?: boolean;
    /** Omit diagrams that have no components. */
    skipEmpty?: boolean;
    /** Exclude the default VPC group (default true). */
    excludeDefaultVpc?: boolean;
    /** Exclude empty subnet groups (default true). */
    excludeEmptySubnets?: boolean;
    body?: CloudDiagramsGetRequest;
  };

  export class GetCloudDiagramComponentsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCloudDiagramComponentsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCloudDiagramCostSnapshotRequest = {
    /** Layer ID. */
    id: string;
    /** Inclusive start of the cost window (ISO date, e.g. `2026-04-01`). */
    startDate: string;
    /** Inclusive end of the cost window (ISO date, e.g. `2026-04-28`). */
    endDate: string;
    /** Bucket interval for the trend series. Defaults to `day` when omitted. */
    interval?: Interval1;
  };

  export class GetCloudDiagramCostSnapshotError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCloudDiagramCostSnapshotError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCloudDiagramLayerSnapshotRequest = {
    /** Layer ID. */
    id: string;
    /** Snapshot ID. */
    snapshotId: string;
  };

  export class GetCloudDiagramLayerSnapshotError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCloudDiagramLayerSnapshotError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCloudDiagramResourceRelationshipsRequest = {
    /** Diagram (layer) ID. */
    id: string;
    /** Anchor resource ID — must exist as a node, element, or group on the diagram. */
    rid: string;
    /**
     * Edge direction relative to the anchor. `both` returns upstream and downstream neighbours.
     * Defaults to `both`.
     *
     * @default Direction.Both
     */
    direction?: Direction;
    /**
     * `direct` returns one-hop neighbours; `transitive` runs a cycle-safe BFS to the connected
     * component (still capped at 200 relations). Defaults to `direct`.
     *
     * @default Depth.Direct
     */
    depth?: Depth;
    /**
     * `edges` walks the link graph; `group_members` walks group membership (children and parent
     * groups); `both` merges the two and dedupes by id, preserving the smallest observed hop count.
     * Defaults to `edges`.
     *
     * @default Kind.Edges
     */
    kind?: Kind;
  };

  export class GetCloudDiagramResourceRelationshipsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCloudDiagramResourceRelationshipsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCloudDiagramsStatsRequest = {
    /** Start of the period. */
    start: Date;
    /** End of the period. */
    end: Date;
  };

  export class GetCloudDiagramsStatsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCloudDiagramsStatsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetStatussheetComponentsRequest = {
    /** Layer ID. */
    id: string;
    /** Space-separated projection fields for component documents. */
    p?: string;
    body: CloudDiagramStatussheetGetRequest;
  };

  export class GetStatussheetComponentsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetStatussheetComponentsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListCloudDiagramActivityGroupsRequest = {
    /** Layer ID. */
    ssId: string;
    /** Maximum number of groups to return (default 10). */
    limit?: number;
    /** Number of groups to skip (default 0). */
    offset?: number;
    /** Filter by tags. */
    tags?: string[];
  };

  export const listCloudDiagramActivityGroupsRequestSchema: Schema<ListCloudDiagramActivityGroupsRequest> =
    s.lazySchema(() =>
      s.object<ListCloudDiagramActivityGroupsRequest>({
        ssId: s.string(),
        limit: s.optional(s.int().check(s.gte(1))),
        offset: s.optional(s.int().check(s.gte(0))),
        tags: s.optional(s.array(s.string())),
      }),
    );

  export class ListCloudDiagramActivityGroupsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCloudDiagramActivityGroupsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListCloudDiagramLayerSnapshotsRequest = {
    /** Layer ID. */
    id: string;
    /** Number of snapshots to skip (default 0). */
    offset?: number;
    /** Maximum number of snapshots to return (default 10). */
    limit?: number;
    /** Sort expression (e.g. "-createdAt" for descending). */
    sort?: string;
  };

  export const listCloudDiagramLayerSnapshotsRequestSchema: Schema<ListCloudDiagramLayerSnapshotsRequest> =
    s.lazySchema(() =>
      s.object<ListCloudDiagramLayerSnapshotsRequest>({
        id: s.string(),
        offset: s.optional(s.int().check(s.gte(0))),
        limit: s.optional(s.int().check(s.gte(1))),
        sort: s.optional(s.string()),
      }),
    );

  export class ListCloudDiagramLayerSnapshotsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCloudDiagramLayerSnapshotsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListCloudDiagramNodeActivitiesRequest = {
    /** Layer ID. */
    ssId: string;
    /** Node component ID. */
    nodeId: string;
    /** Maximum number of records to return (default 50). */
    limit?: number;
    /** Number of records to skip (default 0). */
    offset?: number;
  };

  export const listCloudDiagramNodeActivitiesRequestSchema: Schema<ListCloudDiagramNodeActivitiesRequest> =
    s.lazySchema(() =>
      s.object<ListCloudDiagramNodeActivitiesRequest>({
        ssId: s.string(),
        nodeId: s.string(),
        limit: s.optional(s.int().check(s.gte(1))),
        offset: s.optional(s.int().check(s.gte(0))),
      }),
    );

  export class ListCloudDiagramNodeActivitiesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCloudDiagramNodeActivitiesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SearchCloudDiagramsRequest = {
    body: CloudDiagramsSearchRequest;
  };

  export class SearchCloudDiagramsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchCloudDiagramsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
