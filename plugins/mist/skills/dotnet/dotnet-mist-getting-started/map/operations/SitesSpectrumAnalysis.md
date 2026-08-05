# SitesSpectrumAnalysis — operations

Accessor: `client.SitesSpectrumAnalysis` · Source: `Api/SitesSpectrumAnalysis.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetSiteRunningSpectrumAnalysis
- **HTTP**: `GET /api/v1/sites/{site_id}/analyze_spectrum` (ApiHost (api))
- **Notes**: Get the running spectrum analysis for a site
- **Signature**: `GetSiteRunningSpectrumAnalysis(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseRunningSpectrumAnalysis`
- **Error**: `SdkException<GetSiteRunningSpectrumAnalysisError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### InitiateSiteAnalyzeSpectrum
- **HTTP**: `POST /api/v1/sites/{site_id}/analyze_spectrum` (ApiHost (api))
- **Notes**: Initiate a spectrum analysis for a site The output will be available through websocket. As there can be multiple command issued against the same device at the same time and the output all goes through the same websocket stream, session is introduced for demux. Subscribe to Device Command outputs `WS /api-ws/v1/stream` Example output from ws stream { "event": "data", "channel": "/sites/4ac1dcf4-9d8b-7211-65c4-057819f0862b/analyze_spectrum", "data": { "session": "session_id", "fft_samples": [ { "frequency": 2437.0, "rssi / signal ?": -93 }, ... ], "channel_usage": [ { "channel": 36, "noise": -78, "wifi": 0.13, "non_wifi": 0.08 }, ... ] } }
- **Signature**: `InitiateSiteAnalyzeSpectrum(Guid siteId, SpectrumAnalysis? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<InitiateSiteAnalyzeSpectrumError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteSpectrumAnalysis
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/analyze_spectrum` (ApiHost (api))
- **Notes**: List the past spectrum analysis for a site
- **Signature**: `ListSiteSpectrumAnalysis(Guid siteId, int? start, int? end, int? limit = 100, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`
- **Returns**: `ResponsePastSpectrumAnalysis`
- **Error**: `SdkException<ListSiteSpectrumAnalysisError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
