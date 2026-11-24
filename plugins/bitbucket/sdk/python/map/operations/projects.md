<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.projects` · Source: `bitbucket/apis/projects.py` · 16 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.projects.delete_workspaces_by_workspace_projects_by_project_key

- **Route**: `DELETE /workspaces/{workspace}/projects/{project_key}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_workspaces_by_workspace_projects_by_project_key(project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_key`, `workspace`
- **Params**: `project_key` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteWorkspacesByWorkspaceProjectsByProjectKeyErrorBody]`
- **Error**: `DeleteWorkspacesByWorkspaceProjectsByProjectKeyErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteWorkspacesByWorkspaceProjectsByProjectKeyErrorBody` | `bitbucket/errors/delete_workspaces_by_workspace_projects_by_project_key_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.projects.delete_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user

- **Route**: `DELETE /workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(project_key: str, selected_user: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_key`, `selected_user`, `workspace`
- **Params**: `project_key` — path · `selected_user` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody]`
- **Error**: `DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody` | `bitbucket/errors/delete_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.projects.delete_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug

- **Route**: `DELETE /workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(group_slug: str, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_slug`, `project_key`, `workspace`
- **Params**: `group_slug` — path · `project_key` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody]`
- **Error**: `DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody` | `bitbucket/errors/delete_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.projects.delete_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id

- **Route**: `DELETE /workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(project_key: str, selected_user_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_key`, `selected_user_id`, `workspace`
- **Params**: `project_key` — path · `selected_user_id` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody]`
- **Error**: `DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody` | `bitbucket/errors/delete_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.projects.get_workspaces_by_workspace_projects_by_project_key

- **Route**: `GET /workspaces/{workspace}/projects/{project_key}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspaces_by_workspace_projects_by_project_key(project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_key`, `workspace`
- **Params**: `project_key` — path · `workspace` — path
- **Returns (parsed)**: `ProjectBitbucketProjectsApi`
- **Returns (raw)**: `ApiResult[ProjectBitbucketProjectsApi, GetWorkspacesByWorkspaceProjectsByProjectKeyErrorBody]`
- **Error**: `GetWorkspacesByWorkspaceProjectsByProjectKeyErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProjectBitbucketProjectsApi` | `bitbucket/models/project_bitbucket_projects_api.py` |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyErrorBody` | `bitbucket/errors/get_workspaces_by_workspace_projects_by_project_key_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.projects.get_workspaces_by_workspace_projects_by_project_key_default_reviewers

- **Route**: `GET /workspaces/{workspace}/projects/{project_key}/default-reviewers`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspaces_by_workspace_projects_by_project_key_default_reviewers(project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_key`, `workspace`
- **Params**: `project_key` — path · `workspace` — path
- **Returns (parsed)**: `PaginatedDefaultReviewerAndType`
- **Returns (raw)**: `ApiResult[PaginatedDefaultReviewerAndType, GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersErrorBody]`
- **Error**: `GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedDefaultReviewerAndType` | `bitbucket/models/paginated_default_reviewer_and_type.py` |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersErrorBody` | `bitbucket/errors/get_workspaces_by_workspace_projects_by_project_key_default_reviewers_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.projects.get_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user

- **Route**: `GET /workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(project_key: str, selected_user: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_key`, `selected_user`, `workspace`
- **Params**: `project_key` — path · `selected_user` — path · `workspace` — path
- **Returns (parsed)**: `User`
- **Returns (raw)**: `ApiResult[User, GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody]`
- **Error**: `GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `User` | `bitbucket/models/user.py` |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody` | `bitbucket/errors/get_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.projects.get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups

- **Route**: `GET /workspaces/{workspace}/projects/{project_key}/permissions-config/groups`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups(project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_key`, `workspace`
- **Params**: `project_key` — path · `workspace` — path
- **Returns (parsed)**: `PaginatedProjectGroupPermissions`
- **Returns (raw)**: `ApiResult[PaginatedProjectGroupPermissions, GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsErrorBody]`
- **Error**: `GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedProjectGroupPermissions` | `bitbucket/models/paginated_project_group_permissions.py` |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsErrorBody` | `bitbucket/errors/get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.projects.get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug

- **Route**: `GET /workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(group_slug: str, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_slug`, `project_key`, `workspace`
- **Params**: `group_slug` — path · `project_key` — path · `workspace` — path
- **Returns (parsed)**: `ProjectGroupPermission`
- **Returns (raw)**: `ApiResult[ProjectGroupPermission, GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody]`
- **Error**: `GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProjectGroupPermission` | `bitbucket/models/project_group_permission.py` |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody` | `bitbucket/errors/get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.projects.get_workspaces_by_workspace_projects_by_project_key_permissions_config_users

- **Route**: `GET /workspaces/{workspace}/projects/{project_key}/permissions-config/users`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspaces_by_workspace_projects_by_project_key_permissions_config_users(project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_key`, `workspace`
- **Params**: `project_key` — path · `workspace` — path
- **Returns (parsed)**: `PaginatedProjectUserPermissions`
- **Returns (raw)**: `ApiResult[PaginatedProjectUserPermissions, GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersErrorBody]`
- **Error**: `GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedProjectUserPermissions` | `bitbucket/models/paginated_project_user_permissions.py` |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersErrorBody` | `bitbucket/errors/get_workspaces_by_workspace_projects_by_project_key_permissions_config_users_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.projects.get_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id

- **Route**: `GET /workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(project_key: str, selected_user_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_key`, `selected_user_id`, `workspace`
- **Params**: `project_key` — path · `selected_user_id` — path · `workspace` — path
- **Returns (parsed)**: `ProjectUserPermission`
- **Returns (raw)**: `ApiResult[ProjectUserPermission, GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody]`
- **Error**: `GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProjectUserPermission` | `bitbucket/models/project_user_permission.py` |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody` | `bitbucket/errors/get_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.projects.post_workspaces_by_workspace_projects

- **Route**: `POST /workspaces/{workspace}/projects`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_workspaces_by_workspace_projects(workspace: str, body: ProjectBitbucketProjectsApi | ProjectBitbucketProjectsApiDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `body`
- **Params**: `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `ProjectBitbucketProjectsApi`
- **Returns (raw)**: `ApiResult[ProjectBitbucketProjectsApi, PostWorkspacesByWorkspaceProjectsErrorBody]`
- **Error**: `PostWorkspacesByWorkspaceProjectsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProjectBitbucketProjectsApi` | `bitbucket/models/project_bitbucket_projects_api.py` |
| `ProjectBitbucketProjectsApiDict` | `bitbucket/models/project_bitbucket_projects_api.py` |
| `PostWorkspacesByWorkspaceProjectsErrorBody` | `bitbucket/errors/post_workspaces_by_workspace_projects_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.projects.put_workspaces_by_workspace_projects_by_project_key

- **Route**: `PUT /workspaces/{workspace}/projects/{project_key}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_workspaces_by_workspace_projects_by_project_key(project_key: str, workspace: str, body: ProjectBitbucketProjectsApi | ProjectBitbucketProjectsApiDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_key`, `workspace`, `body`
- **Params**: `project_key` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `ProjectBitbucketProjectsApi`
- **Returns (raw)**: `ApiResult[ProjectBitbucketProjectsApi, PutWorkspacesByWorkspaceProjectsByProjectKeyErrorBody]`
- **Error**: `PutWorkspacesByWorkspaceProjectsByProjectKeyErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProjectBitbucketProjectsApi` | `bitbucket/models/project_bitbucket_projects_api.py` |
| `ProjectBitbucketProjectsApiDict` | `bitbucket/models/project_bitbucket_projects_api.py` |
| `PutWorkspacesByWorkspaceProjectsByProjectKeyErrorBody` | `bitbucket/errors/put_workspaces_by_workspace_projects_by_project_key_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.projects.put_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user

- **Route**: `PUT /workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(project_key: str, selected_user: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_key`, `selected_user`, `workspace`
- **Params**: `project_key` — path · `selected_user` — path · `workspace` — path
- **Returns (parsed)**: `User`
- **Returns (raw)**: `ApiResult[User, PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody]`
- **Error**: `PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `User` | `bitbucket/models/user.py` |
| `PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody` | `bitbucket/errors/put_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.projects.put_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug

- **Route**: `PUT /workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(group_slug: str, project_key: str, workspace: str, body: BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema | BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchemaDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_slug`, `project_key`, `workspace`, `body`
- **Params**: `group_slug` — path · `project_key` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `ProjectGroupPermission`
- **Returns (raw)**: `ApiResult[ProjectGroupPermission, PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody]`
- **Error**: `PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 402, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema` | `bitbucket/models/bitbucket_apps_permissions_serializers_project_permission_update_schema.py` |
| `BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchemaDict` | `bitbucket/models/bitbucket_apps_permissions_serializers_project_permission_update_schema.py` |
| `ProjectGroupPermission` | `bitbucket/models/project_group_permission.py` |
| `PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody` | `bitbucket/errors/put_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.projects.put_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id

- **Route**: `PUT /workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(project_key: str, selected_user_id: str, workspace: str, body: BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema | BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchemaDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_key`, `selected_user_id`, `workspace`, `body`
- **Params**: `project_key` — path · `selected_user_id` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `ProjectUserPermission`
- **Returns (raw)**: `ApiResult[ProjectUserPermission, PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody]`
- **Error**: `PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 402, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema` | `bitbucket/models/bitbucket_apps_permissions_serializers_project_permission_update_schema.py` |
| `BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchemaDict` | `bitbucket/models/bitbucket_apps_permissions_serializers_project_permission_update_schema.py` |
| `ProjectUserPermission` | `bitbucket/models/project_user_permission.py` |
| `PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody` | `bitbucket/errors/put_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

