<!-- Generated file — do not edit; regenerated with the SDK. -->

# ArticlesApi — operations

Accessor: `client.ArticlesApi` · Source: `src/NordicFinancialNews/Api/ArticlesApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Articles

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1Articles(GetApiV1ArticlesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `fields` ← `Fields`, `updated_after` ← `UpdatedAfter`, `q` ← `Q`, `sort` ← `Sort`, `mode` ← `Mode`, `country` ← `Country`, `category` ← `Category`, `sources` ← `Sources`, `source_type` ← `SourceType`, `ticker` ← `Ticker`, `company` ← `Company`, `exchange` ← `Exchange`, `market` ← `Market`, `domicile` ← `Domicile`, `index` ← `Index`, `sector` ← `Sector`, `content_type` ← `ContentType`, `published_after` ← `PublishedAfter`, `published_before` ← `PublishedBefore`, `listed` ← `Listed`, `watchlist` ← `Watchlist`, `primary_only` ← `PrimaryOnly`, `include_peripheral` ← `IncludePeripheral`, `ids` ← `Ids`
- **Returns**: `ApiV1ArticlesResponse1`
- **Error**: `ApiException<GetApiV1ArticlesError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1ArticlesRequest` | `src/NordicFinancialNews/Requests/ArticlesApi/GetApiV1ArticlesRequest.cs` |
| `Sort` | `src/NordicFinancialNews/Models/Enums/Sort.cs` |
| `Mode` | `src/NordicFinancialNews/Models/Enums/Mode.cs` |
| `ApiV1ArticlesResponse1` | `src/NordicFinancialNews/Models/ApiV1ArticlesResponse1.cs` |
| `GetApiV1ArticlesError` | `src/NordicFinancialNews/Errors/GetApiV1ArticlesError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

### GetApiV1ArticlesById

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1ArticlesById(GetApiV1ArticlesByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `include_peripheral` ← `IncludePeripheral`
- **Returns**: `ApiV1ArticlesResponse`
- **Error**: `ApiException<GetApiV1ArticlesByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1ArticlesByIdRequest` | `src/NordicFinancialNews/Requests/ArticlesApi/GetApiV1ArticlesByIdRequest.cs` |
| `ApiV1ArticlesResponse` | `src/NordicFinancialNews/Models/ApiV1ArticlesResponse.cs` |
| `GetApiV1ArticlesByIdError` | `src/NordicFinancialNews/Errors/GetApiV1ArticlesByIdError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

