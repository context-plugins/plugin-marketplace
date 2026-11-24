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
  awsMemberAccountDetailInternalSchema,
  type AwsMemberAccountDetail,
} from "../models/aws-member-account-detail.js";
import {
  awsOrganizationDetailInternalSchema,
  type AwsOrganizationDetail,
} from "../models/aws-organization-detail.js";
import {
  awsRecommendationWithEligibleSpendInternalSchema,
  type AwsRecommendationWithEligibleSpend,
} from "../models/aws-recommendation-with-eligible-spend.js";
import { awsRecommendationsInternalSchema, type AwsRecommendations } from "../models/aws-recommendations.js";
import { Granularity, granularitySchema } from "../models/granularity.js";
import { offeringClass1Schema, type OfferingClass1 } from "../models/offering-class1.js";
import { problemDetailsInternalSchema, type ProblemDetails } from "../models/problem-details.js";
import {
  ps4CommitmentsV1AwsOrganizationsMemberAccountsResponseInternalSchema,
  type Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse,
} from "../models/ps4-commitments-v1-aws-organizations-member-accounts-response.js";
import {
  ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponseInternalSchema,
  type Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse,
} from "../models/ps4-commitments-v1-aws-organizations-planned-purchases-response.js";
import {
  ps4CommitmentsV1AwsOrganizationsReservedInstancesResponseInternalSchema,
  type Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse,
} from "../models/ps4-commitments-v1-aws-organizations-reserved-instances-response.js";
import {
  ps4CommitmentsV1AwsOrganizationsResponseInternalSchema,
  type Ps4CommitmentsV1AwsOrganizationsResponse,
} from "../models/ps4-commitments-v1-aws-organizations-response.js";
import {
  ps4CommitmentsV1AwsOrganizationsSavingsPlansResponseInternalSchema,
  type Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse,
} from "../models/ps4-commitments-v1-aws-organizations-savings-plans-response.js";
import {
  ps4CommitmentsV1AwsSettingsResponseInternalSchema,
  type Ps4CommitmentsV1AwsSettingsResponse,
} from "../models/ps4-commitments-v1-aws-settings-response.js";
import { serviceIdSchema, type ServiceId } from "../models/service-id.js";
import { service2Schema, type Service2 } from "../models/service2.js";
import { status2Schema, type Status2 } from "../models/status2.js";
import { status3Schema, type Status3 } from "../models/status3.js";
import {
  typeDoiTPerfectScaleForCommitmentsAwsApiSchema,
  type TypeDoiTPerfectScaleForCommitmentsAwsApi,
} from "../models/type-doi-tperfect-scale-for-commitments-aws-api.js";
import type { Servers } from "../servers.js";

/**
 * Evaluate current AWS commitments, plan and automate purchases, and optimize cloud costs with
 * PerfectScale for Commitments.
 */
export class PerfectScaleForCommitmentsAws {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a member account
   *
   * @remarks
   * Returns a single member AWS account with the same list-item fields as List member accounts,
   * plus the Overview time series. Use this when you need a single members Console Overview in one
   * call (identity and onboarding status, 30-day ESR and savings, YTD/lifetime totals, monthly
   * potential savings, and the data behind Cost Summary and Commitment Coverage charts) without
   * fetching every member account.
   *
   * Fields that drive the Overview tab in the DoiT console:
   * - `stats30d`: last 30 days ESR and realized savings per SP type (ESR and Savings cards).
   * - `monthlyStats`: last 6 calendar months of ESR, on-demand cost, and cost with savings per SP
   *   type (Cost Summary chart, and month-over-month card trends).
   * - `dailyCoverage`: last 30 days of commitment coverage breakdown per SP type (Commitment
   *   Coverage chart).
   * - `savingsTotals`: year-to-date and lifetime realized savings per SP type (shown under the
   *   Savings card). Lifetime is bounded by the parent organization's PerfectScale for Commitments
   *   onboarding start.
   * - `monthlyPotentialSavings`: estimated monthly additional savings per SP type from the latest
   *   purchase projection.
   *
   * @returns Single AWS member account details (same list-item fields as provided for the
   * organization through list member accounts operation) and overview time series: 6 months stats
   * and 30 days of commitment coverage.
   *
   * @throws {@link PerfectScaleForCommitmentsAws.GetAwsMemberAccountError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAwsMemberAccount(
    request: PerfectScaleForCommitmentsAws.GetAwsMemberAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<AwsMemberAccountDetail, PerfectScaleForCommitmentsAws.GetAwsMemberAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/ps4commitments/v1/aws/organizations/{managementAccountId}/member-accounts/{memberAccountId}",
        ),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "managementAccountId", value: request.managementAccountId, schema: s.string() },
          { name: "memberAccountId", value: request.memberAccountId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: awsMemberAccountDetailInternalSchema },
        errorFactory: PerfectScaleForCommitmentsAws.GetAwsMemberAccountError,
      },
      options,
    );
  }

  /**
   * Get an AWS organization
   *
   * @remarks
   * Returns a single AWS organization with the same list-item fields as List AWS Organizations,
   * plus the Overview time series. Use this when you need a single organization's Console Overview
   * in one call (identity and onboarding status, 30-day ESR and savings, YTD/lifetime totals,
   * monthly potential savings, and the data behind Cost Summary and Commitment Coverage charts)
   * without fetching every organization.
   *
   * Fields that drive the Overview tab in the DoiT console:
   * - `stats30d`: last 30 days ESR and realized savings per SP type (ESR and Savings cards).
   * - `monthlyStats`: last 6 calendar months of ESR, on-demand cost, and cost with savings per SP
   *   type (Cost Summary chart, and month-over-month card trends).
   * - `dailyCoverage`: last 30 days of commitment coverage breakdown per SP type (Commitment
   *   Coverage chart).
   * - `savingsTotals`: year-to-date and lifetime realized savings per SP type (shown under the
   *   Savings card). Lifetime is bounded by PerfectScale for Commitments onboarding start.
   * - `monthlyPotentialSavings`: estimated monthly additional savings per SP type from the latest
   *   purchase projection.
   *
   * @returns Single AWS organization details (same list-item fields as provided for the
   * organization through list AWS organization operation) and overview time series: 6 months stats
   * and 30 days of commitment coverage.
   *
   * @throws {@link PerfectScaleForCommitmentsAws.GetAwsOrganizationError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAwsOrganization(
    request: PerfectScaleForCommitmentsAws.GetAwsOrganizationRequest,
    options?: RequestOptions,
  ): ApiPromise<AwsOrganizationDetail, PerfectScaleForCommitmentsAws.GetAwsOrganizationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ps4commitments/v1/aws/organizations/{managementAccountId}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "managementAccountId", value: request.managementAccountId, schema: s.string() }],
        query: [],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: awsOrganizationDetailInternalSchema },
        errorFactory: PerfectScaleForCommitmentsAws.GetAwsOrganizationError,
      },
      options,
    );
  }

  /**
   * Get an AWS recommendation
   *
   * @remarks
   * Returns the recommendation for one commitment type (`serviceId`) on the AWS organization,
   * including analysis metrics and time-bucketed eligible spend. Use `granularity` to choose the
   * eligible-spend bucket size (defaults to `day`).
   *
   * @returns Commitment type recommendation together with the eligible-spend time series used for
   * analysis and charting.
   *
   * @throws {@link PerfectScaleForCommitmentsAws.GetAwsRecommendationError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAwsRecommendation(
    request: PerfectScaleForCommitmentsAws.GetAwsRecommendationRequest,
    options?: RequestOptions,
  ): ApiPromise<AwsRecommendationWithEligibleSpend, PerfectScaleForCommitmentsAws.GetAwsRecommendationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/ps4commitments/v1/aws/organizations/{managementAccountId}/recommendations/{serviceId}",
        ),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "managementAccountId", value: request.managementAccountId, schema: s.string() },
          { name: "serviceId", value: request.serviceId, schema: serviceIdSchema },
        ],
        query: [
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
        success: { kind: "json", schema: awsRecommendationWithEligibleSpendInternalSchema },
        errorFactory: PerfectScaleForCommitmentsAws.GetAwsRecommendationError,
      },
      options,
    );
  }

  /**
   * List member accounts under an AWS organization
   *
   * @remarks
   * Returns all member AWS accounts under the specified AWS organization that have active or
   * historical commitment coverage. Includes 30-day statistics and estimated monthly potential
   * savings (`monthlyPotentialSavings`) per Savings Plan (SP) type.
   *
   * @returns List of member accounts.
   *
   * @throws {@link PerfectScaleForCommitmentsAws.ListAwsMemberAccountsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAwsMemberAccounts(
    request: PerfectScaleForCommitmentsAws.ListAwsMemberAccountsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse,
    PerfectScaleForCommitmentsAws.ListAwsMemberAccountsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/ps4commitments/v1/aws/organizations/{managementAccountId}/member-accounts",
        ),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "managementAccountId", value: request.managementAccountId, schema: s.string() }],
        query: [
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: ps4CommitmentsV1AwsOrganizationsMemberAccountsResponseInternalSchema,
        },
        errorFactory: PerfectScaleForCommitmentsAws.ListAwsMemberAccountsError,
      },
      options,
    );
  }

  /**
   * List AWS organizations
   *
   * @remarks
   * Returns all AWS organizations (accounts) accessible to the authenticated tenant. Use as the
   * entry point to discover AWS organization account IDs, and organization-level onboarding status
   * of the available commitment types and savings metrics.
   *
   * Each item includes metadata, trailing 30-day aggregate statistics, precomputed YTD/lifetime
   * savings totals per Savings Plan (SP) type, and estimated monthly potential savings
   * (`monthlyPotentialSavings`) per SP type from the latest projection. Sum across items for
   * customer-level totals.
   *
   * @returns List of AWS Organizations. One item per AWS organization.
   *
   * @throws {@link PerfectScaleForCommitmentsAws.ListAwsOrganizationsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAwsOrganizations(
    request: PerfectScaleForCommitmentsAws.ListAwsOrganizationsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    Ps4CommitmentsV1AwsOrganizationsResponse,
    PerfectScaleForCommitmentsAws.ListAwsOrganizationsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ps4commitments/v1/aws/organizations"),
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
        success: { kind: "json", schema: ps4CommitmentsV1AwsOrganizationsResponseInternalSchema },
        errorFactory: PerfectScaleForCommitmentsAws.ListAwsOrganizationsError,
      },
      options,
    );
  }

  /**
   * List account and commitment settings per AWS organization
   *
   * @remarks
   * Returns one item per onboarded AWS organization. Each item includes that AWS organization's
   * commitments purchasing account (`purchaseAccountId`) and commitment settings for each
   * commitment type activated on that AWS organization (`compute`, `database`).
   *
   * Commitment settings cover recommendation and automation preferences (policy, term, payment
   * option, automation mode, commitment limits, and related fields). They are stored independently
   * for each AWS organization and commitment type. Each item includes that organization's
   * `purchaseAccountId` and activated commitment types.
   *
   * In the DoiT Console, commitment settings are edited on an account's Settings tab and apply only
   * to that AWS organization and commitment type; the purchasing account is set per AWS
   * organization on Accounts Settings.
   *
   * @returns Settings payload for one onboarded AWS organization, with that AWS organization's
   * purchasing account (`purchaseAccountId`) and organization-specific commitment settings for each
   * activated commitment type (`services[].settings`).
   *
   * @throws {@link PerfectScaleForCommitmentsAws.ListAwsOrganizationsSettingsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAwsOrganizationsSettings(
    request: PerfectScaleForCommitmentsAws.ListAwsOrganizationsSettingsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    Ps4CommitmentsV1AwsSettingsResponse,
    PerfectScaleForCommitmentsAws.ListAwsOrganizationsSettingsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ps4commitments/v1/aws/settings"),
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
        success: { kind: "json", schema: ps4CommitmentsV1AwsSettingsResponseInternalSchema },
        errorFactory: PerfectScaleForCommitmentsAws.ListAwsOrganizationsSettingsError,
      },
      options,
    );
  }

  /**
   * List AWS planned purchases
   *
   * @remarks
   * Returns planned purchases (laddering projections) for the AWS organization. One item per
   * commitment type that has a projection available (typically `compute` and/or `database`; up to
   * four commitment types as PerfectScale for Commitments expands).
   *
   * With no filters, returns all available planned-purchase items for the AWS organization in
   * stable commitment-type order (`compute`, then `database`, then any future commitment types in
   * enum order). When a filtered commitment type has no planned purchases, the response is an empty
   * `items` array (not `404`). Partial items return only the fields available at response time.
   *
   * `404` is returned only when the AWS organization does not exist or the caller cannot access it.
   * An AWS organization that is not onboarded for PerfectScale for Commitments still returns `200`
   * with an empty `items` array when no planned purchases exist — use `GET
   * /ps4commitments/v1/aws/organizations` (or get-by-id) for `onboardingStatus`.
   *
   * **Pagination**: results are returned in stable commitment-type order (`compute`, then
   * `database`, then any future commitment types in enum order). Use `maxResults` to limit page
   * size (default 50, max 500). When more items remain, the response includes a non-null
   * `pageToken`; pass it unchanged on the next request with the same query parameters (`service`,
   * `maxResults`). `rowCount` is the number of items in this page. An invalid `pageToken` returns
   * `400` with code `pagination_token_invalid`; an expired token returns `400` with code
   * `pagination_token_expired`.
   *
   * @returns Paginated list of planned purchase projections.
   *
   * @throws {@link PerfectScaleForCommitmentsAws.ListAwsPlannedPurchasesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAwsPlannedPurchases(
    request: PerfectScaleForCommitmentsAws.ListAwsPlannedPurchasesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse,
    PerfectScaleForCommitmentsAws.ListAwsPlannedPurchasesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/ps4commitments/v1/aws/organizations/{managementAccountId}/planned-purchases",
        ),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "managementAccountId", value: request.managementAccountId, schema: s.string() }],
        query: [
          { name: "service", value: request.service, schema: s.optional(s.lazy(() => service2Schema)) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponseInternalSchema,
        },
        errorFactory: PerfectScaleForCommitmentsAws.ListAwsPlannedPurchasesError,
      },
      options,
    );
  }

  /**
   * List AWS recommendations
   *
   * @remarks
   * Returns commitment purchase recommendations for the AWS organization, keyed by commitment type
   * (`compute`, `database`). A commitment type is present only when it is onboarded and a
   * recommendation is available.
   *
   * @returns List with recommendations for each onboarded commitment type. A commitment type
   * property is present only when that commitment type is onboarded and a recommendation is
   * available.
   *
   * @throws {@link PerfectScaleForCommitmentsAws.ListAwsRecommendationsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAwsRecommendations(
    request: PerfectScaleForCommitmentsAws.ListAwsRecommendationsRequest,
    options?: RequestOptions,
  ): ApiPromise<AwsRecommendations, PerfectScaleForCommitmentsAws.ListAwsRecommendationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/ps4commitments/v1/aws/organizations/{managementAccountId}/recommendations",
        ),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "managementAccountId", value: request.managementAccountId, schema: s.string() }],
        query: [],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: awsRecommendationsInternalSchema },
        errorFactory: PerfectScaleForCommitmentsAws.ListAwsRecommendationsError,
      },
      options,
    );
  }

  /**
   * List AWS Reserved Instances
   *
   * @remarks
   * Returns a paginated list of Reserved Instances (RIs) for the specified AWS organization.
   * Optionally filter by state, instance type, instance family, region, and offering class. Omit
   * filters to return all RIs for the AWS organization.
   *
   * @returns Paginated list of Reserved Instances.
   *
   * @throws {@link PerfectScaleForCommitmentsAws.ListAwsReservedInstancesError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAwsReservedInstances(
    request: PerfectScaleForCommitmentsAws.ListAwsReservedInstancesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse,
    PerfectScaleForCommitmentsAws.ListAwsReservedInstancesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/ps4commitments/v1/aws/organizations/{managementAccountId}/reserved-instances",
        ),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "managementAccountId", value: request.managementAccountId, schema: s.string() }],
        query: [
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status3Schema)) },
          { name: "instanceType", value: request.instanceType, schema: s.optional(s.string()) },
          { name: "instanceFamily", value: request.instanceFamily, schema: s.optional(s.string()) },
          { name: "region", value: request.region, schema: s.optional(s.string()) },
          {
            name: "offeringClass",
            value: request.offeringClass,
            schema: s.optional(s.lazy(() => offeringClass1Schema)),
          },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: ps4CommitmentsV1AwsOrganizationsReservedInstancesResponseInternalSchema,
        },
        errorFactory: PerfectScaleForCommitmentsAws.ListAwsReservedInstancesError,
      },
      options,
    );
  }

  /**
   * List AWS Savings Plans
   *
   * @remarks
   * Returns a paginated list of Savings Plans for the specified AWS organization. Optionally filter
   * by plan type (`type`) and state (`status`). Omit both filters to return all plans for the AWS
   * organization.
   *
   * @returns Paginated list of Savings Plans.
   *
   * @throws {@link PerfectScaleForCommitmentsAws.ListAwsSavingsPlansError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAwsSavingsPlans(
    request: PerfectScaleForCommitmentsAws.ListAwsSavingsPlansRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse,
    PerfectScaleForCommitmentsAws.ListAwsSavingsPlansError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/ps4commitments/v1/aws/organizations/{managementAccountId}/savings-plans",
        ),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "managementAccountId", value: request.managementAccountId, schema: s.string() }],
        query: [
          {
            name: "type",
            value: request.type,
            schema: s.optional(s.lazy(() => typeDoiTPerfectScaleForCommitmentsAwsApiSchema)),
          },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status2Schema)) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ps4CommitmentsV1AwsOrganizationsSavingsPlansResponseInternalSchema },
        errorFactory: PerfectScaleForCommitmentsAws.ListAwsSavingsPlansError,
      },
      options,
    );
  }
}

export namespace PerfectScaleForCommitmentsAws {
  export type GetAwsMemberAccountRequest = {
    /**
     * 12-digit AWS management (payer) account ID (the account that owns the AWS Organization) that
     * scopes the request.
     */
    managementAccountId: string;
    /** AWS member account ID (12-digit AWS account number). */
    memberAccountId: string;
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

  export const getAwsMemberAccountRequestSchema: Schema<GetAwsMemberAccountRequest> = s.lazySchema(() =>
    s.object<GetAwsMemberAccountRequest>({
      managementAccountId: s.string().check(s.pattern("^\\d{12}$")),
      memberAccountId: s.string().check(s.pattern("^\\d{12}$")),
      xTenantId: s.optional(s.string()),
    }),
  );

  export class GetAwsMemberAccountError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAwsMemberAccountError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type GetAwsOrganizationRequest = {
    /**
     * 12-digit AWS management (payer) account ID (the account that owns the AWS Organization) that
     * scopes the request.
     */
    managementAccountId: string;
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

  export const getAwsOrganizationRequestSchema: Schema<GetAwsOrganizationRequest> = s.lazySchema(() =>
    s.object<GetAwsOrganizationRequest>({
      managementAccountId: s.string().check(s.pattern("^\\d{12}$")),
      xTenantId: s.optional(s.string()),
    }),
  );

  export class GetAwsOrganizationError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAwsOrganizationError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type GetAwsRecommendationRequest = {
    /**
     * 12-digit AWS management (payer) account ID (the account that owns the AWS Organization) that
     * scopes the request.
     */
    managementAccountId: string;
    /**
     * Commitment type whose recommendation to retrieve. Must be an onboarded commitment type for
     * the AWS organization (`compute` or `database`).
     */
    serviceId: ServiceId;
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

  export const getAwsRecommendationRequestSchema: Schema<GetAwsRecommendationRequest> = s.lazySchema(() =>
    s.object<GetAwsRecommendationRequest>({
      managementAccountId: s.string().check(s.pattern("^\\d{12}$")),
      serviceId: serviceIdSchema,
      granularity: s.defaulted(granularitySchema, Granularity.Day),
      xTenantId: s.optional(s.string()),
    }),
  );

  export class GetAwsRecommendationError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAwsRecommendationError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type ListAwsMemberAccountsRequest = {
    /**
     * 12-digit AWS management (payer) account ID (the account that owns the AWS Organization) that
     * scopes the request.
     */
    managementAccountId: string;
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

  export const listAwsMemberAccountsRequestSchema: Schema<ListAwsMemberAccountsRequest> = s.lazySchema(() =>
    s.object<ListAwsMemberAccountsRequest>({
      managementAccountId: s.string().check(s.pattern("^\\d{12}$")),
      pageToken: s.optional(s.string()),
      maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 50),
      xTenantId: s.optional(s.string()),
    }),
  );

  export class ListAwsMemberAccountsError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAwsMemberAccountsError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type ListAwsOrganizationsRequest = {
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

  export const listAwsOrganizationsRequestSchema: Schema<ListAwsOrganizationsRequest> = s.lazySchema(() =>
    s.object<ListAwsOrganizationsRequest>({
      pageToken: s.optional(s.string()),
      maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 50),
      xTenantId: s.optional(s.string()),
    }),
  );

  export class ListAwsOrganizationsError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAwsOrganizationsError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type ListAwsOrganizationsSettingsRequest = {
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

  export const listAwsOrganizationsSettingsRequestSchema: Schema<ListAwsOrganizationsSettingsRequest> =
    s.lazySchema(() =>
      s.object<ListAwsOrganizationsSettingsRequest>({
        pageToken: s.optional(s.string()),
        maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 50),
        xTenantId: s.optional(s.string()),
      }),
    );

  export class ListAwsOrganizationsSettingsError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAwsOrganizationsSettingsError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type ListAwsPlannedPurchasesRequest = {
    /**
     * 12-digit AWS management (payer) account ID (the account that owns the AWS Organization) that
     * scopes the request.
     */
    managementAccountId: string;
    /**
     * Filter planned purchases by PerfectScale for Commitments commitment type. Omit to return all
     * commitment types that have planned purchases for the AWS organization.
     */
    service?: Service2;
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

  export const listAwsPlannedPurchasesRequestSchema: Schema<ListAwsPlannedPurchasesRequest> = s.lazySchema(
    () =>
      s.object<ListAwsPlannedPurchasesRequest>({
        managementAccountId: s.string().check(s.pattern("^\\d{12}$")),
        service: s.optional(s.lazy(() => service2Schema)),
        pageToken: s.optional(s.string()),
        maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 50),
        xTenantId: s.optional(s.string()),
      }),
  );

  export class ListAwsPlannedPurchasesError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAwsPlannedPurchasesError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type ListAwsRecommendationsRequest = {
    /**
     * 12-digit AWS management (payer) account ID (the account that owns the AWS Organization) that
     * scopes the request.
     */
    managementAccountId: string;
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

  export const listAwsRecommendationsRequestSchema: Schema<ListAwsRecommendationsRequest> = s.lazySchema(() =>
    s.object<ListAwsRecommendationsRequest>({
      managementAccountId: s.string().check(s.pattern("^\\d{12}$")),
      xTenantId: s.optional(s.string()),
    }),
  );

  export class ListAwsRecommendationsError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAwsRecommendationsError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type ListAwsReservedInstancesRequest = {
    /**
     * 12-digit AWS management (payer) account ID (the account that owns the AWS Organization) that
     * scopes the request.
     */
    managementAccountId: string;
    /** Filter by Reserved Instance lifecycle state. Omit to include all states. */
    status?: Status3;
    /**
     * Filter by exact EC2 instance type (for example, `m5.large`). Case-sensitive. Must match the
     * `instanceType` value on the RI exactly.
     */
    instanceType?: string;
    /**
     * Filter by EC2 instance family, the leading segment of `instanceType` before the dot (for
     * example, `m5` matches `m5.large` and `m5.xlarge`). Case-sensitive.
     */
    instanceFamily?: string;
    /**
     * Filter by AWS region (for example, `us-east-1`). Case-sensitive. Must match the region stored
     * on the RI.
     */
    region?: string;
    /** Filter by RI offering class. Omit to include both standard and convertible. */
    offeringClass?: OfferingClass1;
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

  export const listAwsReservedInstancesRequestSchema: Schema<ListAwsReservedInstancesRequest> = s.lazySchema(
    () =>
      s.object<ListAwsReservedInstancesRequest>({
        managementAccountId: s.string().check(s.pattern("^\\d{12}$")),
        status: s.optional(s.lazy(() => status3Schema)),
        instanceType: s.optional(s.string()),
        instanceFamily: s.optional(s.string()),
        region: s.optional(s.string()),
        offeringClass: s.optional(s.lazy(() => offeringClass1Schema)),
        pageToken: s.optional(s.string()),
        maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 50),
        xTenantId: s.optional(s.string()),
      }),
  );

  export class ListAwsReservedInstancesError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAwsReservedInstancesError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type ListAwsSavingsPlansRequest = {
    /**
     * 12-digit AWS management (payer) account ID (the account that owns the AWS Organization) that
     * scopes the request.
     */
    managementAccountId: string;
    /** Filter by Savings Plan type. Omit to include all types. */
    type?: TypeDoiTPerfectScaleForCommitmentsAwsApi;
    /** Filter by Savings Plan lifecycle state. Omit to include all states. */
    status?: Status2;
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

  export const listAwsSavingsPlansRequestSchema: Schema<ListAwsSavingsPlansRequest> = s.lazySchema(() =>
    s.object<ListAwsSavingsPlansRequest>({
      managementAccountId: s.string().check(s.pattern("^\\d{12}$")),
      type: s.optional(s.lazy(() => typeDoiTPerfectScaleForCommitmentsAwsApiSchema)),
      status: s.optional(s.lazy(() => status2Schema)),
      pageToken: s.optional(s.string()),
      maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 50),
      xTenantId: s.optional(s.string()),
    }),
  );

  export class ListAwsSavingsPlansError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAwsSavingsPlansError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }
}
