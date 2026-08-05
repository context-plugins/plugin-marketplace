# SitesDevicesOthers — operations

Accessor: `client.SitesDevicesOthers` · Source: `Api/SitesDevicesOthers.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountSiteOtherDeviceEvents
- **HTTP**: `GET /api/v1/sites/{site_id}/otherdevices/events/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Site OtherDevices Events
- **Signature**: `CountSiteOtherDeviceEvents(Guid siteId, SiteOtherDeviceEventsCountDistinct? distinct, string? type, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `type` ← `type`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteOtherDeviceEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteOtherDevices
- **HTTP**: `GET /api/v1/sites/{site_id}/otherdevices` (ApiHost (api))
- **Notes**: Get List of Site other devices (3rd party devices)
- **Signature**: `ListSiteOtherDevices(Guid siteId, string? vendor, string? mac, string? serial, string? model, string? name, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`vendor` … `name`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `vendor` ← `vendor`, `mac` ← `mac`, `serial` ← `serial`, `model` ← `model`, `name` ← `name`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<DeviceOther>`
- **Error**: `SdkException<ListSiteOtherDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SearchSiteOtherDeviceEvents
- **HTTP**: `GET /api/v1/sites/{site_id}/otherdevices/events/search` (ApiHost (api))
- **Notes**: Search Site OtherDevices Events
- **Signature**: `SearchSiteOtherDeviceEvents(Guid siteId, string? mac, string? deviceMac, string? vendor, string? type, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`mac` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `mac` ← `mac`, `device_mac` ← `deviceMac`, `vendor` ← `vendor`, `type` ← `type`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseEventsOtherDevicesSearch`
- **Error**: `SdkException<SearchSiteOtherDeviceEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
