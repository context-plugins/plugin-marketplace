<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.WebhooksApi` · Source: `src/RelmCrm/Api/WebhooksApi.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateWebhook

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `CreateWebhook(CreateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Webhook`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateWebhookRequest` | `src/RelmCrm/Requests/WebhooksApi/CreateWebhookRequest.cs` |
| `WebhookInput` | `src/RelmCrm/Models/WebhookInput.cs` |
| `Webhook` | `src/RelmCrm/Models/Webhook.cs` |

### DeleteWebhook

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `DeleteWebhook(DeleteWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Deleted`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteWebhookRequest` | `src/RelmCrm/Requests/WebhooksApi/DeleteWebhookRequest.cs` |
| `Deleted` | `src/RelmCrm/Models/Deleted.cs` |

### GetWebhook

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `GetWebhook(GetWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Webhook`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetWebhookRequest` | `src/RelmCrm/Requests/WebhooksApi/GetWebhookRequest.cs` |
| `Webhook` | `src/RelmCrm/Models/Webhook.cs` |

### ListDeliveries

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `ListDeliveries(ListDeliveriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListDeliveriesRequest` | `src/RelmCrm/Requests/WebhooksApi/ListDeliveriesRequest.cs` |

### ListWebhooks

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `ListWebhooks(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### UpdateWebhook

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `UpdateWebhook(UpdateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `Webhook`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdateWebhookRequest` | `src/RelmCrm/Requests/WebhooksApi/UpdateWebhookRequest.cs` |
| `WebhookInput` | `src/RelmCrm/Models/WebhookInput.cs` |
| `Webhook` | `src/RelmCrm/Models/Webhook.cs` |

