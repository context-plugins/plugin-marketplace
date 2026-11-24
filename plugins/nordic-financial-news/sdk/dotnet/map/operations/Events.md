<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.Events` · Source: `src/NordicFinancialNews/Api/Events.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Events

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1Events(GetApiV1EventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `fields` ← `Fields`, `updated_after` ← `UpdatedAfter`, `q` ← `Q`, `mode` ← `Mode`, `event_type` ← `EventType`, `significance` ← `Significance`, `ticker` ← `Ticker`, `company` ← `Company`, `country` ← `Country`, `category` ← `Category`, `sources` ← `Sources`, `source_type` ← `SourceType`, `content_type` ← `ContentType`, `exchange` ← `Exchange`, `market` ← `Market`, `domicile` ← `Domicile`, `index` ← `Index`, `sector` ← `Sector`, `listed` ← `Listed`, `watchlist` ← `Watchlist`, `first_reported_after` ← `FirstReportedAfter`, `first_reported_before` ← `FirstReportedBefore`, `last_article_after` ← `LastArticleAfter`, `last_article_before` ← `LastArticleBefore`, `window` ← `Window`, `sort` ← `Sort`, `related_to` ← `RelatedTo`, `include_peripheral` ← `IncludePeripheral`
- **Returns**: `ApiV1EventsResponse`
- **Error**: `ApiException<GetApiV1EventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1EventsRequest` | `src/NordicFinancialNews/Requests/Events/GetApiV1EventsRequest.cs` |
| `Mode` | `src/NordicFinancialNews/Models/Enums/Mode.cs` |
| `ApiV1EventsResponse` | `src/NordicFinancialNews/Models/ApiV1EventsResponse.cs` |
| `GetApiV1EventsError` | `src/NordicFinancialNews/Errors/GetApiV1EventsError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

### GetApiV1EventsById

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1EventsById(GetApiV1EventsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `include_peripheral` ← `IncludePeripheral`
- **Returns**: `ApiV1EventsResponse1`
- **Error**: `ApiException<GetApiV1EventsByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1EventsByIdRequest` | `src/NordicFinancialNews/Requests/Events/GetApiV1EventsByIdRequest.cs` |
| `ApiV1EventsResponse1` | `src/NordicFinancialNews/Models/ApiV1EventsResponse1.cs` |
| `GetApiV1EventsByIdError` | `src/NordicFinancialNews/Errors/GetApiV1EventsByIdError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

