# Payouts — operations

Accessor: `client.Payouts` · Source: `Api/Payouts.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetPayout
- **HTTP**: `GET /v2/payouts/{payout_id}` (Default (connect))
- **Notes**: Retrieves details of a specific payout identified by a payout ID. To call this endpoint, set `PAYOUTS_READ` for the OAuth scope.
- **Signature**: `GetPayout(string payoutId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetPayoutResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListPayoutEntries
- **HTTP**: `GET /v2/payouts/{payout_id}/payout-entries` (Default (connect))
- **Notes**: Retrieves a list of all payout entries for a specific payout. To call this endpoint, set `PAYOUTS_READ` for the OAuth scope.
- **Signature**: `ListPayoutEntries(string payoutId, SortOrder? sortOrder, string? cursor, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `sortOrder` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `sort_order` ← `sortOrder`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `ListPayoutEntriesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListPayouts
- **HTTP**: `GET /v2/payouts` (Default (connect))
- **Notes**: Retrieves a list of all payouts for the default location. You can filter payouts by location ID, status, time range, and order them in ascending or descending order. To call this endpoint, set `PAYOUTS_READ` for the OAuth scope.
- **Signature**: `ListPayouts(string? locationId, PayoutStatus? status, string? beginTime, string? endTime, SortOrder? sortOrder, string? cursor, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`locationId` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `location_id` ← `locationId`, `status` ← `status`, `begin_time` ← `beginTime`, `end_time` ← `endTime`, `sort_order` ← `sortOrder`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `ListPayoutsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
