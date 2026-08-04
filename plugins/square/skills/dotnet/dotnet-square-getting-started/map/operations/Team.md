# Team — operations

Accessor: `client.Team` · Source: `Api/Team.cs` · 12 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### BulkCreateTeamMembers
- **HTTP**: `POST /v2/team-members/bulk-create` (Default (connect))
- **Notes**: Creates multiple `TeamMember` objects. The created `TeamMember` objects are returned on successful creates. This process is non-transactional and processes as much of the request as possible. If one of the creates in the request cannot be successfully processed, the request is not marked as failed, but the body of the response contains explicit error information for the failed create. Learn about Troubleshooting the Team API .
- **Signature**: `BulkCreateTeamMembers(BulkCreateTeamMembersRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BulkCreateTeamMembersResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BulkUpdateTeamMembers
- **HTTP**: `POST /v2/team-members/bulk-update` (Default (connect))
- **Notes**: Updates multiple `TeamMember` objects. The updated `TeamMember` objects are returned on successful updates. This process is non-transactional and processes as much of the request as possible. If one of the updates in the request cannot be successfully processed, the request is not marked as failed, but the body of the response contains explicit error information for the failed update. Learn about Troubleshooting the Team API .
- **Signature**: `BulkUpdateTeamMembers(BulkUpdateTeamMembersRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BulkUpdateTeamMembersResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateJob
- **HTTP**: `POST /v2/team-members/jobs` (Default (connect))
- **Notes**: Creates a job in a seller account. A job defines a title and tip eligibility. Note that compensation is defined in a job assignment in a team member's wage setting.
- **Signature**: `CreateJob(CreateJobRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateJobResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateTeamMember
- **HTTP**: `POST /v2/team-members` (Default (connect))
- **Notes**: Creates a single `TeamMember` object. The `TeamMember` object is returned on successful creates. You must provide the following values in your request to this endpoint: - `given_name` - `family_name` Learn about Troubleshooting the Team API .
- **Signature**: `CreateTeamMember(CreateTeamMemberRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateTeamMemberResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListJobs
- **HTTP**: `GET /v2/team-members/jobs` (Default (connect))
- **Notes**: Lists jobs in a seller account. Results are sorted by title in ascending order.
- **Signature**: `ListJobs(string? cursor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `cursor` ← `cursor`
- **Returns**: `ListJobsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveJob
- **HTTP**: `GET /v2/team-members/jobs/{job_id}` (Default (connect))
- **Notes**: Retrieves a specified job.
- **Signature**: `RetrieveJob(string jobId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveJobResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveTeamMember
- **HTTP**: `GET /v2/team-members/{team_member_id}` (Default (connect))
- **Notes**: Retrieves a `TeamMember` object for the given `TeamMember.id`. Learn about Troubleshooting the Team API .
- **Signature**: `RetrieveTeamMember(string teamMemberId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveTeamMemberResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveWageSetting
- **HTTP**: `GET /v2/team-members/{team_member_id}/wage-setting` (Default (connect))
- **Notes**: Retrieves a `WageSetting` object for a team member specified by `TeamMember.id`. For more information, see Troubleshooting the Team API . Square recommends using RetrieveTeamMember or SearchTeamMembers to get this information directly from the `TeamMember.wage_setting` field.
- **Signature**: `RetrieveWageSetting(string teamMemberId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveWageSettingResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchTeamMembers
- **HTTP**: `POST /v2/team-members/search` (Default (connect))
- **Notes**: Returns a paginated list of `TeamMember` objects for a business. The list can be filtered by location IDs, `ACTIVE` or `INACTIVE` status, or whether the team member is the Square account owner.
- **Signature**: `SearchTeamMembers(SearchTeamMembersRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SearchTeamMembersResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateJob
- **HTTP**: `PUT /v2/team-members/jobs/{job_id}` (Default (connect))
- **Notes**: Updates the title or tip eligibility of a job. Changes to the title propagate to all `JobAssignment`, `Shift`, and `TeamMemberWage` objects that reference the job ID. Changes to tip eligibility propagate to all `TeamMemberWage` objects that reference the job ID.
- **Signature**: `UpdateJob(string jobId, UpdateJobRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateJobResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateTeamMember
- **HTTP**: `PUT /v2/team-members/{team_member_id}` (Default (connect))
- **Notes**: Updates a single `TeamMember` object. The `TeamMember` object is returned on successful updates. Learn about Troubleshooting the Team API .
- **Signature**: `UpdateTeamMember(string teamMemberId, UpdateTeamMemberRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateTeamMemberResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateWageSetting
- **HTTP**: `PUT /v2/team-members/{team_member_id}/wage-setting` (Default (connect))
- **Notes**: Creates or updates a `WageSetting` object. The object is created if a `WageSetting` with the specified `team_member_id` doesn't exist. Otherwise, it fully replaces the `WageSetting` object for the team member. The `WageSetting` is returned on a successful update. For more information, see Troubleshooting the Team API . Square recommends using CreateTeamMember or UpdateTeamMember to manage the `TeamMember.wage_setting` field directly.
- **Signature**: `UpdateWageSetting(string teamMemberId, UpdateWageSettingRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateWageSettingResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
