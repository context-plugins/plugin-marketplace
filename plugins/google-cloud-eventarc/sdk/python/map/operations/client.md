<!-- Generated file — do not edit; regenerated with the SDK. -->

# Client — operations

Accessor: `client` · Source: `google_cloud_eventarc/client.py` · 66 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.eventarc_projects_locations_channel_connections_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/channelConnections`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_channel_connections_create(projects_id: str, locations_id: str, body: ChannelConnection | ChannelConnectionDict, *, channel_connection_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `channel_connection_id` — query `channelConnectionId` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsChannelConnectionsCreateErrorBody]`
- **Error**: `EventarcProjectsLocationsChannelConnectionsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ChannelConnection` | `google_cloud_eventarc/models/channel_connection.py` |
| `ChannelConnectionDict` | `google_cloud_eventarc/models/channel_connection.py` |
| `GoogleLongrunningOperation` | `google_cloud_eventarc/models/google_longrunning_operation.py` |
| `EventarcProjectsLocationsChannelConnectionsCreateErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_channel_connections_create_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_channel_connections_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/channelConnections/{channelConnectionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_channel_connections_delete(projects_id: str, locations_id: str, channel_connections_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `channel_connections_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `channel_connections_id` — path `channelConnectionsId`
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsChannelConnectionsDeleteErrorBody]`
- **Error**: `EventarcProjectsLocationsChannelConnectionsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleLongrunningOperation` | `google_cloud_eventarc/models/google_longrunning_operation.py` |
| `EventarcProjectsLocationsChannelConnectionsDeleteErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_channel_connections_delete_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_channel_connections_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/channelConnections/{channelConnectionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_channel_connections_get(projects_id: str, locations_id: str, channel_connections_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `channel_connections_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `channel_connections_id` — path `channelConnectionsId`
- **Returns (parsed)**: `ChannelConnection`
- **Returns (raw)**: `ApiResult[ChannelConnection, EventarcProjectsLocationsChannelConnectionsGetErrorBody]`
- **Error**: `EventarcProjectsLocationsChannelConnectionsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ChannelConnection` | `google_cloud_eventarc/models/channel_connection.py` |
| `EventarcProjectsLocationsChannelConnectionsGetErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_channel_connections_get_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_channel_connections_get_iam_policy

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/channelConnections/{channelConnectionsId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_channel_connections_get_iam_policy(projects_id: str, locations_id: str, channel_connections_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `channel_connections_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `channel_connections_id` — path `channelConnectionsId` · `options_requested_policy_version` — query `options.requestedPolicyVersion`
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, EventarcProjectsLocationsChannelConnectionsGetIamPolicyErrorBody]`
- **Error**: `EventarcProjectsLocationsChannelConnectionsGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Policy` | `google_cloud_eventarc/models/policy.py` |
| `EventarcProjectsLocationsChannelConnectionsGetIamPolicyErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_channel_connections_get_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_channel_connections_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/channelConnections`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_channel_connections_list(projects_id: str, locations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListChannelConnectionsResponse`
- **Returns (raw)**: `ApiResult[ListChannelConnectionsResponse, EventarcProjectsLocationsChannelConnectionsListErrorBody]`
- **Error**: `EventarcProjectsLocationsChannelConnectionsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListChannelConnectionsResponse` | `google_cloud_eventarc/models/list_channel_connections_response.py` |
| `EventarcProjectsLocationsChannelConnectionsListErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_channel_connections_list_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_channel_connections_set_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/channelConnections/{channelConnectionsId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_channel_connections_set_iam_policy(projects_id: str, locations_id: str, channel_connections_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `channel_connections_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `channel_connections_id` — path `channelConnectionsId` · `body` — JSON body
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, EventarcProjectsLocationsChannelConnectionsSetIamPolicyErrorBody]`
- **Error**: `EventarcProjectsLocationsChannelConnectionsSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SetIamPolicyRequest` | `google_cloud_eventarc/models/set_iam_policy_request.py` |
| `SetIamPolicyRequestDict` | `google_cloud_eventarc/models/set_iam_policy_request.py` |
| `Policy` | `google_cloud_eventarc/models/policy.py` |
| `EventarcProjectsLocationsChannelConnectionsSetIamPolicyErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_channel_connections_set_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_channel_connections_test_iam_permissions

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/channelConnections/{channelConnectionsId}:testIamPermissions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_channel_connections_test_iam_permissions(projects_id: str, locations_id: str, channel_connections_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `channel_connections_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `channel_connections_id` — path `channelConnectionsId` · `body` — JSON body
- **Returns (parsed)**: `TestIamPermissionsResponse`
- **Returns (raw)**: `ApiResult[TestIamPermissionsResponse, EventarcProjectsLocationsChannelConnectionsTestIamPermissionsErrorBody]`
- **Error**: `EventarcProjectsLocationsChannelConnectionsTestIamPermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TestIamPermissionsRequest` | `google_cloud_eventarc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsRequestDict` | `google_cloud_eventarc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsResponse` | `google_cloud_eventarc/models/test_iam_permissions_response.py` |
| `EventarcProjectsLocationsChannelConnectionsTestIamPermissionsErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_channel_connections_test_iam_permissions_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_channels_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/channels`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_channels_create(projects_id: str, locations_id: str, body: Channel | ChannelDict, *, channel_id: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `channel_id` — query `channelId` · `validate_only` — query `validateOnly` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsChannelsCreateErrorBody]`
- **Error**: `EventarcProjectsLocationsChannelsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Channel` | `google_cloud_eventarc/models/channel.py` |
| `ChannelDict` | `google_cloud_eventarc/models/channel.py` |
| `GoogleLongrunningOperation` | `google_cloud_eventarc/models/google_longrunning_operation.py` |
| `EventarcProjectsLocationsChannelsCreateErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_channels_create_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_channels_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_channels_delete(projects_id: str, locations_id: str, channels_id: str, *, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `channels_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `channels_id` — path `channelsId` · `validate_only` — query `validateOnly`
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsChannelsDeleteErrorBody]`
- **Error**: `EventarcProjectsLocationsChannelsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleLongrunningOperation` | `google_cloud_eventarc/models/google_longrunning_operation.py` |
| `EventarcProjectsLocationsChannelsDeleteErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_channels_delete_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_channels_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_channels_get(projects_id: str, locations_id: str, channels_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `channels_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `channels_id` — path `channelsId`
- **Returns (parsed)**: `Channel`
- **Returns (raw)**: `ApiResult[Channel, EventarcProjectsLocationsChannelsGetErrorBody]`
- **Error**: `EventarcProjectsLocationsChannelsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Channel` | `google_cloud_eventarc/models/channel.py` |
| `EventarcProjectsLocationsChannelsGetErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_channels_get_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_channels_get_iam_policy

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_channels_get_iam_policy(projects_id: str, locations_id: str, channels_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `channels_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `channels_id` — path `channelsId` · `options_requested_policy_version` — query `options.requestedPolicyVersion`
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, EventarcProjectsLocationsChannelsGetIamPolicyErrorBody]`
- **Error**: `EventarcProjectsLocationsChannelsGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Policy` | `google_cloud_eventarc/models/policy.py` |
| `EventarcProjectsLocationsChannelsGetIamPolicyErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_channels_get_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_channels_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/channels`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_channels_list(projects_id: str, locations_id: str, *, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `order_by` — query `orderBy` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListChannelsResponse`
- **Returns (raw)**: `ApiResult[ListChannelsResponse, EventarcProjectsLocationsChannelsListErrorBody]`
- **Error**: `EventarcProjectsLocationsChannelsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListChannelsResponse` | `google_cloud_eventarc/models/list_channels_response.py` |
| `EventarcProjectsLocationsChannelsListErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_channels_list_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_channels_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_channels_patch(projects_id: str, locations_id: str, channels_id: str, body: Channel | ChannelDict, *, update_mask: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `channels_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `channels_id` — path `channelsId` · `update_mask` — query `updateMask` · `validate_only` — query `validateOnly` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsChannelsPatchErrorBody]`
- **Error**: `EventarcProjectsLocationsChannelsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Channel` | `google_cloud_eventarc/models/channel.py` |
| `ChannelDict` | `google_cloud_eventarc/models/channel.py` |
| `GoogleLongrunningOperation` | `google_cloud_eventarc/models/google_longrunning_operation.py` |
| `EventarcProjectsLocationsChannelsPatchErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_channels_patch_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_channels_set_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_channels_set_iam_policy(projects_id: str, locations_id: str, channels_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `channels_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `channels_id` — path `channelsId` · `body` — JSON body
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, EventarcProjectsLocationsChannelsSetIamPolicyErrorBody]`
- **Error**: `EventarcProjectsLocationsChannelsSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SetIamPolicyRequest` | `google_cloud_eventarc/models/set_iam_policy_request.py` |
| `SetIamPolicyRequestDict` | `google_cloud_eventarc/models/set_iam_policy_request.py` |
| `Policy` | `google_cloud_eventarc/models/policy.py` |
| `EventarcProjectsLocationsChannelsSetIamPolicyErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_channels_set_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_channels_test_iam_permissions

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}:testIamPermissions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_channels_test_iam_permissions(projects_id: str, locations_id: str, channels_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `channels_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `channels_id` — path `channelsId` · `body` — JSON body
- **Returns (parsed)**: `TestIamPermissionsResponse`
- **Returns (raw)**: `ApiResult[TestIamPermissionsResponse, EventarcProjectsLocationsChannelsTestIamPermissionsErrorBody]`
- **Error**: `EventarcProjectsLocationsChannelsTestIamPermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TestIamPermissionsRequest` | `google_cloud_eventarc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsRequestDict` | `google_cloud_eventarc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsResponse` | `google_cloud_eventarc/models/test_iam_permissions_response.py` |
| `EventarcProjectsLocationsChannelsTestIamPermissionsErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_channels_test_iam_permissions_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_enrollments_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/enrollments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_enrollments_create(projects_id: str, locations_id: str, body: Enrollment | EnrollmentDict, *, enrollment_id: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `enrollment_id` — query `enrollmentId` · `validate_only` — query `validateOnly` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsEnrollmentsCreateErrorBody]`
- **Error**: `EventarcProjectsLocationsEnrollmentsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Enrollment` | `google_cloud_eventarc/models/enrollment.py` |
| `EnrollmentDict` | `google_cloud_eventarc/models/enrollment.py` |
| `GoogleLongrunningOperation` | `google_cloud_eventarc/models/google_longrunning_operation.py` |
| `EventarcProjectsLocationsEnrollmentsCreateErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_enrollments_create_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_enrollments_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_enrollments_delete(projects_id: str, locations_id: str, enrollments_id: str, *, allow_missing: bool | None = None, etag: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `enrollments_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `enrollments_id` — path `enrollmentsId` · `allow_missing` — query `allowMissing` · `etag` — query · `validate_only` — query `validateOnly`
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsEnrollmentsDeleteErrorBody]`
- **Error**: `EventarcProjectsLocationsEnrollmentsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleLongrunningOperation` | `google_cloud_eventarc/models/google_longrunning_operation.py` |
| `EventarcProjectsLocationsEnrollmentsDeleteErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_enrollments_delete_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_enrollments_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_enrollments_get(projects_id: str, locations_id: str, enrollments_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `enrollments_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `enrollments_id` — path `enrollmentsId`
- **Returns (parsed)**: `Enrollment`
- **Returns (raw)**: `ApiResult[Enrollment, EventarcProjectsLocationsEnrollmentsGetErrorBody]`
- **Error**: `EventarcProjectsLocationsEnrollmentsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Enrollment` | `google_cloud_eventarc/models/enrollment.py` |
| `EventarcProjectsLocationsEnrollmentsGetErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_enrollments_get_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_enrollments_get_iam_policy

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_enrollments_get_iam_policy(projects_id: str, locations_id: str, enrollments_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `enrollments_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `enrollments_id` — path `enrollmentsId` · `options_requested_policy_version` — query `options.requestedPolicyVersion`
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, EventarcProjectsLocationsEnrollmentsGetIamPolicyErrorBody]`
- **Error**: `EventarcProjectsLocationsEnrollmentsGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Policy` | `google_cloud_eventarc/models/policy.py` |
| `EventarcProjectsLocationsEnrollmentsGetIamPolicyErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_enrollments_get_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_enrollments_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/enrollments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_enrollments_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `order_by` — query `orderBy` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListEnrollmentsResponse`
- **Returns (raw)**: `ApiResult[ListEnrollmentsResponse, EventarcProjectsLocationsEnrollmentsListErrorBody]`
- **Error**: `EventarcProjectsLocationsEnrollmentsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListEnrollmentsResponse` | `google_cloud_eventarc/models/list_enrollments_response.py` |
| `EventarcProjectsLocationsEnrollmentsListErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_enrollments_list_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_enrollments_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_enrollments_patch(projects_id: str, locations_id: str, enrollments_id: str, body: Enrollment | EnrollmentDict, *, allow_missing: bool | None = None, update_mask: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `enrollments_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `enrollments_id` — path `enrollmentsId` · `allow_missing` — query `allowMissing` · `update_mask` — query `updateMask` · `validate_only` — query `validateOnly` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsEnrollmentsPatchErrorBody]`
- **Error**: `EventarcProjectsLocationsEnrollmentsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Enrollment` | `google_cloud_eventarc/models/enrollment.py` |
| `EnrollmentDict` | `google_cloud_eventarc/models/enrollment.py` |
| `GoogleLongrunningOperation` | `google_cloud_eventarc/models/google_longrunning_operation.py` |
| `EventarcProjectsLocationsEnrollmentsPatchErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_enrollments_patch_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_enrollments_set_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_enrollments_set_iam_policy(projects_id: str, locations_id: str, enrollments_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `enrollments_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `enrollments_id` — path `enrollmentsId` · `body` — JSON body
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, EventarcProjectsLocationsEnrollmentsSetIamPolicyErrorBody]`
- **Error**: `EventarcProjectsLocationsEnrollmentsSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SetIamPolicyRequest` | `google_cloud_eventarc/models/set_iam_policy_request.py` |
| `SetIamPolicyRequestDict` | `google_cloud_eventarc/models/set_iam_policy_request.py` |
| `Policy` | `google_cloud_eventarc/models/policy.py` |
| `EventarcProjectsLocationsEnrollmentsSetIamPolicyErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_enrollments_set_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_enrollments_test_iam_permissions

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}:testIamPermissions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_enrollments_test_iam_permissions(projects_id: str, locations_id: str, enrollments_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `enrollments_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `enrollments_id` — path `enrollmentsId` · `body` — JSON body
- **Returns (parsed)**: `TestIamPermissionsResponse`
- **Returns (raw)**: `ApiResult[TestIamPermissionsResponse, EventarcProjectsLocationsEnrollmentsTestIamPermissionsErrorBody]`
- **Error**: `EventarcProjectsLocationsEnrollmentsTestIamPermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TestIamPermissionsRequest` | `google_cloud_eventarc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsRequestDict` | `google_cloud_eventarc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsResponse` | `google_cloud_eventarc/models/test_iam_permissions_response.py` |
| `EventarcProjectsLocationsEnrollmentsTestIamPermissionsErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_enrollments_test_iam_permissions_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_get(projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId`
- **Returns (parsed)**: `Location`
- **Returns (raw)**: `ApiResult[Location, EventarcProjectsLocationsGetErrorBody]`
- **Error**: `EventarcProjectsLocationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Location` | `google_cloud_eventarc/models/location.py` |
| `EventarcProjectsLocationsGetErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_get_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_get_google_channel_config

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/googleChannelConfig`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_get_google_channel_config(projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId`
- **Returns (parsed)**: `GoogleChannelConfig`
- **Returns (raw)**: `ApiResult[GoogleChannelConfig, EventarcProjectsLocationsGetGoogleChannelConfigErrorBody]`
- **Error**: `EventarcProjectsLocationsGetGoogleChannelConfigErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleChannelConfig` | `google_cloud_eventarc/models/google_channel_config.py` |
| `EventarcProjectsLocationsGetGoogleChannelConfigErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_get_google_channel_config_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_google_api_sources_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/googleApiSources`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_google_api_sources_create(projects_id: str, locations_id: str, body: GoogleApiSource | GoogleApiSourceDict, *, google_api_source_id: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `google_api_source_id` — query `googleApiSourceId` · `validate_only` — query `validateOnly` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsGoogleApiSourcesCreateErrorBody]`
- **Error**: `EventarcProjectsLocationsGoogleApiSourcesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleApiSource` | `google_cloud_eventarc/models/google_api_source.py` |
| `GoogleApiSourceDict` | `google_cloud_eventarc/models/google_api_source.py` |
| `GoogleLongrunningOperation` | `google_cloud_eventarc/models/google_longrunning_operation.py` |
| `EventarcProjectsLocationsGoogleApiSourcesCreateErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_google_api_sources_create_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_google_api_sources_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_google_api_sources_delete(projects_id: str, locations_id: str, google_api_sources_id: str, *, allow_missing: bool | None = None, etag: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `google_api_sources_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `google_api_sources_id` — path `googleApiSourcesId` · `allow_missing` — query `allowMissing` · `etag` — query · `validate_only` — query `validateOnly`
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsGoogleApiSourcesDeleteErrorBody]`
- **Error**: `EventarcProjectsLocationsGoogleApiSourcesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleLongrunningOperation` | `google_cloud_eventarc/models/google_longrunning_operation.py` |
| `EventarcProjectsLocationsGoogleApiSourcesDeleteErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_google_api_sources_delete_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_google_api_sources_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_google_api_sources_get(projects_id: str, locations_id: str, google_api_sources_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `google_api_sources_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `google_api_sources_id` — path `googleApiSourcesId`
- **Returns (parsed)**: `GoogleApiSource`
- **Returns (raw)**: `ApiResult[GoogleApiSource, EventarcProjectsLocationsGoogleApiSourcesGetErrorBody]`
- **Error**: `EventarcProjectsLocationsGoogleApiSourcesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleApiSource` | `google_cloud_eventarc/models/google_api_source.py` |
| `EventarcProjectsLocationsGoogleApiSourcesGetErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_google_api_sources_get_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_google_api_sources_get_iam_policy

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_google_api_sources_get_iam_policy(projects_id: str, locations_id: str, google_api_sources_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `google_api_sources_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `google_api_sources_id` — path `googleApiSourcesId` · `options_requested_policy_version` — query `options.requestedPolicyVersion`
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyErrorBody]`
- **Error**: `EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Policy` | `google_cloud_eventarc/models/policy.py` |
| `EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_google_api_sources_get_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_google_api_sources_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/googleApiSources`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_google_api_sources_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `order_by` — query `orderBy` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListGoogleApiSourcesResponse`
- **Returns (raw)**: `ApiResult[ListGoogleApiSourcesResponse, EventarcProjectsLocationsGoogleApiSourcesListErrorBody]`
- **Error**: `EventarcProjectsLocationsGoogleApiSourcesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListGoogleApiSourcesResponse` | `google_cloud_eventarc/models/list_google_api_sources_response.py` |
| `EventarcProjectsLocationsGoogleApiSourcesListErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_google_api_sources_list_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_google_api_sources_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_google_api_sources_patch(projects_id: str, locations_id: str, google_api_sources_id: str, body: GoogleApiSource | GoogleApiSourceDict, *, allow_missing: bool | None = None, update_mask: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `google_api_sources_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `google_api_sources_id` — path `googleApiSourcesId` · `allow_missing` — query `allowMissing` · `update_mask` — query `updateMask` · `validate_only` — query `validateOnly` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsGoogleApiSourcesPatchErrorBody]`
- **Error**: `EventarcProjectsLocationsGoogleApiSourcesPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleApiSource` | `google_cloud_eventarc/models/google_api_source.py` |
| `GoogleApiSourceDict` | `google_cloud_eventarc/models/google_api_source.py` |
| `GoogleLongrunningOperation` | `google_cloud_eventarc/models/google_longrunning_operation.py` |
| `EventarcProjectsLocationsGoogleApiSourcesPatchErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_google_api_sources_patch_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_google_api_sources_set_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_google_api_sources_set_iam_policy(projects_id: str, locations_id: str, google_api_sources_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `google_api_sources_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `google_api_sources_id` — path `googleApiSourcesId` · `body` — JSON body
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyErrorBody]`
- **Error**: `EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SetIamPolicyRequest` | `google_cloud_eventarc/models/set_iam_policy_request.py` |
| `SetIamPolicyRequestDict` | `google_cloud_eventarc/models/set_iam_policy_request.py` |
| `Policy` | `google_cloud_eventarc/models/policy.py` |
| `EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_google_api_sources_set_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_google_api_sources_test_iam_permissions

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}:testIamPermissions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_google_api_sources_test_iam_permissions(projects_id: str, locations_id: str, google_api_sources_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `google_api_sources_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `google_api_sources_id` — path `googleApiSourcesId` · `body` — JSON body
- **Returns (parsed)**: `TestIamPermissionsResponse`
- **Returns (raw)**: `ApiResult[TestIamPermissionsResponse, EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsErrorBody]`
- **Error**: `EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TestIamPermissionsRequest` | `google_cloud_eventarc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsRequestDict` | `google_cloud_eventarc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsResponse` | `google_cloud_eventarc/models/test_iam_permissions_response.py` |
| `EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_google_api_sources_test_iam_permissions_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_list

- **Route**: `GET /v1/projects/{projectsId}/locations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_list(projects_id: str, *, extra_location_types: list[str] | None = None, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`
- **Params**: `projects_id` — path `projectsId` · `extra_location_types` — query `extraLocationTypes` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListLocationsResponse`
- **Returns (raw)**: `ApiResult[ListLocationsResponse, EventarcProjectsLocationsListErrorBody]`
- **Error**: `EventarcProjectsLocationsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListLocationsResponse` | `google_cloud_eventarc/models/list_locations_response.py` |
| `EventarcProjectsLocationsListErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_list_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_message_buses_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/messageBuses`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_message_buses_create(projects_id: str, locations_id: str, body: MessageBus | MessageBusDict, *, message_bus_id: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `message_bus_id` — query `messageBusId` · `validate_only` — query `validateOnly` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsMessageBusesCreateErrorBody]`
- **Error**: `EventarcProjectsLocationsMessageBusesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MessageBus` | `google_cloud_eventarc/models/message_bus.py` |
| `MessageBusDict` | `google_cloud_eventarc/models/message_bus.py` |
| `GoogleLongrunningOperation` | `google_cloud_eventarc/models/google_longrunning_operation.py` |
| `EventarcProjectsLocationsMessageBusesCreateErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_create_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_message_buses_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_message_buses_delete(projects_id: str, locations_id: str, message_buses_id: str, *, allow_missing: bool | None = None, etag: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `message_buses_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `message_buses_id` — path `messageBusesId` · `allow_missing` — query `allowMissing` · `etag` — query · `validate_only` — query `validateOnly`
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsMessageBusesDeleteErrorBody]`
- **Error**: `EventarcProjectsLocationsMessageBusesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleLongrunningOperation` | `google_cloud_eventarc/models/google_longrunning_operation.py` |
| `EventarcProjectsLocationsMessageBusesDeleteErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_delete_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_message_buses_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_message_buses_get(projects_id: str, locations_id: str, message_buses_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `message_buses_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `message_buses_id` — path `messageBusesId`
- **Returns (parsed)**: `MessageBus`
- **Returns (raw)**: `ApiResult[MessageBus, EventarcProjectsLocationsMessageBusesGetErrorBody]`
- **Error**: `EventarcProjectsLocationsMessageBusesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MessageBus` | `google_cloud_eventarc/models/message_bus.py` |
| `EventarcProjectsLocationsMessageBusesGetErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_get_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_message_buses_get_iam_policy

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_message_buses_get_iam_policy(projects_id: str, locations_id: str, message_buses_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `message_buses_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `message_buses_id` — path `messageBusesId` · `options_requested_policy_version` — query `options.requestedPolicyVersion`
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, EventarcProjectsLocationsMessageBusesGetIamPolicyErrorBody]`
- **Error**: `EventarcProjectsLocationsMessageBusesGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Policy` | `google_cloud_eventarc/models/policy.py` |
| `EventarcProjectsLocationsMessageBusesGetIamPolicyErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_get_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_message_buses_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/messageBuses`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_message_buses_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `order_by` — query `orderBy` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListMessageBusesResponse`
- **Returns (raw)**: `ApiResult[ListMessageBusesResponse, EventarcProjectsLocationsMessageBusesListErrorBody]`
- **Error**: `EventarcProjectsLocationsMessageBusesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListMessageBusesResponse` | `google_cloud_eventarc/models/list_message_buses_response.py` |
| `EventarcProjectsLocationsMessageBusesListErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_list_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_message_buses_list_enrollments

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}:listEnrollments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_message_buses_list_enrollments(projects_id: str, locations_id: str, message_buses_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `message_buses_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `message_buses_id` — path `messageBusesId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListMessageBusEnrollmentsResponse`
- **Returns (raw)**: `ApiResult[ListMessageBusEnrollmentsResponse, EventarcProjectsLocationsMessageBusesListEnrollmentsErrorBody]`
- **Error**: `EventarcProjectsLocationsMessageBusesListEnrollmentsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListMessageBusEnrollmentsResponse` | `google_cloud_eventarc/models/list_message_bus_enrollments_response.py` |
| `EventarcProjectsLocationsMessageBusesListEnrollmentsErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_list_enrollments_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_message_buses_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_message_buses_patch(projects_id: str, locations_id: str, message_buses_id: str, body: MessageBus | MessageBusDict, *, allow_missing: bool | None = None, update_mask: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `message_buses_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `message_buses_id` — path `messageBusesId` · `allow_missing` — query `allowMissing` · `update_mask` — query `updateMask` · `validate_only` — query `validateOnly` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsMessageBusesPatchErrorBody]`
- **Error**: `EventarcProjectsLocationsMessageBusesPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MessageBus` | `google_cloud_eventarc/models/message_bus.py` |
| `MessageBusDict` | `google_cloud_eventarc/models/message_bus.py` |
| `GoogleLongrunningOperation` | `google_cloud_eventarc/models/google_longrunning_operation.py` |
| `EventarcProjectsLocationsMessageBusesPatchErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_patch_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_message_buses_set_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_message_buses_set_iam_policy(projects_id: str, locations_id: str, message_buses_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `message_buses_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `message_buses_id` — path `messageBusesId` · `body` — JSON body
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, EventarcProjectsLocationsMessageBusesSetIamPolicyErrorBody]`
- **Error**: `EventarcProjectsLocationsMessageBusesSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SetIamPolicyRequest` | `google_cloud_eventarc/models/set_iam_policy_request.py` |
| `SetIamPolicyRequestDict` | `google_cloud_eventarc/models/set_iam_policy_request.py` |
| `Policy` | `google_cloud_eventarc/models/policy.py` |
| `EventarcProjectsLocationsMessageBusesSetIamPolicyErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_set_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_message_buses_test_iam_permissions

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}:testIamPermissions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_message_buses_test_iam_permissions(projects_id: str, locations_id: str, message_buses_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `message_buses_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `message_buses_id` — path `messageBusesId` · `body` — JSON body
- **Returns (parsed)**: `TestIamPermissionsResponse`
- **Returns (raw)**: `ApiResult[TestIamPermissionsResponse, EventarcProjectsLocationsMessageBusesTestIamPermissionsErrorBody]`
- **Error**: `EventarcProjectsLocationsMessageBusesTestIamPermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TestIamPermissionsRequest` | `google_cloud_eventarc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsRequestDict` | `google_cloud_eventarc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsResponse` | `google_cloud_eventarc/models/test_iam_permissions_response.py` |
| `EventarcProjectsLocationsMessageBusesTestIamPermissionsErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_test_iam_permissions_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_operations_cancel

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_operations_cancel(projects_id: str, locations_id: str, operations_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `operations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `operations_id` — path `operationsId` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, EventarcProjectsLocationsOperationsCancelErrorBody]`
- **Error**: `EventarcProjectsLocationsOperationsCancelErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsOperationsCancelErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_operations_cancel_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_operations_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_operations_delete(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `operations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `operations_id` — path `operationsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, EventarcProjectsLocationsOperationsDeleteErrorBody]`
- **Error**: `EventarcProjectsLocationsOperationsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsOperationsDeleteErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_operations_delete_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_operations_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_operations_get(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `operations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `operations_id` — path `operationsId`
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsOperationsGetErrorBody]`
- **Error**: `EventarcProjectsLocationsOperationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleLongrunningOperation` | `google_cloud_eventarc/models/google_longrunning_operation.py` |
| `EventarcProjectsLocationsOperationsGetErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_operations_get_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_operations_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/operations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_operations_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, return_partial_success: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `return_partial_success` — query `returnPartialSuccess`
- **Returns (parsed)**: `GoogleLongrunningListOperationsResponse`
- **Returns (raw)**: `ApiResult[GoogleLongrunningListOperationsResponse, EventarcProjectsLocationsOperationsListErrorBody]`
- **Error**: `EventarcProjectsLocationsOperationsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleLongrunningListOperationsResponse` | `google_cloud_eventarc/models/google_longrunning_list_operations_response.py` |
| `EventarcProjectsLocationsOperationsListErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_operations_list_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_pipelines_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/pipelines`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_pipelines_create(projects_id: str, locations_id: str, body: Pipeline | PipelineDict, *, pipeline_id: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `pipeline_id` — query `pipelineId` · `validate_only` — query `validateOnly` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsPipelinesCreateErrorBody]`
- **Error**: `EventarcProjectsLocationsPipelinesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Pipeline` | `google_cloud_eventarc/models/pipeline.py` |
| `PipelineDict` | `google_cloud_eventarc/models/pipeline.py` |
| `GoogleLongrunningOperation` | `google_cloud_eventarc/models/google_longrunning_operation.py` |
| `EventarcProjectsLocationsPipelinesCreateErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_pipelines_create_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_pipelines_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_pipelines_delete(projects_id: str, locations_id: str, pipelines_id: str, *, allow_missing: bool | None = None, etag: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `pipelines_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `pipelines_id` — path `pipelinesId` · `allow_missing` — query `allowMissing` · `etag` — query · `validate_only` — query `validateOnly`
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsPipelinesDeleteErrorBody]`
- **Error**: `EventarcProjectsLocationsPipelinesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleLongrunningOperation` | `google_cloud_eventarc/models/google_longrunning_operation.py` |
| `EventarcProjectsLocationsPipelinesDeleteErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_pipelines_delete_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_pipelines_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_pipelines_get(projects_id: str, locations_id: str, pipelines_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `pipelines_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `pipelines_id` — path `pipelinesId`
- **Returns (parsed)**: `Pipeline`
- **Returns (raw)**: `ApiResult[Pipeline, EventarcProjectsLocationsPipelinesGetErrorBody]`
- **Error**: `EventarcProjectsLocationsPipelinesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Pipeline` | `google_cloud_eventarc/models/pipeline.py` |
| `EventarcProjectsLocationsPipelinesGetErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_pipelines_get_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_pipelines_get_iam_policy

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_pipelines_get_iam_policy(projects_id: str, locations_id: str, pipelines_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `pipelines_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `pipelines_id` — path `pipelinesId` · `options_requested_policy_version` — query `options.requestedPolicyVersion`
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, EventarcProjectsLocationsPipelinesGetIamPolicyErrorBody]`
- **Error**: `EventarcProjectsLocationsPipelinesGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Policy` | `google_cloud_eventarc/models/policy.py` |
| `EventarcProjectsLocationsPipelinesGetIamPolicyErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_pipelines_get_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_pipelines_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/pipelines`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_pipelines_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `order_by` — query `orderBy` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListPipelinesResponse`
- **Returns (raw)**: `ApiResult[ListPipelinesResponse, EventarcProjectsLocationsPipelinesListErrorBody]`
- **Error**: `EventarcProjectsLocationsPipelinesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListPipelinesResponse` | `google_cloud_eventarc/models/list_pipelines_response.py` |
| `EventarcProjectsLocationsPipelinesListErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_pipelines_list_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_pipelines_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_pipelines_patch(projects_id: str, locations_id: str, pipelines_id: str, body: Pipeline | PipelineDict, *, allow_missing: bool | None = None, update_mask: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `pipelines_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `pipelines_id` — path `pipelinesId` · `allow_missing` — query `allowMissing` · `update_mask` — query `updateMask` · `validate_only` — query `validateOnly` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsPipelinesPatchErrorBody]`
- **Error**: `EventarcProjectsLocationsPipelinesPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Pipeline` | `google_cloud_eventarc/models/pipeline.py` |
| `PipelineDict` | `google_cloud_eventarc/models/pipeline.py` |
| `GoogleLongrunningOperation` | `google_cloud_eventarc/models/google_longrunning_operation.py` |
| `EventarcProjectsLocationsPipelinesPatchErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_pipelines_patch_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_pipelines_set_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_pipelines_set_iam_policy(projects_id: str, locations_id: str, pipelines_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `pipelines_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `pipelines_id` — path `pipelinesId` · `body` — JSON body
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, EventarcProjectsLocationsPipelinesSetIamPolicyErrorBody]`
- **Error**: `EventarcProjectsLocationsPipelinesSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SetIamPolicyRequest` | `google_cloud_eventarc/models/set_iam_policy_request.py` |
| `SetIamPolicyRequestDict` | `google_cloud_eventarc/models/set_iam_policy_request.py` |
| `Policy` | `google_cloud_eventarc/models/policy.py` |
| `EventarcProjectsLocationsPipelinesSetIamPolicyErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_pipelines_set_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_pipelines_test_iam_permissions

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}:testIamPermissions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_pipelines_test_iam_permissions(projects_id: str, locations_id: str, pipelines_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `pipelines_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `pipelines_id` — path `pipelinesId` · `body` — JSON body
- **Returns (parsed)**: `TestIamPermissionsResponse`
- **Returns (raw)**: `ApiResult[TestIamPermissionsResponse, EventarcProjectsLocationsPipelinesTestIamPermissionsErrorBody]`
- **Error**: `EventarcProjectsLocationsPipelinesTestIamPermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TestIamPermissionsRequest` | `google_cloud_eventarc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsRequestDict` | `google_cloud_eventarc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsResponse` | `google_cloud_eventarc/models/test_iam_permissions_response.py` |
| `EventarcProjectsLocationsPipelinesTestIamPermissionsErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_pipelines_test_iam_permissions_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_providers_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/providers/{providersId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_providers_get(projects_id: str, locations_id: str, providers_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `providers_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `providers_id` — path `providersId`
- **Returns (parsed)**: `Provider`
- **Returns (raw)**: `ApiResult[Provider, EventarcProjectsLocationsProvidersGetErrorBody]`
- **Error**: `EventarcProjectsLocationsProvidersGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Provider` | `google_cloud_eventarc/models/provider.py` |
| `EventarcProjectsLocationsProvidersGetErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_providers_get_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_providers_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/providers`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_providers_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `order_by` — query `orderBy` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListProvidersResponse`
- **Returns (raw)**: `ApiResult[ListProvidersResponse, EventarcProjectsLocationsProvidersListErrorBody]`
- **Error**: `EventarcProjectsLocationsProvidersListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListProvidersResponse` | `google_cloud_eventarc/models/list_providers_response.py` |
| `EventarcProjectsLocationsProvidersListErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_providers_list_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_triggers_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/triggers`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_triggers_create(projects_id: str, locations_id: str, body: Trigger | TriggerDict, *, trigger_id: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `trigger_id` — query `triggerId` · `validate_only` — query `validateOnly` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsTriggersCreateErrorBody]`
- **Error**: `EventarcProjectsLocationsTriggersCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Trigger` | `google_cloud_eventarc/models/trigger.py` |
| `TriggerDict` | `google_cloud_eventarc/models/trigger.py` |
| `GoogleLongrunningOperation` | `google_cloud_eventarc/models/google_longrunning_operation.py` |
| `EventarcProjectsLocationsTriggersCreateErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_triggers_create_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_triggers_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_triggers_delete(projects_id: str, locations_id: str, triggers_id: str, *, allow_missing: bool | None = None, etag: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `triggers_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `triggers_id` — path `triggersId` · `allow_missing` — query `allowMissing` · `etag` — query · `validate_only` — query `validateOnly`
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsTriggersDeleteErrorBody]`
- **Error**: `EventarcProjectsLocationsTriggersDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleLongrunningOperation` | `google_cloud_eventarc/models/google_longrunning_operation.py` |
| `EventarcProjectsLocationsTriggersDeleteErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_triggers_delete_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_triggers_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_triggers_get(projects_id: str, locations_id: str, triggers_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `triggers_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `triggers_id` — path `triggersId`
- **Returns (parsed)**: `Trigger`
- **Returns (raw)**: `ApiResult[Trigger, EventarcProjectsLocationsTriggersGetErrorBody]`
- **Error**: `EventarcProjectsLocationsTriggersGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Trigger` | `google_cloud_eventarc/models/trigger.py` |
| `EventarcProjectsLocationsTriggersGetErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_triggers_get_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_triggers_get_iam_policy

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_triggers_get_iam_policy(projects_id: str, locations_id: str, triggers_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `triggers_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `triggers_id` — path `triggersId` · `options_requested_policy_version` — query `options.requestedPolicyVersion`
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, EventarcProjectsLocationsTriggersGetIamPolicyErrorBody]`
- **Error**: `EventarcProjectsLocationsTriggersGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Policy` | `google_cloud_eventarc/models/policy.py` |
| `EventarcProjectsLocationsTriggersGetIamPolicyErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_triggers_get_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_triggers_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/triggers`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_triggers_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `order_by` — query `orderBy` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListTriggersResponse`
- **Returns (raw)**: `ApiResult[ListTriggersResponse, EventarcProjectsLocationsTriggersListErrorBody]`
- **Error**: `EventarcProjectsLocationsTriggersListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListTriggersResponse` | `google_cloud_eventarc/models/list_triggers_response.py` |
| `EventarcProjectsLocationsTriggersListErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_triggers_list_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_triggers_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_triggers_patch(projects_id: str, locations_id: str, triggers_id: str, body: Trigger | TriggerDict, *, allow_missing: bool | None = None, update_mask: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `triggers_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `triggers_id` — path `triggersId` · `allow_missing` — query `allowMissing` · `update_mask` — query `updateMask` · `validate_only` — query `validateOnly` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsTriggersPatchErrorBody]`
- **Error**: `EventarcProjectsLocationsTriggersPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Trigger` | `google_cloud_eventarc/models/trigger.py` |
| `TriggerDict` | `google_cloud_eventarc/models/trigger.py` |
| `GoogleLongrunningOperation` | `google_cloud_eventarc/models/google_longrunning_operation.py` |
| `EventarcProjectsLocationsTriggersPatchErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_triggers_patch_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_triggers_set_iam_policy

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_triggers_set_iam_policy(projects_id: str, locations_id: str, triggers_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `triggers_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `triggers_id` — path `triggersId` · `body` — JSON body
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, EventarcProjectsLocationsTriggersSetIamPolicyErrorBody]`
- **Error**: `EventarcProjectsLocationsTriggersSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SetIamPolicyRequest` | `google_cloud_eventarc/models/set_iam_policy_request.py` |
| `SetIamPolicyRequestDict` | `google_cloud_eventarc/models/set_iam_policy_request.py` |
| `Policy` | `google_cloud_eventarc/models/policy.py` |
| `EventarcProjectsLocationsTriggersSetIamPolicyErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_triggers_set_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_triggers_test_iam_permissions

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}:testIamPermissions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_triggers_test_iam_permissions(projects_id: str, locations_id: str, triggers_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `triggers_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `triggers_id` — path `triggersId` · `body` — JSON body
- **Returns (parsed)**: `TestIamPermissionsResponse`
- **Returns (raw)**: `ApiResult[TestIamPermissionsResponse, EventarcProjectsLocationsTriggersTestIamPermissionsErrorBody]`
- **Error**: `EventarcProjectsLocationsTriggersTestIamPermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TestIamPermissionsRequest` | `google_cloud_eventarc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsRequestDict` | `google_cloud_eventarc/models/test_iam_permissions_request.py` |
| `TestIamPermissionsResponse` | `google_cloud_eventarc/models/test_iam_permissions_response.py` |
| `EventarcProjectsLocationsTriggersTestIamPermissionsErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_triggers_test_iam_permissions_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

### client.eventarc_projects_locations_update_google_channel_config

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/googleChannelConfig`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def eventarc_projects_locations_update_google_channel_config(projects_id: str, locations_id: str, body: GoogleChannelConfig | GoogleChannelConfigDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleChannelConfig`
- **Returns (raw)**: `ApiResult[GoogleChannelConfig, EventarcProjectsLocationsUpdateGoogleChannelConfigErrorBody]`
- **Error**: `EventarcProjectsLocationsUpdateGoogleChannelConfigErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleChannelConfig` | `google_cloud_eventarc/models/google_channel_config.py` |
| `GoogleChannelConfigDict` | `google_cloud_eventarc/models/google_channel_config.py` |
| `EventarcProjectsLocationsUpdateGoogleChannelConfigErrorBody` | `google_cloud_eventarc/errors/eventarc_projects_locations_update_google_channel_config_error.py` |
| `GoogleRpcError` | `google_cloud_eventarc/models/google_rpc_error.py` |

