import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  platformEvaluateCallerUsageLimitRequestSchema,
  type PlatformEvaluateCallerUsageLimitRequest,
} from "../models/platform-evaluate-caller-usage-limit-request.js";
import {
  platformEvaluateUsageLimitResponseSchema,
  type PlatformEvaluateUsageLimitResponse,
} from "../models/platform-evaluate-usage-limit-response.js";
import {
  platformPersonalRequestCreate1Schema,
  type PlatformPersonalRequestCreate1,
} from "../models/platform-personal-request-create1.js";
import {
  platformRequestFilter1Schema,
  type PlatformRequestFilter1,
} from "../models/platform-request-filter1.js";
import {
  platformRequestListResponse1Schema,
  type PlatformRequestListResponse1,
} from "../models/platform-request-list-response1.js";
import {
  platformRequestResponse1Schema,
  type PlatformRequestResponse1,
} from "../models/platform-request-response1.js";
import type { Servers } from "../servers.js";

export class Usage {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Evaluate usage limit headroom
   *
   * @remarks
   * Evaluate the effective usage limits for a selector and return the current decision (AVAILABLE,
   * WARNING, or BLOCKED) based on accrued usage. Requires usage:evaluate, without workspace billing
   * permission. Omit target to evaluate the authenticated canonical user. An explicit USER must
   * identify that user by canonical ID, known alias ID, email, or known alias email; every supplied
   * field must identify the caller. An explicit AGENT requires current owner/editor or applicable
   * global agent-edit permission; disabled agents remain eligible. Subagents, other users,
   * ORGANIZATION, and default targets are forbidden on this route, even for billing administrators.
   * Missing, inaccessible, and subagent targets return the same 403 insufficient_permissions. An
   * explicit usage_selector.client_id selects the Glean or external spend client; it is never
   * inferred from the caller. Agent evaluation reports aggregate agent usage, not the caller's
   * personal slice or a complete run preflight. Returns only the target's own policies, such as
   * user, default, department, IdP-group, and agent limits, with their values, used counters,
   * decisions, and headroom; USD and credits have separate effective_limits. Shared budgets, such
   * as the selected client's organization limit, are never itemized and never contribute values,
   * counters, warnings, or headroom; a reached shared hard limit still makes decision BLOCKED and
   * adds a decision_causes entry with budget_scope SHARED and its source_type. The response is the
   * same for every caller, including billing administrators. IDP_GROUP sources always have
   * is_identity_restricted true and no group_id. Use the administrative route for shared-budget
   * details. Evaluation reports configured-budget status even when runtime enforcement switches are
   * off; it does not perform request admission, model eligibility, or agent-run preflight checks.
   *
   * @returns Evaluation result.
   *
   * @throws {@link Usage.PlatformUsageLimitsEvaluateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformUsageLimitsEvaluate(
    request: Usage.PlatformUsageLimitsEvaluateRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformEvaluateUsageLimitResponse, Usage.PlatformUsageLimitsEvaluateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/usage/limits/evaluate"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: platformEvaluateCallerUsageLimitRequestSchema },
      },
      {
        success: { kind: "json", schema: platformEvaluateUsageLimitResponseSchema },
        errorFactory: Usage.PlatformUsageLimitsEvaluateError,
      },
      options,
    );
  }

  /**
   * Submit a personal limit-increase request
   *
   * @remarks
   * Requires usage.limit_increase_requests:write. The target is the authenticated canonical user,
   * and requester identity comes from authentication. The caller supplies the client and optional
   * business justification. The server assigns the request identifier and current UTC month.
   * Billing grants do not widen this route. Requires shared Platform authentication with the
   * required scope, experimental opt-in, and the existing request-more enablement flag. Missing
   * opt-in or a disabled flag returns 404.
   *
   * @returns The created personal request.
   *
   * @throws {@link Usage.PlatformUsageRequestsCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformUsageRequestsCreate(
    request: Usage.PlatformUsageRequestsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformRequestResponse1, Usage.PlatformUsageRequestsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/usage/limit-increase-requests"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: platformPersonalRequestCreate1Schema },
      },
      {
        success: { kind: "json", schema: platformRequestResponse1Schema },
        errorFactory: Usage.PlatformUsageRequestsCreateError,
      },
      options,
    );
  }

  /**
   * Get a personal limit-increase request
   *
   * @remarks
   * Requires usage.limit_increase_requests:read and the current user's request. Authorization
   * precedes resource disclosure. Missing and inaccessible records return the same 404. Supported
   * token issuance, experimental opt-in, and request-more enablement are required. Missing opt-in
   * or a disabled flag also returns 404.
   *
   * @returns The authorized request in its current stored state.
   *
   * @throws {@link Usage.PlatformUsageRequestsGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformUsageRequestsGet(
    request: Usage.PlatformUsageRequestsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformRequestResponse1, Usage.PlatformUsageRequestsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/usage/limit-increase-requests/{request_id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "request_id", value: request.requestId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: platformRequestResponse1Schema },
        errorFactory: Usage.PlatformUsageRequestsGetError,
      },
      options,
    );
  }

  /**
   * List personal limit-increase requests
   *
   * @remarks
   * Requires usage.limit_increase_requests:read. The collection is limited to the authenticated
   * canonical user's requests, including resolved requests. Cursors bind the filters and current
   * authorization context; a billing grant cannot widen results. Supported token issuance,
   * experimental opt-in, and request-more enablement are required. Missing opt-in or a disabled
   * flag returns 404.
   *
   * @returns A bounded page of authorized requests.
   *
   * @throws {@link Usage.PlatformUsageRequestsListError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformUsageRequestsList(
    request: Usage.PlatformUsageRequestsListRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformRequestListResponse1, Usage.PlatformUsageRequestsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/usage/limit-increase-requests"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 20) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          {
            name: "filters",
            value: request.filters,
            schema: s.optional(s.array(s.lazy(() => platformRequestFilter1Schema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: platformRequestListResponse1Schema },
        errorFactory: Usage.PlatformUsageRequestsListError,
      },
      options,
    );
  }
}

export namespace Usage {
  export type PlatformUsageLimitsEvaluateRequest = {
    body: PlatformEvaluateCallerUsageLimitRequest;
  };

  export class PlatformUsageLimitsEvaluateError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error413", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformUsageLimitsEvaluateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformUsageRequestsCreateRequest = {
    body: PlatformPersonalRequestCreate1;
  };

  export class PlatformUsageRequestsCreateError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error409", undefined>
      | Declared<"error413", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformUsageRequestsCreateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformUsageRequestsGetRequest = {
    /** Opaque personal request identifier; not an authorization grant. */
    requestId: string;
  };

  export class PlatformUsageRequestsGetError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformUsageRequestsGetError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformUsageRequestsListRequest = {
    /** Maximum page size; defaults to 20 and cannot exceed 100. @default 20 */
    pageSize?: number;
    /** Opaque continuation bound to filters and current authorization. */
    cursor?: string;
    /** Optional structured filters on request status. */
    filters?: PlatformRequestFilter1[];
  };

  export class PlatformUsageRequestsListError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformUsageRequestsListError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }
}
