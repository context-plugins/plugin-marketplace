# Berries — operations

Accessor: `client.Berries` · Source: `Api/Berries.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### BerryFirmnessList
- **HTTP**: `GET /api/v2/berry-firmness/` (Default (pokeapi))
- **Notes**: Berries can be soft or hard. Check out Bulbapedia for greater detail.
- **Signature**: `BerryFirmnessList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedBerryFirmnessSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BerryFirmnessRetrieve
- **HTTP**: `GET /api/v2/berry-firmness/{id}/` (Default (pokeapi))
- **Notes**: Berries can be soft or hard. Check out Bulbapedia for greater detail.
- **Signature**: `BerryFirmnessRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BerryFirmnessDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BerryFlavorList
- **HTTP**: `GET /api/v2/berry-flavor/` (Default (pokeapi))
- **Notes**: Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their nature . Check out Bulbapedia for greater detail.
- **Signature**: `BerryFlavorList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedBerryFlavorSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BerryFlavorRetrieve
- **HTTP**: `GET /api/v2/berry-flavor/{id}/` (Default (pokeapi))
- **Notes**: Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their nature . Check out Bulbapedia for greater detail.
- **Signature**: `BerryFlavorRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BerryFlavorDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BerryList
- **HTTP**: `GET /api/v2/berry/` (Default (pokeapi))
- **Notes**: Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon. Check out Bulbapedia for greater detail.
- **Signature**: `BerryList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedBerrySummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BerryRetrieve
- **HTTP**: `GET /api/v2/berry/{id}/` (Default (pokeapi))
- **Notes**: Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon. Check out Bulbapedia for greater detail.
- **Signature**: `BerryRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BerryDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
