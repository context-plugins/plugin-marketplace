<!-- Generated file — do not edit; regenerated with the SDK. -->

# Changelog — operations

Accessor: `client.Changelog` · Source: `src/ReadMe/Api/Changelog.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteBranchesByBranchChangelogsBySlug

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteBranchesByBranchChangelogsBySlug(DeleteBranchesByBranchChangelogsBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`, `Slug`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteBranchesByBranchChangelogsBySlugRequest` | `src/ReadMe/Requests/Changelog/DeleteBranchesByBranchChangelogsBySlugRequest.cs` |

### GetBranchesByBranchChangelogs

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetBranchesByBranchChangelogs(GetBranchesByBranchChangelogsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetBranchesByBranchChangelogsRequest` | `src/ReadMe/Requests/Changelog/GetBranchesByBranchChangelogsRequest.cs` |

### GetBranchesByBranchChangelogsBySlug

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetBranchesByBranchChangelogsBySlug(GetBranchesByBranchChangelogsBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`, `Slug`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetBranchesByBranchChangelogsBySlugRequest` | `src/ReadMe/Requests/Changelog/GetBranchesByBranchChangelogsBySlugRequest.cs` |

### PostBranchesByBranchChangelogs

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `PostBranchesByBranchChangelogs(PostBranchesByBranchChangelogsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PostBranchesByBranchChangelogsRequest` | `src/ReadMe/Requests/Changelog/PostBranchesByBranchChangelogsRequest.cs` |

### PutBranchesByBranchChangelogsBySlug

- **Server group**: `DefaultReadMeApiKeysApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `PutBranchesByBranchChangelogsBySlug(PutBranchesByBranchChangelogsBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Branch`, `Slug`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PutBranchesByBranchChangelogsBySlugRequest` | `src/ReadMe/Requests/Changelog/PutBranchesByBranchChangelogsBySlugRequest.cs` |

