export { TranscriptFetchClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { System } from "./resources/system.js";
export { Transcripts } from "./resources/transcripts.js";

export { aiFallbackSchema, type AiFallback } from "./models/ai-fallback.js";
export { batchEnvelopeSchema, type BatchEnvelope } from "./models/batch-envelope.js";
export { batchRequestSchema, type BatchRequest } from "./models/batch-request.js";
export { batchResultSchema, type BatchResult } from "./models/batch-result.js";
export { batchResult2Schema, type BatchResult2 } from "./models/batch-result2.js";
export { channelRequestSchema, type ChannelRequest } from "./models/channel-request.js";
export { channelRequest2Schema, type ChannelRequest2 } from "./models/channel-request2.js";
export { Code, codeSchema } from "./models/code.js";
export { Code1, code1Schema } from "./models/code1.js";
export { dataSchema, type Data } from "./models/data.js";
export { data1Schema, type Data1 } from "./models/unions/data1.js";
export {
  dataTranscriptfetchSystemApiSchema,
  type DataTranscriptfetchSystemApi,
} from "./models/unions/data-transcriptfetch-system-api.js";
export { errorSchema, type Error } from "./models/error.js";
export { errorBlockSchema, type ErrorBlock } from "./models/error-block.js";
export { errorEnvelopeSchema, type ErrorEnvelope } from "./models/error-envelope.js";
export { errorEnvelope2Schema, type ErrorEnvelope2 } from "./models/error-envelope2.js";
export { errorEnvelopeErrorSchema, type ErrorEnvelopeError } from "./models/error-envelope-error.js";
export {
  errorTranscriptfetchTranscriptsApiSchema,
  type ErrorTranscriptfetchTranscriptsApi,
} from "./models/error-transcriptfetch-transcripts-api.js";
export { healthSchema, type Health } from "./models/health.js";
export { jobAcceptedEnvelopeSchema, type JobAcceptedEnvelope } from "./models/job-accepted-envelope.js";
export { jobAcceptedEnvelope2Schema, type JobAcceptedEnvelope2 } from "./models/job-accepted-envelope2.js";
export { jobStatusEnvelopeSchema, type JobStatusEnvelope } from "./models/job-status-envelope.js";
export { jobStatusEnvelope2Schema, type JobStatusEnvelope2 } from "./models/job-status-envelope2.js";
export { Kind, kindSchema } from "./models/kind.js";
export { meDataSchema, type MeData } from "./models/me-data.js";
export { Mode, modeSchema } from "./models/mode.js";
export { Mode1, mode1Schema } from "./models/mode1.js";
export { Number, numberSchema } from "./models/number.js";
export { Outcome, outcomeSchema } from "./models/outcome.js";
export { Outcome1, outcome1Schema } from "./models/outcome1.js";
export { Platform, platformSchema } from "./models/platform.js";
export { Platform1, platform1Schema } from "./models/platform1.js";
export { playlistRequestSchema, type PlaylistRequest } from "./models/playlist-request.js";
export { playlistRequest2Schema, type PlaylistRequest2 } from "./models/playlist-request2.js";
export { podcastSchema, type Podcast } from "./models/podcast.js";
export { ResolvedVia, resolvedViaSchema } from "./models/resolved-via.js";
export { retryWithSchema, type RetryWith } from "./models/retry-with.js";
export { searchRequestSchema, type SearchRequest } from "./models/search-request.js";
export { searchRequest2Schema, type SearchRequest2 } from "./models/search-request2.js";
export { segmentSchema, type Segment } from "./models/segment.js";
export { Source, sourceSchema } from "./models/source.js";
export { Source1, source1Schema } from "./models/source1.js";
export { statsSchema, type Stats } from "./models/stats.js";
export { Status, statusSchema } from "./models/status.js";
export {
  StatusTranscriptfetchTranscriptsApi,
  statusTranscriptfetchTranscriptsApiSchema,
} from "./models/status-transcriptfetch-transcripts-api.js";
export { successEnvelopeSchema, type SuccessEnvelope } from "./models/success-envelope.js";
export { Timestamps, timestampsSchema } from "./models/timestamps.js";
export { timestamps1Schema, type Timestamps1 } from "./models/unions/timestamps1.js";
export { transcriptDataSchema, type TranscriptData } from "./models/transcript-data.js";
export { transcriptData2Schema, type TranscriptData2 } from "./models/transcript-data2.js";
export { transcriptJobDataSchema, type TranscriptJobData } from "./models/transcript-job-data.js";
export { UnavailableReason, unavailableReasonSchema } from "./models/unavailable-reason.js";
export { usageSchema, type Usage } from "./models/usage.js";
export { videoSchema, type Video } from "./models/video.js";
export { videoListDataSchema, type VideoListData } from "./models/video-list-data.js";
export { videoListData2Schema, type VideoListData2 } from "./models/video-list-data2.js";
export { videoRequestSchema, type VideoRequest } from "./models/video-request.js";
export { video2Schema, type Video2 } from "./models/video2.js";

export {
  CoreError as TranscriptFetchError,
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
