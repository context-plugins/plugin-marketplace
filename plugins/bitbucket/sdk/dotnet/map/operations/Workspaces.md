<!-- Generated file — do not edit; regenerated with the SDK. -->

# Workspaces — operations

Accessor: `client.Workspaces` · Source: `src/Bitbucket/Api/Workspaces.cs` · 18 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteWorkspacesByWorkspaceHooksByUid2

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteWorkspacesByWorkspaceHooksByUid2(DeleteWorkspacesByWorkspaceHooksByUid2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Uid`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteWorkspacesByWorkspaceHooksByUid2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWorkspacesByWorkspaceHooksByUid2Request` | `src/Bitbucket/Requests/Workspaces/DeleteWorkspacesByWorkspaceHooksByUid2Request.cs` |
| `DeleteWorkspacesByWorkspaceHooksByUid2Error` | `src/Bitbucket/Errors/DeleteWorkspacesByWorkspaceHooksByUid2Error.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetUserPermissionsWorkspaces

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetUserPermissionsWorkspaces(GetUserPermissionsWorkspacesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `q` ← `Q`, `sort` ← `Sort`
- **Returns**: `PaginatedWorkspaceMemberships`
- **Error**: `ApiException<GetUserPermissionsWorkspacesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUserPermissionsWorkspacesRequest` | `src/Bitbucket/Requests/Workspaces/GetUserPermissionsWorkspacesRequest.cs` |
| `PaginatedWorkspaceMemberships` | `src/Bitbucket/Models/PaginatedWorkspaceMemberships.cs` |
| `GetUserPermissionsWorkspacesError` | `src/Bitbucket/Errors/GetUserPermissionsWorkspacesError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetUserWorkspaces

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetUserWorkspaces(GetUserWorkspacesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `sort` ← `Sort`, `administrator` ← `Administrator`
- **Returns**: `PaginatedWorkspacePermissions`
- **Error**: `ApiException<GetUserWorkspacesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUserWorkspacesRequest` | `src/Bitbucket/Requests/Workspaces/GetUserWorkspacesRequest.cs` |
| `PaginatedWorkspacePermissions` | `src/Bitbucket/Models/PaginatedWorkspacePermissions.cs` |
| `GetUserWorkspacesError` | `src/Bitbucket/Errors/GetUserWorkspacesError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetUserWorkspacesByWorkspacePermission

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetUserWorkspacesByWorkspacePermission(GetUserWorkspacesByWorkspacePermissionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`
- **Returns**: `WorkspaceMembership`
- **Error**: `ApiException<GetUserWorkspacesByWorkspacePermissionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUserWorkspacesByWorkspacePermissionRequest` | `src/Bitbucket/Requests/Workspaces/GetUserWorkspacesByWorkspacePermissionRequest.cs` |
| `WorkspaceMembership` | `src/Bitbucket/Models/AllOf/WorkspaceMembership.cs` |
| `GetUserWorkspacesByWorkspacePermissionError` | `src/Bitbucket/Errors/GetUserWorkspacesByWorkspacePermissionError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspaces

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspaces(GetWorkspacesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `role` ← `Role`, `q` ← `Q`, `sort` ← `Sort`
- **Returns**: `PaginatedWorkspaces`
- **Error**: `ApiException<GetWorkspacesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesRequest` | `src/Bitbucket/Requests/Workspaces/GetWorkspacesRequest.cs` |
| `Role1BitbucketWorkspacesApi` | `src/Bitbucket/Models/Enums/Role1BitbucketWorkspacesApi.cs` |
| `PaginatedWorkspaces` | `src/Bitbucket/Models/PaginatedWorkspaces.cs` |
| `GetWorkspacesError` | `src/Bitbucket/Errors/GetWorkspacesError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspacesByWorkspace

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspacesByWorkspace(GetWorkspacesByWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`
- **Returns**: `WorkspaceBitbucketWorkspacesApi`
- **Error**: `ApiException<GetWorkspacesByWorkspaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesByWorkspaceRequest` | `src/Bitbucket/Requests/Workspaces/GetWorkspacesByWorkspaceRequest.cs` |
| `WorkspaceBitbucketWorkspacesApi` | `src/Bitbucket/Models/AllOf/WorkspaceBitbucketWorkspacesApi.cs` |
| `GetWorkspacesByWorkspaceError` | `src/Bitbucket/Errors/GetWorkspacesByWorkspaceError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspacesByWorkspaceHooks2

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspacesByWorkspaceHooks2(GetWorkspacesByWorkspaceHooks2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`
- **Returns**: `PaginatedWebhookSubscriptions`
- **Error**: `ApiException<GetWorkspacesByWorkspaceHooks2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesByWorkspaceHooks2Request` | `src/Bitbucket/Requests/Workspaces/GetWorkspacesByWorkspaceHooks2Request.cs` |
| `PaginatedWebhookSubscriptions` | `src/Bitbucket/Models/PaginatedWebhookSubscriptions.cs` |
| `GetWorkspacesByWorkspaceHooks2Error` | `src/Bitbucket/Errors/GetWorkspacesByWorkspaceHooks2Error.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspacesByWorkspaceHooksByUid2

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspacesByWorkspaceHooksByUid2(GetWorkspacesByWorkspaceHooksByUid2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Uid`, `Workspace`
- **Returns**: `WebhookSubscription`
- **Error**: `ApiException<GetWorkspacesByWorkspaceHooksByUid2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesByWorkspaceHooksByUid2Request` | `src/Bitbucket/Requests/Workspaces/GetWorkspacesByWorkspaceHooksByUid2Request.cs` |
| `WebhookSubscription` | `src/Bitbucket/Models/AllOf/WebhookSubscription.cs` |
| `GetWorkspacesByWorkspaceHooksByUid2Error` | `src/Bitbucket/Errors/GetWorkspacesByWorkspaceHooksByUid2Error.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspacesByWorkspaceMembers

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspacesByWorkspaceMembers(GetWorkspacesByWorkspaceMembersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`
- **Returns**: `PaginatedWorkspaceMemberships`
- **Error**: `ApiException<GetWorkspacesByWorkspaceMembersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesByWorkspaceMembersRequest` | `src/Bitbucket/Requests/Workspaces/GetWorkspacesByWorkspaceMembersRequest.cs` |
| `PaginatedWorkspaceMemberships` | `src/Bitbucket/Models/PaginatedWorkspaceMemberships.cs` |
| `GetWorkspacesByWorkspaceMembersError` | `src/Bitbucket/Errors/GetWorkspacesByWorkspaceMembersError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspacesByWorkspaceMembersByMember

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspacesByWorkspaceMembersByMember(GetWorkspacesByWorkspaceMembersByMemberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Member`, `Workspace`
- **Returns**: `WorkspaceMembership`
- **Error**: `ApiException<GetWorkspacesByWorkspaceMembersByMemberError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesByWorkspaceMembersByMemberRequest` | `src/Bitbucket/Requests/Workspaces/GetWorkspacesByWorkspaceMembersByMemberRequest.cs` |
| `WorkspaceMembership` | `src/Bitbucket/Models/AllOf/WorkspaceMembership.cs` |
| `GetWorkspacesByWorkspaceMembersByMemberError` | `src/Bitbucket/Errors/GetWorkspacesByWorkspaceMembersByMemberError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspacesByWorkspacePermissions

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspacesByWorkspacePermissions(GetWorkspacesByWorkspacePermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`
- **Query params (wire ← C#)**: `q` ← `Q`
- **Returns**: `PaginatedWorkspaceMemberships`
- **Error**: `ApiException<GetWorkspacesByWorkspacePermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesByWorkspacePermissionsRequest` | `src/Bitbucket/Requests/Workspaces/GetWorkspacesByWorkspacePermissionsRequest.cs` |
| `PaginatedWorkspaceMemberships` | `src/Bitbucket/Models/PaginatedWorkspaceMemberships.cs` |
| `GetWorkspacesByWorkspacePermissionsError` | `src/Bitbucket/Errors/GetWorkspacesByWorkspacePermissionsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspacesByWorkspacePermissionsRepositories

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspacesByWorkspacePermissionsRepositories(GetWorkspacesByWorkspacePermissionsRepositoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`
- **Query params (wire ← C#)**: `q` ← `Q`, `sort` ← `Sort`
- **Returns**: `PaginatedRepositoryPermissions`
- **Error**: `ApiException<GetWorkspacesByWorkspacePermissionsRepositoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesByWorkspacePermissionsRepositoriesRequest` | `src/Bitbucket/Requests/Workspaces/GetWorkspacesByWorkspacePermissionsRepositoriesRequest.cs` |
| `PaginatedRepositoryPermissions` | `src/Bitbucket/Models/PaginatedRepositoryPermissions.cs` |
| `GetWorkspacesByWorkspacePermissionsRepositoriesError` | `src/Bitbucket/Errors/GetWorkspacesByWorkspacePermissionsRepositoriesError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlug

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlug(GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Query params (wire ← C#)**: `q` ← `Q`, `sort` ← `Sort`
- **Returns**: `PaginatedRepositoryPermissions`
- **Error**: `ApiException<GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugRequest` | `src/Bitbucket/Requests/Workspaces/GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugRequest.cs` |
| `PaginatedRepositoryPermissions` | `src/Bitbucket/Models/PaginatedRepositoryPermissions.cs` |
| `GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugError` | `src/Bitbucket/Errors/GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspacesByWorkspaceProjects

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspacesByWorkspaceProjects(GetWorkspacesByWorkspaceProjectsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`
- **Returns**: `PaginatedProjects`
- **Error**: `ApiException<GetWorkspacesByWorkspaceProjectsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesByWorkspaceProjectsRequest` | `src/Bitbucket/Requests/Workspaces/GetWorkspacesByWorkspaceProjectsRequest.cs` |
| `PaginatedProjects` | `src/Bitbucket/Models/PaginatedProjects.cs` |
| `GetWorkspacesByWorkspaceProjectsError` | `src/Bitbucket/Errors/GetWorkspacesByWorkspaceProjectsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspacesByWorkspaceProjectsByProjectKey2

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspacesByWorkspaceProjectsByProjectKey2(GetWorkspacesByWorkspaceProjectsByProjectKey2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectKey`, `Workspace`
- **Returns**: `ProjectBitbucketDeploymentsApi`
- **Error**: `ApiException<GetWorkspacesByWorkspaceProjectsByProjectKey2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesByWorkspaceProjectsByProjectKey2Request` | `src/Bitbucket/Requests/Workspaces/GetWorkspacesByWorkspaceProjectsByProjectKey2Request.cs` |
| `ProjectBitbucketDeploymentsApi` | `src/Bitbucket/Models/AllOf/ProjectBitbucketDeploymentsApi.cs` |
| `GetWorkspacesByWorkspaceProjectsByProjectKey2Error` | `src/Bitbucket/Errors/GetWorkspacesByWorkspaceProjectsByProjectKey2Error.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspacesByWorkspacePullrequestsBySelectedUser2

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspacesByWorkspacePullrequestsBySelectedUser2(GetWorkspacesByWorkspacePullrequestsBySelectedUser2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SelectedUser`, `Workspace`
- **Query params (wire ← C#)**: `state` ← `State`
- **Returns**: `PaginatedPullRequests`
- **Error**: `ApiException<GetWorkspacesByWorkspacePullrequestsBySelectedUser2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesByWorkspacePullrequestsBySelectedUser2Request` | `src/Bitbucket/Requests/Workspaces/GetWorkspacesByWorkspacePullrequestsBySelectedUser2Request.cs` |
| `State2BitbucketWorkspacesApi` | `src/Bitbucket/Models/Enums/State2BitbucketWorkspacesApi.cs` |
| `PaginatedPullRequests` | `src/Bitbucket/Models/PaginatedPullRequests.cs` |
| `GetWorkspacesByWorkspacePullrequestsBySelectedUser2Error` | `src/Bitbucket/Errors/GetWorkspacesByWorkspacePullrequestsBySelectedUser2Error.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostWorkspacesByWorkspaceHooks2

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostWorkspacesByWorkspaceHooks2(PostWorkspacesByWorkspaceHooks2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`
- **Returns**: `WebhookSubscription`
- **Error**: `ApiException<PostWorkspacesByWorkspaceHooks2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostWorkspacesByWorkspaceHooks2Request` | `src/Bitbucket/Requests/Workspaces/PostWorkspacesByWorkspaceHooks2Request.cs` |
| `WebhookSubscription` | `src/Bitbucket/Models/AllOf/WebhookSubscription.cs` |
| `PostWorkspacesByWorkspaceHooks2Error` | `src/Bitbucket/Errors/PostWorkspacesByWorkspaceHooks2Error.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutWorkspacesByWorkspaceHooksByUid2

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutWorkspacesByWorkspaceHooksByUid2(PutWorkspacesByWorkspaceHooksByUid2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Uid`, `Workspace`
- **Returns**: `WebhookSubscription`
- **Error**: `ApiException<PutWorkspacesByWorkspaceHooksByUid2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutWorkspacesByWorkspaceHooksByUid2Request` | `src/Bitbucket/Requests/Workspaces/PutWorkspacesByWorkspaceHooksByUid2Request.cs` |
| `WebhookSubscription` | `src/Bitbucket/Models/AllOf/WebhookSubscription.cs` |
| `PutWorkspacesByWorkspaceHooksByUid2Error` | `src/Bitbucket/Errors/PutWorkspacesByWorkspaceHooksByUid2Error.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

