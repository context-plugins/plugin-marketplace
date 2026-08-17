<!-- Generated file — do not edit; regenerated with the SDK. -->

# SoundEffects — operations

Accessor: `client.SoundEffects` · Source: `Api/SoundEffects.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DownloadSfx

- **Signature**: `DownloadSfx(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SfxUrl`
- **Error**: `SdkException<DownloadSfxError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SfxUrl` | `Models/SfxUrl.cs` |
| `DownloadSfxError` | `Errors/DownloadSfxError.cs` |

### GetSfxDetails

- **Signature**: `GetSfxDetails(int id, Language? language, View2? view, Library2? library, string? searchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`language` … `searchId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `language` ← `language`, `view` ← `view`, `library` ← `library`, `search_id` ← `searchId`
- **Returns**: `Sfx`
- **Error**: `SdkException<GetSfxDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 503] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Language` | `Models/Enums/Language.cs` |
| `View2` | `Models/Enums/View2.cs` |
| `Library2` | `Models/Enums/Library2.cs` |
| `Sfx` | `Models/Sfx.cs` |
| `GetSfxDetailsError` | `Errors/GetSfxDetailsError.cs` |

### GetSfxLicenseList

- **Signature**: `GetSfxLicenseList(string? sfxId, string? license, Sort5? sort, string? username, DateTimeOffset? startDate, DateTimeOffset? endDate, string? licenseId, DownloadAvailability? downloadAvailability, int? page = 1, int? perPage = 20, bool? teamHistory = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`sfxId` … `downloadAvailability`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = `1`, `perPage` = `20`, `teamHistory` = `false`
- **Query params (wire ← C#)**: `sfx_id` ← `sfxId`, `license` ← `license`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`, `username` ← `username`, `start_date` ← `startDate`, `end_date` ← `endDate`, `license_id` ← `licenseId`, `download_availability` ← `downloadAvailability`, `team_history` ← `teamHistory`
- **Returns**: `DownloadHistoryDataList`
- **Error**: `SdkException<GetSfxLicenseListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Sort5` | `Models/Enums/Sort5.cs` |
| `DownloadAvailability` | `Models/Enums/DownloadAvailability.cs` |
| `DownloadHistoryDataList` | `Models/DownloadHistoryDataList.cs` |
| `GetSfxLicenseListError` | `Errors/GetSfxLicenseListError.cs` |

### GetSfxListDetails

- **Signature**: `GetSfxListDetails(IReadOnlyList<string> id, View2? view, Language? language, Library2? library, string? searchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`view` … `searchId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `id` ← `id`, `view` ← `view`, `language` ← `language`, `library` ← `library`, `search_id` ← `searchId`
- **Returns**: `SfxDataList`
- **Error**: `SdkException<GetSfxListDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `View2` | `Models/Enums/View2.cs` |
| `Language` | `Models/Enums/Language.cs` |
| `Library2` | `Models/Enums/Library2.cs` |
| `SfxDataList` | `Models/SfxDataList.cs` |
| `GetSfxListDetailsError` | `Errors/GetSfxListDetailsError.cs` |

### LicensesSfx

- **Signature**: `LicensesSfx(LicenseSfxRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `LicenseSfxResultDataList`
- **Error**: `SdkException<LicensesSfxError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `LicenseSfxRequest` | `Models/LicenseSfxRequest.cs` |
| `LicenseSfxResultDataList` | `Models/LicenseSfxResultDataList.cs` |
| `LicensesSfxError` | `Errors/LicensesSfxError.cs` |

### SearchSfx

- **Signature**: `SearchSfx(DateTimeOffset? addedDate, DateTimeOffset? addedDateStart, DateTimeOffset? addedDateEnd, int? duration, int? durationFrom, int? durationTo, string? query, Sort15? sort, View2? view, Language? language, int? page = 1, int? perPage = 20, bool? safe = true, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`addedDate` … `language`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = `1`, `perPage` = `20`, `safe` = `true`
- **Query params (wire ← C#)**: `added_date` ← `addedDate`, `added_date_start` ← `addedDateStart`, `added_date_end` ← `addedDateEnd`, `duration` ← `duration`, `duration_from` ← `durationFrom`, `duration_to` ← `durationTo`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `safe` ← `safe`, `sort` ← `sort`, `view` ← `view`, `language` ← `language`
- **Returns**: `SfxSearchResults`
- **Error**: `SdkException<SearchSfxError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 503] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Sort15` | `Models/Enums/Sort15.cs` |
| `View2` | `Models/Enums/View2.cs` |
| `Language` | `Models/Enums/Language.cs` |
| `SfxSearchResults` | `Models/SfxSearchResults.cs` |
| `SearchSfxError` | `Errors/SearchSfxError.cs` |

