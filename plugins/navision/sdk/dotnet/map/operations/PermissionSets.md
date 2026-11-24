<!-- Generated file — do not edit; regenerated with the SDK. -->

# PermissionSets — operations

Accessor: `client.PermissionSets` · Source: `src/MicrosoftDynamicsNav/Api/PermissionSets.cs` · 3 operations

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
| `CreateUserPermissionRequest` | `src/MicrosoftDynamicsNav/Requests/PermissionSets/CreateUserPermissionRequest.cs` |
| `CompaniesApiUsersApiUserPermissionsRequest` | `src/MicrosoftDynamicsNav/Models/CompaniesApiUsersApiUserPermissionsRequest.cs` |
| `UserPermission` | `src/MicrosoftDynamicsNav/Models/UserPermission.cs` |
| `CreateUserPermissionError` | `src/MicrosoftDynamicsNav/Errors/CreateUserPermissionError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

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
| `ListPermissionSetsRequest` | `src/MicrosoftDynamicsNav/Requests/PermissionSets/ListPermissionSetsRequest.cs` |
| `CompaniesApiPermissionSetsResponse` | `src/MicrosoftDynamicsNav/Models/CompaniesApiPermissionSetsResponse.cs` |
| `ListPermissionSetsError` | `src/MicrosoftDynamicsNav/Errors/ListPermissionSetsError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

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
| `ListUserPermissionsRequest` | `src/MicrosoftDynamicsNav/Requests/PermissionSets/ListUserPermissionsRequest.cs` |
| `CompaniesApiUsersApiUserPermissionsResponse` | `src/MicrosoftDynamicsNav/Models/CompaniesApiUsersApiUserPermissionsResponse.cs` |
| `ListUserPermissionsError` | `src/MicrosoftDynamicsNav/Errors/ListUserPermissionsError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

