# ConnectivityCallbacks — operations

Accessor: `client.ConnectivityCallbacks` · Source: `Api/ConnectivityCallbacks.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeregisterCallback
- **HTTP**: `DELETE /m2m/v1/callbacks/{aname}/name/{sname}` (HyperPreciseCredentials (thingspace))
- **Notes**: Stops ThingSpace from sending callback messages for the specified account and service.
- **Signature**: `DeregisterCallback(string aname, string sname, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CallbackActionResult`
- **Error**: `SdkException<DeregisterCallbackError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListRegisteredCallbacks
- **HTTP**: `GET /m2m/v1/callbacks/{aname}` (HyperPreciseCredentials (thingspace))
- **Notes**: Returns the name and endpoint URL of the callback listening services registered for a given account.
- **Signature**: `ListRegisteredCallbacks(string aname, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ConnectivityManagementCallback>`
- **Error**: `SdkException<ListRegisteredCallbacksError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RegisterCallback
- **HTTP**: `POST /m2m/v1/callbacks/{aname}` (HyperPreciseCredentials (thingspace))
- **Notes**: You are responsible for creating and running a listening process on your server at that URL.
- **Signature**: `RegisterCallback(string aname, RegisterCallbackRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CallbackActionResult`
- **Error**: `SdkException<RegisterCallbackError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
