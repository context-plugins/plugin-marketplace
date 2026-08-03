# Webhooks — operations

Accessor: `client.Webhooks` · Source: `Api/Webhooks.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateEndpoint
- **HTTP**: `POST /endpoints.json` (Production)
- **Notes**: Creates an endpoint and assigns a list of webhook subscriptions (events) to it. See the Webhooks Reference page for available events.
- **Signature**: `CreateEndpoint(CreateOrUpdateEndpointRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EndpointResponse`
- **Error**: `SdkException<CreateEndpointError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse(out ErrorListResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EnableWebhooks
- **HTTP**: `PUT /webhooks/settings.json` (Production)
- **Notes**: Enables webhooks for your site.
- **Signature**: `EnableWebhooks(EnableWebhooksRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EnableWebhooksResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListEndpoints
- **HTTP**: `GET /endpoints.json` (Production)
- **Notes**: Lists endpoints configured for a site.
- **Signature**: `ListEndpoints(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Endpoint>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListWebhooks
- **HTTP**: `GET /webhooks.json` (Production)
- **Notes**: Retrieves a list of webhooks. You can pass query parameters if you want to filter webhooks. See the Webhooks documentation for more information.
- **Signature**: `ListWebhooks(WebhookStatus? status, string? sinceDate, string? untilDate, WebhookOrder? order, int? subscription, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`status` … `subscription`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `status` ← `status`, `since_date` ← `sinceDate`, `until_date` ← `untilDate`, `page` ← `page`, `per_page` ← `perPage`, `order` ← `order`, `subscription` ← `subscription`
- **Returns**: `IReadOnlyList<WebhookResponse>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ReplayWebhooks
- **HTTP**: `POST /webhooks/replay.json` (Production)
- **Notes**: Replays webhooks. Posting to this endpoint does not immediately resend the webhooks. They are added to a queue and sent as soon as possible, depending on available system resources. You can submit an array of up to 1000 webhook IDs in the replay request.
- **Signature**: `ReplayWebhooks(ReplayWebhooksRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ReplayWebhooksResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateEndpoint
- **HTTP**: `PUT /endpoints/{endpoint_id}.json` (Production)
- **Notes**: Updates an Endpoint. You can change the `url` of your endpoint or the list of `webhook_subscriptions` to which you are subscribed. See the Webhooks Reference page for available events. Always send a complete list of events to which you want to subscribe. Sending a PUT request for an existing endpoint with an empty list of `webhook_subscriptions` will unsubscribe all events. If you want to unsubscribe from a specific event, send a list of `webhook_subscriptions` without the specific event key.
- **Signature**: `UpdateEndpoint(int endpointId, CreateOrUpdateEndpointRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EndpointResponse`
- **Error**: `SdkException<UpdateEndpointError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetErrorListResponse(out ErrorListResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
