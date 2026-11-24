<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsCodebuildApi — operations

Accessor: `client.AwsCodebuildApi` · Source: `src/AwsCodeBuild/Api/AwsCodebuildApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### StartSandbox

- **Auth**: `options.Sigv4`
- **Signature**: `StartSandbox(StartSandboxRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartSandboxError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartSandboxRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildApi/StartSandboxRequest.cs` |
| `XAmzTarget` | `src/AwsCodeBuild/Models/Enums/XAmzTarget.cs` |
| `StartSandboxError` | `src/AwsCodeBuild/Errors/StartSandboxError.cs` |

### StartSandboxConnection

- **Auth**: `options.Sigv4`
- **Signature**: `StartSandboxConnection(StartSandboxConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartSandboxConnectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartSandboxConnectionRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildApi/StartSandboxConnectionRequest.cs` |
| `XAmzTarget2` | `src/AwsCodeBuild/Models/Enums/XAmzTarget2.cs` |
| `StartSandboxConnectionError` | `src/AwsCodeBuild/Errors/StartSandboxConnectionError.cs` |

### StopSandbox

- **Auth**: `options.Sigv4`
- **Signature**: `StopSandbox(StopSandboxRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StopSandboxError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StopSandboxRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildApi/StopSandboxRequest.cs` |
| `XAmzTarget1` | `src/AwsCodeBuild/Models/Enums/XAmzTarget1.cs` |
| `StopSandboxError` | `src/AwsCodeBuild/Errors/StopSandboxError.cs` |

