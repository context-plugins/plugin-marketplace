# AdminEventType — operations

Accessor: `client.AdminEventType` · Source: `Api/AdminEventType.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetEventType
- **HTTP**: `GET /api/admin/events/{publicId}` (Default (push-api))
- **Signature**: `GetEventType(string publicId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PushApiResultEventType`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEventTypes
- **HTTP**: `GET /api/admin/events` (Default (push-api))
- **Signature**: `GetEventTypes(string? requestPublicId, bool? requestActiveOnly, bool? requestLatestOnly, double? requestEventSchemaVersion, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`requestPublicId` … `requestEventSchemaVersion`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `request.publicId` ← `requestPublicId`, `request.activeOnly` ← `requestActiveOnly`, `request.latestOnly` ← `requestLatestOnly`, `request.eventSchemaVersion` ← `requestEventSchemaVersion`
- **Returns**: `PushApiResultListEventType`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### LinkEventTypeAndVersion
- **HTTP**: `POST /api/admin/events/{eventTypePublicId}/version/{schemaVersion}` (Default (push-api))
- **Signature**: `LinkEventTypeAndVersion(string eventTypePublicId, double schemaVersion, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PushApiResultEventType`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UnlinkEventTypeAndVersion
- **HTTP**: `DELETE /api/admin/events/{eventTypePublicId}/version/{schemaVersion}` (Default (push-api))
- **Signature**: `UnlinkEventTypeAndVersion(string eventTypePublicId, double schemaVersion, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PushApiResultEventType`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
