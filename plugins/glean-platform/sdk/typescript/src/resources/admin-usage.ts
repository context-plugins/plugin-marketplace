import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { filterSchema, type Filter } from "../models/filter.js";
import {
  platformAdministrativeRequestUpdate1Schema,
  type PlatformAdministrativeRequestUpdate1,
} from "../models/platform-administrative-request-update1.js";
import {
  platformAgentRequestCreate1Schema,
  type PlatformAgentRequestCreate1,
} from "../models/platform-agent-request-create1.js";
import {
  platformBatchUsageLimitsResponseSchema,
  type PlatformBatchUsageLimitsResponse,
} from "../models/platform-batch-usage-limits-response.js";
import {
  platformEvaluateUsageLimitRequestSchema,
  type PlatformEvaluateUsageLimitRequest,
} from "../models/platform-evaluate-usage-limit-request.js";
import {
  platformEvaluateUsageLimitResponseSchema,
  type PlatformEvaluateUsageLimitResponse,
} from "../models/platform-evaluate-usage-limit-response.js";
import {
  platformListUsageLimitsResponseSchema,
  type PlatformListUsageLimitsResponse,
} from "../models/platform-list-usage-limits-response.js";
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
import {
  platformResetUsageLimitsResponseSchema,
  type PlatformResetUsageLimitsResponse,
} from "../models/platform-reset-usage-limits-response.js";
import {
  platformUpsertUsageLimitResponseSchema,
  type PlatformUpsertUsageLimitResponse,
} from "../models/platform-upsert-usage-limit-response.js";
import {
  platformUsageLimitKeySchema,
  type PlatformUsageLimitKey,
} from "../models/platform-usage-limit-key.js";
import { platformUsageLimitSchema, type PlatformUsageLimit } from "../models/platform-usage-limit.js";
import {
  platformUsageSettingsResponseSchema,
  type PlatformUsageSettingsResponse,
} from "../models/platform-usage-settings-response.js";
import {
  platformUsageSettingsUpdateRequest2Schema,
  type PlatformUsageSettingsUpdateRequest2,
} from "../models/unions/platform-usage-settings-update-request2.js";
import type { Servers } from "../servers.js";

export class AdminUsage {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Apply usage limit policies
   *
   * @remarks
   * Apply one or more usage limit policy changes atomically. This action sets policy by natural
   * key; it does not create addressable resources or return resource locations. Every change
   * succeeds or none are applied. USER targets may be identified by user_id or email; each resolves
   * to the canonical user_id before duplicate natural keys are checked. Requires
   * admin.usage.limits:write and permission to edit workspace billing.
   *
   * @returns The applied usage limit policies.
   *
   * @throws {@link AdminUsage.PlatformAdminUsageLimitsBatchError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformAdminUsageLimitsBatch(
    request: AdminUsage.PlatformAdminUsageLimitsBatchRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformBatchUsageLimitsResponse, AdminUsage.PlatformAdminUsageLimitsBatchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/admin/usage/limits/batch"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => platformUsageLimitSchema)) },
      },
      {
        success: { kind: "json", schema: platformBatchUsageLimitsResponseSchema },
        errorFactory: AdminUsage.PlatformAdminUsageLimitsBatchError,
      },
      options,
    );
  }

  /**
   * Evaluate administrative usage limit headroom
   *
   * @remarks
   * Evaluate the effective usage limits for a selector and return the current decision (AVAILABLE,
   * WARNING, or BLOCKED) based on accrued usage. Requires admin.usage:evaluate and permission to
   * read workspace billing, not a global administrator role. An explicit usage_selector.client_id
   * selects the Glean or external spend client; it is never inferred from the caller. Returns all
   * applicable limit values and counters, with effective headroom separated by unit. Agent counters
   * retain aggregate scope. Billing readers receive exact IdP-group source identities. A USER
   * target may be identified by user_id or email. Evaluation reports configured-budget status even
   * when runtime enforcement switches are off; it does not perform request admission, model
   * eligibility, or agent-run preflight checks.
   *
   * @returns Evaluation result.
   *
   * @throws {@link AdminUsage.PlatformAdminUsageLimitsEvaluateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformAdminUsageLimitsEvaluate(
    request: AdminUsage.PlatformAdminUsageLimitsEvaluateRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformEvaluateUsageLimitResponse, AdminUsage.PlatformAdminUsageLimitsEvaluateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/admin/usage/limits/evaluate"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: platformEvaluateUsageLimitRequestSchema },
      },
      {
        success: { kind: "json", schema: platformEvaluateUsageLimitResponseSchema },
        errorFactory: AdminUsage.PlatformAdminUsageLimitsEvaluateError,
      },
      options,
    );
  }

  /**
   * List usage limits
   *
   * @remarks
   * List configured limits across Glean and external spend clients, plus aggregate agent limits.
   * Organization and user limits identify their spend client; aggregate agent limits omit
   * client_id. USER targets return the canonical user_id and, when available, the user's directory
   * email. Requires admin.usage.limits:read and permission to read workspace billing. Optional
   * filters match configured limits. Pages contain up to page_size matching results; the service
   * continues scanning until the page is full or the collection is exhausted. Continue with
   * next_cursor while has_more is true, keeping the same filters on every continuation request. The
   * undeclared client_id and target_type query parameters are rejected; use the canonical filters
   * parameter instead.
   *
   * @returns List of usage limits.
   *
   * @throws {@link AdminUsage.PlatformAdminUsageLimitsListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformAdminUsageLimitsList(
    request: AdminUsage.PlatformAdminUsageLimitsListRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformListUsageLimitsResponse, AdminUsage.PlatformAdminUsageLimitsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/admin/usage/limits"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 20) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          {
            name: "filters",
            value: request.filters,
            schema: s.optional(s.array(s.lazy(() => filterSchema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: platformListUsageLimitsResponseSchema },
        errorFactory: AdminUsage.PlatformAdminUsageLimitsListError,
      },
      options,
    );
  }

  /**
   * Reset a usage limit
   *
   * @remarks
   * Remove a configured usage limit matching the selector without clearing measured usage. A USER
   * target may be identified by user_id or email, including a user no longer in the directory.
   * Requires admin.usage.limits:write and permission to edit workspace billing.
   *
   * @returns Reset result.
   *
   * @throws {@link AdminUsage.PlatformAdminUsageLimitsResetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformAdminUsageLimitsReset(
    request: AdminUsage.PlatformAdminUsageLimitsResetRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformResetUsageLimitsResponse, AdminUsage.PlatformAdminUsageLimitsResetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/admin/usage/limits/reset"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: platformUsageLimitKeySchema },
      },
      {
        success: { kind: "json", schema: platformResetUsageLimitsResponseSchema },
        errorFactory: AdminUsage.PlatformAdminUsageLimitsResetError,
      },
      options,
    );
  }

  /**
   * Upsert a usage limit
   *
   * @remarks
   * Create or replace a single usage limit by its natural key. Always returns 200 with the
   * normalized limit. A USER target may be identified by user_id or email; an unknown user returns
   * 404. Requires admin.usage.limits:write and permission to edit workspace billing. Personal usage
   * grants do not allow limit changes.
   *
   * @returns The upserted usage limit.
   *
   * @throws {@link AdminUsage.PlatformAdminUsageLimitsUpsertError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformAdminUsageLimitsUpsert(
    request: AdminUsage.PlatformAdminUsageLimitsUpsertRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformUpsertUsageLimitResponse, AdminUsage.PlatformAdminUsageLimitsUpsertError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/admin/usage/limits"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: platformUsageLimitSchema },
      },
      {
        success: { kind: "json", schema: platformUpsertUsageLimitResponseSchema },
        errorFactory: AdminUsage.PlatformAdminUsageLimitsUpsertError,
      },
      options,
    );
  }

  /**
   * Submit an editable-agent limit-increase request
   *
   * @remarks
   * Requires usage.limit_increase_requests:write, the same scope as personal creation, and current
   * edit permission on the agent, not billing permissions. The caller supplies the agent, client,
   * and optional business justification. Requester identity comes from authentication; the server
   * assigns the request identifier and current UTC month. Requires shared Platform authentication
   * with the required scope, experimental opt-in, and the existing request-more enablement flag.
   * Missing opt-in or a disabled flag returns 404.
   *
   * @returns The created editable-agent request.
   *
   * @throws {@link AdminUsage.PlatformAdminUsageRequestsCreateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformAdminUsageRequestsCreate(
    request: AdminUsage.PlatformAdminUsageRequestsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformRequestResponse1, AdminUsage.PlatformAdminUsageRequestsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/admin/usage/limit-increase-requests"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: platformAgentRequestCreate1Schema },
      },
      {
        success: { kind: "json", schema: platformRequestResponse1Schema },
        errorFactory: AdminUsage.PlatformAdminUsageRequestsCreateError,
      },
      options,
    );
  }

  /**
   * Get a billing limit-increase request
   *
   * @remarks
   * Requires admin.usage.limit_increase_requests:read and current workspace billing read
   * permission. Authorization precedes resource disclosure. Owner-only agent reads are not
   * supported. Supported token issuance, experimental opt-in, and request-more enablement are
   * required. Missing opt-in or a disabled flag returns 404.
   *
   * @returns The authorized request in its current stored state.
   *
   * @throws {@link AdminUsage.PlatformAdminUsageRequestsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformAdminUsageRequestsGet(
    request: AdminUsage.PlatformAdminUsageRequestsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformRequestResponse1, AdminUsage.PlatformAdminUsageRequestsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/admin/usage/limit-increase-requests/{request_id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "request_id", value: request.requestId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: platformRequestResponse1Schema },
        errorFactory: AdminUsage.PlatformAdminUsageRequestsGetError,
      },
      options,
    );
  }

  /**
   * List the billing limit-increase request queue
   *
   * @remarks
   * Requires admin.usage.limit_increase_requests:read and current workspace billing read
   * permission. Agent ownership is not queue access. Cursors bind filters and current authorization
   * context. Supported token issuance, experimental opt-in, and request-more enablement are
   * required. Missing opt-in or a disabled flag returns 404, not a successful empty page.
   *
   * @returns A bounded page of authorized requests.
   *
   * @throws {@link AdminUsage.PlatformAdminUsageRequestsListError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformAdminUsageRequestsList(
    request: AdminUsage.PlatformAdminUsageRequestsListRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformRequestListResponse1, AdminUsage.PlatformAdminUsageRequestsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/admin/usage/limit-increase-requests"),
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
        errorFactory: AdminUsage.PlatformAdminUsageRequestsListError,
      },
      options,
    );
  }

  /**
   * Resolve a billing limit-increase request
   *
   * @remarks
   * Update a pending request with an approval decision or denial. Requires
   * admin.usage.limit_increase_requests:write and current billing edit permission. A pending
   * request can record an approved positive increase amount or be denied with an optional
   * resolution note. PERIOD approval retains the request's stored month and requires the current
   * UTC month; expired approvals return 409 before mutation or approval writes. A successful
   * approval write triggers spend-limit cache refresh before reload; refresh failure logs a warning
   * without failing the decision. The existing backend consumes eligible USER current-period grants
   * to raise enforcement headroom without changing standing rules. This does not add capacity for
   * agents or other unsupported targets, integrate usage settings, or promise new delivery or
   * atomicity guarantees. Supported token issuance, experimental opt-in, and request-more
   * enablement are required. Missing opt-in or a disabled flag returns 404. Once enabled and opted
   * in, ONGOING returns typed 503 without reading or modifying the request; its private policy
   * preparation is not shared with this adapter. Use the existing app operation for ongoing user
   * approvals.
   *
   * @returns The resolved request in its current stored state.
   *
   * @throws {@link AdminUsage.PlatformAdminUsageRequestsUpdateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformAdminUsageRequestsUpdate(
    request: AdminUsage.PlatformAdminUsageRequestsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformRequestResponse1, AdminUsage.PlatformAdminUsageRequestsUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/admin/usage/limit-increase-requests/{request_id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "request_id", value: request.requestId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: platformAdministrativeRequestUpdate1Schema },
      },
      {
        success: { kind: "json", schema: platformRequestResponse1Schema },
        errorFactory: AdminUsage.PlatformAdminUsageRequestsUpdateError,
      },
      options,
    );
  }

  /**
   * Get usage settings
   *
   * @remarks
   * Retrieve workspace-wide policy from the same configuration used by Billing. Group resolution
   * uses the configured policy and its backend defaults; business justification is currently
   * optional. No per-user settings are read, and updated_at is omitted because no policy-update
   * timestamp is available. Requires admin.usage.settings:read and permission to read workspace
   * billing; a global administrator role is not required.
   *
   * @returns Usage settings.
   *
   * @throws {@link AdminUsage.PlatformAdminUsageSettingsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformAdminUsageSettingsGet(
    options?: RequestOptions,
  ): ApiPromise<PlatformUsageSettingsResponse, AdminUsage.PlatformAdminUsageSettingsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/admin/usage/settings"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: platformUsageSettingsResponseSchema },
        errorFactory: AdminUsage.PlatformAdminUsageSettingsGetError,
      },
      options,
    );
  }

  /**
   * Update usage settings
   *
   * @remarks
   * Assign workspace-wide usage policy. Assignment is currently unavailable until a writer to
   * authoritative Billing configuration is integrated. The backend config
   * platform.usageSettingsWritesEnabled is disabled by default; enabling it alone does not
   * implement assignment, and an authorized request still returns 503 without changing
   * configuration or persisting a second copy of policy. Requires admin.usage.settings:write and
   * permission to edit workspace billing; a global administrator role is not required.
   *
   * @returns Updated usage settings.
   *
   * @throws {@link AdminUsage.PlatformAdminUsageSettingsUpdateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformAdminUsageSettingsUpdate(
    request: AdminUsage.PlatformAdminUsageSettingsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformUsageSettingsResponse, AdminUsage.PlatformAdminUsageSettingsUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/admin/usage/settings"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: platformUsageSettingsUpdateRequest2Schema },
      },
      {
        success: { kind: "json", schema: platformUsageSettingsResponseSchema },
        errorFactory: AdminUsage.PlatformAdminUsageSettingsUpdateError,
      },
      options,
    );
  }
}

export namespace AdminUsage {
  export type PlatformAdminUsageLimitsBatchRequest = {
    body: PlatformUsageLimit[];
  };

  export class PlatformAdminUsageLimitsBatchError extends ApiError {
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

    static readonly errors: ErrorDecoders<PlatformAdminUsageLimitsBatchError> = [
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

  export type PlatformAdminUsageLimitsEvaluateRequest = {
    body: PlatformEvaluateUsageLimitRequest;
  };

  export class PlatformAdminUsageLimitsEvaluateError extends ApiError {
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

    static readonly errors: ErrorDecoders<PlatformAdminUsageLimitsEvaluateError> = [
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

  export type PlatformAdminUsageLimitsListRequest = {
    /**
     * Maximum number of limits to return. Defaults to 20; the maximum allowed is 100.
     *
     * @default 20
     */
    pageSize?: number;
    /** Opaque cursor from a previous list response; resend the same filters when continuing. */
    cursor?: string;
    /**
     * JSON-encoded array of filters. Supported fields are client_id and target_type; only EQUALS is
     * supported and is the default operator. Values within a filter are OR'd; filters are AND'd,
     * including repeated fields. Client IDs are opaque, case-sensitive strings, matched exactly
     * without trimming; whitespace-only values are invalid. Client filters include organization,
     * default-user, and user policies, but exclude aggregate agent policies without a client_id.
     * target_type values are ORGANIZATION, DEFAULT_USER, USER, DEFAULT_AGENT, and AGENT. URL-encode
     * the JSON array as one filters query value.
     */
    filters?: Filter[];
  };

  export class PlatformAdminUsageLimitsListError extends ApiError {
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

    static readonly errors: ErrorDecoders<PlatformAdminUsageLimitsListError> = [
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

  export type PlatformAdminUsageLimitsResetRequest = {
    body: PlatformUsageLimitKey;
  };

  export class PlatformAdminUsageLimitsResetError extends ApiError {
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

    static readonly errors: ErrorDecoders<PlatformAdminUsageLimitsResetError> = [
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

  export type PlatformAdminUsageLimitsUpsertRequest = {
    body: PlatformUsageLimit;
  };

  export class PlatformAdminUsageLimitsUpsertError extends ApiError {
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

    static readonly errors: ErrorDecoders<PlatformAdminUsageLimitsUpsertError> = [
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

  export type PlatformAdminUsageRequestsCreateRequest = {
    body: PlatformAgentRequestCreate1;
  };

  export class PlatformAdminUsageRequestsCreateError extends ApiError {
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

    static readonly errors: ErrorDecoders<PlatformAdminUsageRequestsCreateError> = [
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

  export type PlatformAdminUsageRequestsGetRequest = {
    /** Opaque request identifier; not an authorization grant. */
    requestId: string;
  };

  export class PlatformAdminUsageRequestsGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<PlatformAdminUsageRequestsGetError> = [
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

  export type PlatformAdminUsageRequestsListRequest = {
    /** Maximum page size; defaults to 20 and cannot exceed 100. @default 20 */
    pageSize?: number;
    /** Opaque continuation bound to filters and current authorization. */
    cursor?: string;
    /** Optional structured filters on request status. */
    filters?: PlatformRequestFilter1[];
  };

  export class PlatformAdminUsageRequestsListError extends ApiError {
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

    static readonly errors: ErrorDecoders<PlatformAdminUsageRequestsListError> = [
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

  export type PlatformAdminUsageRequestsUpdateRequest = {
    /** Opaque request identifier; not an authorization grant. */
    requestId: string;
    body: PlatformAdministrativeRequestUpdate1;
  };

  export class PlatformAdminUsageRequestsUpdateError extends ApiError {
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

    static readonly errors: ErrorDecoders<PlatformAdminUsageRequestsUpdateError> = [
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

  export class PlatformAdminUsageSettingsGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<PlatformAdminUsageSettingsGetError> = [
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

  export type PlatformAdminUsageSettingsUpdateRequest = {
    body: PlatformUsageSettingsUpdateRequest2;
  };

  export class PlatformAdminUsageSettingsUpdateError extends ApiError {
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

    static readonly errors: ErrorDecoders<PlatformAdminUsageSettingsUpdateError> = [
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
}
