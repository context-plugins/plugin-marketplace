# CallsParticipants — operations

Accessor: `client.CallsParticipants` · Source: `Api/CallsParticipants.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CallsParticipantsAdd
- **HTTP**: `POST /calls.participants.add` (Default (slack))
- **Notes**: Registers new participants added to a Call.
- **Signature**: `CallsParticipantsAdd(string token, ContentType contentType, string id, string users, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`, `users` ← `users`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CallsParticipantsAdd1
- **HTTP**: `POST /calls.participants.add` (Default (slack))
- **Notes**: Registers new participants added to a Call.
- **Signature**: `CallsParticipantsAdd1(string token, ContentType contentType, string id, string users, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`, `users` ← `users`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CallsParticipantsRemove
- **HTTP**: `POST /calls.participants.remove` (Default (slack))
- **Notes**: Registers participants removed from a Call.
- **Signature**: `CallsParticipantsRemove(string token, ContentType contentType, string id, string users, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`, `users` ← `users`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CallsParticipantsRemove1
- **HTTP**: `POST /calls.participants.remove` (Default (slack))
- **Notes**: Registers participants removed from a Call.
- **Signature**: `CallsParticipantsRemove1(string token, ContentType contentType, string id, string users, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`, `users` ← `users`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
