# NotifyV1Binding — operations

Accessor: `client.NotifyV1Binding` · Source: `Api/NotifyV1Binding.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateBinding
- **HTTP**: `POST /v1/Services/{ServiceSid}/Bindings` (Default (accounts))
- **Signature**: `CreateBinding(string serviceSid, ContentType contentType, string identity, BindingBindingType bindingType, string address, IReadOnlyList<string>? tag, string? notificationProtocolVersion, string? credentialSid, string? endpoint, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`tag` … `endpoint`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Identity` ← `identity`, `BindingType` ← `bindingType`, `Address` ← `address`, `Tag` ← `tag`, `NotificationProtocolVersion` ← `notificationProtocolVersion`, `CredentialSid` ← `credentialSid`, `Endpoint` ← `endpoint`
- **Returns**: `Binding`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteBinding
- **HTTP**: `DELETE /v1/Services/{ServiceSid}/Bindings/{Sid}` (Default (accounts))
- **Signature**: `DeleteBinding(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchBinding
- **HTTP**: `GET /v1/Services/{ServiceSid}/Bindings/{Sid}` (Default (accounts))
- **Signature**: `FetchBinding(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Binding`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListBinding
- **HTTP**: `GET /v1/Services/{ServiceSid}/Bindings` (Default (accounts))
- **Signature**: `ListBinding(string serviceSid, DateTimeOffset? startDate, DateTimeOffset? endDate, IReadOnlyList<string>? identity, IReadOnlyList<string>? tag, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`startDate` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `StartDate` ← `startDate`, `EndDate` ← `endDate`, `Identity` ← `identity`, `Tag` ← `tag`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListBindingResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
