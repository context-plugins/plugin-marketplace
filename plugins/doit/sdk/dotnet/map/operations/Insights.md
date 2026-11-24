<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insights — operations

Accessor: `client.Insights` · Source: `src/DoiT/Api/Insights.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteInsightResult

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DeleteInsightResult(DeleteInsightResultRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SourceId`, `InsightKey`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteInsightResultError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteInsightResultRequest` | `src/DoiT/Requests/Insights/DeleteInsightResultRequest.cs` |
| `SourceId` | `src/DoiT/Models/Enums/SourceId.cs` |
| `DeleteInsightResultError` | `src/DoiT/Errors/DeleteInsightResultError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### DeleteInsightResults

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DeleteInsightResults(DeleteInsightResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InsightKey`
- **Query params (wire ← C#)**: `insightKey` ← `InsightKey`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteInsightResultsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteInsightResultsRequest` | `src/DoiT/Requests/Insights/DeleteInsightResultsRequest.cs` |
| `DeleteInsightResultsError` | `src/DoiT/Errors/DeleteInsightResultsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetInsightResourceResults

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetInsightResourceResults(GetInsightResourceResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SourceId`, `InsightKey`
- **Query params (wire ← C#)**: `pageToken` ← `PageToken`, `maxResults` ← `MaxResults`
- **Returns**: `ResourceResultsResponse`
- **Error**: `ApiException<GetInsightResourceResultsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetInsightResourceResultsRequest` | `src/DoiT/Requests/Insights/GetInsightResourceResultsRequest.cs` |
| `ResourceResultsResponse` | `src/DoiT/Models/ResourceResultsResponse.cs` |
| `GetInsightResourceResultsError` | `src/DoiT/Errors/GetInsightResourceResultsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetInsightResult

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetInsightResult(GetInsightResultRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SourceId`, `InsightKey`
- **Returns**: `InsightResponse`
- **Error**: `ApiException<GetInsightResultError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetInsightResultRequest` | `src/DoiT/Requests/Insights/GetInsightResultRequest.cs` |
| `InsightResponse` | `src/DoiT/Models/InsightResponse.cs` |
| `GetInsightResultError` | `src/DoiT/Errors/GetInsightResultError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetInsightResults

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetInsightResults(GetInsightResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `searchTerm` ← `SearchTerm`, `displayStatus` ← `DisplayStatus`, `category` ← `Category`, `cloudProvider` ← `CloudProvider`, `source` ← `Source`, `priority` ← `Priority`, `tag` ← `Tag`, `easyWin` ← `EasyWin`, `cloudFlows` ← `CloudFlows`, `pageToken` ← `PageToken`, `maxResults` ← `MaxResults`
- **Returns**: `ResultsBody`
- **Error**: `ApiException<GetInsightResultsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetInsightResultsRequest` | `src/DoiT/Requests/Insights/GetInsightResultsRequest.cs` |
| `DisplayStatus1` | `src/DoiT/Models/Enums/DisplayStatus1.cs` |
| `Category1` | `src/DoiT/Models/Enums/Category1.cs` |
| `Priority1` | `src/DoiT/Models/Enums/Priority1.cs` |
| `ResultsBody` | `src/DoiT/Models/ResultsBody.cs` |
| `GetInsightResultsError` | `src/DoiT/Errors/GetInsightResultsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### PostInsightResourceResults

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `PostInsightResourceResults(PostInsightResourceResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SourceId`, `InsightKey`, `Body`
- **Query params (wire ← C#)**: `maxResults` ← `MaxResults`
- **Returns**: `ResourceResultsResponse`
- **Error**: `ApiException<PostInsightResourceResultsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostInsightResourceResultsRequest` | `src/DoiT/Requests/Insights/PostInsightResourceResultsRequest.cs` |
| `SourceId` | `src/DoiT/Models/Enums/SourceId.cs` |
| `CreateResourceResultsBody` | `src/DoiT/Models/CreateResourceResultsBody.cs` |
| `ResourceResultsResponse` | `src/DoiT/Models/ResourceResultsResponse.cs` |
| `PostInsightResourceResultsError` | `src/DoiT/Errors/PostInsightResourceResultsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### PostInsightResult

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `PostInsightResult(PostInsightResultRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SourceId`, `InsightKey`, `Body`
- **Returns**: `InsightResponse`
- **Error**: `ApiException<PostInsightResultError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostInsightResultRequest` | `src/DoiT/Requests/Insights/PostInsightResultRequest.cs` |
| `SourceId` | `src/DoiT/Models/Enums/SourceId.cs` |
| `InsightMetadataRequest` | `src/DoiT/Models/InsightMetadataRequest.cs` |
| `InsightResponse` | `src/DoiT/Models/InsightResponse.cs` |
| `PostInsightResultError` | `src/DoiT/Errors/PostInsightResultError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### PostInsightResults

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `PostInsightResults(PostInsightResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<ResultsError>`
- **Error**: `ApiException<PostInsightResultsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostInsightResultsRequest` | `src/DoiT/Requests/Insights/PostInsightResultsRequest.cs` |
| `CreateResultsBody` | `src/DoiT/Models/CreateResultsBody.cs` |
| `ResultsError` | `src/DoiT/Models/ResultsError.cs` |
| `PostInsightResultsError` | `src/DoiT/Errors/PostInsightResultsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### UpdateInsightStatus

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UpdateInsightStatus(UpdateInsightStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SourceId`, `InsightKey`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateInsightStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateInsightStatusRequest` | `src/DoiT/Requests/Insights/UpdateInsightStatusRequest.cs` |
| `SourceId` | `src/DoiT/Models/Enums/SourceId.cs` |
| `UpdateStatusRequest` | `src/DoiT/Models/UpdateStatusRequest.cs` |
| `UpdateInsightStatusError` | `src/DoiT/Errors/UpdateInsightStatusError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

