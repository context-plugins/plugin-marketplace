# ProxyV1PhoneNumber — operations

Accessor: `client.ProxyV1PhoneNumber` · Source: `Api/ProxyV1PhoneNumber.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreatePhoneNumber2
- **HTTP**: `POST /v1/Services/{ServiceSid}/PhoneNumbers` (Default8 (proxy))
- **Notes**: Add a Phone Number to a Service's Proxy Number Pool.
- **Signature**: `CreatePhoneNumber2(string serviceSid, string? sid, string? phoneNumber, bool? isReserved, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `sid` — nullable, no default → **must pass explicitly**
  - `phoneNumber` — nullable, no default → **must pass explicitly**
  - `isReserved` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Sid` ← `sid`, `PhoneNumber` ← `phoneNumber`, `IsReserved` ← `isReserved`
- **Returns**: `ProxyV1ServicePhoneNumber`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeletePhoneNumber2
- **HTTP**: `DELETE /v1/Services/{ServiceSid}/PhoneNumbers/{Sid}` (Default8 (proxy))
- **Notes**: Delete a specific Phone Number from a Service.
- **Signature**: `DeletePhoneNumber2(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchPhoneNumber4
- **HTTP**: `GET /v1/Services/{ServiceSid}/PhoneNumbers/{Sid}` (Default8 (proxy))
- **Notes**: Fetch a specific Phone Number.
- **Signature**: `FetchPhoneNumber4(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ProxyV1ServicePhoneNumber`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListPhoneNumber2
- **HTTP**: `GET /v1/Services/{ServiceSid}/PhoneNumbers` (Default8 (proxy))
- **Notes**: Retrieve a list of all Phone Numbers in the Proxy Number Pool for a Service. A maximum of 100 records will be returned per page.
- **Signature**: `ListPhoneNumber2(string serviceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListPhoneNumberResponse1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdatePhoneNumber
- **HTTP**: `POST /v1/Services/{ServiceSid}/PhoneNumbers/{Sid}` (Default8 (proxy))
- **Notes**: Update a specific Proxy Number.
- **Signature**: `UpdatePhoneNumber(string serviceSid, string sid, bool? isReserved, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `isReserved` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `IsReserved` ← `isReserved`
- **Returns**: `ProxyV1ServicePhoneNumber`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
