# FoldersVideos — operations

Accessor: `client.FoldersVideos` · Source: `Api/FoldersVideos.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddVideoToProject
- **HTTP**: `PUT /users/{user_id}/projects/{project_id}/videos/{video_id}` (Default (api))
- **Notes**: This method adds a single video to the specified folder. The authenticated user must be the owner of the folder.
- **Signature**: `AddVideoToProject(double projectId, double userId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddVideoToProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AddVideoToProjectAlt1
- **HTTP**: `PUT /me/projects/{project_id}/videos/{video_id}` (Default (api))
- **Notes**: This method adds a single video to the specified folder. The authenticated user must be the owner of the folder.
- **Signature**: `AddVideoToProjectAlt1(double projectId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddVideoToProjectAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AddVideosToProject
- **HTTP**: `PUT /users/{user_id}/projects/{project_id}/videos` (Default (api))
- **Notes**: This method adds multiple videos to the specified folder. The authenticated user must be the owner of the folder.
- **Signature**: `AddVideosToProject(double projectId, double userId, UsersProjectsVideosRequest1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddVideosToProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AddVideosToProjectAlt1
- **HTTP**: `PUT /me/projects/{project_id}/videos` (Default (api))
- **Notes**: This method adds multiple videos to the specified folder. The authenticated user must be the owner of the folder.
- **Signature**: `AddVideosToProjectAlt1(double projectId, MeProjectsVideosRequest1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddVideosToProjectAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetProjectVideos
- **HTTP**: `GET /users/{user_id}/projects/{project_id}/videos` (Default (api))
- **Notes**: This method returns all the videos that belong to the specified folder.
- **Signature**: `GetProjectVideos(double projectId, double userId, Direction? direction, string? filterTag, string? filterTagAllOf, string? filterTagExclude, bool? includeSubfolders, double? page, double? perPage, string? query, string? queryFields, Sort37? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter_tag` ← `filterTag`, `filter_tag_all_of` ← `filterTagAllOf`, `filter_tag_exclude` ← `filterTagExclude`, `include_subfolders` ← `includeSubfolders`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `query_fields` ← `queryFields`, `sort` ← `sort`
- **Returns**: `VideoConnection`
- **Error**: `SdkException<GetProjectVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetProjectVideosAlt1
- **HTTP**: `GET /me/projects/{project_id}/videos` (Default (api))
- **Notes**: This method returns all the videos that belong to the specified folder.
- **Signature**: `GetProjectVideosAlt1(double projectId, Direction? direction, string? filterTag, string? filterTagAllOf, string? filterTagExclude, bool? includeSubfolders, double? page, double? perPage, string? query, string? queryFields, Sort37? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter_tag` ← `filterTag`, `filter_tag_all_of` ← `filterTagAllOf`, `filter_tag_exclude` ← `filterTagExclude`, `include_subfolders` ← `includeSubfolders`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `query_fields` ← `queryFields`, `sort` ← `sort`
- **Returns**: `VideoConnection`
- **Error**: `SdkException<GetProjectVideosAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### RemoveVideoFromProject
- **HTTP**: `DELETE /users/{user_id}/projects/{project_id}/videos/{video_id}` (Default (api))
- **Notes**: This method removes a single video from the specified folder. Please note that this doesn't delete the video itself.
- **Signature**: `RemoveVideoFromProject(double projectId, double userId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RemoveVideoFromProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RemoveVideoFromProjectAlt1
- **HTTP**: `DELETE /me/projects/{project_id}/videos/{video_id}` (Default (api))
- **Notes**: This method removes a single video from the specified folder. Please note that this doesn't delete the video itself.
- **Signature**: `RemoveVideoFromProjectAlt1(double projectId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RemoveVideoFromProjectAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RemoveVideosFromProject
- **HTTP**: `DELETE /users/{user_id}/projects/{project_id}/videos` (Default (api))
- **Notes**: This method removes multiple videos from the specified folder. The authenticated user must be the owner of the folder.
- **Signature**: `RemoveVideosFromProject(double projectId, double userId, UsersProjectsVideosRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RemoveVideosFromProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RemoveVideosFromProjectAlt1
- **HTTP**: `DELETE /me/projects/{project_id}/videos` (Default (api))
- **Notes**: This method removes multiple videos from the specified folder. The authenticated user must be the owner of the folder.
- **Signature**: `RemoveVideosFromProjectAlt1(double projectId, MeProjectsVideosRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RemoveVideosFromProjectAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
