# OrgsNacFingerprints — operations

Accessor: `client.OrgsNacFingerprints` · Source: `Api/OrgsNacFingerprints.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountOrgClientFingerprints
- **HTTP**: `GET /api/v1/sites/{site_id}/insights/fingerprints/count` (ApiHost (api))
- **Notes**: Count Client Fingerprints
- **Signature**: `CountOrgClientFingerprints(Guid siteId, FingerprintsCountDistinct? distinct, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `distinct` — nullable, no default → **must pass explicitly**
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountOrgClientFingerprintsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchOrgClientFingerprints
- **HTTP**: `GET /api/v1/sites/{site_id}/insights/fingerprints/search` (ApiHost (api))
- **Notes**: Search Client Fingerprints
- **Signature**: `SearchOrgClientFingerprints(Guid siteId, string? family, NacAccessType? clientType, string? model, string? mfg, string? os, string? osType, string? mac, int? start, int? end, string? interval, int? limit = 100, string? duration = "1d", string? sort = "wxid", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`family` … `interval`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "wxid", `requestOptions` = null
- **Query params (wire ← C#)**: `family` ← `family`, `client_type` ← `clientType`, `model` ← `model`, `mfg` ← `mfg`, `os` ← `os`, `os_type` ← `osType`, `mac` ← `mac`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `interval` ← `interval`, `sort` ← `sort`
- **Returns**: `FingerprintSearchResult`
- **Error**: `SdkException<SearchOrgClientFingerprintsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
