<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.WebhooksApi` · Source: `src/Basiq/Api/WebhooksApi.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddWebhook

- **Auth**: `options.ServicesToken`
- **Signature**: `AddWebhook(AddWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `NotificationsWebhooksResponse`
- **Error**: `ApiException<AddWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 409, 429, 503] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddWebhookRequest` | `src/Basiq/Requests/WebhooksApi/AddWebhookRequest.cs` |
| `NotificationsWebhooksRequest` | `src/Basiq/Models/NotificationsWebhooksRequest.cs` |
| `NotificationsWebhooksResponse` | `src/Basiq/Models/NotificationsWebhooksResponse.cs` |
| `AddWebhookError` | `src/Basiq/Errors/AddWebhookError.cs` |
| `Error` | `src/Basiq/Models/Error.cs` |

### DeleteWebhook

- **Auth**: `options.ServicesToken`
- **Signature**: `DeleteWebhook(DeleteWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWebhookRequest` | `src/Basiq/Requests/WebhooksApi/DeleteWebhookRequest.cs` |
| `DeleteWebhookError` | `src/Basiq/Errors/DeleteWebhookError.cs` |
| `Error` | `src/Basiq/Models/Error.cs` |

### GetWebhook

- **Auth**: `options.ServicesToken`
- **Signature**: `GetWebhook(GetWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookId`
- **Returns**: `NotificationsWebhooksResponse`
- **Error**: `ApiException<GetWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 503] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWebhookRequest` | `src/Basiq/Requests/WebhooksApi/GetWebhookRequest.cs` |
| `NotificationsWebhooksResponse` | `src/Basiq/Models/NotificationsWebhooksResponse.cs` |
| `GetWebhookError` | `src/Basiq/Errors/GetWebhookError.cs` |
| `Error` | `src/Basiq/Models/Error.cs` |

### GetWebhookMessage

- **Auth**: `options.ServicesToken`
- **Signature**: `GetWebhookMessage(GetWebhookMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookId`, `MessageId`
- **Returns**: `NotificationsWebhooksMessagesResponse1`
- **Error**: `ApiException<GetWebhookMessageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 503] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWebhookMessageRequest` | `src/Basiq/Requests/WebhooksApi/GetWebhookMessageRequest.cs` |
| `NotificationsWebhooksMessagesResponse1` | `src/Basiq/Models/NotificationsWebhooksMessagesResponse1.cs` |
| `GetWebhookMessageError` | `src/Basiq/Errors/GetWebhookMessageError.cs` |
| `Error` | `src/Basiq/Models/Error.cs` |

### GetWebhookStats

- **Auth**: `options.ServicesToken`
- **Signature**: `GetWebhookStats(GetWebhookStatsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookId`
- **Returns**: `WebhookStats`
- **Error**: `ApiException<GetWebhookStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWebhookStatsRequest` | `src/Basiq/Requests/WebhooksApi/GetWebhookStatsRequest.cs` |
| `WebhookStats` | `src/Basiq/Models/WebhookStats.cs` |
| `GetWebhookStatsError` | `src/Basiq/Errors/GetWebhookStatsError.cs` |
| `Error` | `src/Basiq/Models/Error.cs` |

### ListAppWebhooks

- **Auth**: `options.ServicesToken`
- **Signature**: `ListAppWebhooks(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `NotificationsWebhooksResponse1`
- **Error**: `ApiException<ListAppWebhooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 429, 503] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NotificationsWebhooksResponse1` | `src/Basiq/Models/NotificationsWebhooksResponse1.cs` |
| `ListAppWebhooksError` | `src/Basiq/Errors/ListAppWebhooksError.cs` |
| `Error` | `src/Basiq/Models/Error.cs` |

### ListMessages

- **Auth**: `options.ServicesToken`
- **Signature**: `ListMessages(ListMessagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookId`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `filter` ← `Filter`
- **Returns**: `NotificationsWebhooksMessagesResponse`
- **Error**: `ApiException<ListMessagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 503] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMessagesRequest` | `src/Basiq/Requests/WebhooksApi/ListMessagesRequest.cs` |
| `NotificationsWebhooksMessagesResponse` | `src/Basiq/Models/NotificationsWebhooksMessagesResponse.cs` |
| `ListMessagesError` | `src/Basiq/Errors/ListMessagesError.cs` |
| `Error` | `src/Basiq/Models/Error.cs` |

### TestMessage

- **Auth**: `options.ServicesToken`
- **Signature**: `TestMessage(TestMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<TestMessageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429, 503] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TestMessageRequest` | `src/Basiq/Requests/WebhooksApi/TestMessageRequest.cs` |
| `NotificationsMessagesTestRequest` | `src/Basiq/Models/NotificationsMessagesTestRequest.cs` |
| `TestMessageError` | `src/Basiq/Errors/TestMessageError.cs` |
| `Error` | `src/Basiq/Models/Error.cs` |

### UpdateWebhook

- **Auth**: `options.ServicesToken`
- **Signature**: `UpdateWebhook(UpdateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookId`
- **Returns**: `NotificationsWebhooksResponse`
- **Error**: `ApiException<UpdateWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateWebhookRequest` | `src/Basiq/Requests/WebhooksApi/UpdateWebhookRequest.cs` |
| `NotificationsWebhooksRequest` | `src/Basiq/Models/NotificationsWebhooksRequest.cs` |
| `NotificationsWebhooksResponse` | `src/Basiq/Models/NotificationsWebhooksResponse.cs` |
| `UpdateWebhookError` | `src/Basiq/Errors/UpdateWebhookError.cs` |
| `Error` | `src/Basiq/Models/Error.cs` |

