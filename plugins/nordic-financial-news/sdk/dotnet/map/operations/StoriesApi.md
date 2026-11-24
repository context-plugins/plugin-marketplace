<!-- Generated file — do not edit; regenerated with the SDK. -->

# StoriesApi — operations

Accessor: `client.StoriesApi` · Source: `src/NordicFinancialNews/Api/StoriesApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Stories

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1Stories(GetApiV1StoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `updated_after` ← `UpdatedAfter`, `q` ← `Q`, `sort` ← `Sort`, `mode` ← `Mode`, `country` ← `Country`, `category` ← `Category`, `sources` ← `Sources`, `ticker` ← `Ticker`, `company` ← `Company`, `exchange` ← `Exchange`, `market` ← `Market`, `domicile` ← `Domicile`, `index` ← `Index`, `sector` ← `Sector`, `listed` ← `Listed`, `watchlist` ← `Watchlist`, `published_after` ← `PublishedAfter`, `published_before` ← `PublishedBefore`, `fields` ← `Fields`
- **Returns**: `ApiV1StoriesResponse`
- **Error**: `ApiException<GetApiV1StoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1StoriesRequest` | `src/NordicFinancialNews/Requests/StoriesApi/GetApiV1StoriesRequest.cs` |
| `Sort` | `src/NordicFinancialNews/Models/Enums/Sort.cs` |
| `Mode` | `src/NordicFinancialNews/Models/Enums/Mode.cs` |
| `ApiV1StoriesResponse` | `src/NordicFinancialNews/Models/ApiV1StoriesResponse.cs` |
| `GetApiV1StoriesError` | `src/NordicFinancialNews/Errors/GetApiV1StoriesError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

### GetApiV1StoriesById

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1StoriesById(GetApiV1StoriesByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1StoriesResponse1`
- **Error**: `ApiException<GetApiV1StoriesByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1StoriesByIdRequest` | `src/NordicFinancialNews/Requests/StoriesApi/GetApiV1StoriesByIdRequest.cs` |
| `ApiV1StoriesResponse1` | `src/NordicFinancialNews/Models/ApiV1StoriesResponse1.cs` |
| `GetApiV1StoriesByIdError` | `src/NordicFinancialNews/Errors/GetApiV1StoriesByIdError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

