<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsCodebuildXAmzTargetCodebuild20161006Deletereport — operations

Accessor: `client.AwsCodebuildXAmzTargetCodebuild20161006Deletereport` · Source: `src/AwsCodeBuild/Api/AwsCodebuildXAmzTargetCodebuild20161006Deletereport.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteReport

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteReport(DeleteReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteReportRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild20161006Deletereport/DeleteReportRequest.cs` |
| `XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApi` | `src/AwsCodeBuild/Models/Enums/XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApi.cs` |
| `DeleteReportError` | `src/AwsCodeBuild/Errors/DeleteReportError.cs` |

