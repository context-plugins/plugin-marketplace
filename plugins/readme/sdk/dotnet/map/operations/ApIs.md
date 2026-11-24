<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApIs — operations

Accessor: `client.ApIs` · Source: `src/ReadMe/Api/ApIs.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteBranchesByBranchApisById

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteBranchesByBranchApisById(DeleteBranchesByBranchApisByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`, `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteBranchesByBranchApisByIdRequest` | `src/ReadMe/Requests/ApIs/DeleteBranchesByBranchApisByIdRequest.cs` |

### GetBranchesByBranchApis

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetBranchesByBranchApis(GetBranchesByBranchApisRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`
- **Query params (wire ← C#)**: `perPage` ← `PerPage`, `page` ← `Page`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetBranchesByBranchApisError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBranchesByBranchApisRequest` | `src/ReadMe/Requests/ApIs/GetBranchesByBranchApisRequest.cs` |
| `GetBranchesByBranchApisError` | `src/ReadMe/Errors/GetBranchesByBranchApisError.cs` |

### GetBranchesByBranchApisById

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetBranchesByBranchApisById(GetBranchesByBranchApisByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`, `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetBranchesByBranchApisByIdRequest` | `src/ReadMe/Requests/ApIs/GetBranchesByBranchApisByIdRequest.cs` |

### PostBranchesByBranchApis

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `PostBranchesByBranchApis(PostBranchesByBranchApisRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PostBranchesByBranchApisRequest` | `src/ReadMe/Requests/ApIs/PostBranchesByBranchApisRequest.cs` |

### PutBranchesByBranchApisById

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `PutBranchesByBranchApisById(PutBranchesByBranchApisByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`, `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PutBranchesByBranchApisByIdRequest` | `src/ReadMe/Requests/ApIs/PutBranchesByBranchApisByIdRequest.cs` |

