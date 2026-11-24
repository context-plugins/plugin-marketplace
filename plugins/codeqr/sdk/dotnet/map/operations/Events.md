<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.Events` · Source: `src/CodeQr/Api/Events.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListEvents

- **Auth**: `options.Token`
- **Signature**: `ListEvents(ListEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `event` ← `Event`, `domain` ← `Domain`, `key` ← `Key`, `linkId` ← `LinkId`, `qrcodeId` ← `QrcodeId`, `pageId` ← `PageId`, `externalId` ← `ExternalId`, `interval` ← `Interval`, `start` ← `Start`, `end` ← `End`, `timezone` ← `Timezone`, `continent` ← `Continent`, `country` ← `Country`, `city` ← `City`, `device` ← `Device`, `browser` ← `Browser`, `os` ← `Os`, `referer` ← `Referer`, `url` ← `Url`, `excludeRoot` ← `ExcludeRoot`, `root` ← `Root`, `tagId` ← `TagId`, `utm_source` ← `UtmSource`, `utm_medium` ← `UtmMedium`, `utm_campaign` ← `UtmCampaign`, `utm_content` ← `UtmContent`, `utm_term` ← `UtmTerm`, `type` ← `Type`, `types` ← `Types`, `page` ← `Page`, `limit` ← `Limit`, `order` ← `Order`, `sortBy` ← `SortBy`
- **Returns**: `IReadOnlyList<EventsResponse>`
- **Error**: `ApiException<ListEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListEventsRequest` | `src/CodeQr/Requests/Events/ListEventsRequest.cs` |
| `EventCodeqrIoEventsApi` | `src/CodeQr/Models/Enums/EventCodeqrIoEventsApi.cs` |
| `IntervalCodeqrIoEventsApi` | `src/CodeQr/Models/Enums/IntervalCodeqrIoEventsApi.cs` |
| `ContinentCode` | `src/CodeQr/Models/Enums/ContinentCode.cs` |
| `CountryCode` | `src/CodeQr/Models/Enums/CountryCode.cs` |
| `Order` | `src/CodeQr/Models/Enums/Order.cs` |
| `SortBy` | `src/CodeQr/Models/Enums/SortBy.cs` |
| `EventsResponse` | `src/CodeQr/Models/OneOf/EventsResponse.cs` |
| `ListEventsError` | `src/CodeQr/Errors/ListEventsError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

