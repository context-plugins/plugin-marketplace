<!-- Generated file — do not edit; regenerated with the SDK. -->

# Processes — operations

Accessor: `client.Processes` · Source: `src/UiPath/Api/Processes.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListProcesses

- **Auth**: `options.BearerAuth`
- **Signature**: `ListProcesses(ListProcessesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `$filter` ← `Filter`, `$orderby` ← `Orderby`, `$top` ← `Top`, `$skip` ← `Skip`
- **Returns**: `ODataProcessCollection`
- **Error**: `ApiException<ListProcessesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListProcessesRequest` | `src/UiPath/Requests/Processes/ListProcessesRequest.cs` |
| `ODataProcessCollection` | `src/UiPath/Models/ODataProcessCollection.cs` |
| `ListProcessesError` | `src/UiPath/Errors/ListProcessesError.cs` |
| `ErrorResponseModel` | `src/UiPath/Models/ErrorResponseModel.cs` |

