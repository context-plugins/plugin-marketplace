# Snippets — operations

Accessor: `client.Snippets` · Source: `Api/Snippets.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteSnippet
- **HTTP**: `DELETE /v2/sites/{site_id}/snippet` (Default (connect))
- **Notes**: Removes your snippet from a Square Online site. You can call ListSites to get the IDs of the sites that belong to a seller. __Note:__ Square Online APIs are publicly available as part of an early access program. For more information, see Early access program for Square Online APIs .
- **Signature**: `DeleteSnippet(string siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteSnippetResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveSnippet
- **HTTP**: `GET /v2/sites/{site_id}/snippet` (Default (connect))
- **Notes**: Retrieves your snippet from a Square Online site. A site can contain snippets from multiple snippet applications, but you can retrieve only the snippet that was added by your application. You can call ListSites to get the IDs of the sites that belong to a seller. __Note:__ Square Online APIs are publicly available as part of an early access program. For more information, see Early access program for Square Online APIs .
- **Signature**: `RetrieveSnippet(string siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveSnippetResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpsertSnippet
- **HTTP**: `POST /v2/sites/{site_id}/snippet` (Default (connect))
- **Notes**: Adds a snippet to a Square Online site or updates the existing snippet on the site. The snippet code is appended to the end of the `head` element on every page of the site, except checkout pages. A snippet application can add one snippet to a given site. You can call ListSites to get the IDs of the sites that belong to a seller. __Note:__ Square Online APIs are publicly available as part of an early access program. For more information, see Early access program for Square Online APIs .
- **Signature**: `UpsertSnippet(string siteId, UpsertSnippetRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpsertSnippetResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
