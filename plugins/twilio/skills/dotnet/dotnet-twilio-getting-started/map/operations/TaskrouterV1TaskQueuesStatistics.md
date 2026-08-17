<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1TaskQueuesStatistics — operations

Accessor: `client.TaskrouterV1TaskQueuesStatistics` · Source: `Api/TaskrouterV1TaskQueuesStatistics.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListTaskQueuesStatistics

- **Server group**: `Default8`
- **Signature**: `ListTaskQueuesStatistics(string workspaceSid, DateTimeOffset? endDate, string? friendlyName, int? minutes, DateTimeOffset? startDate, string? taskChannel, string? splitByWaitTime, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`endDate` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `EndDate` ← `endDate`, `FriendlyName` ← `friendlyName`, `Minutes` ← `minutes`, `StartDate` ← `startDate`, `TaskChannel` ← `taskChannel`, `SplitByWaitTime` ← `splitByWaitTime`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListTaskQueuesStatisticsResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListTaskQueuesStatisticsResponse` | `Models/ListTaskQueuesStatisticsResponse.cs` |

