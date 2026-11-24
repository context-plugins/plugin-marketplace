import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  accessDeniedExceptionSchema,
  type AccessDeniedException,
} from "../models/access-denied-exception.js";
import {
  describeOrganizationHealthResponseSchema,
  type DescribeOrganizationHealthResponse,
} from "../models/describe-organization-health-response.js";
import {
  describeOrganizationOverviewResponseSchema,
  type DescribeOrganizationOverviewResponse,
} from "../models/describe-organization-overview-response.js";
import {
  describeOrganizationResourceCollectionHealthResponseSchema,
  type DescribeOrganizationResourceCollectionHealthResponse,
} from "../models/describe-organization-resource-collection-health-response.js";
import {
  internalServerExceptionSchema,
  type InternalServerException,
} from "../models/internal-server-exception.js";
import {
  listOrganizationInsightsResponseSchema,
  type ListOrganizationInsightsResponse,
} from "../models/list-organization-insights-response.js";
import {
  organizationHealthRequestSchema,
  type OrganizationHealthRequest,
} from "../models/organization-health-request.js";
import {
  organizationHealthResourceCollectionRequestSchema,
  type OrganizationHealthResourceCollectionRequest,
} from "../models/organization-health-resource-collection-request.js";
import {
  organizationInsightsRequestSchema,
  type OrganizationInsightsRequest,
} from "../models/organization-insights-request.js";
import {
  organizationInsightsSearchRequestSchema,
  type OrganizationInsightsSearchRequest,
} from "../models/organization-insights-search-request.js";
import {
  organizationOverviewRequestSchema,
  type OrganizationOverviewRequest,
} from "../models/organization-overview-request.js";
import {
  searchOrganizationInsightsResponseSchema,
  type SearchOrganizationInsightsResponse,
} from "../models/search-organization-insights-response.js";
import { throttlingExceptionSchema, type ThrottlingException } from "../models/throttling-exception.js";
import { validationExceptionSchema, type ValidationException } from "../models/validation-exception.js";
import type { Servers } from "../servers.js";

export class Organization {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Describe Organization Health
   *
   * @remarks
   * Returns active insights, predictive insights, and resource hours analyzed in last hour.
   *
   * @returns Success
   *
   * @throws {@link Organization.DescribeOrganizationHealthError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeOrganizationHealth(
    request: Organization.DescribeOrganizationHealthRequest = {},
    options?: RequestOptions,
  ): ApiPromise<DescribeOrganizationHealthResponse, Organization.DescribeOrganizationHealthError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/organization/health"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => organizationHealthRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: describeOrganizationHealthResponseSchema },
        errorFactory: Organization.DescribeOrganizationHealthError,
      },
      options,
    );
  }

  /**
   * Describe Organization Overview
   *
   * @remarks
   * Returns an overview of your organization's history based on the specified time range. The
   * overview includes the total reactive and proactive insights.
   *
   * @returns Success
   *
   * @throws {@link Organization.DescribeOrganizationOverviewError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeOrganizationOverview(
    request: Organization.DescribeOrganizationOverviewRequest = {},
    options?: RequestOptions,
  ): ApiPromise<DescribeOrganizationOverviewResponse, Organization.DescribeOrganizationOverviewError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/organization/overview"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => organizationOverviewRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: describeOrganizationOverviewResponseSchema },
        errorFactory: Organization.DescribeOrganizationOverviewError,
      },
      options,
    );
  }

  /**
   * Describe Organization Resource Collection Health
   *
   * @remarks
   * Provides an overview of your system's health. If additional member accounts are part of your
   * organization, you can filter those accounts using the AccountIds field.
   *
   * @returns Success
   *
   * @throws {@link Organization.DescribeOrganizationResourceCollectionHealthError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeOrganizationResourceCollectionHealth(
    request: Organization.DescribeOrganizationResourceCollectionHealthRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    DescribeOrganizationResourceCollectionHealthResponse,
    Organization.DescribeOrganizationResourceCollectionHealthError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/organization/health/resource-collection"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => organizationHealthResourceCollectionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: describeOrganizationResourceCollectionHealthResponseSchema },
        errorFactory: Organization.DescribeOrganizationResourceCollectionHealthError,
      },
      options,
    );
  }

  /**
   * List Organization Insights
   *
   * @remarks
   * Returns a list of insights associated with the account or OU Id.
   *
   * @returns Success
   *
   * @throws {@link Organization.ListOrganizationInsightsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listOrganizationInsights(
    request: Organization.ListOrganizationInsightsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListOrganizationInsightsResponse, Organization.ListOrganizationInsightsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/organization/insights"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => organizationInsightsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listOrganizationInsightsResponseSchema },
        errorFactory: Organization.ListOrganizationInsightsError,
      },
      options,
    );
  }

  /**
   * Search Organization Insights
   *
   * @remarks
   * Returns a list of insights in your organization. You can specify which insights are returned by
   * their start time, one or more statuses (ONGOING, CLOSED, and CLOSED), one or more severities
   * (LOW, MEDIUM, and HIGH), and type (REACTIVE or PROACTIVE). Use the Filters parameter to specify
   * status and severity search parameters. Use the Type parameter to specify REACTIVE or PROACTIVE
   * in your search.
   *
   * @returns Success
   *
   * @throws {@link Organization.SearchOrganizationInsightsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  searchOrganizationInsights(
    request: Organization.SearchOrganizationInsightsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<SearchOrganizationInsightsResponse, Organization.SearchOrganizationInsightsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/organization/insights/search"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => organizationInsightsSearchRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: searchOrganizationInsightsResponseSchema },
        errorFactory: Organization.SearchOrganizationInsightsError,
      },
      options,
    );
  }
}

export namespace Organization {
  export type DescribeOrganizationHealthRequest = {
    body?: OrganizationHealthRequest;
  };

  export class DescribeOrganizationHealthError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeOrganizationHealthError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DescribeOrganizationOverviewRequest = {
    body?: OrganizationOverviewRequest;
  };

  export class DescribeOrganizationOverviewError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeOrganizationOverviewError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DescribeOrganizationResourceCollectionHealthRequest = {
    body?: OrganizationHealthResourceCollectionRequest;
  };

  export class DescribeOrganizationResourceCollectionHealthError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeOrganizationResourceCollectionHealthError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListOrganizationInsightsRequest = {
    body?: OrganizationInsightsRequest;
  };

  export class ListOrganizationInsightsError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListOrganizationInsightsError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type SearchOrganizationInsightsRequest = {
    body?: OrganizationInsightsSearchRequest;
  };

  export class SearchOrganizationInsightsError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchOrganizationInsightsError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }
}
