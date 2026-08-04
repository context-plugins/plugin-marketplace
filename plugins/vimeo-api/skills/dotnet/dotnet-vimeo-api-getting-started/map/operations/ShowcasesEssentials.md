# ShowcasesEssentials — operations

Accessor: `client.ShowcasesEssentials` · Source: `Api/ShowcasesEssentials.cs` · 14 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddFolderToShowcases
- **HTTP**: `PATCH /users/{user_id}/albums/from_folder` (Default (api))
- **Notes**: This method adds all videos and events from a specified folder to showcases. The authenticated user must either be the owner of the showcase or have team permissions.
- **Signature**: `AddFolderToShowcases(double userId, string albumUris, double folderId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `album_uris` ← `albumUris`, `folder_id` ← `folderId`
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddFolderToShowcasesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CopyShowcase
- **HTTP**: `POST /users/{user_id}/albums/{album_id}/copy` (Default (api))
- **Notes**: This method creates a copy of the specified showcase.
- **Signature**: `CopyShowcase(double albumId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CopyShowcaseError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CopyShowcaseAlt2
- **HTTP**: `POST /me/albums/{album_id}/copy` (Default (api))
- **Notes**: This method creates a copy of the specified showcase.
- **Signature**: `CopyShowcaseAlt2(double albumId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CopyShowcaseAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateShowcase
- **HTTP**: `POST /users/{user_id}/albums` (Default (api))
- **Notes**: This method creates a new showcase for the specified user.
- **Signature**: `CreateShowcase(double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateShowcaseError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateShowcaseAlt1
- **HTTP**: `POST /me/albums` (Default (api))
- **Notes**: This method creates a new showcase for the specified user.
- **Signature**: `CreateShowcaseAlt1(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateShowcaseAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteShowcase
- **HTTP**: `DELETE /users/{user_id}/albums/{album_id}` (Default (api))
- **Notes**: This method deletes the specified showcase. The authenticated user must be the owner of the showcase.
- **Signature**: `DeleteShowcase(double albumId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteShowcaseError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteShowcaseAlt2
- **HTTP**: `DELETE /me/albums/{album_id}` (Default (api))
- **Notes**: This method deletes the specified showcase. The authenticated user must be the owner of the showcase.
- **Signature**: `DeleteShowcaseAlt2(double albumId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteShowcaseAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EditShowcase
- **HTTP**: `PATCH /users/{user_id}/albums/{album_id}` (Default (api))
- **Notes**: This method edits the specified showcase. The authenticated user must be the owner of the showcase.
- **Signature**: `EditShowcase(double albumId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<EditShowcaseError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EditShowcaseAlt2
- **HTTP**: `PATCH /me/albums/{album_id}` (Default (api))
- **Notes**: This method edits the specified showcase. The authenticated user must be the owner of the showcase.
- **Signature**: `EditShowcaseAlt2(double albumId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<EditShowcaseAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetShowcase
- **HTTP**: `GET /users/{user_id}/albums/{album_id}` (Default (api))
- **Notes**: This method returns the specified showcase. The authenticated user must be the owner of the showcase.
- **Signature**: `GetShowcase(double albumId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetShowcaseError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetShowcaseAlt2
- **HTTP**: `GET /me/albums/{album_id}` (Default (api))
- **Notes**: This method returns the specified showcase. The authenticated user must be the owner of the showcase.
- **Signature**: `GetShowcaseAlt2(double albumId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetShowcaseAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetShowcases
- **HTTP**: `GET /users/{user_id}/albums` (Default (api))
- **Notes**: This method returns every showcase belonging to the authenticated user.
- **Signature**: `GetShowcases(double userId, Direction? direction, string? filterPrivacy, double? page, double? perPage, string? query, Sort18? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter_privacy` ← `filterPrivacy`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `AlbumConnection`
- **Error**: `SdkException<GetShowcasesError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetShowcasesAlt1
- **HTTP**: `GET /me/albums` (Default (api))
- **Notes**: This method returns every showcase belonging to the authenticated user.
- **Signature**: `GetShowcasesAlt1(Direction? direction, string? filterPrivacy, double? page, double? perPage, string? query, Sort18? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter_privacy` ← `filterPrivacy`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `AlbumConnection`
- **Error**: `SdkException<GetShowcasesAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### UpdateShowcases
- **HTTP**: `PATCH /users/{user_id}/albums` (Default (api))
- **Notes**: This method adds videos and events to the specified showcases. The authenticated user must either be the owner of the showcase or have team permissions. The present setup permits only one event per showcase.
- **Signature**: `UpdateShowcases(double userId, string albumItemUris, string albumUris, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `album_item_uris` ← `albumItemUris`, `album_uris` ← `albumUris`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
