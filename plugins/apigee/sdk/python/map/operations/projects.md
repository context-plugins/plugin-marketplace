<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.projects` · Source: `apigee/apis/projects.py` · 101 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.projects.apigee_projects_provision_organization

- **Route**: `POST /v1/projects/{projectsId}:provisionOrganization`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_projects_provision_organization(projects_id: str, body: GoogleCloudApigeeV1ProvisionOrganizationRequest | GoogleCloudApigeeV1ProvisionOrganizationRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeProjectsProvisionOrganizationErrorBody]`
- **Error**: `ApigeeProjectsProvisionOrganizationErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ProvisionOrganizationRequest` | `apigee/models/google_cloud_apigee_v1_provision_organization_request.py` |
| `GoogleCloudApigeeV1ProvisionOrganizationRequestDict` | `apigee/models/google_cloud_apigee_v1_provision_organization_request.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeProjectsProvisionOrganizationErrorBody` | `apigee/errors/apigee_projects_provision_organization_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_addons_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/addons/{addonsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_addons_get(projects_id: str, locations_id: str, addons_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `addons_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `addons_id` — path `addonsId`
- **Returns (parsed)**: `GoogleCloudApihubV1Addon`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Addon, ApihubProjectsLocationsAddonsGetErrorBody]`
- **Error**: `ApihubProjectsLocationsAddonsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Addon` | `apigee/models/google_cloud_apihub_v1_addon.py` |
| `ApihubProjectsLocationsAddonsGetErrorBody` | `apigee/errors/apihub_projects_locations_addons_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_addons_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/addons`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_addons_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApihubV1ListAddonsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1ListAddonsResponse, ApihubProjectsLocationsAddonsListErrorBody]`
- **Error**: `ApihubProjectsLocationsAddonsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ListAddonsResponse` | `apigee/models/google_cloud_apihub_v1_list_addons_response.py` |
| `ApihubProjectsLocationsAddonsListErrorBody` | `apigee/errors/apihub_projects_locations_addons_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_addons_manage_config

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/addons/{addonsId}:manageConfig`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_addons_manage_config(projects_id: str, locations_id: str, addons_id: str, body: GoogleCloudApihubV1ManageAddonConfigRequest | GoogleCloudApihubV1ManageAddonConfigRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `addons_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `addons_id` — path `addonsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsAddonsManageConfigErrorBody]`
- **Error**: `ApihubProjectsLocationsAddonsManageConfigErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ManageAddonConfigRequest` | `apigee/models/google_cloud_apihub_v1_manage_addon_config_request.py` |
| `GoogleCloudApihubV1ManageAddonConfigRequestDict` | `apigee/models/google_cloud_apihub_v1_manage_addon_config_request.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApihubProjectsLocationsAddonsManageConfigErrorBody` | `apigee/errors/apihub_projects_locations_addons_manage_config_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_api_hub_instances_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_api_hub_instances_create(projects_id: str, locations_id: str, body: GoogleCloudApihubV1ApiHubInstance | GoogleCloudApihubV1ApiHubInstanceDict, *, api_hub_instance_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `api_hub_instance_id` — query `apiHubInstanceId` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsApiHubInstancesCreateErrorBody]`
- **Error**: `ApihubProjectsLocationsApiHubInstancesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ApiHubInstance` | `apigee/models/google_cloud_apihub_v1_api_hub_instance.py` |
| `GoogleCloudApihubV1ApiHubInstanceDict` | `apigee/models/google_cloud_apihub_v1_api_hub_instance.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApihubProjectsLocationsApiHubInstancesCreateErrorBody` | `apigee/errors/apihub_projects_locations_api_hub_instances_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_api_hub_instances_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances/{apiHubInstancesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_api_hub_instances_delete(projects_id: str, locations_id: str, api_hub_instances_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `api_hub_instances_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `api_hub_instances_id` — path `apiHubInstancesId`
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsApiHubInstancesDeleteErrorBody]`
- **Error**: `ApihubProjectsLocationsApiHubInstancesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApihubProjectsLocationsApiHubInstancesDeleteErrorBody` | `apigee/errors/apihub_projects_locations_api_hub_instances_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_api_hub_instances_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances/{apiHubInstancesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_api_hub_instances_get(projects_id: str, locations_id: str, api_hub_instances_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `api_hub_instances_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `api_hub_instances_id` — path `apiHubInstancesId`
- **Returns (parsed)**: `GoogleCloudApihubV1ApiHubInstance`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1ApiHubInstance, ApihubProjectsLocationsApiHubInstancesGetErrorBody]`
- **Error**: `ApihubProjectsLocationsApiHubInstancesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ApiHubInstance` | `apigee/models/google_cloud_apihub_v1_api_hub_instance.py` |
| `ApihubProjectsLocationsApiHubInstancesGetErrorBody` | `apigee/errors/apihub_projects_locations_api_hub_instances_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_api_hub_instances_lookup

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances:lookup`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_api_hub_instances_lookup(projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId`
- **Returns (parsed)**: `GoogleCloudApihubV1LookupApiHubInstanceResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1LookupApiHubInstanceResponse, ApihubProjectsLocationsApiHubInstancesLookupErrorBody]`
- **Error**: `ApihubProjectsLocationsApiHubInstancesLookupErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1LookupApiHubInstanceResponse` | `apigee/models/google_cloud_apihub_v1_lookup_api_hub_instance_response.py` |
| `ApihubProjectsLocationsApiHubInstancesLookupErrorBody` | `apigee/errors/apihub_projects_locations_api_hub_instances_lookup_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_api_hub_instances_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances/{apiHubInstancesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_api_hub_instances_patch(projects_id: str, locations_id: str, api_hub_instances_id: str, body: GoogleCloudApihubV1ApiHubInstance | GoogleCloudApihubV1ApiHubInstanceDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `api_hub_instances_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `api_hub_instances_id` — path `apiHubInstancesId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsApiHubInstancesPatchErrorBody]`
- **Error**: `ApihubProjectsLocationsApiHubInstancesPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ApiHubInstance` | `apigee/models/google_cloud_apihub_v1_api_hub_instance.py` |
| `GoogleCloudApihubV1ApiHubInstanceDict` | `apigee/models/google_cloud_apihub_v1_api_hub_instance.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApihubProjectsLocationsApiHubInstancesPatchErrorBody` | `apigee/errors/apihub_projects_locations_api_hub_instances_patch_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_apis_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/apis`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_apis_create(projects_id: str, locations_id: str, body: GoogleCloudApihubV1Api | GoogleCloudApihubV1ApiDict, *, api_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `api_id` — query `apiId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1Api`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Api, ApihubProjectsLocationsApisCreateErrorBody]`
- **Error**: `ApihubProjectsLocationsApisCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Api` | `apigee/models/google_cloud_apihub_v1_api.py` |
| `GoogleCloudApihubV1ApiDict` | `apigee/models/google_cloud_apihub_v1_api.py` |
| `ApihubProjectsLocationsApisCreateErrorBody` | `apigee/errors/apihub_projects_locations_apis_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_apis_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_apis_delete(projects_id: str, locations_id: str, apis_id: str, *, force: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `force` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApihubProjectsLocationsApisDeleteErrorBody]`
- **Error**: `ApihubProjectsLocationsApisDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisDeleteErrorBody` | `apigee/errors/apihub_projects_locations_apis_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_apis_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_apis_get(projects_id: str, locations_id: str, apis_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId`
- **Returns (parsed)**: `GoogleCloudApihubV1Api`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Api, ApihubProjectsLocationsApisGetErrorBody]`
- **Error**: `ApihubProjectsLocationsApisGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Api` | `apigee/models/google_cloud_apihub_v1_api.py` |
| `ApihubProjectsLocationsApisGetErrorBody` | `apigee/errors/apihub_projects_locations_apis_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_apis_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_apis_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApihubV1ListApisResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1ListApisResponse, ApihubProjectsLocationsApisListErrorBody]`
- **Error**: `ApihubProjectsLocationsApisListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ListApisResponse` | `apigee/models/google_cloud_apihub_v1_list_apis_response.py` |
| `ApihubProjectsLocationsApisListErrorBody` | `apigee/errors/apihub_projects_locations_apis_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_apis_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_apis_patch(projects_id: str, locations_id: str, apis_id: str, body: GoogleCloudApihubV1Api | GoogleCloudApihubV1ApiDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1Api`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Api, ApihubProjectsLocationsApisPatchErrorBody]`
- **Error**: `ApihubProjectsLocationsApisPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Api` | `apigee/models/google_cloud_apihub_v1_api.py` |
| `GoogleCloudApihubV1ApiDict` | `apigee/models/google_cloud_apihub_v1_api.py` |
| `ApihubProjectsLocationsApisPatchErrorBody` | `apigee/errors/apihub_projects_locations_apis_patch_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_apis_versions_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_apis_versions_create(projects_id: str, locations_id: str, apis_id: str, body: GoogleCloudApihubV1Version | GoogleCloudApihubV1VersionDict, *, version_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `version_id` — query `versionId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1Version`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Version, ApihubProjectsLocationsApisVersionsCreateErrorBody]`
- **Error**: `ApihubProjectsLocationsApisVersionsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Version` | `apigee/models/google_cloud_apihub_v1_version.py` |
| `GoogleCloudApihubV1VersionDict` | `apigee/models/google_cloud_apihub_v1_version.py` |
| `ApihubProjectsLocationsApisVersionsCreateErrorBody` | `apigee/errors/apihub_projects_locations_apis_versions_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_apis_versions_definitions_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/definitions/{definitionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_apis_versions_definitions_get(projects_id: str, locations_id: str, apis_id: str, versions_id: str, definitions_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `versions_id`, `definitions_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `versions_id` — path `versionsId` · `definitions_id` — path `definitionsId`
- **Returns (parsed)**: `GoogleCloudApihubV1Definition`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Definition, ApihubProjectsLocationsApisVersionsDefinitionsGetErrorBody]`
- **Error**: `ApihubProjectsLocationsApisVersionsDefinitionsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Definition` | `apigee/models/google_cloud_apihub_v1_definition.py` |
| `ApihubProjectsLocationsApisVersionsDefinitionsGetErrorBody` | `apigee/errors/apihub_projects_locations_apis_versions_definitions_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_apis_versions_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_apis_versions_delete(projects_id: str, locations_id: str, apis_id: str, versions_id: str, *, force: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `versions_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `versions_id` — path `versionsId` · `force` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApihubProjectsLocationsApisVersionsDeleteErrorBody]`
- **Error**: `ApihubProjectsLocationsApisVersionsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisVersionsDeleteErrorBody` | `apigee/errors/apihub_projects_locations_apis_versions_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_apis_versions_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_apis_versions_get(projects_id: str, locations_id: str, apis_id: str, versions_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `versions_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `versions_id` — path `versionsId`
- **Returns (parsed)**: `GoogleCloudApihubV1Version`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Version, ApihubProjectsLocationsApisVersionsGetErrorBody]`
- **Error**: `ApihubProjectsLocationsApisVersionsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Version` | `apigee/models/google_cloud_apihub_v1_version.py` |
| `ApihubProjectsLocationsApisVersionsGetErrorBody` | `apigee/errors/apihub_projects_locations_apis_versions_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_apis_versions_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_apis_versions_list(projects_id: str, locations_id: str, apis_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApihubV1ListVersionsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1ListVersionsResponse, ApihubProjectsLocationsApisVersionsListErrorBody]`
- **Error**: `ApihubProjectsLocationsApisVersionsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ListVersionsResponse` | `apigee/models/google_cloud_apihub_v1_list_versions_response.py` |
| `ApihubProjectsLocationsApisVersionsListErrorBody` | `apigee/errors/apihub_projects_locations_apis_versions_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_apis_versions_operations_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_apis_versions_operations_create(projects_id: str, locations_id: str, apis_id: str, versions_id: str, body: GoogleCloudApihubV1ApiOperation | GoogleCloudApihubV1ApiOperationDict, *, api_operation_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `versions_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `versions_id` — path `versionsId` · `api_operation_id` — query `apiOperationId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1ApiOperation`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1ApiOperation, ApihubProjectsLocationsApisVersionsOperationsCreateErrorBody]`
- **Error**: `ApihubProjectsLocationsApisVersionsOperationsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ApiOperation` | `apigee/models/google_cloud_apihub_v1_api_operation.py` |
| `GoogleCloudApihubV1ApiOperationDict` | `apigee/models/google_cloud_apihub_v1_api_operation.py` |
| `ApihubProjectsLocationsApisVersionsOperationsCreateErrorBody` | `apigee/errors/apihub_projects_locations_apis_versions_operations_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_apis_versions_operations_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations/{operationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_apis_versions_operations_delete(projects_id: str, locations_id: str, apis_id: str, versions_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `versions_id`, `operations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `versions_id` — path `versionsId` · `operations_id` — path `operationsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApihubProjectsLocationsApisVersionsOperationsDeleteErrorBody]`
- **Error**: `ApihubProjectsLocationsApisVersionsOperationsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisVersionsOperationsDeleteErrorBody` | `apigee/errors/apihub_projects_locations_apis_versions_operations_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_apis_versions_operations_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations/{operationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_apis_versions_operations_get(projects_id: str, locations_id: str, apis_id: str, versions_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `versions_id`, `operations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `versions_id` — path `versionsId` · `operations_id` — path `operationsId`
- **Returns (parsed)**: `GoogleCloudApihubV1ApiOperation`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1ApiOperation, ApihubProjectsLocationsApisVersionsOperationsGetErrorBody]`
- **Error**: `ApihubProjectsLocationsApisVersionsOperationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ApiOperation` | `apigee/models/google_cloud_apihub_v1_api_operation.py` |
| `ApihubProjectsLocationsApisVersionsOperationsGetErrorBody` | `apigee/errors/apihub_projects_locations_apis_versions_operations_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_apis_versions_operations_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_apis_versions_operations_list(projects_id: str, locations_id: str, apis_id: str, versions_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `versions_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `versions_id` — path `versionsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApihubV1ListApiOperationsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1ListApiOperationsResponse, ApihubProjectsLocationsApisVersionsOperationsListErrorBody]`
- **Error**: `ApihubProjectsLocationsApisVersionsOperationsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ListApiOperationsResponse` | `apigee/models/google_cloud_apihub_v1_list_api_operations_response.py` |
| `ApihubProjectsLocationsApisVersionsOperationsListErrorBody` | `apigee/errors/apihub_projects_locations_apis_versions_operations_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_apis_versions_operations_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations/{operationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_apis_versions_operations_patch(projects_id: str, locations_id: str, apis_id: str, versions_id: str, operations_id: str, body: GoogleCloudApihubV1ApiOperation | GoogleCloudApihubV1ApiOperationDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `versions_id`, `operations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `versions_id` — path `versionsId` · `operations_id` — path `operationsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1ApiOperation`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1ApiOperation, ApihubProjectsLocationsApisVersionsOperationsPatchErrorBody]`
- **Error**: `ApihubProjectsLocationsApisVersionsOperationsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ApiOperation` | `apigee/models/google_cloud_apihub_v1_api_operation.py` |
| `GoogleCloudApihubV1ApiOperationDict` | `apigee/models/google_cloud_apihub_v1_api_operation.py` |
| `ApihubProjectsLocationsApisVersionsOperationsPatchErrorBody` | `apigee/errors/apihub_projects_locations_apis_versions_operations_patch_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_apis_versions_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_apis_versions_patch(projects_id: str, locations_id: str, apis_id: str, versions_id: str, body: GoogleCloudApihubV1Version | GoogleCloudApihubV1VersionDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `versions_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `versions_id` — path `versionsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1Version`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Version, ApihubProjectsLocationsApisVersionsPatchErrorBody]`
- **Error**: `ApihubProjectsLocationsApisVersionsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Version` | `apigee/models/google_cloud_apihub_v1_version.py` |
| `GoogleCloudApihubV1VersionDict` | `apigee/models/google_cloud_apihub_v1_version.py` |
| `ApihubProjectsLocationsApisVersionsPatchErrorBody` | `apigee/errors/apihub_projects_locations_apis_versions_patch_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_apis_versions_specs_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_apis_versions_specs_create(projects_id: str, locations_id: str, apis_id: str, versions_id: str, body: GoogleCloudApihubV1Spec | GoogleCloudApihubV1SpecDict, *, spec_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `versions_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `versions_id` — path `versionsId` · `spec_id` — query `specId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1Spec`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Spec, ApihubProjectsLocationsApisVersionsSpecsCreateErrorBody]`
- **Error**: `ApihubProjectsLocationsApisVersionsSpecsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Spec` | `apigee/models/google_cloud_apihub_v1_spec.py` |
| `GoogleCloudApihubV1SpecDict` | `apigee/models/google_cloud_apihub_v1_spec.py` |
| `ApihubProjectsLocationsApisVersionsSpecsCreateErrorBody` | `apigee/errors/apihub_projects_locations_apis_versions_specs_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_apis_versions_specs_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_apis_versions_specs_delete(projects_id: str, locations_id: str, apis_id: str, versions_id: str, specs_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `versions_id`, `specs_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `versions_id` — path `versionsId` · `specs_id` — path `specsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApihubProjectsLocationsApisVersionsSpecsDeleteErrorBody]`
- **Error**: `ApihubProjectsLocationsApisVersionsSpecsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisVersionsSpecsDeleteErrorBody` | `apigee/errors/apihub_projects_locations_apis_versions_specs_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_apis_versions_specs_fetch_additional_spec_content

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}:fetchAdditionalSpecContent`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_apis_versions_specs_fetch_additional_spec_content(projects_id: str, locations_id: str, apis_id: str, versions_id: str, specs_id: str, *, spec_content_type: SpecContentType1OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `versions_id`, `specs_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `versions_id` — path `versionsId` · `specs_id` — path `specsId` · `spec_content_type` — query `specContentType`
- **Returns (parsed)**: `GoogleCloudApihubV1FetchAdditionalSpecContentResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1FetchAdditionalSpecContentResponse, ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentErrorBody]`
- **Error**: `ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SpecContentType1OrStr` | `apigee/models/enums/spec_content_type1.py` |
| `GoogleCloudApihubV1FetchAdditionalSpecContentResponse` | `apigee/models/google_cloud_apihub_v1_fetch_additional_spec_content_response.py` |
| `ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentErrorBody` | `apigee/errors/apihub_projects_locations_apis_versions_specs_fetch_additional_spec_content_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_apis_versions_specs_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_apis_versions_specs_get(projects_id: str, locations_id: str, apis_id: str, versions_id: str, specs_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `versions_id`, `specs_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `versions_id` — path `versionsId` · `specs_id` — path `specsId`
- **Returns (parsed)**: `GoogleCloudApihubV1Spec`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Spec, ApihubProjectsLocationsApisVersionsSpecsGetErrorBody]`
- **Error**: `ApihubProjectsLocationsApisVersionsSpecsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Spec` | `apigee/models/google_cloud_apihub_v1_spec.py` |
| `ApihubProjectsLocationsApisVersionsSpecsGetErrorBody` | `apigee/errors/apihub_projects_locations_apis_versions_specs_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_apis_versions_specs_get_contents

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}:contents`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_apis_versions_specs_get_contents(projects_id: str, locations_id: str, apis_id: str, versions_id: str, specs_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `versions_id`, `specs_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `versions_id` — path `versionsId` · `specs_id` — path `specsId`
- **Returns (parsed)**: `GoogleCloudApihubV1SpecContents`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1SpecContents, ApihubProjectsLocationsApisVersionsSpecsGetContentsErrorBody]`
- **Error**: `ApihubProjectsLocationsApisVersionsSpecsGetContentsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1SpecContents` | `apigee/models/google_cloud_apihub_v1_spec_contents.py` |
| `ApihubProjectsLocationsApisVersionsSpecsGetContentsErrorBody` | `apigee/errors/apihub_projects_locations_apis_versions_specs_get_contents_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_apis_versions_specs_lint

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}:lint`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_apis_versions_specs_lint(projects_id: str, locations_id: str, apis_id: str, versions_id: str, specs_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `versions_id`, `specs_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `versions_id` — path `versionsId` · `specs_id` — path `specsId` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApihubProjectsLocationsApisVersionsSpecsLintErrorBody]`
- **Error**: `ApihubProjectsLocationsApisVersionsSpecsLintErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisVersionsSpecsLintErrorBody` | `apigee/errors/apihub_projects_locations_apis_versions_specs_lint_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_apis_versions_specs_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_apis_versions_specs_list(projects_id: str, locations_id: str, apis_id: str, versions_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `versions_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `versions_id` — path `versionsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApihubV1ListSpecsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1ListSpecsResponse, ApihubProjectsLocationsApisVersionsSpecsListErrorBody]`
- **Error**: `ApihubProjectsLocationsApisVersionsSpecsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ListSpecsResponse` | `apigee/models/google_cloud_apihub_v1_list_specs_response.py` |
| `ApihubProjectsLocationsApisVersionsSpecsListErrorBody` | `apigee/errors/apihub_projects_locations_apis_versions_specs_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_apis_versions_specs_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_apis_versions_specs_patch(projects_id: str, locations_id: str, apis_id: str, versions_id: str, specs_id: str, body: GoogleCloudApihubV1Spec | GoogleCloudApihubV1SpecDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `versions_id`, `specs_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `versions_id` — path `versionsId` · `specs_id` — path `specsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1Spec`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Spec, ApihubProjectsLocationsApisVersionsSpecsPatchErrorBody]`
- **Error**: `ApihubProjectsLocationsApisVersionsSpecsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Spec` | `apigee/models/google_cloud_apihub_v1_spec.py` |
| `GoogleCloudApihubV1SpecDict` | `apigee/models/google_cloud_apihub_v1_spec.py` |
| `ApihubProjectsLocationsApisVersionsSpecsPatchErrorBody` | `apigee/errors/apihub_projects_locations_apis_versions_specs_patch_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_attributes_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/attributes`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_attributes_create(projects_id: str, locations_id: str, body: GoogleCloudApihubV1Attribute | GoogleCloudApihubV1AttributeDict, *, attribute_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `attribute_id` — query `attributeId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1Attribute`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Attribute, ApihubProjectsLocationsAttributesCreateErrorBody]`
- **Error**: `ApihubProjectsLocationsAttributesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Attribute` | `apigee/models/google_cloud_apihub_v1_attribute.py` |
| `GoogleCloudApihubV1AttributeDict` | `apigee/models/google_cloud_apihub_v1_attribute.py` |
| `ApihubProjectsLocationsAttributesCreateErrorBody` | `apigee/errors/apihub_projects_locations_attributes_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_attributes_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/attributes/{attributesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_attributes_delete(projects_id: str, locations_id: str, attributes_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `attributes_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `attributes_id` — path `attributesId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApihubProjectsLocationsAttributesDeleteErrorBody]`
- **Error**: `ApihubProjectsLocationsAttributesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsAttributesDeleteErrorBody` | `apigee/errors/apihub_projects_locations_attributes_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_attributes_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/attributes/{attributesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_attributes_get(projects_id: str, locations_id: str, attributes_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `attributes_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `attributes_id` — path `attributesId`
- **Returns (parsed)**: `GoogleCloudApihubV1Attribute`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Attribute, ApihubProjectsLocationsAttributesGetErrorBody]`
- **Error**: `ApihubProjectsLocationsAttributesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Attribute` | `apigee/models/google_cloud_apihub_v1_attribute.py` |
| `ApihubProjectsLocationsAttributesGetErrorBody` | `apigee/errors/apihub_projects_locations_attributes_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_attributes_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/attributes`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_attributes_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApihubV1ListAttributesResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1ListAttributesResponse, ApihubProjectsLocationsAttributesListErrorBody]`
- **Error**: `ApihubProjectsLocationsAttributesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ListAttributesResponse` | `apigee/models/google_cloud_apihub_v1_list_attributes_response.py` |
| `ApihubProjectsLocationsAttributesListErrorBody` | `apigee/errors/apihub_projects_locations_attributes_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_attributes_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/attributes/{attributesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_attributes_patch(projects_id: str, locations_id: str, attributes_id: str, body: GoogleCloudApihubV1Attribute | GoogleCloudApihubV1AttributeDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `attributes_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `attributes_id` — path `attributesId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1Attribute`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Attribute, ApihubProjectsLocationsAttributesPatchErrorBody]`
- **Error**: `ApihubProjectsLocationsAttributesPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Attribute` | `apigee/models/google_cloud_apihub_v1_attribute.py` |
| `GoogleCloudApihubV1AttributeDict` | `apigee/models/google_cloud_apihub_v1_attribute.py` |
| `ApihubProjectsLocationsAttributesPatchErrorBody` | `apigee/errors/apihub_projects_locations_attributes_patch_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_collect_api_data

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}:collectApiData`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_collect_api_data(projects_id: str, locations_id: str, body: GoogleCloudApihubV1CollectApiDataRequest | GoogleCloudApihubV1CollectApiDataRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsCollectApiDataErrorBody]`
- **Error**: `ApihubProjectsLocationsCollectApiDataErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1CollectApiDataRequest` | `apigee/models/google_cloud_apihub_v1_collect_api_data_request.py` |
| `GoogleCloudApihubV1CollectApiDataRequestDict` | `apigee/models/google_cloud_apihub_v1_collect_api_data_request.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApihubProjectsLocationsCollectApiDataErrorBody` | `apigee/errors/apihub_projects_locations_collect_api_data_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_curations_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/curations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_curations_create(projects_id: str, locations_id: str, body: GoogleCloudApihubV1Curation | GoogleCloudApihubV1CurationDict, *, curation_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `curation_id` — query `curationId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1Curation`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Curation, ApihubProjectsLocationsCurationsCreateErrorBody]`
- **Error**: `ApihubProjectsLocationsCurationsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Curation` | `apigee/models/google_cloud_apihub_v1_curation.py` |
| `GoogleCloudApihubV1CurationDict` | `apigee/models/google_cloud_apihub_v1_curation.py` |
| `ApihubProjectsLocationsCurationsCreateErrorBody` | `apigee/errors/apihub_projects_locations_curations_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_curations_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/curations/{curationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_curations_delete(projects_id: str, locations_id: str, curations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `curations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `curations_id` — path `curationsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApihubProjectsLocationsCurationsDeleteErrorBody]`
- **Error**: `ApihubProjectsLocationsCurationsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsCurationsDeleteErrorBody` | `apigee/errors/apihub_projects_locations_curations_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_curations_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/curations/{curationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_curations_get(projects_id: str, locations_id: str, curations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `curations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `curations_id` — path `curationsId`
- **Returns (parsed)**: `GoogleCloudApihubV1Curation`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Curation, ApihubProjectsLocationsCurationsGetErrorBody]`
- **Error**: `ApihubProjectsLocationsCurationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Curation` | `apigee/models/google_cloud_apihub_v1_curation.py` |
| `ApihubProjectsLocationsCurationsGetErrorBody` | `apigee/errors/apihub_projects_locations_curations_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_curations_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/curations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_curations_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApihubV1ListCurationsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1ListCurationsResponse, ApihubProjectsLocationsCurationsListErrorBody]`
- **Error**: `ApihubProjectsLocationsCurationsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ListCurationsResponse` | `apigee/models/google_cloud_apihub_v1_list_curations_response.py` |
| `ApihubProjectsLocationsCurationsListErrorBody` | `apigee/errors/apihub_projects_locations_curations_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_curations_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/curations/{curationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_curations_patch(projects_id: str, locations_id: str, curations_id: str, body: GoogleCloudApihubV1Curation | GoogleCloudApihubV1CurationDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `curations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `curations_id` — path `curationsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1Curation`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Curation, ApihubProjectsLocationsCurationsPatchErrorBody]`
- **Error**: `ApihubProjectsLocationsCurationsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Curation` | `apigee/models/google_cloud_apihub_v1_curation.py` |
| `GoogleCloudApihubV1CurationDict` | `apigee/models/google_cloud_apihub_v1_curation.py` |
| `ApihubProjectsLocationsCurationsPatchErrorBody` | `apigee/errors/apihub_projects_locations_curations_patch_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_dependencies_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/dependencies`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_dependencies_create(projects_id: str, locations_id: str, body: GoogleCloudApihubV1Dependency | GoogleCloudApihubV1DependencyDict, *, dependency_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `dependency_id` — query `dependencyId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1Dependency`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Dependency, ApihubProjectsLocationsDependenciesCreateErrorBody]`
- **Error**: `ApihubProjectsLocationsDependenciesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Dependency` | `apigee/models/google_cloud_apihub_v1_dependency.py` |
| `GoogleCloudApihubV1DependencyDict` | `apigee/models/google_cloud_apihub_v1_dependency.py` |
| `ApihubProjectsLocationsDependenciesCreateErrorBody` | `apigee/errors/apihub_projects_locations_dependencies_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_dependencies_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/dependencies/{dependenciesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_dependencies_delete(projects_id: str, locations_id: str, dependencies_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `dependencies_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `dependencies_id` — path `dependenciesId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApihubProjectsLocationsDependenciesDeleteErrorBody]`
- **Error**: `ApihubProjectsLocationsDependenciesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsDependenciesDeleteErrorBody` | `apigee/errors/apihub_projects_locations_dependencies_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_dependencies_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/dependencies/{dependenciesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_dependencies_get(projects_id: str, locations_id: str, dependencies_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `dependencies_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `dependencies_id` — path `dependenciesId`
- **Returns (parsed)**: `GoogleCloudApihubV1Dependency`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Dependency, ApihubProjectsLocationsDependenciesGetErrorBody]`
- **Error**: `ApihubProjectsLocationsDependenciesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Dependency` | `apigee/models/google_cloud_apihub_v1_dependency.py` |
| `ApihubProjectsLocationsDependenciesGetErrorBody` | `apigee/errors/apihub_projects_locations_dependencies_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_dependencies_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/dependencies`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_dependencies_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApihubV1ListDependenciesResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1ListDependenciesResponse, ApihubProjectsLocationsDependenciesListErrorBody]`
- **Error**: `ApihubProjectsLocationsDependenciesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ListDependenciesResponse` | `apigee/models/google_cloud_apihub_v1_list_dependencies_response.py` |
| `ApihubProjectsLocationsDependenciesListErrorBody` | `apigee/errors/apihub_projects_locations_dependencies_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_dependencies_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/dependencies/{dependenciesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_dependencies_patch(projects_id: str, locations_id: str, dependencies_id: str, body: GoogleCloudApihubV1Dependency | GoogleCloudApihubV1DependencyDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `dependencies_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `dependencies_id` — path `dependenciesId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1Dependency`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Dependency, ApihubProjectsLocationsDependenciesPatchErrorBody]`
- **Error**: `ApihubProjectsLocationsDependenciesPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Dependency` | `apigee/models/google_cloud_apihub_v1_dependency.py` |
| `GoogleCloudApihubV1DependencyDict` | `apigee/models/google_cloud_apihub_v1_dependency.py` |
| `ApihubProjectsLocationsDependenciesPatchErrorBody` | `apigee/errors/apihub_projects_locations_dependencies_patch_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_deployments_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/deployments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_deployments_create(projects_id: str, locations_id: str, body: GoogleCloudApihubV1Deployment | GoogleCloudApihubV1DeploymentDict, *, deployment_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `deployment_id` — query `deploymentId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1Deployment`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Deployment, ApihubProjectsLocationsDeploymentsCreateErrorBody]`
- **Error**: `ApihubProjectsLocationsDeploymentsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Deployment` | `apigee/models/google_cloud_apihub_v1_deployment.py` |
| `GoogleCloudApihubV1DeploymentDict` | `apigee/models/google_cloud_apihub_v1_deployment.py` |
| `ApihubProjectsLocationsDeploymentsCreateErrorBody` | `apigee/errors/apihub_projects_locations_deployments_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_deployments_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/deployments/{deploymentsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_deployments_delete(projects_id: str, locations_id: str, deployments_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `deployments_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `deployments_id` — path `deploymentsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApihubProjectsLocationsDeploymentsDeleteErrorBody]`
- **Error**: `ApihubProjectsLocationsDeploymentsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsDeploymentsDeleteErrorBody` | `apigee/errors/apihub_projects_locations_deployments_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_deployments_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/deployments/{deploymentsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_deployments_get(projects_id: str, locations_id: str, deployments_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `deployments_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `deployments_id` — path `deploymentsId`
- **Returns (parsed)**: `GoogleCloudApihubV1Deployment`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Deployment, ApihubProjectsLocationsDeploymentsGetErrorBody]`
- **Error**: `ApihubProjectsLocationsDeploymentsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Deployment` | `apigee/models/google_cloud_apihub_v1_deployment.py` |
| `ApihubProjectsLocationsDeploymentsGetErrorBody` | `apigee/errors/apihub_projects_locations_deployments_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_deployments_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/deployments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_deployments_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApihubV1ListDeploymentsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1ListDeploymentsResponse, ApihubProjectsLocationsDeploymentsListErrorBody]`
- **Error**: `ApihubProjectsLocationsDeploymentsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ListDeploymentsResponse` | `apigee/models/google_cloud_apihub_v1_list_deployments_response.py` |
| `ApihubProjectsLocationsDeploymentsListErrorBody` | `apigee/errors/apihub_projects_locations_deployments_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_deployments_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/deployments/{deploymentsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_deployments_patch(projects_id: str, locations_id: str, deployments_id: str, body: GoogleCloudApihubV1Deployment | GoogleCloudApihubV1DeploymentDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `deployments_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `deployments_id` — path `deploymentsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1Deployment`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Deployment, ApihubProjectsLocationsDeploymentsPatchErrorBody]`
- **Error**: `ApihubProjectsLocationsDeploymentsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Deployment` | `apigee/models/google_cloud_apihub_v1_deployment.py` |
| `GoogleCloudApihubV1DeploymentDict` | `apigee/models/google_cloud_apihub_v1_deployment.py` |
| `ApihubProjectsLocationsDeploymentsPatchErrorBody` | `apigee/errors/apihub_projects_locations_deployments_patch_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_discovered_api_observations_discovered_api_operations_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/discoveredApiObservations/{discoveredApiObservationsId}/discoveredApiOperations/{discoveredApiOperationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_discovered_api_observations_discovered_api_operations_get(projects_id: str, locations_id: str, discovered_api_observations_id: str, discovered_api_operations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `discovered_api_observations_id`, `discovered_api_operations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `discovered_api_observations_id` — path `discoveredApiObservationsId` · `discovered_api_operations_id` — path `discoveredApiOperationsId`
- **Returns (parsed)**: `GoogleCloudApihubV1DiscoveredApiOperation`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1DiscoveredApiOperation, ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetErrorBody]`
- **Error**: `ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1DiscoveredApiOperation` | `apigee/models/google_cloud_apihub_v1_discovered_api_operation.py` |
| `ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetErrorBody` | `apigee/errors/apihub_projects_locations_discovered_api_observations_discovered_api_operations_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_discovered_api_observations_discovered_api_operations_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/discoveredApiObservations/{discoveredApiObservationsId}/discoveredApiOperations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_discovered_api_observations_discovered_api_operations_list(projects_id: str, locations_id: str, discovered_api_observations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `discovered_api_observations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `discovered_api_observations_id` — path `discoveredApiObservationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApihubV1ListDiscoveredApiOperationsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1ListDiscoveredApiOperationsResponse, ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListErrorBody]`
- **Error**: `ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ListDiscoveredApiOperationsResponse` | `apigee/models/google_cloud_apihub_v1_list_discovered_api_operations_response.py` |
| `ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListErrorBody` | `apigee/errors/apihub_projects_locations_discovered_api_observations_discovered_api_operations_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_discovered_api_observations_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/discoveredApiObservations/{discoveredApiObservationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_discovered_api_observations_get(projects_id: str, locations_id: str, discovered_api_observations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `discovered_api_observations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `discovered_api_observations_id` — path `discoveredApiObservationsId`
- **Returns (parsed)**: `GoogleCloudApihubV1DiscoveredApiObservation`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1DiscoveredApiObservation, ApihubProjectsLocationsDiscoveredApiObservationsGetErrorBody]`
- **Error**: `ApihubProjectsLocationsDiscoveredApiObservationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1DiscoveredApiObservation` | `apigee/models/google_cloud_apihub_v1_discovered_api_observation.py` |
| `ApihubProjectsLocationsDiscoveredApiObservationsGetErrorBody` | `apigee/errors/apihub_projects_locations_discovered_api_observations_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_discovered_api_observations_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/discoveredApiObservations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_discovered_api_observations_list(projects_id: str, locations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApihubV1ListDiscoveredApiObservationsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1ListDiscoveredApiObservationsResponse, ApihubProjectsLocationsDiscoveredApiObservationsListErrorBody]`
- **Error**: `ApihubProjectsLocationsDiscoveredApiObservationsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ListDiscoveredApiObservationsResponse` | `apigee/models/google_cloud_apihub_v1_list_discovered_api_observations_response.py` |
| `ApihubProjectsLocationsDiscoveredApiObservationsListErrorBody` | `apigee/errors/apihub_projects_locations_discovered_api_observations_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_external_apis_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/externalApis`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_external_apis_create(projects_id: str, locations_id: str, body: GoogleCloudApihubV1ExternalApi | GoogleCloudApihubV1ExternalApiDict, *, external_api_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `external_api_id` — query `externalApiId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1ExternalApi`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1ExternalApi, ApihubProjectsLocationsExternalApisCreateErrorBody]`
- **Error**: `ApihubProjectsLocationsExternalApisCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ExternalApi` | `apigee/models/google_cloud_apihub_v1_external_api.py` |
| `GoogleCloudApihubV1ExternalApiDict` | `apigee/models/google_cloud_apihub_v1_external_api.py` |
| `ApihubProjectsLocationsExternalApisCreateErrorBody` | `apigee/errors/apihub_projects_locations_external_apis_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_external_apis_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/externalApis/{externalApisId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_external_apis_delete(projects_id: str, locations_id: str, external_apis_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `external_apis_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `external_apis_id` — path `externalApisId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApihubProjectsLocationsExternalApisDeleteErrorBody]`
- **Error**: `ApihubProjectsLocationsExternalApisDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsExternalApisDeleteErrorBody` | `apigee/errors/apihub_projects_locations_external_apis_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_external_apis_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/externalApis/{externalApisId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_external_apis_get(projects_id: str, locations_id: str, external_apis_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `external_apis_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `external_apis_id` — path `externalApisId`
- **Returns (parsed)**: `GoogleCloudApihubV1ExternalApi`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1ExternalApi, ApihubProjectsLocationsExternalApisGetErrorBody]`
- **Error**: `ApihubProjectsLocationsExternalApisGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ExternalApi` | `apigee/models/google_cloud_apihub_v1_external_api.py` |
| `ApihubProjectsLocationsExternalApisGetErrorBody` | `apigee/errors/apihub_projects_locations_external_apis_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_external_apis_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/externalApis`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_external_apis_list(projects_id: str, locations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApihubV1ListExternalApisResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1ListExternalApisResponse, ApihubProjectsLocationsExternalApisListErrorBody]`
- **Error**: `ApihubProjectsLocationsExternalApisListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ListExternalApisResponse` | `apigee/models/google_cloud_apihub_v1_list_external_apis_response.py` |
| `ApihubProjectsLocationsExternalApisListErrorBody` | `apigee/errors/apihub_projects_locations_external_apis_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_external_apis_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/externalApis/{externalApisId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_external_apis_patch(projects_id: str, locations_id: str, external_apis_id: str, body: GoogleCloudApihubV1ExternalApi | GoogleCloudApihubV1ExternalApiDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `external_apis_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `external_apis_id` — path `externalApisId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1ExternalApi`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1ExternalApi, ApihubProjectsLocationsExternalApisPatchErrorBody]`
- **Error**: `ApihubProjectsLocationsExternalApisPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ExternalApi` | `apigee/models/google_cloud_apihub_v1_external_api.py` |
| `GoogleCloudApihubV1ExternalApiDict` | `apigee/models/google_cloud_apihub_v1_external_api.py` |
| `ApihubProjectsLocationsExternalApisPatchErrorBody` | `apigee/errors/apihub_projects_locations_external_apis_patch_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_generated_spec_apis_generate_spec

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/generatedSpecApis/{generatedSpecApisId}:generateSpec`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_generated_spec_apis_generate_spec(projects_id: str, locations_id: str, generated_spec_apis_id: str, body: GoogleCloudApihubV1GenerateSpecRequest | GoogleCloudApihubV1GenerateSpecRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `generated_spec_apis_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `generated_spec_apis_id` — path `generatedSpecApisId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1GenerateSpecResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1GenerateSpecResponse, ApihubProjectsLocationsGeneratedSpecApisGenerateSpecErrorBody]`
- **Error**: `ApihubProjectsLocationsGeneratedSpecApisGenerateSpecErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1GenerateSpecRequest` | `apigee/models/google_cloud_apihub_v1_generate_spec_request.py` |
| `GoogleCloudApihubV1GenerateSpecRequestDict` | `apigee/models/google_cloud_apihub_v1_generate_spec_request.py` |
| `GoogleCloudApihubV1GenerateSpecResponse` | `apigee/models/google_cloud_apihub_v1_generate_spec_response.py` |
| `ApihubProjectsLocationsGeneratedSpecApisGenerateSpecErrorBody` | `apigee/errors/apihub_projects_locations_generated_spec_apis_generate_spec_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_generated_spec_apis_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/generatedSpecApis/{generatedSpecApisId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_generated_spec_apis_get(projects_id: str, locations_id: str, generated_spec_apis_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `generated_spec_apis_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `generated_spec_apis_id` — path `generatedSpecApisId`
- **Returns (parsed)**: `GoogleCloudApihubV1GeneratedSpecApi`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1GeneratedSpecApi, ApihubProjectsLocationsGeneratedSpecApisGetErrorBody]`
- **Error**: `ApihubProjectsLocationsGeneratedSpecApisGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1GeneratedSpecApi` | `apigee/models/google_cloud_apihub_v1_generated_spec_api.py` |
| `ApihubProjectsLocationsGeneratedSpecApisGetErrorBody` | `apigee/errors/apihub_projects_locations_generated_spec_apis_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_generated_spec_apis_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/generatedSpecApis`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_generated_spec_apis_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApihubV1ListGeneratedSpecApisResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1ListGeneratedSpecApisResponse, ApihubProjectsLocationsGeneratedSpecApisListErrorBody]`
- **Error**: `ApihubProjectsLocationsGeneratedSpecApisListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ListGeneratedSpecApisResponse` | `apigee/models/google_cloud_apihub_v1_list_generated_spec_apis_response.py` |
| `ApihubProjectsLocationsGeneratedSpecApisListErrorBody` | `apigee/errors/apihub_projects_locations_generated_spec_apis_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_get(projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId`
- **Returns (parsed)**: `GoogleCloudLocationLocation`
- **Returns (raw)**: `ApiResult[GoogleCloudLocationLocation, ApihubProjectsLocationsGetErrorBody]`
- **Error**: `ApihubProjectsLocationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudLocationLocation` | `apigee/models/google_cloud_location_location.py` |
| `ApihubProjectsLocationsGetErrorBody` | `apigee/errors/apihub_projects_locations_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_host_project_registrations_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/hostProjectRegistrations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_host_project_registrations_create(projects_id: str, locations_id: str, body: GoogleCloudApihubV1HostProjectRegistration | GoogleCloudApihubV1HostProjectRegistrationDict, *, host_project_registration_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `host_project_registration_id` — query `hostProjectRegistrationId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1HostProjectRegistration`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1HostProjectRegistration, ApihubProjectsLocationsHostProjectRegistrationsCreateErrorBody]`
- **Error**: `ApihubProjectsLocationsHostProjectRegistrationsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1HostProjectRegistration` | `apigee/models/google_cloud_apihub_v1_host_project_registration.py` |
| `GoogleCloudApihubV1HostProjectRegistrationDict` | `apigee/models/google_cloud_apihub_v1_host_project_registration.py` |
| `ApihubProjectsLocationsHostProjectRegistrationsCreateErrorBody` | `apigee/errors/apihub_projects_locations_host_project_registrations_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_host_project_registrations_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/hostProjectRegistrations/{hostProjectRegistrationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_host_project_registrations_get(projects_id: str, locations_id: str, host_project_registrations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `host_project_registrations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `host_project_registrations_id` — path `hostProjectRegistrationsId`
- **Returns (parsed)**: `GoogleCloudApihubV1HostProjectRegistration`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1HostProjectRegistration, ApihubProjectsLocationsHostProjectRegistrationsGetErrorBody]`
- **Error**: `ApihubProjectsLocationsHostProjectRegistrationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1HostProjectRegistration` | `apigee/models/google_cloud_apihub_v1_host_project_registration.py` |
| `ApihubProjectsLocationsHostProjectRegistrationsGetErrorBody` | `apigee/errors/apihub_projects_locations_host_project_registrations_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_host_project_registrations_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/hostProjectRegistrations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_host_project_registrations_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `order_by` — query `orderBy` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApihubV1ListHostProjectRegistrationsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1ListHostProjectRegistrationsResponse, ApihubProjectsLocationsHostProjectRegistrationsListErrorBody]`
- **Error**: `ApihubProjectsLocationsHostProjectRegistrationsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ListHostProjectRegistrationsResponse` | `apigee/models/google_cloud_apihub_v1_list_host_project_registrations_response.py` |
| `ApihubProjectsLocationsHostProjectRegistrationsListErrorBody` | `apigee/errors/apihub_projects_locations_host_project_registrations_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_list

- **Route**: `GET /v1/projects/{projectsId}/locations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_list(projects_id: str, *, extra_location_types: list[str] | None = None, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`
- **Params**: `projects_id` — path `projectsId` · `extra_location_types` — query `extraLocationTypes` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudLocationListLocationsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudLocationListLocationsResponse, ApihubProjectsLocationsListErrorBody]`
- **Error**: `ApihubProjectsLocationsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudLocationListLocationsResponse` | `apigee/models/google_cloud_location_list_locations_response.py` |
| `ApihubProjectsLocationsListErrorBody` | `apigee/errors/apihub_projects_locations_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_lookup_runtime_project_attachment

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}:lookupRuntimeProjectAttachment`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_lookup_runtime_project_attachment(projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId`
- **Returns (parsed)**: `GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse, ApihubProjectsLocationsLookupRuntimeProjectAttachmentErrorBody]`
- **Error**: `ApihubProjectsLocationsLookupRuntimeProjectAttachmentErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse` | `apigee/models/google_cloud_apihub_v1_lookup_runtime_project_attachment_response.py` |
| `ApihubProjectsLocationsLookupRuntimeProjectAttachmentErrorBody` | `apigee/errors/apihub_projects_locations_lookup_runtime_project_attachment_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_operations_cancel

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_operations_cancel(projects_id: str, locations_id: str, operations_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `operations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `operations_id` — path `operationsId` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApihubProjectsLocationsOperationsCancelErrorBody]`
- **Error**: `ApihubProjectsLocationsOperationsCancelErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsOperationsCancelErrorBody` | `apigee/errors/apihub_projects_locations_operations_cancel_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_operations_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_operations_delete(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `operations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `operations_id` — path `operationsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApihubProjectsLocationsOperationsDeleteErrorBody]`
- **Error**: `ApihubProjectsLocationsOperationsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsOperationsDeleteErrorBody` | `apigee/errors/apihub_projects_locations_operations_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_operations_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_operations_get(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `operations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `operations_id` — path `operationsId`
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsOperationsGetErrorBody]`
- **Error**: `ApihubProjectsLocationsOperationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApihubProjectsLocationsOperationsGetErrorBody` | `apigee/errors/apihub_projects_locations_operations_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_operations_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/operations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_operations_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, return_partial_success: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `return_partial_success` — query `returnPartialSuccess`
- **Returns (parsed)**: `GoogleLongrunningListOperationsResponse`
- **Returns (raw)**: `ApiResult[GoogleLongrunningListOperationsResponse, ApihubProjectsLocationsOperationsListErrorBody]`
- **Error**: `ApihubProjectsLocationsOperationsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleLongrunningListOperationsResponse` | `apigee/models/google_longrunning_list_operations_response.py` |
| `ApihubProjectsLocationsOperationsListErrorBody` | `apigee/errors/apihub_projects_locations_operations_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_plugins_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/plugins`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_plugins_create(projects_id: str, locations_id: str, body: GoogleCloudApihubV1Plugin | GoogleCloudApihubV1PluginDict, *, plugin_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `plugin_id` — query `pluginId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1Plugin`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Plugin, ApihubProjectsLocationsPluginsCreateErrorBody]`
- **Error**: `ApihubProjectsLocationsPluginsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Plugin` | `apigee/models/google_cloud_apihub_v1_plugin.py` |
| `GoogleCloudApihubV1PluginDict` | `apigee/models/google_cloud_apihub_v1_plugin.py` |
| `ApihubProjectsLocationsPluginsCreateErrorBody` | `apigee/errors/apihub_projects_locations_plugins_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_plugins_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_plugins_delete(projects_id: str, locations_id: str, plugins_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `plugins_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `plugins_id` — path `pluginsId`
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsPluginsDeleteErrorBody]`
- **Error**: `ApihubProjectsLocationsPluginsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApihubProjectsLocationsPluginsDeleteErrorBody` | `apigee/errors/apihub_projects_locations_plugins_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_plugins_disable

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}:disable`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_plugins_disable(projects_id: str, locations_id: str, plugins_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `plugins_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `plugins_id` — path `pluginsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1Plugin`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Plugin, ApihubProjectsLocationsPluginsDisableErrorBody]`
- **Error**: `ApihubProjectsLocationsPluginsDisableErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Plugin` | `apigee/models/google_cloud_apihub_v1_plugin.py` |
| `ApihubProjectsLocationsPluginsDisableErrorBody` | `apigee/errors/apihub_projects_locations_plugins_disable_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_plugins_enable

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}:enable`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_plugins_enable(projects_id: str, locations_id: str, plugins_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `plugins_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `plugins_id` — path `pluginsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1Plugin`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Plugin, ApihubProjectsLocationsPluginsEnableErrorBody]`
- **Error**: `ApihubProjectsLocationsPluginsEnableErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Plugin` | `apigee/models/google_cloud_apihub_v1_plugin.py` |
| `ApihubProjectsLocationsPluginsEnableErrorBody` | `apigee/errors/apihub_projects_locations_plugins_enable_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_plugins_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_plugins_get(projects_id: str, locations_id: str, plugins_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `plugins_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `plugins_id` — path `pluginsId`
- **Returns (parsed)**: `GoogleCloudApihubV1Plugin`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1Plugin, ApihubProjectsLocationsPluginsGetErrorBody]`
- **Error**: `ApihubProjectsLocationsPluginsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1Plugin` | `apigee/models/google_cloud_apihub_v1_plugin.py` |
| `ApihubProjectsLocationsPluginsGetErrorBody` | `apigee/errors/apihub_projects_locations_plugins_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_plugins_get_style_guide

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/styleGuide`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_plugins_get_style_guide(projects_id: str, locations_id: str, plugins_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `plugins_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `plugins_id` — path `pluginsId`
- **Returns (parsed)**: `GoogleCloudApihubV1StyleGuide`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1StyleGuide, ApihubProjectsLocationsPluginsGetStyleGuideErrorBody]`
- **Error**: `ApihubProjectsLocationsPluginsGetStyleGuideErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1StyleGuide` | `apigee/models/google_cloud_apihub_v1_style_guide.py` |
| `ApihubProjectsLocationsPluginsGetStyleGuideErrorBody` | `apigee/errors/apihub_projects_locations_plugins_get_style_guide_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_plugins_instances_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_plugins_instances_create(projects_id: str, locations_id: str, plugins_id: str, body: GoogleCloudApihubV1PluginInstance | GoogleCloudApihubV1PluginInstanceDict, *, plugin_instance_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `plugins_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `plugins_id` — path `pluginsId` · `plugin_instance_id` — query `pluginInstanceId` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsPluginsInstancesCreateErrorBody]`
- **Error**: `ApihubProjectsLocationsPluginsInstancesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1PluginInstance` | `apigee/models/google_cloud_apihub_v1_plugin_instance.py` |
| `GoogleCloudApihubV1PluginInstanceDict` | `apigee/models/google_cloud_apihub_v1_plugin_instance.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApihubProjectsLocationsPluginsInstancesCreateErrorBody` | `apigee/errors/apihub_projects_locations_plugins_instances_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_plugins_instances_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_plugins_instances_delete(projects_id: str, locations_id: str, plugins_id: str, instances_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `plugins_id`, `instances_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `plugins_id` — path `pluginsId` · `instances_id` — path `instancesId`
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsPluginsInstancesDeleteErrorBody]`
- **Error**: `ApihubProjectsLocationsPluginsInstancesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApihubProjectsLocationsPluginsInstancesDeleteErrorBody` | `apigee/errors/apihub_projects_locations_plugins_instances_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_plugins_instances_disable_action

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}:disableAction`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_plugins_instances_disable_action(projects_id: str, locations_id: str, plugins_id: str, instances_id: str, body: GoogleCloudApihubV1DisablePluginInstanceActionRequest | GoogleCloudApihubV1DisablePluginInstanceActionRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `plugins_id`, `instances_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `plugins_id` — path `pluginsId` · `instances_id` — path `instancesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsPluginsInstancesDisableActionErrorBody]`
- **Error**: `ApihubProjectsLocationsPluginsInstancesDisableActionErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1DisablePluginInstanceActionRequest` | `apigee/models/google_cloud_apihub_v1_disable_plugin_instance_action_request.py` |
| `GoogleCloudApihubV1DisablePluginInstanceActionRequestDict` | `apigee/models/google_cloud_apihub_v1_disable_plugin_instance_action_request.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApihubProjectsLocationsPluginsInstancesDisableActionErrorBody` | `apigee/errors/apihub_projects_locations_plugins_instances_disable_action_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_plugins_instances_enable_action

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}:enableAction`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_plugins_instances_enable_action(projects_id: str, locations_id: str, plugins_id: str, instances_id: str, body: GoogleCloudApihubV1EnablePluginInstanceActionRequest | GoogleCloudApihubV1EnablePluginInstanceActionRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `plugins_id`, `instances_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `plugins_id` — path `pluginsId` · `instances_id` — path `instancesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsPluginsInstancesEnableActionErrorBody]`
- **Error**: `ApihubProjectsLocationsPluginsInstancesEnableActionErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1EnablePluginInstanceActionRequest` | `apigee/models/google_cloud_apihub_v1_enable_plugin_instance_action_request.py` |
| `GoogleCloudApihubV1EnablePluginInstanceActionRequestDict` | `apigee/models/google_cloud_apihub_v1_enable_plugin_instance_action_request.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApihubProjectsLocationsPluginsInstancesEnableActionErrorBody` | `apigee/errors/apihub_projects_locations_plugins_instances_enable_action_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_plugins_instances_execute_action

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}:executeAction`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_plugins_instances_execute_action(projects_id: str, locations_id: str, plugins_id: str, instances_id: str, body: GoogleCloudApihubV1ExecutePluginInstanceActionRequest | GoogleCloudApihubV1ExecutePluginInstanceActionRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `plugins_id`, `instances_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `plugins_id` — path `pluginsId` · `instances_id` — path `instancesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsPluginsInstancesExecuteActionErrorBody]`
- **Error**: `ApihubProjectsLocationsPluginsInstancesExecuteActionErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ExecutePluginInstanceActionRequest` | `apigee/models/google_cloud_apihub_v1_execute_plugin_instance_action_request.py` |
| `GoogleCloudApihubV1ExecutePluginInstanceActionRequestDict` | `apigee/models/google_cloud_apihub_v1_execute_plugin_instance_action_request.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApihubProjectsLocationsPluginsInstancesExecuteActionErrorBody` | `apigee/errors/apihub_projects_locations_plugins_instances_execute_action_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_plugins_instances_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_plugins_instances_get(projects_id: str, locations_id: str, plugins_id: str, instances_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `plugins_id`, `instances_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `plugins_id` — path `pluginsId` · `instances_id` — path `instancesId`
- **Returns (parsed)**: `GoogleCloudApihubV1PluginInstance`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1PluginInstance, ApihubProjectsLocationsPluginsInstancesGetErrorBody]`
- **Error**: `ApihubProjectsLocationsPluginsInstancesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1PluginInstance` | `apigee/models/google_cloud_apihub_v1_plugin_instance.py` |
| `ApihubProjectsLocationsPluginsInstancesGetErrorBody` | `apigee/errors/apihub_projects_locations_plugins_instances_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_plugins_instances_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_plugins_instances_list(projects_id: str, locations_id: str, plugins_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `plugins_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `plugins_id` — path `pluginsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApihubV1ListPluginInstancesResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1ListPluginInstancesResponse, ApihubProjectsLocationsPluginsInstancesListErrorBody]`
- **Error**: `ApihubProjectsLocationsPluginsInstancesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ListPluginInstancesResponse` | `apigee/models/google_cloud_apihub_v1_list_plugin_instances_response.py` |
| `ApihubProjectsLocationsPluginsInstancesListErrorBody` | `apigee/errors/apihub_projects_locations_plugins_instances_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_plugins_instances_manage_source_data

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}:manageSourceData`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_plugins_instances_manage_source_data(projects_id: str, locations_id: str, plugins_id: str, instances_id: str, body: GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest | GoogleCloudApihubV1ManagePluginInstanceSourceDataRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `plugins_id`, `instances_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `plugins_id` — path `pluginsId` · `instances_id` — path `instancesId` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApihubProjectsLocationsPluginsInstancesManageSourceDataErrorBody]`
- **Error**: `ApihubProjectsLocationsPluginsInstancesManageSourceDataErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest` | `apigee/models/google_cloud_apihub_v1_manage_plugin_instance_source_data_request.py` |
| `GoogleCloudApihubV1ManagePluginInstanceSourceDataRequestDict` | `apigee/models/google_cloud_apihub_v1_manage_plugin_instance_source_data_request.py` |
| `ApihubProjectsLocationsPluginsInstancesManageSourceDataErrorBody` | `apigee/errors/apihub_projects_locations_plugins_instances_manage_source_data_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_plugins_instances_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_plugins_instances_patch(projects_id: str, locations_id: str, plugins_id: str, instances_id: str, body: GoogleCloudApihubV1PluginInstance | GoogleCloudApihubV1PluginInstanceDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `plugins_id`, `instances_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `plugins_id` — path `pluginsId` · `instances_id` — path `instancesId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1PluginInstance`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1PluginInstance, ApihubProjectsLocationsPluginsInstancesPatchErrorBody]`
- **Error**: `ApihubProjectsLocationsPluginsInstancesPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1PluginInstance` | `apigee/models/google_cloud_apihub_v1_plugin_instance.py` |
| `GoogleCloudApihubV1PluginInstanceDict` | `apigee/models/google_cloud_apihub_v1_plugin_instance.py` |
| `ApihubProjectsLocationsPluginsInstancesPatchErrorBody` | `apigee/errors/apihub_projects_locations_plugins_instances_patch_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_plugins_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/plugins`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_plugins_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApihubV1ListPluginsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1ListPluginsResponse, ApihubProjectsLocationsPluginsListErrorBody]`
- **Error**: `ApihubProjectsLocationsPluginsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ListPluginsResponse` | `apigee/models/google_cloud_apihub_v1_list_plugins_response.py` |
| `ApihubProjectsLocationsPluginsListErrorBody` | `apigee/errors/apihub_projects_locations_plugins_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_plugins_style_guide_get_contents

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/styleGuide:contents`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_plugins_style_guide_get_contents(projects_id: str, locations_id: str, plugins_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `plugins_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `plugins_id` — path `pluginsId`
- **Returns (parsed)**: `GoogleCloudApihubV1StyleGuideContents`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1StyleGuideContents, ApihubProjectsLocationsPluginsStyleGuideGetContentsErrorBody]`
- **Error**: `ApihubProjectsLocationsPluginsStyleGuideGetContentsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1StyleGuideContents` | `apigee/models/google_cloud_apihub_v1_style_guide_contents.py` |
| `ApihubProjectsLocationsPluginsStyleGuideGetContentsErrorBody` | `apigee/errors/apihub_projects_locations_plugins_style_guide_get_contents_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_plugins_update_style_guide

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/styleGuide`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_plugins_update_style_guide(projects_id: str, locations_id: str, plugins_id: str, body: GoogleCloudApihubV1StyleGuide | GoogleCloudApihubV1StyleGuideDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `plugins_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `plugins_id` — path `pluginsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1StyleGuide`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1StyleGuide, ApihubProjectsLocationsPluginsUpdateStyleGuideErrorBody]`
- **Error**: `ApihubProjectsLocationsPluginsUpdateStyleGuideErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1StyleGuide` | `apigee/models/google_cloud_apihub_v1_style_guide.py` |
| `GoogleCloudApihubV1StyleGuideDict` | `apigee/models/google_cloud_apihub_v1_style_guide.py` |
| `ApihubProjectsLocationsPluginsUpdateStyleGuideErrorBody` | `apigee/errors/apihub_projects_locations_plugins_update_style_guide_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_retrieve_api_views

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}:retrieveApiViews`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_retrieve_api_views(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, view: ViewApigeeProjectsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `view` — query
- **Returns (parsed)**: `GoogleCloudApihubV1RetrieveApiViewsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1RetrieveApiViewsResponse, ApihubProjectsLocationsRetrieveApiViewsErrorBody]`
- **Error**: `ApihubProjectsLocationsRetrieveApiViewsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ViewApigeeProjectsApiOrStr` | `apigee/models/enums/view_apigee_projects_api.py` |
| `GoogleCloudApihubV1RetrieveApiViewsResponse` | `apigee/models/google_cloud_apihub_v1_retrieve_api_views_response.py` |
| `ApihubProjectsLocationsRetrieveApiViewsErrorBody` | `apigee/errors/apihub_projects_locations_retrieve_api_views_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_runtime_project_attachments_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/runtimeProjectAttachments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_runtime_project_attachments_create(projects_id: str, locations_id: str, body: GoogleCloudApihubV1RuntimeProjectAttachment | GoogleCloudApihubV1RuntimeProjectAttachmentDict, *, runtime_project_attachment_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `runtime_project_attachment_id` — query `runtimeProjectAttachmentId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1RuntimeProjectAttachment`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1RuntimeProjectAttachment, ApihubProjectsLocationsRuntimeProjectAttachmentsCreateErrorBody]`
- **Error**: `ApihubProjectsLocationsRuntimeProjectAttachmentsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1RuntimeProjectAttachment` | `apigee/models/google_cloud_apihub_v1_runtime_project_attachment.py` |
| `GoogleCloudApihubV1RuntimeProjectAttachmentDict` | `apigee/models/google_cloud_apihub_v1_runtime_project_attachment.py` |
| `ApihubProjectsLocationsRuntimeProjectAttachmentsCreateErrorBody` | `apigee/errors/apihub_projects_locations_runtime_project_attachments_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_runtime_project_attachments_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/runtimeProjectAttachments/{runtimeProjectAttachmentsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_runtime_project_attachments_delete(projects_id: str, locations_id: str, runtime_project_attachments_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `runtime_project_attachments_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `runtime_project_attachments_id` — path `runtimeProjectAttachmentsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteErrorBody]`
- **Error**: `ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteErrorBody` | `apigee/errors/apihub_projects_locations_runtime_project_attachments_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_runtime_project_attachments_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/runtimeProjectAttachments/{runtimeProjectAttachmentsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_runtime_project_attachments_get(projects_id: str, locations_id: str, runtime_project_attachments_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `runtime_project_attachments_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `runtime_project_attachments_id` — path `runtimeProjectAttachmentsId`
- **Returns (parsed)**: `GoogleCloudApihubV1RuntimeProjectAttachment`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1RuntimeProjectAttachment, ApihubProjectsLocationsRuntimeProjectAttachmentsGetErrorBody]`
- **Error**: `ApihubProjectsLocationsRuntimeProjectAttachmentsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1RuntimeProjectAttachment` | `apigee/models/google_cloud_apihub_v1_runtime_project_attachment.py` |
| `ApihubProjectsLocationsRuntimeProjectAttachmentsGetErrorBody` | `apigee/errors/apihub_projects_locations_runtime_project_attachments_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_runtime_project_attachments_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/runtimeProjectAttachments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_runtime_project_attachments_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `order_by` — query `orderBy` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse, ApihubProjectsLocationsRuntimeProjectAttachmentsListErrorBody]`
- **Error**: `ApihubProjectsLocationsRuntimeProjectAttachmentsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse` | `apigee/models/google_cloud_apihub_v1_list_runtime_project_attachments_response.py` |
| `ApihubProjectsLocationsRuntimeProjectAttachmentsListErrorBody` | `apigee/errors/apihub_projects_locations_runtime_project_attachments_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_search_resources

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}:searchResources`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_search_resources(projects_id: str, locations_id: str, body: GoogleCloudApihubV1SearchResourcesRequest | GoogleCloudApihubV1SearchResourcesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApihubV1SearchResourcesResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApihubV1SearchResourcesResponse, ApihubProjectsLocationsSearchResourcesErrorBody]`
- **Error**: `ApihubProjectsLocationsSearchResourcesErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1SearchResourcesRequest` | `apigee/models/google_cloud_apihub_v1_search_resources_request.py` |
| `GoogleCloudApihubV1SearchResourcesRequestDict` | `apigee/models/google_cloud_apihub_v1_search_resources_request.py` |
| `GoogleCloudApihubV1SearchResourcesResponse` | `apigee/models/google_cloud_apihub_v1_search_resources_response.py` |
| `ApihubProjectsLocationsSearchResourcesErrorBody` | `apigee/errors/apihub_projects_locations_search_resources_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.projects.apihub_projects_locations_servers_configure_and_deploy_server

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/servers:configureAndDeployServer`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apihub_projects_locations_servers_configure_and_deploy_server(projects_id: str, locations_id: str, body: GoogleCloudApihubV1ConfigureAndDeployServerRequest | GoogleCloudApihubV1ConfigureAndDeployServerRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApihubProjectsLocationsServersConfigureAndDeployServerErrorBody]`
- **Error**: `ApihubProjectsLocationsServersConfigureAndDeployServerErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApihubV1ConfigureAndDeployServerRequest` | `apigee/models/google_cloud_apihub_v1_configure_and_deploy_server_request.py` |
| `GoogleCloudApihubV1ConfigureAndDeployServerRequestDict` | `apigee/models/google_cloud_apihub_v1_configure_and_deploy_server_request.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApihubProjectsLocationsServersConfigureAndDeployServerErrorBody` | `apigee/errors/apihub_projects_locations_servers_configure_and_deploy_server_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

