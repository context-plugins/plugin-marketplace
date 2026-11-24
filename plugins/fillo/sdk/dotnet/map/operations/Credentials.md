<!-- Generated file — do not edit; regenerated with the SDK. -->

# Credentials — operations

Accessor: `client.Credentials` · Source: `src/Fillo/Api/Credentials.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSyncToken

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateSyncToken(CreateSyncTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1ManageSyncTokensResponse1`
- **Error**: `ApiException<CreateSyncTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSyncTokenRequest` | `src/Fillo/Requests/Credentials/CreateSyncTokenRequest.cs` |
| `ApiV1ManageSyncTokensRequest` | `src/Fillo/Models/ApiV1ManageSyncTokensRequest.cs` |
| `ApiV1ManageSyncTokensResponse1` | `src/Fillo/Models/ApiV1ManageSyncTokensResponse1.cs` |
| `CreateSyncTokenError` | `src/Fillo/Errors/CreateSyncTokenError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### ListConnectorTokens

- **Auth**: `options.BearerAuth`
- **Signature**: `ListConnectorTokens(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1ManageTokensResponse`
- **Error**: `ApiException<ListConnectorTokensError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiV1ManageTokensResponse` | `src/Fillo/Models/ApiV1ManageTokensResponse.cs` |
| `ListConnectorTokensError` | `src/Fillo/Errors/ListConnectorTokensError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### ListSyncTokens

- **Auth**: `options.BearerAuth`
- **Signature**: `ListSyncTokens(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1ManageSyncTokensResponse`
- **Error**: `ApiException<ListSyncTokensError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiV1ManageSyncTokensResponse` | `src/Fillo/Models/ApiV1ManageSyncTokensResponse.cs` |
| `ListSyncTokensError` | `src/Fillo/Errors/ListSyncTokensError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### RevokeConnectorToken

- **Auth**: `options.BearerAuth`
- **Signature**: `RevokeConnectorToken(RevokeConnectorTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ApiV1ManageTokensResponse1`
- **Error**: `ApiException<RevokeConnectorTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RevokeConnectorTokenRequest` | `src/Fillo/Requests/Credentials/RevokeConnectorTokenRequest.cs` |
| `ConfirmTarget` | `src/Fillo/Models/ConfirmTarget.cs` |
| `ApiV1ManageTokensResponse1` | `src/Fillo/Models/ApiV1ManageTokensResponse1.cs` |
| `RevokeConnectorTokenError` | `src/Fillo/Errors/RevokeConnectorTokenError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### RevokeSyncToken

- **Auth**: `options.BearerAuth`
- **Signature**: `RevokeSyncToken(RevokeSyncTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ApiV1ManageSyncTokensResponse2`
- **Error**: `ApiException<RevokeSyncTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RevokeSyncTokenRequest` | `src/Fillo/Requests/Credentials/RevokeSyncTokenRequest.cs` |
| `ConfirmTarget` | `src/Fillo/Models/ConfirmTarget.cs` |
| `ApiV1ManageSyncTokensResponse2` | `src/Fillo/Models/ApiV1ManageSyncTokensResponse2.cs` |
| `RevokeSyncTokenError` | `src/Fillo/Errors/RevokeSyncTokenError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

