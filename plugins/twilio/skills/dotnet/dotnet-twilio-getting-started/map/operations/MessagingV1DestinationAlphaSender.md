# MessagingV1DestinationAlphaSender — operations

Accessor: `client.MessagingV1DestinationAlphaSender` · Source: `Api/MessagingV1DestinationAlphaSender.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateDestinationAlphaSender
- **HTTP**: `POST /v1/Services/{ServiceSid}/DestinationAlphaSenders` (Default1 (messaging))
- **Signature**: `CreateDestinationAlphaSender(string serviceSid, string alphaSender, string? isoCountryCode, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `isoCountryCode` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `AlphaSender` ← `alphaSender`, `IsoCountryCode` ← `isoCountryCode`
- **Returns**: `MessagingV1ServiceDestinationAlphaSender`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteDestinationAlphaSender
- **HTTP**: `DELETE /v1/Services/{ServiceSid}/DestinationAlphaSenders/{Sid}` (Default1 (messaging))
- **Signature**: `DeleteDestinationAlphaSender(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchDestinationAlphaSender
- **HTTP**: `GET /v1/Services/{ServiceSid}/DestinationAlphaSenders/{Sid}` (Default1 (messaging))
- **Signature**: `FetchDestinationAlphaSender(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MessagingV1ServiceDestinationAlphaSender`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListDestinationAlphaSender
- **HTTP**: `GET /v1/Services/{ServiceSid}/DestinationAlphaSenders` (Default1 (messaging))
- **Signature**: `ListDestinationAlphaSender(string serviceSid, string? isoCountryCode, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`isoCountryCode` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `IsoCountryCode` ← `isoCountryCode`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListDestinationAlphaSenderResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
