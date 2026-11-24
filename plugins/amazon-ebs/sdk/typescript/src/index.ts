export { AmazonEbsClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { AmazonEbsAmazonElasticBlockStoreEbsApi } from "./resources/amazon-ebs-amazon-elastic-block-store-ebs-api.js";
export { Blocks } from "./resources/blocks.js";

export { accessDeniedExceptionSchema, type AccessDeniedException } from "./models/access-denied-exception.js";
export {
  accessDeniedExceptionErrorSchema,
  type AccessDeniedExceptionError,
} from "./models/access-denied-exception-error.js";
export { blockSchema, type Block } from "./models/block.js";
export { changedBlockSchema, type ChangedBlock } from "./models/changed-block.js";
export { ChecksumAlgorithm, checksumAlgorithmSchema } from "./models/checksum-algorithm.js";
export { ChecksumAlgorithm1, checksumAlgorithm1Schema } from "./models/checksum-algorithm1.js";
export {
  completeSnapshotResponseSchema,
  type CompleteSnapshotResponse,
} from "./models/complete-snapshot-response.js";
export {
  concurrentLimitExceededExceptionSchema,
  type ConcurrentLimitExceededException,
} from "./models/concurrent-limit-exceeded-exception.js";
export {
  concurrentLimitExceededExceptionErrorSchema,
  type ConcurrentLimitExceededExceptionError,
} from "./models/concurrent-limit-exceeded-exception-error.js";
export { conflictExceptionSchema, type ConflictException } from "./models/conflict-exception.js";
export {
  conflictExceptionErrorSchema,
  type ConflictExceptionError,
} from "./models/conflict-exception-error.js";
export {
  getSnapshotBlockResponseSchema,
  type GetSnapshotBlockResponse,
} from "./models/get-snapshot-block-response.js";
export {
  internalServerExceptionSchema,
  type InternalServerException,
} from "./models/internal-server-exception.js";
export {
  internalServerExceptionErrorSchema,
  type InternalServerExceptionError,
} from "./models/internal-server-exception-error.js";
export {
  listChangedBlocksResponseSchema,
  type ListChangedBlocksResponse,
} from "./models/list-changed-blocks-response.js";
export {
  listSnapshotBlocksResponseSchema,
  type ListSnapshotBlocksResponse,
} from "./models/list-snapshot-blocks-response.js";
export {
  putSnapshotBlockResponseSchema,
  type PutSnapshotBlockResponse,
} from "./models/put-snapshot-block-response.js";
export { Reason, reasonSchema } from "./models/reason.js";
export { Reason1, reason1Schema } from "./models/reason1.js";
export { Reason2, reason2Schema } from "./models/reason2.js";
export { Reason3, reason3Schema } from "./models/reason3.js";
export {
  requestThrottledExceptionSchema,
  type RequestThrottledException,
} from "./models/request-throttled-exception.js";
export {
  requestThrottledExceptionErrorSchema,
  type RequestThrottledExceptionError,
} from "./models/request-throttled-exception-error.js";
export {
  resourceNotFoundExceptionSchema,
  type ResourceNotFoundException,
} from "./models/resource-not-found-exception.js";
export {
  resourceNotFoundExceptionErrorSchema,
  type ResourceNotFoundExceptionError,
} from "./models/resource-not-found-exception-error.js";
export {
  serviceQuotaExceededExceptionSchema,
  type ServiceQuotaExceededException,
} from "./models/service-quota-exceeded-exception.js";
export {
  serviceQuotaExceededExceptionErrorSchema,
  type ServiceQuotaExceededExceptionError,
} from "./models/service-quota-exceeded-exception-error.js";
export { snapshotsRequestSchema, type SnapshotsRequest } from "./models/snapshots-request.js";
export { SseType, sseTypeSchema } from "./models/sse-type.js";
export { startSnapshotResponseSchema, type StartSnapshotResponse } from "./models/start-snapshot-response.js";
export { Status, statusSchema } from "./models/status.js";
export { tagSchema, type Tag } from "./models/tag.js";
export {
  XAmzChecksumAggregationMethod,
  xAmzChecksumAggregationMethodSchema,
} from "./models/xamz-checksum-aggregation-method.js";
export { XAmzChecksumAlgorithm, xAmzChecksumAlgorithmSchema } from "./models/xamz-checksum-algorithm.js";

export {
  CoreError as AmazonEbsError,
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
