from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.apigee_projects_provision_organization_error import (
    ApigeeProjectsProvisionOrganizationErrorBody,
    apigee_projects_provision_organization_error_mapper,
)
from ..errors.apihub_projects_locations_addons_get_error import (
    ApihubProjectsLocationsAddonsGetErrorBody,
    apihub_projects_locations_addons_get_error_mapper,
)
from ..errors.apihub_projects_locations_addons_list_error import (
    ApihubProjectsLocationsAddonsListErrorBody,
    apihub_projects_locations_addons_list_error_mapper,
)
from ..errors.apihub_projects_locations_addons_manage_config_error import (
    ApihubProjectsLocationsAddonsManageConfigErrorBody,
    apihub_projects_locations_addons_manage_config_error_mapper,
)
from ..errors.apihub_projects_locations_api_hub_instances_create_error import (
    ApihubProjectsLocationsApiHubInstancesCreateErrorBody,
    apihub_projects_locations_api_hub_instances_create_error_mapper,
)
from ..errors.apihub_projects_locations_api_hub_instances_delete_error import (
    ApihubProjectsLocationsApiHubInstancesDeleteErrorBody,
    apihub_projects_locations_api_hub_instances_delete_error_mapper,
)
from ..errors.apihub_projects_locations_api_hub_instances_get_error import (
    ApihubProjectsLocationsApiHubInstancesGetErrorBody,
    apihub_projects_locations_api_hub_instances_get_error_mapper,
)
from ..errors.apihub_projects_locations_api_hub_instances_lookup_error import (
    ApihubProjectsLocationsApiHubInstancesLookupErrorBody,
    apihub_projects_locations_api_hub_instances_lookup_error_mapper,
)
from ..errors.apihub_projects_locations_api_hub_instances_patch_error import (
    ApihubProjectsLocationsApiHubInstancesPatchErrorBody,
    apihub_projects_locations_api_hub_instances_patch_error_mapper,
)
from ..errors.apihub_projects_locations_apis_create_error import (
    ApihubProjectsLocationsApisCreateErrorBody,
    apihub_projects_locations_apis_create_error_mapper,
)
from ..errors.apihub_projects_locations_apis_delete_error import (
    ApihubProjectsLocationsApisDeleteErrorBody,
    apihub_projects_locations_apis_delete_error_mapper,
)
from ..errors.apihub_projects_locations_apis_get_error import (
    ApihubProjectsLocationsApisGetErrorBody,
    apihub_projects_locations_apis_get_error_mapper,
)
from ..errors.apihub_projects_locations_apis_list_error import (
    ApihubProjectsLocationsApisListErrorBody,
    apihub_projects_locations_apis_list_error_mapper,
)
from ..errors.apihub_projects_locations_apis_patch_error import (
    ApihubProjectsLocationsApisPatchErrorBody,
    apihub_projects_locations_apis_patch_error_mapper,
)
from ..errors.apihub_projects_locations_apis_versions_create_error import (
    ApihubProjectsLocationsApisVersionsCreateErrorBody,
    apihub_projects_locations_apis_versions_create_error_mapper,
)
from ..errors.apihub_projects_locations_apis_versions_definitions_get_error import (
    ApihubProjectsLocationsApisVersionsDefinitionsGetErrorBody,
    apihub_projects_locations_apis_versions_definitions_get_error_mapper,
)
from ..errors.apihub_projects_locations_apis_versions_delete_error import (
    ApihubProjectsLocationsApisVersionsDeleteErrorBody,
    apihub_projects_locations_apis_versions_delete_error_mapper,
)
from ..errors.apihub_projects_locations_apis_versions_get_error import (
    ApihubProjectsLocationsApisVersionsGetErrorBody,
    apihub_projects_locations_apis_versions_get_error_mapper,
)
from ..errors.apihub_projects_locations_apis_versions_list_error import (
    ApihubProjectsLocationsApisVersionsListErrorBody,
    apihub_projects_locations_apis_versions_list_error_mapper,
)
from ..errors.apihub_projects_locations_apis_versions_operations_create_error import (
    ApihubProjectsLocationsApisVersionsOperationsCreateErrorBody,
    apihub_projects_locations_apis_versions_operations_create_error_mapper,
)
from ..errors.apihub_projects_locations_apis_versions_operations_delete_error import (
    ApihubProjectsLocationsApisVersionsOperationsDeleteErrorBody,
    apihub_projects_locations_apis_versions_operations_delete_error_mapper,
)
from ..errors.apihub_projects_locations_apis_versions_operations_get_error import (
    ApihubProjectsLocationsApisVersionsOperationsGetErrorBody,
    apihub_projects_locations_apis_versions_operations_get_error_mapper,
)
from ..errors.apihub_projects_locations_apis_versions_operations_list_error import (
    ApihubProjectsLocationsApisVersionsOperationsListErrorBody,
    apihub_projects_locations_apis_versions_operations_list_error_mapper,
)
from ..errors.apihub_projects_locations_apis_versions_operations_patch_error import (
    ApihubProjectsLocationsApisVersionsOperationsPatchErrorBody,
    apihub_projects_locations_apis_versions_operations_patch_error_mapper,
)
from ..errors.apihub_projects_locations_apis_versions_patch_error import (
    ApihubProjectsLocationsApisVersionsPatchErrorBody,
    apihub_projects_locations_apis_versions_patch_error_mapper,
)
from ..errors.apihub_projects_locations_apis_versions_specs_create_error import (
    ApihubProjectsLocationsApisVersionsSpecsCreateErrorBody,
    apihub_projects_locations_apis_versions_specs_create_error_mapper,
)
from ..errors.apihub_projects_locations_apis_versions_specs_delete_error import (
    ApihubProjectsLocationsApisVersionsSpecsDeleteErrorBody,
    apihub_projects_locations_apis_versions_specs_delete_error_mapper,
)
from ..errors.apihub_projects_locations_apis_versions_specs_fetch_additional_spec_content_error import (
    ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentErrorBody,
    apihub_projects_locations_apis_versions_specs_fetch_additional_spec_content_error_mapper,
)
from ..errors.apihub_projects_locations_apis_versions_specs_get_contents_error import (
    ApihubProjectsLocationsApisVersionsSpecsGetContentsErrorBody,
    apihub_projects_locations_apis_versions_specs_get_contents_error_mapper,
)
from ..errors.apihub_projects_locations_apis_versions_specs_get_error import (
    ApihubProjectsLocationsApisVersionsSpecsGetErrorBody,
    apihub_projects_locations_apis_versions_specs_get_error_mapper,
)
from ..errors.apihub_projects_locations_apis_versions_specs_lint_error import (
    ApihubProjectsLocationsApisVersionsSpecsLintErrorBody,
    apihub_projects_locations_apis_versions_specs_lint_error_mapper,
)
from ..errors.apihub_projects_locations_apis_versions_specs_list_error import (
    ApihubProjectsLocationsApisVersionsSpecsListErrorBody,
    apihub_projects_locations_apis_versions_specs_list_error_mapper,
)
from ..errors.apihub_projects_locations_apis_versions_specs_patch_error import (
    ApihubProjectsLocationsApisVersionsSpecsPatchErrorBody,
    apihub_projects_locations_apis_versions_specs_patch_error_mapper,
)
from ..errors.apihub_projects_locations_attributes_create_error import (
    ApihubProjectsLocationsAttributesCreateErrorBody,
    apihub_projects_locations_attributes_create_error_mapper,
)
from ..errors.apihub_projects_locations_attributes_delete_error import (
    ApihubProjectsLocationsAttributesDeleteErrorBody,
    apihub_projects_locations_attributes_delete_error_mapper,
)
from ..errors.apihub_projects_locations_attributes_get_error import (
    ApihubProjectsLocationsAttributesGetErrorBody,
    apihub_projects_locations_attributes_get_error_mapper,
)
from ..errors.apihub_projects_locations_attributes_list_error import (
    ApihubProjectsLocationsAttributesListErrorBody,
    apihub_projects_locations_attributes_list_error_mapper,
)
from ..errors.apihub_projects_locations_attributes_patch_error import (
    ApihubProjectsLocationsAttributesPatchErrorBody,
    apihub_projects_locations_attributes_patch_error_mapper,
)
from ..errors.apihub_projects_locations_collect_api_data_error import (
    ApihubProjectsLocationsCollectApiDataErrorBody,
    apihub_projects_locations_collect_api_data_error_mapper,
)
from ..errors.apihub_projects_locations_curations_create_error import (
    ApihubProjectsLocationsCurationsCreateErrorBody,
    apihub_projects_locations_curations_create_error_mapper,
)
from ..errors.apihub_projects_locations_curations_delete_error import (
    ApihubProjectsLocationsCurationsDeleteErrorBody,
    apihub_projects_locations_curations_delete_error_mapper,
)
from ..errors.apihub_projects_locations_curations_get_error import (
    ApihubProjectsLocationsCurationsGetErrorBody,
    apihub_projects_locations_curations_get_error_mapper,
)
from ..errors.apihub_projects_locations_curations_list_error import (
    ApihubProjectsLocationsCurationsListErrorBody,
    apihub_projects_locations_curations_list_error_mapper,
)
from ..errors.apihub_projects_locations_curations_patch_error import (
    ApihubProjectsLocationsCurationsPatchErrorBody,
    apihub_projects_locations_curations_patch_error_mapper,
)
from ..errors.apihub_projects_locations_dependencies_create_error import (
    ApihubProjectsLocationsDependenciesCreateErrorBody,
    apihub_projects_locations_dependencies_create_error_mapper,
)
from ..errors.apihub_projects_locations_dependencies_delete_error import (
    ApihubProjectsLocationsDependenciesDeleteErrorBody,
    apihub_projects_locations_dependencies_delete_error_mapper,
)
from ..errors.apihub_projects_locations_dependencies_get_error import (
    ApihubProjectsLocationsDependenciesGetErrorBody,
    apihub_projects_locations_dependencies_get_error_mapper,
)
from ..errors.apihub_projects_locations_dependencies_list_error import (
    ApihubProjectsLocationsDependenciesListErrorBody,
    apihub_projects_locations_dependencies_list_error_mapper,
)
from ..errors.apihub_projects_locations_dependencies_patch_error import (
    ApihubProjectsLocationsDependenciesPatchErrorBody,
    apihub_projects_locations_dependencies_patch_error_mapper,
)
from ..errors.apihub_projects_locations_deployments_create_error import (
    ApihubProjectsLocationsDeploymentsCreateErrorBody,
    apihub_projects_locations_deployments_create_error_mapper,
)
from ..errors.apihub_projects_locations_deployments_delete_error import (
    ApihubProjectsLocationsDeploymentsDeleteErrorBody,
    apihub_projects_locations_deployments_delete_error_mapper,
)
from ..errors.apihub_projects_locations_deployments_get_error import (
    ApihubProjectsLocationsDeploymentsGetErrorBody,
    apihub_projects_locations_deployments_get_error_mapper,
)
from ..errors.apihub_projects_locations_deployments_list_error import (
    ApihubProjectsLocationsDeploymentsListErrorBody,
    apihub_projects_locations_deployments_list_error_mapper,
)
from ..errors.apihub_projects_locations_deployments_patch_error import (
    ApihubProjectsLocationsDeploymentsPatchErrorBody,
    apihub_projects_locations_deployments_patch_error_mapper,
)
from ..errors.apihub_projects_locations_discovered_api_observations_discovered_api_operations_get_error import (
    ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetErrorBody,
    apihub_projects_locations_discovered_api_observations_discovered_api_operations_get_error_mapper,
)
from ..errors.apihub_projects_locations_discovered_api_observations_discovered_api_operations_list_error import (
    ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListErrorBody,
    apihub_projects_locations_discovered_api_observations_discovered_api_operations_list_error_mapper,
)
from ..errors.apihub_projects_locations_discovered_api_observations_get_error import (
    ApihubProjectsLocationsDiscoveredApiObservationsGetErrorBody,
    apihub_projects_locations_discovered_api_observations_get_error_mapper,
)
from ..errors.apihub_projects_locations_discovered_api_observations_list_error import (
    ApihubProjectsLocationsDiscoveredApiObservationsListErrorBody,
    apihub_projects_locations_discovered_api_observations_list_error_mapper,
)
from ..errors.apihub_projects_locations_external_apis_create_error import (
    ApihubProjectsLocationsExternalApisCreateErrorBody,
    apihub_projects_locations_external_apis_create_error_mapper,
)
from ..errors.apihub_projects_locations_external_apis_delete_error import (
    ApihubProjectsLocationsExternalApisDeleteErrorBody,
    apihub_projects_locations_external_apis_delete_error_mapper,
)
from ..errors.apihub_projects_locations_external_apis_get_error import (
    ApihubProjectsLocationsExternalApisGetErrorBody,
    apihub_projects_locations_external_apis_get_error_mapper,
)
from ..errors.apihub_projects_locations_external_apis_list_error import (
    ApihubProjectsLocationsExternalApisListErrorBody,
    apihub_projects_locations_external_apis_list_error_mapper,
)
from ..errors.apihub_projects_locations_external_apis_patch_error import (
    ApihubProjectsLocationsExternalApisPatchErrorBody,
    apihub_projects_locations_external_apis_patch_error_mapper,
)
from ..errors.apihub_projects_locations_generated_spec_apis_generate_spec_error import (
    ApihubProjectsLocationsGeneratedSpecApisGenerateSpecErrorBody,
    apihub_projects_locations_generated_spec_apis_generate_spec_error_mapper,
)
from ..errors.apihub_projects_locations_generated_spec_apis_get_error import (
    ApihubProjectsLocationsGeneratedSpecApisGetErrorBody,
    apihub_projects_locations_generated_spec_apis_get_error_mapper,
)
from ..errors.apihub_projects_locations_generated_spec_apis_list_error import (
    ApihubProjectsLocationsGeneratedSpecApisListErrorBody,
    apihub_projects_locations_generated_spec_apis_list_error_mapper,
)
from ..errors.apihub_projects_locations_get_error import (
    ApihubProjectsLocationsGetErrorBody,
    apihub_projects_locations_get_error_mapper,
)
from ..errors.apihub_projects_locations_host_project_registrations_create_error import (
    ApihubProjectsLocationsHostProjectRegistrationsCreateErrorBody,
    apihub_projects_locations_host_project_registrations_create_error_mapper,
)
from ..errors.apihub_projects_locations_host_project_registrations_get_error import (
    ApihubProjectsLocationsHostProjectRegistrationsGetErrorBody,
    apihub_projects_locations_host_project_registrations_get_error_mapper,
)
from ..errors.apihub_projects_locations_host_project_registrations_list_error import (
    ApihubProjectsLocationsHostProjectRegistrationsListErrorBody,
    apihub_projects_locations_host_project_registrations_list_error_mapper,
)
from ..errors.apihub_projects_locations_list_error import (
    ApihubProjectsLocationsListErrorBody,
    apihub_projects_locations_list_error_mapper,
)
from ..errors.apihub_projects_locations_lookup_runtime_project_attachment_error import (
    ApihubProjectsLocationsLookupRuntimeProjectAttachmentErrorBody,
    apihub_projects_locations_lookup_runtime_project_attachment_error_mapper,
)
from ..errors.apihub_projects_locations_operations_cancel_error import (
    ApihubProjectsLocationsOperationsCancelErrorBody,
    apihub_projects_locations_operations_cancel_error_mapper,
)
from ..errors.apihub_projects_locations_operations_delete_error import (
    ApihubProjectsLocationsOperationsDeleteErrorBody,
    apihub_projects_locations_operations_delete_error_mapper,
)
from ..errors.apihub_projects_locations_operations_get_error import (
    ApihubProjectsLocationsOperationsGetErrorBody,
    apihub_projects_locations_operations_get_error_mapper,
)
from ..errors.apihub_projects_locations_operations_list_error import (
    ApihubProjectsLocationsOperationsListErrorBody,
    apihub_projects_locations_operations_list_error_mapper,
)
from ..errors.apihub_projects_locations_plugins_create_error import (
    ApihubProjectsLocationsPluginsCreateErrorBody,
    apihub_projects_locations_plugins_create_error_mapper,
)
from ..errors.apihub_projects_locations_plugins_delete_error import (
    ApihubProjectsLocationsPluginsDeleteErrorBody,
    apihub_projects_locations_plugins_delete_error_mapper,
)
from ..errors.apihub_projects_locations_plugins_disable_error import (
    ApihubProjectsLocationsPluginsDisableErrorBody,
    apihub_projects_locations_plugins_disable_error_mapper,
)
from ..errors.apihub_projects_locations_plugins_enable_error import (
    ApihubProjectsLocationsPluginsEnableErrorBody,
    apihub_projects_locations_plugins_enable_error_mapper,
)
from ..errors.apihub_projects_locations_plugins_get_error import (
    ApihubProjectsLocationsPluginsGetErrorBody,
    apihub_projects_locations_plugins_get_error_mapper,
)
from ..errors.apihub_projects_locations_plugins_get_style_guide_error import (
    ApihubProjectsLocationsPluginsGetStyleGuideErrorBody,
    apihub_projects_locations_plugins_get_style_guide_error_mapper,
)
from ..errors.apihub_projects_locations_plugins_instances_create_error import (
    ApihubProjectsLocationsPluginsInstancesCreateErrorBody,
    apihub_projects_locations_plugins_instances_create_error_mapper,
)
from ..errors.apihub_projects_locations_plugins_instances_delete_error import (
    ApihubProjectsLocationsPluginsInstancesDeleteErrorBody,
    apihub_projects_locations_plugins_instances_delete_error_mapper,
)
from ..errors.apihub_projects_locations_plugins_instances_disable_action_error import (
    ApihubProjectsLocationsPluginsInstancesDisableActionErrorBody,
    apihub_projects_locations_plugins_instances_disable_action_error_mapper,
)
from ..errors.apihub_projects_locations_plugins_instances_enable_action_error import (
    ApihubProjectsLocationsPluginsInstancesEnableActionErrorBody,
    apihub_projects_locations_plugins_instances_enable_action_error_mapper,
)
from ..errors.apihub_projects_locations_plugins_instances_execute_action_error import (
    ApihubProjectsLocationsPluginsInstancesExecuteActionErrorBody,
    apihub_projects_locations_plugins_instances_execute_action_error_mapper,
)
from ..errors.apihub_projects_locations_plugins_instances_get_error import (
    ApihubProjectsLocationsPluginsInstancesGetErrorBody,
    apihub_projects_locations_plugins_instances_get_error_mapper,
)
from ..errors.apihub_projects_locations_plugins_instances_list_error import (
    ApihubProjectsLocationsPluginsInstancesListErrorBody,
    apihub_projects_locations_plugins_instances_list_error_mapper,
)
from ..errors.apihub_projects_locations_plugins_instances_manage_source_data_error import (
    ApihubProjectsLocationsPluginsInstancesManageSourceDataErrorBody,
    apihub_projects_locations_plugins_instances_manage_source_data_error_mapper,
)
from ..errors.apihub_projects_locations_plugins_instances_patch_error import (
    ApihubProjectsLocationsPluginsInstancesPatchErrorBody,
    apihub_projects_locations_plugins_instances_patch_error_mapper,
)
from ..errors.apihub_projects_locations_plugins_list_error import (
    ApihubProjectsLocationsPluginsListErrorBody,
    apihub_projects_locations_plugins_list_error_mapper,
)
from ..errors.apihub_projects_locations_plugins_style_guide_get_contents_error import (
    ApihubProjectsLocationsPluginsStyleGuideGetContentsErrorBody,
    apihub_projects_locations_plugins_style_guide_get_contents_error_mapper,
)
from ..errors.apihub_projects_locations_plugins_update_style_guide_error import (
    ApihubProjectsLocationsPluginsUpdateStyleGuideErrorBody,
    apihub_projects_locations_plugins_update_style_guide_error_mapper,
)
from ..errors.apihub_projects_locations_retrieve_api_views_error import (
    ApihubProjectsLocationsRetrieveApiViewsErrorBody,
    apihub_projects_locations_retrieve_api_views_error_mapper,
)
from ..errors.apihub_projects_locations_runtime_project_attachments_create_error import (
    ApihubProjectsLocationsRuntimeProjectAttachmentsCreateErrorBody,
    apihub_projects_locations_runtime_project_attachments_create_error_mapper,
)
from ..errors.apihub_projects_locations_runtime_project_attachments_delete_error import (
    ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteErrorBody,
    apihub_projects_locations_runtime_project_attachments_delete_error_mapper,
)
from ..errors.apihub_projects_locations_runtime_project_attachments_get_error import (
    ApihubProjectsLocationsRuntimeProjectAttachmentsGetErrorBody,
    apihub_projects_locations_runtime_project_attachments_get_error_mapper,
)
from ..errors.apihub_projects_locations_runtime_project_attachments_list_error import (
    ApihubProjectsLocationsRuntimeProjectAttachmentsListErrorBody,
    apihub_projects_locations_runtime_project_attachments_list_error_mapper,
)
from ..errors.apihub_projects_locations_search_resources_error import (
    ApihubProjectsLocationsSearchResourcesErrorBody,
    apihub_projects_locations_search_resources_error_mapper,
)
from ..errors.apihub_projects_locations_servers_configure_and_deploy_server_error import (
    ApihubProjectsLocationsServersConfigureAndDeployServerErrorBody,
    apihub_projects_locations_servers_configure_and_deploy_server_error_mapper,
)
from ..models.enums.spec_content_type1 import SpecContentType1OrStr
from ..models.enums.view_apigee_projects_api import ViewApigeeProjectsApiOrStr
from ..models.google_cloud_apigee_v1_provision_organization_request import (
    GoogleCloudApigeeV1ProvisionOrganizationRequest,
    GoogleCloudApigeeV1ProvisionOrganizationRequestDict,
)
from ..models.google_cloud_apihub_v1_addon import GoogleCloudApihubV1Addon
from ..models.google_cloud_apihub_v1_api import GoogleCloudApihubV1Api, GoogleCloudApihubV1ApiDict
from ..models.google_cloud_apihub_v1_api_hub_instance import (
    GoogleCloudApihubV1ApiHubInstance,
    GoogleCloudApihubV1ApiHubInstanceDict,
)
from ..models.google_cloud_apihub_v1_api_operation import (
    GoogleCloudApihubV1ApiOperation,
    GoogleCloudApihubV1ApiOperationDict,
)
from ..models.google_cloud_apihub_v1_attribute import GoogleCloudApihubV1Attribute, GoogleCloudApihubV1AttributeDict
from ..models.google_cloud_apihub_v1_collect_api_data_request import (
    GoogleCloudApihubV1CollectApiDataRequest,
    GoogleCloudApihubV1CollectApiDataRequestDict,
)
from ..models.google_cloud_apihub_v1_configure_and_deploy_server_request import (
    GoogleCloudApihubV1ConfigureAndDeployServerRequest,
    GoogleCloudApihubV1ConfigureAndDeployServerRequestDict,
)
from ..models.google_cloud_apihub_v1_curation import GoogleCloudApihubV1Curation, GoogleCloudApihubV1CurationDict
from ..models.google_cloud_apihub_v1_definition import GoogleCloudApihubV1Definition
from ..models.google_cloud_apihub_v1_dependency import GoogleCloudApihubV1Dependency, GoogleCloudApihubV1DependencyDict
from ..models.google_cloud_apihub_v1_deployment import GoogleCloudApihubV1Deployment, GoogleCloudApihubV1DeploymentDict
from ..models.google_cloud_apihub_v1_disable_plugin_instance_action_request import (
    GoogleCloudApihubV1DisablePluginInstanceActionRequest,
    GoogleCloudApihubV1DisablePluginInstanceActionRequestDict,
)
from ..models.google_cloud_apihub_v1_discovered_api_observation import GoogleCloudApihubV1DiscoveredApiObservation
from ..models.google_cloud_apihub_v1_discovered_api_operation import GoogleCloudApihubV1DiscoveredApiOperation
from ..models.google_cloud_apihub_v1_enable_plugin_instance_action_request import (
    GoogleCloudApihubV1EnablePluginInstanceActionRequest,
    GoogleCloudApihubV1EnablePluginInstanceActionRequestDict,
)
from ..models.google_cloud_apihub_v1_execute_plugin_instance_action_request import (
    GoogleCloudApihubV1ExecutePluginInstanceActionRequest,
    GoogleCloudApihubV1ExecutePluginInstanceActionRequestDict,
)
from ..models.google_cloud_apihub_v1_external_api import (
    GoogleCloudApihubV1ExternalApi,
    GoogleCloudApihubV1ExternalApiDict,
)
from ..models.google_cloud_apihub_v1_fetch_additional_spec_content_response import (
    GoogleCloudApihubV1FetchAdditionalSpecContentResponse,
)
from ..models.google_cloud_apihub_v1_generate_spec_request import (
    GoogleCloudApihubV1GenerateSpecRequest,
    GoogleCloudApihubV1GenerateSpecRequestDict,
)
from ..models.google_cloud_apihub_v1_generate_spec_response import GoogleCloudApihubV1GenerateSpecResponse
from ..models.google_cloud_apihub_v1_generated_spec_api import GoogleCloudApihubV1GeneratedSpecApi
from ..models.google_cloud_apihub_v1_host_project_registration import (
    GoogleCloudApihubV1HostProjectRegistration,
    GoogleCloudApihubV1HostProjectRegistrationDict,
)
from ..models.google_cloud_apihub_v1_list_addons_response import GoogleCloudApihubV1ListAddonsResponse
from ..models.google_cloud_apihub_v1_list_api_operations_response import GoogleCloudApihubV1ListApiOperationsResponse
from ..models.google_cloud_apihub_v1_list_apis_response import GoogleCloudApihubV1ListApisResponse
from ..models.google_cloud_apihub_v1_list_attributes_response import GoogleCloudApihubV1ListAttributesResponse
from ..models.google_cloud_apihub_v1_list_curations_response import GoogleCloudApihubV1ListCurationsResponse
from ..models.google_cloud_apihub_v1_list_dependencies_response import GoogleCloudApihubV1ListDependenciesResponse
from ..models.google_cloud_apihub_v1_list_deployments_response import GoogleCloudApihubV1ListDeploymentsResponse
from ..models.google_cloud_apihub_v1_list_discovered_api_observations_response import (
    GoogleCloudApihubV1ListDiscoveredApiObservationsResponse,
)
from ..models.google_cloud_apihub_v1_list_discovered_api_operations_response import (
    GoogleCloudApihubV1ListDiscoveredApiOperationsResponse,
)
from ..models.google_cloud_apihub_v1_list_external_apis_response import GoogleCloudApihubV1ListExternalApisResponse
from ..models.google_cloud_apihub_v1_list_generated_spec_apis_response import (
    GoogleCloudApihubV1ListGeneratedSpecApisResponse,
)
from ..models.google_cloud_apihub_v1_list_host_project_registrations_response import (
    GoogleCloudApihubV1ListHostProjectRegistrationsResponse,
)
from ..models.google_cloud_apihub_v1_list_plugin_instances_response import (
    GoogleCloudApihubV1ListPluginInstancesResponse,
)
from ..models.google_cloud_apihub_v1_list_plugins_response import GoogleCloudApihubV1ListPluginsResponse
from ..models.google_cloud_apihub_v1_list_runtime_project_attachments_response import (
    GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse,
)
from ..models.google_cloud_apihub_v1_list_specs_response import GoogleCloudApihubV1ListSpecsResponse
from ..models.google_cloud_apihub_v1_list_versions_response import GoogleCloudApihubV1ListVersionsResponse
from ..models.google_cloud_apihub_v1_lookup_api_hub_instance_response import (
    GoogleCloudApihubV1LookupApiHubInstanceResponse,
)
from ..models.google_cloud_apihub_v1_lookup_runtime_project_attachment_response import (
    GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse,
)
from ..models.google_cloud_apihub_v1_manage_addon_config_request import (
    GoogleCloudApihubV1ManageAddonConfigRequest,
    GoogleCloudApihubV1ManageAddonConfigRequestDict,
)
from ..models.google_cloud_apihub_v1_manage_plugin_instance_source_data_request import (
    GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest,
    GoogleCloudApihubV1ManagePluginInstanceSourceDataRequestDict,
)
from ..models.google_cloud_apihub_v1_plugin import GoogleCloudApihubV1Plugin, GoogleCloudApihubV1PluginDict
from ..models.google_cloud_apihub_v1_plugin_instance import (
    GoogleCloudApihubV1PluginInstance,
    GoogleCloudApihubV1PluginInstanceDict,
)
from ..models.google_cloud_apihub_v1_retrieve_api_views_response import GoogleCloudApihubV1RetrieveApiViewsResponse
from ..models.google_cloud_apihub_v1_runtime_project_attachment import (
    GoogleCloudApihubV1RuntimeProjectAttachment,
    GoogleCloudApihubV1RuntimeProjectAttachmentDict,
)
from ..models.google_cloud_apihub_v1_search_resources_request import (
    GoogleCloudApihubV1SearchResourcesRequest,
    GoogleCloudApihubV1SearchResourcesRequestDict,
)
from ..models.google_cloud_apihub_v1_search_resources_response import GoogleCloudApihubV1SearchResourcesResponse
from ..models.google_cloud_apihub_v1_spec import GoogleCloudApihubV1Spec, GoogleCloudApihubV1SpecDict
from ..models.google_cloud_apihub_v1_spec_contents import GoogleCloudApihubV1SpecContents
from ..models.google_cloud_apihub_v1_style_guide import GoogleCloudApihubV1StyleGuide, GoogleCloudApihubV1StyleGuideDict
from ..models.google_cloud_apihub_v1_style_guide_contents import GoogleCloudApihubV1StyleGuideContents
from ..models.google_cloud_apihub_v1_version import GoogleCloudApihubV1Version, GoogleCloudApihubV1VersionDict
from ..models.google_cloud_location_list_locations_response import GoogleCloudLocationListLocationsResponse
from ..models.google_cloud_location_location import GoogleCloudLocationLocation
from ..models.google_longrunning_list_operations_response import GoogleLongrunningListOperationsResponse
from ..models.google_longrunning_operation import GoogleLongrunningOperation
from ..server.server import Server


class Projects:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProjectsWithRawResponse(client, server, auth)

    def apigee_projects_provision_organization(
        self,
        projects_id: str,
        body: GoogleCloudApigeeV1ProvisionOrganizationRequest | GoogleCloudApigeeV1ProvisionOrganizationRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Provisions a new Apigee organization with a functioning runtime. This is the standard way to create trial
        organizations for a free Apigee trial.

        Args:
            projects_id: Resource name segment (projectsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apigee_projects_provision_organization(
                projects_id, body, request_options=request_options
            ),
        )

    def apihub_projects_locations_addons_get(
        self,
        projects_id: str,
        locations_id: str,
        addons_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Addon:
        """Get an addon.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            addons_id: Resource name segment (addonsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_addons_get(
                projects_id, locations_id, addons_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_addons_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListAddonsResponse:
        """List addons.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of addons. The only supported filter is
                ``plugin_instance_name``. It can be used to filter addons that are enabled for a given plugin instance.
                The format of the filter is ``plugin_instance_name =
                "projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}"``.
            page_size: Optional. The maximum number of hub addons to return. The service may return fewer than this
                value. If unspecified, at most 50 hub addons will be returned. The maximum value is 1000; values above
                1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListAddons`` call. Provide this to retrieve
                the subsequent page. When paginating, all other parameters (except page_size) provided to ``ListAddons``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_addons_list(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_addons_manage_config(
        self,
        projects_id: str,
        locations_id: str,
        addons_id: str,
        body: GoogleCloudApihubV1ManageAddonConfigRequest | GoogleCloudApihubV1ManageAddonConfigRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Manage addon config. This RPC is used for managing the config of the addon. Calling this RPC moves the addon
        into an updating state until the long-running operation succeeds.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            addons_id: Resource name segment (addonsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_addons_manage_config(
                projects_id, locations_id, addons_id, body, request_options=request_options
            ),
        )

    def apihub_projects_locations_api_hub_instances_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1ApiHubInstance | GoogleCloudApihubV1ApiHubInstanceDict,
        *,
        api_hub_instance_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Provisions instance resources for the API Hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            api_hub_instance_id: Optional. Identifier to assign to the Api Hub instance. Must be unique within scope of
                the parent resource. If the field is not provided, system generated id will be used. This value should
                be 4-40 characters, and valid characters are ``/a-z[0-9]-_/``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_api_hub_instances_create(
                projects_id,
                locations_id,
                body,
                api_hub_instance_id=api_hub_instance_id,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_api_hub_instances_delete(
        self,
        projects_id: str,
        locations_id: str,
        api_hub_instances_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Deletes the API hub instance. Deleting the API hub instance will also result in the removal of all associated
        runtime project attachments and the host project registration.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            api_hub_instances_id: Resource name segment (apiHubInstancesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_api_hub_instances_delete(
                projects_id, locations_id, api_hub_instances_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_api_hub_instances_get(
        self,
        projects_id: str,
        locations_id: str,
        api_hub_instances_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ApiHubInstance:
        """Gets details of a single API Hub instance.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            api_hub_instances_id: Resource name segment (apiHubInstancesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_api_hub_instances_get(
                projects_id, locations_id, api_hub_instances_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_api_hub_instances_lookup(
        self, projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GoogleCloudApihubV1LookupApiHubInstanceResponse:
        """Looks up an Api Hub instance in a given Google Cloud project. There will always be only one Api Hub instance
        for a Google Cloud project across all locations.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_api_hub_instances_lookup(
                projects_id, locations_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_api_hub_instances_patch(
        self,
        projects_id: str,
        locations_id: str,
        api_hub_instances_id: str,
        body: GoogleCloudApihubV1ApiHubInstance | GoogleCloudApihubV1ApiHubInstanceDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Update an Api Hub instance. The following fields in the ApiHubInstance can be updated: * disable_search *
        vertex_location * agent_registry_sync_config The update_mask should be used to specify the fields being updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            api_hub_instances_id: Resource name segment (apiHubInstancesId).
            body: The request body.
            update_mask: Optional. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_api_hub_instances_patch(
                projects_id,
                locations_id,
                api_hub_instances_id,
                body,
                update_mask=update_mask,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_apis_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1Api | GoogleCloudApihubV1ApiDict,
        *,
        api_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Api:
        """Create an API resource in the API hub. Once an API resource is created, versions can be added to it.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            api_id: Optional. The ID to use for the API resource, which will become the final component of the API's
                resource name. This field is optional. * If provided, the same will be used. The service will throw an
                error if the specified id is already used by another API resource in the API hub. * If not provided, a
                system generated id will be used. This value should be 4-500 characters, and valid characters are
                /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_apis_create(
                projects_id, locations_id, body, api_id=api_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_apis_delete(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        *,
        force: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Delete an API resource in the API hub. API can only be deleted if all underlying versions are deleted.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            force: Optional. If set to true, any versions from this API will also be deleted. Otherwise, the request
                will only work if the API has no versions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_apis_delete(
                projects_id, locations_id, apis_id, force=force, request_options=request_options
            ),
        )

    def apihub_projects_locations_apis_get(
        self, projects_id: str, locations_id: str, apis_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GoogleCloudApihubV1Api:
        """Get API resource details including the API versions contained in it.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_apis_get(
                projects_id, locations_id, apis_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_apis_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListApisResponse:
        r"""List API resources in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of ApiResources. A filter expression consists of a
                field name, a comparison operator, and a value for filtering. The value must be a string. The comparison
                operator must be one of: ``<``, ``>``, ``:`` or ``=``. Filters are not case sensitive. The following
                fields in the ``ApiResource`` are eligible for filtering: * ``owner.email`` - The email of the team
                which owns the ApiResource. Allowed comparison operators: ``=``. * ``create_time`` - The time at which
                the ApiResource was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339]
                format. Allowed comparison operators: ``>`` and ``<``. * ``display_name`` - The display name of the
                ApiResource. Allowed comparison operators: ``=``. * ``target_user.enum_values.values.id`` - The allowed
                value id of the target users attribute associated with the ApiResource. Allowed comparison operator is
                ``:``. * ``target_user.enum_values.values.display_name`` - The allowed value display name of the target
                users attribute associated with the ApiResource. Allowed comparison operator is ``:``. *
                ``team.enum_values.values.id`` - The allowed value id of the team attribute associated with the
                ApiResource. Allowed comparison operator is ``:``. * ``team.enum_values.values.display_name`` - The
                allowed value display name of the team attribute associated with the ApiResource. Allowed comparison
                operator is ``:``. * ``business_unit.enum_values.values.id`` - The allowed value id of the business unit
                attribute associated with the ApiResource. Allowed comparison operator is ``:``. *
                ``business_unit.enum_values.values.display_name`` - The allowed value display name of the business unit
                attribute associated with the ApiResource. Allowed comparison operator is ``:``. *
                ``maturity_level.enum_values.values.id`` - The allowed value id of the maturity level attribute
                associated with the ApiResource. Allowed comparison operator is ``:``. *
                ``maturity_level.enum_values.values.display_name`` - The allowed value display name of the maturity
                level attribute associated with the ApiResource. Allowed comparison operator is ``:``. *
                ``api_style.enum_values.values.id`` - The allowed value id of the api style attribute associated with
                the ApiResource. Allowed comparison operator is ``:``. * ``api_style.enum_values.values.display_name`` -
                The allowed value display name of the api style attribute associated with the ApiResource. Allowed
                comparison operator is ``:``. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.id`` - The allowed value id of the user defined
                enum attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.display_name`` - The allowed value display name
                of the user defined enum attribute associated with the Resource. Allowed comparison operator is ``:``.
                Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user
                defined enum attribute enum name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.string_values.values`` - The allowed value of the user defined
                string attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-string is a placeholder that can be replaced with any user defined string
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.json_values.values`` - The allowed value of the user defined JSON
                attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute
                name. A filter function is also supported in the filter string. The filter function is ``id(name)``. The
                ``id(name)`` function returns the id of the resource name. For example, ``id(name) = \"api-1\"`` is
                equivalent to ``name = \"projects/test-project-id/locations/test-location-id/apis/api-1\"`` provided the
                parent is ``projects/test-project-id/locations/test-location-id``. Another supported filter function is
                ``plugins(source_metadata)``. This function filters for resources that are associated with a specific
                plugin. For example, ``plugins(source_metadata) :
                "projects/test-project-id/locations/test-location-id/plugins/test-plugin-id"`` will return resources
                sourced from the given plugin. Expressions are combined with either ``AND`` logic operator or ``OR``
                logical operator but not both of them together i.e. only one of the ``AND`` or ``OR`` operator can be
                used throughout the filter string and both the operators cannot be used together. No other logical
                operators are supported. At most three filter fields are allowed in the filter string and if provided
                more than that then ``INVALID_ARGUMENT`` error is returned by the API. Here are a few examples: *
                ``owner.email = \"apihub@google.com\"`` - - The owner team email is _apihub@google.com_. * ``owner.email
                = \"apihub@google.com\" AND create_time < \"2021-08-15T14:50:00Z\" AND create_time >
                \"2021-08-10T12:00:00Z\"`` - The owner team email is _apihub@google.com_ and the api was created before
                _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. * ``owner.email = \"apihub@google.com\"
                OR team.enum_values.values.id: apihub-team-id`` - The filter string specifies the APIs where the owner
                team email is _apihub@google.com_ or the id of the allowed value associated with the team attribute is
                _apihub-team-id_. * ``owner.email = \"apihub@google.com\" OR team.enum_values.values.display_name:
                ApiHub Team`` - The filter string specifies the APIs where the owner team email is _apihub@google.com_
                or the display name of the allowed value associated with the team attribute is ``ApiHub Team``. *
                ``owner.email = \"apihub@google.com\" AND
                attributes.projects/test-project-id/locations/test-location-id/
                attributes/17650f90-4a29-4971-b3c0-d5532da3764b.enum_values.values.id: test_enum_id AND
                attributes.projects/test-project-id/locations/test-location-id/
                attributes/1765\0f90-4a29-5431-b3d0-d5532da3764c.string_values.values: test_string_value`` - The filter
                string specifies the APIs where the owner team email is _apihub@google.com_ and the id of the allowed
                value associated with the user defined attribute of type enum is _test_enum_id_ and the value of the
                user defined attribute of type string is _test_..
            page_size: Optional. The maximum number of API resources to return. The service may return fewer than this
                value. If unspecified, at most 50 Apis will be returned. The maximum value is 1000; values above 1000
                will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListApis`` call. Provide this to retrieve the
                subsequent page. When paginating, all other parameters (except page_size) provided to ``ListApis`` must
                match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_apis_list(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_apis_patch(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        body: GoogleCloudApihubV1Api | GoogleCloudApihubV1ApiDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Api:
        """Update an API resource in the API hub. The following fields in the API can be updated: * display_name *
        description * owner * documentation * target_user * team * business_unit * maturity_level * api_style *
        attributes * fingerprint The update_mask should be used to specify the fields being updated. Updating the owner
        field requires complete owner message and updates both owner and email fields.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_apis_patch(
                projects_id, locations_id, apis_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    def apihub_projects_locations_apis_versions_create(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        body: GoogleCloudApihubV1Version | GoogleCloudApihubV1VersionDict,
        *,
        version_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Version:
        """Create an API version for an API resource in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            body: The request body.
            version_id: Optional. The ID to use for the API version, which will become the final component of the
                version's resource name. This field is optional. * If provided, the same will be used. The service will
                throw an error if the specified id is already used by another version in the API resource. * If not
                provided, a system generated id will be used. This value should be 4-500 characters, overall resource
                name which will be of format ``projects/{project}/locations/{location}/apis/{api}/versions/{version}``,
                its length is limited to 700 characters and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_apis_versions_create(
                projects_id, locations_id, apis_id, body, version_id=version_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_apis_versions_definitions_get(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        definitions_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Definition:
        """Get details about a definition in an API version.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            definitions_id: Resource name segment (definitionsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_apis_versions_definitions_get(
                projects_id, locations_id, apis_id, versions_id, definitions_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_apis_versions_delete(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        *,
        force: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Delete an API version. Version can only be deleted if all underlying specs, operations, definitions and
        linked deployments are deleted.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            force: Optional. If set to true, any specs from this version will also be deleted. Otherwise, the request
                will only work if the version has no specs.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_apis_versions_delete(
                projects_id, locations_id, apis_id, versions_id, force=force, request_options=request_options
            ),
        )

    def apihub_projects_locations_apis_versions_get(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Version:
        """Get details about the API version of an API resource. This will include information about the specs and
        operations present in the API version as well as the deployments linked to it.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_apis_versions_get(
                projects_id, locations_id, apis_id, versions_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_apis_versions_list(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListVersionsResponse:
        r"""List API versions of an API resource in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            filter_: Optional. An expression that filters the list of Versions. A filter expression consists of a field
                name, a comparison operator, and a value for filtering. The value must be a string, a number, or a
                boolean. The comparison operator must be one of: ``<``, ``>`` or ``=``. Filters are not case sensitive.
                The following fields in the ``Version`` are eligible for filtering: * ``display_name`` - The display
                name of the Version. Allowed comparison operators: ``=``. * ``create_time`` - The time at which the
                Version was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format.
                Allowed comparison operators: ``>`` and ``<``. * ``lifecycle.enum_values.values.id`` - The allowed value
                id of the lifecycle attribute associated with the Version. Allowed comparison operators: ``:``. *
                ``lifecycle.enum_values.values.display_name`` - The allowed value display name of the lifecycle
                attribute associated with the Version. Allowed comparison operators: ``:``. *
                ``compliance.enum_values.values.id`` - The allowed value id of the compliances attribute associated with
                the Version. Allowed comparison operators: ``:``. * ``compliance.enum_values.values.display_name`` - The
                allowed value display name of the compliances attribute associated with the Version. Allowed comparison
                operators: ``:``. * ``accreditation.enum_values.values.id`` - The allowed value id of the accreditations
                attribute associated with the Version. Allowed comparison operators: ``:``. *
                ``accreditation.enum_values.values.display_name`` - The allowed value display name of the accreditations
                attribute associated with the Version. Allowed comparison operators: ``:``. *
                ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.id`` - The allowed value id of the user defined
                enum attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.display_name`` - The allowed value display name
                of the user defined enum attribute associated with the Resource. Allowed comparison operator is ``:``.
                Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user
                defined enum attribute enum name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.string_values.values`` - The allowed value of the user defined
                string attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-string is a placeholder that can be replaced with any user defined string
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.json_values.values`` - The allowed value of the user defined JSON
                attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute
                name. Expressions are combined with either ``AND`` logic operator or ``OR`` logical operator but not
                both of them together i.e. only one of the ``AND`` or ``OR`` operator can be used throughout the filter
                string and both the operators cannot be used together. No other logical operators are supported. At most
                three filter fields are allowed in the filter string and if provided more than that then
                ``INVALID_ARGUMENT`` error is returned by the API. Here are a few examples: *
                ``lifecycle.enum_values.values.id: preview-id`` - The filter string specifies that the id of the allowed
                value associated with the lifecycle attribute of the Version is _preview-id_. *
                ``lifecycle.enum_values.values.display_name: \"Preview Display Name\"`` - The filter string specifies
                that the display name of the allowed value associated with the lifecycle attribute of the Version is
                ``Preview Display Name``. * ``lifecycle.enum_values.values.id: preview-id AND create_time <
                \"2021-08-15T14:50:00Z\" AND create_time > \"2021-08-10T12:00:00Z\"`` - The id of the allowed value
                associated with the lifecycle attribute of the Version is _preview-id_ and it was created before
                _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. * ``compliance.enum_values.values.id:
                gdpr-id OR compliance.enum_values.values.id: pci-dss-id`` - The id of the allowed value associated with
                the compliance attribute is _gdpr-id_ or _pci-dss-id_. * ``lifecycle.enum_values.values.id: preview-id
                AND attributes.projects/test-project-id/locations/test-location-id/
                attributes/17650f90-4a29-4971-b3c0-d5532da3764b.string_values.values: test`` - The filter string
                specifies that the id of the allowed value associated with the lifecycle attribute of the Version is
                _preview-id_ and the value of the user defined attribute of type string is _test_.
            page_size: Optional. The maximum number of versions to return. The service may return fewer than this value.
                If unspecified, at most 50 versions will be returned. The maximum value is 1000; values above 1000 will
                be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListVersions`` call. Provide this to retrieve
                the subsequent page. When paginating, all other parameters (except page_size) provided to
                ``ListVersions`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_apis_versions_list(
                projects_id,
                locations_id,
                apis_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_apis_versions_operations_create(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        body: GoogleCloudApihubV1ApiOperation | GoogleCloudApihubV1ApiOperationDict,
        *,
        api_operation_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ApiOperation:
        """Create an apiOperation in an API version. An apiOperation can be created only if the version has no
        apiOperations which were created by parsing a spec.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            body: The request body.
            api_operation_id: Optional. The ID to use for the operation resource, which will become the final component
                of the operation's resource name. This field is optional. * If provided, the same will be used. The
                service will throw an error if the specified id is already used by another operation resource in the API
                hub. * If not provided, a system generated id will be used. This value should be 4-500 characters,
                overall resource name which will be of format
                ``projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}``, its
                length is limited to 1000 characters, and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_apis_versions_operations_create(
                projects_id,
                locations_id,
                apis_id,
                versions_id,
                body,
                api_operation_id=api_operation_id,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_apis_versions_operations_delete(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        operations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Delete an operation in an API version and we can delete only the operations created via create API. If the
        operation was created by parsing the spec, then it can be deleted by editing or deleting the spec. Deleting an
        operation will also remove any links between the operation and deployments.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_apis_versions_operations_delete(
                projects_id, locations_id, apis_id, versions_id, operations_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_apis_versions_operations_get(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        operations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ApiOperation:
        """Get details about a particular operation in API version.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_apis_versions_operations_get(
                projects_id, locations_id, apis_id, versions_id, operations_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_apis_versions_operations_list(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListApiOperationsResponse:
        r"""List operations in an API version.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            filter_: Optional. An expression that filters the list of ApiOperations. A filter expression consists of a
                field name, a comparison operator, and a value for filtering. The value must be a string or a boolean.
                The comparison operator must be one of: ``<``, ``>`` or ``=``. Filters are not case sensitive. The
                following fields in the ``ApiOperation`` are eligible for filtering: * ``name`` - The ApiOperation
                resource name. Allowed comparison operators: ``=``. * ``details.http_operation.path.path`` - The http
                operation's complete path relative to server endpoint. Allowed comparison operators: ``=``. *
                ``details.http_operation.method`` - The http operation method type. Allowed comparison operators: ``=``.
                * ``details.deprecated`` - Indicates if the ApiOperation is deprecated. Allowed values are True / False
                indicating the deprycation status of the ApiOperation. Allowed comparison operators: ``=``. *
                ``create_time`` - The time at which the ApiOperation was created. The value should be in the
                (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: ``>`` and ``<``. *
                ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.id`` - The allowed value id of the user defined
                enum attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.display_name`` - The allowed value display name
                of the user defined enum attribute associated with the Resource. Allowed comparison operator is ``:``.
                Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user
                defined enum attribute enum name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.string_values.values`` - The allowed value of the user defined
                string attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-string is a placeholder that can be replaced with any user defined string
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.json_values.values`` - The allowed value of the user defined JSON
                attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute
                name. Expressions are combined with either ``AND`` logic operator or ``OR`` logical operator but not
                both of them together i.e. only one of the ``AND`` or ``OR`` operator can be used throughout the filter
                string and both the operators cannot be used together. No other logical operators are supported. At most
                three filter fields are allowed in the filter string and if provided more than that then
                ``INVALID_ARGUMENT`` error is returned by the API. Here are a few examples: * ``details.deprecated =
                True`` - The ApiOperation is deprecated. * ``details.http_operation.method = GET AND create_time <
                \"2021-08-15T14:50:00Z\" AND create_time > \"2021-08-10T12:00:00Z\"`` - The method of the http operation
                of the ApiOperation is _GET_ and the spec was created before _2021-08-15 14:50:00 UTC_ and after
                _2021-08-10 12:00:00 UTC_. * ``details.http_operation.method = GET OR details.http_operation.method =
                POST``. - The http operation of the method of ApiOperation is _GET_ or _POST_. * ``details.deprecated =
                True AND attributes.projects/test-project-id/locations/test-location-id/
                attributes/17650f90-4a29-4971-b3c0-d5532da3764b.string_values.values: test`` - The filter string
                specifies that the ApiOperation is deprecated and the value of the user defined attribute of type string
                is _test_.
            page_size: Optional. The maximum number of operations to return. The service may return fewer than this
                value. If unspecified, at most 50 operations will be returned. The maximum value is 1000; values above
                1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListApiOperations`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to
                ``ListApiOperations`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_apis_versions_operations_list(
                projects_id,
                locations_id,
                apis_id,
                versions_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_apis_versions_operations_patch(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        operations_id: str,
        body: GoogleCloudApihubV1ApiOperation | GoogleCloudApihubV1ApiOperationDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ApiOperation:
        """Update an operation in an API version. The following fields in the ApiOperation resource can be updated: *
        details.description * details.documentation * details.http_operation.path * details.http_operation.method *
        details.deprecated * attributes * details.mcp_tool.title * details.mcp_tool.description *
        details.mcp_tool.input_schema * details.mcp_tool.output_schema * details.input_schema * details.output_schema *
        details.mcp_tool.annotations.title * details.mcp_tool.annotations.read_only_hint *
        details.mcp_tool.annotations.destructive_hint * details.mcp_tool.annotations.idempotent_hint *
        details.mcp_tool.annotations.open_world_hint * details.mcp_tool.annotations.additional_hints The update_mask
        should be used to specify the fields being updated. An operation can be updated only if the operation was
        created via CreateApiOperation API. If the operation was created by parsing the spec, then it can be edited by
        updating the spec.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            operations_id: Resource name segment (operationsId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_apis_versions_operations_patch(
                projects_id,
                locations_id,
                apis_id,
                versions_id,
                operations_id,
                body,
                update_mask=update_mask,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_apis_versions_patch(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        body: GoogleCloudApihubV1Version | GoogleCloudApihubV1VersionDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Version:
        """Update API version. The following fields in the version can be updated currently: * display_name *
        description * documentation * deployments * lifecycle * compliance * accreditation * attributes The update_mask
        should be used to specify the fields being updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_apis_versions_patch(
                projects_id,
                locations_id,
                apis_id,
                versions_id,
                body,
                update_mask=update_mask,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_apis_versions_specs_create(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        body: GoogleCloudApihubV1Spec | GoogleCloudApihubV1SpecDict,
        *,
        spec_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Spec:
        """Add a spec to an API version in the API hub. Multiple specs can be added to an API version. Note, while
        adding a spec, at least one of ``contents`` or ``source_uri`` must be provided. If ``contents`` is provided,
        then ``spec_type`` must also be provided. On adding a spec with contents to the version, the operations present
        in it will be added to the version.Note that the file contents in the spec should be of the same type as defined
        in the ``projects/{project}/locations/{location}/attributes/system-spec-type`` attribute associated with spec
        resource. Note that specs of various types can be uploaded, however parsing of details is supported for OpenAPI
        spec currently. In order to access the information parsed from the spec, use the GetSpec method. In order to
        access the raw contents for a particular spec, use the GetSpecContents method. In order to access the operations
        parsed from the spec, use the ListAPIOperations method.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            body: The request body.
            spec_id: Optional. The ID to use for the spec, which will become the final component of the spec's resource
                name. This field is optional. * If provided, the same will be used. The service will throw an error if
                the specified id is already used by another spec in the API resource. * If not provided, a system
                generated id will be used. This value should be 4-500 characters, overall resource name which will be of
                format ``projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}``, its
                length is limited to 1000 characters and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_apis_versions_specs_create(
                projects_id, locations_id, apis_id, versions_id, body, spec_id=spec_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_apis_versions_specs_delete(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        specs_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Delete a spec. Deleting a spec will also delete the associated operations from the version and remove any
        links between the spec and deployments.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            specs_id: Resource name segment (specsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_apis_versions_specs_delete(
                projects_id, locations_id, apis_id, versions_id, specs_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_apis_versions_specs_fetch_additional_spec_content(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        specs_id: str,
        *,
        spec_content_type: SpecContentType1OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1FetchAdditionalSpecContentResponse:
        """Fetch additional spec content.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            specs_id: Resource name segment (specsId).
            spec_content_type: Optional. The type of the spec contents to be retrieved.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_apis_versions_specs_fetch_additional_spec_content(
                projects_id,
                locations_id,
                apis_id,
                versions_id,
                specs_id,
                spec_content_type=spec_content_type,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_apis_versions_specs_get(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        specs_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Spec:
        """Get details about the information parsed from a spec. Note that this method does not return the raw spec
        contents. Use GetSpecContents method to retrieve the same.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            specs_id: Resource name segment (specsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_apis_versions_specs_get(
                projects_id, locations_id, apis_id, versions_id, specs_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_apis_versions_specs_get_contents(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        specs_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1SpecContents:
        """Get spec contents.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            specs_id: Resource name segment (specsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_apis_versions_specs_get_contents(
                projects_id, locations_id, apis_id, versions_id, specs_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_apis_versions_specs_lint(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        specs_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Lints the requested spec and updates the corresponding API Spec with the lint response. This lint response
        will be available in all subsequent Get and List Spec calls to Core service.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            specs_id: Resource name segment (specsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_apis_versions_specs_lint(
                projects_id, locations_id, apis_id, versions_id, specs_id, body, request_options=request_options
            ),
        )

    def apihub_projects_locations_apis_versions_specs_list(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListSpecsResponse:
        r"""List specs corresponding to a particular API resource.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            filter_: Optional. An expression that filters the list of Specs. A filter expression consists of a field
                name, a comparison operator, and a value for filtering. The value must be a string. The comparison
                operator must be one of: ``<``, ``>``, ``:`` or ``=``. Filters are not case sensitive. The following
                fields in the ``Spec`` are eligible for filtering: * ``display_name`` - The display name of the Spec.
                Allowed comparison operators: ``=``. * ``create_time`` - The time at which the Spec was created. The
                value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison
                operators: ``>`` and ``<``. * ``spec_type.enum_values.values.id`` - The allowed value id of the
                spec_type attribute associated with the Spec. Allowed comparison operators: ``:``. *
                ``spec_type.enum_values.values.display_name`` - The allowed value display name of the spec_type
                attribute associated with the Spec. Allowed comparison operators: ``:``. *
                ``lint_response.json_values.values`` - The json value of the lint_response attribute associated with the
                Spec. Allowed comparison operators: ``:``. * ``mime_type`` - The MIME type of the Spec. Allowed
                comparison operators: ``=``. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.id`` - The allowed value id of the user defined
                enum attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.display_name`` - The allowed value display name
                of the user defined enum attribute associated with the Resource. Allowed comparison operator is ``:``.
                Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user
                defined enum attribute enum name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.string_values.values`` - The allowed value of the user defined
                string attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-string is a placeholder that can be replaced with any user defined string
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.json_values.values`` - The allowed value of the user defined JSON
                attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute
                name. Expressions are combined with either ``AND`` logic operator or ``OR`` logical operator but not
                both of them together i.e. only one of the ``AND`` or ``OR`` operator can be used throughout the filter
                string and both the operators cannot be used together. No other logical operators are supported. At most
                three filter fields are allowed in the filter string and if provided more than that then
                ``INVALID_ARGUMENT`` error is returned by the API. Here are a few examples: *
                ``spec_type.enum_values.values.id: rest-id`` - The filter string specifies that the id of the allowed
                value associated with the spec_type attribute is _rest-id_. *
                ``spec_type.enum_values.values.display_name: \"Rest Display Name\"`` - The filter string specifies that
                the display name of the allowed value associated with the spec_type attribute is ``Rest Display Name``.
                * ``spec_type.enum_values.values.id: grpc-id AND create_time < \"2021-08-15T14:50:00Z\" AND create_time
                > \"2021-08-10T12:00:00Z\"`` - The id of the allowed value associated with the spec_type attribute is
                _grpc-id_ and the spec was created before _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_.
                * ``spec_type.enum_values.values.id: rest-id OR spec_type.enum_values.values.id: grpc-id`` - The id of
                the allowed value associated with the spec_type attribute is _rest-id_ or _grpc-id_. *
                ``spec_type.enum_values.values.id: rest-id AND
                attributes.projects/test-project-id/locations/test-location-id/
                attributes/17650f90-4a29-4971-b3c0-d5532da3764b.enum_values.values.id: test`` - The filter string
                specifies that the id of the allowed value associated with the spec_type attribute is _rest-id_ and the
                id of the allowed value associated with the user defined attribute of type enum is _test_.
            page_size: Optional. The maximum number of specs to return. The service may return fewer than this value. If
                unspecified, at most 50 specs will be returned. The maximum value is 1000; values above 1000 will be
                coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListSpecs`` call. Provide this to retrieve
                the subsequent page. When paginating, all other parameters provided to ``ListSpecs`` must match the call
                that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_apis_versions_specs_list(
                projects_id,
                locations_id,
                apis_id,
                versions_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_apis_versions_specs_patch(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        specs_id: str,
        body: GoogleCloudApihubV1Spec | GoogleCloudApihubV1SpecDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Spec:
        """Update spec. The following fields in the spec can be updated: * display_name * source_uri * lint_response *
        attributes * contents * spec_type In case of an OAS spec, updating spec contents can lead to: 1. Creation,
        deletion and update of operations. 2. Creation, deletion and update of definitions. 3. Update of other info
        parsed out from the new spec. In case of contents or source_uri being present in update mask, spec_type must
        also be present. Also, spec_type can not be present in update mask if contents or source_uri is not present. The
        update_mask should be used to specify the fields being updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            specs_id: Resource name segment (specsId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_apis_versions_specs_patch(
                projects_id,
                locations_id,
                apis_id,
                versions_id,
                specs_id,
                body,
                update_mask=update_mask,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_attributes_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1Attribute | GoogleCloudApihubV1AttributeDict,
        *,
        attribute_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Attribute:
        """Create a user defined attribute. Certain pre defined attributes are already created by the API hub. These
        attributes will have type as ``SYSTEM_DEFINED`` and can be listed via ListAttributes method. Allowed values for
        the same can be updated via UpdateAttribute method.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            attribute_id: Optional. The ID to use for the attribute, which will become the final component of the
                attribute's resource name. This field is optional. * If provided, the same will be used. The service
                will throw an error if the specified id is already used by another attribute resource in the API hub. *
                If not provided, a system generated id will be used. This value should be 4-500 characters, and valid
                characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_attributes_create(
                projects_id, locations_id, body, attribute_id=attribute_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_attributes_delete(
        self,
        projects_id: str,
        locations_id: str,
        attributes_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Delete an attribute. Note: System defined attributes cannot be deleted. All associations of the attribute
        being deleted with any API hub resource will also get deleted.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            attributes_id: Resource name segment (attributesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_attributes_delete(
                projects_id, locations_id, attributes_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_attributes_get(
        self,
        projects_id: str,
        locations_id: str,
        attributes_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Attribute:
        """Get details about the attribute.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            attributes_id: Resource name segment (attributesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_attributes_get(
                projects_id, locations_id, attributes_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_attributes_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListAttributesResponse:
        r"""List all attributes.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of Attributes. A filter expression consists of a
                field name, a comparison operator, and a value for filtering. The value must be a string or a boolean.
                The comparison operator must be one of: ``<``, ``>`` or ``=``. Filters are not case sensitive. The
                following fields in the ``Attribute`` are eligible for filtering: * ``display_name`` - The display name
                of the Attribute. Allowed comparison operators: ``=``. * ``definition_type`` - The definition type of
                the attribute. Allowed comparison operators: ``=``. * ``scope`` - The scope of the attribute. Allowed
                comparison operators: ``=``. * ``data_type`` - The type of the data of the attribute. Allowed comparison
                operators: ``=``. * ``mandatory`` - Denotes whether the attribute is mandatory or not. Allowed
                comparison operators: ``=``. * ``create_time`` - The time at which the Attribute was created. The value
                should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators:
                ``>`` and ``<``. Expressions are combined with either ``AND`` logic operator or ``OR`` logical operator
                but not both of them together i.e. only one of the ``AND`` or ``OR`` operator can be used throughout the
                filter string and both the operators cannot be used together. No other logical operators are supported.
                At most three filter fields are allowed in the filter string and if provided more than that then
                ``INVALID_ARGUMENT`` error is returned by the API. Here are a few examples: * ``display_name =
                production`` - - The display name of the attribute is _production_. * ``(display_name = production) AND
                (create_time < \"2021-08-15T14:50:00Z\") AND (create_time > \"2021-08-10T12:00:00Z\")`` - The display
                name of the attribute is _production_ and the attribute was created before _2021-08-15 14:50:00 UTC_ and
                after _2021-08-10 12:00:00 UTC_. * ``display_name = production OR scope = api`` - The attribute where
                the display name is _production_ or the scope is _api_.
            page_size: Optional. The maximum number of attribute resources to return. The service may return fewer than
                this value. If unspecified, at most 50 attributes will be returned. The maximum value is 1000; values
                above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListAttributes`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListAttributes`` must
                match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_attributes_list(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_attributes_patch(
        self,
        projects_id: str,
        locations_id: str,
        attributes_id: str,
        body: GoogleCloudApihubV1Attribute | GoogleCloudApihubV1AttributeDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Attribute:
        """Update the attribute. The following fields in the Attribute resource can be updated: * display_name The
        display name can be updated for user defined attributes only. * description The description can be updated for
        user defined attributes only. * allowed_values To update the list of allowed values, clients need to use the
        fetched list of allowed values and add or remove values to or from the same list. The mutable allowed values can
        be updated for both user defined and System defined attributes. The immutable allowed values cannot be updated
        or deleted. The updated list of allowed values cannot be empty. If an allowed value that is already used by some
        resource's attribute is deleted, then the association between the resource and the attribute value will also be
        deleted. * cardinality The cardinality can be updated for user defined attributes only. Cardinality can only be
        increased during an update. The update_mask should be used to specify the fields being updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            attributes_id: Resource name segment (attributesId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_attributes_patch(
                projects_id, locations_id, attributes_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    def apihub_projects_locations_collect_api_data(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1CollectApiDataRequest | GoogleCloudApihubV1CollectApiDataRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Collect API data from a source and push it to Hub's collect layer.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_collect_api_data(
                projects_id, locations_id, body, request_options=request_options
            ),
        )

    def apihub_projects_locations_curations_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1Curation | GoogleCloudApihubV1CurationDict,
        *,
        curation_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Curation:
        """Create a curation resource in the API hub. Once a curation resource is created, plugin instances can start
        using it.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            curation_id: Optional. The ID to use for the curation resource, which will become the final component of the
                curations's resource name. This field is optional. * If provided, the same will be used. The service
                will throw an error if the specified ID is already used by another curation resource in the API hub. *
                If not provided, a system generated ID will be used. This value should be 4-500 characters, and valid
                characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_curations_create(
                projects_id, locations_id, body, curation_id=curation_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_curations_delete(
        self,
        projects_id: str,
        locations_id: str,
        curations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Delete a curation resource in the API hub. A curation can only be deleted if it's not being used by any
        plugin instance.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            curations_id: Resource name segment (curationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_curations_delete(
                projects_id, locations_id, curations_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_curations_get(
        self,
        projects_id: str,
        locations_id: str,
        curations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Curation:
        """Get curation resource details.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            curations_id: Resource name segment (curationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_curations_get(
                projects_id, locations_id, curations_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_curations_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListCurationsResponse:
        r"""List curation resources in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of curation resources. A filter expression consists
                of a field name, a comparison operator, and a value for filtering. The value must be a string. The
                comparison operator must be one of: ``<``, ``>``, ``:`` or ``=``. Filters are case insensitive. The
                following fields in the ``curation resource`` are eligible for filtering: * ``create_time`` - The time
                at which the curation was created. The value should be in the
                (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: ``>`` and ``<``. *
                ``display_name`` - The display name of the curation. Allowed comparison operators: ``=``. * ``state`` -
                The state of the curation. Allowed comparison operators: ``=``. Expressions are combined with either
                ``AND`` logic operator or ``OR`` logical operator but not both of them together i.e. only one of the
                ``AND`` or ``OR`` operator can be used throughout the filter string and both the operators cannot be
                used together. No other logical operators are supported. At most three filter fields are allowed in the
                filter string and if provided more than that then ``INVALID_ARGUMENT`` error is returned by the API.
                Here are a few examples: * ``create_time < \"2021-08-15T14:50:00Z\" AND create_time >
                \"2021-08-10T12:00:00Z\"`` - The curation resource was created before _2021-08-15 14:50:00 UTC_ and
                after _2021-08-10 12:00:00 UTC_.
            page_size: Optional. The maximum number of curation resources to return. The service may return fewer than
                this value. If unspecified, at most 50 curations will be returned. The maximum value is 1000; values
                above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListCurations`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to
                ``ListCurations`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_curations_list(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_curations_patch(
        self,
        projects_id: str,
        locations_id: str,
        curations_id: str,
        body: GoogleCloudApihubV1Curation | GoogleCloudApihubV1CurationDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Curation:
        """Update a curation resource in the API hub. The following fields in the curation can be updated: *
        display_name * description The update_mask should be used to specify the fields being updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            curations_id: Resource name segment (curationsId).
            body: The request body.
            update_mask: Optional. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_curations_patch(
                projects_id, locations_id, curations_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    def apihub_projects_locations_dependencies_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1Dependency | GoogleCloudApihubV1DependencyDict,
        *,
        dependency_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Dependency:
        """Create a dependency between two entities in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            dependency_id: Optional. The ID to use for the dependency resource, which will become the final component of
                the dependency's resource name. This field is optional. * If provided, the same will be used. The
                service will throw an error if duplicate id is provided by the client. * If not provided, a system
                generated id will be used. This value should be 4-500 characters, and valid characters are
                ``a-z[0-9]-_``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_dependencies_create(
                projects_id, locations_id, body, dependency_id=dependency_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_dependencies_delete(
        self,
        projects_id: str,
        locations_id: str,
        dependencies_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Delete the dependency resource.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            dependencies_id: Resource name segment (dependenciesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_dependencies_delete(
                projects_id, locations_id, dependencies_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_dependencies_get(
        self,
        projects_id: str,
        locations_id: str,
        dependencies_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Dependency:
        """Get details about a dependency resource in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            dependencies_id: Resource name segment (dependenciesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_dependencies_get(
                projects_id, locations_id, dependencies_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_dependencies_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListDependenciesResponse:
        r"""List dependencies based on the provided filter and pagination parameters.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of Dependencies. A filter expression consists of a
                field name, a comparison operator, and a value for filtering. The value must be a string. Allowed
                comparison operator is ``=``. Filters are not case sensitive. The following fields in the ``Dependency``
                are eligible for filtering: * ``consumer.operation_resource_name`` - The operation resource name for the
                consumer entity involved in a dependency. Allowed comparison operators: ``=``. *
                ``consumer.external_api_resource_name`` - The external api resource name for the consumer entity
                involved in a dependency. Allowed comparison operators: ``=``. * ``supplier.operation_resource_name`` -
                The operation resource name for the supplier entity involved in a dependency. Allowed comparison
                operators: ``=``. * ``supplier.external_api_resource_name`` - The external api resource name for the
                supplier entity involved in a dependency. Allowed comparison operators: ``=``. Expressions are combined
                with either ``AND`` logic operator or ``OR`` logical operator but not both of them together i.e. only
                one of the ``AND`` or ``OR`` operator can be used throughout the filter string and both the operators
                cannot be used together. No other logical operators are supported. At most three filter fields are
                allowed in the filter string and if provided more than that then ``INVALID_ARGUMENT`` error is returned
                by the API. For example, ``consumer.operation_resource_name =
                \"projects/p1/locations/global/apis/a1/versions/v1/operations/o1\" OR supplier.operation_resource_name =
                \"projects/p1/locations/global/apis/a1/versions/v1/operations/o1\"`` - The dependencies with either
                consumer or supplier operation resource name as
                _projects/p1/locations/global/apis/a1/versions/v1/operations/o1_.
            page_size: Optional. The maximum number of dependency resources to return. The service may return fewer than
                this value. If unspecified, at most 50 dependencies will be returned. The maximum value is 1000; values
                above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListDependencies`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListDependencies``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_dependencies_list(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_dependencies_patch(
        self,
        projects_id: str,
        locations_id: str,
        dependencies_id: str,
        body: GoogleCloudApihubV1Dependency | GoogleCloudApihubV1DependencyDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Dependency:
        """Update a dependency based on the update_mask provided in the request. The following fields in the dependency
        can be updated: * description

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            dependencies_id: Resource name segment (dependenciesId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_dependencies_patch(
                projects_id,
                locations_id,
                dependencies_id,
                body,
                update_mask=update_mask,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_deployments_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1Deployment | GoogleCloudApihubV1DeploymentDict,
        *,
        deployment_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Deployment:
        """Create a deployment resource in the API hub. Once a deployment resource is created, it can be associated with
        API versions.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            deployment_id: Optional. The ID to use for the deployment resource, which will become the final component of
                the deployment's resource name. This field is optional. * If provided, the same will be used. The
                service will throw an error if the specified id is already used by another deployment resource in the
                API hub. * If not provided, a system generated id will be used. This value should be 4-500 characters,
                and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_deployments_create(
                projects_id, locations_id, body, deployment_id=deployment_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_deployments_delete(
        self,
        projects_id: str,
        locations_id: str,
        deployments_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Deletes a deployment resource in the API hub. A deployment can only be deleted after its links to any
        versions, specs, and API operations have been removed.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            deployments_id: Resource name segment (deploymentsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_deployments_delete(
                projects_id, locations_id, deployments_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_deployments_get(
        self,
        projects_id: str,
        locations_id: str,
        deployments_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Deployment:
        """Get details about a deployment and the API versions linked to it.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            deployments_id: Resource name segment (deploymentsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_deployments_get(
                projects_id, locations_id, deployments_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_deployments_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListDeploymentsResponse:
        r"""List deployment resources in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of Deployments. A filter expression consists of a
                field name, a comparison operator, and a value for filtering. The value must be a string. The comparison
                operator must be one of: ``<``, ``>`` or ``=``. Filters are not case sensitive. The following fields in
                the ``Deployments`` are eligible for filtering: * ``display_name`` - The display name of the Deployment.
                Allowed comparison operators: ``=``. * ``create_time`` - The time at which the Deployment was created.
                The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison
                operators: ``>`` and ``<``. * ``resource_uri`` - A URI to the deployment resource. Allowed comparison
                operators: ``=``. * ``api_versions`` - The API versions linked to this deployment. Allowed comparison
                operators: ``:``. * ``source_project`` - The project/organization at source for the deployment. Allowed
                comparison operators: ``=``. * ``source_environment`` - The environment at source for the deployment.
                Allowed comparison operators: ``=``. * ``deployment_type.enum_values.values.id`` - The allowed value id
                of the deployment_type attribute associated with the Deployment. Allowed comparison operators: ``:``. *
                ``deployment_type.enum_values.values.display_name`` - The allowed value display name of the
                deployment_type attribute associated with the Deployment. Allowed comparison operators: ``:``. *
                ``slo.string_values.values`` -The allowed string value of the slo attribute associated with the
                deployment. Allowed comparison operators: ``:``. * ``environment.enum_values.values.id`` - The allowed
                value id of the environment attribute associated with the deployment. Allowed comparison operators:
                ``:``. * ``environment.enum_values.values.display_name`` - The allowed value display name of the
                environment attribute associated with the deployment. Allowed comparison operators: ``:``. *
                ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.id`` - The allowed value id of the user defined
                enum attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.display_name`` - The allowed value display name
                of the user defined enum attribute associated with the Resource. Allowed comparison operator is ``:``.
                Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user
                defined enum attribute enum name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.string_values.values`` - The allowed value of the user defined
                string attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-string is a placeholder that can be replaced with any user defined string
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.json_values.values`` - The allowed value of the user defined JSON
                attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute
                name. A filter function is also supported in the filter string. The filter function is ``id(name)``. The
                ``id(name)`` function returns the id of the resource name. For example, ``id(name) = \"deployment-1\"``
                is equivalent to ``name =
                \"projects/test-project-id/locations/test-location-id/deployments/deployment-1\"`` provided the parent
                is ``projects/test-project-id/locations/test-location-id``. Expressions are combined with either ``AND``
                logic operator or ``OR`` logical operator but not both of them together i.e. only one of the ``AND`` or
                ``OR`` operator can be used throughout the filter string and both the operators cannot be used together.
                No other logical operators are supported. At most three filter fields are allowed in the filter string
                and if provided more than that then ``INVALID_ARGUMENT`` error is returned by the API. Here are a few
                examples: * ``environment.enum_values.values.id: staging-id`` - The allowed value id of the environment
                attribute associated with the Deployment is _staging-id_. *
                ``environment.enum_values.values.display_name: \"Staging Deployment\"`` - The allowed value display name
                of the environment attribute associated with the Deployment is ``Staging Deployment``. *
                ``environment.enum_values.values.id: production-id AND create_time < \"2021-08-15T14:50:00Z\" AND
                create_time > \"2021-08-10T12:00:00Z\"`` - The allowed value id of the environment attribute associated
                with the Deployment is _production-id_ and Deployment was created before _2021-08-15 14:50:00 UTC_ and
                after _2021-08-10 12:00:00 UTC_. * ``environment.enum_values.values.id: production-id OR
                slo.string_values.values: \"99.99%\"`` - The allowed value id of the environment attribute Deployment is
                _production-id_ or string value of the slo attribute is _99.99%_. * ``environment.enum_values.values.id:
                staging-id AND attributes.projects/test-project-id/locations/test-location-id/
                attributes/17650f90-4a29-4971-b3c0-d5532da3764b.string_values.values: test`` - The filter string
                specifies that the allowed value id of the environment attribute associated with the Deployment is
                _staging-id_ and the value of the user defined attribute of type string is _test_.
            page_size: Optional. The maximum number of deployment resources to return. The service may return fewer than
                this value. If unspecified, at most 50 deployments will be returned. The maximum value is 1000; values
                above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListDeployments`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to
                ``ListDeployments`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_deployments_list(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_deployments_patch(
        self,
        projects_id: str,
        locations_id: str,
        deployments_id: str,
        body: GoogleCloudApihubV1Deployment | GoogleCloudApihubV1DeploymentDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Deployment:
        """Update a deployment resource in the API hub. The following fields in the deployment resource can be updated:
        * display_name * description * documentation * deployment_type * resource_uri * endpoints * slo * environment *
        attributes * source_project * source_environment * management_url * source_uri The update_mask should be used to
        specify the fields being updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            deployments_id: Resource name segment (deploymentsId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_deployments_patch(
                projects_id,
                locations_id,
                deployments_id,
                body,
                update_mask=update_mask,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_discovered_api_observations_discovered_api_operations_get(
        self,
        projects_id: str,
        locations_id: str,
        discovered_api_observations_id: str,
        discovered_api_operations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1DiscoveredApiOperation:
        """Gets a DiscoveredAPIOperation in a given project, location, ApiObservation and ApiOperation.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            discovered_api_observations_id: Resource name segment (discoveredApiObservationsId).
            discovered_api_operations_id: Resource name segment (discoveredApiOperationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_discovered_api_observations_discovered_api_operations_get(
                projects_id,
                locations_id,
                discovered_api_observations_id,
                discovered_api_operations_id,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_discovered_api_observations_discovered_api_operations_list(
        self,
        projects_id: str,
        locations_id: str,
        discovered_api_observations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListDiscoveredApiOperationsResponse:
        """Lists all the DiscoveredAPIOperations in a given project, location and ApiObservation.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            discovered_api_observations_id: Resource name segment (discoveredApiObservationsId).
            page_size: Optional. DiscoveredApiOperations will be returned. The maximum value is 1000; values above 1000
                will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListDiscoveredApiApiOperations`` call.
                Provide this to retrieve the subsequent page. When paginating, all other parameters provided to
                ``ListDiscoveredApiApiOperations`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_discovered_api_observations_discovered_api_operations_list(
                projects_id,
                locations_id,
                discovered_api_observations_id,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_discovered_api_observations_get(
        self,
        projects_id: str,
        locations_id: str,
        discovered_api_observations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1DiscoveredApiObservation:
        """Gets a DiscoveredAPIObservation in a given project, location and ApiObservation.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            discovered_api_observations_id: Resource name segment (discoveredApiObservationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_discovered_api_observations_get(
                projects_id, locations_id, discovered_api_observations_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_discovered_api_observations_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListDiscoveredApiObservationsResponse:
        """Lists all the DiscoveredAPIObservations in a given project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            page_size: Optional. The maximum number of ApiObservations to return. The service may return fewer than this
                value. If unspecified, at most 10 ApiObservations will be returned. The maximum value is 1000; values
                above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListApiObservations`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListApiObservations``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_discovered_api_observations_list(
                projects_id, locations_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    def apihub_projects_locations_external_apis_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1ExternalApi | GoogleCloudApihubV1ExternalApiDict,
        *,
        external_api_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ExternalApi:
        """Create an External API resource in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            external_api_id: Optional. The ID to use for the External API resource, which will become the final
                component of the External API's resource name. This field is optional. * If provided, the same will be
                used. The service will throw an error if the specified id is already used by another External API
                resource in the API hub. * If not provided, a system generated id will be used. This value should be
                4-500 characters, and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_external_apis_create(
                projects_id, locations_id, body, external_api_id=external_api_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_external_apis_delete(
        self,
        projects_id: str,
        locations_id: str,
        external_apis_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Delete an External API resource in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            external_apis_id: Resource name segment (externalApisId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_external_apis_delete(
                projects_id, locations_id, external_apis_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_external_apis_get(
        self,
        projects_id: str,
        locations_id: str,
        external_apis_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ExternalApi:
        """Get details about an External API resource in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            external_apis_id: Resource name segment (externalApisId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_external_apis_get(
                projects_id, locations_id, external_apis_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_external_apis_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListExternalApisResponse:
        """List External API resources in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            page_size: Optional. The maximum number of External API resources to return. The service may return fewer
                than this value. If unspecified, at most 50 ExternalApis will be returned. The maximum value is 1000;
                values above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListExternalApis`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to
                ``ListExternalApis`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_external_apis_list(
                projects_id, locations_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    def apihub_projects_locations_external_apis_patch(
        self,
        projects_id: str,
        locations_id: str,
        external_apis_id: str,
        body: GoogleCloudApihubV1ExternalApi | GoogleCloudApihubV1ExternalApiDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ExternalApi:
        """Update an External API resource in the API hub. The following fields can be updated: * display_name *
        description * documentation * endpoints * paths The update_mask should be used to specify the fields being
        updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            external_apis_id: Resource name segment (externalApisId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_external_apis_patch(
                projects_id,
                locations_id,
                external_apis_id,
                body,
                update_mask=update_mask,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_generated_spec_apis_generate_spec(
        self,
        projects_id: str,
        locations_id: str,
        generated_spec_apis_id: str,
        body: GoogleCloudApihubV1GenerateSpecRequest | GoogleCloudApihubV1GenerateSpecRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1GenerateSpecResponse:
        """Merges the per-day stored specs across the requested window and returns the merged OpenAPI document. Preview:
        this method is in Public Preview. Behavior and the API surface may change until the Spec Generation feature
        reaches General Availability.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            generated_spec_apis_id: Resource name segment (generatedSpecApisId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_generated_spec_apis_generate_spec(
                projects_id, locations_id, generated_spec_apis_id, body, request_options=request_options
            ),
        )

    def apihub_projects_locations_generated_spec_apis_get(
        self,
        projects_id: str,
        locations_id: str,
        generated_spec_apis_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1GeneratedSpecApi:
        """Gets a single GeneratedSpecApi by resource name. Preview: this method is in Public Preview. Behavior and the
        API surface may change until the Spec Generation feature reaches General Availability.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            generated_spec_apis_id: Resource name segment (generatedSpecApisId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_generated_spec_apis_get(
                projects_id, locations_id, generated_spec_apis_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_generated_spec_apis_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListGeneratedSpecApisResponse:
        """Lists the APIs the pipeline is tracking, ordered by ``update_time desc``. Preview: this method is in Public
        Preview. Behavior and the API surface may change until the Spec Generation feature reaches General Availability.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An AIP-160 filter. This release supports the fields ``state`` and ``source.source_type``,
                the ``=`` comparison operator only, and ``AND`` conjunction only. Examples: - ``state =
                "SPEC_GENERATED"`` - ``state = "SPEC_ASSOCIATED" AND source.source_type = APIGEE_X``
            page_size: Optional. The maximum number of results to return. The service may return fewer. If unspecified,
                at most 50 will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListGeneratedSpecApis`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters (except ``page_size``) provided to
                ``ListGeneratedSpecApis`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_generated_spec_apis_list(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_get(
        self, projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GoogleCloudLocationLocation:
        """Gets information about a location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_get(
                projects_id, locations_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_host_project_registrations_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1HostProjectRegistration | GoogleCloudApihubV1HostProjectRegistrationDict,
        *,
        host_project_registration_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1HostProjectRegistration:
        """Create a host project registration. A Google cloud project can be registered as a host project if it is not
        attached as a runtime project to another host project. A project can have only one host project registration at
        a time. Subsequent register calls for the same project will fail until the existing registration is deleted.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            host_project_registration_id: Required. The ID to use for the Host Project Registration, which will become
                the final component of the host project registration's resource name. The ID must be the same as the
                Google cloud project specified in the host_project_registration.gcp_project field.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_host_project_registrations_create(
                projects_id,
                locations_id,
                body,
                host_project_registration_id=host_project_registration_id,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_host_project_registrations_get(
        self,
        projects_id: str,
        locations_id: str,
        host_project_registrations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1HostProjectRegistration:
        """Get a host project registration.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            host_project_registrations_id: Resource name segment (hostProjectRegistrationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_host_project_registrations_get(
                projects_id, locations_id, host_project_registrations_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_host_project_registrations_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListHostProjectRegistrationsResponse:
        """Lists host project registrations.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of HostProjectRegistrations. A filter expression
                consists of a field name, a comparison operator, and a value for filtering. The value must be a string.
                All standard operators as documented at https://google.aip.dev/160 are supported. The following fields
                in the ``HostProjectRegistration`` are eligible for filtering: * ``name`` - The name of the
                HostProjectRegistration. * ``create_time`` - The time at which the HostProjectRegistration was created.
                The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. * ``gcp_project`` -
                The Google cloud project associated with the HostProjectRegistration.
            order_by: Optional. Hint for how to order the results.
            page_size: Optional. The maximum number of host project registrations to return. The service may return
                fewer than this value. If unspecified, at most 50 host project registrations will be returned. The
                maximum value is 1000; values above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListHostProjectRegistrations`` call. Provide
                this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided
                to ``ListHostProjectRegistrations`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_host_project_registrations_list(
                projects_id,
                locations_id,
                filter_=filter_,
                order_by=order_by,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_list(
        self,
        projects_id: str,
        *,
        extra_location_types: list[str] | None = None,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudLocationListLocationsResponse:
        """Lists information about the supported locations for this service. This method lists locations based on the
        resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If ``name`` is empty,
        the method lists the public locations available to all projects. * **Project-specific locations**: If ``name``
        follows the format ``projects/{project}``, the method lists locations visible to that specific project. This
        includes public, private, or other project-specific locations enabled for the project. For gRPC and client
        library implementations, the resource name is passed as the ``name`` field. For direct service calls, the
        resource name is incorporated into the request path based on the specific service implementation and version.

        Args:
            projects_id: Resource name segment (projectsId).
            extra_location_types: Optional. Do not use this field unless explicitly documented otherwise. This is
                primarily for internal usage.
            filter_: A filter to narrow down results to a preferred subset. The filtering language accepts strings like
                ``"displayName=tokyo"``, and is documented in more detail in `AIP-160 <https://google.aip.dev/160>`__.
            page_size: The maximum number of results to return. If not set, the service selects a default.
            page_token: A page token received from the ``next_page_token`` field in the response. Send that page token
                to receive the subsequent page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_list(
                projects_id,
                extra_location_types=extra_location_types,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_lookup_runtime_project_attachment(
        self, projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse:
        """Look up a runtime project attachment. This API can be called in the context of any project.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_lookup_runtime_project_attachment(
                projects_id, locations_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_operations_cancel(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the
        operation, but success is not guaranteed. If the server doesn't support this method, it returns
        ``google.rpc.Code.UNIMPLEMENTED``. Clients can use Operations.GetOperation or other methods to check whether the
        cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the
        operation is not deleted; instead, it becomes an operation with an Operation.error value with a
        google.rpc.Status.code of ``1``, corresponding to ``Code.CANCELLED``.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_operations_cancel(
                projects_id, locations_id, operations_id, body, request_options=request_options
            ),
        )

    def apihub_projects_locations_operations_delete(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Deletes a long-running operation. This method indicates that the client is no longer interested in the
        operation result. It does not cancel the operation. If the server doesn't support this method, it returns
        ``google.rpc.Code.UNIMPLEMENTED``.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_operations_delete(
                projects_id, locations_id, operations_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_operations_get(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Gets the latest state of a long-running operation. Clients can use this method to poll the operation result
        at intervals as recommended by the API service.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_operations_get(
                projects_id, locations_id, operations_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_operations_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        return_partial_success: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningListOperationsResponse:
        """Lists operations that match the specified filter in the request. If the server doesn't support this method,
        it returns ``UNIMPLEMENTED``.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: The standard list filter.
            page_size: The standard list page size.
            page_token: The standard list page token.
            return_partial_success: When set to ``true``, operations that are reachable are returned as normal, and
                those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only
                be ``true`` when reading across collections. For example, when ``parent`` is set to
                ``"projects/example/locations/-"``. This field is not supported by default and will result in an
                ``UNIMPLEMENTED`` error if set unless explicitly documented otherwise in service or product specific
                documentation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_operations_list(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                return_partial_success=return_partial_success,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_plugins_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1Plugin | GoogleCloudApihubV1PluginDict,
        *,
        plugin_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Plugin:
        """Create an API Hub plugin resource in the API hub. Once a plugin is created, it can be used to create plugin
        instances.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            plugin_id: Optional. The ID to use for the Plugin resource, which will become the final component of the
                Plugin's resource name. This field is optional. * If provided, the same will be used. The service will
                throw an error if the specified id is already used by another Plugin resource in the API hub instance. *
                If not provided, a system generated id will be used. This value should be 4-63 characters, overall
                resource name which will be of format ``projects/{project}/locations/{location}/plugins/{plugin}``, its
                length is limited to 1000 characters and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_plugins_create(
                projects_id, locations_id, body, plugin_id=plugin_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_plugins_delete(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Delete a Plugin in API hub. Note, only user owned plugins can be deleted via this method.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_plugins_delete(
                projects_id, locations_id, plugins_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_plugins_disable(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Plugin:
        """Disables a plugin. The ``state`` of the plugin after disabling is ``DISABLED``

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_plugins_disable(
                projects_id, locations_id, plugins_id, body, request_options=request_options
            ),
        )

    def apihub_projects_locations_plugins_enable(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Plugin:
        """Enables a plugin. The ``state`` of the plugin after enabling is ``ENABLED``

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_plugins_enable(
                projects_id, locations_id, plugins_id, body, request_options=request_options
            ),
        )

    def apihub_projects_locations_plugins_get(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Plugin:
        """Get an API Hub plugin.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_plugins_get(
                projects_id, locations_id, plugins_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_plugins_get_style_guide(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1StyleGuide:
        """Get the style guide being used for linting.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_plugins_get_style_guide(
                projects_id, locations_id, plugins_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_plugins_instances_create(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        body: GoogleCloudApihubV1PluginInstance | GoogleCloudApihubV1PluginInstanceDict,
        *,
        plugin_instance_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Creates a Plugin instance in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            body: The request body.
            plugin_instance_id: Optional. The ID to use for the plugin instance, which will become the final component
                of the plugin instance's resource name. This field is optional. * If provided, the same will be used.
                The service will throw an error if the specified id is already used by another plugin instance in the
                plugin resource. * If not provided, a system generated id will be used. This value should be 4-63
                characters, and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_plugins_instances_create(
                projects_id,
                locations_id,
                plugins_id,
                body,
                plugin_instance_id=plugin_instance_id,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_plugins_instances_delete(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Deletes a plugin instance in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_plugins_instances_delete(
                projects_id, locations_id, plugins_id, instances_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_plugins_instances_disable_action(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        body: (
            GoogleCloudApihubV1DisablePluginInstanceActionRequest
            | GoogleCloudApihubV1DisablePluginInstanceActionRequestDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Disables a plugin instance in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_plugins_instances_disable_action(
                projects_id, locations_id, plugins_id, instances_id, body, request_options=request_options
            ),
        )

    def apihub_projects_locations_plugins_instances_enable_action(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        body: (
            GoogleCloudApihubV1EnablePluginInstanceActionRequest
            | GoogleCloudApihubV1EnablePluginInstanceActionRequestDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Enables a plugin instance in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_plugins_instances_enable_action(
                projects_id, locations_id, plugins_id, instances_id, body, request_options=request_options
            ),
        )

    def apihub_projects_locations_plugins_instances_execute_action(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        body: (
            GoogleCloudApihubV1ExecutePluginInstanceActionRequest
            | GoogleCloudApihubV1ExecutePluginInstanceActionRequestDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Executes a plugin instance in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_plugins_instances_execute_action(
                projects_id, locations_id, plugins_id, instances_id, body, request_options=request_options
            ),
        )

    def apihub_projects_locations_plugins_instances_get(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1PluginInstance:
        """Get an API Hub plugin instance.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_plugins_instances_get(
                projects_id, locations_id, plugins_id, instances_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_plugins_instances_list(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListPluginInstancesResponse:
        r"""List all the plugins in a given project and location. ``-`` can be used as wildcard value for {plugin_id}

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            filter_: Optional. An expression that filters the list of plugin instances. A filter expression consists of
                a field name, a comparison operator, and a value for filtering. The value must be a string. The
                comparison operator must be one of: ``<``, ``>`` or ``=``. Filters are not case sensitive. The following
                fields in the ``PluginInstances`` are eligible for filtering: * ``state`` - The state of the Plugin
                Instance. Allowed comparison operators: ``=``. * ``source_project_id`` - The source project id of the
                Plugin Instance. Allowed comparison operators: ``=``. A filter function is also supported in the filter
                string. The filter function is ``id(name)``. The ``id(name)`` function returns the id of the resource
                name. For example, ``id(name) = \"plugin-instance-1\"`` is equivalent to ``name =
                \"projects/test-project-id/locations/test-location-id/plugins/plugin-1/instances/plugin-instance-1\"``
                provided the parent is ``projects/test-project-id/locations/test-location-id/plugins/plugin-1``.
                Expressions are combined with either ``AND`` logic operator or ``OR`` logical operator but not both of
                them together i.e. only one of the ``AND`` or ``OR`` operator can be used throughout the filter string
                and both the operators cannot be used together. No other logical operators are supported. At most three
                filter fields are allowed in the filter string and if provided more than that then ``INVALID_ARGUMENT``
                error is returned by the API. Here are a few examples: * ``state = ENABLED`` - The plugin instance is in
                enabled state.
            page_size: Optional. The maximum number of hub plugins to return. The service may return fewer than this
                value. If unspecified, at most 50 hub plugins will be returned. The maximum value is 1000; values above
                1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListPluginInstances`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListPluginInstances``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_plugins_instances_list(
                projects_id,
                locations_id,
                plugins_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_plugins_instances_manage_source_data(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        body: (
            GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest
            | GoogleCloudApihubV1ManagePluginInstanceSourceDataRequestDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Manages data for a given plugin instance.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_plugins_instances_manage_source_data(
                projects_id, locations_id, plugins_id, instances_id, body, request_options=request_options
            ),
        )

    def apihub_projects_locations_plugins_instances_patch(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        body: GoogleCloudApihubV1PluginInstance | GoogleCloudApihubV1PluginInstanceDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1PluginInstance:
        """Updates a plugin instance in the API hub. The following fields in the plugin_instance can be updated
        currently: * display_name * schedule_cron_expression The update_mask should be used to specify the fields being
        updated. To update the auth_config and additional_config of the plugin instance, use the
        ApplyPluginInstanceConfig method.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            body: The request body.
            update_mask: Optional. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_plugins_instances_patch(
                projects_id,
                locations_id,
                plugins_id,
                instances_id,
                body,
                update_mask=update_mask,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_plugins_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListPluginsResponse:
        """List all the plugins in a given project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of plugins. A filter expression consists of a field
                name, a comparison operator, and a value for filtering. The value must be a string. The comparison
                operator must be one of: ``<``, ``>`` or ``=``. Filters are not case sensitive. The following fields in
                the ``Plugins`` are eligible for filtering: * ``plugin_category`` - The category of the Plugin. Allowed
                comparison operators: ``=``. Expressions are combined with either ``AND`` logic operator or ``OR``
                logical operator but not both of them together i.e. only one of the ``AND`` or ``OR`` operator can be
                used throughout the filter string and both the operators cannot be used together. No other logical
                operators are supported. At most three filter fields are allowed in the filter string and if provided
                more than that then ``INVALID_ARGUMENT`` error is returned by the API. Here are a few examples: *
                ``plugin_category = ON_RAMP`` - The plugin is of category on ramp.
            page_size: Optional. The maximum number of hub plugins to return. The service may return fewer than this
                value. If unspecified, at most 50 hub plugins will be returned. The maximum value is 1000; values above
                1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListPlugins`` call. Provide this to retrieve
                the subsequent page. When paginating, all other parameters (except page_size) provided to
                ``ListPlugins`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_plugins_list(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_plugins_style_guide_get_contents(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1StyleGuideContents:
        """Get the contents of the style guide.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_plugins_style_guide_get_contents(
                projects_id, locations_id, plugins_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_plugins_update_style_guide(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        body: GoogleCloudApihubV1StyleGuide | GoogleCloudApihubV1StyleGuideDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1StyleGuide:
        """Update the styleGuide to be used for liniting in by API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            body: The request body.
            update_mask: Optional. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_plugins_update_style_guide(
                projects_id, locations_id, plugins_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    def apihub_projects_locations_retrieve_api_views(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        view: ViewApigeeProjectsApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1RetrieveApiViewsResponse:
        """Retrieve API views.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. The filter expression.
            page_size: Optional. The maximum number of results to return. Default to 100.
            page_token: Optional. A page token, received from a previous ``RetrieveApiViews`` call. Provide this to
                retrieve the subsequent page.
            view: Required. The view type to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_retrieve_api_views(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                view=view,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_runtime_project_attachments_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1RuntimeProjectAttachment | GoogleCloudApihubV1RuntimeProjectAttachmentDict,
        *,
        runtime_project_attachment_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1RuntimeProjectAttachment:
        """Attaches a runtime project to the host project.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            runtime_project_attachment_id: Required. The ID to use for the Runtime Project Attachment, which will become
                the final component of the Runtime Project Attachment's name. The ID must be the same as the project ID
                of the Google cloud project specified in the runtime_project_attachment.runtime_project field.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_runtime_project_attachments_create(
                projects_id,
                locations_id,
                body,
                runtime_project_attachment_id=runtime_project_attachment_id,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_runtime_project_attachments_delete(
        self,
        projects_id: str,
        locations_id: str,
        runtime_project_attachments_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Delete a runtime project attachment in the API Hub. This call will detach the runtime project from the host
        project.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            runtime_project_attachments_id: Resource name segment (runtimeProjectAttachmentsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_runtime_project_attachments_delete(
                projects_id, locations_id, runtime_project_attachments_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_runtime_project_attachments_get(
        self,
        projects_id: str,
        locations_id: str,
        runtime_project_attachments_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1RuntimeProjectAttachment:
        """Gets a runtime project attachment.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            runtime_project_attachments_id: Resource name segment (runtimeProjectAttachmentsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_runtime_project_attachments_get(
                projects_id, locations_id, runtime_project_attachments_id, request_options=request_options
            ),
        )

    def apihub_projects_locations_runtime_project_attachments_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse:
        """List runtime projects attached to the host project.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of RuntimeProjectAttachments. A filter expression
                consists of a field name, a comparison operator, and a value for filtering. The value must be a string.
                All standard operators as documented at https://google.aip.dev/160 are supported. The following fields
                in the ``RuntimeProjectAttachment`` are eligible for filtering: * ``name`` - The name of the
                RuntimeProjectAttachment. * ``create_time`` - The time at which the RuntimeProjectAttachment was
                created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. *
                ``runtime_project`` - The Google cloud project associated with the RuntimeProjectAttachment.
            order_by: Optional. Hint for how to order the results.
            page_size: Optional. The maximum number of runtime project attachments to return. The service may return
                fewer than this value. If unspecified, at most 50 runtime project attachments will be returned. The
                maximum value is 1000; values above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListRuntimeProjectAttachments`` call. Provide
                this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided
                to ``ListRuntimeProjectAttachments`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_runtime_project_attachments_list(
                projects_id,
                locations_id,
                filter_=filter_,
                order_by=order_by,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def apihub_projects_locations_search_resources(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1SearchResourcesRequest | GoogleCloudApihubV1SearchResourcesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1SearchResourcesResponse:
        """Search across API-Hub resources.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_search_resources(
                projects_id, locations_id, body, request_options=request_options
            ),
        )

    def apihub_projects_locations_servers_configure_and_deploy_server(
        self,
        projects_id: str,
        locations_id: str,
        body: (
            GoogleCloudApihubV1ConfigureAndDeployServerRequest | GoogleCloudApihubV1ConfigureAndDeployServerRequestDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Configures and deploys a given server config for given target. Currently this API supports only deploying MCP
        server in Apigee X. For mcp server deployment in apigee X, if there is already a mcp proxy deployed, then this
        method will try to overwrite it by creating new revision i.e. all existing tools will be removed and new set of
        tools will be deployed.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.apihub_projects_locations_servers_configure_and_deploy_server(
                projects_id, locations_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ProjectsWithRawResponse:
        return self._with_raw_response


class AsyncProjects:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProjectsWithRawResponse(client, server, auth)

    async def apigee_projects_provision_organization(
        self,
        projects_id: str,
        body: GoogleCloudApigeeV1ProvisionOrganizationRequest | GoogleCloudApigeeV1ProvisionOrganizationRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Provisions a new Apigee organization with a functioning runtime. This is the standard way to create trial
        organizations for a free Apigee trial.

        Args:
            projects_id: Resource name segment (projectsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apigee_projects_provision_organization(
                projects_id, body, request_options=request_options
            ),
        )

    async def apihub_projects_locations_addons_get(
        self,
        projects_id: str,
        locations_id: str,
        addons_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Addon:
        """Get an addon.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            addons_id: Resource name segment (addonsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_addons_get(
                projects_id, locations_id, addons_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_addons_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListAddonsResponse:
        """List addons.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of addons. The only supported filter is
                ``plugin_instance_name``. It can be used to filter addons that are enabled for a given plugin instance.
                The format of the filter is ``plugin_instance_name =
                "projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}"``.
            page_size: Optional. The maximum number of hub addons to return. The service may return fewer than this
                value. If unspecified, at most 50 hub addons will be returned. The maximum value is 1000; values above
                1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListAddons`` call. Provide this to retrieve
                the subsequent page. When paginating, all other parameters (except page_size) provided to ``ListAddons``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_addons_list(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_addons_manage_config(
        self,
        projects_id: str,
        locations_id: str,
        addons_id: str,
        body: GoogleCloudApihubV1ManageAddonConfigRequest | GoogleCloudApihubV1ManageAddonConfigRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Manage addon config. This RPC is used for managing the config of the addon. Calling this RPC moves the addon
        into an updating state until the long-running operation succeeds.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            addons_id: Resource name segment (addonsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_addons_manage_config(
                projects_id, locations_id, addons_id, body, request_options=request_options
            ),
        )

    async def apihub_projects_locations_api_hub_instances_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1ApiHubInstance | GoogleCloudApihubV1ApiHubInstanceDict,
        *,
        api_hub_instance_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Provisions instance resources for the API Hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            api_hub_instance_id: Optional. Identifier to assign to the Api Hub instance. Must be unique within scope of
                the parent resource. If the field is not provided, system generated id will be used. This value should
                be 4-40 characters, and valid characters are ``/a-z[0-9]-_/``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_api_hub_instances_create(
                projects_id,
                locations_id,
                body,
                api_hub_instance_id=api_hub_instance_id,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_api_hub_instances_delete(
        self,
        projects_id: str,
        locations_id: str,
        api_hub_instances_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Deletes the API hub instance. Deleting the API hub instance will also result in the removal of all associated
        runtime project attachments and the host project registration.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            api_hub_instances_id: Resource name segment (apiHubInstancesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_api_hub_instances_delete(
                projects_id, locations_id, api_hub_instances_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_api_hub_instances_get(
        self,
        projects_id: str,
        locations_id: str,
        api_hub_instances_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ApiHubInstance:
        """Gets details of a single API Hub instance.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            api_hub_instances_id: Resource name segment (apiHubInstancesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_api_hub_instances_get(
                projects_id, locations_id, api_hub_instances_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_api_hub_instances_lookup(
        self, projects_id: str, locations_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GoogleCloudApihubV1LookupApiHubInstanceResponse:
        """Looks up an Api Hub instance in a given Google Cloud project. There will always be only one Api Hub instance
        for a Google Cloud project across all locations.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_api_hub_instances_lookup(
                projects_id, locations_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_api_hub_instances_patch(
        self,
        projects_id: str,
        locations_id: str,
        api_hub_instances_id: str,
        body: GoogleCloudApihubV1ApiHubInstance | GoogleCloudApihubV1ApiHubInstanceDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Update an Api Hub instance. The following fields in the ApiHubInstance can be updated: * disable_search *
        vertex_location * agent_registry_sync_config The update_mask should be used to specify the fields being updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            api_hub_instances_id: Resource name segment (apiHubInstancesId).
            body: The request body.
            update_mask: Optional. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_api_hub_instances_patch(
                projects_id,
                locations_id,
                api_hub_instances_id,
                body,
                update_mask=update_mask,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_apis_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1Api | GoogleCloudApihubV1ApiDict,
        *,
        api_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Api:
        """Create an API resource in the API hub. Once an API resource is created, versions can be added to it.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            api_id: Optional. The ID to use for the API resource, which will become the final component of the API's
                resource name. This field is optional. * If provided, the same will be used. The service will throw an
                error if the specified id is already used by another API resource in the API hub. * If not provided, a
                system generated id will be used. This value should be 4-500 characters, and valid characters are
                /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_apis_create(
                projects_id, locations_id, body, api_id=api_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_apis_delete(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        *,
        force: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Delete an API resource in the API hub. API can only be deleted if all underlying versions are deleted.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            force: Optional. If set to true, any versions from this API will also be deleted. Otherwise, the request
                will only work if the API has no versions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_apis_delete(
                projects_id, locations_id, apis_id, force=force, request_options=request_options
            ),
        )

    async def apihub_projects_locations_apis_get(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Api:
        """Get API resource details including the API versions contained in it.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_apis_get(
                projects_id, locations_id, apis_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_apis_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListApisResponse:
        r"""List API resources in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of ApiResources. A filter expression consists of a
                field name, a comparison operator, and a value for filtering. The value must be a string. The comparison
                operator must be one of: ``<``, ``>``, ``:`` or ``=``. Filters are not case sensitive. The following
                fields in the ``ApiResource`` are eligible for filtering: * ``owner.email`` - The email of the team
                which owns the ApiResource. Allowed comparison operators: ``=``. * ``create_time`` - The time at which
                the ApiResource was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339]
                format. Allowed comparison operators: ``>`` and ``<``. * ``display_name`` - The display name of the
                ApiResource. Allowed comparison operators: ``=``. * ``target_user.enum_values.values.id`` - The allowed
                value id of the target users attribute associated with the ApiResource. Allowed comparison operator is
                ``:``. * ``target_user.enum_values.values.display_name`` - The allowed value display name of the target
                users attribute associated with the ApiResource. Allowed comparison operator is ``:``. *
                ``team.enum_values.values.id`` - The allowed value id of the team attribute associated with the
                ApiResource. Allowed comparison operator is ``:``. * ``team.enum_values.values.display_name`` - The
                allowed value display name of the team attribute associated with the ApiResource. Allowed comparison
                operator is ``:``. * ``business_unit.enum_values.values.id`` - The allowed value id of the business unit
                attribute associated with the ApiResource. Allowed comparison operator is ``:``. *
                ``business_unit.enum_values.values.display_name`` - The allowed value display name of the business unit
                attribute associated with the ApiResource. Allowed comparison operator is ``:``. *
                ``maturity_level.enum_values.values.id`` - The allowed value id of the maturity level attribute
                associated with the ApiResource. Allowed comparison operator is ``:``. *
                ``maturity_level.enum_values.values.display_name`` - The allowed value display name of the maturity
                level attribute associated with the ApiResource. Allowed comparison operator is ``:``. *
                ``api_style.enum_values.values.id`` - The allowed value id of the api style attribute associated with
                the ApiResource. Allowed comparison operator is ``:``. * ``api_style.enum_values.values.display_name`` -
                The allowed value display name of the api style attribute associated with the ApiResource. Allowed
                comparison operator is ``:``. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.id`` - The allowed value id of the user defined
                enum attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.display_name`` - The allowed value display name
                of the user defined enum attribute associated with the Resource. Allowed comparison operator is ``:``.
                Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user
                defined enum attribute enum name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.string_values.values`` - The allowed value of the user defined
                string attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-string is a placeholder that can be replaced with any user defined string
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.json_values.values`` - The allowed value of the user defined JSON
                attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute
                name. A filter function is also supported in the filter string. The filter function is ``id(name)``. The
                ``id(name)`` function returns the id of the resource name. For example, ``id(name) = \"api-1\"`` is
                equivalent to ``name = \"projects/test-project-id/locations/test-location-id/apis/api-1\"`` provided the
                parent is ``projects/test-project-id/locations/test-location-id``. Another supported filter function is
                ``plugins(source_metadata)``. This function filters for resources that are associated with a specific
                plugin. For example, ``plugins(source_metadata) :
                "projects/test-project-id/locations/test-location-id/plugins/test-plugin-id"`` will return resources
                sourced from the given plugin. Expressions are combined with either ``AND`` logic operator or ``OR``
                logical operator but not both of them together i.e. only one of the ``AND`` or ``OR`` operator can be
                used throughout the filter string and both the operators cannot be used together. No other logical
                operators are supported. At most three filter fields are allowed in the filter string and if provided
                more than that then ``INVALID_ARGUMENT`` error is returned by the API. Here are a few examples: *
                ``owner.email = \"apihub@google.com\"`` - - The owner team email is _apihub@google.com_. * ``owner.email
                = \"apihub@google.com\" AND create_time < \"2021-08-15T14:50:00Z\" AND create_time >
                \"2021-08-10T12:00:00Z\"`` - The owner team email is _apihub@google.com_ and the api was created before
                _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. * ``owner.email = \"apihub@google.com\"
                OR team.enum_values.values.id: apihub-team-id`` - The filter string specifies the APIs where the owner
                team email is _apihub@google.com_ or the id of the allowed value associated with the team attribute is
                _apihub-team-id_. * ``owner.email = \"apihub@google.com\" OR team.enum_values.values.display_name:
                ApiHub Team`` - The filter string specifies the APIs where the owner team email is _apihub@google.com_
                or the display name of the allowed value associated with the team attribute is ``ApiHub Team``. *
                ``owner.email = \"apihub@google.com\" AND
                attributes.projects/test-project-id/locations/test-location-id/
                attributes/17650f90-4a29-4971-b3c0-d5532da3764b.enum_values.values.id: test_enum_id AND
                attributes.projects/test-project-id/locations/test-location-id/
                attributes/1765\0f90-4a29-5431-b3d0-d5532da3764c.string_values.values: test_string_value`` - The filter
                string specifies the APIs where the owner team email is _apihub@google.com_ and the id of the allowed
                value associated with the user defined attribute of type enum is _test_enum_id_ and the value of the
                user defined attribute of type string is _test_..
            page_size: Optional. The maximum number of API resources to return. The service may return fewer than this
                value. If unspecified, at most 50 Apis will be returned. The maximum value is 1000; values above 1000
                will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListApis`` call. Provide this to retrieve the
                subsequent page. When paginating, all other parameters (except page_size) provided to ``ListApis`` must
                match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_apis_list(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_apis_patch(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        body: GoogleCloudApihubV1Api | GoogleCloudApihubV1ApiDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Api:
        """Update an API resource in the API hub. The following fields in the API can be updated: * display_name *
        description * owner * documentation * target_user * team * business_unit * maturity_level * api_style *
        attributes * fingerprint The update_mask should be used to specify the fields being updated. Updating the owner
        field requires complete owner message and updates both owner and email fields.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_apis_patch(
                projects_id, locations_id, apis_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    async def apihub_projects_locations_apis_versions_create(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        body: GoogleCloudApihubV1Version | GoogleCloudApihubV1VersionDict,
        *,
        version_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Version:
        """Create an API version for an API resource in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            body: The request body.
            version_id: Optional. The ID to use for the API version, which will become the final component of the
                version's resource name. This field is optional. * If provided, the same will be used. The service will
                throw an error if the specified id is already used by another version in the API resource. * If not
                provided, a system generated id will be used. This value should be 4-500 characters, overall resource
                name which will be of format ``projects/{project}/locations/{location}/apis/{api}/versions/{version}``,
                its length is limited to 700 characters and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_apis_versions_create(
                projects_id, locations_id, apis_id, body, version_id=version_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_apis_versions_definitions_get(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        definitions_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Definition:
        """Get details about a definition in an API version.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            definitions_id: Resource name segment (definitionsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_apis_versions_definitions_get(
                projects_id, locations_id, apis_id, versions_id, definitions_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_apis_versions_delete(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        *,
        force: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Delete an API version. Version can only be deleted if all underlying specs, operations, definitions and
        linked deployments are deleted.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            force: Optional. If set to true, any specs from this version will also be deleted. Otherwise, the request
                will only work if the version has no specs.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_apis_versions_delete(
                projects_id, locations_id, apis_id, versions_id, force=force, request_options=request_options
            ),
        )

    async def apihub_projects_locations_apis_versions_get(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Version:
        """Get details about the API version of an API resource. This will include information about the specs and
        operations present in the API version as well as the deployments linked to it.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_apis_versions_get(
                projects_id, locations_id, apis_id, versions_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_apis_versions_list(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListVersionsResponse:
        r"""List API versions of an API resource in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            filter_: Optional. An expression that filters the list of Versions. A filter expression consists of a field
                name, a comparison operator, and a value for filtering. The value must be a string, a number, or a
                boolean. The comparison operator must be one of: ``<``, ``>`` or ``=``. Filters are not case sensitive.
                The following fields in the ``Version`` are eligible for filtering: * ``display_name`` - The display
                name of the Version. Allowed comparison operators: ``=``. * ``create_time`` - The time at which the
                Version was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format.
                Allowed comparison operators: ``>`` and ``<``. * ``lifecycle.enum_values.values.id`` - The allowed value
                id of the lifecycle attribute associated with the Version. Allowed comparison operators: ``:``. *
                ``lifecycle.enum_values.values.display_name`` - The allowed value display name of the lifecycle
                attribute associated with the Version. Allowed comparison operators: ``:``. *
                ``compliance.enum_values.values.id`` - The allowed value id of the compliances attribute associated with
                the Version. Allowed comparison operators: ``:``. * ``compliance.enum_values.values.display_name`` - The
                allowed value display name of the compliances attribute associated with the Version. Allowed comparison
                operators: ``:``. * ``accreditation.enum_values.values.id`` - The allowed value id of the accreditations
                attribute associated with the Version. Allowed comparison operators: ``:``. *
                ``accreditation.enum_values.values.display_name`` - The allowed value display name of the accreditations
                attribute associated with the Version. Allowed comparison operators: ``:``. *
                ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.id`` - The allowed value id of the user defined
                enum attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.display_name`` - The allowed value display name
                of the user defined enum attribute associated with the Resource. Allowed comparison operator is ``:``.
                Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user
                defined enum attribute enum name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.string_values.values`` - The allowed value of the user defined
                string attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-string is a placeholder that can be replaced with any user defined string
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.json_values.values`` - The allowed value of the user defined JSON
                attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute
                name. Expressions are combined with either ``AND`` logic operator or ``OR`` logical operator but not
                both of them together i.e. only one of the ``AND`` or ``OR`` operator can be used throughout the filter
                string and both the operators cannot be used together. No other logical operators are supported. At most
                three filter fields are allowed in the filter string and if provided more than that then
                ``INVALID_ARGUMENT`` error is returned by the API. Here are a few examples: *
                ``lifecycle.enum_values.values.id: preview-id`` - The filter string specifies that the id of the allowed
                value associated with the lifecycle attribute of the Version is _preview-id_. *
                ``lifecycle.enum_values.values.display_name: \"Preview Display Name\"`` - The filter string specifies
                that the display name of the allowed value associated with the lifecycle attribute of the Version is
                ``Preview Display Name``. * ``lifecycle.enum_values.values.id: preview-id AND create_time <
                \"2021-08-15T14:50:00Z\" AND create_time > \"2021-08-10T12:00:00Z\"`` - The id of the allowed value
                associated with the lifecycle attribute of the Version is _preview-id_ and it was created before
                _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. * ``compliance.enum_values.values.id:
                gdpr-id OR compliance.enum_values.values.id: pci-dss-id`` - The id of the allowed value associated with
                the compliance attribute is _gdpr-id_ or _pci-dss-id_. * ``lifecycle.enum_values.values.id: preview-id
                AND attributes.projects/test-project-id/locations/test-location-id/
                attributes/17650f90-4a29-4971-b3c0-d5532da3764b.string_values.values: test`` - The filter string
                specifies that the id of the allowed value associated with the lifecycle attribute of the Version is
                _preview-id_ and the value of the user defined attribute of type string is _test_.
            page_size: Optional. The maximum number of versions to return. The service may return fewer than this value.
                If unspecified, at most 50 versions will be returned. The maximum value is 1000; values above 1000 will
                be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListVersions`` call. Provide this to retrieve
                the subsequent page. When paginating, all other parameters (except page_size) provided to
                ``ListVersions`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_apis_versions_list(
                projects_id,
                locations_id,
                apis_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_apis_versions_operations_create(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        body: GoogleCloudApihubV1ApiOperation | GoogleCloudApihubV1ApiOperationDict,
        *,
        api_operation_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ApiOperation:
        """Create an apiOperation in an API version. An apiOperation can be created only if the version has no
        apiOperations which were created by parsing a spec.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            body: The request body.
            api_operation_id: Optional. The ID to use for the operation resource, which will become the final component
                of the operation's resource name. This field is optional. * If provided, the same will be used. The
                service will throw an error if the specified id is already used by another operation resource in the API
                hub. * If not provided, a system generated id will be used. This value should be 4-500 characters,
                overall resource name which will be of format
                ``projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}``, its
                length is limited to 1000 characters, and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_apis_versions_operations_create(
                projects_id,
                locations_id,
                apis_id,
                versions_id,
                body,
                api_operation_id=api_operation_id,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_apis_versions_operations_delete(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        operations_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Delete an operation in an API version and we can delete only the operations created via create API. If the
        operation was created by parsing the spec, then it can be deleted by editing or deleting the spec. Deleting an
        operation will also remove any links between the operation and deployments.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_apis_versions_operations_delete(
                projects_id, locations_id, apis_id, versions_id, operations_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_apis_versions_operations_get(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        operations_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ApiOperation:
        """Get details about a particular operation in API version.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_apis_versions_operations_get(
                projects_id, locations_id, apis_id, versions_id, operations_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_apis_versions_operations_list(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListApiOperationsResponse:
        r"""List operations in an API version.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            filter_: Optional. An expression that filters the list of ApiOperations. A filter expression consists of a
                field name, a comparison operator, and a value for filtering. The value must be a string or a boolean.
                The comparison operator must be one of: ``<``, ``>`` or ``=``. Filters are not case sensitive. The
                following fields in the ``ApiOperation`` are eligible for filtering: * ``name`` - The ApiOperation
                resource name. Allowed comparison operators: ``=``. * ``details.http_operation.path.path`` - The http
                operation's complete path relative to server endpoint. Allowed comparison operators: ``=``. *
                ``details.http_operation.method`` - The http operation method type. Allowed comparison operators: ``=``.
                * ``details.deprecated`` - Indicates if the ApiOperation is deprecated. Allowed values are True / False
                indicating the deprycation status of the ApiOperation. Allowed comparison operators: ``=``. *
                ``create_time`` - The time at which the ApiOperation was created. The value should be in the
                (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: ``>`` and ``<``. *
                ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.id`` - The allowed value id of the user defined
                enum attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.display_name`` - The allowed value display name
                of the user defined enum attribute associated with the Resource. Allowed comparison operator is ``:``.
                Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user
                defined enum attribute enum name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.string_values.values`` - The allowed value of the user defined
                string attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-string is a placeholder that can be replaced with any user defined string
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.json_values.values`` - The allowed value of the user defined JSON
                attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute
                name. Expressions are combined with either ``AND`` logic operator or ``OR`` logical operator but not
                both of them together i.e. only one of the ``AND`` or ``OR`` operator can be used throughout the filter
                string and both the operators cannot be used together. No other logical operators are supported. At most
                three filter fields are allowed in the filter string and if provided more than that then
                ``INVALID_ARGUMENT`` error is returned by the API. Here are a few examples: * ``details.deprecated =
                True`` - The ApiOperation is deprecated. * ``details.http_operation.method = GET AND create_time <
                \"2021-08-15T14:50:00Z\" AND create_time > \"2021-08-10T12:00:00Z\"`` - The method of the http operation
                of the ApiOperation is _GET_ and the spec was created before _2021-08-15 14:50:00 UTC_ and after
                _2021-08-10 12:00:00 UTC_. * ``details.http_operation.method = GET OR details.http_operation.method =
                POST``. - The http operation of the method of ApiOperation is _GET_ or _POST_. * ``details.deprecated =
                True AND attributes.projects/test-project-id/locations/test-location-id/
                attributes/17650f90-4a29-4971-b3c0-d5532da3764b.string_values.values: test`` - The filter string
                specifies that the ApiOperation is deprecated and the value of the user defined attribute of type string
                is _test_.
            page_size: Optional. The maximum number of operations to return. The service may return fewer than this
                value. If unspecified, at most 50 operations will be returned. The maximum value is 1000; values above
                1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListApiOperations`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to
                ``ListApiOperations`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_apis_versions_operations_list(
                projects_id,
                locations_id,
                apis_id,
                versions_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_apis_versions_operations_patch(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        operations_id: str,
        body: GoogleCloudApihubV1ApiOperation | GoogleCloudApihubV1ApiOperationDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ApiOperation:
        """Update an operation in an API version. The following fields in the ApiOperation resource can be updated: *
        details.description * details.documentation * details.http_operation.path * details.http_operation.method *
        details.deprecated * attributes * details.mcp_tool.title * details.mcp_tool.description *
        details.mcp_tool.input_schema * details.mcp_tool.output_schema * details.input_schema * details.output_schema *
        details.mcp_tool.annotations.title * details.mcp_tool.annotations.read_only_hint *
        details.mcp_tool.annotations.destructive_hint * details.mcp_tool.annotations.idempotent_hint *
        details.mcp_tool.annotations.open_world_hint * details.mcp_tool.annotations.additional_hints The update_mask
        should be used to specify the fields being updated. An operation can be updated only if the operation was
        created via CreateApiOperation API. If the operation was created by parsing the spec, then it can be edited by
        updating the spec.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            operations_id: Resource name segment (operationsId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_apis_versions_operations_patch(
                projects_id,
                locations_id,
                apis_id,
                versions_id,
                operations_id,
                body,
                update_mask=update_mask,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_apis_versions_patch(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        body: GoogleCloudApihubV1Version | GoogleCloudApihubV1VersionDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Version:
        """Update API version. The following fields in the version can be updated currently: * display_name *
        description * documentation * deployments * lifecycle * compliance * accreditation * attributes The update_mask
        should be used to specify the fields being updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_apis_versions_patch(
                projects_id,
                locations_id,
                apis_id,
                versions_id,
                body,
                update_mask=update_mask,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_apis_versions_specs_create(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        body: GoogleCloudApihubV1Spec | GoogleCloudApihubV1SpecDict,
        *,
        spec_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Spec:
        """Add a spec to an API version in the API hub. Multiple specs can be added to an API version. Note, while
        adding a spec, at least one of ``contents`` or ``source_uri`` must be provided. If ``contents`` is provided,
        then ``spec_type`` must also be provided. On adding a spec with contents to the version, the operations present
        in it will be added to the version.Note that the file contents in the spec should be of the same type as defined
        in the ``projects/{project}/locations/{location}/attributes/system-spec-type`` attribute associated with spec
        resource. Note that specs of various types can be uploaded, however parsing of details is supported for OpenAPI
        spec currently. In order to access the information parsed from the spec, use the GetSpec method. In order to
        access the raw contents for a particular spec, use the GetSpecContents method. In order to access the operations
        parsed from the spec, use the ListAPIOperations method.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            body: The request body.
            spec_id: Optional. The ID to use for the spec, which will become the final component of the spec's resource
                name. This field is optional. * If provided, the same will be used. The service will throw an error if
                the specified id is already used by another spec in the API resource. * If not provided, a system
                generated id will be used. This value should be 4-500 characters, overall resource name which will be of
                format ``projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}``, its
                length is limited to 1000 characters and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_apis_versions_specs_create(
                projects_id, locations_id, apis_id, versions_id, body, spec_id=spec_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_apis_versions_specs_delete(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        specs_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Delete a spec. Deleting a spec will also delete the associated operations from the version and remove any
        links between the spec and deployments.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            specs_id: Resource name segment (specsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_apis_versions_specs_delete(
                projects_id, locations_id, apis_id, versions_id, specs_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_apis_versions_specs_fetch_additional_spec_content(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        specs_id: str,
        *,
        spec_content_type: SpecContentType1OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1FetchAdditionalSpecContentResponse:
        """Fetch additional spec content.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            specs_id: Resource name segment (specsId).
            spec_content_type: Optional. The type of the spec contents to be retrieved.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_apis_versions_specs_fetch_additional_spec_content(
                projects_id,
                locations_id,
                apis_id,
                versions_id,
                specs_id,
                spec_content_type=spec_content_type,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_apis_versions_specs_get(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        specs_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Spec:
        """Get details about the information parsed from a spec. Note that this method does not return the raw spec
        contents. Use GetSpecContents method to retrieve the same.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            specs_id: Resource name segment (specsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_apis_versions_specs_get(
                projects_id, locations_id, apis_id, versions_id, specs_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_apis_versions_specs_get_contents(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        specs_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1SpecContents:
        """Get spec contents.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            specs_id: Resource name segment (specsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_apis_versions_specs_get_contents(
                projects_id, locations_id, apis_id, versions_id, specs_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_apis_versions_specs_lint(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        specs_id: str,
        body: Any,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Lints the requested spec and updates the corresponding API Spec with the lint response. This lint response
        will be available in all subsequent Get and List Spec calls to Core service.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            specs_id: Resource name segment (specsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_apis_versions_specs_lint(
                projects_id, locations_id, apis_id, versions_id, specs_id, body, request_options=request_options
            ),
        )

    async def apihub_projects_locations_apis_versions_specs_list(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListSpecsResponse:
        r"""List specs corresponding to a particular API resource.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            filter_: Optional. An expression that filters the list of Specs. A filter expression consists of a field
                name, a comparison operator, and a value for filtering. The value must be a string. The comparison
                operator must be one of: ``<``, ``>``, ``:`` or ``=``. Filters are not case sensitive. The following
                fields in the ``Spec`` are eligible for filtering: * ``display_name`` - The display name of the Spec.
                Allowed comparison operators: ``=``. * ``create_time`` - The time at which the Spec was created. The
                value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison
                operators: ``>`` and ``<``. * ``spec_type.enum_values.values.id`` - The allowed value id of the
                spec_type attribute associated with the Spec. Allowed comparison operators: ``:``. *
                ``spec_type.enum_values.values.display_name`` - The allowed value display name of the spec_type
                attribute associated with the Spec. Allowed comparison operators: ``:``. *
                ``lint_response.json_values.values`` - The json value of the lint_response attribute associated with the
                Spec. Allowed comparison operators: ``:``. * ``mime_type`` - The MIME type of the Spec. Allowed
                comparison operators: ``=``. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.id`` - The allowed value id of the user defined
                enum attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.display_name`` - The allowed value display name
                of the user defined enum attribute associated with the Resource. Allowed comparison operator is ``:``.
                Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user
                defined enum attribute enum name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.string_values.values`` - The allowed value of the user defined
                string attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-string is a placeholder that can be replaced with any user defined string
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.json_values.values`` - The allowed value of the user defined JSON
                attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute
                name. Expressions are combined with either ``AND`` logic operator or ``OR`` logical operator but not
                both of them together i.e. only one of the ``AND`` or ``OR`` operator can be used throughout the filter
                string and both the operators cannot be used together. No other logical operators are supported. At most
                three filter fields are allowed in the filter string and if provided more than that then
                ``INVALID_ARGUMENT`` error is returned by the API. Here are a few examples: *
                ``spec_type.enum_values.values.id: rest-id`` - The filter string specifies that the id of the allowed
                value associated with the spec_type attribute is _rest-id_. *
                ``spec_type.enum_values.values.display_name: \"Rest Display Name\"`` - The filter string specifies that
                the display name of the allowed value associated with the spec_type attribute is ``Rest Display Name``.
                * ``spec_type.enum_values.values.id: grpc-id AND create_time < \"2021-08-15T14:50:00Z\" AND create_time
                > \"2021-08-10T12:00:00Z\"`` - The id of the allowed value associated with the spec_type attribute is
                _grpc-id_ and the spec was created before _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_.
                * ``spec_type.enum_values.values.id: rest-id OR spec_type.enum_values.values.id: grpc-id`` - The id of
                the allowed value associated with the spec_type attribute is _rest-id_ or _grpc-id_. *
                ``spec_type.enum_values.values.id: rest-id AND
                attributes.projects/test-project-id/locations/test-location-id/
                attributes/17650f90-4a29-4971-b3c0-d5532da3764b.enum_values.values.id: test`` - The filter string
                specifies that the id of the allowed value associated with the spec_type attribute is _rest-id_ and the
                id of the allowed value associated with the user defined attribute of type enum is _test_.
            page_size: Optional. The maximum number of specs to return. The service may return fewer than this value. If
                unspecified, at most 50 specs will be returned. The maximum value is 1000; values above 1000 will be
                coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListSpecs`` call. Provide this to retrieve
                the subsequent page. When paginating, all other parameters provided to ``ListSpecs`` must match the call
                that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_apis_versions_specs_list(
                projects_id,
                locations_id,
                apis_id,
                versions_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_apis_versions_specs_patch(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        specs_id: str,
        body: GoogleCloudApihubV1Spec | GoogleCloudApihubV1SpecDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Spec:
        """Update spec. The following fields in the spec can be updated: * display_name * source_uri * lint_response *
        attributes * contents * spec_type In case of an OAS spec, updating spec contents can lead to: 1. Creation,
        deletion and update of operations. 2. Creation, deletion and update of definitions. 3. Update of other info
        parsed out from the new spec. In case of contents or source_uri being present in update mask, spec_type must
        also be present. Also, spec_type can not be present in update mask if contents or source_uri is not present. The
        update_mask should be used to specify the fields being updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            specs_id: Resource name segment (specsId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_apis_versions_specs_patch(
                projects_id,
                locations_id,
                apis_id,
                versions_id,
                specs_id,
                body,
                update_mask=update_mask,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_attributes_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1Attribute | GoogleCloudApihubV1AttributeDict,
        *,
        attribute_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Attribute:
        """Create a user defined attribute. Certain pre defined attributes are already created by the API hub. These
        attributes will have type as ``SYSTEM_DEFINED`` and can be listed via ListAttributes method. Allowed values for
        the same can be updated via UpdateAttribute method.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            attribute_id: Optional. The ID to use for the attribute, which will become the final component of the
                attribute's resource name. This field is optional. * If provided, the same will be used. The service
                will throw an error if the specified id is already used by another attribute resource in the API hub. *
                If not provided, a system generated id will be used. This value should be 4-500 characters, and valid
                characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_attributes_create(
                projects_id, locations_id, body, attribute_id=attribute_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_attributes_delete(
        self,
        projects_id: str,
        locations_id: str,
        attributes_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Delete an attribute. Note: System defined attributes cannot be deleted. All associations of the attribute
        being deleted with any API hub resource will also get deleted.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            attributes_id: Resource name segment (attributesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_attributes_delete(
                projects_id, locations_id, attributes_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_attributes_get(
        self,
        projects_id: str,
        locations_id: str,
        attributes_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Attribute:
        """Get details about the attribute.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            attributes_id: Resource name segment (attributesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_attributes_get(
                projects_id, locations_id, attributes_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_attributes_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListAttributesResponse:
        r"""List all attributes.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of Attributes. A filter expression consists of a
                field name, a comparison operator, and a value for filtering. The value must be a string or a boolean.
                The comparison operator must be one of: ``<``, ``>`` or ``=``. Filters are not case sensitive. The
                following fields in the ``Attribute`` are eligible for filtering: * ``display_name`` - The display name
                of the Attribute. Allowed comparison operators: ``=``. * ``definition_type`` - The definition type of
                the attribute. Allowed comparison operators: ``=``. * ``scope`` - The scope of the attribute. Allowed
                comparison operators: ``=``. * ``data_type`` - The type of the data of the attribute. Allowed comparison
                operators: ``=``. * ``mandatory`` - Denotes whether the attribute is mandatory or not. Allowed
                comparison operators: ``=``. * ``create_time`` - The time at which the Attribute was created. The value
                should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators:
                ``>`` and ``<``. Expressions are combined with either ``AND`` logic operator or ``OR`` logical operator
                but not both of them together i.e. only one of the ``AND`` or ``OR`` operator can be used throughout the
                filter string and both the operators cannot be used together. No other logical operators are supported.
                At most three filter fields are allowed in the filter string and if provided more than that then
                ``INVALID_ARGUMENT`` error is returned by the API. Here are a few examples: * ``display_name =
                production`` - - The display name of the attribute is _production_. * ``(display_name = production) AND
                (create_time < \"2021-08-15T14:50:00Z\") AND (create_time > \"2021-08-10T12:00:00Z\")`` - The display
                name of the attribute is _production_ and the attribute was created before _2021-08-15 14:50:00 UTC_ and
                after _2021-08-10 12:00:00 UTC_. * ``display_name = production OR scope = api`` - The attribute where
                the display name is _production_ or the scope is _api_.
            page_size: Optional. The maximum number of attribute resources to return. The service may return fewer than
                this value. If unspecified, at most 50 attributes will be returned. The maximum value is 1000; values
                above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListAttributes`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListAttributes`` must
                match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_attributes_list(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_attributes_patch(
        self,
        projects_id: str,
        locations_id: str,
        attributes_id: str,
        body: GoogleCloudApihubV1Attribute | GoogleCloudApihubV1AttributeDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Attribute:
        """Update the attribute. The following fields in the Attribute resource can be updated: * display_name The
        display name can be updated for user defined attributes only. * description The description can be updated for
        user defined attributes only. * allowed_values To update the list of allowed values, clients need to use the
        fetched list of allowed values and add or remove values to or from the same list. The mutable allowed values can
        be updated for both user defined and System defined attributes. The immutable allowed values cannot be updated
        or deleted. The updated list of allowed values cannot be empty. If an allowed value that is already used by some
        resource's attribute is deleted, then the association between the resource and the attribute value will also be
        deleted. * cardinality The cardinality can be updated for user defined attributes only. Cardinality can only be
        increased during an update. The update_mask should be used to specify the fields being updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            attributes_id: Resource name segment (attributesId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_attributes_patch(
                projects_id, locations_id, attributes_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    async def apihub_projects_locations_collect_api_data(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1CollectApiDataRequest | GoogleCloudApihubV1CollectApiDataRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Collect API data from a source and push it to Hub's collect layer.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_collect_api_data(
                projects_id, locations_id, body, request_options=request_options
            ),
        )

    async def apihub_projects_locations_curations_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1Curation | GoogleCloudApihubV1CurationDict,
        *,
        curation_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Curation:
        """Create a curation resource in the API hub. Once a curation resource is created, plugin instances can start
        using it.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            curation_id: Optional. The ID to use for the curation resource, which will become the final component of the
                curations's resource name. This field is optional. * If provided, the same will be used. The service
                will throw an error if the specified ID is already used by another curation resource in the API hub. *
                If not provided, a system generated ID will be used. This value should be 4-500 characters, and valid
                characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_curations_create(
                projects_id, locations_id, body, curation_id=curation_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_curations_delete(
        self,
        projects_id: str,
        locations_id: str,
        curations_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Delete a curation resource in the API hub. A curation can only be deleted if it's not being used by any
        plugin instance.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            curations_id: Resource name segment (curationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_curations_delete(
                projects_id, locations_id, curations_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_curations_get(
        self,
        projects_id: str,
        locations_id: str,
        curations_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Curation:
        """Get curation resource details.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            curations_id: Resource name segment (curationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_curations_get(
                projects_id, locations_id, curations_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_curations_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListCurationsResponse:
        r"""List curation resources in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of curation resources. A filter expression consists
                of a field name, a comparison operator, and a value for filtering. The value must be a string. The
                comparison operator must be one of: ``<``, ``>``, ``:`` or ``=``. Filters are case insensitive. The
                following fields in the ``curation resource`` are eligible for filtering: * ``create_time`` - The time
                at which the curation was created. The value should be in the
                (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: ``>`` and ``<``. *
                ``display_name`` - The display name of the curation. Allowed comparison operators: ``=``. * ``state`` -
                The state of the curation. Allowed comparison operators: ``=``. Expressions are combined with either
                ``AND`` logic operator or ``OR`` logical operator but not both of them together i.e. only one of the
                ``AND`` or ``OR`` operator can be used throughout the filter string and both the operators cannot be
                used together. No other logical operators are supported. At most three filter fields are allowed in the
                filter string and if provided more than that then ``INVALID_ARGUMENT`` error is returned by the API.
                Here are a few examples: * ``create_time < \"2021-08-15T14:50:00Z\" AND create_time >
                \"2021-08-10T12:00:00Z\"`` - The curation resource was created before _2021-08-15 14:50:00 UTC_ and
                after _2021-08-10 12:00:00 UTC_.
            page_size: Optional. The maximum number of curation resources to return. The service may return fewer than
                this value. If unspecified, at most 50 curations will be returned. The maximum value is 1000; values
                above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListCurations`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to
                ``ListCurations`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_curations_list(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_curations_patch(
        self,
        projects_id: str,
        locations_id: str,
        curations_id: str,
        body: GoogleCloudApihubV1Curation | GoogleCloudApihubV1CurationDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Curation:
        """Update a curation resource in the API hub. The following fields in the curation can be updated: *
        display_name * description The update_mask should be used to specify the fields being updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            curations_id: Resource name segment (curationsId).
            body: The request body.
            update_mask: Optional. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_curations_patch(
                projects_id, locations_id, curations_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    async def apihub_projects_locations_dependencies_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1Dependency | GoogleCloudApihubV1DependencyDict,
        *,
        dependency_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Dependency:
        """Create a dependency between two entities in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            dependency_id: Optional. The ID to use for the dependency resource, which will become the final component of
                the dependency's resource name. This field is optional. * If provided, the same will be used. The
                service will throw an error if duplicate id is provided by the client. * If not provided, a system
                generated id will be used. This value should be 4-500 characters, and valid characters are
                ``a-z[0-9]-_``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_dependencies_create(
                projects_id, locations_id, body, dependency_id=dependency_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_dependencies_delete(
        self,
        projects_id: str,
        locations_id: str,
        dependencies_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Delete the dependency resource.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            dependencies_id: Resource name segment (dependenciesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_dependencies_delete(
                projects_id, locations_id, dependencies_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_dependencies_get(
        self,
        projects_id: str,
        locations_id: str,
        dependencies_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Dependency:
        """Get details about a dependency resource in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            dependencies_id: Resource name segment (dependenciesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_dependencies_get(
                projects_id, locations_id, dependencies_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_dependencies_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListDependenciesResponse:
        r"""List dependencies based on the provided filter and pagination parameters.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of Dependencies. A filter expression consists of a
                field name, a comparison operator, and a value for filtering. The value must be a string. Allowed
                comparison operator is ``=``. Filters are not case sensitive. The following fields in the ``Dependency``
                are eligible for filtering: * ``consumer.operation_resource_name`` - The operation resource name for the
                consumer entity involved in a dependency. Allowed comparison operators: ``=``. *
                ``consumer.external_api_resource_name`` - The external api resource name for the consumer entity
                involved in a dependency. Allowed comparison operators: ``=``. * ``supplier.operation_resource_name`` -
                The operation resource name for the supplier entity involved in a dependency. Allowed comparison
                operators: ``=``. * ``supplier.external_api_resource_name`` - The external api resource name for the
                supplier entity involved in a dependency. Allowed comparison operators: ``=``. Expressions are combined
                with either ``AND`` logic operator or ``OR`` logical operator but not both of them together i.e. only
                one of the ``AND`` or ``OR`` operator can be used throughout the filter string and both the operators
                cannot be used together. No other logical operators are supported. At most three filter fields are
                allowed in the filter string and if provided more than that then ``INVALID_ARGUMENT`` error is returned
                by the API. For example, ``consumer.operation_resource_name =
                \"projects/p1/locations/global/apis/a1/versions/v1/operations/o1\" OR supplier.operation_resource_name =
                \"projects/p1/locations/global/apis/a1/versions/v1/operations/o1\"`` - The dependencies with either
                consumer or supplier operation resource name as
                _projects/p1/locations/global/apis/a1/versions/v1/operations/o1_.
            page_size: Optional. The maximum number of dependency resources to return. The service may return fewer than
                this value. If unspecified, at most 50 dependencies will be returned. The maximum value is 1000; values
                above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListDependencies`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListDependencies``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_dependencies_list(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_dependencies_patch(
        self,
        projects_id: str,
        locations_id: str,
        dependencies_id: str,
        body: GoogleCloudApihubV1Dependency | GoogleCloudApihubV1DependencyDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Dependency:
        """Update a dependency based on the update_mask provided in the request. The following fields in the dependency
        can be updated: * description

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            dependencies_id: Resource name segment (dependenciesId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_dependencies_patch(
                projects_id,
                locations_id,
                dependencies_id,
                body,
                update_mask=update_mask,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_deployments_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1Deployment | GoogleCloudApihubV1DeploymentDict,
        *,
        deployment_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Deployment:
        """Create a deployment resource in the API hub. Once a deployment resource is created, it can be associated with
        API versions.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            deployment_id: Optional. The ID to use for the deployment resource, which will become the final component of
                the deployment's resource name. This field is optional. * If provided, the same will be used. The
                service will throw an error if the specified id is already used by another deployment resource in the
                API hub. * If not provided, a system generated id will be used. This value should be 4-500 characters,
                and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_deployments_create(
                projects_id, locations_id, body, deployment_id=deployment_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_deployments_delete(
        self,
        projects_id: str,
        locations_id: str,
        deployments_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Deletes a deployment resource in the API hub. A deployment can only be deleted after its links to any
        versions, specs, and API operations have been removed.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            deployments_id: Resource name segment (deploymentsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_deployments_delete(
                projects_id, locations_id, deployments_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_deployments_get(
        self,
        projects_id: str,
        locations_id: str,
        deployments_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Deployment:
        """Get details about a deployment and the API versions linked to it.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            deployments_id: Resource name segment (deploymentsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_deployments_get(
                projects_id, locations_id, deployments_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_deployments_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListDeploymentsResponse:
        r"""List deployment resources in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of Deployments. A filter expression consists of a
                field name, a comparison operator, and a value for filtering. The value must be a string. The comparison
                operator must be one of: ``<``, ``>`` or ``=``. Filters are not case sensitive. The following fields in
                the ``Deployments`` are eligible for filtering: * ``display_name`` - The display name of the Deployment.
                Allowed comparison operators: ``=``. * ``create_time`` - The time at which the Deployment was created.
                The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison
                operators: ``>`` and ``<``. * ``resource_uri`` - A URI to the deployment resource. Allowed comparison
                operators: ``=``. * ``api_versions`` - The API versions linked to this deployment. Allowed comparison
                operators: ``:``. * ``source_project`` - The project/organization at source for the deployment. Allowed
                comparison operators: ``=``. * ``source_environment`` - The environment at source for the deployment.
                Allowed comparison operators: ``=``. * ``deployment_type.enum_values.values.id`` - The allowed value id
                of the deployment_type attribute associated with the Deployment. Allowed comparison operators: ``:``. *
                ``deployment_type.enum_values.values.display_name`` - The allowed value display name of the
                deployment_type attribute associated with the Deployment. Allowed comparison operators: ``:``. *
                ``slo.string_values.values`` -The allowed string value of the slo attribute associated with the
                deployment. Allowed comparison operators: ``:``. * ``environment.enum_values.values.id`` - The allowed
                value id of the environment attribute associated with the deployment. Allowed comparison operators:
                ``:``. * ``environment.enum_values.values.display_name`` - The allowed value display name of the
                environment attribute associated with the deployment. Allowed comparison operators: ``:``. *
                ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.id`` - The allowed value id of the user defined
                enum attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.display_name`` - The allowed value display name
                of the user defined enum attribute associated with the Resource. Allowed comparison operator is ``:``.
                Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user
                defined enum attribute enum name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.string_values.values`` - The allowed value of the user defined
                string attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-string is a placeholder that can be replaced with any user defined string
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.json_values.values`` - The allowed value of the user defined JSON
                attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute
                name. A filter function is also supported in the filter string. The filter function is ``id(name)``. The
                ``id(name)`` function returns the id of the resource name. For example, ``id(name) = \"deployment-1\"``
                is equivalent to ``name =
                \"projects/test-project-id/locations/test-location-id/deployments/deployment-1\"`` provided the parent
                is ``projects/test-project-id/locations/test-location-id``. Expressions are combined with either ``AND``
                logic operator or ``OR`` logical operator but not both of them together i.e. only one of the ``AND`` or
                ``OR`` operator can be used throughout the filter string and both the operators cannot be used together.
                No other logical operators are supported. At most three filter fields are allowed in the filter string
                and if provided more than that then ``INVALID_ARGUMENT`` error is returned by the API. Here are a few
                examples: * ``environment.enum_values.values.id: staging-id`` - The allowed value id of the environment
                attribute associated with the Deployment is _staging-id_. *
                ``environment.enum_values.values.display_name: \"Staging Deployment\"`` - The allowed value display name
                of the environment attribute associated with the Deployment is ``Staging Deployment``. *
                ``environment.enum_values.values.id: production-id AND create_time < \"2021-08-15T14:50:00Z\" AND
                create_time > \"2021-08-10T12:00:00Z\"`` - The allowed value id of the environment attribute associated
                with the Deployment is _production-id_ and Deployment was created before _2021-08-15 14:50:00 UTC_ and
                after _2021-08-10 12:00:00 UTC_. * ``environment.enum_values.values.id: production-id OR
                slo.string_values.values: \"99.99%\"`` - The allowed value id of the environment attribute Deployment is
                _production-id_ or string value of the slo attribute is _99.99%_. * ``environment.enum_values.values.id:
                staging-id AND attributes.projects/test-project-id/locations/test-location-id/
                attributes/17650f90-4a29-4971-b3c0-d5532da3764b.string_values.values: test`` - The filter string
                specifies that the allowed value id of the environment attribute associated with the Deployment is
                _staging-id_ and the value of the user defined attribute of type string is _test_.
            page_size: Optional. The maximum number of deployment resources to return. The service may return fewer than
                this value. If unspecified, at most 50 deployments will be returned. The maximum value is 1000; values
                above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListDeployments`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to
                ``ListDeployments`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_deployments_list(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_deployments_patch(
        self,
        projects_id: str,
        locations_id: str,
        deployments_id: str,
        body: GoogleCloudApihubV1Deployment | GoogleCloudApihubV1DeploymentDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Deployment:
        """Update a deployment resource in the API hub. The following fields in the deployment resource can be updated:
        * display_name * description * documentation * deployment_type * resource_uri * endpoints * slo * environment *
        attributes * source_project * source_environment * management_url * source_uri The update_mask should be used to
        specify the fields being updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            deployments_id: Resource name segment (deploymentsId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_deployments_patch(
                projects_id,
                locations_id,
                deployments_id,
                body,
                update_mask=update_mask,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_discovered_api_observations_discovered_api_operations_get(
        self,
        projects_id: str,
        locations_id: str,
        discovered_api_observations_id: str,
        discovered_api_operations_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1DiscoveredApiOperation:
        """Gets a DiscoveredAPIOperation in a given project, location, ApiObservation and ApiOperation.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            discovered_api_observations_id: Resource name segment (discoveredApiObservationsId).
            discovered_api_operations_id: Resource name segment (discoveredApiOperationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_discovered_api_observations_discovered_api_operations_get(
                projects_id,
                locations_id,
                discovered_api_observations_id,
                discovered_api_operations_id,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_discovered_api_observations_discovered_api_operations_list(
        self,
        projects_id: str,
        locations_id: str,
        discovered_api_observations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListDiscoveredApiOperationsResponse:
        """Lists all the DiscoveredAPIOperations in a given project, location and ApiObservation.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            discovered_api_observations_id: Resource name segment (discoveredApiObservationsId).
            page_size: Optional. DiscoveredApiOperations will be returned. The maximum value is 1000; values above 1000
                will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListDiscoveredApiApiOperations`` call.
                Provide this to retrieve the subsequent page. When paginating, all other parameters provided to
                ``ListDiscoveredApiApiOperations`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_discovered_api_observations_discovered_api_operations_list(
                projects_id,
                locations_id,
                discovered_api_observations_id,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_discovered_api_observations_get(
        self,
        projects_id: str,
        locations_id: str,
        discovered_api_observations_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1DiscoveredApiObservation:
        """Gets a DiscoveredAPIObservation in a given project, location and ApiObservation.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            discovered_api_observations_id: Resource name segment (discoveredApiObservationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_discovered_api_observations_get(
                projects_id, locations_id, discovered_api_observations_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_discovered_api_observations_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListDiscoveredApiObservationsResponse:
        """Lists all the DiscoveredAPIObservations in a given project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            page_size: Optional. The maximum number of ApiObservations to return. The service may return fewer than this
                value. If unspecified, at most 10 ApiObservations will be returned. The maximum value is 1000; values
                above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListApiObservations`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListApiObservations``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_discovered_api_observations_list(
                projects_id, locations_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    async def apihub_projects_locations_external_apis_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1ExternalApi | GoogleCloudApihubV1ExternalApiDict,
        *,
        external_api_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ExternalApi:
        """Create an External API resource in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            external_api_id: Optional. The ID to use for the External API resource, which will become the final
                component of the External API's resource name. This field is optional. * If provided, the same will be
                used. The service will throw an error if the specified id is already used by another External API
                resource in the API hub. * If not provided, a system generated id will be used. This value should be
                4-500 characters, and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_external_apis_create(
                projects_id, locations_id, body, external_api_id=external_api_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_external_apis_delete(
        self,
        projects_id: str,
        locations_id: str,
        external_apis_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Delete an External API resource in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            external_apis_id: Resource name segment (externalApisId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_external_apis_delete(
                projects_id, locations_id, external_apis_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_external_apis_get(
        self,
        projects_id: str,
        locations_id: str,
        external_apis_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ExternalApi:
        """Get details about an External API resource in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            external_apis_id: Resource name segment (externalApisId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_external_apis_get(
                projects_id, locations_id, external_apis_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_external_apis_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListExternalApisResponse:
        """List External API resources in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            page_size: Optional. The maximum number of External API resources to return. The service may return fewer
                than this value. If unspecified, at most 50 ExternalApis will be returned. The maximum value is 1000;
                values above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListExternalApis`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to
                ``ListExternalApis`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_external_apis_list(
                projects_id, locations_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    async def apihub_projects_locations_external_apis_patch(
        self,
        projects_id: str,
        locations_id: str,
        external_apis_id: str,
        body: GoogleCloudApihubV1ExternalApi | GoogleCloudApihubV1ExternalApiDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ExternalApi:
        """Update an External API resource in the API hub. The following fields can be updated: * display_name *
        description * documentation * endpoints * paths The update_mask should be used to specify the fields being
        updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            external_apis_id: Resource name segment (externalApisId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_external_apis_patch(
                projects_id,
                locations_id,
                external_apis_id,
                body,
                update_mask=update_mask,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_generated_spec_apis_generate_spec(
        self,
        projects_id: str,
        locations_id: str,
        generated_spec_apis_id: str,
        body: GoogleCloudApihubV1GenerateSpecRequest | GoogleCloudApihubV1GenerateSpecRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1GenerateSpecResponse:
        """Merges the per-day stored specs across the requested window and returns the merged OpenAPI document. Preview:
        this method is in Public Preview. Behavior and the API surface may change until the Spec Generation feature
        reaches General Availability.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            generated_spec_apis_id: Resource name segment (generatedSpecApisId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_generated_spec_apis_generate_spec(
                projects_id, locations_id, generated_spec_apis_id, body, request_options=request_options
            ),
        )

    async def apihub_projects_locations_generated_spec_apis_get(
        self,
        projects_id: str,
        locations_id: str,
        generated_spec_apis_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1GeneratedSpecApi:
        """Gets a single GeneratedSpecApi by resource name. Preview: this method is in Public Preview. Behavior and the
        API surface may change until the Spec Generation feature reaches General Availability.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            generated_spec_apis_id: Resource name segment (generatedSpecApisId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_generated_spec_apis_get(
                projects_id, locations_id, generated_spec_apis_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_generated_spec_apis_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListGeneratedSpecApisResponse:
        """Lists the APIs the pipeline is tracking, ordered by ``update_time desc``. Preview: this method is in Public
        Preview. Behavior and the API surface may change until the Spec Generation feature reaches General Availability.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An AIP-160 filter. This release supports the fields ``state`` and ``source.source_type``,
                the ``=`` comparison operator only, and ``AND`` conjunction only. Examples: - ``state =
                "SPEC_GENERATED"`` - ``state = "SPEC_ASSOCIATED" AND source.source_type = APIGEE_X``
            page_size: Optional. The maximum number of results to return. The service may return fewer. If unspecified,
                at most 50 will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListGeneratedSpecApis`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters (except ``page_size``) provided to
                ``ListGeneratedSpecApis`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_generated_spec_apis_list(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_get(
        self, projects_id: str, locations_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GoogleCloudLocationLocation:
        """Gets information about a location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_get(
                projects_id, locations_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_host_project_registrations_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1HostProjectRegistration | GoogleCloudApihubV1HostProjectRegistrationDict,
        *,
        host_project_registration_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1HostProjectRegistration:
        """Create a host project registration. A Google cloud project can be registered as a host project if it is not
        attached as a runtime project to another host project. A project can have only one host project registration at
        a time. Subsequent register calls for the same project will fail until the existing registration is deleted.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            host_project_registration_id: Required. The ID to use for the Host Project Registration, which will become
                the final component of the host project registration's resource name. The ID must be the same as the
                Google cloud project specified in the host_project_registration.gcp_project field.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_host_project_registrations_create(
                projects_id,
                locations_id,
                body,
                host_project_registration_id=host_project_registration_id,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_host_project_registrations_get(
        self,
        projects_id: str,
        locations_id: str,
        host_project_registrations_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1HostProjectRegistration:
        """Get a host project registration.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            host_project_registrations_id: Resource name segment (hostProjectRegistrationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_host_project_registrations_get(
                projects_id, locations_id, host_project_registrations_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_host_project_registrations_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListHostProjectRegistrationsResponse:
        """Lists host project registrations.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of HostProjectRegistrations. A filter expression
                consists of a field name, a comparison operator, and a value for filtering. The value must be a string.
                All standard operators as documented at https://google.aip.dev/160 are supported. The following fields
                in the ``HostProjectRegistration`` are eligible for filtering: * ``name`` - The name of the
                HostProjectRegistration. * ``create_time`` - The time at which the HostProjectRegistration was created.
                The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. * ``gcp_project`` -
                The Google cloud project associated with the HostProjectRegistration.
            order_by: Optional. Hint for how to order the results.
            page_size: Optional. The maximum number of host project registrations to return. The service may return
                fewer than this value. If unspecified, at most 50 host project registrations will be returned. The
                maximum value is 1000; values above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListHostProjectRegistrations`` call. Provide
                this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided
                to ``ListHostProjectRegistrations`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_host_project_registrations_list(
                projects_id,
                locations_id,
                filter_=filter_,
                order_by=order_by,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_list(
        self,
        projects_id: str,
        *,
        extra_location_types: list[str] | None = None,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudLocationListLocationsResponse:
        """Lists information about the supported locations for this service. This method lists locations based on the
        resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If ``name`` is empty,
        the method lists the public locations available to all projects. * **Project-specific locations**: If ``name``
        follows the format ``projects/{project}``, the method lists locations visible to that specific project. This
        includes public, private, or other project-specific locations enabled for the project. For gRPC and client
        library implementations, the resource name is passed as the ``name`` field. For direct service calls, the
        resource name is incorporated into the request path based on the specific service implementation and version.

        Args:
            projects_id: Resource name segment (projectsId).
            extra_location_types: Optional. Do not use this field unless explicitly documented otherwise. This is
                primarily for internal usage.
            filter_: A filter to narrow down results to a preferred subset. The filtering language accepts strings like
                ``"displayName=tokyo"``, and is documented in more detail in `AIP-160 <https://google.aip.dev/160>`__.
            page_size: The maximum number of results to return. If not set, the service selects a default.
            page_token: A page token received from the ``next_page_token`` field in the response. Send that page token
                to receive the subsequent page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_list(
                projects_id,
                extra_location_types=extra_location_types,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_lookup_runtime_project_attachment(
        self, projects_id: str, locations_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse:
        """Look up a runtime project attachment. This API can be called in the context of any project.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_lookup_runtime_project_attachment(
                projects_id, locations_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_operations_cancel(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        body: Any,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the
        operation, but success is not guaranteed. If the server doesn't support this method, it returns
        ``google.rpc.Code.UNIMPLEMENTED``. Clients can use Operations.GetOperation or other methods to check whether the
        cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the
        operation is not deleted; instead, it becomes an operation with an Operation.error value with a
        google.rpc.Status.code of ``1``, corresponding to ``Code.CANCELLED``.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_operations_cancel(
                projects_id, locations_id, operations_id, body, request_options=request_options
            ),
        )

    async def apihub_projects_locations_operations_delete(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Deletes a long-running operation. This method indicates that the client is no longer interested in the
        operation result. It does not cancel the operation. If the server doesn't support this method, it returns
        ``google.rpc.Code.UNIMPLEMENTED``.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_operations_delete(
                projects_id, locations_id, operations_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_operations_get(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Gets the latest state of a long-running operation. Clients can use this method to poll the operation result
        at intervals as recommended by the API service.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_operations_get(
                projects_id, locations_id, operations_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_operations_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        return_partial_success: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningListOperationsResponse:
        """Lists operations that match the specified filter in the request. If the server doesn't support this method,
        it returns ``UNIMPLEMENTED``.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: The standard list filter.
            page_size: The standard list page size.
            page_token: The standard list page token.
            return_partial_success: When set to ``true``, operations that are reachable are returned as normal, and
                those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only
                be ``true`` when reading across collections. For example, when ``parent`` is set to
                ``"projects/example/locations/-"``. This field is not supported by default and will result in an
                ``UNIMPLEMENTED`` error if set unless explicitly documented otherwise in service or product specific
                documentation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_operations_list(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                return_partial_success=return_partial_success,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_plugins_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1Plugin | GoogleCloudApihubV1PluginDict,
        *,
        plugin_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Plugin:
        """Create an API Hub plugin resource in the API hub. Once a plugin is created, it can be used to create plugin
        instances.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            plugin_id: Optional. The ID to use for the Plugin resource, which will become the final component of the
                Plugin's resource name. This field is optional. * If provided, the same will be used. The service will
                throw an error if the specified id is already used by another Plugin resource in the API hub instance. *
                If not provided, a system generated id will be used. This value should be 4-63 characters, overall
                resource name which will be of format ``projects/{project}/locations/{location}/plugins/{plugin}``, its
                length is limited to 1000 characters and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_plugins_create(
                projects_id, locations_id, body, plugin_id=plugin_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_plugins_delete(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Delete a Plugin in API hub. Note, only user owned plugins can be deleted via this method.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_plugins_delete(
                projects_id, locations_id, plugins_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_plugins_disable(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        body: Any,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Plugin:
        """Disables a plugin. The ``state`` of the plugin after disabling is ``DISABLED``

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_plugins_disable(
                projects_id, locations_id, plugins_id, body, request_options=request_options
            ),
        )

    async def apihub_projects_locations_plugins_enable(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        body: Any,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Plugin:
        """Enables a plugin. The ``state`` of the plugin after enabling is ``ENABLED``

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_plugins_enable(
                projects_id, locations_id, plugins_id, body, request_options=request_options
            ),
        )

    async def apihub_projects_locations_plugins_get(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1Plugin:
        """Get an API Hub plugin.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_plugins_get(
                projects_id, locations_id, plugins_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_plugins_get_style_guide(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1StyleGuide:
        """Get the style guide being used for linting.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_plugins_get_style_guide(
                projects_id, locations_id, plugins_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_plugins_instances_create(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        body: GoogleCloudApihubV1PluginInstance | GoogleCloudApihubV1PluginInstanceDict,
        *,
        plugin_instance_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Creates a Plugin instance in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            body: The request body.
            plugin_instance_id: Optional. The ID to use for the plugin instance, which will become the final component
                of the plugin instance's resource name. This field is optional. * If provided, the same will be used.
                The service will throw an error if the specified id is already used by another plugin instance in the
                plugin resource. * If not provided, a system generated id will be used. This value should be 4-63
                characters, and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_plugins_instances_create(
                projects_id,
                locations_id,
                plugins_id,
                body,
                plugin_instance_id=plugin_instance_id,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_plugins_instances_delete(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Deletes a plugin instance in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_plugins_instances_delete(
                projects_id, locations_id, plugins_id, instances_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_plugins_instances_disable_action(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        body: (
            GoogleCloudApihubV1DisablePluginInstanceActionRequest
            | GoogleCloudApihubV1DisablePluginInstanceActionRequestDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Disables a plugin instance in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_plugins_instances_disable_action(
                projects_id, locations_id, plugins_id, instances_id, body, request_options=request_options
            ),
        )

    async def apihub_projects_locations_plugins_instances_enable_action(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        body: (
            GoogleCloudApihubV1EnablePluginInstanceActionRequest
            | GoogleCloudApihubV1EnablePluginInstanceActionRequestDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Enables a plugin instance in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_plugins_instances_enable_action(
                projects_id, locations_id, plugins_id, instances_id, body, request_options=request_options
            ),
        )

    async def apihub_projects_locations_plugins_instances_execute_action(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        body: (
            GoogleCloudApihubV1ExecutePluginInstanceActionRequest
            | GoogleCloudApihubV1ExecutePluginInstanceActionRequestDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Executes a plugin instance in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_plugins_instances_execute_action(
                projects_id, locations_id, plugins_id, instances_id, body, request_options=request_options
            ),
        )

    async def apihub_projects_locations_plugins_instances_get(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1PluginInstance:
        """Get an API Hub plugin instance.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_plugins_instances_get(
                projects_id, locations_id, plugins_id, instances_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_plugins_instances_list(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListPluginInstancesResponse:
        r"""List all the plugins in a given project and location. ``-`` can be used as wildcard value for {plugin_id}

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            filter_: Optional. An expression that filters the list of plugin instances. A filter expression consists of
                a field name, a comparison operator, and a value for filtering. The value must be a string. The
                comparison operator must be one of: ``<``, ``>`` or ``=``. Filters are not case sensitive. The following
                fields in the ``PluginInstances`` are eligible for filtering: * ``state`` - The state of the Plugin
                Instance. Allowed comparison operators: ``=``. * ``source_project_id`` - The source project id of the
                Plugin Instance. Allowed comparison operators: ``=``. A filter function is also supported in the filter
                string. The filter function is ``id(name)``. The ``id(name)`` function returns the id of the resource
                name. For example, ``id(name) = \"plugin-instance-1\"`` is equivalent to ``name =
                \"projects/test-project-id/locations/test-location-id/plugins/plugin-1/instances/plugin-instance-1\"``
                provided the parent is ``projects/test-project-id/locations/test-location-id/plugins/plugin-1``.
                Expressions are combined with either ``AND`` logic operator or ``OR`` logical operator but not both of
                them together i.e. only one of the ``AND`` or ``OR`` operator can be used throughout the filter string
                and both the operators cannot be used together. No other logical operators are supported. At most three
                filter fields are allowed in the filter string and if provided more than that then ``INVALID_ARGUMENT``
                error is returned by the API. Here are a few examples: * ``state = ENABLED`` - The plugin instance is in
                enabled state.
            page_size: Optional. The maximum number of hub plugins to return. The service may return fewer than this
                value. If unspecified, at most 50 hub plugins will be returned. The maximum value is 1000; values above
                1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListPluginInstances`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListPluginInstances``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_plugins_instances_list(
                projects_id,
                locations_id,
                plugins_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_plugins_instances_manage_source_data(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        body: (
            GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest
            | GoogleCloudApihubV1ManagePluginInstanceSourceDataRequestDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Manages data for a given plugin instance.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_plugins_instances_manage_source_data(
                projects_id, locations_id, plugins_id, instances_id, body, request_options=request_options
            ),
        )

    async def apihub_projects_locations_plugins_instances_patch(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        body: GoogleCloudApihubV1PluginInstance | GoogleCloudApihubV1PluginInstanceDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1PluginInstance:
        """Updates a plugin instance in the API hub. The following fields in the plugin_instance can be updated
        currently: * display_name * schedule_cron_expression The update_mask should be used to specify the fields being
        updated. To update the auth_config and additional_config of the plugin instance, use the
        ApplyPluginInstanceConfig method.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            body: The request body.
            update_mask: Optional. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_plugins_instances_patch(
                projects_id,
                locations_id,
                plugins_id,
                instances_id,
                body,
                update_mask=update_mask,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_plugins_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListPluginsResponse:
        """List all the plugins in a given project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of plugins. A filter expression consists of a field
                name, a comparison operator, and a value for filtering. The value must be a string. The comparison
                operator must be one of: ``<``, ``>`` or ``=``. Filters are not case sensitive. The following fields in
                the ``Plugins`` are eligible for filtering: * ``plugin_category`` - The category of the Plugin. Allowed
                comparison operators: ``=``. Expressions are combined with either ``AND`` logic operator or ``OR``
                logical operator but not both of them together i.e. only one of the ``AND`` or ``OR`` operator can be
                used throughout the filter string and both the operators cannot be used together. No other logical
                operators are supported. At most three filter fields are allowed in the filter string and if provided
                more than that then ``INVALID_ARGUMENT`` error is returned by the API. Here are a few examples: *
                ``plugin_category = ON_RAMP`` - The plugin is of category on ramp.
            page_size: Optional. The maximum number of hub plugins to return. The service may return fewer than this
                value. If unspecified, at most 50 hub plugins will be returned. The maximum value is 1000; values above
                1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListPlugins`` call. Provide this to retrieve
                the subsequent page. When paginating, all other parameters (except page_size) provided to
                ``ListPlugins`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_plugins_list(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_plugins_style_guide_get_contents(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1StyleGuideContents:
        """Get the contents of the style guide.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_plugins_style_guide_get_contents(
                projects_id, locations_id, plugins_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_plugins_update_style_guide(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        body: GoogleCloudApihubV1StyleGuide | GoogleCloudApihubV1StyleGuideDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1StyleGuide:
        """Update the styleGuide to be used for liniting in by API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            body: The request body.
            update_mask: Optional. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_plugins_update_style_guide(
                projects_id, locations_id, plugins_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    async def apihub_projects_locations_retrieve_api_views(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        view: ViewApigeeProjectsApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1RetrieveApiViewsResponse:
        """Retrieve API views.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. The filter expression.
            page_size: Optional. The maximum number of results to return. Default to 100.
            page_token: Optional. A page token, received from a previous ``RetrieveApiViews`` call. Provide this to
                retrieve the subsequent page.
            view: Required. The view type to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_retrieve_api_views(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                view=view,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_runtime_project_attachments_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1RuntimeProjectAttachment | GoogleCloudApihubV1RuntimeProjectAttachmentDict,
        *,
        runtime_project_attachment_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1RuntimeProjectAttachment:
        """Attaches a runtime project to the host project.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            runtime_project_attachment_id: Required. The ID to use for the Runtime Project Attachment, which will become
                the final component of the Runtime Project Attachment's name. The ID must be the same as the project ID
                of the Google cloud project specified in the runtime_project_attachment.runtime_project field.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_runtime_project_attachments_create(
                projects_id,
                locations_id,
                body,
                runtime_project_attachment_id=runtime_project_attachment_id,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_runtime_project_attachments_delete(
        self,
        projects_id: str,
        locations_id: str,
        runtime_project_attachments_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Delete a runtime project attachment in the API Hub. This call will detach the runtime project from the host
        project.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            runtime_project_attachments_id: Resource name segment (runtimeProjectAttachmentsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_runtime_project_attachments_delete(
                projects_id, locations_id, runtime_project_attachments_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_runtime_project_attachments_get(
        self,
        projects_id: str,
        locations_id: str,
        runtime_project_attachments_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1RuntimeProjectAttachment:
        """Gets a runtime project attachment.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            runtime_project_attachments_id: Resource name segment (runtimeProjectAttachmentsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_runtime_project_attachments_get(
                projects_id, locations_id, runtime_project_attachments_id, request_options=request_options
            ),
        )

    async def apihub_projects_locations_runtime_project_attachments_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse:
        """List runtime projects attached to the host project.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of RuntimeProjectAttachments. A filter expression
                consists of a field name, a comparison operator, and a value for filtering. The value must be a string.
                All standard operators as documented at https://google.aip.dev/160 are supported. The following fields
                in the ``RuntimeProjectAttachment`` are eligible for filtering: * ``name`` - The name of the
                RuntimeProjectAttachment. * ``create_time`` - The time at which the RuntimeProjectAttachment was
                created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. *
                ``runtime_project`` - The Google cloud project associated with the RuntimeProjectAttachment.
            order_by: Optional. Hint for how to order the results.
            page_size: Optional. The maximum number of runtime project attachments to return. The service may return
                fewer than this value. If unspecified, at most 50 runtime project attachments will be returned. The
                maximum value is 1000; values above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListRuntimeProjectAttachments`` call. Provide
                this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided
                to ``ListRuntimeProjectAttachments`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_runtime_project_attachments_list(
                projects_id,
                locations_id,
                filter_=filter_,
                order_by=order_by,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def apihub_projects_locations_search_resources(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1SearchResourcesRequest | GoogleCloudApihubV1SearchResourcesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleCloudApihubV1SearchResourcesResponse:
        """Search across API-Hub resources.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_search_resources(
                projects_id, locations_id, body, request_options=request_options
            ),
        )

    async def apihub_projects_locations_servers_configure_and_deploy_server(
        self,
        projects_id: str,
        locations_id: str,
        body: (
            GoogleCloudApihubV1ConfigureAndDeployServerRequest | GoogleCloudApihubV1ConfigureAndDeployServerRequestDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleLongrunningOperation:
        """Configures and deploys a given server config for given target. Currently this API supports only deploying MCP
        server in Apigee X. For mcp server deployment in apigee X, if there is already a mcp proxy deployed, then this
        method will try to overwrite it by creating new revision i.e. all existing tools will be removed and new set of
        tools will be deployed.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.apihub_projects_locations_servers_configure_and_deploy_server(
                projects_id, locations_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncProjectsWithRawResponse:
        return self._with_raw_response


class ProjectsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def apigee_projects_provision_organization(
        self,
        projects_id: str,
        body: GoogleCloudApigeeV1ProvisionOrganizationRequest | GoogleCloudApigeeV1ProvisionOrganizationRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApigeeProjectsProvisionOrganizationErrorBody]:
        """Provisions a new Apigee organization with a functioning runtime. This is the standard way to create trial
        organizations for a free Apigee trial.

        Args:
            projects_id: Resource name segment (projectsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}:provisionOrganization"),
            path_params=[param[str]("projectsId", projects_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                GoogleCloudApigeeV1ProvisionOrganizationRequest | GoogleCloudApigeeV1ProvisionOrganizationRequestDict
            ](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=apigee_projects_provision_organization_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_addons_get(
        self,
        projects_id: str,
        locations_id: str,
        addons_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Addon, ApihubProjectsLocationsAddonsGetErrorBody]:
        """Get an addon.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            addons_id: Resource name segment (addonsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/addons/{addonsId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("addonsId", addons_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Addon],
            error_mapper=apihub_projects_locations_addons_get_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_addons_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ListAddonsResponse, ApihubProjectsLocationsAddonsListErrorBody]:
        """List addons.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of addons. The only supported filter is
                ``plugin_instance_name``. It can be used to filter addons that are enabled for a given plugin instance.
                The format of the filter is ``plugin_instance_name =
                "projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}"``.
            page_size: Optional. The maximum number of hub addons to return. The service may return fewer than this
                value. If unspecified, at most 50 hub addons will be returned. The maximum value is 1000; values above
                1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListAddons`` call. Provide this to retrieve
                the subsequent page. When paginating, all other parameters (except page_size) provided to ``ListAddons``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/addons"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1ListAddonsResponse],
            error_mapper=apihub_projects_locations_addons_list_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_addons_manage_config(
        self,
        projects_id: str,
        locations_id: str,
        addons_id: str,
        body: GoogleCloudApihubV1ManageAddonConfigRequest | GoogleCloudApihubV1ManageAddonConfigRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsAddonsManageConfigErrorBody]:
        """Manage addon config. This RPC is used for managing the config of the addon. Calling this RPC moves the addon
        into an updating state until the long-running operation succeeds.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            addons_id: Resource name segment (addonsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/addons/{addonsId}:manageConfig"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("addonsId", addons_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                GoogleCloudApihubV1ManageAddonConfigRequest | GoogleCloudApihubV1ManageAddonConfigRequestDict
            ](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=apihub_projects_locations_addons_manage_config_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_api_hub_instances_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1ApiHubInstance | GoogleCloudApihubV1ApiHubInstanceDict,
        *,
        api_hub_instance_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsApiHubInstancesCreateErrorBody]:
        """Provisions instance resources for the API Hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            api_hub_instance_id: Optional. Identifier to assign to the Api Hub instance. Must be unique within scope of
                the parent resource. If the field is not provided, system generated id will be used. This value should
                be 4-40 characters, and valid characters are ``/a-z[0-9]-_/``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("apiHubInstanceId", api_hub_instance_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1ApiHubInstance | GoogleCloudApihubV1ApiHubInstanceDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=apihub_projects_locations_api_hub_instances_create_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_api_hub_instances_delete(
        self,
        projects_id: str,
        locations_id: str,
        api_hub_instances_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsApiHubInstancesDeleteErrorBody]:
        """Deletes the API hub instance. Deleting the API hub instance will also result in the removal of all associated
        runtime project attachments and the host project registration.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            api_hub_instances_id: Resource name segment (apiHubInstancesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances/{apiHubInstancesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apiHubInstancesId", api_hub_instances_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=apihub_projects_locations_api_hub_instances_delete_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_api_hub_instances_get(
        self,
        projects_id: str,
        locations_id: str,
        api_hub_instances_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ApiHubInstance, ApihubProjectsLocationsApiHubInstancesGetErrorBody]:
        """Gets details of a single API Hub instance.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            api_hub_instances_id: Resource name segment (apiHubInstancesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances/{apiHubInstancesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apiHubInstancesId", api_hub_instances_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1ApiHubInstance],
            error_mapper=apihub_projects_locations_api_hub_instances_get_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_api_hub_instances_lookup(
        self, projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[
        GoogleCloudApihubV1LookupApiHubInstanceResponse, ApihubProjectsLocationsApiHubInstancesLookupErrorBody
    ]:
        """Looks up an Api Hub instance in a given Google Cloud project. There will always be only one Api Hub instance
        for a Google Cloud project across all locations.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances:lookup"
            ),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1LookupApiHubInstanceResponse],
            error_mapper=apihub_projects_locations_api_hub_instances_lookup_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_api_hub_instances_patch(
        self,
        projects_id: str,
        locations_id: str,
        api_hub_instances_id: str,
        body: GoogleCloudApihubV1ApiHubInstance | GoogleCloudApihubV1ApiHubInstanceDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsApiHubInstancesPatchErrorBody]:
        """Update an Api Hub instance. The following fields in the ApiHubInstance can be updated: * disable_search *
        vertex_location * agent_registry_sync_config The update_mask should be used to specify the fields being updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            api_hub_instances_id: Resource name segment (apiHubInstancesId).
            body: The request body.
            update_mask: Optional. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances/{apiHubInstancesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apiHubInstancesId", api_hub_instances_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1ApiHubInstance | GoogleCloudApihubV1ApiHubInstanceDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=apihub_projects_locations_api_hub_instances_patch_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_apis_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1Api | GoogleCloudApihubV1ApiDict,
        *,
        api_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Api, ApihubProjectsLocationsApisCreateErrorBody]:
        """Create an API resource in the API hub. Once an API resource is created, versions can be added to it.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            api_id: Optional. The ID to use for the API resource, which will become the final component of the API's
                resource name. This field is optional. * If provided, the same will be used. The service will throw an
                error if the specified id is already used by another API resource in the API hub. * If not provided, a
                system generated id will be used. This value should be 4-500 characters, and valid characters are
                /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/apis"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Api | GoogleCloudApihubV1ApiDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Api],
            error_mapper=apihub_projects_locations_apis_create_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_apis_delete(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        *,
        force: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsApisDeleteErrorBody]:
        """Delete an API resource in the API hub. API can only be deleted if all underlying versions are deleted.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            force: Optional. If set to true, any versions from this API will also be deleted. Otherwise, the request
                will only work if the API has no versions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
            ],
            query_params=[param[bool | None]("force", force)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=apihub_projects_locations_apis_delete_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_apis_get(
        self, projects_id: str, locations_id: str, apis_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GoogleCloudApihubV1Api, ApihubProjectsLocationsApisGetErrorBody]:
        """Get API resource details including the API versions contained in it.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Api],
            error_mapper=apihub_projects_locations_apis_get_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_apis_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ListApisResponse, ApihubProjectsLocationsApisListErrorBody]:
        r"""List API resources in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of ApiResources. A filter expression consists of a
                field name, a comparison operator, and a value for filtering. The value must be a string. The comparison
                operator must be one of: ``<``, ``>``, ``:`` or ``=``. Filters are not case sensitive. The following
                fields in the ``ApiResource`` are eligible for filtering: * ``owner.email`` - The email of the team
                which owns the ApiResource. Allowed comparison operators: ``=``. * ``create_time`` - The time at which
                the ApiResource was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339]
                format. Allowed comparison operators: ``>`` and ``<``. * ``display_name`` - The display name of the
                ApiResource. Allowed comparison operators: ``=``. * ``target_user.enum_values.values.id`` - The allowed
                value id of the target users attribute associated with the ApiResource. Allowed comparison operator is
                ``:``. * ``target_user.enum_values.values.display_name`` - The allowed value display name of the target
                users attribute associated with the ApiResource. Allowed comparison operator is ``:``. *
                ``team.enum_values.values.id`` - The allowed value id of the team attribute associated with the
                ApiResource. Allowed comparison operator is ``:``. * ``team.enum_values.values.display_name`` - The
                allowed value display name of the team attribute associated with the ApiResource. Allowed comparison
                operator is ``:``. * ``business_unit.enum_values.values.id`` - The allowed value id of the business unit
                attribute associated with the ApiResource. Allowed comparison operator is ``:``. *
                ``business_unit.enum_values.values.display_name`` - The allowed value display name of the business unit
                attribute associated with the ApiResource. Allowed comparison operator is ``:``. *
                ``maturity_level.enum_values.values.id`` - The allowed value id of the maturity level attribute
                associated with the ApiResource. Allowed comparison operator is ``:``. *
                ``maturity_level.enum_values.values.display_name`` - The allowed value display name of the maturity
                level attribute associated with the ApiResource. Allowed comparison operator is ``:``. *
                ``api_style.enum_values.values.id`` - The allowed value id of the api style attribute associated with
                the ApiResource. Allowed comparison operator is ``:``. * ``api_style.enum_values.values.display_name`` -
                The allowed value display name of the api style attribute associated with the ApiResource. Allowed
                comparison operator is ``:``. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.id`` - The allowed value id of the user defined
                enum attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.display_name`` - The allowed value display name
                of the user defined enum attribute associated with the Resource. Allowed comparison operator is ``:``.
                Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user
                defined enum attribute enum name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.string_values.values`` - The allowed value of the user defined
                string attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-string is a placeholder that can be replaced with any user defined string
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.json_values.values`` - The allowed value of the user defined JSON
                attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute
                name. A filter function is also supported in the filter string. The filter function is ``id(name)``. The
                ``id(name)`` function returns the id of the resource name. For example, ``id(name) = \"api-1\"`` is
                equivalent to ``name = \"projects/test-project-id/locations/test-location-id/apis/api-1\"`` provided the
                parent is ``projects/test-project-id/locations/test-location-id``. Another supported filter function is
                ``plugins(source_metadata)``. This function filters for resources that are associated with a specific
                plugin. For example, ``plugins(source_metadata) :
                "projects/test-project-id/locations/test-location-id/plugins/test-plugin-id"`` will return resources
                sourced from the given plugin. Expressions are combined with either ``AND`` logic operator or ``OR``
                logical operator but not both of them together i.e. only one of the ``AND`` or ``OR`` operator can be
                used throughout the filter string and both the operators cannot be used together. No other logical
                operators are supported. At most three filter fields are allowed in the filter string and if provided
                more than that then ``INVALID_ARGUMENT`` error is returned by the API. Here are a few examples: *
                ``owner.email = \"apihub@google.com\"`` - - The owner team email is _apihub@google.com_. * ``owner.email
                = \"apihub@google.com\" AND create_time < \"2021-08-15T14:50:00Z\" AND create_time >
                \"2021-08-10T12:00:00Z\"`` - The owner team email is _apihub@google.com_ and the api was created before
                _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. * ``owner.email = \"apihub@google.com\"
                OR team.enum_values.values.id: apihub-team-id`` - The filter string specifies the APIs where the owner
                team email is _apihub@google.com_ or the id of the allowed value associated with the team attribute is
                _apihub-team-id_. * ``owner.email = \"apihub@google.com\" OR team.enum_values.values.display_name:
                ApiHub Team`` - The filter string specifies the APIs where the owner team email is _apihub@google.com_
                or the display name of the allowed value associated with the team attribute is ``ApiHub Team``. *
                ``owner.email = \"apihub@google.com\" AND
                attributes.projects/test-project-id/locations/test-location-id/
                attributes/17650f90-4a29-4971-b3c0-d5532da3764b.enum_values.values.id: test_enum_id AND
                attributes.projects/test-project-id/locations/test-location-id/
                attributes/1765\0f90-4a29-5431-b3d0-d5532da3764c.string_values.values: test_string_value`` - The filter
                string specifies the APIs where the owner team email is _apihub@google.com_ and the id of the allowed
                value associated with the user defined attribute of type enum is _test_enum_id_ and the value of the
                user defined attribute of type string is _test_..
            page_size: Optional. The maximum number of API resources to return. The service may return fewer than this
                value. If unspecified, at most 50 Apis will be returned. The maximum value is 1000; values above 1000
                will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListApis`` call. Provide this to retrieve the
                subsequent page. When paginating, all other parameters (except page_size) provided to ``ListApis`` must
                match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/apis"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1ListApisResponse],
            error_mapper=apihub_projects_locations_apis_list_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_apis_patch(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        body: GoogleCloudApihubV1Api | GoogleCloudApihubV1ApiDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Api, ApihubProjectsLocationsApisPatchErrorBody]:
        """Update an API resource in the API hub. The following fields in the API can be updated: * display_name *
        description * owner * documentation * target_user * team * business_unit * maturity_level * api_style *
        attributes * fingerprint The update_mask should be used to specify the fields being updated. Updating the owner
        field requires complete owner message and updates both owner and email fields.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Api | GoogleCloudApihubV1ApiDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Api],
            error_mapper=apihub_projects_locations_apis_patch_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_apis_versions_create(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        body: GoogleCloudApihubV1Version | GoogleCloudApihubV1VersionDict,
        *,
        version_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Version, ApihubProjectsLocationsApisVersionsCreateErrorBody]:
        """Create an API version for an API resource in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            body: The request body.
            version_id: Optional. The ID to use for the API version, which will become the final component of the
                version's resource name. This field is optional. * If provided, the same will be used. The service will
                throw an error if the specified id is already used by another version in the API resource. * If not
                provided, a system generated id will be used. This value should be 4-500 characters, overall resource
                name which will be of format ``projects/{project}/locations/{location}/apis/{api}/versions/{version}``,
                its length is limited to 700 characters and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
            ],
            query_params=[param[str | None]("versionId", version_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Version | GoogleCloudApihubV1VersionDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Version],
            error_mapper=apihub_projects_locations_apis_versions_create_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_apis_versions_definitions_get(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        definitions_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Definition, ApihubProjectsLocationsApisVersionsDefinitionsGetErrorBody]:
        """Get details about a definition in an API version.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            definitions_id: Resource name segment (definitionsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/definitions/{definitionsId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
                param[str]("definitionsId", definitions_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Definition],
            error_mapper=apihub_projects_locations_apis_versions_definitions_get_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_apis_versions_delete(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        *,
        force: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsApisVersionsDeleteErrorBody]:
        """Delete an API version. Version can only be deleted if all underlying specs, operations, definitions and
        linked deployments are deleted.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            force: Optional. If set to true, any specs from this version will also be deleted. Otherwise, the request
                will only work if the version has no specs.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
            ],
            query_params=[param[bool | None]("force", force)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=apihub_projects_locations_apis_versions_delete_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_apis_versions_get(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Version, ApihubProjectsLocationsApisVersionsGetErrorBody]:
        """Get details about the API version of an API resource. This will include information about the specs and
        operations present in the API version as well as the deployments linked to it.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Version],
            error_mapper=apihub_projects_locations_apis_versions_get_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_apis_versions_list(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ListVersionsResponse, ApihubProjectsLocationsApisVersionsListErrorBody]:
        r"""List API versions of an API resource in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            filter_: Optional. An expression that filters the list of Versions. A filter expression consists of a field
                name, a comparison operator, and a value for filtering. The value must be a string, a number, or a
                boolean. The comparison operator must be one of: ``<``, ``>`` or ``=``. Filters are not case sensitive.
                The following fields in the ``Version`` are eligible for filtering: * ``display_name`` - The display
                name of the Version. Allowed comparison operators: ``=``. * ``create_time`` - The time at which the
                Version was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format.
                Allowed comparison operators: ``>`` and ``<``. * ``lifecycle.enum_values.values.id`` - The allowed value
                id of the lifecycle attribute associated with the Version. Allowed comparison operators: ``:``. *
                ``lifecycle.enum_values.values.display_name`` - The allowed value display name of the lifecycle
                attribute associated with the Version. Allowed comparison operators: ``:``. *
                ``compliance.enum_values.values.id`` - The allowed value id of the compliances attribute associated with
                the Version. Allowed comparison operators: ``:``. * ``compliance.enum_values.values.display_name`` - The
                allowed value display name of the compliances attribute associated with the Version. Allowed comparison
                operators: ``:``. * ``accreditation.enum_values.values.id`` - The allowed value id of the accreditations
                attribute associated with the Version. Allowed comparison operators: ``:``. *
                ``accreditation.enum_values.values.display_name`` - The allowed value display name of the accreditations
                attribute associated with the Version. Allowed comparison operators: ``:``. *
                ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.id`` - The allowed value id of the user defined
                enum attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.display_name`` - The allowed value display name
                of the user defined enum attribute associated with the Resource. Allowed comparison operator is ``:``.
                Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user
                defined enum attribute enum name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.string_values.values`` - The allowed value of the user defined
                string attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-string is a placeholder that can be replaced with any user defined string
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.json_values.values`` - The allowed value of the user defined JSON
                attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute
                name. Expressions are combined with either ``AND`` logic operator or ``OR`` logical operator but not
                both of them together i.e. only one of the ``AND`` or ``OR`` operator can be used throughout the filter
                string and both the operators cannot be used together. No other logical operators are supported. At most
                three filter fields are allowed in the filter string and if provided more than that then
                ``INVALID_ARGUMENT`` error is returned by the API. Here are a few examples: *
                ``lifecycle.enum_values.values.id: preview-id`` - The filter string specifies that the id of the allowed
                value associated with the lifecycle attribute of the Version is _preview-id_. *
                ``lifecycle.enum_values.values.display_name: \"Preview Display Name\"`` - The filter string specifies
                that the display name of the allowed value associated with the lifecycle attribute of the Version is
                ``Preview Display Name``. * ``lifecycle.enum_values.values.id: preview-id AND create_time <
                \"2021-08-15T14:50:00Z\" AND create_time > \"2021-08-10T12:00:00Z\"`` - The id of the allowed value
                associated with the lifecycle attribute of the Version is _preview-id_ and it was created before
                _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. * ``compliance.enum_values.values.id:
                gdpr-id OR compliance.enum_values.values.id: pci-dss-id`` - The id of the allowed value associated with
                the compliance attribute is _gdpr-id_ or _pci-dss-id_. * ``lifecycle.enum_values.values.id: preview-id
                AND attributes.projects/test-project-id/locations/test-location-id/
                attributes/17650f90-4a29-4971-b3c0-d5532da3764b.string_values.values: test`` - The filter string
                specifies that the id of the allowed value associated with the lifecycle attribute of the Version is
                _preview-id_ and the value of the user defined attribute of type string is _test_.
            page_size: Optional. The maximum number of versions to return. The service may return fewer than this value.
                If unspecified, at most 50 versions will be returned. The maximum value is 1000; values above 1000 will
                be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListVersions`` call. Provide this to retrieve
                the subsequent page. When paginating, all other parameters (except page_size) provided to
                ``ListVersions`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
            ],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1ListVersionsResponse],
            error_mapper=apihub_projects_locations_apis_versions_list_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_apis_versions_operations_create(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        body: GoogleCloudApihubV1ApiOperation | GoogleCloudApihubV1ApiOperationDict,
        *,
        api_operation_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ApiOperation, ApihubProjectsLocationsApisVersionsOperationsCreateErrorBody]:
        """Create an apiOperation in an API version. An apiOperation can be created only if the version has no
        apiOperations which were created by parsing a spec.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            body: The request body.
            api_operation_id: Optional. The ID to use for the operation resource, which will become the final component
                of the operation's resource name. This field is optional. * If provided, the same will be used. The
                service will throw an error if the specified id is already used by another operation resource in the API
                hub. * If not provided, a system generated id will be used. This value should be 4-500 characters,
                overall resource name which will be of format
                ``projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}``, its
                length is limited to 1000 characters, and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
            ],
            query_params=[param[str | None]("apiOperationId", api_operation_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1ApiOperation | GoogleCloudApihubV1ApiOperationDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1ApiOperation],
            error_mapper=apihub_projects_locations_apis_versions_operations_create_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_apis_versions_operations_delete(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        operations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsApisVersionsOperationsDeleteErrorBody]:
        """Delete an operation in an API version and we can delete only the operations created via create API. If the
        operation was created by parsing the spec, then it can be deleted by editing or deleting the spec. Deleting an
        operation will also remove any links between the operation and deployments.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations/{operationsId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
                param[str]("operationsId", operations_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=apihub_projects_locations_apis_versions_operations_delete_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_apis_versions_operations_get(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        operations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ApiOperation, ApihubProjectsLocationsApisVersionsOperationsGetErrorBody]:
        """Get details about a particular operation in API version.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations/{operationsId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
                param[str]("operationsId", operations_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1ApiOperation],
            error_mapper=apihub_projects_locations_apis_versions_operations_get_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_apis_versions_operations_list(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1ListApiOperationsResponse, ApihubProjectsLocationsApisVersionsOperationsListErrorBody
    ]:
        r"""List operations in an API version.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            filter_: Optional. An expression that filters the list of ApiOperations. A filter expression consists of a
                field name, a comparison operator, and a value for filtering. The value must be a string or a boolean.
                The comparison operator must be one of: ``<``, ``>`` or ``=``. Filters are not case sensitive. The
                following fields in the ``ApiOperation`` are eligible for filtering: * ``name`` - The ApiOperation
                resource name. Allowed comparison operators: ``=``. * ``details.http_operation.path.path`` - The http
                operation's complete path relative to server endpoint. Allowed comparison operators: ``=``. *
                ``details.http_operation.method`` - The http operation method type. Allowed comparison operators: ``=``.
                * ``details.deprecated`` - Indicates if the ApiOperation is deprecated. Allowed values are True / False
                indicating the deprycation status of the ApiOperation. Allowed comparison operators: ``=``. *
                ``create_time`` - The time at which the ApiOperation was created. The value should be in the
                (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: ``>`` and ``<``. *
                ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.id`` - The allowed value id of the user defined
                enum attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.display_name`` - The allowed value display name
                of the user defined enum attribute associated with the Resource. Allowed comparison operator is ``:``.
                Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user
                defined enum attribute enum name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.string_values.values`` - The allowed value of the user defined
                string attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-string is a placeholder that can be replaced with any user defined string
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.json_values.values`` - The allowed value of the user defined JSON
                attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute
                name. Expressions are combined with either ``AND`` logic operator or ``OR`` logical operator but not
                both of them together i.e. only one of the ``AND`` or ``OR`` operator can be used throughout the filter
                string and both the operators cannot be used together. No other logical operators are supported. At most
                three filter fields are allowed in the filter string and if provided more than that then
                ``INVALID_ARGUMENT`` error is returned by the API. Here are a few examples: * ``details.deprecated =
                True`` - The ApiOperation is deprecated. * ``details.http_operation.method = GET AND create_time <
                \"2021-08-15T14:50:00Z\" AND create_time > \"2021-08-10T12:00:00Z\"`` - The method of the http operation
                of the ApiOperation is _GET_ and the spec was created before _2021-08-15 14:50:00 UTC_ and after
                _2021-08-10 12:00:00 UTC_. * ``details.http_operation.method = GET OR details.http_operation.method =
                POST``. - The http operation of the method of ApiOperation is _GET_ or _POST_. * ``details.deprecated =
                True AND attributes.projects/test-project-id/locations/test-location-id/
                attributes/17650f90-4a29-4971-b3c0-d5532da3764b.string_values.values: test`` - The filter string
                specifies that the ApiOperation is deprecated and the value of the user defined attribute of type string
                is _test_.
            page_size: Optional. The maximum number of operations to return. The service may return fewer than this
                value. If unspecified, at most 50 operations will be returned. The maximum value is 1000; values above
                1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListApiOperations`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to
                ``ListApiOperations`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
            ],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1ListApiOperationsResponse],
            error_mapper=apihub_projects_locations_apis_versions_operations_list_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_apis_versions_operations_patch(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        operations_id: str,
        body: GoogleCloudApihubV1ApiOperation | GoogleCloudApihubV1ApiOperationDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ApiOperation, ApihubProjectsLocationsApisVersionsOperationsPatchErrorBody]:
        """Update an operation in an API version. The following fields in the ApiOperation resource can be updated: *
        details.description * details.documentation * details.http_operation.path * details.http_operation.method *
        details.deprecated * attributes * details.mcp_tool.title * details.mcp_tool.description *
        details.mcp_tool.input_schema * details.mcp_tool.output_schema * details.input_schema * details.output_schema *
        details.mcp_tool.annotations.title * details.mcp_tool.annotations.read_only_hint *
        details.mcp_tool.annotations.destructive_hint * details.mcp_tool.annotations.idempotent_hint *
        details.mcp_tool.annotations.open_world_hint * details.mcp_tool.annotations.additional_hints The update_mask
        should be used to specify the fields being updated. An operation can be updated only if the operation was
        created via CreateApiOperation API. If the operation was created by parsing the spec, then it can be edited by
        updating the spec.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            operations_id: Resource name segment (operationsId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations/{operationsId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
                param[str]("operationsId", operations_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1ApiOperation | GoogleCloudApihubV1ApiOperationDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1ApiOperation],
            error_mapper=apihub_projects_locations_apis_versions_operations_patch_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_apis_versions_patch(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        body: GoogleCloudApihubV1Version | GoogleCloudApihubV1VersionDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Version, ApihubProjectsLocationsApisVersionsPatchErrorBody]:
        """Update API version. The following fields in the version can be updated currently: * display_name *
        description * documentation * deployments * lifecycle * compliance * accreditation * attributes The update_mask
        should be used to specify the fields being updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Version | GoogleCloudApihubV1VersionDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Version],
            error_mapper=apihub_projects_locations_apis_versions_patch_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_apis_versions_specs_create(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        body: GoogleCloudApihubV1Spec | GoogleCloudApihubV1SpecDict,
        *,
        spec_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Spec, ApihubProjectsLocationsApisVersionsSpecsCreateErrorBody]:
        """Add a spec to an API version in the API hub. Multiple specs can be added to an API version. Note, while
        adding a spec, at least one of ``contents`` or ``source_uri`` must be provided. If ``contents`` is provided,
        then ``spec_type`` must also be provided. On adding a spec with contents to the version, the operations present
        in it will be added to the version.Note that the file contents in the spec should be of the same type as defined
        in the ``projects/{project}/locations/{location}/attributes/system-spec-type`` attribute associated with spec
        resource. Note that specs of various types can be uploaded, however parsing of details is supported for OpenAPI
        spec currently. In order to access the information parsed from the spec, use the GetSpec method. In order to
        access the raw contents for a particular spec, use the GetSpecContents method. In order to access the operations
        parsed from the spec, use the ListAPIOperations method.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            body: The request body.
            spec_id: Optional. The ID to use for the spec, which will become the final component of the spec's resource
                name. This field is optional. * If provided, the same will be used. The service will throw an error if
                the specified id is already used by another spec in the API resource. * If not provided, a system
                generated id will be used. This value should be 4-500 characters, overall resource name which will be of
                format ``projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}``, its
                length is limited to 1000 characters and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
            ],
            query_params=[param[str | None]("specId", spec_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Spec | GoogleCloudApihubV1SpecDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Spec],
            error_mapper=apihub_projects_locations_apis_versions_specs_create_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_apis_versions_specs_delete(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        specs_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsApisVersionsSpecsDeleteErrorBody]:
        """Delete a spec. Deleting a spec will also delete the associated operations from the version and remove any
        links between the spec and deployments.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            specs_id: Resource name segment (specsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
                param[str]("specsId", specs_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=apihub_projects_locations_apis_versions_specs_delete_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_apis_versions_specs_fetch_additional_spec_content(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        specs_id: str,
        *,
        spec_content_type: SpecContentType1OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1FetchAdditionalSpecContentResponse,
        ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentErrorBody,
    ]:
        """Fetch additional spec content.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            specs_id: Resource name segment (specsId).
            spec_content_type: Optional. The type of the spec contents to be retrieved.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}:fetchAdditionalSpecContent",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
                param[str]("specsId", specs_id),
            ],
            query_params=[param[SpecContentType1OrStr | None]("specContentType", spec_content_type)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1FetchAdditionalSpecContentResponse],
            error_mapper=apihub_projects_locations_apis_versions_specs_fetch_additional_spec_content_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_apis_versions_specs_get(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        specs_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Spec, ApihubProjectsLocationsApisVersionsSpecsGetErrorBody]:
        """Get details about the information parsed from a spec. Note that this method does not return the raw spec
        contents. Use GetSpecContents method to retrieve the same.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            specs_id: Resource name segment (specsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
                param[str]("specsId", specs_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Spec],
            error_mapper=apihub_projects_locations_apis_versions_specs_get_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_apis_versions_specs_get_contents(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        specs_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1SpecContents, ApihubProjectsLocationsApisVersionsSpecsGetContentsErrorBody]:
        """Get spec contents.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            specs_id: Resource name segment (specsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}:contents",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
                param[str]("specsId", specs_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1SpecContents],
            error_mapper=apihub_projects_locations_apis_versions_specs_get_contents_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_apis_versions_specs_lint(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        specs_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsApisVersionsSpecsLintErrorBody]:
        """Lints the requested spec and updates the corresponding API Spec with the lint response. This lint response
        will be available in all subsequent Get and List Spec calls to Core service.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            specs_id: Resource name segment (specsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}:lint",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
                param[str]("specsId", specs_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=apihub_projects_locations_apis_versions_specs_lint_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_apis_versions_specs_list(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ListSpecsResponse, ApihubProjectsLocationsApisVersionsSpecsListErrorBody]:
        r"""List specs corresponding to a particular API resource.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            filter_: Optional. An expression that filters the list of Specs. A filter expression consists of a field
                name, a comparison operator, and a value for filtering. The value must be a string. The comparison
                operator must be one of: ``<``, ``>``, ``:`` or ``=``. Filters are not case sensitive. The following
                fields in the ``Spec`` are eligible for filtering: * ``display_name`` - The display name of the Spec.
                Allowed comparison operators: ``=``. * ``create_time`` - The time at which the Spec was created. The
                value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison
                operators: ``>`` and ``<``. * ``spec_type.enum_values.values.id`` - The allowed value id of the
                spec_type attribute associated with the Spec. Allowed comparison operators: ``:``. *
                ``spec_type.enum_values.values.display_name`` - The allowed value display name of the spec_type
                attribute associated with the Spec. Allowed comparison operators: ``:``. *
                ``lint_response.json_values.values`` - The json value of the lint_response attribute associated with the
                Spec. Allowed comparison operators: ``:``. * ``mime_type`` - The MIME type of the Spec. Allowed
                comparison operators: ``=``. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.id`` - The allowed value id of the user defined
                enum attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.display_name`` - The allowed value display name
                of the user defined enum attribute associated with the Resource. Allowed comparison operator is ``:``.
                Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user
                defined enum attribute enum name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.string_values.values`` - The allowed value of the user defined
                string attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-string is a placeholder that can be replaced with any user defined string
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.json_values.values`` - The allowed value of the user defined JSON
                attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute
                name. Expressions are combined with either ``AND`` logic operator or ``OR`` logical operator but not
                both of them together i.e. only one of the ``AND`` or ``OR`` operator can be used throughout the filter
                string and both the operators cannot be used together. No other logical operators are supported. At most
                three filter fields are allowed in the filter string and if provided more than that then
                ``INVALID_ARGUMENT`` error is returned by the API. Here are a few examples: *
                ``spec_type.enum_values.values.id: rest-id`` - The filter string specifies that the id of the allowed
                value associated with the spec_type attribute is _rest-id_. *
                ``spec_type.enum_values.values.display_name: \"Rest Display Name\"`` - The filter string specifies that
                the display name of the allowed value associated with the spec_type attribute is ``Rest Display Name``.
                * ``spec_type.enum_values.values.id: grpc-id AND create_time < \"2021-08-15T14:50:00Z\" AND create_time
                > \"2021-08-10T12:00:00Z\"`` - The id of the allowed value associated with the spec_type attribute is
                _grpc-id_ and the spec was created before _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_.
                * ``spec_type.enum_values.values.id: rest-id OR spec_type.enum_values.values.id: grpc-id`` - The id of
                the allowed value associated with the spec_type attribute is _rest-id_ or _grpc-id_. *
                ``spec_type.enum_values.values.id: rest-id AND
                attributes.projects/test-project-id/locations/test-location-id/
                attributes/17650f90-4a29-4971-b3c0-d5532da3764b.enum_values.values.id: test`` - The filter string
                specifies that the id of the allowed value associated with the spec_type attribute is _rest-id_ and the
                id of the allowed value associated with the user defined attribute of type enum is _test_.
            page_size: Optional. The maximum number of specs to return. The service may return fewer than this value. If
                unspecified, at most 50 specs will be returned. The maximum value is 1000; values above 1000 will be
                coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListSpecs`` call. Provide this to retrieve
                the subsequent page. When paginating, all other parameters provided to ``ListSpecs`` must match the call
                that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
            ],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1ListSpecsResponse],
            error_mapper=apihub_projects_locations_apis_versions_specs_list_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_apis_versions_specs_patch(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        specs_id: str,
        body: GoogleCloudApihubV1Spec | GoogleCloudApihubV1SpecDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Spec, ApihubProjectsLocationsApisVersionsSpecsPatchErrorBody]:
        """Update spec. The following fields in the spec can be updated: * display_name * source_uri * lint_response *
        attributes * contents * spec_type In case of an OAS spec, updating spec contents can lead to: 1. Creation,
        deletion and update of operations. 2. Creation, deletion and update of definitions. 3. Update of other info
        parsed out from the new spec. In case of contents or source_uri being present in update mask, spec_type must
        also be present. Also, spec_type can not be present in update mask if contents or source_uri is not present. The
        update_mask should be used to specify the fields being updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            specs_id: Resource name segment (specsId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
                param[str]("specsId", specs_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Spec | GoogleCloudApihubV1SpecDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Spec],
            error_mapper=apihub_projects_locations_apis_versions_specs_patch_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_attributes_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1Attribute | GoogleCloudApihubV1AttributeDict,
        *,
        attribute_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Attribute, ApihubProjectsLocationsAttributesCreateErrorBody]:
        """Create a user defined attribute. Certain pre defined attributes are already created by the API hub. These
        attributes will have type as ``SYSTEM_DEFINED`` and can be listed via ListAttributes method. Allowed values for
        the same can be updated via UpdateAttribute method.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            attribute_id: Optional. The ID to use for the attribute, which will become the final component of the
                attribute's resource name. This field is optional. * If provided, the same will be used. The service
                will throw an error if the specified id is already used by another attribute resource in the API hub. *
                If not provided, a system generated id will be used. This value should be 4-500 characters, and valid
                characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/attributes"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("attributeId", attribute_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Attribute | GoogleCloudApihubV1AttributeDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Attribute],
            error_mapper=apihub_projects_locations_attributes_create_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_attributes_delete(
        self,
        projects_id: str,
        locations_id: str,
        attributes_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsAttributesDeleteErrorBody]:
        """Delete an attribute. Note: System defined attributes cannot be deleted. All associations of the attribute
        being deleted with any API hub resource will also get deleted.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            attributes_id: Resource name segment (attributesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/attributes/{attributesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("attributesId", attributes_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=apihub_projects_locations_attributes_delete_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_attributes_get(
        self,
        projects_id: str,
        locations_id: str,
        attributes_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Attribute, ApihubProjectsLocationsAttributesGetErrorBody]:
        """Get details about the attribute.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            attributes_id: Resource name segment (attributesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/attributes/{attributesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("attributesId", attributes_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Attribute],
            error_mapper=apihub_projects_locations_attributes_get_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_attributes_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ListAttributesResponse, ApihubProjectsLocationsAttributesListErrorBody]:
        r"""List all attributes.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of Attributes. A filter expression consists of a
                field name, a comparison operator, and a value for filtering. The value must be a string or a boolean.
                The comparison operator must be one of: ``<``, ``>`` or ``=``. Filters are not case sensitive. The
                following fields in the ``Attribute`` are eligible for filtering: * ``display_name`` - The display name
                of the Attribute. Allowed comparison operators: ``=``. * ``definition_type`` - The definition type of
                the attribute. Allowed comparison operators: ``=``. * ``scope`` - The scope of the attribute. Allowed
                comparison operators: ``=``. * ``data_type`` - The type of the data of the attribute. Allowed comparison
                operators: ``=``. * ``mandatory`` - Denotes whether the attribute is mandatory or not. Allowed
                comparison operators: ``=``. * ``create_time`` - The time at which the Attribute was created. The value
                should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators:
                ``>`` and ``<``. Expressions are combined with either ``AND`` logic operator or ``OR`` logical operator
                but not both of them together i.e. only one of the ``AND`` or ``OR`` operator can be used throughout the
                filter string and both the operators cannot be used together. No other logical operators are supported.
                At most three filter fields are allowed in the filter string and if provided more than that then
                ``INVALID_ARGUMENT`` error is returned by the API. Here are a few examples: * ``display_name =
                production`` - - The display name of the attribute is _production_. * ``(display_name = production) AND
                (create_time < \"2021-08-15T14:50:00Z\") AND (create_time > \"2021-08-10T12:00:00Z\")`` - The display
                name of the attribute is _production_ and the attribute was created before _2021-08-15 14:50:00 UTC_ and
                after _2021-08-10 12:00:00 UTC_. * ``display_name = production OR scope = api`` - The attribute where
                the display name is _production_ or the scope is _api_.
            page_size: Optional. The maximum number of attribute resources to return. The service may return fewer than
                this value. If unspecified, at most 50 attributes will be returned. The maximum value is 1000; values
                above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListAttributes`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListAttributes`` must
                match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/attributes"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1ListAttributesResponse],
            error_mapper=apihub_projects_locations_attributes_list_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_attributes_patch(
        self,
        projects_id: str,
        locations_id: str,
        attributes_id: str,
        body: GoogleCloudApihubV1Attribute | GoogleCloudApihubV1AttributeDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Attribute, ApihubProjectsLocationsAttributesPatchErrorBody]:
        """Update the attribute. The following fields in the Attribute resource can be updated: * display_name The
        display name can be updated for user defined attributes only. * description The description can be updated for
        user defined attributes only. * allowed_values To update the list of allowed values, clients need to use the
        fetched list of allowed values and add or remove values to or from the same list. The mutable allowed values can
        be updated for both user defined and System defined attributes. The immutable allowed values cannot be updated
        or deleted. The updated list of allowed values cannot be empty. If an allowed value that is already used by some
        resource's attribute is deleted, then the association between the resource and the attribute value will also be
        deleted. * cardinality The cardinality can be updated for user defined attributes only. Cardinality can only be
        increased during an update. The update_mask should be used to specify the fields being updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            attributes_id: Resource name segment (attributesId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/attributes/{attributesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("attributesId", attributes_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Attribute | GoogleCloudApihubV1AttributeDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Attribute],
            error_mapper=apihub_projects_locations_attributes_patch_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_collect_api_data(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1CollectApiDataRequest | GoogleCloudApihubV1CollectApiDataRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsCollectApiDataErrorBody]:
        """Collect API data from a source and push it to Hub's collect layer.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}:collectApiData"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1CollectApiDataRequest | GoogleCloudApihubV1CollectApiDataRequestDict](
                body
            ),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=apihub_projects_locations_collect_api_data_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_curations_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1Curation | GoogleCloudApihubV1CurationDict,
        *,
        curation_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Curation, ApihubProjectsLocationsCurationsCreateErrorBody]:
        """Create a curation resource in the API hub. Once a curation resource is created, plugin instances can start
        using it.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            curation_id: Optional. The ID to use for the curation resource, which will become the final component of the
                curations's resource name. This field is optional. * If provided, the same will be used. The service
                will throw an error if the specified ID is already used by another curation resource in the API hub. *
                If not provided, a system generated ID will be used. This value should be 4-500 characters, and valid
                characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/curations"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("curationId", curation_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Curation | GoogleCloudApihubV1CurationDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Curation],
            error_mapper=apihub_projects_locations_curations_create_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_curations_delete(
        self,
        projects_id: str,
        locations_id: str,
        curations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsCurationsDeleteErrorBody]:
        """Delete a curation resource in the API hub. A curation can only be deleted if it's not being used by any
        plugin instance.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            curations_id: Resource name segment (curationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/curations/{curationsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("curationsId", curations_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=apihub_projects_locations_curations_delete_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_curations_get(
        self,
        projects_id: str,
        locations_id: str,
        curations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Curation, ApihubProjectsLocationsCurationsGetErrorBody]:
        """Get curation resource details.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            curations_id: Resource name segment (curationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/curations/{curationsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("curationsId", curations_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Curation],
            error_mapper=apihub_projects_locations_curations_get_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_curations_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ListCurationsResponse, ApihubProjectsLocationsCurationsListErrorBody]:
        r"""List curation resources in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of curation resources. A filter expression consists
                of a field name, a comparison operator, and a value for filtering. The value must be a string. The
                comparison operator must be one of: ``<``, ``>``, ``:`` or ``=``. Filters are case insensitive. The
                following fields in the ``curation resource`` are eligible for filtering: * ``create_time`` - The time
                at which the curation was created. The value should be in the
                (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: ``>`` and ``<``. *
                ``display_name`` - The display name of the curation. Allowed comparison operators: ``=``. * ``state`` -
                The state of the curation. Allowed comparison operators: ``=``. Expressions are combined with either
                ``AND`` logic operator or ``OR`` logical operator but not both of them together i.e. only one of the
                ``AND`` or ``OR`` operator can be used throughout the filter string and both the operators cannot be
                used together. No other logical operators are supported. At most three filter fields are allowed in the
                filter string and if provided more than that then ``INVALID_ARGUMENT`` error is returned by the API.
                Here are a few examples: * ``create_time < \"2021-08-15T14:50:00Z\" AND create_time >
                \"2021-08-10T12:00:00Z\"`` - The curation resource was created before _2021-08-15 14:50:00 UTC_ and
                after _2021-08-10 12:00:00 UTC_.
            page_size: Optional. The maximum number of curation resources to return. The service may return fewer than
                this value. If unspecified, at most 50 curations will be returned. The maximum value is 1000; values
                above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListCurations`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to
                ``ListCurations`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/curations"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1ListCurationsResponse],
            error_mapper=apihub_projects_locations_curations_list_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_curations_patch(
        self,
        projects_id: str,
        locations_id: str,
        curations_id: str,
        body: GoogleCloudApihubV1Curation | GoogleCloudApihubV1CurationDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Curation, ApihubProjectsLocationsCurationsPatchErrorBody]:
        """Update a curation resource in the API hub. The following fields in the curation can be updated: *
        display_name * description The update_mask should be used to specify the fields being updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            curations_id: Resource name segment (curationsId).
            body: The request body.
            update_mask: Optional. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/curations/{curationsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("curationsId", curations_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Curation | GoogleCloudApihubV1CurationDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Curation],
            error_mapper=apihub_projects_locations_curations_patch_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_dependencies_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1Dependency | GoogleCloudApihubV1DependencyDict,
        *,
        dependency_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Dependency, ApihubProjectsLocationsDependenciesCreateErrorBody]:
        """Create a dependency between two entities in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            dependency_id: Optional. The ID to use for the dependency resource, which will become the final component of
                the dependency's resource name. This field is optional. * If provided, the same will be used. The
                service will throw an error if duplicate id is provided by the client. * If not provided, a system
                generated id will be used. This value should be 4-500 characters, and valid characters are
                ``a-z[0-9]-_``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/dependencies"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("dependencyId", dependency_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Dependency | GoogleCloudApihubV1DependencyDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Dependency],
            error_mapper=apihub_projects_locations_dependencies_create_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_dependencies_delete(
        self,
        projects_id: str,
        locations_id: str,
        dependencies_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsDependenciesDeleteErrorBody]:
        """Delete the dependency resource.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            dependencies_id: Resource name segment (dependenciesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/dependencies/{dependenciesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("dependenciesId", dependencies_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=apihub_projects_locations_dependencies_delete_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_dependencies_get(
        self,
        projects_id: str,
        locations_id: str,
        dependencies_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Dependency, ApihubProjectsLocationsDependenciesGetErrorBody]:
        """Get details about a dependency resource in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            dependencies_id: Resource name segment (dependenciesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/dependencies/{dependenciesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("dependenciesId", dependencies_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Dependency],
            error_mapper=apihub_projects_locations_dependencies_get_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_dependencies_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ListDependenciesResponse, ApihubProjectsLocationsDependenciesListErrorBody]:
        r"""List dependencies based on the provided filter and pagination parameters.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of Dependencies. A filter expression consists of a
                field name, a comparison operator, and a value for filtering. The value must be a string. Allowed
                comparison operator is ``=``. Filters are not case sensitive. The following fields in the ``Dependency``
                are eligible for filtering: * ``consumer.operation_resource_name`` - The operation resource name for the
                consumer entity involved in a dependency. Allowed comparison operators: ``=``. *
                ``consumer.external_api_resource_name`` - The external api resource name for the consumer entity
                involved in a dependency. Allowed comparison operators: ``=``. * ``supplier.operation_resource_name`` -
                The operation resource name for the supplier entity involved in a dependency. Allowed comparison
                operators: ``=``. * ``supplier.external_api_resource_name`` - The external api resource name for the
                supplier entity involved in a dependency. Allowed comparison operators: ``=``. Expressions are combined
                with either ``AND`` logic operator or ``OR`` logical operator but not both of them together i.e. only
                one of the ``AND`` or ``OR`` operator can be used throughout the filter string and both the operators
                cannot be used together. No other logical operators are supported. At most three filter fields are
                allowed in the filter string and if provided more than that then ``INVALID_ARGUMENT`` error is returned
                by the API. For example, ``consumer.operation_resource_name =
                \"projects/p1/locations/global/apis/a1/versions/v1/operations/o1\" OR supplier.operation_resource_name =
                \"projects/p1/locations/global/apis/a1/versions/v1/operations/o1\"`` - The dependencies with either
                consumer or supplier operation resource name as
                _projects/p1/locations/global/apis/a1/versions/v1/operations/o1_.
            page_size: Optional. The maximum number of dependency resources to return. The service may return fewer than
                this value. If unspecified, at most 50 dependencies will be returned. The maximum value is 1000; values
                above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListDependencies`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListDependencies``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/dependencies"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1ListDependenciesResponse],
            error_mapper=apihub_projects_locations_dependencies_list_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_dependencies_patch(
        self,
        projects_id: str,
        locations_id: str,
        dependencies_id: str,
        body: GoogleCloudApihubV1Dependency | GoogleCloudApihubV1DependencyDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Dependency, ApihubProjectsLocationsDependenciesPatchErrorBody]:
        """Update a dependency based on the update_mask provided in the request. The following fields in the dependency
        can be updated: * description

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            dependencies_id: Resource name segment (dependenciesId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/dependencies/{dependenciesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("dependenciesId", dependencies_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Dependency | GoogleCloudApihubV1DependencyDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Dependency],
            error_mapper=apihub_projects_locations_dependencies_patch_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_deployments_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1Deployment | GoogleCloudApihubV1DeploymentDict,
        *,
        deployment_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Deployment, ApihubProjectsLocationsDeploymentsCreateErrorBody]:
        """Create a deployment resource in the API hub. Once a deployment resource is created, it can be associated with
        API versions.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            deployment_id: Optional. The ID to use for the deployment resource, which will become the final component of
                the deployment's resource name. This field is optional. * If provided, the same will be used. The
                service will throw an error if the specified id is already used by another deployment resource in the
                API hub. * If not provided, a system generated id will be used. This value should be 4-500 characters,
                and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/deployments"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("deploymentId", deployment_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Deployment | GoogleCloudApihubV1DeploymentDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Deployment],
            error_mapper=apihub_projects_locations_deployments_create_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_deployments_delete(
        self,
        projects_id: str,
        locations_id: str,
        deployments_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsDeploymentsDeleteErrorBody]:
        """Deletes a deployment resource in the API hub. A deployment can only be deleted after its links to any
        versions, specs, and API operations have been removed.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            deployments_id: Resource name segment (deploymentsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/deployments/{deploymentsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("deploymentsId", deployments_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=apihub_projects_locations_deployments_delete_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_deployments_get(
        self,
        projects_id: str,
        locations_id: str,
        deployments_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Deployment, ApihubProjectsLocationsDeploymentsGetErrorBody]:
        """Get details about a deployment and the API versions linked to it.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            deployments_id: Resource name segment (deploymentsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/deployments/{deploymentsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("deploymentsId", deployments_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Deployment],
            error_mapper=apihub_projects_locations_deployments_get_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_deployments_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ListDeploymentsResponse, ApihubProjectsLocationsDeploymentsListErrorBody]:
        r"""List deployment resources in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of Deployments. A filter expression consists of a
                field name, a comparison operator, and a value for filtering. The value must be a string. The comparison
                operator must be one of: ``<``, ``>`` or ``=``. Filters are not case sensitive. The following fields in
                the ``Deployments`` are eligible for filtering: * ``display_name`` - The display name of the Deployment.
                Allowed comparison operators: ``=``. * ``create_time`` - The time at which the Deployment was created.
                The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison
                operators: ``>`` and ``<``. * ``resource_uri`` - A URI to the deployment resource. Allowed comparison
                operators: ``=``. * ``api_versions`` - The API versions linked to this deployment. Allowed comparison
                operators: ``:``. * ``source_project`` - The project/organization at source for the deployment. Allowed
                comparison operators: ``=``. * ``source_environment`` - The environment at source for the deployment.
                Allowed comparison operators: ``=``. * ``deployment_type.enum_values.values.id`` - The allowed value id
                of the deployment_type attribute associated with the Deployment. Allowed comparison operators: ``:``. *
                ``deployment_type.enum_values.values.display_name`` - The allowed value display name of the
                deployment_type attribute associated with the Deployment. Allowed comparison operators: ``:``. *
                ``slo.string_values.values`` -The allowed string value of the slo attribute associated with the
                deployment. Allowed comparison operators: ``:``. * ``environment.enum_values.values.id`` - The allowed
                value id of the environment attribute associated with the deployment. Allowed comparison operators:
                ``:``. * ``environment.enum_values.values.display_name`` - The allowed value display name of the
                environment attribute associated with the deployment. Allowed comparison operators: ``:``. *
                ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.id`` - The allowed value id of the user defined
                enum attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.display_name`` - The allowed value display name
                of the user defined enum attribute associated with the Resource. Allowed comparison operator is ``:``.
                Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user
                defined enum attribute enum name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.string_values.values`` - The allowed value of the user defined
                string attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-string is a placeholder that can be replaced with any user defined string
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.json_values.values`` - The allowed value of the user defined JSON
                attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute
                name. A filter function is also supported in the filter string. The filter function is ``id(name)``. The
                ``id(name)`` function returns the id of the resource name. For example, ``id(name) = \"deployment-1\"``
                is equivalent to ``name =
                \"projects/test-project-id/locations/test-location-id/deployments/deployment-1\"`` provided the parent
                is ``projects/test-project-id/locations/test-location-id``. Expressions are combined with either ``AND``
                logic operator or ``OR`` logical operator but not both of them together i.e. only one of the ``AND`` or
                ``OR`` operator can be used throughout the filter string and both the operators cannot be used together.
                No other logical operators are supported. At most three filter fields are allowed in the filter string
                and if provided more than that then ``INVALID_ARGUMENT`` error is returned by the API. Here are a few
                examples: * ``environment.enum_values.values.id: staging-id`` - The allowed value id of the environment
                attribute associated with the Deployment is _staging-id_. *
                ``environment.enum_values.values.display_name: \"Staging Deployment\"`` - The allowed value display name
                of the environment attribute associated with the Deployment is ``Staging Deployment``. *
                ``environment.enum_values.values.id: production-id AND create_time < \"2021-08-15T14:50:00Z\" AND
                create_time > \"2021-08-10T12:00:00Z\"`` - The allowed value id of the environment attribute associated
                with the Deployment is _production-id_ and Deployment was created before _2021-08-15 14:50:00 UTC_ and
                after _2021-08-10 12:00:00 UTC_. * ``environment.enum_values.values.id: production-id OR
                slo.string_values.values: \"99.99%\"`` - The allowed value id of the environment attribute Deployment is
                _production-id_ or string value of the slo attribute is _99.99%_. * ``environment.enum_values.values.id:
                staging-id AND attributes.projects/test-project-id/locations/test-location-id/
                attributes/17650f90-4a29-4971-b3c0-d5532da3764b.string_values.values: test`` - The filter string
                specifies that the allowed value id of the environment attribute associated with the Deployment is
                _staging-id_ and the value of the user defined attribute of type string is _test_.
            page_size: Optional. The maximum number of deployment resources to return. The service may return fewer than
                this value. If unspecified, at most 50 deployments will be returned. The maximum value is 1000; values
                above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListDeployments`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to
                ``ListDeployments`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/deployments"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1ListDeploymentsResponse],
            error_mapper=apihub_projects_locations_deployments_list_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_deployments_patch(
        self,
        projects_id: str,
        locations_id: str,
        deployments_id: str,
        body: GoogleCloudApihubV1Deployment | GoogleCloudApihubV1DeploymentDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Deployment, ApihubProjectsLocationsDeploymentsPatchErrorBody]:
        """Update a deployment resource in the API hub. The following fields in the deployment resource can be updated:
        * display_name * description * documentation * deployment_type * resource_uri * endpoints * slo * environment *
        attributes * source_project * source_environment * management_url * source_uri The update_mask should be used to
        specify the fields being updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            deployments_id: Resource name segment (deploymentsId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/deployments/{deploymentsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("deploymentsId", deployments_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Deployment | GoogleCloudApihubV1DeploymentDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Deployment],
            error_mapper=apihub_projects_locations_deployments_patch_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_discovered_api_observations_discovered_api_operations_get(
        self,
        projects_id: str,
        locations_id: str,
        discovered_api_observations_id: str,
        discovered_api_operations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1DiscoveredApiOperation,
        ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetErrorBody,
    ]:
        """Gets a DiscoveredAPIOperation in a given project, location, ApiObservation and ApiOperation.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            discovered_api_observations_id: Resource name segment (discoveredApiObservationsId).
            discovered_api_operations_id: Resource name segment (discoveredApiOperationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/discoveredApiObservations/{discoveredApiObservationsId}/discoveredApiOperations/{discoveredApiOperationsId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("discoveredApiObservationsId", discovered_api_observations_id),
                param[str]("discoveredApiOperationsId", discovered_api_operations_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1DiscoveredApiOperation],
            error_mapper=apihub_projects_locations_discovered_api_observations_discovered_api_operations_get_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_discovered_api_observations_discovered_api_operations_list(
        self,
        projects_id: str,
        locations_id: str,
        discovered_api_observations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1ListDiscoveredApiOperationsResponse,
        ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListErrorBody,
    ]:
        """Lists all the DiscoveredAPIOperations in a given project, location and ApiObservation.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            discovered_api_observations_id: Resource name segment (discoveredApiObservationsId).
            page_size: Optional. DiscoveredApiOperations will be returned. The maximum value is 1000; values above 1000
                will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListDiscoveredApiApiOperations`` call.
                Provide this to retrieve the subsequent page. When paginating, all other parameters provided to
                ``ListDiscoveredApiApiOperations`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/discoveredApiObservations/{discoveredApiObservationsId}/discoveredApiOperations",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("discoveredApiObservationsId", discovered_api_observations_id),
            ],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1ListDiscoveredApiOperationsResponse],
            error_mapper=apihub_projects_locations_discovered_api_observations_discovered_api_operations_list_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_discovered_api_observations_get(
        self,
        projects_id: str,
        locations_id: str,
        discovered_api_observations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1DiscoveredApiObservation, ApihubProjectsLocationsDiscoveredApiObservationsGetErrorBody
    ]:
        """Gets a DiscoveredAPIObservation in a given project, location and ApiObservation.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            discovered_api_observations_id: Resource name segment (discoveredApiObservationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/discoveredApiObservations/{discoveredApiObservationsId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("discoveredApiObservationsId", discovered_api_observations_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1DiscoveredApiObservation],
            error_mapper=apihub_projects_locations_discovered_api_observations_get_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_discovered_api_observations_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1ListDiscoveredApiObservationsResponse,
        ApihubProjectsLocationsDiscoveredApiObservationsListErrorBody,
    ]:
        """Lists all the DiscoveredAPIObservations in a given project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            page_size: Optional. The maximum number of ApiObservations to return. The service may return fewer than this
                value. If unspecified, at most 10 ApiObservations will be returned. The maximum value is 1000; values
                above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListApiObservations`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListApiObservations``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/discoveredApiObservations"
            ),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1ListDiscoveredApiObservationsResponse],
            error_mapper=apihub_projects_locations_discovered_api_observations_list_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_external_apis_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1ExternalApi | GoogleCloudApihubV1ExternalApiDict,
        *,
        external_api_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ExternalApi, ApihubProjectsLocationsExternalApisCreateErrorBody]:
        """Create an External API resource in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            external_api_id: Optional. The ID to use for the External API resource, which will become the final
                component of the External API's resource name. This field is optional. * If provided, the same will be
                used. The service will throw an error if the specified id is already used by another External API
                resource in the API hub. * If not provided, a system generated id will be used. This value should be
                4-500 characters, and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/externalApis"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("externalApiId", external_api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1ExternalApi | GoogleCloudApihubV1ExternalApiDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1ExternalApi],
            error_mapper=apihub_projects_locations_external_apis_create_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_external_apis_delete(
        self,
        projects_id: str,
        locations_id: str,
        external_apis_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsExternalApisDeleteErrorBody]:
        """Delete an External API resource in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            external_apis_id: Resource name segment (externalApisId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/externalApis/{externalApisId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("externalApisId", external_apis_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=apihub_projects_locations_external_apis_delete_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_external_apis_get(
        self,
        projects_id: str,
        locations_id: str,
        external_apis_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ExternalApi, ApihubProjectsLocationsExternalApisGetErrorBody]:
        """Get details about an External API resource in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            external_apis_id: Resource name segment (externalApisId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/externalApis/{externalApisId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("externalApisId", external_apis_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1ExternalApi],
            error_mapper=apihub_projects_locations_external_apis_get_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_external_apis_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ListExternalApisResponse, ApihubProjectsLocationsExternalApisListErrorBody]:
        """List External API resources in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            page_size: Optional. The maximum number of External API resources to return. The service may return fewer
                than this value. If unspecified, at most 50 ExternalApis will be returned. The maximum value is 1000;
                values above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListExternalApis`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to
                ``ListExternalApis`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/externalApis"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1ListExternalApisResponse],
            error_mapper=apihub_projects_locations_external_apis_list_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_external_apis_patch(
        self,
        projects_id: str,
        locations_id: str,
        external_apis_id: str,
        body: GoogleCloudApihubV1ExternalApi | GoogleCloudApihubV1ExternalApiDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ExternalApi, ApihubProjectsLocationsExternalApisPatchErrorBody]:
        """Update an External API resource in the API hub. The following fields can be updated: * display_name *
        description * documentation * endpoints * paths The update_mask should be used to specify the fields being
        updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            external_apis_id: Resource name segment (externalApisId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/externalApis/{externalApisId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("externalApisId", external_apis_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1ExternalApi | GoogleCloudApihubV1ExternalApiDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1ExternalApi],
            error_mapper=apihub_projects_locations_external_apis_patch_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_generated_spec_apis_generate_spec(
        self,
        projects_id: str,
        locations_id: str,
        generated_spec_apis_id: str,
        body: GoogleCloudApihubV1GenerateSpecRequest | GoogleCloudApihubV1GenerateSpecRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1GenerateSpecResponse, ApihubProjectsLocationsGeneratedSpecApisGenerateSpecErrorBody
    ]:
        """Merges the per-day stored specs across the requested window and returns the merged OpenAPI document. Preview:
        this method is in Public Preview. Behavior and the API surface may change until the Spec Generation feature
        reaches General Availability.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            generated_spec_apis_id: Resource name segment (generatedSpecApisId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/generatedSpecApis/{generatedSpecApisId}:generateSpec"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("generatedSpecApisId", generated_spec_apis_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1GenerateSpecRequest | GoogleCloudApihubV1GenerateSpecRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1GenerateSpecResponse],
            error_mapper=apihub_projects_locations_generated_spec_apis_generate_spec_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_generated_spec_apis_get(
        self,
        projects_id: str,
        locations_id: str,
        generated_spec_apis_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1GeneratedSpecApi, ApihubProjectsLocationsGeneratedSpecApisGetErrorBody]:
        """Gets a single GeneratedSpecApi by resource name. Preview: this method is in Public Preview. Behavior and the
        API surface may change until the Spec Generation feature reaches General Availability.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            generated_spec_apis_id: Resource name segment (generatedSpecApisId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/generatedSpecApis/{generatedSpecApisId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("generatedSpecApisId", generated_spec_apis_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1GeneratedSpecApi],
            error_mapper=apihub_projects_locations_generated_spec_apis_get_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_generated_spec_apis_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1ListGeneratedSpecApisResponse, ApihubProjectsLocationsGeneratedSpecApisListErrorBody
    ]:
        """Lists the APIs the pipeline is tracking, ordered by ``update_time desc``. Preview: this method is in Public
        Preview. Behavior and the API surface may change until the Spec Generation feature reaches General Availability.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An AIP-160 filter. This release supports the fields ``state`` and ``source.source_type``,
                the ``=`` comparison operator only, and ``AND`` conjunction only. Examples: - ``state =
                "SPEC_GENERATED"`` - ``state = "SPEC_ASSOCIATED" AND source.source_type = APIGEE_X``
            page_size: Optional. The maximum number of results to return. The service may return fewer. If unspecified,
                at most 50 will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListGeneratedSpecApis`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters (except ``page_size``) provided to
                ``ListGeneratedSpecApis`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/generatedSpecApis"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1ListGeneratedSpecApisResponse],
            error_mapper=apihub_projects_locations_generated_spec_apis_list_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_get(
        self, projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GoogleCloudLocationLocation, ApihubProjectsLocationsGetErrorBody]:
        """Gets information about a location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudLocationLocation],
            error_mapper=apihub_projects_locations_get_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_host_project_registrations_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1HostProjectRegistration | GoogleCloudApihubV1HostProjectRegistrationDict,
        *,
        host_project_registration_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1HostProjectRegistration, ApihubProjectsLocationsHostProjectRegistrationsCreateErrorBody
    ]:
        """Create a host project registration. A Google cloud project can be registered as a host project if it is not
        attached as a runtime project to another host project. A project can have only one host project registration at
        a time. Subsequent register calls for the same project will fail until the existing registration is deleted.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            host_project_registration_id: Required. The ID to use for the Host Project Registration, which will become
                the final component of the host project registration's resource name. The ID must be the same as the
                Google cloud project specified in the host_project_registration.gcp_project field.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/hostProjectRegistrations"
            ),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("hostProjectRegistrationId", host_project_registration_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1HostProjectRegistration | GoogleCloudApihubV1HostProjectRegistrationDict](
                body
            ),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1HostProjectRegistration],
            error_mapper=apihub_projects_locations_host_project_registrations_create_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_host_project_registrations_get(
        self,
        projects_id: str,
        locations_id: str,
        host_project_registrations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1HostProjectRegistration, ApihubProjectsLocationsHostProjectRegistrationsGetErrorBody
    ]:
        """Get a host project registration.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            host_project_registrations_id: Resource name segment (hostProjectRegistrationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/hostProjectRegistrations/{hostProjectRegistrationsId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("hostProjectRegistrationsId", host_project_registrations_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1HostProjectRegistration],
            error_mapper=apihub_projects_locations_host_project_registrations_get_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_host_project_registrations_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1ListHostProjectRegistrationsResponse,
        ApihubProjectsLocationsHostProjectRegistrationsListErrorBody,
    ]:
        """Lists host project registrations.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of HostProjectRegistrations. A filter expression
                consists of a field name, a comparison operator, and a value for filtering. The value must be a string.
                All standard operators as documented at https://google.aip.dev/160 are supported. The following fields
                in the ``HostProjectRegistration`` are eligible for filtering: * ``name`` - The name of the
                HostProjectRegistration. * ``create_time`` - The time at which the HostProjectRegistration was created.
                The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. * ``gcp_project`` -
                The Google cloud project associated with the HostProjectRegistration.
            order_by: Optional. Hint for how to order the results.
            page_size: Optional. The maximum number of host project registrations to return. The service may return
                fewer than this value. If unspecified, at most 50 host project registrations will be returned. The
                maximum value is 1000; values above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListHostProjectRegistrations`` call. Provide
                this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided
                to ``ListHostProjectRegistrations`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/hostProjectRegistrations"
            ),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[str | None]("orderBy", order_by),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1ListHostProjectRegistrationsResponse],
            error_mapper=apihub_projects_locations_host_project_registrations_list_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_list(
        self,
        projects_id: str,
        *,
        extra_location_types: list[str] | None = None,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudLocationListLocationsResponse, ApihubProjectsLocationsListErrorBody]:
        """Lists information about the supported locations for this service. This method lists locations based on the
        resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If ``name`` is empty,
        the method lists the public locations available to all projects. * **Project-specific locations**: If ``name``
        follows the format ``projects/{project}``, the method lists locations visible to that specific project. This
        includes public, private, or other project-specific locations enabled for the project. For gRPC and client
        library implementations, the resource name is passed as the ``name`` field. For direct service calls, the
        resource name is incorporated into the request path based on the specific service implementation and version.

        Args:
            projects_id: Resource name segment (projectsId).
            extra_location_types: Optional. Do not use this field unless explicitly documented otherwise. This is
                primarily for internal usage.
            filter_: A filter to narrow down results to a preferred subset. The filtering language accepts strings like
                ``"displayName=tokyo"``, and is documented in more detail in `AIP-160 <https://google.aip.dev/160>`__.
            page_size: The maximum number of results to return. If not set, the service selects a default.
            page_token: A page token received from the ``next_page_token`` field in the response. Send that page token
                to receive the subsequent page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations"),
            path_params=[param[str]("projectsId", projects_id)],
            query_params=[
                param[list[str] | None]("extraLocationTypes", extra_location_types),
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudLocationListLocationsResponse],
            error_mapper=apihub_projects_locations_list_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_lookup_runtime_project_attachment(
        self, projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[
        GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse,
        ApihubProjectsLocationsLookupRuntimeProjectAttachmentErrorBody,
    ]:
        """Look up a runtime project attachment. This API can be called in the context of any project.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}:lookupRuntimeProjectAttachment"
            ),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse],
            error_mapper=apihub_projects_locations_lookup_runtime_project_attachment_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_operations_cancel(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsOperationsCancelErrorBody]:
        """Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the
        operation, but success is not guaranteed. If the server doesn't support this method, it returns
        ``google.rpc.Code.UNIMPLEMENTED``. Clients can use Operations.GetOperation or other methods to check whether the
        cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the
        operation is not deleted; instead, it becomes an operation with an Operation.error value with a
        google.rpc.Status.code of ``1``, corresponding to ``Code.CANCELLED``.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("operationsId", operations_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=apihub_projects_locations_operations_cancel_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_operations_delete(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsOperationsDeleteErrorBody]:
        """Deletes a long-running operation. This method indicates that the client is no longer interested in the
        operation result. It does not cancel the operation. If the server doesn't support this method, it returns
        ``google.rpc.Code.UNIMPLEMENTED``.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("operationsId", operations_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=apihub_projects_locations_operations_delete_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_operations_get(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsOperationsGetErrorBody]:
        """Gets the latest state of a long-running operation. Clients can use this method to poll the operation result
        at intervals as recommended by the API service.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("operationsId", operations_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=apihub_projects_locations_operations_get_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_operations_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        return_partial_success: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningListOperationsResponse, ApihubProjectsLocationsOperationsListErrorBody]:
        """Lists operations that match the specified filter in the request. If the server doesn't support this method,
        it returns ``UNIMPLEMENTED``.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: The standard list filter.
            page_size: The standard list page size.
            page_token: The standard list page token.
            return_partial_success: When set to ``true``, operations that are reachable are returned as normal, and
                those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only
                be ``true`` when reading across collections. For example, when ``parent`` is set to
                ``"projects/example/locations/-"``. This field is not supported by default and will result in an
                ``UNIMPLEMENTED`` error if set unless explicitly documented otherwise in service or product specific
                documentation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/operations"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
                param[bool | None]("returnPartialSuccess", return_partial_success),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningListOperationsResponse],
            error_mapper=apihub_projects_locations_operations_list_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_plugins_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1Plugin | GoogleCloudApihubV1PluginDict,
        *,
        plugin_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Plugin, ApihubProjectsLocationsPluginsCreateErrorBody]:
        """Create an API Hub plugin resource in the API hub. Once a plugin is created, it can be used to create plugin
        instances.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            plugin_id: Optional. The ID to use for the Plugin resource, which will become the final component of the
                Plugin's resource name. This field is optional. * If provided, the same will be used. The service will
                throw an error if the specified id is already used by another Plugin resource in the API hub instance. *
                If not provided, a system generated id will be used. This value should be 4-63 characters, overall
                resource name which will be of format ``projects/{project}/locations/{location}/plugins/{plugin}``, its
                length is limited to 1000 characters and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/plugins"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("pluginId", plugin_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Plugin | GoogleCloudApihubV1PluginDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Plugin],
            error_mapper=apihub_projects_locations_plugins_create_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_plugins_delete(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsPluginsDeleteErrorBody]:
        """Delete a Plugin in API hub. Note, only user owned plugins can be deleted via this method.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=apihub_projects_locations_plugins_delete_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_plugins_disable(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Plugin, ApihubProjectsLocationsPluginsDisableErrorBody]:
        """Disables a plugin. The ``state`` of the plugin after disabling is ``DISABLED``

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}:disable"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Plugin],
            error_mapper=apihub_projects_locations_plugins_disable_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_plugins_enable(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Plugin, ApihubProjectsLocationsPluginsEnableErrorBody]:
        """Enables a plugin. The ``state`` of the plugin after enabling is ``ENABLED``

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}:enable"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Plugin],
            error_mapper=apihub_projects_locations_plugins_enable_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_plugins_get(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Plugin, ApihubProjectsLocationsPluginsGetErrorBody]:
        """Get an API Hub plugin.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1Plugin],
            error_mapper=apihub_projects_locations_plugins_get_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_plugins_get_style_guide(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1StyleGuide, ApihubProjectsLocationsPluginsGetStyleGuideErrorBody]:
        """Get the style guide being used for linting.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/styleGuide"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1StyleGuide],
            error_mapper=apihub_projects_locations_plugins_get_style_guide_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_plugins_instances_create(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        body: GoogleCloudApihubV1PluginInstance | GoogleCloudApihubV1PluginInstanceDict,
        *,
        plugin_instance_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsPluginsInstancesCreateErrorBody]:
        """Creates a Plugin instance in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            body: The request body.
            plugin_instance_id: Optional. The ID to use for the plugin instance, which will become the final component
                of the plugin instance's resource name. This field is optional. * If provided, the same will be used.
                The service will throw an error if the specified id is already used by another plugin instance in the
                plugin resource. * If not provided, a system generated id will be used. This value should be 4-63
                characters, and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
            ],
            query_params=[param[str | None]("pluginInstanceId", plugin_instance_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1PluginInstance | GoogleCloudApihubV1PluginInstanceDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=apihub_projects_locations_plugins_instances_create_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_plugins_instances_delete(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsPluginsInstancesDeleteErrorBody]:
        """Deletes a plugin instance in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
                param[str]("instancesId", instances_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=apihub_projects_locations_plugins_instances_delete_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_plugins_instances_disable_action(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        body: (
            GoogleCloudApihubV1DisablePluginInstanceActionRequest
            | GoogleCloudApihubV1DisablePluginInstanceActionRequestDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsPluginsInstancesDisableActionErrorBody]:
        """Disables a plugin instance in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}:disableAction",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
                param[str]("instancesId", instances_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    GoogleCloudApihubV1DisablePluginInstanceActionRequest
                    | GoogleCloudApihubV1DisablePluginInstanceActionRequestDict
                )
            ](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=apihub_projects_locations_plugins_instances_disable_action_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_plugins_instances_enable_action(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        body: (
            GoogleCloudApihubV1EnablePluginInstanceActionRequest
            | GoogleCloudApihubV1EnablePluginInstanceActionRequestDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsPluginsInstancesEnableActionErrorBody]:
        """Enables a plugin instance in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}:enableAction",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
                param[str]("instancesId", instances_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    GoogleCloudApihubV1EnablePluginInstanceActionRequest
                    | GoogleCloudApihubV1EnablePluginInstanceActionRequestDict
                )
            ](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=apihub_projects_locations_plugins_instances_enable_action_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_plugins_instances_execute_action(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        body: (
            GoogleCloudApihubV1ExecutePluginInstanceActionRequest
            | GoogleCloudApihubV1ExecutePluginInstanceActionRequestDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsPluginsInstancesExecuteActionErrorBody]:
        """Executes a plugin instance in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}:executeAction",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
                param[str]("instancesId", instances_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    GoogleCloudApihubV1ExecutePluginInstanceActionRequest
                    | GoogleCloudApihubV1ExecutePluginInstanceActionRequestDict
                )
            ](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=apihub_projects_locations_plugins_instances_execute_action_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_plugins_instances_get(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1PluginInstance, ApihubProjectsLocationsPluginsInstancesGetErrorBody]:
        """Get an API Hub plugin instance.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
                param[str]("instancesId", instances_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1PluginInstance],
            error_mapper=apihub_projects_locations_plugins_instances_get_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_plugins_instances_list(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1ListPluginInstancesResponse, ApihubProjectsLocationsPluginsInstancesListErrorBody
    ]:
        r"""List all the plugins in a given project and location. ``-`` can be used as wildcard value for {plugin_id}

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            filter_: Optional. An expression that filters the list of plugin instances. A filter expression consists of
                a field name, a comparison operator, and a value for filtering. The value must be a string. The
                comparison operator must be one of: ``<``, ``>`` or ``=``. Filters are not case sensitive. The following
                fields in the ``PluginInstances`` are eligible for filtering: * ``state`` - The state of the Plugin
                Instance. Allowed comparison operators: ``=``. * ``source_project_id`` - The source project id of the
                Plugin Instance. Allowed comparison operators: ``=``. A filter function is also supported in the filter
                string. The filter function is ``id(name)``. The ``id(name)`` function returns the id of the resource
                name. For example, ``id(name) = \"plugin-instance-1\"`` is equivalent to ``name =
                \"projects/test-project-id/locations/test-location-id/plugins/plugin-1/instances/plugin-instance-1\"``
                provided the parent is ``projects/test-project-id/locations/test-location-id/plugins/plugin-1``.
                Expressions are combined with either ``AND`` logic operator or ``OR`` logical operator but not both of
                them together i.e. only one of the ``AND`` or ``OR`` operator can be used throughout the filter string
                and both the operators cannot be used together. No other logical operators are supported. At most three
                filter fields are allowed in the filter string and if provided more than that then ``INVALID_ARGUMENT``
                error is returned by the API. Here are a few examples: * ``state = ENABLED`` - The plugin instance is in
                enabled state.
            page_size: Optional. The maximum number of hub plugins to return. The service may return fewer than this
                value. If unspecified, at most 50 hub plugins will be returned. The maximum value is 1000; values above
                1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListPluginInstances`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListPluginInstances``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
            ],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1ListPluginInstancesResponse],
            error_mapper=apihub_projects_locations_plugins_instances_list_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_plugins_instances_manage_source_data(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        body: (
            GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest
            | GoogleCloudApihubV1ManagePluginInstanceSourceDataRequestDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsPluginsInstancesManageSourceDataErrorBody]:
        """Manages data for a given plugin instance.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}:manageSourceData",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
                param[str]("instancesId", instances_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest
                    | GoogleCloudApihubV1ManagePluginInstanceSourceDataRequestDict
                )
            ](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=apihub_projects_locations_plugins_instances_manage_source_data_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_plugins_instances_patch(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        body: GoogleCloudApihubV1PluginInstance | GoogleCloudApihubV1PluginInstanceDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1PluginInstance, ApihubProjectsLocationsPluginsInstancesPatchErrorBody]:
        """Updates a plugin instance in the API hub. The following fields in the plugin_instance can be updated
        currently: * display_name * schedule_cron_expression The update_mask should be used to specify the fields being
        updated. To update the auth_config and additional_config of the plugin instance, use the
        ApplyPluginInstanceConfig method.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            body: The request body.
            update_mask: Optional. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
                param[str]("instancesId", instances_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1PluginInstance | GoogleCloudApihubV1PluginInstanceDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1PluginInstance],
            error_mapper=apihub_projects_locations_plugins_instances_patch_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_plugins_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ListPluginsResponse, ApihubProjectsLocationsPluginsListErrorBody]:
        """List all the plugins in a given project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of plugins. A filter expression consists of a field
                name, a comparison operator, and a value for filtering. The value must be a string. The comparison
                operator must be one of: ``<``, ``>`` or ``=``. Filters are not case sensitive. The following fields in
                the ``Plugins`` are eligible for filtering: * ``plugin_category`` - The category of the Plugin. Allowed
                comparison operators: ``=``. Expressions are combined with either ``AND`` logic operator or ``OR``
                logical operator but not both of them together i.e. only one of the ``AND`` or ``OR`` operator can be
                used throughout the filter string and both the operators cannot be used together. No other logical
                operators are supported. At most three filter fields are allowed in the filter string and if provided
                more than that then ``INVALID_ARGUMENT`` error is returned by the API. Here are a few examples: *
                ``plugin_category = ON_RAMP`` - The plugin is of category on ramp.
            page_size: Optional. The maximum number of hub plugins to return. The service may return fewer than this
                value. If unspecified, at most 50 hub plugins will be returned. The maximum value is 1000; values above
                1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListPlugins`` call. Provide this to retrieve
                the subsequent page. When paginating, all other parameters (except page_size) provided to
                ``ListPlugins`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/plugins"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1ListPluginsResponse],
            error_mapper=apihub_projects_locations_plugins_list_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_plugins_style_guide_get_contents(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1StyleGuideContents, ApihubProjectsLocationsPluginsStyleGuideGetContentsErrorBody]:
        """Get the contents of the style guide.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/styleGuide:contents"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1StyleGuideContents],
            error_mapper=apihub_projects_locations_plugins_style_guide_get_contents_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_plugins_update_style_guide(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        body: GoogleCloudApihubV1StyleGuide | GoogleCloudApihubV1StyleGuideDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1StyleGuide, ApihubProjectsLocationsPluginsUpdateStyleGuideErrorBody]:
        """Update the styleGuide to be used for liniting in by API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            body: The request body.
            update_mask: Optional. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/styleGuide"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1StyleGuide | GoogleCloudApihubV1StyleGuideDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1StyleGuide],
            error_mapper=apihub_projects_locations_plugins_update_style_guide_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_retrieve_api_views(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        view: ViewApigeeProjectsApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1RetrieveApiViewsResponse, ApihubProjectsLocationsRetrieveApiViewsErrorBody]:
        """Retrieve API views.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. The filter expression.
            page_size: Optional. The maximum number of results to return. Default to 100.
            page_token: Optional. A page token, received from a previous ``RetrieveApiViews`` call. Provide this to
                retrieve the subsequent page.
            view: Required. The view type to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}:retrieveApiViews"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
                param[ViewApigeeProjectsApiOrStr | None]("view", view),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1RetrieveApiViewsResponse],
            error_mapper=apihub_projects_locations_retrieve_api_views_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_runtime_project_attachments_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1RuntimeProjectAttachment | GoogleCloudApihubV1RuntimeProjectAttachmentDict,
        *,
        runtime_project_attachment_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1RuntimeProjectAttachment, ApihubProjectsLocationsRuntimeProjectAttachmentsCreateErrorBody
    ]:
        """Attaches a runtime project to the host project.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            runtime_project_attachment_id: Required. The ID to use for the Runtime Project Attachment, which will become
                the final component of the Runtime Project Attachment's name. The ID must be the same as the project ID
                of the Google cloud project specified in the runtime_project_attachment.runtime_project field.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/runtimeProjectAttachments"
            ),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("runtimeProjectAttachmentId", runtime_project_attachment_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                GoogleCloudApihubV1RuntimeProjectAttachment | GoogleCloudApihubV1RuntimeProjectAttachmentDict
            ](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1RuntimeProjectAttachment],
            error_mapper=apihub_projects_locations_runtime_project_attachments_create_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_runtime_project_attachments_delete(
        self,
        projects_id: str,
        locations_id: str,
        runtime_project_attachments_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteErrorBody]:
        """Delete a runtime project attachment in the API Hub. This call will detach the runtime project from the host
        project.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            runtime_project_attachments_id: Resource name segment (runtimeProjectAttachmentsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/runtimeProjectAttachments/{runtimeProjectAttachmentsId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("runtimeProjectAttachmentsId", runtime_project_attachments_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=apihub_projects_locations_runtime_project_attachments_delete_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_runtime_project_attachments_get(
        self,
        projects_id: str,
        locations_id: str,
        runtime_project_attachments_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1RuntimeProjectAttachment, ApihubProjectsLocationsRuntimeProjectAttachmentsGetErrorBody
    ]:
        """Gets a runtime project attachment.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            runtime_project_attachments_id: Resource name segment (runtimeProjectAttachmentsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/runtimeProjectAttachments/{runtimeProjectAttachmentsId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("runtimeProjectAttachmentsId", runtime_project_attachments_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1RuntimeProjectAttachment],
            error_mapper=apihub_projects_locations_runtime_project_attachments_get_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_runtime_project_attachments_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse,
        ApihubProjectsLocationsRuntimeProjectAttachmentsListErrorBody,
    ]:
        """List runtime projects attached to the host project.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of RuntimeProjectAttachments. A filter expression
                consists of a field name, a comparison operator, and a value for filtering. The value must be a string.
                All standard operators as documented at https://google.aip.dev/160 are supported. The following fields
                in the ``RuntimeProjectAttachment`` are eligible for filtering: * ``name`` - The name of the
                RuntimeProjectAttachment. * ``create_time`` - The time at which the RuntimeProjectAttachment was
                created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. *
                ``runtime_project`` - The Google cloud project associated with the RuntimeProjectAttachment.
            order_by: Optional. Hint for how to order the results.
            page_size: Optional. The maximum number of runtime project attachments to return. The service may return
                fewer than this value. If unspecified, at most 50 runtime project attachments will be returned. The
                maximum value is 1000; values above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListRuntimeProjectAttachments`` call. Provide
                this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided
                to ``ListRuntimeProjectAttachments`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/runtimeProjectAttachments"
            ),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[str | None]("orderBy", order_by),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse],
            error_mapper=apihub_projects_locations_runtime_project_attachments_list_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_search_resources(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1SearchResourcesRequest | GoogleCloudApihubV1SearchResourcesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1SearchResourcesResponse, ApihubProjectsLocationsSearchResourcesErrorBody]:
        """Search across API-Hub resources.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}:searchResources"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1SearchResourcesRequest | GoogleCloudApihubV1SearchResourcesRequestDict](
                body
            ),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleCloudApihubV1SearchResourcesResponse],
            error_mapper=apihub_projects_locations_search_resources_error_mapper,
            request_options=request_options,
        )

    def apihub_projects_locations_servers_configure_and_deploy_server(
        self,
        projects_id: str,
        locations_id: str,
        body: (
            GoogleCloudApihubV1ConfigureAndDeployServerRequest | GoogleCloudApihubV1ConfigureAndDeployServerRequestDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsServersConfigureAndDeployServerErrorBody]:
        """Configures and deploys a given server config for given target. Currently this API supports only deploying MCP
        server in Apigee X. For mcp server deployment in apigee X, if there is already a mcp proxy deployed, then this
        method will try to overwrite it by creating new revision i.e. all existing tools will be removed and new set of
        tools will be deployed.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/servers:configureAndDeployServer"
            ),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    GoogleCloudApihubV1ConfigureAndDeployServerRequest
                    | GoogleCloudApihubV1ConfigureAndDeployServerRequestDict
                )
            ](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleLongrunningOperation],
            error_mapper=apihub_projects_locations_servers_configure_and_deploy_server_error_mapper,
            request_options=request_options,
        )


class AsyncProjectsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def apigee_projects_provision_organization(
        self,
        projects_id: str,
        body: GoogleCloudApigeeV1ProvisionOrganizationRequest | GoogleCloudApigeeV1ProvisionOrganizationRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApigeeProjectsProvisionOrganizationErrorBody]:
        """Provisions a new Apigee organization with a functioning runtime. This is the standard way to create trial
        organizations for a free Apigee trial.

        Args:
            projects_id: Resource name segment (projectsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}:provisionOrganization"),
            path_params=[param[str]("projectsId", projects_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                GoogleCloudApigeeV1ProvisionOrganizationRequest | GoogleCloudApigeeV1ProvisionOrganizationRequestDict
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleLongrunningOperation],
            error_mapper=apigee_projects_provision_organization_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_addons_get(
        self,
        projects_id: str,
        locations_id: str,
        addons_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Addon, ApihubProjectsLocationsAddonsGetErrorBody]:
        """Get an addon.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            addons_id: Resource name segment (addonsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/addons/{addonsId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("addonsId", addons_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Addon],
            error_mapper=apihub_projects_locations_addons_get_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_addons_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ListAddonsResponse, ApihubProjectsLocationsAddonsListErrorBody]:
        """List addons.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of addons. The only supported filter is
                ``plugin_instance_name``. It can be used to filter addons that are enabled for a given plugin instance.
                The format of the filter is ``plugin_instance_name =
                "projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}"``.
            page_size: Optional. The maximum number of hub addons to return. The service may return fewer than this
                value. If unspecified, at most 50 hub addons will be returned. The maximum value is 1000; values above
                1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListAddons`` call. Provide this to retrieve
                the subsequent page. When paginating, all other parameters (except page_size) provided to ``ListAddons``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/addons"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1ListAddonsResponse],
            error_mapper=apihub_projects_locations_addons_list_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_addons_manage_config(
        self,
        projects_id: str,
        locations_id: str,
        addons_id: str,
        body: GoogleCloudApihubV1ManageAddonConfigRequest | GoogleCloudApihubV1ManageAddonConfigRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsAddonsManageConfigErrorBody]:
        """Manage addon config. This RPC is used for managing the config of the addon. Calling this RPC moves the addon
        into an updating state until the long-running operation succeeds.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            addons_id: Resource name segment (addonsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/addons/{addonsId}:manageConfig"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("addonsId", addons_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                GoogleCloudApihubV1ManageAddonConfigRequest | GoogleCloudApihubV1ManageAddonConfigRequestDict
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleLongrunningOperation],
            error_mapper=apihub_projects_locations_addons_manage_config_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_api_hub_instances_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1ApiHubInstance | GoogleCloudApihubV1ApiHubInstanceDict,
        *,
        api_hub_instance_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsApiHubInstancesCreateErrorBody]:
        """Provisions instance resources for the API Hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            api_hub_instance_id: Optional. Identifier to assign to the Api Hub instance. Must be unique within scope of
                the parent resource. If the field is not provided, system generated id will be used. This value should
                be 4-40 characters, and valid characters are ``/a-z[0-9]-_/``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("apiHubInstanceId", api_hub_instance_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1ApiHubInstance | GoogleCloudApihubV1ApiHubInstanceDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleLongrunningOperation],
            error_mapper=apihub_projects_locations_api_hub_instances_create_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_api_hub_instances_delete(
        self,
        projects_id: str,
        locations_id: str,
        api_hub_instances_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsApiHubInstancesDeleteErrorBody]:
        """Deletes the API hub instance. Deleting the API hub instance will also result in the removal of all associated
        runtime project attachments and the host project registration.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            api_hub_instances_id: Resource name segment (apiHubInstancesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances/{apiHubInstancesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apiHubInstancesId", api_hub_instances_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleLongrunningOperation],
            error_mapper=apihub_projects_locations_api_hub_instances_delete_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_api_hub_instances_get(
        self,
        projects_id: str,
        locations_id: str,
        api_hub_instances_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ApiHubInstance, ApihubProjectsLocationsApiHubInstancesGetErrorBody]:
        """Gets details of a single API Hub instance.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            api_hub_instances_id: Resource name segment (apiHubInstancesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances/{apiHubInstancesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apiHubInstancesId", api_hub_instances_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1ApiHubInstance],
            error_mapper=apihub_projects_locations_api_hub_instances_get_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_api_hub_instances_lookup(
        self, projects_id: str, locations_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[
        GoogleCloudApihubV1LookupApiHubInstanceResponse, ApihubProjectsLocationsApiHubInstancesLookupErrorBody
    ]:
        """Looks up an Api Hub instance in a given Google Cloud project. There will always be only one Api Hub instance
        for a Google Cloud project across all locations.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances:lookup"
            ),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1LookupApiHubInstanceResponse],
            error_mapper=apihub_projects_locations_api_hub_instances_lookup_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_api_hub_instances_patch(
        self,
        projects_id: str,
        locations_id: str,
        api_hub_instances_id: str,
        body: GoogleCloudApihubV1ApiHubInstance | GoogleCloudApihubV1ApiHubInstanceDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsApiHubInstancesPatchErrorBody]:
        """Update an Api Hub instance. The following fields in the ApiHubInstance can be updated: * disable_search *
        vertex_location * agent_registry_sync_config The update_mask should be used to specify the fields being updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            api_hub_instances_id: Resource name segment (apiHubInstancesId).
            body: The request body.
            update_mask: Optional. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances/{apiHubInstancesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apiHubInstancesId", api_hub_instances_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1ApiHubInstance | GoogleCloudApihubV1ApiHubInstanceDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleLongrunningOperation],
            error_mapper=apihub_projects_locations_api_hub_instances_patch_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_apis_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1Api | GoogleCloudApihubV1ApiDict,
        *,
        api_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Api, ApihubProjectsLocationsApisCreateErrorBody]:
        """Create an API resource in the API hub. Once an API resource is created, versions can be added to it.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            api_id: Optional. The ID to use for the API resource, which will become the final component of the API's
                resource name. This field is optional. * If provided, the same will be used. The service will throw an
                error if the specified id is already used by another API resource in the API hub. * If not provided, a
                system generated id will be used. This value should be 4-500 characters, and valid characters are
                /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/apis"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Api | GoogleCloudApihubV1ApiDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Api],
            error_mapper=apihub_projects_locations_apis_create_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_apis_delete(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        *,
        force: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsApisDeleteErrorBody]:
        """Delete an API resource in the API hub. API can only be deleted if all underlying versions are deleted.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            force: Optional. If set to true, any versions from this API will also be deleted. Otherwise, the request
                will only work if the API has no versions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
            ],
            query_params=[param[bool | None]("force", force)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=apihub_projects_locations_apis_delete_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_apis_get(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Api, ApihubProjectsLocationsApisGetErrorBody]:
        """Get API resource details including the API versions contained in it.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Api],
            error_mapper=apihub_projects_locations_apis_get_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_apis_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ListApisResponse, ApihubProjectsLocationsApisListErrorBody]:
        r"""List API resources in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of ApiResources. A filter expression consists of a
                field name, a comparison operator, and a value for filtering. The value must be a string. The comparison
                operator must be one of: ``<``, ``>``, ``:`` or ``=``. Filters are not case sensitive. The following
                fields in the ``ApiResource`` are eligible for filtering: * ``owner.email`` - The email of the team
                which owns the ApiResource. Allowed comparison operators: ``=``. * ``create_time`` - The time at which
                the ApiResource was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339]
                format. Allowed comparison operators: ``>`` and ``<``. * ``display_name`` - The display name of the
                ApiResource. Allowed comparison operators: ``=``. * ``target_user.enum_values.values.id`` - The allowed
                value id of the target users attribute associated with the ApiResource. Allowed comparison operator is
                ``:``. * ``target_user.enum_values.values.display_name`` - The allowed value display name of the target
                users attribute associated with the ApiResource. Allowed comparison operator is ``:``. *
                ``team.enum_values.values.id`` - The allowed value id of the team attribute associated with the
                ApiResource. Allowed comparison operator is ``:``. * ``team.enum_values.values.display_name`` - The
                allowed value display name of the team attribute associated with the ApiResource. Allowed comparison
                operator is ``:``. * ``business_unit.enum_values.values.id`` - The allowed value id of the business unit
                attribute associated with the ApiResource. Allowed comparison operator is ``:``. *
                ``business_unit.enum_values.values.display_name`` - The allowed value display name of the business unit
                attribute associated with the ApiResource. Allowed comparison operator is ``:``. *
                ``maturity_level.enum_values.values.id`` - The allowed value id of the maturity level attribute
                associated with the ApiResource. Allowed comparison operator is ``:``. *
                ``maturity_level.enum_values.values.display_name`` - The allowed value display name of the maturity
                level attribute associated with the ApiResource. Allowed comparison operator is ``:``. *
                ``api_style.enum_values.values.id`` - The allowed value id of the api style attribute associated with
                the ApiResource. Allowed comparison operator is ``:``. * ``api_style.enum_values.values.display_name`` -
                The allowed value display name of the api style attribute associated with the ApiResource. Allowed
                comparison operator is ``:``. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.id`` - The allowed value id of the user defined
                enum attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.display_name`` - The allowed value display name
                of the user defined enum attribute associated with the Resource. Allowed comparison operator is ``:``.
                Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user
                defined enum attribute enum name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.string_values.values`` - The allowed value of the user defined
                string attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-string is a placeholder that can be replaced with any user defined string
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.json_values.values`` - The allowed value of the user defined JSON
                attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute
                name. A filter function is also supported in the filter string. The filter function is ``id(name)``. The
                ``id(name)`` function returns the id of the resource name. For example, ``id(name) = \"api-1\"`` is
                equivalent to ``name = \"projects/test-project-id/locations/test-location-id/apis/api-1\"`` provided the
                parent is ``projects/test-project-id/locations/test-location-id``. Another supported filter function is
                ``plugins(source_metadata)``. This function filters for resources that are associated with a specific
                plugin. For example, ``plugins(source_metadata) :
                "projects/test-project-id/locations/test-location-id/plugins/test-plugin-id"`` will return resources
                sourced from the given plugin. Expressions are combined with either ``AND`` logic operator or ``OR``
                logical operator but not both of them together i.e. only one of the ``AND`` or ``OR`` operator can be
                used throughout the filter string and both the operators cannot be used together. No other logical
                operators are supported. At most three filter fields are allowed in the filter string and if provided
                more than that then ``INVALID_ARGUMENT`` error is returned by the API. Here are a few examples: *
                ``owner.email = \"apihub@google.com\"`` - - The owner team email is _apihub@google.com_. * ``owner.email
                = \"apihub@google.com\" AND create_time < \"2021-08-15T14:50:00Z\" AND create_time >
                \"2021-08-10T12:00:00Z\"`` - The owner team email is _apihub@google.com_ and the api was created before
                _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. * ``owner.email = \"apihub@google.com\"
                OR team.enum_values.values.id: apihub-team-id`` - The filter string specifies the APIs where the owner
                team email is _apihub@google.com_ or the id of the allowed value associated with the team attribute is
                _apihub-team-id_. * ``owner.email = \"apihub@google.com\" OR team.enum_values.values.display_name:
                ApiHub Team`` - The filter string specifies the APIs where the owner team email is _apihub@google.com_
                or the display name of the allowed value associated with the team attribute is ``ApiHub Team``. *
                ``owner.email = \"apihub@google.com\" AND
                attributes.projects/test-project-id/locations/test-location-id/
                attributes/17650f90-4a29-4971-b3c0-d5532da3764b.enum_values.values.id: test_enum_id AND
                attributes.projects/test-project-id/locations/test-location-id/
                attributes/1765\0f90-4a29-5431-b3d0-d5532da3764c.string_values.values: test_string_value`` - The filter
                string specifies the APIs where the owner team email is _apihub@google.com_ and the id of the allowed
                value associated with the user defined attribute of type enum is _test_enum_id_ and the value of the
                user defined attribute of type string is _test_..
            page_size: Optional. The maximum number of API resources to return. The service may return fewer than this
                value. If unspecified, at most 50 Apis will be returned. The maximum value is 1000; values above 1000
                will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListApis`` call. Provide this to retrieve the
                subsequent page. When paginating, all other parameters (except page_size) provided to ``ListApis`` must
                match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/apis"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1ListApisResponse],
            error_mapper=apihub_projects_locations_apis_list_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_apis_patch(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        body: GoogleCloudApihubV1Api | GoogleCloudApihubV1ApiDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Api, ApihubProjectsLocationsApisPatchErrorBody]:
        """Update an API resource in the API hub. The following fields in the API can be updated: * display_name *
        description * owner * documentation * target_user * team * business_unit * maturity_level * api_style *
        attributes * fingerprint The update_mask should be used to specify the fields being updated. Updating the owner
        field requires complete owner message and updates both owner and email fields.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Api | GoogleCloudApihubV1ApiDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Api],
            error_mapper=apihub_projects_locations_apis_patch_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_apis_versions_create(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        body: GoogleCloudApihubV1Version | GoogleCloudApihubV1VersionDict,
        *,
        version_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Version, ApihubProjectsLocationsApisVersionsCreateErrorBody]:
        """Create an API version for an API resource in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            body: The request body.
            version_id: Optional. The ID to use for the API version, which will become the final component of the
                version's resource name. This field is optional. * If provided, the same will be used. The service will
                throw an error if the specified id is already used by another version in the API resource. * If not
                provided, a system generated id will be used. This value should be 4-500 characters, overall resource
                name which will be of format ``projects/{project}/locations/{location}/apis/{api}/versions/{version}``,
                its length is limited to 700 characters and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
            ],
            query_params=[param[str | None]("versionId", version_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Version | GoogleCloudApihubV1VersionDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Version],
            error_mapper=apihub_projects_locations_apis_versions_create_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_apis_versions_definitions_get(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        definitions_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Definition, ApihubProjectsLocationsApisVersionsDefinitionsGetErrorBody]:
        """Get details about a definition in an API version.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            definitions_id: Resource name segment (definitionsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/definitions/{definitionsId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
                param[str]("definitionsId", definitions_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Definition],
            error_mapper=apihub_projects_locations_apis_versions_definitions_get_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_apis_versions_delete(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        *,
        force: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsApisVersionsDeleteErrorBody]:
        """Delete an API version. Version can only be deleted if all underlying specs, operations, definitions and
        linked deployments are deleted.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            force: Optional. If set to true, any specs from this version will also be deleted. Otherwise, the request
                will only work if the version has no specs.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
            ],
            query_params=[param[bool | None]("force", force)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=apihub_projects_locations_apis_versions_delete_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_apis_versions_get(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Version, ApihubProjectsLocationsApisVersionsGetErrorBody]:
        """Get details about the API version of an API resource. This will include information about the specs and
        operations present in the API version as well as the deployments linked to it.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Version],
            error_mapper=apihub_projects_locations_apis_versions_get_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_apis_versions_list(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ListVersionsResponse, ApihubProjectsLocationsApisVersionsListErrorBody]:
        r"""List API versions of an API resource in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            filter_: Optional. An expression that filters the list of Versions. A filter expression consists of a field
                name, a comparison operator, and a value for filtering. The value must be a string, a number, or a
                boolean. The comparison operator must be one of: ``<``, ``>`` or ``=``. Filters are not case sensitive.
                The following fields in the ``Version`` are eligible for filtering: * ``display_name`` - The display
                name of the Version. Allowed comparison operators: ``=``. * ``create_time`` - The time at which the
                Version was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format.
                Allowed comparison operators: ``>`` and ``<``. * ``lifecycle.enum_values.values.id`` - The allowed value
                id of the lifecycle attribute associated with the Version. Allowed comparison operators: ``:``. *
                ``lifecycle.enum_values.values.display_name`` - The allowed value display name of the lifecycle
                attribute associated with the Version. Allowed comparison operators: ``:``. *
                ``compliance.enum_values.values.id`` - The allowed value id of the compliances attribute associated with
                the Version. Allowed comparison operators: ``:``. * ``compliance.enum_values.values.display_name`` - The
                allowed value display name of the compliances attribute associated with the Version. Allowed comparison
                operators: ``:``. * ``accreditation.enum_values.values.id`` - The allowed value id of the accreditations
                attribute associated with the Version. Allowed comparison operators: ``:``. *
                ``accreditation.enum_values.values.display_name`` - The allowed value display name of the accreditations
                attribute associated with the Version. Allowed comparison operators: ``:``. *
                ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.id`` - The allowed value id of the user defined
                enum attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.display_name`` - The allowed value display name
                of the user defined enum attribute associated with the Resource. Allowed comparison operator is ``:``.
                Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user
                defined enum attribute enum name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.string_values.values`` - The allowed value of the user defined
                string attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-string is a placeholder that can be replaced with any user defined string
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.json_values.values`` - The allowed value of the user defined JSON
                attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute
                name. Expressions are combined with either ``AND`` logic operator or ``OR`` logical operator but not
                both of them together i.e. only one of the ``AND`` or ``OR`` operator can be used throughout the filter
                string and both the operators cannot be used together. No other logical operators are supported. At most
                three filter fields are allowed in the filter string and if provided more than that then
                ``INVALID_ARGUMENT`` error is returned by the API. Here are a few examples: *
                ``lifecycle.enum_values.values.id: preview-id`` - The filter string specifies that the id of the allowed
                value associated with the lifecycle attribute of the Version is _preview-id_. *
                ``lifecycle.enum_values.values.display_name: \"Preview Display Name\"`` - The filter string specifies
                that the display name of the allowed value associated with the lifecycle attribute of the Version is
                ``Preview Display Name``. * ``lifecycle.enum_values.values.id: preview-id AND create_time <
                \"2021-08-15T14:50:00Z\" AND create_time > \"2021-08-10T12:00:00Z\"`` - The id of the allowed value
                associated with the lifecycle attribute of the Version is _preview-id_ and it was created before
                _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. * ``compliance.enum_values.values.id:
                gdpr-id OR compliance.enum_values.values.id: pci-dss-id`` - The id of the allowed value associated with
                the compliance attribute is _gdpr-id_ or _pci-dss-id_. * ``lifecycle.enum_values.values.id: preview-id
                AND attributes.projects/test-project-id/locations/test-location-id/
                attributes/17650f90-4a29-4971-b3c0-d5532da3764b.string_values.values: test`` - The filter string
                specifies that the id of the allowed value associated with the lifecycle attribute of the Version is
                _preview-id_ and the value of the user defined attribute of type string is _test_.
            page_size: Optional. The maximum number of versions to return. The service may return fewer than this value.
                If unspecified, at most 50 versions will be returned. The maximum value is 1000; values above 1000 will
                be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListVersions`` call. Provide this to retrieve
                the subsequent page. When paginating, all other parameters (except page_size) provided to
                ``ListVersions`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
            ],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1ListVersionsResponse],
            error_mapper=apihub_projects_locations_apis_versions_list_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_apis_versions_operations_create(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        body: GoogleCloudApihubV1ApiOperation | GoogleCloudApihubV1ApiOperationDict,
        *,
        api_operation_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ApiOperation, ApihubProjectsLocationsApisVersionsOperationsCreateErrorBody]:
        """Create an apiOperation in an API version. An apiOperation can be created only if the version has no
        apiOperations which were created by parsing a spec.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            body: The request body.
            api_operation_id: Optional. The ID to use for the operation resource, which will become the final component
                of the operation's resource name. This field is optional. * If provided, the same will be used. The
                service will throw an error if the specified id is already used by another operation resource in the API
                hub. * If not provided, a system generated id will be used. This value should be 4-500 characters,
                overall resource name which will be of format
                ``projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}``, its
                length is limited to 1000 characters, and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
            ],
            query_params=[param[str | None]("apiOperationId", api_operation_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1ApiOperation | GoogleCloudApihubV1ApiOperationDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1ApiOperation],
            error_mapper=apihub_projects_locations_apis_versions_operations_create_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_apis_versions_operations_delete(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        operations_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsApisVersionsOperationsDeleteErrorBody]:
        """Delete an operation in an API version and we can delete only the operations created via create API. If the
        operation was created by parsing the spec, then it can be deleted by editing or deleting the spec. Deleting an
        operation will also remove any links between the operation and deployments.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations/{operationsId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
                param[str]("operationsId", operations_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=apihub_projects_locations_apis_versions_operations_delete_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_apis_versions_operations_get(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        operations_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ApiOperation, ApihubProjectsLocationsApisVersionsOperationsGetErrorBody]:
        """Get details about a particular operation in API version.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations/{operationsId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
                param[str]("operationsId", operations_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1ApiOperation],
            error_mapper=apihub_projects_locations_apis_versions_operations_get_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_apis_versions_operations_list(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1ListApiOperationsResponse, ApihubProjectsLocationsApisVersionsOperationsListErrorBody
    ]:
        r"""List operations in an API version.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            filter_: Optional. An expression that filters the list of ApiOperations. A filter expression consists of a
                field name, a comparison operator, and a value for filtering. The value must be a string or a boolean.
                The comparison operator must be one of: ``<``, ``>`` or ``=``. Filters are not case sensitive. The
                following fields in the ``ApiOperation`` are eligible for filtering: * ``name`` - The ApiOperation
                resource name. Allowed comparison operators: ``=``. * ``details.http_operation.path.path`` - The http
                operation's complete path relative to server endpoint. Allowed comparison operators: ``=``. *
                ``details.http_operation.method`` - The http operation method type. Allowed comparison operators: ``=``.
                * ``details.deprecated`` - Indicates if the ApiOperation is deprecated. Allowed values are True / False
                indicating the deprycation status of the ApiOperation. Allowed comparison operators: ``=``. *
                ``create_time`` - The time at which the ApiOperation was created. The value should be in the
                (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: ``>`` and ``<``. *
                ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.id`` - The allowed value id of the user defined
                enum attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.display_name`` - The allowed value display name
                of the user defined enum attribute associated with the Resource. Allowed comparison operator is ``:``.
                Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user
                defined enum attribute enum name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.string_values.values`` - The allowed value of the user defined
                string attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-string is a placeholder that can be replaced with any user defined string
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.json_values.values`` - The allowed value of the user defined JSON
                attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute
                name. Expressions are combined with either ``AND`` logic operator or ``OR`` logical operator but not
                both of them together i.e. only one of the ``AND`` or ``OR`` operator can be used throughout the filter
                string and both the operators cannot be used together. No other logical operators are supported. At most
                three filter fields are allowed in the filter string and if provided more than that then
                ``INVALID_ARGUMENT`` error is returned by the API. Here are a few examples: * ``details.deprecated =
                True`` - The ApiOperation is deprecated. * ``details.http_operation.method = GET AND create_time <
                \"2021-08-15T14:50:00Z\" AND create_time > \"2021-08-10T12:00:00Z\"`` - The method of the http operation
                of the ApiOperation is _GET_ and the spec was created before _2021-08-15 14:50:00 UTC_ and after
                _2021-08-10 12:00:00 UTC_. * ``details.http_operation.method = GET OR details.http_operation.method =
                POST``. - The http operation of the method of ApiOperation is _GET_ or _POST_. * ``details.deprecated =
                True AND attributes.projects/test-project-id/locations/test-location-id/
                attributes/17650f90-4a29-4971-b3c0-d5532da3764b.string_values.values: test`` - The filter string
                specifies that the ApiOperation is deprecated and the value of the user defined attribute of type string
                is _test_.
            page_size: Optional. The maximum number of operations to return. The service may return fewer than this
                value. If unspecified, at most 50 operations will be returned. The maximum value is 1000; values above
                1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListApiOperations`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to
                ``ListApiOperations`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
            ],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1ListApiOperationsResponse],
            error_mapper=apihub_projects_locations_apis_versions_operations_list_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_apis_versions_operations_patch(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        operations_id: str,
        body: GoogleCloudApihubV1ApiOperation | GoogleCloudApihubV1ApiOperationDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ApiOperation, ApihubProjectsLocationsApisVersionsOperationsPatchErrorBody]:
        """Update an operation in an API version. The following fields in the ApiOperation resource can be updated: *
        details.description * details.documentation * details.http_operation.path * details.http_operation.method *
        details.deprecated * attributes * details.mcp_tool.title * details.mcp_tool.description *
        details.mcp_tool.input_schema * details.mcp_tool.output_schema * details.input_schema * details.output_schema *
        details.mcp_tool.annotations.title * details.mcp_tool.annotations.read_only_hint *
        details.mcp_tool.annotations.destructive_hint * details.mcp_tool.annotations.idempotent_hint *
        details.mcp_tool.annotations.open_world_hint * details.mcp_tool.annotations.additional_hints The update_mask
        should be used to specify the fields being updated. An operation can be updated only if the operation was
        created via CreateApiOperation API. If the operation was created by parsing the spec, then it can be edited by
        updating the spec.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            operations_id: Resource name segment (operationsId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations/{operationsId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
                param[str]("operationsId", operations_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1ApiOperation | GoogleCloudApihubV1ApiOperationDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1ApiOperation],
            error_mapper=apihub_projects_locations_apis_versions_operations_patch_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_apis_versions_patch(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        body: GoogleCloudApihubV1Version | GoogleCloudApihubV1VersionDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Version, ApihubProjectsLocationsApisVersionsPatchErrorBody]:
        """Update API version. The following fields in the version can be updated currently: * display_name *
        description * documentation * deployments * lifecycle * compliance * accreditation * attributes The update_mask
        should be used to specify the fields being updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Version | GoogleCloudApihubV1VersionDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Version],
            error_mapper=apihub_projects_locations_apis_versions_patch_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_apis_versions_specs_create(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        body: GoogleCloudApihubV1Spec | GoogleCloudApihubV1SpecDict,
        *,
        spec_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Spec, ApihubProjectsLocationsApisVersionsSpecsCreateErrorBody]:
        """Add a spec to an API version in the API hub. Multiple specs can be added to an API version. Note, while
        adding a spec, at least one of ``contents`` or ``source_uri`` must be provided. If ``contents`` is provided,
        then ``spec_type`` must also be provided. On adding a spec with contents to the version, the operations present
        in it will be added to the version.Note that the file contents in the spec should be of the same type as defined
        in the ``projects/{project}/locations/{location}/attributes/system-spec-type`` attribute associated with spec
        resource. Note that specs of various types can be uploaded, however parsing of details is supported for OpenAPI
        spec currently. In order to access the information parsed from the spec, use the GetSpec method. In order to
        access the raw contents for a particular spec, use the GetSpecContents method. In order to access the operations
        parsed from the spec, use the ListAPIOperations method.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            body: The request body.
            spec_id: Optional. The ID to use for the spec, which will become the final component of the spec's resource
                name. This field is optional. * If provided, the same will be used. The service will throw an error if
                the specified id is already used by another spec in the API resource. * If not provided, a system
                generated id will be used. This value should be 4-500 characters, overall resource name which will be of
                format ``projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}``, its
                length is limited to 1000 characters and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
            ],
            query_params=[param[str | None]("specId", spec_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Spec | GoogleCloudApihubV1SpecDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Spec],
            error_mapper=apihub_projects_locations_apis_versions_specs_create_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_apis_versions_specs_delete(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        specs_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsApisVersionsSpecsDeleteErrorBody]:
        """Delete a spec. Deleting a spec will also delete the associated operations from the version and remove any
        links between the spec and deployments.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            specs_id: Resource name segment (specsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
                param[str]("specsId", specs_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=apihub_projects_locations_apis_versions_specs_delete_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_apis_versions_specs_fetch_additional_spec_content(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        specs_id: str,
        *,
        spec_content_type: SpecContentType1OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1FetchAdditionalSpecContentResponse,
        ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentErrorBody,
    ]:
        """Fetch additional spec content.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            specs_id: Resource name segment (specsId).
            spec_content_type: Optional. The type of the spec contents to be retrieved.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}:fetchAdditionalSpecContent",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
                param[str]("specsId", specs_id),
            ],
            query_params=[param[SpecContentType1OrStr | None]("specContentType", spec_content_type)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1FetchAdditionalSpecContentResponse],
            error_mapper=apihub_projects_locations_apis_versions_specs_fetch_additional_spec_content_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_apis_versions_specs_get(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        specs_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Spec, ApihubProjectsLocationsApisVersionsSpecsGetErrorBody]:
        """Get details about the information parsed from a spec. Note that this method does not return the raw spec
        contents. Use GetSpecContents method to retrieve the same.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            specs_id: Resource name segment (specsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
                param[str]("specsId", specs_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Spec],
            error_mapper=apihub_projects_locations_apis_versions_specs_get_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_apis_versions_specs_get_contents(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        specs_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1SpecContents, ApihubProjectsLocationsApisVersionsSpecsGetContentsErrorBody]:
        """Get spec contents.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            specs_id: Resource name segment (specsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}:contents",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
                param[str]("specsId", specs_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1SpecContents],
            error_mapper=apihub_projects_locations_apis_versions_specs_get_contents_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_apis_versions_specs_lint(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        specs_id: str,
        body: Any,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsApisVersionsSpecsLintErrorBody]:
        """Lints the requested spec and updates the corresponding API Spec with the lint response. This lint response
        will be available in all subsequent Get and List Spec calls to Core service.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            specs_id: Resource name segment (specsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}:lint",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
                param[str]("specsId", specs_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=apihub_projects_locations_apis_versions_specs_lint_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_apis_versions_specs_list(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ListSpecsResponse, ApihubProjectsLocationsApisVersionsSpecsListErrorBody]:
        r"""List specs corresponding to a particular API resource.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            filter_: Optional. An expression that filters the list of Specs. A filter expression consists of a field
                name, a comparison operator, and a value for filtering. The value must be a string. The comparison
                operator must be one of: ``<``, ``>``, ``:`` or ``=``. Filters are not case sensitive. The following
                fields in the ``Spec`` are eligible for filtering: * ``display_name`` - The display name of the Spec.
                Allowed comparison operators: ``=``. * ``create_time`` - The time at which the Spec was created. The
                value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison
                operators: ``>`` and ``<``. * ``spec_type.enum_values.values.id`` - The allowed value id of the
                spec_type attribute associated with the Spec. Allowed comparison operators: ``:``. *
                ``spec_type.enum_values.values.display_name`` - The allowed value display name of the spec_type
                attribute associated with the Spec. Allowed comparison operators: ``:``. *
                ``lint_response.json_values.values`` - The json value of the lint_response attribute associated with the
                Spec. Allowed comparison operators: ``:``. * ``mime_type`` - The MIME type of the Spec. Allowed
                comparison operators: ``=``. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.id`` - The allowed value id of the user defined
                enum attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.display_name`` - The allowed value display name
                of the user defined enum attribute associated with the Resource. Allowed comparison operator is ``:``.
                Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user
                defined enum attribute enum name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.string_values.values`` - The allowed value of the user defined
                string attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-string is a placeholder that can be replaced with any user defined string
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.json_values.values`` - The allowed value of the user defined JSON
                attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute
                name. Expressions are combined with either ``AND`` logic operator or ``OR`` logical operator but not
                both of them together i.e. only one of the ``AND`` or ``OR`` operator can be used throughout the filter
                string and both the operators cannot be used together. No other logical operators are supported. At most
                three filter fields are allowed in the filter string and if provided more than that then
                ``INVALID_ARGUMENT`` error is returned by the API. Here are a few examples: *
                ``spec_type.enum_values.values.id: rest-id`` - The filter string specifies that the id of the allowed
                value associated with the spec_type attribute is _rest-id_. *
                ``spec_type.enum_values.values.display_name: \"Rest Display Name\"`` - The filter string specifies that
                the display name of the allowed value associated with the spec_type attribute is ``Rest Display Name``.
                * ``spec_type.enum_values.values.id: grpc-id AND create_time < \"2021-08-15T14:50:00Z\" AND create_time
                > \"2021-08-10T12:00:00Z\"`` - The id of the allowed value associated with the spec_type attribute is
                _grpc-id_ and the spec was created before _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_.
                * ``spec_type.enum_values.values.id: rest-id OR spec_type.enum_values.values.id: grpc-id`` - The id of
                the allowed value associated with the spec_type attribute is _rest-id_ or _grpc-id_. *
                ``spec_type.enum_values.values.id: rest-id AND
                attributes.projects/test-project-id/locations/test-location-id/
                attributes/17650f90-4a29-4971-b3c0-d5532da3764b.enum_values.values.id: test`` - The filter string
                specifies that the id of the allowed value associated with the spec_type attribute is _rest-id_ and the
                id of the allowed value associated with the user defined attribute of type enum is _test_.
            page_size: Optional. The maximum number of specs to return. The service may return fewer than this value. If
                unspecified, at most 50 specs will be returned. The maximum value is 1000; values above 1000 will be
                coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListSpecs`` call. Provide this to retrieve
                the subsequent page. When paginating, all other parameters provided to ``ListSpecs`` must match the call
                that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
            ],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1ListSpecsResponse],
            error_mapper=apihub_projects_locations_apis_versions_specs_list_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_apis_versions_specs_patch(
        self,
        projects_id: str,
        locations_id: str,
        apis_id: str,
        versions_id: str,
        specs_id: str,
        body: GoogleCloudApihubV1Spec | GoogleCloudApihubV1SpecDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Spec, ApihubProjectsLocationsApisVersionsSpecsPatchErrorBody]:
        """Update spec. The following fields in the spec can be updated: * display_name * source_uri * lint_response *
        attributes * contents * spec_type In case of an OAS spec, updating spec contents can lead to: 1. Creation,
        deletion and update of operations. 2. Creation, deletion and update of definitions. 3. Update of other info
        parsed out from the new spec. In case of contents or source_uri being present in update mask, spec_type must
        also be present. Also, spec_type can not be present in update mask if contents or source_uri is not present. The
        update_mask should be used to specify the fields being updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            apis_id: Resource name segment (apisId).
            versions_id: Resource name segment (versionsId).
            specs_id: Resource name segment (specsId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("apisId", apis_id),
                param[str]("versionsId", versions_id),
                param[str]("specsId", specs_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Spec | GoogleCloudApihubV1SpecDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Spec],
            error_mapper=apihub_projects_locations_apis_versions_specs_patch_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_attributes_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1Attribute | GoogleCloudApihubV1AttributeDict,
        *,
        attribute_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Attribute, ApihubProjectsLocationsAttributesCreateErrorBody]:
        """Create a user defined attribute. Certain pre defined attributes are already created by the API hub. These
        attributes will have type as ``SYSTEM_DEFINED`` and can be listed via ListAttributes method. Allowed values for
        the same can be updated via UpdateAttribute method.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            attribute_id: Optional. The ID to use for the attribute, which will become the final component of the
                attribute's resource name. This field is optional. * If provided, the same will be used. The service
                will throw an error if the specified id is already used by another attribute resource in the API hub. *
                If not provided, a system generated id will be used. This value should be 4-500 characters, and valid
                characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/attributes"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("attributeId", attribute_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Attribute | GoogleCloudApihubV1AttributeDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Attribute],
            error_mapper=apihub_projects_locations_attributes_create_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_attributes_delete(
        self,
        projects_id: str,
        locations_id: str,
        attributes_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsAttributesDeleteErrorBody]:
        """Delete an attribute. Note: System defined attributes cannot be deleted. All associations of the attribute
        being deleted with any API hub resource will also get deleted.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            attributes_id: Resource name segment (attributesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/attributes/{attributesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("attributesId", attributes_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=apihub_projects_locations_attributes_delete_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_attributes_get(
        self,
        projects_id: str,
        locations_id: str,
        attributes_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Attribute, ApihubProjectsLocationsAttributesGetErrorBody]:
        """Get details about the attribute.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            attributes_id: Resource name segment (attributesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/attributes/{attributesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("attributesId", attributes_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Attribute],
            error_mapper=apihub_projects_locations_attributes_get_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_attributes_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ListAttributesResponse, ApihubProjectsLocationsAttributesListErrorBody]:
        r"""List all attributes.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of Attributes. A filter expression consists of a
                field name, a comparison operator, and a value for filtering. The value must be a string or a boolean.
                The comparison operator must be one of: ``<``, ``>`` or ``=``. Filters are not case sensitive. The
                following fields in the ``Attribute`` are eligible for filtering: * ``display_name`` - The display name
                of the Attribute. Allowed comparison operators: ``=``. * ``definition_type`` - The definition type of
                the attribute. Allowed comparison operators: ``=``. * ``scope`` - The scope of the attribute. Allowed
                comparison operators: ``=``. * ``data_type`` - The type of the data of the attribute. Allowed comparison
                operators: ``=``. * ``mandatory`` - Denotes whether the attribute is mandatory or not. Allowed
                comparison operators: ``=``. * ``create_time`` - The time at which the Attribute was created. The value
                should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators:
                ``>`` and ``<``. Expressions are combined with either ``AND`` logic operator or ``OR`` logical operator
                but not both of them together i.e. only one of the ``AND`` or ``OR`` operator can be used throughout the
                filter string and both the operators cannot be used together. No other logical operators are supported.
                At most three filter fields are allowed in the filter string and if provided more than that then
                ``INVALID_ARGUMENT`` error is returned by the API. Here are a few examples: * ``display_name =
                production`` - - The display name of the attribute is _production_. * ``(display_name = production) AND
                (create_time < \"2021-08-15T14:50:00Z\") AND (create_time > \"2021-08-10T12:00:00Z\")`` - The display
                name of the attribute is _production_ and the attribute was created before _2021-08-15 14:50:00 UTC_ and
                after _2021-08-10 12:00:00 UTC_. * ``display_name = production OR scope = api`` - The attribute where
                the display name is _production_ or the scope is _api_.
            page_size: Optional. The maximum number of attribute resources to return. The service may return fewer than
                this value. If unspecified, at most 50 attributes will be returned. The maximum value is 1000; values
                above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListAttributes`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListAttributes`` must
                match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/attributes"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1ListAttributesResponse],
            error_mapper=apihub_projects_locations_attributes_list_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_attributes_patch(
        self,
        projects_id: str,
        locations_id: str,
        attributes_id: str,
        body: GoogleCloudApihubV1Attribute | GoogleCloudApihubV1AttributeDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Attribute, ApihubProjectsLocationsAttributesPatchErrorBody]:
        """Update the attribute. The following fields in the Attribute resource can be updated: * display_name The
        display name can be updated for user defined attributes only. * description The description can be updated for
        user defined attributes only. * allowed_values To update the list of allowed values, clients need to use the
        fetched list of allowed values and add or remove values to or from the same list. The mutable allowed values can
        be updated for both user defined and System defined attributes. The immutable allowed values cannot be updated
        or deleted. The updated list of allowed values cannot be empty. If an allowed value that is already used by some
        resource's attribute is deleted, then the association between the resource and the attribute value will also be
        deleted. * cardinality The cardinality can be updated for user defined attributes only. Cardinality can only be
        increased during an update. The update_mask should be used to specify the fields being updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            attributes_id: Resource name segment (attributesId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/attributes/{attributesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("attributesId", attributes_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Attribute | GoogleCloudApihubV1AttributeDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Attribute],
            error_mapper=apihub_projects_locations_attributes_patch_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_collect_api_data(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1CollectApiDataRequest | GoogleCloudApihubV1CollectApiDataRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsCollectApiDataErrorBody]:
        """Collect API data from a source and push it to Hub's collect layer.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}:collectApiData"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1CollectApiDataRequest | GoogleCloudApihubV1CollectApiDataRequestDict](
                body
            ),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleLongrunningOperation],
            error_mapper=apihub_projects_locations_collect_api_data_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_curations_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1Curation | GoogleCloudApihubV1CurationDict,
        *,
        curation_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Curation, ApihubProjectsLocationsCurationsCreateErrorBody]:
        """Create a curation resource in the API hub. Once a curation resource is created, plugin instances can start
        using it.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            curation_id: Optional. The ID to use for the curation resource, which will become the final component of the
                curations's resource name. This field is optional. * If provided, the same will be used. The service
                will throw an error if the specified ID is already used by another curation resource in the API hub. *
                If not provided, a system generated ID will be used. This value should be 4-500 characters, and valid
                characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/curations"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("curationId", curation_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Curation | GoogleCloudApihubV1CurationDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Curation],
            error_mapper=apihub_projects_locations_curations_create_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_curations_delete(
        self,
        projects_id: str,
        locations_id: str,
        curations_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsCurationsDeleteErrorBody]:
        """Delete a curation resource in the API hub. A curation can only be deleted if it's not being used by any
        plugin instance.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            curations_id: Resource name segment (curationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/curations/{curationsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("curationsId", curations_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=apihub_projects_locations_curations_delete_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_curations_get(
        self,
        projects_id: str,
        locations_id: str,
        curations_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Curation, ApihubProjectsLocationsCurationsGetErrorBody]:
        """Get curation resource details.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            curations_id: Resource name segment (curationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/curations/{curationsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("curationsId", curations_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Curation],
            error_mapper=apihub_projects_locations_curations_get_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_curations_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ListCurationsResponse, ApihubProjectsLocationsCurationsListErrorBody]:
        r"""List curation resources in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of curation resources. A filter expression consists
                of a field name, a comparison operator, and a value for filtering. The value must be a string. The
                comparison operator must be one of: ``<``, ``>``, ``:`` or ``=``. Filters are case insensitive. The
                following fields in the ``curation resource`` are eligible for filtering: * ``create_time`` - The time
                at which the curation was created. The value should be in the
                (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: ``>`` and ``<``. *
                ``display_name`` - The display name of the curation. Allowed comparison operators: ``=``. * ``state`` -
                The state of the curation. Allowed comparison operators: ``=``. Expressions are combined with either
                ``AND`` logic operator or ``OR`` logical operator but not both of them together i.e. only one of the
                ``AND`` or ``OR`` operator can be used throughout the filter string and both the operators cannot be
                used together. No other logical operators are supported. At most three filter fields are allowed in the
                filter string and if provided more than that then ``INVALID_ARGUMENT`` error is returned by the API.
                Here are a few examples: * ``create_time < \"2021-08-15T14:50:00Z\" AND create_time >
                \"2021-08-10T12:00:00Z\"`` - The curation resource was created before _2021-08-15 14:50:00 UTC_ and
                after _2021-08-10 12:00:00 UTC_.
            page_size: Optional. The maximum number of curation resources to return. The service may return fewer than
                this value. If unspecified, at most 50 curations will be returned. The maximum value is 1000; values
                above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListCurations`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to
                ``ListCurations`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/curations"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1ListCurationsResponse],
            error_mapper=apihub_projects_locations_curations_list_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_curations_patch(
        self,
        projects_id: str,
        locations_id: str,
        curations_id: str,
        body: GoogleCloudApihubV1Curation | GoogleCloudApihubV1CurationDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Curation, ApihubProjectsLocationsCurationsPatchErrorBody]:
        """Update a curation resource in the API hub. The following fields in the curation can be updated: *
        display_name * description The update_mask should be used to specify the fields being updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            curations_id: Resource name segment (curationsId).
            body: The request body.
            update_mask: Optional. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/curations/{curationsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("curationsId", curations_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Curation | GoogleCloudApihubV1CurationDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Curation],
            error_mapper=apihub_projects_locations_curations_patch_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_dependencies_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1Dependency | GoogleCloudApihubV1DependencyDict,
        *,
        dependency_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Dependency, ApihubProjectsLocationsDependenciesCreateErrorBody]:
        """Create a dependency between two entities in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            dependency_id: Optional. The ID to use for the dependency resource, which will become the final component of
                the dependency's resource name. This field is optional. * If provided, the same will be used. The
                service will throw an error if duplicate id is provided by the client. * If not provided, a system
                generated id will be used. This value should be 4-500 characters, and valid characters are
                ``a-z[0-9]-_``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/dependencies"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("dependencyId", dependency_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Dependency | GoogleCloudApihubV1DependencyDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Dependency],
            error_mapper=apihub_projects_locations_dependencies_create_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_dependencies_delete(
        self,
        projects_id: str,
        locations_id: str,
        dependencies_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsDependenciesDeleteErrorBody]:
        """Delete the dependency resource.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            dependencies_id: Resource name segment (dependenciesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/dependencies/{dependenciesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("dependenciesId", dependencies_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=apihub_projects_locations_dependencies_delete_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_dependencies_get(
        self,
        projects_id: str,
        locations_id: str,
        dependencies_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Dependency, ApihubProjectsLocationsDependenciesGetErrorBody]:
        """Get details about a dependency resource in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            dependencies_id: Resource name segment (dependenciesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/dependencies/{dependenciesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("dependenciesId", dependencies_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Dependency],
            error_mapper=apihub_projects_locations_dependencies_get_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_dependencies_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ListDependenciesResponse, ApihubProjectsLocationsDependenciesListErrorBody]:
        r"""List dependencies based on the provided filter and pagination parameters.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of Dependencies. A filter expression consists of a
                field name, a comparison operator, and a value for filtering. The value must be a string. Allowed
                comparison operator is ``=``. Filters are not case sensitive. The following fields in the ``Dependency``
                are eligible for filtering: * ``consumer.operation_resource_name`` - The operation resource name for the
                consumer entity involved in a dependency. Allowed comparison operators: ``=``. *
                ``consumer.external_api_resource_name`` - The external api resource name for the consumer entity
                involved in a dependency. Allowed comparison operators: ``=``. * ``supplier.operation_resource_name`` -
                The operation resource name for the supplier entity involved in a dependency. Allowed comparison
                operators: ``=``. * ``supplier.external_api_resource_name`` - The external api resource name for the
                supplier entity involved in a dependency. Allowed comparison operators: ``=``. Expressions are combined
                with either ``AND`` logic operator or ``OR`` logical operator but not both of them together i.e. only
                one of the ``AND`` or ``OR`` operator can be used throughout the filter string and both the operators
                cannot be used together. No other logical operators are supported. At most three filter fields are
                allowed in the filter string and if provided more than that then ``INVALID_ARGUMENT`` error is returned
                by the API. For example, ``consumer.operation_resource_name =
                \"projects/p1/locations/global/apis/a1/versions/v1/operations/o1\" OR supplier.operation_resource_name =
                \"projects/p1/locations/global/apis/a1/versions/v1/operations/o1\"`` - The dependencies with either
                consumer or supplier operation resource name as
                _projects/p1/locations/global/apis/a1/versions/v1/operations/o1_.
            page_size: Optional. The maximum number of dependency resources to return. The service may return fewer than
                this value. If unspecified, at most 50 dependencies will be returned. The maximum value is 1000; values
                above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListDependencies`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListDependencies``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/dependencies"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1ListDependenciesResponse],
            error_mapper=apihub_projects_locations_dependencies_list_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_dependencies_patch(
        self,
        projects_id: str,
        locations_id: str,
        dependencies_id: str,
        body: GoogleCloudApihubV1Dependency | GoogleCloudApihubV1DependencyDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Dependency, ApihubProjectsLocationsDependenciesPatchErrorBody]:
        """Update a dependency based on the update_mask provided in the request. The following fields in the dependency
        can be updated: * description

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            dependencies_id: Resource name segment (dependenciesId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/dependencies/{dependenciesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("dependenciesId", dependencies_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Dependency | GoogleCloudApihubV1DependencyDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Dependency],
            error_mapper=apihub_projects_locations_dependencies_patch_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_deployments_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1Deployment | GoogleCloudApihubV1DeploymentDict,
        *,
        deployment_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Deployment, ApihubProjectsLocationsDeploymentsCreateErrorBody]:
        """Create a deployment resource in the API hub. Once a deployment resource is created, it can be associated with
        API versions.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            deployment_id: Optional. The ID to use for the deployment resource, which will become the final component of
                the deployment's resource name. This field is optional. * If provided, the same will be used. The
                service will throw an error if the specified id is already used by another deployment resource in the
                API hub. * If not provided, a system generated id will be used. This value should be 4-500 characters,
                and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/deployments"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("deploymentId", deployment_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Deployment | GoogleCloudApihubV1DeploymentDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Deployment],
            error_mapper=apihub_projects_locations_deployments_create_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_deployments_delete(
        self,
        projects_id: str,
        locations_id: str,
        deployments_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsDeploymentsDeleteErrorBody]:
        """Deletes a deployment resource in the API hub. A deployment can only be deleted after its links to any
        versions, specs, and API operations have been removed.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            deployments_id: Resource name segment (deploymentsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/deployments/{deploymentsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("deploymentsId", deployments_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=apihub_projects_locations_deployments_delete_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_deployments_get(
        self,
        projects_id: str,
        locations_id: str,
        deployments_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Deployment, ApihubProjectsLocationsDeploymentsGetErrorBody]:
        """Get details about a deployment and the API versions linked to it.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            deployments_id: Resource name segment (deploymentsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/deployments/{deploymentsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("deploymentsId", deployments_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Deployment],
            error_mapper=apihub_projects_locations_deployments_get_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_deployments_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ListDeploymentsResponse, ApihubProjectsLocationsDeploymentsListErrorBody]:
        r"""List deployment resources in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of Deployments. A filter expression consists of a
                field name, a comparison operator, and a value for filtering. The value must be a string. The comparison
                operator must be one of: ``<``, ``>`` or ``=``. Filters are not case sensitive. The following fields in
                the ``Deployments`` are eligible for filtering: * ``display_name`` - The display name of the Deployment.
                Allowed comparison operators: ``=``. * ``create_time`` - The time at which the Deployment was created.
                The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison
                operators: ``>`` and ``<``. * ``resource_uri`` - A URI to the deployment resource. Allowed comparison
                operators: ``=``. * ``api_versions`` - The API versions linked to this deployment. Allowed comparison
                operators: ``:``. * ``source_project`` - The project/organization at source for the deployment. Allowed
                comparison operators: ``=``. * ``source_environment`` - The environment at source for the deployment.
                Allowed comparison operators: ``=``. * ``deployment_type.enum_values.values.id`` - The allowed value id
                of the deployment_type attribute associated with the Deployment. Allowed comparison operators: ``:``. *
                ``deployment_type.enum_values.values.display_name`` - The allowed value display name of the
                deployment_type attribute associated with the Deployment. Allowed comparison operators: ``:``. *
                ``slo.string_values.values`` -The allowed string value of the slo attribute associated with the
                deployment. Allowed comparison operators: ``:``. * ``environment.enum_values.values.id`` - The allowed
                value id of the environment attribute associated with the deployment. Allowed comparison operators:
                ``:``. * ``environment.enum_values.values.display_name`` - The allowed value display name of the
                environment attribute associated with the deployment. Allowed comparison operators: ``:``. *
                ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.id`` - The allowed value id of the user defined
                enum attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.enum_values.values.display_name`` - The allowed value display name
                of the user defined enum attribute associated with the Resource. Allowed comparison operator is ``:``.
                Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user
                defined enum attribute enum name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.string_values.values`` - The allowed value of the user defined
                string attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-string is a placeholder that can be replaced with any user defined string
                attribute name. * ``attributes.projects/test-project-id/locations/test-location-id/
                attributes/user-defined-attribute-id.json_values.values`` - The allowed value of the user defined JSON
                attribute associated with the Resource. Allowed comparison operator is ``:``. Here
                user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute
                name. A filter function is also supported in the filter string. The filter function is ``id(name)``. The
                ``id(name)`` function returns the id of the resource name. For example, ``id(name) = \"deployment-1\"``
                is equivalent to ``name =
                \"projects/test-project-id/locations/test-location-id/deployments/deployment-1\"`` provided the parent
                is ``projects/test-project-id/locations/test-location-id``. Expressions are combined with either ``AND``
                logic operator or ``OR`` logical operator but not both of them together i.e. only one of the ``AND`` or
                ``OR`` operator can be used throughout the filter string and both the operators cannot be used together.
                No other logical operators are supported. At most three filter fields are allowed in the filter string
                and if provided more than that then ``INVALID_ARGUMENT`` error is returned by the API. Here are a few
                examples: * ``environment.enum_values.values.id: staging-id`` - The allowed value id of the environment
                attribute associated with the Deployment is _staging-id_. *
                ``environment.enum_values.values.display_name: \"Staging Deployment\"`` - The allowed value display name
                of the environment attribute associated with the Deployment is ``Staging Deployment``. *
                ``environment.enum_values.values.id: production-id AND create_time < \"2021-08-15T14:50:00Z\" AND
                create_time > \"2021-08-10T12:00:00Z\"`` - The allowed value id of the environment attribute associated
                with the Deployment is _production-id_ and Deployment was created before _2021-08-15 14:50:00 UTC_ and
                after _2021-08-10 12:00:00 UTC_. * ``environment.enum_values.values.id: production-id OR
                slo.string_values.values: \"99.99%\"`` - The allowed value id of the environment attribute Deployment is
                _production-id_ or string value of the slo attribute is _99.99%_. * ``environment.enum_values.values.id:
                staging-id AND attributes.projects/test-project-id/locations/test-location-id/
                attributes/17650f90-4a29-4971-b3c0-d5532da3764b.string_values.values: test`` - The filter string
                specifies that the allowed value id of the environment attribute associated with the Deployment is
                _staging-id_ and the value of the user defined attribute of type string is _test_.
            page_size: Optional. The maximum number of deployment resources to return. The service may return fewer than
                this value. If unspecified, at most 50 deployments will be returned. The maximum value is 1000; values
                above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListDeployments`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to
                ``ListDeployments`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/deployments"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1ListDeploymentsResponse],
            error_mapper=apihub_projects_locations_deployments_list_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_deployments_patch(
        self,
        projects_id: str,
        locations_id: str,
        deployments_id: str,
        body: GoogleCloudApihubV1Deployment | GoogleCloudApihubV1DeploymentDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Deployment, ApihubProjectsLocationsDeploymentsPatchErrorBody]:
        """Update a deployment resource in the API hub. The following fields in the deployment resource can be updated:
        * display_name * description * documentation * deployment_type * resource_uri * endpoints * slo * environment *
        attributes * source_project * source_environment * management_url * source_uri The update_mask should be used to
        specify the fields being updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            deployments_id: Resource name segment (deploymentsId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/deployments/{deploymentsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("deploymentsId", deployments_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Deployment | GoogleCloudApihubV1DeploymentDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Deployment],
            error_mapper=apihub_projects_locations_deployments_patch_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_discovered_api_observations_discovered_api_operations_get(
        self,
        projects_id: str,
        locations_id: str,
        discovered_api_observations_id: str,
        discovered_api_operations_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1DiscoveredApiOperation,
        ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetErrorBody,
    ]:
        """Gets a DiscoveredAPIOperation in a given project, location, ApiObservation and ApiOperation.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            discovered_api_observations_id: Resource name segment (discoveredApiObservationsId).
            discovered_api_operations_id: Resource name segment (discoveredApiOperationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/discoveredApiObservations/{discoveredApiObservationsId}/discoveredApiOperations/{discoveredApiOperationsId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("discoveredApiObservationsId", discovered_api_observations_id),
                param[str]("discoveredApiOperationsId", discovered_api_operations_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1DiscoveredApiOperation],
            error_mapper=apihub_projects_locations_discovered_api_observations_discovered_api_operations_get_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_discovered_api_observations_discovered_api_operations_list(
        self,
        projects_id: str,
        locations_id: str,
        discovered_api_observations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1ListDiscoveredApiOperationsResponse,
        ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListErrorBody,
    ]:
        """Lists all the DiscoveredAPIOperations in a given project, location and ApiObservation.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            discovered_api_observations_id: Resource name segment (discoveredApiObservationsId).
            page_size: Optional. DiscoveredApiOperations will be returned. The maximum value is 1000; values above 1000
                will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListDiscoveredApiApiOperations`` call.
                Provide this to retrieve the subsequent page. When paginating, all other parameters provided to
                ``ListDiscoveredApiApiOperations`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/discoveredApiObservations/{discoveredApiObservationsId}/discoveredApiOperations",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("discoveredApiObservationsId", discovered_api_observations_id),
            ],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1ListDiscoveredApiOperationsResponse],
            error_mapper=apihub_projects_locations_discovered_api_observations_discovered_api_operations_list_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_discovered_api_observations_get(
        self,
        projects_id: str,
        locations_id: str,
        discovered_api_observations_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1DiscoveredApiObservation, ApihubProjectsLocationsDiscoveredApiObservationsGetErrorBody
    ]:
        """Gets a DiscoveredAPIObservation in a given project, location and ApiObservation.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            discovered_api_observations_id: Resource name segment (discoveredApiObservationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/discoveredApiObservations/{discoveredApiObservationsId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("discoveredApiObservationsId", discovered_api_observations_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1DiscoveredApiObservation],
            error_mapper=apihub_projects_locations_discovered_api_observations_get_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_discovered_api_observations_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1ListDiscoveredApiObservationsResponse,
        ApihubProjectsLocationsDiscoveredApiObservationsListErrorBody,
    ]:
        """Lists all the DiscoveredAPIObservations in a given project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            page_size: Optional. The maximum number of ApiObservations to return. The service may return fewer than this
                value. If unspecified, at most 10 ApiObservations will be returned. The maximum value is 1000; values
                above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListApiObservations`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListApiObservations``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/discoveredApiObservations"
            ),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1ListDiscoveredApiObservationsResponse],
            error_mapper=apihub_projects_locations_discovered_api_observations_list_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_external_apis_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1ExternalApi | GoogleCloudApihubV1ExternalApiDict,
        *,
        external_api_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ExternalApi, ApihubProjectsLocationsExternalApisCreateErrorBody]:
        """Create an External API resource in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            external_api_id: Optional. The ID to use for the External API resource, which will become the final
                component of the External API's resource name. This field is optional. * If provided, the same will be
                used. The service will throw an error if the specified id is already used by another External API
                resource in the API hub. * If not provided, a system generated id will be used. This value should be
                4-500 characters, and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/externalApis"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("externalApiId", external_api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1ExternalApi | GoogleCloudApihubV1ExternalApiDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1ExternalApi],
            error_mapper=apihub_projects_locations_external_apis_create_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_external_apis_delete(
        self,
        projects_id: str,
        locations_id: str,
        external_apis_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsExternalApisDeleteErrorBody]:
        """Delete an External API resource in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            external_apis_id: Resource name segment (externalApisId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/externalApis/{externalApisId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("externalApisId", external_apis_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=apihub_projects_locations_external_apis_delete_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_external_apis_get(
        self,
        projects_id: str,
        locations_id: str,
        external_apis_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ExternalApi, ApihubProjectsLocationsExternalApisGetErrorBody]:
        """Get details about an External API resource in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            external_apis_id: Resource name segment (externalApisId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/externalApis/{externalApisId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("externalApisId", external_apis_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1ExternalApi],
            error_mapper=apihub_projects_locations_external_apis_get_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_external_apis_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ListExternalApisResponse, ApihubProjectsLocationsExternalApisListErrorBody]:
        """List External API resources in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            page_size: Optional. The maximum number of External API resources to return. The service may return fewer
                than this value. If unspecified, at most 50 ExternalApis will be returned. The maximum value is 1000;
                values above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListExternalApis`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to
                ``ListExternalApis`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/externalApis"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1ListExternalApisResponse],
            error_mapper=apihub_projects_locations_external_apis_list_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_external_apis_patch(
        self,
        projects_id: str,
        locations_id: str,
        external_apis_id: str,
        body: GoogleCloudApihubV1ExternalApi | GoogleCloudApihubV1ExternalApiDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ExternalApi, ApihubProjectsLocationsExternalApisPatchErrorBody]:
        """Update an External API resource in the API hub. The following fields can be updated: * display_name *
        description * documentation * endpoints * paths The update_mask should be used to specify the fields being
        updated.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            external_apis_id: Resource name segment (externalApisId).
            body: The request body.
            update_mask: Required. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/externalApis/{externalApisId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("externalApisId", external_apis_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1ExternalApi | GoogleCloudApihubV1ExternalApiDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1ExternalApi],
            error_mapper=apihub_projects_locations_external_apis_patch_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_generated_spec_apis_generate_spec(
        self,
        projects_id: str,
        locations_id: str,
        generated_spec_apis_id: str,
        body: GoogleCloudApihubV1GenerateSpecRequest | GoogleCloudApihubV1GenerateSpecRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1GenerateSpecResponse, ApihubProjectsLocationsGeneratedSpecApisGenerateSpecErrorBody
    ]:
        """Merges the per-day stored specs across the requested window and returns the merged OpenAPI document. Preview:
        this method is in Public Preview. Behavior and the API surface may change until the Spec Generation feature
        reaches General Availability.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            generated_spec_apis_id: Resource name segment (generatedSpecApisId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/generatedSpecApis/{generatedSpecApisId}:generateSpec"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("generatedSpecApisId", generated_spec_apis_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1GenerateSpecRequest | GoogleCloudApihubV1GenerateSpecRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1GenerateSpecResponse],
            error_mapper=apihub_projects_locations_generated_spec_apis_generate_spec_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_generated_spec_apis_get(
        self,
        projects_id: str,
        locations_id: str,
        generated_spec_apis_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1GeneratedSpecApi, ApihubProjectsLocationsGeneratedSpecApisGetErrorBody]:
        """Gets a single GeneratedSpecApi by resource name. Preview: this method is in Public Preview. Behavior and the
        API surface may change until the Spec Generation feature reaches General Availability.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            generated_spec_apis_id: Resource name segment (generatedSpecApisId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/generatedSpecApis/{generatedSpecApisId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("generatedSpecApisId", generated_spec_apis_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1GeneratedSpecApi],
            error_mapper=apihub_projects_locations_generated_spec_apis_get_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_generated_spec_apis_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1ListGeneratedSpecApisResponse, ApihubProjectsLocationsGeneratedSpecApisListErrorBody
    ]:
        """Lists the APIs the pipeline is tracking, ordered by ``update_time desc``. Preview: this method is in Public
        Preview. Behavior and the API surface may change until the Spec Generation feature reaches General Availability.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An AIP-160 filter. This release supports the fields ``state`` and ``source.source_type``,
                the ``=`` comparison operator only, and ``AND`` conjunction only. Examples: - ``state =
                "SPEC_GENERATED"`` - ``state = "SPEC_ASSOCIATED" AND source.source_type = APIGEE_X``
            page_size: Optional. The maximum number of results to return. The service may return fewer. If unspecified,
                at most 50 will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListGeneratedSpecApis`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters (except ``page_size``) provided to
                ``ListGeneratedSpecApis`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/generatedSpecApis"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1ListGeneratedSpecApisResponse],
            error_mapper=apihub_projects_locations_generated_spec_apis_list_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_get(
        self, projects_id: str, locations_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GoogleCloudLocationLocation, ApihubProjectsLocationsGetErrorBody]:
        """Gets information about a location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudLocationLocation],
            error_mapper=apihub_projects_locations_get_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_host_project_registrations_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1HostProjectRegistration | GoogleCloudApihubV1HostProjectRegistrationDict,
        *,
        host_project_registration_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1HostProjectRegistration, ApihubProjectsLocationsHostProjectRegistrationsCreateErrorBody
    ]:
        """Create a host project registration. A Google cloud project can be registered as a host project if it is not
        attached as a runtime project to another host project. A project can have only one host project registration at
        a time. Subsequent register calls for the same project will fail until the existing registration is deleted.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            host_project_registration_id: Required. The ID to use for the Host Project Registration, which will become
                the final component of the host project registration's resource name. The ID must be the same as the
                Google cloud project specified in the host_project_registration.gcp_project field.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/hostProjectRegistrations"
            ),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("hostProjectRegistrationId", host_project_registration_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1HostProjectRegistration | GoogleCloudApihubV1HostProjectRegistrationDict](
                body
            ),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1HostProjectRegistration],
            error_mapper=apihub_projects_locations_host_project_registrations_create_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_host_project_registrations_get(
        self,
        projects_id: str,
        locations_id: str,
        host_project_registrations_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1HostProjectRegistration, ApihubProjectsLocationsHostProjectRegistrationsGetErrorBody
    ]:
        """Get a host project registration.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            host_project_registrations_id: Resource name segment (hostProjectRegistrationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/hostProjectRegistrations/{hostProjectRegistrationsId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("hostProjectRegistrationsId", host_project_registrations_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1HostProjectRegistration],
            error_mapper=apihub_projects_locations_host_project_registrations_get_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_host_project_registrations_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1ListHostProjectRegistrationsResponse,
        ApihubProjectsLocationsHostProjectRegistrationsListErrorBody,
    ]:
        """Lists host project registrations.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of HostProjectRegistrations. A filter expression
                consists of a field name, a comparison operator, and a value for filtering. The value must be a string.
                All standard operators as documented at https://google.aip.dev/160 are supported. The following fields
                in the ``HostProjectRegistration`` are eligible for filtering: * ``name`` - The name of the
                HostProjectRegistration. * ``create_time`` - The time at which the HostProjectRegistration was created.
                The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. * ``gcp_project`` -
                The Google cloud project associated with the HostProjectRegistration.
            order_by: Optional. Hint for how to order the results.
            page_size: Optional. The maximum number of host project registrations to return. The service may return
                fewer than this value. If unspecified, at most 50 host project registrations will be returned. The
                maximum value is 1000; values above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListHostProjectRegistrations`` call. Provide
                this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided
                to ``ListHostProjectRegistrations`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/hostProjectRegistrations"
            ),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[str | None]("orderBy", order_by),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1ListHostProjectRegistrationsResponse],
            error_mapper=apihub_projects_locations_host_project_registrations_list_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_list(
        self,
        projects_id: str,
        *,
        extra_location_types: list[str] | None = None,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudLocationListLocationsResponse, ApihubProjectsLocationsListErrorBody]:
        """Lists information about the supported locations for this service. This method lists locations based on the
        resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If ``name`` is empty,
        the method lists the public locations available to all projects. * **Project-specific locations**: If ``name``
        follows the format ``projects/{project}``, the method lists locations visible to that specific project. This
        includes public, private, or other project-specific locations enabled for the project. For gRPC and client
        library implementations, the resource name is passed as the ``name`` field. For direct service calls, the
        resource name is incorporated into the request path based on the specific service implementation and version.

        Args:
            projects_id: Resource name segment (projectsId).
            extra_location_types: Optional. Do not use this field unless explicitly documented otherwise. This is
                primarily for internal usage.
            filter_: A filter to narrow down results to a preferred subset. The filtering language accepts strings like
                ``"displayName=tokyo"``, and is documented in more detail in `AIP-160 <https://google.aip.dev/160>`__.
            page_size: The maximum number of results to return. If not set, the service selects a default.
            page_token: A page token received from the ``next_page_token`` field in the response. Send that page token
                to receive the subsequent page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations"),
            path_params=[param[str]("projectsId", projects_id)],
            query_params=[
                param[list[str] | None]("extraLocationTypes", extra_location_types),
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudLocationListLocationsResponse],
            error_mapper=apihub_projects_locations_list_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_lookup_runtime_project_attachment(
        self, projects_id: str, locations_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[
        GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse,
        ApihubProjectsLocationsLookupRuntimeProjectAttachmentErrorBody,
    ]:
        """Look up a runtime project attachment. This API can be called in the context of any project.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}:lookupRuntimeProjectAttachment"
            ),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse],
            error_mapper=apihub_projects_locations_lookup_runtime_project_attachment_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_operations_cancel(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        body: Any,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsOperationsCancelErrorBody]:
        """Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the
        operation, but success is not guaranteed. If the server doesn't support this method, it returns
        ``google.rpc.Code.UNIMPLEMENTED``. Clients can use Operations.GetOperation or other methods to check whether the
        cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the
        operation is not deleted; instead, it becomes an operation with an Operation.error value with a
        google.rpc.Status.code of ``1``, corresponding to ``Code.CANCELLED``.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("operationsId", operations_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=apihub_projects_locations_operations_cancel_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_operations_delete(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsOperationsDeleteErrorBody]:
        """Deletes a long-running operation. This method indicates that the client is no longer interested in the
        operation result. It does not cancel the operation. If the server doesn't support this method, it returns
        ``google.rpc.Code.UNIMPLEMENTED``.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("operationsId", operations_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=apihub_projects_locations_operations_delete_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_operations_get(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsOperationsGetErrorBody]:
        """Gets the latest state of a long-running operation. Clients can use this method to poll the operation result
        at intervals as recommended by the API service.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("operationsId", operations_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleLongrunningOperation],
            error_mapper=apihub_projects_locations_operations_get_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_operations_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        return_partial_success: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningListOperationsResponse, ApihubProjectsLocationsOperationsListErrorBody]:
        """Lists operations that match the specified filter in the request. If the server doesn't support this method,
        it returns ``UNIMPLEMENTED``.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: The standard list filter.
            page_size: The standard list page size.
            page_token: The standard list page token.
            return_partial_success: When set to ``true``, operations that are reachable are returned as normal, and
                those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only
                be ``true`` when reading across collections. For example, when ``parent`` is set to
                ``"projects/example/locations/-"``. This field is not supported by default and will result in an
                ``UNIMPLEMENTED`` error if set unless explicitly documented otherwise in service or product specific
                documentation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/operations"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
                param[bool | None]("returnPartialSuccess", return_partial_success),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleLongrunningListOperationsResponse],
            error_mapper=apihub_projects_locations_operations_list_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_plugins_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1Plugin | GoogleCloudApihubV1PluginDict,
        *,
        plugin_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Plugin, ApihubProjectsLocationsPluginsCreateErrorBody]:
        """Create an API Hub plugin resource in the API hub. Once a plugin is created, it can be used to create plugin
        instances.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            plugin_id: Optional. The ID to use for the Plugin resource, which will become the final component of the
                Plugin's resource name. This field is optional. * If provided, the same will be used. The service will
                throw an error if the specified id is already used by another Plugin resource in the API hub instance. *
                If not provided, a system generated id will be used. This value should be 4-63 characters, overall
                resource name which will be of format ``projects/{project}/locations/{location}/plugins/{plugin}``, its
                length is limited to 1000 characters and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/plugins"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("pluginId", plugin_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1Plugin | GoogleCloudApihubV1PluginDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Plugin],
            error_mapper=apihub_projects_locations_plugins_create_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_plugins_delete(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsPluginsDeleteErrorBody]:
        """Delete a Plugin in API hub. Note, only user owned plugins can be deleted via this method.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleLongrunningOperation],
            error_mapper=apihub_projects_locations_plugins_delete_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_plugins_disable(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        body: Any,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Plugin, ApihubProjectsLocationsPluginsDisableErrorBody]:
        """Disables a plugin. The ``state`` of the plugin after disabling is ``DISABLED``

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}:disable"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Plugin],
            error_mapper=apihub_projects_locations_plugins_disable_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_plugins_enable(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        body: Any,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Plugin, ApihubProjectsLocationsPluginsEnableErrorBody]:
        """Enables a plugin. The ``state`` of the plugin after enabling is ``ENABLED``

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}:enable"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Plugin],
            error_mapper=apihub_projects_locations_plugins_enable_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_plugins_get(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1Plugin, ApihubProjectsLocationsPluginsGetErrorBody]:
        """Get an API Hub plugin.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1Plugin],
            error_mapper=apihub_projects_locations_plugins_get_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_plugins_get_style_guide(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1StyleGuide, ApihubProjectsLocationsPluginsGetStyleGuideErrorBody]:
        """Get the style guide being used for linting.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/styleGuide"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1StyleGuide],
            error_mapper=apihub_projects_locations_plugins_get_style_guide_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_plugins_instances_create(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        body: GoogleCloudApihubV1PluginInstance | GoogleCloudApihubV1PluginInstanceDict,
        *,
        plugin_instance_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsPluginsInstancesCreateErrorBody]:
        """Creates a Plugin instance in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            body: The request body.
            plugin_instance_id: Optional. The ID to use for the plugin instance, which will become the final component
                of the plugin instance's resource name. This field is optional. * If provided, the same will be used.
                The service will throw an error if the specified id is already used by another plugin instance in the
                plugin resource. * If not provided, a system generated id will be used. This value should be 4-63
                characters, and valid characters are /a-z[0-9]-_/.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
            ],
            query_params=[param[str | None]("pluginInstanceId", plugin_instance_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1PluginInstance | GoogleCloudApihubV1PluginInstanceDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleLongrunningOperation],
            error_mapper=apihub_projects_locations_plugins_instances_create_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_plugins_instances_delete(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsPluginsInstancesDeleteErrorBody]:
        """Deletes a plugin instance in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
                param[str]("instancesId", instances_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleLongrunningOperation],
            error_mapper=apihub_projects_locations_plugins_instances_delete_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_plugins_instances_disable_action(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        body: (
            GoogleCloudApihubV1DisablePluginInstanceActionRequest
            | GoogleCloudApihubV1DisablePluginInstanceActionRequestDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsPluginsInstancesDisableActionErrorBody]:
        """Disables a plugin instance in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}:disableAction",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
                param[str]("instancesId", instances_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    GoogleCloudApihubV1DisablePluginInstanceActionRequest
                    | GoogleCloudApihubV1DisablePluginInstanceActionRequestDict
                )
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleLongrunningOperation],
            error_mapper=apihub_projects_locations_plugins_instances_disable_action_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_plugins_instances_enable_action(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        body: (
            GoogleCloudApihubV1EnablePluginInstanceActionRequest
            | GoogleCloudApihubV1EnablePluginInstanceActionRequestDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsPluginsInstancesEnableActionErrorBody]:
        """Enables a plugin instance in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}:enableAction",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
                param[str]("instancesId", instances_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    GoogleCloudApihubV1EnablePluginInstanceActionRequest
                    | GoogleCloudApihubV1EnablePluginInstanceActionRequestDict
                )
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleLongrunningOperation],
            error_mapper=apihub_projects_locations_plugins_instances_enable_action_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_plugins_instances_execute_action(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        body: (
            GoogleCloudApihubV1ExecutePluginInstanceActionRequest
            | GoogleCloudApihubV1ExecutePluginInstanceActionRequestDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsPluginsInstancesExecuteActionErrorBody]:
        """Executes a plugin instance in the API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}:executeAction",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
                param[str]("instancesId", instances_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    GoogleCloudApihubV1ExecutePluginInstanceActionRequest
                    | GoogleCloudApihubV1ExecutePluginInstanceActionRequestDict
                )
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleLongrunningOperation],
            error_mapper=apihub_projects_locations_plugins_instances_execute_action_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_plugins_instances_get(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1PluginInstance, ApihubProjectsLocationsPluginsInstancesGetErrorBody]:
        """Get an API Hub plugin instance.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
                param[str]("instancesId", instances_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1PluginInstance],
            error_mapper=apihub_projects_locations_plugins_instances_get_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_plugins_instances_list(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1ListPluginInstancesResponse, ApihubProjectsLocationsPluginsInstancesListErrorBody
    ]:
        r"""List all the plugins in a given project and location. ``-`` can be used as wildcard value for {plugin_id}

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            filter_: Optional. An expression that filters the list of plugin instances. A filter expression consists of
                a field name, a comparison operator, and a value for filtering. The value must be a string. The
                comparison operator must be one of: ``<``, ``>`` or ``=``. Filters are not case sensitive. The following
                fields in the ``PluginInstances`` are eligible for filtering: * ``state`` - The state of the Plugin
                Instance. Allowed comparison operators: ``=``. * ``source_project_id`` - The source project id of the
                Plugin Instance. Allowed comparison operators: ``=``. A filter function is also supported in the filter
                string. The filter function is ``id(name)``. The ``id(name)`` function returns the id of the resource
                name. For example, ``id(name) = \"plugin-instance-1\"`` is equivalent to ``name =
                \"projects/test-project-id/locations/test-location-id/plugins/plugin-1/instances/plugin-instance-1\"``
                provided the parent is ``projects/test-project-id/locations/test-location-id/plugins/plugin-1``.
                Expressions are combined with either ``AND`` logic operator or ``OR`` logical operator but not both of
                them together i.e. only one of the ``AND`` or ``OR`` operator can be used throughout the filter string
                and both the operators cannot be used together. No other logical operators are supported. At most three
                filter fields are allowed in the filter string and if provided more than that then ``INVALID_ARGUMENT``
                error is returned by the API. Here are a few examples: * ``state = ENABLED`` - The plugin instance is in
                enabled state.
            page_size: Optional. The maximum number of hub plugins to return. The service may return fewer than this
                value. If unspecified, at most 50 hub plugins will be returned. The maximum value is 1000; values above
                1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListPluginInstances`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListPluginInstances``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
            ],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1ListPluginInstancesResponse],
            error_mapper=apihub_projects_locations_plugins_instances_list_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_plugins_instances_manage_source_data(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        body: (
            GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest
            | GoogleCloudApihubV1ManagePluginInstanceSourceDataRequestDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsPluginsInstancesManageSourceDataErrorBody]:
        """Manages data for a given plugin instance.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}:manageSourceData",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
                param[str]("instancesId", instances_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest
                    | GoogleCloudApihubV1ManagePluginInstanceSourceDataRequestDict
                )
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=apihub_projects_locations_plugins_instances_manage_source_data_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_plugins_instances_patch(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        instances_id: str,
        body: GoogleCloudApihubV1PluginInstance | GoogleCloudApihubV1PluginInstanceDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1PluginInstance, ApihubProjectsLocationsPluginsInstancesPatchErrorBody]:
        """Updates a plugin instance in the API hub. The following fields in the plugin_instance can be updated
        currently: * display_name * schedule_cron_expression The update_mask should be used to specify the fields being
        updated. To update the auth_config and additional_config of the plugin instance, use the
        ApplyPluginInstanceConfig method.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            instances_id: Resource name segment (instancesId).
            body: The request body.
            update_mask: Optional. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
                param[str]("instancesId", instances_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1PluginInstance | GoogleCloudApihubV1PluginInstanceDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1PluginInstance],
            error_mapper=apihub_projects_locations_plugins_instances_patch_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_plugins_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1ListPluginsResponse, ApihubProjectsLocationsPluginsListErrorBody]:
        """List all the plugins in a given project and location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of plugins. A filter expression consists of a field
                name, a comparison operator, and a value for filtering. The value must be a string. The comparison
                operator must be one of: ``<``, ``>`` or ``=``. Filters are not case sensitive. The following fields in
                the ``Plugins`` are eligible for filtering: * ``plugin_category`` - The category of the Plugin. Allowed
                comparison operators: ``=``. Expressions are combined with either ``AND`` logic operator or ``OR``
                logical operator but not both of them together i.e. only one of the ``AND`` or ``OR`` operator can be
                used throughout the filter string and both the operators cannot be used together. No other logical
                operators are supported. At most three filter fields are allowed in the filter string and if provided
                more than that then ``INVALID_ARGUMENT`` error is returned by the API. Here are a few examples: *
                ``plugin_category = ON_RAMP`` - The plugin is of category on ramp.
            page_size: Optional. The maximum number of hub plugins to return. The service may return fewer than this
                value. If unspecified, at most 50 hub plugins will be returned. The maximum value is 1000; values above
                1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListPlugins`` call. Provide this to retrieve
                the subsequent page. When paginating, all other parameters (except page_size) provided to
                ``ListPlugins`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/plugins"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1ListPluginsResponse],
            error_mapper=apihub_projects_locations_plugins_list_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_plugins_style_guide_get_contents(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1StyleGuideContents, ApihubProjectsLocationsPluginsStyleGuideGetContentsErrorBody]:
        """Get the contents of the style guide.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/styleGuide:contents"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1StyleGuideContents],
            error_mapper=apihub_projects_locations_plugins_style_guide_get_contents_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_plugins_update_style_guide(
        self,
        projects_id: str,
        locations_id: str,
        plugins_id: str,
        body: GoogleCloudApihubV1StyleGuide | GoogleCloudApihubV1StyleGuideDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1StyleGuide, ApihubProjectsLocationsPluginsUpdateStyleGuideErrorBody]:
        """Update the styleGuide to be used for liniting in by API hub.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            plugins_id: Resource name segment (pluginsId).
            body: The request body.
            update_mask: Optional. The list of fields to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/styleGuide"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("pluginsId", plugins_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1StyleGuide | GoogleCloudApihubV1StyleGuideDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1StyleGuide],
            error_mapper=apihub_projects_locations_plugins_update_style_guide_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_retrieve_api_views(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        view: ViewApigeeProjectsApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1RetrieveApiViewsResponse, ApihubProjectsLocationsRetrieveApiViewsErrorBody]:
        """Retrieve API views.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. The filter expression.
            page_size: Optional. The maximum number of results to return. Default to 100.
            page_token: Optional. A page token, received from a previous ``RetrieveApiViews`` call. Provide this to
                retrieve the subsequent page.
            view: Required. The view type to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}:retrieveApiViews"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
                param[ViewApigeeProjectsApiOrStr | None]("view", view),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1RetrieveApiViewsResponse],
            error_mapper=apihub_projects_locations_retrieve_api_views_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_runtime_project_attachments_create(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1RuntimeProjectAttachment | GoogleCloudApihubV1RuntimeProjectAttachmentDict,
        *,
        runtime_project_attachment_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1RuntimeProjectAttachment, ApihubProjectsLocationsRuntimeProjectAttachmentsCreateErrorBody
    ]:
        """Attaches a runtime project to the host project.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            runtime_project_attachment_id: Required. The ID to use for the Runtime Project Attachment, which will become
                the final component of the Runtime Project Attachment's name. The ID must be the same as the project ID
                of the Google cloud project specified in the runtime_project_attachment.runtime_project field.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/runtimeProjectAttachments"
            ),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("runtimeProjectAttachmentId", runtime_project_attachment_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                GoogleCloudApihubV1RuntimeProjectAttachment | GoogleCloudApihubV1RuntimeProjectAttachmentDict
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1RuntimeProjectAttachment],
            error_mapper=apihub_projects_locations_runtime_project_attachments_create_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_runtime_project_attachments_delete(
        self,
        projects_id: str,
        locations_id: str,
        runtime_project_attachments_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteErrorBody]:
        """Delete a runtime project attachment in the API Hub. This call will detach the runtime project from the host
        project.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            runtime_project_attachments_id: Resource name segment (runtimeProjectAttachmentsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/runtimeProjectAttachments/{runtimeProjectAttachmentsId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("runtimeProjectAttachmentsId", runtime_project_attachments_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=apihub_projects_locations_runtime_project_attachments_delete_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_runtime_project_attachments_get(
        self,
        projects_id: str,
        locations_id: str,
        runtime_project_attachments_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1RuntimeProjectAttachment, ApihubProjectsLocationsRuntimeProjectAttachmentsGetErrorBody
    ]:
        """Gets a runtime project attachment.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            runtime_project_attachments_id: Resource name segment (runtimeProjectAttachmentsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/runtimeProjectAttachments/{runtimeProjectAttachmentsId}",
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("runtimeProjectAttachmentsId", runtime_project_attachments_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1RuntimeProjectAttachment],
            error_mapper=apihub_projects_locations_runtime_project_attachments_get_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_runtime_project_attachments_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        order_by: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse,
        ApihubProjectsLocationsRuntimeProjectAttachmentsListErrorBody,
    ]:
        """List runtime projects attached to the host project.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: Optional. An expression that filters the list of RuntimeProjectAttachments. A filter expression
                consists of a field name, a comparison operator, and a value for filtering. The value must be a string.
                All standard operators as documented at https://google.aip.dev/160 are supported. The following fields
                in the ``RuntimeProjectAttachment`` are eligible for filtering: * ``name`` - The name of the
                RuntimeProjectAttachment. * ``create_time`` - The time at which the RuntimeProjectAttachment was
                created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. *
                ``runtime_project`` - The Google cloud project associated with the RuntimeProjectAttachment.
            order_by: Optional. Hint for how to order the results.
            page_size: Optional. The maximum number of runtime project attachments to return. The service may return
                fewer than this value. If unspecified, at most 50 runtime project attachments will be returned. The
                maximum value is 1000; values above 1000 will be coerced to 1000.
            page_token: Optional. A page token, received from a previous ``ListRuntimeProjectAttachments`` call. Provide
                this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided
                to ``ListRuntimeProjectAttachments`` must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/runtimeProjectAttachments"
            ),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[str | None]("orderBy", order_by),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse],
            error_mapper=apihub_projects_locations_runtime_project_attachments_list_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_search_resources(
        self,
        projects_id: str,
        locations_id: str,
        body: GoogleCloudApihubV1SearchResourcesRequest | GoogleCloudApihubV1SearchResourcesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleCloudApihubV1SearchResourcesResponse, ApihubProjectsLocationsSearchResourcesErrorBody]:
        """Search across API-Hub resources.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}:searchResources"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleCloudApihubV1SearchResourcesRequest | GoogleCloudApihubV1SearchResourcesRequestDict](
                body
            ),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleCloudApihubV1SearchResourcesResponse],
            error_mapper=apihub_projects_locations_search_resources_error_mapper,
            request_options=request_options,
        )

    async def apihub_projects_locations_servers_configure_and_deploy_server(
        self,
        projects_id: str,
        locations_id: str,
        body: (
            GoogleCloudApihubV1ConfigureAndDeployServerRequest | GoogleCloudApihubV1ConfigureAndDeployServerRequestDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsServersConfigureAndDeployServerErrorBody]:
        """Configures and deploys a given server config for given target. Currently this API supports only deploying MCP
        server in Apigee X. For mcp server deployment in apigee X, if there is already a mcp proxy deployed, then this
        method will try to overwrite it by creating new revision i.e. all existing tools will be removed and new set of
        tools will be deployed.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/servers:configureAndDeployServer"
            ),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    GoogleCloudApihubV1ConfigureAndDeployServerRequest
                    | GoogleCloudApihubV1ConfigureAndDeployServerRequestDict
                )
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleLongrunningOperation],
            error_mapper=apihub_projects_locations_servers_configure_and_deploy_server_error_mapper,
            request_options=request_options,
        )
