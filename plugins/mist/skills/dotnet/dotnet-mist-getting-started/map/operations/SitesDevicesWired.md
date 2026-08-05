# SitesDevicesWired — operations

Accessor: `client.SitesDevicesWired` · Source: `Api/SitesDevicesWired.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteSiteLocalSwitchPortConfig
- **HTTP**: `DELETE /api/v1/sites/{site_id}/devices/{device_id}/local_port_config` (ApiHost (api))
- **Notes**: API Calls delete all the existing port config local overrides, and reapply the configured planed at the device level (with site / template heritance).
- **Signature**: `DeleteSiteLocalSwitchPortConfig(Guid siteId, Guid deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteLocalSwitchPortConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateSiteLocalSwitchPortConfig
- **HTTP**: `PUT /api/v1/sites/{site_id}/devices/{device_id}/local_port_config` (ApiHost (api))
- **Notes**: API Calls to add port config local overrides. This can be used by Switch Port Operators or Helpdesk administrators to change a Switch Port configuration without having to change the switch configuration. The local overrides configured for the switchports with `no_local_overwrite`==`true` won't be applied to the switch configuration. &gt; NOTE: &gt; &gt; When using the API Call, it is required to put send all overrides in the PUT request Payload, even the existing once. &gt; &gt; The current overrides can be retrieved with the API Call Get Site Device . The local overrides will show up separately from the `port_config` in the `local_port_config` so it can be easily identified (and cleared)
- **Signature**: `UpdateSiteLocalSwitchPortConfig(Guid siteId, Guid deviceId, IReadOnlyDictionary<string, JunosLocalPortConfig>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateSiteLocalSwitchPortConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
