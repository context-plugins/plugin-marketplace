<!-- Generated file — do not edit; regenerated with the SDK. -->

# Anomalies — operations

Accessor: `client.Anomalies` · Source: `src/DoiT/Api/Anomalies.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAnomaly

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetAnomaly(GetAnomalyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `AnomaliesV1Response`
- **Error**: `ApiException<GetAnomalyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAnomalyRequest` | `src/DoiT/Requests/Anomalies/GetAnomalyRequest.cs` |
| `AnomaliesV1Response` | `src/DoiT/Models/AnomaliesV1Response.cs` |
| `GetAnomalyError` | `src/DoiT/Errors/GetAnomalyError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetAnomalyExplanation

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetAnomalyExplanation(GetAnomalyExplanationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `AnomaliesV1ExplanationResponse`
- **Error**: `ApiException<GetAnomalyExplanationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAnomalyExplanationRequest` | `src/DoiT/Requests/Anomalies/GetAnomalyExplanationRequest.cs` |
| `AnomaliesV1ExplanationResponse` | `src/DoiT/Models/AnomaliesV1ExplanationResponse.cs` |
| `GetAnomalyExplanationError` | `src/DoiT/Errors/GetAnomalyExplanationError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListAnomalies

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListAnomalies(ListAnomaliesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `minCreationTime` ← `MinCreationTime`, `maxCreationTime` ← `MaxCreationTime`, `filter` ← `Filter`, `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`, `maxResults` ← `MaxResults`, `pageToken` ← `PageToken`, `includeNotifications` ← `IncludeNotifications`
- **Returns**: `AnomaliesResponse`
- **Error**: `ApiException<ListAnomaliesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAnomaliesRequest` | `src/DoiT/Requests/Anomalies/ListAnomaliesRequest.cs` |
| `SortByDoiTAnomaliesApi` | `src/DoiT/Models/Enums/SortByDoiTAnomaliesApi.cs` |
| `SortOrder` | `src/DoiT/Models/Enums/SortOrder.cs` |
| `AnomaliesResponse` | `src/DoiT/Models/AnomaliesResponse.cs` |
| `ListAnomaliesError` | `src/DoiT/Errors/ListAnomaliesError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### PatchAnomaly

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `PatchAnomaly(PatchAnomalyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PatchAnomalyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PatchAnomalyRequest` | `src/DoiT/Requests/Anomalies/PatchAnomalyRequest.cs` |
| `AnomalyStatusUpdate` | `src/DoiT/Models/AnomalyStatusUpdate.cs` |
| `PatchAnomalyError` | `src/DoiT/Errors/PatchAnomalyError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

