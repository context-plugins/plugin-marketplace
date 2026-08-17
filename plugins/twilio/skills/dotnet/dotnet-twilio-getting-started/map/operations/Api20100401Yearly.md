<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Yearly — operations

Accessor: `client.Api20100401Yearly` · Source: `Api/Api20100401Yearly.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListUsageRecordYearly

- **Signature**: `ListUsageRecordYearly(string accountSid, string? category, DateTimeOffset? startDate, DateTimeOffset? endDate, bool? includeSubaccounts, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`category` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Category` ← `category`, `StartDate` ← `startDate`, `EndDate` ← `endDate`, `IncludeSubaccounts` ← `includeSubaccounts`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListUsageRecordYearlyResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListUsageRecordYearlyResponse` | `Models/ListUsageRecordYearlyResponse.cs` |

