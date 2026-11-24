<!-- Generated file — do not edit; regenerated with the SDK. -->

# CompanyFiltersApi — operations

Accessor: `client.CompanyFiltersApi` · Source: `src/Lusha/Api/CompanyFiltersApi.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCompanyIndustries

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetCompanyIndustries(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<IndustryLabel>`
- **Error**: `ApiException<GetCompanyIndustriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IndustryLabel` | `src/Lusha/Models/IndustryLabel.cs` |
| `GetCompanyIndustriesError` | `src/Lusha/Errors/GetCompanyIndustriesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetCompanyIntentTopics

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetCompanyIntentTopics(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<string>`
- **Error**: `ApiException<GetCompanyIntentTopicsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompanyIntentTopicsError` | `src/Lusha/Errors/GetCompanyIntentTopicsError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetCompanyNaicsCodes

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetCompanyNaicsCodes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<NaicsCode>`
- **Error**: `ApiException<GetCompanyNaicsCodesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NaicsCode` | `src/Lusha/Models/NaicsCode.cs` |
| `GetCompanyNaicsCodesError` | `src/Lusha/Errors/GetCompanyNaicsCodesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetCompanyRevenues

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetCompanyRevenues(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<RevenueRange>`
- **Error**: `ApiException<GetCompanyRevenuesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RevenueRange` | `src/Lusha/Models/RevenueRange.cs` |
| `GetCompanyRevenuesError` | `src/Lusha/Errors/GetCompanyRevenuesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetCompanySicCodes

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetCompanySicCodes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<SicCode>`
- **Error**: `ApiException<GetCompanySicCodesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SicCode` | `src/Lusha/Models/SicCode.cs` |
| `GetCompanySicCodesError` | `src/Lusha/Errors/GetCompanySicCodesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetCompanySizes

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetCompanySizes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<CompanySizeRange>`
- **Error**: `ApiException<GetCompanySizesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CompanySizeRange` | `src/Lusha/Models/CompanySizeRange.cs` |
| `GetCompanySizesError` | `src/Lusha/Errors/GetCompanySizesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### SearchCompanyLocations

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SearchCompanyLocations(SearchCompanyLocationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IReadOnlyList<CompanyLocationFilter>`
- **Error**: `ApiException<SearchCompanyLocationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchCompanyLocationsRequest` | `src/Lusha/Requests/CompanyFiltersApi/SearchCompanyLocationsRequest.cs` |
| `LocationSearchRequest` | `src/Lusha/Models/LocationSearchRequest.cs` |
| `CompanyLocationFilter` | `src/Lusha/Models/CompanyLocationFilter.cs` |
| `SearchCompanyLocationsError` | `src/Lusha/Errors/SearchCompanyLocationsError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### SearchCompanyNames

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SearchCompanyNames(SearchCompanyNamesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IReadOnlyList<CompanyNameResult>`
- **Error**: `ApiException<SearchCompanyNamesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchCompanyNamesRequest` | `src/Lusha/Requests/CompanyFiltersApi/SearchCompanyNamesRequest.cs` |
| `CompanyNameSearchRequest` | `src/Lusha/Models/CompanyNameSearchRequest.cs` |
| `CompanyNameResult` | `src/Lusha/Models/CompanyNameResult.cs` |
| `SearchCompanyNamesError` | `src/Lusha/Errors/SearchCompanyNamesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### SearchCompanyTechnologies

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SearchCompanyTechnologies(SearchCompanyTechnologiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IReadOnlyList<Technology>`
- **Error**: `ApiException<SearchCompanyTechnologiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchCompanyTechnologiesRequest` | `src/Lusha/Requests/CompanyFiltersApi/SearchCompanyTechnologiesRequest.cs` |
| `TechnologySearchRequest` | `src/Lusha/Models/TechnologySearchRequest.cs` |
| `Technology` | `src/Lusha/Models/Technology.cs` |
| `SearchCompanyTechnologiesError` | `src/Lusha/Errors/SearchCompanyTechnologiesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

