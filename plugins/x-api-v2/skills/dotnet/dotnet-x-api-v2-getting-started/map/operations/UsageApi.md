# UsageApi — operations

Accessor: `client.UsageApi` · Source: `Api/UsageApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetUsage
- **HTTP**: `GET /2/usage/tweets` (Default (api))
- **Signature**: `GetUsage(IReadOnlyList<UsageField>? usageFields, int? days = 7, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `usageFields` — nullable, no default → **must pass explicitly**
  - defaults: `days` = 7, `requestOptions` = null
- **Query params (wire ← C#)**: `days` ← `days`, `usage.fields` ← `usageFields`
- **Returns**: `GetUsageResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
