<!-- Generated file — do not edit; regenerated with the SDK. -->

# Instances — operations

Accessor: `client.Instances` · Source: `src/Hud/Api/Instances.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListInstancesV2InstanceGet

- **Signature**: `ListInstancesV2InstanceGet(ListInstancesV2InstanceGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RegistryId`
- **Query params (wire ← C#)**: `registry_id` ← `RegistryId`, `include_terminated` ← `IncludeTerminated`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `ActiveInstancesResponse`
- **Error**: `ApiException<ListInstancesV2InstanceGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListInstancesV2InstanceGetRequest` | `src/Hud/Requests/Instances/ListInstancesV2InstanceGetRequest.cs` |
| `ActiveInstancesResponse` | `src/Hud/Models/ActiveInstancesResponse.cs` |
| `ListInstancesV2InstanceGetError` | `src/Hud/Errors/ListInstancesV2InstanceGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### StopInstancesV2InstanceStopPost

- **Signature**: `StopInstancesV2InstanceStopPost(StopInstancesV2InstanceStopPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `StopInstancesResponse`
- **Error**: `ApiException<StopInstancesV2InstanceStopPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StopInstancesV2InstanceStopPostRequest` | `src/Hud/Requests/Instances/StopInstancesV2InstanceStopPostRequest.cs` |
| `StopInstancesRequest` | `src/Hud/Models/StopInstancesRequest.cs` |
| `StopInstancesResponse` | `src/Hud/Models/StopInstancesResponse.cs` |
| `StopInstancesV2InstanceStopPostError` | `src/Hud/Errors/StopInstancesV2InstanceStopPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

