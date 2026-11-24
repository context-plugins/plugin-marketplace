<!-- Generated file — do not edit; regenerated with the SDK. -->

# FleetApi — operations

Accessor: `client.FleetApi` · Source: `src/AwsCodeBuild/Api/FleetApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BatchGetFleets

- **Auth**: `options.Sigv4`
- **Signature**: `BatchGetFleets(BatchGetFleetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<BatchGetFleetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchGetFleetsRequest` | `src/AwsCodeBuild/Requests/FleetApi/BatchGetFleetsRequest.cs` |
| `XAmzTargetAwsCodeBuildFleetApi` | `src/AwsCodeBuild/Models/Enums/XAmzTargetAwsCodeBuildFleetApi.cs` |
| `BatchGetFleetsError` | `src/AwsCodeBuild/Errors/BatchGetFleetsError.cs` |

### CreateFleet

- **Auth**: `options.Sigv4`
- **Signature**: `CreateFleet(CreateFleetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateFleetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateFleetRequest` | `src/AwsCodeBuild/Requests/FleetApi/CreateFleetRequest.cs` |
| `XAmzTarget1AwsCodeBuildFleetApi` | `src/AwsCodeBuild/Models/Enums/XAmzTarget1AwsCodeBuildFleetApi.cs` |
| `CreateFleetError` | `src/AwsCodeBuild/Errors/CreateFleetError.cs` |

### DeleteFleet

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteFleet(DeleteFleetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteFleetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteFleetRequest` | `src/AwsCodeBuild/Requests/FleetApi/DeleteFleetRequest.cs` |
| `XAmzTarget2AwsCodeBuildFleetApi` | `src/AwsCodeBuild/Models/Enums/XAmzTarget2AwsCodeBuildFleetApi.cs` |
| `DeleteFleetError` | `src/AwsCodeBuild/Errors/DeleteFleetError.cs` |

### ListFleets

- **Auth**: `options.Sigv4`
- **Signature**: `ListFleets(ListFleetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListFleetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFleetsRequest` | `src/AwsCodeBuild/Requests/FleetApi/ListFleetsRequest.cs` |
| `XAmzTarget3AwsCodeBuildFleetApi` | `src/AwsCodeBuild/Models/Enums/XAmzTarget3AwsCodeBuildFleetApi.cs` |
| `ListFleetsError` | `src/AwsCodeBuild/Errors/ListFleetsError.cs` |

### UpdateFleet

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateFleet(UpdateFleetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateFleetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateFleetRequest` | `src/AwsCodeBuild/Requests/FleetApi/UpdateFleetRequest.cs` |
| `XAmzTarget4AwsCodeBuildFleetApi` | `src/AwsCodeBuild/Models/Enums/XAmzTarget4AwsCodeBuildFleetApi.cs` |
| `UpdateFleetError` | `src/AwsCodeBuild/Errors/UpdateFleetError.cs` |

