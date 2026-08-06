# TeamProfile — operations

Accessor: `client.TeamProfile` · Source: `Api/TeamProfile.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TeamProfileGet
- **HTTP**: `GET /team.profile.get` (Default (slack))
- **Notes**: Retrieve a team's profile.
- **Signature**: `TeamProfileGet(string token, string? visibility, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `visibility` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `visibility` ← `visibility`
- **Returns**: `TeamProfileGetsuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
