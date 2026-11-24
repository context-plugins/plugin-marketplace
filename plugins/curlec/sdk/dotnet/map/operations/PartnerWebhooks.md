<!-- Generated file — do not edit; regenerated with the SDK. -->

# PartnerWebhooks — operations

Accessor: `client.PartnerWebhooks` · Source: `src/Curlec/Api/PartnerWebhooks.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreatePartnerWebhook

- **Auth**: `options.BasicAuth`
- **Signature**: `CreatePartnerWebhook(CreatePartnerWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`, `Body`
- **Returns**: `PartnerWebhook`
- **Error**: `ApiException<CreatePartnerWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePartnerWebhookRequest` | `src/Curlec/Requests/PartnerWebhooks/CreatePartnerWebhookRequest.cs` |
| `V2AccountsWebhooksRequest` | `src/Curlec/Models/V2AccountsWebhooksRequest.cs` |
| `PartnerWebhook` | `src/Curlec/Models/PartnerWebhook.cs` |
| `CreatePartnerWebhookError` | `src/Curlec/Errors/CreatePartnerWebhookError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### DeletePartnerWebhook

- **Auth**: `options.BasicAuth`
- **Signature**: `DeletePartnerWebhook(DeletePartnerWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`, `WebhookId`
- **Returns**: `object`
- **Error**: `ApiException<DeletePartnerWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeletePartnerWebhookRequest` | `src/Curlec/Requests/PartnerWebhooks/DeletePartnerWebhookRequest.cs` |
| `DeletePartnerWebhookError` | `src/Curlec/Errors/DeletePartnerWebhookError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchPartnerWebhook

- **Auth**: `options.BasicAuth`
- **Signature**: `FetchPartnerWebhook(FetchPartnerWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`, `WebhookId`
- **Returns**: `PartnerWebhook`
- **Error**: `ApiException<FetchPartnerWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchPartnerWebhookRequest` | `src/Curlec/Requests/PartnerWebhooks/FetchPartnerWebhookRequest.cs` |
| `PartnerWebhook` | `src/Curlec/Models/PartnerWebhook.cs` |
| `FetchPartnerWebhookError` | `src/Curlec/Errors/FetchPartnerWebhookError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### ListPartnerWebhooks

- **Auth**: `options.BasicAuth`
- **Signature**: `ListPartnerWebhooks(ListPartnerWebhooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`
- **Returns**: `V2AccountsWebhooksResponse`
- **Error**: `ApiException<ListPartnerWebhooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPartnerWebhooksRequest` | `src/Curlec/Requests/PartnerWebhooks/ListPartnerWebhooksRequest.cs` |
| `V2AccountsWebhooksResponse` | `src/Curlec/Models/V2AccountsWebhooksResponse.cs` |
| `ListPartnerWebhooksError` | `src/Curlec/Errors/ListPartnerWebhooksError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### UpdatePartnerWebhook

- **Auth**: `options.BasicAuth`
- **Signature**: `UpdatePartnerWebhook(UpdatePartnerWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`, `WebhookId`, `Body`
- **Returns**: `PartnerWebhook`
- **Error**: `ApiException<UpdatePartnerWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePartnerWebhookRequest` | `src/Curlec/Requests/PartnerWebhooks/UpdatePartnerWebhookRequest.cs` |
| `PartnerWebhook` | `src/Curlec/Models/PartnerWebhook.cs` |
| `UpdatePartnerWebhookError` | `src/Curlec/Errors/UpdatePartnerWebhookError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

