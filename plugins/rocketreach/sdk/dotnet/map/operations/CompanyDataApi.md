<!-- Generated file — do not edit; regenerated with the SDK. -->

# CompanyDataApi — operations

Accessor: `client.CompanyDataApi` · Source: `src/RocketReach/Api/CompanyDataApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCompanyLookup

- **Auth**: `options.RocketReachApiKey`
- **Signature**: `CreateCompanyLookup(CreateCompanyLookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `domain` ← `Domain`, `id` ← `Id`, `linkedin_url` ← `LinkedinUrl`, `name` ← `Name`, `ticker` ← `Ticker`
- **Returns**: `CompiledCompanyApiSerializerWithExtendedCompanyAttributes`
- **Error**: `ApiException<CreateCompanyLookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCompanyLookupRequest` | `src/RocketReach/Requests/CompanyDataApi/CreateCompanyLookupRequest.cs` |
| `CompiledCompanyApiSerializerWithExtendedCompanyAttributes` | `src/RocketReach/Models/CompiledCompanyApiSerializerWithExtendedCompanyAttributes.cs` |
| `CreateCompanyLookupError` | `src/RocketReach/Errors/CreateCompanyLookupError.cs` |

### CreateCompanySearch

- **Auth**: `options.RocketReachApiKey`
- **Signature**: `CreateCompanySearch(CreateCompanySearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<CompiledCompanyPublicDetails>`
- **Error**: `ApiException<CreateCompanySearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCompanySearchRequest` | `src/RocketReach/Requests/CompanyDataApi/CreateCompanySearchRequest.cs` |
| `CompanyQuery1` | `src/RocketReach/Models/CompanyQuery1.cs` |
| `OrderByEnum` | `src/RocketReach/Models/Enums/OrderByEnum.cs` |
| `CompiledCompanyPublicDetails` | `src/RocketReach/Models/CompiledCompanyPublicDetails.cs` |
| `CreateCompanySearchError` | `src/RocketReach/Errors/CreateCompanySearchError.cs` |

### CreatePersonAndCompanyLookup

- **Auth**: `options.RocketReachApiKey`
- **Signature**: `CreatePersonAndCompanyLookup(CreatePersonAndCompanyLookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `current_employer` ← `CurrentEmployer`, `email` ← `Email`, `id` ← `Id`, `linkedin_ext_url` ← `LinkedinExtUrl`, `linkedin_url` ← `LinkedinUrl`, `lookup_type` ← `LookupType`, `Metadata` spread as top-level keys, `name` ← `Name`, `npi_number` ← `NpiNumber`, `phone` ← `Phone`, `return_cached_emails` ← `ReturnCachedEmails`, `title` ← `Title`, `webhook_id` ← `WebhookId`
- **Returns**: `ProfileApiSerializerWithCompiledCompany`
- **Error**: `ApiException<CreatePersonAndCompanyLookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePersonAndCompanyLookupRequest` | `src/RocketReach/Requests/CompanyDataApi/CreatePersonAndCompanyLookupRequest.cs` |
| `LookupType` | `src/RocketReach/Models/Enums/LookupType.cs` |
| `ProfileApiSerializerWithCompiledCompany` | `src/RocketReach/Models/ProfileApiSerializerWithCompiledCompany.cs` |
| `CreatePersonAndCompanyLookupError` | `src/RocketReach/Errors/CreatePersonAndCompanyLookupError.cs` |

### CreateUniversalCompanyLookup

- **Auth**: `options.RocketReachApiKey`
- **Signature**: `CreateUniversalCompanyLookup(CreateUniversalCompanyLookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `domain` ← `Domain`, `id` ← `Id`, `linkedin_url` ← `LinkedinUrl`, `name` ← `Name`, `ticker` ← `Ticker`
- **Returns**: `CompiledCompanyApiSerializerWithExtendedCompanyAttributes`
- **Error**: `ApiException<CreateUniversalCompanyLookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateUniversalCompanyLookupRequest` | `src/RocketReach/Requests/CompanyDataApi/CreateUniversalCompanyLookupRequest.cs` |
| `CompiledCompanyApiSerializerWithExtendedCompanyAttributes` | `src/RocketReach/Models/CompiledCompanyApiSerializerWithExtendedCompanyAttributes.cs` |
| `CreateUniversalCompanyLookupError` | `src/RocketReach/Errors/CreateUniversalCompanyLookupError.cs` |

### CreateUniversalCompanySearch

- **Auth**: `options.RocketReachApiKey`
- **Signature**: `CreateUniversalCompanySearch(CreateUniversalCompanySearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<UniversalCreditCompanySearchOutput>`
- **Error**: `ApiException<CreateUniversalCompanySearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateUniversalCompanySearchRequest` | `src/RocketReach/Requests/CompanyDataApi/CreateUniversalCompanySearchRequest.cs` |
| `CompanyQuery` | `src/RocketReach/Models/CompanyQuery.cs` |
| `OrderByEnum` | `src/RocketReach/Models/Enums/OrderByEnum.cs` |
| `UniversalCreditCompanySearchOutput` | `src/RocketReach/Models/UniversalCreditCompanySearchOutput.cs` |
| `CreateUniversalCompanySearchError` | `src/RocketReach/Errors/CreateUniversalCompanySearchError.cs` |

