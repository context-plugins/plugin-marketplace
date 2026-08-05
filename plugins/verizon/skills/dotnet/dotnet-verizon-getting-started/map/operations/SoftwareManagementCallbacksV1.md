# SoftwareManagementCallbacksV1 — operations

Accessor: `client.SoftwareManagementCallbacksV1` · Source: `Api/SoftwareManagementCallbacksV1.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeregisterCallback3
- **HTTP**: `DELETE /callbacks/{account}/name/{service}` (SoftwareManagementV1 (thingspace))
- **Notes**: Deregisters the callback endpoint and stops ThingSpace from sending FOTA callback messages for the specified account.
- **Signature**: `DeregisterCallback3(string account, CallbackService service, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeregisterCallback3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListRegisteredCallbacks3
- **HTTP**: `GET /callbacks/{account}` (SoftwareManagementV1 (thingspace))
- **Notes**: Returns the name and endpoint URL of the callback listening services registered for a given account.
- **Signature**: `ListRegisteredCallbacks3(string account, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<RegisteredCallbacks>`
- **Error**: `SdkException<ListRegisteredCallbacks3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV1Result(out FotaV1Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RegisterCallback3
- **HTTP**: `POST /callbacks/{account}` (SoftwareManagementV1 (thingspace))
- **Notes**: Registers a URL to receive RESTful messages from a callback service when new firmware versions are available and when upgrades start and finish.
- **Signature**: `RegisterCallback3(string account, FotaV1CallbackRegistrationRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FotaV1CallbackRegistrationResult`
- **Error**: `SdkException<RegisterCallback3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV1Result(out FotaV1Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
