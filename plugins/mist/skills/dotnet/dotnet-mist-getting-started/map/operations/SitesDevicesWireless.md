# SitesDevicesWireless — operations

Accessor: `client.SitesDevicesWireless` · Source: `Api/SitesDevicesWireless.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetSiteDeviceIotPort
- **HTTP**: `GET /api/v1/sites/{site_id}/devices/{device_id}/iot` (ApiHost (api))
- **Notes**: Returns the current state of each enabled IoT pin configured as an output.
- **Signature**: `GetSiteDeviceIotPort(Guid siteId, Guid deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyDictionary<string, int>`
- **Error**: `SdkException<GetSiteDeviceIotPortError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteDeviceRadioChannels
- **HTTP**: `GET /api/v1/sites/{site_id}/devices/ap_channels` (ApiHost (api))
- **Notes**: Get a list of allowed channels (per channel width)
- **Signature**: `ListSiteDeviceRadioChannels(Guid siteId, string? countryCode, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `countryCode` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `country_code` ← `countryCode`
- **Returns**: `ResponseDeviceRadioChannels`
- **Error**: `SdkException<ListSiteDeviceRadioChannelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SetSiteDeviceIotPort
- **HTTP**: `PUT /api/v1/sites/{site_id}/devices/{device_id}/iot` (ApiHost (api))
- **Notes**: Note : For each IoT pin referenced: * The pin must be enabled using the Device `iot_config` API * The pin must support the output direction
- **Signature**: `SetSiteDeviceIotPort(Guid siteId, Guid deviceId, IReadOnlyDictionary<string, int>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyDictionary<string, int>`
- **Error**: `SdkException<SetSiteDeviceIotPortError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
