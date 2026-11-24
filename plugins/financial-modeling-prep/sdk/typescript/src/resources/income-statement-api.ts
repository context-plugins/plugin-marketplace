import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { incomeStatementSchema, type IncomeStatement } from "../models/income-statement.js";
import { Period, periodSchema } from "../models/period.js";
import type { Servers } from "../servers.js";

export class IncomeStatementApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get company income statement
   *
   * @returns Income statement records
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinancialModelingPrepError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getIncomeStatement(
    request: IncomeStatementApi.GetIncomeStatementRequest,
    options?: RequestOptions,
  ): ApiPromise<IncomeStatement[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/income-statement/{symbol}"),
        auth: this.#auth.apiKeyQuery,
        pathParams: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        query: [
          { name: "period", value: request.period, schema: s.defaulted(periodSchema, Period.Annual) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 40) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => incomeStatementSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace IncomeStatementApi {
  export type GetIncomeStatementRequest = {
    /** Ticker symbol (e.g., AAPL, MSFT) */
    symbol: string;
    /** Reporting period @default Period.Annual */
    period?: Period;
    /** @default 40 */
    limit?: number;
  };
}
