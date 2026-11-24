export { HealthGorillaClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { ServerEnvironment } from "./servers.js";

export { BinaryApi } from "./resources/binary-api.js";
export { CapabilityStatementApi } from "./resources/capability-statement-api.js";
export { CoverageApi } from "./resources/coverage-api.js";
export { DiagnosticReportApi } from "./resources/diagnostic-report-api.js";
export { DocumentReferenceApi } from "./resources/document-reference-api.js";
export { Observation } from "./resources/observation.js";
export { PatientApi } from "./resources/patient-api.js";
export { PractitionerApi } from "./resources/practitioner-api.js";
export { RequestGroupApi } from "./resources/request-group-api.js";
export { ServiceRequestApi } from "./resources/service-request-api.js";

export { actionSchema, type Action } from "./models/action.js";
export { attachmentSchema, type Attachment } from "./models/attachment.js";
export { binarySchema, type Binary } from "./models/binary.js";
export { bundleSchema, type Bundle } from "./models/bundle.js";
export { capabilityStatementSchema, type CapabilityStatement } from "./models/capability-statement.js";
export { contentSchema, type Content } from "./models/content.js";
export { coverageSchema, type Coverage } from "./models/coverage.js";
export { diagnosticReportSchema, type DiagnosticReport } from "./models/diagnostic-report.js";
export { documentReferenceSchema, type DocumentReference } from "./models/document-reference.js";
export { entryModelSchema, type EntryModel } from "./models/entry-model.js";
export { issueSchema, type Issue } from "./models/issue.js";
export { linkSchema, type Link } from "./models/link.js";
export { operationOutcomeSchema, type OperationOutcome } from "./models/operation-outcome.js";
export { operationOutcomeErrorSchema, type OperationOutcomeError } from "./models/operation-outcome-error.js";
export { patientSchema, type Patient } from "./models/patient.js";
export { practitionerSchema, type Practitioner } from "./models/practitioner.js";
export { requestGroupSchema, type RequestGroup } from "./models/request-group.js";
export { serviceRequestSchema, type ServiceRequest } from "./models/service-request.js";

export {
  CoreError as HealthGorillaError,
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
