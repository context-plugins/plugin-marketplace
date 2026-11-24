<!-- Generated file — do not edit; regenerated with the SDK. -->

# Lookalikes — operations

Accessor: `client.Lookalikes` · Source: `src/Lusha/Api/Lookalikes.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCompanyLookalikes

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetCompanyLookalikes(GetCompanyLookalikesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CompanyLookalikesResponse`
- **Error**: `ApiException<GetCompanyLookalikesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 410, 500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompanyLookalikesRequest` | `src/Lusha/Requests/Lookalikes/GetCompanyLookalikesRequest.cs` |
| `CompanyLookalikesRequest` | `src/Lusha/Models/CompanyLookalikesRequest.cs` |
| `CompanyLookalikesResponse` | `src/Lusha/Models/CompanyLookalikesResponse.cs` |
| `GetCompanyLookalikesError` | `src/Lusha/Errors/GetCompanyLookalikesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetContactLookalikes

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetContactLookalikes(GetContactLookalikesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ContactLookalikesResponse`
- **Error**: `ApiException<GetContactLookalikesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetDedupeSessionInvalidError([NotNullWhen(true)] out DedupeSessionInvalidError? value)` [410] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetContactLookalikesRequest` | `src/Lusha/Requests/Lookalikes/GetContactLookalikesRequest.cs` |
| `ContactLookalikesRequest` | `src/Lusha/Models/ContactLookalikesRequest.cs` |
| `ContactLookalikesResponse` | `src/Lusha/Models/ContactLookalikesResponse.cs` |
| `GetContactLookalikesError` | `src/Lusha/Errors/GetContactLookalikesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |
| `DedupeSessionInvalidError` | `src/Lusha/Models/DedupeSessionInvalidError.cs` |

### PostV3LookalikeCompanies

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostV3LookalikeCompanies(PostV3LookalikeCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CompanyLookalikesResponse2`
- **Error**: `ApiException<PostV3LookalikeCompaniesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 410, 500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostV3LookalikeCompaniesRequest` | `src/Lusha/Requests/Lookalikes/PostV3LookalikeCompaniesRequest.cs` |
| `CompanyLookalikesRequest2` | `src/Lusha/Models/CompanyLookalikesRequest2.cs` |
| `CompanyLookalikesResponse2` | `src/Lusha/Models/CompanyLookalikesResponse2.cs` |
| `PostV3LookalikeCompaniesError` | `src/Lusha/Errors/PostV3LookalikeCompaniesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### PostV3LookalikeContacts

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostV3LookalikeContacts(PostV3LookalikeContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ContactLookalikesResponse2`
- **Error**: `ApiException<PostV3LookalikeContactsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetDedupeSessionInvalidError([NotNullWhen(true)] out DedupeSessionInvalidError? value)` [410] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostV3LookalikeContactsRequest` | `src/Lusha/Requests/Lookalikes/PostV3LookalikeContactsRequest.cs` |
| `ContactLookalikesRequest2` | `src/Lusha/Models/ContactLookalikesRequest2.cs` |
| `ContactLookalikesResponse2` | `src/Lusha/Models/ContactLookalikesResponse2.cs` |
| `PostV3LookalikeContactsError` | `src/Lusha/Errors/PostV3LookalikeContactsError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |
| `DedupeSessionInvalidError` | `src/Lusha/Models/DedupeSessionInvalidError.cs` |

