export { GoogleCloudApiGatewayClient } from "./client.js";
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

export { apigatewayApiSchema, type ApigatewayApi } from "./models/apigateway-api.js";
export { apigatewayApiConfigSchema, type ApigatewayApiConfig } from "./models/apigateway-api-config.js";
export {
  apigatewayApiConfigFileSchema,
  type ApigatewayApiConfigFile,
} from "./models/apigateway-api-config-file.js";
export {
  apigatewayApiConfigFile1Schema,
  type ApigatewayApiConfigFile1,
} from "./models/apigateway-api-config-file1.js";
export {
  apigatewayApiConfigFile3Schema,
  type ApigatewayApiConfigFile3,
} from "./models/apigateway-api-config-file3.js";
export {
  apigatewayApiConfigGrpcServiceDefinitionSchema,
  type ApigatewayApiConfigGrpcServiceDefinition,
} from "./models/apigateway-api-config-grpc-service-definition.js";
export {
  apigatewayApiConfigOpenApiDocumentSchema,
  type ApigatewayApiConfigOpenApiDocument,
} from "./models/apigateway-api-config-open-api-document.js";
export { apigatewayAuditConfigSchema, type ApigatewayAuditConfig } from "./models/apigateway-audit-config.js";
export {
  apigatewayAuditLogConfigSchema,
  type ApigatewayAuditLogConfig,
} from "./models/apigateway-audit-log-config.js";
export { apigatewayBindingSchema, type ApigatewayBinding } from "./models/apigateway-binding.js";
export { apigatewayExprSchema, type ApigatewayExpr } from "./models/apigateway-expr.js";
export { apigatewayExpr2Schema, type ApigatewayExpr2 } from "./models/apigateway-expr2.js";
export { apigatewayGatewaySchema, type ApigatewayGateway } from "./models/apigateway-gateway.js";
export {
  apigatewayListApiConfigsResponseSchema,
  type ApigatewayListApiConfigsResponse,
} from "./models/apigateway-list-api-configs-response.js";
export {
  apigatewayListApisResponseSchema,
  type ApigatewayListApisResponse,
} from "./models/apigateway-list-apis-response.js";
export {
  apigatewayListGatewaysResponseSchema,
  type ApigatewayListGatewaysResponse,
} from "./models/apigateway-list-gateways-response.js";
export {
  apigatewayListLocationsResponseSchema,
  type ApigatewayListLocationsResponse,
} from "./models/apigateway-list-locations-response.js";
export {
  apigatewayListOperationsResponseSchema,
  type ApigatewayListOperationsResponse,
} from "./models/apigateway-list-operations-response.js";
export { apigatewayLocationSchema, type ApigatewayLocation } from "./models/apigateway-location.js";
export { apigatewayOperationSchema, type ApigatewayOperation } from "./models/apigateway-operation.js";
export { apigatewayPolicySchema, type ApigatewayPolicy } from "./models/apigateway-policy.js";
export { apigatewayPolicy1Schema, type ApigatewayPolicy1 } from "./models/apigateway-policy1.js";
export {
  apigatewaySetIamPolicyRequestSchema,
  type ApigatewaySetIamPolicyRequest,
} from "./models/apigateway-set-iam-policy-request.js";
export { apigatewayStatusSchema, type ApigatewayStatus } from "./models/apigateway-status.js";
export { apigatewayStatus2Schema, type ApigatewayStatus2 } from "./models/apigateway-status2.js";
export {
  apigatewayTestIamPermissionsRequestSchema,
  type ApigatewayTestIamPermissionsRequest,
} from "./models/apigateway-test-iam-permissions-request.js";
export {
  apigatewayTestIamPermissionsResponseSchema,
  type ApigatewayTestIamPermissionsResponse,
} from "./models/apigateway-test-iam-permissions-response.js";
export { EffectiveStreamingMode, effectiveStreamingModeSchema } from "./models/effective-streaming-mode.js";
export { errorSchema, type Error } from "./models/error.js";
export { googleRpcErrorSchema, type GoogleRpcError } from "./models/google-rpc-error.js";
export { googleRpcErrorErrorSchema, type GoogleRpcErrorError } from "./models/google-rpc-error-error.js";
export { LogType, logTypeSchema } from "./models/log-type.js";
export { State, stateSchema } from "./models/state.js";
export { State1, state1Schema } from "./models/state1.js";
export { State2, state2Schema } from "./models/state2.js";
export { StreamingMode, streamingModeSchema } from "./models/streaming-mode.js";
export { View, viewSchema } from "./models/view.js";

export {
  CoreError as GoogleCloudApiGatewayError,
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
