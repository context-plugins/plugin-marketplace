export { ForceDreamClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export {
  v1OracleAnomalyDetectionRequestSchema,
  type V1OracleAnomalyDetectionRequest,
} from "./models/v1-oracle-anomaly-detection-request.js";
export {
  v1OracleClassificationRequestSchema,
  type V1OracleClassificationRequest,
} from "./models/v1-oracle-classification-request.js";
export {
  v1OracleCodeGenerationRequestSchema,
  type V1OracleCodeGenerationRequest,
} from "./models/v1-oracle-code-generation-request.js";
export {
  v1OracleFraudSignalRequestSchema,
  type V1OracleFraudSignalRequest,
} from "./models/v1-oracle-fraud-signal-request.js";
export {
  v1OracleLeadScoreRequestSchema,
  type V1OracleLeadScoreRequest,
} from "./models/v1-oracle-lead-score-request.js";
export {
  v1OracleModelInferenceRequestSchema,
  type V1OracleModelInferenceRequest,
} from "./models/v1-oracle-model-inference-request.js";
export {
  v1OraclePromptTemplateRequestSchema,
  type V1OraclePromptTemplateRequest,
} from "./models/v1-oracle-prompt-template-request.js";
export {
  v1OracleProofOfWorkRequestSchema,
  type V1OracleProofOfWorkRequest,
} from "./models/v1-oracle-proof-of-work-request.js";
export {
  v1OracleSecurityScanRequestSchema,
  type V1OracleSecurityScanRequest,
} from "./models/v1-oracle-security-scan-request.js";
export {
  v1OracleSemanticCacheRequestSchema,
  type V1OracleSemanticCacheRequest,
} from "./models/v1-oracle-semantic-cache-request.js";
export {
  v1OracleSentimentFeedRequestSchema,
  type V1OracleSentimentFeedRequest,
} from "./models/v1-oracle-sentiment-feed-request.js";
export {
  v1OracleSummarizationRequestSchema,
  type V1OracleSummarizationRequest,
} from "./models/v1-oracle-summarization-request.js";
export {
  v1OracleTaxJarLookupRequestSchema,
  type V1OracleTaxJarLookupRequest,
} from "./models/v1-oracle-tax-jar-lookup-request.js";
export {
  v1OracleTranslationRequestSchema,
  type V1OracleTranslationRequest,
} from "./models/v1-oracle-translation-request.js";
export {
  v1OracleValidationRequestSchema,
  type V1OracleValidationRequest,
} from "./models/v1-oracle-validation-request.js";

export {
  CoreError as ForceDreamError,
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
