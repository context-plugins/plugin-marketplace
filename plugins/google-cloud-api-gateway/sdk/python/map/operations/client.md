<!-- Generated file — do not edit; regenerated with the SDK. -->

# Client — operations

Accessor: `client` · Source: `google_cloud_api_gateway/client.py` · 30 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.apigateway_projects_locations_apis_configs_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_apis_configs_create(projects_id: str, locations_id: str, apis_id: str, body: ApigatewayApiConfig | ApigatewayApiConfigDict, *, api_config_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `api_config_id` — query `apiConfigId` · `body` — JSON body
- **Returns (parsed)**: `ApigatewayOperation`
- **Returns (raw)**: `ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsApisConfigsCreateErrorBody]`
- **Error**: `ApigatewayProjectsLocationsApisConfigsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewayApiConfig` | `google_cloud_api_gateway/models/apigateway_api_config.py` |
| `ApigatewayApiConfigDict` | `google_cloud_api_gateway/models/apigateway_api_config.py` |
| `ApigatewayOperation` | `google_cloud_api_gateway/models/apigateway_operation.py` |
| `ApigatewayProjectsLocationsApisConfigsCreateErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_apis_configs_create_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_apis_configs_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_apis_configs_delete(projects_id: str, locations_id: str, apis_id: str, configs_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `configs_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `configs_id` — path `configsId`
- **Returns (parsed)**: `ApigatewayOperation`
- **Returns (raw)**: `ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsApisConfigsDeleteErrorBody]`
- **Error**: `ApigatewayProjectsLocationsApisConfigsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewayOperation` | `google_cloud_api_gateway/models/apigateway_operation.py` |
| `ApigatewayProjectsLocationsApisConfigsDeleteErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_apis_configs_delete_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_apis_configs_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_apis_configs_get(projects_id: str, locations_id: str, apis_id: str, configs_id: str, *, view: ViewOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `configs_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `configs_id` — path `configsId` · `view` — query
- **Returns (parsed)**: `ApigatewayApiConfig`
- **Returns (raw)**: `ApiResult[ApigatewayApiConfig, ApigatewayProjectsLocationsApisConfigsGetErrorBody]`
- **Error**: `ApigatewayProjectsLocationsApisConfigsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ViewOrStr` | `google_cloud_api_gateway/models/enums/view.py` |
| `ApigatewayApiConfig` | `google_cloud_api_gateway/models/apigateway_api_config.py` |
| `ApigatewayProjectsLocationsApisConfigsGetErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_apis_configs_get_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_apis_configs_get_iam_policy

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_apis_configs_get_iam_policy(projects_id: str, locations_id: str, apis_id: str, configs_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `configs_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `configs_id` — path `configsId` · `options_requested_policy_version` — query `options.requestedPolicyVersion`
- **Returns (parsed)**: `ApigatewayPolicy`
- **Returns (raw)**: `ApiResult[ApigatewayPolicy, ApigatewayProjectsLocationsApisConfigsGetIamPolicyErrorBody]`
- **Error**: `ApigatewayProjectsLocationsApisConfigsGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewayPolicy` | `google_cloud_api_gateway/models/apigateway_policy.py` |
| `ApigatewayProjectsLocationsApisConfigsGetIamPolicyErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_apis_configs_get_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_apis_configs_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_apis_configs_list(projects_id: str, locations_id: str, apis_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `filter_` — query `filter` · `order_by` — query `orderBy` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ApigatewayListApiConfigsResponse`
- **Returns (raw)**: `ApiResult[ApigatewayListApiConfigsResponse, ApigatewayProjectsLocationsApisConfigsListErrorBody]`
- **Error**: `ApigatewayProjectsLocationsApisConfigsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewayListApiConfigsResponse` | `google_cloud_api_gateway/models/apigateway_list_api_configs_response.py` |
| `ApigatewayProjectsLocationsApisConfigsListErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_apis_configs_list_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_apis_configs_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_apis_configs_patch(projects_id: str, locations_id: str, apis_id: str, configs_id: str, body: ApigatewayApiConfig | ApigatewayApiConfigDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `configs_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `configs_id` — path `configsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `ApigatewayOperation`
- **Returns (raw)**: `ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsApisConfigsPatchErrorBody]`
- **Error**: `ApigatewayProjectsLocationsApisConfigsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewayApiConfig` | `google_cloud_api_gateway/models/apigateway_api_config.py` |
| `ApigatewayApiConfigDict` | `google_cloud_api_gateway/models/apigateway_api_config.py` |
| `ApigatewayOperation` | `google_cloud_api_gateway/models/apigateway_operation.py` |
| `ApigatewayProjectsLocationsApisConfigsPatchErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_apis_configs_patch_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_apis_configs_set_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_apis_configs_set_iam_policy(projects_id: str, locations_id: str, apis_id: str, configs_id: str, body: ApigatewaySetIamPolicyRequest | ApigatewaySetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `configs_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `configs_id` — path `configsId` · `body` — JSON body
- **Returns (parsed)**: `ApigatewayPolicy`
- **Returns (raw)**: `ApiResult[ApigatewayPolicy, ApigatewayProjectsLocationsApisConfigsSetIamPolicyErrorBody]`
- **Error**: `ApigatewayProjectsLocationsApisConfigsSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewaySetIamPolicyRequest` | `google_cloud_api_gateway/models/apigateway_set_iam_policy_request.py` |
| `ApigatewaySetIamPolicyRequestDict` | `google_cloud_api_gateway/models/apigateway_set_iam_policy_request.py` |
| `ApigatewayPolicy` | `google_cloud_api_gateway/models/apigateway_policy.py` |
| `ApigatewayProjectsLocationsApisConfigsSetIamPolicyErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_apis_configs_set_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_apis_configs_test_iam_permissions

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}:testIamPermissions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_apis_configs_test_iam_permissions(projects_id: str, locations_id: str, apis_id: str, configs_id: str, body: ApigatewayTestIamPermissionsRequest | ApigatewayTestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `configs_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `configs_id` — path `configsId` · `body` — JSON body
- **Returns (parsed)**: `ApigatewayTestIamPermissionsResponse`
- **Returns (raw)**: `ApiResult[ApigatewayTestIamPermissionsResponse, ApigatewayProjectsLocationsApisConfigsTestIamPermissionsErrorBody]`
- **Error**: `ApigatewayProjectsLocationsApisConfigsTestIamPermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewayTestIamPermissionsRequest` | `google_cloud_api_gateway/models/apigateway_test_iam_permissions_request.py` |
| `ApigatewayTestIamPermissionsRequestDict` | `google_cloud_api_gateway/models/apigateway_test_iam_permissions_request.py` |
| `ApigatewayTestIamPermissionsResponse` | `google_cloud_api_gateway/models/apigateway_test_iam_permissions_response.py` |
| `ApigatewayProjectsLocationsApisConfigsTestIamPermissionsErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_apis_configs_test_iam_permissions_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_apis_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/apis`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_apis_create(projects_id: str, locations_id: str, body: ApigatewayApi | ApigatewayApiDict, *, api_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `api_id` — query `apiId` · `body` — JSON body
- **Returns (parsed)**: `ApigatewayOperation`
- **Returns (raw)**: `ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsApisCreateErrorBody]`
- **Error**: `ApigatewayProjectsLocationsApisCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewayApi` | `google_cloud_api_gateway/models/apigateway_api.py` |
| `ApigatewayApiDict` | `google_cloud_api_gateway/models/apigateway_api.py` |
| `ApigatewayOperation` | `google_cloud_api_gateway/models/apigateway_operation.py` |
| `ApigatewayProjectsLocationsApisCreateErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_apis_create_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_apis_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_apis_delete(projects_id: str, locations_id: str, apis_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId`
- **Returns (parsed)**: `ApigatewayOperation`
- **Returns (raw)**: `ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsApisDeleteErrorBody]`
- **Error**: `ApigatewayProjectsLocationsApisDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewayOperation` | `google_cloud_api_gateway/models/apigateway_operation.py` |
| `ApigatewayProjectsLocationsApisDeleteErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_apis_delete_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_apis_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_apis_get(projects_id: str, locations_id: str, apis_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId`
- **Returns (parsed)**: `ApigatewayApi`
- **Returns (raw)**: `ApiResult[ApigatewayApi, ApigatewayProjectsLocationsApisGetErrorBody]`
- **Error**: `ApigatewayProjectsLocationsApisGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewayApi` | `google_cloud_api_gateway/models/apigateway_api.py` |
| `ApigatewayProjectsLocationsApisGetErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_apis_get_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_apis_get_iam_policy

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_apis_get_iam_policy(projects_id: str, locations_id: str, apis_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `options_requested_policy_version` — query `options.requestedPolicyVersion`
- **Returns (parsed)**: `ApigatewayPolicy`
- **Returns (raw)**: `ApiResult[ApigatewayPolicy, ApigatewayProjectsLocationsApisGetIamPolicyErrorBody]`
- **Error**: `ApigatewayProjectsLocationsApisGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewayPolicy` | `google_cloud_api_gateway/models/apigateway_policy.py` |
| `ApigatewayProjectsLocationsApisGetIamPolicyErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_apis_get_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_apis_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/apis`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_apis_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `order_by` — query `orderBy` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ApigatewayListApisResponse`
- **Returns (raw)**: `ApiResult[ApigatewayListApisResponse, ApigatewayProjectsLocationsApisListErrorBody]`
- **Error**: `ApigatewayProjectsLocationsApisListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewayListApisResponse` | `google_cloud_api_gateway/models/apigateway_list_apis_response.py` |
| `ApigatewayProjectsLocationsApisListErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_apis_list_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_apis_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_apis_patch(projects_id: str, locations_id: str, apis_id: str, body: ApigatewayApi | ApigatewayApiDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `ApigatewayOperation`
- **Returns (raw)**: `ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsApisPatchErrorBody]`
- **Error**: `ApigatewayProjectsLocationsApisPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewayApi` | `google_cloud_api_gateway/models/apigateway_api.py` |
| `ApigatewayApiDict` | `google_cloud_api_gateway/models/apigateway_api.py` |
| `ApigatewayOperation` | `google_cloud_api_gateway/models/apigateway_operation.py` |
| `ApigatewayProjectsLocationsApisPatchErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_apis_patch_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_apis_set_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_apis_set_iam_policy(projects_id: str, locations_id: str, apis_id: str, body: ApigatewaySetIamPolicyRequest | ApigatewaySetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `body` — JSON body
- **Returns (parsed)**: `ApigatewayPolicy`
- **Returns (raw)**: `ApiResult[ApigatewayPolicy, ApigatewayProjectsLocationsApisSetIamPolicyErrorBody]`
- **Error**: `ApigatewayProjectsLocationsApisSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewaySetIamPolicyRequest` | `google_cloud_api_gateway/models/apigateway_set_iam_policy_request.py` |
| `ApigatewaySetIamPolicyRequestDict` | `google_cloud_api_gateway/models/apigateway_set_iam_policy_request.py` |
| `ApigatewayPolicy` | `google_cloud_api_gateway/models/apigateway_policy.py` |
| `ApigatewayProjectsLocationsApisSetIamPolicyErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_apis_set_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_apis_test_iam_permissions

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}:testIamPermissions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_apis_test_iam_permissions(projects_id: str, locations_id: str, apis_id: str, body: ApigatewayTestIamPermissionsRequest | ApigatewayTestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `apis_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `apis_id` — path `apisId` · `body` — JSON body
- **Returns (parsed)**: `ApigatewayTestIamPermissionsResponse`
- **Returns (raw)**: `ApiResult[ApigatewayTestIamPermissionsResponse, ApigatewayProjectsLocationsApisTestIamPermissionsErrorBody]`
- **Error**: `ApigatewayProjectsLocationsApisTestIamPermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewayTestIamPermissionsRequest` | `google_cloud_api_gateway/models/apigateway_test_iam_permissions_request.py` |
| `ApigatewayTestIamPermissionsRequestDict` | `google_cloud_api_gateway/models/apigateway_test_iam_permissions_request.py` |
| `ApigatewayTestIamPermissionsResponse` | `google_cloud_api_gateway/models/apigateway_test_iam_permissions_response.py` |
| `ApigatewayProjectsLocationsApisTestIamPermissionsErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_apis_test_iam_permissions_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_gateways_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/gateways`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_gateways_create(projects_id: str, locations_id: str, body: ApigatewayGateway | ApigatewayGatewayDict, *, gateway_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `gateway_id` — query `gatewayId` · `body` — JSON body
- **Returns (parsed)**: `ApigatewayOperation`
- **Returns (raw)**: `ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsGatewaysCreateErrorBody]`
- **Error**: `ApigatewayProjectsLocationsGatewaysCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewayGateway` | `google_cloud_api_gateway/models/apigateway_gateway.py` |
| `ApigatewayGatewayDict` | `google_cloud_api_gateway/models/apigateway_gateway.py` |
| `ApigatewayOperation` | `google_cloud_api_gateway/models/apigateway_operation.py` |
| `ApigatewayProjectsLocationsGatewaysCreateErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_gateways_create_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_gateways_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_gateways_delete(projects_id: str, locations_id: str, gateways_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `gateways_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `gateways_id` — path `gatewaysId`
- **Returns (parsed)**: `ApigatewayOperation`
- **Returns (raw)**: `ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsGatewaysDeleteErrorBody]`
- **Error**: `ApigatewayProjectsLocationsGatewaysDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewayOperation` | `google_cloud_api_gateway/models/apigateway_operation.py` |
| `ApigatewayProjectsLocationsGatewaysDeleteErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_gateways_delete_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_gateways_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_gateways_get(projects_id: str, locations_id: str, gateways_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `gateways_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `gateways_id` — path `gatewaysId`
- **Returns (parsed)**: `ApigatewayGateway`
- **Returns (raw)**: `ApiResult[ApigatewayGateway, ApigatewayProjectsLocationsGatewaysGetErrorBody]`
- **Error**: `ApigatewayProjectsLocationsGatewaysGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewayGateway` | `google_cloud_api_gateway/models/apigateway_gateway.py` |
| `ApigatewayProjectsLocationsGatewaysGetErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_gateways_get_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_gateways_get_iam_policy

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_gateways_get_iam_policy(projects_id: str, locations_id: str, gateways_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `gateways_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `gateways_id` — path `gatewaysId` · `options_requested_policy_version` — query `options.requestedPolicyVersion`
- **Returns (parsed)**: `ApigatewayPolicy`
- **Returns (raw)**: `ApiResult[ApigatewayPolicy, ApigatewayProjectsLocationsGatewaysGetIamPolicyErrorBody]`
- **Error**: `ApigatewayProjectsLocationsGatewaysGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewayPolicy` | `google_cloud_api_gateway/models/apigateway_policy.py` |
| `ApigatewayProjectsLocationsGatewaysGetIamPolicyErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_gateways_get_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_gateways_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/gateways`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_gateways_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `order_by` — query `orderBy` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ApigatewayListGatewaysResponse`
- **Returns (raw)**: `ApiResult[ApigatewayListGatewaysResponse, ApigatewayProjectsLocationsGatewaysListErrorBody]`
- **Error**: `ApigatewayProjectsLocationsGatewaysListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewayListGatewaysResponse` | `google_cloud_api_gateway/models/apigateway_list_gateways_response.py` |
| `ApigatewayProjectsLocationsGatewaysListErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_gateways_list_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_gateways_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_gateways_patch(projects_id: str, locations_id: str, gateways_id: str, body: ApigatewayGateway | ApigatewayGatewayDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `gateways_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `gateways_id` — path `gatewaysId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `ApigatewayOperation`
- **Returns (raw)**: `ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsGatewaysPatchErrorBody]`
- **Error**: `ApigatewayProjectsLocationsGatewaysPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewayGateway` | `google_cloud_api_gateway/models/apigateway_gateway.py` |
| `ApigatewayGatewayDict` | `google_cloud_api_gateway/models/apigateway_gateway.py` |
| `ApigatewayOperation` | `google_cloud_api_gateway/models/apigateway_operation.py` |
| `ApigatewayProjectsLocationsGatewaysPatchErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_gateways_patch_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_gateways_set_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_gateways_set_iam_policy(projects_id: str, locations_id: str, gateways_id: str, body: ApigatewaySetIamPolicyRequest | ApigatewaySetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `gateways_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `gateways_id` — path `gatewaysId` · `body` — JSON body
- **Returns (parsed)**: `ApigatewayPolicy`
- **Returns (raw)**: `ApiResult[ApigatewayPolicy, ApigatewayProjectsLocationsGatewaysSetIamPolicyErrorBody]`
- **Error**: `ApigatewayProjectsLocationsGatewaysSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewaySetIamPolicyRequest` | `google_cloud_api_gateway/models/apigateway_set_iam_policy_request.py` |
| `ApigatewaySetIamPolicyRequestDict` | `google_cloud_api_gateway/models/apigateway_set_iam_policy_request.py` |
| `ApigatewayPolicy` | `google_cloud_api_gateway/models/apigateway_policy.py` |
| `ApigatewayProjectsLocationsGatewaysSetIamPolicyErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_gateways_set_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_gateways_test_iam_permissions

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}:testIamPermissions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_gateways_test_iam_permissions(projects_id: str, locations_id: str, gateways_id: str, body: ApigatewayTestIamPermissionsRequest | ApigatewayTestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `gateways_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `gateways_id` — path `gatewaysId` · `body` — JSON body
- **Returns (parsed)**: `ApigatewayTestIamPermissionsResponse`
- **Returns (raw)**: `ApiResult[ApigatewayTestIamPermissionsResponse, ApigatewayProjectsLocationsGatewaysTestIamPermissionsErrorBody]`
- **Error**: `ApigatewayProjectsLocationsGatewaysTestIamPermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewayTestIamPermissionsRequest` | `google_cloud_api_gateway/models/apigateway_test_iam_permissions_request.py` |
| `ApigatewayTestIamPermissionsRequestDict` | `google_cloud_api_gateway/models/apigateway_test_iam_permissions_request.py` |
| `ApigatewayTestIamPermissionsResponse` | `google_cloud_api_gateway/models/apigateway_test_iam_permissions_response.py` |
| `ApigatewayProjectsLocationsGatewaysTestIamPermissionsErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_gateways_test_iam_permissions_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_get(projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId`
- **Returns (parsed)**: `ApigatewayLocation`
- **Returns (raw)**: `ApiResult[ApigatewayLocation, ApigatewayProjectsLocationsGetErrorBody]`
- **Error**: `ApigatewayProjectsLocationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewayLocation` | `google_cloud_api_gateway/models/apigateway_location.py` |
| `ApigatewayProjectsLocationsGetErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_get_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_list

- **Route**: `GET /v1/projects/{projectsId}/locations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_list(projects_id: str, *, extra_location_types: list[str] | None = None, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`
- **Params**: `projects_id` — path `projectsId` · `extra_location_types` — query `extraLocationTypes` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ApigatewayListLocationsResponse`
- **Returns (raw)**: `ApiResult[ApigatewayListLocationsResponse, ApigatewayProjectsLocationsListErrorBody]`
- **Error**: `ApigatewayProjectsLocationsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewayListLocationsResponse` | `google_cloud_api_gateway/models/apigateway_list_locations_response.py` |
| `ApigatewayProjectsLocationsListErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_list_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_operations_cancel

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_operations_cancel(projects_id: str, locations_id: str, operations_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `operations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `operations_id` — path `operationsId` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApigatewayProjectsLocationsOperationsCancelErrorBody]`
- **Error**: `ApigatewayProjectsLocationsOperationsCancelErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsOperationsCancelErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_operations_cancel_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_operations_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_operations_delete(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `operations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `operations_id` — path `operationsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApigatewayProjectsLocationsOperationsDeleteErrorBody]`
- **Error**: `ApigatewayProjectsLocationsOperationsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsOperationsDeleteErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_operations_delete_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_operations_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_operations_get(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `operations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `operations_id` — path `operationsId`
- **Returns (parsed)**: `ApigatewayOperation`
- **Returns (raw)**: `ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsOperationsGetErrorBody]`
- **Error**: `ApigatewayProjectsLocationsOperationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewayOperation` | `google_cloud_api_gateway/models/apigateway_operation.py` |
| `ApigatewayProjectsLocationsOperationsGetErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_operations_get_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

### client.apigateway_projects_locations_operations_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/operations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigateway_projects_locations_operations_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, return_partial_success: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `return_partial_success` — query `returnPartialSuccess`
- **Returns (parsed)**: `ApigatewayListOperationsResponse`
- **Returns (raw)**: `ApiResult[ApigatewayListOperationsResponse, ApigatewayProjectsLocationsOperationsListErrorBody]`
- **Error**: `ApigatewayProjectsLocationsOperationsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigatewayListOperationsResponse` | `google_cloud_api_gateway/models/apigateway_list_operations_response.py` |
| `ApigatewayProjectsLocationsOperationsListErrorBody` | `google_cloud_api_gateway/errors/apigateway_projects_locations_operations_list_error.py` |
| `GoogleRpcError` | `google_cloud_api_gateway/models/google_rpc_error.py` |

