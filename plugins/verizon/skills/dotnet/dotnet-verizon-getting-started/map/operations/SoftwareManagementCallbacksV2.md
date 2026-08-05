# SoftwareManagementCallbacksV2 — operations

Accessor: `client.SoftwareManagementCallbacksV2` · Source: `Api/SoftwareManagementCallbacksV2.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeregisterCallback4
- **HTTP**: `DELETE /callbacks/{account}` (SoftwareManagementV2 (thingspace))
- **Notes**: This endpoint allows user to delete a previously registered callback URL.
- **Signature**: `DeregisterCallback4(string account, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FotaV2SuccessResult`
- **Error**: `SdkException<DeregisterCallback4Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListRegisteredCallbacks4
- **HTTP**: `GET /callbacks/{account}` (SoftwareManagementV2 (thingspace))
- **Notes**: This endpoint allows user to get the registered callback information.
- **Signature**: `ListRegisteredCallbacks4(string account, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CallbackSummary`
- **Error**: `SdkException<ListRegisteredCallbacks4Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RegisterCallback4
- **HTTP**: `POST /callbacks/{account}` (SoftwareManagementV2 (thingspace))
- **Notes**: This endpoint allows user to create the HTTPS callback address.
- **Signature**: `RegisterCallback4(string account, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FotaV2CallbackRegistrationResult`
- **Error**: `SdkException<RegisterCallback4Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateCallback
- **HTTP**: `PUT /callbacks/{account}` (SoftwareManagementV2 (thingspace))
- **Notes**: This endpoint allows user to update the HTTPS callback address.
- **Signature**: `UpdateCallback(string account, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FotaV2CallbackRegistrationResult`
- **Error**: `SdkException<UpdateCallbackError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
