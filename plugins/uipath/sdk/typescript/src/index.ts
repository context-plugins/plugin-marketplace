export { UiPathClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { ServerEnvironment } from "./servers.js";

export { Alerts } from "./resources/alerts.js";
export { AppInventory } from "./resources/app-inventory.js";
export { Assets } from "./resources/assets.js";
export { AuditLogs } from "./resources/audit-logs.js";
export { Automations } from "./resources/automations.js";
export { Classification } from "./resources/classification.js";
export { Digitization } from "./resources/digitization.js";
export { Discovery } from "./resources/discovery.js";
export { Entities } from "./resources/entities.js";
export { Extraction } from "./resources/extraction.js";
export { Folders } from "./resources/folders.js";
export { Groups } from "./resources/groups.js";
export { Jobs } from "./resources/jobs.js";
export { Licenses } from "./resources/licenses.js";
export { Machines } from "./resources/machines.js";
export { Packages } from "./resources/packages.js";
export { Pipeline } from "./resources/pipeline.js";
export { Processes } from "./resources/processes.js";
export { Projects } from "./resources/projects.js";
export { QueueItems } from "./resources/queue-items.js";
export { Queues } from "./resources/queues.js";
export { Requirements } from "./resources/requirements.js";
export { Robots } from "./resources/robots.js";
export { Roles } from "./resources/roles.js";
export { Schedules } from "./resources/schedules.js";
export { StorageBuckets } from "./resources/storage-buckets.js";
export { TestCases } from "./resources/test-cases.js";
export { TestExecutions } from "./resources/test-executions.js";
export { TestSets } from "./resources/test-sets.js";
export { Users } from "./resources/users.js";
export { Validation } from "./resources/validation.js";
export { Webhooks } from "./resources/webhooks.js";

export { addQueueItemRequestSchema, type AddQueueItemRequest } from "./models/add-queue-item-request.js";
export { addUserRequestSchema, type AddUserRequest } from "./models/add-user-request.js";
export { AlertSeverity, alertSeveritySchema } from "./models/alert-severity.js";
export {
  appInventoryListResponseSchema,
  type AppInventoryListResponse,
} from "./models/app-inventory-list-response.js";
export { appinventoryRequestSchema, type AppinventoryRequest } from "./models/appinventory-request.js";
export { applicationSchema, type Application } from "./models/application.js";
export { assetSchema, type Asset } from "./models/asset.js";
export {
  asyncJobStartResponseSchema,
  type AsyncJobStartResponse,
} from "./models/async-job-start-response.js";
export {
  asyncJobStartResponseUiPathDocumentUnderstandingExtractionApiSchema,
  type AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi,
} from "./models/async-job-start-response-ui-path-document-understanding-extraction-api.js";
export { auditEventSchema, type AuditEvent } from "./models/audit-event.js";
export { auditEventCollectionSchema, type AuditEventCollection } from "./models/audit-event-collection.js";
export { auditSourceSchema, type AuditSource } from "./models/audit-source.js";
export { auditSourcesSchema, type AuditSources } from "./models/audit-sources.js";
export { automationSchema, type Automation } from "./models/automation.js";
export {
  automationListResponseSchema,
  type AutomationListResponse,
} from "./models/automation-list-response.js";
export { AutomationStatus, automationStatusSchema } from "./models/automation-status.js";
export {
  automationsCollaboratorsResponseSchema,
  type AutomationsCollaboratorsResponse,
} from "./models/automations-collaborators-response.js";
export { benefitDataSchema, type BenefitData } from "./models/benefit-data.js";
export { classificationRequestSchema, type ClassificationRequest } from "./models/classification-request.js";
export { classificationResultSchema, type ClassificationResult } from "./models/classification-result.js";
export {
  classificationResultItemSchema,
  type ClassificationResultItem,
} from "./models/classification-result-item.js";
export { classifierSchema, type Classifier } from "./models/classifier.js";
export { classifierOptionSchema, type ClassifierOption } from "./models/classifier-option.js";
export { ClassifierType, classifierTypeSchema } from "./models/classifier-type.js";
export { clientInfoSchema, type ClientInfo } from "./models/client-info.js";
export { collaboratorSchema, type Collaborator } from "./models/collaborator.js";
export { ContentType, contentTypeSchema } from "./models/content-type.js";
export {
  createAutomationIdeaRequestSchema,
  type CreateAutomationIdeaRequest,
} from "./models/create-automation-idea-request.js";
export { createGroupRequestSchema, type CreateGroupRequest } from "./models/create-group-request.js";
export { createProjectRequestSchema, type CreateProjectRequest } from "./models/create-project-request.js";
export {
  createRequirementRequestSchema,
  type CreateRequirementRequest,
} from "./models/create-requirement-request.js";
export {
  createTestCaseRequestSchema,
  type CreateTestCaseRequest,
} from "./models/create-test-case-request.js";
export { createTestSetRequestSchema, type CreateTestSetRequest } from "./models/create-test-set-request.js";
export { createUserRequestSchema, type CreateUserRequest } from "./models/create-user-request.js";
export { digitizationRequestSchema, type DigitizationRequest } from "./models/digitization-request.js";
export { digitizationResultSchema, type DigitizationResult } from "./models/digitization-result.js";
export { editUserRequestSchema, type EditUserRequest } from "./models/edit-user-request.js";
export { entityQueryRequestSchema, type EntityQueryRequest } from "./models/entity-query-request.js";
export { entityRecordSchema, type EntityRecord } from "./models/entity-record.js";
export {
  entityRecordCollectionSchema,
  type EntityRecordCollection,
} from "./models/entity-record-collection.js";
export { errorResponseSchema, type ErrorResponse } from "./models/error-response.js";
export { errorResponse2Schema, type ErrorResponse2 } from "./models/error-response2.js";
export { errorResponse3Schema, type ErrorResponse3 } from "./models/error-response3.js";
export { errorResponse3ErrorSchema, type ErrorResponse3Error } from "./models/error-response3-error.js";
export { errorResponseErrorSchema, type ErrorResponseError } from "./models/error-response-error.js";
export {
  errorResponseErrorUiPathAutomationHubAppInventoryApiSchema,
  type ErrorResponseErrorUiPathAutomationHubAppInventoryApi,
} from "./models/error-response-error-ui-path-automation-hub-app-inventory-api.js";
export {
  errorResponseErrorUiPathPlatformManagementAuditLogsApiSchema,
  type ErrorResponseErrorUiPathPlatformManagementAuditLogsApi,
} from "./models/error-response-error-ui-path-platform-management-audit-logs-api.js";
export {
  errorResponseErrorUiPathTestManagerProjectsApiSchema,
  type ErrorResponseErrorUiPathTestManagerProjectsApi,
} from "./models/error-response-error-ui-path-test-manager-projects-api.js";
export {
  errorResponseUiPathAutomationHubAppInventoryApiSchema,
  type ErrorResponseUiPathAutomationHubAppInventoryApi,
} from "./models/error-response-ui-path-automation-hub-app-inventory-api.js";
export {
  errorResponseUiPathPlatformManagementAuditLogsApiSchema,
  type ErrorResponseUiPathPlatformManagementAuditLogsApi,
} from "./models/error-response-ui-path-platform-management-audit-logs-api.js";
export {
  errorResponseUiPathTestManagerProjectsApiSchema,
  type ErrorResponseUiPathTestManagerProjectsApi,
} from "./models/error-response-ui-path-test-manager-projects-api.js";
export { extractedFieldSchema, type ExtractedField } from "./models/extracted-field.js";
export { extractionRequestSchema, type ExtractionRequest } from "./models/extraction-request.js";
export { extractionResultSchema, type ExtractionResult } from "./models/extraction-result.js";
export { extractionResultDataSchema, type ExtractionResultData } from "./models/extraction-result-data.js";
export { extractorSchema, type Extractor } from "./models/extractor.js";
export { extractorOptionSchema, type ExtractorOption } from "./models/extractor-option.js";
export { ExtractorType, extractorTypeSchema } from "./models/extractor-type.js";
export { fieldValueSchema, type FieldValue } from "./models/field-value.js";
export { filterGroupSchema, type FilterGroup } from "./models/filter-group.js";
export { FolderType, folderTypeSchema } from "./models/folder-type.js";
export { groupSchema, type Group } from "./models/group.js";
export {
  groupLicenseAllocationSchema,
  type GroupLicenseAllocation,
} from "./models/group-license-allocation.js";
export {
  identityApiGroupResponseSchema,
  type IdentityApiGroupResponse,
} from "./models/identity-api-group-response.js";
export { jobSchema, type Job } from "./models/job.js";
export { JobPriority, jobPrioritySchema } from "./models/job-priority.js";
export {
  licenseAllocationEntrySchema,
  type LicenseAllocationEntry,
} from "./models/license-allocation-entry.js";
export { LogicalOperator, logicalOperatorSchema } from "./models/logical-operator.js";
export { oDataAlertCollectionSchema, type ODataAlertCollection } from "./models/odata-alert-collection.js";
export { oDataAssetCollectionSchema, type ODataAssetCollection } from "./models/odata-asset-collection.js";
export { oDataFolderCollectionSchema, type ODataFolderCollection } from "./models/odata-folder-collection.js";
export { oDataJobCollectionSchema, type ODataJobCollection } from "./models/odata-job-collection.js";
export {
  oDataMachineCollectionSchema,
  type ODataMachineCollection,
} from "./models/odata-machine-collection.js";
export {
  oDataPackageCollectionSchema,
  type ODataPackageCollection,
} from "./models/odata-package-collection.js";
export {
  oDataProcessCollectionSchema,
  type ODataProcessCollection,
} from "./models/odata-process-collection.js";
export {
  oDataQueueDefinitionCollectionSchema,
  type ODataQueueDefinitionCollection,
} from "./models/odata-queue-definition-collection.js";
export {
  oDataQueueItemCollectionSchema,
  type ODataQueueItemCollection,
} from "./models/odata-queue-item-collection.js";
export { oDataRobotCollectionSchema, type ODataRobotCollection } from "./models/odata-robot-collection.js";
export { oDataRoleCollectionSchema, type ODataRoleCollection } from "./models/odata-role-collection.js";
export {
  oDataScheduleCollectionSchema,
  type ODataScheduleCollection,
} from "./models/odata-schedule-collection.js";
export {
  oDataStorageBucketCollectionSchema,
  type ODataStorageBucketCollection,
} from "./models/odata-storage-bucket-collection.js";
export { oDataUserCollectionSchema, type ODataUserCollection } from "./models/odata-user-collection.js";
export {
  oDataWebhookCollectionSchema,
  type ODataWebhookCollection,
} from "./models/odata-webhook-collection.js";
export {
  odataWebhooksUiPathServerConfigurationODataGetEventTypesResponseSchema,
  type OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse,
} from "./models/odata-webhooks-ui-path-server-configuration-odata-get-event-types-response.js";
export { Operator, operatorSchema } from "./models/operator.js";
export { orderByClauseSchema, type OrderByClause } from "./models/order-by-clause.js";
export { Phase, phaseSchema } from "./models/phase.js";
export { Phase1, phase1Schema } from "./models/phase1.js";
export { phaseCountSchema, type PhaseCount } from "./models/phase-count.js";
export { pipelineDataSchema, type PipelineData } from "./models/pipeline-data.js";
export { Priority, prioritySchema } from "./models/priority.js";
export { Priority1, priority1Schema } from "./models/priority1.js";
export { projectSchema, type Project } from "./models/project.js";
export { projectListResponseSchema, type ProjectListResponse } from "./models/project-list-response.js";
export {
  projectUiPathTestManagerProjectsApiSchema,
  type ProjectUiPathTestManagerProjectsApi,
} from "./models/project-ui-path-test-manager-projects-api.js";
export {
  projectsClassifiersResponseSchema,
  type ProjectsClassifiersResponse,
} from "./models/projects-classifiers-response.js";
export {
  projectsExtractorsResponseSchema,
  type ProjectsExtractorsResponse,
} from "./models/projects-extractors-response.js";
export { projectsResponseSchema, type ProjectsResponse } from "./models/projects-response.js";
export { queryFilterSchema, type QueryFilter } from "./models/query-filter.js";
export { queueDefinitionSchema, type QueueDefinition } from "./models/queue-definition.js";
export { queueItemSchema, type QueueItem } from "./models/queue-item.js";
export { queueItemDataSchema, type QueueItemData } from "./models/queue-item-data.js";
export { requirementSchema, type Requirement } from "./models/requirement.js";
export {
  requirementListResponseSchema,
  type RequirementListResponse,
} from "./models/requirement-list-response.js";
export { resultSchema, type Result } from "./models/result.js";
export {
  resultUiPathDocumentUnderstandingExtractionApiSchema,
  type ResultUiPathDocumentUnderstandingExtractionApi,
} from "./models/result-ui-path-document-understanding-extraction-api.js";
export { ReviewStatus, reviewStatusSchema } from "./models/review-status.js";
export { robotRefSchema, type RobotRef } from "./models/robot-ref.js";
export { roleSchema, type Role } from "./models/role.js";
export { rolesResponseSchema, type RolesResponse } from "./models/roles-response.js";
export { Source, sourceSchema } from "./models/source.js";
export { Source1, source1Schema } from "./models/source1.js";
export { startInfoSchema, type StartInfo } from "./models/start-info.js";
export { startJobsRequestSchema, type StartJobsRequest } from "./models/start-jobs-request.js";
export { State, stateSchema } from "./models/state.js";
export { Status, statusSchema } from "./models/status.js";
export { Status1, status1Schema } from "./models/status1.js";
export {
  Status1UiPathDocumentUnderstandingExtractionApi,
  status1UiPathDocumentUnderstandingExtractionApiSchema,
} from "./models/status1-ui-path-document-understanding-extraction-api.js";
export {
  StatusUiPathDocumentUnderstandingClassificationApi,
  statusUiPathDocumentUnderstandingClassificationApiSchema,
} from "./models/status-ui-path-document-understanding-classification-api.js";
export {
  StatusUiPathDocumentUnderstandingDigitizationApi,
  statusUiPathDocumentUnderstandingDigitizationApiSchema,
} from "./models/status-ui-path-document-understanding-digitization-api.js";
export {
  StatusUiPathDocumentUnderstandingExtractionApi,
  statusUiPathDocumentUnderstandingExtractionApiSchema,
} from "./models/status-ui-path-document-understanding-extraction-api.js";
export {
  StatusUiPathOrchestratorQueueItemsApi,
  statusUiPathOrchestratorQueueItemsApiSchema,
} from "./models/status-ui-path-orchestrator-queue-items-api.js";
export {
  StatusUiPathTestManagerRequirementsApi,
  statusUiPathTestManagerRequirementsApiSchema,
} from "./models/status-ui-path-test-manager-requirements-api.js";
export {
  StatusUiPathTestManagerTestCasesApi,
  statusUiPathTestManagerTestCasesApiSchema,
} from "./models/status-ui-path-test-manager-test-cases-api.js";
export {
  StatusUiPathTestManagerTestExecutionsApi,
  statusUiPathTestManagerTestExecutionsApiSchema,
} from "./models/status-ui-path-test-manager-test-executions-api.js";
export { stopJobRequestSchema, type StopJobRequest } from "./models/stop-job-request.js";
export { StorageProvider, storageProviderSchema } from "./models/storage-provider.js";
export { Strategy, strategySchema } from "./models/strategy.js";
export { Strategy1, strategy1Schema } from "./models/strategy1.js";
export { testCaseSchema, type TestCase } from "./models/test-case.js";
export { testCaseListResponseSchema, type TestCaseListResponse } from "./models/test-case-list-response.js";
export { testExecutionSchema, type TestExecution } from "./models/test-execution.js";
export {
  testExecutionListResponseSchema,
  type TestExecutionListResponse,
} from "./models/test-execution-list-response.js";
export { testSetSchema, type TestSet } from "./models/test-set.js";
export { testSetListResponseSchema, type TestSetListResponse } from "./models/test-set-list-response.js";
export { TextType, textTypeSchema } from "./models/text-type.js";
export { Type, typeSchema } from "./models/type.js";
export { Type1, type1Schema } from "./models/type1.js";
export {
  TypeUiPathOrchestratorJobsApi,
  typeUiPathOrchestratorJobsApiSchema,
} from "./models/type-ui-path-orchestrator-jobs-api.js";
export {
  TypeUiPathOrchestratorMachinesApi,
  typeUiPathOrchestratorMachinesApiSchema,
} from "./models/type-ui-path-orchestrator-machines-api.js";
export {
  updateAutomationRequestSchema,
  type UpdateAutomationRequest,
} from "./models/update-automation-request.js";
export {
  updateGroupLicenseAllocationRequestSchema,
  type UpdateGroupLicenseAllocationRequest,
} from "./models/update-group-license-allocation-request.js";
export { userSchema, type User } from "./models/user.js";
export { userListResponseSchema, type UserListResponse } from "./models/user-list-response.js";
export { user2Schema, type User2 } from "./models/user2.js";
export { validationRequestSchema, type ValidationRequest } from "./models/validation-request.js";
export { valueSchema, type Value } from "./models/value.js";
export { ValueType, valueTypeSchema } from "./models/value-type.js";
export {
  valueUiPathOrchestratorFoldersApiSchema,
  type ValueUiPathOrchestratorFoldersApi,
} from "./models/value-ui-path-orchestrator-folders-api.js";
export {
  valueUiPathOrchestratorMachinesApiSchema,
  type ValueUiPathOrchestratorMachinesApi,
} from "./models/value-ui-path-orchestrator-machines-api.js";
export {
  valueUiPathOrchestratorPackagesApiSchema,
  type ValueUiPathOrchestratorPackagesApi,
} from "./models/value-ui-path-orchestrator-packages-api.js";
export {
  valueUiPathOrchestratorProcessesApiSchema,
  type ValueUiPathOrchestratorProcessesApi,
} from "./models/value-ui-path-orchestrator-processes-api.js";
export {
  valueUiPathOrchestratorRobotsApiSchema,
  type ValueUiPathOrchestratorRobotsApi,
} from "./models/value-ui-path-orchestrator-robots-api.js";
export {
  valueUiPathOrchestratorRolesApiSchema,
  type ValueUiPathOrchestratorRolesApi,
} from "./models/value-ui-path-orchestrator-roles-api.js";
export {
  valueUiPathOrchestratorSchedulesApiSchema,
  type ValueUiPathOrchestratorSchedulesApi,
} from "./models/value-ui-path-orchestrator-schedules-api.js";
export {
  valueUiPathOrchestratorStorageBucketsApiSchema,
  type ValueUiPathOrchestratorStorageBucketsApi,
} from "./models/value-ui-path-orchestrator-storage-buckets-api.js";
export { valueUipathUsersApiSchema, type ValueUipathUsersApi } from "./models/value-uipath-users-api.js";
export { webhookSchema, type Webhook } from "./models/webhook.js";
export { webhookEventTypeSchema, type WebhookEventType } from "./models/webhook-event-type.js";

export {
  CoreError as UiPathError,
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
