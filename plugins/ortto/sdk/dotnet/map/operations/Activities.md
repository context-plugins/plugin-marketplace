<!-- Generated file — do not edit; regenerated with the SDK. -->

# Activities — operations

Accessor: `client.Activities` · Source: `src/Ortto/Api/Activities.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateActivities

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CreateActivities(CreateActivitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateActivitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateActivitiesRequest` | `src/Ortto/Requests/Activities/CreateActivitiesRequest.cs` |
| `ActivitiesCreateRequest` | `src/Ortto/Models/ActivitiesCreateRequest.cs` |
| `CreateActivitiesError` | `src/Ortto/Errors/CreateActivitiesError.cs` |
| `Error` | `src/Ortto/Models/Error.cs` |

