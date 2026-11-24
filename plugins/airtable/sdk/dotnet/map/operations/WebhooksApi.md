<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.WebhooksApi` · Source: `src/Airtable/Api/WebhooksApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateWebhook

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateWebhook(CreateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BaseId`, `Body`
- **Returns**: `WebhookCreateResponse`
- **Error**: `ApiException<CreateWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 422, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateWebhookRequest` | `src/Airtable/Requests/WebhooksApi/CreateWebhookRequest.cs` |
| `WebhookCreateRequest` | `src/Airtable/Models/WebhookCreateRequest.cs` |
| `WebhookCreateResponse` | `src/Airtable/Models/WebhookCreateResponse.cs` |
| `CreateWebhookError` | `src/Airtable/Errors/CreateWebhookError.cs` |
| `Error` | `src/Airtable/Models/Error.cs` |

### DeleteWebhook

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteWebhook(DeleteWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BaseId`, `WebhookId`
- **Returns**: `object`
- **Error**: `ApiException<DeleteWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWebhookRequest` | `src/Airtable/Requests/WebhooksApi/DeleteWebhookRequest.cs` |
| `DeleteWebhookError` | `src/Airtable/Errors/DeleteWebhookError.cs` |
| `Error` | `src/Airtable/Models/Error.cs` |

### ListWebhookPayloads

- **Auth**: `options.BearerAuth`
- **Signature**: `ListWebhookPayloads(ListWebhookPayloadsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BaseId`, `WebhookId`
- **Query params (wire ← C#)**: `cursor` ← `Cursor`
- **Returns**: `WebhookPayloadList`
- **Error**: `ApiException<ListWebhookPayloadsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListWebhookPayloadsRequest` | `src/Airtable/Requests/WebhooksApi/ListWebhookPayloadsRequest.cs` |
| `WebhookPayloadList` | `src/Airtable/Models/WebhookPayloadList.cs` |
| `ListWebhookPayloadsError` | `src/Airtable/Errors/ListWebhookPayloadsError.cs` |
| `Error` | `src/Airtable/Models/Error.cs` |

### ListWebhooks

- **Auth**: `options.BearerAuth`
- **Signature**: `ListWebhooks(ListWebhooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BaseId`
- **Returns**: `BasesWebhooksResponse`
- **Error**: `ApiException<ListWebhooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListWebhooksRequest` | `src/Airtable/Requests/WebhooksApi/ListWebhooksRequest.cs` |
| `BasesWebhooksResponse` | `src/Airtable/Models/BasesWebhooksResponse.cs` |
| `ListWebhooksError` | `src/Airtable/Errors/ListWebhooksError.cs` |
| `Error` | `src/Airtable/Models/Error.cs` |

### RefreshWebhook

- **Auth**: `options.BearerAuth`
- **Signature**: `RefreshWebhook(RefreshWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BaseId`, `WebhookId`
- **Returns**: `BasesWebhooksRefreshResponse`
- **Error**: `ApiException<RefreshWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RefreshWebhookRequest` | `src/Airtable/Requests/WebhooksApi/RefreshWebhookRequest.cs` |
| `BasesWebhooksRefreshResponse` | `src/Airtable/Models/BasesWebhooksRefreshResponse.cs` |
| `RefreshWebhookError` | `src/Airtable/Errors/RefreshWebhookError.cs` |
| `Error` | `src/Airtable/Models/Error.cs` |

