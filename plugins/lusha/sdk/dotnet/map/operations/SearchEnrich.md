<!-- Generated file — do not edit; regenerated with the SDK. -->

# SearchEnrich — operations

Accessor: `client.SearchEnrich` · Source: `src/Lusha/Api/SearchEnrich.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SearchAndEnrichCompanies

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SearchAndEnrichCompanies(SearchAndEnrichCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V3CompaniesSearchAndEnrichResponse`
- **Error**: `ApiException<SearchAndEnrichCompaniesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchAndEnrichCompaniesRequest` | `src/Lusha/Requests/SearchEnrich/SearchAndEnrichCompaniesRequest.cs` |
| `V3CompaniesSearchAndEnrichRequest` | `src/Lusha/Models/V3CompaniesSearchAndEnrichRequest.cs` |
| `V3CompaniesSearchAndEnrichResponse` | `src/Lusha/Models/V3CompaniesSearchAndEnrichResponse.cs` |
| `SearchAndEnrichCompaniesError` | `src/Lusha/Errors/SearchAndEnrichCompaniesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### SearchAndEnrichContacts

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SearchAndEnrichContacts(SearchAndEnrichContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V3ContactsSearchAndEnrichResponse`
- **Error**: `ApiException<SearchAndEnrichContactsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchAndEnrichContactsRequest` | `src/Lusha/Requests/SearchEnrich/SearchAndEnrichContactsRequest.cs` |
| `V3ContactsSearchAndEnrichRequest` | `src/Lusha/Models/V3ContactsSearchAndEnrichRequest.cs` |
| `V3ContactsSearchAndEnrichResponse` | `src/Lusha/Models/V3ContactsSearchAndEnrichResponse.cs` |
| `SearchAndEnrichContactsError` | `src/Lusha/Errors/SearchAndEnrichContactsError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

