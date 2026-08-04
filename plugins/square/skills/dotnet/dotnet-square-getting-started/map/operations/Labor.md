# Labor — operations

Accessor: `client.Labor` · Source: `Api/Labor.cs` · 27 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### BulkPublishScheduledShifts
- **HTTP**: `POST /v2/labor/scheduled-shifts/bulk-publish` (Default (connect))
- **Notes**: Publishes 1 - 100 scheduled shifts. This endpoint takes a map of individual publish requests and returns a map of responses. When a scheduled shift is published, Square keeps the `draft_shift_details` field as is and copies it to the `published_shift_details` field. The minimum `start_at` and maximum `end_at` timestamps of all shifts in a `BulkPublishScheduledShifts` request must fall within a two-week period.
- **Signature**: `BulkPublishScheduledShifts(BulkPublishScheduledShiftsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BulkPublishScheduledShiftsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateBreakType
- **HTTP**: `POST /v2/labor/break-types` (Default (connect))
- **Notes**: Creates a new `BreakType`. A `BreakType` is a template for creating `Break` objects. You must provide the following values in your request to this endpoint: `location_id` `break_name` `expected_duration` `is_paid` You can only have three `BreakType` instances per location. If you attempt to add a fourth `BreakType` for a location, an `INVALID_REQUEST_ERROR` "Exceeded limit of 3 breaks per location." is returned.
- **Signature**: `CreateBreakType(CreateBreakTypeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateBreakTypeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateScheduledShift
- **HTTP**: `POST /v2/labor/scheduled-shifts` (Default (connect))
- **Notes**: Creates a scheduled shift by providing draft shift details such as job ID, team member assignment, and start and end times. The following `draft_shift_details` fields are required: - `location_id` - `job_id` - `start_at` - `end_at`
- **Signature**: `CreateScheduledShift(CreateScheduledShiftRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateScheduledShiftResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateShift
- **HTTP**: `POST /v2/labor/shifts` (Default (connect))
- **Notes**: Creates a new `Shift`. A `Shift` represents a complete workday for a single team member. You must provide the following values in your request to this endpoint: `location_id` `team_member_id` `start_at` An attempt to create a new `Shift` can result in a `BAD_REQUEST` error when: - The `status` of the new `Shift` is `OPEN` and the team member has another shift with an `OPEN` status. - The `start_at` date is in the future. - The `start_at` or `end_at` date overlaps another shift for the same team member. - The `Break` instances are set in the request and a break `start_at` is before the `Shift.start_at`, a break `end_at` is after the `Shift.end_at`, or both.
- **Signature**: `CreateShift(CreateShiftRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateShiftResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateTimecard
- **HTTP**: `POST /v2/labor/timecards` (Default (connect))
- **Notes**: Creates a new `Timecard`. A `Timecard` represents a complete workday for a single team member. You must provide the following values in your request to this endpoint: `location_id` `team_member_id` `start_at` An attempt to create a new `Timecard` can result in a `BAD_REQUEST` error when: - The `status` of the new `Timecard` is `OPEN` and the team member has another timecard with an `OPEN` status. - The `start_at` date is in the future. - The `start_at` or `end_at` date overlaps another timecard for the same team member. - The `Break` instances are set in the request and a break `start_at` is before the `Timecard.start_at`, a break `end_at` is after the `Timecard.end_at`, or both.
- **Signature**: `CreateTimecard(CreateTimecardRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateTimecardResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteBreakType
- **HTTP**: `DELETE /v2/labor/break-types/{id}` (Default (connect))
- **Notes**: Deletes an existing `BreakType`. A `BreakType` can be deleted even if it is referenced from a `Shift`.
- **Signature**: `DeleteBreakType(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteBreakTypeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteShift
- **HTTP**: `DELETE /v2/labor/shifts/{id}` (Default (connect))
- **Notes**: Deletes a `Shift`.
- **Signature**: `DeleteShift(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteShiftResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteTimecard
- **HTTP**: `DELETE /v2/labor/timecards/{id}` (Default (connect))
- **Notes**: Deletes a `Timecard`.
- **Signature**: `DeleteTimecard(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteTimecardResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetBreakType
- **HTTP**: `GET /v2/labor/break-types/{id}` (Default (connect))
- **Notes**: Returns a single `BreakType` specified by `id`.
- **Signature**: `GetBreakType(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetBreakTypeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployeeWage
- **HTTP**: `GET /v2/labor/employee-wages/{id}` (Default (connect))
- **Notes**: Returns a single `EmployeeWage` specified by `id`.
- **Signature**: `GetEmployeeWage(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetEmployeeWageResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetShift
- **HTTP**: `GET /v2/labor/shifts/{id}` (Default (connect))
- **Notes**: Returns a single `Shift` specified by `id`.
- **Signature**: `GetShift(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetShiftResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetTeamMemberWage
- **HTTP**: `GET /v2/labor/team-member-wages/{id}` (Default (connect))
- **Notes**: Returns a single `TeamMemberWage` specified by `id`.
- **Signature**: `GetTeamMemberWage(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetTeamMemberWageResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListBreakTypes
- **HTTP**: `GET /v2/labor/break-types` (Default (connect))
- **Notes**: Returns a paginated list of `BreakType` instances for a business.
- **Signature**: `ListBreakTypes(string? locationId, int? limit, string? cursor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `locationId` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `location_id` ← `locationId`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `ListBreakTypesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListEmployeeWages
- **HTTP**: `GET /v2/labor/employee-wages` (Default (connect))
- **Notes**: Returns a paginated list of `EmployeeWage` instances for a business.
- **Signature**: `ListEmployeeWages(string? employeeId, int? limit, string? cursor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `employeeId` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `employee_id` ← `employeeId`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `ListEmployeeWagesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListTeamMemberWages
- **HTTP**: `GET /v2/labor/team-member-wages` (Default (connect))
- **Notes**: Returns a paginated list of `TeamMemberWage` instances for a business.
- **Signature**: `ListTeamMemberWages(string? teamMemberId, int? limit, string? cursor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `teamMemberId` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_member_id` ← `teamMemberId`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `ListTeamMemberWagesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListWorkweekConfigs
- **HTTP**: `GET /v2/labor/workweek-configs` (Default (connect))
- **Notes**: Returns a list of `WorkweekConfig` instances for a business.
- **Signature**: `ListWorkweekConfigs(int? limit, string? cursor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `ListWorkweekConfigsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PublishScheduledShift
- **HTTP**: `POST /v2/labor/scheduled-shifts/{id}/publish` (Default (connect))
- **Notes**: Publishes a scheduled shift. When a scheduled shift is published, Square keeps the `draft_shift_details` field as is and copies it to the `published_shift_details` field.
- **Signature**: `PublishScheduledShift(string id, PublishScheduledShiftRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PublishScheduledShiftResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveScheduledShift
- **HTTP**: `GET /v2/labor/scheduled-shifts/{id}` (Default (connect))
- **Notes**: Retrieves a scheduled shift by ID.
- **Signature**: `RetrieveScheduledShift(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveScheduledShiftResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveTimecard
- **HTTP**: `GET /v2/labor/timecards/{id}` (Default (connect))
- **Notes**: Returns a single `Timecard` specified by `id`.
- **Signature**: `RetrieveTimecard(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveTimecardResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchScheduledShifts
- **HTTP**: `POST /v2/labor/scheduled-shifts/search` (Default (connect))
- **Notes**: Returns a paginated list of scheduled shifts, with optional filter and sort settings. By default, results are sorted by `start_at` in ascending order.
- **Signature**: `SearchScheduledShifts(SearchScheduledShiftsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SearchScheduledShiftsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchShifts
- **HTTP**: `POST /v2/labor/shifts/search` (Default (connect))
- **Notes**: Returns a paginated list of `Shift` records for a business. The list to be returned can be filtered by: - Location IDs - Team member IDs - Shift status (`OPEN` or `CLOSED`) - Shift start - Shift end - Workday details The list can be sorted by: - `START_AT` - `END_AT` - `CREATED_AT` - `UPDATED_AT`
- **Signature**: `SearchShifts(SearchShiftsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SearchShiftsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchTimecards
- **HTTP**: `POST /v2/labor/timecards/search` (Default (connect))
- **Notes**: Returns a paginated list of `Timecard` records for a business. The list to be returned can be filtered by: - Location IDs - Team member IDs - Timecard status (`OPEN` or `CLOSED`) - Timecard start - Timecard end - Workday details The list can be sorted by: - `START_AT` - `END_AT` - `CREATED_AT` - `UPDATED_AT`
- **Signature**: `SearchTimecards(SearchTimecardsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SearchTimecardsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateBreakType
- **HTTP**: `PUT /v2/labor/break-types/{id}` (Default (connect))
- **Notes**: Updates an existing `BreakType`.
- **Signature**: `UpdateBreakType(string id, UpdateBreakTypeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateBreakTypeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateScheduledShift
- **HTTP**: `PUT /v2/labor/scheduled-shifts/{id}` (Default (connect))
- **Notes**: Updates the draft shift details for a scheduled shift. This endpoint supports sparse updates, so only new, changed, or removed fields are required in the request. You must publish the shift to make updates public. You can make the following updates to `draft_shift_details`: - Change the `location_id`, `job_id`, `start_at`, and `end_at` fields. - Add, change, or clear the `team_member_id` and `notes` fields. To clear these fields, set the value to null. - Change the `is_deleted` field. To delete a scheduled shift, set `is_deleted` to true and then publish the shift.
- **Signature**: `UpdateScheduledShift(string id, UpdateScheduledShiftRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateScheduledShiftResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateShift
- **HTTP**: `PUT /v2/labor/shifts/{id}` (Default (connect))
- **Notes**: Updates an existing `Shift`. When adding a `Break` to a `Shift`, any earlier `Break` instances in the `Shift` have the `end_at` property set to a valid RFC-3339 datetime string. When closing a `Shift`, all `Break` instances in the `Shift` must be complete with `end_at` set on each `Break`.
- **Signature**: `UpdateShift(string id, UpdateShiftRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateShiftResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateTimecard
- **HTTP**: `PUT /v2/labor/timecards/{id}` (Default (connect))
- **Notes**: Updates an existing `Timecard`. When adding a `Break` to a `Timecard`, any earlier `Break` instances in the `Timecard` have the `end_at` property set to a valid RFC-3339 datetime string. When closing a `Timecard`, all `Break` instances in the `Timecard` must be complete with `end_at` set on each `Break`.
- **Signature**: `UpdateTimecard(string id, UpdateTimecardRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateTimecardResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateWorkweekConfig
- **HTTP**: `PUT /v2/labor/workweek-configs/{id}` (Default (connect))
- **Notes**: Updates a `WorkweekConfig`.
- **Signature**: `UpdateWorkweekConfig(string id, UpdateWorkweekConfigRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateWorkweekConfigResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
