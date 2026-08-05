# Api20100401Yearly — operations

Accessor: `client.Api20100401Yearly` · Source: `Api/Api20100401Yearly.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListUsageRecordYearly
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/Usage/Records/Yearly.json` (Default (api))
- **Signature**: `ListUsageRecordYearly(string accountSid, string? category, DateTimeOffset? startDate, DateTimeOffset? endDate, bool? includeSubaccounts, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`category` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Category` ← `category`, `StartDate` ← `startDate`, `EndDate` ← `endDate`, `IncludeSubaccounts` ← `includeSubaccounts`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListUsageRecordYearlyResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
