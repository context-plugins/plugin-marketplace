export { StatableClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { ServerEnvironment } from "./servers.js";

export { Bootstrap } from "./resources/bootstrap.js";
export { Keys } from "./resources/keys.js";
export { Sites } from "./resources/sites.js";
export { Stats } from "./resources/stats.js";

export { apiKeySchema, type ApiKey } from "./models/api-key.js";
export { apiKeyEventSchema, type ApiKeyEvent } from "./models/api-key-event.js";
export { apiKeyEventListSchema, type ApiKeyEventList } from "./models/api-key-event-list.js";
export { apiKeyListSchema, type ApiKeyList } from "./models/api-key-list.js";
export {
  bootstrapSendOtpRequestSchema,
  type BootstrapSendOtpRequest,
} from "./models/bootstrap-send-otp-request.js";
export {
  bootstrapSendOtpResponseSchema,
  type BootstrapSendOtpResponse,
} from "./models/bootstrap-send-otp-response.js";
export {
  bootstrapVerifyOtpRequestSchema,
  type BootstrapVerifyOtpRequest,
} from "./models/bootstrap-verify-otp-request.js";
export {
  bootstrapVerifyOtpResponseSchema,
  type BootstrapVerifyOtpResponse,
} from "./models/bootstrap-verify-otp-response.js";
export { Code, codeSchema } from "./models/code.js";
export { compareSchema, type Compare } from "./models/compare.js";
export { Compare1, compare1Schema } from "./models/compare1.js";
export { compare11Schema, type Compare11 } from "./models/unions/compare11.js";
export { countryEntrySchema, type CountryEntry } from "./models/country-entry.js";
export { countryListSchema, type CountryList } from "./models/country-list.js";
export { countryListRequestSchema, type CountryListRequest } from "./models/country-list-request.js";
export { createApiKeyRequestSchema, type CreateApiKeyRequest } from "./models/create-api-key-request.js";
export { createSiteRequestSchema, type CreateSiteRequest } from "./models/create-site-request.js";
export { createdApiKeySchema, type CreatedApiKey } from "./models/created-api-key.js";
export {
  currentVisitorsResponseSchema,
  type CurrentVisitorsResponse,
} from "./models/current-visitors-response.js";
export { dateRangeSchema, type DateRange } from "./models/unions/date-range.js";
export { Dimension, dimensionSchema } from "./models/dimension.js";
export { errorSchema, type Error } from "./models/error.js";
export { errorErrorSchema, type ErrorError } from "./models/error-error.js";
export { Event, eventSchema } from "./models/event.js";
export { Field, fieldSchema } from "./models/field.js";
export { filterSchema, type Filter } from "./models/filter.js";
export { funnelSchema, type Funnel } from "./models/funnel.js";
export { funnelDefinitionSchema, type FunnelDefinition } from "./models/funnel-definition.js";
export { funnelReportRequestSchema, type FunnelReportRequest } from "./models/funnel-report-request.js";
export { funnelReportResponseSchema, type FunnelReportResponse } from "./models/funnel-report-response.js";
export { funnelReportStepSchema, type FunnelReportStep } from "./models/funnel-report-step.js";
export { funnelRequestSchema, type FunnelRequest } from "./models/funnel-request.js";
export { funnelStepSchema, type FunnelStep } from "./models/funnel-step.js";
export { funnelsResponseSchema, type FunnelsResponse } from "./models/funnels-response.js";
export { goalSchema, type Goal } from "./models/goal.js";
export { goalRequestSchema, type GoalRequest } from "./models/goal-request.js";
export { hostnameListSchema, type HostnameList } from "./models/hostname-list.js";
export { hostnameListRequestSchema, type HostnameListRequest } from "./models/hostname-list-request.js";
export { Kind, kindSchema } from "./models/kind.js";
export { metaSchema, type Meta } from "./models/meta.js";
export { Metric, metricSchema } from "./models/metric.js";
export { Operator, operatorSchema } from "./models/operator.js";
export {
  OperatorStatableStatsApi,
  operatorStatableStatsApiSchema,
} from "./models/operator-statable-stats-api.js";
export { propSchema, type Prop } from "./models/prop.js";
export { propsResponseSchema, type PropsResponse } from "./models/props-response.js";
export { publicDashboardSchema, type PublicDashboard } from "./models/public-dashboard.js";
export { queryEchoSchema, type QueryEcho } from "./models/query-echo.js";
export { queryRequestSchema, type QueryRequest } from "./models/query-request.js";
export { queryResponseSchema, type QueryResponse } from "./models/query-response.js";
export { resultRowSchema, type ResultRow } from "./models/result-row.js";
export { Scope, scopeSchema } from "./models/scope.js";
export {
  ScopeStatableStatsSitesApi,
  scopeStatableStatsSitesApiSchema,
} from "./models/scope-statable-stats-sites-api.js";
export { settingsCountSchema, type SettingsCount } from "./models/settings-count.js";
export { siteDetailSchema, type SiteDetail } from "./models/site-detail.js";
export { siteSnippetSchema, type SiteSnippet } from "./models/site-snippet.js";
export { siteStatsSchema, type SiteStats } from "./models/site-stats.js";
export { siteSummarySchema, type SiteSummary } from "./models/site-summary.js";
export { sitesGoalsResponseSchema, type SitesGoalsResponse } from "./models/sites-goals-response.js";
export {
  sitesSettingsBlockedIpsResponseSchema,
  type SitesSettingsBlockedIpsResponse,
} from "./models/sites-settings-blocked-ips-response.js";
export { sitesResponseSchema, type SitesResponse } from "./models/sites-response.js";
export { Status, statusSchema } from "./models/status.js";
export { subscriptionResponseSchema, type SubscriptionResponse } from "./models/subscription-response.js";
export { trackingFeatureStateSchema, type TrackingFeatureState } from "./models/tracking-feature-state.js";
export { trackingSettingsSchema, type TrackingSettings } from "./models/tracking-settings.js";
export {
  trackingSettingsRequestSchema,
  type TrackingSettingsRequest,
} from "./models/tracking-settings-request.js";
export { updateSiteRequestSchema, type UpdateSiteRequest } from "./models/update-site-request.js";
export { userSchema, type User } from "./models/user.js";
export { Type, typeSchema } from "./models/type.js";

export {
  CoreError as StatableError,
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
