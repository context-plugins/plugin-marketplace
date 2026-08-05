# SensorInsightsNotificationGroups — operations

Accessor: `client.SensorInsightsNotificationGroups` · Source: `Api/SensorInsightsNotificationGroups.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### SensorInsightsAddUsersToNotificationGroupRequest
- **HTTP**: `POST /dm/v1/notificationGroups/actions/add-users` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsAddUsersToNotificationGroupRequest(DtoAddUsersToNotificationGroupRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SensorInsightsAddUsersToNotificationGroupRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401, 406, 415, 429] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError404(out ManagementError404)` [404] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SensorInsightsCreateNotificationGroupRequest
- **HTTP**: `POST /dm/v1/notificationGroups` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsCreateNotificationGroupRequest(DtoCreateNotificationGroupRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DtoNotificationGroupResponseEntity`
- **Error**: `SdkException<SensorInsightsCreateNotificationGroupRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401, 406, 415, 429] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SensorInsightsDeleteNotificationGroup
- **HTTP**: `DELETE /dm/v1/notificationGroups` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsDeleteNotificationGroup(DtoDeleteNotificationGroupRequest payload, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `payload` ← `payload`
- **Returns**: `void` (Task)
- **Error**: `SdkException<SensorInsightsDeleteNotificationGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError404(out ManagementError404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SensorInsightsListNotificationGroupRequest
- **HTTP**: `POST /dm/v1/notificationGroups/actions/query` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsListNotificationGroupRequest(DtoListNotificationGroupRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DtoNotificationGroupResponseEntity>`
- **Error**: `SdkException<SensorInsightsListNotificationGroupRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401, 406, 415, 429] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError404(out ManagementError404)` [404] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SensorInsightsRemoveUsersFromNotificationGroupRequest
- **HTTP**: `POST /dm/v1/notificationGroups/actions/remove-users` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsRemoveUsersFromNotificationGroupRequest(DtoRemoveUsersFromNotificationGroupRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SensorInsightsRemoveUsersFromNotificationGroupRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401, 406, 415, 429] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError404(out ManagementError404)` [404] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SensorInsightsUpdateNotificationGroupRequest
- **HTTP**: `PATCH /dm/v1/notificationGroups` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsUpdateNotificationGroupRequest(DtoUpdateNotificationGroupRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DtoNotificationGroupResponseEntity`
- **Error**: `SdkException<SensorInsightsUpdateNotificationGroupRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401, 406, 415, 429] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError404(out ManagementError404)` [404] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
