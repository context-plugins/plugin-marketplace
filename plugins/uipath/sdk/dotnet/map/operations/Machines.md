<!-- Generated file — do not edit; regenerated with the SDK. -->

# Machines — operations

Accessor: `client.Machines` · Source: `src/UiPath/Api/Machines.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListMachines

- **Auth**: `options.BearerAuth`
- **Signature**: `ListMachines(ListMachinesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `$filter` ← `Filter`, `$top` ← `Top`, `$skip` ← `Skip`
- **Returns**: `ODataMachineCollection`
- **Error**: `ApiException<ListMachinesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMachinesRequest` | `src/UiPath/Requests/Machines/ListMachinesRequest.cs` |
| `ODataMachineCollection` | `src/UiPath/Models/ODataMachineCollection.cs` |
| `ListMachinesError` | `src/UiPath/Errors/ListMachinesError.cs` |
| `ErrorResponseModel` | `src/UiPath/Models/ErrorResponseModel.cs` |

