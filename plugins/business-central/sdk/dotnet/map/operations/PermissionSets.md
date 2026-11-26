<!-- Generated file — do not edit; regenerated with the SDK. -->

# PermissionSets — operations

Accessor: `client.PermissionSets` · Source: `src/Dynamics365BusinessCentral/Api/PermissionSets.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateUserPermission

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `CreateUserPermission(CreateUserPermissionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `UserId`, `Body`
- **Returns**: `UserPermission`
- **Error**: `ApiException<CreateUserPermissionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateUserPermissionRequest` | `src/Dynamics365BusinessCentral/Requests/PermissionSets/CreateUserPermissionRequest.cs` |
| `CompaniesApiUsersApiUserPermissionsRequest` | `src/Dynamics365BusinessCentral/Models/CompaniesApiUsersApiUserPermissionsRequest.cs` |
| `UserPermission` | `src/Dynamics365BusinessCentral/Models/UserPermission.cs` |
| `CreateUserPermissionError` | `src/Dynamics365BusinessCentral/Errors/CreateUserPermissionError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### ListPermissionSets

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListPermissionSets(ListPermissionSetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Returns**: `CompaniesApiPermissionSetsResponse`
- **Error**: `ApiException<ListPermissionSetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPermissionSetsRequest` | `src/Dynamics365BusinessCentral/Requests/PermissionSets/ListPermissionSetsRequest.cs` |
| `CompaniesApiPermissionSetsResponse` | `src/Dynamics365BusinessCentral/Models/CompaniesApiPermissionSetsResponse.cs` |
| `ListPermissionSetsError` | `src/Dynamics365BusinessCentral/Errors/ListPermissionSetsError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### ListUserPermissions

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListUserPermissions(ListUserPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `UserId`
- **Returns**: `CompaniesApiUsersApiUserPermissionsResponse`
- **Error**: `ApiException<ListUserPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListUserPermissionsRequest` | `src/Dynamics365BusinessCentral/Requests/PermissionSets/ListUserPermissionsRequest.cs` |
| `CompaniesApiUsersApiUserPermissionsResponse` | `src/Dynamics365BusinessCentral/Models/CompaniesApiUsersApiUserPermissionsResponse.cs` |
| `ListUserPermissionsError` | `src/Dynamics365BusinessCentral/Errors/ListUserPermissionsError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

