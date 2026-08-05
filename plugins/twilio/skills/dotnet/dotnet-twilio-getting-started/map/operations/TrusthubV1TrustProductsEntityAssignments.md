# TrusthubV1TrustProductsEntityAssignments — operations

Accessor: `client.TrusthubV1TrustProductsEntityAssignments` · Source: `Api/TrusthubV1TrustProductsEntityAssignments.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateTrustProductEntityAssignment
- **HTTP**: `POST /v1/TrustProducts/{TrustProductSid}/EntityAssignments` (Default12 (trusthub))
- **Notes**: Create a new Assigned Item.
- **Signature**: `CreateTrustProductEntityAssignment(string trustProductSid, string objectSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ObjectSid` ← `objectSid`
- **Returns**: `TrusthubV1TrustProductTrustProductEntityAssignment`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteTrustProductEntityAssignment
- **HTTP**: `DELETE /v1/TrustProducts/{TrustProductSid}/EntityAssignments/{Sid}` (Default12 (trusthub))
- **Notes**: Remove an Assignment Item Instance.
- **Signature**: `DeleteTrustProductEntityAssignment(string trustProductSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchTrustProductEntityAssignment
- **HTTP**: `GET /v1/TrustProducts/{TrustProductSid}/EntityAssignments/{Sid}` (Default12 (trusthub))
- **Notes**: Fetch specific Assigned Item Instance.
- **Signature**: `FetchTrustProductEntityAssignment(string trustProductSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TrusthubV1TrustProductTrustProductEntityAssignment`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListTrustProductEntityAssignment
- **HTTP**: `GET /v1/TrustProducts/{TrustProductSid}/EntityAssignments` (Default12 (trusthub))
- **Notes**: Retrieve a list of all Assigned Items for an account.
- **Signature**: `ListTrustProductEntityAssignment(string trustProductSid, string? objectType, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`objectType` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ObjectType` ← `objectType`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListTrustProductEntityAssignmentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
