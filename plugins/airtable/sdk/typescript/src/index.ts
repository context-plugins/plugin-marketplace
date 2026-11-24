export { AirtableClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { Bases } from "./resources/bases.js";
export { Comments } from "./resources/comments.js";
export { Fields } from "./resources/fields.js";
export { Groups } from "./resources/groups.js";
export { Records } from "./resources/records.js";
export { Tables } from "./resources/tables.js";
export { Users } from "./resources/users.js";
export { Webhooks } from "./resources/webhooks.js";

export { actionMetadataSchema, type ActionMetadata } from "./models/action-metadata.js";
export { authorSchema, type Author } from "./models/author.js";
export { baseListSchema, type BaseList } from "./models/base-list.js";
export { baseSchemaSchema, type BaseSchema } from "./models/base-schema.js";
export { baseSummarySchema, type BaseSummary } from "./models/base-summary.js";
export {
  basesWebhooksRefreshResponseSchema,
  type BasesWebhooksRefreshResponse,
} from "./models/bases-webhooks-refresh-response.js";
export { basesWebhooksResponseSchema, type BasesWebhooksResponse } from "./models/bases-webhooks-response.js";
export { changedTablesByIdSchema, type ChangedTablesById } from "./models/changed-tables-by-id.js";
export { commentSchema, type Comment } from "./models/comment.js";
export { commentListSchema, type CommentList } from "./models/comment-list.js";
export { createBaseRequestSchema, type CreateBaseRequest } from "./models/create-base-request.js";
export { createFieldRequestSchema, type CreateFieldRequest } from "./models/create-field-request.js";
export { createTableRequestSchema, type CreateTableRequest } from "./models/create-table-request.js";
export { DataType, dataTypeSchema } from "./models/data-type.js";
export { Direction, directionSchema } from "./models/direction.js";
export { emailSchema, type Email } from "./models/email.js";
export { email1Schema, type Email1 } from "./models/email1.js";
export { errorSchema, type Error } from "./models/error.js";
export { error1Schema, type Error1 } from "./models/error1.js";
export {
  error1AirtableCommentsApiSchema,
  type Error1AirtableCommentsApi,
} from "./models/error1-airtable-comments-api.js";
export { errorErrorSchema, type ErrorError } from "./models/error-error.js";
export { fieldSchemaSchema, type FieldSchema } from "./models/field-schema.js";
export { filtersSchema, type Filters } from "./models/filters.js";
export { formPageSubmissionSchema, type FormPageSubmission } from "./models/form-page-submission.js";
export { formSubmissionSchema, type FormSubmission } from "./models/form-submission.js";
export { memberSchema, type Member } from "./models/member.js";
export { member1Schema, type Member1 } from "./models/member1.js";
export {
  metaBasesTablesFieldsFieldIdRequestSchema,
  type MetaBasesTablesFieldsFieldIdRequest,
} from "./models/meta-bases-tables-fields-field-id-request.js";
export {
  metaBasesTablesRequestSchema,
  type MetaBasesTablesRequest,
} from "./models/meta-bases-tables-request.js";
export {
  metaBasesTablesResponseSchema,
  type MetaBasesTablesResponse,
} from "./models/meta-bases-tables-response.js";
export { metaWhoamiResponseSchema, type MetaWhoamiResponse } from "./models/meta-whoami-response.js";
export { nameSchema, type Name } from "./models/name.js";
export { name1Schema, type Name1 } from "./models/name1.js";
export { Op, opSchema } from "./models/op.js";
export { operationSchema, type Operation } from "./models/operation.js";
export { optionsSchema, type Options } from "./models/options.js";
export { PermissionLevel, permissionLevelSchema } from "./models/permission-level.js";
export { recordModelSchema, type RecordModel } from "./models/record-model.js";
export { record1Schema, type Record1 } from "./models/record1.js";
export { recordDeletedSchema, type RecordDeleted } from "./models/record-deleted.js";
export {
  recordIdCommentsCommentIdRequestSchema,
  type RecordIdCommentsCommentIdRequest,
} from "./models/record-id-comments-comment-id-request.js";
export {
  recordIdCommentsCommentIdResponseSchema,
  type RecordIdCommentsCommentIdResponse,
} from "./models/record-id-comments-comment-id-response.js";
export {
  recordIdCommentsRequestSchema,
  type RecordIdCommentsRequest,
} from "./models/record-id-comments-request.js";
export { recordIdRequestSchema, type RecordIdRequest } from "./models/record-id-request.js";
export { recordIdRequest1Schema, type RecordIdRequest1 } from "./models/record-id-request1.js";
export { recordListSchema, type RecordList } from "./models/record-list.js";
export { requestSchema, type Request } from "./models/request.js";
export { responseSchema, type Response } from "./models/response.js";
export { scimErrorSchema, type ScimError } from "./models/scim-error.js";
export { scimErrorErrorSchema, type ScimErrorError } from "./models/scim-error-error.js";
export { scimGroupSchema, type ScimGroup } from "./models/scim-group.js";
export {
  scimGroupCreateRequestSchema,
  type ScimGroupCreateRequest,
} from "./models/scim-group-create-request.js";
export {
  scimGroupListResponseSchema,
  type ScimGroupListResponse,
} from "./models/scim-group-list-response.js";
export { scimMetaSchema, type ScimMeta } from "./models/scim-meta.js";
export { scimPatchRequestSchema, type ScimPatchRequest } from "./models/scim-patch-request.js";
export { scimUserSchema, type ScimUser } from "./models/scim-user.js";
export {
  scimUserCreateRequestSchema,
  type ScimUserCreateRequest,
} from "./models/scim-user-create-request.js";
export { scimUserListResponseSchema, type ScimUserListResponse } from "./models/scim-user-list-response.js";
export { sourceOptionsSchema, type SourceOptions } from "./models/source-options.js";
export { tableSchema, type Table } from "./models/table.js";
export { tableSchemaSchema, type TableSchema } from "./models/table-schema.js";
export { Type, typeSchema } from "./models/type.js";
export { Type1, type1Schema } from "./models/type1.js";
export { viewSchemaSchema, type ViewSchema } from "./models/view-schema.js";
export { webhookSchema, type Webhook } from "./models/webhook.js";
export { webhookCreateRequestSchema, type WebhookCreateRequest } from "./models/webhook-create-request.js";
export { webhookCreateResponseSchema, type WebhookCreateResponse } from "./models/webhook-create-response.js";
export { webhookPayloadSchema, type WebhookPayload } from "./models/webhook-payload.js";
export { webhookPayloadListSchema, type WebhookPayloadList } from "./models/webhook-payload-list.js";
export { webhookSpecificationSchema, type WebhookSpecification } from "./models/webhook-specification.js";
export { CellFormat, cellFormatSchema } from "./models/cell-format.js";
export { Include, includeSchema } from "./models/include.js";
export { sortSchema, type Sort } from "./models/sort.js";

export {
  CoreError as AirtableError,
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
