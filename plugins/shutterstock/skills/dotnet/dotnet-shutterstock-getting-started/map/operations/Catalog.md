<!-- Generated file — do not edit; regenerated with the SDK. -->

# Catalog — operations

Accessor: `client.Catalog` · Source: `Api/Catalog.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddToCollection

- **Signature**: `AddToCollection(string collectionId, CreateCatalogCollectionItems body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `CatalogCollection`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateCatalogCollectionItems` | `Models/CreateCatalogCollectionItems.cs` |
| `CatalogCollection` | `Models/CatalogCollection.cs` |

### CreateCollection

- **Signature**: `CreateCollection(CreateCatalogCollection body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `CatalogCollection`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateCatalogCollection` | `Models/CreateCatalogCollection.cs` |
| `CatalogCollection` | `Models/CatalogCollection.cs` |

### DeleteCollection

- **Signature**: `DeleteCollection(string collectionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCollectionError` | `Errors/DeleteCollectionError.cs` |

### DeleteFromCollection

- **Signature**: `DeleteFromCollection(string collectionId, RemoveCatalogCollectionItems body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `CatalogCollection`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `RemoveCatalogCollectionItems` | `Models/RemoveCatalogCollectionItems.cs` |
| `CatalogCollection` | `Models/CatalogCollection.cs` |

### GetCollections

- **Signature**: `GetCollections(Sort5? sort, int? page = 1, int? perPage = 20, bool? shared = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `sort` — nullable, no default → **must pass explicitly**
  - defaults: `page` = `1`, `perPage` = `20`, `shared` = `false`
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`, `shared` ← `shared`
- **Returns**: `CatalogCollectionDataList`
- **Error**: `SdkException<GetCollectionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Sort5` | `Models/Enums/Sort5.cs` |
| `CatalogCollectionDataList` | `Models/CatalogCollectionDataList.cs` |
| `GetCollectionsError` | `Errors/GetCollectionsError.cs` |

### SearchCatalog

- **Signature**: `SearchCatalog(Sort5? sort, string? query, IReadOnlyList<string>? collectionId, IReadOnlyList<AssetType>? assetType, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`sort` … `assetType`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = `1`, `perPage` = `20`
- **Query params (wire ← C#)**: `sort` ← `sort`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `collection_id` ← `collectionId`, `asset_type` ← `assetType`
- **Returns**: `CatalogCollectionItemDataList`
- **Error**: `SdkException<SearchCatalogError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Sort5` | `Models/Enums/Sort5.cs` |
| `AssetType` | `Models/Enums/AssetType.cs` |
| `CatalogCollectionItemDataList` | `Models/CatalogCollectionItemDataList.cs` |
| `SearchCatalogError` | `Errors/SearchCatalogError.cs` |

### UpdateCollection

- **Signature**: `UpdateCollection(string collectionId, UpdateCatalogCollection body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `CatalogCollection`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdateCatalogCollection` | `Models/UpdateCatalogCollection.cs` |
| `CatalogCollection` | `Models/CatalogCollection.cs` |

