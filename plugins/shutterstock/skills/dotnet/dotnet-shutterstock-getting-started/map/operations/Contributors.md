<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contributors — operations

Accessor: `client.Contributors` · Source: `Api/Contributors.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetContributor

- **Signature**: `GetContributor(string contributorId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ContributorProfile`
- **Error**: `SdkException<GetContributorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ContributorProfile` | `Models/ContributorProfile.cs` |
| `GetContributorError` | `Errors/GetContributorError.cs` |

### GetContributorCollectionItems

- **Signature**: `GetContributorCollectionItems(string contributorId, string id, Sort5? sort, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `sort` — nullable, no default → **must pass explicitly**
  - defaults: `page` = `1`, `perPage` = `20`
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`
- **Returns**: `CollectionItemDataList`
- **Error**: `SdkException<GetContributorCollectionItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Sort5` | `Models/Enums/Sort5.cs` |
| `CollectionItemDataList` | `Models/CollectionItemDataList.cs` |
| `GetContributorCollectionItemsError` | `Errors/GetContributorCollectionItemsError.cs` |

### GetContributorCollections

- **Signature**: `GetContributorCollections(string contributorId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `Collection`
- **Error**: `SdkException<GetContributorCollectionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Collection` | `Models/Collection.cs` |
| `GetContributorCollectionsError` | `Errors/GetContributorCollectionsError.cs` |

### GetContributorCollectionsList

- **Signature**: `GetContributorCollectionsList(string contributorId, Sort24? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `sort` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `sort` ← `sort`
- **Returns**: `CollectionDataList`
- **Error**: `SdkException<GetContributorCollectionsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Sort24` | `Models/Enums/Sort24.cs` |
| `CollectionDataList` | `Models/CollectionDataList.cs` |
| `GetContributorCollectionsListError` | `Errors/GetContributorCollectionsListError.cs` |

### GetContributorList

- **Signature**: `GetContributorList(IReadOnlyList<string> id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Query params (wire ← C#)**: `id` ← `id`
- **Returns**: `ContributorProfileDataList`
- **Error**: `SdkException<GetContributorListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ContributorProfileDataList` | `Models/ContributorProfileDataList.cs` |
| `GetContributorListError` | `Errors/GetContributorListError.cs` |

