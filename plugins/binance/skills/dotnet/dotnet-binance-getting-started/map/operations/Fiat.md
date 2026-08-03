# Fiat — operations

Accessor: `client.Fiat` · Source: `Api/Fiat.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FiatDepositWithdrawHistoryUserData
- **HTTP**: `GET /sapi/v1/fiat/orders` (Default (api))
- **Notes**: If beginTime and endTime are not sent, the recent 30-day data will be returned. Weight(UID): 90000
- **Signature**: `FiatDepositWithdrawHistoryUserData(int transactionType, long timestamp, string signature, long? beginTime, long? endTime, int? page, int? rows, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`beginTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `transactionType` ← `transactionType`, `timestamp` ← `timestamp`, `signature` ← `signature`, `beginTime` ← `beginTime`, `endTime` ← `endTime`, `page` ← `page`, `rows` ← `rows`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1FiatOrdersResponse`
- **Error**: `SdkException<FiatDepositWithdrawHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### FiatPaymentsHistoryUserData
- **HTTP**: `GET /sapi/v1/fiat/payments` (Default (api))
- **Notes**: If beginTime and endTime are not sent, the recent 30-day data will be returned. Weight(IP): 1
- **Signature**: `FiatPaymentsHistoryUserData(int transactionType, long timestamp, string signature, long? beginTime, long? endTime, int? page, int? rows, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`beginTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `transactionType` ← `transactionType`, `timestamp` ← `timestamp`, `signature` ← `signature`, `beginTime` ← `beginTime`, `endTime` ← `endTime`, `page` ← `page`, `rows` ← `rows`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1FiatPaymentsResponse`
- **Error**: `SdkException<FiatPaymentsHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
