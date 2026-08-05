# SamplesWebhooks — operations

Accessor: `client.SamplesWebhooks` · Source: `Api/SamplesWebhooks.cs` · 23 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Alarms
- **HTTP**: `POST /webhook_example/_alarm_` (ApiHost (api))
- **Notes**: Webhook sample for `alarm` topic Note : The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages
- **Signature**: `Alarms(WebhookAlarms? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Audits
- **HTTP**: `POST /webhook_example/_audit_` (ApiHost (api))
- **Notes**: Webhook sample for `audit` topic Note : The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages
- **Signature**: `Audits(WebhookAudits? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ClientInfo
- **HTTP**: `POST /webhook_example/_client_info_` (ApiHost (api))
- **Notes**: Webhook sample for `client-info` topic Note : The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages
- **Signature**: `ClientInfo(WebhookClientInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ClientJoin
- **HTTP**: `POST /webhook_example/_client_join_` (ApiHost (api))
- **Notes**: Webhook sample for `client_join` topic Note : The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages
- **Signature**: `ClientJoin(WebhookClientJoin? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ClientSessions
- **HTTP**: `POST /webhook_example/_client_sessions_` (ApiHost (api))
- **Notes**: Webhook sample for `client_sessions` topic Note : The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages
- **Signature**: `ClientSessions(WebhookClientSessions? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ClientSessionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ClientLatency
- **HTTP**: `POST /webhook_example/_client_latency_` (ApiHost (api))
- **Notes**: Webhook sample for `client-latency` topic Note : The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages
- **Signature**: `ClientLatency(WebhookClientLatency? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeviceEvents
- **HTTP**: `POST /webhook_example/_device_events_` (ApiHost (api))
- **Notes**: Webhook sample for `device_events` topic Note : The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages
- **Signature**: `DeviceEvents(WebhookDeviceEvents? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeviceUpDown
- **HTTP**: `POST /webhook_example/_device_updowns_` (ApiHost (api))
- **Notes**: Webhook sample for `device_updowns` topic Note : The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages
- **Signature**: `DeviceUpDown(WebhookDeviceUpdowns? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DiscoveredRawRssi
- **HTTP**: `POST /webhook_example/_discovered_raw_rssi_` (ApiHost (api))
- **Notes**: Webhook sample for `discovered-raw-rssi` topic Note : The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages
- **Signature**: `DiscoveredRawRssi(WebhookDiscoveredRawRssi? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GuestAuthorization
- **HTTP**: `POST /webhook_example/_guest_authorizations_` (ApiHost (api))
- **Notes**: Webhook sample for `guest-authorizations` topic Note : The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages
- **Signature**: `GuestAuthorization(WebhookGuestAuthorizations? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Location
- **HTTP**: `POST /webhook_example/_location_` (ApiHost (api))
- **Notes**: Webhook sample for `location` topic Note : The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages
- **Signature**: `Location(WebhookLocation? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### LocationAsset
- **HTTP**: `POST /webhook_example/_location_asset_` (ApiHost (api))
- **Notes**: Webhook sample for `location_asset` topic Note : The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages
- **Signature**: `LocationAsset(WebhookLocationAsset? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### LocationCentrak
- **HTTP**: `POST /webhook_example/_location_centrak_` (ApiHost (api))
- **Notes**: Webhook sample for `location_centrak` topic Note : The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages
- **Signature**: `LocationCentrak(WebhookLocationCentrak? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### LocationClient
- **HTTP**: `POST /webhook_example/_location_client_` (ApiHost (api))
- **Notes**: Webhook sample for `location_client` topic Note : The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages
- **Signature**: `LocationClient(WebhookLocationClient? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### LocationSdk
- **HTTP**: `POST /webhook_example/_location_sdk_` (ApiHost (api))
- **Notes**: Webhook sample for `location_sdk` topic Note : The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages
- **Signature**: `LocationSdk(WebhookLocationSdk? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### LocationUnclient
- **HTTP**: `POST /webhook_example/_location_unclient_` (ApiHost (api))
- **Notes**: Webhook sample for `location_unclient` topic Note : The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages
- **Signature**: `LocationUnclient(WebhookLocationUnclient? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### NacAccounting
- **HTTP**: `POST /webhook_example/_nac_accounting_` (ApiHost (api))
- **Notes**: Webhook sample for `nac-accounting` topic Note : The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages
- **Signature**: `NacAccounting(WebhookNacAccounting? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### NacEvents
- **HTTP**: `POST /webhook_example/_nac_events_` (ApiHost (api))
- **Notes**: Example Delivery of nac_events
- **Signature**: `NacEvents(WebhookNacEvents? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### OccupancyAlerts
- **HTTP**: `POST /webhook_example/_occupancy_alerts_` (ApiHost (api))
- **Notes**: Webhook sample for `occupancy_alerts` topic Note : The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages
- **Signature**: `OccupancyAlerts(WebhookOccupancyAlerts? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Ping
- **HTTP**: `POST /webhook_example/_ping_` (ApiHost (api))
- **Notes**: Webhook sample for `ping` topic Note : The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages
- **Signature**: `Ping(WebhookPing? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SdkclientScanData
- **HTTP**: `POST /webhook_example/_sdkclient_scan_data` (ApiHost (api))
- **Notes**: Webhook sample for `sdkclient_scan_data` topic Note : The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages
- **Signature**: `SdkclientScanData(WebhookSdkclientScanData? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SiteSle
- **HTTP**: `POST /webhook_example/_site_sle_` (ApiHost (api))
- **Notes**: Webhook sample for `site_sle` topic Note : The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages
- **Signature**: `SiteSle(WebhookSiteSle? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Zone
- **HTTP**: `POST /webhook_example/_zone_` (ApiHost (api))
- **Notes**: Webhook sample for `zone` topic Note : The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages
- **Signature**: `Zone(WebhookZone? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
