export { LiliClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { addressDataSchema, type AddressData } from "./models/address-data.js";
export { addressData2Schema, type AddressData2 } from "./models/address-data2.js";
export { addressData3Schema, type AddressData3 } from "./models/address-data3.js";
export { addressData4Schema, type AddressData4 } from "./models/address-data4.js";
export { addressData5Schema, type AddressData5 } from "./models/address-data5.js";
export { BusinessType, businessTypeSchema } from "./models/business-type.js";
export { documentDataSchema, type DocumentData } from "./models/document-data.js";
export { eddQuestionDataSchema, type EddQuestionData } from "./models/edd-question-data.js";
export { jsonErrorResponseSchema, type JsonErrorResponse } from "./models/json-error-response.js";
export {
  jsonErrorResponseErrorSchema,
  type JsonErrorResponseError,
} from "./models/json-error-response-error.js";
export { jsonSingleErrorSchema, type JsonSingleError } from "./models/json-single-error.js";
export { jsonSingleError2Schema, type JsonSingleError2 } from "./models/json-single-error2.js";
export { leadRequestSchema, type LeadRequest } from "./models/lead-request.js";
export { leadResponseSchema, type LeadResponse } from "./models/lead-response.js";
export { leadUploadSchema, type LeadUpload } from "./models/lead-upload.js";
export { LlcFileType, llcFileTypeSchema } from "./models/llc-file-type.js";
export {
  paymentListItemResponseSchema,
  type PaymentListItemResponse,
} from "./models/payment-list-item-response.js";
export { paymentListResponseSchema, type PaymentListResponse } from "./models/payment-list-response.js";
export { paymentRequestSchema, type PaymentRequest } from "./models/payment-request.js";
export { paymentResponseSchema, type PaymentResponse } from "./models/payment-response.js";
export { Role, roleSchema } from "./models/role.js";
export { Status, statusSchema } from "./models/status.js";
export { Status1, status1Schema } from "./models/status1.js";
export { Status2, status2Schema } from "./models/status2.js";
export { Type, typeSchema } from "./models/type.js";
export { uboDataSchema, type UboData } from "./models/ubo-data.js";
export { uboResponseDataSchema, type UboResponseData } from "./models/ubo-response-data.js";
export { Version, versionSchema } from "./models/version.js";
export { webhookCreateResponseSchema, type WebhookCreateResponse } from "./models/webhook-create-response.js";
export { webhookListResponseSchema, type WebhookListResponse } from "./models/webhook-list-response.js";
export { webhookRequestModelSchema, type WebhookRequestModel } from "./models/webhook-request-model.js";
export { webhookResponseSchema, type WebhookResponse } from "./models/webhook-response.js";

export {
  CoreError as LiliError,
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
