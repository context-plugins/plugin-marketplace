<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sources — operations

Accessor: `client.Sources` · Source: `src/Boomi/Api/Sources.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSource

- **Server group**: `DefaultBoomiDataHubGoldenRecordsApi`
- **Auth**: `options.BasicAuth` OR `options.BearerAuth`
- **Signature**: `CreateSource(CreateSourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepositoryId`, `Body`
- **Returns**: `SourceBoomiDataHubSourcesApi`
- **Error**: `ApiException<CreateSourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBoomiDataHubGoldenRecordsApi([NotNullWhen(true)] out ErrorResponseBoomiDataHubGoldenRecordsApi? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSourceRequest` | `src/Boomi/Requests/Sources/CreateSourceRequest.cs` |
| `SourceInput` | `src/Boomi/Models/SourceInput.cs` |
| `SourceBoomiDataHubSourcesApi` | `src/Boomi/Models/SourceBoomiDataHubSourcesApi.cs` |
| `CreateSourceError` | `src/Boomi/Errors/CreateSourceError.cs` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `src/Boomi/Models/ErrorResponseBoomiDataHubGoldenRecordsApi.cs` |

### ListSources

- **Server group**: `DefaultBoomiDataHubGoldenRecordsApi`
- **Auth**: `options.BasicAuth` OR `options.BearerAuth`
- **Signature**: `ListSources(ListSourcesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepositoryId`
- **Returns**: `RepositoriesSourcesResponse`
- **Error**: `ApiException<ListSourcesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBoomiDataHubGoldenRecordsApi([NotNullWhen(true)] out ErrorResponseBoomiDataHubGoldenRecordsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSourcesRequest` | `src/Boomi/Requests/Sources/ListSourcesRequest.cs` |
| `RepositoriesSourcesResponse` | `src/Boomi/Models/RepositoriesSourcesResponse.cs` |
| `ListSourcesError` | `src/Boomi/Errors/ListSourcesError.cs` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `src/Boomi/Models/ErrorResponseBoomiDataHubGoldenRecordsApi.cs` |

