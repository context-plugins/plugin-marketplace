<!-- Generated file — do not edit; regenerated with the SDK. -->

# WorkspaceApi — operations

Accessor: `client.WorkspaceApi` · Source: `src/Fillo/Api/WorkspaceApi.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DisableIdentityVerification

- **Auth**: `options.BearerAuth`
- **Signature**: `DisableIdentityVerification(DisableIdentityVerificationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1ManageProjectIdentityResponse2`
- **Error**: `ApiException<DisableIdentityVerificationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DisableIdentityVerificationRequest` | `src/Fillo/Requests/WorkspaceApi/DisableIdentityVerificationRequest.cs` |
| `ConfirmTarget` | `src/Fillo/Models/ConfirmTarget.cs` |
| `ApiV1ManageProjectIdentityResponse2` | `src/Fillo/Models/ApiV1ManageProjectIdentityResponse2.cs` |
| `DisableIdentityVerificationError` | `src/Fillo/Errors/DisableIdentityVerificationError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### EnableIdentityVerification

- **Auth**: `options.BearerAuth`
- **Signature**: `EnableIdentityVerification(EnableIdentityVerificationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1ManageProjectIdentityResponse1`
- **Error**: `ApiException<EnableIdentityVerificationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EnableIdentityVerificationRequest` | `src/Fillo/Requests/WorkspaceApi/EnableIdentityVerificationRequest.cs` |
| `ApiV1ManageProjectIdentityResponse1` | `src/Fillo/Models/ApiV1ManageProjectIdentityResponse1.cs` |
| `EnableIdentityVerificationError` | `src/Fillo/Errors/EnableIdentityVerificationError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### GetCodeSyncPolicy

- **Auth**: `options.BearerAuth`
- **Signature**: `GetCodeSyncPolicy(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1ManageProjectCodeSyncResponse`
- **Error**: `ApiException<GetCodeSyncPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiV1ManageProjectCodeSyncResponse` | `src/Fillo/Models/ApiV1ManageProjectCodeSyncResponse.cs` |
| `GetCodeSyncPolicyError` | `src/Fillo/Errors/GetCodeSyncPolicyError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### GetIdentityVerification

- **Auth**: `options.BearerAuth`
- **Signature**: `GetIdentityVerification(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1ManageProjectIdentityResponse`
- **Error**: `ApiException<GetIdentityVerificationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiV1ManageProjectIdentityResponse` | `src/Fillo/Models/ApiV1ManageProjectIdentityResponse.cs` |
| `GetIdentityVerificationError` | `src/Fillo/Errors/GetIdentityVerificationError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### ListAllowedOrigins

- **Auth**: `options.BearerAuth`
- **Signature**: `ListAllowedOrigins(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1ManageProjectOriginsResponse`
- **Error**: `ApiException<ListAllowedOriginsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiV1ManageProjectOriginsResponse` | `src/Fillo/Models/ApiV1ManageProjectOriginsResponse.cs` |
| `ListAllowedOriginsError` | `src/Fillo/Errors/ListAllowedOriginsError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### RenameProject

- **Auth**: `options.BearerAuth`
- **Signature**: `RenameProject(RenameProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1ManageProjectResponse`
- **Error**: `ApiException<RenameProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RenameProjectRequest` | `src/Fillo/Requests/WorkspaceApi/RenameProjectRequest.cs` |
| `ApiV1ManageProjectRequest` | `src/Fillo/Models/ApiV1ManageProjectRequest.cs` |
| `ApiV1ManageProjectResponse` | `src/Fillo/Models/ApiV1ManageProjectResponse.cs` |
| `RenameProjectError` | `src/Fillo/Errors/RenameProjectError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### RenameWorkspace

- **Auth**: `options.BearerAuth`
- **Signature**: `RenameWorkspace(RenameWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1ManageWorkspaceResponse`
- **Error**: `ApiException<RenameWorkspaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RenameWorkspaceRequest` | `src/Fillo/Requests/WorkspaceApi/RenameWorkspaceRequest.cs` |
| `ApiV1ManageWorkspaceRequest` | `src/Fillo/Models/ApiV1ManageWorkspaceRequest.cs` |
| `ApiV1ManageWorkspaceResponse` | `src/Fillo/Models/ApiV1ManageWorkspaceResponse.cs` |
| `RenameWorkspaceError` | `src/Fillo/Errors/RenameWorkspaceError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### SetAllowedOrigins

- **Auth**: `options.BearerAuth`
- **Signature**: `SetAllowedOrigins(SetAllowedOriginsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1ManageProjectOriginsResponse`
- **Error**: `ApiException<SetAllowedOriginsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SetAllowedOriginsRequest` | `src/Fillo/Requests/WorkspaceApi/SetAllowedOriginsRequest.cs` |
| `ApiV1ManageProjectOriginsRequest` | `src/Fillo/Models/ApiV1ManageProjectOriginsRequest.cs` |
| `ApiV1ManageProjectOriginsResponse` | `src/Fillo/Models/ApiV1ManageProjectOriginsResponse.cs` |
| `SetAllowedOriginsError` | `src/Fillo/Errors/SetAllowedOriginsError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### SetCodeSyncPolicy

- **Auth**: `options.BearerAuth`
- **Signature**: `SetCodeSyncPolicy(SetCodeSyncPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1ManageProjectCodeSyncResponse`
- **Error**: `ApiException<SetCodeSyncPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SetCodeSyncPolicyRequest` | `src/Fillo/Requests/WorkspaceApi/SetCodeSyncPolicyRequest.cs` |
| `ApiV1ManageProjectCodeSyncRequest` | `src/Fillo/Models/ApiV1ManageProjectCodeSyncRequest.cs` |
| `ApiV1ManageProjectCodeSyncResponse` | `src/Fillo/Models/ApiV1ManageProjectCodeSyncResponse.cs` |
| `SetCodeSyncPolicyError` | `src/Fillo/Errors/SetCodeSyncPolicyError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

