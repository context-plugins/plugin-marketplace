# NumbersV2BulkHostedNumberOrderApi — operations

Accessor: `client.NumbersV2BulkHostedNumberOrderApi` · Source: `Api/NumbersV2BulkHostedNumberOrderApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateBulkHostedNumberOrder
- **HTTP**: `POST /v2/HostedNumber/Orders/Bulk` (Default7 (numbers))
- **Notes**: Host multiple phone numbers on Twilio's platform.
- **Signature**: `CreateBulkHostedNumberOrder(object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `NumbersV2BulkHostedNumberOrder`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchBulkHostedNumberOrder
- **HTTP**: `GET /v2/HostedNumber/Orders/Bulk/{BulkHostingSid}` (Default7 (numbers))
- **Notes**: Fetch a specific BulkHostedNumberOrder.
- **Signature**: `FetchBulkHostedNumberOrder(string bulkHostingSid, string? orderStatus, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `orderStatus` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `OrderStatus` ← `orderStatus`
- **Returns**: `NumbersV2BulkHostedNumberOrder`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
