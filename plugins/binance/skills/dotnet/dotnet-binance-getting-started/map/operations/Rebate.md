# Rebate — operations

Accessor: `client.Rebate` · Source: `Api/Rebate.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetSpotRebateHistoryRecordsUserData
- **HTTP**: `GET /sapi/v1/rebate/taxQuery` (Default (api))
- **Notes**: The max interval between startTime and endTime is 90 days. If startTime and endTime are not sent, the recent 7 days' data will be returned. The earliest startTime is supported on June 10, 2020 Weight(UID): 3000
- **Signature**: `GetSpotRebateHistoryRecordsUserData(long timestamp, string signature, long? startTime, long? endTime, int? page, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`startTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `page` ← `page`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1RebateTaxQueryResponse`
- **Error**: `SdkException<GetSpotRebateHistoryRecordsUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
