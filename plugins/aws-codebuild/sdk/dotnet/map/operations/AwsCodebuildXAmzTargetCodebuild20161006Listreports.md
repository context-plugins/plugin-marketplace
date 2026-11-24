<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsCodebuildXAmzTargetCodebuild20161006Listreports — operations

Accessor: `client.AwsCodebuildXAmzTargetCodebuild20161006Listreports` · Source: `src/AwsCodeBuild/Api/AwsCodebuildXAmzTargetCodebuild20161006Listreports.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListReports

- **Auth**: `options.Sigv4`
- **Signature**: `ListReports(ListReportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListReportsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListReportsRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild20161006Listreports/ListReportsRequest.cs` |
| `XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi` | `src/AwsCodeBuild/Models/Enums/XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi.cs` |
| `ListReportsError` | `src/AwsCodeBuild/Errors/ListReportsError.cs` |

