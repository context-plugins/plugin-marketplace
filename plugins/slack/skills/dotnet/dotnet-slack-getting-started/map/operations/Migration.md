# Migration — operations

Accessor: `client.Migration` · Source: `Api/Migration.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### MigrationExchange
- **HTTP**: `GET /migration.exchange` (Default (slack))
- **Notes**: For Enterprise Grid workspaces, map local user IDs to global user IDs
- **Signature**: `MigrationExchange(string token, string users, string? teamId, bool? toOld, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `teamId` — nullable, no default → **must pass explicitly**
  - `toOld` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `users` ← `users`, `team_id` ← `teamId`, `to_old` ← `toOld`
- **Returns**: `MigrationExchangesuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
