<!-- Generated file — do not edit; regenerated with the SDK. -->

# Usage — operations

Accessor: `client.Usage` · Source: `src/Hud/Api/Usage.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetEnvironmentUsageV2EnvironmentsUsageGet

- **Signature**: `GetEnvironmentUsageV2EnvironmentsUsageGet(GetEnvironmentUsageV2EnvironmentsUsageGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `days` ← `Days`, `user_id` ← `UserId`, `api_key_id` ← `ApiKeyId`, `status` ← `Status`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `EnvironmentUsageResponse`
- **Error**: `ApiException<GetEnvironmentUsageV2EnvironmentsUsageGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEnvironmentUsageV2EnvironmentsUsageGetRequest` | `src/Hud/Requests/Usage/GetEnvironmentUsageV2EnvironmentsUsageGetRequest.cs` |
| `UserId` | `src/Hud/Models/AnyOf/UserId.cs` |
| `ApiKeyId` | `src/Hud/Models/AnyOf/ApiKeyId.cs` |
| `StatusHudPlatformInstancesApi` | `src/Hud/Models/AnyOf/StatusHudPlatformInstancesApi.cs` |
| `EnvironmentUsageResponse` | `src/Hud/Models/EnvironmentUsageResponse.cs` |
| `GetEnvironmentUsageV2EnvironmentsUsageGetError` | `src/Hud/Errors/GetEnvironmentUsageV2EnvironmentsUsageGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetInferenceUsageAggregateV2UsageInferenceGet

- **Signature**: `GetInferenceUsageAggregateV2UsageInferenceGet(GetInferenceUsageAggregateV2UsageInferenceGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `start` ← `Start`, `end` ← `End`, `bucket_width` ← `BucketWidth`, `group_by` ← `GroupBy`, `user_id` ← `UserId`, `api_key_id` ← `ApiKeyId`, `byok_credential_id` ← `ByokCredentialId`
- **Returns**: `InferenceUsageAggregateResponse`
- **Error**: `ApiException<GetInferenceUsageAggregateV2UsageInferenceGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetInferenceUsageAggregateV2UsageInferenceGetRequest` | `src/Hud/Requests/Usage/GetInferenceUsageAggregateV2UsageInferenceGetRequest.cs` |
| `Start` | `src/Hud/Models/AnyOf/Start.cs` |
| `End` | `src/Hud/Models/AnyOf/End.cs` |
| `BucketWidth` | `src/Hud/Models/Enums/BucketWidth.cs` |
| `GroupBy1` | `src/Hud/Models/AnyOf/GroupBy1.cs` |
| `UserId` | `src/Hud/Models/AnyOf/UserId.cs` |
| `ApiKeyId` | `src/Hud/Models/AnyOf/ApiKeyId.cs` |
| `ByokCredentialId` | `src/Hud/Models/AnyOf/ByokCredentialId.cs` |
| `InferenceUsageAggregateResponse` | `src/Hud/Models/InferenceUsageAggregateResponse.cs` |
| `GetInferenceUsageAggregateV2UsageInferenceGetError` | `src/Hud/Errors/GetInferenceUsageAggregateV2UsageInferenceGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

