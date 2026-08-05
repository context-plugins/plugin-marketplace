# SitesAnomaly — operations

Accessor: `client.SitesAnomaly` · Source: `Api/SitesAnomaly.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetSiteAnomalyEventsForClient
- **HTTP**: `GET /api/v1/sites/{site_id}/anomaly/client/{client_mac}/{metric}` (ApiHost (api))
- **Notes**: Get Client Anomaly Events
- **Signature**: `GetSiteAnomalyEventsForClient(Guid siteId, string clientMac, string metric, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseAnomalySearch`
- **Error**: `SdkException<GetSiteAnomalyEventsForClientError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteAnomalyEventsForDevice
- **HTTP**: `GET /api/v1/sites/{site_id}/anomaly/device/{device_mac}/{metric}` (ApiHost (api))
- **Notes**: Get Device Anomaly Events
- **Signature**: `GetSiteAnomalyEventsForDevice(Guid siteId, string metric, string deviceMac, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseAnomalySearch`
- **Error**: `SdkException<GetSiteAnomalyEventsForDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteAnomalyEvents
- **HTTP**: `GET /api/v1/sites/{site_id}/anomaly/{metric}` (ApiHost (api))
- **Notes**: List Site Anomaly Events
- **Signature**: `ListSiteAnomalyEvents(Guid siteId, string metric, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseAnomalySearch`
- **Error**: `SdkException<ListSiteAnomalyEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
