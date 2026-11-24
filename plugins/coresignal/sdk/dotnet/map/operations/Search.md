<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.Search` · Source: `src/Coresignal/Api/Search.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SearchCompaniesByEsDsl

- **Auth**: `options.ApiKey`
- **Signature**: `SearchCompaniesByEsDsl(SearchCompaniesByEsDslRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IReadOnlyList<long>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SearchCompaniesByEsDslRequest` | `src/Coresignal/Requests/Search/SearchCompaniesByEsDslRequest.cs` |

### SearchCompaniesByFilter

- **Auth**: `options.ApiKey`
- **Signature**: `SearchCompaniesByFilter(SearchCompaniesByFilterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IReadOnlyList<long>`
- **Error**: `ApiException<SearchCompaniesByFilterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 402, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchCompaniesByFilterRequest` | `src/Coresignal/Requests/Search/SearchCompaniesByFilterRequest.cs` |
| `CompanyFilter` | `src/Coresignal/Models/CompanyFilter.cs` |
| `SearchCompaniesByFilterError` | `src/Coresignal/Errors/SearchCompaniesByFilterError.cs` |

