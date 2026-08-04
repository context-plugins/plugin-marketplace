# WebhookSubscriptions — operations

Accessor: `client.WebhookSubscriptions` · Source: `Api/WebhookSubscriptions.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateWebhookSubscription
- **HTTP**: `POST /v2/webhooks/subscriptions` (Default (connect))
- **Notes**: Creates a webhook subscription.
- **Signature**: `CreateWebhookSubscription(CreateWebhookSubscriptionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateWebhookSubscriptionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteWebhookSubscription
- **HTTP**: `DELETE /v2/webhooks/subscriptions/{subscription_id}` (Default (connect))
- **Notes**: Deletes a webhook subscription.
- **Signature**: `DeleteWebhookSubscription(string subscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteWebhookSubscriptionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListWebhookEventTypes
- **HTTP**: `GET /v2/webhooks/event-types` (Default (connect))
- **Notes**: Lists all webhook event types that can be subscribed to.
- **Signature**: `ListWebhookEventTypes(string? apiVersion, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `apiVersion` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `api_version` ← `apiVersion`
- **Returns**: `ListWebhookEventTypesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListWebhookSubscriptions
- **HTTP**: `GET /v2/webhooks/subscriptions` (Default (connect))
- **Notes**: Lists all webhook subscriptions owned by your application.
- **Signature**: `ListWebhookSubscriptions(string? cursor, SortOrder? sortOrder, int? limit, bool? includeDisabled = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cursor` — nullable, no default → **must pass explicitly**
  - `sortOrder` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `includeDisabled` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `cursor` ← `cursor`, `include_disabled` ← `includeDisabled`, `sort_order` ← `sortOrder`, `limit` ← `limit`
- **Returns**: `ListWebhookSubscriptionsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveWebhookSubscription
- **HTTP**: `GET /v2/webhooks/subscriptions/{subscription_id}` (Default (connect))
- **Notes**: Retrieves a webhook subscription identified by its ID.
- **Signature**: `RetrieveWebhookSubscription(string subscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveWebhookSubscriptionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestWebhookSubscription
- **HTTP**: `POST /v2/webhooks/subscriptions/{subscription_id}/test` (Default (connect))
- **Notes**: Tests a webhook subscription by sending a test event to the notification URL.
- **Signature**: `TestWebhookSubscription(string subscriptionId, TestWebhookSubscriptionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TestWebhookSubscriptionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateWebhookSubscription
- **HTTP**: `PUT /v2/webhooks/subscriptions/{subscription_id}` (Default (connect))
- **Notes**: Updates a webhook subscription.
- **Signature**: `UpdateWebhookSubscription(string subscriptionId, UpdateWebhookSubscriptionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateWebhookSubscriptionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateWebhookSubscriptionSignatureKey
- **HTTP**: `POST /v2/webhooks/subscriptions/{subscription_id}/signature-key` (Default (connect))
- **Notes**: Updates a webhook subscription by replacing the existing signature key with a new one.
- **Signature**: `UpdateWebhookSubscriptionSignatureKey(string subscriptionId, UpdateWebhookSubscriptionSignatureKeyRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateWebhookSubscriptionSignatureKeyResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
