<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analytics — operations

Accessor: `client.Analytics` · Source: `src/CodeQr/Api/Analytics.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### RetrieveAnalytics

- **Auth**: `options.Token`
- **Signature**: `RetrieveAnalytics(RetrieveAnalyticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `event` ← `Event`, `groupBy` ← `GroupBy`, `domain` ← `Domain`, `key` ← `Key`, `linkId` ← `LinkId`, `qrcodeId` ← `QrcodeId`, `pageId` ← `PageId`, `externalId` ← `ExternalId`, `interval` ← `Interval`, `start` ← `Start`, `end` ← `End`, `timezone` ← `Timezone`, `continent` ← `Continent`, `country` ← `Country`, `city` ← `City`, `device` ← `Device`, `browser` ← `Browser`, `os` ← `Os`, `referer` ← `Referer`, `url` ← `Url`, `excludeRoot` ← `ExcludeRoot`, `root` ← `Root`, `tagId` ← `TagId`, `utm_source` ← `UtmSource`, `utm_medium` ← `UtmMedium`, `utm_campaign` ← `UtmCampaign`, `utm_content` ← `UtmContent`, `utm_term` ← `UtmTerm`, `type` ← `Type`, `types` ← `Types`
- **Returns**: `AnalyticsResponse`
- **Error**: `ApiException<RetrieveAnalyticsError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RetrieveAnalyticsRequest` | `src/CodeQr/Requests/Analytics/RetrieveAnalyticsRequest.cs` |
| `Event` | `src/CodeQr/Models/Enums/Event.cs` |
| `GroupBy` | `src/CodeQr/Models/Enums/GroupBy.cs` |
| `Interval` | `src/CodeQr/Models/Enums/Interval.cs` |
| `ContinentCode` | `src/CodeQr/Models/Enums/ContinentCode.cs` |
| `CountryCode` | `src/CodeQr/Models/Enums/CountryCode.cs` |
| `AnalyticsResponse` | `src/CodeQr/Models/AnyOf/AnalyticsResponse.cs` |
| `RetrieveAnalyticsError` | `src/CodeQr/Errors/RetrieveAnalyticsError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

