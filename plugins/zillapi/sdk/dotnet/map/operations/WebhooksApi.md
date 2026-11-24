<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.WebhooksApi` · Source: `src/Zillapi/Api/WebhooksApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateWebhook

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateWebhook(CreateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1WebhooksResponse1`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateWebhookRequest` | `src/Zillapi/Requests/WebhooksApi/CreateWebhookRequest.cs` |
| `WebhookCreate` | `src/Zillapi/Models/WebhookCreate.cs` |
| `V1WebhooksResponse1` | `src/Zillapi/Models/V1WebhooksResponse1.cs` |

### ListWebhookDeliveries

- **Auth**: `options.BearerAuth`
- **Signature**: `ListWebhookDeliveries(ListWebhookDeliveriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `limit` ← `Limit`
- **Returns**: `V1WebhooksDeliveriesResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListWebhookDeliveriesRequest` | `src/Zillapi/Requests/WebhooksApi/ListWebhookDeliveriesRequest.cs` |
| `V1WebhooksDeliveriesResponse` | `src/Zillapi/Models/V1WebhooksDeliveriesResponse.cs` |

### ListWebhooks

- **Auth**: `options.BearerAuth`
- **Signature**: `ListWebhooks(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `V1WebhooksResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `V1WebhooksResponse` | `src/Zillapi/Models/V1WebhooksResponse.cs` |

### RevokeWebhook

- **Auth**: `options.BearerAuth`
- **Signature**: `RevokeWebhook(RevokeWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `RevokeWebhookRequest` | `src/Zillapi/Requests/WebhooksApi/RevokeWebhookRequest.cs` |

