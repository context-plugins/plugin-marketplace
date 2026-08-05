# SoftwareManagementCallbacksV3 — operations

Accessor: `client.SoftwareManagementCallbacksV3` · Source: `Api/SoftwareManagementCallbacksV3.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeregisterCallback5
- **HTTP**: `DELETE /callbacks/{acc}` (SoftwareManagementV3 (thingspace))
- **Notes**: This endpoint allows user to delete a previously registered callback URL.
- **Signature**: `DeregisterCallback5(string acc, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FotaV3SuccessResult`
- **Error**: `SdkException<DeregisterCallback5Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV3Result(out FotaV3Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListRegisteredCallbacks5
- **HTTP**: `GET /callbacks/{acc}` (SoftwareManagementV3 (thingspace))
- **Notes**: This endpoint allows user to get the registered callback information.
- **Signature**: `ListRegisteredCallbacks5(string acc, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FotaV3CallbackSummary`
- **Error**: `SdkException<ListRegisteredCallbacks5Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV3Result(out FotaV3Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RegisterCallback5
- **HTTP**: `POST /callbacks/{acc}` (SoftwareManagementV3 (thingspace))
- **Notes**: This endpoint allows the user to create the HTTPS callback address.
- **Signature**: `RegisterCallback5(string acc, FotaV3CallbackRegistrationRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FotaV3CallbackRegistrationResult`
- **Error**: `SdkException<RegisterCallback5Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV3Result(out FotaV3Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateCallback2
- **HTTP**: `PUT /callbacks/{acc}` (SoftwareManagementV3 (thingspace))
- **Notes**: This endpoint allows the user to update the HTTPS callback address.
- **Signature**: `UpdateCallback2(string acc, FotaV3CallbackRegistrationRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FotaV3CallbackRegistrationResult`
- **Error**: `SdkException<UpdateCallback2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV3Result(out FotaV3Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
