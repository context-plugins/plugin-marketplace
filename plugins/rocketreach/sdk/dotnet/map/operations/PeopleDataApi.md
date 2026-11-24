<!-- Generated file — do not edit; regenerated with the SDK. -->

# PeopleDataApi — operations

Accessor: `client.PeopleDataApi` · Source: `src/RocketReach/Api/PeopleDataApi.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CheckPersonLookupStatus

- **Auth**: `options.RocketReachApiKey`
- **Signature**: `CheckPersonLookupStatus(CheckPersonLookupStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `IReadOnlyList<ProfileApiCompiledCompany>`
- **Error**: `ApiException<CheckPersonLookupStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CheckPersonLookupStatusRequest` | `src/RocketReach/Requests/PeopleDataApi/CheckPersonLookupStatusRequest.cs` |
| `ProfileApiCompiledCompany` | `src/RocketReach/Models/ProfileApiCompiledCompany.cs` |
| `CheckPersonLookupStatusError` | `src/RocketReach/Errors/CheckPersonLookupStatusError.cs` |

### CheckUniversalPersonLookupStatus

- **Auth**: `options.RocketReachApiKey`
- **Signature**: `CheckUniversalPersonLookupStatus(CheckUniversalPersonLookupStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `IReadOnlyList<UniversalCreditPersonLookupOutput>`
- **Error**: `ApiException<CheckUniversalPersonLookupStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CheckUniversalPersonLookupStatusRequest` | `src/RocketReach/Requests/PeopleDataApi/CheckUniversalPersonLookupStatusRequest.cs` |
| `UniversalCreditPersonLookupOutput` | `src/RocketReach/Models/UniversalCreditPersonLookupOutput.cs` |
| `CheckUniversalPersonLookupStatusError` | `src/RocketReach/Errors/CheckUniversalPersonLookupStatusError.cs` |

### CreatePersonAndCompanyLookup2

- **Auth**: `options.RocketReachApiKey`
- **Signature**: `CreatePersonAndCompanyLookup2(CreatePersonAndCompanyLookup2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `current_employer` ← `CurrentEmployer`, `email` ← `Email`, `id` ← `Id`, `linkedin_ext_url` ← `LinkedinExtUrl`, `linkedin_url` ← `LinkedinUrl`, `lookup_type` ← `LookupType`, `Metadata` spread as top-level keys, `name` ← `Name`, `npi_number` ← `NpiNumber`, `phone` ← `Phone`, `return_cached_emails` ← `ReturnCachedEmails`, `title` ← `Title`, `webhook_id` ← `WebhookId`
- **Returns**: `ProfileApiSerializerWithCompiledCompany`
- **Error**: `ApiException<CreatePersonAndCompanyLookup2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePersonAndCompanyLookup2Request` | `src/RocketReach/Requests/PeopleDataApi/CreatePersonAndCompanyLookup2Request.cs` |
| `LookupType` | `src/RocketReach/Models/Enums/LookupType.cs` |
| `ProfileApiSerializerWithCompiledCompany` | `src/RocketReach/Models/ProfileApiSerializerWithCompiledCompany.cs` |
| `CreatePersonAndCompanyLookup2Error` | `src/RocketReach/Errors/CreatePersonAndCompanyLookup2Error.cs` |

### CreatePersonBulkLookup

- **Auth**: `options.RocketReachApiKey`
- **Signature**: `CreatePersonBulkLookup(CreatePersonBulkLookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreatePersonBulkLookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePersonBulkLookupRequest` | `src/RocketReach/Requests/PeopleDataApi/CreatePersonBulkLookupRequest.cs` |
| `ProfileMatch` | `src/RocketReach/Models/ProfileMatch.cs` |
| `CreatePersonBulkLookupError` | `src/RocketReach/Errors/CreatePersonBulkLookupError.cs` |

### CreatePersonLookup

- **Auth**: `options.RocketReachApiKey`
- **Signature**: `CreatePersonLookup(CreatePersonLookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `current_employer` ← `CurrentEmployer`, `email` ← `Email`, `id` ← `Id`, `linkedin_ext_url` ← `LinkedinExtUrl`, `linkedin_url` ← `LinkedinUrl`, `lookup_type` ← `LookupType`, `Metadata` spread as top-level keys, `name` ← `Name`, `npi_number` ← `NpiNumber`, `phone` ← `Phone`, `return_cached_emails` ← `ReturnCachedEmails`, `title` ← `Title`, `webhook_id` ← `WebhookId`
- **Returns**: `ProfileApiWithMetadataCompiledCompany`
- **Error**: `ApiException<CreatePersonLookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePersonLookupRequest` | `src/RocketReach/Requests/PeopleDataApi/CreatePersonLookupRequest.cs` |
| `LookupType` | `src/RocketReach/Models/Enums/LookupType.cs` |
| `ProfileApiWithMetadataCompiledCompany` | `src/RocketReach/Models/ProfileApiWithMetadataCompiledCompany.cs` |
| `CreatePersonLookupError` | `src/RocketReach/Errors/CreatePersonLookupError.cs` |

### CreatePersonSearch

- **Auth**: `options.RocketReachApiKey`
- **Signature**: `CreatePersonSearch(CreatePersonSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<ProfileSearchResultSerializerBase>`
- **Error**: `ApiException<CreatePersonSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePersonSearchRequest` | `src/RocketReach/Requests/PeopleDataApi/CreatePersonSearchRequest.cs` |
| `PersonQuery1` | `src/RocketReach/Models/PersonQuery1.cs` |
| `OrderByEnum` | `src/RocketReach/Models/Enums/OrderByEnum.cs` |
| `ProfileSearchResultSerializerBase` | `src/RocketReach/Models/ProfileSearchResultSerializerBase.cs` |
| `CreatePersonSearchError` | `src/RocketReach/Errors/CreatePersonSearchError.cs` |

### CreateUniversalPersonBulkLookup

- **Auth**: `options.RocketReachApiKey`
- **Signature**: `CreateUniversalPersonBulkLookup(CreateUniversalPersonBulkLookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateUniversalPersonBulkLookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateUniversalPersonBulkLookupRequest` | `src/RocketReach/Requests/PeopleDataApi/CreateUniversalPersonBulkLookupRequest.cs` |
| `UniversalCreditPersonLookupInput` | `src/RocketReach/Models/UniversalCreditPersonLookupInput.cs` |
| `CreateUniversalPersonBulkLookupError` | `src/RocketReach/Errors/CreateUniversalPersonBulkLookupError.cs` |

### CreateUniversalPersonLookup

- **Auth**: `options.RocketReachApiKey`
- **Signature**: `CreateUniversalPersonLookup(CreateUniversalPersonLookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `current_employer` ← `CurrentEmployer`, `email` ← `Email`, `id` ← `Id`, `linkedin_ext_url` ← `LinkedinExtUrl`, `linkedin_url` ← `LinkedinUrl`, `Metadata` spread as top-level keys, `name` ← `Name`, `npi_number` ← `NpiNumber`, `phone` ← `Phone`, `return_cached_emails` ← `ReturnCachedEmails`, `reveal_detailed_person_enrichment` ← `RevealDetailedPersonEnrichment`, `reveal_healthcare_enrichment` ← `RevealHealthcareEnrichment`, `reveal_personal_email` ← `RevealPersonalEmail`, `reveal_phone` ← `RevealPhone`, `reveal_professional_email` ← `RevealProfessionalEmail`, `title` ← `Title`, `webhook_id` ← `WebhookId`
- **Returns**: `UniversalCreditPersonLookupOutputWithMetadata`
- **Error**: `ApiException<CreateUniversalPersonLookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateUniversalPersonLookupRequest` | `src/RocketReach/Requests/PeopleDataApi/CreateUniversalPersonLookupRequest.cs` |
| `UniversalCreditPersonLookupOutputWithMetadata` | `src/RocketReach/Models/UniversalCreditPersonLookupOutputWithMetadata.cs` |
| `CreateUniversalPersonLookupError` | `src/RocketReach/Errors/CreateUniversalPersonLookupError.cs` |

### CreateUniversalPersonSearch

- **Auth**: `options.RocketReachApiKey`
- **Signature**: `CreateUniversalPersonSearch(CreateUniversalPersonSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<UniversalCreditPersonSearchOutput>`
- **Error**: `ApiException<CreateUniversalPersonSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateUniversalPersonSearchRequest` | `src/RocketReach/Requests/PeopleDataApi/CreateUniversalPersonSearchRequest.cs` |
| `PersonQuery` | `src/RocketReach/Models/PersonQuery.cs` |
| `OrderByEnum` | `src/RocketReach/Models/Enums/OrderByEnum.cs` |
| `UniversalCreditPersonSearchOutput` | `src/RocketReach/Models/UniversalCreditPersonSearchOutput.cs` |
| `CreateUniversalPersonSearchError` | `src/RocketReach/Errors/CreateUniversalPersonSearchError.cs` |

