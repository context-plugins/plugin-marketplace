<!-- Generated file — do not edit; regenerated with the SDK. -->

# CloudIncidents — operations

Accessor: `client.CloudIncidents` · Source: `src/DoiT/Api/CloudIncidents.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetKnownIssue

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetKnownIssue(GetKnownIssueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `CoreV1CloudincidentsResponse1`
- **Error**: `ApiException<GetKnownIssueError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetKnownIssueRequest` | `src/DoiT/Requests/CloudIncidents/GetKnownIssueRequest.cs` |
| `CoreV1CloudincidentsResponse1` | `src/DoiT/Models/CoreV1CloudincidentsResponse1.cs` |
| `GetKnownIssueError` | `src/DoiT/Errors/GetKnownIssueError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListKnownIssues

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListKnownIssues(ListKnownIssuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `maxResults` ← `MaxResults`, `pageToken` ← `PageToken`, `filter` ← `Filter`, `minCreationTime` ← `MinCreationTime`, `maxCreationTime` ← `MaxCreationTime`
- **Returns**: `CoreV1CloudincidentsResponse`
- **Error**: `ApiException<ListKnownIssuesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListKnownIssuesRequest` | `src/DoiT/Requests/CloudIncidents/ListKnownIssuesRequest.cs` |
| `CoreV1CloudincidentsResponse` | `src/DoiT/Models/CoreV1CloudincidentsResponse.cs` |
| `ListKnownIssuesError` | `src/DoiT/Errors/ListKnownIssuesError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

