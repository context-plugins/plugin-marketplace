# StudioV2FlowTestUserApi — operations

Accessor: `client.StudioV2FlowTestUserApi` · Source: `Api/StudioV2FlowTestUserApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchTestUser
- **HTTP**: `GET /v2/Flows/{Sid}/TestUsers` (Default11 (studio))
- **Notes**: Fetch flow test users
- **Signature**: `FetchTestUser(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `StudioV2FlowTestUser`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateTestUser
- **HTTP**: `POST /v2/Flows/{Sid}/TestUsers` (Default11 (studio))
- **Notes**: Update flow test users
- **Signature**: `UpdateTestUser(string sid, IReadOnlyList<string> testUsers, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `TestUsers` ← `testUsers`
- **Returns**: `StudioV2FlowTestUser`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
