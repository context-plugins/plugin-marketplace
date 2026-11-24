<!-- Generated file — do not edit; regenerated with the SDK. -->

# Companies — operations

Accessor: `client.Companies` · Source: `src/Surfe/Api/Companies.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCompanyEnrichment

- **Auth**: `options.BearerAuth`
- **Signature**: `GetCompanyEnrichment(GetCompanyEnrichmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `CompanyEnrichmentResult`
- **Error**: `ApiException<GetCompanyEnrichmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompanyEnrichmentRequest` | `src/Surfe/Requests/Companies/GetCompanyEnrichmentRequest.cs` |
| `CompanyEnrichmentResult` | `src/Surfe/Models/CompanyEnrichmentResult.cs` |
| `GetCompanyEnrichmentError` | `src/Surfe/Errors/GetCompanyEnrichmentError.cs` |
| `Error` | `src/Surfe/Models/Error.cs` |

### SearchCompanies

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchCompanies(SearchCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CompanySearchResponse`
- **Error**: `ApiException<SearchCompaniesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 402, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchCompaniesRequest` | `src/Surfe/Requests/Companies/SearchCompaniesRequest.cs` |
| `CompanySearchRequest` | `src/Surfe/Models/CompanySearchRequest.cs` |
| `CompanySearchResponse` | `src/Surfe/Models/CompanySearchResponse.cs` |
| `SearchCompaniesError` | `src/Surfe/Errors/SearchCompaniesError.cs` |
| `Error` | `src/Surfe/Models/Error.cs` |

### StartCompanyEnrichment

- **Auth**: `options.BearerAuth`
- **Signature**: `StartCompanyEnrichment(StartCompanyEnrichmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `EnrichmentJobAccepted`
- **Error**: `ApiException<StartCompanyEnrichmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 402, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartCompanyEnrichmentRequest` | `src/Surfe/Requests/Companies/StartCompanyEnrichmentRequest.cs` |
| `CompanyEnrichmentRequest` | `src/Surfe/Models/CompanyEnrichmentRequest.cs` |
| `EnrichmentJobAccepted` | `src/Surfe/Models/EnrichmentJobAccepted.cs` |
| `StartCompanyEnrichmentError` | `src/Surfe/Errors/StartCompanyEnrichmentError.cs` |
| `Error` | `src/Surfe/Models/Error.cs` |

