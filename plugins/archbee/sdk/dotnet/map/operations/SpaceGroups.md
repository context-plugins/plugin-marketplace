<!-- Generated file — do not edit; regenerated with the SDK. -->

# SpaceGroups — operations

Accessor: `client.SpaceGroups` · Source: `src/Archbee/Api/SpaceGroups.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSpaceGroup

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateSpaceGroup(CreateSpaceGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SpaceGroupCreateResponse`
- **Error**: `ApiException<CreateSpaceGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetSpaceGroupCreate400Error1([NotNullWhen(true)] out SpaceGroupCreate400Error1? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSpaceGroupRequest` | `src/Archbee/Requests/SpaceGroups/CreateSpaceGroupRequest.cs` |
| `SpaceGroupCreateRequest` | `src/Archbee/Models/SpaceGroupCreateRequest.cs` |
| `SpaceGroupCreateResponse` | `src/Archbee/Models/SpaceGroupCreateResponse.cs` |
| `CreateSpaceGroupError` | `src/Archbee/Errors/CreateSpaceGroupError.cs` |
| `SpaceGroupCreate400Error1` | `src/Archbee/Models/SpaceGroupCreate400Error1.cs` |

### DeleteSpaceGroup

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteSpaceGroup(DeleteSpaceGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SpaceGroupDeleteResponse`
- **Error**: `ApiException<DeleteSpaceGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetSpaceGroupDelete400Error1([NotNullWhen(true)] out SpaceGroupDelete400Error1? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSpaceGroupRequest` | `src/Archbee/Requests/SpaceGroups/DeleteSpaceGroupRequest.cs` |
| `SpaceGroupDeleteRequest` | `src/Archbee/Models/SpaceGroupDeleteRequest.cs` |
| `SpaceGroupDeleteResponse` | `src/Archbee/Models/SpaceGroupDeleteResponse.cs` |
| `DeleteSpaceGroupError` | `src/Archbee/Errors/DeleteSpaceGroupError.cs` |
| `SpaceGroupDelete400Error1` | `src/Archbee/Models/SpaceGroupDelete400Error1.cs` |

