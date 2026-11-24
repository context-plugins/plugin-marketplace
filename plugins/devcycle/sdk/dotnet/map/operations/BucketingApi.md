<!-- Generated file — do not edit; regenerated with the SDK. -->

# BucketingApi — operations

Accessor: `client.BucketingApi` · Source: `src/DevCycle/Api/BucketingApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetFeatures

- **Server group**: `DefaultDevCycleBucketingBucketingApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetFeatures(GetFeaturesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IReadOnlyDictionary<string, Feature>`
- **Error**: `ApiException<GetFeaturesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFeaturesRequest` | `src/DevCycle/Requests/BucketingApi/GetFeaturesRequest.cs` |
| `UserData` | `src/DevCycle/Models/UserData.cs` |
| `Feature` | `src/DevCycle/Models/Feature.cs` |
| `GetFeaturesError` | `src/DevCycle/Errors/GetFeaturesError.cs` |
| `ErrorResponseModel` | `src/DevCycle/Models/ErrorResponseModel.cs` |

### GetVariableByKey

- **Server group**: `DefaultDevCycleBucketingBucketingApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetVariableByKey(GetVariableByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Body`
- **Returns**: `Variable`
- **Error**: `ApiException<GetVariableByKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVariableByKeyRequest` | `src/DevCycle/Requests/BucketingApi/GetVariableByKeyRequest.cs` |
| `UserData` | `src/DevCycle/Models/UserData.cs` |
| `Variable` | `src/DevCycle/Models/Variable.cs` |
| `GetVariableByKeyError` | `src/DevCycle/Errors/GetVariableByKeyError.cs` |
| `ErrorResponseModel` | `src/DevCycle/Models/ErrorResponseModel.cs` |

### GetVariables

- **Server group**: `DefaultDevCycleBucketingBucketingApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetVariables(GetVariablesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IReadOnlyDictionary<string, Variable>`
- **Error**: `ApiException<GetVariablesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVariablesRequest` | `src/DevCycle/Requests/BucketingApi/GetVariablesRequest.cs` |
| `UserData` | `src/DevCycle/Models/UserData.cs` |
| `Variable` | `src/DevCycle/Models/Variable.cs` |
| `GetVariablesError` | `src/DevCycle/Errors/GetVariablesError.cs` |
| `ErrorResponseModel` | `src/DevCycle/Models/ErrorResponseModel.cs` |

### PostEvents

- **Server group**: `DefaultDevCycleBucketingBucketingApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `PostEvents(PostEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1TrackResponse`
- **Error**: `ApiException<PostEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostEventsRequest` | `src/DevCycle/Requests/BucketingApi/PostEventsRequest.cs` |
| `UserDataAndEventsBody` | `src/DevCycle/Models/UserDataAndEventsBody.cs` |
| `V1TrackResponse` | `src/DevCycle/Models/V1TrackResponse.cs` |
| `PostEventsError` | `src/DevCycle/Errors/PostEventsError.cs` |
| `ErrorResponseModel` | `src/DevCycle/Models/ErrorResponseModel.cs` |

