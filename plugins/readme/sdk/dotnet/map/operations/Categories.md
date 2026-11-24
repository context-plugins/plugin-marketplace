<!-- Generated file — do not edit; regenerated with the SDK. -->

# Categories — operations

Accessor: `client.Categories` · Source: `src/ReadMe/Api/Categories.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteBranchesByBranchCategoriesBySlug

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteBranchesByBranchCategoriesBySlug(DeleteBranchesByBranchCategoriesBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`, `Slug`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteBranchesByBranchCategoriesBySlugRequest` | `src/ReadMe/Requests/Categories/DeleteBranchesByBranchCategoriesBySlugRequest.cs` |

### GetBranchesByBranchCategories

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetBranchesByBranchCategories(GetBranchesByBranchCategoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetBranchesByBranchCategoriesRequest` | `src/ReadMe/Requests/Categories/GetBranchesByBranchCategoriesRequest.cs` |

### GetBranchesByBranchCategoriesBySlug

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetBranchesByBranchCategoriesBySlug(GetBranchesByBranchCategoriesBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`, `Slug`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetBranchesByBranchCategoriesBySlugRequest` | `src/ReadMe/Requests/Categories/GetBranchesByBranchCategoriesBySlugRequest.cs` |

### PostBranchesByBranchCategories

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `PostBranchesByBranchCategories(PostBranchesByBranchCategoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PostBranchesByBranchCategoriesRequest` | `src/ReadMe/Requests/Categories/PostBranchesByBranchCategoriesRequest.cs` |

### PutBranchesByBranchCategoriesBySlug

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `PutBranchesByBranchCategoriesBySlug(PutBranchesByBranchCategoriesBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`, `Slug`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PutBranchesByBranchCategoriesBySlugRequest` | `src/ReadMe/Requests/Categories/PutBranchesByBranchCategoriesBySlugRequest.cs` |

