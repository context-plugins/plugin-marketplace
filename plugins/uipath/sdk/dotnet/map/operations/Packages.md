<!-- Generated file — do not edit; regenerated with the SDK. -->

# Packages — operations

Accessor: `client.Packages` · Source: `src/UiPath/Api/Packages.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListPackages

- **Auth**: `options.BearerAuth`
- **Signature**: `ListPackages(ListPackagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `$filter` ← `Filter`, `$top` ← `Top`, `$skip` ← `Skip`
- **Returns**: `ODataPackageCollection`
- **Error**: `ApiException<ListPackagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPackagesRequest` | `src/UiPath/Requests/Packages/ListPackagesRequest.cs` |
| `ODataPackageCollection` | `src/UiPath/Models/ODataPackageCollection.cs` |
| `ListPackagesError` | `src/UiPath/Errors/ListPackagesError.cs` |
| `ErrorResponseModel` | `src/UiPath/Models/ErrorResponseModel.cs` |

