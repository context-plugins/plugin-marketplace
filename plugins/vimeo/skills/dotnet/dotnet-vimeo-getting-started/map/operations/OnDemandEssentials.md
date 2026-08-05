# OnDemandEssentials — operations

Accessor: `client.OnDemandEssentials` · Source: `Api/OnDemandEssentials.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateVod
- **HTTP**: `POST /users/{user_id}/ondemand/pages` (Default (api))
- **Notes**: This method creates a new On Demand page for the specified user. To publish the page, use the edit method.
- **Signature**: `CreateVod(double userId, UsersOndemandPagesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OnDemandPage`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateVodAlt1
- **HTTP**: `POST /me/ondemand/pages` (Default (api))
- **Notes**: This method creates a new On Demand page for the specified user. To publish the page, use the edit method.
- **Signature**: `CreateVodAlt1(MeOndemandPagesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OnDemandPage`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteVodDraft
- **HTTP**: `DELETE /ondemand/pages/{ondemand_id}` (Default (api))
- **Notes**: This method deletes the specified On Demand page.
- **Signature**: `DeleteVodDraft(double ondemandId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteVodDraftError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EditVod
- **HTTP**: `PATCH /ondemand/pages/{ondemand_id}` (Default (api))
- **Notes**: This method edits the specified On Demand page. Use this method to enable preorders on the page or to publish the page.
- **Signature**: `EditVod(double ondemandId, OndemandPagesRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `OnDemandPage`
- **Error**: `SdkException<EditVodError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetUserVods
- **HTTP**: `GET /users/{user_id}/ondemand/pages` (Default (api))
- **Notes**: This method returns every On Demand page belonging to the authenticated user.
- **Signature**: `GetUserVods(double userId, Direction? direction, Filter18? filter, double? page, double? perPage, Sort32? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`
- **Returns**: `OnDemandPageConnection`
- **Error**: `SdkException<GetUserVodsError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetUserVodsAlt1
- **HTTP**: `GET /me/ondemand/pages` (Default (api))
- **Notes**: This method returns every On Demand page belonging to the authenticated user.
- **Signature**: `GetUserVodsAlt1(Direction? direction, Filter18? filter, double? page, double? perPage, Sort32? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`
- **Returns**: `OnDemandPageConnection`
- **Error**: `SdkException<GetUserVodsAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetVod
- **HTTP**: `GET /ondemand/pages/{ondemand_id}` (Default (api))
- **Notes**: This method returns the specified On Demand page.
- **Signature**: `GetVod(double ondemandId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OnDemandPage`
- **Error**: `SdkException<GetVodError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
