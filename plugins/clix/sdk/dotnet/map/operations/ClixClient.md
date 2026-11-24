<!-- Generated file — do not edit; regenerated with the SDK. -->

# ClixClient — operations

Accessor: `client` · Source: `src/Clix/ClixClient.cs` · 11 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ClixExternalServiceCreateEvents

- **Auth**: `options.ProjectIdAuth` AND `options.ApiKeyAuth`
- **Signature**: `ClixExternalServiceCreateEvents(ClixExternalServiceCreateEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1CreateEventsResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ClixExternalServiceCreateEventsRequest` | `src/Clix/Requests/ClixExternalServiceCreateEventsRequest.cs` |
| `V1CreateEventsRequest` | `src/Clix/Models/V1CreateEventsRequest.cs` |
| `V1CreateEventsResponse` | `src/Clix/Models/V1CreateEventsResponse.cs` |

### ClixExternalServiceCreateOrUpdateDevices

- **Auth**: `options.ProjectIdAuth` AND `options.ApiKeyAuth`
- **Signature**: `ClixExternalServiceCreateOrUpdateDevices(ClixExternalServiceCreateOrUpdateDevicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1CreateOrUpdateDevicesResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ClixExternalServiceCreateOrUpdateDevicesRequest` | `src/Clix/Requests/ClixExternalServiceCreateOrUpdateDevicesRequest.cs` |
| `V1CreateOrUpdateDevicesRequest` | `src/Clix/Models/V1CreateOrUpdateDevicesRequest.cs` |
| `V1CreateOrUpdateDevicesResponse` | `src/Clix/Models/V1CreateOrUpdateDevicesResponse.cs` |

### ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceId

- **Auth**: `options.ProjectIdAuth` AND `options.ApiKeyAuth`
- **Signature**: `ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceId(ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DeviceId`, `Body`
- **Returns**: `V1CreateOrUpdateUsersPropertiesByDeviceIdResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdRequest` | `src/Clix/Requests/ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdRequest.cs` |
| `ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody` | `src/Clix/Models/ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody.cs` |
| `V1CreateOrUpdateUsersPropertiesByDeviceIdResponse` | `src/Clix/Models/V1CreateOrUpdateUsersPropertiesByDeviceIdResponse.cs` |

### ClixExternalServiceCreateUser

- **Auth**: `options.ProjectIdAuth` AND `options.ApiKeyAuth`
- **Signature**: `ClixExternalServiceCreateUser(ClixExternalServiceCreateUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1CreateUserResponse`
- **Error**: `ApiException<ClixExternalServiceCreateUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetString([NotNullWhen(true)] out string? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ClixExternalServiceCreateUserRequest` | `src/Clix/Requests/ClixExternalServiceCreateUserRequest.cs` |
| `V1CreateUserRequest` | `src/Clix/Models/V1CreateUserRequest.cs` |
| `V1CreateUserResponse` | `src/Clix/Models/V1CreateUserResponse.cs` |
| `ClixExternalServiceCreateUserError` | `src/Clix/Errors/ClixExternalServiceCreateUserError.cs` |

### ClixExternalServiceDeleteUser

- **Auth**: `options.ProjectIdAuth` AND `options.ApiKeyAuth`
- **Signature**: `ClixExternalServiceDeleteUser(ClixExternalServiceDeleteUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectUserId`
- **Returns**: `object`
- **Error**: `ApiException<ClixExternalServiceDeleteUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetString([NotNullWhen(true)] out string? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ClixExternalServiceDeleteUserRequest` | `src/Clix/Requests/ClixExternalServiceDeleteUserRequest.cs` |
| `ClixExternalServiceDeleteUserError` | `src/Clix/Errors/ClixExternalServiceDeleteUserError.cs` |

### ClixExternalServiceHealthCheck

- **Auth**: `options.ProjectIdAuth` AND `options.ApiKeyAuth`
- **Signature**: `ClixExternalServiceHealthCheck(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `Clixexternalv1HealthCheckResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Clixexternalv1HealthCheckResponse` | `src/Clix/Models/Clixexternalv1HealthCheckResponse.cs` |

### ClixExternalServiceSendPushNotifications

- **Auth**: `options.ProjectIdAuth` AND `options.ApiKeyAuth`
- **Signature**: `ClixExternalServiceSendPushNotifications(ClixExternalServiceSendPushNotificationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1SendPushNotificationsResponse`
- **Error**: `ApiException<ClixExternalServiceSendPushNotificationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetString([NotNullWhen(true)] out string? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ClixExternalServiceSendPushNotificationsRequest` | `src/Clix/Requests/ClixExternalServiceSendPushNotificationsRequest.cs` |
| `V1SendPushNotificationsRequest` | `src/Clix/Models/V1SendPushNotificationsRequest.cs` |
| `V1SendPushNotificationsResponse` | `src/Clix/Models/V1SendPushNotificationsResponse.cs` |
| `ClixExternalServiceSendPushNotificationsError` | `src/Clix/Errors/ClixExternalServiceSendPushNotificationsError.cs` |

### ClixExternalServiceSetProjectUserIdForDevice

- **Auth**: `options.ProjectIdAuth` AND `options.ApiKeyAuth`
- **Signature**: `ClixExternalServiceSetProjectUserIdForDevice(ClixExternalServiceSetProjectUserIdForDeviceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DeviceId`, `Body`
- **Returns**: `V1SetProjectUserIdForDeviceResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ClixExternalServiceSetProjectUserIdForDeviceRequest` | `src/Clix/Requests/ClixExternalServiceSetProjectUserIdForDeviceRequest.cs` |
| `ClixExternalServiceSetProjectUserIdForDeviceBody` | `src/Clix/Models/ClixExternalServiceSetProjectUserIdForDeviceBody.cs` |
| `V1SetProjectUserIdForDeviceResponse` | `src/Clix/Models/V1SetProjectUserIdForDeviceResponse.cs` |

### ClixExternalServiceStartLiveActivities

- **Auth**: `options.ProjectIdAuth` AND `options.ApiKeyAuth`
- **Signature**: `ClixExternalServiceStartLiveActivities(ClixExternalServiceStartLiveActivitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1StartLiveActivitiesResponse`
- **Error**: `ApiException<ClixExternalServiceStartLiveActivitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetString([NotNullWhen(true)] out string? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ClixExternalServiceStartLiveActivitiesRequest` | `src/Clix/Requests/ClixExternalServiceStartLiveActivitiesRequest.cs` |
| `V1StartLiveActivitiesRequest` | `src/Clix/Models/V1StartLiveActivitiesRequest.cs` |
| `V1StartLiveActivitiesResponse` | `src/Clix/Models/V1StartLiveActivitiesResponse.cs` |
| `ClixExternalServiceStartLiveActivitiesError` | `src/Clix/Errors/ClixExternalServiceStartLiveActivitiesError.cs` |

### ClixExternalServiceTriggerCampaign

- **Auth**: `options.ProjectIdAuth` AND `options.ApiKeyAuth`
- **Signature**: `ClixExternalServiceTriggerCampaign(ClixExternalServiceTriggerCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CampaignId`
- **Returns**: `V1TriggerCampaignResponse`
- **Error**: `ApiException<ClixExternalServiceTriggerCampaignError>` — **Case A (typed)**
- **Error accessors**: `TryGetString([NotNullWhen(true)] out string? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ClixExternalServiceTriggerCampaignRequest` | `src/Clix/Requests/ClixExternalServiceTriggerCampaignRequest.cs` |
| `V1TriggerCampaignRequest` | `src/Clix/Models/V1TriggerCampaignRequest.cs` |
| `V1TriggerCampaignResponse` | `src/Clix/Models/V1TriggerCampaignResponse.cs` |
| `ClixExternalServiceTriggerCampaignError` | `src/Clix/Errors/ClixExternalServiceTriggerCampaignError.cs` |

### ClixExternalServiceUpdateUser

- **Auth**: `options.ProjectIdAuth` AND `options.ApiKeyAuth`
- **Signature**: `ClixExternalServiceUpdateUser(ClixExternalServiceUpdateUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectUserId`, `Body`
- **Returns**: `V1UpdateUserResponse`
- **Error**: `ApiException<ClixExternalServiceUpdateUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetString([NotNullWhen(true)] out string? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ClixExternalServiceUpdateUserRequest` | `src/Clix/Requests/ClixExternalServiceUpdateUserRequest.cs` |
| `V1UpdateUserRequest` | `src/Clix/Models/V1UpdateUserRequest.cs` |
| `V1UpdateUserResponse` | `src/Clix/Models/V1UpdateUserResponse.cs` |
| `ClixExternalServiceUpdateUserError` | `src/Clix/Errors/ClixExternalServiceUpdateUserError.cs` |

