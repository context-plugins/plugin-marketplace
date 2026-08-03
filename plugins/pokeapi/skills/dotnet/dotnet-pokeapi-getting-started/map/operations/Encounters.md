# Encounters — operations

Accessor: `client.Encounters` · Source: `Api/Encounters.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### EncounterConditionList
- **HTTP**: `GET /api/v2/encounter-condition/` (Default (pokeapi))
- **Notes**: Conditions which affect what pokemon might appear in the wild, e.g., day or night.
- **Signature**: `EncounterConditionList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedEncounterConditionSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EncounterConditionRetrieve
- **HTTP**: `GET /api/v2/encounter-condition/{id}/` (Default (pokeapi))
- **Notes**: Conditions which affect what pokemon might appear in the wild, e.g., day or night.
- **Signature**: `EncounterConditionRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EncounterConditionDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EncounterConditionValueList
- **HTTP**: `GET /api/v2/encounter-condition-value/` (Default (pokeapi))
- **Notes**: Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.
- **Signature**: `EncounterConditionValueList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedEncounterConditionValueSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EncounterConditionValueRetrieve
- **HTTP**: `GET /api/v2/encounter-condition-value/{id}/` (Default (pokeapi))
- **Notes**: Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.
- **Signature**: `EncounterConditionValueRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EncounterConditionValueDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EncounterMethodList
- **HTTP**: `GET /api/v2/encounter-method/` (Default (pokeapi))
- **Notes**: Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out Bulbapedia for greater detail.
- **Signature**: `EncounterMethodList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedEncounterMethodSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EncounterMethodRetrieve
- **HTTP**: `GET /api/v2/encounter-method/{id}/` (Default (pokeapi))
- **Notes**: Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out Bulbapedia for greater detail.
- **Signature**: `EncounterMethodRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EncounterMethodDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PokemonEncountersRetrieve
- **HTTP**: `GET /api/v2/pokemon/{pokemon_id}/encounters` (Default (pokeapi))
- **Notes**: Handles Pokemon Encounters as a sub-resource.
- **Signature**: `PokemonEncountersRetrieve(string pokemonId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ApiV2PokemonEncountersResponse>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
