export { ForceDreamClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { agentSchema, type Agent } from "./models/agent.js";
export { agent1Schema, type Agent1 } from "./models/agent1.js";
export { agentListResultSchema, type AgentListResult } from "./models/agent-list-result.js";
export { agentMetricsSchema, type AgentMetrics } from "./models/agent-metrics.js";
export { agentReliabilitySchema, type AgentReliability } from "./models/agent-reliability.js";
export { apiSignupRequestSchema, type ApiSignupRequest } from "./models/api-signup-request.js";
export { balanceSchema, type Balance } from "./models/balance.js";
export { balanceResultSchema, type BalanceResult } from "./models/balance-result.js";
export { budgetPenceSchema, type BudgetPence } from "./models/unions/budget-pence.js";
export { completedAtSchema, type CompletedAt } from "./models/unions/completed-at.js";
export { costPenceSchema, type CostPence } from "./models/unions/cost-pence.js";
export { fdProofSchema, type FdProof } from "./models/fd-proof.js";
export { FieldsSigned, fieldsSignedSchema } from "./models/fields-signed.js";
export { invokeResultSchema, type InvokeResult } from "./models/invoke-result.js";
export { reliabilityListResultSchema, type ReliabilityListResult } from "./models/reliability-list-result.js";
export { retrievedCountSchema, type RetrievedCount } from "./models/unions/retrieved-count.js";
export { signupResultSchema, type SignupResult } from "./models/signup-result.js";
export { startedAtSchema, type StartedAt } from "./models/unions/started-at.js";
export { Status, statusSchema } from "./models/status.js";
export { unauthorizedSchema, type Unauthorized } from "./models/unauthorized.js";
export { unauthorized1Schema, type Unauthorized1 } from "./models/unauthorized1.js";
export {
  v1AgentsInvokeRequestSchema,
  type V1AgentsInvokeRequest,
} from "./models/v1-agents-invoke-request.js";
export {
  v1AgentsInvokeResponseSchema,
  type V1AgentsInvokeResponse,
} from "./models/v1-agents-invoke-response.js";
export {
  v1WorkforceProofPublicKeyResponseSchema,
  type V1WorkforceProofPublicKeyResponse,
} from "./models/v1-workforce-proof-public-key-response.js";
export {
  v1WorkforceProofPublicResponseSchema,
  type V1WorkforceProofPublicResponse,
} from "./models/v1-workforce-proof-public-response.js";
export { verifyResultSchema, type VerifyResult } from "./models/verify-result.js";

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
