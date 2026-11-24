<!-- Generated file — do not edit; regenerated with the SDK. -->

# FeatureOptIn — operations

Accessor: `client.FeatureOptIn` · Source: `src/DevCycle/Api/FeatureOptIn.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetV1OptInConfig

- **Server group**: `DefaultDevCycleBucketingBucketingApi`
- **Signature**: `GetV1OptInConfig(GetV1OptInConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Query params (wire ← C#)**: `user_id` ← `UserId`, `sdkKey` ← `SdkKey`
- **Returns**: `OptInConfigResponse`
- **Error**: `ApiException<GetV1OptInConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetV1OptInConfigRequest` | `src/DevCycle/Requests/FeatureOptIn/GetV1OptInConfigRequest.cs` |
| `OptInConfigResponse` | `src/DevCycle/Models/OptInConfigResponse.cs` |
| `GetV1OptInConfigError` | `src/DevCycle/Errors/GetV1OptInConfigError.cs` |
| `ErrorResponseModel` | `src/DevCycle/Models/ErrorResponseModel.cs` |

### PutV1OptInsByUserId

- **Server group**: `DefaultDevCycleBucketingBucketingApi`
- **Signature**: `PutV1OptInsByUserId(PutV1OptInsByUserIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Query params (wire ← C#)**: `sdkKey` ← `SdkKey`
- **Returns**: `V1OptInsResponse`
- **Error**: `ApiException<PutV1OptInsByUserIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutV1OptInsByUserIdRequest` | `src/DevCycle/Requests/FeatureOptIn/PutV1OptInsByUserIdRequest.cs` |
| `V1OptInsResponse` | `src/DevCycle/Models/V1OptInsResponse.cs` |
| `PutV1OptInsByUserIdError` | `src/DevCycle/Errors/PutV1OptInsByUserIdError.cs` |
| `ErrorResponseModel` | `src/DevCycle/Models/ErrorResponseModel.cs` |

