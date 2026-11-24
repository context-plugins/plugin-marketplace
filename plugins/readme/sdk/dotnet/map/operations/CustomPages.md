<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomPages — operations

Accessor: `client.CustomPages` · Source: `src/ReadMe/Api/CustomPages.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteBranchesByBranchCustomPagesBySlug

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteBranchesByBranchCustomPagesBySlug(DeleteBranchesByBranchCustomPagesBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`, `Slug`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteBranchesByBranchCustomPagesBySlugRequest` | `src/ReadMe/Requests/CustomPages/DeleteBranchesByBranchCustomPagesBySlugRequest.cs` |

### GetBranchesByBranchCustomPages

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetBranchesByBranchCustomPages(GetBranchesByBranchCustomPagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetBranchesByBranchCustomPagesRequest` | `src/ReadMe/Requests/CustomPages/GetBranchesByBranchCustomPagesRequest.cs` |

### GetBranchesByBranchCustomPagesBySlug

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetBranchesByBranchCustomPagesBySlug(GetBranchesByBranchCustomPagesBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`, `Slug`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetBranchesByBranchCustomPagesBySlugRequest` | `src/ReadMe/Requests/CustomPages/GetBranchesByBranchCustomPagesBySlugRequest.cs` |

### PostBranchesByBranchCustomPages

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `PostBranchesByBranchCustomPages(PostBranchesByBranchCustomPagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PostBranchesByBranchCustomPagesRequest` | `src/ReadMe/Requests/CustomPages/PostBranchesByBranchCustomPagesRequest.cs` |

### PutBranchesByBranchCustomPagesBySlug

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `PutBranchesByBranchCustomPagesBySlug(PutBranchesByBranchCustomPagesBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`, `Slug`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PutBranchesByBranchCustomPagesBySlugRequest` | `src/ReadMe/Requests/CustomPages/PutBranchesByBranchCustomPagesBySlugRequest.cs` |

