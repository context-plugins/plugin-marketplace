# OrganizationApi — operations

Accessor: `client.OrganizationApi` · Source: `Api/OrganizationApi.cs` · 67 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgRepo
- **HTTP**: `POST /orgs/{org}/repos` (Server1 (gitea))
- **Signature**: `CreateOrgRepo(string org, CreateRepoOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Repository`
- **Error**: `SdkException<CreateOrgRepoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateOrgRepoDeprecated
- **HTTP**: `POST /org/{org}/repos` (Server1 (gitea))
- **Signature**: `CreateOrgRepoDeprecated(string org, CreateRepoOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Repository`
- **Error**: `SdkException<CreateOrgRepoDeprecatedError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateOrgVariable
- **HTTP**: `POST /orgs/{org}/actions/variables/{variablename}` (Server1 (gitea))
- **Signature**: `CreateOrgVariable(string org, string variablename, CreateVariableOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateOrgVariableError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgRunner
- **HTTP**: `DELETE /orgs/{org}/actions/runners/{runner_id}` (Server1 (gitea))
- **Signature**: `DeleteOrgRunner(string org, string runnerId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgRunnerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgSecret
- **HTTP**: `DELETE /orgs/{org}/actions/secrets/{secretname}` (Server1 (gitea))
- **Signature**: `DeleteOrgSecret(string org, string secretname, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgSecretError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgVariable
- **HTTP**: `DELETE /orgs/{org}/actions/variables/{variablename}` (Server1 (gitea))
- **Signature**: `DeleteOrgVariable(string org, string variablename, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ActionVariable`
- **Error**: `SdkException<DeleteOrgVariableError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgRunner
- **HTTP**: `GET /orgs/{org}/actions/runners/{runner_id}` (Server1 (gitea))
- **Signature**: `GetOrgRunner(string org, string runnerId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ActionRunner`
- **Error**: `SdkException<GetOrgRunnerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgRunners
- **HTTP**: `GET /orgs/{org}/actions/runners` (Server1 (gitea))
- **Signature**: `GetOrgRunners(string org, bool? disabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `disabled` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `disabled` ← `disabled`
- **Returns**: `ActionRunnersResponse`
- **Error**: `SdkException<GetOrgRunnersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgVariable
- **HTTP**: `GET /orgs/{org}/actions/variables/{variablename}` (Server1 (gitea))
- **Signature**: `GetOrgVariable(string org, string variablename, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ActionVariable`
- **Error**: `SdkException<GetOrgVariableError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgVariablesList
- **HTTP**: `GET /orgs/{org}/actions/variables` (Server1 (gitea))
- **Signature**: `GetOrgVariablesList(string org, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<ActionVariable>`
- **Error**: `SdkException<GetOrgVariablesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetOrgWorkflowJobs
- **HTTP**: `GET /orgs/{org}/actions/jobs` (Server1 (gitea))
- **Signature**: `GetOrgWorkflowJobs(string org, string? status, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `status` ← `status`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `ActionWorkflowJobsResponse`
- **Error**: `SdkException<GetOrgWorkflowJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetOrgWorkflowRuns
- **HTTP**: `GET /orgs/{org}/actions/runs` (Server1 (gitea))
- **Signature**: `GetOrgWorkflowRuns(string org, string? @event, string? branch, string? status, string? actor, string? headSha, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`@event` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `branch` ← `branch`, `status` ← `status`, `actor` ← `actor`, `head_sha` ← `headSha`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `ActionWorkflowRunsResponse`
- **Error**: `SdkException<GetOrgWorkflowRunsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### OrgAddTeamMember
- **HTTP**: `PUT /teams/{id}/members/{username}` (Server1 (gitea))
- **Signature**: `OrgAddTeamMember(long id, string username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgAddTeamMemberError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgAddTeamRepository
- **HTTP**: `PUT /teams/{id}/repos/{org}/{repo}` (Server1 (gitea))
- **Signature**: `OrgAddTeamRepository(long id, string org, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgAddTeamRepositoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgConcealMember
- **HTTP**: `DELETE /orgs/{org}/public_members/{username}` (Server1 (gitea))
- **Signature**: `OrgConcealMember(string org, string username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgConcealMemberError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgCreate
- **HTTP**: `POST /orgs` (Server1 (gitea))
- **Signature**: `OrgCreate(CreateOrgOption organization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Organization`
- **Error**: `SdkException<OrgCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgCreateHook
- **HTTP**: `POST /orgs/{org}/hooks` (Server1 (gitea))
- **Signature**: `OrgCreateHook(string org, CreateHookOption body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Hook`
- **Error**: `SdkException<OrgCreateHookError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgCreateLabel
- **HTTP**: `POST /orgs/{org}/labels` (Server1 (gitea))
- **Signature**: `OrgCreateLabel(string org, CreateLabelOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Label`
- **Error**: `SdkException<OrgCreateLabelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgCreateRunnerRegistrationToken
- **HTTP**: `POST /orgs/{org}/actions/runners/registration-token` (Server1 (gitea))
- **Signature**: `OrgCreateRunnerRegistrationToken(string org, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### OrgCreateTeam
- **HTTP**: `POST /orgs/{org}/teams` (Server1 (gitea))
- **Signature**: `OrgCreateTeam(string org, CreateTeamOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Team`
- **Error**: `SdkException<OrgCreateTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgDelete
- **HTTP**: `DELETE /orgs/{org}` (Server1 (gitea))
- **Signature**: `OrgDelete(string org, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgDeleteAvatar
- **HTTP**: `DELETE /orgs/{org}/avatar` (Server1 (gitea))
- **Signature**: `OrgDeleteAvatar(string org, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgDeleteAvatarError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgDeleteHook
- **HTTP**: `DELETE /orgs/{org}/hooks/{id}` (Server1 (gitea))
- **Signature**: `OrgDeleteHook(string org, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgDeleteHookError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgDeleteLabel
- **HTTP**: `DELETE /orgs/{org}/labels/{id}` (Server1 (gitea))
- **Signature**: `OrgDeleteLabel(string org, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgDeleteLabelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgDeleteMember
- **HTTP**: `DELETE /orgs/{org}/members/{username}` (Server1 (gitea))
- **Signature**: `OrgDeleteMember(string org, string username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgDeleteMemberError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgDeleteRepos
- **HTTP**: `DELETE /orgs/{org}/repos` (Server1 (gitea))
- **Signature**: `OrgDeleteRepos(string org, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgDeleteReposError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgDeleteTeam
- **HTTP**: `DELETE /teams/{id}` (Server1 (gitea))
- **Signature**: `OrgDeleteTeam(long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgDeleteTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgEdit
- **HTTP**: `PATCH /orgs/{org}` (Server1 (gitea))
- **Signature**: `OrgEdit(string org, EditOrgOption body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Organization`
- **Error**: `SdkException<OrgEditError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgEditHook
- **HTTP**: `PATCH /orgs/{org}/hooks/{id}` (Server1 (gitea))
- **Signature**: `OrgEditHook(string org, long id, EditHookOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Hook`
- **Error**: `SdkException<OrgEditHookError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgEditLabel
- **HTTP**: `PATCH /orgs/{org}/labels/{id}` (Server1 (gitea))
- **Signature**: `OrgEditLabel(string org, long id, EditLabelOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Label`
- **Error**: `SdkException<OrgEditLabelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgEditTeam
- **HTTP**: `PATCH /teams/{id}` (Server1 (gitea))
- **Signature**: `OrgEditTeam(int id, EditTeamOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Team`
- **Error**: `SdkException<OrgEditTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgGet
- **HTTP**: `GET /orgs/{org}` (Server1 (gitea))
- **Signature**: `OrgGet(string org, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Organization`
- **Error**: `SdkException<OrgGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgGetAll
- **HTTP**: `GET /orgs` (Server1 (gitea))
- **Signature**: `OrgGetAll(int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Organization>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### OrgGetHook
- **HTTP**: `GET /orgs/{org}/hooks/{id}` (Server1 (gitea))
- **Signature**: `OrgGetHook(string org, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Hook`
- **Error**: `SdkException<OrgGetHookError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgGetLabel
- **HTTP**: `GET /orgs/{org}/labels/{id}` (Server1 (gitea))
- **Signature**: `OrgGetLabel(string org, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Label`
- **Error**: `SdkException<OrgGetLabelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgGetTeam
- **HTTP**: `GET /teams/{id}` (Server1 (gitea))
- **Signature**: `OrgGetTeam(long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Team`
- **Error**: `SdkException<OrgGetTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgGetUserPermissions
- **HTTP**: `GET /users/{username}/orgs/{org}/permissions` (Server1 (gitea))
- **Signature**: `OrgGetUserPermissions(string username, string org, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OrganizationPermissions`
- **Error**: `SdkException<OrgGetUserPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgIsMember
- **HTTP**: `GET /orgs/{org}/members/{username}` (Server1 (gitea))
- **Signature**: `OrgIsMember(string org, string username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgIsMemberError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgIsPublicMember
- **HTTP**: `GET /orgs/{org}/public_members/{username}` (Server1 (gitea))
- **Signature**: `OrgIsPublicMember(string org, string username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgIsPublicMemberError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgListActionsSecrets
- **HTTP**: `GET /orgs/{org}/actions/secrets` (Server1 (gitea))
- **Signature**: `OrgListActionsSecrets(string org, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Secret>`
- **Error**: `SdkException<OrgListActionsSecretsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### OrgListActivityFeeds
- **HTTP**: `GET /orgs/{org}/activities/feeds` (Server1 (gitea))
- **Signature**: `OrgListActivityFeeds(string org, DateTimeOffset? date, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `date` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `date` ← `date`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Activity>`
- **Error**: `SdkException<OrgListActivityFeedsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### OrgListCurrentUserOrgs
- **HTTP**: `GET /user/orgs` (Server1 (gitea))
- **Signature**: `OrgListCurrentUserOrgs(int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Organization>`
- **Error**: `SdkException<OrgListCurrentUserOrgsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### OrgListHooks
- **HTTP**: `GET /orgs/{org}/hooks` (Server1 (gitea))
- **Signature**: `OrgListHooks(string org, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Hook>`
- **Error**: `SdkException<OrgListHooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### OrgListLabels
- **HTTP**: `GET /orgs/{org}/labels` (Server1 (gitea))
- **Signature**: `OrgListLabels(string org, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Label>`
- **Error**: `SdkException<OrgListLabelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### OrgListMembers
- **HTTP**: `GET /orgs/{org}/members` (Server1 (gitea))
- **Signature**: `OrgListMembers(string org, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<User>`
- **Error**: `SdkException<OrgListMembersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### OrgListPublicMembers
- **HTTP**: `GET /orgs/{org}/public_members` (Server1 (gitea))
- **Signature**: `OrgListPublicMembers(string org, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<User>`
- **Error**: `SdkException<OrgListPublicMembersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### OrgListRepos
- **HTTP**: `GET /orgs/{org}/repos` (Server1 (gitea))
- **Signature**: `OrgListRepos(string org, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Repository>`
- **Error**: `SdkException<OrgListReposError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### OrgListTeamActivityFeeds
- **HTTP**: `GET /teams/{id}/activities/feeds` (Server1 (gitea))
- **Signature**: `OrgListTeamActivityFeeds(long id, DateTimeOffset? date, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `date` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `date` ← `date`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Activity>`
- **Error**: `SdkException<OrgListTeamActivityFeedsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### OrgListTeamMember
- **HTTP**: `GET /teams/{id}/members/{username}` (Server1 (gitea))
- **Signature**: `OrgListTeamMember(long id, string username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `User`
- **Error**: `SdkException<OrgListTeamMemberError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgListTeamMembers
- **HTTP**: `GET /teams/{id}/members` (Server1 (gitea))
- **Signature**: `OrgListTeamMembers(long id, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<User>`
- **Error**: `SdkException<OrgListTeamMembersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### OrgListTeamRepo
- **HTTP**: `GET /teams/{id}/repos/{org}/{repo}` (Server1 (gitea))
- **Signature**: `OrgListTeamRepo(long id, string org, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Repository`
- **Error**: `SdkException<OrgListTeamRepoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgListTeamRepos
- **HTTP**: `GET /teams/{id}/repos` (Server1 (gitea))
- **Signature**: `OrgListTeamRepos(long id, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Repository>`
- **Error**: `SdkException<OrgListTeamReposError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### OrgListTeams
- **HTTP**: `GET /orgs/{org}/teams` (Server1 (gitea))
- **Signature**: `OrgListTeams(string org, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Team>`
- **Error**: `SdkException<OrgListTeamsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### OrgListUserOrgs
- **HTTP**: `GET /users/{username}/orgs` (Server1 (gitea))
- **Signature**: `OrgListUserOrgs(string username, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Organization>`
- **Error**: `SdkException<OrgListUserOrgsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### OrgPublicizeMember
- **HTTP**: `PUT /orgs/{org}/public_members/{username}` (Server1 (gitea))
- **Signature**: `OrgPublicizeMember(string org, string username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgPublicizeMemberError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgRemoveTeamMember
- **HTTP**: `DELETE /teams/{id}/members/{username}` (Server1 (gitea))
- **Signature**: `OrgRemoveTeamMember(long id, string username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgRemoveTeamMemberError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgRemoveTeamRepository
- **HTTP**: `DELETE /teams/{id}/repos/{org}/{repo}` (Server1 (gitea))
- **Signature**: `OrgRemoveTeamRepository(long id, string org, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgRemoveTeamRepositoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrgUpdateAvatar
- **HTTP**: `POST /orgs/{org}/avatar` (Server1 (gitea))
- **Signature**: `OrgUpdateAvatar(string org, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrgUpdateAvatarError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrganizationBlockUser
- **HTTP**: `PUT /orgs/{org}/blocks/{username}` (Server1 (gitea))
- **Signature**: `OrganizationBlockUser(string org, string username, string? note, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `note` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `note` ← `note`
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrganizationBlockUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrganizationCheckUserBlock
- **HTTP**: `GET /orgs/{org}/blocks/{username}` (Server1 (gitea))
- **Signature**: `OrganizationCheckUserBlock(string org, string username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrganizationCheckUserBlockError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrganizationListBlocks
- **HTTP**: `GET /orgs/{org}/blocks` (Server1 (gitea))
- **Signature**: `OrganizationListBlocks(string org, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<User>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### OrganizationUnblockUser
- **HTTP**: `DELETE /orgs/{org}/blocks/{username}` (Server1 (gitea))
- **Signature**: `OrganizationUnblockUser(string org, string username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OrganizationUnblockUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RenameOrg
- **HTTP**: `POST /orgs/{org}/rename` (Server1 (gitea))
- **Signature**: `RenameOrg(string org, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RenameOrgError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TeamSearch
- **HTTP**: `GET /orgs/{org}/teams/search` (Server1 (gitea))
- **Signature**: `TeamSearch(string org, string? q, bool? includeDesc, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`q` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `q` ← `q`, `include_desc` ← `includeDesc`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `TeamSearchResponse`
- **Error**: `SdkException<TeamSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgRunner
- **HTTP**: `PATCH /orgs/{org}/actions/runners/{runner_id}` (Server1 (gitea))
- **Signature**: `UpdateOrgRunner(string org, string runnerId, EditActionRunnerOptionRepresentsTheEditableFieldsForARunner? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ActionRunner`
- **Error**: `SdkException<UpdateOrgRunnerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgSecret
- **HTTP**: `PUT /orgs/{org}/actions/secrets/{secretname}` (Server1 (gitea))
- **Signature**: `UpdateOrgSecret(string org, string secretname, CreateOrUpdateSecretOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateOrgSecretError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgVariable
- **HTTP**: `PUT /orgs/{org}/actions/variables/{variablename}` (Server1 (gitea))
- **Signature**: `UpdateOrgVariable(string org, string variablename, UpdateVariableOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateOrgVariableError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
