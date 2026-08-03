# Machines — operations

Accessor: `client.Machines` · Source: `Api/Machines.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### MachineList
- **HTTP**: `GET /api/v2/machine/` (Default (pokeapi))
- **Notes**: Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine.
- **Signature**: `MachineList(int? limit, int? offset, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `PaginatedMachineSummaryList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MachineRetrieve
- **HTTP**: `GET /api/v2/machine/{id}/` (Default (pokeapi))
- **Notes**: Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine.
- **Signature**: `MachineRetrieve(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MachineDetail`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
