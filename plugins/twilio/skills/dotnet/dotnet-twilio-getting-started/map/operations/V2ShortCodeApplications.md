# V2ShortCodeApplications — operations

Accessor: `client.V2ShortCodeApplications` · Source: `Api/V2ShortCodeApplications.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateShortCodeApplication
- **HTTP**: `POST /v2/ShortCodes/Applications` (Default5 (numbers))
- **Notes**: Create a new short code application for an account
- **Signature**: `CreateShortCodeApplication(CreateShortCodeApplicationRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateShortCodeApplicationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchShortCodeApplication
- **HTTP**: `GET /v2/ShortCodes/Applications/{sid}` (Default5 (numbers))
- **Notes**: Fetch a specific Short Code Application instance.
- **Signature**: `FetchShortCodeApplication(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ShortCodeApplication`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListShortCodeApplications
- **HTTP**: `GET /v2/ShortCodes/Applications` (Default5 (numbers))
- **Notes**: list of all short code applications for an account
- **Signature**: `ListShortCodeApplications(string? accountSid, string? isoCountry, string? status, string? friendlyName, string? sid, int? pageSize, int? page = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`accountSid` … `pageSize`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `AccountSid` ← `accountSid`, `IsoCountry` ← `isoCountry`, `Status` ← `status`, `FriendlyName` ← `friendlyName`, `Sid` ← `sid`, `PageSize` ← `pageSize`, `Page` ← `page`
- **Returns**: `ShortCodeApplicationResponsePage`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
