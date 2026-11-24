<!-- Generated file — do not edit; regenerated with the SDK. -->

# TestMetadataApi — operations

Accessor: `client.TestMetadataApi` · Source: `src/CircleCi/Api/TestMetadataApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListBuildTests

- **Auth**: `options.ApiToken`
- **Signature**: `ListBuildTests(ListBuildTestsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VcsType`, `Username`, `Project`, `BuildNum`
- **Returns**: `ProjectProjectBuildNumTestsResponse`
- **Error**: `ApiException<ListBuildTestsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBuildTestsRequest` | `src/CircleCi/Requests/TestMetadataApi/ListBuildTestsRequest.cs` |
| `VcsType` | `src/CircleCi/Models/Enums/VcsType.cs` |
| `ProjectProjectBuildNumTestsResponse` | `src/CircleCi/Models/ProjectProjectBuildNumTestsResponse.cs` |
| `ListBuildTestsError` | `src/CircleCi/Errors/ListBuildTestsError.cs` |

