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
import { budgetCreateDtoInternalSchema, type BudgetCreateDto } from "../models/budget-create-dto.js";
import {
  budgetMemberBulkUpsertRequestDtoInternalSchema,
  budgetMemberBulkUpsertRequestDtoSchema,
  type BudgetMemberBulkUpsertRequestDto,
} from "../models/budget-member-bulk-upsert-request-dto.js";
import {
  budgetMemberResponseDtoSchema,
  type BudgetMemberResponseDto,
} from "../models/budget-member-response-dto.js";
import {
  budgetMemberUpsertRequestDtoSchema,
  type BudgetMemberUpsertRequestDto,
} from "../models/budget-member-upsert-request-dto.js";
import { budgetResponseDtoSchema, type BudgetResponseDto } from "../models/budget-response-dto.js";
import {
  budgetUpdateDtoInternalSchema,
  budgetUpdateDtoSchema,
  type BudgetUpdateDto,
} from "../models/budget-update-dto.js";
import {
  paginationResponseDtoBudgetMemberResponseDtoSchema,
  type PaginationResponseDtoBudgetMemberResponseDto,
} from "../models/pagination-response-dto-budget-member-response-dto.js";
import {
  paginationResponseDtoBudgetResponseDtoSchema,
  type PaginationResponseDtoBudgetResponseDto,
} from "../models/pagination-response-dto-budget-response-dto.js";
import { spendStatusDtoSchema, type SpendStatusDto } from "../models/spend-status-dto.js";
import type { Servers } from "../servers.js";

export class Budgets {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create a budget
   *
   * @remarks
   * Create a new budget for a company.
   *
   * See Budgets and Users in the Guides section for more information, sample requests, and
   * responses.
   *
   * @returns Create a budget response
   *
   * @throws {@link Budgets.CreateBudgetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBudget(
    request: Budgets.CreateBudgetRequest,
    options?: RequestOptions,
  ): ApiPromise<BudgetResponseDto, Budgets.CreateBudgetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/spend/budgets"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: budgetCreateDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: budgetResponseDtoSchema },
        errorFactory: Budgets.CreateBudgetError,
      },
      options,
    );
  }

  /**
   * Delete a budget
   *
   * @remarks
   * Delete an existing budget. A deleted budget cannot be restored. The deleted budget is not
   * available in the list of budgets.
   *
   * **Note**:
   * * While you cannot restore a deleted budget with the API, you can unretire budgets in the BILL
   *   web app and mobile app. An unretired budget is active and is available for use.
   * * A one-time budget can be unretired at any time. A `recurringInterval` budget can be unretired
   *   within one interval. For example, if a `MONTHLY` budget is retired in January, you can
   *   unretire it in February. You cannot unretire this budget in March or any later month.
   *
   * @returns Delete a budget response
   *
   * @throws {@link Budgets.DeleteBudgetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBudget(
    request: Budgets.DeleteBudgetRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Budgets.DeleteBudgetError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v3/spend/budgets/{budgetId}"),
        auth: noneAuth,
        pathParams: [{ name: "budgetId", value: request.budgetId, schema: s.string() }],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Budgets.DeleteBudgetError,
      },
      options,
    );
  }

  /**
   * Delete a budget member
   *
   * @remarks
   * Delete a user member from an existing budget.
   *
   * @returns Delete a budget member response
   *
   * @throws {@link Budgets.DeleteBudgetMemberError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBudgetMember(
    request: Budgets.DeleteBudgetMemberRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Budgets.DeleteBudgetMemberError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v3/spend/budgets/{budgetId}/members/{userId}"),
        auth: noneAuth,
        pathParams: [
          { name: "budgetId", value: request.budgetId, schema: s.string() },
          { name: "userId", value: request.userId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Budgets.DeleteBudgetMemberError,
      },
      options,
    );
  }

  /**
   * Get budget details
   *
   * @remarks
   * Get details about an existing budget.
   *
   * @returns Get budget details response
   *
   * @throws {@link Budgets.GetBudgetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBudget(
    request: Budgets.GetBudgetRequest,
    options?: RequestOptions,
  ): ApiPromise<BudgetResponseDto, Budgets.GetBudgetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/spend/budgets/{budgetId}"),
        auth: noneAuth,
        pathParams: [{ name: "budgetId", value: request.budgetId, schema: s.string() }],
        query: [],
        headers: [{ name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: budgetResponseDtoSchema },
        errorFactory: Budgets.GetBudgetError,
      },
      options,
    );
  }

  /**
   * Get budget member details
   *
   * @remarks
   * Get details about a user member assigned to an existing budget.
   *
   * @returns Get budget member details response
   *
   * @throws {@link Budgets.GetBudgetMemberError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBudgetMember(
    request: Budgets.GetBudgetMemberRequest,
    options?: RequestOptions,
  ): ApiPromise<BudgetMemberResponseDto, Budgets.GetBudgetMemberError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/spend/budgets/{budgetId}/members/{userId}"),
        auth: noneAuth,
        pathParams: [
          { name: "budgetId", value: request.budgetId, schema: s.string() },
          { name: "userId", value: request.userId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: budgetMemberResponseDtoSchema },
        errorFactory: Budgets.GetBudgetMemberError,
      },
      options,
    );
  }

  /**
   * Get list of budget members
   *
   * @remarks
   * Get a list of user members assigned to an existing budget. By default, you get 20 results on
   * one page of results. Set `max` in your request to get up to 100 results on one page.
   *
   * @returns Get list of budget members response
   *
   * @throws {@link Budgets.ListBudgetMembersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBudgetMembers(
    request: Budgets.ListBudgetMembersRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginationResponseDtoBudgetMemberResponseDto, Budgets.ListBudgetMembersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/spend/budgets/{budgetId}/members"),
        auth: noneAuth,
        pathParams: [{ name: "budgetId", value: request.budgetId, schema: s.string() }],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "nextPage", value: request.nextPage, schema: s.optionalNullable(s.string()) },
          { name: "prevPage", value: request.prevPage, schema: s.optionalNullable(s.string()) },
          { name: "sort", value: request.sort, schema: s.optionalNullable(s.string()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
        ],
        headers: [{ name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginationResponseDtoBudgetMemberResponseDtoSchema },
        errorFactory: Budgets.ListBudgetMembersError,
      },
      options,
    );
  }

  /**
   * Get list of budgets
   *
   * @remarks
   * Get a list of budget objects. By default, you get 20 results on one page of results. Set `max`
   * in your request to get up to 100 results on one page.
   *
   * @returns Get list of budgets response
   *
   * @throws {@link Budgets.ListBudgetsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBudgets(
    request: Budgets.ListBudgetsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaginationResponseDtoBudgetResponseDto, Budgets.ListBudgetsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/spend/budgets"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "nextPage", value: request.nextPage, schema: s.optionalNullable(s.string()) },
          { name: "prevPage", value: request.prevPage, schema: s.optionalNullable(s.string()) },
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optionalNullable(s.string()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
        ],
        headers: [{ name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginationResponseDtoBudgetResponseDtoSchema },
        errorFactory: Budgets.ListBudgetsError,
      },
      options,
    );
  }

  /**
   * Update a budget
   *
   * @remarks
   * Update details about an existing budget.
   *
   * @returns Update a budget response
   *
   * @throws {@link Budgets.UpdateBudgetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateBudget(
    request: Budgets.UpdateBudgetRequest,
    options?: RequestOptions,
  ): ApiPromise<BudgetResponseDto, Budgets.UpdateBudgetError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/spend/budgets/{budgetId}"),
        auth: noneAuth,
        pathParams: [{ name: "budgetId", value: request.budgetId, schema: s.string() }],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: budgetUpdateDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: budgetResponseDtoSchema },
        errorFactory: Budgets.UpdateBudgetError,
      },
      options,
    );
  }

  /**
   * Add or update a budget member
   *
   * @remarks
   * Add a new user member to an existing budget. You can also update details about an existing user
   * member assigned to the budget.
   *
   * @returns Add or update a budget member response
   *
   * @throws {@link Budgets.UpsertBudgetMemberError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  upsertBudgetMember(
    request: Budgets.UpsertBudgetMemberRequest,
    options?: RequestOptions,
  ): ApiPromise<BudgetMemberResponseDto, Budgets.UpsertBudgetMemberError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v3/spend/budgets/{budgetId}/members/{userId}"),
        auth: noneAuth,
        pathParams: [
          { name: "budgetId", value: request.budgetId, schema: s.string() },
          { name: "userId", value: request.userId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: budgetMemberUpsertRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: budgetMemberResponseDtoSchema },
        errorFactory: Budgets.UpsertBudgetMemberError,
      },
      options,
    );
  }

  /**
   * Update multiple budget members
   *
   * @remarks
   * Update details about multiple user members assigned to an existing budget.
   *
   * @returns Update multiple budget members response
   *
   * @throws {@link Budgets.UpsertBulkBudgetUsersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  upsertBulkBudgetUsers(
    request: Budgets.UpsertBulkBudgetUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<SpendStatusDto, Budgets.UpsertBulkBudgetUsersError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v3/spend/budgets/{budgetId}/members/bulk"),
        auth: noneAuth,
        pathParams: [{ name: "budgetId", value: request.budgetId, schema: s.string() }],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: budgetMemberBulkUpsertRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: spendStatusDtoSchema },
        errorFactory: Budgets.UpsertBulkBudgetUsersError,
      },
      options,
    );
  }
}

export namespace Budgets {
  export type CreateBudgetRequest = {
    apiToken?: string | null;
    body: BudgetCreateDto;
  };

  export class CreateBudgetError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBudgetError> = [
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

  export type DeleteBudgetRequest = {
    budgetId: string;
    apiToken?: string | null;
  };

  export const deleteBudgetRequestSchema: Schema<DeleteBudgetRequest> = s.lazySchema(() =>
    s.object<DeleteBudgetRequest>({
      budgetId: s.string().check(s.minLength(1)),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export class DeleteBudgetError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBudgetError> = [
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

  export type DeleteBudgetMemberRequest = {
    budgetId: string;
    userId: string;
    apiToken?: string | null;
  };

  export const deleteBudgetMemberRequestSchema: Schema<DeleteBudgetMemberRequest> = s.lazySchema(() =>
    s.object<DeleteBudgetMemberRequest>({
      budgetId: s.string().check(s.minLength(1)),
      userId: s.string().check(s.minLength(1)),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export class DeleteBudgetMemberError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBudgetMemberError> = [
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

  export type GetBudgetRequest = {
    budgetId: string;
    apiToken?: string | null;
  };

  export const getBudgetRequestSchema: Schema<GetBudgetRequest> = s.lazySchema(() =>
    s.object<GetBudgetRequest>({
      budgetId: s.string().check(s.minLength(1)),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export class GetBudgetError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBudgetError> = [
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

  export type GetBudgetMemberRequest = {
    budgetId: string;
    userId: string;
    apiToken?: string | null;
  };

  export const getBudgetMemberRequestSchema: Schema<GetBudgetMemberRequest> = s.lazySchema(() =>
    s.object<GetBudgetMemberRequest>({
      budgetId: s.string().check(s.minLength(1)),
      userId: s.string().check(s.minLength(1)),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export class GetBudgetMemberError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBudgetMemberError> = [
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

  export type ListBudgetMembersRequest = {
    budgetId: string;
    max?: number | null;
    nextPage?: string | null;
    prevPage?: string | null;
    sort?: string | null;
    filters?: string | null;
    apiToken?: string | null;
  };

  export const listBudgetMembersRequestSchema: Schema<ListBudgetMembersRequest> = s.lazySchema(() =>
    s.object<ListBudgetMembersRequest>({
      budgetId: s.string().check(s.minLength(1)),
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      nextPage: s.optionalNullable(s.string()),
      prevPage: s.optionalNullable(s.string()),
      sort: s.optionalNullable(s.string()),
      filters: s.optionalNullable(s.string()),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export class ListBudgetMembersError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBudgetMembersError> = [
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

  export type ListBudgetsRequest = {
    nextPage?: string | null;
    prevPage?: string | null;
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    apiToken?: string | null;
  };

  export const listBudgetsRequestSchema: Schema<ListBudgetsRequest> = s.lazySchema(() =>
    s.object<ListBudgetsRequest>({
      nextPage: s.optionalNullable(s.string()),
      prevPage: s.optionalNullable(s.string()),
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      sort: s.optionalNullable(s.string()),
      filters: s.optionalNullable(s.string()),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export class ListBudgetsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBudgetsError> = [
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

  export type UpdateBudgetRequest = {
    budgetId: string;
    apiToken?: string | null;
    body: BudgetUpdateDto;
  };

  export const updateBudgetRequestSchema: Schema<UpdateBudgetRequest> = s.lazySchema(() =>
    s.object<UpdateBudgetRequest>({
      budgetId: s.string().check(s.minLength(1)),
      apiToken: s.optionalNullable(s.string()),
      body: budgetUpdateDtoSchema,
    }),
  );

  export class UpdateBudgetError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateBudgetError> = [
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

  export type UpsertBudgetMemberRequest = {
    budgetId: string;
    userId: string;
    apiToken?: string | null;
    body: BudgetMemberUpsertRequestDto;
  };

  export const upsertBudgetMemberRequestSchema: Schema<UpsertBudgetMemberRequest> = s.lazySchema(() =>
    s.object<UpsertBudgetMemberRequest>({
      budgetId: s.string().check(s.minLength(1)),
      userId: s.string().check(s.minLength(1)),
      apiToken: s.optionalNullable(s.string()),
      body: budgetMemberUpsertRequestDtoSchema,
    }),
  );

  export class UpsertBudgetMemberError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpsertBudgetMemberError> = [
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

  export type UpsertBulkBudgetUsersRequest = {
    budgetId: string;
    apiToken?: string | null;
    body: BudgetMemberBulkUpsertRequestDto;
  };

  export const upsertBulkBudgetUsersRequestSchema: Schema<UpsertBulkBudgetUsersRequest> = s.lazySchema(() =>
    s.object<UpsertBulkBudgetUsersRequest>({
      budgetId: s.string().check(s.minLength(1)),
      apiToken: s.optionalNullable(s.string()),
      body: budgetMemberBulkUpsertRequestDtoSchema,
    }),
  );

  export class UpsertBulkBudgetUsersError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpsertBulkBudgetUsersError> = [
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
