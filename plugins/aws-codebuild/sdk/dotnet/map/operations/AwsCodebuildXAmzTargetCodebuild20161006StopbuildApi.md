<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi — operations

Accessor: `client.AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi` · Source: `src/AwsCodeBuild/Api/AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### StopBuild

- **Auth**: `options.Sigv4`
- **Signature**: `StopBuild(StopBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StopBuildError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StopBuildRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi/StopBuildRequest.cs` |
| `XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApi` | `src/AwsCodeBuild/Models/Enums/XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApi.cs` |
| `StopBuildError` | `src/AwsCodeBuild/Errors/StopBuildError.cs` |

