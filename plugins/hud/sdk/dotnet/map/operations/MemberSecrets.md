<!-- Generated file — do not edit; regenerated with the SDK. -->

# MemberSecrets — operations

Accessor: `client.MemberSecrets` · Source: `src/Hud/Api/MemberSecrets.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateMemberSecretV2MemberSecretsPost

- **Signature**: `CreateMemberSecretV2MemberSecretsPost(CreateMemberSecretV2MemberSecretsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `MemberSecretItem`
- **Error**: `ApiException<CreateMemberSecretV2MemberSecretsPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateMemberSecretV2MemberSecretsPostRequest` | `src/Hud/Requests/MemberSecrets/CreateMemberSecretV2MemberSecretsPostRequest.cs` |
| `MemberSecretCreateRequest` | `src/Hud/Models/MemberSecretCreateRequest.cs` |
| `MemberSecretItem` | `src/Hud/Models/MemberSecretItem.cs` |
| `CreateMemberSecretV2MemberSecretsPostError` | `src/Hud/Errors/CreateMemberSecretV2MemberSecretsPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### DeleteMemberSecretV2MemberSecretsSecretIdDelete

- **Signature**: `DeleteMemberSecretV2MemberSecretsSecretIdDelete(DeleteMemberSecretV2MemberSecretsSecretIdDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SecretId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteMemberSecretV2MemberSecretsSecretIdDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteMemberSecretV2MemberSecretsSecretIdDeleteRequest` | `src/Hud/Requests/MemberSecrets/DeleteMemberSecretV2MemberSecretsSecretIdDeleteRequest.cs` |
| `DeleteMemberSecretV2MemberSecretsSecretIdDeleteError` | `src/Hud/Errors/DeleteMemberSecretV2MemberSecretsSecretIdDeleteError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListMemberSecretsV2MemberSecretsGet

- **Signature**: `ListMemberSecretsV2MemberSecretsGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `MemberSecretsListResponse`
- **Error**: `ApiException<ListMemberSecretsV2MemberSecretsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MemberSecretsListResponse` | `src/Hud/Models/MemberSecretsListResponse.cs` |
| `ListMemberSecretsV2MemberSecretsGetError` | `src/Hud/Errors/ListMemberSecretsV2MemberSecretsGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |

### UpdateMemberSecretV2MemberSecretsSecretIdPatch

- **Signature**: `UpdateMemberSecretV2MemberSecretsSecretIdPatch(UpdateMemberSecretV2MemberSecretsSecretIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SecretId`, `Body`
- **Returns**: `MemberSecretItem`
- **Error**: `ApiException<UpdateMemberSecretV2MemberSecretsSecretIdPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateMemberSecretV2MemberSecretsSecretIdPatchRequest` | `src/Hud/Requests/MemberSecrets/UpdateMemberSecretV2MemberSecretsSecretIdPatchRequest.cs` |
| `MemberSecretUpdateRequest` | `src/Hud/Models/MemberSecretUpdateRequest.cs` |
| `MemberSecretItem` | `src/Hud/Models/MemberSecretItem.cs` |
| `UpdateMemberSecretV2MemberSecretsSecretIdPatchError` | `src/Hud/Errors/UpdateMemberSecretV2MemberSecretsSecretIdPatchError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

