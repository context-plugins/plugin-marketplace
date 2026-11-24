import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  gcpBillingAccountDetailInternalSchema,
  type GcpBillingAccountDetail,
} from "../models/gcp-billing-account-detail.js";
import {
  gcpRecommendationWithEligibleSpendInternalSchema,
  type GcpRecommendationWithEligibleSpend,
} from "../models/gcp-recommendation-with-eligible-spend.js";
import { gcpServiceSchema, type GcpService } from "../models/gcp-service.js";
import { Granularity, granularitySchema } from "../models/granularity.js";
import { problemDetailsInternalSchema, type ProblemDetails } from "../models/problem-details.js";
import {
  ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponseInternalSchema,
  type Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse,
} from "../models/ps4-commitments-v1-gcp-billing-accounts-planned-purchases-response.js";
import {
  ps4CommitmentsV1GcpBillingAccountsRecommendationsResponseInternalSchema,
  type Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse,
} from "../models/ps4-commitments-v1-gcp-billing-accounts-recommendations-response.js";
import {
  ps4CommitmentsV1GcpBillingAccountsResourceBasedResponseSchema,
  type Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse,
} from "../models/ps4-commitments-v1-gcp-billing-accounts-resource-based-response.js";
import {
  ps4CommitmentsV1GcpBillingAccountsResponseInternalSchema,
  type Ps4CommitmentsV1GcpBillingAccountsResponse,
} from "../models/ps4-commitments-v1-gcp-billing-accounts-response.js";
import {
  ps4CommitmentsV1GcpBillingAccountsSpendBasedResponseSchema,
  type Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse,
} from "../models/ps4-commitments-v1-gcp-billing-accounts-spend-based-response.js";
import {
  ps4CommitmentsV1GcpSettingsResponseInternalSchema,
  type Ps4CommitmentsV1GcpSettingsResponse,
} from "../models/ps4-commitments-v1-gcp-settings-response.js";
import {
  status2DoiTPerfectScaleForCommitmentsGcpApiSchema,
  type Status2DoiTPerfectScaleForCommitmentsGcpApi,
} from "../models/status2-doi-tperfect-scale-for-commitments-gcp-api.js";
import type { Servers } from "../servers.js";

/**
 * Evaluate current GCP commitments, plan and automate purchases, and optimize cloud costs with
 * PerfectScale for Commitments.
 */
export class PerfectScaleForCommitmentsGcp {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a GCP billing account
   *
   * @remarks
   * Returns a single GCP Billing Account with the same list-item fields as List GCP Billing
   * Accounts, plus the Overview time series. Use this when you need a single billing account's
   * Console Overview in one call (identity and onboarding status, 30-day ESR and savings,
   * YTD/lifetime totals, CUD export health, and the data behind Cost Summary and CUD Coverage
   * charts) without fetching every billing account.
   *
   * Fields that drive the Overview tab in the DoiT console — each is an array with one entry per
   * product line (`service` of `compute` or `cloud_sql`):
   * - `stats30d`: last 30 days ESR and realized savings per product line (ESR and Savings cards).
   * - `monthlyStats`: last 6 calendar months of ESR, on-demand cost, and cost with savings per
   *   product line (Cost Summary chart, and month-over-month card trends).
   * - `dailyCoverage`: last 30 days of CUD coverage breakdown per product line (CUD Coverage
   *   chart).
   * - `savingsTotals`: year-to-date and lifetime realized savings per product line (shown under the
   *   Savings card). Lifetime is bounded by PerfectScale for Commitments onboarding start.
   *
   * @returns Single GCP Billing Account details (same list-item fields as provided for the billing
   * account through list GCP billing accounts operation) and overview time series: 6 months stats
   * and 30 days of CUD coverage.
   *
   * @throws {@link PerfectScaleForCommitmentsGcp.GetGcpBillingAccountError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGcpBillingAccount(
    request: PerfectScaleForCommitmentsGcp.GetGcpBillingAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<GcpBillingAccountDetail, PerfectScaleForCommitmentsGcp.GetGcpBillingAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ps4commitments/v1/gcp/billing-accounts/{billingAccountId}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "billingAccountId", value: request.billingAccountId, schema: s.string() }],
        query: [],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: gcpBillingAccountDetailInternalSchema },
        errorFactory: PerfectScaleForCommitmentsGcp.GetGcpBillingAccountError,
      },
      options,
    );
  }

  /**
   * Get a GCP recommendation
   *
   * @remarks
   * Returns the recommendation for one product line (`gcp_service`) and region scope on the GCP
   * billing account, including analysis metrics and time-bucketed eligible spend. Use `granularity`
   * to choose the eligible-spend bucket size (defaults to `day`).
   *
   * **`region`**: optional for `compute`, defaulting to `global` (its only scope). Required for
   * `cloud_sql` — omitting it returns `400` with code `validation_failed`, as does a malformed
   * region or one incompatible with `gcp_service` (`cloud_sql` never uses `global`). A well-formed
   * region the billing account has never had eligible spend in returns `404` with code `not_found`
   * — the scope does not exist, same as an unknown billing account. When the scope exists but no
   * stored recommendation matches, the response is `200` with `recommendation` omitted and
   * `estimatedEquivalentRecommendedCommitment` of `0`.
   *
   * @returns Recommendation detail with eligible-spend usage series.
   *
   * @throws {@link PerfectScaleForCommitmentsGcp.GetGcpRecommendationError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGcpRecommendation(
    request: PerfectScaleForCommitmentsGcp.GetGcpRecommendationRequest,
    options?: RequestOptions,
  ): ApiPromise<GcpRecommendationWithEligibleSpend, PerfectScaleForCommitmentsGcp.GetGcpRecommendationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/recommendations/{gcp_service}",
        ),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "billingAccountId", value: request.billingAccountId, schema: s.string() },
          { name: "gcp_service", value: request.gcpService, schema: gcpServiceSchema },
        ],
        query: [
          { name: "region", value: request.region, schema: s.optional(s.string()) },
          {
            name: "granularity",
            value: request.granularity,
            schema: s.defaulted(granularitySchema, Granularity.Day),
          },
        ],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: gcpRecommendationWithEligibleSpendInternalSchema },
        errorFactory: PerfectScaleForCommitmentsGcp.GetGcpRecommendationError,
      },
      options,
    );
  }

  /**
   * List GCP billing accounts
   *
   * @remarks
   * Returns all GCP Billing Accounts accessible to the authenticated tenant. Use as the entry point
   * to discover GCP billing account IDs, and billing-account-level onboarding status of the
   * available product lines and savings metrics.
   *
   * Each item includes metadata, CUD export health, trailing 30-day aggregate statistics, and
   * precomputed YTD/lifetime savings totals per product line. Sum across items for customer-level
   * totals.
   *
   * @returns List of GCP Billing Accounts. One item per billing account.
   *
   * @throws {@link PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listGcpBillingAccounts(
    request: PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    Ps4CommitmentsV1GcpBillingAccountsResponse,
    PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ps4commitments/v1/gcp/billing-accounts"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ps4CommitmentsV1GcpBillingAccountsResponseInternalSchema },
        errorFactory: PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsError,
      },
      options,
    );
  }

  /**
   * List billing account engine settings
   *
   * @remarks
   * Returns one item per onboarded GCP Billing Account. Each item includes that billing account's
   * recommendation and automation engine settings for each product line activated on it, per region
   * scope: one `global` entry for `compute`, and one entry per known region for `cloud_sql`.
   *
   * Cloud SQL regions come from the billing account's persisted settings: a region is added when
   * eligible spend is first seen there and is never removed, so its settings entry remains listed
   * even if spend later drops to zero. Items are sorted by `billingAccountId`; within an item,
   * `services` lists `compute` before `cloud_sql`, with `cloud_sql` regions sorted alphabetically.
   *
   * Settings are stored independently on each billing account. Existing customer-level settings are
   * copied lazily when an account is first read or initialized; if no valid legacy value exists,
   * the complete backend defaults are materialized once on the account. Only product lines that are
   * activated/onboarded for a given billing account are returned.
   *
   * In the DoiT Console, these settings are edited on an account's Settings tab.
   *
   * @returns Settings payload for one onboarded GCP Billing Account, broken down by activated
   * product line (`services[].settings`).
   *
   * @throws {@link PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsSettingsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listGcpBillingAccountsSettings(
    request: PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsSettingsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    Ps4CommitmentsV1GcpSettingsResponse,
    PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsSettingsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ps4commitments/v1/gcp/settings"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ps4CommitmentsV1GcpSettingsResponseInternalSchema },
        errorFactory: PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsSettingsError,
      },
      options,
    );
  }

  /**
   * List GCP planned purchases
   *
   * @remarks
   * Returns the laddering projections for the billing account, grouped by PS4C product line
   * (`service`) and region. Each service group lists one entry per available
   * `gcp-purchases-projection` document for that scope (`compute` scopes are `global`; `cloud_sql`
   * scopes are per-region).
   *
   * With no filters, returns all existing projection documents in stable order: service groups
   * ordered `compute` first, then `cloud_sql`; within each group, regions sorted with `global`
   * first, then remaining regions alphabetically. Services with no projection documents are omitted
   * (not returned as empty groups). When a filter matches no documents, the response is an empty
   * `items` array (not `404`). Partial projection documents return only the fields available in
   * storage.
   *
   * **`gcp_service` and `region` filters**: omit both to return all available services and their
   * regions; supply `gcp_service` alone to return all regions for that service; supply both to
   * return a single service/region scope. `region` requires `gcp_service` — a request with `region`
   * but no `gcp_service` returns `400` with code `gcp_service_required`. Invalid `gcp_service` or
   * `region` values return `400` with code `validation_failed`.
   *
   * `404` is returned only when the billing account does not exist or the caller cannot access it.
   * A billing account that is not onboarded for PS4C still returns `200` with an empty `items`
   * array when no projection documents exist — use `GET /ps4commitments/v1/gcp/billing-accounts`
   * (or get-by-id) for onboarding status.
   *
   * **Pagination**: results are paginated by **service group** (a whole group is never split across
   * pages). Groups keep the stable service order above. Use `maxResults` to limit page size
   * (default 50, max 500). When more groups remain, the response includes a non-null `pageToken`;
   * pass it unchanged on the next request with the same query parameters (`gcp_service`, `region`,
   * `maxResults`). `rowCount` is the number of service groups in this page. An invalid `pageToken`
   * returns `400` with code `pagination_token_invalid`; an expired token returns `400` with code
   * `pagination_token_expired`.
   *
   * @returns List of planned purchase projections grouped by service and region.
   *
   * @throws {@link PerfectScaleForCommitmentsGcp.ListGcpPlannedPurchasesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listGcpPlannedPurchases(
    request: PerfectScaleForCommitmentsGcp.ListGcpPlannedPurchasesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse,
    PerfectScaleForCommitmentsGcp.ListGcpPlannedPurchasesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/planned-purchases",
        ),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "billingAccountId", value: request.billingAccountId, schema: s.string() }],
        query: [
          {
            name: "gcp_service",
            value: request.gcpService,
            schema: s.optional(s.lazy(() => gcpServiceSchema)),
          },
          { name: "region", value: request.region, schema: s.optional(s.string()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponseInternalSchema,
        },
        errorFactory: PerfectScaleForCommitmentsGcp.ListGcpPlannedPurchasesError,
      },
      options,
    );
  }

  /**
   * List GCP recommendations
   *
   * @remarks
   * Returns commitment purchase recommendations for the billing account, filtered to the term
   * preferred in each product line's settings (`preferredCommitmentPeriod`).
   *
   * **`gcp_service` and `region` filters**: omit both to return recommendations for all product
   * lines (`compute`, `cloud_sql`) across all their regions. Supply `gcp_service` alone to return
   * all regions for that service; supply both to return a single service/region scope. `region`
   * requires `gcp_service` — a request with `region` but no `gcp_service` returns `400` with code
   * `gcp_service_required`. A `region` that is malformed or incompatible with `gcp_service`
   * (`compute` is `global`-only, `cloud_sql` is regional-only) returns `400` with code
   * `validation_failed`; a well-formed, compatible region with no data returns `200` with an empty
   * `items` array.
   *
   * `404` is returned only when the billing account does not exist or the caller cannot access it.
   * A billing account with no matching recommendation documents returns `200` with an empty `items`
   * array.
   *
   * @returns List of GCP recommendations.
   *
   * @throws {@link PerfectScaleForCommitmentsGcp.ListGcpRecommendationsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listGcpRecommendations(
    request: PerfectScaleForCommitmentsGcp.ListGcpRecommendationsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse,
    PerfectScaleForCommitmentsGcp.ListGcpRecommendationsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/recommendations",
        ),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "billingAccountId", value: request.billingAccountId, schema: s.string() }],
        query: [
          {
            name: "gcp_service",
            value: request.gcpService,
            schema: s.optional(s.lazy(() => gcpServiceSchema)),
          },
          { name: "region", value: request.region, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: ps4CommitmentsV1GcpBillingAccountsRecommendationsResponseInternalSchema,
        },
        errorFactory: PerfectScaleForCommitmentsGcp.ListGcpRecommendationsError,
      },
      options,
    );
  }

  /**
   * List GCP resource-based Committed Use Discounts
   *
   * @remarks
   * Returns a paginated list of resource-based (vCPU / memory) CUDs for the billing account.
   * Optionally filter by CUD state (`status`). Omit to return CUDs in all states.
   *
   * @returns Paginated list of resource-based CUDs.
   *
   * @throws {@link PerfectScaleForCommitmentsGcp.ListGcpResourceCudsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listGcpResourceCuds(
    request: PerfectScaleForCommitmentsGcp.ListGcpResourceCudsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse,
    PerfectScaleForCommitmentsGcp.ListGcpResourceCudsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/resource-based",
        ),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "billingAccountId", value: request.billingAccountId, schema: s.string() }],
        query: [
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => status2DoiTPerfectScaleForCommitmentsGcpApiSchema)),
          },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ps4CommitmentsV1GcpBillingAccountsResourceBasedResponseSchema },
        errorFactory: PerfectScaleForCommitmentsGcp.ListGcpResourceCudsError,
      },
      options,
    );
  }

  /**
   * List GCP spend-based Committed Use Discounts
   *
   * @remarks
   * Returns a paginated list of spend-based CUDs for the billing account. Optionally filter by CUD
   * state (`status`); omit to return CUDs in all states.
   *
   * **`gcp_service` and `region` filters**: `gcp_service` narrows results to one product line's
   * coverage sub-type (`compute` or `cloud_sql`); `region` additionally narrows to one region scope
   * and requires `gcp_service` — a request with `region` but no `gcp_service` returns `400` with
   * code `gcp_service_required`. A `region` that is malformed or incompatible with `gcp_service`
   * (`compute` is `global`-only, `cloud_sql` is regional-only) returns `400` with code
   * `validation_failed`; a well-formed, compatible region with no matching CUDs returns `200` with
   * an empty `items` array. Note the `region` query parameter uses the `lower_snake_case` wire form
   * (`us_central1`), while each item's `region` field echoes the raw provider value
   * (`us-central1`).
   *
   * @returns Paginated list of spend-based CUDs.
   *
   * @throws {@link PerfectScaleForCommitmentsGcp.ListGcpSpendCudsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listGcpSpendCuds(
    request: PerfectScaleForCommitmentsGcp.ListGcpSpendCudsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse,
    PerfectScaleForCommitmentsGcp.ListGcpSpendCudsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/spend-based",
        ),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "billingAccountId", value: request.billingAccountId, schema: s.string() }],
        query: [
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => status2DoiTPerfectScaleForCommitmentsGcpApiSchema)),
          },
          {
            name: "gcp_service",
            value: request.gcpService,
            schema: s.optional(s.lazy(() => gcpServiceSchema)),
          },
          { name: "region", value: request.region, schema: s.optional(s.string()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ps4CommitmentsV1GcpBillingAccountsSpendBasedResponseSchema },
        errorFactory: PerfectScaleForCommitmentsGcp.ListGcpSpendCudsError,
      },
      options,
    );
  }
}

export namespace PerfectScaleForCommitmentsGcp {
  export type GetGcpBillingAccountRequest = {
    /**
     * GCP Billing Account ID (format `XXXXXX-XXXXXX-XXXXXX`; the account that owns the CUDs) that
     * scopes the request.
     */
    billingAccountId: string;
    /**
     * Customer (tenant) ID for the request. This is separate from authentication: you still pass
     * your personal or service account API token in the `Authorization` header (`Bearer <token>`).
     * See [Get Started](https://developer.doit.com/docs/start).
     *
     * **When to omit (most callers):** If your personal or service account token belongs to a
     * single customer, omit this header. The API resolves that customer from the token.
     *
     * **When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to
     * the customer ID you want to act on. A service account can select an active direct or nested
     * descendant of its home customer; the endpoint's normal permissions, entitlements, and
     * resource-ownership checks still apply. A service-account target outside that customer subtree
     * returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query
     * parameter, which only applies to legacy API keys and is ignored by personal and service
     * account tokens.
     */
    xTenantId?: string;
  };

  export const getGcpBillingAccountRequestSchema: Schema<GetGcpBillingAccountRequest> = s.lazySchema(() =>
    s.object<GetGcpBillingAccountRequest>({
      billingAccountId: s.string().check(s.pattern("^[A-Z0-9]{6}-[A-Z0-9]{6}-[A-Z0-9]{6}$")),
      xTenantId: s.optional(s.string()),
    }),
  );

  export class GetGcpBillingAccountError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGcpBillingAccountError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type GetGcpRecommendationRequest = {
    /**
     * GCP Billing Account ID (format `XXXXXX-XXXXXX-XXXXXX`; the account that owns the CUDs) that
     * scopes the request.
     */
    billingAccountId: string;
    /**
     * PS4C product line to fetch the recommendation for. Matching is case-insensitive; the value is
     * lowercased before validation.
     */
    gcpService: GcpService;
    /**
     * Filter by region scope, in `lower_snake_case` wire form (for example `us_east1`), or the
     * literal `global`. Requires `gcp_service`; a request with `region` but no `gcp_service`
     * returns `400` with code `gcp_service_required`. When both are omitted, all available regions
     * for all available product lines are returned.
     *
     * The value is format-validated, not checked against a closed region list: `compute` accepts
     * only `global`, `cloud_sql` accepts only concrete regions (never `global`), and a value that
     * is malformed or incompatible with `gcp_service` returns `400` with code `validation_failed`.
     * A well-formed, service-compatible region with no data returns `200` with an empty result.
     * Matching is case-insensitive; the value is lowercased before validation.
     */
    region?: string;
    /**
     * Time bucket size for eligible-spend data points on the recommendation response. If omitted,
     * defaults to `day`. Coarser buckets return min/max/median usage; `hour` returns per-hour
     * totals.
     *
     * @default Granularity.Day
     */
    granularity?: Granularity;
    /**
     * Customer (tenant) ID for the request. This is separate from authentication: you still pass
     * your personal or service account API token in the `Authorization` header (`Bearer <token>`).
     * See [Get Started](https://developer.doit.com/docs/start).
     *
     * **When to omit (most callers):** If your personal or service account token belongs to a
     * single customer, omit this header. The API resolves that customer from the token.
     *
     * **When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to
     * the customer ID you want to act on. A service account can select an active direct or nested
     * descendant of its home customer; the endpoint's normal permissions, entitlements, and
     * resource-ownership checks still apply. A service-account target outside that customer subtree
     * returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query
     * parameter, which only applies to legacy API keys and is ignored by personal and service
     * account tokens.
     */
    xTenantId?: string;
  };

  export const getGcpRecommendationRequestSchema: Schema<GetGcpRecommendationRequest> = s.lazySchema(() =>
    s.object<GetGcpRecommendationRequest>({
      billingAccountId: s.string().check(s.pattern("^[A-Z0-9]{6}-[A-Z0-9]{6}-[A-Z0-9]{6}$")),
      gcpService: gcpServiceSchema,
      region: s.optional(s.string().check(s.pattern("^(global|[a-z]+(_[a-z0-9]+)+)$"))),
      granularity: s.defaulted(granularitySchema, Granularity.Day),
      xTenantId: s.optional(s.string()),
    }),
  );

  export class GetGcpRecommendationError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGcpRecommendationError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type ListGcpBillingAccountsRequest = {
    /**
     * Opaque cursor token returned by a previous list response. Omit to start from the beginning;
     * an empty or absent token in a response means there are no more results. Do not parse it. A
     * structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired
     * cursor returns `400` with code `pagination_token_expired` — restart pagination from the
     * beginning.
     */
    pageToken?: string;
    /**
     * Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
     *
     * @default 50
     */
    maxResults?: number;
    /**
     * Customer (tenant) ID for the request. This is separate from authentication: you still pass
     * your personal or service account API token in the `Authorization` header (`Bearer <token>`).
     * See [Get Started](https://developer.doit.com/docs/start).
     *
     * **When to omit (most callers):** If your personal or service account token belongs to a
     * single customer, omit this header. The API resolves that customer from the token.
     *
     * **When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to
     * the customer ID you want to act on. A service account can select an active direct or nested
     * descendant of its home customer; the endpoint's normal permissions, entitlements, and
     * resource-ownership checks still apply. A service-account target outside that customer subtree
     * returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query
     * parameter, which only applies to legacy API keys and is ignored by personal and service
     * account tokens.
     */
    xTenantId?: string;
  };

  export const listGcpBillingAccountsRequestSchema: Schema<ListGcpBillingAccountsRequest> = s.lazySchema(() =>
    s.object<ListGcpBillingAccountsRequest>({
      pageToken: s.optional(s.string()),
      maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 50),
      xTenantId: s.optional(s.string()),
    }),
  );

  export class ListGcpBillingAccountsError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListGcpBillingAccountsError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type ListGcpBillingAccountsSettingsRequest = {
    /**
     * Opaque cursor token returned by a previous list response. Omit to start from the beginning;
     * an empty or absent token in a response means there are no more results. Do not parse it. A
     * structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired
     * cursor returns `400` with code `pagination_token_expired` — restart pagination from the
     * beginning.
     */
    pageToken?: string;
    /**
     * Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
     *
     * @default 50
     */
    maxResults?: number;
    /**
     * Customer (tenant) ID for the request. This is separate from authentication: you still pass
     * your personal or service account API token in the `Authorization` header (`Bearer <token>`).
     * See [Get Started](https://developer.doit.com/docs/start).
     *
     * **When to omit (most callers):** If your personal or service account token belongs to a
     * single customer, omit this header. The API resolves that customer from the token.
     *
     * **When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to
     * the customer ID you want to act on. A service account can select an active direct or nested
     * descendant of its home customer; the endpoint's normal permissions, entitlements, and
     * resource-ownership checks still apply. A service-account target outside that customer subtree
     * returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query
     * parameter, which only applies to legacy API keys and is ignored by personal and service
     * account tokens.
     */
    xTenantId?: string;
  };

  export const listGcpBillingAccountsSettingsRequestSchema: Schema<ListGcpBillingAccountsSettingsRequest> =
    s.lazySchema(() =>
      s.object<ListGcpBillingAccountsSettingsRequest>({
        pageToken: s.optional(s.string()),
        maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 50),
        xTenantId: s.optional(s.string()),
      }),
    );

  export class ListGcpBillingAccountsSettingsError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListGcpBillingAccountsSettingsError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type ListGcpPlannedPurchasesRequest = {
    /**
     * GCP Billing Account ID (format `XXXXXX-XXXXXX-XXXXXX`; the account that owns the CUDs) that
     * scopes the request.
     */
    billingAccountId: string;
    /**
     * Filter by PerfectScale for Commitments GCP product line. Omit to return all product lines.
     * Matching is case-insensitive; the value is lowercased before validation.
     */
    gcpService?: GcpService;
    /**
     * Filter by region scope, in `lower_snake_case` wire form (for example `us_east1`), or the
     * literal `global`. Requires `gcp_service`; a request with `region` but no `gcp_service`
     * returns `400` with code `gcp_service_required`. When both are omitted, all available regions
     * for all available product lines are returned.
     *
     * The value is format-validated, not checked against a closed region list: `compute` accepts
     * only `global`, `cloud_sql` accepts only concrete regions (never `global`), and a value that
     * is malformed or incompatible with `gcp_service` returns `400` with code `validation_failed`.
     * A well-formed, service-compatible region with no data returns `200` with an empty result.
     * Matching is case-insensitive; the value is lowercased before validation.
     */
    region?: string;
    /**
     * Opaque cursor token returned by a previous list response. Omit to start from the beginning;
     * an empty or absent token in a response means there are no more results. Do not parse it. A
     * structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired
     * cursor returns `400` with code `pagination_token_expired` — restart pagination from the
     * beginning.
     */
    pageToken?: string;
    /**
     * Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
     *
     * @default 50
     */
    maxResults?: number;
    /**
     * Customer (tenant) ID for the request. This is separate from authentication: you still pass
     * your personal or service account API token in the `Authorization` header (`Bearer <token>`).
     * See [Get Started](https://developer.doit.com/docs/start).
     *
     * **When to omit (most callers):** If your personal or service account token belongs to a
     * single customer, omit this header. The API resolves that customer from the token.
     *
     * **When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to
     * the customer ID you want to act on. A service account can select an active direct or nested
     * descendant of its home customer; the endpoint's normal permissions, entitlements, and
     * resource-ownership checks still apply. A service-account target outside that customer subtree
     * returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query
     * parameter, which only applies to legacy API keys and is ignored by personal and service
     * account tokens.
     */
    xTenantId?: string;
  };

  export const listGcpPlannedPurchasesRequestSchema: Schema<ListGcpPlannedPurchasesRequest> = s.lazySchema(
    () =>
      s.object<ListGcpPlannedPurchasesRequest>({
        billingAccountId: s.string().check(s.pattern("^[A-Z0-9]{6}-[A-Z0-9]{6}-[A-Z0-9]{6}$")),
        gcpService: s.optional(s.lazy(() => gcpServiceSchema)),
        region: s.optional(s.string().check(s.pattern("^(global|[a-z]+(_[a-z0-9]+)+)$"))),
        pageToken: s.optional(s.string()),
        maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 50),
        xTenantId: s.optional(s.string()),
      }),
  );

  export class ListGcpPlannedPurchasesError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListGcpPlannedPurchasesError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type ListGcpRecommendationsRequest = {
    /**
     * GCP Billing Account ID (format `XXXXXX-XXXXXX-XXXXXX`; the account that owns the CUDs) that
     * scopes the request.
     */
    billingAccountId: string;
    /**
     * Filter by PerfectScale for Commitments GCP product line. Omit to return all product lines.
     * Matching is case-insensitive; the value is lowercased before validation.
     */
    gcpService?: GcpService;
    /**
     * Filter by region scope, in `lower_snake_case` wire form (for example `us_east1`), or the
     * literal `global`. Requires `gcp_service`; a request with `region` but no `gcp_service`
     * returns `400` with code `gcp_service_required`. When both are omitted, all available regions
     * for all available product lines are returned.
     *
     * The value is format-validated, not checked against a closed region list: `compute` accepts
     * only `global`, `cloud_sql` accepts only concrete regions (never `global`), and a value that
     * is malformed or incompatible with `gcp_service` returns `400` with code `validation_failed`.
     * A well-formed, service-compatible region with no data returns `200` with an empty result.
     * Matching is case-insensitive; the value is lowercased before validation.
     */
    region?: string;
    /**
     * Customer (tenant) ID for the request. This is separate from authentication: you still pass
     * your personal or service account API token in the `Authorization` header (`Bearer <token>`).
     * See [Get Started](https://developer.doit.com/docs/start).
     *
     * **When to omit (most callers):** If your personal or service account token belongs to a
     * single customer, omit this header. The API resolves that customer from the token.
     *
     * **When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to
     * the customer ID you want to act on. A service account can select an active direct or nested
     * descendant of its home customer; the endpoint's normal permissions, entitlements, and
     * resource-ownership checks still apply. A service-account target outside that customer subtree
     * returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query
     * parameter, which only applies to legacy API keys and is ignored by personal and service
     * account tokens.
     */
    xTenantId?: string;
  };

  export const listGcpRecommendationsRequestSchema: Schema<ListGcpRecommendationsRequest> = s.lazySchema(() =>
    s.object<ListGcpRecommendationsRequest>({
      billingAccountId: s.string().check(s.pattern("^[A-Z0-9]{6}-[A-Z0-9]{6}-[A-Z0-9]{6}$")),
      gcpService: s.optional(s.lazy(() => gcpServiceSchema)),
      region: s.optional(s.string().check(s.pattern("^(global|[a-z]+(_[a-z0-9]+)+)$"))),
      xTenantId: s.optional(s.string()),
    }),
  );

  export class ListGcpRecommendationsError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListGcpRecommendationsError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type ListGcpResourceCudsRequest = {
    /**
     * GCP Billing Account ID (format `XXXXXX-XXXXXX-XXXXXX`; the account that owns the CUDs) that
     * scopes the request.
     */
    billingAccountId: string;
    /** Filter by CUD state. Omit to include all states. */
    status?: Status2DoiTPerfectScaleForCommitmentsGcpApi;
    /**
     * Opaque cursor token returned by a previous list response. Omit to start from the beginning;
     * an empty or absent token in a response means there are no more results. Do not parse it. A
     * structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired
     * cursor returns `400` with code `pagination_token_expired` — restart pagination from the
     * beginning.
     */
    pageToken?: string;
    /**
     * Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
     *
     * @default 50
     */
    maxResults?: number;
    /**
     * Customer (tenant) ID for the request. This is separate from authentication: you still pass
     * your personal or service account API token in the `Authorization` header (`Bearer <token>`).
     * See [Get Started](https://developer.doit.com/docs/start).
     *
     * **When to omit (most callers):** If your personal or service account token belongs to a
     * single customer, omit this header. The API resolves that customer from the token.
     *
     * **When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to
     * the customer ID you want to act on. A service account can select an active direct or nested
     * descendant of its home customer; the endpoint's normal permissions, entitlements, and
     * resource-ownership checks still apply. A service-account target outside that customer subtree
     * returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query
     * parameter, which only applies to legacy API keys and is ignored by personal and service
     * account tokens.
     */
    xTenantId?: string;
  };

  export const listGcpResourceCudsRequestSchema: Schema<ListGcpResourceCudsRequest> = s.lazySchema(() =>
    s.object<ListGcpResourceCudsRequest>({
      billingAccountId: s.string().check(s.pattern("^[A-Z0-9]{6}-[A-Z0-9]{6}-[A-Z0-9]{6}$")),
      status: s.optional(s.lazy(() => status2DoiTPerfectScaleForCommitmentsGcpApiSchema)),
      pageToken: s.optional(s.string()),
      maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 50),
      xTenantId: s.optional(s.string()),
    }),
  );

  export class ListGcpResourceCudsError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListGcpResourceCudsError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type ListGcpSpendCudsRequest = {
    /**
     * GCP Billing Account ID (format `XXXXXX-XXXXXX-XXXXXX`; the account that owns the CUDs) that
     * scopes the request.
     */
    billingAccountId: string;
    /** Filter by CUD state. Omit to include all states. */
    status?: Status2DoiTPerfectScaleForCommitmentsGcpApi;
    /**
     * Filter by PerfectScale for Commitments GCP product line. Omit to return all product lines.
     * Matching is case-insensitive; the value is lowercased before validation.
     */
    gcpService?: GcpService;
    /**
     * Filter by region scope, in `lower_snake_case` wire form (for example `us_east1`), or the
     * literal `global`. Requires `gcp_service`; a request with `region` but no `gcp_service`
     * returns `400` with code `gcp_service_required`. When both are omitted, all available regions
     * for all available product lines are returned.
     *
     * The value is format-validated, not checked against a closed region list: `compute` accepts
     * only `global`, `cloud_sql` accepts only concrete regions (never `global`), and a value that
     * is malformed or incompatible with `gcp_service` returns `400` with code `validation_failed`.
     * A well-formed, service-compatible region with no data returns `200` with an empty result.
     * Matching is case-insensitive; the value is lowercased before validation.
     */
    region?: string;
    /**
     * Opaque cursor token returned by a previous list response. Omit to start from the beginning;
     * an empty or absent token in a response means there are no more results. Do not parse it. A
     * structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired
     * cursor returns `400` with code `pagination_token_expired` — restart pagination from the
     * beginning.
     */
    pageToken?: string;
    /**
     * Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
     *
     * @default 50
     */
    maxResults?: number;
    /**
     * Customer (tenant) ID for the request. This is separate from authentication: you still pass
     * your personal or service account API token in the `Authorization` header (`Bearer <token>`).
     * See [Get Started](https://developer.doit.com/docs/start).
     *
     * **When to omit (most callers):** If your personal or service account token belongs to a
     * single customer, omit this header. The API resolves that customer from the token.
     *
     * **When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to
     * the customer ID you want to act on. A service account can select an active direct or nested
     * descendant of its home customer; the endpoint's normal permissions, entitlements, and
     * resource-ownership checks still apply. A service-account target outside that customer subtree
     * returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query
     * parameter, which only applies to legacy API keys and is ignored by personal and service
     * account tokens.
     */
    xTenantId?: string;
  };

  export const listGcpSpendCudsRequestSchema: Schema<ListGcpSpendCudsRequest> = s.lazySchema(() =>
    s.object<ListGcpSpendCudsRequest>({
      billingAccountId: s.string().check(s.pattern("^[A-Z0-9]{6}-[A-Z0-9]{6}-[A-Z0-9]{6}$")),
      status: s.optional(s.lazy(() => status2DoiTPerfectScaleForCommitmentsGcpApiSchema)),
      gcpService: s.optional(s.lazy(() => gcpServiceSchema)),
      region: s.optional(s.string().check(s.pattern("^(global|[a-z]+(_[a-z0-9]+)+)$"))),
      pageToken: s.optional(s.string()),
      maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 50),
      xTenantId: s.optional(s.string()),
    }),
  );

  export class ListGcpSpendCudsError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListGcpSpendCudsError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }
}
