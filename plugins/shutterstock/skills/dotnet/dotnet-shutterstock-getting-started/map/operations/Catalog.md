# Catalog — operations

Accessor: `client.Catalog` · Source: `Api/Catalog.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddToCollection
- **HTTP**: `POST /v2/catalog/collections/{collection_id}/items` (Default (api))
- **Notes**: This endpoint adds assets to a catalog collection. It also automatically adds the assets to the user's account's catalog.
- **Signature**: `AddToCollection(string collectionId, CreateCatalogCollectionItems body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CatalogCollection`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateCollection
- **HTTP**: `POST /v2/catalog/collections` (Default (api))
- **Notes**: This endpoint creates a catalog collection and optionally adds assets. To add assets to the collection later, use `PATCH /v2/catalog/collections/{collection_id}/items`.
- **Signature**: `CreateCollection(CreateCatalogCollection body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CatalogCollection`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteCollection
- **HTTP**: `DELETE /v2/catalog/collections/{collection_id}` (Default (api))
- **Notes**: This endpoint deletes a catalog collection. It does not remove the assets from the user's account's catalog.
- **Signature**: `DeleteCollection(string collectionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteFromCollection
- **HTTP**: `DELETE /v2/catalog/collections/{collection_id}/items` (Default (api))
- **Notes**: This endpoint removes assets from a catalog collection. It does not remove the assets from the user's account's catalog.
- **Signature**: `DeleteFromCollection(string collectionId, RemoveCatalogCollectionItems body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CatalogCollection`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetCollections
- **HTTP**: `GET /v2/catalog/collections` (Default (api))
- **Notes**: This endpoint returns a list of catalog collections.
- **Signature**: `GetCollections(Sort5? sort, int? page = 1, int? perPage = 20, bool? shared = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `sort` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 20, `shared` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`, `shared` ← `shared`
- **Returns**: `CatalogCollectionDataList`
- **Error**: `SdkException<GetCollectionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### SearchCatalog
- **HTTP**: `GET /v2/catalog/search` (Default (api))
- **Notes**: This endpoint searches for assets in the account's catalog. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
- **Signature**: `SearchCatalog(Sort5? sort, string? query, IReadOnlyList<string>? collectionId, IReadOnlyList<AssetType>? assetType, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`sort` … `assetType`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `sort` ← `sort`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `collection_id` ← `collectionId`, `asset_type` ← `assetType`
- **Returns**: `CatalogCollectionItemDataList`
- **Error**: `SdkException<SearchCatalogError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### UpdateCollection
- **HTTP**: `PATCH /v2/catalog/collections/{collection_id}` (Default (api))
- **Notes**: This endpoint updates the metadata of a catalog collection.
- **Signature**: `UpdateCollection(string collectionId, UpdateCatalogCollection body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CatalogCollection`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
