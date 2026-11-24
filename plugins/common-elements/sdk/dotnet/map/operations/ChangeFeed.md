<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChangeFeed — operations

Accessor: `client.ChangeFeed` · Source: `src/CommonElements/Api/ChangeFeed.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Changes

- **Auth**: `options.BearerAuth`
- **Signature**: `Changes(ChangesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `kind` ← `Kind`, `state` ← `State`, `county` ← `County`, `subtype` ← `Subtype`, `since` ← `Since`, `until` ← `Until`, `min_units` ← `MinUnits`, `max_units` ← `MaxUnits`, `min_magnitude` ← `MinMagnitude`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `ApiV1ChangesResponse`
- **Error**: `ApiException<ChangesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ChangesRequest` | `src/CommonElements/Requests/ChangeFeed/ChangesRequest.cs` |
| `ApiV1ChangesResponse` | `src/CommonElements/Models/ApiV1ChangesResponse.cs` |
| `ChangesError` | `src/CommonElements/Errors/ChangesError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### ChangesSummary

- **Auth**: `options.BearerAuth`
- **Signature**: `ChangesSummary(ChangesSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `since` ← `Since`, `state` ← `State`
- **Returns**: `ApiV1ChangesSummaryResponse`
- **Error**: `ApiException<ChangesSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ChangesSummaryRequest` | `src/CommonElements/Requests/ChangeFeed/ChangesSummaryRequest.cs` |
| `ApiV1ChangesSummaryResponse` | `src/CommonElements/Models/ApiV1ChangesSummaryResponse.cs` |
| `ChangesSummaryError` | `src/CommonElements/Errors/ChangesSummaryError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

