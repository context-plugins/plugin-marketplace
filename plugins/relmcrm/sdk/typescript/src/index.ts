export { RelmCrmClient } from "./client.js";
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

export { Activities } from "./resources/activities.js";
export { Automations } from "./resources/automations.js";
export { Batch } from "./resources/batch.js";
export { Companies } from "./resources/companies.js";
export { Connections } from "./resources/connections.js";
export { Contacts } from "./resources/contacts.js";
export { Deals } from "./resources/deals.js";
export { Discovery } from "./resources/discovery.js";
export { Pipelines } from "./resources/pipelines.js";
export { Registry } from "./resources/registry.js";
export { Search } from "./resources/search.js";
export { Sequences } from "./resources/sequences.js";
export { Templates } from "./resources/templates.js";
export { Webhooks } from "./resources/webhooks.js";

export { actionSchema, type Action } from "./models/action.js";
export { activitySchema, type Activity } from "./models/activity.js";
export { activityInputSchema, type ActivityInput } from "./models/activity-input.js";
export { activityListSchema, type ActivityList } from "./models/activity-list.js";
export { automationInputSchema, type AutomationInput } from "./models/automation-input.js";
export { automationsRequestSchema, type AutomationsRequest } from "./models/automations-request.js";
export { batchRequestSchema, type BatchRequest } from "./models/batch-request.js";
export { companySchema, type Company } from "./models/company.js";
export { companyInputSchema, type CompanyInput } from "./models/company-input.js";
export { companyListSchema, type CompanyList } from "./models/company-list.js";
export { conditionSchema, type Condition } from "./models/condition.js";
export { connectionsRequestSchema, type ConnectionsRequest } from "./models/connections-request.js";
export { contactSchema, type Contact } from "./models/contact.js";
export { contactInputSchema, type ContactInput } from "./models/contact-input.js";
export { contactListSchema, type ContactList } from "./models/contact-list.js";
export { DataType, dataTypeSchema } from "./models/data-type.js";
export { dealSchema, type Deal } from "./models/deal.js";
export { dealInputSchema, type DealInput } from "./models/deal-input.js";
export { dealListSchema, type DealList } from "./models/deal-list.js";
export { deletedSchema, type Deleted } from "./models/deleted.js";
export { enumsRequestSchema, type EnumsRequest } from "./models/enums-request.js";
export { fieldsRequestSchema, type FieldsRequest } from "./models/fields-request.js";
export { listMetaSchema, type ListMeta } from "./models/list-meta.js";
export {
  listMetaRelmCrmCompaniesApiSchema,
  type ListMetaRelmCrmCompaniesApi,
} from "./models/list-meta-relm-crm-companies-api.js";
export { Method, methodSchema } from "./models/method.js";
export { ObjectEnum, objectEnumSchema } from "./models/object-enum.js";
export { Object1, object1Schema } from "./models/object1.js";
export {
  Object1RelmCrmCompaniesApi,
  object1RelmCrmCompaniesApiSchema,
} from "./models/object1-relm-crm-companies-api.js";
export { ObjectRelmCrmBatchApi, objectRelmCrmBatchApiSchema } from "./models/object-relm-crm-batch-api.js";
export {
  ObjectRelmCrmCompaniesApi,
  objectRelmCrmCompaniesApiSchema,
} from "./models/object-relm-crm-companies-api.js";
export {
  ObjectRelmCrmContactsApi,
  objectRelmCrmContactsApiSchema,
} from "./models/object-relm-crm-contacts-api.js";
export { ObjectRelmCrmDealsApi, objectRelmCrmDealsApiSchema } from "./models/object-relm-crm-deals-api.js";
export {
  objectRelmCrmDiscoveryApiSchema,
  type ObjectRelmCrmDiscoveryApi,
} from "./models/object-relm-crm-discovery-api.js";
export {
  ObjectRelmCrmPipelinesApi,
  objectRelmCrmPipelinesApiSchema,
} from "./models/object-relm-crm-pipelines-api.js";
export { ObjectRelmCrmSearchApi, objectRelmCrmSearchApiSchema } from "./models/object-relm-crm-search-api.js";
export {
  ObjectRelmCrmWebhooksApi,
  objectRelmCrmWebhooksApiSchema,
} from "./models/object-relm-crm-webhooks-api.js";
export { operationSchema, type Operation } from "./models/operation.js";
export { pipelineSchema, type Pipeline } from "./models/pipeline.js";
export { pipelineInputSchema, type PipelineInput } from "./models/pipeline-input.js";
export { pipelinesRequestSchema, type PipelinesRequest } from "./models/pipelines-request.js";
export {
  pipelinesStagesReorderRequestSchema,
  type PipelinesStagesReorderRequest,
} from "./models/pipelines-stages-reorder-request.js";
export {
  pipelinesStagesRequestSchema,
  type PipelinesStagesRequest,
} from "./models/pipelines-stages-request.js";
export {
  pipelinesStagesRequest1Schema,
  type PipelinesStagesRequest1,
} from "./models/pipelines-stages-request1.js";
export { problemSchema, type Problem } from "./models/problem.js";
export { problemErrorSchema, type ProblemError } from "./models/problem-error.js";
export { resultSchema, type Result } from "./models/result.js";
export { schemaDocSchema, type SchemaDoc } from "./models/schema-doc.js";
export { searchResultSchema, type SearchResult } from "./models/search-result.js";
export { sequenceInputSchema, type SequenceInput } from "./models/sequence-input.js";
export {
  sequencesEnrollRequestSchema,
  type SequencesEnrollRequest,
} from "./models/sequences-enroll-request.js";
export { sequencesRequestSchema, type SequencesRequest } from "./models/sequences-request.js";
export { settingsSchema, type Settings } from "./models/settings.js";
export { settingsRequestSchema, type SettingsRequest } from "./models/settings-request.js";
export { stageSchema, type Stage } from "./models/stage.js";
export { stage1Schema, type Stage1 } from "./models/stage1.js";
export { StageType, stageTypeSchema } from "./models/stage-type.js";
export { stepSchema, type Step } from "./models/step.js";
export { templatesRequestSchema, type TemplatesRequest } from "./models/templates-request.js";
export { TriggerEvent, triggerEventSchema } from "./models/trigger-event.js";
export { Type, typeSchema } from "./models/type.js";
export { Type1, type1Schema } from "./models/type1.js";
export {
  TypeRelmCrmPipelinesApi,
  typeRelmCrmPipelinesApiSchema,
} from "./models/type-relm-crm-pipelines-api.js";
export { typesRequestSchema, type TypesRequest } from "./models/types-request.js";
export { usageSchema, type Usage } from "./models/usage.js";
export { webhookSchema, type Webhook } from "./models/webhook.js";
export { webhookInputSchema, type WebhookInput } from "./models/webhook-input.js";

export {
  CoreError as RelmCrmError,
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
