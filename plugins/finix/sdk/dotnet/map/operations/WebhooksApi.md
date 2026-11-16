<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.WebhooksApi` · Source: `src/FinixApiReference/Api/WebhooksApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateWebhook

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateWebhook(CreateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Webhook`
- **Error**: `ApiException<CreateWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateWebhookRequest` | `src/FinixApiReference/Requests/WebhooksApi/CreateWebhookRequest.cs` |
| `WebhooksRequest` | `src/FinixApiReference/Models/AnyOf/WebhooksRequest.cs` |
| `Webhook` | `src/FinixApiReference/Models/Webhook.cs` |
| `CreateWebhookError` | `src/FinixApiReference/Errors/CreateWebhookError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### GetWebhook

- **Auth**: `options.BasicAuth`
- **Signature**: `GetWebhook(GetWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookId`
- **Returns**: `Webhook`
- **Error**: `ApiException<GetWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWebhookRequest` | `src/FinixApiReference/Requests/WebhooksApi/GetWebhookRequest.cs` |
| `Webhook` | `src/FinixApiReference/Models/Webhook.cs` |
| `GetWebhookError` | `src/FinixApiReference/Errors/GetWebhookError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListWebhooks

- **Auth**: `options.BasicAuth`
- **Signature**: `ListWebhooks(ListWebhooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `limit` ← `Limit`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListWebhooks`
- **Error**: `ApiException<ListWebhooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListWebhooksRequest` | `src/FinixApiReference/Requests/WebhooksApi/ListWebhooksRequest.cs` |
| `ListWebhooks` | `src/FinixApiReference/Models/ListWebhooks.cs` |
| `ListWebhooksError` | `src/FinixApiReference/Errors/ListWebhooksError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### UpdateWebhook

- **Auth**: `options.BasicAuth`
- **Signature**: `UpdateWebhook(UpdateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookId`, `Body`
- **Returns**: `Webhook`
- **Error**: `ApiException<UpdateWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateWebhookRequest` | `src/FinixApiReference/Requests/WebhooksApi/UpdateWebhookRequest.cs` |
| `WebhooksRequest1` | `src/FinixApiReference/Models/AnyOf/WebhooksRequest1.cs` |
| `Webhook` | `src/FinixApiReference/Models/Webhook.cs` |
| `UpdateWebhookError` | `src/FinixApiReference/Errors/UpdateWebhookError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

