<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServiceAccounts — operations

Accessor: `client.ServiceAccounts` · Source: `src/DoiT/Api/ServiceAccounts.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateServiceAccount

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `CreateServiceAccount(CreateServiceAccountOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdempotencyKey`, `Body`
- **Query params (wire ← C#)**: `dryRun` ← `DryRun`
- **Returns**: `ServiceAccount`
- **Error**: `ApiException<CreateServiceAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 409, 422, 500] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateServiceAccountOperationRequest` | `src/DoiT/Requests/ServiceAccounts/CreateServiceAccountOperationRequest.cs` |
| `CreateServiceAccountRequest` | `src/DoiT/Models/CreateServiceAccountRequest.cs` |
| `ServiceAccount` | `src/DoiT/Models/ServiceAccount.cs` |
| `CreateServiceAccountError` | `src/DoiT/Errors/CreateServiceAccountError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### CreateServiceAccountToken

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `CreateServiceAccountToken(CreateServiceAccountTokenOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ServiceAccountId`, `IdempotencyKey`, `Body`
- **Query params (wire ← C#)**: `dryRun` ← `DryRun`
- **Returns**: `CreateServiceAccountTokenResponse`
- **Error**: `ApiException<CreateServiceAccountTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 404, 409, 422, 500] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateServiceAccountTokenOperationRequest` | `src/DoiT/Requests/ServiceAccounts/CreateServiceAccountTokenOperationRequest.cs` |
| `CreateServiceAccountTokenRequest` | `src/DoiT/Models/CreateServiceAccountTokenRequest.cs` |
| `CreateServiceAccountTokenResponse` | `src/DoiT/Models/CreateServiceAccountTokenResponse.cs` |
| `CreateServiceAccountTokenError` | `src/DoiT/Errors/CreateServiceAccountTokenError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### DeleteServiceAccount

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DeleteServiceAccount(DeleteServiceAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `IfMatch`, `IdempotencyKey`
- **Query params (wire ← C#)**: `dryRun` ← `DryRun`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteServiceAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 404, 412, 428, 500] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteServiceAccountRequest` | `src/DoiT/Requests/ServiceAccounts/DeleteServiceAccountRequest.cs` |
| `DeleteServiceAccountError` | `src/DoiT/Errors/DeleteServiceAccountError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### DeleteServiceAccountToken

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DeleteServiceAccountToken(DeleteServiceAccountTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ServiceAccountId`, `Id`, `IdempotencyKey`
- **Query params (wire ← C#)**: `dryRun` ← `DryRun`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteServiceAccountTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 404, 500] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteServiceAccountTokenRequest` | `src/DoiT/Requests/ServiceAccounts/DeleteServiceAccountTokenRequest.cs` |
| `DeleteServiceAccountTokenError` | `src/DoiT/Errors/DeleteServiceAccountTokenError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetServiceAccount

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetServiceAccount(GetServiceAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ServiceAccount`
- **Error**: `ApiException<GetServiceAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 404, 500] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetServiceAccountRequest` | `src/DoiT/Requests/ServiceAccounts/GetServiceAccountRequest.cs` |
| `ServiceAccount` | `src/DoiT/Models/ServiceAccount.cs` |
| `GetServiceAccountError` | `src/DoiT/Errors/GetServiceAccountError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetServiceAccountToken

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetServiceAccountToken(GetServiceAccountTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ServiceAccountId`, `Id`
- **Returns**: `ServiceAccountToken`
- **Error**: `ApiException<GetServiceAccountTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403] · `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetServiceAccountTokenRequest` | `src/DoiT/Requests/ServiceAccounts/GetServiceAccountTokenRequest.cs` |
| `ServiceAccountToken` | `src/DoiT/Models/ServiceAccountToken.cs` |
| `GetServiceAccountTokenError` | `src/DoiT/Errors/GetServiceAccountTokenError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### ListServiceAccountTokens

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListServiceAccountTokens(ListServiceAccountTokensRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ServiceAccountId`
- **Returns**: `ServiceAccountTokensResponse`
- **Error**: `ApiException<ListServiceAccountTokensError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403] · `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListServiceAccountTokensRequest` | `src/DoiT/Requests/ServiceAccounts/ListServiceAccountTokensRequest.cs` |
| `ServiceAccountTokensResponse` | `src/DoiT/Models/ServiceAccountTokensResponse.cs` |
| `ListServiceAccountTokensError` | `src/DoiT/Errors/ListServiceAccountTokensError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### ListServiceAccounts

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListServiceAccounts(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ServiceAccountsResponse`
- **Error**: `ApiException<ListServiceAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403] · `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ServiceAccountsResponse` | `src/DoiT/Models/ServiceAccountsResponse.cs` |
| `ListServiceAccountsError` | `src/DoiT/Errors/ListServiceAccountsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### UpdateServiceAccount

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UpdateServiceAccount(UpdateServiceAccountOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `IfMatch`, `IdempotencyKey`, `Body`
- **Query params (wire ← C#)**: `dryRun` ← `DryRun`
- **Returns**: `ServiceAccount`
- **Error**: `ApiException<UpdateServiceAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 404, 409, 412, 415, 422, 428, 500] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateServiceAccountOperationRequest` | `src/DoiT/Requests/ServiceAccounts/UpdateServiceAccountOperationRequest.cs` |
| `UpdateServiceAccountRequest` | `src/DoiT/Models/UpdateServiceAccountRequest.cs` |
| `ServiceAccount` | `src/DoiT/Models/ServiceAccount.cs` |
| `UpdateServiceAccountError` | `src/DoiT/Errors/UpdateServiceAccountError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### UpdateServiceAccountToken

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UpdateServiceAccountToken(UpdateServiceAccountTokenOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ServiceAccountId`, `Id`, `IdempotencyKey`, `Body`
- **Query params (wire ← C#)**: `dryRun` ← `DryRun`
- **Returns**: `ServiceAccountToken`
- **Error**: `ApiException<UpdateServiceAccountTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 404, 422, 500] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateServiceAccountTokenOperationRequest` | `src/DoiT/Requests/ServiceAccounts/UpdateServiceAccountTokenOperationRequest.cs` |
| `UpdateServiceAccountTokenRequest` | `src/DoiT/Models/UpdateServiceAccountTokenRequest.cs` |
| `ServiceAccountToken` | `src/DoiT/Models/ServiceAccountToken.cs` |
| `UpdateServiceAccountTokenError` | `src/DoiT/Errors/UpdateServiceAccountTokenError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

