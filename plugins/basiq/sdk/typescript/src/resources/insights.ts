import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  accountInsightResponseInternalSchema,
  type AccountInsightResponse,
} from "../models/account-insight-response.js";
import {
  balanceInsightRequestSchema,
  type BalanceInsightRequest,
} from "../models/balance-insight-request.js";
import {
  balanceInsightResponseInternalSchema,
  type BalanceInsightResponse,
} from "../models/balance-insight-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  expenseRatioInsightRequestSchema,
  type ExpenseRatioInsightRequest,
} from "../models/expense-ratio-insight-request.js";
import {
  expenseRatioInsightResponseInternalSchema,
  type ExpenseRatioInsightResponse,
} from "../models/expense-ratio-insight-response.js";
import {
  identityInsightRequestSchema,
  type IdentityInsightRequest,
} from "../models/identity-insight-request.js";
import {
  identityInsightResponseInternalSchema,
  type IdentityInsightResponse,
} from "../models/identity-insight-response.js";
import { incomeInsightRequestSchema, type IncomeInsightRequest } from "../models/income-insight-request.js";
import {
  incomeInsightResponseInternalSchema,
  type IncomeInsightResponse,
} from "../models/income-insight-response.js";
import {
  insightListResponseInternalSchema,
  type InsightListResponse,
} from "../models/insight-list-response.js";
import { insightTypeItemSchema, type InsightTypeItem } from "../models/insight-type-item.js";
import { insightTypesListSchema, type InsightTypesList } from "../models/insight-types-list.js";
import { insightInternalSchema, type Insight } from "../models/insight.js";
import {
  postInsightsRequestInternalSchema,
  type PostInsightsRequest,
} from "../models/post-insights-request.js";
import {
  postInsightsResponseInternalSchema,
  type PostInsightsResponse,
} from "../models/post-insights-response.js";
import { typeIdSchema, type TypeId } from "../models/type-id.js";
import {
  usersInsightsAccountRequestSchema,
  type UsersInsightsAccountRequest,
} from "../models/users-insights-account-request.js";
import type { Servers } from "../servers.js";

export class Insights {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an Insight
   *
   * @remarks
   * Creates a new insight for one or more users. Supported insight types are
   * EXPENSE_RATIO_VERIFICATION, BALANCE_VERIFICATION, ACCOUNT_VERIFICATION, IDENTITY_VERIFICATION,
   * and INCOME_VERIFICATION. Multi-user requests (1–10 users) are currently supported only for
   * EXPENSE_RATIO_VERIFICATION.A single insight object is created referencing all users. The self
   * link in the response uses the first userId from the users array.
   *
   * @returns Successfully created insight
   *
   * @throws {@link Insights.CreateInsightError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createInsight(
    request: Insights.CreateInsightRequest,
    options?: RequestOptions,
  ): ApiPromise<PostInsightsResponse, Insights.CreateInsightError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/insights"),
        auth: this.#auth.servicesToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: postInsightsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: postInsightsResponseInternalSchema },
        errorFactory: Insights.CreateInsightError,
      },
      options,
    );
  }

  /**
   * Account Insights
   *
   * @remarks
   * Retrieve account insights for a specific user based on account number
   *
   * @returns Successfully retrieved account insights
   *
   * @throws {@link Insights.GetAccountInsightsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccountInsights(
    request: Insights.GetAccountInsightsRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountInsightResponse, Insights.GetAccountInsightsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{userId}/insights/account"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: usersInsightsAccountRequestSchema },
      },
      {
        success: { kind: "json", schema: accountInsightResponseInternalSchema },
        errorFactory: Insights.GetAccountInsightsError,
      },
      options,
    );
  }

  /**
   * Account Balance Insights
   *
   * @remarks
   * Retrieve balance insights for a user's accounts based on specified minimum and maximum balance
   * criteria
   *
   * @returns Successfully retrieved balance insights
   *
   * @throws {@link Insights.GetBalanceInsightsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBalanceInsights(
    request: Insights.GetBalanceInsightsRequest,
    options?: RequestOptions,
  ): ApiPromise<BalanceInsightResponse, Insights.GetBalanceInsightsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{userId}/insights/balance"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: balanceInsightRequestSchema },
      },
      {
        success: { kind: "json", schema: balanceInsightResponseInternalSchema },
        errorFactory: Insights.GetBalanceInsightsError,
      },
      options,
    );
  }

  /**
   * Expense Ratio Insights
   *
   * @remarks
   * Calculate and return the expense-to-income ratio.
   *
   * @returns Successfully retrieved expense ratio insights
   *
   * @throws {@link Insights.GetExpenseRatioInsightsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getExpenseRatioInsights(
    request: Insights.GetExpenseRatioInsightsRequest,
    options?: RequestOptions,
  ): ApiPromise<ExpenseRatioInsightResponse, Insights.GetExpenseRatioInsightsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{userId}/insights/expense-ratio"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: expenseRatioInsightRequestSchema },
      },
      {
        success: { kind: "json", schema: expenseRatioInsightResponseInternalSchema },
        errorFactory: Insights.GetExpenseRatioInsightsError,
      },
      options,
    );
  }

  /**
   * Identity Insights
   *
   * @remarks
   * Retrieve identity insights for a specific user by comparing provided personal details (name,
   * phone, email, address).
   *
   * @returns Successfully retrieved identity insights
   *
   * @throws {@link Insights.GetIdentityInsightsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIdentityInsights(
    request: Insights.GetIdentityInsightsRequest,
    options?: RequestOptions,
  ): ApiPromise<IdentityInsightResponse, Insights.GetIdentityInsightsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{userId}/insights/identity"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: identityInsightRequestSchema },
      },
      {
        success: { kind: "json", schema: identityInsightResponseInternalSchema },
        errorFactory: Insights.GetIdentityInsightsError,
      },
      options,
    );
  }

  /**
   * Retrieve an Insight
   *
   * @remarks
   * Returns detailed information for a specific insight by ID
   *
   * @returns Successful response with insight details
   *
   * @throws {@link Insights.GetInsightByIdError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInsightById(
    request: Insights.GetInsightByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Insight, Insights.GetInsightByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{userId}/insights/{insightId}"),
        auth: this.#auth.servicesToken,
        pathParams: [
          { name: "userId", value: request.userId, schema: s.string() },
          { name: "insightId", value: request.insightId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightInternalSchema },
        errorFactory: Insights.GetInsightByIdError,
      },
      options,
    );
  }

  /**
   * Retrieve Insight Type
   *
   * @remarks
   * Returns the definition of a single supported CDR Insight type identified by `{typeId}`.
   *
   * @returns Successfully retrieved Insight type definition
   *
   * @throws {@link Insights.GetInsightTypeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInsightType(
    request: Insights.GetInsightTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightTypeItem, Insights.GetInsightTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/insights/types/{typeId}"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "typeId", value: request.typeId, schema: typeIdSchema }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightTypeItemSchema },
        errorFactory: Insights.GetInsightTypeError,
      },
      options,
    );
  }

  /**
   * List Insight Types
   *
   * @remarks
   * Returns the list of supported CDR Insight types and the Insight-specific input schema (`data`)
   * each type expects.
   *
   * @returns Successfully retrieved list of supported Insight types
   *
   * @throws {@link Insights.GetInsightTypesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInsightTypes(options?: RequestOptions): ApiPromise<InsightTypesList, Insights.GetInsightTypesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/insights/types"),
        auth: this.#auth.servicesToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightTypesListSchema },
        errorFactory: Insights.GetInsightTypesError,
      },
      options,
    );
  }

  /**
   * List all Insights
   *
   * @remarks
   * Returns a paginated list of previously generated insights for the specified user. Supports
   * filtering by creation date and insight type. Maximum 20 insights per page.
   *
   * @returns Successful response with list of insights
   *
   * @throws {@link Insights.ListUserInsightsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listUserInsights(
    request: Insights.ListUserInsightsRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightListResponse, Insights.ListUserInsightsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{userId}/insights"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [{ name: "filter", value: request.filter, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightListResponseInternalSchema },
        errorFactory: Insights.ListUserInsightsError,
      },
      options,
    );
  }

  /**
   * Income Insights
   *
   * @remarks
   * Verifies if a user's income falls within a specified range. Returns a match result with
   * confidence level based on the user's financial data.
   *
   * @returns Income insight successfully verified
   *
   * @throws {@link Insights.VerifyIncomeInsightError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  verifyIncomeInsight(
    request: Insights.VerifyIncomeInsightRequest,
    options?: RequestOptions,
  ): ApiPromise<IncomeInsightResponse, Insights.VerifyIncomeInsightError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{userId}/insights/income"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: incomeInsightRequestSchema },
      },
      {
        success: { kind: "json", schema: incomeInsightResponseInternalSchema },
        errorFactory: Insights.VerifyIncomeInsightError,
      },
      options,
    );
  }
}

export namespace Insights {
  export type CreateInsightRequest = {
    body: PostInsightsRequest;
  };

  export class CreateInsightError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateInsightError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetAccountInsightsRequest = {
    /** The unique identifier for the user */
    userId: string;
    body: UsersInsightsAccountRequest;
  };

  export class GetAccountInsightsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAccountInsightsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetBalanceInsightsRequest = {
    /** Unique identifier for the user */
    userId: string;
    body: BalanceInsightRequest;
  };

  export class GetBalanceInsightsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBalanceInsightsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetExpenseRatioInsightsRequest = {
    /** The unique identifier for the user */
    userId: string;
    body: ExpenseRatioInsightRequest;
  };

  export class GetExpenseRatioInsightsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetExpenseRatioInsightsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetIdentityInsightsRequest = {
    /** Unique identifier for the user */
    userId: string;
    body: IdentityInsightRequest;
  };

  export class GetIdentityInsightsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIdentityInsightsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetInsightByIdRequest = {
    /** The unique identifier of the user */
    userId: string;
    /** The unique identifier of the insight (must be valid UUID format) */
    insightId: string;
  };

  export class GetInsightByIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInsightByIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetInsightTypeRequest = {
    /** The Insight type identifier. Must be one of the supported enum values. */
    typeId: TypeId;
  };

  export class GetInsightTypeError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInsightTypeError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class GetInsightTypesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInsightTypesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListUserInsightsRequest = {
    /** The unique identifier of the user */
    userId: string;
    /**
     * Filter parameter supporting multiple filter fields separated by commas. Supported fields:
     * 'created' (date in YYYY-MM-DD format) and 'insightType' (account, balance, identity, income,
     * expense-ratio). Operators: gteq (>=), lteq (<=), gt (>), lt (<), eq (=), bt (between two
     * dates). Examples: 'created.gteq('2025-06-16')', 'created.bt('2025-08-25','2025-09-02')',
     * 'insightType.eq('account')',
     * 'created.bt('2025-06-01','2025-08-30'),insightType.eq('balance')'
     */
    filter?: string;
  };

  export class ListUserInsightsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListUserInsightsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type VerifyIncomeInsightRequest = {
    /** The unique identifier of the user */
    userId: string;
    /** Income range to verify against user's financial data */
    body: IncomeInsightRequest;
  };

  export class VerifyIncomeInsightError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<VerifyIncomeInsightError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
