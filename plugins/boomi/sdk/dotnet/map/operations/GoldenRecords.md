<!-- Generated file — do not edit; regenerated with the SDK. -->

# GoldenRecords — operations

Accessor: `client.GoldenRecords` · Source: `src/Boomi/Api/GoldenRecords.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListGoldenRecords

- **Server group**: `DefaultBoomiDataHubGoldenRecordsApi`
- **Auth**: `options.BasicAuth` OR `options.BearerAuth`
- **Signature**: `ListGoldenRecords(ListGoldenRecordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepositoryId`, `UniverseId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `RepositoriesUniversesRecordsResponse`
- **Error**: `ApiException<ListGoldenRecordsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBoomiDataHubGoldenRecordsApi([NotNullWhen(true)] out ErrorResponseBoomiDataHubGoldenRecordsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListGoldenRecordsRequest` | `src/Boomi/Requests/GoldenRecords/ListGoldenRecordsRequest.cs` |
| `RepositoriesUniversesRecordsResponse` | `src/Boomi/Models/RepositoriesUniversesRecordsResponse.cs` |
| `ListGoldenRecordsError` | `src/Boomi/Errors/ListGoldenRecordsError.cs` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `src/Boomi/Models/ErrorResponseBoomiDataHubGoldenRecordsApi.cs` |

