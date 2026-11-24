<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.WebhooksApi` · Source: `src/Fellow/Api/WebhooksApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AppsDeveloperApiApiCreateWebhook

- **Auth**: `options.DeveloperApiKeyAuth`
- **Signature**: `AppsDeveloperApiApiCreateWebhook(AppsDeveloperApiApiCreateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `WebhookCreateResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AppsDeveloperApiApiCreateWebhookRequest` | `src/Fellow/Requests/WebhooksApi/AppsDeveloperApiApiCreateWebhookRequest.cs` |
| `CreateWebhookRequest` | `src/Fellow/Models/CreateWebhookRequest.cs` |
| `WebhookCreateResponse` | `src/Fellow/Models/WebhookCreateResponse.cs` |

### AppsDeveloperApiApiDeleteWebhook

- **Auth**: `options.DeveloperApiKeyAuth`
- **Signature**: `AppsDeveloperApiApiDeleteWebhook(AppsDeveloperApiApiDeleteWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookId`
- **Returns**: `WebhookDeleteResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AppsDeveloperApiApiDeleteWebhookRequest` | `src/Fellow/Requests/WebhooksApi/AppsDeveloperApiApiDeleteWebhookRequest.cs` |
| `WebhookDeleteResponse` | `src/Fellow/Models/WebhookDeleteResponse.cs` |

### AppsDeveloperApiApiGetWebhookById

- **Auth**: `options.DeveloperApiKeyAuth`
- **Signature**: `AppsDeveloperApiApiGetWebhookById(AppsDeveloperApiApiGetWebhookByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookId`
- **Returns**: `WebhookResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AppsDeveloperApiApiGetWebhookByIdRequest` | `src/Fellow/Requests/WebhooksApi/AppsDeveloperApiApiGetWebhookByIdRequest.cs` |
| `WebhookResponse` | `src/Fellow/Models/WebhookResponse.cs` |

### AppsDeveloperApiApiListWebhooks

- **Auth**: `options.DeveloperApiKeyAuth`
- **Signature**: `AppsDeveloperApiApiListWebhooks(AppsDeveloperApiApiListWebhooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `page_size` ← `PageSize`, `cursor` ← `Cursor`, `filters` ← `Filters`
- **Returns**: `WebhooksListResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AppsDeveloperApiApiListWebhooksRequest` | `src/Fellow/Requests/WebhooksApi/AppsDeveloperApiApiListWebhooksRequest.cs` |
| `WebhooksListResponse` | `src/Fellow/Models/WebhooksListResponse.cs` |

### AppsDeveloperApiApiUpdateWebhook

- **Auth**: `options.DeveloperApiKeyAuth`
- **Signature**: `AppsDeveloperApiApiUpdateWebhook(AppsDeveloperApiApiUpdateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookId`, `Body`
- **Returns**: `WebhookResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AppsDeveloperApiApiUpdateWebhookRequest` | `src/Fellow/Requests/WebhooksApi/AppsDeveloperApiApiUpdateWebhookRequest.cs` |
| `UpdateWebhookRequest` | `src/Fellow/Models/UpdateWebhookRequest.cs` |
| `WebhookResponse` | `src/Fellow/Models/WebhookResponse.cs` |

