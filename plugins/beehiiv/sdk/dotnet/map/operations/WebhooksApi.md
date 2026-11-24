<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.WebhooksApi` · Source: `src/Beehiiv/Api/WebhooksApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Create13

- **Signature**: `Create13(Create13Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Returns**: `WebhookResponse`
- **Error**: `ApiException<Create13Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Create13Request` | `src/Beehiiv/Requests/WebhooksApi/Create13Request.cs` |
| `PublicationsWebhooksRequest` | `src/Beehiiv/Models/PublicationsWebhooksRequest.cs` |
| `WebhookResponse` | `src/Beehiiv/Models/WebhookResponse.cs` |
| `Create13Error` | `src/Beehiiv/Errors/Create13Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Delete6

- **Signature**: `Delete6(Delete6Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `EndpointId`, `Authorization`
- **Returns**: `WebhooksDeleteResponse`
- **Error**: `ApiException<Delete6Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Delete6Request` | `src/Beehiiv/Requests/WebhooksApi/Delete6Request.cs` |
| `WebhooksDeleteResponse` | `src/Beehiiv/Models/WebhooksDeleteResponse.cs` |
| `Delete6Error` | `src/Beehiiv/Errors/Delete6Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Index22

- **Signature**: `Index22(Index22Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`
- **Returns**: `IndexWebhooksResponse`
- **Error**: `ApiException<Index22Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Index22Request` | `src/Beehiiv/Requests/WebhooksApi/Index22Request.cs` |
| `IndexWebhooksResponse` | `src/Beehiiv/Models/IndexWebhooksResponse.cs` |
| `Index22Error` | `src/Beehiiv/Errors/Index22Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Show17

- **Signature**: `Show17(Show17Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `EndpointId`, `Authorization`
- **Returns**: `WebhookResponse`
- **Error**: `ApiException<Show17Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Show17Request` | `src/Beehiiv/Requests/WebhooksApi/Show17Request.cs` |
| `WebhookResponse` | `src/Beehiiv/Models/WebhookResponse.cs` |
| `Show17Error` | `src/Beehiiv/Errors/Show17Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Update4

- **Signature**: `Update4(Update4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `EndpointId`, `Authorization`
- **Returns**: `WebhookResponse`
- **Error**: `ApiException<Update4Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Update4Request` | `src/Beehiiv/Requests/WebhooksApi/Update4Request.cs` |
| `PublicationsWebhooksRequest1` | `src/Beehiiv/Models/PublicationsWebhooksRequest1.cs` |
| `WebhookResponse` | `src/Beehiiv/Models/WebhookResponse.cs` |
| `Update4Error` | `src/Beehiiv/Errors/Update4Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

