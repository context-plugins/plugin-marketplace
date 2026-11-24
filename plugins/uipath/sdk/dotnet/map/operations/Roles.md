<!-- Generated file — do not edit; regenerated with the SDK. -->

# Roles — operations

Accessor: `client.Roles` · Source: `src/UiPath/Api/Roles.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListRoles

- **Auth**: `options.BearerAuth`
- **Signature**: `ListRoles(ListRolesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `$filter` ← `Filter`, `$top` ← `Top`, `$skip` ← `Skip`
- **Returns**: `ODataRoleCollection`
- **Error**: `ApiException<ListRolesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListRolesRequest` | `src/UiPath/Requests/Roles/ListRolesRequest.cs` |
| `ODataRoleCollection` | `src/UiPath/Models/ODataRoleCollection.cs` |
| `ListRolesError` | `src/UiPath/Errors/ListRolesError.cs` |
| `ErrorResponseModel` | `src/UiPath/Models/ErrorResponseModel.cs` |

