<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401AllTime — operations

Accessor: `client.Api20100401AllTime` · Source: `Api/Api20100401AllTime.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListUsageRecordAllTime

- **Signature**: `ListUsageRecordAllTime(string accountSid, string? category, DateTimeOffset? startDate, DateTimeOffset? endDate, bool? includeSubaccounts, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`category` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Category` ← `category`, `StartDate` ← `startDate`, `EndDate` ← `endDate`, `IncludeSubaccounts` ← `includeSubaccounts`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListUsageRecordAllTimeResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListUsageRecordAllTimeResponse` | `Models/ListUsageRecordAllTimeResponse.cs` |

