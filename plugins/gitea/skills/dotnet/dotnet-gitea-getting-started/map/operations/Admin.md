# Admin — operations

Accessor: `client.Admin` · Source: `Api/Admin.cs` · 32 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AdminAddUserBadges
- **HTTP**: `POST /admin/users/{username}/badges` (Server1 (gitea))
- **Signature**: `AdminAddUserBadges(string username, UserBadgeOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AdminAddUserBadgesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AdminAdoptRepository
- **HTTP**: `POST /admin/unadopted/{owner}/{repo}` (Server1 (gitea))
- **Signature**: `AdminAdoptRepository(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AdminAdoptRepositoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AdminCreateHook
- **HTTP**: `POST /admin/hooks` (Server1 (gitea))
- **Signature**: `AdminCreateHook(CreateHookOption body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Hook`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminCreateOrg
- **HTTP**: `POST /admin/users/{username}/orgs` (Server1 (gitea))
- **Signature**: `AdminCreateOrg(string username, CreateOrgOption organization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Organization`
- **Error**: `SdkException<AdminCreateOrgError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AdminCreatePublicKey
- **HTTP**: `POST /admin/users/{username}/keys` (Server1 (gitea))
- **Signature**: `AdminCreatePublicKey(string username, CreateKeyOption? key, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `key` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PublicKey`
- **Error**: `SdkException<AdminCreatePublicKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AdminCreateRepo
- **HTTP**: `POST /admin/users/{username}/repos` (Server1 (gitea))
- **Signature**: `AdminCreateRepo(string username, CreateRepoOption repository, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Repository`
- **Error**: `SdkException<AdminCreateRepoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404, 409, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AdminCreateRunnerRegistrationToken
- **HTTP**: `POST /admin/actions/runners/registration-token` (Server1 (gitea))
- **Signature**: `AdminCreateRunnerRegistrationToken(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminCreateUser
- **HTTP**: `POST /admin/users` (Server1 (gitea))
- **Signature**: `AdminCreateUser(CreateUserOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `User`
- **Error**: `SdkException<AdminCreateUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AdminCronList
- **HTTP**: `GET /admin/cron` (Server1 (gitea))
- **Signature**: `AdminCronList(int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Cron>`
- **Error**: `SdkException<AdminCronListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### AdminCronRun
- **HTTP**: `POST /admin/cron/{task}` (Server1 (gitea))
- **Signature**: `AdminCronRun(string task, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AdminCronRunError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AdminDeleteHook
- **HTTP**: `DELETE /admin/hooks/{id}` (Server1 (gitea))
- **Signature**: `AdminDeleteHook(long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminDeleteUnadoptedRepository
- **HTTP**: `DELETE /admin/unadopted/{owner}/{repo}` (Server1 (gitea))
- **Signature**: `AdminDeleteUnadoptedRepository(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AdminDeleteUnadoptedRepositoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AdminDeleteUser
- **HTTP**: `DELETE /admin/users/{username}` (Server1 (gitea))
- **Signature**: `AdminDeleteUser(string username, bool? purge, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `purge` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `purge` ← `purge`
- **Returns**: `void` (Task)
- **Error**: `SdkException<AdminDeleteUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AdminDeleteUserBadges
- **HTTP**: `DELETE /admin/users/{username}/badges` (Server1 (gitea))
- **Signature**: `AdminDeleteUserBadges(string username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AdminDeleteUserBadgesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AdminDeleteUserPublicKey
- **HTTP**: `DELETE /admin/users/{username}/keys/{id}` (Server1 (gitea))
- **Signature**: `AdminDeleteUserPublicKey(string username, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AdminDeleteUserPublicKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AdminEditHook
- **HTTP**: `PATCH /admin/hooks/{id}` (Server1 (gitea))
- **Signature**: `AdminEditHook(long id, EditHookOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Hook`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminEditUser
- **HTTP**: `PATCH /admin/users/{username}` (Server1 (gitea))
- **Signature**: `AdminEditUser(string username, EditUserOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `User`
- **Error**: `SdkException<AdminEditUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AdminGetAllEmails
- **HTTP**: `GET /admin/emails` (Server1 (gitea))
- **Signature**: `AdminGetAllEmails(int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Email>`
- **Error**: `SdkException<AdminGetAllEmailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### AdminGetAllOrgs
- **HTTP**: `GET /admin/orgs` (Server1 (gitea))
- **Signature**: `AdminGetAllOrgs(int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Organization>`
- **Error**: `SdkException<AdminGetAllOrgsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### AdminGetHook
- **HTTP**: `GET /admin/hooks/{id}` (Server1 (gitea))
- **Signature**: `AdminGetHook(long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Hook`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminListHooks
- **HTTP**: `GET /admin/hooks` (Server1 (gitea))
- **Signature**: `AdminListHooks(int? page, int? limit, Type3? type, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - `type` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`, `type` ← `type`
- **Returns**: `IReadOnlyList<Hook>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### AdminListUserBadges
- **HTTP**: `GET /admin/users/{username}/badges` (Server1 (gitea))
- **Signature**: `AdminListUserBadges(string username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Badge>`
- **Error**: `SdkException<AdminListUserBadgesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AdminRenameUser
- **HTTP**: `POST /admin/users/{username}/rename` (Server1 (gitea))
- **Signature**: `AdminRenameUser(string username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AdminRenameUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AdminSearchEmails
- **HTTP**: `GET /admin/emails/search` (Server1 (gitea))
- **Signature**: `AdminSearchEmails(string? q, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `q` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `q` ← `q`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Email>`
- **Error**: `SdkException<AdminSearchEmailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### AdminSearchUsers
- **HTTP**: `GET /admin/users` (Server1 (gitea))
- **Signature**: `AdminSearchUsers(long? sourceId, string? loginName, int? page, int? limit, string? sort, string? order, string? q, string? visibility, bool? isActive, bool? isAdmin, bool? isRestricted, bool? is2FaEnabled, bool? isProhibitLogin, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`sourceId` … `isProhibitLogin`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `source_id` ← `sourceId`, `login_name` ← `loginName`, `page` ← `page`, `limit` ← `limit`, `sort` ← `sort`, `order` ← `order`, `q` ← `q`, `visibility` ← `visibility`, `is_active` ← `isActive`, `is_admin` ← `isAdmin`, `is_restricted` ← `isRestricted`, `is_2fa_enabled` ← `is2FaEnabled`, `is_prohibit_login` ← `isProhibitLogin`
- **Returns**: `IReadOnlyList<User>`
- **Error**: `SdkException<AdminSearchUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### AdminUnadoptedList
- **HTTP**: `GET /admin/unadopted` (Server1 (gitea))
- **Signature**: `AdminUnadoptedList(int? page, int? limit, string? pattern, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - `pattern` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`, `pattern` ← `pattern`
- **Returns**: `IReadOnlyList<string>`
- **Error**: `SdkException<AdminUnadoptedListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### DeleteAdminRunner
- **HTTP**: `DELETE /admin/actions/runners/{runner_id}` (Server1 (gitea))
- **Signature**: `DeleteAdminRunner(string runnerId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteAdminRunnerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAdminRunner
- **HTTP**: `GET /admin/actions/runners/{runner_id}` (Server1 (gitea))
- **Signature**: `GetAdminRunner(string runnerId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ActionRunner`
- **Error**: `SdkException<GetAdminRunnerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAdminRunners
- **HTTP**: `GET /admin/actions/runners` (Server1 (gitea))
- **Signature**: `GetAdminRunners(bool? disabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `disabled` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `disabled` ← `disabled`
- **Returns**: `ActionRunnersResponse`
- **Error**: `SdkException<GetAdminRunnersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListAdminWorkflowJobs
- **HTTP**: `GET /admin/actions/jobs` (Server1 (gitea))
- **Signature**: `ListAdminWorkflowJobs(string? status, int? page, int? limit, string? sort, string? order, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`status` … `order`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `status` ← `status`, `page` ← `page`, `limit` ← `limit`, `sort` ← `sort`, `order` ← `order`
- **Returns**: `ActionWorkflowJobsResponse`
- **Error**: `SdkException<ListAdminWorkflowJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListAdminWorkflowRuns
- **HTTP**: `GET /admin/actions/runs` (Server1 (gitea))
- **Signature**: `ListAdminWorkflowRuns(string? @event, string? branch, string? status, string? actor, string? headSha, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`@event` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `branch` ← `branch`, `status` ← `status`, `actor` ← `actor`, `head_sha` ← `headSha`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `ActionWorkflowRunsResponse`
- **Error**: `SdkException<ListAdminWorkflowRunsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateAdminRunner
- **HTTP**: `PATCH /admin/actions/runners/{runner_id}` (Server1 (gitea))
- **Signature**: `UpdateAdminRunner(string runnerId, EditActionRunnerOptionRepresentsTheEditableFieldsForARunner? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ActionRunner`
- **Error**: `SdkException<UpdateAdminRunnerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
