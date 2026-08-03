# SoundEffects — operations

Accessor: `client.SoundEffects` · Source: `Api/SoundEffects.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DownloadSfx
- **HTTP**: `POST /v2/sfx/licenses/{id}/downloads` (Default (api))
- **Notes**: This endpoint redownloads sound effects that you have already received a license for. The download links in the response are valid for 8 hours.
- **Signature**: `DownloadSfx(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SfxUrl`
- **Error**: `SdkException<DownloadSfxError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSfxDetails
- **HTTP**: `GET /v2/sfx/{id}` (Default (api))
- **Notes**: This endpoint shows information about a sound effect.
- **Signature**: `GetSfxDetails(int id, Language? language, View2? view, Library2? library, string? searchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`language` … `searchId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `language` ← `language`, `view` ← `view`, `library` ← `library`, `search_id` ← `searchId`
- **Returns**: `Sfx`
- **Error**: `SdkException<GetSfxDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSfxLicenseList
- **HTTP**: `GET /v2/sfx/licenses` (Default (api))
- **Notes**: This endpoint lists existing licenses.
- **Signature**: `GetSfxLicenseList(string? sfxId, string? license, Sort5? sort, string? username, DateTimeOffset? startDate, DateTimeOffset? endDate, string? licenseId, DownloadAvailability? downloadAvailability, int? page = 1, int? perPage = 20, bool? teamHistory = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`sfxId` … `downloadAvailability`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = 1, `perPage` = 20, `teamHistory` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `sfx_id` ← `sfxId`, `license` ← `license`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`, `username` ← `username`, `start_date` ← `startDate`, `end_date` ← `endDate`, `license_id` ← `licenseId`, `download_availability` ← `downloadAvailability`, `team_history` ← `teamHistory`
- **Returns**: `DownloadHistoryDataList`
- **Error**: `SdkException<GetSfxLicenseListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetSfxListDetails
- **HTTP**: `GET /v2/sfx` (Default (api))
- **Notes**: This endpoint shows information about sound effects.
- **Signature**: `GetSfxListDetails(IReadOnlyList<string> id, View2? view, Language? language, Library2? library, string? searchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`view` … `searchId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`, `view` ← `view`, `language` ← `language`, `library` ← `library`, `search_id` ← `searchId`
- **Returns**: `SfxdataList`
- **Error**: `SdkException<GetSfxListDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### LicensesSfx
- **HTTP**: `POST /v2/sfx/licenses` (Default (api))
- **Notes**: This endpoint licenses sounds effect assets.
- **Signature**: `LicensesSfx(LicenseSfxrequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LicenseSfxresultDataList`
- **Error**: `SdkException<LicensesSfxError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchSfx
- **HTTP**: `GET /v2/sfx/search` (Default (api))
- **Notes**: This endpoint searches for sound effects. If you specify more than one search parameter, the API uses an AND condition.
- **Signature**: `SearchSfx(DateTimeOffset? addedDate, DateTimeOffset? addedDateStart, DateTimeOffset? addedDateEnd, int? duration, int? durationFrom, int? durationTo, string? query, Sort15? sort, View2? view, Language? language, int? page = 1, int? perPage = 20, bool? safe = true, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`addedDate` … `language`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = 1, `perPage` = 20, `safe` = true, `requestOptions` = null
- **Query params (wire ← C#)**: `added_date` ← `addedDate`, `added_date_start` ← `addedDateStart`, `added_date_end` ← `addedDateEnd`, `duration` ← `duration`, `duration_from` ← `durationFrom`, `duration_to` ← `durationTo`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `safe` ← `safe`, `sort` ← `sort`, `view` ← `view`, `language` ← `language`
- **Returns**: `SfxsearchResults`
- **Error**: `SdkException<SearchSfxError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
