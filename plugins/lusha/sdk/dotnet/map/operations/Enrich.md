<!-- Generated file — do not edit; regenerated with the SDK. -->

# Enrich — operations

Accessor: `client.Enrich` · Source: `src/Lusha/Api/Enrich.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### EnrichCompanies

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `EnrichCompanies(EnrichCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V3CompaniesEnrichResponse`
- **Error**: `ApiException<EnrichCompaniesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EnrichCompaniesRequest` | `src/Lusha/Requests/Enrich/EnrichCompaniesRequest.cs` |
| `V3CompaniesEnrichRequest` | `src/Lusha/Models/V3CompaniesEnrichRequest.cs` |
| `V3CompaniesEnrichResponse` | `src/Lusha/Models/V3CompaniesEnrichResponse.cs` |
| `EnrichCompaniesError` | `src/Lusha/Errors/EnrichCompaniesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### EnrichContacts

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `EnrichContacts(EnrichContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V3ContactsEnrichResponse`
- **Error**: `ApiException<EnrichContactsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EnrichContactsRequest` | `src/Lusha/Requests/Enrich/EnrichContactsRequest.cs` |
| `V3ContactsEnrichRequest` | `src/Lusha/Models/V3ContactsEnrichRequest.cs` |
| `V3ContactsEnrichResponse` | `src/Lusha/Models/V3ContactsEnrichResponse.cs` |
| `EnrichContactsError` | `src/Lusha/Errors/EnrichContactsError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

