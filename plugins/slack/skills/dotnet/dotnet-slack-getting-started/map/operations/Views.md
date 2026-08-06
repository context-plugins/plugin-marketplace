# Views — operations

Accessor: `client.Views` · Source: `Api/Views.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ViewsOpen
- **HTTP**: `GET /views.open` (Default (slack))
- **Notes**: Open a view for a user.
- **Signature**: `ViewsOpen(string triggerId, string view, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `trigger_id` ← `triggerId`, `view` ← `view`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ViewsPublish
- **HTTP**: `GET /views.publish` (Default (slack))
- **Notes**: Publish a static view for a User.
- **Signature**: `ViewsPublish(string userId, string view, string? hash, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `hash` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `user_id` ← `userId`, `view` ← `view`, `hash` ← `hash`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ViewsPush
- **HTTP**: `GET /views.push` (Default (slack))
- **Notes**: Push a view onto the stack of a root view.
- **Signature**: `ViewsPush(string triggerId, string view, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `trigger_id` ← `triggerId`, `view` ← `view`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ViewsUpdate
- **HTTP**: `GET /views.update` (Default (slack))
- **Notes**: Update an existing view.
- **Signature**: `ViewsUpdate(string? viewId, string? externalId, string? view, string? hash, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`viewId` … `hash`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `view_id` ← `viewId`, `external_id` ← `externalId`, `view` ← `view`, `hash` ← `hash`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
