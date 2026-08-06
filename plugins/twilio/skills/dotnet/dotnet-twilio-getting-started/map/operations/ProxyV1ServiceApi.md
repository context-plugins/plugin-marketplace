# ProxyV1ServiceApi — operations

Accessor: `client.ProxyV1ServiceApi` · Source: `Api/ProxyV1ServiceApi.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateService4
- **HTTP**: `POST /v1/Services` (Default10 (proxy))
- **Notes**: Create a new Service for Twilio Proxy
- **Signature**: `CreateService4(string uniqueName, int? defaultTtl, string? callbackUrl, ServiceEnumGeoMatchLevel? geoMatchLevel, ServiceEnumNumberSelectionBehavior? numberSelectionBehavior, string? interceptCallbackUrl, string? outOfSessionCallbackUrl, string? chatInstanceSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`defaultTtl` … `chatInstanceSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `UniqueName` ← `uniqueName`, `DefaultTtl` ← `defaultTtl`, `CallbackUrl` ← `callbackUrl`, `GeoMatchLevel` ← `geoMatchLevel`, `NumberSelectionBehavior` ← `numberSelectionBehavior`, `InterceptCallbackUrl` ← `interceptCallbackUrl`, `OutOfSessionCallbackUrl` ← `outOfSessionCallbackUrl`, `ChatInstanceSid` ← `chatInstanceSid`
- **Returns**: `ProxyV1Service`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteService4
- **HTTP**: `DELETE /v1/Services/{Sid}` (Default10 (proxy))
- **Notes**: Delete a specific Service.
- **Signature**: `DeleteService4(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchService4
- **HTTP**: `GET /v1/Services/{Sid}` (Default10 (proxy))
- **Notes**: Fetch a specific Service.
- **Signature**: `FetchService4(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ProxyV1Service`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListService4
- **HTTP**: `GET /v1/Services` (Default10 (proxy))
- **Notes**: Retrieve a list of all Services for Twilio Proxy. A maximum of 100 records will be returned per page.
- **Signature**: `ListService4(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceResponse3`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateService3
- **HTTP**: `POST /v1/Services/{Sid}` (Default10 (proxy))
- **Notes**: Update a specific Service.
- **Signature**: `UpdateService3(string sid, string? uniqueName, int? defaultTtl, string? callbackUrl, ServiceEnumGeoMatchLevel? geoMatchLevel, ServiceEnumNumberSelectionBehavior? numberSelectionBehavior, string? interceptCallbackUrl, string? outOfSessionCallbackUrl, string? chatInstanceSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`uniqueName` … `chatInstanceSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `UniqueName` ← `uniqueName`, `DefaultTtl` ← `defaultTtl`, `CallbackUrl` ← `callbackUrl`, `GeoMatchLevel` ← `geoMatchLevel`, `NumberSelectionBehavior` ← `numberSelectionBehavior`, `InterceptCallbackUrl` ← `interceptCallbackUrl`, `OutOfSessionCallbackUrl` ← `outOfSessionCallbackUrl`, `ChatInstanceSid` ← `chatInstanceSid`
- **Returns**: `ProxyV1Service`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
