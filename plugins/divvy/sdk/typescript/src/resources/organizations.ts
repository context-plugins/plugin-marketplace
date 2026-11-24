import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bdcErrorInternalSchema, type BdcError } from "../models/bdc-error.js";
import {
  billingStatementDetailResponseDtoSchema,
  type BillingStatementDetailResponseDto,
} from "../models/billing-statement-detail-response-dto.js";
import {
  listIndustriesResponseDtoSchema,
  type ListIndustriesResponseDto,
} from "../models/list-industries-response-dto.js";
import {
  listResponseDtoBillingStatementResponseDtoSchema,
  type ListResponseDtoBillingStatementResponseDto,
} from "../models/list-response-dto-billing-statement-response-dto.js";
import {
  organizationResponseDtoInternalSchema,
  type OrganizationResponseDto,
} from "../models/organization-response-dto.js";
import {
  organizationUpdateRequestDtoInternalSchema,
  organizationUpdateRequestDtoSchema,
  type OrganizationUpdateRequestDto,
} from "../models/organization-update-request-dto.js";
import { pricePlanResponseDtoSchema, type PricePlanResponseDto } from "../models/price-plan-response-dto.js";
import type { Servers } from "../servers.js";

export class Organizations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get billing statement details
   *
   * @remarks
   * Get details about a billing statement for the organization. BILL generates a monthly billing
   * invoice statement for all the billing activities in the organization.
   *
   * From the response, use `downloadLink` in a GET request to download a billing statement.
   *
   * ```
   * curl '{downloadLink}' --header 'sessionId: {session_id}' --output {statement_name}
   * ```
   *
   * @returns Get billing statement details response
   *
   * @throws {@link Organizations.GetBillingStatementDetailError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBillingStatementDetail(
    request: Organizations.GetBillingStatementDetailRequest,
    options?: RequestOptions,
  ): ApiPromise<BillingStatementDetailResponseDto, Organizations.GetBillingStatementDetailError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/organizations/{organizationId}/billing-statements/{billingStatementId}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "organizationId", value: request.organizationId, schema: s.string() },
          { name: "billingStatementId", value: request.billingStatementId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: billingStatementDetailResponseDtoSchema },
        errorFactory: Organizations.GetBillingStatementDetailError,
      },
      options,
    );
  }

  /**
   * Get organization details
   *
   * @remarks
   * Get details about an existing organization. The currently signed-in user must have the
   * `ADMINISTRATOR` user role in the BILL organization to perform this operation.
   *
   * See Organizations and Users in the Guides section for more information, sample requests, and
   * responses.
   *
   * @returns Get organization details response
   *
   * @throws {@link Organizations.GetOrganizationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrganization(
    request: Organizations.GetOrganizationRequest,
    options?: RequestOptions,
  ): ApiPromise<OrganizationResponseDto, Organizations.GetOrganizationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/organizations/{organizationId}"),
        auth: noneAuth,
        pathParams: [{ name: "organizationId", value: request.organizationId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: organizationResponseDtoInternalSchema },
        errorFactory: Organizations.GetOrganizationError,
      },
      options,
    );
  }

  /**
   * Get organization price plan details
   *
   * @remarks
   * Get the BILL price plan details for an existing organization. The currently signed-in user must
   * have the `ADMINISTRATOR` user role in the BILL organization to perform this operation.
   *
   * A BILL price plan for an organization provides a range of information, including monthly
   * subscription fees and the terms and conditions for additional charges in the price plan.
   *
   * In the response, the `planTerms` object includes information about charges for price plan
   * features based on a combination of charge `tier`, `quantity`, and `price`. We explain plan
   * terms with an example.
   * * If `"tier": 1`, `"quantity": 5`, and `"price": 10`, the first 5 users will be charged $10
   *   each.
   * * If `"tier": 2`, `"quantity": 10`, and `"price": 8`, the next 10 users will be charged $8
   *   each. At this level, if there is no `tier` information, all users after tier 1 will be
   *   charged $8 each.
   *
   * @returns Get organization price plan details response
   *
   * @throws {@link Organizations.GetPricePlanError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPricePlan(
    request: Organizations.GetPricePlanRequest,
    options?: RequestOptions,
  ): ApiPromise<PricePlanResponseDto, Organizations.GetPricePlanError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/organizations/{organizationId}/price-plan"),
        auth: noneAuth,
        pathParams: [{ name: "organizationId", value: request.organizationId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pricePlanResponseDtoSchema },
        errorFactory: Organizations.GetPricePlanError,
      },
      options,
    );
  }

  /**
   * Get list of billing statements
   *
   * @remarks
   * Get a list of billing statements for the organization. BILL generates a monthly billing invoice
   * statement for all the billing activities in the organization.
   *
   * In the request, set `invoiceDateFrom` and `invoiceDateTo` to get the billing invoice statements
   * for the specified date range.
   *
   * You can set `max` and `page` in the request only when both `invoiceDateFrom` and
   * `invoiceDateTo` are not set. By default, you get 20 results on one page of results. Set `max`
   * in your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * @returns Get list of billing statements response
   *
   * @throws {@link Organizations.ListBillingStatementsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBillingStatements(
    request: Organizations.ListBillingStatementsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseDtoBillingStatementResponseDto, Organizations.ListBillingStatementsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/organizations/{organizationId}/billing-statements"),
        auth: noneAuth,
        pathParams: [{ name: "organizationId", value: request.organizationId, schema: s.string() }],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "invoiceDateFrom", value: request.invoiceDateFrom, schema: s.optionalNullable(s.string()) },
          { name: "invoiceDateTo", value: request.invoiceDateTo, schema: s.optionalNullable(s.string()) },
          { name: "page", value: request.page, schema: s.optionalNullable(s.string()) },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDtoBillingStatementResponseDtoSchema },
        errorFactory: Organizations.ListBillingStatementsError,
      },
      options,
    );
  }

  /**
   * Get list of organization industries
   *
   * @remarks
   * Get a list of available values for the `industry` field for an organization. Use this
   * information to set the `industry` field in your `POST /v3/partner/organizations` or `PATCH
   * /v3/organizations/{organizationId}` request.
   *
   * @returns Get list of organization industries response
   *
   * @throws {@link Organizations.ListIndustriesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listIndustries(
    request: Organizations.ListIndustriesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListIndustriesResponseDto, Organizations.ListIndustriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/organizations/industries"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listIndustriesResponseDtoSchema },
        errorFactory: Organizations.ListIndustriesError,
      },
      options,
    );
  }

  /**
   * Update an organization
   *
   * @remarks
   * Update details about an existing organization. The currently signed-in user must have the
   * `ADMINISTRATOR` user role in the BILL organization to perform this operation.
   *
   * See Organizations and Users in the Guides section for more information, sample requests, and
   * responses.
   *
   * @returns Update an organization response
   *
   * @throws {@link Organizations.UpdateOrganizationError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateOrganization(
    request: Organizations.UpdateOrganizationRequest,
    options?: RequestOptions,
  ): ApiPromise<OrganizationResponseDto, Organizations.UpdateOrganizationError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/organizations/{organizationId}"),
        auth: noneAuth,
        pathParams: [{ name: "organizationId", value: request.organizationId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: organizationUpdateRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: organizationResponseDtoInternalSchema },
        errorFactory: Organizations.UpdateOrganizationError,
      },
      options,
    );
  }
}

export namespace Organizations {
  export type GetBillingStatementDetailRequest = {
    organizationId: string;
    billingStatementId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getBillingStatementDetailRequestSchema: Schema<GetBillingStatementDetailRequest> =
    s.lazySchema(() =>
      s.object<GetBillingStatementDetailRequest>({
        organizationId: s.string().check(s.minLength(1)),
        billingStatementId: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
    );

  export class GetBillingStatementDetailError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBillingStatementDetailError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetOrganizationRequest = {
    organizationId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getOrganizationRequestSchema: Schema<GetOrganizationRequest> = s.lazySchema(() =>
    s.object<GetOrganizationRequest>({
      organizationId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class GetOrganizationError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOrganizationError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetPricePlanRequest = {
    organizationId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getPricePlanRequestSchema: Schema<GetPricePlanRequest> = s.lazySchema(() =>
    s.object<GetPricePlanRequest>({
      organizationId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class GetPricePlanError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPricePlanError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ListBillingStatementsRequest = {
    organizationId: string;
    max?: number | null;
    invoiceDateFrom?: string | null;
    invoiceDateTo?: string | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listBillingStatementsRequestSchema: Schema<ListBillingStatementsRequest> = s.lazySchema(() =>
    s.object<ListBillingStatementsRequest>({
      organizationId: s.string().check(s.minLength(1)),
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      invoiceDateFrom: s.optionalNullable(s.string()),
      invoiceDateTo: s.optionalNullable(s.string()),
      page: s.optionalNullable(s.string()),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ListBillingStatementsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBillingStatementsError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ListIndustriesRequest = {
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class ListIndustriesError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListIndustriesError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type UpdateOrganizationRequest = {
    organizationId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: OrganizationUpdateRequestDto;
  };

  export const updateOrganizationRequestSchema: Schema<UpdateOrganizationRequest> = s.lazySchema(() =>
    s.object<UpdateOrganizationRequest>({
      organizationId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: organizationUpdateRequestDtoSchema,
    }),
  );

  export class UpdateOrganizationError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateOrganizationError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }
}
