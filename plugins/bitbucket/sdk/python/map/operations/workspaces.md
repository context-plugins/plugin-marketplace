<!-- Generated file — do not edit; regenerated with the SDK. -->

# Workspaces — operations

Accessor: `client.workspaces` · Source: `bitbucket/apis/workspaces.py` · 18 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.workspaces.delete_workspaces_by_workspace_hooks_by_uid2

- **Route**: `DELETE /workspaces/{workspace}/hooks/{uid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_workspaces_by_workspace_hooks_by_uid2(uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `uid`, `workspace`
- **Params**: `uid` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteWorkspacesByWorkspaceHooksByUid2ErrorBody]`
- **Error**: `DeleteWorkspacesByWorkspaceHooksByUid2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteWorkspacesByWorkspaceHooksByUid2ErrorBody` | `bitbucket/errors/delete_workspaces_by_workspace_hooks_by_uid2_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.workspaces.get_user_permissions_workspaces

- **Route**: `GET /user/permissions/workspaces`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_user_permissions_workspaces(*, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `q` — query · `sort` — query
- **Returns (parsed)**: `PaginatedWorkspaceMemberships`
- **Returns (raw)**: `ApiResult[PaginatedWorkspaceMemberships, GetUserPermissionsWorkspacesErrorBody]`
- **Error**: `GetUserPermissionsWorkspacesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedWorkspaceMemberships` | `bitbucket/models/paginated_workspace_memberships.py` |
| `GetUserPermissionsWorkspacesErrorBody` | `bitbucket/errors/get_user_permissions_workspaces_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.workspaces.get_user_workspaces

- **Route**: `GET /user/workspaces`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_user_workspaces(*, sort: str | None = None, administrator: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `sort` — query · `administrator` — query
- **Returns (parsed)**: `PaginatedWorkspacePermissions`
- **Returns (raw)**: `ApiResult[PaginatedWorkspacePermissions, GetUserWorkspacesErrorBody]`
- **Error**: `GetUserWorkspacesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedWorkspacePermissions` | `bitbucket/models/paginated_workspace_permissions.py` |
| `GetUserWorkspacesErrorBody` | `bitbucket/errors/get_user_workspaces_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.workspaces.get_user_workspaces_by_workspace_permission

- **Route**: `GET /user/workspaces/{workspace}/permission`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_user_workspaces_by_workspace_permission(workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`
- **Params**: `workspace` — path
- **Returns (parsed)**: `WorkspaceMembership`
- **Returns (raw)**: `ApiResult[WorkspaceMembership, GetUserWorkspacesByWorkspacePermissionErrorBody]`
- **Error**: `GetUserWorkspacesByWorkspacePermissionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WorkspaceMembership` | `bitbucket/models/workspace_membership.py` |
| `GetUserWorkspacesByWorkspacePermissionErrorBody` | `bitbucket/errors/get_user_workspaces_by_workspace_permission_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.workspaces.get_workspaces

- **Route**: `GET /workspaces`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspaces(*, role: Role1BitbucketWorkspacesApiOrStr | None = None, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `role` — query · `q` — query · `sort` — query
- **Returns (parsed)**: `PaginatedWorkspaces`
- **Returns (raw)**: `ApiResult[PaginatedWorkspaces, GetWorkspacesErrorBody]`
- **Error**: `GetWorkspacesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Role1BitbucketWorkspacesApiOrStr` | `bitbucket/models/enums/role1_bitbucket_workspaces_api.py` |
| `PaginatedWorkspaces` | `bitbucket/models/paginated_workspaces.py` |
| `GetWorkspacesErrorBody` | `bitbucket/errors/get_workspaces_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.workspaces.get_workspaces_by_workspace

- **Route**: `GET /workspaces/{workspace}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspaces_by_workspace(workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`
- **Params**: `workspace` — path
- **Returns (parsed)**: `WorkspaceBitbucketWorkspacesApi`
- **Returns (raw)**: `ApiResult[WorkspaceBitbucketWorkspacesApi, GetWorkspacesByWorkspaceErrorBody]`
- **Error**: `GetWorkspacesByWorkspaceErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WorkspaceBitbucketWorkspacesApi` | `bitbucket/models/workspace_bitbucket_workspaces_api.py` |
| `GetWorkspacesByWorkspaceErrorBody` | `bitbucket/errors/get_workspaces_by_workspace_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.workspaces.get_workspaces_by_workspace_hooks2

- **Route**: `GET /workspaces/{workspace}/hooks`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspaces_by_workspace_hooks2(workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`
- **Params**: `workspace` — path
- **Returns (parsed)**: `PaginatedWebhookSubscriptions`
- **Returns (raw)**: `ApiResult[PaginatedWebhookSubscriptions, GetWorkspacesByWorkspaceHooks2ErrorBody]`
- **Error**: `GetWorkspacesByWorkspaceHooks2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedWebhookSubscriptions` | `bitbucket/models/paginated_webhook_subscriptions.py` |
| `GetWorkspacesByWorkspaceHooks2ErrorBody` | `bitbucket/errors/get_workspaces_by_workspace_hooks2_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.workspaces.get_workspaces_by_workspace_hooks_by_uid2

- **Route**: `GET /workspaces/{workspace}/hooks/{uid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspaces_by_workspace_hooks_by_uid2(uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `uid`, `workspace`
- **Params**: `uid` — path · `workspace` — path
- **Returns (parsed)**: `WebhookSubscription`
- **Returns (raw)**: `ApiResult[WebhookSubscription, GetWorkspacesByWorkspaceHooksByUid2ErrorBody]`
- **Error**: `GetWorkspacesByWorkspaceHooksByUid2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookSubscription` | `bitbucket/models/webhook_subscription.py` |
| `GetWorkspacesByWorkspaceHooksByUid2ErrorBody` | `bitbucket/errors/get_workspaces_by_workspace_hooks_by_uid2_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.workspaces.get_workspaces_by_workspace_members

- **Route**: `GET /workspaces/{workspace}/members`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspaces_by_workspace_members(workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`
- **Params**: `workspace` — path
- **Returns (parsed)**: `PaginatedWorkspaceMemberships`
- **Returns (raw)**: `ApiResult[PaginatedWorkspaceMemberships, GetWorkspacesByWorkspaceMembersErrorBody]`
- **Error**: `GetWorkspacesByWorkspaceMembersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedWorkspaceMemberships` | `bitbucket/models/paginated_workspace_memberships.py` |
| `GetWorkspacesByWorkspaceMembersErrorBody` | `bitbucket/errors/get_workspaces_by_workspace_members_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.workspaces.get_workspaces_by_workspace_members_by_member

- **Route**: `GET /workspaces/{workspace}/members/{member}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspaces_by_workspace_members_by_member(member: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `member`, `workspace`
- **Params**: `member` — path · `workspace` — path
- **Returns (parsed)**: `WorkspaceMembership`
- **Returns (raw)**: `ApiResult[WorkspaceMembership, GetWorkspacesByWorkspaceMembersByMemberErrorBody]`
- **Error**: `GetWorkspacesByWorkspaceMembersByMemberErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WorkspaceMembership` | `bitbucket/models/workspace_membership.py` |
| `GetWorkspacesByWorkspaceMembersByMemberErrorBody` | `bitbucket/errors/get_workspaces_by_workspace_members_by_member_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.workspaces.get_workspaces_by_workspace_permissions

- **Route**: `GET /workspaces/{workspace}/permissions`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspaces_by_workspace_permissions(workspace: str, *, q: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`
- **Params**: `workspace` — path · `q` — query
- **Returns (parsed)**: `PaginatedWorkspaceMemberships`
- **Returns (raw)**: `ApiResult[PaginatedWorkspaceMemberships, GetWorkspacesByWorkspacePermissionsErrorBody]`
- **Error**: `GetWorkspacesByWorkspacePermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedWorkspaceMemberships` | `bitbucket/models/paginated_workspace_memberships.py` |
| `GetWorkspacesByWorkspacePermissionsErrorBody` | `bitbucket/errors/get_workspaces_by_workspace_permissions_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.workspaces.get_workspaces_by_workspace_permissions_repositories

- **Route**: `GET /workspaces/{workspace}/permissions/repositories`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspaces_by_workspace_permissions_repositories(workspace: str, *, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`
- **Params**: `workspace` — path · `q` — query · `sort` — query
- **Returns (parsed)**: `PaginatedRepositoryPermissions`
- **Returns (raw)**: `ApiResult[PaginatedRepositoryPermissions, GetWorkspacesByWorkspacePermissionsRepositoriesErrorBody]`
- **Error**: `GetWorkspacesByWorkspacePermissionsRepositoriesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedRepositoryPermissions` | `bitbucket/models/paginated_repository_permissions.py` |
| `GetWorkspacesByWorkspacePermissionsRepositoriesErrorBody` | `bitbucket/errors/get_workspaces_by_workspace_permissions_repositories_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.workspaces.get_workspaces_by_workspace_permissions_repositories_by_repo_slug

- **Route**: `GET /workspaces/{workspace}/permissions/repositories/{repo_slug}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspaces_by_workspace_permissions_repositories_by_repo_slug(repo_slug: str, workspace: str, *, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path · `q` — query · `sort` — query
- **Returns (parsed)**: `PaginatedRepositoryPermissions`
- **Returns (raw)**: `ApiResult[PaginatedRepositoryPermissions, GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugErrorBody]`
- **Error**: `GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedRepositoryPermissions` | `bitbucket/models/paginated_repository_permissions.py` |
| `GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugErrorBody` | `bitbucket/errors/get_workspaces_by_workspace_permissions_repositories_by_repo_slug_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.workspaces.get_workspaces_by_workspace_projects

- **Route**: `GET /workspaces/{workspace}/projects`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspaces_by_workspace_projects(workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`
- **Params**: `workspace` — path
- **Returns (parsed)**: `PaginatedProjects`
- **Returns (raw)**: `ApiResult[PaginatedProjects, GetWorkspacesByWorkspaceProjectsErrorBody]`
- **Error**: `GetWorkspacesByWorkspaceProjectsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedProjects` | `bitbucket/models/paginated_projects.py` |
| `GetWorkspacesByWorkspaceProjectsErrorBody` | `bitbucket/errors/get_workspaces_by_workspace_projects_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.workspaces.get_workspaces_by_workspace_projects_by_project_key2

- **Route**: `GET /workspaces/{workspace}/projects/{project_key}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspaces_by_workspace_projects_by_project_key2(project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_key`, `workspace`
- **Params**: `project_key` — path · `workspace` — path
- **Returns (parsed)**: `ProjectBitbucketDeploymentsApi`
- **Returns (raw)**: `ApiResult[ProjectBitbucketDeploymentsApi, GetWorkspacesByWorkspaceProjectsByProjectKey2ErrorBody]`
- **Error**: `GetWorkspacesByWorkspaceProjectsByProjectKey2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProjectBitbucketDeploymentsApi` | `bitbucket/models/project_bitbucket_deployments_api.py` |
| `GetWorkspacesByWorkspaceProjectsByProjectKey2ErrorBody` | `bitbucket/errors/get_workspaces_by_workspace_projects_by_project_key2_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.workspaces.get_workspaces_by_workspace_pullrequests_by_selected_user2

- **Route**: `GET /workspaces/{workspace}/pullrequests/{selected_user}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspaces_by_workspace_pullrequests_by_selected_user2(selected_user: str, workspace: str, *, state: State2BitbucketWorkspacesApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `selected_user`, `workspace`
- **Params**: `selected_user` — path · `workspace` — path · `state` — query
- **Returns (parsed)**: `PaginatedPullRequests`
- **Returns (raw)**: `ApiResult[PaginatedPullRequests, GetWorkspacesByWorkspacePullrequestsBySelectedUser2ErrorBody]`
- **Error**: `GetWorkspacesByWorkspacePullrequestsBySelectedUser2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `State2BitbucketWorkspacesApiOrStr` | `bitbucket/models/enums/state2_bitbucket_workspaces_api.py` |
| `PaginatedPullRequests` | `bitbucket/models/paginated_pull_requests.py` |
| `GetWorkspacesByWorkspacePullrequestsBySelectedUser2ErrorBody` | `bitbucket/errors/get_workspaces_by_workspace_pullrequests_by_selected_user2_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.workspaces.post_workspaces_by_workspace_hooks2

- **Route**: `POST /workspaces/{workspace}/hooks`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_workspaces_by_workspace_hooks2(workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`
- **Params**: `workspace` — path
- **Returns (parsed)**: `WebhookSubscription`
- **Returns (raw)**: `ApiResult[WebhookSubscription, PostWorkspacesByWorkspaceHooks2ErrorBody]`
- **Error**: `PostWorkspacesByWorkspaceHooks2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookSubscription` | `bitbucket/models/webhook_subscription.py` |
| `PostWorkspacesByWorkspaceHooks2ErrorBody` | `bitbucket/errors/post_workspaces_by_workspace_hooks2_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.workspaces.put_workspaces_by_workspace_hooks_by_uid2

- **Route**: `PUT /workspaces/{workspace}/hooks/{uid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_workspaces_by_workspace_hooks_by_uid2(uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `uid`, `workspace`
- **Params**: `uid` — path · `workspace` — path
- **Returns (parsed)**: `WebhookSubscription`
- **Returns (raw)**: `ApiResult[WebhookSubscription, PutWorkspacesByWorkspaceHooksByUid2ErrorBody]`
- **Error**: `PutWorkspacesByWorkspaceHooksByUid2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookSubscription` | `bitbucket/models/webhook_subscription.py` |
| `PutWorkspacesByWorkspaceHooksByUid2ErrorBody` | `bitbucket/errors/put_workspaces_by_workspace_hooks_by_uid2_error.py` |
| `Error` | `bitbucket/models/error.py` |

