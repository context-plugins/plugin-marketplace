export { AmazonSqsClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { Messages } from "./resources/messages.js";
export { Permissions } from "./resources/permissions.js";
export { Queues } from "./resources/queues.js";
export { Tags } from "./resources/tags.js";

export { addPermissionRequestSchema, type AddPermissionRequest } from "./models/add-permission-request.js";
export { AttributeName, attributeNameSchema } from "./models/attribute-name.js";
export {
  batchEntryIdsNotDistinctSchema,
  type BatchEntryIdsNotDistinct,
} from "./models/batch-entry-ids-not-distinct.js";
export {
  batchEntryIdsNotDistinctErrorSchema,
  type BatchEntryIdsNotDistinctError,
} from "./models/batch-entry-ids-not-distinct-error.js";
export {
  batchResultErrorEntrySchema,
  type BatchResultErrorEntry,
} from "./models/batch-result-error-entry.js";
export {
  cancelMessageMoveTaskRequestSchema,
  type CancelMessageMoveTaskRequest,
} from "./models/cancel-message-move-task-request.js";
export {
  cancelMessageMoveTaskResultSchema,
  type CancelMessageMoveTaskResult,
} from "./models/cancel-message-move-task-result.js";
export {
  changeMessageVisibilityBatchRequestSchema,
  type ChangeMessageVisibilityBatchRequest,
} from "./models/change-message-visibility-batch-request.js";
export {
  changeMessageVisibilityBatchRequestEntrySchema,
  type ChangeMessageVisibilityBatchRequestEntry,
} from "./models/change-message-visibility-batch-request-entry.js";
export {
  changeMessageVisibilityBatchResultSchema,
  type ChangeMessageVisibilityBatchResult,
} from "./models/change-message-visibility-batch-result.js";
export {
  changeMessageVisibilityBatchResultEntrySchema,
  type ChangeMessageVisibilityBatchResultEntry,
} from "./models/change-message-visibility-batch-result-entry.js";
export {
  changeMessageVisibilityRequestSchema,
  type ChangeMessageVisibilityRequest,
} from "./models/change-message-visibility-request.js";
export { createQueueRequestSchema, type CreateQueueRequest } from "./models/create-queue-request.js";
export { createQueueResultSchema, type CreateQueueResult } from "./models/create-queue-result.js";
export {
  deleteMessageBatchRequestSchema,
  type DeleteMessageBatchRequest,
} from "./models/delete-message-batch-request.js";
export {
  deleteMessageBatchRequestEntrySchema,
  type DeleteMessageBatchRequestEntry,
} from "./models/delete-message-batch-request-entry.js";
export {
  deleteMessageBatchResultSchema,
  type DeleteMessageBatchResult,
} from "./models/delete-message-batch-result.js";
export {
  deleteMessageBatchResultEntrySchema,
  type DeleteMessageBatchResultEntry,
} from "./models/delete-message-batch-result-entry.js";
export { deleteMessageRequestSchema, type DeleteMessageRequest } from "./models/delete-message-request.js";
export { deleteQueueRequestSchema, type DeleteQueueRequest } from "./models/delete-queue-request.js";
export {
  getQueueAttributesRequestSchema,
  type GetQueueAttributesRequest,
} from "./models/get-queue-attributes-request.js";
export {
  getQueueAttributesResultSchema,
  type GetQueueAttributesResult,
} from "./models/get-queue-attributes-result.js";
export { getQueueUrlRequestSchema, type GetQueueUrlRequest } from "./models/get-queue-url-request.js";
export { getQueueUrlResultSchema, type GetQueueUrlResult } from "./models/get-queue-url-result.js";
export { invalidAddressSchema, type InvalidAddress } from "./models/invalid-address.js";
export { invalidAddressErrorSchema, type InvalidAddressError } from "./models/invalid-address-error.js";
export { invalidAttributeNameSchema, type InvalidAttributeName } from "./models/invalid-attribute-name.js";
export {
  invalidAttributeNameErrorSchema,
  type InvalidAttributeNameError,
} from "./models/invalid-attribute-name-error.js";
export {
  invalidMessageContentsSchema,
  type InvalidMessageContents,
} from "./models/invalid-message-contents.js";
export {
  invalidMessageContentsErrorSchema,
  type InvalidMessageContentsError,
} from "./models/invalid-message-contents-error.js";
export { invalidSecuritySchema, type InvalidSecurity } from "./models/invalid-security.js";
export { invalidSecurityErrorSchema, type InvalidSecurityError } from "./models/invalid-security-error.js";
export { kmsAccessDeniedSchema, type KmsAccessDenied } from "./models/kms-access-denied.js";
export { kmsAccessDeniedErrorSchema, type KmsAccessDeniedError } from "./models/kms-access-denied-error.js";
export {
  listDeadLetterSourceQueuesRequestSchema,
  type ListDeadLetterSourceQueuesRequest,
} from "./models/list-dead-letter-source-queues-request.js";
export {
  listDeadLetterSourceQueuesResultSchema,
  type ListDeadLetterSourceQueuesResult,
} from "./models/list-dead-letter-source-queues-result.js";
export {
  listMessageMoveTasksRequestSchema,
  type ListMessageMoveTasksRequest,
} from "./models/list-message-move-tasks-request.js";
export {
  listMessageMoveTasksResultSchema,
  type ListMessageMoveTasksResult,
} from "./models/list-message-move-tasks-result.js";
export {
  listMessageMoveTasksResultEntrySchema,
  type ListMessageMoveTasksResultEntry,
} from "./models/list-message-move-tasks-result-entry.js";
export { listQueueTagsRequestSchema, type ListQueueTagsRequest } from "./models/list-queue-tags-request.js";
export { listQueueTagsResultSchema, type ListQueueTagsResult } from "./models/list-queue-tags-result.js";
export { listQueuesRequestSchema, type ListQueuesRequest } from "./models/list-queues-request.js";
export { listQueuesResultSchema, type ListQueuesResult } from "./models/list-queues-result.js";
export { messageSchema, type Message } from "./models/message.js";
export { messageAttributeValueSchema, type MessageAttributeValue } from "./models/message-attribute-value.js";
export {
  MessageSystemAttributeName,
  messageSystemAttributeNameSchema,
} from "./models/message-system-attribute-name.js";
export {
  messageSystemAttributeValueSchema,
  type MessageSystemAttributeValue,
} from "./models/message-system-attribute-value.js";
export { purgeQueueRequestSchema, type PurgeQueueRequest } from "./models/purge-queue-request.js";
export { queueDoesNotExistSchema, type QueueDoesNotExist } from "./models/queue-does-not-exist.js";
export {
  queueDoesNotExistErrorSchema,
  type QueueDoesNotExistError,
} from "./models/queue-does-not-exist-error.js";
export { receiveMessageRequestSchema, type ReceiveMessageRequest } from "./models/receive-message-request.js";
export { receiveMessageResultSchema, type ReceiveMessageResult } from "./models/receive-message-result.js";
export {
  removePermissionRequestSchema,
  type RemovePermissionRequest,
} from "./models/remove-permission-request.js";
export {
  sendMessageBatchRequestSchema,
  type SendMessageBatchRequest,
} from "./models/send-message-batch-request.js";
export {
  sendMessageBatchRequestEntrySchema,
  type SendMessageBatchRequestEntry,
} from "./models/send-message-batch-request-entry.js";
export {
  sendMessageBatchResultSchema,
  type SendMessageBatchResult,
} from "./models/send-message-batch-result.js";
export {
  sendMessageBatchResultEntrySchema,
  type SendMessageBatchResultEntry,
} from "./models/send-message-batch-result-entry.js";
export { sendMessageRequestSchema, type SendMessageRequest } from "./models/send-message-request.js";
export { sendMessageResultSchema, type SendMessageResult } from "./models/send-message-result.js";
export {
  setQueueAttributesRequestSchema,
  type SetQueueAttributesRequest,
} from "./models/set-queue-attributes-request.js";
export {
  startMessageMoveTaskRequestSchema,
  type StartMessageMoveTaskRequest,
} from "./models/start-message-move-task-request.js";
export {
  startMessageMoveTaskResultSchema,
  type StartMessageMoveTaskResult,
} from "./models/start-message-move-task-result.js";
export { tagQueueRequestSchema, type TagQueueRequest } from "./models/tag-queue-request.js";
export { unsupportedOperationSchema, type UnsupportedOperation } from "./models/unsupported-operation.js";
export {
  unsupportedOperationErrorSchema,
  type UnsupportedOperationError,
} from "./models/unsupported-operation-error.js";
export { untagQueueRequestSchema, type UntagQueueRequest } from "./models/untag-queue-request.js";
export { XAmzTarget, xAmzTargetSchema } from "./models/xamz-target.js";
export { XAmzTarget1, xAmzTarget1Schema } from "./models/xamz-target1.js";
export {
  XAmzTarget1AmazonSimpleQueueServicePermissionsApi,
  xAmzTarget1AmazonSimpleQueueServicePermissionsApiSchema,
} from "./models/xamz-target1-amazon-simple-queue-service-permissions-api.js";
export {
  XAmzTarget1AmazonSimpleQueueServiceQueuesApi,
  xAmzTarget1AmazonSimpleQueueServiceQueuesApiSchema,
} from "./models/xamz-target1-amazon-simple-queue-service-queues-api.js";
export {
  XAmzTarget1AmazonSimpleQueueServiceTagsApi,
  xAmzTarget1AmazonSimpleQueueServiceTagsApiSchema,
} from "./models/xamz-target1-amazon-simple-queue-service-tags-api.js";
export { XAmzTarget2, xAmzTarget2Schema } from "./models/xamz-target2.js";
export {
  XAmzTarget2AmazonSimpleQueueServiceQueuesApi,
  xAmzTarget2AmazonSimpleQueueServiceQueuesApiSchema,
} from "./models/xamz-target2-amazon-simple-queue-service-queues-api.js";
export {
  XAmzTarget2AmazonSimpleQueueServiceTagsApi,
  xAmzTarget2AmazonSimpleQueueServiceTagsApiSchema,
} from "./models/xamz-target2-amazon-simple-queue-service-tags-api.js";
export { XAmzTarget3, xAmzTarget3Schema } from "./models/xamz-target3.js";
export {
  XAmzTarget3AmazonSimpleQueueServiceQueuesApi,
  xAmzTarget3AmazonSimpleQueueServiceQueuesApiSchema,
} from "./models/xamz-target3-amazon-simple-queue-service-queues-api.js";
export { XAmzTarget4, xAmzTarget4Schema } from "./models/xamz-target4.js";
export {
  XAmzTarget4AmazonSimpleQueueServiceQueuesApi,
  xAmzTarget4AmazonSimpleQueueServiceQueuesApiSchema,
} from "./models/xamz-target4-amazon-simple-queue-service-queues-api.js";
export { XAmzTarget5, xAmzTarget5Schema } from "./models/xamz-target5.js";
export {
  XAmzTarget5AmazonSimpleQueueServiceQueuesApi,
  xAmzTarget5AmazonSimpleQueueServiceQueuesApiSchema,
} from "./models/xamz-target5-amazon-simple-queue-service-queues-api.js";
export { XAmzTarget6, xAmzTarget6Schema } from "./models/xamz-target6.js";
export {
  XAmzTarget6AmazonSimpleQueueServiceQueuesApi,
  xAmzTarget6AmazonSimpleQueueServiceQueuesApiSchema,
} from "./models/xamz-target6-amazon-simple-queue-service-queues-api.js";
export { XAmzTarget7, xAmzTarget7Schema } from "./models/xamz-target7.js";
export {
  XAmzTarget7AmazonSimpleQueueServiceQueuesApi,
  xAmzTarget7AmazonSimpleQueueServiceQueuesApiSchema,
} from "./models/xamz-target7-amazon-simple-queue-service-queues-api.js";
export { XAmzTarget8, xAmzTarget8Schema } from "./models/xamz-target8.js";
export {
  XAmzTarget8AmazonSimpleQueueServiceQueuesApi,
  xAmzTarget8AmazonSimpleQueueServiceQueuesApiSchema,
} from "./models/xamz-target8-amazon-simple-queue-service-queues-api.js";
export { XAmzTarget9, xAmzTarget9Schema } from "./models/xamz-target9.js";
export {
  XAmzTarget9AmazonSimpleQueueServiceQueuesApi,
  xAmzTarget9AmazonSimpleQueueServiceQueuesApiSchema,
} from "./models/xamz-target9-amazon-simple-queue-service-queues-api.js";
export {
  XAmzTargetAmazonSimpleQueueServicePermissionsApi,
  xAmzTargetAmazonSimpleQueueServicePermissionsApiSchema,
} from "./models/xamz-target-amazon-simple-queue-service-permissions-api.js";
export {
  XAmzTargetAmazonSimpleQueueServiceQueuesApi,
  xAmzTargetAmazonSimpleQueueServiceQueuesApiSchema,
} from "./models/xamz-target-amazon-simple-queue-service-queues-api.js";
export {
  XAmzTargetAmazonSimpleQueueServiceTagsApi,
  xAmzTargetAmazonSimpleQueueServiceTagsApiSchema,
} from "./models/xamz-target-amazon-simple-queue-service-tags-api.js";

export {
  CoreError as AmazonSqsError,
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
