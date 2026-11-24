import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "../models/error.js";
import { planInternalSchema, type Plan } from "../models/plan.js";
import { plansRequestInternalSchema, type PlansRequest } from "../models/plans-request.js";
import { plansResponseInternalSchema, type PlansResponse } from "../models/plans-response.js";
import type { Servers } from "../servers.js";

/**
 * Billing plan definitions for recurring subscriptions. A plan sets the billing period, interval,
 * and per-cycle charge. Plans are reusable across multiple subscriptions and cannot be modified
 * after creation.
 */
export class Plans {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a plan
   *
   * @remarks
   * Define a recurring billing plan with a fixed period, interval, and amount. Plans are reusable
   * across multiple subscriptions. Once created, plan details cannot be modified.
   *
   * @returns Plan created.
   *
   * @throws {@link Plans.CreatePlanError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPlan(
    request: Plans.CreatePlanRequest,
    options?: RequestOptions,
  ): ApiPromise<Plan, Plans.CreatePlanError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/plans"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: plansRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: planInternalSchema },
        errorFactory: Plans.CreatePlanError,
      },
      options,
    );
  }

  /**
   * Fetch a plan
   *
   * @remarks
   * Get details of a specific billing plan.
   *
   * @returns Plan details.
   *
   * @throws {@link Plans.FetchPlanError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchPlan(
    request: Plans.FetchPlanRequest,
    options?: RequestOptions,
  ): ApiPromise<Plan, Plans.FetchPlanError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/plans/{id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: planInternalSchema },
        errorFactory: Plans.FetchPlanError,
      },
      options,
    );
  }

  /**
   * List all plans
   *
   * @remarks
   * Retrieve all billing plans. Supports pagination.
   *
   * @returns Collection of plans.
   *
   * @throws {@link Plans.ListPlansError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPlans(
    request: Plans.ListPlansRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PlansResponse, Plans.ListPlansError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/plans"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 10) },
          { name: "skip", value: request.skip, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: plansResponseInternalSchema },
        errorFactory: Plans.ListPlansError,
      },
      options,
    );
  }
}

export namespace Plans {
  export type CreatePlanRequest = {
    body: PlansRequest;
  };

  export class CreatePlanError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePlanError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchPlanRequest = {
    /** Plan ID (plan_*). */
    id: string;
  };

  export class FetchPlanError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchPlanError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListPlansRequest = {
    /** Number of records to return per call. Maximum 100. Default 10. @default 10 */
    count?: number;
    /** Number of records to skip. Use with count for pagination. Default 0. @default 0 */
    skip?: number;
  };

  export const listPlansRequestSchema: Schema<ListPlansRequest> = s.lazySchema(() =>
    s.object<ListPlansRequest>({
      count: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
      skip: s.defaulted(s.int().check(s.gte(0)), 0),
    }),
  );

  export class ListPlansError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<ListPlansError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
