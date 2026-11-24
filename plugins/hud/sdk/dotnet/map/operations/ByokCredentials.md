<!-- Generated file — do not edit; regenerated with the SDK. -->

# ByokCredentials — operations

Accessor: `client.ByokCredentials` · Source: `src/Hud/Api/ByokCredentials.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateByokCredentialV2ByokCredentialsPost

- **Signature**: `CreateByokCredentialV2ByokCredentialsPost(CreateByokCredentialV2ByokCredentialsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ByokCredentialItem`
- **Error**: `ApiException<CreateByokCredentialV2ByokCredentialsPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateByokCredentialV2ByokCredentialsPostRequest` | `src/Hud/Requests/ByokCredentials/CreateByokCredentialV2ByokCredentialsPostRequest.cs` |
| `ByokCredentialCreateRequest` | `src/Hud/Models/ByokCredentialCreateRequest.cs` |
| `ByokCredentialItem` | `src/Hud/Models/ByokCredentialItem.cs` |
| `CreateByokCredentialV2ByokCredentialsPostError` | `src/Hud/Errors/CreateByokCredentialV2ByokCredentialsPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### DeleteByokCredentialV2ByokCredentialsCredentialIdDelete

- **Signature**: `DeleteByokCredentialV2ByokCredentialsCredentialIdDelete(DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CredentialId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteRequest` | `src/Hud/Requests/ByokCredentials/DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteRequest.cs` |
| `DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteError` | `src/Hud/Errors/DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListByokCredentialsV2ByokCredentialsGet

- **Signature**: `ListByokCredentialsV2ByokCredentialsGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ByokCredentialsListResponse`
- **Error**: `ApiException<ListByokCredentialsV2ByokCredentialsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ByokCredentialsListResponse` | `src/Hud/Models/ByokCredentialsListResponse.cs` |
| `ListByokCredentialsV2ByokCredentialsGetError` | `src/Hud/Errors/ListByokCredentialsV2ByokCredentialsGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |

### UpdateByokCredentialV2ByokCredentialsCredentialIdPatch

- **Signature**: `UpdateByokCredentialV2ByokCredentialsCredentialIdPatch(UpdateByokCredentialV2ByokCredentialsCredentialIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CredentialId`, `Body`
- **Returns**: `ByokCredentialItem`
- **Error**: `ApiException<UpdateByokCredentialV2ByokCredentialsCredentialIdPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateByokCredentialV2ByokCredentialsCredentialIdPatchRequest` | `src/Hud/Requests/ByokCredentials/UpdateByokCredentialV2ByokCredentialsCredentialIdPatchRequest.cs` |
| `ByokCredentialUpdateRequest` | `src/Hud/Models/ByokCredentialUpdateRequest.cs` |
| `ByokCredentialItem` | `src/Hud/Models/ByokCredentialItem.cs` |
| `UpdateByokCredentialV2ByokCredentialsCredentialIdPatchError` | `src/Hud/Errors/UpdateByokCredentialV2ByokCredentialsCredentialIdPatchError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

