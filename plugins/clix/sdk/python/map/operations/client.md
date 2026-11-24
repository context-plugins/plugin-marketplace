<!-- Generated file — do not edit; regenerated with the SDK. -->

# Client — operations

Accessor: `client` · Source: `clix/client.py` · 11 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.clix_external_service_create_events

- **Route**: `POST /api/v1/events`
- **Auth**: `project_id_auth` AND `api_key_auth`
- **Signature**: `def clix_external_service_create_events(body: V1CreateEventsRequest | V1CreateEventsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1CreateEventsResponse`
- **Returns (raw)**: `ApiResult[V1CreateEventsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `V1CreateEventsRequest` | `clix/models/v1_create_events_request.py` |
| `V1CreateEventsRequestDict` | `clix/models/v1_create_events_request.py` |
| `V1CreateEventsResponse` | `clix/models/v1_create_events_response.py` |

### client.clix_external_service_create_or_update_devices

- **Route**: `POST /api/v1/devices`
- **Auth**: `project_id_auth` AND `api_key_auth`
- **Signature**: `def clix_external_service_create_or_update_devices(body: V1CreateOrUpdateDevicesRequest | V1CreateOrUpdateDevicesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1CreateOrUpdateDevicesResponse`
- **Returns (raw)**: `ApiResult[V1CreateOrUpdateDevicesResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `V1CreateOrUpdateDevicesRequest` | `clix/models/v1_create_or_update_devices_request.py` |
| `V1CreateOrUpdateDevicesRequestDict` | `clix/models/v1_create_or_update_devices_request.py` |
| `V1CreateOrUpdateDevicesResponse` | `clix/models/v1_create_or_update_devices_response.py` |

### client.clix_external_service_create_or_update_users_properties_by_device_id

- **Route**: `POST /api/v1/devices/{deviceId}/user/properties`
- **Auth**: `project_id_auth` AND `api_key_auth`
- **Signature**: `def clix_external_service_create_or_update_users_properties_by_device_id(device_id: str, body: ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody | ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBodyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `device_id`, `body`
- **Params**: `device_id` — path `deviceId` · `body` — JSON body
- **Returns (parsed)**: `V1CreateOrUpdateUsersPropertiesByDeviceIdResponse`
- **Returns (raw)**: `ApiResult[V1CreateOrUpdateUsersPropertiesByDeviceIdResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody` | `clix/models/clix_external_service_create_or_update_users_properties_by_device_id_body.py` |
| `ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBodyDict` | `clix/models/clix_external_service_create_or_update_users_properties_by_device_id_body.py` |
| `V1CreateOrUpdateUsersPropertiesByDeviceIdResponse` | `clix/models/v1_create_or_update_users_properties_by_device_id_response.py` |

### client.clix_external_service_create_user

- **Route**: `POST /api/v1/users`
- **Auth**: `project_id_auth` AND `api_key_auth`
- **Signature**: `def clix_external_service_create_user(body: V1CreateUserRequest | V1CreateUserRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1CreateUserResponse`
- **Returns (raw)**: `ApiResult[V1CreateUserResponse, ClixExternalServiceCreateUserErrorBody]`
- **Error**: `ClixExternalServiceCreateUserErrorBody` — **Case A (typed)**
- **Error arms**: `str` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1CreateUserRequest` | `clix/models/v1_create_user_request.py` |
| `V1CreateUserRequestDict` | `clix/models/v1_create_user_request.py` |
| `V1CreateUserResponse` | `clix/models/v1_create_user_response.py` |
| `ClixExternalServiceCreateUserErrorBody` | `clix/errors/clix_external_service_create_user_error.py` |

### client.clix_external_service_delete_user

- **Route**: `DELETE /api/v1/users/{project_user_id}`
- **Auth**: `project_id_auth` AND `api_key_auth`
- **Signature**: `def clix_external_service_delete_user(project_user_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_user_id`
- **Params**: `project_user_id` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ClixExternalServiceDeleteUserErrorBody]`
- **Error**: `ClixExternalServiceDeleteUserErrorBody` — **Case A (typed)**
- **Error arms**: `str` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClixExternalServiceDeleteUserErrorBody` | `clix/errors/clix_external_service_delete_user_error.py` |

### client.clix_external_service_health_check

- **Route**: `GET /api/v1/health`
- **Auth**: `project_id_auth` AND `api_key_auth`
- **Signature**: `def clix_external_service_health_check(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Clixexternalv1HealthCheckResponse`
- **Returns (raw)**: `ApiResult[Clixexternalv1HealthCheckResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Clixexternalv1HealthCheckResponse` | `clix/models/clixexternalv1_health_check_response.py` |

### client.clix_external_service_send_push_notifications

- **Route**: `POST /api/v1/messages:send`
- **Auth**: `project_id_auth` AND `api_key_auth`
- **Signature**: `def clix_external_service_send_push_notifications(body: V1SendPushNotificationsRequest | V1SendPushNotificationsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1SendPushNotificationsResponse`
- **Returns (raw)**: `ApiResult[V1SendPushNotificationsResponse, ClixExternalServiceSendPushNotificationsErrorBody]`
- **Error**: `ClixExternalServiceSendPushNotificationsErrorBody` — **Case A (typed)**
- **Error arms**: `str` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1SendPushNotificationsRequest` | `clix/models/v1_send_push_notifications_request.py` |
| `V1SendPushNotificationsRequestDict` | `clix/models/v1_send_push_notifications_request.py` |
| `V1SendPushNotificationsResponse` | `clix/models/v1_send_push_notifications_response.py` |
| `ClixExternalServiceSendPushNotificationsErrorBody` | `clix/errors/clix_external_service_send_push_notifications_error.py` |

### client.clix_external_service_set_project_user_id_for_device

- **Route**: `POST /api/v1/devices/{deviceId}/user/project-user-id`
- **Auth**: `project_id_auth` AND `api_key_auth`
- **Signature**: `def clix_external_service_set_project_user_id_for_device(device_id: str, body: ClixExternalServiceSetProjectUserIdForDeviceBody | ClixExternalServiceSetProjectUserIdForDeviceBodyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `device_id`, `body`
- **Params**: `device_id` — path `deviceId` · `body` — JSON body
- **Returns (parsed)**: `V1SetProjectUserIdForDeviceResponse`
- **Returns (raw)**: `ApiResult[V1SetProjectUserIdForDeviceResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ClixExternalServiceSetProjectUserIdForDeviceBody` | `clix/models/clix_external_service_set_project_user_id_for_device_body.py` |
| `ClixExternalServiceSetProjectUserIdForDeviceBodyDict` | `clix/models/clix_external_service_set_project_user_id_for_device_body.py` |
| `V1SetProjectUserIdForDeviceResponse` | `clix/models/v1_set_project_user_id_for_device_response.py` |

### client.clix_external_service_start_live_activities

- **Route**: `POST /api/v1/live-activities:start`
- **Auth**: `project_id_auth` AND `api_key_auth`
- **Signature**: `def clix_external_service_start_live_activities(body: V1StartLiveActivitiesRequest | V1StartLiveActivitiesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1StartLiveActivitiesResponse`
- **Returns (raw)**: `ApiResult[V1StartLiveActivitiesResponse, ClixExternalServiceStartLiveActivitiesErrorBody]`
- **Error**: `ClixExternalServiceStartLiveActivitiesErrorBody` — **Case A (typed)**
- **Error arms**: `str` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1StartLiveActivitiesRequest` | `clix/models/v1_start_live_activities_request.py` |
| `V1StartLiveActivitiesRequestDict` | `clix/models/v1_start_live_activities_request.py` |
| `V1StartLiveActivitiesResponse` | `clix/models/v1_start_live_activities_response.py` |
| `ClixExternalServiceStartLiveActivitiesErrorBody` | `clix/errors/clix_external_service_start_live_activities_error.py` |

### client.clix_external_service_trigger_campaign

- **Route**: `POST /api/v1/campaigns/{campaign_id}:trigger`
- **Auth**: `project_id_auth` AND `api_key_auth`
- **Signature**: `def clix_external_service_trigger_campaign(campaign_id: str, *, body: V1TriggerCampaignRequest | V1TriggerCampaignRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign_id`
- **Params**: `campaign_id` — path · `body` — JSON body
- **Returns (parsed)**: `V1TriggerCampaignResponse`
- **Returns (raw)**: `ApiResult[V1TriggerCampaignResponse, ClixExternalServiceTriggerCampaignErrorBody]`
- **Error**: `ClixExternalServiceTriggerCampaignErrorBody` — **Case A (typed)**
- **Error arms**: `str` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1TriggerCampaignRequest` | `clix/models/v1_trigger_campaign_request.py` |
| `V1TriggerCampaignRequestDict` | `clix/models/v1_trigger_campaign_request.py` |
| `V1TriggerCampaignResponse` | `clix/models/v1_trigger_campaign_response.py` |
| `ClixExternalServiceTriggerCampaignErrorBody` | `clix/errors/clix_external_service_trigger_campaign_error.py` |

### client.clix_external_service_update_user

- **Route**: `PATCH /api/v1/users/{project_user_id}`
- **Auth**: `project_id_auth` AND `api_key_auth`
- **Signature**: `def clix_external_service_update_user(project_user_id: str, body: V1UpdateUserRequest | V1UpdateUserRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_user_id`, `body`
- **Params**: `project_user_id` — path · `body` — JSON body
- **Returns (parsed)**: `V1UpdateUserResponse`
- **Returns (raw)**: `ApiResult[V1UpdateUserResponse, ClixExternalServiceUpdateUserErrorBody]`
- **Error**: `ClixExternalServiceUpdateUserErrorBody` — **Case A (typed)**
- **Error arms**: `str` [400] · `RawError` [404, anything unmapped]

| Type | Source |
| --- | --- |
| `V1UpdateUserRequest` | `clix/models/v1_update_user_request.py` |
| `V1UpdateUserRequestDict` | `clix/models/v1_update_user_request.py` |
| `V1UpdateUserResponse` | `clix/models/v1_update_user_response.py` |
| `ClixExternalServiceUpdateUserErrorBody` | `clix/errors/clix_external_service_update_user_error.py` |

