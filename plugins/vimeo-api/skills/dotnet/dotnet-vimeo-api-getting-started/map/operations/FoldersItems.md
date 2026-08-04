# FoldersItems — operations

Accessor: `client.FoldersItems` · Source: `Api/FoldersItems.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteFolderItemsAlt1
- **HTTP**: `DELETE /me/projects/{project_id}/items` (Default (api))
- **Notes**: This method removes all items from the specified folder.
- **Signature**: `DeleteFolderItemsAlt1(double projectId, string uris, bool? sendToRecentlyDeleted, bool? shouldDeleteItems, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `sendToRecentlyDeleted` — nullable, no default → **must pass explicitly**
  - `shouldDeleteItems` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `uris` ← `uris`, `send_to_recently_deleted` ← `sendToRecentlyDeleted`, `should_delete_items` ← `shouldDeleteItems`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteFolderItemsAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetFolderItems
- **HTTP**: `GET /me/projects/{project_id}/items` (Default (api))
- **Notes**: This method returns every item that belongs to the specified folder.
- **Signature**: `GetFolderItems(double projectId, string? clipPrivacyFilters, Direction? direction, Filter21? filter, double? page, double? perPage, Sort37? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`clipPrivacyFilters` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `clip_privacy_filters` ← `clipPrivacyFilters`, `direction` ← `direction`, `filter` ← `filter`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetFolderItems2
- **HTTP**: `GET /users/{user_id}/projects/{project_id}/items` (Default (api))
- **Notes**: This method returns every item that belongs to the specified folder.
- **Signature**: `GetFolderItems2(double projectId, double userId, string? clipPrivacyFilters, Direction? direction, Filter21? filter, double? page, double? perPage, Sort37? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`clipPrivacyFilters` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `clip_privacy_filters` ← `clipPrivacyFilters`, `direction` ← `direction`, `filter` ← `filter`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
