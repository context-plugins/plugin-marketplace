export { JuriSignClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { Account } from "./resources/account.js";
export { Authentication } from "./resources/authentication.js";
export { Bulk } from "./resources/bulk.js";
export { Documents } from "./resources/documents.js";
export { PublicForms } from "./resources/public-forms.js";
export { SignRequests } from "./resources/sign-requests.js";
export { Templates } from "./resources/templates.js";
export { Webhooks } from "./resources/webhooks.js";

export {
  accountCreditsResponseSchema,
  type AccountCreditsResponse,
} from "./models/account-credits-response.js";
export {
  authSandboxTokenRequestSchema,
  type AuthSandboxTokenRequest,
} from "./models/auth-sandbox-token-request.js";
export {
  authSandboxTokenResponseSchema,
  type AuthSandboxTokenResponse,
} from "./models/auth-sandbox-token-response.js";
export { authTokenRequestSchema, type AuthTokenRequest } from "./models/auth-token-request.js";
export { authTokenResponseSchema, type AuthTokenResponse } from "./models/auth-token-response.js";
export { authUserSchema, type AuthUser } from "./models/auth-user.js";
export {
  bulkCampaignsCancelResponseSchema,
  type BulkCampaignsCancelResponse,
} from "./models/bulk-campaigns-cancel-response.js";
export {
  bulkCampaignsExportResponseSchema,
  type BulkCampaignsExportResponse,
} from "./models/bulk-campaigns-export-response.js";
export {
  bulkCampaignsLaunchResponseSchema,
  type BulkCampaignsLaunchResponse,
} from "./models/bulk-campaigns-launch-response.js";
export { bulkCampaignsRequestSchema, type BulkCampaignsRequest } from "./models/bulk-campaigns-request.js";
export { bulkCampaignsResponseSchema, type BulkCampaignsResponse } from "./models/bulk-campaigns-response.js";
export {
  bulkCampaignsResponse1Schema,
  type BulkCampaignsResponse1,
} from "./models/bulk-campaigns-response1.js";
export {
  bulkCampaignsResponse2Schema,
  type BulkCampaignsResponse2,
} from "./models/bulk-campaigns-response2.js";
export {
  bulkCampaignsRetryResponseSchema,
  type BulkCampaignsRetryResponse,
} from "./models/bulk-campaigns-retry-response.js";
export { bulkTemplatesRequestSchema, type BulkTemplatesRequest } from "./models/bulk-templates-request.js";
export { bulkTemplatesRequest1Schema, type BulkTemplatesRequest1 } from "./models/bulk-templates-request1.js";
export { bulkTemplatesResponseSchema, type BulkTemplatesResponse } from "./models/bulk-templates-response.js";
export {
  bulkTemplatesResponse1Schema,
  type BulkTemplatesResponse1,
} from "./models/bulk-templates-response1.js";
export { bulkCampaignSchema, type BulkCampaign } from "./models/bulk-campaign.js";
export { bulkTemplateSchema, type BulkTemplate } from "./models/bulk-template.js";
export {
  createSignRequestInputSchema,
  type CreateSignRequestInput,
} from "./models/create-sign-request-input.js";
export { createdBySchema, type CreatedBy } from "./models/created-by.js";
export { dataSchema, type Data } from "./models/data.js";
export { datumSchema, type Datum } from "./models/datum.js";
export { documentSchema, type Document } from "./models/document.js";
export { document1Schema, type Document1 } from "./models/document1.js";
export {
  documentJuriSignSignRequestsApiSchema,
  type DocumentJuriSignSignRequestsApi,
} from "./models/document-juri-sign-sign-requests-api.js";
export {
  documentJuriSignTemplatesApiSchema,
  type DocumentJuriSignTemplatesApi,
} from "./models/document-juri-sign-templates-api.js";
export { documentsResponseSchema, type DocumentsResponse } from "./models/documents-response.js";
export { documentsResponse1Schema, type DocumentsResponse1 } from "./models/documents-response1.js";
export { downloadsSchema, type Downloads } from "./models/downloads.js";
export { errorSchema, type Error } from "./models/error.js";
export { error1Schema, type Error1 } from "./models/error1.js";
export { Event, eventSchema } from "./models/event.js";
export { forbiddenSchema, type Forbidden } from "./models/forbidden.js";
export { messageResponseSchema, type MessageResponse } from "./models/message-response.js";
export { notFoundSchema, type NotFound } from "./models/not-found.js";
export { notFound1Schema, type NotFound1 } from "./models/not-found1.js";
export { organizationSchema, type Organization } from "./models/organization.js";
export { OtpChannel, otpChannelSchema } from "./models/otp-channel.js";
export {
  OtpChannelJuriSignSignRequestsApi,
  otpChannelJuriSignSignRequestsApiSchema,
} from "./models/otp-channel-juri-sign-sign-requests-api.js";
export { paginationSchema, type Pagination } from "./models/pagination.js";
export { paymentSchema, type Payment } from "./models/payment.js";
export { payment1Schema, type Payment1 } from "./models/payment1.js";
export {
  paymentJuriSignTemplatesApiSchema,
  type PaymentJuriSignTemplatesApi,
} from "./models/payment-juri-sign-templates-api.js";
export { progressSchema, type Progress } from "./models/progress.js";
export { publicFormsRequestSchema, type PublicFormsRequest } from "./models/public-forms-request.js";
export { publicFormsRequest1Schema, type PublicFormsRequest1 } from "./models/public-forms-request1.js";
export { publicFormsResponseSchema, type PublicFormsResponse } from "./models/public-forms-response.js";
export { publicFormsResponse1Schema, type PublicFormsResponse1 } from "./models/public-forms-response1.js";
export {
  publicFormsRotateTokenResponseSchema,
  type PublicFormsRotateTokenResponse,
} from "./models/public-forms-rotate-token-response.js";
export { publicFormSchema, type PublicForm } from "./models/public-form.js";
export { recipientSchema, type Recipient } from "./models/recipient.js";
export { responseSchema, type Response } from "./models/response.js";
export { Scope, scopeSchema } from "./models/scope.js";
export {
  signRequestsCancelResponseSchema,
  type SignRequestsCancelResponse,
} from "./models/sign-requests-cancel-response.js";
export { signRequestsResponseSchema, type SignRequestsResponse } from "./models/sign-requests-response.js";
export { signRequestsResponse1Schema, type SignRequestsResponse1 } from "./models/sign-requests-response1.js";
export { signRequestsResponse2Schema, type SignRequestsResponse2 } from "./models/sign-requests-response2.js";
export {
  signRequestsSendResponseSchema,
  type SignRequestsSendResponse,
} from "./models/sign-requests-send-response.js";
export { signRequestSchema, type SignRequest } from "./models/sign-request.js";
export { signRequestDetailedSchema, type SignRequestDetailed } from "./models/sign-request-detailed.js";
export {
  signRequestJuriSignTemplatesApiSchema,
  type SignRequestJuriSignTemplatesApi,
} from "./models/sign-request-juri-sign-templates-api.js";
export { signatureZoneSchema, type SignatureZone } from "./models/signature-zone.js";
export {
  signatureZoneJuriSignTemplatesApiSchema,
  type SignatureZoneJuriSignTemplatesApi,
} from "./models/signature-zone-juri-sign-templates-api.js";
export { signerSchema, type Signer } from "./models/signer.js";
export { signer1Schema, type Signer1 } from "./models/signer1.js";
export {
  signer1JuriSignTemplatesApiSchema,
  type Signer1JuriSignTemplatesApi,
} from "./models/signer1-juri-sign-templates-api.js";
export { signer2Schema, type Signer2 } from "./models/signer2.js";
export {
  signerJuriSignTemplatesApiSchema,
  type SignerJuriSignTemplatesApi,
} from "./models/signer-juri-sign-templates-api.js";
export { SigningOrderType, signingOrderTypeSchema } from "./models/signing-order-type.js";
export { SigningOrderType1, signingOrderType1Schema } from "./models/signing-order-type1.js";
export {
  SigningOrderTypeJuriSignTemplatesApi,
  signingOrderTypeJuriSignTemplatesApiSchema,
} from "./models/signing-order-type-juri-sign-templates-api.js";
export { statsSchema, type Stats } from "./models/stats.js";
export {
  statsJuriSignWebhooksApiSchema,
  type StatsJuriSignWebhooksApi,
} from "./models/stats-juri-sign-webhooks-api.js";
export { Status, statusSchema } from "./models/status.js";
export { Status1, status1Schema } from "./models/status1.js";
export {
  Status1JuriSignSignRequestsApi,
  status1JuriSignSignRequestsApiSchema,
} from "./models/status1-juri-sign-sign-requests-api.js";
export { Status2, status2Schema } from "./models/status2.js";
export {
  StatusJuriSignDocumentsApi,
  statusJuriSignDocumentsApiSchema,
} from "./models/status-juri-sign-documents-api.js";
export {
  StatusJuriSignPublicFormsApi,
  statusJuriSignPublicFormsApiSchema,
} from "./models/status-juri-sign-public-forms-api.js";
export {
  StatusJuriSignSignRequestsApi,
  statusJuriSignSignRequestsApiSchema,
} from "./models/status-juri-sign-sign-requests-api.js";
export {
  StatusJuriSignWebhooksApi,
  statusJuriSignWebhooksApiSchema,
} from "./models/status-juri-sign-webhooks-api.js";
export { templateSchema, type Template } from "./models/template.js";
export { templateDetailedSchema, type TemplateDetailed } from "./models/template-detailed.js";
export {
  templateJuriSignTemplatesApiSchema,
  type TemplateJuriSignTemplatesApi,
} from "./models/template-juri-sign-templates-api.js";
export { templatesResponseSchema, type TemplatesResponse } from "./models/templates-response.js";
export { templatesResponse1Schema, type TemplatesResponse1 } from "./models/templates-response1.js";
export {
  templatesSignRequestsRequestSchema,
  type TemplatesSignRequestsRequest,
} from "./models/templates-sign-requests-request.js";
export {
  templatesSignRequestsResponseSchema,
  type TemplatesSignRequestsResponse,
} from "./models/templates-sign-requests-response.js";
export { Type, typeSchema } from "./models/type.js";
export { Type1, type1Schema } from "./models/type1.js";
export {
  TypeJuriSignTemplatesApi,
  typeJuriSignTemplatesApiSchema,
} from "./models/type-juri-sign-templates-api.js";
export { unauthenticatedSchema, type Unauthenticated } from "./models/unauthenticated.js";
export { unauthenticated1Schema, type Unauthenticated1 } from "./models/unauthenticated1.js";
export { validationErrorSchema, type ValidationError } from "./models/validation-error.js";
export { validationError1Schema, type ValidationError1 } from "./models/validation-error1.js";
export { webhookEndpointSchema, type WebhookEndpoint } from "./models/webhook-endpoint.js";
export { webhookLogSchema, type WebhookLog } from "./models/webhook-log.js";
export { webhooksLogsResponseSchema, type WebhooksLogsResponse } from "./models/webhooks-logs-response.js";
export {
  webhooksRegenerateSecretResponseSchema,
  type WebhooksRegenerateSecretResponse,
} from "./models/webhooks-regenerate-secret-response.js";
export { webhooksRequestSchema, type WebhooksRequest } from "./models/webhooks-request.js";
export { webhooksRequest1Schema, type WebhooksRequest1 } from "./models/webhooks-request1.js";
export { webhooksResponseSchema, type WebhooksResponse } from "./models/webhooks-response.js";
export { webhooksResponse1Schema, type WebhooksResponse1 } from "./models/webhooks-response1.js";
export { webhooksResponse2Schema, type WebhooksResponse2 } from "./models/webhooks-response2.js";
export { zoneSchema, type Zone } from "./models/zone.js";

export {
  CoreError as JuriSignError,
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
