<!-- Generated file — do not edit; regenerated with the SDK. -->

# Psa — operations

Accessor: `client.Psa` · Source: `src/CompSniper/Api/Psa.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetPsaCard

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPsaCard(GetPsaCardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `specId` ← `SpecId`, `keyword` ← `Keyword`, `count` ← `Count`, `timeRange` ← `TimeRange`, `grade` ← `Grade`
- **Returns**: `V1PsaCardResponse`
- **Error**: `ApiException<GetPsaCardError>` — **Case A (typed)**
- **Error accessors**: `TryGetV1PsaCard400Error1([NotNullWhen(true)] out V1PsaCard400Error1? value)` [400] · `TryGetV1PsaCard401Error1([NotNullWhen(true)] out V1PsaCard401Error1? value)` [401] · `TryGetV1PsaCard404Error1([NotNullWhen(true)] out V1PsaCard404Error1? value)` [404] · `TryGetV1PsaCard429Error1([NotNullWhen(true)] out V1PsaCard429Error1? value)` [429] · `TryGetV1PsaCard502Error1([NotNullWhen(true)] out V1PsaCard502Error1? value)` [502] · `TryGetV1PsaCard503Error1([NotNullWhen(true)] out V1PsaCard503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPsaCardRequest` | `src/CompSniper/Requests/Psa/GetPsaCardRequest.cs` |
| `XCreditSource` | `src/CompSniper/Models/Enums/XCreditSource.cs` |
| `V1PsaCardResponse` | `src/CompSniper/Models/V1PsaCardResponse.cs` |
| `GetPsaCardError` | `src/CompSniper/Errors/GetPsaCardError.cs` |
| `V1PsaCard400Error1` | `src/CompSniper/Models/V1PsaCard400Error1.cs` |
| `V1PsaCard401Error1` | `src/CompSniper/Models/V1PsaCard401Error1.cs` |
| `V1PsaCard404Error1` | `src/CompSniper/Models/V1PsaCard404Error1.cs` |
| `V1PsaCard429Error1` | `src/CompSniper/Models/V1PsaCard429Error1.cs` |
| `V1PsaCard502Error1` | `src/CompSniper/Models/V1PsaCard502Error1.cs` |
| `V1PsaCard503Error1` | `src/CompSniper/Models/V1PsaCard503Error1.cs` |

### GetPsaSetPopulation

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPsaSetPopulation(GetPsaSetPopulationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `headingId` ← `HeadingId`, `url` ← `Url`
- **Returns**: `V1PsaSetResponse`
- **Error**: `ApiException<GetPsaSetPopulationError>` — **Case A (typed)**
- **Error accessors**: `TryGetV1PsaSet400Error1([NotNullWhen(true)] out V1PsaSet400Error1? value)` [400] · `TryGetV1PsaSet401Error1([NotNullWhen(true)] out V1PsaSet401Error1? value)` [401] · `TryGetV1PsaSet429Error1([NotNullWhen(true)] out V1PsaSet429Error1? value)` [429] · `TryGetV1PsaSet502Error1([NotNullWhen(true)] out V1PsaSet502Error1? value)` [502] · `TryGetV1PsaSet503Error1([NotNullWhen(true)] out V1PsaSet503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPsaSetPopulationRequest` | `src/CompSniper/Requests/Psa/GetPsaSetPopulationRequest.cs` |
| `XCreditSource` | `src/CompSniper/Models/Enums/XCreditSource.cs` |
| `V1PsaSetResponse` | `src/CompSniper/Models/V1PsaSetResponse.cs` |
| `GetPsaSetPopulationError` | `src/CompSniper/Errors/GetPsaSetPopulationError.cs` |
| `V1PsaSet400Error1` | `src/CompSniper/Models/V1PsaSet400Error1.cs` |
| `V1PsaSet401Error1` | `src/CompSniper/Models/V1PsaSet401Error1.cs` |
| `V1PsaSet429Error1` | `src/CompSniper/Models/V1PsaSet429Error1.cs` |
| `V1PsaSet502Error1` | `src/CompSniper/Models/V1PsaSet502Error1.cs` |
| `V1PsaSet503Error1` | `src/CompSniper/Models/V1PsaSet503Error1.cs` |

### ListPsaSets

- **Auth**: `options.BearerAuth`
- **Signature**: `ListPsaSets(ListPsaSetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `game` ← `Game`, `keyword` ← `Keyword`, `year` ← `Year`, `count` ← `Count`, `page` ← `Page`
- **Returns**: `V1PsaSetsResponse`
- **Error**: `ApiException<ListPsaSetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetV1PsaSets400Error1([NotNullWhen(true)] out V1PsaSets400Error1? value)` [400] · `TryGetV1PsaSets401Error1([NotNullWhen(true)] out V1PsaSets401Error1? value)` [401] · `TryGetV1PsaSets429Error1([NotNullWhen(true)] out V1PsaSets429Error1? value)` [429] · `TryGetV1PsaSets502Error1([NotNullWhen(true)] out V1PsaSets502Error1? value)` [502] · `TryGetV1PsaSets503Error1([NotNullWhen(true)] out V1PsaSets503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPsaSetsRequest` | `src/CompSniper/Requests/Psa/ListPsaSetsRequest.cs` |
| `Game` | `src/CompSniper/Models/Enums/Game.cs` |
| `XCreditSource` | `src/CompSniper/Models/Enums/XCreditSource.cs` |
| `V1PsaSetsResponse` | `src/CompSniper/Models/V1PsaSetsResponse.cs` |
| `ListPsaSetsError` | `src/CompSniper/Errors/ListPsaSetsError.cs` |
| `V1PsaSets400Error1` | `src/CompSniper/Models/V1PsaSets400Error1.cs` |
| `V1PsaSets401Error1` | `src/CompSniper/Models/V1PsaSets401Error1.cs` |
| `V1PsaSets429Error1` | `src/CompSniper/Models/V1PsaSets429Error1.cs` |
| `V1PsaSets502Error1` | `src/CompSniper/Models/V1PsaSets502Error1.cs` |
| `V1PsaSets503Error1` | `src/CompSniper/Models/V1PsaSets503Error1.cs` |

### SearchPsaCards

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchPsaCards(SearchPsaCardsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Keyword`
- **Query params (wire ← C#)**: `keyword` ← `Keyword`, `count` ← `Count`, `page` ← `Page`
- **Returns**: `V1PsaSearchResponse`
- **Error**: `ApiException<SearchPsaCardsError>` — **Case A (typed)**
- **Error accessors**: `TryGetV1PsaSearch400Error1([NotNullWhen(true)] out V1PsaSearch400Error1? value)` [400] · `TryGetV1PsaSearch401Error1([NotNullWhen(true)] out V1PsaSearch401Error1? value)` [401] · `TryGetV1PsaSearch429Error1([NotNullWhen(true)] out V1PsaSearch429Error1? value)` [429] · `TryGetV1PsaSearch502Error1([NotNullWhen(true)] out V1PsaSearch502Error1? value)` [502] · `TryGetV1PsaSearch503Error1([NotNullWhen(true)] out V1PsaSearch503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchPsaCardsRequest` | `src/CompSniper/Requests/Psa/SearchPsaCardsRequest.cs` |
| `XCreditSource` | `src/CompSniper/Models/Enums/XCreditSource.cs` |
| `V1PsaSearchResponse` | `src/CompSniper/Models/V1PsaSearchResponse.cs` |
| `SearchPsaCardsError` | `src/CompSniper/Errors/SearchPsaCardsError.cs` |
| `V1PsaSearch400Error1` | `src/CompSniper/Models/V1PsaSearch400Error1.cs` |
| `V1PsaSearch401Error1` | `src/CompSniper/Models/V1PsaSearch401Error1.cs` |
| `V1PsaSearch429Error1` | `src/CompSniper/Models/V1PsaSearch429Error1.cs` |
| `V1PsaSearch502Error1` | `src/CompSniper/Models/V1PsaSearch502Error1.cs` |
| `V1PsaSearch503Error1` | `src/CompSniper/Models/V1PsaSearch503Error1.cs` |

