import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  analyticsV1BudgetsResponseSchema,
  type AnalyticsV1BudgetsResponse,
} from "../models/analytics-v1-budgets-response.js";
import { budgetApiSchema, type BudgetApi } from "../models/budget-api.js";
import {
  budgetCreateUpdateRequestSchema,
  type BudgetCreateUpdateRequest,
} from "../models/budget-create-update-request.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Track actual cloud spend against planned spend.
 */
export class Budgets {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a budget
   *
   * @remarks
   * Create a new budget
   *
   * @returns Created - New budget created.
   *
   * @throws {@link Budgets.CreateBudgetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBudget(
    request: Budgets.CreateBudgetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BudgetApi, Budgets.CreateBudgetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analytics/v1/budgets"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => budgetCreateUpdateRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: budgetApiSchema },
        errorFactory: Budgets.CreateBudgetError,
      },
      options,
    );
  }

  /**
   * Delete a budget
   *
   * @remarks
   * Deletes the specified budget.
   *
   * @returns OK - Budget deleted.
   *
   * @throws {@link Budgets.DeleteBudgetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBudget(
    request: Budgets.DeleteBudgetRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Budgets.DeleteBudgetError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/analytics/v1/budgets/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Budgets.DeleteBudgetError,
      },
      options,
    );
  }

  /**
   * Retrieve a budget
   *
   * @remarks
   * Returns the current utilization and configuration of the specified budget.
   *
   * @returns OK - Budget details returned.
   *
   * @throws {@link Budgets.GetBudgetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBudget(
    request: Budgets.GetBudgetRequest,
    options?: RequestOptions,
  ): ApiPromise<BudgetApi, Budgets.GetBudgetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/budgets/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: budgetApiSchema },
        errorFactory: Budgets.GetBudgetError,
      },
      options,
    );
  }

  /**
   * List budgets
   *
   * @remarks
   * Returns a list of budgets that your account has access to. Budgets are listed in reverse
   * chronological order by default. Each budget includes a server-computed `riskStatus` (`atRisk`,
   * `onTrack`, or `unknown`), and the response includes a `riskAggregations` summary of risk counts
   * across the full filtered result set (all pages, not just the current page).
   *
   * @returns OK - The request succeeded.
   *
   * @throws {@link Budgets.ListBudgetsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBudgets(
    request: Budgets.ListBudgetsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<AnalyticsV1BudgetsResponse, Budgets.ListBudgetsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/budgets"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "nameContains", value: request.nameContains, schema: s.optional(s.string()) },
          { name: "minCreationTime", value: request.minCreationTime, schema: s.optional(s.string()) },
          { name: "maxCreationTime", value: request.maxCreationTime, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: analyticsV1BudgetsResponseSchema },
        errorFactory: Budgets.ListBudgetsError,
      },
      options,
    );
  }

  /**
   * Update a budget
   *
   * @remarks
   * Updates the specified budget.
   *
   * @returns OK - Budget updated.
   *
   * @throws {@link Budgets.UpdateBudgetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateBudget(
    request: Budgets.UpdateBudgetRequest,
    options?: RequestOptions,
  ): ApiPromise<BudgetApi, Budgets.UpdateBudgetError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/analytics/v1/budgets/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => budgetCreateUpdateRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: budgetApiSchema },
        errorFactory: Budgets.UpdateBudgetError,
      },
      options,
    );
  }
}

export namespace Budgets {
  export type CreateBudgetRequest = {
    body?: BudgetCreateUpdateRequest;
  };

  export class CreateBudgetError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBudgetError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteBudgetRequest = {
    /** Budget ID */
    id: string;
  };

  export class DeleteBudgetError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBudgetError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetBudgetRequest = {
    /** Budget ID */
    id: string;
  };

  export class GetBudgetError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBudgetError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListBudgetsRequest = {
    /**
     * The maximum number of results to return in a single page. Leverage the page tokens to iterate
     * through the entire collection.
     *
     * @default 50
     */
    maxResults?: number;
    /** Page token, returned by a previous call, to request the next page of results */
    pageToken?: string;
    /**
     * An expression for filtering the results of the request. The syntax is "key:[<value>]".
     * Available keys: owner, budgetName, lastModified in ms (>lasModified), riskStatus (one of
     * "atRisk", "onTrack", "unknown"). Multiple filters can be connected using a pipe |. Note that
     * using different keys in the same filter results in "AND," while using the same key multiple
     * times in the same filter results in "OR" (except riskStatus, where only the first occurrence
     * is honored). A budget is "atRisk" when it has already exceeded its configured amount, or its
     * forecast projects it will exceed the configured amount before the current period ends.
     * Budgets with no forecast data yet, a fixed budget whose period has already expired, or that
     * are invalid/draft are classified "unknown". Filtering to riskStatus:atRisk sorts results by
     * earliest projected breach date (day granularity) ascending instead of the default order;
     * budgets that tie on breach day, including every already-breached budget, resolve to a fixed,
     * repeatable order across requests rather than an arbitrary one. Because riskStatus is computed
     * from live, periodically-refreshed budget data, paginated results filtered by riskStatus may
     * shift between page requests if budget data refreshes mid-pagination.
     */
    filter?: string;
    /**
     * Case-insensitive substring match against the resource name. Combined with the "filter"
     * parameter using AND semantics.
     */
    nameContains?: string;
    /**
     * Min value for reports creation time, in milliseconds since the POSIX epoch. If set, only
     * reports created after or at this timestamp are returned.
     */
    minCreationTime?: string;
    /**
     * Max value for reports creation time, in milliseconds since the POSIX epoch. If set, only
     * reports created before or at this timestamp are returned.
     */
    maxCreationTime?: string;
  };

  export class ListBudgetsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBudgetsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateBudgetRequest = {
    id: string;
    body?: BudgetCreateUpdateRequest;
  };

  export class UpdateBudgetError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateBudgetError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
