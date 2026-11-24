<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.webhooks_api` · Source: `bitbucket/apis/webhooks_api.py` · 12 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.webhooks_api.delete_repositories_by_workspace_by_repo_slug_hooks_by_uid2

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/hooks/{uid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repositories_by_workspace_by_repo_slug_hooks_by_uid2(repo_slug: str, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `uid`, `workspace`
- **Params**: `repo_slug` — path · `uid` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody]`
- **Error**: `DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody` | `bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_hooks_by_uid2_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.webhooks_api.delete_workspaces_by_workspace_hooks_by_uid

- **Route**: `DELETE /workspaces/{workspace}/hooks/{uid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_workspaces_by_workspace_hooks_by_uid(uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `uid`, `workspace`
- **Params**: `uid` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteWorkspacesByWorkspaceHooksByUidErrorBody]`
- **Error**: `DeleteWorkspacesByWorkspaceHooksByUidErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteWorkspacesByWorkspaceHooksByUidErrorBody` | `bitbucket/errors/delete_workspaces_by_workspace_hooks_by_uid_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.webhooks_api.get_hook_events

- **Route**: `GET /hook_events`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_hook_events(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `SubjectTypes`
- **Returns (raw)**: `ApiResult[SubjectTypes, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `SubjectTypes` | `bitbucket/models/subject_types.py` |

### client.webhooks_api.get_hook_events_by_subject_type

- **Route**: `GET /hook_events/{subject_type}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_hook_events_by_subject_type(subject_type: SubjectType1OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `subject_type`
- **Params**: `subject_type` — path
- **Returns (parsed)**: `PaginatedHookEvents`
- **Returns (raw)**: `ApiResult[PaginatedHookEvents, GetHookEventsBySubjectTypeErrorBody]`
- **Error**: `GetHookEventsBySubjectTypeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SubjectType1OrStr` | `bitbucket/models/enums/subject_type1.py` |
| `PaginatedHookEvents` | `bitbucket/models/paginated_hook_events.py` |
| `GetHookEventsBySubjectTypeErrorBody` | `bitbucket/errors/get_hook_events_by_subject_type_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.webhooks_api.get_repositories_by_workspace_by_repo_slug_hooks2

- **Route**: `GET /repositories/{workspace}/{repo_slug}/hooks`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_hooks2(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `PaginatedWebhookSubscriptions`
- **Returns (raw)**: `ApiResult[PaginatedWebhookSubscriptions, GetRepositoriesByWorkspaceByRepoSlugHooks2ErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugHooks2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedWebhookSubscriptions` | `bitbucket/models/paginated_webhook_subscriptions.py` |
| `GetRepositoriesByWorkspaceByRepoSlugHooks2ErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_hooks2_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.webhooks_api.get_repositories_by_workspace_by_repo_slug_hooks_by_uid2

- **Route**: `GET /repositories/{workspace}/{repo_slug}/hooks/{uid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_hooks_by_uid2(repo_slug: str, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `uid`, `workspace`
- **Params**: `repo_slug` — path · `uid` — path · `workspace` — path
- **Returns (parsed)**: `WebhookSubscription`
- **Returns (raw)**: `ApiResult[WebhookSubscription, GetRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookSubscription` | `bitbucket/models/webhook_subscription.py` |
| `GetRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_hooks_by_uid2_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.webhooks_api.get_workspaces_by_workspace_hooks

- **Route**: `GET /workspaces/{workspace}/hooks`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspaces_by_workspace_hooks(workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`
- **Params**: `workspace` — path
- **Returns (parsed)**: `PaginatedWebhookSubscriptions`
- **Returns (raw)**: `ApiResult[PaginatedWebhookSubscriptions, GetWorkspacesByWorkspaceHooksErrorBody]`
- **Error**: `GetWorkspacesByWorkspaceHooksErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedWebhookSubscriptions` | `bitbucket/models/paginated_webhook_subscriptions.py` |
| `GetWorkspacesByWorkspaceHooksErrorBody` | `bitbucket/errors/get_workspaces_by_workspace_hooks_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.webhooks_api.get_workspaces_by_workspace_hooks_by_uid

- **Route**: `GET /workspaces/{workspace}/hooks/{uid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspaces_by_workspace_hooks_by_uid(uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `uid`, `workspace`
- **Params**: `uid` — path · `workspace` — path
- **Returns (parsed)**: `WebhookSubscription`
- **Returns (raw)**: `ApiResult[WebhookSubscription, GetWorkspacesByWorkspaceHooksByUidErrorBody]`
- **Error**: `GetWorkspacesByWorkspaceHooksByUidErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookSubscription` | `bitbucket/models/webhook_subscription.py` |
| `GetWorkspacesByWorkspaceHooksByUidErrorBody` | `bitbucket/errors/get_workspaces_by_workspace_hooks_by_uid_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.webhooks_api.post_repositories_by_workspace_by_repo_slug_hooks2

- **Route**: `POST /repositories/{workspace}/{repo_slug}/hooks`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_hooks2(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `WebhookSubscription`
- **Returns (raw)**: `ApiResult[WebhookSubscription, PostRepositoriesByWorkspaceByRepoSlugHooks2ErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugHooks2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookSubscription` | `bitbucket/models/webhook_subscription.py` |
| `PostRepositoriesByWorkspaceByRepoSlugHooks2ErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_hooks2_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.webhooks_api.post_workspaces_by_workspace_hooks

- **Route**: `POST /workspaces/{workspace}/hooks`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_workspaces_by_workspace_hooks(workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`
- **Params**: `workspace` — path
- **Returns (parsed)**: `WebhookSubscription`
- **Returns (raw)**: `ApiResult[WebhookSubscription, PostWorkspacesByWorkspaceHooksErrorBody]`
- **Error**: `PostWorkspacesByWorkspaceHooksErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookSubscription` | `bitbucket/models/webhook_subscription.py` |
| `PostWorkspacesByWorkspaceHooksErrorBody` | `bitbucket/errors/post_workspaces_by_workspace_hooks_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.webhooks_api.put_repositories_by_workspace_by_repo_slug_hooks_by_uid2

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/hooks/{uid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_repositories_by_workspace_by_repo_slug_hooks_by_uid2(repo_slug: str, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `uid`, `workspace`
- **Params**: `repo_slug` — path · `uid` — path · `workspace` — path
- **Returns (parsed)**: `WebhookSubscription`
- **Returns (raw)**: `ApiResult[WebhookSubscription, PutRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody]`
- **Error**: `PutRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookSubscription` | `bitbucket/models/webhook_subscription.py` |
| `PutRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody` | `bitbucket/errors/put_repositories_by_workspace_by_repo_slug_hooks_by_uid2_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.webhooks_api.put_workspaces_by_workspace_hooks_by_uid

- **Route**: `PUT /workspaces/{workspace}/hooks/{uid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_workspaces_by_workspace_hooks_by_uid(uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `uid`, `workspace`
- **Params**: `uid` — path · `workspace` — path
- **Returns (parsed)**: `WebhookSubscription`
- **Returns (raw)**: `ApiResult[WebhookSubscription, PutWorkspacesByWorkspaceHooksByUidErrorBody]`
- **Error**: `PutWorkspacesByWorkspaceHooksByUidErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookSubscription` | `bitbucket/models/webhook_subscription.py` |
| `PutWorkspacesByWorkspaceHooksByUidErrorBody` | `bitbucket/errors/put_workspaces_by_workspace_hooks_by_uid_error.py` |
| `Error` | `bitbucket/models/error.py` |

