from .add_queue_item_error import AddQueueItemErrorBody, add_queue_item_error_mapper
from .add_user_error import AddUserErrorBody, add_user_error_mapper
from .bulk_upsert_app_inventory_error import BulkUpsertAppInventoryErrorBody, bulk_upsert_app_inventory_error_mapper
from .classify_document_async_error import ClassifyDocumentAsyncErrorBody, classify_document_async_error_mapper
from .create_asset_error import CreateAssetErrorBody, create_asset_error_mapper
from .create_automation_idea_error import CreateAutomationIdeaErrorBody, create_automation_idea_error_mapper
from .create_entity_record_error import CreateEntityRecordErrorBody, create_entity_record_error_mapper
from .create_group_error import CreateGroupErrorBody, create_group_error_mapper
from .create_project_error import CreateProjectErrorBody, create_project_error_mapper
from .create_queue_error import CreateQueueErrorBody, create_queue_error_mapper
from .create_requirement_error import CreateRequirementErrorBody, create_requirement_error_mapper
from .create_test_case_error import CreateTestCaseErrorBody, create_test_case_error_mapper
from .create_test_set_error import CreateTestSetErrorBody, create_test_set_error_mapper
from .create_user_error import CreateUserErrorBody, create_user_error_mapper
from .create_webhook_error import CreateWebhookErrorBody, create_webhook_error_mapper
from .delete_application_error import DeleteApplicationErrorBody, delete_application_error_mapper
from .delete_asset_error import DeleteAssetErrorBody, delete_asset_error_mapper
from .delete_automation_error import DeleteAutomationErrorBody, delete_automation_error_mapper
from .delete_entity_record_error import DeleteEntityRecordErrorBody, delete_entity_record_error_mapper
from .delete_user_error import DeleteUserErrorBody, delete_user_error_mapper
from .delete_webhook_error import DeleteWebhookErrorBody, delete_webhook_error_mapper
from .digitize_document_error import DigitizeDocumentErrorBody, digitize_document_error_mapper
from .edit_user_error import EditUserErrorBody, edit_user_error_mapper
from .extract_document_async_error import ExtractDocumentAsyncErrorBody, extract_document_async_error_mapper
from .get_asset_error import GetAssetErrorBody, get_asset_error_mapper
from .get_automation_error import GetAutomationErrorBody, get_automation_error_mapper
from .get_automation_pipeline_error import GetAutomationPipelineErrorBody, get_automation_pipeline_error_mapper
from .get_classification_result_error import GetClassificationResultErrorBody, get_classification_result_error_mapper
from .get_entity_record_error import GetEntityRecordErrorBody, get_entity_record_error_mapper
from .get_extraction_result_error import GetExtractionResultErrorBody, get_extraction_result_error_mapper
from .get_group_error import GetGroupErrorBody, get_group_error_mapper
from .get_group_license_allocation_error import (
    GetGroupLicenseAllocationErrorBody,
    get_group_license_allocation_error_mapper,
)
from .get_job_error import GetJobErrorBody, get_job_error_mapper
from .get_odata_users_error import GetOdataUsersErrorBody, get_odata_users_error_mapper
from .get_organization_audit_sources_error import (
    GetOrganizationAuditSourcesErrorBody,
    get_organization_audit_sources_error_mapper,
)
from .get_project_error import GetProjectErrorBody, get_project_error_mapper
from .get_test_case_error import GetTestCaseErrorBody, get_test_case_error_mapper
from .get_user_error import GetUserErrorBody, get_user_error_mapper
from .get_webhook_event_types_error import GetWebhookEventTypesErrorBody, get_webhook_event_types_error_mapper
from .list_alerts_error import ListAlertsErrorBody, list_alerts_error_mapper
from .list_app_inventory_error import ListAppInventoryErrorBody, list_app_inventory_error_mapper
from .list_assets_error import ListAssetsErrorBody, list_assets_error_mapper
from .list_automation_collaborators_error import (
    ListAutomationCollaboratorsErrorBody,
    list_automation_collaborators_error_mapper,
)
from .list_automations_error import ListAutomationsErrorBody, list_automations_error_mapper
from .list_classifiers_error import ListClassifiersErrorBody, list_classifiers_error_mapper
from .list_entity_records_error import ListEntityRecordsErrorBody, list_entity_records_error_mapper
from .list_extractors_error import ListExtractorsErrorBody, list_extractors_error_mapper
from .list_folders_error import ListFoldersErrorBody, list_folders_error_mapper
from .list_groups_error import ListGroupsErrorBody, list_groups_error_mapper
from .list_jobs_error import ListJobsErrorBody, list_jobs_error_mapper
from .list_machines_error import ListMachinesErrorBody, list_machines_error_mapper
from .list_packages_error import ListPackagesErrorBody, list_packages_error_mapper
from .list_processes_error import ListProcessesErrorBody, list_processes_error_mapper
from .list_projects2_error import ListProjects2ErrorBody, list_projects2_error_mapper
from .list_projects_error import ListProjectsErrorBody, list_projects_error_mapper
from .list_queue_items_error import ListQueueItemsErrorBody, list_queue_items_error_mapper
from .list_queues_error import ListQueuesErrorBody, list_queues_error_mapper
from .list_requirements_error import ListRequirementsErrorBody, list_requirements_error_mapper
from .list_robots_error import ListRobotsErrorBody, list_robots_error_mapper
from .list_roles2_error import ListRoles2ErrorBody, list_roles2_error_mapper
from .list_roles_error import ListRolesErrorBody, list_roles_error_mapper
from .list_schedules_error import ListSchedulesErrorBody, list_schedules_error_mapper
from .list_storage_buckets_error import ListStorageBucketsErrorBody, list_storage_buckets_error_mapper
from .list_test_cases_error import ListTestCasesErrorBody, list_test_cases_error_mapper
from .list_test_executions_error import ListTestExecutionsErrorBody, list_test_executions_error_mapper
from .list_test_sets_error import ListTestSetsErrorBody, list_test_sets_error_mapper
from .list_users_error import ListUsersErrorBody, list_users_error_mapper
from .list_webhooks_error import ListWebhooksErrorBody, list_webhooks_error_mapper
from .query_entity_records_error import QueryEntityRecordsErrorBody, query_entity_records_error_mapper
from .query_organization_audit_events_error import (
    QueryOrganizationAuditEventsErrorBody,
    query_organization_audit_events_error_mapper,
)
from .query_tenant_audit_events_error import QueryTenantAuditEventsErrorBody, query_tenant_audit_events_error_mapper
from .remove_automation_collaborator_error import (
    RemoveAutomationCollaboratorErrorBody,
    remove_automation_collaborator_error_mapper,
)
from .start_jobs_error import StartJobsErrorBody, start_jobs_error_mapper
from .stop_job_error import StopJobErrorBody, stop_job_error_mapper
from .update_asset_error import UpdateAssetErrorBody, update_asset_error_mapper
from .update_automation_error import UpdateAutomationErrorBody, update_automation_error_mapper
from .update_entity_record_error import UpdateEntityRecordErrorBody, update_entity_record_error_mapper
from .update_group_license_allocation_error import (
    UpdateGroupLicenseAllocationErrorBody,
    update_group_license_allocation_error_mapper,
)
from .validate_document_async_error import ValidateDocumentAsyncErrorBody, validate_document_async_error_mapper

__all__ = [
    "AddQueueItemErrorBody",
    "AddUserErrorBody",
    "BulkUpsertAppInventoryErrorBody",
    "ClassifyDocumentAsyncErrorBody",
    "CreateAssetErrorBody",
    "CreateAutomationIdeaErrorBody",
    "CreateEntityRecordErrorBody",
    "CreateGroupErrorBody",
    "CreateProjectErrorBody",
    "CreateQueueErrorBody",
    "CreateRequirementErrorBody",
    "CreateTestCaseErrorBody",
    "CreateTestSetErrorBody",
    "CreateUserErrorBody",
    "CreateWebhookErrorBody",
    "DeleteApplicationErrorBody",
    "DeleteAssetErrorBody",
    "DeleteAutomationErrorBody",
    "DeleteEntityRecordErrorBody",
    "DeleteUserErrorBody",
    "DeleteWebhookErrorBody",
    "DigitizeDocumentErrorBody",
    "EditUserErrorBody",
    "ExtractDocumentAsyncErrorBody",
    "GetAssetErrorBody",
    "GetAutomationErrorBody",
    "GetAutomationPipelineErrorBody",
    "GetClassificationResultErrorBody",
    "GetEntityRecordErrorBody",
    "GetExtractionResultErrorBody",
    "GetGroupErrorBody",
    "GetGroupLicenseAllocationErrorBody",
    "GetJobErrorBody",
    "GetOdataUsersErrorBody",
    "GetOrganizationAuditSourcesErrorBody",
    "GetProjectErrorBody",
    "GetTestCaseErrorBody",
    "GetUserErrorBody",
    "GetWebhookEventTypesErrorBody",
    "ListAlertsErrorBody",
    "ListAppInventoryErrorBody",
    "ListAssetsErrorBody",
    "ListAutomationCollaboratorsErrorBody",
    "ListAutomationsErrorBody",
    "ListClassifiersErrorBody",
    "ListEntityRecordsErrorBody",
    "ListExtractorsErrorBody",
    "ListFoldersErrorBody",
    "ListGroupsErrorBody",
    "ListJobsErrorBody",
    "ListMachinesErrorBody",
    "ListPackagesErrorBody",
    "ListProcessesErrorBody",
    "ListProjects2ErrorBody",
    "ListProjectsErrorBody",
    "ListQueueItemsErrorBody",
    "ListQueuesErrorBody",
    "ListRequirementsErrorBody",
    "ListRobotsErrorBody",
    "ListRoles2ErrorBody",
    "ListRolesErrorBody",
    "ListSchedulesErrorBody",
    "ListStorageBucketsErrorBody",
    "ListTestCasesErrorBody",
    "ListTestExecutionsErrorBody",
    "ListTestSetsErrorBody",
    "ListUsersErrorBody",
    "ListWebhooksErrorBody",
    "QueryEntityRecordsErrorBody",
    "QueryOrganizationAuditEventsErrorBody",
    "QueryTenantAuditEventsErrorBody",
    "RemoveAutomationCollaboratorErrorBody",
    "StartJobsErrorBody",
    "StopJobErrorBody",
    "UpdateAssetErrorBody",
    "UpdateAutomationErrorBody",
    "UpdateEntityRecordErrorBody",
    "UpdateGroupLicenseAllocationErrorBody",
    "ValidateDocumentAsyncErrorBody",
    "add_queue_item_error_mapper",
    "add_user_error_mapper",
    "bulk_upsert_app_inventory_error_mapper",
    "classify_document_async_error_mapper",
    "create_asset_error_mapper",
    "create_automation_idea_error_mapper",
    "create_entity_record_error_mapper",
    "create_group_error_mapper",
    "create_project_error_mapper",
    "create_queue_error_mapper",
    "create_requirement_error_mapper",
    "create_test_case_error_mapper",
    "create_test_set_error_mapper",
    "create_user_error_mapper",
    "create_webhook_error_mapper",
    "delete_application_error_mapper",
    "delete_asset_error_mapper",
    "delete_automation_error_mapper",
    "delete_entity_record_error_mapper",
    "delete_user_error_mapper",
    "delete_webhook_error_mapper",
    "digitize_document_error_mapper",
    "edit_user_error_mapper",
    "extract_document_async_error_mapper",
    "get_asset_error_mapper",
    "get_automation_error_mapper",
    "get_automation_pipeline_error_mapper",
    "get_classification_result_error_mapper",
    "get_entity_record_error_mapper",
    "get_extraction_result_error_mapper",
    "get_group_error_mapper",
    "get_group_license_allocation_error_mapper",
    "get_job_error_mapper",
    "get_odata_users_error_mapper",
    "get_organization_audit_sources_error_mapper",
    "get_project_error_mapper",
    "get_test_case_error_mapper",
    "get_user_error_mapper",
    "get_webhook_event_types_error_mapper",
    "list_alerts_error_mapper",
    "list_app_inventory_error_mapper",
    "list_assets_error_mapper",
    "list_automation_collaborators_error_mapper",
    "list_automations_error_mapper",
    "list_classifiers_error_mapper",
    "list_entity_records_error_mapper",
    "list_extractors_error_mapper",
    "list_folders_error_mapper",
    "list_groups_error_mapper",
    "list_jobs_error_mapper",
    "list_machines_error_mapper",
    "list_packages_error_mapper",
    "list_processes_error_mapper",
    "list_projects2_error_mapper",
    "list_projects_error_mapper",
    "list_queue_items_error_mapper",
    "list_queues_error_mapper",
    "list_requirements_error_mapper",
    "list_robots_error_mapper",
    "list_roles2_error_mapper",
    "list_roles_error_mapper",
    "list_schedules_error_mapper",
    "list_storage_buckets_error_mapper",
    "list_test_cases_error_mapper",
    "list_test_executions_error_mapper",
    "list_test_sets_error_mapper",
    "list_users_error_mapper",
    "list_webhooks_error_mapper",
    "query_entity_records_error_mapper",
    "query_organization_audit_events_error_mapper",
    "query_tenant_audit_events_error_mapper",
    "remove_automation_collaborator_error_mapper",
    "start_jobs_error_mapper",
    "stop_job_error_mapper",
    "update_asset_error_mapper",
    "update_automation_error_mapper",
    "update_entity_record_error_mapper",
    "update_group_license_allocation_error_mapper",
    "validate_document_async_error_mapper",
]
