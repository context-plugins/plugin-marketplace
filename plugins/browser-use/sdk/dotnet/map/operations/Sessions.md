<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sessions — operations

Accessor: `client.Sessions` · Source: `src/BrowserUse/Api/Sessions.cs` · 14 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelQueuedMessageSessionsSessionIdQueueMessageIdDelete

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `CancelQueuedMessageSessionsSessionIdQueueMessageIdDelete(CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SessionId`, `MessageId`
- **Returns**: `QueuedMessage`
- **Error**: `ApiException<CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 404, 409] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteRequest` | `src/BrowserUse/Requests/Sessions/CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteRequest.cs` |
| `QueuedMessage` | `src/BrowserUse/Models/QueuedMessage.cs` |
| `CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteError` | `src/BrowserUse/Errors/CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### CreateSessionShareSessionsSessionIdSharePost

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `CreateSessionShareSessionsSessionIdSharePost(CreateSessionShareSessionsSessionIdSharePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SessionId`
- **Returns**: `SessionShareInfo`
- **Error**: `ApiException<CreateSessionShareSessionsSessionIdSharePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSessionShareSessionsSessionIdSharePostRequest` | `src/BrowserUse/Requests/Sessions/CreateSessionShareSessionsSessionIdSharePostRequest.cs` |
| `SessionShareInfo` | `src/BrowserUse/Models/SessionShareInfo.cs` |
| `CreateSessionShareSessionsSessionIdSharePostError` | `src/BrowserUse/Errors/CreateSessionShareSessionsSessionIdSharePostError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### DeleteSessionSessionsSessionIdDelete

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `DeleteSessionSessionsSessionIdDelete(DeleteSessionSessionsSessionIdDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SessionId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteSessionSessionsSessionIdDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 404, 502, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSessionSessionsSessionIdDeleteRequest` | `src/BrowserUse/Requests/Sessions/DeleteSessionSessionsSessionIdDeleteRequest.cs` |
| `DeleteSessionSessionsSessionIdDeleteError` | `src/BrowserUse/Errors/DeleteSessionSessionsSessionIdDeleteError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### GetSessionCostSessionsSessionIdCostGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetSessionCostSessionsSessionIdCostGet(GetSessionCostSessionsSessionIdCostGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SessionId`
- **Returns**: `SessionCostResponse`
- **Error**: `ApiException<GetSessionCostSessionsSessionIdCostGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSessionCostSessionsSessionIdCostGetRequest` | `src/BrowserUse/Requests/Sessions/GetSessionCostSessionsSessionIdCostGetRequest.cs` |
| `SessionCostResponse` | `src/BrowserUse/Models/SessionCostResponse.cs` |
| `GetSessionCostSessionsSessionIdCostGetError` | `src/BrowserUse/Errors/GetSessionCostSessionsSessionIdCostGetError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### GetSessionQueueMessageSessionsSessionIdQueueMessageIdGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetSessionQueueMessageSessionsSessionIdQueueMessageIdGet(GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SessionId`, `MessageId`
- **Returns**: `QueuedMessage`
- **Error**: `ApiException<GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetRequest` | `src/BrowserUse/Requests/Sessions/GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetRequest.cs` |
| `QueuedMessage` | `src/BrowserUse/Models/QueuedMessage.cs` |
| `GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetError` | `src/BrowserUse/Errors/GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### GetSessionSessionsSessionIdGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetSessionSessionsSessionIdGet(GetSessionSessionsSessionIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SessionId`
- **Returns**: `SessionInfo`
- **Error**: `ApiException<GetSessionSessionsSessionIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSessionSessionsSessionIdGetRequest` | `src/BrowserUse/Requests/Sessions/GetSessionSessionsSessionIdGetRequest.cs` |
| `SessionInfo` | `src/BrowserUse/Models/SessionInfo.cs` |
| `GetSessionSessionsSessionIdGetError` | `src/BrowserUse/Errors/GetSessionSessionsSessionIdGetError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### GetSessionShareSessionsSessionIdShareGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetSessionShareSessionsSessionIdShareGet(GetSessionShareSessionsSessionIdShareGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SessionId`
- **Returns**: `ResponseGetSessionShareSessionsSessionIdShareGet`
- **Error**: `ApiException<GetSessionShareSessionsSessionIdShareGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSessionShareSessionsSessionIdShareGetRequest` | `src/BrowserUse/Requests/Sessions/GetSessionShareSessionsSessionIdShareGetRequest.cs` |
| `ResponseGetSessionShareSessionsSessionIdShareGet` | `src/BrowserUse/Models/AnyOf/ResponseGetSessionShareSessionsSessionIdShareGet.cs` |
| `GetSessionShareSessionsSessionIdShareGetError` | `src/BrowserUse/Errors/GetSessionShareSessionsSessionIdShareGetError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### ListSessionQueueSessionsSessionIdQueueGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `ListSessionQueueSessionsSessionIdQueueGet(ListSessionQueueSessionsSessionIdQueueGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SessionId`
- **Returns**: `QueueListResponse`
- **Error**: `ApiException<ListSessionQueueSessionsSessionIdQueueGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSessionQueueSessionsSessionIdQueueGetRequest` | `src/BrowserUse/Requests/Sessions/ListSessionQueueSessionsSessionIdQueueGetRequest.cs` |
| `QueueListResponse` | `src/BrowserUse/Models/QueueListResponse.cs` |
| `ListSessionQueueSessionsSessionIdQueueGetError` | `src/BrowserUse/Errors/ListSessionQueueSessionsSessionIdQueueGetError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### ListSessionsSessionsGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `ListSessionsSessionsGet(ListSessionsSessionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`
- **Returns**: `SessionListResponse`
- **Error**: `ApiException<ListSessionsSessionsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSessionsSessionsGetRequest` | `src/BrowserUse/Requests/Sessions/ListSessionsSessionsGetRequest.cs` |
| `Cursor` | `src/BrowserUse/Models/AnyOf/Cursor.cs` |
| `SessionListResponse` | `src/BrowserUse/Models/SessionListResponse.cs` |
| `ListSessionsSessionsGetError` | `src/BrowserUse/Errors/ListSessionsSessionsGetError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### PurgeSessionSessionsSessionIdPurgePost

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `PurgeSessionSessionsSessionIdPurgePost(PurgeSessionSessionsSessionIdPurgePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SessionId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PurgeSessionSessionsSessionIdPurgePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PurgeSessionSessionsSessionIdPurgePostRequest` | `src/BrowserUse/Requests/Sessions/PurgeSessionSessionsSessionIdPurgePostRequest.cs` |
| `PurgeSessionSessionsSessionIdPurgePostError` | `src/BrowserUse/Errors/PurgeSessionSessionsSessionIdPurgePostError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### QueueSessionMessageSessionsSessionIdQueuePost

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `QueueSessionMessageSessionsSessionIdQueuePost(QueueSessionMessageSessionsSessionIdQueuePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SessionId`, `Body`
- **Returns**: `QueuedMessage`
- **Error**: `ApiException<QueueSessionMessageSessionsSessionIdQueuePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiKeySpendLimitError([NotNullWhen(true)] out ApiKeySpendLimitError? value)` [402] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 404, 429] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `QueueSessionMessageSessionsSessionIdQueuePostRequest` | `src/BrowserUse/Requests/Sessions/QueueSessionMessageSessionsSessionIdQueuePostRequest.cs` |
| `XV4QueueDeduplicate` | `src/BrowserUse/Models/AnyOf/XV4QueueDeduplicate.cs` |
| `QueueMessageRequest` | `src/BrowserUse/Models/QueueMessageRequest.cs` |
| `QueuedMessage` | `src/BrowserUse/Models/QueuedMessage.cs` |
| `QueueSessionMessageSessionsSessionIdQueuePostError` | `src/BrowserUse/Errors/QueueSessionMessageSessionsSessionIdQueuePostError.cs` |
| `ApiKeySpendLimitError` | `src/BrowserUse/Models/ApiKeySpendLimitError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### UpdateSessionCostCapSessionsSessionIdCostCapPatch

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `UpdateSessionCostCapSessionsSessionIdCostCapPatch(UpdateSessionCostCapSessionsSessionIdCostCapPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SessionId`, `Body`
- **Returns**: `SessionCostCapResponse`
- **Error**: `ApiException<UpdateSessionCostCapSessionsSessionIdCostCapPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSessionCostCapSessionsSessionIdCostCapPatchRequest` | `src/BrowserUse/Requests/Sessions/UpdateSessionCostCapSessionsSessionIdCostCapPatchRequest.cs` |
| `SessionCostCapRequest` | `src/BrowserUse/Models/SessionCostCapRequest.cs` |
| `SessionCostCapResponse` | `src/BrowserUse/Models/SessionCostCapResponse.cs` |
| `UpdateSessionCostCapSessionsSessionIdCostCapPatchError` | `src/BrowserUse/Errors/UpdateSessionCostCapSessionsSessionIdCostCapPatchError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### UpdateSessionSessionsSessionIdPatch

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `UpdateSessionSessionsSessionIdPatch(UpdateSessionSessionsSessionIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SessionId`, `Body`
- **Returns**: `SessionInfo`
- **Error**: `ApiException<UpdateSessionSessionsSessionIdPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSessionSessionsSessionIdPatchRequest` | `src/BrowserUse/Requests/Sessions/UpdateSessionSessionsSessionIdPatchRequest.cs` |
| `SessionUpdateRequest` | `src/BrowserUse/Models/SessionUpdateRequest.cs` |
| `SessionInfo` | `src/BrowserUse/Models/SessionInfo.cs` |
| `UpdateSessionSessionsSessionIdPatchError` | `src/BrowserUse/Errors/UpdateSessionSessionsSessionIdPatchError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### UpdateSessionShareSessionsSessionIdSharePut

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `UpdateSessionShareSessionsSessionIdSharePut(UpdateSessionShareSessionsSessionIdSharePutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SessionId`, `Body`
- **Returns**: `SessionShareInfo`
- **Error**: `ApiException<UpdateSessionShareSessionsSessionIdSharePutError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSessionShareSessionsSessionIdSharePutRequest` | `src/BrowserUse/Requests/Sessions/UpdateSessionShareSessionsSessionIdSharePutRequest.cs` |
| `SessionShareUpdateRequest` | `src/BrowserUse/Models/SessionShareUpdateRequest.cs` |
| `SessionShareInfo` | `src/BrowserUse/Models/SessionShareInfo.cs` |
| `UpdateSessionShareSessionsSessionIdSharePutError` | `src/BrowserUse/Errors/UpdateSessionShareSessionsSessionIdSharePutError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

