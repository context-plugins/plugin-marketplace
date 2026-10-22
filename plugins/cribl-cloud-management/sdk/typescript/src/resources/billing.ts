import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { billingWindowSchema, type BillingWindow } from "../models/billing-window.js";
import {
  contractsUtilizationResponseDtoSchema,
  type ContractsUtilizationResponseDto,
} from "../models/contracts-utilization-response-dto.js";
import {
  creditGrantsResponseDtoSchema,
  type CreditGrantsResponseDto,
} from "../models/credit-grants-response-dto.js";
import {
  creditsStatsResponseDtoSchema,
  type CreditsStatsResponseDto,
} from "../models/credits-stats-response-dto.js";
import {
  creditsTimeseriesResponseDtoSchema,
  type CreditsTimeseriesResponseDto,
} from "../models/credits-timeseries-response-dto.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to Billing and FinOps data
 */
export class Billing {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get contract credit utilization
   *
   * @remarks
   * Get cumulative credit utilization data grouped by contract period for the specified
   * Organization.
   *
   * @returns Contract credit utilization data.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CriblCloudPublicApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  v1BillingGetContractsUtilization(
    request: Billing.V1BillingGetContractsUtilizationRequest,
    options?: RequestOptions,
  ): ApiPromise<ContractsUtilizationResponseDto, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/organizations/{organizationId}/billing/credits/contracts-utilization",
        ),
        auth: anyAuth(this.#auth.clientOauth, this.#auth.bearerAuth),
        pathParams: [{ name: "organizationId", value: request.organizationId, schema: s.string() }],
        query: [
          { name: "startingOn", value: request.startingOn, schema: s.dateTime() },
          { name: "endingBefore", value: request.endingBefore, schema: s.dateTime() },
          { name: "window", value: request.window, schema: billingWindowSchema },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contractsUtilizationResponseDtoSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get credit grants
   *
   * @remarks
   * Get credit grants (purchases, rollovers, and refunds) for the specified Organization.
   *
   * @returns Credit grants for the current contract.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CriblCloudPublicApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  v1BillingGetCreditsGrants(
    request: Billing.V1BillingGetCreditsGrantsRequest,
    options?: RequestOptions,
  ): ApiPromise<CreditGrantsResponseDto, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/organizations/{organizationId}/billing/credits/grants"),
        auth: anyAuth(this.#auth.clientOauth, this.#auth.bearerAuth),
        pathParams: [{ name: "organizationId", value: request.organizationId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: creditGrantsResponseDtoSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get credit balance and consumption
   *
   * @remarks
   * Get credit balance totals, consumption totals, and contract date ranges for the specified
   * Organization.
   *
   * @returns Credit balance and consumption totals.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CriblCloudPublicApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  v1BillingGetCreditsStats(
    request: Billing.V1BillingGetCreditsStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<CreditsStatsResponseDto, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/organizations/{organizationId}/billing/credits/stats"),
        auth: anyAuth(this.#auth.clientOauth, this.#auth.bearerAuth),
        pathParams: [{ name: "organizationId", value: request.organizationId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: creditsStatsResponseDtoSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get credits timeseries
   *
   * @remarks
   * Get credit consumption timeseries data for the specified Organization, broken down by
   * dimensions such as product and usage type.
   *
   * @returns Credits timeseries data.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CriblCloudPublicApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  v1BillingGetCreditsTimeseries(
    request: Billing.V1BillingGetCreditsTimeseriesRequest,
    options?: RequestOptions,
  ): ApiPromise<CreditsTimeseriesResponseDto, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/organizations/{organizationId}/billing/credits/timeseries"),
        auth: anyAuth(this.#auth.clientOauth, this.#auth.bearerAuth),
        pathParams: [{ name: "organizationId", value: request.organizationId, schema: s.string() }],
        query: [
          { name: "startingOn", value: request.startingOn, schema: s.dateTime() },
          { name: "endingBefore", value: request.endingBefore, schema: s.dateTime() },
          { name: "window", value: request.window, schema: billingWindowSchema },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: creditsTimeseriesResponseDtoSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Billing {
  export type V1BillingGetContractsUtilizationRequest = {
    /** The <code>id</code> of the Organization. */
    organizationId: string;
    /**
     * Inclusive start of the query date range in ISO 8601 format. Must be before endingBefore.
     * Minimum range is 1 day. Maximum range depends on window: 6 months for daily, 7 years for
     * monthly.
     */
    startingOn: Date;
    /**
     * Exclusive end of the query date range in ISO 8601 format. Must be after startingOn. Minimum
     * range is 1 day. Maximum range depends on window: 6 months for daily, 7 years for monthly.
     */
    endingBefore: Date;
    /**
     * Aggregation granularity for credit utilization data. Determines the maximum allowed date
     * range: up to 6 months for daily, up to 7 years for monthly.
     */
    window: BillingWindow;
  };

  export type V1BillingGetCreditsGrantsRequest = {
    /** The <code>id</code> of the Organization. */
    organizationId: string;
  };

  export type V1BillingGetCreditsStatsRequest = {
    /** The <code>id</code> of the Organization. */
    organizationId: string;
  };

  export type V1BillingGetCreditsTimeseriesRequest = {
    /** The <code>id</code> of the Organization. */
    organizationId: string;
    /**
     * Inclusive start of the query date range in ISO 8601 format. Must be before endingBefore.
     * Minimum range is 1 day. Maximum range depends on window: 6 months for daily, 7 years for
     * monthly.
     */
    startingOn: Date;
    /**
     * Exclusive end of the query date range in ISO 8601 format. Must be after startingOn. Minimum
     * range is 1 day. Maximum range depends on window: 6 months for daily, 7 years for monthly.
     */
    endingBefore: Date;
    /**
     * Aggregation granularity for timeseries data. Determines the maximum allowed date range: up to
     * 6 months for daily, up to 7 years for monthly.
     */
    window: BillingWindow;
  };
}
