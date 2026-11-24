<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.Users` · Source: `src/Bitbucket/Api/Users.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetUser

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetUser(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `Account`
- **Error**: `ApiException<GetUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Account` | `src/Bitbucket/Models/AllOf/Account.cs` |
| `GetUserError` | `src/Bitbucket/Errors/GetUserError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetUserEmails

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetUserEmails(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `Error`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetUserEmailsByEmail

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetUserEmailsByEmail(GetUserEmailsByEmailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Email`
- **Returns**: `Error`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetUserEmailsByEmailRequest` | `src/Bitbucket/Requests/Users/GetUserEmailsByEmailRequest.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetUsersBySelectedUser

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetUsersBySelectedUser(GetUsersBySelectedUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SelectedUser`
- **Returns**: `Account`
- **Error**: `ApiException<GetUsersBySelectedUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUsersBySelectedUserRequest` | `src/Bitbucket/Requests/Users/GetUsersBySelectedUserRequest.cs` |
| `Account` | `src/Bitbucket/Models/AllOf/Account.cs` |
| `GetUsersBySelectedUserError` | `src/Bitbucket/Errors/GetUsersBySelectedUserError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

