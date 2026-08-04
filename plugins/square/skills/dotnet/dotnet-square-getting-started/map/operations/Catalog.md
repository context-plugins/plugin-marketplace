# Catalog — operations

Accessor: `client.Catalog` · Source: `Api/Catalog.cs` · 14 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### BatchDeleteCatalogObjects
- **HTTP**: `POST /v2/catalog/batch-delete` (Default (connect))
- **Notes**: Deletes a set of CatalogItem s based on the provided list of target IDs and returns a set of successfully deleted IDs in the response. Deletion is a cascading event such that all children of the targeted object are also deleted. For example, deleting a CatalogItem will also delete all of its CatalogItemVariation children. `BatchDeleteCatalogObjects` succeeds even if only a portion of the targeted IDs can be deleted. The response will only include IDs that were actually deleted. To ensure consistency, only one delete request is processed at a time per seller account. While one (batch or non-batch) delete request is being processed, other (batched and non-batched) delete requests are rejected with the `429` error code.
- **Signature**: `BatchDeleteCatalogObjects(BatchDeleteCatalogObjectsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchDeleteCatalogObjectsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BatchRetrieveCatalogObjects
- **HTTP**: `POST /v2/catalog/batch-retrieve` (Default (connect))
- **Notes**: Returns a set of objects based on the provided ID. Each CatalogItem returned in the set includes all of its child information including: all of its CatalogItemVariation objects, references to its CatalogModifierList objects, and the ids of any CatalogTax objects that apply to it.
- **Signature**: `BatchRetrieveCatalogObjects(BatchRetrieveCatalogObjectsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchRetrieveCatalogObjectsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BatchUpsertCatalogObjects
- **HTTP**: `POST /v2/catalog/batch-upsert` (Default (connect))
- **Notes**: Creates or updates up to 10,000 target objects based on the provided list of objects. The target objects are grouped into batches and each batch is inserted/updated in an all-or-nothing manner. If an object within a batch is malformed in some way, or violates a database constraint, the entire batch containing that item will be disregarded. However, other batches in the same request may still succeed. Each batch may contain up to 1,000 objects, and batches will be processed in order as long as the total object count for the request (items, variations, modifier lists, discounts, and taxes) is no more than 10,000. This endpoint uses full-replacement semantics. The client must send the complete object, and any field absent from the request is interpreted as an intentional clear. This logic applies to nested objects as well. For example, omitting inlined children like variations will delete them. To ensure consistency, only one update request is processed at a time per seller account. While one (batch or non-batch) update request is being processed, other (batched and non-batched) update requests are rejected with the `429` error code. Prefer batching related changes into a single call rather than issuing many small writes, since each write acquires the lock separately and parallel writes to the same seller will contend with each other, producing `429` errors.
- **Signature**: `BatchUpsertCatalogObjects(BatchUpsertCatalogObjectsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchUpsertCatalogObjectsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CatalogInfo
- **HTTP**: `GET /v2/catalog/info` (Default (connect))
- **Notes**: Retrieves information about the Square Catalog API, such as batch size limits that can be used by the `BatchUpsertCatalogObjects` endpoint.
- **Signature**: `CatalogInfo(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CatalogInfoResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateCatalogImage
- **HTTP**: `POST /v2/catalog/images` (Default (connect))
- **Notes**: Uploads an image file to be represented by a CatalogImage object that can be linked to an existing CatalogObject instance. The resulting `CatalogImage` is unattached to any `CatalogObject` if the `object_id` is not specified. This `CreateCatalogImage` endpoint accepts HTTP multipart/form-data requests with a JSON part and an image file part in JPEG, PJPEG, PNG, or GIF format. The maximum file size is 15MB.
- **Signature**: `CreateCatalogImage(CreateCatalogImageRequest? request, BinaryContent? imageFile, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `request` — nullable, no default → **must pass explicitly**
  - `imageFile` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CreateCatalogImageResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteCatalogObject
- **HTTP**: `DELETE /v2/catalog/object/{object_id}` (Default (connect))
- **Notes**: Deletes a single CatalogObject based on the provided ID and returns the set of successfully deleted IDs in the response. Deletion is a cascading event such that all children of the targeted object are also deleted. For example, deleting a CatalogItem will also delete all of its CatalogItemVariation children. To ensure consistency, only one delete request is processed at a time per seller account. While one (batch or non-batch) delete request is being processed, other (batched and non-batched) delete requests are rejected with the `429` error code.
- **Signature**: `DeleteCatalogObject(string objectId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteCatalogObjectResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListCatalog
- **HTTP**: `GET /v2/catalog/list` (Default (connect))
- **Notes**: Returns a list of all CatalogObject s of the specified types in the catalog. The `types` parameter is specified as a comma-separated list of the CatalogObjectType values, for example, "`ITEM`, `ITEM_VARIATION`, `MODIFIER`, `MODIFIER_LIST`, `CATEGORY`, `DISCOUNT`, `TAX`, `IMAGE`". Always specify `types` explicitly. When upgrading to a newer API version, omitting `types` may cause new object types to appear in results that were not returned under the previous version. __Important:__ ListCatalog does not return deleted catalog items. To retrieve deleted catalog items, use SearchCatalogObjects and set the `include_deleted_objects` attribute value to `true`.
- **Signature**: `ListCatalog(string? cursor, string? types, long? catalogVersion, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cursor` — nullable, no default → **must pass explicitly**
  - `types` — nullable, no default → **must pass explicitly**
  - `catalogVersion` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `cursor` ← `cursor`, `types` ← `types`, `catalog_version` ← `catalogVersion`
- **Returns**: `ListCatalogResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveCatalogObject
- **HTTP**: `GET /v2/catalog/object/{object_id}` (Default (connect))
- **Notes**: Returns a single CatalogItem as a CatalogObject based on the provided ID. The returned object includes all of the relevant CatalogItem information including: CatalogItemVariation children, references to its CatalogModifierList objects, and the ids of any CatalogTax objects that apply to it.
- **Signature**: `RetrieveCatalogObject(string objectId, long? catalogVersion, bool? includeRelatedObjects = false, bool? includeCategoryPathToRoot = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `catalogVersion` — nullable, no default → **must pass explicitly**
  - defaults: `includeRelatedObjects` = false, `includeCategoryPathToRoot` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `include_related_objects` ← `includeRelatedObjects`, `catalog_version` ← `catalogVersion`, `include_category_path_to_root` ← `includeCategoryPathToRoot`
- **Returns**: `RetrieveCatalogObjectResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchCatalogItems
- **HTTP**: `POST /v2/catalog/search-catalog-items` (Default (connect))
- **Notes**: Searches for catalog items or item variations by matching supported search attribute values, including custom attribute values, against one or more of the specified query filters. This (`SearchCatalogItems`) endpoint differs from the SearchCatalogObjects endpoint in the following aspects: `SearchCatalogItems` can only search for items or item variations, whereas `SearchCatalogObjects` can search for any type of catalog objects. `SearchCatalogItems` supports the custom attribute query filters to return items or item variations that contain custom attribute values, where `SearchCatalogObjects` does not. `SearchCatalogItems` does not support the `include_deleted_objects` filter to search for deleted items or item variations, whereas `SearchCatalogObjects` does. The both endpoints use different call conventions, including the query filter formats.
- **Signature**: `SearchCatalogItems(SearchCatalogItemsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SearchCatalogItemsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchCatalogObjects
- **HTTP**: `POST /v2/catalog/search` (Default (connect))
- **Notes**: Searches for CatalogObject of any type by matching supported search attribute values, excluding custom attribute values on items or item variations, against one or more of the specified query filters. This (`SearchCatalogObjects`) endpoint differs from the SearchCatalogItems endpoint in the following aspects: `SearchCatalogItems` can only search for items or item variations, whereas `SearchCatalogObjects` can search for any type of catalog objects. `SearchCatalogItems` supports the custom attribute query filters to return items or item variations that contain custom attribute values, where `SearchCatalogObjects` does not. `SearchCatalogItems` does not support the `include_deleted_objects` filter to search for deleted items or item variations, whereas `SearchCatalogObjects` does. The both endpoints have different call conventions, including the query filter formats. The `object_types` parameter is specified as a list of CatalogObjectType values. Always specify `object_types` explicitly. When upgrading to a newer API version, omitting `object_types` may cause new object types to appear in results that were not returned under the previous version.
- **Signature**: `SearchCatalogObjects(SearchCatalogObjectsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SearchCatalogObjectsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateCatalogImage
- **HTTP**: `PUT /v2/catalog/images/{image_id}` (Default (connect))
- **Notes**: Uploads a new image file to replace the existing one in the specified CatalogImage object. This `UpdateCatalogImage` endpoint accepts HTTP multipart/form-data requests with a JSON part and an image file part in JPEG, PJPEG, PNG, or GIF format. The maximum file size is 15MB.
- **Signature**: `UpdateCatalogImage(string imageId, UpdateCatalogImageRequest? request, BinaryContent? imageFile, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `request` — nullable, no default → **must pass explicitly**
  - `imageFile` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `UpdateCatalogImageResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateItemModifierLists
- **HTTP**: `POST /v2/catalog/update-item-modifier-lists` (Default (connect))
- **Notes**: Updates the CatalogModifierList objects that apply to the targeted CatalogItem without having to perform an upsert on the entire item.
- **Signature**: `UpdateItemModifierLists(UpdateItemModifierListsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateItemModifierListsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateItemTaxes
- **HTTP**: `POST /v2/catalog/update-item-taxes` (Default (connect))
- **Notes**: Updates the CatalogTax objects that apply to the targeted CatalogItem without having to perform an upsert on the entire item.
- **Signature**: `UpdateItemTaxes(UpdateItemTaxesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateItemTaxesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpsertCatalogObject
- **HTTP**: `POST /v2/catalog/object` (Default (connect))
- **Notes**: Creates a new or updates the specified CatalogObject . This endpoint uses full-replacement semantics. The client must send the complete object, and any field absent from the request is interpreted as an intentional clear. This logic applies to nested objects as well. For example, omitting inlined children like variations will delete them. To ensure consistency, only one update request is processed at a time per seller account. While one (batch or non-batch) update request is being processed, other (batched and non-batched) update requests are rejected with the `429` error code.
- **Signature**: `UpsertCatalogObject(UpsertCatalogObjectRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpsertCatalogObjectResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
