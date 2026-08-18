<!-- Generated file — do not edit; regenerated with the SDK. -->

# Accounts — operations

Accessor: `client.Accounts` · Source: `Api/Accounts.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostCloseAccount
- **Server group**: `Default10`
- **Signature**: `PostCloseAccount(CloseAccountRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `CloseAccountResponse`
- **Error**: `SdkException<PostCloseAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CloseAccountRequest` | `Models/CloseAccountRequest.cs` |
| `CloseAccountResponse` | `Models/CloseAccountResponse.cs` |
| `PostCloseAccountError` | `Errors/PostCloseAccountError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostCreateAccount
- **Server group**: `Default10`
- **Signature**: `PostCreateAccount(CreateAccountRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `CreateAccountResponse`
- **Error**: `SdkException<PostCreateAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CreateAccountRequest` | `Models/CreateAccountRequest.cs` |
| `CreateAccountResponse` | `Models/CreateAccountResponse.cs` |
| `PostCreateAccountError` | `Errors/PostCreateAccountError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostUpdateAccount
- **Server group**: `Default10`
- **Signature**: `PostUpdateAccount(UpdateAccountRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `UpdateAccountResponse`
- **Error**: `SdkException<PostUpdateAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateAccountRequest` | `Models/UpdateAccountRequest.cs` |
| `UpdateAccountResponse` | `Models/UpdateAccountResponse.cs` |
| `PostUpdateAccountError` | `Errors/PostUpdateAccountError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

