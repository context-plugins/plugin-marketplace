<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsCodebuildXAmzTargetCodebuild20161006Listbuilds — operations

Accessor: `client.AwsCodebuildXAmzTargetCodebuild20161006Listbuilds` · Source: `src/AwsCodeBuild/Api/AwsCodebuildXAmzTargetCodebuild20161006Listbuilds.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListBuilds

- **Auth**: `options.Sigv4`
- **Signature**: `ListBuilds(ListBuildsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListBuildsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBuildsRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild20161006Listbuilds/ListBuildsRequest.cs` |
| `XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApi` | `src/AwsCodeBuild/Models/Enums/XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApi.cs` |
| `ListBuildsError` | `src/AwsCodeBuild/Errors/ListBuildsError.cs` |

