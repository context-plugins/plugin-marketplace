import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { bigSegmentTargetSchema, type BigSegmentTarget } from "../models/big-segment-target.js";
import {
  contextInstanceSegmentMembershipsSchema,
  type ContextInstanceSegmentMemberships,
} from "../models/context-instance-segment-memberships.js";
import {
  expiringTargetGetResponseSchema,
  type ExpiringTargetGetResponse,
} from "../models/expiring-target-get-response.js";
import {
  expiringTargetPatchResponseSchema,
  type ExpiringTargetPatchResponse,
} from "../models/expiring-target-patch-response.js";
import {
  expiringUserTargetGetResponseSchema,
  type ExpiringUserTargetGetResponse,
} from "../models/expiring-user-target-get-response.js";
import {
  expiringUserTargetPatchResponseSchema,
  type ExpiringUserTargetPatchResponse,
} from "../models/expiring-user-target-patch-response.js";
import { exportSchema, type Export } from "../models/export.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import { importSchema, type Import } from "../models/import.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import {
  patchSegmentExpiringTargetInputRepSchema,
  type PatchSegmentExpiringTargetInputRep,
} from "../models/patch-segment-expiring-target-input-rep.js";
import { patchSegmentRequestSchema, type PatchSegmentRequest } from "../models/patch-segment-request.js";
import { patchWithCommentSchema, type PatchWithComment } from "../models/patch-with-comment.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import { segmentBodySchema, type SegmentBody } from "../models/segment-body.js";
import { segmentUserStateSchema, type SegmentUserState } from "../models/segment-user-state.js";
import {
  statusConflictErrorRepSchema,
  type StatusConflictErrorRep,
} from "../models/status-conflict-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import { userSegmentSchema, type UserSegment } from "../models/user-segment.js";
import { userSegmentsSchema, type UserSegments } from "../models/user-segments.js";
import type { Servers } from "../servers.js";

/**
 *
 * > ### Synced segments and larger list-based segments are an Enterprise feature > > This section
 * documents endpoints for rule-based, list-based, and synced segments. > > A "big segment" is a
 * segment that is either a synced segment, or a list-based segment with more than 15,000 entries
 * that includes only one targeted context kind. LaunchDarkly uses different implementations for
 * different types of segments so that all of your segments have good performance. > > In the
 * segments API, a big segment is indicated by the `unbounded` field being set to `true`. > > These
 * segments are available to customers on an Enterprise plan. To learn more, [read about our
 * pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact
 * Sales](https://launchdarkly.com/contact-sales/).
 *
 * Segments are groups of contexts that you can use to manage flag targeting behavior in bulk.
 * LaunchDarkly supports:
 *
 * * rule-based segments, which let you target groups of contexts individually or by attribute,
 * * list-based segments, which let you target individual contexts or uploaded lists of contexts,
 *   and
 * * synced segments, which let you target groups of contexts backed by an external data store.
 *
 * To learn more, read [Segments](https://launchdarkly.com/docs/home/flags/segments).
 *
 * The segments API allows you to list, create, modify, and delete segments programmatically.
 *
 * You can find other APIs for working with big segments under [Persistent store integrations
 * (beta)](https://launchdarkly.com/docs/api/persistent-store-integrations-beta).
 */
export class Segments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create big segment export
   *
   * @remarks
   * Starts a new export process for a big segment. This is an export for a synced segment or a
   * list-based segment that can include more than 15,000 entries.
   *
   * @returns Action succeeded
   *
   * @throws {@link Segments.CreateBigSegmentExportError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createBigSegmentExport(
    request: Segments.CreateBigSegmentExportRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Segments.CreateBigSegmentExportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/exports",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "segmentKey", value: request.segmentKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Segments.CreateBigSegmentExportError,
      },
      options,
    );
  }

  /**
   * Create big segment import
   *
   * @remarks
   * Start a new import process for a big segment. This is an import for a list-based segment that
   * can include more than 15,000 entries.
   *
   * @returns Import request submitted successfully
   *
   * @throws {@link Segments.CreateBigSegmentImportError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createBigSegmentImport(
    request: Segments.CreateBigSegmentImportRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Segments.CreateBigSegmentImportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/imports",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "segmentKey", value: request.segmentKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "file", value: request.file },
            { kind: "text", name: "mode", value: request.mode, schema: s.optional(s.string()) },
            {
              kind: "text",
              name: "waitOnApprovals",
              value: request.waitOnApprovals,
              schema: s.optional(s.boolean()),
            },
          ],
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Segments.CreateBigSegmentImportError,
      },
      options,
    );
  }

  /**
   * Delete segment
   *
   * @remarks
   * Delete a segment.
   *
   * @returns Action succeeded
   *
   * @throws {@link Segments.DeleteSegmentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteSegment(
    request: Segments.DeleteSegmentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Segments.DeleteSegmentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "segmentKey", value: request.segmentKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Segments.DeleteSegmentError,
      },
      options,
    );
  }

  /**
   * Get big segment export
   *
   * @remarks
   * Returns information about a big segment export process. This is an export for a synced segment
   * or a list-based segment that can include more than 15,000 entries.
   *
   * @returns Segment export response
   *
   * @throws {@link Segments.GetBigSegmentExportError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getBigSegmentExport(
    request: Segments.GetBigSegmentExportRequest,
    options?: RequestOptions,
  ): ApiPromise<Export, Segments.GetBigSegmentExportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/exports/{exportID}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "segmentKey", value: request.segmentKey, schema: s.string() },
          { name: "exportID", value: request.exportId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: exportSchema },
        errorFactory: Segments.GetBigSegmentExportError,
      },
      options,
    );
  }

  /**
   * Get big segment import
   *
   * @remarks
   * Returns information about a big segment import process. This is the import of a list-based
   * segment that can include more than 15,000 entries.
   *
   * @returns Segment import response
   *
   * @throws {@link Segments.GetBigSegmentImportError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getBigSegmentImport(
    request: Segments.GetBigSegmentImportRequest,
    options?: RequestOptions,
  ): ApiPromise<Import, Segments.GetBigSegmentImportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/imports/{importID}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "segmentKey", value: request.segmentKey, schema: s.string() },
          { name: "importID", value: request.importId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: importSchema },
        errorFactory: Segments.GetBigSegmentImportError,
      },
      options,
    );
  }

  /**
   * List segment memberships for context instance
   *
   * @remarks
   * For a given context instance with attributes, get membership details for all segments. In the
   * request body, pass in the context instance.
   *
   * @returns Context instance segment membership collection response
   *
   * @throws {@link Segments.GetContextInstanceSegmentsMembershipByEnvError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getContextInstanceSegmentsMembershipByEnv(
    request: Segments.GetContextInstanceSegmentsMembershipByEnvRequest,
    options?: RequestOptions,
  ): ApiPromise<ContextInstanceSegmentMemberships, Segments.GetContextInstanceSegmentsMembershipByEnvError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/environments/{environmentKey}/segments/evaluate",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.record(s.string(), s.record(s.string(), s.unknown())),
        },
      },
      {
        success: { kind: "json", schema: contextInstanceSegmentMembershipsSchema },
        errorFactory: Segments.GetContextInstanceSegmentsMembershipByEnvError,
      },
      options,
    );
  }

  /**
   * Get expiring targets for segment
   *
   * @remarks
   * Get a list of a segment's context targets that are scheduled for removal.
   *
   * @returns Expiring context target response
   *
   * @throws {@link Segments.GetExpiringTargetsForSegmentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getExpiringTargetsForSegment(
    request: Segments.GetExpiringTargetsForSegmentRequest,
    options?: RequestOptions,
  ): ApiPromise<ExpiringTargetGetResponse, Segments.GetExpiringTargetsForSegmentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/segments/{projectKey}/{segmentKey}/expiring-targets/{environmentKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "segmentKey", value: request.segmentKey, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: expiringTargetGetResponseSchema },
        errorFactory: Segments.GetExpiringTargetsForSegmentError,
      },
      options,
    );
  }

  /**
   * Get expiring user targets for segment
   *
   * @remarks
   * > ### Contexts are now available > > After you have upgraded your LaunchDarkly SDK to use
   * contexts instead of users, you should use [Get expiring targets for
   * segment](https://launchdarkly.com/docs/api/segments/get-expiring-targets-for-segment) instead
   * of this endpoint. To learn more, read
   * [Contexts](https://launchdarkly.com/docs/home/observability/contexts).
   *
   * Get a list of a segment's user targets that are scheduled for removal.
   *
   * @returns Expiring user target response
   *
   * @throws {@link Segments.GetExpiringUserTargetsForSegmentError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getExpiringUserTargetsForSegment(
    request: Segments.GetExpiringUserTargetsForSegmentRequest,
    options?: RequestOptions,
  ): ApiPromise<ExpiringUserTargetGetResponse, Segments.GetExpiringUserTargetsForSegmentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/segments/{projectKey}/{segmentKey}/expiring-user-targets/{environmentKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "segmentKey", value: request.segmentKey, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: expiringUserTargetGetResponseSchema },
        errorFactory: Segments.GetExpiringUserTargetsForSegmentError,
      },
      options,
    );
  }

  /**
   * Get segment
   *
   * @remarks
   * Get a single segment by key.<br/><br/>Segments can be rule-based, list-based, or synced. Big
   * segments include larger list-based segments and synced segments. Some fields in the response
   * only apply to big segments.
   *
   * @returns Segment response
   *
   * @throws {@link Segments.GetSegmentError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getSegment(
    request: Segments.GetSegmentRequest,
    options?: RequestOptions,
  ): ApiPromise<UserSegment, Segments.GetSegmentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "segmentKey", value: request.segmentKey, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userSegmentSchema },
        errorFactory: Segments.GetSegmentError,
      },
      options,
    );
  }

  /**
   * Get big segment membership for context
   *
   * @remarks
   * Get the membership status (included/excluded) for a given context in this big segment. Big
   * segments include larger list-based segments and synced segments. This operation does not
   * support standard segments.
   *
   * @returns Segment membership for context response
   *
   * @throws {@link Segments.GetSegmentMembershipForContextError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getSegmentMembershipForContext(
    request: Segments.GetSegmentMembershipForContextRequest,
    options?: RequestOptions,
  ): ApiPromise<BigSegmentTarget, Segments.GetSegmentMembershipForContextError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/contexts/{contextKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "segmentKey", value: request.segmentKey, schema: s.string() },
          { name: "contextKey", value: request.contextKey, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bigSegmentTargetSchema },
        errorFactory: Segments.GetSegmentMembershipForContextError,
      },
      options,
    );
  }

  /**
   * Get big segment membership for user
   *
   * @remarks
   * > ### Contexts are now available > > After you have upgraded your LaunchDarkly SDK to use
   * contexts instead of users, you should use [Get expiring targets for
   * segment](https://launchdarkly.com/docs/api/segments/get-expiring-targets-for-segment) instead
   * of this endpoint. To learn more, read
   * [Contexts](https://launchdarkly.com/docs/home/observability/contexts).
   *
   * Get the membership status (included/excluded) for a given user in this big segment. This
   * operation does not support standard segments.
   *
   * @returns Segment membership for user response
   *
   * @throws {@link Segments.GetSegmentMembershipForUserError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getSegmentMembershipForUser(
    request: Segments.GetSegmentMembershipForUserRequest,
    options?: RequestOptions,
  ): ApiPromise<BigSegmentTarget, Segments.GetSegmentMembershipForUserError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/users/{userKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "segmentKey", value: request.segmentKey, schema: s.string() },
          { name: "userKey", value: request.userKey, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bigSegmentTargetSchema },
        errorFactory: Segments.GetSegmentMembershipForUserError,
      },
      options,
    );
  }

  /**
   * List segments
   *
   * @remarks
   * Get a list of all segments in the given project.
   *
   * Segments can be rule-based, list-based, or synced. Big segments include larger list-based
   * segments and synced segments. Some fields in the response only apply to big segments.
   *
   * ### Filtering segments
   *
   * The `filter` parameter supports the following operators: `equals`, `anyOf`, and `exists`.
   *
   * You can also combine filters in the following ways:
   *
   * - Use a comma (`,`) as an AND operator
   * - Use a vertical bar (`|`) as an OR operator
   * - Use parentheses (`()`) to group filters
   *
   * #### Supported fields and operators
   *
   * You can only filter certain fields in segments when using the `filter` parameter. Additionally,
   * you can only filter some fields with certain operators.
   *
   * When you search for segments, the `filter` parameter supports the following fields and
   * operators:
   *
   * |<div style="width:120px">Field</div> |Description |Supported operators |
   * |---|---|---|
   * | `excludedKeys` | The segment keys of segments to exclude from the results. | `anyOf` |
   * | `external` | Whether the segment is a synced segment. | `exists` |
   * | `includedKeys` | The segment keys of segments to include in the results. | `anyOf` |
   * | `query` | A "fuzzy" search across segment key, name, and description. Supply a string or list of strings to the operator. | `equals` |
   * | `tags` | The segment tags. | `anyOf` |
   * | `unbounded` | Whether the segment is a standard segment (`false`) or a big segment (`true`). Standard segments include rule-based segments and smaller list-based segments. Big segments include larger list-based segments and synced segments. | `equals` |
   *
   * Here are a few examples:
   *
   * * The filter `?filter=tags anyOf ["enterprise", "beta"],query equals "toggle"` matches segments
   *   with "toggle" in their key, name, or description that also have "enterprise" or "beta" as a
   *   tag.
   * * The filter `?filter=excludedKeys anyOf ["segmentKey1", "segmentKey2"]` excludes the segments
   *   with those keys from the results.
   * * The filter `?filter=unbounded equals true` matches larger list-based segments and synced
   *   segments.
   *
   * The documented values for `filter` query parameters are prior to URL encoding. For example, the
   * `[` in `?filter=tags anyOf ["enterprise", "beta"]` must be encoded to `%5B`.
   *
   * @returns Segment collection response
   *
   * @throws {@link Segments.GetSegmentsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getSegments(
    request: Segments.GetSegmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<UserSegments, Segments.GetSegmentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/segments/{projectKey}/{environmentKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userSegmentsSchema },
        errorFactory: Segments.GetSegmentsError,
      },
      options,
    );
  }

  /**
   * Update expiring targets for segment
   *
   * @remarks
   *
   * Update expiring context targets for a segment. Updating a context target expiration uses the
   * semantic patch format.
   *
   * To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to
   * your `Content-Type` header. To learn more, read [Updates using semantic
   * patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * If the request is well-formed but any of its instructions failed to process, this operation
   * returns status code `200`. In this case, the response `errors` array will be non-empty.
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating expiring context
   * targets.
   *
   * <details> <summary>Click to expand instructions for <strong>updating expiring context
   * targets</strong></summary>
   *
   * #### addExpiringTarget
   *
   * Schedules a date and time when LaunchDarkly will remove a context from segment targeting. The
   * segment must already have the context as an individual target.
   *
   * ##### Parameters
   *
   * - `targetType`: The type of individual target for this context. Must be either `included` or
   *   `excluded`.
   * - `contextKey`: The context key.
   * - `contextKind`: The kind of context being targeted.
   * - `value`: The date when the context should expire from the segment targeting, in Unix
   *   milliseconds.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "addExpiringTarget",
   *     "targetType": "included",
   *     "contextKey": "user-key-123abc",
   *     "contextKind": "user",
   *     "value": 1754092860000
   *   }]
   * }
   * ```
   *
   * #### updateExpiringTarget
   *
   * Updates the date and time when LaunchDarkly will remove a context from segment targeting.
   *
   * ##### Parameters
   *
   * - `targetType`: The type of individual target for this context. Must be either `included` or
   *   `excluded`.
   * - `contextKey`: The context key.
   * - `contextKind`: The kind of context being targeted.
   * - `value`: The new date when the context should expire from the segment targeting, in Unix
   *   milliseconds.
   * - `version`: (Optional) The version of the expiring target to update. If included, update will
   *   fail if version doesn't match current version of the expiring target.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "updateExpiringTarget",
   *     "targetType": "included",
   *     "contextKey": "user-key-123abc",
   *     "contextKind": "user",
   *     "value": 1754179260000
   *   }]
   * }
   * ```
   *
   * #### removeExpiringTarget
   *
   * Removes the scheduled expiration for the context in the segment.
   *
   * ##### Parameters
   *
   * - `targetType`: The type of individual target for this context. Must be either `included` or
   *   `excluded`.
   * - `contextKey`: The context key.
   * - `contextKind`: The kind of context being targeted.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "removeExpiringTarget",
   *     "targetType": "included",
   *     "contextKey": "user-key-123abc",
   *     "contextKind": "user",
   *   }]
   * }
   * ```
   *
   * </details>
   *
   * @returns Expiring target response
   *
   * @throws {@link Segments.PatchExpiringTargetsForSegmentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchExpiringTargetsForSegment(
    request: Segments.PatchExpiringTargetsForSegmentRequest,
    options?: RequestOptions,
  ): ApiPromise<ExpiringTargetPatchResponse, Segments.PatchExpiringTargetsForSegmentError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/api/v2/segments/{projectKey}/{segmentKey}/expiring-targets/{environmentKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "segmentKey", value: request.segmentKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: patchSegmentExpiringTargetInputRepSchema },
      },
      {
        success: { kind: "json", schema: expiringTargetPatchResponseSchema },
        errorFactory: Segments.PatchExpiringTargetsForSegmentError,
      },
      options,
    );
  }

  /**
   * Update expiring user targets for segment
   *
   * @remarks
   *
   * > ### Contexts are now available > > After you have upgraded your LaunchDarkly SDK to use
   * contexts instead of users, you should use [Update expiring targets for
   * segment](https://launchdarkly.com/docs/api/segments/patch-expiring-targets-for-segment) instead
   * of this endpoint. To learn more, read
   * [Contexts](https://launchdarkly.com/docs/home/observability/contexts).
   *
   * Update expiring user targets for a segment. Updating a user target expiration uses the semantic
   * patch format.
   *
   * To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to
   * your `Content-Type` header. To learn more, read [Updates using semantic
   * patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * If the request is well-formed but any of its instructions failed to process, this operation
   * returns status code `200`. In this case, the response `errors` array will be non-empty.
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating expiring user
   * targets.
   *
   * <details> <summary>Click to expand instructions for <strong>updating expiring user
   * targets</strong></summary>
   *
   * #### addExpireUserTargetDate
   *
   * Schedules a date and time when LaunchDarkly will remove a user from segment targeting.
   *
   * ##### Parameters
   *
   * - `targetType`: A segment's target type, must be either `included` or `excluded`.
   * - `userKey`: The user key.
   * - `value`: The date when the user should expire from the segment targeting, in Unix
   *   milliseconds.
   *
   * #### updateExpireUserTargetDate
   *
   * Updates the date and time when LaunchDarkly will remove a user from segment targeting.
   *
   * ##### Parameters
   *
   * - `targetType`: A segment's target type, must be either `included` or `excluded`.
   * - `userKey`: The user key.
   * - `value`: The new date when the user should expire from the segment targeting, in Unix
   *   milliseconds.
   * - `version`: The segment version.
   *
   * #### removeExpireUserTargetDate
   *
   * Removes the scheduled expiration for the user in the segment.
   *
   * ##### Parameters
   *
   * - `targetType`: A segment's target type, must be either `included` or `excluded`.
   * - `userKey`: The user key.
   *
   * </details>
   *
   * @returns Expiring user target response
   *
   * @throws {@link Segments.PatchExpiringUserTargetsForSegmentError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchExpiringUserTargetsForSegment(
    request: Segments.PatchExpiringUserTargetsForSegmentRequest,
    options?: RequestOptions,
  ): ApiPromise<ExpiringUserTargetPatchResponse, Segments.PatchExpiringUserTargetsForSegmentError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/api/v2/segments/{projectKey}/{segmentKey}/expiring-user-targets/{environmentKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "segmentKey", value: request.segmentKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: patchSegmentRequestSchema },
      },
      {
        success: { kind: "json", schema: expiringUserTargetPatchResponseSchema },
        errorFactory: Segments.PatchExpiringUserTargetsForSegmentError,
      },
      options,
    );
  }

  /**
   * Patch segment
   *
   * @remarks
   * Update a segment. The request body must be a valid semantic patch, JSON patch, or JSON merge
   * patch. To learn more the different formats, read
   * [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * ### Using semantic patches on a segment
   *
   * To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to
   * your `Content-Type` header. To learn more, read [Updates using semantic
   * patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * The body of a semantic patch request for updating segments requires an `environmentKey` in
   * addition to `instructions` and an optional `comment`. The body of the request takes the
   * following properties:
   *
   * * `comment` (string): (Optional) A description of the update.
   * * `environmentKey` (string): (Required) The key of the LaunchDarkly environment.
   * * `instructions` (array): (Required) A list of actions the update should perform. Each action
   *   in the list must be an object with a `kind` property that indicates the instruction. If the
   *   action requires parameters, you must include those parameters as additional fields in the
   *   object.
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating segments.
   *
   * <details> <summary>Click to expand instructions for <strong>updating segment details and
   * settings</strong></summary>
   *
   * #### addTags
   *
   * Adds tags to the segment.
   *
   * ##### Parameters
   *
   * - `values`: A list of tags to add.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "addTags",
   *     "values": ["tag1", "tag2"]
   *   }]
   * }
   * ```
   *
   * #### removeTags
   *
   * Removes tags from the segment.
   *
   * ##### Parameters
   *
   * - `values`: A list of tags to remove.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "removeTags",
   *     "values": ["tag1", "tag2"]
   *   }]
   * }
   * ```
   *
   * #### updateName
   *
   * Updates the name of the segment.
   *
   * ##### Parameters
   *
   * - `value`: Name of the segment.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "updateName",
   *     "value": "Updated segment name"
   *   }]
   * }
   * ```
   *
   * </details>
   *
   * <details> <summary>Click to expand instructions for <strong>updating segment individual
   * targets</strong></summary>
   *
   * #### addExcludedTargets
   *
   * Adds context keys to the individual context targets excluded from the segment for the specified
   * `contextKind`. Returns an error if this causes the same context key to be both included and
   * excluded, or if the number of operations on targets exceeds the batch limit of 1,500.
   *
   * ##### Parameters
   *
   * - `contextKind`: The context kind the targets should be added to.
   * - `values`: List of keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "addExcludedTargets",
   *     "contextKind": "org",
   *     "values": [ "org-key-123abc", "org-key-456def" ]
   *   }]
   * }
   * ```
   *
   * #### addExcludedUsers
   *
   * Adds user keys to the individual user targets excluded from the segment. Returns an error if
   * this causes the same user key to be both included and excluded, or if the number of operations
   * on targets exceeds the batch limit of 1,500. If you are working with contexts, use
   * `addExcludedTargets` instead of this instruction.
   *
   * ##### Parameters
   *
   * - `values`: List of user keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "addExcludedUsers",
   *     "values": [ "user-key-123abc", "user-key-456def" ]
   *   }]
   * }
   * ```
   *
   * #### addIncludedTargets
   *
   * Adds context keys to the individual context targets included in the segment for the specified
   * `contextKind`. Returns an error if this causes the same context key to be both included and
   * excluded, or if the number of operations on targets exceeds the batch limit of 1,500.
   *
   * ##### Parameters
   *
   * - `contextKind`: The context kind the targets should be added to.
   * - `values`: List of keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "addIncludedTargets",
   *     "contextKind": "org",
   *     "values": [ "org-key-123abc", "org-key-456def" ]
   *   }]
   * }
   * ```
   *
   * #### addIncludedUsers
   *
   * Adds user keys to the individual user targets included in the segment. Returns an error if this
   * causes the same user key to be both included and excluded, or if the number of operations on
   * targets exceeds the batch limit of 1,500. If you are working with contexts, use
   * `addIncludedTargets` instead of this instruction.
   *
   * ##### Parameters
   *
   * - `values`: List of user keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "addIncludedUsers",
   *     "values": [ "user-key-123abc", "user-key-456def" ]
   *   }]
   * }
   * ```
   *
   * #### removeExcludedTargets
   *
   * Removes context keys from the individual context targets excluded from the segment for the
   * specified `contextKind`. Returns an error if the number of operations on targets exceeds the
   * batch limit of 1,500.
   *
   * ##### Parameters
   *
   * - `contextKind`: The context kind the targets should be removed from.
   * - `values`: List of keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "removeExcludedTargets",
   *     "contextKind": "org",
   *     "values": [ "org-key-123abc", "org-key-456def" ]
   *   }]
   * }
   * ```
   *
   * #### removeExcludedUsers
   *
   * Removes user keys from the individual user targets excluded from the segment. If you are
   * working with contexts, use `removeExcludedTargets` instead of this instruction. Returns an
   * error if the number of operations on targets exceeds the batch limit of 1,500.
   *
   * ##### Parameters
   *
   * - `values`: List of user keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "removeExcludedUsers",
   *     "values": [ "user-key-123abc", "user-key-456def" ]
   *   }]
   * }
   * ```
   *
   * #### removeIncludedTargets
   *
   * Removes context keys from the individual context targets included in the segment for the
   * specified `contextKind`. Returns an error if the number of operations on targets exceeds the
   * batch limit of 1,500.
   *
   * ##### Parameters
   *
   * - `contextKind`: The context kind the targets should be removed from.
   * - `values`: List of keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "removeIncludedTargets",
   *     "contextKind": "org",
   *     "values": [ "org-key-123abc", "org-key-456def" ]
   *   }]
   * }
   * ```
   *
   * #### removeIncludedUsers
   *
   * Removes user keys from the individual user targets included in the segment. If you are working
   * with contexts, use `removeIncludedTargets` instead of this instruction. Returns an error if the
   * number of operations on targets exceeds the batch limit of 1,500.
   *
   * ##### Parameters
   *
   * - `values`: List of user keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "removeIncludedUsers",
   *     "values": [ "user-key-123abc", "user-key-456def" ]
   *   }]
   * }
   * ```
   *
   * </details>
   *
   * <details> <summary>Click to expand instructions for <strong>updating segment targeting
   * rules</strong></summary>
   *
   * #### addClauses
   *
   * Adds the given clauses to the rule indicated by `ruleId`.
   *
   * ##### Parameters
   *
   * - `clauses`: Array of clause objects, with `contextKind` (string), `attribute` (string), `op`
   *   (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties.
   *   The `contextKind`, if not provided, defaults to `user`. The `contextKind`, `attribute`, and
   *   `values` are case sensitive. The `op` must be lower-case.
   * - `ruleId`: ID of a rule in the segment.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "addClauses",
   *     "clauses": [
   *       {
   *         "attribute": "email",
   *         "negate": false,
   *         "op": "contains",
   *         "values": ["value1"]
   *       }
   *     ],
   *     "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
   *   }]
   * }
   * ```
   *
   * #### addRule
   *
   * Adds a new targeting rule to the segment. The rule may contain `clauses`.
   *
   * ##### Parameters
   *
   * - `clauses`: Array of clause objects, with `contextKind` (string), `attribute` (string), `op`
   *   (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties.
   *   The `contextKind`, if not provided, defaults to `user`. The `contextKind`, `attribute`, and
   *   `values` are case sensitive. The `op` must be lower-case.
   * - `description`: A description of the rule.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "addRule",
   *     "clauses": [
   *       {
   *         "attribute": "email",
   *         "op": "contains",
   *         "negate": false,
   *         "values": ["@launchdarkly.com"]
   *       }
   *     ],
   *     "description": "Targeting rule for LaunchDarkly employees",
   *   }]
   * }
   * ```
   *
   * #### addValuesToClause
   *
   * Adds `values` to the values of the clause that `ruleId` and `clauseId` indicate. Does not
   * update the context kind, attribute, or operator.
   *
   * ##### Parameters
   *
   * - `ruleId`: ID of a rule in the segment.
   * - `clauseId`: ID of a clause in that rule.
   * - `values`: Array of strings, case sensitive.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "addValuesToClause",
   *     "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
   *     "clauseId": "10a58772-3121-400f-846b-b8a04e8944ed",
   *     "values": ["beta_testers"]
   *   }]
   * }
   * ```
   *
   * #### removeClauses
   *
   * Removes the clauses specified by `clauseIds` from the rule indicated by `ruleId`.
   *
   * ##### Parameters
   *
   * - `ruleId`: ID of a rule in the segment.
   * - `clauseIds`: Array of IDs of clauses in the rule.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "removeClauses",
   *     "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
   *     "clauseIds": ["10a58772-3121-400f-846b-b8a04e8944ed", "36a461dc-235e-4b08-97b9-73ce9365873e"]
   *   }]
   * }
   * ```
   *
   * #### removeRule
   *
   * Removes the targeting rule specified by `ruleId`. Does nothing if the rule does not exist.
   *
   * ##### Parameters
   *
   * - `ruleId`: ID of a rule in the segment.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "removeRule",
   *     "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29"
   *   }]
   * }
   * ```
   *
   * #### removeValuesFromClause
   *
   * Removes `values` from the values of the clause indicated by `ruleId` and `clauseId`. Does not
   * update the context kind, attribute, or operator.
   *
   * ##### Parameters
   *
   * - `ruleId`: ID of a rule in the segment.
   * - `clauseId`: ID of a clause in that rule.
   * - `values`: Array of strings, case sensitive.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "removeValuesFromClause",
   *     "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
   *     "clauseId": "10a58772-3121-400f-846b-b8a04e8944ed",
   *     "values": ["beta_testers"]
   *   }]
   * }
   * ```
   *
   * #### reorderRules
   *
   * Rearranges the rules to match the order given in `ruleIds`. Returns an error if `ruleIds` does
   * not match the current set of rules in the segment.
   *
   * ##### Parameters
   *
   * - `ruleIds`: Array of IDs of all targeting rules in the segment.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "reorderRules",
   *     "ruleIds": ["a902ef4a-2faf-4eaf-88e1-ecc356708a29", "63c238d1-835d-435e-8f21-c8d5e40b2a3d"]
   *   }]
   * }
   * ```
   *
   * #### updateClause
   *
   * Replaces the clause indicated by `ruleId` and `clauseId` with `clause`.
   *
   * ##### Parameters
   *
   * - `ruleId`: ID of a rule in the segment.
   * - `clauseId`: ID of a clause in that rule.
   * - `clause`: New `clause` object, with `contextKind` (string), `attribute` (string), `op`
   *   (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties.
   *   The `contextKind`, if not provided, defaults to `user`. The `contextKind`, `attribute`, and
   *   `values` are case sensitive. The `op` must be lower-case.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "updateClause",
   *     "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
   *     "clauseId": "10c7462a-2062-45ba-a8bb-dfb3de0f8af5",
   *     "clause": {
   *       "contextKind": "user",
   *       "attribute": "country",
   *       "op": "in",
   *       "negate": false,
   *       "values": ["Mexico", "Canada"]
   *     }
   *   }]
   * }
   * ```
   *
   * #### updateRuleDescription
   *
   * Updates the description of the segment targeting rule.
   *
   * ##### Parameters
   *
   * - `description`: The new human-readable description for this rule.
   * - `ruleId`: The ID of the rule. You can retrieve this by making a GET request for the segment.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "updateRuleDescription",
   *     "description": "New rule description",
   *     "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29"
   *   }]
   * }
   * ```
   *
   * #### updateRuleRolloutAndContextKind
   *
   * For a rule that includes a percentage of targets, updates the percentage and the context kind
   * of the targets to include.
   *
   * ##### Parameters
   *
   * - `ruleId`: The ID of a targeting rule in the segment that includes a percentage of targets.
   * - `weight`: The weight, in thousandths of a percent (0-100000).
   * - `contextKind`: The context kind.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "reorderRules",
   *     "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
   *     "weight": "20000",
   *     "contextKind": "device"
   *   }]
   * }
   * ```
   *
   * </details>
   *
   * <details> <summary>Click to expand instructions for <strong>working with Big
   * Segments</strong></summary>
   *
   * A "big segment" is a segment that is either a synced segment, or a list-based segment with more
   * than 15,000 entries that includes only one targeted context kind. LaunchDarkly uses different
   * implementations for different types of segments so that all of your segments have good
   * performance.
   *
   * The following semantic patch instructions apply only to these [larger list-based
   * segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments).
   *
   * #### addBigSegmentExcludedTargets
   *
   * For use with [larger list-based
   * segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments)
   * ONLY. Adds context keys to the context targets excluded from the segment. Returns an error if
   * this causes the same context key to be both included and excluded.
   *
   * ##### Parameters
   *
   * - `values`: List of context keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "addBigSegmentExcludedTargets",
   *     "values": [ "org-key-123abc", "org-key-456def" ]
   *   }]
   * }
   * ```
   *
   * #### addBigSegmentIncludedTargets
   *
   * For use with [larger list-based
   * segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments)
   * ONLY. Adds context keys to the context targets included in the segment. Returns an error if
   * this causes the same context key to be both included and excluded.
   *
   * ##### Parameters
   *
   * - `values`: List of context keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "addBigSegmentIncludedTargets",
   *     "values": [ "org-key-123abc", "org-key-456def" ]
   *   }]
   * }
   * ```
   *
   * #### processBigSegmentImport
   *
   * For use with [larger list-based
   * segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments)
   * ONLY. Processes a segment import.
   *
   * ##### Parameters
   *
   * - `importId`: The ID of the import. The import ID is returned in the `Location` header as part
   *   of the [Create big segment
   *   import](https://launchdarkly.com/docs/api/segments/create-big-segment-import) request.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "processBigSegmentImport",
   *     "importId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29"
   *   }]
   * }
   * ```
   *
   *
   * #### removeBigSegmentExcludedTargets
   *
   * For use with [larger list-based
   * segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments)
   * ONLY. Removes context keys from the context targets excluded from the segment.
   *
   * ##### Parameters
   *
   * - `values`: List of context keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "removeBigSegmentExcludedTargets",
   *     "values": [ "org-key-123abc", "org-key-456def" ]
   *   }]
   * }
   * ```
   *
   * #### removeBigSegmentIncludedTargets
   *
   * For use with [larger list-based
   * segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments)
   * ONLY. Removes context keys from the context targets included in the segment.
   *
   * ##### Parameters
   *
   * - `values`: List of context keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "removeBigSegmentIncludedTargets",
   *     "values": [ "org-key-123abc", "org-key-456def" ]
   *   }]
   * }
   * ```
   *
   * </details>
   *
   * ### Using JSON patches on a segment
   *
   * If you do not include the header described above, you can use a [JSON
   * patch](https://launchdarkly.com/docs/api#updates-using-json-patch) or [JSON merge
   * patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes.
   *
   * For example, to update the description for a segment with a JSON patch, use the following
   * request body:
   *
   * ```json
   * {
   *   "patch": [
   *     {
   *       "op": "replace",
   *       "path": "/description",
   *       "value": "new description"
   *     }
   *   ]
   * }
   * ```
   *
   * To update fields in the segment that are arrays, set the `path` to the name of the field and
   * then append `/<array index>`. Use `/0` to add the new entry to the beginning of the array. Use
   * `/-` to add the new entry to the end of the array.
   *
   * For example, to add a rule to a segment, use the following request body:
   *
   * ```json
   * {
   *   "patch":[
   *     {
   *       "op": "add",
   *       "path": "/rules/0",
   *       "value": {
   *         "clauses": [{ "contextKind": "user", "attribute": "email", "op": "endsWith", "values": [".edu"], "negate": false }]
   *       }
   *     }
   *   ]
   * }
   * ```
   *
   * To add or remove targets from segments, we recommend using semantic patch. Semantic patch for
   * segments includes specific instructions for adding and removing both included and excluded
   * targets.
   *
   * @returns Segment response
   *
   * @throws {@link Segments.PatchSegmentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchSegment(
    request: Segments.PatchSegmentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserSegment, Segments.PatchSegmentError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "segmentKey", value: request.segmentKey, schema: s.string() },
        ],
        query: [{ name: "dryRun", value: request.dryRun, schema: s.optional(s.boolean()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: patchWithCommentSchema },
      },
      {
        success: { kind: "json", schema: userSegmentSchema },
        errorFactory: Segments.PatchSegmentError,
      },
      options,
    );
  }

  /**
   * Create segment
   *
   * @remarks
   * Create a new segment.
   *
   * @returns Segment response
   *
   * @throws {@link Segments.PostSegmentError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postSegment(
    request: Segments.PostSegmentRequest,
    options?: RequestOptions,
  ): ApiPromise<UserSegment, Segments.PostSegmentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/segments/{projectKey}/{environmentKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: segmentBodySchema },
      },
      {
        success: { kind: "json", schema: userSegmentSchema },
        errorFactory: Segments.PostSegmentError,
      },
      options,
    );
  }

  /**
   * Update context targets on a big segment
   *
   * @remarks
   * Update context targets included or excluded in a big segment. Big segments include larger
   * list-based segments and synced segments. This operation does not support standard segments.
   *
   * @returns Action succeeded
   *
   * @throws {@link Segments.UpdateBigSegmentContextTargetsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateBigSegmentContextTargets(
    request: Segments.UpdateBigSegmentContextTargetsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Segments.UpdateBigSegmentContextTargetsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/contexts",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "segmentKey", value: request.segmentKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: segmentUserStateSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Segments.UpdateBigSegmentContextTargetsError,
      },
      options,
    );
  }

  /**
   * Update user context targets on a big segment
   *
   * @remarks
   * Update user context targets included or excluded in a big segment. Big segments include larger
   * list-based segments and synced segments. This operation does not support standard segments.
   *
   * @returns Action succeeded
   *
   * @throws {@link Segments.UpdateBigSegmentTargetsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateBigSegmentTargets(
    request: Segments.UpdateBigSegmentTargetsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Segments.UpdateBigSegmentTargetsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/users",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "segmentKey", value: request.segmentKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: segmentUserStateSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Segments.UpdateBigSegmentTargetsError,
      },
      options,
    );
  }
}

export namespace Segments {
  export type CreateBigSegmentExportRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The segment key */
    segmentKey: string;
  };

  export class CreateBigSegmentExportError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBigSegmentExportError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type CreateBigSegmentImportRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The segment key */
    segmentKey: string;
    /** CSV file containing keys */
    file?: FileInput;
    /** Import mode. Use either `merge` or `replace` */
    mode?: string;
    /** Whether to wait for approvals before processing the import */
    waitOnApprovals?: boolean;
  };

  export class CreateBigSegmentImportError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBigSegmentImportError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type DeleteSegmentRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The segment key */
    segmentKey: string;
  };

  export class DeleteSegmentError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSegmentError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetBigSegmentExportRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The segment key */
    segmentKey: string;
    /** The export ID */
    exportId: string;
  };

  export class GetBigSegmentExportError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBigSegmentExportError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetBigSegmentImportRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The segment key */
    segmentKey: string;
    /** The import ID */
    importId: string;
  };

  export class GetBigSegmentImportError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBigSegmentImportError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetContextInstanceSegmentsMembershipByEnvRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    body: Record<string, Record<string, unknown>>;
  };

  export class GetContextInstanceSegmentsMembershipByEnvError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetContextInstanceSegmentsMembershipByEnvError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
    ];
  }

  export type GetExpiringTargetsForSegmentRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The segment key */
    segmentKey: string;
  };

  export class GetExpiringTargetsForSegmentError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetExpiringTargetsForSegmentError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetExpiringUserTargetsForSegmentRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The segment key */
    segmentKey: string;
  };

  export class GetExpiringUserTargetsForSegmentError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetExpiringUserTargetsForSegmentError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetSegmentRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The segment key */
    segmentKey: string;
  };

  export class GetSegmentError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSegmentError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetSegmentMembershipForContextRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The segment key */
    segmentKey: string;
    /** The context key */
    contextKey: string;
  };

  export class GetSegmentMembershipForContextError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSegmentMembershipForContextError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetSegmentMembershipForUserRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The segment key */
    segmentKey: string;
    /** The user key */
    userKey: string;
  };

  export class GetSegmentMembershipForUserError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSegmentMembershipForUserError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetSegmentsRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The number of segments to return. Defaults to 20. */
    limit?: number;
    /**
     * Where to start in the list. Use this with pagination. For example, an offset of 10 skips the
     * first ten items and then returns the next items in the list, up to the query `limit`.
     */
    offset?: number;
    /**
     * Accepts sorting order and fields. Fields can be comma separated. Possible fields are
     * 'creationDate', 'name', 'lastModified'. Example: `sort=name` sort by names ascending or
     * `sort=-name,creationDate` sort by names descending and creationDate ascending.
     */
    sort?: string;
    /**
     * Accepts filter by `excludedKeys`, `external`, `includedKeys`, `query`, `tags`, `unbounded`,
     * `view`. To learn more about the filter syntax, read the 'Filtering segments' section above.
     */
    filter?: string;
  };

  export class GetSegmentsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSegmentsError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
    ];
  }

  export type PatchExpiringTargetsForSegmentRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The segment key */
    segmentKey: string;
    body: PatchSegmentExpiringTargetInputRep;
  };

  export class PatchExpiringTargetsForSegmentError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchExpiringTargetsForSegmentError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PatchExpiringUserTargetsForSegmentRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The segment key */
    segmentKey: string;
    body: PatchSegmentRequest;
  };

  export class PatchExpiringUserTargetsForSegmentError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchExpiringUserTargetsForSegmentError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PatchSegmentRequestParams = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The segment key */
    segmentKey: string;
    /**
     * If true, the patch will be validated but not persisted. Returns a preview of the segment
     * after the patch is applied.
     */
    dryRun?: boolean;
    body: PatchWithComment;
  };

  export class PatchSegmentError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchSegmentError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PostSegmentRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    body: SegmentBody;
  };

  export class PostSegmentError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostSegmentError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type UpdateBigSegmentContextTargetsRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The segment key */
    segmentKey: string;
    body: SegmentUserState;
  };

  export class UpdateBigSegmentContextTargetsError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateBigSegmentContextTargetsError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type UpdateBigSegmentTargetsRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The segment key */
    segmentKey: string;
    body: SegmentUserState;
  };

  export class UpdateBigSegmentTargetsError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateBigSegmentTargetsError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
