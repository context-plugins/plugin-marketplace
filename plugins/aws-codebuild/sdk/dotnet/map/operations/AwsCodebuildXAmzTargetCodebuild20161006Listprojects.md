<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsCodebuildXAmzTargetCodebuild20161006Listprojects — operations

Accessor: `client.AwsCodebuildXAmzTargetCodebuild20161006Listprojects` · Source: `src/AwsCodeBuild/Api/AwsCodebuildXAmzTargetCodebuild20161006Listprojects.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListProjects

- **Auth**: `options.Sigv4`
- **Signature**: `ListProjects(ListProjectsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListProjectsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListProjectsRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild20161006Listprojects/ListProjectsRequest.cs` |
| `XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi` | `src/AwsCodeBuild/Models/Enums/XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi.cs` |
| `ListProjectsError` | `src/AwsCodeBuild/Errors/ListProjectsError.cs` |

