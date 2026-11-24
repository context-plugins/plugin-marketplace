<!-- Generated file — do not edit; regenerated with the SDK. -->

# Inference — operations

Accessor: `client.Inference` · Source: `src/Hud/Api/Inference.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetInferenceUsageV2InferenceUsageGet

- **Signature**: `GetInferenceUsageV2InferenceUsageGet(GetInferenceUsageV2InferenceUsageGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `days` ← `Days`, `user_id` ← `UserId`, `api_key_id` ← `ApiKeyId`, `byok_credential_id` ← `ByokCredentialId`, `model_id` ← `ModelId`, `request_type` ← `RequestType`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `InferenceUsageResponse`
- **Error**: `ApiException<GetInferenceUsageV2InferenceUsageGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetInferenceUsageV2InferenceUsageGetRequest` | `src/Hud/Requests/Inference/GetInferenceUsageV2InferenceUsageGetRequest.cs` |
| `UserId` | `src/Hud/Models/AnyOf/UserId.cs` |
| `ApiKeyId` | `src/Hud/Models/AnyOf/ApiKeyId.cs` |
| `ByokCredentialId` | `src/Hud/Models/AnyOf/ByokCredentialId.cs` |
| `ModelId` | `src/Hud/Models/AnyOf/ModelId.cs` |
| `RequestType` | `src/Hud/Models/AnyOf/RequestType.cs` |
| `InferenceUsageResponse` | `src/Hud/Models/InferenceUsageResponse.cs` |
| `GetInferenceUsageV2InferenceUsageGetError` | `src/Hud/Errors/GetInferenceUsageV2InferenceUsageGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

