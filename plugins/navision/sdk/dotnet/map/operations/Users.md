<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.Users` · Source: `src/MicrosoftDynamicsNav/Api/Users.cs` · 5 operations

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
| `GetNewUsersFromOffice365Request` | `src/MicrosoftDynamicsNav/Requests/Users/GetNewUsersFromOffice365Request.cs` |
| `GetNewUsersFromOffice365Error` | `src/MicrosoftDynamicsNav/Errors/GetNewUsersFromOffice365Error.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

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
| `GetNewUsersFromOffice365AsyncRequest` | `src/MicrosoftDynamicsNav/Requests/Users/GetNewUsersFromOffice365AsyncRequest.cs` |
| `GetNewUsersFromOffice365AsyncError` | `src/MicrosoftDynamicsNav/Errors/GetNewUsersFromOffice365AsyncError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

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
| `GetUserRequest` | `src/MicrosoftDynamicsNav/Requests/Users/GetUserRequest.cs` |
| `User` | `src/MicrosoftDynamicsNav/Models/User.cs` |
| `GetUserError` | `src/MicrosoftDynamicsNav/Errors/GetUserError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

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
| `ListUsersRequest` | `src/MicrosoftDynamicsNav/Requests/Users/ListUsersRequest.cs` |
| `CompaniesApiUsersResponse` | `src/MicrosoftDynamicsNav/Models/CompaniesApiUsersResponse.cs` |
| `ListUsersError` | `src/MicrosoftDynamicsNav/Errors/ListUsersError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

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
| `UpdateUserRequest` | `src/MicrosoftDynamicsNav/Requests/Users/UpdateUserRequest.cs` |
| `UserUpdate` | `src/MicrosoftDynamicsNav/Models/UserUpdate.cs` |
| `User` | `src/MicrosoftDynamicsNav/Models/User.cs` |
| `UpdateUserError` | `src/MicrosoftDynamicsNav/Errors/UpdateUserError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

