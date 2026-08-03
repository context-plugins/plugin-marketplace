# Moves — operations

Accessor: `client.Moves` · Source: `Api/Moves.cs` · 12 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### MoveAilmentList
- **HTTP**: `GET /api/v2/move-ailment/` (Default (pokeapi))
- **Notes**: Move Ailments are status conditions caused by moves used during battle. See Bulbapedia for greater detail.
- **Signature**: `MoveAilmentList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedMoveMetaAilmentSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MoveAilmentRetrieve
- **HTTP**: `GET /api/v2/move-ailment/{id}/` (Default (pokeapi))
- **Notes**: Move Ailments are status conditions caused by moves used during battle. See Bulbapedia for greater detail.
- **Signature**: `MoveAilmentRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MoveMetaAilmentDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MoveBattleStyleList
- **HTTP**: `GET /api/v2/move-battle-style/` (Default (pokeapi))
- **Notes**: Styles of moves when used in the Battle Palace. See Bulbapedia ) for greater detail.
- **Signature**: `MoveBattleStyleList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedMoveBattleStyleSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MoveBattleStyleRetrieve
- **HTTP**: `GET /api/v2/move-battle-style/{id}/` (Default (pokeapi))
- **Notes**: Styles of moves when used in the Battle Palace. See Bulbapedia ) for greater detail.
- **Signature**: `MoveBattleStyleRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MoveBattleStyleDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MoveCategoryList
- **HTTP**: `GET /api/v2/move-category/` (Default (pokeapi))
- **Notes**: Very general categories that loosely group move effects.
- **Signature**: `MoveCategoryList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedMoveMetaCategorySummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MoveCategoryRetrieve
- **HTTP**: `GET /api/v2/move-category/{id}/` (Default (pokeapi))
- **Notes**: Very general categories that loosely group move effects.
- **Signature**: `MoveCategoryRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MoveMetaCategoryDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MoveLearnMethodList
- **HTTP**: `GET /api/v2/move-learn-method/` (Default (pokeapi))
- **Notes**: Methods by which Pokémon can learn moves.
- **Signature**: `MoveLearnMethodList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedMoveLearnMethodSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MoveLearnMethodRetrieve
- **HTTP**: `GET /api/v2/move-learn-method/{id}/` (Default (pokeapi))
- **Notes**: Methods by which Pokémon can learn moves.
- **Signature**: `MoveLearnMethodRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MoveLearnMethodDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MoveList
- **HTTP**: `GET /api/v2/move/` (Default (pokeapi))
- **Notes**: Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.
- **Signature**: `MoveList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedMoveSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MoveRetrieve
- **HTTP**: `GET /api/v2/move/{id}/` (Default (pokeapi))
- **Notes**: Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.
- **Signature**: `MoveRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MoveDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MoveTargetList
- **HTTP**: `GET /api/v2/move-target/` (Default (pokeapi))
- **Notes**: Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.
- **Signature**: `MoveTargetList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedMoveTargetSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MoveTargetRetrieve
- **HTTP**: `GET /api/v2/move-target/{id}/` (Default (pokeapi))
- **Notes**: Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.
- **Signature**: `MoveTargetRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MoveTargetDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
