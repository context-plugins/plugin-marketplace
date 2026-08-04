# ConversationsV1Binding — operations

Accessor: `client.ConversationsV1Binding` · Source: `Api/ConversationsV1Binding.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteServiceBinding
- **HTTP**: `DELETE /v1/Services/{ChatServiceSid}/Bindings/{Sid}` (Default (accounts))
- **Notes**: Remove a push notification binding from the conversation service
- **Signature**: `DeleteServiceBinding(string chatServiceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchServiceBinding
- **HTTP**: `GET /v1/Services/{ChatServiceSid}/Bindings/{Sid}` (Default (accounts))
- **Notes**: Fetch a push notification binding from the conversation service
- **Signature**: `FetchServiceBinding(string chatServiceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ServiceBinding`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListServiceBinding
- **HTTP**: `GET /v1/Services/{ChatServiceSid}/Bindings` (Default (accounts))
- **Notes**: Retrieve a list of all push notification bindings in the conversation service
- **Signature**: `ListServiceBinding(string chatServiceSid, IReadOnlyList<ServiceBindingBindingType>? bindingType, IReadOnlyList<string>? identity, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`bindingType` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `BindingType` ← `bindingType`, `Identity` ← `identity`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceBindingResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
