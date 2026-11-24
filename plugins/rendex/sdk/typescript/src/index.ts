export { RendexClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { Account } from "./resources/account.js";
export { Batch } from "./resources/batch.js";
export { Health } from "./resources/health.js";
export { Jobs } from "./resources/jobs.js";
export { Screenshot } from "./resources/screenshot.js";
export { WatchApi } from "./resources/watch-api.js";

export { batchRequestSchema, type BatchRequest } from "./models/batch-request.js";
export { batchResponseSchema, type BatchResponse } from "./models/batch-response.js";
export { batchStatusResponseSchema, type BatchStatusResponse } from "./models/batch-status-response.js";
export { BlockResourceType, blockResourceTypeSchema } from "./models/block-resource-type.js";
export { brandingSchema, type Branding } from "./models/branding.js";
export { checksSchema, type Checks } from "./models/checks.js";
export { cookieSchema, type Cookie } from "./models/cookie.js";
export { createWatchRequestSchema, type CreateWatchRequest } from "./models/create-watch-request.js";
export { dataSchema, type Data } from "./models/data.js";
export { data1Schema, type Data1 } from "./models/data1.js";
export {
  data1RendexRenderingScreenshotApiSchema,
  type Data1RendexRenderingScreenshotApi,
} from "./models/data1-rendex-rendering-screenshot-api.js";
export {
  data1RendexRenderingWatchApiSchema,
  type Data1RendexRenderingWatchApi,
} from "./models/data1-rendex-rendering-watch-api.js";
export { data2Schema, type Data2 } from "./models/data2.js";
export {
  data2RendexRenderingWatchApiSchema,
  type Data2RendexRenderingWatchApi,
} from "./models/data2-rendex-rendering-watch-api.js";
export { data3Schema, type Data3 } from "./models/data3.js";
export {
  dataRendexRenderingBatchApiSchema,
  type DataRendexRenderingBatchApi,
} from "./models/data-rendex-rendering-batch-api.js";
export {
  dataRendexRenderingJobsApiSchema,
  type DataRendexRenderingJobsApi,
} from "./models/data-rendex-rendering-jobs-api.js";
export {
  dataRendexRenderingScreenshotApiSchema,
  type DataRendexRenderingScreenshotApi,
} from "./models/data-rendex-rendering-screenshot-api.js";
export {
  dataRendexRenderingWatchApiSchema,
  type DataRendexRenderingWatchApi,
} from "./models/data-rendex-rendering-watch-api.js";
export { deepHealthResponseSchema, type DeepHealthResponse } from "./models/deep-health-response.js";
export {
  deepHealthResponseErrorSchema,
  type DeepHealthResponseError,
} from "./models/deep-health-response-error.js";
export { dependencyCheckSchema, type DependencyCheck } from "./models/dependency-check.js";
export { Device, deviceSchema } from "./models/device.js";
export {
  DeviceRendexRenderingWatchApi,
  deviceRendexRenderingWatchApiSchema,
} from "./models/device-rendex-rendering-watch-api.js";
export { DiffMode, diffModeSchema } from "./models/diff-mode.js";
export { DiffMode1, diffMode1Schema } from "./models/diff-mode1.js";
export { errorSchema, type Error } from "./models/error.js";
export { ErrorCode, errorCodeSchema } from "./models/error-code.js";
export { errorResponseSchema, type ErrorResponse } from "./models/error-response.js";
export { errorResponseErrorSchema, type ErrorResponseError } from "./models/error-response-error.js";
export { ExtractFormat, extractFormatSchema } from "./models/extract-format.js";
export { ExtractFormat1, extractFormat1Schema } from "./models/extract-format1.js";
export { Format, formatSchema } from "./models/format.js";
export { Format1, format1Schema } from "./models/format1.js";
export { Format3, format3Schema } from "./models/format3.js";
export { Format4, format4Schema } from "./models/format4.js";
export {
  FormatRendexRenderingWatchApi,
  formatRendexRenderingWatchApiSchema,
} from "./models/format-rendex-rendering-watch-api.js";
export { healthResponseSchema, type HealthResponse } from "./models/health-response.js";
export { ignoreRegionSchema, type IgnoreRegion } from "./models/ignore-region.js";
export { InputFormat, inputFormatSchema } from "./models/input-format.js";
export { jobSchema, type Job } from "./models/job.js";
export { jobStatusResponseSchema, type JobStatusResponse } from "./models/job-status-response.js";
export { lastChangeSchema, type LastChange } from "./models/last-change.js";
export { marginSchema, type Margin } from "./models/margin.js";
export { Orientation, orientationSchema } from "./models/orientation.js";
export { pageSetupSchema, type PageSetup } from "./models/page-setup.js";
export { PdfFormat, pdfFormatSchema } from "./models/pdf-format.js";
export { pdfMarginSchema, type PdfMargin } from "./models/pdf-margin.js";
export { Plan, planSchema } from "./models/plan.js";
export { Quality, qualitySchema } from "./models/quality.js";
export { responseMetaSchema, type ResponseMeta } from "./models/response-meta.js";
export { SameSite, sameSiteSchema } from "./models/same-site.js";
export {
  screenshotJsonResponseSchema,
  type ScreenshotJsonResponse,
} from "./models/screenshot-json-response.js";
export { screenshotRequestSchema, type ScreenshotRequest } from "./models/screenshot-request.js";
export { Size, sizeSchema } from "./models/size.js";
export { Status, statusSchema } from "./models/status.js";
export { Status1, status1Schema } from "./models/status1.js";
export {
  Status1RendexRenderingJobsApi,
  status1RendexRenderingJobsApiSchema,
} from "./models/status1-rendex-rendering-jobs-api.js";
export {
  Status1RendexRenderingWatchApi,
  status1RendexRenderingWatchApiSchema,
} from "./models/status1-rendex-rendering-watch-api.js";
export { Status2, status2Schema } from "./models/status2.js";
export {
  Status2RendexRenderingJobsApi,
  status2RendexRenderingJobsApiSchema,
} from "./models/status2-rendex-rendering-jobs-api.js";
export { Status3, status3Schema } from "./models/status3.js";
export {
  StatusRendexRenderingHealthApi,
  statusRendexRenderingHealthApiSchema,
} from "./models/status-rendex-rendering-health-api.js";
export {
  StatusRendexRenderingJobsApi,
  statusRendexRenderingJobsApiSchema,
} from "./models/status-rendex-rendering-jobs-api.js";
export {
  StatusRendexRenderingWatchApi,
  statusRendexRenderingWatchApiSchema,
} from "./models/status-rendex-rendering-watch-api.js";
export { textDiffSchema, type TextDiff } from "./models/text-diff.js";
export { UaMode, uaModeSchema } from "./models/ua-mode.js";
export { updateWatchRequestSchema, type UpdateWatchRequest } from "./models/update-watch-request.js";
export { upgradeSchema, type Upgrade } from "./models/upgrade.js";
export { urlSchema, type Url } from "./models/url.js";
export { usageSchema, type Usage } from "./models/usage.js";
export { v1AccountResponseSchema, type V1AccountResponse } from "./models/v1-account-response.js";
export { v1ArtifactRequestSchema, type V1ArtifactRequest } from "./models/v1-artifact-request.js";
export { v1ArtifactResponseSchema, type V1ArtifactResponse } from "./models/v1-artifact-response.js";
export { v1ExtractRequestSchema, type V1ExtractRequest } from "./models/v1-extract-request.js";
export { v1ExtractResponseSchema, type V1ExtractResponse } from "./models/v1-extract-response.js";
export { v1RenderLinkRequestSchema, type V1RenderLinkRequest } from "./models/v1-render-link-request.js";
export { v1RenderLinkResponseSchema, type V1RenderLinkResponse } from "./models/v1-render-link-response.js";
export { v1WatchesResponseSchema, type V1WatchesResponse } from "./models/v1-watches-response.js";
export { v1WatchesResponse1Schema, type V1WatchesResponse1 } from "./models/v1-watches-response1.js";
export { v1WatchesRunResponseSchema, type V1WatchesRunResponse } from "./models/v1-watches-run-response.js";
export {
  v1WatchesRunsResponseSchema,
  type V1WatchesRunsResponse,
} from "./models/v1-watches-runs-response.js";
export {
  v1WatchesTestResponseSchema,
  type V1WatchesTestResponse,
} from "./models/v1-watches-test-response.js";
export { WaitUntil, waitUntilSchema } from "./models/wait-until.js";
export {
  WaitUntilRendexRenderingWatchApi,
  waitUntilRendexRenderingWatchApiSchema,
} from "./models/wait-until-rendex-rendering-watch-api.js";
export { watchSchema, type Watch } from "./models/watch.js";
export { watchChangedRegionSchema, type WatchChangedRegion } from "./models/watch-changed-region.js";
export { watchRenderParamsSchema, type WatchRenderParams } from "./models/watch-render-params.js";
export { watchRunSchema, type WatchRun } from "./models/watch-run.js";
export { watchTestResultSchema, type WatchTestResult } from "./models/watch-test-result.js";
export { Device1, device1Schema } from "./models/device1.js";
export {
  Status2RendexRenderingWatchApi,
  status2RendexRenderingWatchApiSchema,
} from "./models/status2-rendex-rendering-watch-api.js";
export { WaitUntil1, waitUntil1Schema } from "./models/wait-until1.js";

export {
  CoreError as RendexError,
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
