export { Search1ApiClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { Account } from "./resources/account.js";
export { Crawl } from "./resources/crawl.js";
export { Feedback } from "./resources/feedback.js";
export { Screenshot } from "./resources/screenshot.js";
export { Search } from "./resources/search.js";
export { System } from "./resources/system.js";

export { agentSchema, type Agent } from "./models/agent.js";
export { Animations, animationsSchema } from "./models/animations.js";
export { apiErrorModelSchema, type ApiErrorModel } from "./models/api-error-model.js";
export { apiErrorErrorSchema, type ApiErrorError } from "./models/api-error-error.js";
export { askRequestSchema, type AskRequest } from "./models/ask-request.js";
export { askResponseSchema, type AskResponse } from "./models/ask-response.js";
export { askResultSchema, type AskResult } from "./models/ask-result.js";
export { Category, categorySchema } from "./models/category.js";
export { ColorScheme, colorSchemeSchema } from "./models/color-scheme.js";
export { crawlRequestSchema, type CrawlRequest } from "./models/crawl-request.js";
export { crawlRequest1Schema, type CrawlRequest1 } from "./models/unions/crawl-request1.js";
export { crawlResponse1Schema, type CrawlResponse1 } from "./models/unions/crawl-response1.js";
export { crawlParametersSchema, type CrawlParameters } from "./models/crawl-parameters.js";
export { crawlResponseSchema, type CrawlResponse } from "./models/crawl-response.js";
export { crawlResultSchema, type CrawlResult } from "./models/crawl-result.js";
export { CredentialType, credentialTypeSchema } from "./models/credential-type.js";
export { deepcrawlRequestSchema, type DeepcrawlRequest } from "./models/deepcrawl-request.js";
export {
  deepcrawlAcceptedResponseSchema,
  type DeepcrawlAcceptedResponse,
} from "./models/deepcrawl-accepted-response.js";
export {
  deepcrawlStatusResponseSchema,
  type DeepcrawlStatusResponse,
} from "./models/deepcrawl-status-response.js";
export { errorSchema, type Error } from "./models/error.js";
export { error1Schema, type Error1 } from "./models/error1.js";
export { error2Schema, type Error2 } from "./models/error2.js";
export { extractRequestSchema, type ExtractRequest } from "./models/extract-request.js";
export { extractParametersSchema, type ExtractParameters } from "./models/extract-parameters.js";
export { extractResponseSchema, type ExtractResponse } from "./models/extract-response.js";
export { feedbackRequestSchema, type FeedbackRequest } from "./models/feedback-request.js";
export { feedbackResponseSchema, type FeedbackResponse } from "./models/feedback-response.js";
export { Format, formatSchema } from "./models/format.js";
export { healthResponseSchema, type HealthResponse } from "./models/health-response.js";
export { intentSchema, type Intent } from "./models/intent.js";
export { Kind, kindSchema } from "./models/kind.js";
export { newsRequestSchema, type NewsRequest } from "./models/unions/news-request.js";
export { newsResponse1Schema, type NewsResponse1 } from "./models/unions/news-response1.js";
export { newsBatchResponseSchema, type NewsBatchResponse } from "./models/news-batch-response.js";
export { newsParametersSchema, type NewsParameters } from "./models/news-parameters.js";
export { newsResponseSchema, type NewsResponse } from "./models/news-response.js";
export { resultSchema, type Result } from "./models/result.js";
export { result1Schema, type Result1 } from "./models/result1.js";
export { screenshotRequestSchema, type ScreenshotRequest } from "./models/screenshot-request.js";
export { searchRequestSchema, type SearchRequest } from "./models/unions/search-request.js";
export { searchResponse1Schema, type SearchResponse1 } from "./models/unions/search-response1.js";
export { searchBatchResponseSchema, type SearchBatchResponse } from "./models/search-batch-response.js";
export { searchParametersSchema, type SearchParameters } from "./models/search-parameters.js";
export { searchResponseSchema, type SearchResponse } from "./models/search-response.js";
export { searchResultSchema, type SearchResult } from "./models/search-result.js";
export { SearchService, searchServiceSchema } from "./models/search-service.js";
export { SearchService1, searchService1Schema } from "./models/search-service1.js";
export { sitemapRequestSchema, type SitemapRequest } from "./models/sitemap-request.js";
export { sitemapResponseSchema, type SitemapResponse } from "./models/sitemap-response.js";
export { Status, statusSchema } from "./models/status.js";
export { summarySchema, type Summary } from "./models/summary.js";
export { TimeRange, timeRangeSchema } from "./models/time-range.js";
export { TimeRange1, timeRange1Schema } from "./models/time-range1.js";
export { trendingRequestSchema, type TrendingRequest } from "./models/trending-request.js";
export { trendingResponseSchema, type TrendingResponse } from "./models/trending-response.js";
export { trendingResultSchema, type TrendingResult } from "./models/trending-result.js";
export { Type, typeSchema } from "./models/type.js";
export { usageResponseSchema, type UsageResponse } from "./models/usage-response.js";
export { viewportSchema, type Viewport } from "./models/viewport.js";
export { WaitUntil, waitUntilSchema } from "./models/wait-until.js";
export { Period, periodSchema } from "./models/period.js";

export {
  CoreError as Search1ApiError,
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
