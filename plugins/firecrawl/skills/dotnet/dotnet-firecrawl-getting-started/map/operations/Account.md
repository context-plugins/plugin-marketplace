# Account — operations

Accessor: `client.Account` · Source: `Api/Account.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetActivity
- **HTTP**: `GET /team/activity` (Default (api))
- **Notes**: Lists your team's recent API activity from the last 24 hours. Returns metadata about each job including the job ID, which can be used with the corresponding GET endpoint (e.g. GET /crawl/{id}) to retrieve full results. Supports cursor-based pagination and filtering by endpoint.
- **Signature**: `GetActivity(Endpoint1? endpoint, string? cursor, int? limit = 50, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `endpoint` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 50, `requestOptions` = null
- **Query params (wire ← C#)**: `endpoint` ← `endpoint`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `TeamActivityResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
