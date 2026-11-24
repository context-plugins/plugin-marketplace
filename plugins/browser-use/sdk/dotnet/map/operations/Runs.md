<!-- Generated file — do not edit; regenerated with the SDK. -->

# Runs — operations

Accessor: `client.Runs` · Source: `src/BrowserUse/Api/Runs.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelRunRunsRunIdCancelPost

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `CancelRunRunsRunIdCancelPost(CancelRunRunsRunIdCancelPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RunId`
- **Returns**: `RunSummary`
- **Error**: `ApiException<CancelRunRunsRunIdCancelPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 404, 502, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelRunRunsRunIdCancelPostRequest` | `src/BrowserUse/Requests/Runs/CancelRunRunsRunIdCancelPostRequest.cs` |
| `RunSummary` | `src/BrowserUse/Models/RunSummary.cs` |
| `CancelRunRunsRunIdCancelPostError` | `src/BrowserUse/Errors/CancelRunRunsRunIdCancelPostError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### CreateRunRunsPost

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `CreateRunRunsPost(CreateRunRunsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `RunCreateResponse`
- **Error**: `ApiException<CreateRunRunsPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404, 409, 429] · `TryGetApiKeySpendLimitError([NotNullWhen(true)] out ApiKeySpendLimitError? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateRunRunsPostRequest` | `src/BrowserUse/Requests/Runs/CreateRunRunsPostRequest.cs` |
| `RunCreateRequest` | `src/BrowserUse/Models/RunCreateRequest.cs` |
| `RunCreateResponse` | `src/BrowserUse/Models/RunCreateResponse.cs` |
| `CreateRunRunsPostError` | `src/BrowserUse/Errors/CreateRunRunsPostError.cs` |
| `ApiKeySpendLimitError` | `src/BrowserUse/Models/ApiKeySpendLimitError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### GetRunEventsRunsRunIdEventsGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetRunEventsRunsRunIdEventsGet(GetRunEventsRunsRunIdEventsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RunId`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `after` ← `After`, `include_output` ← `IncludeOutput`
- **Returns**: `RunEventsResponse`
- **Error**: `ApiException<GetRunEventsRunsRunIdEventsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRunEventsRunsRunIdEventsGetRequest` | `src/BrowserUse/Requests/Runs/GetRunEventsRunsRunIdEventsGetRequest.cs` |
| `RunEventsResponse` | `src/BrowserUse/Models/RunEventsResponse.cs` |
| `GetRunEventsRunsRunIdEventsGetError` | `src/BrowserUse/Errors/GetRunEventsRunsRunIdEventsGetError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### GetRunRunsRunIdGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetRunRunsRunIdGet(GetRunRunsRunIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RunId`
- **Returns**: `RunSummary`
- **Error**: `ApiException<GetRunRunsRunIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRunRunsRunIdGetRequest` | `src/BrowserUse/Requests/Runs/GetRunRunsRunIdGetRequest.cs` |
| `RunSummary` | `src/BrowserUse/Models/RunSummary.cs` |
| `GetRunRunsRunIdGetError` | `src/BrowserUse/Errors/GetRunRunsRunIdGetError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### GetRunStatusRunsRunIdStatusGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetRunStatusRunsRunIdStatusGet(GetRunStatusRunsRunIdStatusGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RunId`
- **Returns**: `RunStatusResponse`
- **Error**: `ApiException<GetRunStatusRunsRunIdStatusGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRunStatusRunsRunIdStatusGetRequest` | `src/BrowserUse/Requests/Runs/GetRunStatusRunsRunIdStatusGetRequest.cs` |
| `RunStatusResponse` | `src/BrowserUse/Models/RunStatusResponse.cs` |
| `GetRunStatusRunsRunIdStatusGetError` | `src/BrowserUse/Errors/GetRunStatusRunsRunIdStatusGetError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### ListRunAttachmentsRunsRunIdAttachmentsGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `ListRunAttachmentsRunsRunIdAttachmentsGet(ListRunAttachmentsRunsRunIdAttachmentsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RunId`
- **Returns**: `RunAttachmentsResponse`
- **Error**: `ApiException<ListRunAttachmentsRunsRunIdAttachmentsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListRunAttachmentsRunsRunIdAttachmentsGetRequest` | `src/BrowserUse/Requests/Runs/ListRunAttachmentsRunsRunIdAttachmentsGetRequest.cs` |
| `RunAttachmentsResponse` | `src/BrowserUse/Models/RunAttachmentsResponse.cs` |
| `ListRunAttachmentsRunsRunIdAttachmentsGetError` | `src/BrowserUse/Errors/ListRunAttachmentsRunsRunIdAttachmentsGetError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### ListRunsRunsGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `ListRunsRunsGet(ListRunsRunsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `sessionId` ← `SessionId`
- **Returns**: `RunListResponse`
- **Error**: `ApiException<ListRunsRunsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListRunsRunsGetRequest` | `src/BrowserUse/Requests/Runs/ListRunsRunsGetRequest.cs` |
| `Cursor` | `src/BrowserUse/Models/AnyOf/Cursor.cs` |
| `Sessionid` | `src/BrowserUse/Models/AnyOf/Sessionid.cs` |
| `RunListResponse` | `src/BrowserUse/Models/RunListResponse.cs` |
| `ListRunsRunsGetError` | `src/BrowserUse/Errors/ListRunsRunsGetError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

