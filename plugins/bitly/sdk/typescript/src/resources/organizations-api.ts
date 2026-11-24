import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { metricsSchema, type Metrics } from "../models/metrics.js";
import { organizationSchema, type Organization } from "../models/organization.js";
import { organizationsSchema, type Organizations } from "../models/organizations.js";
import { planLimitsSchema, type PlanLimits } from "../models/plan-limits.js";
import { TimeUnit, timeUnitSchema } from "../models/time-unit.js";
import type { Servers } from "../servers.js";

/**
 * Organizations are equivalent to a Bitly account. Every plan limit, group, and user is tied to an
 * organization.
 */
export class OrganizationsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve an Organization
   *
   * @remarks
   * Retrive details for the specified organization.
   *
   * @returns SUCCESS
   *
   * @throws {@link OrganizationsApi.GetOrganizationError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrganization(
    request: OrganizationsApi.GetOrganizationRequest,
    options?: RequestOptions,
  ): ApiPromise<Organization, OrganizationsApi.GetOrganizationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/organizations/{organization_guid}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "organization_guid", value: request.organizationGuid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: organizationSchema },
        errorFactory: OrganizationsApi.GetOrganizationError,
      },
      options,
    );
  }

  /**
   * Get Shorten Counts for an Organization
   *
   * @remarks
   * Returns the shorten counts for a specific organization over a specified time period.
   *
   * @returns SUCCESS
   *
   * @throws {@link OrganizationsApi.GetOrganizationShortenCountsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrganizationShortenCounts(
    request: OrganizationsApi.GetOrganizationShortenCountsRequest,
    options?: RequestOptions,
  ): ApiPromise<Metrics, OrganizationsApi.GetOrganizationShortenCountsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/organizations/{organization_guid}/shorten_counts"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "organization_guid", value: request.organizationGuid, schema: s.string() }],
        query: [
          { name: "unit", value: request.unit, schema: s.defaulted(timeUnitSchema, TimeUnit.Day) },
          { name: "units", value: request.units, schema: s.defaulted(s.int(), -1) },
          { name: "unit_reference", value: request.unitReference, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: metricsSchema },
        errorFactory: OrganizationsApi.GetOrganizationShortenCountsError,
      },
      options,
    );
  }

  /**
   * Get Shorten Counts for an Organization by Group
   *
   * @remarks
   * Returns the shorten counts for a specific organization by group for the current month.
   *
   * @returns SUCCESS
   *
   * @throws {@link OrganizationsApi.GetOrganizationShortenCountsByGroupError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrganizationShortenCountsByGroup(
    request: OrganizationsApi.GetOrganizationShortenCountsByGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<Metrics, OrganizationsApi.GetOrganizationShortenCountsByGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/organizations/{organization_guid}/shorten_counts_by_group"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "organization_guid", value: request.organizationGuid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: metricsSchema },
        errorFactory: OrganizationsApi.GetOrganizationShortenCountsByGroupError,
      },
      options,
    );
  }

  /**
   * Retrieve Organizations
   *
   * @remarks
   * Retrieve a list of organizations for the authenticated user. By default, only organizations
   * permitted by the token's allowed_orgs are returned. Use include_all=true to return all
   * organizations regardless of token restrictions. Each organization is annotated with its
   * authentication requirements (require_sso, require_2fa) when configured.
   *
   * @returns SUCCESS
   *
   * @throws {@link OrganizationsApi.GetOrganizationsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrganizations(
    request: OrganizationsApi.GetOrganizationsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Organizations, OrganizationsApi.GetOrganizationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/organizations"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "include_all", value: request.includeAll, schema: s.optional(s.boolean()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: organizationsSchema },
        errorFactory: OrganizationsApi.GetOrganizationsError,
      },
      options,
    );
  }

  /**
   * Get Plan Limits
   *
   * @remarks
   * Returns all plan limits and counts available for an organization.
   *
   * @returns SUCCESS
   *
   * @throws {@link OrganizationsApi.GetPlanLimitsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPlanLimits(
    request: OrganizationsApi.GetPlanLimitsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlanLimits, OrganizationsApi.GetPlanLimitsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/organizations/{organization_guid}/plan_limits"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "organization_guid", value: request.organizationGuid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: planLimitsSchema },
        errorFactory: OrganizationsApi.GetPlanLimitsError,
      },
      options,
    );
  }
}

export namespace OrganizationsApi {
  export type GetOrganizationRequest = {
    /** A GUID for a Bitly organization */
    organizationGuid: string;
  };

  export class GetOrganizationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOrganizationError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetOrganizationShortenCountsRequest = {
    /** A GUID for a Bitly organization */
    organizationGuid: string;
    /** A unit of time @default TimeUnit.Day */
    unit?: TimeUnit;
    /**
     * An integer representing the time units to query data for. pass -1 to return all units of time
     *
     * @default -1
     */
    units?: number;
    /**
     * An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
     * default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B'
     * and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
     */
    unitReference?: string;
  };

  export class GetOrganizationShortenCountsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOrganizationShortenCountsError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetOrganizationShortenCountsByGroupRequest = {
    /** A GUID for a Bitly organization */
    organizationGuid: string;
  };

  export class GetOrganizationShortenCountsByGroupError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOrganizationShortenCountsByGroupError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetOrganizationsRequest = {
    /**
     * When set to true, returns all of the user's organizations regardless of the token's
     * allowed_orgs restrictions.
     */
    includeAll?: boolean;
  };

  export class GetOrganizationsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOrganizationsError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetPlanLimitsRequest = {
    /** A GUID for a Bitly organization */
    organizationGuid: string;
  };

  export class GetPlanLimitsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPlanLimitsError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
