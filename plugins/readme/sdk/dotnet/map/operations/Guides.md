<!-- Generated file — do not edit; regenerated with the SDK. -->

# Guides — operations

Accessor: `client.Guides` · Source: `src/ReadMe/Api/Guides.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteBranchesByBranchGuidesBySlug

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteBranchesByBranchGuidesBySlug(DeleteBranchesByBranchGuidesBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`, `Slug`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteBranchesByBranchGuidesBySlugRequest` | `src/ReadMe/Requests/Guides/DeleteBranchesByBranchGuidesBySlugRequest.cs` |

### GetBranchesByBranchGuides

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetBranchesByBranchGuides(GetBranchesByBranchGuidesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetBranchesByBranchGuidesRequest` | `src/ReadMe/Requests/Guides/GetBranchesByBranchGuidesRequest.cs` |

### GetBranchesByBranchGuidesBySlug

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetBranchesByBranchGuidesBySlug(GetBranchesByBranchGuidesBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`, `Slug`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetBranchesByBranchGuidesBySlugRequest` | `src/ReadMe/Requests/Guides/GetBranchesByBranchGuidesBySlugRequest.cs` |

### PostBranchesByBranchGuides

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `PostBranchesByBranchGuides(PostBranchesByBranchGuidesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PostBranchesByBranchGuidesRequest` | `src/ReadMe/Requests/Guides/PostBranchesByBranchGuidesRequest.cs` |

### PutBranchesByBranchGuidesBySlug

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `PutBranchesByBranchGuidesBySlug(PutBranchesByBranchGuidesBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`, `Slug`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PutBranchesByBranchGuidesBySlugRequest` | `src/ReadMe/Requests/Guides/PutBranchesByBranchGuidesBySlugRequest.cs` |

