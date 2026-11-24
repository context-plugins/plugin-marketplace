<!-- Generated file — do not edit; regenerated with the SDK. -->

# ResiliencyGroupApi — operations

Accessor: `client.ResiliencyGroupApi` · Source: `src/AwsDirectConnect/Api/ResiliencyGroupApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateResiliencyGroup

- **Auth**: `options.Sigv4`
- **Signature**: `CreateResiliencyGroup(CreateResiliencyGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateResiliencyGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateResiliencyGroupOperationRequest` | `src/AwsDirectConnect/Requests/ResiliencyGroupApi/CreateResiliencyGroupOperationRequest.cs` |
| `XAmzTargetAwsDirectConnectResiliencyGroupApi` | `src/AwsDirectConnect/Models/Enums/XAmzTargetAwsDirectConnectResiliencyGroupApi.cs` |
| `CreateResiliencyGroupError` | `src/AwsDirectConnect/Errors/CreateResiliencyGroupError.cs` |

### DeleteResiliencyGroup

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteResiliencyGroup(DeleteResiliencyGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteResiliencyGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteResiliencyGroupOperationRequest` | `src/AwsDirectConnect/Requests/ResiliencyGroupApi/DeleteResiliencyGroupOperationRequest.cs` |
| `XAmzTarget1AwsDirectConnectResiliencyGroupApi` | `src/AwsDirectConnect/Models/Enums/XAmzTarget1AwsDirectConnectResiliencyGroupApi.cs` |
| `DeleteResiliencyGroupError` | `src/AwsDirectConnect/Errors/DeleteResiliencyGroupError.cs` |

### GetResiliencyGroup

- **Auth**: `options.Sigv4`
- **Signature**: `GetResiliencyGroup(GetResiliencyGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetResiliencyGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetResiliencyGroupOperationRequest` | `src/AwsDirectConnect/Requests/ResiliencyGroupApi/GetResiliencyGroupOperationRequest.cs` |
| `XAmzTarget2AwsDirectConnectResiliencyGroupApi` | `src/AwsDirectConnect/Models/Enums/XAmzTarget2AwsDirectConnectResiliencyGroupApi.cs` |
| `GetResiliencyGroupError` | `src/AwsDirectConnect/Errors/GetResiliencyGroupError.cs` |

### ListResiliencyGroups

- **Auth**: `options.Sigv4`
- **Signature**: `ListResiliencyGroups(ListResiliencyGroupsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListResiliencyGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListResiliencyGroupsOperationRequest` | `src/AwsDirectConnect/Requests/ResiliencyGroupApi/ListResiliencyGroupsOperationRequest.cs` |
| `XAmzTarget3AwsDirectConnectResiliencyGroupApi` | `src/AwsDirectConnect/Models/Enums/XAmzTarget3AwsDirectConnectResiliencyGroupApi.cs` |
| `ListResiliencyGroupsError` | `src/AwsDirectConnect/Errors/ListResiliencyGroupsError.cs` |

### UpdateResiliencyGroup

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateResiliencyGroup(UpdateResiliencyGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateResiliencyGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateResiliencyGroupOperationRequest` | `src/AwsDirectConnect/Requests/ResiliencyGroupApi/UpdateResiliencyGroupOperationRequest.cs` |
| `XAmzTarget4AwsDirectConnectResiliencyGroupApi` | `src/AwsDirectConnect/Models/Enums/XAmzTarget4AwsDirectConnectResiliencyGroupApi.cs` |
| `UpdateResiliencyGroupError` | `src/AwsDirectConnect/Errors/UpdateResiliencyGroupError.cs` |

