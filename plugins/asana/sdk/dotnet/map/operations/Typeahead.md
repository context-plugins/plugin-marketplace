<!-- Generated file — do not edit; regenerated with the SDK. -->

# Typeahead — operations

Accessor: `client.Typeahead` · Source: `src/Asana/Api/Typeahead.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### TypeaheadForWorkspace

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `TypeaheadForWorkspace(TypeaheadForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WorkspaceGid`
- **Query params (wire ← C#)**: `resource_type` ← `ResourceType`, `type` ← `Type`, `query` ← `Query`, `count` ← `Count`, `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `WorkspacesTypeaheadResponse`
- **Error**: `ApiException<TypeaheadForWorkspaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TypeaheadForWorkspaceRequest` | `src/Asana/Requests/Typeahead/TypeaheadForWorkspaceRequest.cs` |
| `ResourceType` | `src/Asana/Models/Enums/ResourceType.cs` |
| `TypeAsanaTypeaheadApi` | `src/Asana/Models/Enums/TypeAsanaTypeaheadApi.cs` |
| `WorkspacesTypeaheadResponse` | `src/Asana/Models/WorkspacesTypeaheadResponse.cs` |
| `TypeaheadForWorkspaceError` | `src/Asana/Errors/TypeaheadForWorkspaceError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

