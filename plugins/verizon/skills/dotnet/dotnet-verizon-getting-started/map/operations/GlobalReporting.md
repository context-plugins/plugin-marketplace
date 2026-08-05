# GlobalReporting — operations

Accessor: `client.GlobalReporting` · Source: `Api/GlobalReporting.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### RetrieveGlobalList
- **HTTP**: `POST /m2m/v2/devices/actions/list` (HyperPreciseCredentials (thingspace))
- **Notes**: Retrieve a list of all devices associated with an account.
- **Signature**: `RetrieveGlobalList(ESimglobalDeviceList body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ESimrequestResponse`
- **Error**: `SdkException<RetrieveGlobalListError>` — **Case A (typed)**
- **Error accessors**: `TryGetEsimrestErrorResponse(out ESimrestErrorResponse)` [400, 401, 403, 404, 406, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeviceprovhistoryUsingPost
- **HTTP**: `POST /m2m/v2/devices/history/actions/list` (HyperPreciseCredentials (thingspace))
- **Notes**: Retrieve the provisioning history of a specific device or devices.
- **Signature**: `DeviceprovhistoryUsingPost(ESimprovhistoryRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ESimrequestResponse`
- **Error**: `SdkException<DeviceprovhistoryUsingPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetEsimrestErrorResponse(out ESimrestErrorResponse)` [400, 401, 403, 404, 406, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
