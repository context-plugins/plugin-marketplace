<!-- Generated file — do not edit; regenerated with the SDK. -->

# Repositories — operations

Accessor: `client.Repositories` · Source: `src/Bitbucket/Api/Repositories.cs` · 30 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteRepositoriesByWorkspaceByRepoSlug

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoriesByWorkspaceByRepoSlug(DeleteRepositoriesByWorkspaceByRepoSlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Query params (wire ← C#)**: `redirect_to` ← `RedirectTo`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoriesByWorkspaceByRepoSlugError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugRequest` | `src/Bitbucket/Requests/Repositories/DeleteRepositoriesByWorkspaceByRepoSlugRequest.cs` |
| `DeleteRepositoriesByWorkspaceByRepoSlugError` | `src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid(DeleteRepositoriesByWorkspaceByRepoSlugHooksByUidRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Uid`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoriesByWorkspaceByRepoSlugHooksByUidError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugHooksByUidRequest` | `src/Bitbucket/Requests/Repositories/DeleteRepositoriesByWorkspaceByRepoSlugHooksByUidRequest.cs` |
| `DeleteRepositoriesByWorkspaceByRepoSlugHooksByUidError` | `src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugHooksByUidError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlug

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlug(DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupSlug`, `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugRequest` | `src/Bitbucket/Requests/Repositories/DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugRequest.cs` |
| `DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugError` | `src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserId(DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `SelectedUserId`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdRequest` | `src/Bitbucket/Requests/Repositories/DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdRequest.cs` |
| `DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdError` | `src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositories

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositories(GetRepositoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `after` ← `After`, `role` ← `Role`, `q` ← `Q`, `sort` ← `Sort`
- **Returns**: `PaginatedRepositories`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetRepositoriesRequest` | `src/Bitbucket/Requests/Repositories/GetRepositoriesRequest.cs` |
| `Role1` | `src/Bitbucket/Models/Enums/Role1.cs` |
| `PaginatedRepositories` | `src/Bitbucket/Models/PaginatedRepositories.cs` |

### GetRepositoriesByWorkspace

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspace(GetRepositoriesByWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`
- **Query params (wire ← C#)**: `role` ← `Role`, `q` ← `Q`, `sort` ← `Sort`
- **Returns**: `PaginatedRepositories`
- **Error**: `ApiException<GetRepositoriesByWorkspaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404, 410] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceRequest` | `src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceRequest.cs` |
| `Role1` | `src/Bitbucket/Models/Enums/Role1.cs` |
| `PaginatedRepositories` | `src/Bitbucket/Models/PaginatedRepositories.cs` |
| `GetRepositoriesByWorkspaceError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlug

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlug(GetRepositoriesByWorkspaceByRepoSlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `RepositoryBitbucketRepositoriesApi`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugRequest` | `src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceByRepoSlugRequest.cs` |
| `RepositoryBitbucketRepositoriesApi` | `src/Bitbucket/Models/AllOf/RepositoryBitbucketRepositoriesApi.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath(GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Commit`, `Path`, `RepoSlug`, `Workspace`
- **Query params (wire ← C#)**: `renames` ← `Renames`, `q` ← `Q`, `sort` ← `Sort`
- **Returns**: `PaginatedFiles`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathRequest` | `src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathRequest.cs` |
| `PaginatedFiles` | `src/Bitbucket/Models/PaginatedFiles.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugForks

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugForks(GetRepositoriesByWorkspaceByRepoSlugForksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Query params (wire ← C#)**: `role` ← `Role`, `q` ← `Q`, `sort` ← `Sort`
- **Returns**: `PaginatedRepositories`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugForksRequest` | `src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceByRepoSlugForksRequest.cs` |
| `Role1` | `src/Bitbucket/Models/Enums/Role1.cs` |
| `PaginatedRepositories` | `src/Bitbucket/Models/PaginatedRepositories.cs` |

### GetRepositoriesByWorkspaceByRepoSlugHooks

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugHooks(GetRepositoriesByWorkspaceByRepoSlugHooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `PaginatedWebhookSubscriptions`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugHooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugHooksRequest` | `src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceByRepoSlugHooksRequest.cs` |
| `PaginatedWebhookSubscriptions` | `src/Bitbucket/Models/PaginatedWebhookSubscriptions.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugHooksError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugHooksError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugHooksByUid

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugHooksByUid(GetRepositoriesByWorkspaceByRepoSlugHooksByUidRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Uid`, `Workspace`
- **Returns**: `WebhookSubscription`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugHooksByUidError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugHooksByUidRequest` | `src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceByRepoSlugHooksByUidRequest.cs` |
| `WebhookSubscription` | `src/Bitbucket/Models/AllOf/WebhookSubscription.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugHooksByUidError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugHooksByUidError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugOverrideSettings

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugOverrideSettings(GetRepositoriesByWorkspaceByRepoSlugOverrideSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `RepositoryInheritanceState`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugOverrideSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugOverrideSettingsRequest` | `src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceByRepoSlugOverrideSettingsRequest.cs` |
| `RepositoryInheritanceState` | `src/Bitbucket/Models/RepositoryInheritanceState.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugOverrideSettingsError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugOverrideSettingsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroups

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroups(GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `PaginatedRepositoryGroupPermissions`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsRequest` | `src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsRequest.cs` |
| `PaginatedRepositoryGroupPermissions` | `src/Bitbucket/Models/PaginatedRepositoryGroupPermissions.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlug

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlug(GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupSlug`, `RepoSlug`, `Workspace`
- **Returns**: `RepositoryGroupPermission`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugRequest` | `src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugRequest.cs` |
| `RepositoryGroupPermission` | `src/Bitbucket/Models/RepositoryGroupPermission.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsers

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsers(GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `PaginatedRepositoryUserPermissions`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersRequest` | `src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersRequest.cs` |
| `PaginatedRepositoryUserPermissions` | `src/Bitbucket/Models/PaginatedRepositoryUserPermissions.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserId(GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `SelectedUserId`, `Workspace`
- **Returns**: `RepositoryUserPermission`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdRequest` | `src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdRequest.cs` |
| `RepositoryUserPermission` | `src/Bitbucket/Models/RepositoryUserPermission.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugSrc

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugSrc(GetRepositoriesByWorkspaceByRepoSlugSrcRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Query params (wire ← C#)**: `format` ← `Format`
- **Returns**: `PaginatedTreeEntry`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugSrcError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugSrcRequest` | `src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceByRepoSlugSrcRequest.cs` |
| `Format` | `src/Bitbucket/Models/Enums/Format.cs` |
| `PaginatedTreeEntry` | `src/Bitbucket/Models/PaginatedTreeEntry.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugSrcError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugSrcError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath(GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Commit`, `Path`, `RepoSlug`, `Workspace`
- **Query params (wire ← C#)**: `format` ← `Format`, `q` ← `Q`, `sort` ← `Sort`, `max_depth` ← `MaxDepth`
- **Returns**: `PaginatedTreeEntry`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404, 555] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathRequest` | `src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathRequest.cs` |
| `Format1` | `src/Bitbucket/Models/Enums/Format1.cs` |
| `PaginatedTreeEntry` | `src/Bitbucket/Models/PaginatedTreeEntry.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugWatchers

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugWatchers(GetRepositoriesByWorkspaceByRepoSlugWatchersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `PaginatedAccounts`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugWatchersRequest` | `src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceByRepoSlugWatchersRequest.cs` |
| `PaginatedAccounts` | `src/Bitbucket/Models/PaginatedAccounts.cs` |

### GetUserPermissionsRepositories

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetUserPermissionsRepositories(GetUserPermissionsRepositoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `q` ← `Q`, `sort` ← `Sort`
- **Returns**: `PaginatedRepositoryPermissions`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetUserPermissionsRepositoriesRequest` | `src/Bitbucket/Requests/Repositories/GetUserPermissionsRepositoriesRequest.cs` |
| `PaginatedRepositoryPermissions` | `src/Bitbucket/Models/PaginatedRepositoryPermissions.cs` |

### GetUserWorkspacesByWorkspacePermissionsRepositories

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetUserWorkspacesByWorkspacePermissionsRepositories(GetUserWorkspacesByWorkspacePermissionsRepositoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`
- **Query params (wire ← C#)**: `q` ← `Q`, `sort` ← `Sort`
- **Returns**: `PaginatedRepositoryPermissions`
- **Error**: `ApiException<GetUserWorkspacesByWorkspacePermissionsRepositoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUserWorkspacesByWorkspacePermissionsRepositoriesRequest` | `src/Bitbucket/Requests/Repositories/GetUserWorkspacesByWorkspacePermissionsRepositoriesRequest.cs` |
| `PaginatedRepositoryPermissions` | `src/Bitbucket/Models/PaginatedRepositoryPermissions.cs` |
| `GetUserWorkspacesByWorkspacePermissionsRepositoriesError` | `src/Bitbucket/Errors/GetUserWorkspacesByWorkspacePermissionsRepositoriesError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlug

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlug(PostRepositoriesByWorkspaceByRepoSlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `RepositoryBitbucketRepositoriesApi`
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugRequest` | `src/Bitbucket/Requests/Repositories/PostRepositoriesByWorkspaceByRepoSlugRequest.cs` |
| `RepositoryBitbucketRepositoriesApi` | `src/Bitbucket/Models/AllOf/RepositoryBitbucketRepositoriesApi.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugForks

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugForks(PostRepositoriesByWorkspaceByRepoSlugForksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `RepositoryBitbucketRepositoriesApi`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugForksRequest` | `src/Bitbucket/Requests/Repositories/PostRepositoriesByWorkspaceByRepoSlugForksRequest.cs` |
| `RepositoryBitbucketRepositoriesApi` | `src/Bitbucket/Models/AllOf/RepositoryBitbucketRepositoriesApi.cs` |

### PostRepositoriesByWorkspaceByRepoSlugHooks

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugHooks(PostRepositoriesByWorkspaceByRepoSlugHooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `WebhookSubscription`
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugHooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugHooksRequest` | `src/Bitbucket/Requests/Repositories/PostRepositoriesByWorkspaceByRepoSlugHooksRequest.cs` |
| `WebhookSubscription` | `src/Bitbucket/Models/AllOf/WebhookSubscription.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugHooksError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugHooksError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugSrc

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugSrc(PostRepositoriesByWorkspaceByRepoSlugSrcRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Query params (wire ← C#)**: `message` ← `Message`, `author` ← `Author`, `parents` ← `Parents`, `files` ← `Files`, `branch` ← `Branch`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugSrcError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugSrcRequest` | `src/Bitbucket/Requests/Repositories/PostRepositoriesByWorkspaceByRepoSlugSrcRequest.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugSrcError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugSrcError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutRepositoriesByWorkspaceByRepoSlug

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutRepositoriesByWorkspaceByRepoSlug(PutRepositoriesByWorkspaceByRepoSlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `RepositoryBitbucketRepositoriesApi`
- **Error**: `ApiException<PutRepositoriesByWorkspaceByRepoSlugError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutRepositoriesByWorkspaceByRepoSlugRequest` | `src/Bitbucket/Requests/Repositories/PutRepositoriesByWorkspaceByRepoSlugRequest.cs` |
| `RepositoryBitbucketRepositoriesApi` | `src/Bitbucket/Models/AllOf/RepositoryBitbucketRepositoriesApi.cs` |
| `PutRepositoriesByWorkspaceByRepoSlugError` | `src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutRepositoriesByWorkspaceByRepoSlugHooksByUid

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutRepositoriesByWorkspaceByRepoSlugHooksByUid(PutRepositoriesByWorkspaceByRepoSlugHooksByUidRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Uid`, `Workspace`
- **Returns**: `WebhookSubscription`
- **Error**: `ApiException<PutRepositoriesByWorkspaceByRepoSlugHooksByUidError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutRepositoriesByWorkspaceByRepoSlugHooksByUidRequest` | `src/Bitbucket/Requests/Repositories/PutRepositoriesByWorkspaceByRepoSlugHooksByUidRequest.cs` |
| `WebhookSubscription` | `src/Bitbucket/Models/AllOf/WebhookSubscription.cs` |
| `PutRepositoriesByWorkspaceByRepoSlugHooksByUidError` | `src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugHooksByUidError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutRepositoriesByWorkspaceByRepoSlugOverrideSettings

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutRepositoriesByWorkspaceByRepoSlugOverrideSettings(PutRepositoriesByWorkspaceByRepoSlugOverrideSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PutRepositoriesByWorkspaceByRepoSlugOverrideSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutRepositoriesByWorkspaceByRepoSlugOverrideSettingsRequest` | `src/Bitbucket/Requests/Repositories/PutRepositoriesByWorkspaceByRepoSlugOverrideSettingsRequest.cs` |
| `PutRepositoriesByWorkspaceByRepoSlugOverrideSettingsError` | `src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugOverrideSettingsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlug

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlug(PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupSlug`, `RepoSlug`, `Workspace`, `Body`
- **Returns**: `RepositoryGroupPermission`
- **Error**: `ApiException<PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 402, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugRequest` | `src/Bitbucket/Requests/Repositories/PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugRequest.cs` |
| `BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema` | `src/Bitbucket/Models/BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema.cs` |
| `RepositoryGroupPermission` | `src/Bitbucket/Models/RepositoryGroupPermission.cs` |
| `PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugError` | `src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserId(PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `SelectedUserId`, `Workspace`, `Body`
- **Returns**: `RepositoryUserPermission`
- **Error**: `ApiException<PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 402, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdRequest` | `src/Bitbucket/Requests/Repositories/PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdRequest.cs` |
| `BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema` | `src/Bitbucket/Models/BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema.cs` |
| `RepositoryUserPermission` | `src/Bitbucket/Models/RepositoryUserPermission.cs` |
| `PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdError` | `src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

