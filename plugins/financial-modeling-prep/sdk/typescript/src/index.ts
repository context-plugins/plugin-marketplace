export { FinancialModelingPrepClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { BalanceSheetStatement } from "./resources/balance-sheet-statement.js";
export { CashFlowStatement } from "./resources/cash-flow-statement.js";
export { HistoricalPriceFull } from "./resources/historical-price-full.js";
export { IncomeStatementApi } from "./resources/income-statement-api.js";
export { InsiderTrading } from "./resources/insider-trading.js";
export { Profile } from "./resources/profile.js";
export { QuoteApi } from "./resources/quote-api.js";
export { Ratios } from "./resources/ratios.js";
export { Search } from "./resources/search.js";
export { Stock } from "./resources/stock.js";

export { companyProfileSchema, type CompanyProfile } from "./models/company-profile.js";
export { historicalPriceSchema, type HistoricalPrice } from "./models/historical-price.js";
export {
  historicalPriceResponseSchema,
  type HistoricalPriceResponse,
} from "./models/historical-price-response.js";
export { incomeStatementSchema, type IncomeStatement } from "./models/income-statement.js";
export { quoteSchema, type Quote } from "./models/quote.js";
export { searchResponseSchema, type SearchResponse } from "./models/search-response.js";
export { Period, periodSchema } from "./models/period.js";

export {
  CoreError as FinancialModelingPrepError,
  ResponseError,
  DecodeError,
  EncodeError,
  ConnectionError,
  TimeoutError,
  AuthError,
  PaginationError,
  ConfigurationError,
} from "./core/errors.js";
export { ApiError } from "./core/api-error.js";
export { SchemaError } from "./core/validation/schema-error.js";
export {
  defaultLoggingOptions,
  type LoggingOptions,
  type RequestLoggingOptions,
  type Logger,
  type LogDetails,
  type HttpRequestDetails,
  type RequestHeadersDetails,
  type RequestBodyDetails,
  type HttpResponseDetails,
  type ResponseHeadersDetails,
  type HttpRetryingDetails,
  type HttpFailedDetails,
  type LogLevel,
} from "./core/logging.js";
export type { ApiPromise, ApiResult } from "./core/api-promise.js";
export type { Pageable, PageableApiResult } from "./core/pagination/pageable.js";
export type { HttpMethod, RequestOptions } from "./core/api-request.js";
export type { RetryOptions, RequestRetryOptions, RetryAttempt, RetryReason } from "./core/retry.js";
export type { HookOptions, BeforeRequestHook, AfterResponseHook, HookContext } from "./core/hooks.js";
export type { BinaryContent, BinaryData, BinaryErrorContent, FileData, FileInput } from "./core/binary.js";
export type { ErrorKind } from "./core/errors.js";
export type { Declared, Undeclared } from "./core/api-error.js";
export type { Schema, EnumSchema, Encoded, ValidationResult, JsonValue } from "./core/validation/schema.js";
