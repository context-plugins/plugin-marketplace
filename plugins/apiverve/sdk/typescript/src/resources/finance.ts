import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  v1BalancesheetResponseSchema,
  type V1BalancesheetResponse,
} from "../models/v1-balancesheet-response.js";
import {
  v1BenchmarkrateResponseSchema,
  type V1BenchmarkrateResponse,
} from "../models/v1-benchmarkrate-response.js";
import { v1BinlookupResponseSchema, type V1BinlookupResponse } from "../models/v1-binlookup-response.js";
import { v1BitcoinResponseSchema, type V1BitcoinResponse } from "../models/v1-bitcoin-response.js";
import { v1CashflowResponseSchema, type V1CashflowResponse } from "../models/v1-cashflow-response.js";
import {
  v1CompanylookupResponseSchema,
  type V1CompanylookupResponse,
} from "../models/v1-companylookup-response.js";
import { v1CostlivingResponseSchema, type V1CostlivingResponse } from "../models/v1-costliving-response.js";
import {
  v1CpiinflationResponseSchema,
  type V1CpiinflationResponse,
} from "../models/v1-cpiinflation-response.js";
import {
  v1CurrencyconverterResponseSchema,
  type V1CurrencyconverterResponse,
} from "../models/v1-currencyconverter-response.js";
import {
  v1CurrencysymbolsResponseSchema,
  type V1CurrencysymbolsResponse,
} from "../models/v1-currencysymbols-response.js";
import { v1DividendsResponseSchema, type V1DividendsResponse } from "../models/v1-dividends-response.js";
import { v1EarningsResponseSchema, type V1EarningsResponse } from "../models/v1-earnings-response.js";
import { v1EthereumResponseSchema, type V1EthereumResponse } from "../models/v1-ethereum-response.js";
import {
  v1ExchangerateResponseSchema,
  type V1ExchangerateResponse,
} from "../models/v1-exchangerate-response.js";
import {
  v1FinancialratiosResponseSchema,
  type V1FinancialratiosResponse,
} from "../models/v1-financialratios-response.js";
import { v1GdpResponseSchema, type V1GdpResponse } from "../models/v1-gdp-response.js";
import {
  v1GlobalstockmarketResponseSchema,
  type V1GlobalstockmarketResponse,
} from "../models/v1-globalstockmarket-response.js";
import { v1GoldpriceResponseSchema, type V1GoldpriceResponse } from "../models/v1-goldprice-response.js";
import { v1IfsclookupResponseSchema, type V1IfsclookupResponse } from "../models/v1-ifsclookup-response.js";
import {
  v1IncomestatementResponseSchema,
  type V1IncomestatementResponse,
} from "../models/v1-incomestatement-response.js";
import { v1IncometaxResponseSchema, type V1IncometaxResponse } from "../models/v1-incometax-response.js";
import {
  v1IncometaxcalculatorResponseSchema,
  type V1IncometaxcalculatorResponse,
} from "../models/v1-incometaxcalculator-response.js";
import { v1InflationResponseSchema, type V1InflationResponse } from "../models/v1-inflation-response.js";
import {
  v1InsidertradingResponseSchema,
  type V1InsidertradingResponse,
} from "../models/v1-insidertrading-response.js";
import {
  v1InterestrateResponseSchema,
  type V1InterestrateResponse,
} from "../models/v1-interestrate-response.js";
import { v1JobsreportResponseSchema, type V1JobsreportResponse } from "../models/v1-jobsreport-response.js";
import {
  v1LoanpaymentcalculatorRequestSchema,
  type V1LoanpaymentcalculatorRequest,
} from "../models/v1-loanpaymentcalculator-request.js";
import {
  v1LoanpaymentcalculatorResponseSchema,
  type V1LoanpaymentcalculatorResponse,
} from "../models/v1-loanpaymentcalculator-response.js";
import {
  v1MinimumwageResponseSchema,
  type V1MinimumwageResponse,
} from "../models/v1-minimumwage-response.js";
import {
  v1MortgagecalculatorRequestSchema,
  type V1MortgagecalculatorRequest,
} from "../models/v1-mortgagecalculator-request.js";
import {
  v1MortgagecalculatorResponseSchema,
  type V1MortgagecalculatorResponse,
} from "../models/v1-mortgagecalculator-response.js";
import {
  v1MortgagerateResponseSchema,
  type V1MortgagerateResponse,
} from "../models/v1-mortgagerate-response.js";
import {
  v1NationaldebtResponseSchema,
  type V1NationaldebtResponse,
} from "../models/v1-nationaldebt-response.js";
import {
  v1PalladiumpriceResponseSchema,
  type V1PalladiumpriceResponse,
} from "../models/v1-palladiumprice-response.js";
import {
  v1PlatinumpriceResponseSchema,
  type V1PlatinumpriceResponse,
} from "../models/v1-platinumprice-response.js";
import { v1PopulationResponseSchema, type V1PopulationResponse } from "../models/v1-population-response.js";
import {
  v1PurchasingpowerResponseSchema,
  type V1PurchasingpowerResponse,
} from "../models/v1-purchasingpower-response.js";
import {
  v1RoutinglookupResponseSchema,
  type V1RoutinglookupResponse,
} from "../models/v1-routinglookup-response.js";
import { v1SalestaxResponseSchema, type V1SalestaxResponse } from "../models/v1-salestax-response.js";
import {
  v1SalestaxcalculatorResponseSchema,
  type V1SalestaxcalculatorResponse,
} from "../models/v1-salestaxcalculator-response.js";
import {
  v1SanctionscreeningResponseSchema,
  type V1SanctionscreeningResponse,
} from "../models/v1-sanctionscreening-response.js";
import {
  v1SavingsbondsResponseSchema,
  type V1SavingsbondsResponse,
} from "../models/v1-savingsbonds-response.js";
import { v1SecfilingsResponseSchema, type V1SecfilingsResponse } from "../models/v1-secfilings-response.js";
import {
  v1SilverpriceResponseSchema,
  type V1SilverpriceResponse,
} from "../models/v1-silverprice-response.js";
import {
  v1StockexchangeResponseSchema,
  type V1StockexchangeResponse,
} from "../models/v1-stockexchange-response.js";
import {
  v1StockmarketopentimesResponseSchema,
  type V1StockmarketopentimesResponse,
} from "../models/v1-stockmarketopentimes-response.js";
import {
  v1SwiftlookupResponseSchema,
  type V1SwiftlookupResponse,
} from "../models/v1-swiftlookup-response.js";
import {
  v1TradebalanceResponseSchema,
  type V1TradebalanceResponse,
} from "../models/v1-tradebalance-response.js";
import {
  v1TreasuryyieldsResponseSchema,
  type V1TreasuryyieldsResponse,
} from "../models/v1-treasuryyields-response.js";
import {
  v1UnemploymentResponseSchema,
  type V1UnemploymentResponse,
} from "../models/v1-unemployment-response.js";
import { v1VatratesResponseSchema, type V1VatratesResponse } from "../models/v1-vatrates-response.js";
import type { Servers } from "../servers.js";

export class Finance {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Balance Sheet
   *
   * @remarks
   * Get the balance sheet for a company by ticker symbol. Optionally filter to a specific fiscal
   * year and quarter.
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.BalancesheetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  balancesheet(
    request: Finance.BalancesheetRequest,
    options?: RequestOptions,
  ): ApiPromise<V1BalancesheetResponse, Finance.BalancesheetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/balancesheet"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "ticker", value: request.ticker, schema: s.string() },
          { name: "year", value: request.year, schema: s.optional(s.int()) },
          { name: "quarter", value: request.quarter, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1BalancesheetResponseSchema },
        errorFactory: Finance.BalancesheetError,
      },
      options,
    );
  }

  /**
   * Benchmark Rate
   *
   * @remarks
   * Get the current value for a specific benchmark rate.
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.BenchmarkrateError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  benchmarkrate(
    request: Finance.BenchmarkrateRequest,
    options?: RequestOptions,
  ): ApiPromise<V1BenchmarkrateResponse, Finance.BenchmarkrateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/benchmarkrate"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "rate", value: request.rate, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1BenchmarkrateResponseSchema },
        errorFactory: Finance.BenchmarkrateError,
      },
      options,
    );
  }

  /**
   * BIN Lookup
   *
   * @remarks
   * Lookup credit card information based on the BIN
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.BinlookupError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  binlookup(
    request: Finance.BinlookupRequest,
    options?: RequestOptions,
  ): ApiPromise<V1BinlookupResponse, Finance.BinlookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/binlookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "bin", value: request.bin, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1BinlookupResponseSchema },
        errorFactory: Finance.BinlookupError,
      },
      options,
    );
  }

  /**
   * Bitcoin Price
   *
   * @remarks
   * Get the current price of Bitcoin. You can optionally specify a currency, e.g. USD
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.BitcoinError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bitcoin(
    request: Finance.BitcoinRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1BitcoinResponse, Finance.BitcoinError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/bitcoin"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "currency", value: request.currency, schema: s.optional(s.string()) },
          { name: "hourly", value: request.hourly, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1BitcoinResponseSchema },
        errorFactory: Finance.BitcoinError,
      },
      options,
    );
  }

  /**
   * Cash Flow Statement
   *
   * @remarks
   * Get the cash flow statement for a company by ticker symbol. Optionally filter to a specific
   * fiscal year and quarter.
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.CashflowError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cashflow(
    request: Finance.CashflowRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CashflowResponse, Finance.CashflowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/cashflow"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "ticker", value: request.ticker, schema: s.string() },
          { name: "year", value: request.year, schema: s.optional(s.int()) },
          { name: "quarter", value: request.quarter, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CashflowResponseSchema },
        errorFactory: Finance.CashflowError,
      },
      options,
    );
  }

  /**
   * Company Lookup
   *
   * @remarks
   * Get company information by stock ticker symbol.
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.CompanylookupError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  companylookup(
    request: Finance.CompanylookupRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CompanylookupResponse, Finance.CompanylookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/companylookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "ticker", value: request.ticker, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CompanylookupResponseSchema },
        errorFactory: Finance.CompanylookupError,
      },
      options,
    );
  }

  /**
   * Cost of Living
   *
   * @remarks
   * Get the cost of living index for a specific location. Accepts state names, state codes, or
   * major city names.
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.CostlivingError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  costliving(
    request: Finance.CostlivingRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CostlivingResponse, Finance.CostlivingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/costliving"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "location", value: request.location, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CostlivingResponseSchema },
        errorFactory: Finance.CostlivingError,
      },
      options,
    );
  }

  /**
   * CPI Inflation
   *
   * @remarks
   * Get current or historical CPI inflation data by category
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.CpiinflationError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cpiinflation(
    request: Finance.CpiinflationRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1CpiinflationResponse, Finance.CpiinflationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/cpiinflation"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "date", value: request.date, schema: s.optional(s.string()) },
          { name: "category", value: request.category, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CpiinflationResponseSchema },
        errorFactory: Finance.CpiinflationError,
      },
      options,
    );
  }

  /**
   * Currency Converter
   *
   * @remarks
   * Convert currency rates based on the amount and currency
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.CurrencyconverterError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  currencyconverter(
    request: Finance.CurrencyconverterRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CurrencyconverterResponse, Finance.CurrencyconverterError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/currencyconverter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "value", value: request.value, schema: s.float64() },
          { name: "from", value: request.from, schema: s.string() },
          { name: "to", value: request.to, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CurrencyconverterResponseSchema },
        errorFactory: Finance.CurrencyconverterError,
      },
      options,
    );
  }

  /**
   * Currency Symbols
   *
   * @remarks
   * Get the currency symbol and name of a currency
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.CurrencysymbolsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  currencysymbols(
    request: Finance.CurrencysymbolsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CurrencysymbolsResponse, Finance.CurrencysymbolsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/currencysymbols"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "currency", value: request.currency, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CurrencysymbolsResponseSchema },
        errorFactory: Finance.CurrencysymbolsError,
      },
      options,
    );
  }

  /**
   * Dividends
   *
   * @remarks
   * Get the dividend-per-share history for a company by ticker symbol. Optionally choose the annual
   * or quarterly series and limit how many periods are returned.
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.DividendsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dividends(
    request: Finance.DividendsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1DividendsResponse, Finance.DividendsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/dividends"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "ticker", value: request.ticker, schema: s.string() },
          { name: "period", value: request.period, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1DividendsResponseSchema },
        errorFactory: Finance.DividendsError,
      },
      options,
    );
  }

  /**
   * Earnings Report
   *
   * @remarks
   * Get earnings and financial data for a company by ticker symbol. Optionally filter by year and
   * quarter.
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.EarningsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  earnings(
    request: Finance.EarningsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1EarningsResponse, Finance.EarningsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/earnings"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "ticker", value: request.ticker, schema: s.string() },
          { name: "year", value: request.year, schema: s.optional(s.int()) },
          { name: "quarter", value: request.quarter, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1EarningsResponseSchema },
        errorFactory: Finance.EarningsError,
      },
      options,
    );
  }

  /**
   * Ethereum Price
   *
   * @remarks
   * Get the current price of Ethereum. You can optionally specify a currency, e.g. USD
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.EthereumError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  ethereum(
    request: Finance.EthereumRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1EthereumResponse, Finance.EthereumError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/ethereum"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "currency", value: request.currency, schema: s.optional(s.string()) },
          { name: "hourly", value: request.hourly, schema: s.optional(s.boolean()) },
          { name: "hourly[].hour", value: request.hourlyHour, schema: s.optional(s.float64()) },
          { name: "hourly[].price", value: request.hourlyPrice, schema: s.optional(s.float64()) },
          { name: "hourly[].timestamp", value: request.hourlyTimestamp, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1EthereumResponseSchema },
        errorFactory: Finance.EthereumError,
      },
      options,
    );
  }

  /**
   * Exchange Rate
   *
   * @remarks
   * Exchange Rate is a simple tool for getting the current exchange rate between two currencies. It
   * returns the current exchange rate.
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.ExchangerateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  exchangerate(
    request: Finance.ExchangerateRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ExchangerateResponse, Finance.ExchangerateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/exchangerate"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "currency1", value: request.currency1, schema: s.string() },
          { name: "currency2", value: request.currency2, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1ExchangerateResponseSchema },
        errorFactory: Finance.ExchangerateError,
      },
      options,
    );
  }

  /**
   * Financial Ratios
   *
   * @remarks
   * Get the key financial ratios for a company by ticker symbol. Optionally filter to a specific
   * fiscal year and quarter.
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.FinancialratiosError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  financialratios(
    request: Finance.FinancialratiosRequest,
    options?: RequestOptions,
  ): ApiPromise<V1FinancialratiosResponse, Finance.FinancialratiosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/financialratios"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "ticker", value: request.ticker, schema: s.string() },
          { name: "year", value: request.year, schema: s.optional(s.int()) },
          { name: "quarter", value: request.quarter, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1FinancialratiosResponseSchema },
        errorFactory: Finance.FinancialratiosError,
      },
      options,
    );
  }

  /**
   * GDP Data
   *
   * @remarks
   * Get GDP data for a specific country. Returns latest data by default, or data for a specific
   * year if specified.
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.GdpError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  gdp(request: Finance.GdpRequest, options?: RequestOptions): ApiPromise<V1GdpResponse, Finance.GdpError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/gdp"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "country", value: request.country, schema: s.string() },
          { name: "year", value: request.year, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1GdpResponseSchema },
        errorFactory: Finance.GdpError,
      },
      options,
    );
  }

  /**
   * Global Stock Market
   *
   * @remarks
   * Get the current or historical share price index for a specific country.
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.GlobalstockmarketError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  globalstockmarket(
    request: Finance.GlobalstockmarketRequest,
    options?: RequestOptions,
  ): ApiPromise<V1GlobalstockmarketResponse, Finance.GlobalstockmarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/globalstockmarket"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "country", value: request.country, schema: s.string() },
          { name: "year", value: request.year, schema: s.optional(s.int()) },
          { name: "month", value: request.month, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1GlobalstockmarketResponseSchema },
        errorFactory: Finance.GlobalstockmarketError,
      },
      options,
    );
  }

  /**
   * Gold Price
   *
   * @remarks
   * Get the current price of gold. You can optionally specify a currency (defaults to USD).
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.GoldpriceError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  goldprice(
    request: Finance.GoldpriceRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1GoldpriceResponse, Finance.GoldpriceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/goldprice"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "currency", value: request.currency, schema: s.optional(s.string()) },
          { name: "hourly", value: request.hourly, schema: s.optional(s.boolean()) },
          { name: "hourly[].hour", value: request.hourlyHour, schema: s.optional(s.float64()) },
          { name: "hourly[].price", value: request.hourlyPrice, schema: s.optional(s.float64()) },
          { name: "hourly[].timestamp", value: request.hourlyTimestamp, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1GoldpriceResponseSchema },
        errorFactory: Finance.GoldpriceError,
      },
      options,
    );
  }

  /**
   * IFSC Lookup
   *
   * @remarks
   * IFSC Lookup is a simple tool for getting information on IFSC codes. It returns information on
   * various IFSC codes.
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.IfsclookupError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  ifsclookup(
    request: Finance.IfsclookupRequest,
    options?: RequestOptions,
  ): ApiPromise<V1IfsclookupResponse, Finance.IfsclookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/ifsclookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "ifsc", value: request.ifsc, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1IfsclookupResponseSchema },
        errorFactory: Finance.IfsclookupError,
      },
      options,
    );
  }

  /**
   * Income Statement
   *
   * @remarks
   * Get the income statement for a company by ticker symbol. Optionally filter to a specific fiscal
   * year and quarter.
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.IncomestatementError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  incomestatement(
    request: Finance.IncomestatementRequest,
    options?: RequestOptions,
  ): ApiPromise<V1IncomestatementResponse, Finance.IncomestatementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/incomestatement"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "ticker", value: request.ticker, schema: s.string() },
          { name: "year", value: request.year, schema: s.optional(s.int()) },
          { name: "quarter", value: request.quarter, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1IncomestatementResponseSchema },
        errorFactory: Finance.IncomestatementError,
      },
      options,
    );
  }

  /**
   * Income Tax Brackets
   *
   * @remarks
   * Get federal income tax brackets for a specific country and year.
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.IncometaxError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  incometax(
    request: Finance.IncometaxRequest,
    options?: RequestOptions,
  ): ApiPromise<V1IncometaxResponse, Finance.IncometaxError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/incometax"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "country", value: request.country, schema: s.string() },
          { name: "year", value: request.year, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1IncometaxResponseSchema },
        errorFactory: Finance.IncometaxError,
      },
      options,
    );
  }

  /**
   * Income Tax Calculator
   *
   * @remarks
   * Calculate income tax using a custom tax rate. Useful for simple flat-rate tax calculations or
   * estimations.
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.IncometaxcalculatorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  incometaxcalculator(
    request: Finance.IncometaxcalculatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1IncometaxcalculatorResponse, Finance.IncometaxcalculatorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/incometaxcalculator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "income", value: request.income, schema: s.float64() },
          { name: "rate", value: request.rate, schema: s.float64() },
          { name: "deduction", value: request.deduction, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1IncometaxcalculatorResponseSchema },
        errorFactory: Finance.IncometaxcalculatorError,
      },
      options,
    );
  }

  /**
   * Inflation Rate
   *
   * @remarks
   * Get the annual inflation rate and CPI data for a specific country and year.
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.InflationError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  inflation(
    request: Finance.InflationRequest,
    options?: RequestOptions,
  ): ApiPromise<V1InflationResponse, Finance.InflationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/inflation"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "country", value: request.country, schema: s.string() },
          { name: "year", value: request.year, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1InflationResponseSchema },
        errorFactory: Finance.InflationError,
      },
      options,
    );
  }

  /**
   * Insider Trading
   *
   * @remarks
   * Get recent SEC Form 4 insider transactions for a company by ticker symbol. Optionally filter to
   * buys or sells and limit the number of transactions returned.
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.InsidertradingError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insidertrading(
    request: Finance.InsidertradingRequest,
    options?: RequestOptions,
  ): ApiPromise<V1InsidertradingResponse, Finance.InsidertradingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/insidertrading"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "ticker", value: request.ticker, schema: s.string() },
          { name: "type", value: request.type, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1InsidertradingResponseSchema },
        errorFactory: Finance.InsidertradingError,
      },
      options,
    );
  }

  /**
   * Interest Rate
   *
   * @remarks
   * Get the central bank policy interest rate for a specific country. Omit `date` for the current
   * rate, or pass a YYYY-MM month for a historical rate (available from 2000 onwards).
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.InterestrateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  interestrate(
    request: Finance.InterestrateRequest,
    options?: RequestOptions,
  ): ApiPromise<V1InterestrateResponse, Finance.InterestrateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/interestrate"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "country", value: request.country, schema: s.string() },
          { name: "date", value: request.date, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1InterestrateResponseSchema },
        errorFactory: Finance.InterestrateError,
      },
      options,
    );
  }

  /**
   * Jobs Report
   *
   * @remarks
   * Get current or historical employment statistics
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.JobsreportError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  jobsreport(
    request: Finance.JobsreportRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1JobsreportResponse, Finance.JobsreportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/jobsreport"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1JobsreportResponseSchema },
        errorFactory: Finance.JobsreportError,
      },
      options,
    );
  }

  /**
   * Loan Calculator
   *
   * @remarks
   * Calculate loan payments based on the loan amount, interest rate, and loan term
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.LoanpaymentcalculatorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  loanpaymentcalculator(
    request: Finance.LoanpaymentcalculatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1LoanpaymentcalculatorResponse, Finance.LoanpaymentcalculatorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/loanpaymentcalculator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1LoanpaymentcalculatorRequestSchema },
      },
      {
        success: { kind: "json", schema: v1LoanpaymentcalculatorResponseSchema },
        errorFactory: Finance.LoanpaymentcalculatorError,
      },
      options,
    );
  }

  /**
   * Minimum Wage
   *
   * @remarks
   * Get minimum wage rates for all states or a specific state
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.MinimumwageError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  minimumwage(
    request: Finance.MinimumwageRequest,
    options?: RequestOptions,
  ): ApiPromise<V1MinimumwageResponse, Finance.MinimumwageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/minimumwage"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "state", value: request.state, schema: s.string() },
          { name: "year", value: request.year, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1MinimumwageResponseSchema },
        errorFactory: Finance.MinimumwageError,
      },
      options,
    );
  }

  /**
   * Mortgage Calculator
   *
   * @remarks
   * Calculate mortgage payments based on the loan amount, interest rate, and loan term
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.MortgagecalculatorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mortgagecalculator(
    request: Finance.MortgagecalculatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1MortgagecalculatorResponse, Finance.MortgagecalculatorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/mortgagecalculator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1MortgagecalculatorRequestSchema },
      },
      {
        success: { kind: "json", schema: v1MortgagecalculatorResponseSchema },
        errorFactory: Finance.MortgagecalculatorError,
      },
      options,
    );
  }

  /**
   * Mortgage Rate
   *
   * @remarks
   * Get the current or historical mortgage rate for a specific type.
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.MortgagerateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mortgagerate(
    request: Finance.MortgagerateRequest,
    options?: RequestOptions,
  ): ApiPromise<V1MortgagerateResponse, Finance.MortgagerateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/mortgagerate"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: s.string() },
          { name: "year", value: request.year, schema: s.optional(s.int()) },
          { name: "month", value: request.month, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1MortgagerateResponseSchema },
        errorFactory: Finance.MortgagerateError,
      },
      options,
    );
  }

  /**
   * National Debt
   *
   * @remarks
   * Get current or historical US national debt data
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.NationaldebtError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nationaldebt(
    request: Finance.NationaldebtRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1NationaldebtResponse, Finance.NationaldebtError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/nationaldebt"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1NationaldebtResponseSchema },
        errorFactory: Finance.NationaldebtError,
      },
      options,
    );
  }

  /**
   * Palladium Price
   *
   * @remarks
   * Get the current price of palladium. You can optionally specify a currency (defaults to USD).
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.PalladiumpriceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  palladiumprice(
    request: Finance.PalladiumpriceRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1PalladiumpriceResponse, Finance.PalladiumpriceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/palladiumprice"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "currency", value: request.currency, schema: s.optional(s.string()) },
          { name: "hourly", value: request.hourly, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1PalladiumpriceResponseSchema },
        errorFactory: Finance.PalladiumpriceError,
      },
      options,
    );
  }

  /**
   * Platinum Price
   *
   * @remarks
   * Get the current price of platinum. You can optionally specify a currency (defaults to USD).
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.PlatinumpriceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  platinumprice(
    request: Finance.PlatinumpriceRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1PlatinumpriceResponse, Finance.PlatinumpriceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/platinumprice"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "currency", value: request.currency, schema: s.optional(s.string()) },
          { name: "hourly", value: request.hourly, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1PlatinumpriceResponseSchema },
        errorFactory: Finance.PlatinumpriceError,
      },
      options,
    );
  }

  /**
   * Population Data
   *
   * @remarks
   * Get population data for a specific country. Returns latest data by default, or data for a
   * specific year if specified.
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.PopulationError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  population(
    request: Finance.PopulationRequest,
    options?: RequestOptions,
  ): ApiPromise<V1PopulationResponse, Finance.PopulationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/population"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "country", value: request.country, schema: s.string() },
          { name: "year", value: request.year, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1PopulationResponseSchema },
        errorFactory: Finance.PopulationError,
      },
      options,
    );
  }

  /**
   * Purchasing Power
   *
   * @remarks
   * Calculate the inflation-adjusted value of money between two periods
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.PurchasingpowerError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  purchasingpower(
    request: Finance.PurchasingpowerRequest,
    options?: RequestOptions,
  ): ApiPromise<V1PurchasingpowerResponse, Finance.PurchasingpowerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/purchasingpower"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "from", value: request.from, schema: s.string() },
          { name: "to", value: request.to, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1PurchasingpowerResponseSchema },
        errorFactory: Finance.PurchasingpowerError,
      },
      options,
    );
  }

  /**
   * Routing Number Lookup
   *
   * @remarks
   * Lookup routing number information based on the routing number
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.RoutinglookupError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  routinglookup(
    request: Finance.RoutinglookupRequest,
    options?: RequestOptions,
  ): ApiPromise<V1RoutinglookupResponse, Finance.RoutinglookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/routinglookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "routing", value: request.routing, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1RoutinglookupResponseSchema },
        errorFactory: Finance.RoutinglookupError,
      },
      options,
    );
  }

  /**
   * Sales Tax Lookup
   *
   * @remarks
   * Lookup the sales tax rate of a location based on the zip code
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.SalestaxError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  salestax(
    request: Finance.SalestaxRequest,
    options?: RequestOptions,
  ): ApiPromise<V1SalestaxResponse, Finance.SalestaxError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/salestax"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "zip", value: request.zip, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1SalestaxResponseSchema },
        errorFactory: Finance.SalestaxError,
      },
      options,
    );
  }

  /**
   * Sales Tax Calculator
   *
   * @remarks
   * Calculate sales tax for a purchase amount at a specific US location
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.SalestaxcalculatorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  salestaxcalculator(
    request: Finance.SalestaxcalculatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1SalestaxcalculatorResponse, Finance.SalestaxcalculatorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/salestaxcalculator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "zip", value: request.zip, schema: s.optional(s.string()) },
          { name: "state", value: request.state, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1SalestaxcalculatorResponseSchema },
        errorFactory: Finance.SalestaxcalculatorError,
      },
      options,
    );
  }

  /**
   * Sanctions Screening
   *
   * @remarks
   * Screen a person or company name against the OFAC Specially Designated Nationals list. Returns
   * scored matches, or an empty result set when the name is clear.
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.SanctionscreeningError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sanctionscreening(
    request: Finance.SanctionscreeningRequest,
    options?: RequestOptions,
  ): ApiPromise<V1SanctionscreeningResponse, Finance.SanctionscreeningError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/sanctionscreening"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "name", value: request.name, schema: s.string() },
          { name: "threshold", value: request.threshold, schema: s.optional(s.float64()) },
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
          { name: "type", value: request.type, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1SanctionscreeningResponseSchema },
        errorFactory: Finance.SanctionscreeningError,
      },
      options,
    );
  }

  /**
   * I-Bond Rates
   *
   * @remarks
   * Get current I-Bond rates and historical rate data
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.SavingsbondsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  savingsbonds(
    request: Finance.SavingsbondsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1SavingsbondsResponse, Finance.SavingsbondsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/savingsbonds"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "period", value: request.period, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1SavingsbondsResponseSchema },
        errorFactory: Finance.SavingsbondsError,
      },
      options,
    );
  }

  /**
   * SEC Filings
   *
   * @remarks
   * Get the recent SEC EDGAR filing history for a company by ticker symbol. Optionally filter to a
   * specific form type and limit the number of filings returned.
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.SecfilingsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  secfilings(
    request: Finance.SecfilingsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1SecfilingsResponse, Finance.SecfilingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/secfilings"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "ticker", value: request.ticker, schema: s.string() },
          { name: "form", value: request.form, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1SecfilingsResponseSchema },
        errorFactory: Finance.SecfilingsError,
      },
      options,
    );
  }

  /**
   * Silver Price
   *
   * @remarks
   * Get the current price of silver. You can optionally specify a currency (defaults to USD).
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.SilverpriceError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  silverprice(
    request: Finance.SilverpriceRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1SilverpriceResponse, Finance.SilverpriceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/silverprice"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "currency", value: request.currency, schema: s.optional(s.string()) },
          { name: "hourly", value: request.hourly, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1SilverpriceResponseSchema },
        errorFactory: Finance.SilverpriceError,
      },
      options,
    );
  }

  /**
   * Stock Exchange
   *
   * @remarks
   * Get stock exchange details by its Market Identifier Code (MIC).
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.StockexchangeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stockexchange(
    request: Finance.StockexchangeRequest,
    options?: RequestOptions,
  ): ApiPromise<V1StockexchangeResponse, Finance.StockexchangeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/stockexchange"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "mic", value: request.mic, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1StockexchangeResponseSchema },
        errorFactory: Finance.StockexchangeError,
      },
      options,
    );
  }

  /**
   * Stock Market Open Times
   *
   * @remarks
   * Get the open times of the stock market on the current date of the request
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.StockmarketopentimesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stockmarketopentimes(
    request: Finance.StockmarketopentimesRequest,
    options?: RequestOptions,
  ): ApiPromise<V1StockmarketopentimesResponse, Finance.StockmarketopentimesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/stockmarketopentimes"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "exchange", value: request.exchange, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1StockmarketopentimesResponseSchema },
        errorFactory: Finance.StockmarketopentimesError,
      },
      options,
    );
  }

  /**
   * SWIFT Code Lookup
   *
   * @remarks
   * Lookup SWIFT code information based on the SWIFT code
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.SwiftlookupError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  swiftlookup(
    request: Finance.SwiftlookupRequest,
    options?: RequestOptions,
  ): ApiPromise<V1SwiftlookupResponse, Finance.SwiftlookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/swiftlookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "swift", value: request.swift, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1SwiftlookupResponseSchema },
        errorFactory: Finance.SwiftlookupError,
      },
      options,
    );
  }

  /**
   * Trade Balance
   *
   * @remarks
   * Get trade balance data
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.TradebalanceError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tradebalance(
    request: Finance.TradebalanceRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1TradebalanceResponse, Finance.TradebalanceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/tradebalance"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1TradebalanceResponseSchema },
        errorFactory: Finance.TradebalanceError,
      },
      options,
    );
  }

  /**
   * Treasury Yields
   *
   * @remarks
   * Get current or historical Treasury securities interest rates
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.TreasuryyieldsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  treasuryyields(
    request: Finance.TreasuryyieldsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1TreasuryyieldsResponse, Finance.TreasuryyieldsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/treasuryyields"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "date", value: request.date, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1TreasuryyieldsResponseSchema },
        errorFactory: Finance.TreasuryyieldsError,
      },
      options,
    );
  }

  /**
   * Unemployment Rate
   *
   * @remarks
   * Get the current or historical unemployment rate for a specific country.
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.UnemploymentError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unemployment(
    request: Finance.UnemploymentRequest,
    options?: RequestOptions,
  ): ApiPromise<V1UnemploymentResponse, Finance.UnemploymentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/unemployment"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "country", value: request.country, schema: s.string() },
          { name: "year", value: request.year, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1UnemploymentResponseSchema },
        errorFactory: Finance.UnemploymentError,
      },
      options,
    );
  }

  /**
   * VAT Rates
   *
   * @remarks
   * Returns VAT rates for a country. Optionally specify a date for historical rates or a postcode
   * for regional exceptions.
   *
   * @returns Successful Response
   *
   * @throws {@link Finance.VatratesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  vatrates(
    request: Finance.VatratesRequest,
    options?: RequestOptions,
  ): ApiPromise<V1VatratesResponse, Finance.VatratesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/vatrates"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "country", value: request.country, schema: s.string() },
          { name: "date", value: request.date, schema: s.optional(s.string()) },
          { name: "postcode", value: request.postcode, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1VatratesResponseSchema },
        errorFactory: Finance.VatratesError,
      },
      options,
    );
  }
}

export namespace Finance {
  export type BalancesheetRequest = {
    /** Stock ticker symbol (e.g. AAPL, MSFT, ADBE) */
    ticker: string;
    /**
     * Fiscal year to retrieve. Defaults to latest available. History covers only the quarters
     * captured so far; a missing period answers 404 listing the available ones.
     */
    year?: number;
    /** Fiscal quarter to retrieve. Defaults to latest available. */
    quarter?: number;
  };

  export class BalancesheetError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BalancesheetError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type BenchmarkrateRequest = {
    /** The benchmark rate to retrieve */
    rate: string;
  };

  export class BenchmarkrateError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BenchmarkrateError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type BinlookupRequest = {
    /** The first six digits of the credit card number (BIN) */
    bin: string;
  };

  export class BinlookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BinlookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type BitcoinRequest = {
    /** The currency to get the price in */
    currency?: string;
    /** Include hourly price data for the past 24 hours */
    hourly?: boolean;
  };

  export class BitcoinError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BitcoinError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CashflowRequest = {
    /** Stock ticker symbol (e.g. AAPL, MSFT, ADBE) */
    ticker: string;
    /**
     * Fiscal year to retrieve. Defaults to latest available. History covers only the quarters
     * captured so far; a missing period answers 404 listing the available ones.
     */
    year?: number;
    /** Fiscal quarter to retrieve. Defaults to latest available. */
    quarter?: number;
  };

  export class CashflowError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CashflowError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CompanylookupRequest = {
    /** Stock ticker symbol (e.g. AAPL, MSFT, GOOGL) */
    ticker: string;
  };

  export class CompanylookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CompanylookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CostlivingRequest = {
    /** State name, state code (e.g., CA, NY), or major city name. */
    location: string;
  };

  export class CostlivingError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CostlivingError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CpiinflationRequest = {
    /** Optional date in YYYY-MM format for historical lookup. Omit for current data. */
    date?: string;
    /**
     * Optional category filter: all, food, housing, apparel, transportation, medical, recreation,
     * education, gasoline, electricity
     */
    category?: string;
  };

  export class CpiinflationError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CpiinflationError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CurrencyconverterRequest = {
    /** The amount to convert */
    value: number;
    /** The ISO 4217 currency code to convert from */
    from: string;
    /** The ISO 4217 currency code to convert to */
    to: string;
  };

  export class CurrencyconverterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CurrencyconverterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CurrencysymbolsRequest = {
    /** The currency code for which you want to get the symbol */
    currency: string;
  };

  export class CurrencysymbolsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CurrencysymbolsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DividendsRequest = {
    /** Stock ticker symbol (e.g. AAPL, MSFT, KO) */
    ticker: string;
    /** Which series to return in the history list: quarterly (default) or annual. */
    period?: string;
    /** Number of periods to return in the history list (1-25). Defaults to 5. */
    limit?: number;
  };

  export class DividendsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DividendsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type EarningsRequest = {
    /** Stock ticker symbol (e.g. AAPL, MSFT, ADBE) */
    ticker: string;
    /** Fiscal year to retrieve. Defaults to latest available. */
    year?: number;
    /** Fiscal quarter to retrieve. Defaults to latest available. */
    quarter?: number;
  };

  export class EarningsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<EarningsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type EthereumRequest = {
    /** The currency to get the price in */
    currency?: string;
    /** Include hourly price data for the past 24 hours */
    hourly?: boolean;
    /** UTC hour-of-day slot (0-23) the price was captured in */
    hourlyHour?: number;
    /** Price at that hour, in the requested currency */
    hourlyPrice?: number;
    /** ISO 8601 time the hourly price was captured */
    hourlyTimestamp?: string;
  };

  export class EthereumError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<EthereumError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ExchangerateRequest = {
    /** The first currency you want to get the exchange rate for */
    currency1: string;
    /** The second currency you want to get the exchange rate for */
    currency2: string;
  };

  export class ExchangerateError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExchangerateError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type FinancialratiosRequest = {
    /** Stock ticker symbol (e.g. AAPL, MSFT, ADBE) */
    ticker: string;
    /**
     * Fiscal year to retrieve. Defaults to latest available. History covers only the quarters
     * captured so far; a missing period answers 404 listing the available ones.
     */
    year?: number;
    /** Fiscal quarter to retrieve. Defaults to latest available. */
    quarter?: number;
  };

  export class FinancialratiosError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<FinancialratiosError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GdpRequest = {
    /** ISO 2 or 3-letter country code (e.g., US, USA, GB, GBR) */
    country: string;
    /** Specific year to retrieve data for (1960-present). Returns latest if not specified. */
    year?: number;
  };

  export class GdpError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GdpError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GlobalstockmarketRequest = {
    /** ISO 2-letter country code */
    country: string;
    /** Year to retrieve data for (2000-present). Requires month parameter. */
    year?: number;
    /** Month to retrieve data for (1-12). Required when year is specified. */
    month?: number;
  };

  export class GlobalstockmarketError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GlobalstockmarketError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GoldpriceRequest = {
    /** The currency to get the price in */
    currency?: string;
    /** Include hourly price data for the past 24 hours */
    hourly?: boolean;
    /** UTC hour-of-day slot (0-23) the price was captured in */
    hourlyHour?: number;
    /** Price at that hour, in the requested currency */
    hourlyPrice?: number;
    /** ISO 8601 time the hourly price was captured */
    hourlyTimestamp?: string;
  };

  export class GoldpriceError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GoldpriceError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type IfsclookupRequest = {
    /** The IFSC code to get information about */
    ifsc: string;
  };

  export class IfsclookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<IfsclookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type IncomestatementRequest = {
    /** Stock ticker symbol (e.g. AAPL, MSFT, ADBE) */
    ticker: string;
    /**
     * Fiscal year to retrieve. Defaults to latest available. History covers only the quarters
     * captured so far; a missing period answers 404 listing the available ones.
     */
    year?: number;
    /** Fiscal quarter to retrieve. Defaults to latest available. */
    quarter?: number;
  };

  export class IncomestatementError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<IncomestatementError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type IncometaxRequest = {
    /** The country code (currently only 'US' is supported) */
    country: string;
    /** The tax year to retrieve brackets for. Defaults to the previous year. */
    year?: number;
  };

  export class IncometaxError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<IncometaxError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type IncometaxcalculatorRequest = {
    /** Gross annual income in USD */
    income: number;
    /** Tax rate as a percentage (e.g., 22 for 22%) */
    rate: number;
    /** Optional deduction amount to subtract from income before calculating tax */
    deduction?: number;
  };

  export class IncometaxcalculatorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<IncometaxcalculatorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type InflationRequest = {
    /** ISO 2-letter country code (e.g., US, GB, JP, DE, BR) */
    country: string;
    /** The year to retrieve data for. Defaults to the previous year. */
    year?: number;
  };

  export class InflationError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<InflationError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type InsidertradingRequest = {
    /** Stock ticker symbol (e.g. AAPL, MSFT, ADBE) */
    ticker: string;
    /** Filter to open-market buys or sells (buy or sell). */
    type?: string;
    /** Number of transactions to return (1-25). Defaults to 5. */
    limit?: number;
  };

  export class InsidertradingError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<InsidertradingError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type InterestrateRequest = {
    /** 2-letter country code */
    country: string;
    /** Optional month in YYYY-MM format for a historical lookup. Omit for the current rate. */
    date?: string;
  };

  export class InterestrateError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<InterestrateError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type JobsreportRequest = {
    /** Optional date in YYYY-MM format for historical lookup. Omit for current data. */
    date?: string;
  };

  export class JobsreportError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<JobsreportError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type LoanpaymentcalculatorRequest = {
    body: V1LoanpaymentcalculatorRequest;
  };

  export class LoanpaymentcalculatorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<LoanpaymentcalculatorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type MinimumwageRequest = {
    /** 2-letter state code (e.g., CA, NY) */
    state: string;
    /** Year to get minimum wage for (e.g., 2020). Defaults to current year. */
    year?: number;
  };

  export class MinimumwageError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MinimumwageError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type MortgagecalculatorRequest = {
    body: V1MortgagecalculatorRequest;
  };

  export class MortgagecalculatorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MortgagecalculatorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type MortgagerateRequest = {
    /** The mortgage type */
    type: string;
    /** Year to retrieve rates for (1971-present). Requires month parameter. */
    year?: number;
    /** Month to retrieve rates for (1-12). Required when year is specified. */
    month?: number;
  };

  export class MortgagerateError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MortgagerateError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type NationaldebtRequest = {
    /** Optional date in YYYY-MM-DD format for historical lookup. Omit for current data. */
    date?: string;
  };

  export class NationaldebtError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<NationaldebtError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type PalladiumpriceRequest = {
    /** The currency to get the price in */
    currency?: string;
    /** Include hourly price data for the past 24 hours */
    hourly?: boolean;
  };

  export class PalladiumpriceError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PalladiumpriceError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type PlatinumpriceRequest = {
    /** The currency to get the price in */
    currency?: string;
    /** Include hourly price data for the past 24 hours */
    hourly?: boolean;
  };

  export class PlatinumpriceError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatinumpriceError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type PopulationRequest = {
    /** ISO 2 or 3-letter country code (e.g., US, USA, GB, GBR) */
    country: string;
    /** Specific year to retrieve data for (1960-present). Returns latest if not specified. */
    year?: number;
  };

  export class PopulationError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PopulationError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type PurchasingpowerRequest = {
    /** The dollar amount to convert */
    amount: number;
    /** Starting year (YYYY format, data available from 1947) */
    from: string;
    /** Ending year (YYYY format). Omit for current. */
    to?: string;
  };

  export class PurchasingpowerError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PurchasingpowerError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type RoutinglookupRequest = {
    /** The routing number to lookup information about */
    routing: string;
  };

  export class RoutinglookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<RoutinglookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SalestaxRequest = {
    /** The zip code for which you want to get the sales tax rate */
    zip: string;
  };

  export class SalestaxError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SalestaxError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SalestaxcalculatorRequest = {
    /** Purchase amount to calculate tax on */
    amount: number;
    /** Valid US 5-digit ZIP code (required unless state is given) */
    zip?: string;
    /** 2-letter US state code (e.g., CA, NY, TX); used when zip is not given, state rate only */
    state?: string;
  };

  export class SalestaxcalculatorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SalestaxcalculatorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SanctionscreeningRequest = {
    /** The person or company name to screen (minimum 3 characters) */
    name: string;
    /**
     * Minimum match score to return, between 0.5 and 1. Lower catches more names but returns more
     * false positives
     */
    threshold?: number;
    /** Maximum number of matches to return (1-50) */
    limit?: number;
    /** Restrict screening to one entry type */
    type?: string;
  };

  export class SanctionscreeningError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SanctionscreeningError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SavingsbondsRequest = {
    /** Specific issue period to lookup (YYYY-MM format, e.g., 2024-11). Omit for current rates. */
    period?: string;
  };

  export class SavingsbondsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SavingsbondsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SecfilingsRequest = {
    /** Stock ticker symbol (e.g. AAPL, MSFT, ADBE) */
    ticker: string;
    /** Filter to a single form type (e.g. 10-K, 10-Q, 8-K, 4). */
    form?: string;
    /** Number of filings to return (1-50). Defaults to 5. */
    limit?: number;
  };

  export class SecfilingsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SecfilingsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SilverpriceRequest = {
    /** The currency to get the price in */
    currency?: string;
    /** Include hourly price data for the past 24 hours */
    hourly?: boolean;
  };

  export class SilverpriceError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SilverpriceError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type StockexchangeRequest = {
    /** The 4-character Market Identifier Code (e.g., XNYS for NYSE, XNAS for NASDAQ) */
    mic: string;
  };

  export class StockexchangeError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StockexchangeError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type StockmarketopentimesRequest = {
    /** The stock exchange code */
    exchange: string;
  };

  export class StockmarketopentimesError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StockmarketopentimesError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SwiftlookupRequest = {
    /** The SWIFT code to lookup information about */
    swift: string;
  };

  export class SwiftlookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SwiftlookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type TradebalanceRequest = {
    /** Optional date in YYYY-MM format for historical lookup. Omit for current data. */
    date?: string;
  };

  export class TradebalanceError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TradebalanceError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type TreasuryyieldsRequest = {
    /**
     * Optional month in YYYY-MM format for a recent-month lookup (recent months only). Omit for
     * current data.
     */
    date?: string;
    /**
     * Optional filter for a single point. Legacy security types: bills, notes, bonds, tips, frn. Or
     * a maturity: 1mo, 3mo, 6mo, 1yr, 2yr, 3yr, 5yr, 7yr, 10yr, 20yr, 30yr
     */
    type?: string;
  };

  export class TreasuryyieldsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TreasuryyieldsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UnemploymentRequest = {
    /** ISO country code (2 or 3 letter). Examples: US, USA, DE, DEU, GB, GBR */
    country: string;
    /** Specific year to retrieve data for (1991-present). Returns latest if not specified. */
    year?: number;
  };

  export class UnemploymentError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnemploymentError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type VatratesRequest = {
    /** ISO 2-letter country code (e.g., DE, FR, ES) */
    country: string;
    /** Look up rate effective on this date (YYYY-MM-DD). Defaults to today. */
    date?: string;
    /** Check for regional exceptions (e.g., Canary Islands, Ceuta) */
    postcode?: string;
  };

  export class VatratesError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<VatratesError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
