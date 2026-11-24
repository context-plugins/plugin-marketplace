<!-- Generated file — do not edit; regenerated with the SDK. -->

# GeographicAccess — operations

Accessor: `client.GeographicAccess` · Source: `src/DoiT/Api/GeographicAccess.cs` · 12 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateGeographicAccessCustomRegion

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `CreateGeographicAccessCustomRegion(CreateGeographicAccessCustomRegionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `GeographicAccessCustomRegion`
- **Error**: `ApiException<CreateGeographicAccessCustomRegionError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 409, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateGeographicAccessCustomRegionOperationRequest` | `src/DoiT/Requests/GeographicAccess/CreateGeographicAccessCustomRegionOperationRequest.cs` |
| `CreateGeographicAccessCustomRegionRequest` | `src/DoiT/Models/CreateGeographicAccessCustomRegionRequest.cs` |
| `GeographicAccessCustomRegion` | `src/DoiT/Models/GeographicAccessCustomRegion.cs` |
| `CreateGeographicAccessCustomRegionError` | `src/DoiT/Errors/CreateGeographicAccessCustomRegionError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### DeleteCustomerGeographicAccessScope

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DeleteCustomerGeographicAccessScope(DeleteCustomerGeographicAccessScopeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TargetCustomerId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteCustomerGeographicAccessScopeError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 409, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCustomerGeographicAccessScopeRequest` | `src/DoiT/Requests/GeographicAccess/DeleteCustomerGeographicAccessScopeRequest.cs` |
| `DeleteCustomerGeographicAccessScopeError` | `src/DoiT/Errors/DeleteCustomerGeographicAccessScopeError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### DeleteGeographicAccessCustomRegion

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DeleteGeographicAccessCustomRegion(DeleteGeographicAccessCustomRegionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomRegionId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteGeographicAccessCustomRegionError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 409, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteGeographicAccessCustomRegionRequest` | `src/DoiT/Requests/GeographicAccess/DeleteGeographicAccessCustomRegionRequest.cs` |
| `DeleteGeographicAccessCustomRegionError` | `src/DoiT/Errors/DeleteGeographicAccessCustomRegionError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### DeleteUserGeographicAccessScope

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DeleteUserGeographicAccessScope(DeleteUserGeographicAccessScopeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TargetCustomerId`, `UserId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteUserGeographicAccessScopeError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 409, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteUserGeographicAccessScopeRequest` | `src/DoiT/Requests/GeographicAccess/DeleteUserGeographicAccessScopeRequest.cs` |
| `DeleteUserGeographicAccessScopeError` | `src/DoiT/Errors/DeleteUserGeographicAccessScopeError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### GetCustomerGeographicAccessScope

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetCustomerGeographicAccessScope(GetCustomerGeographicAccessScopeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TargetCustomerId`
- **Returns**: `GeographicAccessScope`
- **Error**: `ApiException<GetCustomerGeographicAccessScopeError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 409, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomerGeographicAccessScopeRequest` | `src/DoiT/Requests/GeographicAccess/GetCustomerGeographicAccessScopeRequest.cs` |
| `GeographicAccessScope` | `src/DoiT/Models/OneOf/GeographicAccessScope.cs` |
| `GetCustomerGeographicAccessScopeError` | `src/DoiT/Errors/GetCustomerGeographicAccessScopeError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### GetGeographicAccessCustomRegion

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetGeographicAccessCustomRegion(GetGeographicAccessCustomRegionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomRegionId`
- **Returns**: `GeographicAccessCustomRegion`
- **Error**: `ApiException<GetGeographicAccessCustomRegionError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGeographicAccessCustomRegionRequest` | `src/DoiT/Requests/GeographicAccess/GetGeographicAccessCustomRegionRequest.cs` |
| `GeographicAccessCustomRegion` | `src/DoiT/Models/GeographicAccessCustomRegion.cs` |
| `GetGeographicAccessCustomRegionError` | `src/DoiT/Errors/GetGeographicAccessCustomRegionError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### GetUserGeographicAccessScope

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetUserGeographicAccessScope(GetUserGeographicAccessScopeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TargetCustomerId`, `UserId`
- **Returns**: `GeographicAccessScope`
- **Error**: `ApiException<GetUserGeographicAccessScopeError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 409, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUserGeographicAccessScopeRequest` | `src/DoiT/Requests/GeographicAccess/GetUserGeographicAccessScopeRequest.cs` |
| `GeographicAccessScope` | `src/DoiT/Models/OneOf/GeographicAccessScope.cs` |
| `GetUserGeographicAccessScopeError` | `src/DoiT/Errors/GetUserGeographicAccessScopeError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### ListGeographicAccessCountries

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListGeographicAccessCountries(ListGeographicAccessCountriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GeographicAccessCountriesResponse`
- **Error**: `ApiException<ListGeographicAccessCountriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListGeographicAccessCountriesRequest` | `src/DoiT/Requests/GeographicAccess/ListGeographicAccessCountriesRequest.cs` |
| `GeographicAccessCountriesResponse` | `src/DoiT/Models/GeographicAccessCountriesResponse.cs` |
| `ListGeographicAccessCountriesError` | `src/DoiT/Errors/ListGeographicAccessCountriesError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListGeographicAccessCustomRegions

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListGeographicAccessCustomRegions(ListGeographicAccessCustomRegionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GeographicAccessCustomRegionsResponse`
- **Error**: `ApiException<ListGeographicAccessCustomRegionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListGeographicAccessCustomRegionsRequest` | `src/DoiT/Requests/GeographicAccess/ListGeographicAccessCustomRegionsRequest.cs` |
| `GeographicAccessCustomRegionsResponse` | `src/DoiT/Models/GeographicAccessCustomRegionsResponse.cs` |
| `ListGeographicAccessCustomRegionsError` | `src/DoiT/Errors/ListGeographicAccessCustomRegionsError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### UpdateCustomerGeographicAccessScope

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UpdateCustomerGeographicAccessScope(UpdateCustomerGeographicAccessScopeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TargetCustomerId`, `Body`
- **Returns**: `GeographicAccessScope`
- **Error**: `ApiException<UpdateCustomerGeographicAccessScopeError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 409, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCustomerGeographicAccessScopeRequest` | `src/DoiT/Requests/GeographicAccess/UpdateCustomerGeographicAccessScopeRequest.cs` |
| `UpdateGeographicAccessScopeRequest` | `src/DoiT/Models/OneOf/UpdateGeographicAccessScopeRequest.cs` |
| `GeographicAccessScope` | `src/DoiT/Models/OneOf/GeographicAccessScope.cs` |
| `UpdateCustomerGeographicAccessScopeError` | `src/DoiT/Errors/UpdateCustomerGeographicAccessScopeError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### UpdateGeographicAccessCustomRegion

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UpdateGeographicAccessCustomRegion(UpdateGeographicAccessCustomRegionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomRegionId`, `Body`
- **Returns**: `GeographicAccessCustomRegion`
- **Error**: `ApiException<UpdateGeographicAccessCustomRegionError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 409, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateGeographicAccessCustomRegionOperationRequest` | `src/DoiT/Requests/GeographicAccess/UpdateGeographicAccessCustomRegionOperationRequest.cs` |
| `UpdateGeographicAccessCustomRegionRequest` | `src/DoiT/Models/UpdateGeographicAccessCustomRegionRequest.cs` |
| `GeographicAccessCustomRegion` | `src/DoiT/Models/GeographicAccessCustomRegion.cs` |
| `UpdateGeographicAccessCustomRegionError` | `src/DoiT/Errors/UpdateGeographicAccessCustomRegionError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### UpdateUserGeographicAccessScope

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UpdateUserGeographicAccessScope(UpdateUserGeographicAccessScopeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TargetCustomerId`, `UserId`, `Body`
- **Returns**: `GeographicAccessScope`
- **Error**: `ApiException<UpdateUserGeographicAccessScopeError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 409, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateUserGeographicAccessScopeRequest` | `src/DoiT/Requests/GeographicAccess/UpdateUserGeographicAccessScopeRequest.cs` |
| `UpdateGeographicAccessScopeRequest` | `src/DoiT/Models/OneOf/UpdateGeographicAccessScopeRequest.cs` |
| `GeographicAccessScope` | `src/DoiT/Models/OneOf/GeographicAccessScope.cs` |
| `UpdateUserGeographicAccessScopeError` | `src/DoiT/Errors/UpdateUserGeographicAccessScopeError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

