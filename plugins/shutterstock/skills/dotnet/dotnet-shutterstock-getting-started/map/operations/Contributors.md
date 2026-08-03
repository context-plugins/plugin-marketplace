# Contributors — operations

Accessor: `client.Contributors` · Source: `Api/Contributors.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetContributor
- **HTTP**: `GET /v2/contributors/{contributor_id}` (Default (api))
- **Notes**: This endpoint shows information about a single contributor, including contributor type, equipment they use, and other attributes.
- **Signature**: `GetContributor(string contributorId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ContributorProfile`
- **Error**: `SdkException<GetContributorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetContributorCollectionItems
- **HTTP**: `GET /v2/contributors/{contributor_id}/collections/{id}/items` (Default (api))
- **Notes**: This endpoint lists the IDs of items in a contributor's collection and the date that each was added.
- **Signature**: `GetContributorCollectionItems(string contributorId, string id, Sort5? sort, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `sort` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`
- **Returns**: `CollectionItemDataList`
- **Error**: `SdkException<GetContributorCollectionItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetContributorCollections
- **HTTP**: `GET /v2/contributors/{contributor_id}/collections/{id}` (Default (api))
- **Notes**: This endpoint gets more detailed information about a contributor's collection, including its cover image, timestamps for its creation, and most recent update. To get the items in collections, use GET /v2/contributors/{contributor_id}/collections/{id}/items.
- **Signature**: `GetContributorCollections(string contributorId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Collection`
- **Error**: `SdkException<GetContributorCollectionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetContributorCollectionsList
- **HTTP**: `GET /v2/contributors/{contributor_id}/collections` (Default (api))
- **Notes**: This endpoint lists collections based on contributor ID.
- **Signature**: `GetContributorCollectionsList(string contributorId, Sort24? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `sort` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `sort` ← `sort`
- **Returns**: `CollectionDataList`
- **Error**: `SdkException<GetContributorCollectionsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetContributorList
- **HTTP**: `GET /v2/contributors` (Default (api))
- **Notes**: This endpoint lists information about one or more contributors, including contributor type, equipment they use and other attributes.
- **Signature**: `GetContributorList(IReadOnlyList<string> id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`
- **Returns**: `ContributorProfileDataList`
- **Error**: `SdkException<GetContributorListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
