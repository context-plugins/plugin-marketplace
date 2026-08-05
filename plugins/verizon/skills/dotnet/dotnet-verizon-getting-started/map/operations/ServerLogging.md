# ServerLogging — operations

Accessor: `client.ServerLogging` · Source: `Api/ServerLogging.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetDeviceCheckInHistory
- **HTTP**: `GET /logging/{account}/devices/{deviceId}/checkInHistory` (SoftwareManagementV2 (thingspace))
- **Notes**: Check-in history can be retrieved for any device belonging to the account, not necessarily with logging enabled.
- **Signature**: `GetDeviceCheckInHistory(string account, string deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<CheckInHistoryItem>`
- **Error**: `SdkException<GetDeviceCheckInHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
