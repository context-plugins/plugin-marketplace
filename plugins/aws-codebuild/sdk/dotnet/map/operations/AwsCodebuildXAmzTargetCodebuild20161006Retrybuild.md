<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsCodebuildXAmzTargetCodebuild20161006Retrybuild — operations

Accessor: `client.AwsCodebuildXAmzTargetCodebuild20161006Retrybuild` · Source: `src/AwsCodeBuild/Api/AwsCodebuildXAmzTargetCodebuild20161006Retrybuild.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### RetryBuild

- **Auth**: `options.Sigv4`
- **Signature**: `RetryBuild(RetryBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RetryBuildError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RetryBuildRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild20161006Retrybuild/RetryBuildRequest.cs` |
| `XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi` | `src/AwsCodeBuild/Models/Enums/XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi.cs` |
| `RetryBuildError` | `src/AwsCodeBuild/Errors/RetryBuildError.cs` |

