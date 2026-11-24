<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProjectPolicyApi — operations

Accessor: `client.ProjectPolicyApi` · Source: `src/AmazonRekognition/Api/ProjectPolicyApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteProjectPolicy

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteProjectPolicy(DeleteProjectPolicyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteProjectPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteProjectPolicyOperationRequest` | `src/AmazonRekognition/Requests/ProjectPolicyApi/DeleteProjectPolicyOperationRequest.cs` |
| `XAmzTargetAmazonRekognitionProjectPolicyApi` | `src/AmazonRekognition/Models/Enums/XAmzTargetAmazonRekognitionProjectPolicyApi.cs` |
| `DeleteProjectPolicyError` | `src/AmazonRekognition/Errors/DeleteProjectPolicyError.cs` |

### ListProjectPolicies

- **Auth**: `options.Sigv4`
- **Signature**: `ListProjectPolicies(ListProjectPoliciesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListProjectPoliciesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListProjectPoliciesOperationRequest` | `src/AmazonRekognition/Requests/ProjectPolicyApi/ListProjectPoliciesOperationRequest.cs` |
| `XAmzTarget1AmazonRekognitionProjectPolicyApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget1AmazonRekognitionProjectPolicyApi.cs` |
| `ListProjectPoliciesError` | `src/AmazonRekognition/Errors/ListProjectPoliciesError.cs` |

### PutProjectPolicy

- **Auth**: `options.Sigv4`
- **Signature**: `PutProjectPolicy(PutProjectPolicyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PutProjectPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutProjectPolicyOperationRequest` | `src/AmazonRekognition/Requests/ProjectPolicyApi/PutProjectPolicyOperationRequest.cs` |
| `XAmzTarget2AmazonRekognitionProjectPolicyApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget2AmazonRekognitionProjectPolicyApi.cs` |
| `PutProjectPolicyError` | `src/AmazonRekognition/Errors/PutProjectPolicyError.cs` |

