<!-- Generated file — do not edit; regenerated with the SDK. -->

# TcGplayer — operations

Accessor: `client.TcGplayer` · Source: `src/CompSniper/Api/TcGplayer.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetV1TcgplayerListings

- **Auth**: `options.BearerAuth`
- **Signature**: `GetV1TcgplayerListings(GetV1TcgplayerListingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `keyword` ← `Keyword`, `productId` ← `ProductId`, `page` ← `Page`, `count` ← `Count`, `condition` ← `Condition`, `variant` ← `Variant`, `language` ← `Language`
- **Returns**: `V1TcgplayerListingsResponse`
- **Error**: `ApiException<GetV1TcgplayerListingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetV1TcgplayerListings400Error1([NotNullWhen(true)] out V1TcgplayerListings400Error1? value)` [400] · `TryGetV1TcgplayerListings401Error1([NotNullWhen(true)] out V1TcgplayerListings401Error1? value)` [401] · `TryGetV1TcgplayerListings429Error1([NotNullWhen(true)] out V1TcgplayerListings429Error1? value)` [429] · `TryGetV1TcgplayerListings502Error1([NotNullWhen(true)] out V1TcgplayerListings502Error1? value)` [502] · `TryGetV1TcgplayerListings503Error1([NotNullWhen(true)] out V1TcgplayerListings503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetV1TcgplayerListingsRequest` | `src/CompSniper/Requests/TcGplayer/GetV1TcgplayerListingsRequest.cs` |
| `XCreditSource` | `src/CompSniper/Models/Enums/XCreditSource.cs` |
| `V1TcgplayerListingsResponse` | `src/CompSniper/Models/V1TcgplayerListingsResponse.cs` |
| `GetV1TcgplayerListingsError` | `src/CompSniper/Errors/GetV1TcgplayerListingsError.cs` |
| `V1TcgplayerListings400Error1` | `src/CompSniper/Models/V1TcgplayerListings400Error1.cs` |
| `V1TcgplayerListings401Error1` | `src/CompSniper/Models/V1TcgplayerListings401Error1.cs` |
| `V1TcgplayerListings429Error1` | `src/CompSniper/Models/V1TcgplayerListings429Error1.cs` |
| `V1TcgplayerListings502Error1` | `src/CompSniper/Models/V1TcgplayerListings502Error1.cs` |
| `V1TcgplayerListings503Error1` | `src/CompSniper/Models/V1TcgplayerListings503Error1.cs` |

### GetV1TcgplayerSold

- **Auth**: `options.BearerAuth`
- **Signature**: `GetV1TcgplayerSold(GetV1TcgplayerSoldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `keyword` ← `Keyword`, `productId` ← `ProductId`, `count` ← `Count`, `condition` ← `Condition`, `variant` ← `Variant`, `language` ← `Language`, `history` ← `History`, `soldAfter` ← `SoldAfter`, `soldBefore` ← `SoldBefore`, `fresh` ← `Fresh`
- **Returns**: `V1TcgplayerSoldResponse`
- **Error**: `ApiException<GetV1TcgplayerSoldError>` — **Case A (typed)**
- **Error accessors**: `TryGetV1TcgplayerSold400Error1([NotNullWhen(true)] out V1TcgplayerSold400Error1? value)` [400] · `TryGetV1TcgplayerSold401Error1([NotNullWhen(true)] out V1TcgplayerSold401Error1? value)` [401] · `TryGetV1TcgplayerSold429Error1([NotNullWhen(true)] out V1TcgplayerSold429Error1? value)` [429] · `TryGetV1TcgplayerSold502Error1([NotNullWhen(true)] out V1TcgplayerSold502Error1? value)` [502] · `TryGetV1TcgplayerSold503Error1([NotNullWhen(true)] out V1TcgplayerSold503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetV1TcgplayerSoldRequest` | `src/CompSniper/Requests/TcGplayer/GetV1TcgplayerSoldRequest.cs` |
| `History` | `src/CompSniper/Models/Enums/History.cs` |
| `XCreditSource` | `src/CompSniper/Models/Enums/XCreditSource.cs` |
| `V1TcgplayerSoldResponse` | `src/CompSniper/Models/V1TcgplayerSoldResponse.cs` |
| `GetV1TcgplayerSoldError` | `src/CompSniper/Errors/GetV1TcgplayerSoldError.cs` |
| `V1TcgplayerSold400Error1` | `src/CompSniper/Models/V1TcgplayerSold400Error1.cs` |
| `V1TcgplayerSold401Error1` | `src/CompSniper/Models/V1TcgplayerSold401Error1.cs` |
| `V1TcgplayerSold429Error1` | `src/CompSniper/Models/V1TcgplayerSold429Error1.cs` |
| `V1TcgplayerSold502Error1` | `src/CompSniper/Models/V1TcgplayerSold502Error1.cs` |
| `V1TcgplayerSold503Error1` | `src/CompSniper/Models/V1TcgplayerSold503Error1.cs` |

