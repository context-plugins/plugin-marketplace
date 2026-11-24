<!-- Generated file — do not edit; regenerated with the SDK. -->

# Builds — operations

Accessor: `client.Builds` · Source: `src/AwsCodeBuild/Api/Builds.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BatchDeleteBuilds2

- **Auth**: `options.Sigv4`
- **Signature**: `BatchDeleteBuilds2(BatchDeleteBuilds2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<BatchDeleteBuilds2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchDeleteBuilds2Request` | `src/AwsCodeBuild/Requests/Builds/BatchDeleteBuilds2Request.cs` |
| `XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi` | `src/AwsCodeBuild/Models/Enums/XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.cs` |
| `BatchDeleteBuilds2Error` | `src/AwsCodeBuild/Errors/BatchDeleteBuilds2Error.cs` |

### BatchGetBuilds2

- **Auth**: `options.Sigv4`
- **Signature**: `BatchGetBuilds2(BatchGetBuilds2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<BatchGetBuilds2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchGetBuilds2Request` | `src/AwsCodeBuild/Requests/Builds/BatchGetBuilds2Request.cs` |
| `XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi` | `src/AwsCodeBuild/Models/Enums/XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.cs` |
| `BatchGetBuilds2Error` | `src/AwsCodeBuild/Errors/BatchGetBuilds2Error.cs` |

### ListBuilds2

- **Auth**: `options.Sigv4`
- **Signature**: `ListBuilds2(ListBuilds2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListBuilds2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBuilds2Request` | `src/AwsCodeBuild/Requests/Builds/ListBuilds2Request.cs` |
| `XAmzTarget2AwsCodeBuildBuildsApi` | `src/AwsCodeBuild/Models/Enums/XAmzTarget2AwsCodeBuildBuildsApi.cs` |
| `ListBuilds2Error` | `src/AwsCodeBuild/Errors/ListBuilds2Error.cs` |

### ListBuildsForProject2

- **Auth**: `options.Sigv4`
- **Signature**: `ListBuildsForProject2(ListBuildsForProject2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListBuildsForProject2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBuildsForProject2Request` | `src/AwsCodeBuild/Requests/Builds/ListBuildsForProject2Request.cs` |
| `XAmzTarget3AwsCodeBuildBuildsApi` | `src/AwsCodeBuild/Models/Enums/XAmzTarget3AwsCodeBuildBuildsApi.cs` |
| `ListBuildsForProject2Error` | `src/AwsCodeBuild/Errors/ListBuildsForProject2Error.cs` |

### StartBuild2

- **Auth**: `options.Sigv4`
- **Signature**: `StartBuild2(StartBuild2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartBuild2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartBuild2Request` | `src/AwsCodeBuild/Requests/Builds/StartBuild2Request.cs` |
| `XAmzTarget4AwsCodeBuildBuildsApi` | `src/AwsCodeBuild/Models/Enums/XAmzTarget4AwsCodeBuildBuildsApi.cs` |
| `StartBuild2Error` | `src/AwsCodeBuild/Errors/StartBuild2Error.cs` |

### StopBuild2

- **Auth**: `options.Sigv4`
- **Signature**: `StopBuild2(StopBuild2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StopBuild2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StopBuild2Request` | `src/AwsCodeBuild/Requests/Builds/StopBuild2Request.cs` |
| `XAmzTarget5AwsCodeBuildBuildsApi` | `src/AwsCodeBuild/Models/Enums/XAmzTarget5AwsCodeBuildBuildsApi.cs` |
| `StopBuild2Error` | `src/AwsCodeBuild/Errors/StopBuild2Error.cs` |

