<!-- Generated file — do not edit; regenerated with the SDK. -->

# Gpg — operations

Accessor: `client.Gpg` · Source: `src/Bitbucket/Api/Gpg.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteUsersBySelectedUserGpgKeysByFingerprint

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteUsersBySelectedUserGpgKeysByFingerprint(DeleteUsersBySelectedUserGpgKeysByFingerprintRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Fingerprint`, `SelectedUser`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteUsersBySelectedUserGpgKeysByFingerprintError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 404] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteUsersBySelectedUserGpgKeysByFingerprintRequest` | `src/Bitbucket/Requests/Gpg/DeleteUsersBySelectedUserGpgKeysByFingerprintRequest.cs` |
| `DeleteUsersBySelectedUserGpgKeysByFingerprintError` | `src/Bitbucket/Errors/DeleteUsersBySelectedUserGpgKeysByFingerprintError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetUsersBySelectedUserGpgKeys

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetUsersBySelectedUserGpgKeys(GetUsersBySelectedUserGpgKeysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SelectedUser`
- **Returns**: `PaginatedGpgUserKeys`
- **Error**: `ApiException<GetUsersBySelectedUserGpgKeysError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUsersBySelectedUserGpgKeysRequest` | `src/Bitbucket/Requests/Gpg/GetUsersBySelectedUserGpgKeysRequest.cs` |
| `PaginatedGpgUserKeys` | `src/Bitbucket/Models/PaginatedGpgUserKeys.cs` |
| `GetUsersBySelectedUserGpgKeysError` | `src/Bitbucket/Errors/GetUsersBySelectedUserGpgKeysError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetUsersBySelectedUserGpgKeysByFingerprint

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetUsersBySelectedUserGpgKeysByFingerprint(GetUsersBySelectedUserGpgKeysByFingerprintRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Fingerprint`, `SelectedUser`
- **Returns**: `GpgAccountKey`
- **Error**: `ApiException<GetUsersBySelectedUserGpgKeysByFingerprintError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUsersBySelectedUserGpgKeysByFingerprintRequest` | `src/Bitbucket/Requests/Gpg/GetUsersBySelectedUserGpgKeysByFingerprintRequest.cs` |
| `GpgAccountKey` | `src/Bitbucket/Models/AllOf/GpgAccountKey.cs` |
| `GetUsersBySelectedUserGpgKeysByFingerprintError` | `src/Bitbucket/Errors/GetUsersBySelectedUserGpgKeysByFingerprintError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostUsersBySelectedUserGpgKeys

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostUsersBySelectedUserGpgKeys(PostUsersBySelectedUserGpgKeysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SelectedUser`
- **Returns**: `GpgAccountKey`
- **Error**: `ApiException<PostUsersBySelectedUserGpgKeysError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 404] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostUsersBySelectedUserGpgKeysRequest` | `src/Bitbucket/Requests/Gpg/PostUsersBySelectedUserGpgKeysRequest.cs` |
| `GpgAccountKey` | `src/Bitbucket/Models/AllOf/GpgAccountKey.cs` |
| `PostUsersBySelectedUserGpgKeysError` | `src/Bitbucket/Errors/PostUsersBySelectedUserGpgKeysError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

