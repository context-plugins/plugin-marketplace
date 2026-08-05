# NumbersV1SigningRequestConfigurationApi — operations

Accessor: `client.NumbersV1SigningRequestConfigurationApi` · Source: `Api/NumbersV1SigningRequestConfigurationApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSigningRequestConfiguration
- **HTTP**: `POST /v1/SigningRequest/Configuration` (Default7 (numbers))
- **Notes**: Synchronous operation to insert or update a configuration for the customer.
- **Signature**: `CreateSigningRequestConfiguration(object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `NumbersV1SigningRequestConfiguration`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListSigningRequestConfiguration
- **HTTP**: `GET /v1/SigningRequest/Configuration` (Default7 (numbers))
- **Notes**: Synchronous operation to retrieve configurations for the customer.
- **Signature**: `ListSigningRequestConfiguration(string? country, string? product, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`country` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Country` ← `country`, `Product` ← `product`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSigningRequestConfigurationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
