# Insights — operations

Accessor: `client.Insights` · Source: `Api/Insights.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListMrrMovements
- **HTTP**: `GET /mrr_movements.json` (Production)
- **Notes**: Lists your site's MRR movements. Understanding MRR movements This endpoint will aid in accessing your site's MRR Report data. Whenever a subscription event occurs that causes your site's MRR to change (such as a signup or upgrade), we record an MRR movement. These records are accessible via the MRR Movements endpoint. Each MRR Movement belongs to a subscription and contains a timestamp, category, and an amount. `line_items` represent the subscription's product configuration at the time of the movement. Plan &amp; Usage Breakouts In the MRR Report UI, we support a setting to include or exclude usage revenue. In the MRR APIs, responses include `plan` and `usage` breakouts. Plan includes revenue from: * Products * Quantity-Based Components * On/Off Components Usage includes revenue from: * Metered Components * Prepaid Usage Components
- **Signature**: `ListMrrMovements(int? subscriptionId, SortingDirection? direction, int? page = 1, int? perPage = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `subscriptionId` — nullable, no default → **must pass explicitly**
  - `direction` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 10, `requestOptions` = null
- **Query params (wire ← C#)**: `subscription_id` ← `subscriptionId`, `page` ← `page`, `per_page` ← `perPage`, `direction` ← `direction`
- **Returns**: `ListMrrResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ListMrrPerSubscription
- **HTTP**: `GET /subscriptions_mrr.json` (Production)
- **Notes**: Lists your site's current MRR, including plan and usage breakouts split per subscription.
- **Signature**: `ListMrrPerSubscription(ListMrrFilter? filter, string? atTime, Direction? direction, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - `atTime` — nullable, no default → **must pass explicitly**
  - `direction` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`, `at_time` ← `atTime`, `page` ← `page`, `per_page` ← `perPage`, `direction` ← `direction`
- **Returns**: `SubscriptionMrrResponse`
- **Error**: `SdkException<ListMrrPerSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetSubscriptionsMrrErrorResponse1(out SubscriptionsMrrErrorResponse1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ReadMrr
- **HTTP**: `GET /mrr.json` (Production)
- **Notes**: Returns your site's current MRR, including plan and usage breakouts.
- **Signature**: `ReadMrr(DateTimeOffset? atTime, int? subscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `atTime` — nullable, no default → **must pass explicitly**
  - `subscriptionId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `at_time` ← `atTime`, `subscription_id` ← `subscriptionId`
- **Returns**: `MrrResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ReadSiteStats
- **HTTP**: `GET /stats.json` (Production)
- **Notes**: Returns basic site-level stats. This API call only answers with JSON responses. An XML version is not provided. Stats Documentation There currently is not a complimentary matching set of documentation that compliments this endpoint. However, each Site's dashboard will reflect the summary of information provided in the Stats response. https://subdomain.chargify.com/dashboard
- **Signature**: `ReadSiteStats(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SiteSummary`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
