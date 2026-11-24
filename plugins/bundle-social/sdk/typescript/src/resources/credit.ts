import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1BillingBillableUsageQuoteRequestInternalSchema,
  type ApiV1BillingBillableUsageQuoteRequest,
} from "../models/api-v1-billing-billable-usage-quote-request.js";
import {
  apiV1BillingBillableUsageQuoteResponseSchema,
  type ApiV1BillingBillableUsageQuoteResponse,
} from "../models/api-v1-billing-billable-usage-quote-response.js";
import {
  apiV1BillingBillableUsageQuote400Error1Schema,
  type ApiV1BillingBillableUsageQuote400Error1,
} from "../models/api-v1-billing-billable-usage-quote400-error1.js";
import {
  apiV1BillingBillableUsageQuote401Error1Schema,
  type ApiV1BillingBillableUsageQuote401Error1,
} from "../models/api-v1-billing-billable-usage-quote401-error1.js";
import {
  apiV1BillingBillableUsageQuote403Error1Schema,
  type ApiV1BillingBillableUsageQuote403Error1,
} from "../models/api-v1-billing-billable-usage-quote403-error1.js";
import {
  apiV1BillingBillableUsageQuote404Error1Schema,
  type ApiV1BillingBillableUsageQuote404Error1,
} from "../models/api-v1-billing-billable-usage-quote404-error1.js";
import {
  apiV1BillingBillableUsageQuote429Error1Schema,
  type ApiV1BillingBillableUsageQuote429Error1,
} from "../models/api-v1-billing-billable-usage-quote429-error1.js";
import {
  apiV1BillingBillableUsageQuote500Error1Schema,
  type ApiV1BillingBillableUsageQuote500Error1,
} from "../models/api-v1-billing-billable-usage-quote500-error1.js";
import {
  apiV1BillingBillableUsageQuote502Error1Schema,
  type ApiV1BillingBillableUsageQuote502Error1,
} from "../models/api-v1-billing-billable-usage-quote502-error1.js";
import {
  apiV1BillingBillableUsageQuote503Error1Schema,
  type ApiV1BillingBillableUsageQuote503Error1,
} from "../models/api-v1-billing-billable-usage-quote503-error1.js";
import {
  apiV1BillingBillableUsageQuote504Error1Schema,
  type ApiV1BillingBillableUsageQuote504Error1,
} from "../models/api-v1-billing-billable-usage-quote504-error1.js";
import {
  apiV1BillingCreditsBalanceResponseSchema,
  type ApiV1BillingCreditsBalanceResponse,
} from "../models/api-v1-billing-credits-balance-response.js";
import {
  apiV1BillingCreditsBalance400Error1Schema,
  type ApiV1BillingCreditsBalance400Error1,
} from "../models/api-v1-billing-credits-balance400-error1.js";
import {
  apiV1BillingCreditsBalance401Error1Schema,
  type ApiV1BillingCreditsBalance401Error1,
} from "../models/api-v1-billing-credits-balance401-error1.js";
import {
  apiV1BillingCreditsBalance403Error1Schema,
  type ApiV1BillingCreditsBalance403Error1,
} from "../models/api-v1-billing-credits-balance403-error1.js";
import {
  apiV1BillingCreditsBalance404Error1Schema,
  type ApiV1BillingCreditsBalance404Error1,
} from "../models/api-v1-billing-credits-balance404-error1.js";
import {
  apiV1BillingCreditsBalance429Error1Schema,
  type ApiV1BillingCreditsBalance429Error1,
} from "../models/api-v1-billing-credits-balance429-error1.js";
import {
  apiV1BillingCreditsBalance500Error1Schema,
  type ApiV1BillingCreditsBalance500Error1,
} from "../models/api-v1-billing-credits-balance500-error1.js";
import {
  apiV1BillingCreditsBalance502Error1Schema,
  type ApiV1BillingCreditsBalance502Error1,
} from "../models/api-v1-billing-credits-balance502-error1.js";
import {
  apiV1BillingCreditsBalance503Error1Schema,
  type ApiV1BillingCreditsBalance503Error1,
} from "../models/api-v1-billing-credits-balance503-error1.js";
import {
  apiV1BillingCreditsBalance504Error1Schema,
  type ApiV1BillingCreditsBalance504Error1,
} from "../models/api-v1-billing-credits-balance504-error1.js";
import type { Servers } from "../servers.js";

export class Credit {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get credit balance
   *
   * @remarks
   * Retrieve your organization's prepaid credit balance: settled funds, in-flight holds, and the
   * available amount metered X actions draw from.
   *
   * @returns 200
   *
   * @throws {@link Credit.CreditGetCreditBalanceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  creditGetCreditBalance(
    options?: RequestOptions,
  ): ApiPromise<ApiV1BillingCreditsBalanceResponse, Credit.CreditGetCreditBalanceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/billing/credits/balance"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1BillingCreditsBalanceResponseSchema },
        errorFactory: Credit.CreditGetCreditBalanceError,
      },
      options,
    );
  }

  /**
   * Quote a metered X action
   *
   * @remarks
   * Estimate the credit cost of a metered X action (post publishing, analytics reads, imports)
   * before running it, and see whether your current balance covers it.
   *
   * @returns 200
   *
   * @throws {@link Credit.CreditQuoteBillableUsageError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  creditQuoteBillableUsage(
    request: Credit.CreditQuoteBillableUsageRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1BillingBillableUsageQuoteResponse, Credit.CreditQuoteBillableUsageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/billing/billable-usage/quote"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1BillingBillableUsageQuoteRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1BillingBillableUsageQuoteResponseSchema },
        errorFactory: Credit.CreditQuoteBillableUsageError,
      },
      options,
    );
  }
}

export namespace Credit {
  export class CreditGetCreditBalanceError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1BillingCreditsBalance400Error1", ApiV1BillingCreditsBalance400Error1>
      | Declared<"apiV1BillingCreditsBalance401Error1", ApiV1BillingCreditsBalance401Error1>
      | Declared<"apiV1BillingCreditsBalance403Error1", ApiV1BillingCreditsBalance403Error1>
      | Declared<"apiV1BillingCreditsBalance404Error1", ApiV1BillingCreditsBalance404Error1>
      | Declared<"apiV1BillingCreditsBalance429Error1", ApiV1BillingCreditsBalance429Error1>
      | Declared<"apiV1BillingCreditsBalance500Error1", ApiV1BillingCreditsBalance500Error1>
      | Declared<"apiV1BillingCreditsBalance502Error1", ApiV1BillingCreditsBalance502Error1>
      | Declared<"apiV1BillingCreditsBalance503Error1", ApiV1BillingCreditsBalance503Error1>
      | Declared<"apiV1BillingCreditsBalance504Error1", ApiV1BillingCreditsBalance504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreditGetCreditBalanceError> = [
      {
        on: 400,
        kind: "apiV1BillingCreditsBalance400Error1",
        decode: { kind: "json", schema: apiV1BillingCreditsBalance400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1BillingCreditsBalance401Error1",
        decode: { kind: "json", schema: apiV1BillingCreditsBalance401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1BillingCreditsBalance403Error1",
        decode: { kind: "json", schema: apiV1BillingCreditsBalance403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1BillingCreditsBalance404Error1",
        decode: { kind: "json", schema: apiV1BillingCreditsBalance404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1BillingCreditsBalance429Error1",
        decode: { kind: "json", schema: apiV1BillingCreditsBalance429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1BillingCreditsBalance500Error1",
        decode: { kind: "json", schema: apiV1BillingCreditsBalance500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1BillingCreditsBalance502Error1",
        decode: { kind: "json", schema: apiV1BillingCreditsBalance502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1BillingCreditsBalance503Error1",
        decode: { kind: "json", schema: apiV1BillingCreditsBalance503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1BillingCreditsBalance504Error1",
        decode: { kind: "json", schema: apiV1BillingCreditsBalance504Error1Schema },
      },
    ];
  }

  export type CreditQuoteBillableUsageRequest = {
    /** Body */
    body?: ApiV1BillingBillableUsageQuoteRequest;
  };

  export class CreditQuoteBillableUsageError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1BillingBillableUsageQuote400Error1", ApiV1BillingBillableUsageQuote400Error1>
      | Declared<"apiV1BillingBillableUsageQuote401Error1", ApiV1BillingBillableUsageQuote401Error1>
      | Declared<"apiV1BillingBillableUsageQuote403Error1", ApiV1BillingBillableUsageQuote403Error1>
      | Declared<"apiV1BillingBillableUsageQuote404Error1", ApiV1BillingBillableUsageQuote404Error1>
      | Declared<"apiV1BillingBillableUsageQuote429Error1", ApiV1BillingBillableUsageQuote429Error1>
      | Declared<"apiV1BillingBillableUsageQuote500Error1", ApiV1BillingBillableUsageQuote500Error1>
      | Declared<"apiV1BillingBillableUsageQuote502Error1", ApiV1BillingBillableUsageQuote502Error1>
      | Declared<"apiV1BillingBillableUsageQuote503Error1", ApiV1BillingBillableUsageQuote503Error1>
      | Declared<"apiV1BillingBillableUsageQuote504Error1", ApiV1BillingBillableUsageQuote504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreditQuoteBillableUsageError> = [
      {
        on: 400,
        kind: "apiV1BillingBillableUsageQuote400Error1",
        decode: { kind: "json", schema: apiV1BillingBillableUsageQuote400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1BillingBillableUsageQuote401Error1",
        decode: { kind: "json", schema: apiV1BillingBillableUsageQuote401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1BillingBillableUsageQuote403Error1",
        decode: { kind: "json", schema: apiV1BillingBillableUsageQuote403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1BillingBillableUsageQuote404Error1",
        decode: { kind: "json", schema: apiV1BillingBillableUsageQuote404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1BillingBillableUsageQuote429Error1",
        decode: { kind: "json", schema: apiV1BillingBillableUsageQuote429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1BillingBillableUsageQuote500Error1",
        decode: { kind: "json", schema: apiV1BillingBillableUsageQuote500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1BillingBillableUsageQuote502Error1",
        decode: { kind: "json", schema: apiV1BillingBillableUsageQuote502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1BillingBillableUsageQuote503Error1",
        decode: { kind: "json", schema: apiV1BillingBillableUsageQuote503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1BillingBillableUsageQuote504Error1",
        decode: { kind: "json", schema: apiV1BillingBillableUsageQuote504Error1Schema },
      },
    ];
  }
}
