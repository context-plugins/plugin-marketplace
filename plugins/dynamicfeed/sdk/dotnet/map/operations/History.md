<!-- Generated file — do not edit; regenerated with the SDK. -->

# History — operations

Accessor: `client.History` · Source: `src/DynamicFeed/Api/History.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### HistoryV1HistoryGet

- **Signature**: `HistoryV1HistoryGet(HistoryV1HistoryGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `tool` ← `Tool`
- **Returns**: `object`
- **Error**: `ApiException<HistoryV1HistoryGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HistoryV1HistoryGetRequest` | `src/DynamicFeed/Requests/History/HistoryV1HistoryGetRequest.cs` |
| `HistoryV1HistoryGetError` | `src/DynamicFeed/Errors/HistoryV1HistoryGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

