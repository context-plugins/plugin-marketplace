# NumbersV1PortingPortInApi — operations

Accessor: `client.NumbersV1PortingPortInApi` · Source: `Api/NumbersV1PortingPortInApi.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreatePortingPortIn
- **HTTP**: `POST /v1/Porting/PortIn` (Default5 (numbers))
- **Notes**: Allows to create a new port in request
- **Signature**: `CreatePortingPortIn(PortInRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `NumbersV1PortingPortIn`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeletePortingPortIn
- **HTTP**: `DELETE /v1/Porting/PortIn/{PortInRequestSid}` (Default5 (numbers))
- **Notes**: Allows to cancel a port in request by SID
- **Signature**: `DeletePortingPortIn(string portInRequestSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchPortingPortIn
- **HTTP**: `GET /v1/Porting/PortIn/{PortInRequestSid}` (Default5 (numbers))
- **Notes**: Fetch a port in request by SID
- **Signature**: `FetchPortingPortIn(string portInRequestSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `NumbersV1PortingPortIn`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListPortInRequests
- **HTTP**: `GET /v1/Porting/PortIn/PortInRequests` (Default5 (numbers))
- **Notes**: Retrieve a list of all PortInRequests for a user
- **Signature**: `ListPortInRequests(string? token, string? portInRequestSid, string? portInRequestStatus, string? createdBefore, string? createdAfter, int? size = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`token` … `createdAfter`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `size` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `Token` ← `token`, `Size` ← `size`, `PortInRequestSid` ← `portInRequestSid`, `PortInRequestStatus` ← `portInRequestStatus`, `CreatedBefore` ← `createdBefore`, `CreatedAfter` ← `createdAfter`
- **Returns**: `ListPortInRequestsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
