# VerifyV2SafelistApi — operations

Accessor: `client.VerifyV2SafelistApi` · Source: `Api/VerifyV2SafelistApi.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSafelist
- **HTTP**: `POST /v2/SafeList/Numbers` (Default3 (verify))
- **Notes**: Add a new phone number to SafeList.
- **Signature**: `CreateSafelist(string phoneNumber, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PhoneNumber` ← `phoneNumber`
- **Returns**: `VerifyV2Safelist`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSafelist
- **HTTP**: `DELETE /v2/SafeList/Numbers/{PhoneNumber}` (Default3 (verify))
- **Notes**: Remove a phone number from SafeList.
- **Signature**: `DeleteSafelist(string phoneNumber, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchSafelist
- **HTTP**: `GET /v2/SafeList/Numbers/{PhoneNumber}` (Default3 (verify))
- **Notes**: Check if a phone number exists in SafeList.
- **Signature**: `FetchSafelist(string phoneNumber, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VerifyV2Safelist`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
