<!-- Generated file — do not edit; regenerated with the SDK. -->

# Prospecting — operations

Accessor: `client.Prospecting` · Source: `src/Lusha/Api/Prospecting.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ProspectingCompanies

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ProspectingCompanies(ProspectingCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V3ProspectingCompaniesResponse`
- **Error**: `ApiException<ProspectingCompaniesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ProspectingCompaniesRequest` | `src/Lusha/Requests/Prospecting/ProspectingCompaniesRequest.cs` |
| `V3ProspectingCompaniesRequest` | `src/Lusha/Models/V3ProspectingCompaniesRequest.cs` |
| `V3ProspectingCompaniesResponse` | `src/Lusha/Models/V3ProspectingCompaniesResponse.cs` |
| `ProspectingCompaniesError` | `src/Lusha/Errors/ProspectingCompaniesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### ProspectingContacts

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ProspectingContacts(ProspectingContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V3ProspectingContactsResponse`
- **Error**: `ApiException<ProspectingContactsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ProspectingContactsRequest` | `src/Lusha/Requests/Prospecting/ProspectingContactsRequest.cs` |
| `V3ProspectingContactsRequest` | `src/Lusha/Models/V3ProspectingContactsRequest.cs` |
| `V3ProspectingContactsResponse` | `src/Lusha/Models/V3ProspectingContactsResponse.cs` |
| `ProspectingContactsError` | `src/Lusha/Errors/ProspectingContactsError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

