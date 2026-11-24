<!-- Generated file — do not edit; regenerated with the SDK. -->

# Branches — operations

Accessor: `client.Branches` · Source: `src/ReadMe/Api/Branches.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteBranchesByBranch

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteBranchesByBranch(DeleteBranchesByBranchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteBranchesByBranchRequest` | `src/ReadMe/Requests/Branches/DeleteBranchesByBranchRequest.cs` |

### GetBranches

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetBranches(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

### GetBranchesByBranch

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetBranchesByBranch(GetBranchesByBranchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetBranchesByBranchRequest` | `src/ReadMe/Requests/Branches/GetBranchesByBranchRequest.cs` |

### PostBranches

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `PostBranches(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

### PutBranchesByBranch

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `PutBranchesByBranch(PutBranchesByBranchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PutBranchesByBranchRequest` | `src/ReadMe/Requests/Branches/PutBranchesByBranchRequest.cs` |

