<!-- Generated file — do not edit; regenerated with the SDK. -->

# MetricAssociations — operations

Accessor: `client.MetricAssociations` · Source: `src/DevCycle/Api/MetricAssociations.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### MetricAssociationsControllerCreate

- **Signature**: `MetricAssociationsControllerCreate(MetricAssociationsControllerCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`, `Body`
- **Returns**: `MetricAssociation`
- **Error**: `ApiException<MetricAssociationsControllerCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetricAssociationsControllerCreateRequest` | `src/DevCycle/Requests/MetricAssociations/MetricAssociationsControllerCreateRequest.cs` |
| `CreateMetricAssociationDto` | `src/DevCycle/Models/CreateMetricAssociationDto.cs` |
| `MetricAssociation` | `src/DevCycle/Models/MetricAssociation.cs` |
| `MetricAssociationsControllerCreateError` | `src/DevCycle/Errors/MetricAssociationsControllerCreateError.cs` |

### MetricAssociationsControllerFindAll

- **Signature**: `MetricAssociationsControllerFindAll(MetricAssociationsControllerFindAllRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`
- **Query params (wire ← C#)**: `metric` ← `Metric`, `feature` ← `Feature`
- **Returns**: `IReadOnlyList<MetricAssociation>`
- **Error**: `ApiException<MetricAssociationsControllerFindAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetricAssociationsControllerFindAllRequest` | `src/DevCycle/Requests/MetricAssociations/MetricAssociationsControllerFindAllRequest.cs` |
| `MetricAssociation` | `src/DevCycle/Models/MetricAssociation.cs` |
| `MetricAssociationsControllerFindAllError` | `src/DevCycle/Errors/MetricAssociationsControllerFindAllError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |

### MetricAssociationsControllerRemove

- **Signature**: `MetricAssociationsControllerRemove(MetricAssociationsControllerRemoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`, `Metric`, `Feature`
- **Query params (wire ← C#)**: `metric` ← `Metric`, `feature` ← `Feature`
- **Returns**: `void` (Task)
- **Error**: `ApiException<MetricAssociationsControllerRemoveError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetricAssociationsControllerRemoveRequest` | `src/DevCycle/Requests/MetricAssociations/MetricAssociationsControllerRemoveRequest.cs` |
| `MetricAssociationsControllerRemoveError` | `src/DevCycle/Errors/MetricAssociationsControllerRemoveError.cs` |

