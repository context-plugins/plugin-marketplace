<!-- Generated file — do not edit; regenerated with the SDK. -->

# Ssh — operations

Accessor: `client.Ssh` · Source: `src/Bitbucket/Api/Ssh.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteUsersBySelectedUserSshKeysByKeyId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteUsersBySelectedUserSshKeysByKeyId(DeleteUsersBySelectedUserSshKeysByKeyIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `KeyId`, `SelectedUser`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteUsersBySelectedUserSshKeysByKeyIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 404] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteUsersBySelectedUserSshKeysByKeyIdRequest` | `src/Bitbucket/Requests/Ssh/DeleteUsersBySelectedUserSshKeysByKeyIdRequest.cs` |
| `DeleteUsersBySelectedUserSshKeysByKeyIdError` | `src/Bitbucket/Errors/DeleteUsersBySelectedUserSshKeysByKeyIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetUsersBySelectedUserSshKeys

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetUsersBySelectedUserSshKeys(GetUsersBySelectedUserSshKeysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SelectedUser`
- **Returns**: `PaginatedSshUserKeys`
- **Error**: `ApiException<GetUsersBySelectedUserSshKeysError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUsersBySelectedUserSshKeysRequest` | `src/Bitbucket/Requests/Ssh/GetUsersBySelectedUserSshKeysRequest.cs` |
| `PaginatedSshUserKeys` | `src/Bitbucket/Models/PaginatedSshUserKeys.cs` |
| `GetUsersBySelectedUserSshKeysError` | `src/Bitbucket/Errors/GetUsersBySelectedUserSshKeysError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetUsersBySelectedUserSshKeysByKeyId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetUsersBySelectedUserSshKeysByKeyId(GetUsersBySelectedUserSshKeysByKeyIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `KeyId`, `SelectedUser`
- **Returns**: `SshAccountKey`
- **Error**: `ApiException<GetUsersBySelectedUserSshKeysByKeyIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUsersBySelectedUserSshKeysByKeyIdRequest` | `src/Bitbucket/Requests/Ssh/GetUsersBySelectedUserSshKeysByKeyIdRequest.cs` |
| `SshAccountKey` | `src/Bitbucket/Models/AllOf/SshAccountKey.cs` |
| `GetUsersBySelectedUserSshKeysByKeyIdError` | `src/Bitbucket/Errors/GetUsersBySelectedUserSshKeysByKeyIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostUsersBySelectedUserSshKeys

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostUsersBySelectedUserSshKeys(PostUsersBySelectedUserSshKeysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SelectedUser`
- **Query params (wire ← C#)**: `expires_on` ← `ExpiresOn`
- **Returns**: `SshAccountKey`
- **Error**: `ApiException<PostUsersBySelectedUserSshKeysError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 404] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostUsersBySelectedUserSshKeysRequest` | `src/Bitbucket/Requests/Ssh/PostUsersBySelectedUserSshKeysRequest.cs` |
| `SshAccountKey` | `src/Bitbucket/Models/AllOf/SshAccountKey.cs` |
| `PostUsersBySelectedUserSshKeysError` | `src/Bitbucket/Errors/PostUsersBySelectedUserSshKeysError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutUsersBySelectedUserSshKeysByKeyId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutUsersBySelectedUserSshKeysByKeyId(PutUsersBySelectedUserSshKeysByKeyIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `KeyId`, `SelectedUser`
- **Returns**: `SshAccountKey`
- **Error**: `ApiException<PutUsersBySelectedUserSshKeysByKeyIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 404] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutUsersBySelectedUserSshKeysByKeyIdRequest` | `src/Bitbucket/Requests/Ssh/PutUsersBySelectedUserSshKeysByKeyIdRequest.cs` |
| `SshAccountKey` | `src/Bitbucket/Models/AllOf/SshAccountKey.cs` |
| `PutUsersBySelectedUserSshKeysByKeyIdError` | `src/Bitbucket/Errors/PutUsersBySelectedUserSshKeysByKeyIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

