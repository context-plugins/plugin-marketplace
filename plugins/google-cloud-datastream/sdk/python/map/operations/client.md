<!-- Generated file — do not edit; regenerated with the SDK. -->

# Client — operations

Accessor: `client` · Source: `google_cloud_datastream/client.py` · 32 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.datastream_projects_locations_connection_profiles_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_connection_profiles_create(projects_id: str, locations_id: str, body: ConnectionProfile | ConnectionProfileDict, *, connection_profile_id: str | None = None, force: bool | None = None, request_id: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `connection_profile_id` — query `connectionProfileId` · `force` — query · `request_id` — query `requestId` · `validate_only` — query `validateOnly` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DatastreamProjectsLocationsConnectionProfilesCreateErrorBody]`
- **Error**: `DatastreamProjectsLocationsConnectionProfilesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ConnectionProfile` | `google_cloud_datastream/models/connection_profile.py` |
| `ConnectionProfileDict` | `google_cloud_datastream/models/connection_profile.py` |
| `Operation` | `google_cloud_datastream/models/operation.py` |
| `DatastreamProjectsLocationsConnectionProfilesCreateErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_connection_profiles_create_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_connection_profiles_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles/{connectionProfilesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_connection_profiles_delete(projects_id: str, locations_id: str, connection_profiles_id: str, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `connection_profiles_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `connection_profiles_id` — path `connectionProfilesId` · `request_id` — query `requestId`
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DatastreamProjectsLocationsConnectionProfilesDeleteErrorBody]`
- **Error**: `DatastreamProjectsLocationsConnectionProfilesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Operation` | `google_cloud_datastream/models/operation.py` |
| `DatastreamProjectsLocationsConnectionProfilesDeleteErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_connection_profiles_delete_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_connection_profiles_discover

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles:discover`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_connection_profiles_discover(projects_id: str, locations_id: str, body: DiscoverConnectionProfileRequest | DiscoverConnectionProfileRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `body` — JSON body
- **Returns (parsed)**: `DiscoverConnectionProfileResponse`
- **Returns (raw)**: `ApiResult[DiscoverConnectionProfileResponse, DatastreamProjectsLocationsConnectionProfilesDiscoverErrorBody]`
- **Error**: `DatastreamProjectsLocationsConnectionProfilesDiscoverErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DiscoverConnectionProfileRequest` | `google_cloud_datastream/models/discover_connection_profile_request.py` |
| `DiscoverConnectionProfileRequestDict` | `google_cloud_datastream/models/discover_connection_profile_request.py` |
| `DiscoverConnectionProfileResponse` | `google_cloud_datastream/models/discover_connection_profile_response.py` |
| `DatastreamProjectsLocationsConnectionProfilesDiscoverErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_connection_profiles_discover_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_connection_profiles_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles/{connectionProfilesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_connection_profiles_get(projects_id: str, locations_id: str, connection_profiles_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `connection_profiles_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `connection_profiles_id` — path `connectionProfilesId`
- **Returns (parsed)**: `ConnectionProfile`
- **Returns (raw)**: `ApiResult[ConnectionProfile, DatastreamProjectsLocationsConnectionProfilesGetErrorBody]`
- **Error**: `DatastreamProjectsLocationsConnectionProfilesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ConnectionProfile` | `google_cloud_datastream/models/connection_profile.py` |
| `DatastreamProjectsLocationsConnectionProfilesGetErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_connection_profiles_get_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_connection_profiles_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_connection_profiles_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `order_by` — query `orderBy` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListConnectionProfilesResponse`
- **Returns (raw)**: `ApiResult[ListConnectionProfilesResponse, DatastreamProjectsLocationsConnectionProfilesListErrorBody]`
- **Error**: `DatastreamProjectsLocationsConnectionProfilesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListConnectionProfilesResponse` | `google_cloud_datastream/models/list_connection_profiles_response.py` |
| `DatastreamProjectsLocationsConnectionProfilesListErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_connection_profiles_list_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_connection_profiles_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles/{connectionProfilesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_connection_profiles_patch(projects_id: str, locations_id: str, connection_profiles_id: str, body: ConnectionProfile | ConnectionProfileDict, *, force: bool | None = None, request_id: str | None = None, update_mask: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `connection_profiles_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `connection_profiles_id` — path `connectionProfilesId` · `force` — query · `request_id` — query `requestId` · `update_mask` — query `updateMask` · `validate_only` — query `validateOnly` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DatastreamProjectsLocationsConnectionProfilesPatchErrorBody]`
- **Error**: `DatastreamProjectsLocationsConnectionProfilesPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ConnectionProfile` | `google_cloud_datastream/models/connection_profile.py` |
| `ConnectionProfileDict` | `google_cloud_datastream/models/connection_profile.py` |
| `Operation` | `google_cloud_datastream/models/operation.py` |
| `DatastreamProjectsLocationsConnectionProfilesPatchErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_connection_profiles_patch_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_fetch_static_ips

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}:fetchStaticIps`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_fetch_static_ips(projects_id: str, locations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `FetchStaticIpsResponse`
- **Returns (raw)**: `ApiResult[FetchStaticIpsResponse, DatastreamProjectsLocationsFetchStaticIpsErrorBody]`
- **Error**: `DatastreamProjectsLocationsFetchStaticIpsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FetchStaticIpsResponse` | `google_cloud_datastream/models/fetch_static_ips_response.py` |
| `DatastreamProjectsLocationsFetchStaticIpsErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_fetch_static_ips_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_get(projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId`
- **Returns (parsed)**: `Location`
- **Returns (raw)**: `ApiResult[Location, DatastreamProjectsLocationsGetErrorBody]`
- **Error**: `DatastreamProjectsLocationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Location` | `google_cloud_datastream/models/location.py` |
| `DatastreamProjectsLocationsGetErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_get_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_list

- **Route**: `GET /v1/projects/{projectsId}/locations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_list(projects_id: str, *, extra_location_types: list[str] | None = None, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`
- **Params**: `projects_id` — path `projectsId` · `extra_location_types` — query `extraLocationTypes` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListLocationsResponse`
- **Returns (raw)**: `ApiResult[ListLocationsResponse, DatastreamProjectsLocationsListErrorBody]`
- **Error**: `DatastreamProjectsLocationsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListLocationsResponse` | `google_cloud_datastream/models/list_locations_response.py` |
| `DatastreamProjectsLocationsListErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_list_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_operations_cancel

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_operations_cancel(projects_id: str, locations_id: str, operations_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `operations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `operations_id` — path `operationsId` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DatastreamProjectsLocationsOperationsCancelErrorBody]`
- **Error**: `DatastreamProjectsLocationsOperationsCancelErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsOperationsCancelErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_operations_cancel_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_operations_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_operations_delete(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `operations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `operations_id` — path `operationsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DatastreamProjectsLocationsOperationsDeleteErrorBody]`
- **Error**: `DatastreamProjectsLocationsOperationsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsOperationsDeleteErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_operations_delete_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_operations_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_operations_get(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `operations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `operations_id` — path `operationsId`
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DatastreamProjectsLocationsOperationsGetErrorBody]`
- **Error**: `DatastreamProjectsLocationsOperationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Operation` | `google_cloud_datastream/models/operation.py` |
| `DatastreamProjectsLocationsOperationsGetErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_operations_get_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_operations_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/operations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_operations_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, return_partial_success: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `return_partial_success` — query `returnPartialSuccess`
- **Returns (parsed)**: `ListOperationsResponse`
- **Returns (raw)**: `ApiResult[ListOperationsResponse, DatastreamProjectsLocationsOperationsListErrorBody]`
- **Error**: `DatastreamProjectsLocationsOperationsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListOperationsResponse` | `google_cloud_datastream/models/list_operations_response.py` |
| `DatastreamProjectsLocationsOperationsListErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_operations_list_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_private_connections_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/privateConnections`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_private_connections_create(projects_id: str, locations_id: str, body: PrivateConnection | PrivateConnectionDict, *, force: bool | None = None, private_connection_id: str | None = None, request_id: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `force` — query · `private_connection_id` — query `privateConnectionId` · `request_id` — query `requestId` · `validate_only` — query `validateOnly` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DatastreamProjectsLocationsPrivateConnectionsCreateErrorBody]`
- **Error**: `DatastreamProjectsLocationsPrivateConnectionsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PrivateConnection` | `google_cloud_datastream/models/private_connection.py` |
| `PrivateConnectionDict` | `google_cloud_datastream/models/private_connection.py` |
| `Operation` | `google_cloud_datastream/models/operation.py` |
| `DatastreamProjectsLocationsPrivateConnectionsCreateErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_private_connections_create_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_private_connections_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_private_connections_delete(projects_id: str, locations_id: str, private_connections_id: str, *, force: bool | None = None, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `private_connections_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `private_connections_id` — path `privateConnectionsId` · `force` — query · `request_id` — query `requestId`
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DatastreamProjectsLocationsPrivateConnectionsDeleteErrorBody]`
- **Error**: `DatastreamProjectsLocationsPrivateConnectionsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Operation` | `google_cloud_datastream/models/operation.py` |
| `DatastreamProjectsLocationsPrivateConnectionsDeleteErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_private_connections_delete_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_private_connections_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_private_connections_get(projects_id: str, locations_id: str, private_connections_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `private_connections_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `private_connections_id` — path `privateConnectionsId`
- **Returns (parsed)**: `PrivateConnection`
- **Returns (raw)**: `ApiResult[PrivateConnection, DatastreamProjectsLocationsPrivateConnectionsGetErrorBody]`
- **Error**: `DatastreamProjectsLocationsPrivateConnectionsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PrivateConnection` | `google_cloud_datastream/models/private_connection.py` |
| `DatastreamProjectsLocationsPrivateConnectionsGetErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_private_connections_get_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_private_connections_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/privateConnections`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_private_connections_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `order_by` — query `orderBy` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListPrivateConnectionsResponse`
- **Returns (raw)**: `ApiResult[ListPrivateConnectionsResponse, DatastreamProjectsLocationsPrivateConnectionsListErrorBody]`
- **Error**: `DatastreamProjectsLocationsPrivateConnectionsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListPrivateConnectionsResponse` | `google_cloud_datastream/models/list_private_connections_response.py` |
| `DatastreamProjectsLocationsPrivateConnectionsListErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_private_connections_list_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_private_connections_routes_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}/routes`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_private_connections_routes_create(projects_id: str, locations_id: str, private_connections_id: str, body: Route | RouteDict, *, request_id: str | None = None, route_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `private_connections_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `private_connections_id` — path `privateConnectionsId` · `request_id` — query `requestId` · `route_id` — query `routeId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DatastreamProjectsLocationsPrivateConnectionsRoutesCreateErrorBody]`
- **Error**: `DatastreamProjectsLocationsPrivateConnectionsRoutesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Route` | `google_cloud_datastream/models/route.py` |
| `RouteDict` | `google_cloud_datastream/models/route.py` |
| `Operation` | `google_cloud_datastream/models/operation.py` |
| `DatastreamProjectsLocationsPrivateConnectionsRoutesCreateErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_private_connections_routes_create_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_private_connections_routes_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}/routes/{routesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_private_connections_routes_delete(projects_id: str, locations_id: str, private_connections_id: str, routes_id: str, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `private_connections_id`, `routes_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `private_connections_id` — path `privateConnectionsId` · `routes_id` — path `routesId` · `request_id` — query `requestId`
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteErrorBody]`
- **Error**: `DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Operation` | `google_cloud_datastream/models/operation.py` |
| `DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_private_connections_routes_delete_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_private_connections_routes_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}/routes/{routesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_private_connections_routes_get(projects_id: str, locations_id: str, private_connections_id: str, routes_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `private_connections_id`, `routes_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `private_connections_id` — path `privateConnectionsId` · `routes_id` — path `routesId`
- **Returns (parsed)**: `Route`
- **Returns (raw)**: `ApiResult[Route, DatastreamProjectsLocationsPrivateConnectionsRoutesGetErrorBody]`
- **Error**: `DatastreamProjectsLocationsPrivateConnectionsRoutesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Route` | `google_cloud_datastream/models/route.py` |
| `DatastreamProjectsLocationsPrivateConnectionsRoutesGetErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_private_connections_routes_get_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_private_connections_routes_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}/routes`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_private_connections_routes_list(projects_id: str, locations_id: str, private_connections_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `private_connections_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `private_connections_id` — path `privateConnectionsId` · `filter_` — query `filter` · `order_by` — query `orderBy` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListRoutesResponse`
- **Returns (raw)**: `ApiResult[ListRoutesResponse, DatastreamProjectsLocationsPrivateConnectionsRoutesListErrorBody]`
- **Error**: `DatastreamProjectsLocationsPrivateConnectionsRoutesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListRoutesResponse` | `google_cloud_datastream/models/list_routes_response.py` |
| `DatastreamProjectsLocationsPrivateConnectionsRoutesListErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_private_connections_routes_list_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_streams_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/streams`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_streams_create(projects_id: str, locations_id: str, body: Stream | StreamDict, *, force: bool | None = None, request_id: str | None = None, stream_id: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `force` — query · `request_id` — query `requestId` · `stream_id` — query `streamId` · `validate_only` — query `validateOnly` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DatastreamProjectsLocationsStreamsCreateErrorBody]`
- **Error**: `DatastreamProjectsLocationsStreamsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Stream` | `google_cloud_datastream/models/stream.py` |
| `StreamDict` | `google_cloud_datastream/models/stream.py` |
| `Operation` | `google_cloud_datastream/models/operation.py` |
| `DatastreamProjectsLocationsStreamsCreateErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_streams_create_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_streams_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_streams_delete(projects_id: str, locations_id: str, streams_id: str, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `streams_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `streams_id` — path `streamsId` · `request_id` — query `requestId`
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DatastreamProjectsLocationsStreamsDeleteErrorBody]`
- **Error**: `DatastreamProjectsLocationsStreamsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Operation` | `google_cloud_datastream/models/operation.py` |
| `DatastreamProjectsLocationsStreamsDeleteErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_streams_delete_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_streams_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_streams_get(projects_id: str, locations_id: str, streams_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `streams_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `streams_id` — path `streamsId`
- **Returns (parsed)**: `Stream`
- **Returns (raw)**: `ApiResult[Stream, DatastreamProjectsLocationsStreamsGetErrorBody]`
- **Error**: `DatastreamProjectsLocationsStreamsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Stream` | `google_cloud_datastream/models/stream.py` |
| `DatastreamProjectsLocationsStreamsGetErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_streams_get_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_streams_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/streams`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_streams_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `order_by` — query `orderBy` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListStreamsResponse`
- **Returns (raw)**: `ApiResult[ListStreamsResponse, DatastreamProjectsLocationsStreamsListErrorBody]`
- **Error**: `DatastreamProjectsLocationsStreamsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListStreamsResponse` | `google_cloud_datastream/models/list_streams_response.py` |
| `DatastreamProjectsLocationsStreamsListErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_streams_list_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_streams_objects_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}/objects/{objectsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_streams_objects_get(projects_id: str, locations_id: str, streams_id: str, objects_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `streams_id`, `objects_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `streams_id` — path `streamsId` · `objects_id` — path `objectsId`
- **Returns (parsed)**: `StreamObject`
- **Returns (raw)**: `ApiResult[StreamObject, DatastreamProjectsLocationsStreamsObjectsGetErrorBody]`
- **Error**: `DatastreamProjectsLocationsStreamsObjectsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StreamObject` | `google_cloud_datastream/models/stream_object.py` |
| `DatastreamProjectsLocationsStreamsObjectsGetErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_streams_objects_get_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_streams_objects_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}/objects`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_streams_objects_list(projects_id: str, locations_id: str, streams_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `streams_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `streams_id` — path `streamsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListStreamObjectsResponse`
- **Returns (raw)**: `ApiResult[ListStreamObjectsResponse, DatastreamProjectsLocationsStreamsObjectsListErrorBody]`
- **Error**: `DatastreamProjectsLocationsStreamsObjectsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListStreamObjectsResponse` | `google_cloud_datastream/models/list_stream_objects_response.py` |
| `DatastreamProjectsLocationsStreamsObjectsListErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_streams_objects_list_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_streams_objects_lookup

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}/objects:lookup`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_streams_objects_lookup(projects_id: str, locations_id: str, streams_id: str, body: LookupStreamObjectRequest | LookupStreamObjectRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `streams_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `streams_id` — path `streamsId` · `body` — JSON body
- **Returns (parsed)**: `StreamObject`
- **Returns (raw)**: `ApiResult[StreamObject, DatastreamProjectsLocationsStreamsObjectsLookupErrorBody]`
- **Error**: `DatastreamProjectsLocationsStreamsObjectsLookupErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LookupStreamObjectRequest` | `google_cloud_datastream/models/lookup_stream_object_request.py` |
| `LookupStreamObjectRequestDict` | `google_cloud_datastream/models/lookup_stream_object_request.py` |
| `StreamObject` | `google_cloud_datastream/models/stream_object.py` |
| `DatastreamProjectsLocationsStreamsObjectsLookupErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_streams_objects_lookup_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_streams_objects_start_backfill_job

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}/objects/{objectsId}:startBackfillJob`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_streams_objects_start_backfill_job(projects_id: str, locations_id: str, streams_id: str, objects_id: str, body: StartBackfillJobRequest | StartBackfillJobRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `streams_id`, `objects_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `streams_id` — path `streamsId` · `objects_id` — path `objectsId` · `body` — JSON body
- **Returns (parsed)**: `StartBackfillJobResponse`
- **Returns (raw)**: `ApiResult[StartBackfillJobResponse, DatastreamProjectsLocationsStreamsObjectsStartBackfillJobErrorBody]`
- **Error**: `DatastreamProjectsLocationsStreamsObjectsStartBackfillJobErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StartBackfillJobRequest` | `google_cloud_datastream/models/start_backfill_job_request.py` |
| `StartBackfillJobRequestDict` | `google_cloud_datastream/models/start_backfill_job_request.py` |
| `StartBackfillJobResponse` | `google_cloud_datastream/models/start_backfill_job_response.py` |
| `DatastreamProjectsLocationsStreamsObjectsStartBackfillJobErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_streams_objects_start_backfill_job_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_streams_objects_stop_backfill_job

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}/objects/{objectsId}:stopBackfillJob`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_streams_objects_stop_backfill_job(projects_id: str, locations_id: str, streams_id: str, objects_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `streams_id`, `objects_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `streams_id` — path `streamsId` · `objects_id` — path `objectsId` · `body` — JSON body
- **Returns (parsed)**: `StopBackfillJobResponse`
- **Returns (raw)**: `ApiResult[StopBackfillJobResponse, DatastreamProjectsLocationsStreamsObjectsStopBackfillJobErrorBody]`
- **Error**: `DatastreamProjectsLocationsStreamsObjectsStopBackfillJobErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StopBackfillJobResponse` | `google_cloud_datastream/models/stop_backfill_job_response.py` |
| `DatastreamProjectsLocationsStreamsObjectsStopBackfillJobErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_streams_objects_stop_backfill_job_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_streams_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_streams_patch(projects_id: str, locations_id: str, streams_id: str, body: Stream | StreamDict, *, force: bool | None = None, request_id: str | None = None, update_mask: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `streams_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `streams_id` — path `streamsId` · `force` — query · `request_id` — query `requestId` · `update_mask` — query `updateMask` · `validate_only` — query `validateOnly` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DatastreamProjectsLocationsStreamsPatchErrorBody]`
- **Error**: `DatastreamProjectsLocationsStreamsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Stream` | `google_cloud_datastream/models/stream.py` |
| `StreamDict` | `google_cloud_datastream/models/stream.py` |
| `Operation` | `google_cloud_datastream/models/operation.py` |
| `DatastreamProjectsLocationsStreamsPatchErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_streams_patch_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

### client.datastream_projects_locations_streams_run

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}:run`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def datastream_projects_locations_streams_run(projects_id: str, locations_id: str, streams_id: str, body: RunStreamRequest | RunStreamRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `streams_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `streams_id` — path `streamsId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, DatastreamProjectsLocationsStreamsRunErrorBody]`
- **Error**: `DatastreamProjectsLocationsStreamsRunErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RunStreamRequest` | `google_cloud_datastream/models/run_stream_request.py` |
| `RunStreamRequestDict` | `google_cloud_datastream/models/run_stream_request.py` |
| `Operation` | `google_cloud_datastream/models/operation.py` |
| `DatastreamProjectsLocationsStreamsRunErrorBody` | `google_cloud_datastream/errors/datastream_projects_locations_streams_run_error.py` |
| `GoogleRpcError` | `google_cloud_datastream/models/google_rpc_error.py` |

