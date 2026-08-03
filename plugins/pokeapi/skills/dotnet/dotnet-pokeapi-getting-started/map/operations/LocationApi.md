# LocationApi — operations

Accessor: `client.LocationApi` · Source: `Api/LocationApi.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### LocationAreaList
- **HTTP**: `GET /api/v2/location-area/` (Default (pokeapi))
- **Notes**: Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters.
- **Signature**: `LocationAreaList(int? limit, int? offset, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PaginatedLocationAreaSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### LocationAreaRetrieve
- **HTTP**: `GET /api/v2/location-area/{id}/` (Default (pokeapi))
- **Notes**: Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters.
- **Signature**: `LocationAreaRetrieve(int id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LocationAreaDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### LocationList
- **HTTP**: `GET /api/v2/location/` (Default (pokeapi))
- **Notes**: Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.
- **Signature**: `LocationList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedLocationSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### LocationRetrieve
- **HTTP**: `GET /api/v2/location/{id}/` (Default (pokeapi))
- **Notes**: Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.
- **Signature**: `LocationRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LocationDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PalParkAreaList
- **HTTP**: `GET /api/v2/pal-park-area/` (Default (pokeapi))
- **Notes**: Areas used for grouping Pokémon encounters in Pal Park. They're like habitats that are specific to Pal Park.
- **Signature**: `PalParkAreaList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedPalParkAreaSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PalParkAreaRetrieve
- **HTTP**: `GET /api/v2/pal-park-area/{id}/` (Default (pokeapi))
- **Notes**: Areas used for grouping Pokémon encounters in Pal Park. They're like habitats that are specific to Pal Park.
- **Signature**: `PalParkAreaRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PalParkAreaDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RegionList
- **HTTP**: `GET /api/v2/region/` (Default (pokeapi))
- **Notes**: A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them.
- **Signature**: `RegionList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedRegionSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RegionRetrieve
- **HTTP**: `GET /api/v2/region/{id}/` (Default (pokeapi))
- **Notes**: A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them.
- **Signature**: `RegionRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RegionDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
