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
  analyticsV1BudgetSuggestionsActionsAcceptResponseSchema,
  type AnalyticsV1BudgetSuggestionsActionsAcceptResponse,
} from "../models/analytics-v1-budget-suggestions-actions-accept-response.js";
import {
  analyticsV1BudgetSuggestionsActionsDismissResponseSchema,
  type AnalyticsV1BudgetSuggestionsActionsDismissResponse,
} from "../models/analytics-v1-budget-suggestions-actions-dismiss-response.js";
import {
  analyticsV1BudgetSuggestionsResponseSchema,
  type AnalyticsV1BudgetSuggestionsResponse,
} from "../models/analytics-v1-budget-suggestions-response.js";
import {
  budgetSuggestionAcceptRequestSchema,
  type BudgetSuggestionAcceptRequest,
} from "../models/budget-suggestion-accept-request.js";
import {
  budgetSuggestionDismissRequestSchema,
  type BudgetSuggestionDismissRequest,
} from "../models/budget-suggestion-dismiss-request.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * AI-generated budget recommendations you can accept (link to a budget you created) or dismiss.
 */
export class BudgetSuggestions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Accept a budget suggestion
   *
   * @remarks
   * Marks the suggestion as accepted and links it to an existing budget. Create the budget first
   * via `POST /analytics/v1/budgets`, then pass its `id` as `budgetId`. The budget must belong to
   * your account.
   *
   * @returns OK - The suggestion was accepted and linked to the budget.
   *
   * @throws {@link BudgetSuggestions.AcceptBudgetSuggestionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  acceptBudgetSuggestion(
    request: BudgetSuggestions.AcceptBudgetSuggestionRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AnalyticsV1BudgetSuggestionsActionsAcceptResponse,
    BudgetSuggestions.AcceptBudgetSuggestionError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analytics/v1/budget-suggestions/{id}/actions/accept"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: budgetSuggestionAcceptRequestSchema },
      },
      {
        success: { kind: "json", schema: analyticsV1BudgetSuggestionsActionsAcceptResponseSchema },
        errorFactory: BudgetSuggestions.AcceptBudgetSuggestionError,
      },
      options,
    );
  }

  /**
   * Dismiss a budget suggestion
   *
   * @remarks
   * Marks the suggestion as dismissed so it no longer appears in the pending list.
   *
   * @returns OK - The suggestion was dismissed.
   *
   * @throws {@link BudgetSuggestions.DismissBudgetSuggestionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dismissBudgetSuggestion(
    request: BudgetSuggestions.DismissBudgetSuggestionRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AnalyticsV1BudgetSuggestionsActionsDismissResponse,
    BudgetSuggestions.DismissBudgetSuggestionError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analytics/v1/budget-suggestions/{id}/actions/dismiss"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => budgetSuggestionDismissRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: analyticsV1BudgetSuggestionsActionsDismissResponseSchema },
        errorFactory: BudgetSuggestions.DismissBudgetSuggestionError,
      },
      options,
    );
  }

  /**
   * List budget suggestions
   *
   * @remarks
   * Returns the pending AI-generated budget suggestions for your account. The set is small (a
   * handful of pending suggestions) and is returned in full. Each suggestion can be accepted (after
   * you create a matching budget via `POST /analytics/v1/budgets`) or dismissed.
   *
   * @returns OK - The request succeeded.
   *
   * @throws {@link BudgetSuggestions.ListBudgetSuggestionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBudgetSuggestions(
    options?: RequestOptions,
  ): ApiPromise<AnalyticsV1BudgetSuggestionsResponse, BudgetSuggestions.ListBudgetSuggestionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/budget-suggestions"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: analyticsV1BudgetSuggestionsResponseSchema },
        errorFactory: BudgetSuggestions.ListBudgetSuggestionsError,
      },
      options,
    );
  }
}

export namespace BudgetSuggestions {
  export type AcceptBudgetSuggestionRequest = {
    /** Budget suggestion ID. */
    id: string;
    body: BudgetSuggestionAcceptRequest;
  };

  export class AcceptBudgetSuggestionError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AcceptBudgetSuggestionError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DismissBudgetSuggestionRequest = {
    /** Budget suggestion ID. */
    id: string;
    body?: BudgetSuggestionDismissRequest;
  };

  export class DismissBudgetSuggestionError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DismissBudgetSuggestionError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class ListBudgetSuggestionsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBudgetSuggestionsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
