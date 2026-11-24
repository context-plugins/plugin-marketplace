<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProspectingSearchEnrich — operations

Accessor: `client.ProspectingSearchEnrich` · Source: `src/Lusha/Api/ProspectingSearchEnrich.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### EnrichProspectingCompanies

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `EnrichProspectingCompanies(EnrichProspectingCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CompanyEnrichResponse`
- **Error**: `ApiException<EnrichProspectingCompaniesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EnrichProspectingCompaniesRequest` | `src/Lusha/Requests/ProspectingSearchEnrich/EnrichProspectingCompaniesRequest.cs` |
| `CompanyEnrichRequest` | `src/Lusha/Models/CompanyEnrichRequest.cs` |
| `CompanyEnrichResponse` | `src/Lusha/Models/CompanyEnrichResponse.cs` |
| `EnrichProspectingCompaniesError` | `src/Lusha/Errors/EnrichProspectingCompaniesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### EnrichProspectingContacts

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `EnrichProspectingContacts(EnrichProspectingContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ContactEnrichResponse`
- **Error**: `ApiException<EnrichProspectingContactsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EnrichProspectingContactsRequest` | `src/Lusha/Requests/ProspectingSearchEnrich/EnrichProspectingContactsRequest.cs` |
| `ContactEnrichRequest` | `src/Lusha/Models/ContactEnrichRequest.cs` |
| `ContactEnrichResponse` | `src/Lusha/Models/ContactEnrichResponse.cs` |
| `EnrichProspectingContactsError` | `src/Lusha/Errors/EnrichProspectingContactsError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### SearchProspectingCompanies

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SearchProspectingCompanies(SearchProspectingCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CompanySearchResponse`
- **Error**: `ApiException<SearchProspectingCompaniesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchProspectingCompaniesRequest` | `src/Lusha/Requests/ProspectingSearchEnrich/SearchProspectingCompaniesRequest.cs` |
| `CompanySearchRequest` | `src/Lusha/Models/CompanySearchRequest.cs` |
| `CompanySearchResponse` | `src/Lusha/Models/CompanySearchResponse.cs` |
| `SearchProspectingCompaniesError` | `src/Lusha/Errors/SearchProspectingCompaniesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### SearchProspectingContacts

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SearchProspectingContacts(SearchProspectingContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ContactSearchResponse`
- **Error**: `ApiException<SearchProspectingContactsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchProspectingContactsRequest` | `src/Lusha/Requests/ProspectingSearchEnrich/SearchProspectingContactsRequest.cs` |
| `ContactSearchRequest` | `src/Lusha/Models/ContactSearchRequest.cs` |
| `ContactSearchResponse` | `src/Lusha/Models/ContactSearchResponse.cs` |
| `SearchProspectingContactsError` | `src/Lusha/Errors/SearchProspectingContactsError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

