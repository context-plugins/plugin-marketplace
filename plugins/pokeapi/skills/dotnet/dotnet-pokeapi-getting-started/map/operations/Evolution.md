# Evolution — operations

Accessor: `client.Evolution` · Source: `Api/Evolution.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### EvolutionChainList
- **HTTP**: `GET /api/v2/evolution-chain/` (Default (pokeapi))
- **Notes**: Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.
- **Signature**: `EvolutionChainList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedEvolutionChainSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EvolutionChainRetrieve
- **HTTP**: `GET /api/v2/evolution-chain/{id}/` (Default (pokeapi))
- **Notes**: Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.
- **Signature**: `EvolutionChainRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EvolutionChainDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EvolutionTriggerList
- **HTTP**: `GET /api/v2/evolution-trigger/` (Default (pokeapi))
- **Notes**: Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out Bulbapedia for greater detail.
- **Signature**: `EvolutionTriggerList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedEvolutionTriggerSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EvolutionTriggerRetrieve
- **HTTP**: `GET /api/v2/evolution-trigger/{id}/` (Default (pokeapi))
- **Notes**: Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out Bulbapedia for greater detail.
- **Signature**: `EvolutionTriggerRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EvolutionTriggerDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
