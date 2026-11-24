<!-- Generated file — do not edit; regenerated with the SDK. -->

# Depop — operations

Accessor: `client.Depop` · Source: `src/CompSniper/Api/Depop.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetV1DepopListings

- **Auth**: `options.BearerAuth`
- **Signature**: `GetV1DepopListings(GetV1DepopListingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Keyword`
- **Query params (wire ← C#)**: `keyword` ← `Keyword`, `country` ← `Country`, `count` ← `Count`, `cursor` ← `Cursor`
- **Returns**: `V1DepopListingsResponse`
- **Error**: `ApiException<GetV1DepopListingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetV1DepopListings400Error1([NotNullWhen(true)] out V1DepopListings400Error1? value)` [400] · `TryGetV1DepopListings401Error1([NotNullWhen(true)] out V1DepopListings401Error1? value)` [401] · `TryGetV1DepopListings429Error1([NotNullWhen(true)] out V1DepopListings429Error1? value)` [429] · `TryGetV1DepopListings502Error1([NotNullWhen(true)] out V1DepopListings502Error1? value)` [502] · `TryGetV1DepopListings503Error1([NotNullWhen(true)] out V1DepopListings503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetV1DepopListingsRequest` | `src/CompSniper/Requests/Depop/GetV1DepopListingsRequest.cs` |
| `Country` | `src/CompSniper/Models/Enums/Country.cs` |
| `XCreditSource` | `src/CompSniper/Models/Enums/XCreditSource.cs` |
| `V1DepopListingsResponse` | `src/CompSniper/Models/V1DepopListingsResponse.cs` |
| `GetV1DepopListingsError` | `src/CompSniper/Errors/GetV1DepopListingsError.cs` |
| `V1DepopListings400Error1` | `src/CompSniper/Models/V1DepopListings400Error1.cs` |
| `V1DepopListings401Error1` | `src/CompSniper/Models/V1DepopListings401Error1.cs` |
| `V1DepopListings429Error1` | `src/CompSniper/Models/V1DepopListings429Error1.cs` |
| `V1DepopListings502Error1` | `src/CompSniper/Models/V1DepopListings502Error1.cs` |
| `V1DepopListings503Error1` | `src/CompSniper/Models/V1DepopListings503Error1.cs` |

