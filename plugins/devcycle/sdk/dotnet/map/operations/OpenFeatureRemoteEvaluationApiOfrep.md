<!-- Generated file — do not edit; regenerated with the SDK. -->

# OpenFeatureRemoteEvaluationApiOfrep — operations

Accessor: `client.OpenFeatureRemoteEvaluationApiOfrep` · Source: `src/DevCycle/Api/OpenFeatureRemoteEvaluationApiOfrep.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostOfrepV1EvaluateFlags

- **Server group**: `DefaultDevCycleBucketingBucketingApi`
- **Signature**: `PostOfrepV1EvaluateFlags(PostOfrepV1EvaluateFlagsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `OfrepBulkEvaluationSuccess`
- **Error**: `ApiException<PostOfrepV1EvaluateFlagsError>` — **Case A (typed)**
- **Error accessors**: `TryGetOfrepBulkEvaluationFailure([NotNullWhen(true)] out OfrepBulkEvaluationFailure? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 429] · `TryGetOfrepGeneralErrorResponse([NotNullWhen(true)] out OfrepGeneralErrorResponse? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostOfrepV1EvaluateFlagsRequest` | `src/DevCycle/Requests/OpenFeatureRemoteEvaluationApiOfrep/PostOfrepV1EvaluateFlagsRequest.cs` |
| `OfrepBulkEvaluationRequest` | `src/DevCycle/Models/OfrepBulkEvaluationRequest.cs` |
| `OfrepBulkEvaluationSuccess` | `src/DevCycle/Models/OfrepBulkEvaluationSuccess.cs` |
| `PostOfrepV1EvaluateFlagsError` | `src/DevCycle/Errors/PostOfrepV1EvaluateFlagsError.cs` |
| `OfrepBulkEvaluationFailure` | `src/DevCycle/Models/OfrepBulkEvaluationFailure.cs` |
| `OfrepGeneralErrorResponse` | `src/DevCycle/Models/OfrepGeneralErrorResponse.cs` |

### PostOfrepV1EvaluateFlagsByKey

- **Server group**: `DefaultDevCycleBucketingBucketingApi`
- **Signature**: `PostOfrepV1EvaluateFlagsByKey(PostOfrepV1EvaluateFlagsByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`
- **Returns**: `OfrepEvaluationSuccess`
- **Error**: `ApiException<PostOfrepV1EvaluateFlagsByKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetOfrepEvaluationFailure([NotNullWhen(true)] out OfrepEvaluationFailure? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 429] · `TryGetOfrepFlagNotFound([NotNullWhen(true)] out OfrepFlagNotFound? value)` [404] · `TryGetOfrepGeneralErrorResponse([NotNullWhen(true)] out OfrepGeneralErrorResponse? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostOfrepV1EvaluateFlagsByKeyRequest` | `src/DevCycle/Requests/OpenFeatureRemoteEvaluationApiOfrep/PostOfrepV1EvaluateFlagsByKeyRequest.cs` |
| `OfrepEvaluationRequest` | `src/DevCycle/Models/OfrepEvaluationRequest.cs` |
| `OfrepEvaluationSuccess` | `src/DevCycle/Models/OfrepEvaluationSuccess.cs` |
| `PostOfrepV1EvaluateFlagsByKeyError` | `src/DevCycle/Errors/PostOfrepV1EvaluateFlagsByKeyError.cs` |
| `OfrepEvaluationFailure` | `src/DevCycle/Models/OfrepEvaluationFailure.cs` |
| `OfrepFlagNotFound` | `src/DevCycle/Models/OfrepFlagNotFound.cs` |
| `OfrepGeneralErrorResponse` | `src/DevCycle/Models/OfrepGeneralErrorResponse.cs` |

