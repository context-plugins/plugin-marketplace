# Sites — operations

Accessor: `client.Sites` · Source: `Api/Sites.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListSites
- **HTTP**: `GET /v2/sites` (Default (connect))
- **Notes**: Lists the Square Online sites that belong to a seller. Sites are listed in descending order by the `created_at` date. __Note:__ Square Online APIs are publicly available as part of an early access program. For more information, see Early access program for Square Online APIs .
- **Signature**: `ListSites(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ListSitesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
