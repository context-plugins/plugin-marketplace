# Assets — operations

Accessor: `client.Assets` · Source: `Api/Assets.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetDevices
- **HTTP**: `GET /devices` (Default)
- **Notes**: Gets a list of devices that the API key has permissions for. _🔐 This endpoint requires the Assets endpoint permission._ _This request can also be made using the POST method, with a request to `devices.json` and a JSON request body instead of query parameters._
- **Signature**: `GetDevices(IReadOnlyList<int>? deviceTypeIds, IReadOnlyList<int>? siteIds, IReadOnlyList<int>? parentIds, IReadOnlyList<string>? fields, int? pageSize = 50, int? page = 1, bool? useUtc = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`deviceTypeIds` … `fields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `pageSize` = 50, `page` = 1, `useUtc` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `deviceTypeIds` ← `deviceTypeIds`, `siteIds` ← `siteIds`, `parentIds` ← `parentIds`, `fields` ← `fields`, `pageSize` ← `pageSize`, `page` ← `page`, `useUtc` ← `useUtc`
- **Returns**: `IReadOnlyList<Device>`
- **Error**: `SdkException<GetDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetDevices400Error1(out Devices400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 405] · `TryGetDevices429Error1(out Devices429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetDevicesPublishedAfterDate
- **HTTP**: `GET /devices-published-after-date` (Default)
- **Notes**: Gets the number of devices published on a site after a certain date as well as the IDs of the authorized devices. _🔐 This endpoint requires the Assets endpoint permission._
- **Signature**: `GetDevicesPublishedAfterDate(int siteId, DateTimeOffset date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `siteId` ← `siteId`, `date` ← `date`
- **Returns**: `DevicesPublishedAfterDateResponse`
- **Error**: `SdkException<GetDevicesPublishedAfterDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetDevicesPublishedAfterDate400Error1(out DevicesPublishedAfterDate400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 405] · `TryGetDevicesPublishedAfterDate429Error1(out DevicesPublishedAfterDate429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPowerCurves
- **HTTP**: `GET /powercurves` (Default)
- **Notes**: Gets the default or learned power curves for wind turbines. Other device types are not supported. _🔐 This endpoint requires the PowerCurves endpoint permission._ _This request can also be made using the POST method, with a request to `powercurves.json` and a JSON request body instead of query parameters._
- **Signature**: `GetPowerCurves(IReadOnlyList<int> deviceIds, DateTimeOffset? timestamp, bool? learned = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `timestamp` — nullable, no default → **must pass explicitly**
  - defaults: `learned` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `deviceIds` ← `deviceIds`, `timestamp` ← `timestamp`, `learned` ← `learned`
- **Returns**: `IReadOnlyList<PowerCurve>`
- **Error**: `SdkException<GetPowerCurvesError>` — **Case A (typed)**
- **Error accessors**: `TryGetPowercurves400Error1(out Powercurves400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 405] · `TryGetPowercurves429Error1(out Powercurves429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSites
- **HTTP**: `GET /sites` (Default)
- **Notes**: Gets a list of sites that the API key has permissions for. _🔐 This endpoint requires the Assets endpoint permission._ _This request can also be made using the POST method, with a request to `sites.json` and a JSON request body instead of query parameters._
- **Signature**: `GetSites(IReadOnlyList<string>? fields, int? pageSize = 50, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fields` — nullable, no default → **must pass explicitly**
  - defaults: `pageSize` = 50, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `fields` ← `fields`, `pageSize` ← `pageSize`, `page` ← `page`
- **Returns**: `IReadOnlyList<SiteWithData>`
- **Error**: `SdkException<GetSitesError>` — **Case A (typed)**
- **Error accessors**: `TryGetSites400Error1(out Sites400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 405] · `TryGetSites429Error1(out Sites429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
