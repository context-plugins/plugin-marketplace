# AccountsV1Safelist — operations

Accessor: `client.AccountsV1Safelist` · Source: `Api/AccountsV1Safelist.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSafelist
- **HTTP**: `POST /v1/SafeList/Numbers` (Default (accounts))
- **Notes**: Add a new phone number or phone number 1k prefix to SafeList.
- **Signature**: `CreateSafelist(ContentType contentType, string phoneNumber, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PhoneNumber` ← `phoneNumber`
- **Returns**: `Safelist`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSafelist
- **HTTP**: `DELETE /v1/SafeList/Numbers` (Default (accounts))
- **Notes**: Remove a phone number or phone number 1k prefix from SafeList.
- **Signature**: `DeleteSafelist(string? phoneNumber, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `phoneNumber` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PhoneNumber` ← `phoneNumber`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchSafelist
- **HTTP**: `GET /v1/SafeList/Numbers` (Default (accounts))
- **Notes**: Check if a phone number or phone number 1k prefix exists in SafeList.
- **Signature**: `FetchSafelist(string? phoneNumber, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `phoneNumber` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PhoneNumber` ← `phoneNumber`
- **Returns**: `Safelist`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
