# OrgsWebhooks — operations

Accessor: `client.OrgsWebhooks` · Source: `Api/OrgsWebhooks.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountOrgWebhooksDeliveries
- **HTTP**: `GET /api/v1/orgs/{org_id}/webhooks/{webhook_id}/events/count` (ApiHost (api))
- **Notes**: Count Org Webhooks deliveries Topics Supported: - alarms - audits - device-updowns - occupancy-alerts - ping
- **Signature**: `CountOrgWebhooksDeliveries(Guid orgId, Guid webhookId, string? error, int? statusCode, WebhookDeliveryStatus? status, WebhookDeliveryTopic? topic, WebhookDeliveryDistinct? distinct, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`error` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `error` ← `error`, `status_code` ← `statusCode`, `status` ← `status`, `topic` ← `topic`, `distinct` ← `distinct`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountOrgWebhooksDeliveriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateOrgWebhook
- **HTTP**: `POST /api/v1/orgs/{org_id}/webhooks` (ApiHost (api))
- **Notes**: N.B . For org webhooks, only alarms/audits/client-info/client-join/client-sessions/device_events/device-updowns/mxedge_events Infrastructure topics are supported. Webhook defines a webhook, modeled after github\u2019s model . There is two types of webhooks: * webhooks ( examples ) * raw data webhooks ( examples ) Webhooks Webhooks can be configured at the org level (subset of topics only) and at the site level. It is possible to have multiple topics in the same webhook configuration and/or to have multiple webhooks configured at the same time.
- **Signature**: `CreateOrgWebhook(Guid orgId, Webhook? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Webhook`
- **Error**: `SdkException<CreateOrgWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400Webhook(out ResponseHttp400Webhook)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgWebhook
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/webhooks/{webhook_id}` (ApiHost (api))
- **Notes**: Delete Org Webhook
- **Signature**: `DeleteOrgWebhook(Guid orgId, Guid webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgWebhook
- **HTTP**: `GET /api/v1/orgs/{org_id}/webhooks/{webhook_id}` (ApiHost (api))
- **Notes**: Get Org Webhook Details
- **Signature**: `GetOrgWebhook(Guid orgId, Guid webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Webhook`
- **Error**: `SdkException<GetOrgWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgWebhooks
- **HTTP**: `GET /api/v1/orgs/{org_id}/webhooks` (ApiHost (api))
- **Notes**: Get List of Org Webhooks
- **Signature**: `ListOrgWebhooks(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Webhook>`
- **Error**: `SdkException<ListOrgWebhooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### PingOrgWebhook
- **HTTP**: `POST /api/v1/orgs/{org_id}/webhooks/{webhook_id}/ping` (ApiHost (api))
- **Notes**: Send a Ping event to the webhook
- **Signature**: `PingOrgWebhook(Guid orgId, Guid webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PingOrgWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchOrgWebhooksDeliveries
- **HTTP**: `GET /api/v1/orgs/{org_id}/webhooks/{webhook_id}/events/search` (ApiHost (api))
- **Notes**: Search Org Webhooks deliveries Topics Supported: - alarms - audits - device-updowns - occupancy-alerts - ping
- **Signature**: `SearchOrgWebhooksDeliveries(Guid orgId, Guid webhookId, string? error, int? statusCode, WebhookDeliveryStatus? status, WebhookDeliveryTopic? topic, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`error` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `error` ← `error`, `status_code` ← `statusCode`, `status` ← `status`, `topic` ← `topic`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `SearchWebhookDelivery`
- **Error**: `SdkException<SearchOrgWebhooksDeliveriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgWebhook
- **HTTP**: `PUT /api/v1/orgs/{org_id}/webhooks/{webhook_id}` (ApiHost (api))
- **Notes**: Update Org Webhook
- **Signature**: `UpdateOrgWebhook(Guid orgId, Guid webhookId, Webhook? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Webhook`
- **Error**: `SdkException<UpdateOrgWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
