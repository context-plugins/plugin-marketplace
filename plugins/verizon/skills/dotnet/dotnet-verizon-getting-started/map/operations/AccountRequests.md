# AccountRequests — operations

Accessor: `client.AccountRequests` · Source: `Api/AccountRequests.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetCurrentAsynchronousRequestStatus
- **HTTP**: `GET /m2m/v1/accounts/{aname}/requests/{requestId}/status` (HyperPreciseCredentials (thingspace))
- **Notes**: Returns the current status of an asynchronous request that was made for a single device.
- **Signature**: `GetCurrentAsynchronousRequestStatus(string aname, string requestId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AsynchronousRequestResult`
- **Error**: `SdkException<GetCurrentAsynchronousRequestStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
