export { GleanIndexingApiClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { TokenProvider } from "./core/auth/credentials.js";

export { Datasources } from "./resources/datasources.js";
export { DocumentsApi } from "./resources/documents-api.js";
export { People } from "./resources/people.js";
export { Permissions } from "./resources/permissions.js";
export { Authentication } from "./resources/authentication.js";
export { Troubleshooting } from "./resources/troubleshooting.js";
export { Shortcuts } from "./resources/shortcuts.js";
export { CustomMetadata } from "./resources/custom-metadata.js";

export {
  additionalFieldDefinitionSchema,
  type AdditionalFieldDefinition,
} from "./models/additional-field-definition.js";
export {
  bulkIndexDocumentsRequestSchema,
  type BulkIndexDocumentsRequest,
} from "./models/bulk-index-documents-request.js";
export {
  bulkIndexEmployeesRequestSchema,
  type BulkIndexEmployeesRequest,
} from "./models/bulk-index-employees-request.js";
export {
  bulkIndexGroupsRequestSchema,
  type BulkIndexGroupsRequest,
} from "./models/bulk-index-groups-request.js";
export {
  bulkIndexMembershipsRequestSchema,
  type BulkIndexMembershipsRequest,
} from "./models/bulk-index-memberships-request.js";
export { bulkIndexRequestSchema, type BulkIndexRequest } from "./models/bulk-index-request.js";
export {
  bulkIndexShortcutsRequestSchema,
  type BulkIndexShortcutsRequest,
} from "./models/bulk-index-shortcuts-request.js";
export {
  bulkIndexTeamsRequestSchema,
  type BulkIndexTeamsRequest,
} from "./models/bulk-index-teams-request.js";
export {
  bulkIndexUsersRequestSchema,
  type BulkIndexUsersRequest,
} from "./models/bulk-index-users-request.js";
export {
  bulkUploadHistoryEventSchema,
  type BulkUploadHistoryEvent,
} from "./models/bulk-upload-history-event.js";
export {
  canonicalizingRegexTypeSchema,
  type CanonicalizingRegexType,
} from "./models/canonicalizing-regex-type.js";
export {
  checkDocumentAccessRequestSchema,
  type CheckDocumentAccessRequest,
} from "./models/check-document-access-request.js";
export {
  checkDocumentAccessResponseSchema,
  type CheckDocumentAccessResponse,
} from "./models/check-document-access-response.js";
export { commentDefinitionSchema, type CommentDefinition } from "./models/comment-definition.js";
export { ConnectorType, connectorTypeSchema } from "./models/connector-type.js";
export { contentDefinitionSchema, type ContentDefinition } from "./models/content-definition.js";
export { countsSchema, type Counts } from "./models/counts.js";
export { counts1Schema, type Counts1 } from "./models/counts1.js";
export {
  customDatasourceConfigSchema,
  type CustomDatasourceConfig,
} from "./models/custom-datasource-config.js";
export {
  customMetadataPutRequestSchema,
  type CustomMetadataPutRequest,
} from "./models/custom-metadata-put-request.js";
export { customMetadataSchemaSchema, type CustomMetadataSchema } from "./models/custom-metadata-schema.js";
export { customPropertySchema, type CustomProperty } from "./models/custom-property.js";
export {
  datasourceBulkMembershipDefinitionSchema,
  type DatasourceBulkMembershipDefinition,
} from "./models/datasource-bulk-membership-definition.js";
export { DatasourceCategory, datasourceCategorySchema } from "./models/datasource-category.js";
export { datasourceConfigSchema, type DatasourceConfig } from "./models/datasource-config.js";
export { datasourceConfigListSchema, type DatasourceConfigList } from "./models/datasource-config-list.js";
export {
  datasourceGroupDefinitionSchema,
  type DatasourceGroupDefinition,
} from "./models/datasource-group-definition.js";
export {
  datasourceMembershipDefinitionSchema,
  type DatasourceMembershipDefinition,
} from "./models/datasource-membership-definition.js";
export {
  datasourceObjectTypeDocumentCountEntrySchema,
  type DatasourceObjectTypeDocumentCountEntry,
} from "./models/datasource-object-type-document-count-entry.js";
export { datasourceProfileSchema, type DatasourceProfile } from "./models/datasource-profile.js";
export {
  datasourceUserDefinitionSchema,
  type DatasourceUserDefinition,
} from "./models/datasource-user-definition.js";
export { DatasourceVisibility, datasourceVisibilitySchema } from "./models/datasource-visibility.js";
export {
  debugDatasourceStatusIdentityResponseComponentSchema,
  type DebugDatasourceStatusIdentityResponseComponent,
} from "./models/debug-datasource-status-identity-response-component.js";
export {
  debugDatasourceStatusResponseSchema,
  type DebugDatasourceStatusResponse,
} from "./models/debug-datasource-status-response.js";
export {
  debugDocumentLifecycleRequestSchema,
  type DebugDocumentLifecycleRequest,
} from "./models/debug-document-lifecycle-request.js";
export {
  debugDocumentLifecycleResponseSchema,
  type DebugDocumentLifecycleResponse,
} from "./models/debug-document-lifecycle-response.js";
export { debugDocumentRequestSchema, type DebugDocumentRequest } from "./models/debug-document-request.js";
export { debugDocumentResponseSchema, type DebugDocumentResponse } from "./models/debug-document-response.js";
export { debugDocumentsRequestSchema, type DebugDocumentsRequest } from "./models/debug-documents-request.js";
export {
  debugDocumentsResponseSchema,
  type DebugDocumentsResponse,
} from "./models/debug-documents-response.js";
export {
  debugDocumentsResponseItemSchema,
  type DebugDocumentsResponseItem,
} from "./models/debug-documents-response-item.js";
export { debugUserRequestSchema, type DebugUserRequest } from "./models/debug-user-request.js";
export { debugUserResponseSchema, type DebugUserResponse } from "./models/debug-user-response.js";
export { deleteDocumentRequestSchema, type DeleteDocumentRequest } from "./models/delete-document-request.js";
export { deleteEmployeeRequestSchema, type DeleteEmployeeRequest } from "./models/delete-employee-request.js";
export { deleteGroupRequestSchema, type DeleteGroupRequest } from "./models/delete-group-request.js";
export {
  deleteMembershipRequestSchema,
  type DeleteMembershipRequest,
} from "./models/delete-membership-request.js";
export { deleteTeamRequestSchema, type DeleteTeamRequest } from "./models/delete-team-request.js";
export { deleteUserRequestSchema, type DeleteUserRequest } from "./models/delete-user-request.js";
export { DocCategory, docCategorySchema } from "./models/doc-category.js";
export { documentDefinitionSchema, type DocumentDefinition } from "./models/document-definition.js";
export {
  documentInteractionsDefinitionSchema,
  type DocumentInteractionsDefinition,
} from "./models/document-interactions-definition.js";
export {
  documentPermissionsDefinitionSchema,
  type DocumentPermissionsDefinition,
} from "./models/document-permissions-definition.js";
export {
  documentStatusResponseSchema,
  type DocumentStatusResponse,
} from "./models/document-status-response.js";
export { documentsSchema, type Documents } from "./models/documents.js";
export {
  employeeAndVersionDefinitionSchema,
  type EmployeeAndVersionDefinition,
} from "./models/employee-and-version-definition.js";
export {
  employeeInfoDefinitionSchema,
  type EmployeeInfoDefinition,
} from "./models/employee-info-definition.js";
export { employeeTeamInfoSchema, type EmployeeTeamInfo } from "./models/employee-team-info.js";
export { entityRelationshipSchema, type EntityRelationship } from "./models/entity-relationship.js";
export { errorInfoResponseSchema, type ErrorInfoResponse } from "./models/error-info-response.js";
export {
  errorInfoResponseErrorSchema,
  type ErrorInfoResponseError,
} from "./models/error-info-response-error.js";
export { Event, eventSchema } from "./models/event.js";
export { externalShortcutSchema, type ExternalShortcut } from "./models/external-shortcut.js";
export {
  getDatasourceConfigRequestSchema,
  type GetDatasourceConfigRequest,
} from "./models/get-datasource-config-request.js";
export {
  getDocumentCountRequestSchema,
  type GetDocumentCountRequest,
} from "./models/get-document-count-request.js";
export {
  getDocumentCountResponseSchema,
  type GetDocumentCountResponse,
} from "./models/get-document-count-response.js";
export {
  getDocumentStatusRequestSchema,
  type GetDocumentStatusRequest,
} from "./models/get-document-status-request.js";
export {
  getDocumentStatusResponseSchema,
  type GetDocumentStatusResponse,
} from "./models/get-document-status-response.js";
export { getUserCountRequestSchema, type GetUserCountRequest } from "./models/get-user-count-request.js";
export { getUserCountResponseSchema, type GetUserCountResponse } from "./models/get-user-count-response.js";
export { greenlistUsersRequestSchema, type GreenlistUsersRequest } from "./models/greenlist-users-request.js";
export { HideBuiltInFacet, hideBuiltInFacetSchema } from "./models/hide-built-in-facet.js";
export { hypertextFieldSchema, type HypertextField } from "./models/hypertext-field.js";
export { iconConfigSchema, type IconConfig } from "./models/icon-config.js";
export { IconType, iconTypeSchema } from "./models/icon-type.js";
export { identitySchema, type Identity } from "./models/identity.js";
export { indexDocumentRequestSchema, type IndexDocumentRequest } from "./models/index-document-request.js";
export { indexDocumentsRequestSchema, type IndexDocumentsRequest } from "./models/index-documents-request.js";
export {
  indexEmployeeListRequestSchema,
  type IndexEmployeeListRequest,
} from "./models/index-employee-list-request.js";
export { indexEmployeeRequestSchema, type IndexEmployeeRequest } from "./models/index-employee-request.js";
export { indexGroupRequestSchema, type IndexGroupRequest } from "./models/index-group-request.js";
export {
  indexMembershipRequestSchema,
  type IndexMembershipRequest,
} from "./models/index-membership-request.js";
export { indexTeamRequestSchema, type IndexTeamRequest } from "./models/index-team-request.js";
export { indexUserRequestSchema, type IndexUserRequest } from "./models/index-user-request.js";
export { indexingShortcutSchema, type IndexingShortcut } from "./models/indexing-shortcut.js";
export { lifeCycleEventSchema, type LifeCycleEvent } from "./models/life-cycle-event.js";
export { objectDefinitionSchema, type ObjectDefinition } from "./models/object-definition.js";
export {
  permissionsGroupIntersectionDefinitionSchema,
  type PermissionsGroupIntersectionDefinition,
} from "./models/permissions-group-intersection-definition.js";
export {
  processAllDocumentsRequestSchema,
  type ProcessAllDocumentsRequest,
} from "./models/process-all-documents-request.js";
export {
  processAllMembershipsRequestSchema,
  type ProcessAllMembershipsRequest,
} from "./models/process-all-memberships-request.js";
export {
  processingHistoryEventSchema,
  type ProcessingHistoryEvent,
} from "./models/processing-history-event.js";
export { ProcessingState, processingStateSchema } from "./models/processing-state.js";
export { propertyDefinitionSchema, type PropertyDefinition } from "./models/property-definition.js";
export { propertyGroupSchema, type PropertyGroup } from "./models/property-group.js";
export { PropertyType, propertyTypeSchema } from "./models/property-type.js";
export { quicklinkSchema, type Quicklink } from "./models/quicklink.js";
export {
  restApiIndexSubmissionsResponseSchema,
  type RestApiIndexSubmissionsResponse,
} from "./models/rest-api-index-submissions-response.js";
export { rotateTokenResponseSchema, type RotateTokenResponse } from "./models/rotate-token-response.js";
export { Scope, scopeSchema } from "./models/scope.js";
export {
  sharedDatasourceConfigSchema,
  type SharedDatasourceConfig,
} from "./models/shared-datasource-config.js";
export {
  sharedDatasourceConfigNoInstanceSchema,
  type SharedDatasourceConfigNoInstance,
} from "./models/shared-datasource-config-no-instance.js";
export { shortcutPropertiesSchema, type ShortcutProperties } from "./models/shortcut-properties.js";
export {
  socialNetworkDefinitionSchema,
  type SocialNetworkDefinition,
} from "./models/social-network-definition.js";
export { Status, statusSchema } from "./models/status.js";
export { structuredLocationSchema, type StructuredLocation } from "./models/structured-location.js";
export { successResponseSchema, type SuccessResponse } from "./models/success-response.js";
export { teamEmailSchema, type TeamEmail } from "./models/team-email.js";
export { teamInfoDefinitionSchema, type TeamInfoDefinition } from "./models/team-info-definition.js";
export { teamMemberSchema, type TeamMember } from "./models/team-member.js";
export { UiOptions, uiOptionsSchema } from "./models/ui-options.js";
export {
  updatePermissionsRequestSchema,
  type UpdatePermissionsRequest,
} from "./models/update-permissions-request.js";
export {
  uploadShortcutsRequestSchema,
  type UploadShortcutsRequest,
} from "./models/upload-shortcuts-request.js";
export { UploadStatusEnum, uploadStatusEnumSchema } from "./models/upload-status-enum.js";
export {
  userReferenceDefinitionSchema,
  type UserReferenceDefinition,
} from "./models/user-reference-definition.js";
export { userStatusResponseSchema, type UserStatusResponse } from "./models/user-status-response.js";

export {
  CoreError as GleanIndexingApiError,
  ResponseError,
  DecodeError,
  EncodeError,
  ConnectionError,
  TimeoutError,
  AuthError,
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
export type { HttpMethod, RequestOptions } from "./core/api-request.js";
export type { RetryOptions, RequestRetryOptions, RetryAttempt, RetryReason } from "./core/retry.js";
export type { BinaryContent, BinaryData, BinaryErrorContent, FileData, FileInput } from "./core/binary.js";
export type { ErrorKind } from "./core/errors.js";
export type { Declared, Undeclared } from "./core/api-error.js";
export type { Schema, EnumSchema, Encoded } from "./core/validation/schema.js";
