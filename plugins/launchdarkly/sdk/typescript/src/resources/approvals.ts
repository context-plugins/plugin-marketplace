import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  approvalRequestResponseSchema,
  type ApprovalRequestResponse,
} from "../models/approval-request-response.js";
import {
  createApprovalRequestRequestSchema,
  type CreateApprovalRequestRequest,
} from "../models/create-approval-request-request.js";
import {
  createCopyFlagConfigApprovalRequestRequestSchema,
  type CreateCopyFlagConfigApprovalRequestRequest,
} from "../models/create-copy-flag-config-approval-request-request.js";
import {
  createFlagConfigApprovalRequestRequestSchema,
  type CreateFlagConfigApprovalRequestRequest,
} from "../models/create-flag-config-approval-request-request.js";
import {
  expandableApprovalRequestResponseSchema,
  type ExpandableApprovalRequestResponse,
} from "../models/expandable-approval-request-response.js";
import {
  expandableApprovalRequestsResponseSchema,
  type ExpandableApprovalRequestsResponse,
} from "../models/expandable-approval-requests-response.js";
import {
  flagConfigApprovalRequestResponseSchema,
  type FlagConfigApprovalRequestResponse,
} from "../models/flag-config-approval-request-response.js";
import {
  flagConfigApprovalRequestsResponseSchema,
  type FlagConfigApprovalRequestsResponse,
} from "../models/flag-config-approval-requests-response.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import {
  methodNotAllowedErrorRepSchema,
  type MethodNotAllowedErrorRep,
} from "../models/method-not-allowed-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import {
  postApprovalRequestApplyRequestSchema,
  type PostApprovalRequestApplyRequest,
} from "../models/post-approval-request-apply-request.js";
import {
  postApprovalRequestReviewRequestSchema,
  type PostApprovalRequestReviewRequest,
} from "../models/post-approval-request-review-request.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import {
  statusConflictErrorRepSchema,
  type StatusConflictErrorRep,
} from "../models/status-conflict-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * An account member can request approval on changes to a flag or AI Config's targeting or
 * variations, or to a segment's targeting. Members may be required to request approval depending on
 * the settings in their LaunchDarkly project. Members can optionally request an approval even if it
 * is not required.
 *
 * An approval request prevents a change from being applied without approval from another member.
 * Select up to ten members as reviewers. Reviewers receive an email notification, but anyone with
 * sufficient permissions can review a pending approval request. A change needs at least one
 * approval before you can apply it. To learn more, read
 * [Approvals](https://launchdarkly.com/docs/home/releases/approvals).
 *
 * Changes that conflict will fail if approved and applied, and the flag or segment will not be
 * updated.
 *
 * Several of the endpoints in the approvals API require an approval request ID. The approval
 * request ID is returned as part of the [Create approval
 * request](https://launchdarkly.com/docs/api/approvals/post-approval-request) and [List approval
 * requests for a flag](https://launchdarkly.com/docs/api/approvals/get-approvals-for-flag)
 * responses. It is the `_id` field, or the `_id` field of each element in the `items` array. If you
 * created the approval request as part of a
 * [workflow](https://launchdarkly.com/docs/api/workflows), you can also use a workflow ID as the
 * approval request ID. The workflow ID is returned as part of the [Create
 * workflow](https://launchdarkly.com/docs/api/workflows/post-workflow) and [Get
 * workflows](https://launchdarkly.com/docs/api/workflows/get-workflows) responses. It is the `_id`
 * field, or the `_id` field of each element in the `items` array.
 */
export class Approvals {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete approval request
   *
   * @remarks
   * Delete an approval request.
   *
   * @returns Action succeeded
   *
   * @throws {@link Approvals.DeleteApprovalRequestError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteApprovalRequest(
    request: Approvals.DeleteApprovalRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Approvals.DeleteApprovalRequestError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/approval-requests/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Approvals.DeleteApprovalRequestError,
      },
      options,
    );
  }

  /**
   * Delete approval request for a flag
   *
   * @remarks
   * Delete an approval request for a feature flag.
   *
   * @returns Action succeeded
   *
   * @throws {@link Approvals.DeleteApprovalRequestForFlagError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteApprovalRequestForFlag(
    request: Approvals.DeleteApprovalRequestForFlagRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Approvals.DeleteApprovalRequestForFlagError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Approvals.DeleteApprovalRequestForFlagError,
      },
      options,
    );
  }

  /**
   * Get approval request for a flag
   *
   * @remarks
   * Get a single approval request for a feature flag.
   *
   * @returns Approval request response
   *
   * @throws {@link Approvals.GetApprovalForFlagError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApprovalForFlag(
    request: Approvals.GetApprovalForFlagRequest,
    options?: RequestOptions,
  ): ApiPromise<FlagConfigApprovalRequestResponse, Approvals.GetApprovalForFlagError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flagConfigApprovalRequestResponseSchema },
        errorFactory: Approvals.GetApprovalForFlagError,
      },
      options,
    );
  }

  /**
   * Get approval request
   *
   * @remarks
   * Get an approval request by approval request ID.
   *
   * ### Expanding approval response
   *
   * LaunchDarkly supports the `expand` query param to include additional fields in the response,
   * with the following fields:
   *
   * - `environments` includes the environments the approval request relates to
   * - `flag` includes the flag the approval request belongs to
   * - `project` includes the project the approval request belongs to
   * - `resource` includes details on the resource (flag or segment) the approval request relates to
   *
   * For example, `expand=project,flag` includes the `project` and `flag` fields in the response.
   *
   * @returns Approval request response
   *
   * @throws {@link Approvals.GetApprovalRequestError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApprovalRequest(
    request: Approvals.GetApprovalRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<ExpandableApprovalRequestResponse, Approvals.GetApprovalRequestError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/approval-requests/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "expand", value: request.expand, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: expandableApprovalRequestResponseSchema },
        errorFactory: Approvals.GetApprovalRequestError,
      },
      options,
    );
  }

  /**
   * List approval requests
   *
   * @remarks
   * Get all approval requests.
   *
   * ### Filtering approvals
   *
   * LaunchDarkly supports the `filter` query param for filtering, with the following fields:
   *
   * - `notifyMemberIds` filters for only approvals that are assigned to a member in the specified
   *   list. For example: `filter=notifyMemberIds anyOf ["memberId1", "memberId2"]`.
   * - `requestorId` filters for only approvals that correspond to the ID of the member who
   *   requested the approval. For example: `filter=requestorId equals 457034721476302714390214`.
   * - `resourceId` filters for only approvals that correspond to the the specified resource
   *   identifier. For example: `filter=resourceId equals
   *   proj/my-project:env/my-environment:flag/my-flag`.
   * - `resourceKind` filters for only approvals that correspond to the specified resource kind. For
   *   example: `filter=resourceKind equals flag`. Currently, `flag`, `segment`, and `aiConfig`
   *   resource kinds are supported.
   * - `reviewStatus` filters for only approvals which correspond to the review status in the
   *   specified list. The possible values are `approved`, `declined`, and `pending`. For example:
   *   `filter=reviewStatus anyOf ["pending", "approved"]`.
   * - `status` filters for only approvals which correspond to the status in the specified list. The
   *   possible values are `pending`, `scheduled`, `failed`, and `completed`. For example:
   *   `filter=status anyOf ["pending", "scheduled"]`.
   *
   * You can also apply multiple filters at once. For example, setting `filter=projectKey equals
   * my-project, reviewStatus anyOf ["pending","approved"]` matches approval requests which
   * correspond to the `my-project` project key, and a review status of either `pending` or
   * `approved`.
   *
   * ### Expanding approval response
   *
   * LaunchDarkly supports the `expand` query param to include additional fields in the response,
   * with the following fields:
   *
   * - `flag` includes the flag the approval request belongs to
   * - `project` includes the project the approval request belongs to
   * - `environments` includes the environments the approval request relates to
   *
   * For example, `expand=project,flag` includes the `project` and `flag` fields in the response.
   *
   * @returns Approval request collection response
   *
   * @throws {@link Approvals.GetApprovalRequestsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApprovalRequests(
    request: Approvals.GetApprovalRequestsRequest,
    options?: RequestOptions,
  ): ApiPromise<ExpandableApprovalRequestsResponse, Approvals.GetApprovalRequestsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/approval-requests"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "expand", value: request.expand, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: expandableApprovalRequestsResponseSchema },
        errorFactory: Approvals.GetApprovalRequestsError,
      },
      options,
    );
  }

  /**
   * List approval requests for a flag
   *
   * @remarks
   * Get all approval requests for a feature flag.
   *
   * @returns Approval request collection response
   *
   * @throws {@link Approvals.GetApprovalsForFlagError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApprovalsForFlag(
    request: Approvals.GetApprovalsForFlagRequest,
    options?: RequestOptions,
  ): ApiPromise<FlagConfigApprovalRequestsResponse, Approvals.GetApprovalsForFlagError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flagConfigApprovalRequestsResponseSchema },
        errorFactory: Approvals.GetApprovalsForFlagError,
      },
      options,
    );
  }

  /**
   * Create approval request
   *
   * @remarks
   * Create an approval request.
   *
   * This endpoint requires a list of `instructions`, in semantic patch format, that will be applied
   * when the approval request is approved and applied.
   *
   * ### Flags
   *
   * If you are creating an approval request for a flag, you can use the following `instructions`:
   *
   * - `addVariation`
   * - `removeVariation`
   * - `updateVariation`
   * - `updateDefaultVariation`
   *
   * For details on using these instructions, read [Update feature
   * flag](https://launchdarkly.com/docs/api/feature-flags/patch-feature-flag).
   *
   * To create an approval for a flag specific to an environment, use [Create approval request for a
   * flag](https://launchdarkly.com/docs/api/approvals/post-approval-request-for-flag).
   *
   * ### AI Configs
   *
   * If you are creating an approval request for an AI Config, you can use the semantic patch
   * instructions listed under [Update AI Config
   * targeting](https://launchdarkly.com/docs/api/ai-configs/patch-ai-config-targeting).
   *
   * ### Segments
   *
   * If you are creating an approval request for a segment, you can use the semantic patch
   * instructions listed under [Patch
   * segment](https://launchdarkly.com/docs/api/segments/patch-segment).
   *
   * @returns Approval request response
   *
   * @throws {@link Approvals.PostApprovalRequestError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postApprovalRequest(
    request: Approvals.PostApprovalRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<ApprovalRequestResponse, Approvals.PostApprovalRequestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/approval-requests"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createApprovalRequestRequestSchema },
      },
      {
        success: { kind: "json", schema: approvalRequestResponseSchema },
        errorFactory: Approvals.PostApprovalRequestError,
      },
      options,
    );
  }

  /**
   * Apply approval request
   *
   * @remarks
   * Apply an approval request that has been approved. This endpoint works with any approval
   * requests.
   *
   * @returns Approval request apply response
   *
   * @throws {@link Approvals.PostApprovalRequestApplyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postApprovalRequestApply(
    request: Approvals.PostApprovalRequestApplyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ApprovalRequestResponse, Approvals.PostApprovalRequestApplyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/approval-requests/{id}/apply"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: postApprovalRequestApplyRequestSchema },
      },
      {
        success: { kind: "json", schema: approvalRequestResponseSchema },
        errorFactory: Approvals.PostApprovalRequestApplyError,
      },
      options,
    );
  }

  /**
   * Apply approval request for a flag
   *
   * @remarks
   * Apply an approval request that has been approved. This endpoint requires a feature flag key,
   * and can only be used for applying approval requests on flags.
   *
   * @returns Approval request apply response
   *
   * @throws {@link Approvals.PostApprovalRequestApplyForFlagError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postApprovalRequestApplyForFlag(
    request: Approvals.PostApprovalRequestApplyForFlagRequest,
    options?: RequestOptions,
  ): ApiPromise<FlagConfigApprovalRequestResponse, Approvals.PostApprovalRequestApplyForFlagError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}/apply",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: postApprovalRequestApplyRequestSchema },
      },
      {
        success: { kind: "json", schema: flagConfigApprovalRequestResponseSchema },
        errorFactory: Approvals.PostApprovalRequestApplyForFlagError,
      },
      options,
    );
  }

  /**
   * Create approval request for a flag
   *
   * @remarks
   * Create an approval request for a feature flag.
   *
   * @returns Approval request response
   *
   * @throws {@link Approvals.PostApprovalRequestForFlagError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postApprovalRequestForFlag(
    request: Approvals.PostApprovalRequestForFlagRequest,
    options?: RequestOptions,
  ): ApiPromise<FlagConfigApprovalRequestResponse, Approvals.PostApprovalRequestForFlagError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createFlagConfigApprovalRequestRequestSchema },
      },
      {
        success: { kind: "json", schema: flagConfigApprovalRequestResponseSchema },
        errorFactory: Approvals.PostApprovalRequestForFlagError,
      },
      options,
    );
  }

  /**
   * Review approval request
   *
   * @remarks
   * Review an approval request by approving or denying changes.
   *
   * @returns Approval request review response
   *
   * @throws {@link Approvals.PostApprovalRequestReviewError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postApprovalRequestReview(
    request: Approvals.PostApprovalRequestReviewRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ApprovalRequestResponse, Approvals.PostApprovalRequestReviewError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/approval-requests/{id}/reviews"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: postApprovalRequestReviewRequestSchema },
      },
      {
        success: { kind: "json", schema: approvalRequestResponseSchema },
        errorFactory: Approvals.PostApprovalRequestReviewError,
      },
      options,
    );
  }

  /**
   * Review approval request for a flag
   *
   * @remarks
   * Review an approval request by approving or denying changes.
   *
   * @returns Approval request review response
   *
   * @throws {@link Approvals.PostApprovalRequestReviewForFlagError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postApprovalRequestReviewForFlag(
    request: Approvals.PostApprovalRequestReviewForFlagRequest,
    options?: RequestOptions,
  ): ApiPromise<FlagConfigApprovalRequestResponse, Approvals.PostApprovalRequestReviewForFlagError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}/reviews",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: postApprovalRequestReviewRequestSchema },
      },
      {
        success: { kind: "json", schema: flagConfigApprovalRequestResponseSchema },
        errorFactory: Approvals.PostApprovalRequestReviewForFlagError,
      },
      options,
    );
  }

  /**
   * Create approval request to copy flag configurations across environments
   *
   * @remarks
   * Create an approval request to copy a feature flag's configuration across environments.
   *
   * @returns Approval request response
   *
   * @throws {@link Approvals.PostFlagCopyConfigApprovalRequestError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postFlagCopyConfigApprovalRequest(
    request: Approvals.PostFlagCopyConfigApprovalRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<FlagConfigApprovalRequestResponse, Approvals.PostFlagCopyConfigApprovalRequestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests-flag-copy",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createCopyFlagConfigApprovalRequestRequestSchema },
      },
      {
        success: { kind: "json", schema: flagConfigApprovalRequestResponseSchema },
        errorFactory: Approvals.PostFlagCopyConfigApprovalRequestError,
      },
      options,
    );
  }
}

export namespace Approvals {
  export type DeleteApprovalRequestRequest = {
    /** The approval request ID */
    id: string;
  };

  export class DeleteApprovalRequestError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteApprovalRequestError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type DeleteApprovalRequestForFlagRequest = {
    /** The project key */
    projectKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    /** The environment key */
    environmentKey: string;
    /** The feature flag approval request ID */
    id: string;
  };

  export class DeleteApprovalRequestForFlagError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteApprovalRequestForFlagError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetApprovalForFlagRequest = {
    /** The project key */
    projectKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    /** The environment key */
    environmentKey: string;
    /** The feature flag approval request ID */
    id: string;
  };

  export class GetApprovalForFlagError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApprovalForFlagError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetApprovalRequestRequest = {
    /** The approval request ID */
    id: string;
    /**
     * A comma-separated list of fields to expand in the response. Supported fields are explained
     * above.
     */
    expand?: string;
  };

  export class GetApprovalRequestError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApprovalRequestError> = [
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

  export type GetApprovalRequestsRequest = {
    /**
     * A comma-separated list of filters. Each filter is of the form `field operator value`.
     * Supported fields are explained above.
     */
    filter?: string;
    /**
     * A comma-separated list of fields to expand in the response. Supported fields are explained
     * above.
     */
    expand?: string;
    /** The number of approvals to return. Defaults to 20. Maximum limit is 200. */
    limit?: number;
    /**
     * Where to start in the list. Use this with pagination. For example, an offset of 10 skips the
     * first ten items and then returns the next items in the list, up to the query `limit`.
     */
    offset?: number;
  };

  export class GetApprovalRequestsError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApprovalRequestsError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetApprovalsForFlagRequest = {
    /** The project key */
    projectKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    /** The environment key */
    environmentKey: string;
  };

  export class GetApprovalsForFlagError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApprovalsForFlagError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PostApprovalRequestRequest = {
    body: CreateApprovalRequestRequest;
  };

  export class PostApprovalRequestError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApprovalRequestError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PostApprovalRequestApplyRequestParams = {
    /** The approval request ID */
    id: string;
    body: PostApprovalRequestApplyRequest;
  };

  export class PostApprovalRequestApplyError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApprovalRequestApplyError> = [
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

  export type PostApprovalRequestApplyForFlagRequest = {
    /** The project key */
    projectKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    /** The environment key */
    environmentKey: string;
    /** The feature flag approval request ID */
    id: string;
    body: PostApprovalRequestApplyRequest;
  };

  export class PostApprovalRequestApplyForFlagError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApprovalRequestApplyForFlagError> = [
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

  export type PostApprovalRequestForFlagRequest = {
    /** The project key */
    projectKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    /** The environment key */
    environmentKey: string;
    body: CreateFlagConfigApprovalRequestRequest;
  };

  export class PostApprovalRequestForFlagError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApprovalRequestForFlagError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PostApprovalRequestReviewRequestParams = {
    /** The approval request ID */
    id: string;
    body: PostApprovalRequestReviewRequest;
  };

  export class PostApprovalRequestReviewError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"methodNotAllowedErrorRep", MethodNotAllowedErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApprovalRequestReviewError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 405,
        kind: "methodNotAllowedErrorRep",
        decode: { kind: "json", schema: methodNotAllowedErrorRepSchema },
      },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PostApprovalRequestReviewForFlagRequest = {
    /** The project key */
    projectKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    /** The environment key */
    environmentKey: string;
    /** The feature flag approval request ID */
    id: string;
    body: PostApprovalRequestReviewRequest;
  };

  export class PostApprovalRequestReviewForFlagError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApprovalRequestReviewForFlagError> = [
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

  export type PostFlagCopyConfigApprovalRequestRequest = {
    /** The project key */
    projectKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    /** The environment key for the target environment */
    environmentKey: string;
    body: CreateCopyFlagConfigApprovalRequestRequest;
  };

  export class PostFlagCopyConfigApprovalRequestError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostFlagCopyConfigApprovalRequestError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
