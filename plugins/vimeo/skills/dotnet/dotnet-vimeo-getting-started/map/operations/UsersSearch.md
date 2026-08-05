# UsersSearch — operations

Accessor: `client.UsersSearch` · Source: `Api/UsersSearch.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### SearchUsers
- **HTTP**: `GET /users` (Default (api))
- **Notes**: This method returns user search results.
- **Signature**: `SearchUsers(Direction? direction, double? page, double? perPage, string? query, Sort13? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `UserConnection`
- **Error**: `SdkException<SearchUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [404] · `TryGetLegacyError(out LegacyError)` [500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
