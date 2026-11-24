<!-- Generated file — do not edit; regenerated with the SDK. -->

# Browsers — operations

Accessor: `client.Browsers` · Source: `src/BrowserUse/Api/Browsers.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateBrowserSessionBrowsersPost

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `CreateBrowserSessionBrowsersPost(CreateBrowserSessionBrowsersPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BrowserSessionItemView`
- **Error**: `ApiException<CreateBrowserSessionBrowsersPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiKeySpendLimitError([NotNullWhen(true)] out ApiKeySpendLimitError? value)` [402] · `TryGetSessionTimeoutLimitExceededError([NotNullWhen(true)] out SessionTimeoutLimitExceededError? value)` [403] · `TryGetProfileNotFoundError([NotNullWhen(true)] out ProfileNotFoundError? value)` [404] · `TryGetValidationError([NotNullWhen(true)] out ValidationError? value)` [422] · `TryGetTooManyConcurrentActiveSessionsError([NotNullWhen(true)] out TooManyConcurrentActiveSessionsError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBrowserSessionBrowsersPostRequest` | `src/BrowserUse/Requests/Browsers/CreateBrowserSessionBrowsersPostRequest.cs` |
| `CreateBrowserSessionRequest` | `src/BrowserUse/Models/CreateBrowserSessionRequest.cs` |
| `BrowserSessionItemView` | `src/BrowserUse/Models/BrowserSessionItemView.cs` |
| `CreateBrowserSessionBrowsersPostError` | `src/BrowserUse/Errors/CreateBrowserSessionBrowsersPostError.cs` |
| `ApiKeySpendLimitError` | `src/BrowserUse/Models/ApiKeySpendLimitError.cs` |
| `SessionTimeoutLimitExceededError` | `src/BrowserUse/Models/SessionTimeoutLimitExceededError.cs` |
| `ProfileNotFoundError` | `src/BrowserUse/Models/ProfileNotFoundError.cs` |
| `ValidationError` | `src/BrowserUse/Models/ValidationError.cs` |
| `TooManyConcurrentActiveSessionsError` | `src/BrowserUse/Models/TooManyConcurrentActiveSessionsError.cs` |

### GetBrowserSessionBrowsersSessionIdGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetBrowserSessionBrowsersSessionIdGet(GetBrowserSessionBrowsersSessionIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SessionId`
- **Returns**: `BrowserSessionView`
- **Error**: `ApiException<GetBrowserSessionBrowsersSessionIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetSessionNotFoundError([NotNullWhen(true)] out SessionNotFoundError? value)` [404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBrowserSessionBrowsersSessionIdGetRequest` | `src/BrowserUse/Requests/Browsers/GetBrowserSessionBrowsersSessionIdGetRequest.cs` |
| `BrowserSessionView` | `src/BrowserUse/Models/BrowserSessionView.cs` |
| `GetBrowserSessionBrowsersSessionIdGetError` | `src/BrowserUse/Errors/GetBrowserSessionBrowsersSessionIdGetError.cs` |
| `SessionNotFoundError` | `src/BrowserUse/Models/SessionNotFoundError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGet(ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SessionId`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `includeUrls` ← `IncludeUrls`
- **Returns**: `BrowserDownloadListResponse`
- **Error**: `ApiException<ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetSessionNotFoundError([NotNullWhen(true)] out SessionNotFoundError? value)` [404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetRequest` | `src/BrowserUse/Requests/Browsers/ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetRequest.cs` |
| `Cursor` | `src/BrowserUse/Models/AnyOf/Cursor.cs` |
| `BrowserDownloadListResponse` | `src/BrowserUse/Models/BrowserDownloadListResponse.cs` |
| `ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError` | `src/BrowserUse/Errors/ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError.cs` |
| `SessionNotFoundError` | `src/BrowserUse/Models/SessionNotFoundError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### ListBrowserSessionsBrowsersGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `ListBrowserSessionsBrowsersGet(ListBrowserSessionsBrowsersGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `metadata` ← `Metadata`, `pageSize` ← `PageSize`, `pageNumber` ← `PageNumber`, `filterBy` ← `FilterBy`, `agentSessionId` ← `AgentSessionId`
- **Returns**: `BrowserSessionListResponse`
- **Error**: `ApiException<ListBrowserSessionsBrowsersGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBrowserSessionsBrowsersGetRequest` | `src/BrowserUse/Requests/Browsers/ListBrowserSessionsBrowsersGetRequest.cs` |
| `Metadata1` | `src/BrowserUse/Models/AnyOf/Metadata1.cs` |
| `Filterby` | `src/BrowserUse/Models/AnyOf/Filterby.cs` |
| `AgentsessionidModel` | `src/BrowserUse/Models/AnyOf/AgentsessionidModel.cs` |
| `BrowserSessionListResponse` | `src/BrowserUse/Models/BrowserSessionListResponse.cs` |
| `ListBrowserSessionsBrowsersGetError` | `src/BrowserUse/Errors/ListBrowserSessionsBrowsersGetError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### UpdateBrowserSessionBrowsersSessionIdPatch

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `UpdateBrowserSessionBrowsersSessionIdPatch(UpdateBrowserSessionBrowsersSessionIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SessionId`, `Body`
- **Returns**: `BrowserSessionView`
- **Error**: `ApiException<UpdateBrowserSessionBrowsersSessionIdPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetSessionNotFoundError([NotNullWhen(true)] out SessionNotFoundError? value)` [404] · `TryGetValidationError([NotNullWhen(true)] out ValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateBrowserSessionBrowsersSessionIdPatchRequest` | `src/BrowserUse/Requests/Browsers/UpdateBrowserSessionBrowsersSessionIdPatchRequest.cs` |
| `UpdateBrowserSessionRequest` | `src/BrowserUse/Models/UpdateBrowserSessionRequest.cs` |
| `BrowserSessionView` | `src/BrowserUse/Models/BrowserSessionView.cs` |
| `UpdateBrowserSessionBrowsersSessionIdPatchError` | `src/BrowserUse/Errors/UpdateBrowserSessionBrowsersSessionIdPatchError.cs` |
| `SessionNotFoundError` | `src/BrowserUse/Models/SessionNotFoundError.cs` |
| `ValidationError` | `src/BrowserUse/Models/ValidationError.cs` |

