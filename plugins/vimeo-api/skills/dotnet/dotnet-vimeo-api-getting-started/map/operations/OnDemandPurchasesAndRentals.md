# OnDemandPurchasesAndRentals — operations

Accessor: `client.OnDemandPurchasesAndRentals` · Source: `Api/OnDemandPurchasesAndRentals.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CheckIfVodWasPurchasedAlt1
- **HTTP**: `GET /me/ondemand/purchases/{ondemand_id}` (Default (api))
- **Notes**: This method determines whether the authenticated user has made a purchase or rental from the specified On Demand page.
- **Signature**: `CheckIfVodWasPurchasedAlt1(double ondemandId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CheckIfVodWasPurchasedAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetVodPurchases
- **HTTP**: `GET /users/{user_id}/ondemand/purchases` (Default (api))
- **Notes**: This method returns every purchase and rental that the authenticated user has made across all On Demand pages.
- **Signature**: `GetVodPurchases(double userId, Direction? direction, Filter19? filter, double? page, double? perPage, Sort33? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetVodPurchasesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetVodPurchasesAlt1
- **HTTP**: `GET /me/ondemand/purchases` (Default (api))
- **Notes**: This method returns every purchase and rental that the authenticated user has made across all On Demand pages.
- **Signature**: `GetVodPurchasesAlt1(Direction? direction, Filter19? filter, double? page, double? perPage, Sort33? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetVodPurchasesAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
