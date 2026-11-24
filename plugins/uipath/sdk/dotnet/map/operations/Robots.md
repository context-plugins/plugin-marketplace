<!-- Generated file — do not edit; regenerated with the SDK. -->

# Robots — operations

Accessor: `client.Robots` · Source: `src/UiPath/Api/Robots.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListRobots

- **Auth**: `options.BearerAuth`
- **Signature**: `ListRobots(ListRobotsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `$filter` ← `Filter`, `$orderby` ← `Orderby`, `$top` ← `Top`, `$skip` ← `Skip`
- **Returns**: `ODataRobotCollection`
- **Error**: `ApiException<ListRobotsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListRobotsRequest` | `src/UiPath/Requests/Robots/ListRobotsRequest.cs` |
| `ODataRobotCollection` | `src/UiPath/Models/ODataRobotCollection.cs` |
| `ListRobotsError` | `src/UiPath/Errors/ListRobotsError.cs` |
| `ErrorResponseModel` | `src/UiPath/Models/ErrorResponseModel.cs` |

