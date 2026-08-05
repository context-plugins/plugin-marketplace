# SearchFederated — operations

Accessor: `client.SearchFederated` · Source: `Api/SearchFederated.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FederatedSearchUserItems
- **HTTP**: `GET /search/{user_id}/items` (Default (api))
- **Notes**: This method returns the federated search results of the authenticated user's videos and folders according to a search query. If no query is provided, the method returns items sorted by the most recent user action.
- **Signature**: `FederatedSearchUserItems(double userId, Direction? direction, Filter30? filter, string? filterPrivacy, string? modifiedEndDate, string? modifiedStartDate, double? page, double? perPage, string? query, string? queryFields, Sort46? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `filter_privacy` ← `filterPrivacy`, `modified_end_date` ← `modifiedEndDate`, `modified_start_date` ← `modifiedStartDate`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `query_fields` ← `queryFields`, `sort` ← `sort`
- **Returns**: `FederatedSearchItemsConnection`
- **Error**: `SdkException<FederatedSearchUserItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### FederatedSearchUserItemsAlt1
- **HTTP**: `GET /workspaces/search/{workspace_uuid}/items` (Default (api))
- **Notes**: This method returns the federated search results of the authenticated user's videos and folders according to a search query. If no query is provided, the method returns items sorted by the most recent user action.
- **Signature**: `FederatedSearchUserItemsAlt1(string workspaceUuid, Direction? direction, Filter30? filter, string? filterPrivacy, string? modifiedEndDate, string? modifiedStartDate, double? page, double? perPage, string? query, string? queryFields, Sort46? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `filter_privacy` ← `filterPrivacy`, `modified_end_date` ← `modifiedEndDate`, `modified_start_date` ← `modifiedStartDate`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `query_fields` ← `queryFields`, `sort` ← `sort`
- **Returns**: `FederatedSearchItemsConnection`
- **Error**: `SdkException<FederatedSearchUserItemsAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
