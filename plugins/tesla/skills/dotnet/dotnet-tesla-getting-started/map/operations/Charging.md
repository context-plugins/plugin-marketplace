# Charging — operations

Accessor: `client.Charging` · Source: `Api/Charging.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetChargingHistory
- **HTTP**: `GET /api/1/dx/charging/history` (Default (fleet-api))
- **Notes**: Returns the paginated charging history for the authenticated account.
- **Signature**: `GetChargingHistory(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChargingHistoryResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetChargingInvoice
- **HTTP**: `GET /api/1/dx/charging/invoice/{id}` (Default (fleet-api))
- **Notes**: Returns a charging invoice PDF for a charging session.
- **Signature**: `GetChargingInvoice(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetChargingSessions
- **HTTP**: `GET /api/1/dx/charging/sessions` (Default (fleet-api))
- **Notes**: Returns charging session information. Only available for business fleet owners.
- **Signature**: `GetChargingSessions(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChargingSessionsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
