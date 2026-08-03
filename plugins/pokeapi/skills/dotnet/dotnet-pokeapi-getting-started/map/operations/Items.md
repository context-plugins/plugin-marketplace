# Items — operations

Accessor: `client.Items` · Source: `Api/Items.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ItemAttributeList
- **HTTP**: `GET /api/v2/item-attribute/` (Default (pokeapi))
- **Notes**: Item attributes define particular aspects of items, e.g."usable in battle" or "consumable".
- **Signature**: `ItemAttributeList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedItemAttributeSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ItemAttributeRetrieve
- **HTTP**: `GET /api/v2/item-attribute/{id}/` (Default (pokeapi))
- **Notes**: Item attributes define particular aspects of items, e.g."usable in battle" or "consumable".
- **Signature**: `ItemAttributeRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ItemAttributeDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ItemCategoryList
- **HTTP**: `GET /api/v2/item-category/` (Default (pokeapi))
- **Notes**: Item categories determine where items will be placed in the players bag.
- **Signature**: `ItemCategoryList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedItemCategorySummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ItemCategoryRetrieve
- **HTTP**: `GET /api/v2/item-category/{id}/` (Default (pokeapi))
- **Notes**: Item categories determine where items will be placed in the players bag.
- **Signature**: `ItemCategoryRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ItemCategoryDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ItemFlingEffectList
- **HTTP**: `GET /api/v2/item-fling-effect/` (Default (pokeapi))
- **Notes**: The various effects of the move"Fling" when used with different items.
- **Signature**: `ItemFlingEffectList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedItemFlingEffectSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ItemFlingEffectRetrieve
- **HTTP**: `GET /api/v2/item-fling-effect/{id}/` (Default (pokeapi))
- **Notes**: The various effects of the move"Fling" when used with different items.
- **Signature**: `ItemFlingEffectRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ItemFlingEffectDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ItemList
- **HTTP**: `GET /api/v2/item/` (Default (pokeapi))
- **Notes**: An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.
- **Signature**: `ItemList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedItemSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ItemPocketList
- **HTTP**: `GET /api/v2/item-pocket/` (Default (pokeapi))
- **Notes**: Pockets within the players bag used for storing items by category.
- **Signature**: `ItemPocketList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedItemPocketSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ItemPocketRetrieve
- **HTTP**: `GET /api/v2/item-pocket/{id}/` (Default (pokeapi))
- **Notes**: Pockets within the players bag used for storing items by category.
- **Signature**: `ItemPocketRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ItemPocketDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ItemRetrieve
- **HTTP**: `GET /api/v2/item/{id}/` (Default (pokeapi))
- **Notes**: An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.
- **Signature**: `ItemRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ItemDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
