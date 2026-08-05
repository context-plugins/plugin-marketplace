# SitesSyntheticTests — operations

Accessor: `client.SitesSyntheticTests` · Source: `Api/SitesSyntheticTests.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetSiteDeviceSyntheticTest
- **HTTP**: `GET /api/v1/sites/{site_id}/devices/{device_id}/synthetic_test` (ApiHost (api))
- **Notes**: Get Device Synthetic Test
- **Signature**: `GetSiteDeviceSyntheticTest(Guid siteId, Guid deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SynthetictestInfo`
- **Error**: `SdkException<GetSiteDeviceSyntheticTestError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchSiteSyntheticTest
- **HTTP**: `GET /api/v1/sites/{site_id}/synthetic_test/search` (ApiHost (api))
- **Notes**: Search Site Synthetic Testing
- **Signature**: `SearchSiteSyntheticTest(Guid siteId, string? mac, string? portId, string? vlanId, string? by, string? reason, SynthetictestType? type, SynthetictestProtocol? protocol, string? tenant, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`mac` … `tenant`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `mac` ← `mac`, `port_id` ← `portId`, `vlan_id` ← `vlanId`, `by` ← `by`, `reason` ← `reason`, `type` ← `type`, `protocol` ← `protocol`, `tenant` ← `tenant`
- **Returns**: `ResponseSynthetictestSearch`
- **Error**: `SdkException<SearchSiteSyntheticTestError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### StartSiteSwitchRadiusSyntheticTest
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/check_radius_server` (ApiHost (api))
- **Notes**: Ping test from the AP to confirm ‘reachability’ of the Radius server. Utilize Juniper EX switch(to which an AP is connected to) radius test capabilities to get details on the Radius Server ‘availability’ .
- **Signature**: `StartSiteSwitchRadiusSyntheticTest(Guid siteId, Guid deviceId, SynthetictestRadiusServer? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<StartSiteSwitchRadiusSyntheticTestError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TriggerSiteDeviceSyntheticTest
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/synthetic_test` (ApiHost (api))
- **Notes**: Trigger Device Synthetic Test
- **Signature**: `TriggerSiteDeviceSyntheticTest(Guid siteId, Guid deviceId, SynthetictestDevice? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<TriggerSiteDeviceSyntheticTestError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TriggerSiteSyntheticTest
- **HTTP**: `POST /api/v1/sites/{site_id}/synthetic_test` (ApiHost (api))
- **Notes**: Trigger Synthetic Testing
- **Signature**: `TriggerSiteSyntheticTest(Guid siteId, Synthetictest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseSynthetictest`
- **Error**: `SdkException<TriggerSiteSyntheticTestError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
