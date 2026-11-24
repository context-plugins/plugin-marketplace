<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.WebhooksApi` · Source: `src/Bitbucket/Api/WebhooksApi.cs` · 12 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2(DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Uid`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2Request` | `src/Bitbucket/Requests/WebhooksApi/DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2Request.cs` |
| `DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2Error` | `src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2Error.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteWorkspacesByWorkspaceHooksByUid

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteWorkspacesByWorkspaceHooksByUid(DeleteWorkspacesByWorkspaceHooksByUidRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Uid`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteWorkspacesByWorkspaceHooksByUidError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWorkspacesByWorkspaceHooksByUidRequest` | `src/Bitbucket/Requests/WebhooksApi/DeleteWorkspacesByWorkspaceHooksByUidRequest.cs` |
| `DeleteWorkspacesByWorkspaceHooksByUidError` | `src/Bitbucket/Errors/DeleteWorkspacesByWorkspaceHooksByUidError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetHookEvents

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetHookEvents(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `SubjectTypes`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SubjectTypes` | `src/Bitbucket/Models/SubjectTypes.cs` |

### GetHookEventsBySubjectType

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetHookEventsBySubjectType(GetHookEventsBySubjectTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubjectType`
- **Returns**: `PaginatedHookEvents`
- **Error**: `ApiException<GetHookEventsBySubjectTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetHookEventsBySubjectTypeRequest` | `src/Bitbucket/Requests/WebhooksApi/GetHookEventsBySubjectTypeRequest.cs` |
| `SubjectType1` | `src/Bitbucket/Models/Enums/SubjectType1.cs` |
| `PaginatedHookEvents` | `src/Bitbucket/Models/PaginatedHookEvents.cs` |
| `GetHookEventsBySubjectTypeError` | `src/Bitbucket/Errors/GetHookEventsBySubjectTypeError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugHooks2

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugHooks2(GetRepositoriesByWorkspaceByRepoSlugHooks2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `PaginatedWebhookSubscriptions`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugHooks2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugHooks2Request` | `src/Bitbucket/Requests/WebhooksApi/GetRepositoriesByWorkspaceByRepoSlugHooks2Request.cs` |
| `PaginatedWebhookSubscriptions` | `src/Bitbucket/Models/PaginatedWebhookSubscriptions.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugHooks2Error` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugHooks2Error.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugHooksByUid2

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugHooksByUid2(GetRepositoriesByWorkspaceByRepoSlugHooksByUid2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Uid`, `Workspace`
- **Returns**: `WebhookSubscription`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugHooksByUid2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugHooksByUid2Request` | `src/Bitbucket/Requests/WebhooksApi/GetRepositoriesByWorkspaceByRepoSlugHooksByUid2Request.cs` |
| `WebhookSubscription` | `src/Bitbucket/Models/AllOf/WebhookSubscription.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugHooksByUid2Error` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugHooksByUid2Error.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspacesByWorkspaceHooks

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspacesByWorkspaceHooks(GetWorkspacesByWorkspaceHooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`
- **Returns**: `PaginatedWebhookSubscriptions`
- **Error**: `ApiException<GetWorkspacesByWorkspaceHooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesByWorkspaceHooksRequest` | `src/Bitbucket/Requests/WebhooksApi/GetWorkspacesByWorkspaceHooksRequest.cs` |
| `PaginatedWebhookSubscriptions` | `src/Bitbucket/Models/PaginatedWebhookSubscriptions.cs` |
| `GetWorkspacesByWorkspaceHooksError` | `src/Bitbucket/Errors/GetWorkspacesByWorkspaceHooksError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspacesByWorkspaceHooksByUid

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspacesByWorkspaceHooksByUid(GetWorkspacesByWorkspaceHooksByUidRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Uid`, `Workspace`
- **Returns**: `WebhookSubscription`
- **Error**: `ApiException<GetWorkspacesByWorkspaceHooksByUidError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesByWorkspaceHooksByUidRequest` | `src/Bitbucket/Requests/WebhooksApi/GetWorkspacesByWorkspaceHooksByUidRequest.cs` |
| `WebhookSubscription` | `src/Bitbucket/Models/AllOf/WebhookSubscription.cs` |
| `GetWorkspacesByWorkspaceHooksByUidError` | `src/Bitbucket/Errors/GetWorkspacesByWorkspaceHooksByUidError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugHooks2

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugHooks2(PostRepositoriesByWorkspaceByRepoSlugHooks2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `WebhookSubscription`
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugHooks2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugHooks2Request` | `src/Bitbucket/Requests/WebhooksApi/PostRepositoriesByWorkspaceByRepoSlugHooks2Request.cs` |
| `WebhookSubscription` | `src/Bitbucket/Models/AllOf/WebhookSubscription.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugHooks2Error` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugHooks2Error.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostWorkspacesByWorkspaceHooks

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostWorkspacesByWorkspaceHooks(PostWorkspacesByWorkspaceHooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`
- **Returns**: `WebhookSubscription`
- **Error**: `ApiException<PostWorkspacesByWorkspaceHooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostWorkspacesByWorkspaceHooksRequest` | `src/Bitbucket/Requests/WebhooksApi/PostWorkspacesByWorkspaceHooksRequest.cs` |
| `WebhookSubscription` | `src/Bitbucket/Models/AllOf/WebhookSubscription.cs` |
| `PostWorkspacesByWorkspaceHooksError` | `src/Bitbucket/Errors/PostWorkspacesByWorkspaceHooksError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutRepositoriesByWorkspaceByRepoSlugHooksByUid2

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutRepositoriesByWorkspaceByRepoSlugHooksByUid2(PutRepositoriesByWorkspaceByRepoSlugHooksByUid2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Uid`, `Workspace`
- **Returns**: `WebhookSubscription`
- **Error**: `ApiException<PutRepositoriesByWorkspaceByRepoSlugHooksByUid2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutRepositoriesByWorkspaceByRepoSlugHooksByUid2Request` | `src/Bitbucket/Requests/WebhooksApi/PutRepositoriesByWorkspaceByRepoSlugHooksByUid2Request.cs` |
| `WebhookSubscription` | `src/Bitbucket/Models/AllOf/WebhookSubscription.cs` |
| `PutRepositoriesByWorkspaceByRepoSlugHooksByUid2Error` | `src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugHooksByUid2Error.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutWorkspacesByWorkspaceHooksByUid

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutWorkspacesByWorkspaceHooksByUid(PutWorkspacesByWorkspaceHooksByUidRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Uid`, `Workspace`
- **Returns**: `WebhookSubscription`
- **Error**: `ApiException<PutWorkspacesByWorkspaceHooksByUidError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutWorkspacesByWorkspaceHooksByUidRequest` | `src/Bitbucket/Requests/WebhooksApi/PutWorkspacesByWorkspaceHooksByUidRequest.cs` |
| `WebhookSubscription` | `src/Bitbucket/Models/AllOf/WebhookSubscription.cs` |
| `PutWorkspacesByWorkspaceHooksByUidError` | `src/Bitbucket/Errors/PutWorkspacesByWorkspaceHooksByUidError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

