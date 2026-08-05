# ActiveassuranceTags — operations

Accessor: `client.ActiveassuranceTags` · Source: `Api/ActiveassuranceTags.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TagServiceGetTag
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/tags/{name}` (Default)
- **Signature**: `TagServiceGetTag(string orgId, string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Tag`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TagServiceListTags
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/tags` (Default)
- **Signature**: `TagServiceListTags(string orgId, int? page, int? limit, string? filter, string? orderBy, bool? includeSysTags, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`page` … `includeSysTags`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`, `filter` ← `filter`, `order_by` ← `orderBy`, `include_sys_tags` ← `includeSysTags`
- **Returns**: `ListTagsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
