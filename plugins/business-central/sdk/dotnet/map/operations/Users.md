<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.Users` · Source: `src/Dynamics365BusinessCentral/Api/Users.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetNewUsersFromOffice365

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `GetNewUsersFromOffice365(GetNewUsersFromOffice365Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetNewUsersFromOffice365Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetNewUsersFromOffice365Request` | `src/Dynamics365BusinessCentral/Requests/Users/GetNewUsersFromOffice365Request.cs` |
| `GetNewUsersFromOffice365Error` | `src/Dynamics365BusinessCentral/Errors/GetNewUsersFromOffice365Error.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### GetNewUsersFromOffice365Async

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `GetNewUsersFromOffice365Async(GetNewUsersFromOffice365AsyncRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetNewUsersFromOffice365AsyncError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetNewUsersFromOffice365AsyncRequest` | `src/Dynamics365BusinessCentral/Requests/Users/GetNewUsersFromOffice365AsyncRequest.cs` |
| `GetNewUsersFromOffice365AsyncError` | `src/Dynamics365BusinessCentral/Errors/GetNewUsersFromOffice365AsyncError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### GetUser

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `GetUser(GetUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `UserId`
- **Returns**: `User`
- **Error**: `ApiException<GetUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUserRequest` | `src/Dynamics365BusinessCentral/Requests/Users/GetUserRequest.cs` |
| `User` | `src/Dynamics365BusinessCentral/Models/User.cs` |
| `GetUserError` | `src/Dynamics365BusinessCentral/Errors/GetUserError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### ListUsers

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListUsers(ListUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Returns**: `CompaniesApiUsersResponse`
- **Error**: `ApiException<ListUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListUsersRequest` | `src/Dynamics365BusinessCentral/Requests/Users/ListUsersRequest.cs` |
| `CompaniesApiUsersResponse` | `src/Dynamics365BusinessCentral/Models/CompaniesApiUsersResponse.cs` |
| `ListUsersError` | `src/Dynamics365BusinessCentral/Errors/ListUsersError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### UpdateUser

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `UpdateUser(UpdateUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `UserId`, `IfMatch`, `Body`
- **Returns**: `User`
- **Error**: `ApiException<UpdateUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateUserRequest` | `src/Dynamics365BusinessCentral/Requests/Users/UpdateUserRequest.cs` |
| `UserUpdate` | `src/Dynamics365BusinessCentral/Models/UserUpdate.cs` |
| `User` | `src/Dynamics365BusinessCentral/Models/User.cs` |
| `UpdateUserError` | `src/Dynamics365BusinessCentral/Errors/UpdateUserError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

