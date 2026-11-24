<!-- Generated file — do not edit; regenerated with the SDK. -->

# Quarantine — operations

Accessor: `client.Quarantine` · Source: `src/Boomi/Api/Quarantine.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListQuarantineEntries

- **Server group**: `DefaultBoomiDataHubGoldenRecordsApi`
- **Auth**: `options.BasicAuth` OR `options.BearerAuth`
- **Signature**: `ListQuarantineEntries(ListQuarantineEntriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepositoryId`, `UniverseId`
- **Returns**: `RepositoriesUniversesQuarantineResponse`
- **Error**: `ApiException<ListQuarantineEntriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBoomiDataHubGoldenRecordsApi([NotNullWhen(true)] out ErrorResponseBoomiDataHubGoldenRecordsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListQuarantineEntriesRequest` | `src/Boomi/Requests/Quarantine/ListQuarantineEntriesRequest.cs` |
| `RepositoriesUniversesQuarantineResponse` | `src/Boomi/Models/RepositoriesUniversesQuarantineResponse.cs` |
| `ListQuarantineEntriesError` | `src/Boomi/Errors/ListQuarantineEntriesError.cs` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `src/Boomi/Models/ErrorResponseBoomiDataHubGoldenRecordsApi.cs` |

