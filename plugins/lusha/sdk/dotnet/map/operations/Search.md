<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.Search` · Source: `src/Lusha/Api/Search.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SearchCompanies

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SearchCompanies(SearchCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V3CompaniesSearchResponse`
- **Error**: `ApiException<SearchCompaniesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchCompaniesRequest` | `src/Lusha/Requests/Search/SearchCompaniesRequest.cs` |
| `V3CompaniesSearchRequest` | `src/Lusha/Models/V3CompaniesSearchRequest.cs` |
| `V3CompaniesSearchResponse` | `src/Lusha/Models/V3CompaniesSearchResponse.cs` |
| `SearchCompaniesError` | `src/Lusha/Errors/SearchCompaniesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### SearchContacts

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SearchContacts(SearchContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V3ContactsSearchResponse`
- **Error**: `ApiException<SearchContactsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchContactsRequest` | `src/Lusha/Requests/Search/SearchContactsRequest.cs` |
| `V3ContactsSearchRequest` | `src/Lusha/Models/V3ContactsSearchRequest.cs` |
| `V3ContactsSearchResponse` | `src/Lusha/Models/V3ContactsSearchResponse.cs` |
| `SearchContactsError` | `src/Lusha/Errors/SearchContactsError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

