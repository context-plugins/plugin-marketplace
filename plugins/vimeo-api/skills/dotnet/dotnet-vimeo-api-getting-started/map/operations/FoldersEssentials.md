# FoldersEssentials — operations

Accessor: `client.FoldersEssentials` · Source: `Api/FoldersEssentials.cs` · 11 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateProject
- **HTTP**: `POST /users/{user_id}/projects` (Default (api))
- **Notes**: This method creates a new folder for the authenticated user. By default, this method creates a top-level folder. To create a subfolder — that is, to place the new folder inside an existing folder — specify the parent folder by URI with the parent_folder_uri parameter in the body of the request.
- **Signature**: `CreateProject(double userId, UsersProjectsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Project`
- **Error**: `SdkException<CreateProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateProjectAlt1
- **HTTP**: `POST /me/projects` (Default (api))
- **Notes**: This method creates a new folder for the authenticated user. By default, this method creates a top-level folder. To create a subfolder — that is, to place the new folder inside an existing folder — specify the parent folder by URI with the parent_folder_uri parameter in the body of the request.
- **Signature**: `CreateProjectAlt1(MeProjectsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Project`
- **Error**: `SdkException<CreateProjectAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteProject
- **HTTP**: `DELETE /users/{user_id}/projects/{project_id}` (Default (api))
- **Notes**: This method deletes the specified folder and optionally also the videos that it contains. The authenticated user must be the owner of the folder.
- **Signature**: `DeleteProject(double projectId, double userId, UsersProjectsRequest1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteProjectAlt1
- **HTTP**: `DELETE /me/projects/{project_id}` (Default (api))
- **Notes**: This method deletes the specified folder and optionally also the videos that it contains. The authenticated user must be the owner of the folder.
- **Signature**: `DeleteProjectAlt1(double projectId, MeProjectsRequest1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteProjectAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EditProject
- **HTTP**: `PATCH /users/{user_id}/projects/{project_id}` (Default (api))
- **Notes**: This method edits the specified folder. The authenticated user must be the owner of the folder.
- **Signature**: `EditProject(double projectId, double userId, UsersProjectsRequest2 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Project`
- **Error**: `SdkException<EditProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EditProjectAlt1
- **HTTP**: `PATCH /me/projects/{project_id}` (Default (api))
- **Notes**: This method edits the specified folder. The authenticated user must be the owner of the folder.
- **Signature**: `EditProjectAlt1(double projectId, MeProjectsRequest2 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Project`
- **Error**: `SdkException<EditProjectAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPrivateToMeFolder
- **HTTP**: `GET /users/{owner_id}/folders/private_to_me` (Default (api))
- **Notes**: This method returns the specified private-to-me folder.
- **Signature**: `GetPrivateToMeFolder(double ownerId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Project`
- **Error**: `SdkException<GetPrivateToMeFolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetProject
- **HTTP**: `GET /users/{user_id}/projects/{project_id}` (Default (api))
- **Notes**: This method returns a single folder belonging to the authenticated user.
- **Signature**: `GetProject(double projectId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Project`
- **Error**: `SdkException<GetProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetProjectAlt1
- **HTTP**: `GET /me/projects/{project_id}` (Default (api))
- **Notes**: This method returns a single folder belonging to the authenticated user.
- **Signature**: `GetProjectAlt1(double projectId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Project`
- **Error**: `SdkException<GetProjectAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetProjects
- **HTTP**: `GET /users/{user_id}/projects` (Default (api))
- **Notes**: This method returns all the folders belonging to the authenticated user.
- **Signature**: `GetProjects(double userId, Direction? direction, double? page, double? perPage, string? query, Sort36? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `ProjectConnection`
- **Error**: `SdkException<GetProjectsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetProjectsAlt1
- **HTTP**: `GET /me/projects` (Default (api))
- **Notes**: This method returns all the folders belonging to the authenticated user.
- **Signature**: `GetProjectsAlt1(Direction? direction, double? page, double? perPage, string? query, Sort36? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `ProjectConnection`
- **Error**: `SdkException<GetProjectsAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
