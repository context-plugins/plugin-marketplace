# Communities — operations

Accessor: `client.Communities` · Source: `Api/Communities.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetCommunitiesById
- **HTTP**: `GET /2/communities/{id}` (Default (api))
- **Signature**: `GetCommunitiesById(string id, IReadOnlyList<CommunityField>? communityFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `communityFields` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `community.fields` ← `communityFields`
- **Returns**: `GetCommunitiesByIdResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchCommunities
- **HTTP**: `GET /2/communities/search` (Default (api))
- **Signature**: `SearchCommunities(string query, string? nextToken, string? paginationToken, IReadOnlyList<CommunityField>? communityFields, int? maxResults = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `nextToken` — nullable, no default → **must pass explicitly**
  - `paginationToken` — nullable, no default → **must pass explicitly**
  - `communityFields` — nullable, no default → **must pass explicitly**
  - defaults: `maxResults` = 10, `requestOptions` = null
- **Query params (wire ← C#)**: `query` ← `query`, `max_results` ← `maxResults`, `next_token` ← `nextToken`, `pagination_token` ← `paginationToken`, `community.fields` ← `communityFields`
- **Returns**: `SearchCommunitiesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
