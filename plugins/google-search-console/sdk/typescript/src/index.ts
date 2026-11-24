export { GoogleSearchConsoleClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export {
  PkceMethod,
  type SecretProvider,
  type OAuth2AuthorizationCodeCredentials,
  type AuthorizationCodePrompt,
} from "./core/auth/credentials.js";
export type {
  OAuth2RefreshableTokenStrategy,
  OAuthToken,
  OAuth2CredentialPlacement,
  OAuthTokenRefreshable,
} from "./core/auth/oauth2-strategies.js";

export { Searchanalytics } from "./resources/searchanalytics.js";
export { Sitemaps } from "./resources/sitemaps.js";
export { Sites } from "./resources/sites.js";
export { UrlInspection } from "./resources/url-inspection.js";
export { UrlTestingTools } from "./resources/url-testing-tools.js";

export { AggregationType, aggregationTypeSchema } from "./models/aggregation-type.js";
export { AmpIndexStatusVerdict, ampIndexStatusVerdictSchema } from "./models/amp-index-status-verdict.js";
export { ampInspectionResultSchema, type AmpInspectionResult } from "./models/amp-inspection-result.js";
export { ampInspectionResult2Schema, type AmpInspectionResult2 } from "./models/amp-inspection-result2.js";
export { ampIssueSchema, type AmpIssue } from "./models/amp-issue.js";
export { apiDataRowSchema, type ApiDataRow } from "./models/api-data-row.js";
export { apiDimensionFilterSchema, type ApiDimensionFilter } from "./models/api-dimension-filter.js";
export {
  apiDimensionFilterGroupSchema,
  type ApiDimensionFilterGroup,
} from "./models/api-dimension-filter-group.js";
export { blockedResourceSchema, type BlockedResource } from "./models/blocked-resource.js";
export { blockedResource1Schema, type BlockedResource1 } from "./models/blocked-resource1.js";
export { CrawledAs, crawledAsSchema } from "./models/crawled-as.js";
export { DataState, dataStateSchema } from "./models/data-state.js";
export { detectedItemsSchema, type DetectedItems } from "./models/detected-items.js";
export { Dimension, dimensionSchema } from "./models/dimension.js";
export { Dimension1, dimension1Schema } from "./models/dimension1.js";
export { errorSchema, type Error } from "./models/error.js";
export { googleRpcErrorSchema, type GoogleRpcError } from "./models/google-rpc-error.js";
export { googleRpcErrorErrorSchema, type GoogleRpcErrorError } from "./models/google-rpc-error-error.js";
export { GroupType, groupTypeSchema } from "./models/group-type.js";
export { imageSchema, type Image } from "./models/image.js";
export { image1Schema, type Image1 } from "./models/image1.js";
export {
  indexStatusInspectionResultSchema,
  type IndexStatusInspectionResult,
} from "./models/index-status-inspection-result.js";
export {
  indexStatusInspectionResult2Schema,
  type IndexStatusInspectionResult2,
} from "./models/index-status-inspection-result2.js";
export { IndexingState, indexingStateSchema } from "./models/indexing-state.js";
export { IndexingState1, indexingState1Schema } from "./models/indexing-state1.js";
export {
  inspectUrlIndexRequestSchema,
  type InspectUrlIndexRequest,
} from "./models/inspect-url-index-request.js";
export {
  inspectUrlIndexResponseSchema,
  type InspectUrlIndexResponse,
} from "./models/inspect-url-index-response.js";
export { IssueType, issueTypeSchema } from "./models/issue-type.js";
export { itemSchema, type Item } from "./models/item.js";
export { metadataSchema, type Metadata } from "./models/metadata.js";
export { metadata1Schema, type Metadata1 } from "./models/metadata1.js";
export { MobileFriendliness, mobileFriendlinessSchema } from "./models/mobile-friendliness.js";
export { mobileFriendlyIssueSchema, type MobileFriendlyIssue } from "./models/mobile-friendly-issue.js";
export {
  mobileUsabilityInspectionResultSchema,
  type MobileUsabilityInspectionResult,
} from "./models/mobile-usability-inspection-result.js";
export {
  mobileUsabilityInspectionResult1Schema,
  type MobileUsabilityInspectionResult1,
} from "./models/mobile-usability-inspection-result1.js";
export { mobileUsabilityIssueSchema, type MobileUsabilityIssue } from "./models/mobile-usability-issue.js";
export { Operator, operatorSchema } from "./models/operator.js";
export { PageFetchState, pageFetchStateSchema } from "./models/page-fetch-state.js";
export { PageFetchState1, pageFetchState1Schema } from "./models/page-fetch-state1.js";
export { PermissionLevel, permissionLevelSchema } from "./models/permission-level.js";
export { resourceIssueSchema, type ResourceIssue } from "./models/resource-issue.js";
export {
  ResponseAggregationType,
  responseAggregationTypeSchema,
} from "./models/response-aggregation-type.js";
export {
  richResultsInspectionResultSchema,
  type RichResultsInspectionResult,
} from "./models/rich-results-inspection-result.js";
export {
  richResultsInspectionResult2Schema,
  type RichResultsInspectionResult2,
} from "./models/rich-results-inspection-result2.js";
export { richResultsIssueSchema, type RichResultsIssue } from "./models/rich-results-issue.js";
export { RobotsTxtState, robotsTxtStateSchema } from "./models/robots-txt-state.js";
export { Rule, ruleSchema } from "./models/rule.js";
export {
  runMobileFriendlyTestRequestSchema,
  type RunMobileFriendlyTestRequest,
} from "./models/run-mobile-friendly-test-request.js";
export {
  runMobileFriendlyTestResponseSchema,
  type RunMobileFriendlyTestResponse,
} from "./models/run-mobile-friendly-test-response.js";
export {
  searchAnalyticsQueryRequestSchema,
  type SearchAnalyticsQueryRequest,
} from "./models/search-analytics-query-request.js";
export {
  searchAnalyticsQueryResponseSchema,
  type SearchAnalyticsQueryResponse,
} from "./models/search-analytics-query-response.js";
export { SearchType, searchTypeSchema } from "./models/search-type.js";
export { Severity, severitySchema } from "./models/severity.js";
export { Severity1, severity1Schema } from "./models/severity1.js";
export { Severity2, severity2Schema } from "./models/severity2.js";
export { sitemapsListResponseSchema, type SitemapsListResponse } from "./models/sitemaps-list-response.js";
export { sitesListResponseSchema, type SitesListResponse } from "./models/sites-list-response.js";
export { Status, statusSchema } from "./models/status.js";
export { testStatusSchema, type TestStatus } from "./models/test-status.js";
export { testStatus1Schema, type TestStatus1 } from "./models/test-status1.js";
export { Type, typeSchema } from "./models/type.js";
export { Type1, type1Schema } from "./models/type1.js";
export {
  TypeGoogleSearchConsoleSitemapsApi,
  typeGoogleSearchConsoleSitemapsApiSchema,
} from "./models/type-google-search-console-sitemaps-api.js";
export { urlInspectionResultSchema, type UrlInspectionResult } from "./models/url-inspection-result.js";
export { urlInspectionResult1Schema, type UrlInspectionResult1 } from "./models/url-inspection-result1.js";
export { Verdict, verdictSchema } from "./models/verdict.js";
export { Verdict1, verdict1Schema } from "./models/verdict1.js";
export { Verdict2, verdict2Schema } from "./models/verdict2.js";
export { Verdict3, verdict3Schema } from "./models/verdict3.js";
export { wmxSiteSchema, type WmxSite } from "./models/wmx-site.js";
export { wmxSitemapSchema, type WmxSitemap } from "./models/wmx-sitemap.js";
export { wmxSitemapContentSchema, type WmxSitemapContent } from "./models/wmx-sitemap-content.js";

export {
  CoreError as GoogleSearchConsoleError,
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
