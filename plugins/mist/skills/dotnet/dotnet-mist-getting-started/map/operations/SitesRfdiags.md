# SitesRfdiags — operations

Accessor: `client.SitesRfdiags` · Source: `Api/SitesRfdiags.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteSiteRfdiagRecording
- **HTTP**: `DELETE /api/v1/sites/{site_id}/rfdiags/{rfdiag_id}` (ApiHost (api))
- **Notes**: Delete Recording
- **Signature**: `DeleteSiteRfdiagRecording(Guid siteId, Guid rfdiagId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteRfdiagRecordingError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DownloadSiteRfdiagRecording
- **HTTP**: `GET /api/v1/sites/{site_id}/rfdiags/{rfdiag_id}/download` (ApiHost (api))
- **Notes**: Download Recording Download raw_events blob
- **Signature**: `DownloadSiteRfdiagRecording(Guid siteId, Guid rfdiagId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<DownloadSiteRfdiagRecordingError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteRfdiagRecording
- **HTTP**: `GET /api/v1/sites/{site_id}/rfdiags/{rfdiag_id}` (ApiHost (api))
- **Notes**: Get RF Diag Recording Details
- **Signature**: `GetSiteRfdiagRecording(Guid siteId, Guid rfdiagId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<RfDiagInfoItem>`
- **Error**: `SdkException<GetSiteRfdiagRecordingError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteSiteRfdiagRecording
- **HTTP**: `GET /api/v1/sites/{site_id}/rfdiags` (ApiHost (api))
- **Notes**: List RF Glass Recording
- **Signature**: `GetSiteSiteRfdiagRecording(Guid siteId, int? start, int? end, string? duration = "1d", int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<IReadOnlyList<RfDiagInfoItem>>`
- **Error**: `SdkException<GetSiteSiteRfdiagRecordingError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### StartSiteRecording
- **HTTP**: `POST /api/v1/sites/{site_id}/rfdiags` (ApiHost (api))
- **Notes**: Start RF Glass Recording
- **Signature**: `StartSiteRecording(Guid siteId, RfDiag? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<RfDiagInfoItem>`
- **Error**: `SdkException<StartSiteRecordingError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### StopSiteRfdiagRecording
- **HTTP**: `POST /api/v1/sites/{site_id}/rfdiags/{rfdiag_id}/stop` (ApiHost (api))
- **Notes**: If the recording session is active for the given rfdiag_id, it will finish the recording. duration and end_time will be updated to reflect the correct values.
- **Signature**: `StopSiteRfdiagRecording(Guid siteId, Guid rfdiagId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<StopSiteRfdiagRecordingError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateSiteRfdiagRecording
- **HTTP**: `PUT /api/v1/sites/{site_id}/rfdiags/{rfdiag_id}` (ApiHost (api))
- **Notes**: Update Recording
- **Signature**: `UpdateSiteRfdiagRecording(Guid siteId, Guid rfdiagId, RfDiag? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<RfDiagInfoItem>`
- **Error**: `SdkException<UpdateSiteRfdiagRecordingError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
