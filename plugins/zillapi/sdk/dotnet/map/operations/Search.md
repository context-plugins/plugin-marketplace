<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.Search` · Source: `src/Zillapi/Api/Search.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SearchInvoke

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchInvoke(SearchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SearchResultsOk`
- **Error**: `ApiException<SearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchOperationRequest` | `src/Zillapi/Requests/Search/SearchOperationRequest.cs` |
| `SearchRequest2` | `src/Zillapi/Models/AnyOf/SearchRequest2.cs` |
| `SearchResultsOk` | `src/Zillapi/Models/SearchResultsOk.cs` |
| `SearchError` | `src/Zillapi/Errors/SearchError.cs` |
| `ApiErrorModel` | `src/Zillapi/Models/ApiErrorModel.cs` |

### SearchWithDetails

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchWithDetails(SearchWithDetailsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `JobAcceptedZillapiZillowPropertyDataListingsApi`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SearchWithDetailsOperationRequest` | `src/Zillapi/Requests/Search/SearchWithDetailsOperationRequest.cs` |
| `SearchWithDetailsRequest` | `src/Zillapi/Models/SearchWithDetailsRequest.cs` |
| `JobAcceptedZillapiZillowPropertyDataListingsApi` | `src/Zillapi/Models/JobAcceptedZillapiZillowPropertyDataListingsApi.cs` |

