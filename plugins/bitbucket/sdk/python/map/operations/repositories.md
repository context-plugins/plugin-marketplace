<!-- Generated file — do not edit; regenerated with the SDK. -->

# Repositories — operations

Accessor: `client.repositories` · Source: `bitbucket/apis/repositories.py` · 30 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.repositories.delete_repositories_by_workspace_by_repo_slug

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repositories_by_workspace_by_repo_slug(repo_slug: str, workspace: str, *, redirect_to: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path · `redirect_to` — query
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugErrorBody]`
- **Error**: `DeleteRepositoriesByWorkspaceByRepoSlugErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugErrorBody` | `bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.repositories.delete_repositories_by_workspace_by_repo_slug_hooks_by_uid

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/hooks/{uid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repositories_by_workspace_by_repo_slug_hooks_by_uid(repo_slug: str, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `uid`, `workspace`
- **Params**: `repo_slug` — path · `uid` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody]`
- **Error**: `DeleteRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody` | `bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_hooks_by_uid_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.repositories.delete_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/permissions-config/groups/{group_slug}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(group_slug: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_slug`, `repo_slug`, `workspace`
- **Params**: `group_slug` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody]`
- **Error**: `DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody` | `bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.repositories.delete_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/permissions-config/users/{selected_user_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(repo_slug: str, selected_user_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `selected_user_id`, `workspace`
- **Params**: `repo_slug` — path · `selected_user_id` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody]`
- **Error**: `DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody` | `bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.repositories.get_repositories

- **Route**: `GET /repositories`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories(*, after: str | None = None, role: Role1OrStr | None = None, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `after` — query · `role` — query · `q` — query · `sort` — query
- **Returns (parsed)**: `PaginatedRepositories`
- **Returns (raw)**: `ApiResult[PaginatedRepositories, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Role1OrStr` | `bitbucket/models/enums/role1.py` |
| `PaginatedRepositories` | `bitbucket/models/paginated_repositories.py` |

### client.repositories.get_repositories_by_workspace

- **Route**: `GET /repositories/{workspace}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace(workspace: str, *, role: Role1OrStr | None = None, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`
- **Params**: `workspace` — path · `role` — query · `q` — query · `sort` — query
- **Returns (parsed)**: `PaginatedRepositories`
- **Returns (raw)**: `ApiResult[PaginatedRepositories, GetRepositoriesByWorkspaceErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404, 410] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Role1OrStr` | `bitbucket/models/enums/role1.py` |
| `PaginatedRepositories` | `bitbucket/models/paginated_repositories.py` |
| `GetRepositoriesByWorkspaceErrorBody` | `bitbucket/errors/get_repositories_by_workspace_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.repositories.get_repositories_by_workspace_by_repo_slug

- **Route**: `GET /repositories/{workspace}/{repo_slug}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `RepositoryBitbucketRepositoriesApi`
- **Returns (raw)**: `ApiResult[RepositoryBitbucketRepositoriesApi, GetRepositoriesByWorkspaceByRepoSlugErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RepositoryBitbucketRepositoriesApi` | `bitbucket/models/repository_bitbucket_repositories_api.py` |
| `GetRepositoriesByWorkspaceByRepoSlugErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.repositories.get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path

- **Route**: `GET /repositories/{workspace}/{repo_slug}/filehistory/{commit}/{path}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path(commit: str, path: str, repo_slug: str, workspace: str, *, renames: str | None = None, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `commit`, `path`, `repo_slug`, `workspace`
- **Params**: `commit` — path · `path` — path · `repo_slug` — path · `workspace` — path · `renames` — query · `q` — query · `sort` — query
- **Returns (parsed)**: `PaginatedFiles`
- **Returns (raw)**: `ApiResult[PaginatedFiles, GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedFiles` | `bitbucket/models/paginated_files.py` |
| `GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.repositories.get_repositories_by_workspace_by_repo_slug_forks

- **Route**: `GET /repositories/{workspace}/{repo_slug}/forks`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_forks(repo_slug: str, workspace: str, *, role: Role1OrStr | None = None, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path · `role` — query · `q` — query · `sort` — query
- **Returns (parsed)**: `PaginatedRepositories`
- **Returns (raw)**: `ApiResult[PaginatedRepositories, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Role1OrStr` | `bitbucket/models/enums/role1.py` |
| `PaginatedRepositories` | `bitbucket/models/paginated_repositories.py` |

### client.repositories.get_repositories_by_workspace_by_repo_slug_hooks

- **Route**: `GET /repositories/{workspace}/{repo_slug}/hooks`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_hooks(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `PaginatedWebhookSubscriptions`
- **Returns (raw)**: `ApiResult[PaginatedWebhookSubscriptions, GetRepositoriesByWorkspaceByRepoSlugHooksErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugHooksErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedWebhookSubscriptions` | `bitbucket/models/paginated_webhook_subscriptions.py` |
| `GetRepositoriesByWorkspaceByRepoSlugHooksErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_hooks_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.repositories.get_repositories_by_workspace_by_repo_slug_hooks_by_uid

- **Route**: `GET /repositories/{workspace}/{repo_slug}/hooks/{uid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_hooks_by_uid(repo_slug: str, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `uid`, `workspace`
- **Params**: `repo_slug` — path · `uid` — path · `workspace` — path
- **Returns (parsed)**: `WebhookSubscription`
- **Returns (raw)**: `ApiResult[WebhookSubscription, GetRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookSubscription` | `bitbucket/models/webhook_subscription.py` |
| `GetRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_hooks_by_uid_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.repositories.get_repositories_by_workspace_by_repo_slug_override_settings

- **Route**: `GET /repositories/{workspace}/{repo_slug}/override-settings`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_override_settings(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `RepositoryInheritanceState`
- **Returns (raw)**: `ApiResult[RepositoryInheritanceState, GetRepositoriesByWorkspaceByRepoSlugOverrideSettingsErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugOverrideSettingsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RepositoryInheritanceState` | `bitbucket/models/repository_inheritance_state.py` |
| `GetRepositoriesByWorkspaceByRepoSlugOverrideSettingsErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_override_settings_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.repositories.get_repositories_by_workspace_by_repo_slug_permissions_config_groups

- **Route**: `GET /repositories/{workspace}/{repo_slug}/permissions-config/groups`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_permissions_config_groups(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `PaginatedRepositoryGroupPermissions`
- **Returns (raw)**: `ApiResult[PaginatedRepositoryGroupPermissions, GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedRepositoryGroupPermissions` | `bitbucket/models/paginated_repository_group_permissions.py` |
| `GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_permissions_config_groups_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.repositories.get_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug

- **Route**: `GET /repositories/{workspace}/{repo_slug}/permissions-config/groups/{group_slug}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(group_slug: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_slug`, `repo_slug`, `workspace`
- **Params**: `group_slug` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `RepositoryGroupPermission`
- **Returns (raw)**: `ApiResult[RepositoryGroupPermission, GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RepositoryGroupPermission` | `bitbucket/models/repository_group_permission.py` |
| `GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.repositories.get_repositories_by_workspace_by_repo_slug_permissions_config_users

- **Route**: `GET /repositories/{workspace}/{repo_slug}/permissions-config/users`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_permissions_config_users(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `PaginatedRepositoryUserPermissions`
- **Returns (raw)**: `ApiResult[PaginatedRepositoryUserPermissions, GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedRepositoryUserPermissions` | `bitbucket/models/paginated_repository_user_permissions.py` |
| `GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_permissions_config_users_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.repositories.get_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id

- **Route**: `GET /repositories/{workspace}/{repo_slug}/permissions-config/users/{selected_user_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(repo_slug: str, selected_user_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `selected_user_id`, `workspace`
- **Params**: `repo_slug` — path · `selected_user_id` — path · `workspace` — path
- **Returns (parsed)**: `RepositoryUserPermission`
- **Returns (raw)**: `ApiResult[RepositoryUserPermission, GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RepositoryUserPermission` | `bitbucket/models/repository_user_permission.py` |
| `GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.repositories.get_repositories_by_workspace_by_repo_slug_src

- **Route**: `GET /repositories/{workspace}/{repo_slug}/src`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_src(repo_slug: str, workspace: str, *, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path · `format_` — query `format`
- **Returns (parsed)**: `PaginatedTreeEntry`
- **Returns (raw)**: `ApiResult[PaginatedTreeEntry, GetRepositoriesByWorkspaceByRepoSlugSrcErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugSrcErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `bitbucket/models/enums/format.py` |
| `PaginatedTreeEntry` | `bitbucket/models/paginated_tree_entry.py` |
| `GetRepositoriesByWorkspaceByRepoSlugSrcErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_src_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.repositories.get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path

- **Route**: `GET /repositories/{workspace}/{repo_slug}/src/{commit}/{path}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path(commit: str, path: str, repo_slug: str, workspace: str, *, format_: Format1OrStr | None = None, q: str | None = None, sort: str | None = None, max_depth: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `commit`, `path`, `repo_slug`, `workspace`
- **Params**: `commit` — path · `path` — path · `repo_slug` — path · `workspace` — path · `format_` — query `format` · `q` — query · `sort` — query · `max_depth` — query
- **Returns (parsed)**: `PaginatedTreeEntry`
- **Returns (raw)**: `ApiResult[PaginatedTreeEntry, GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404, 555] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Format1OrStr` | `bitbucket/models/enums/format1.py` |
| `PaginatedTreeEntry` | `bitbucket/models/paginated_tree_entry.py` |
| `GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.repositories.get_repositories_by_workspace_by_repo_slug_watchers

- **Route**: `GET /repositories/{workspace}/{repo_slug}/watchers`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_watchers(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `PaginatedAccounts`
- **Returns (raw)**: `ApiResult[PaginatedAccounts, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PaginatedAccounts` | `bitbucket/models/paginated_accounts.py` |

### client.repositories.get_user_permissions_repositories

- **Route**: `GET /user/permissions/repositories`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_user_permissions_repositories(*, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `q` — query · `sort` — query
- **Returns (parsed)**: `PaginatedRepositoryPermissions`
- **Returns (raw)**: `ApiResult[PaginatedRepositoryPermissions, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PaginatedRepositoryPermissions` | `bitbucket/models/paginated_repository_permissions.py` |

### client.repositories.get_user_workspaces_by_workspace_permissions_repositories

- **Route**: `GET /user/workspaces/{workspace}/permissions/repositories`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_user_workspaces_by_workspace_permissions_repositories(workspace: str, *, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`
- **Params**: `workspace` — path · `q` — query · `sort` — query
- **Returns (parsed)**: `PaginatedRepositoryPermissions`
- **Returns (raw)**: `ApiResult[PaginatedRepositoryPermissions, GetUserWorkspacesByWorkspacePermissionsRepositoriesErrorBody]`
- **Error**: `GetUserWorkspacesByWorkspacePermissionsRepositoriesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedRepositoryPermissions` | `bitbucket/models/paginated_repository_permissions.py` |
| `GetUserWorkspacesByWorkspacePermissionsRepositoriesErrorBody` | `bitbucket/errors/get_user_workspaces_by_workspace_permissions_repositories_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.repositories.post_repositories_by_workspace_by_repo_slug

- **Route**: `POST /repositories/{workspace}/{repo_slug}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug(repo_slug: str, workspace: str, *, body: RepositoryBitbucketRepositoriesApi | RepositoryBitbucketRepositoriesApiDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `RepositoryBitbucketRepositoriesApi`
- **Returns (raw)**: `ApiResult[RepositoryBitbucketRepositoriesApi, PostRepositoriesByWorkspaceByRepoSlugErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RepositoryBitbucketRepositoriesApi` | `bitbucket/models/repository_bitbucket_repositories_api.py` |
| `RepositoryBitbucketRepositoriesApiDict` | `bitbucket/models/repository_bitbucket_repositories_api.py` |
| `PostRepositoriesByWorkspaceByRepoSlugErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.repositories.post_repositories_by_workspace_by_repo_slug_forks

- **Route**: `POST /repositories/{workspace}/{repo_slug}/forks`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_forks(repo_slug: str, workspace: str, *, body: RepositoryBitbucketRepositoriesApi | RepositoryBitbucketRepositoriesApiDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `RepositoryBitbucketRepositoriesApi`
- **Returns (raw)**: `ApiResult[RepositoryBitbucketRepositoriesApi, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `RepositoryBitbucketRepositoriesApi` | `bitbucket/models/repository_bitbucket_repositories_api.py` |
| `RepositoryBitbucketRepositoriesApiDict` | `bitbucket/models/repository_bitbucket_repositories_api.py` |

### client.repositories.post_repositories_by_workspace_by_repo_slug_hooks

- **Route**: `POST /repositories/{workspace}/{repo_slug}/hooks`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_hooks(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `WebhookSubscription`
- **Returns (raw)**: `ApiResult[WebhookSubscription, PostRepositoriesByWorkspaceByRepoSlugHooksErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugHooksErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookSubscription` | `bitbucket/models/webhook_subscription.py` |
| `PostRepositoriesByWorkspaceByRepoSlugHooksErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_hooks_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.repositories.post_repositories_by_workspace_by_repo_slug_src

- **Route**: `POST /repositories/{workspace}/{repo_slug}/src`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_src(repo_slug: str, workspace: str, *, message: str | None = None, author: str | None = None, parents: str | None = None, files: str | None = None, branch: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path · `message` — query · `author` — query · `parents` — query · `files` — query · `branch` — query
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PostRepositoriesByWorkspaceByRepoSlugSrcErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugSrcErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugSrcErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_src_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.repositories.put_repositories_by_workspace_by_repo_slug

- **Route**: `PUT /repositories/{workspace}/{repo_slug}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_repositories_by_workspace_by_repo_slug(repo_slug: str, workspace: str, *, body: RepositoryBitbucketRepositoriesApi | RepositoryBitbucketRepositoriesApiDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `RepositoryBitbucketRepositoriesApi`
- **Returns (raw)**: `ApiResult[RepositoryBitbucketRepositoriesApi, PutRepositoriesByWorkspaceByRepoSlugErrorBody]`
- **Error**: `PutRepositoriesByWorkspaceByRepoSlugErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RepositoryBitbucketRepositoriesApi` | `bitbucket/models/repository_bitbucket_repositories_api.py` |
| `RepositoryBitbucketRepositoriesApiDict` | `bitbucket/models/repository_bitbucket_repositories_api.py` |
| `PutRepositoriesByWorkspaceByRepoSlugErrorBody` | `bitbucket/errors/put_repositories_by_workspace_by_repo_slug_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.repositories.put_repositories_by_workspace_by_repo_slug_hooks_by_uid

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/hooks/{uid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_repositories_by_workspace_by_repo_slug_hooks_by_uid(repo_slug: str, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `uid`, `workspace`
- **Params**: `repo_slug` — path · `uid` — path · `workspace` — path
- **Returns (parsed)**: `WebhookSubscription`
- **Returns (raw)**: `ApiResult[WebhookSubscription, PutRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody]`
- **Error**: `PutRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookSubscription` | `bitbucket/models/webhook_subscription.py` |
| `PutRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody` | `bitbucket/errors/put_repositories_by_workspace_by_repo_slug_hooks_by_uid_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.repositories.put_repositories_by_workspace_by_repo_slug_override_settings

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/override-settings`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_repositories_by_workspace_by_repo_slug_override_settings(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PutRepositoriesByWorkspaceByRepoSlugOverrideSettingsErrorBody]`
- **Error**: `PutRepositoriesByWorkspaceByRepoSlugOverrideSettingsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PutRepositoriesByWorkspaceByRepoSlugOverrideSettingsErrorBody` | `bitbucket/errors/put_repositories_by_workspace_by_repo_slug_override_settings_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.repositories.put_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/permissions-config/groups/{group_slug}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(group_slug: str, repo_slug: str, workspace: str, body: BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema | BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchemaDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_slug`, `repo_slug`, `workspace`, `body`
- **Params**: `group_slug` — path · `repo_slug` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `RepositoryGroupPermission`
- **Returns (raw)**: `ApiResult[RepositoryGroupPermission, PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody]`
- **Error**: `PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 402, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema` | `bitbucket/models/bitbucket_apps_permissions_serializers_repo_permission_update_schema.py` |
| `BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchemaDict` | `bitbucket/models/bitbucket_apps_permissions_serializers_repo_permission_update_schema.py` |
| `RepositoryGroupPermission` | `bitbucket/models/repository_group_permission.py` |
| `PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody` | `bitbucket/errors/put_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.repositories.put_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/permissions-config/users/{selected_user_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(repo_slug: str, selected_user_id: str, workspace: str, body: BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema | BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchemaDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `selected_user_id`, `workspace`, `body`
- **Params**: `repo_slug` — path · `selected_user_id` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `RepositoryUserPermission`
- **Returns (raw)**: `ApiResult[RepositoryUserPermission, PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody]`
- **Error**: `PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 402, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema` | `bitbucket/models/bitbucket_apps_permissions_serializers_repo_permission_update_schema.py` |
| `BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchemaDict` | `bitbucket/models/bitbucket_apps_permissions_serializers_repo_permission_update_schema.py` |
| `RepositoryUserPermission` | `bitbucket/models/repository_user_permission.py` |
| `PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody` | `bitbucket/errors/put_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

