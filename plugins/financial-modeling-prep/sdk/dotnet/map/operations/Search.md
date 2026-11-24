<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.Search` · Source: `src/FinancialModelingPrep/Api/Search.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SearchSymbols

- **Auth**: `options.ApiKeyQuery`
- **Signature**: `SearchSymbols(SearchSymbolsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Query`
- **Query params (wire ← C#)**: `query` ← `Query`, `limit` ← `Limit`, `exchange` ← `Exchange`
- **Returns**: `IReadOnlyList<SearchResponse>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SearchSymbolsRequest` | `src/FinancialModelingPrep/Requests/Search/SearchSymbolsRequest.cs` |
| `SearchResponse` | `src/FinancialModelingPrep/Models/SearchResponse.cs` |

