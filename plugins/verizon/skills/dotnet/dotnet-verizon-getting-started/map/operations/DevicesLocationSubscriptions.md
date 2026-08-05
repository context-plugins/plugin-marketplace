# DevicesLocationSubscriptions — operations

Accessor: `client.DevicesLocationSubscriptions` · Source: `Api/DevicesLocationSubscriptions.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetLocationServiceSubscriptionStatus
- **HTTP**: `GET /subscriptions/{accountName}` (DeviceLocation (thingspace))
- **Notes**: This subscriptions endpoint retrieves an account's current location subscription status.
- **Signature**: `GetLocationServiceSubscriptionStatus(string accountName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceLocationSubscription`
- **Error**: `SdkException<GetLocationServiceSubscriptionStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetDeviceLocationResult(out DeviceLocationResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLocationServiceUsage
- **HTTP**: `POST /usage` (DeviceLocation (thingspace))
- **Notes**: This endpoint allows user to search for billable usage for accounts based on the provided date range.
- **Signature**: `GetLocationServiceUsage(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<GetLocationServiceUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetDeviceLocationResult(out DeviceLocationResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
