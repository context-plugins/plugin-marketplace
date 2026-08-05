# SensorInsightsUsers — operations

Accessor: `client.SensorInsightsUsers` · Source: `Api/SensorInsightsUsers.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### SensorInsightsCreateUserRequest
- **HTTP**: `POST /dm/v1/users` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsCreateUserRequest(DtoCreateUserRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResourceUser`
- **Error**: `SdkException<SensorInsightsCreateUserRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401, 406, 415, 429] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SensorInsightsDeleteUser
- **HTTP**: `DELETE /dm/v1/users` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsDeleteUser(DtoDeleteUserRequest deleterequestpayload, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `deleterequestpayload` ← `deleterequestpayload`
- **Returns**: `void` (Task)
- **Error**: `SdkException<SensorInsightsDeleteUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError404(out ManagementError404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SensorInsightsListUserRequest
- **HTTP**: `POST /dm/v1/users/actions/query` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsListUserRequest(DtoListUserRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ResourceUser>`
- **Error**: `SdkException<SensorInsightsListUserRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401, 406, 415, 429] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError404(out ManagementError404)` [404] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SensorInsightsUpdateUserRequest
- **HTTP**: `PATCH /dm/v1/users` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsUpdateUserRequest(DtoUpdateUserRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResourceUser`
- **Error**: `SdkException<SensorInsightsUpdateUserRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401, 406, 415, 429] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError404(out ManagementError404)` [404] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
