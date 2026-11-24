<!-- Generated file — do not edit; regenerated with the SDK. -->

# Results — operations

Accessor: `client.Results` · Source: `src/Leadspace/Api/Results.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetBulkEnrichmentResults

- **Auth**: `options.BearerAuth`
- **Signature**: `GetBulkEnrichmentResults(GetBulkEnrichmentResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BulkId`
- **Returns**: `BulkResults`
- **Error**: `ApiException<GetBulkEnrichmentResultsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetError([NotNullWhen(true)] out Error? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBulkEnrichmentResultsRequest` | `src/Leadspace/Requests/Results/GetBulkEnrichmentResultsRequest.cs` |
| `BulkResults` | `src/Leadspace/Models/BulkResults.cs` |
| `GetBulkEnrichmentResultsError` | `src/Leadspace/Errors/GetBulkEnrichmentResultsError.cs` |
| `Error` | `src/Leadspace/Models/Error.cs` |

### GetDiscoveryResults

- **Auth**: `options.BearerAuth`
- **Signature**: `GetDiscoveryResults(GetDiscoveryResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BulkId`
- **Returns**: `DiscoveryResults`
- **Error**: `ApiException<GetDiscoveryResultsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetError([NotNullWhen(true)] out Error? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDiscoveryResultsRequest` | `src/Leadspace/Requests/Results/GetDiscoveryResultsRequest.cs` |
| `DiscoveryResults` | `src/Leadspace/Models/DiscoveryResults.cs` |
| `GetDiscoveryResultsError` | `src/Leadspace/Errors/GetDiscoveryResultsError.cs` |
| `Error` | `src/Leadspace/Models/Error.cs` |

### GetIntentResults

- **Auth**: `options.BearerAuth`
- **Signature**: `GetIntentResults(GetIntentResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`
- **Returns**: `IntentResults`
- **Error**: `ApiException<GetIntentResultsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetError([NotNullWhen(true)] out Error? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetIntentResultsRequest` | `src/Leadspace/Requests/Results/GetIntentResultsRequest.cs` |
| `IntentResults` | `src/Leadspace/Models/IntentResults.cs` |
| `GetIntentResultsError` | `src/Leadspace/Errors/GetIntentResultsError.cs` |
| `Error` | `src/Leadspace/Models/Error.cs` |

