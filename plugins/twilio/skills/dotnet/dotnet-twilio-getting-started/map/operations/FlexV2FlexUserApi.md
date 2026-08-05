# FlexV2FlexUserApi — operations

Accessor: `client.FlexV2FlexUserApi` · Source: `Api/FlexV2FlexUserApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchFlexUser
- **HTTP**: `GET /v2/Instances/{InstanceSid}/Users/{FlexUserSid}` (Default3 (flex-api))
- **Notes**: Fetch flex user for the given flex user sid
- **Signature**: `FetchFlexUser(string instanceSid, string flexUserSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FlexV2FlexUser`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateFlexUser
- **HTTP**: `POST /v2/Instances/{InstanceSid}/Users/{FlexUserSid}` (Default3 (flex-api))
- **Notes**: Update flex user for the given flex user sid
- **Signature**: `UpdateFlexUser(string instanceSid, string flexUserSid, string? email, string? userSid, string? locale, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `email` — nullable, no default → **must pass explicitly**
  - `userSid` — nullable, no default → **must pass explicitly**
  - `locale` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Email` ← `email`, `UserSid` ← `userSid`, `Locale` ← `locale`
- **Returns**: `FlexV2FlexUser`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
