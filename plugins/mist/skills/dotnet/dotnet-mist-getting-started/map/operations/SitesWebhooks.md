# SitesWebhooks — operations

Accessor: `client.SitesWebhooks` · Source: `Api/SitesWebhooks.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountSiteWebhooksDeliveries
- **HTTP**: `GET /api/v1/sites/{site_id}/webhooks/{webhook_id}/events/count` (ApiHost (api))
- **Notes**: Count Site Webhooks deliveries Topics Supported: - alarms - audits - device-updowns - occupancy-alerts - ping
- **Signature**: `CountSiteWebhooksDeliveries(Guid siteId, Guid webhookId, string? error, int? statusCode, WebhookDeliveryStatus? status, WebhookDeliveryTopic? topic, WebhookDeliveryDistinct? distinct, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`error` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `error` ← `error`, `status_code` ← `statusCode`, `status` ← `status`, `topic` ← `topic`, `distinct` ← `distinct`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteWebhooksDeliveriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateSiteWebhook
- **HTTP**: `POST /api/v1/sites/{site_id}/webhooks` (ApiHost (api))
- **Notes**: Webhook defines a webhook, modeled after github\u2019s model . There is two types of webhooks: * webhooks ( examples ) * raw data webhooks ( examples ) Webhooks Webhooks can be configured at the org level (subset of topics only) and at the site level. It is possible to have multiple topics in the same webhook configuration and/or to have multiple webhooks configured at the same time. Client Raw Data Webhooks Raw data webhooks are a special subset of webhooks that provide insight into raw data packets emitted by a client, identified by their advertising MAC address (assets, discovered BLE, connected Wi-Fi, unconnected Wi-Fi). The data that client raw data webhooks encompasses are reporting AP information, RSSI Data, and any special packets/telemetry packets that the client may emit. Note that client raw webhooks are the raw data coming from the client and do not contain the X,Y location data of the client. In order to get the location data for a client please see our location webhooks. Clients can be identified uniquely across these client raw data topics and location webhook topic using MAC address as the Unique identifier (client identifier). Client Raw Data Webhooks Topics Topics that correspond to client raw data for different client types. * `asset-raw-rssi` - Raw data from packets emitted by named and filtered assets * `discovered-raw-rssi` - Raw data from packets emitted by passive BLE devices * `wifi-conn-raw` - Raw data from packets emitted by connected devices * `wifi-unconn-raw` - Raw data from packets emitted by unconnected devices (passive) Asset Filtering for Client Raw Data Webhooks The `asset-raw-rssi` webhook topic supports filtering of raw data by incorporating asset filters in the webhook payload. The filter topic allows multiple Webhooks to receive a subset of the a`asset-raw-rssi` data by assigning asset filters to a given webhook. The `asset-raw-rssi` filter topic is filtered-asset-rssi. A webhook assigned to a filter topic can take a list of AssetFilter IDs, which act as inclusive filters to determine which named asset and filtered asset data is sent to the assigned filter topic. Filters can be applied to multiple webhooks, and the same data can be sent to multiple filter topics. Rules for Configuring Client Raw Data Webhooks Only four instances of a webhook object can contain a specific filter topic. - A site-level entry will override an org-level entry for the same client raw data webhook topic. An assigned asset filter must exist and belong to the same site as the webhook it is assigned to.
- **Signature**: `CreateSiteWebhook(Guid siteId, Webhook? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Webhook`
- **Error**: `SdkException<CreateSiteWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400Webhook(out ResponseHttp400Webhook)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSiteWebhook
- **HTTP**: `DELETE /api/v1/sites/{site_id}/webhooks/{webhook_id}` (ApiHost (api))
- **Notes**: Delete Site Webhook
- **Signature**: `DeleteSiteWebhook(Guid siteId, Guid webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteWebhook
- **HTTP**: `GET /api/v1/sites/{site_id}/webhooks/{webhook_id}` (ApiHost (api))
- **Notes**: Get Site Webhook Details
- **Signature**: `GetSiteWebhook(Guid siteId, Guid webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Webhook`
- **Error**: `SdkException<GetSiteWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteWebhooks
- **HTTP**: `GET /api/v1/sites/{site_id}/webhooks` (ApiHost (api))
- **Notes**: Get List of Site Webhooks
- **Signature**: `ListSiteWebhooks(Guid siteId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Webhook>`
- **Error**: `SdkException<ListSiteWebhooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### PingSiteWebhook
- **HTTP**: `POST /api/v1/sites/{site_id}/webhooks/{webhook_id}/ping` (ApiHost (api))
- **Notes**: Send a Ping event to the webhook
- **Signature**: `PingSiteWebhook(Guid siteId, Guid webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PingSiteWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchSiteWebhooksDeliveries
- **HTTP**: `GET /api/v1/sites/{site_id}/webhooks/{webhook_id}/events/search` (ApiHost (api))
- **Notes**: Search Site Webhooks deliveries Topics Supported: - alarms - audits - device-updowns - occupancy-alerts - ping
- **Signature**: `SearchSiteWebhooksDeliveries(Guid siteId, Guid webhookId, string? error, int? statusCode, WebhookDeliveryStatus? status, WebhookDeliveryTopic? topic, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`error` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `error` ← `error`, `status_code` ← `statusCode`, `status` ← `status`, `topic` ← `topic`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `SearchWebhookDelivery`
- **Error**: `SdkException<SearchSiteWebhooksDeliveriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateSiteWebhook
- **HTTP**: `PUT /api/v1/sites/{site_id}/webhooks/{webhook_id}` (ApiHost (api))
- **Notes**: Update Site Webhook
- **Signature**: `UpdateSiteWebhook(Guid siteId, Guid webhookId, Webhook? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Webhook`
- **Error**: `SdkException<UpdateSiteWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
