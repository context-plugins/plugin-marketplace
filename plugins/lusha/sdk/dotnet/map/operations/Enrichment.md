<!-- Generated file — do not edit; regenerated with the SDK. -->

# Enrichment — operations

Accessor: `client.Enrichment` · Source: `src/Lusha/Api/Enrichment.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SearchMultipleCompaniesV2

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SearchMultipleCompaniesV2(SearchMultipleCompaniesV2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IReadOnlyDictionary<string, CompanyBulkResponse>`
- **Error**: `ApiException<SearchMultipleCompaniesV2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchMultipleCompaniesV2Request` | `src/Lusha/Requests/Enrichment/SearchMultipleCompaniesV2Request.cs` |
| `CompaniesBulkRequest` | `src/Lusha/Models/CompaniesBulkRequest.cs` |
| `CompanyBulkResponse` | `src/Lusha/Models/CompanyBulkResponse.cs` |
| `SearchMultipleCompaniesV2Error` | `src/Lusha/Errors/SearchMultipleCompaniesV2Error.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### SearchMultipleContacts

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SearchMultipleContacts(SearchMultipleContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BulkPersonResponse`
- **Error**: `ApiException<SearchMultipleContactsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchMultipleContactsRequest` | `src/Lusha/Requests/Enrichment/SearchMultipleContactsRequest.cs` |
| `SearchBulkContactsRequest` | `src/Lusha/Models/SearchBulkContactsRequest.cs` |
| `BulkPersonResponse` | `src/Lusha/Models/BulkPersonResponse.cs` |
| `SearchMultipleContactsError` | `src/Lusha/Errors/SearchMultipleContactsError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### SearchSingleCompanyV2

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SearchSingleCompanyV2(SearchSingleCompanyV2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `domain` ← `Domain`, `company` ← `Company`, `companyId` ← `CompanyId`, `signals` ← `Signals`, `signalsStartDate` ← `SignalsStartDate`, `partialCompany` ← `PartialCompany`
- **Returns**: `CompanySingleResponse`
- **Error**: `ApiException<SearchSingleCompanyV2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchSingleCompanyV2Request` | `src/Lusha/Requests/Enrichment/SearchSingleCompanyV2Request.cs` |
| `Signal1` | `src/Lusha/Models/Enums/Signal1.cs` |
| `CompanySingleResponse` | `src/Lusha/Models/CompanySingleResponse.cs` |
| `SearchSingleCompanyV2Error` | `src/Lusha/Errors/SearchSingleCompanyV2Error.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### SearchSingleContact

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SearchSingleContact(SearchSingleContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `firstName` ← `FirstName`, `lastName` ← `LastName`, `personId` ← `PersonId`, `companyName` ← `CompanyName`, `companyDomain` ← `CompanyDomain`, `email` ← `Email`, `linkedinUrl` ← `LinkedinUrl`, `refreshJobInfo` ← `RefreshJobInfo`, `filterBy` ← `FilterBy`, `revealEmails` ← `RevealEmails`, `revealPhones` ← `RevealPhones`, `signals` ← `Signals`, `signalsStartDate` ← `SignalsStartDate`, `partialProfile` ← `PartialProfile`
- **Returns**: `SingleContactResponse`
- **Error**: `ApiException<SearchSingleContactError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 451, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchSingleContactRequest` | `src/Lusha/Requests/Enrichment/SearchSingleContactRequest.cs` |
| `FilterBy` | `src/Lusha/Models/Enums/FilterBy.cs` |
| `Signal` | `src/Lusha/Models/Enums/Signal.cs` |
| `SingleContactResponse` | `src/Lusha/Models/SingleContactResponse.cs` |
| `SearchSingleContactError` | `src/Lusha/Errors/SearchSingleContactError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

