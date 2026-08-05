# ActiveassurancePacketCaptures — operations

Accessor: `client.ActiveassurancePacketCaptures` · Source: `Api/ActiveassurancePacketCaptures.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PacketCaptureServiceDeletePacketCaptureFile
- **HTTP**: `DELETE /active-assurance/api/v2/orgs/{org_id}/packet_captures/{packet_capture_id}/file` (Default)
- **Signature**: `PacketCaptureServiceDeletePacketCaptureFile(string orgId, string packetCaptureId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PacketCaptureServiceDownloadPacketCaptureFile
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/packet_captures/{packet_capture_id}/file:download` (Default)
- **Signature**: `PacketCaptureServiceDownloadPacketCaptureFile(string orgId, string packetCaptureId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PacketCaptureServiceGetPacketCapture
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/packet_captures/{packet_capture_id}` (Default)
- **Signature**: `PacketCaptureServiceGetPacketCapture(string orgId, string packetCaptureId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PacketCapture`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PacketCaptureServiceListPacketCaptures
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/packet_captures` (Default)
- **Signature**: `PacketCaptureServiceListPacketCaptures(string orgId, int? page, int? limit, string? filter, string? orderBy, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`page` … `orderBy`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`, `filter` ← `filter`, `order_by` ← `orderBy`
- **Returns**: `ListPacketCapturesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
