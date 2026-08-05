# ActiveassuranceTestSchedules — operations

Accessor: `client.ActiveassuranceTestSchedules` · Source: `Api/ActiveassuranceTestSchedules.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TestServiceCreateTestSchedule
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/tests/{test_id}/schedules` (Default)
- **Signature**: `TestServiceCreateTestSchedule(string orgId, string testId, bool? validateOnly, TestSchedule testSchedule, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `validateOnly` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `validate_only` ← `validateOnly`
- **Returns**: `TestSchedule`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestServiceDeleteTestSchedule
- **HTTP**: `DELETE /active-assurance/api/v2/orgs/{org_id}/tests/{test_id}/schedules/{schedule_id}` (Default)
- **Signature**: `TestServiceDeleteTestSchedule(string orgId, string testId, string scheduleId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestServiceGetTestSchedule
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/tests/{test_id}/schedules/{schedule_id}` (Default)
- **Signature**: `TestServiceGetTestSchedule(string orgId, string testId, string scheduleId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TestSchedule`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestServiceListTestSchedules
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/tests/{test_id}/schedules` (Default)
- **Signature**: `TestServiceListTestSchedules(string orgId, string testId, int? page, int? limit, string? filter, string? orderBy, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`page` … `orderBy`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`, `filter` ← `filter`, `order_by` ← `orderBy`
- **Returns**: `ListTestSchedulesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### TestServiceParseRecurrenceRule
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/tests/{test_id}/schedules:parseRecurrenceRule` (Default)
- **Signature**: `TestServiceParseRecurrenceRule(string orgId, string testId, ParseRecurrenceRuleRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ParseRecurrenceRuleResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestServicePreviewTestScheduleOccurrences
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/tests/{test_id}/schedules/{schedule_id}:previewOccurrences` (Default)
- **Signature**: `TestServicePreviewTestScheduleOccurrences(string orgId, string testId, string scheduleId, int? count, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `count` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `count` ← `count`
- **Returns**: `PreviewTestScheduleOccurrencesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestServiceUpdateTestSchedule
- **HTTP**: `PATCH /active-assurance/api/v2/orgs/{org_id}/tests/{test_id}/schedules/{schedule_id}` (Default)
- **Signature**: `TestServiceUpdateTestSchedule(string orgId, string testId, string scheduleId, string? updateMask, bool? validateOnly, TestSchedule testSchedule, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `updateMask` — nullable, no default → **must pass explicitly**
  - `validateOnly` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `update_mask` ← `updateMask`, `validate_only` ← `validateOnly`
- **Returns**: `TestSchedule`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
