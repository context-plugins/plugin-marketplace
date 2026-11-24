<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.WebhooksApi` · Source: `src/PrismaReviews/Api/WebhooksApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateWebhook

- **Auth**: `options.ApiKey`
- **Signature**: `CreateWebhook(CreateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `WebhookCreated`
- **Error**: `ApiException<CreateWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 422, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateWebhookRequest` | `src/PrismaReviews/Requests/WebhooksApi/CreateWebhookRequest.cs` |
| `V1WebhooksRequest` | `src/PrismaReviews/Models/V1WebhooksRequest.cs` |
| `WebhookCreated` | `src/PrismaReviews/Models/WebhookCreated.cs` |
| `CreateWebhookError` | `src/PrismaReviews/Errors/CreateWebhookError.cs` |
| `Error` | `src/PrismaReviews/Models/Error.cs` |

### DeleteWebhook

- **Auth**: `options.ApiKey`
- **Signature**: `DeleteWebhook(DeleteWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `WebhookDeleted`
- **Error**: `ApiException<DeleteWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWebhookRequest` | `src/PrismaReviews/Requests/WebhooksApi/DeleteWebhookRequest.cs` |
| `WebhookDeleted` | `src/PrismaReviews/Models/WebhookDeleted.cs` |
| `DeleteWebhookError` | `src/PrismaReviews/Errors/DeleteWebhookError.cs` |
| `Error` | `src/PrismaReviews/Models/Error.cs` |

### ListWebhooks

- **Auth**: `options.ApiKey`
- **Signature**: `ListWebhooks(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `WebhookList`
- **Error**: `ApiException<ListWebhooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebhookList` | `src/PrismaReviews/Models/WebhookList.cs` |
| `ListWebhooksError` | `src/PrismaReviews/Errors/ListWebhooksError.cs` |
| `Error` | `src/PrismaReviews/Models/Error.cs` |

