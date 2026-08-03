# AccountActivities — operations

Accessor: `client.AccountActivities` · Source: `Api/AccountActivities.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAccountActivities
- **HTTP**: `GET /v2/account/activities` (Default (paper-api))
- **Notes**: Returns account activity entries for many types of activities.
- **Signature**: `GetAccountActivities(DateTimeOffset? date, DateTimeOffset? until, DateTimeOffset? after, Direction? direction, int? pageSize, string? pageToken, string? activityTypes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`date` … `activityTypes`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `date` ← `date`, `until` ← `until`, `after` ← `after`, `direction` ← `direction`, `page_size` ← `pageSize`, `page_token` ← `pageToken`, `activity_types` ← `activityTypes`
- **Returns**: `IReadOnlyList<V2AccountActivitiesResponse>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetAccountActivitiesByActivityType
- **HTTP**: `GET /v2/account/activities/{activity_type}` (Default (paper-api))
- **Notes**: Returns account activity entries for a specific type of activity.
- **Signature**: `GetAccountActivitiesByActivityType(string activityType, DateTimeOffset? date, DateTimeOffset? until, DateTimeOffset? after, Direction? direction, int? pageSize, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`date` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `date` ← `date`, `until` ← `until`, `after` ← `after`, `direction` ← `direction`, `page_size` ← `pageSize`, `page_token` ← `pageToken`
- **Returns**: `IReadOnlyList<V2AccountActivitiesResponse1>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
