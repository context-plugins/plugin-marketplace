import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  cancelRenewalResponseSchema,
  type CancelRenewalResponse,
} from "../models/cancel-renewal-response.js";
import { createPlanRequestSchema, type CreatePlanRequest } from "../models/create-plan-request.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { errorSchema, type Error } from "../models/error.js";
import { orderSchema, type Order } from "../models/order.js";
import { planGroupSchema, type PlanGroup } from "../models/plan-group.js";
import { planListResponseSchema, type PlanListResponse } from "../models/plan-list-response.js";
import {
  planUpgradePathResponseSchema,
  type PlanUpgradePathResponse,
} from "../models/plan-upgrade-path-response.js";
import { planWithFeaturesSchema, type PlanWithFeatures } from "../models/plan-with-features.js";
import { planSchema, type Plan } from "../models/plan.js";
import { plan1Schema, type Plan1 } from "../models/plan1.js";
import {
  plansGetCurrentResponse200Schema,
  type PlansGetCurrentResponse200,
} from "../models/plans-get-current-response200.js";
import {
  prorationUpgradeResponseSchema,
  type ProrationUpgradeResponse,
} from "../models/proration-upgrade-response.js";
import { updatePlanRequestSchema, type UpdatePlanRequest } from "../models/update-plan-request.js";
import {
  updatePlanUpgradePathRequestSchema,
  type UpdatePlanUpgradePathRequest,
} from "../models/update-plan-upgrade-path-request.js";
import {
  usageSummariesResponseSchema,
  type UsageSummariesResponse,
} from "../models/usage-summaries-response.js";
import type { Servers } from "../servers.js";

export class Plans {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create a new plan
   *
   * @remarks
   * Creates a new plan for a product.
   *
   * @returns 201
   *
   * @throws {@link Plans.CreatePlanError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPlan(
    request: Plans.CreatePlanRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Plan1, Plans.CreatePlanError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/plans/"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createPlanRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: plan1Schema },
        errorFactory: Plans.CreatePlanError,
      },
      options,
    );
  }

  /**
   * Get plan by ID
   *
   * @returns Success response
   *
   * @throws {@link Plans.GetByIdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getById(request: Plans.GetByIdRequest, options?: RequestOptions): ApiPromise<Plan, Plans.GetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/plans/{planId}"),
        auth: noneAuth,
        pathParams: [{ name: "planId", value: request.planId, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: planSchema },
        errorFactory: Plans.GetByIdError,
      },
      options,
    );
  }

  /**
   * Get customer's current plan
   *
   * @remarks
   * Retrieves the currently active plan subscription for a customer by their external ID. Returns
   * the plan details and subscription information.
   *
   * @returns Success response
   *
   * @throws {@link Plans.GetCurrentError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCurrent(
    request: Plans.GetCurrentRequest,
    options?: RequestOptions,
  ): ApiPromise<PlansGetCurrentResponse200, Plans.GetCurrentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/plans/current"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "customerExternalId", value: request.customerExternalId, schema: s.string() }],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: plansGetCurrentResponse200Schema },
        errorFactory: Plans.GetCurrentError,
      },
      options,
    );
  }

  /**
   * Get plan group by ID
   *
   * @returns Success response
   *
   * @throws {@link Plans.GetGroupByIdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupById(
    request: Plans.GetGroupByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PlanGroup, Plans.GetGroupByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/plans/planGroup/{planGroupId}"),
        auth: noneAuth,
        pathParams: [{ name: "planGroupId", value: request.planGroupId, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: planGroupSchema },
        errorFactory: Plans.GetGroupByIdError,
      },
      options,
    );
  }

  /**
   * Get plans for a plan group
   *
   * @remarks
   * Retrieves all plans in a plan group with their features (product-attribute pairs)
   *
   * @returns Success response
   *
   * @throws {@link Plans.GetGroupPlansError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupPlans(
    request: Plans.GetGroupPlansRequest,
    options?: RequestOptions,
  ): ApiPromise<PlanWithFeatures[], Plans.GetGroupPlansError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/plans/planGroup/{planGroupId}/plans"),
        auth: noneAuth,
        pathParams: [{ name: "planGroupId", value: request.planGroupId, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => planWithFeaturesSchema)) },
        errorFactory: Plans.GetGroupPlansError,
      },
      options,
    );
  }

  /**
   * Get plan by external ID
   *
   * @remarks
   * Get a plan by your external plan ID.
   *
   * @returns 200
   *
   * @throws {@link Plans.GetPlanByExternalIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPlanByExternalId(
    request: Plans.GetPlanByExternalIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Plan1, Plans.GetPlanByExternalIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/plans/external/{externalId}"),
        auth: noneAuth,
        pathParams: [{ name: "externalId", value: request.externalId, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: plan1Schema },
        errorFactory: Plans.GetPlanByExternalIdError,
      },
      options,
    );
  }

  /**
   * Get plan
   *
   * @remarks
   * Get a plan by Paid plan ID.
   *
   * @returns 200
   *
   * @throws {@link Plans.GetPlanByIdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPlanById(
    request: Plans.GetPlanByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Plan1, Plans.GetPlanByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/plans/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: plan1Schema },
        errorFactory: Plans.GetPlanByIdError,
      },
      options,
    );
  }

  /**
   * Fetch usage summaries for a plan and customer
   *
   * @returns Success response
   *
   * @throws {@link Plans.GetUsageError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUsage(
    request: Plans.GetUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<UsageSummariesResponse, Plans.GetUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/plans/{planId}/usage"),
        auth: noneAuth,
        pathParams: [{ name: "planId", value: request.planId, schema: s.string() }],
        query: [
          { name: "externalId", value: request.externalId, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "startTime", value: request.startTime, schema: s.optional(s.dateTime()) },
          { name: "endTime", value: request.endTime, schema: s.optional(s.dateTime()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usageSummariesResponseSchema },
        errorFactory: Plans.GetUsageError,
      },
      options,
    );
  }

  /**
   * List plans
   *
   * @remarks
   * Returns plans for your organization, including archived plans by default, optionally filtered
   * to a product.
   *
   * @returns 200
   *
   * @throws {@link Plans.ListPlansError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPlans(
    request: Plans.ListPlansRequest,
    options?: RequestOptions,
  ): ApiPromise<PlanListResponse, Plans.ListPlansError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/plans/"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "productId", value: request.productId, schema: s.optional(s.string()) },
          { name: "externalProductId", value: request.externalProductId, schema: s.optional(s.string()) },
          { name: "includeArchived", value: request.includeArchived, schema: s.defaulted(s.boolean(), true) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: planListResponseSchema },
        errorFactory: Plans.ListPlansError,
      },
      options,
    );
  }

  /**
   * Subscribe customer to plan
   *
   * @remarks
   * Creates a new order for a customer subscribing to a plan. The order will be created with the
   * plan's products and pricing attributes.
   *
   * @returns Customer subscribed to plan successfully
   *
   * @throws {@link Plans.SubscribeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  subscribe(
    request: Plans.SubscribeRequest,
    options?: RequestOptions,
  ): ApiPromise<Order, Plans.SubscribeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/plans/{planId}/subscribe"),
        auth: noneAuth,
        pathParams: [{ name: "planId", value: request.planId, schema: s.string() }],
        query: [
          { name: "customerExternalId", value: request.customerExternalId, schema: s.string() },
          { name: "currency", value: request.currency, schema: s.string() },
        ],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: orderSchema },
        errorFactory: Plans.SubscribeError,
      },
      options,
    );
  }

  /**
   * Unsubscribe customer from plan
   *
   * @remarks
   * Cancels the renewal of an active order for a customer's plan subscription. The order will
   * remain active until the cancellation date.
   *
   * @returns Customer unsubscribed from plan successfully
   *
   * @throws {@link Plans.UnsubscribeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unsubscribe(
    request: Plans.UnsubscribeRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelRenewalResponse, Plans.UnsubscribeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/plans/{planId}/unsubscribe"),
        auth: noneAuth,
        pathParams: [{ name: "planId", value: request.planId, schema: s.string() }],
        query: [{ name: "customerExternalId", value: request.customerExternalId, schema: s.string() }],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelRenewalResponseSchema },
        errorFactory: Plans.UnsubscribeError,
      },
      options,
    );
  }

  /**
   * Update plan by external ID
   *
   * @remarks
   * Update a plan by your external plan ID. If attributes are provided, they replace the plan's
   * existing attributes. Set status to archive or restore the plan.
   *
   * @returns 200
   *
   * @throws {@link Plans.UpdatePlanByExternalIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updatePlanByExternalId(
    request: Plans.UpdatePlanByExternalIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Plan1, Plans.UpdatePlanByExternalIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/plans/external/{externalId}"),
        auth: noneAuth,
        pathParams: [{ name: "externalId", value: request.externalId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updatePlanRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: plan1Schema },
        errorFactory: Plans.UpdatePlanByExternalIdError,
      },
      options,
    );
  }

  /**
   * Update plan
   *
   * @remarks
   * Update a plan by Paid plan ID. If attributes are provided, they replace the plan's existing
   * attributes. Set status to archive or restore the plan.
   *
   * @returns 200
   *
   * @throws {@link Plans.UpdatePlanByIdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updatePlanById(
    request: Plans.UpdatePlanByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Plan1, Plans.UpdatePlanByIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/plans/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updatePlanRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: plan1Schema },
        errorFactory: Plans.UpdatePlanByIdError,
      },
      options,
    );
  }

  /**
   * Update plan upgrade path
   *
   * @remarks
   * Updates upgrade path ordering for plans within a product, grouped by billing frequency.
   *
   * @returns 200
   *
   * @throws {@link Plans.UpdatePlanUpgradePathError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updatePlanUpgradePath(
    request: Plans.UpdatePlanUpgradePathRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PlanUpgradePathResponse, Plans.UpdatePlanUpgradePathError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/plans/upgrade-path"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updatePlanUpgradePathRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: planUpgradePathResponseSchema },
        errorFactory: Plans.UpdatePlanUpgradePathError,
      },
      options,
    );
  }

  /**
   * Upgrade customer to a new plan
   *
   * @remarks
   * Upgrades a customer from one plan to another with automatic proration. Credits are applied for
   * the unused portion of the current billing period, and the order is updated with the new plan's
   * pricing.
   *
   * @returns Plan upgrade completed successfully
   *
   * @throws {@link Plans.UpgradeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  upgrade(
    request: Plans.UpgradeRequest,
    options?: RequestOptions,
  ): ApiPromise<ProrationUpgradeResponse, Plans.UpgradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/plans/upgrade"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "customerExternalId", value: request.customerExternalId, schema: s.string() },
          { name: "oldPlanId", value: request.oldPlanId, schema: s.string() },
          { name: "newPlanId", value: request.newPlanId, schema: s.string() },
        ],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: prorationUpgradeResponseSchema },
        errorFactory: Plans.UpgradeError,
      },
      options,
    );
  }
}

export namespace Plans {
  export type CreatePlanRequestParams = {
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: CreatePlanRequest;
  };

  export class CreatePlanError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePlanError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetByIdRequest = {
    /** The ID of the plan */
    planId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class GetByIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetByIdError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCurrentRequest = {
    /** The external ID of the customer */
    customerExternalId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class GetCurrentError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCurrentError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupByIdRequest = {
    /** The ID of the plan group */
    planGroupId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class GetGroupByIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupByIdError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupPlansRequest = {
    /** The ID of the plan group */
    planGroupId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class GetGroupPlansError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupPlansError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetPlanByExternalIdRequest = {
    externalId: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class GetPlanByExternalIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPlanByExternalIdError> = [
      { on: 403, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetPlanByIdRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class GetPlanByIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPlanByIdError> = [
      { on: 403, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetUsageRequest = {
    /** The ID of the plan */
    planId: string;
    /** The external ID of the customer */
    externalId: string;
    /** Maximum number of usage summaries to return (1-1000) @default 100 */
    limit?: number;
    /** Number of usage summaries to skip for pagination @default 0 */
    offset?: number;
    /**
     * Filter usage summaries starting from this time (ISO 8601 format). Returns summaries that
     * overlap with the time range.
     */
    startTime?: Date;
    /**
     * Filter usage summaries up to this time (ISO 8601 format). Returns summaries that overlap with
     * the time range.
     */
    endTime?: Date;
    /** Bearer authentication */
    authorization: string;
  };

  export class GetUsageError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUsageError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListPlansRequest = {
    /** @default 10 */
    limit?: number;
    offset?: number;
    productId?: string;
    externalProductId?: string;
    /** Whether to include archived plans in the response. Defaults to true. @default true */
    includeArchived?: boolean;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class ListPlansError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPlansError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SubscribeRequest = {
    /** The ID of the plan */
    planId: string;
    /** The external ID of the customer */
    customerExternalId: string;
    /** The currency code for the order (e.g., "USD", "EUR") */
    currency: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class SubscribeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SubscribeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UnsubscribeRequest = {
    /** The ID of the plan */
    planId: string;
    /** The external ID of the customer */
    customerExternalId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class UnsubscribeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnsubscribeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdatePlanByExternalIdRequest = {
    externalId: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: UpdatePlanRequest;
  };

  export class UpdatePlanByExternalIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePlanByExternalIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdatePlanByIdRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: UpdatePlanRequest;
  };

  export class UpdatePlanByIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePlanByIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdatePlanUpgradePathRequestParams = {
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: UpdatePlanUpgradePathRequest;
  };

  export class UpdatePlanUpgradePathError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePlanUpgradePathError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpgradeRequest = {
    /** The external ID of the customer */
    customerExternalId: string;
    /** The ID of the current plan */
    oldPlanId: string;
    /** The ID of the plan to upgrade to */
    newPlanId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class UpgradeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpgradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
