# PokemonApi — operations

Accessor: `client.PokemonApi` · Source: `Api/PokemonApi.cs` · 32 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AbilityList
- **HTTP**: `GET /api/v2/ability/` (Default (pokeapi))
- **Notes**: Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out Bulbapedia for greater detail.
- **Signature**: `AbilityList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedAbilitySummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AbilityRetrieve
- **HTTP**: `GET /api/v2/ability/{id}/` (Default (pokeapi))
- **Notes**: Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out Bulbapedia for greater detail.
- **Signature**: `AbilityRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AbilityDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CharacteristicList
- **HTTP**: `GET /api/v2/characteristic/` (Default (pokeapi))
- **Notes**: Characteristics indicate which stat contains a Pokémon's highest IV. A Pokémon's Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out Bulbapedia for greater detail.
- **Signature**: `CharacteristicList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedCharacteristicSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CharacteristicRetrieve
- **HTTP**: `GET /api/v2/characteristic/{id}/` (Default (pokeapi))
- **Notes**: Characteristics indicate which stat contains a Pokémon's highest IV. A Pokémon's Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out Bulbapedia for greater detail.
- **Signature**: `CharacteristicRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CharacteristicDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EggGroupList
- **HTTP**: `GET /api/v2/egg-group/` (Default (pokeapi))
- **Notes**: Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. Check out Bulbapedia for greater detail.
- **Signature**: `EggGroupList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedEggGroupSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EggGroupRetrieve
- **HTTP**: `GET /api/v2/egg-group/{id}/` (Default (pokeapi))
- **Notes**: Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. Check out Bulbapedia for greater detail.
- **Signature**: `EggGroupRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EggGroupDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GenderList
- **HTTP**: `GET /api/v2/gender/` (Default (pokeapi))
- **Notes**: Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary lines. Check out Bulbapedia for greater detail.
- **Signature**: `GenderList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedGenderSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GenderRetrieve
- **HTTP**: `GET /api/v2/gender/{id}/` (Default (pokeapi))
- **Notes**: Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary lines. Check out Bulbapedia for greater detail.
- **Signature**: `GenderRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GenderDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GrowthRateList
- **HTTP**: `GET /api/v2/growth-rate/` (Default (pokeapi))
- **Notes**: Growth rates are the speed with which Pokémon gain levels through experience. Check out Bulbapedia for greater detail.
- **Signature**: `GrowthRateList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedGrowthRateSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GrowthRateRetrieve
- **HTTP**: `GET /api/v2/growth-rate/{id}/` (Default (pokeapi))
- **Notes**: Growth rates are the speed with which Pokémon gain levels through experience. Check out Bulbapedia for greater detail.
- **Signature**: `GrowthRateRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GrowthRateDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MoveDamageClassList
- **HTTP**: `GET /api/v2/move-damage-class/` (Default (pokeapi))
- **Notes**: Damage classes moves can have, e.g. physical, special, or non-damaging.
- **Signature**: `MoveDamageClassList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedMoveDamageClassSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MoveDamageClassRetrieve
- **HTTP**: `GET /api/v2/move-damage-class/{id}/` (Default (pokeapi))
- **Notes**: Damage classes moves can have, e.g. physical, special, or non-damaging.
- **Signature**: `MoveDamageClassRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MoveDamageClassDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### NatureList
- **HTTP**: `GET /api/v2/nature/` (Default (pokeapi))
- **Notes**: Natures influence how a Pokémon's stats grow. See Bulbapedia for greater detail.
- **Signature**: `NatureList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedNatureSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### NatureRetrieve
- **HTTP**: `GET /api/v2/nature/{id}/` (Default (pokeapi))
- **Notes**: Natures influence how a Pokémon's stats grow. See Bulbapedia for greater detail.
- **Signature**: `NatureRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `NatureDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PokeathlonStatList
- **HTTP**: `GET /api/v2/pokeathlon-stat/` (Default (pokeapi))
- **Notes**: Pokeathlon Stats are different attributes of a Pokémon's performance in Pokéathlons. In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats. See Bulbapedia for greater detail.
- **Signature**: `PokeathlonStatList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedPokeathlonStatSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PokeathlonStatRetrieve
- **HTTP**: `GET /api/v2/pokeathlon-stat/{id}/` (Default (pokeapi))
- **Notes**: Pokeathlon Stats are different attributes of a Pokémon's performance in Pokéathlons. In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats. See Bulbapedia for greater detail.
- **Signature**: `PokeathlonStatRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PokeathlonStatDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PokemonColorList
- **HTTP**: `GET /api/v2/pokemon-color/` (Default (pokeapi))
- **Notes**: Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body. No orange category exists; Pokémon that are primarily orange are listed as red or brown.
- **Signature**: `PokemonColorList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedPokemonColorSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PokemonColorRetrieve
- **HTTP**: `GET /api/v2/pokemon-color/{id}/` (Default (pokeapi))
- **Notes**: Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body. No orange category exists; Pokémon that are primarily orange are listed as red or brown.
- **Signature**: `PokemonColorRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PokemonColorDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PokemonFormList
- **HTTP**: `GET /api/v2/pokemon-form/` (Default (pokeapi))
- **Notes**: Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety.
- **Signature**: `PokemonFormList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedPokemonFormSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PokemonFormRetrieve
- **HTTP**: `GET /api/v2/pokemon-form/{id}/` (Default (pokeapi))
- **Notes**: Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety.
- **Signature**: `PokemonFormRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PokemonFormDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PokemonHabitatList
- **HTTP**: `GET /api/v2/pokemon-habitat/` (Default (pokeapi))
- **Notes**: Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.
- **Signature**: `PokemonHabitatList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedPokemonHabitatSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PokemonHabitatRetrieve
- **HTTP**: `GET /api/v2/pokemon-habitat/{id}/` (Default (pokeapi))
- **Notes**: Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.
- **Signature**: `PokemonHabitatRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PokemonHabitatDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PokemonList
- **HTTP**: `GET /api/v2/pokemon/` (Default (pokeapi))
- **Notes**: Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See Bulbapedia ) for greater detail.
- **Signature**: `PokemonList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedPokemonSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PokemonRetrieve
- **HTTP**: `GET /api/v2/pokemon/{id}/` (Default (pokeapi))
- **Notes**: Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See Bulbapedia ) for greater detail.
- **Signature**: `PokemonRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PokemonDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PokemonShapeList
- **HTTP**: `GET /api/v2/pokemon-shape/` (Default (pokeapi))
- **Notes**: Shapes used for sorting Pokémon in a Pokédex.
- **Signature**: `PokemonShapeList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedPokemonShapeSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PokemonShapeRetrieve
- **HTTP**: `GET /api/v2/pokemon-shape/{id}/` (Default (pokeapi))
- **Notes**: Shapes used for sorting Pokémon in a Pokédex.
- **Signature**: `PokemonShapeRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PokemonShapeDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PokemonSpeciesList
- **HTTP**: `GET /api/v2/pokemon-species/` (Default (pokeapi))
- **Notes**: A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon species are shared across all varieties of Pokémon within the species. A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant.
- **Signature**: `PokemonSpeciesList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedPokemonSpeciesSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PokemonSpeciesRetrieve
- **HTTP**: `GET /api/v2/pokemon-species/{id}/` (Default (pokeapi))
- **Notes**: A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon species are shared across all varieties of Pokémon within the species. A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant.
- **Signature**: `PokemonSpeciesRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PokemonSpeciesDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StatList
- **HTTP**: `GET /api/v2/stat/` (Default (pokeapi))
- **Notes**: Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles.
- **Signature**: `StatList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedStatSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StatRetrieve
- **HTTP**: `GET /api/v2/stat/{id}/` (Default (pokeapi))
- **Notes**: Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles.
- **Signature**: `StatRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `StatDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TypeList
- **HTTP**: `GET /api/v2/type/` (Default (pokeapi))
- **Notes**: Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against.
- **Signature**: `TypeList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedTypeSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TypeRetrieve
- **HTTP**: `GET /api/v2/type/{id}/` (Default (pokeapi))
- **Notes**: Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against.
- **Signature**: `TypeRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TypeDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
