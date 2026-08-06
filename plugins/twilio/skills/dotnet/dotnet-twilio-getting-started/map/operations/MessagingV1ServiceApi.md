# MessagingV1ServiceApi — operations

Accessor: `client.MessagingV1ServiceApi` · Source: `Api/MessagingV1ServiceApi.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateService
- **HTTP**: `POST /v1/Services` (Default1 (messaging))
- **Signature**: `CreateService(string friendlyName, string? inboundRequestUrl, AmdStatusCallbackMethod? inboundMethod, string? fallbackUrl, AmdStatusCallbackMethod? fallbackMethod, string? statusCallback, bool? stickySender, bool? mmsConverter, bool? smartEncoding, ServiceEnumScanMessageContent? scanMessageContent, bool? fallbackToLongCode, bool? areaCodeGeomatch, int? validityPeriod, bool? synchronousValidation, string? usecase, bool? useInboundWebhookOnNumber, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 15 params (`inboundRequestUrl` … `useInboundWebhookOnNumber`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `InboundRequestUrl` ← `inboundRequestUrl`, `InboundMethod` ← `inboundMethod`, `FallbackUrl` ← `fallbackUrl`, `FallbackMethod` ← `fallbackMethod`, `StatusCallback` ← `statusCallback`, `StickySender` ← `stickySender`, `MmsConverter` ← `mmsConverter`, `SmartEncoding` ← `smartEncoding`, `ScanMessageContent` ← `scanMessageContent`, `FallbackToLongCode` ← `fallbackToLongCode`, `AreaCodeGeomatch` ← `areaCodeGeomatch`, `ValidityPeriod` ← `validityPeriod`, `SynchronousValidation` ← `synchronousValidation`, `Usecase` ← `usecase`, `UseInboundWebhookOnNumber` ← `useInboundWebhookOnNumber`
- **Returns**: `MessagingV1Service`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteService
- **HTTP**: `DELETE /v1/Services/{Sid}` (Default1 (messaging))
- **Signature**: `DeleteService(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchService
- **HTTP**: `GET /v1/Services/{Sid}` (Default1 (messaging))
- **Signature**: `FetchService(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MessagingV1Service`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListService
- **HTTP**: `GET /v1/Services` (Default1 (messaging))
- **Signature**: `ListService(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateService
- **HTTP**: `POST /v1/Services/{Sid}` (Default1 (messaging))
- **Signature**: `UpdateService(string sid, string? friendlyName, string? inboundRequestUrl, AmdStatusCallbackMethod? inboundMethod, string? fallbackUrl, AmdStatusCallbackMethod? fallbackMethod, string? statusCallback, bool? stickySender, bool? mmsConverter, bool? smartEncoding, ServiceEnumScanMessageContent? scanMessageContent, bool? fallbackToLongCode, bool? areaCodeGeomatch, int? validityPeriod, bool? synchronousValidation, string? usecase, bool? useInboundWebhookOnNumber, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 16 params (`friendlyName` … `useInboundWebhookOnNumber`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `InboundRequestUrl` ← `inboundRequestUrl`, `InboundMethod` ← `inboundMethod`, `FallbackUrl` ← `fallbackUrl`, `FallbackMethod` ← `fallbackMethod`, `StatusCallback` ← `statusCallback`, `StickySender` ← `stickySender`, `MmsConverter` ← `mmsConverter`, `SmartEncoding` ← `smartEncoding`, `ScanMessageContent` ← `scanMessageContent`, `FallbackToLongCode` ← `fallbackToLongCode`, `AreaCodeGeomatch` ← `areaCodeGeomatch`, `ValidityPeriod` ← `validityPeriod`, `SynchronousValidation` ← `synchronousValidation`, `Usecase` ← `usecase`, `UseInboundWebhookOnNumber` ← `useInboundWebhookOnNumber`
- **Returns**: `MessagingV1Service`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
