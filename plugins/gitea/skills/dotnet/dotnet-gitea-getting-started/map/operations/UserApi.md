# UserApi — operations

Accessor: `client.UserApi` · Source: `Api/UserApi.cs` · 76 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateCurrentUserRepo
- **HTTP**: `POST /user/repos` (Server1 (gitea))
- **Signature**: `CreateCurrentUserRepo(CreateRepoOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Repository`
- **Error**: `SdkException<CreateCurrentUserRepoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 409, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateUserVariable
- **HTTP**: `POST /user/actions/variables/{variablename}` (Server1 (gitea))
- **Signature**: `CreateUserVariable(string variablename, CreateVariableOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateUserVariableError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 409] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteUserRunner
- **HTTP**: `DELETE /user/actions/runners/{runner_id}` (Server1 (gitea))
- **Signature**: `DeleteUserRunner(string runnerId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteUserRunnerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteUserSecret
- **HTTP**: `DELETE /user/actions/secrets/{secretname}` (Server1 (gitea))
- **Signature**: `DeleteUserSecret(string secretname, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteUserSecretError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteUserVariable
- **HTTP**: `DELETE /user/actions/variables/{variablename}` (Server1 (gitea))
- **Signature**: `DeleteUserVariable(string variablename, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteUserVariableError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetUserRunner
- **HTTP**: `GET /user/actions/runners/{runner_id}` (Server1 (gitea))
- **Signature**: `GetUserRunner(string runnerId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ActionRunner`
- **Error**: `SdkException<GetUserRunnerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetUserRunners
- **HTTP**: `GET /user/actions/runners` (Server1 (gitea))
- **Signature**: `GetUserRunners(bool? disabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `disabled` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `disabled` ← `disabled`
- **Returns**: `ActionRunnersResponse`
- **Error**: `SdkException<GetUserRunnersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetUserSettings
- **HTTP**: `GET /user/settings` (Server1 (gitea))
- **Signature**: `GetUserSettings(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<UserSettings>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUserVariable
- **HTTP**: `GET /user/actions/variables/{variablename}` (Server1 (gitea))
- **Signature**: `GetUserVariable(string variablename, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ActionVariable`
- **Error**: `SdkException<GetUserVariableError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetUserVariablesList
- **HTTP**: `GET /user/actions/variables` (Server1 (gitea))
- **Signature**: `GetUserVariablesList(int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<ActionVariable>`
- **Error**: `SdkException<GetUserVariablesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetUserWorkflowJobs
- **HTTP**: `GET /user/actions/jobs` (Server1 (gitea))
- **Signature**: `GetUserWorkflowJobs(string? status, int? page, int? limit, string? sort, string? order, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`status` … `order`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `status` ← `status`, `page` ← `page`, `limit` ← `limit`, `sort` ← `sort`, `order` ← `order`
- **Returns**: `ActionWorkflowJobsResponse`
- **Error**: `SdkException<GetUserWorkflowJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetUserWorkflowRuns
- **HTTP**: `GET /user/actions/runs` (Server1 (gitea))
- **Signature**: `GetUserWorkflowRuns(string? @event, string? branch, string? status, string? actor, string? headSha, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`@event` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `branch` ← `branch`, `status` ← `status`, `actor` ← `actor`, `head_sha` ← `headSha`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `ActionWorkflowRunsResponse`
- **Error**: `SdkException<GetUserWorkflowRunsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetVerificationToken
- **HTTP**: `GET /user/gpg_key_token` (Server1 (gitea))
- **Signature**: `GetVerificationToken(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `string`
- **Error**: `SdkException<GetVerificationTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateUserRunner
- **HTTP**: `PATCH /user/actions/runners/{runner_id}` (Server1 (gitea))
- **Signature**: `UpdateUserRunner(string runnerId, EditActionRunnerOptionRepresentsTheEditableFieldsForARunner? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ActionRunner`
- **Error**: `SdkException<UpdateUserRunnerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateUserSecret
- **HTTP**: `PUT /user/actions/secrets/{secretname}` (Server1 (gitea))
- **Signature**: `UpdateUserSecret(string secretname, CreateOrUpdateSecretOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateUserSecretError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateUserSettings
- **HTTP**: `PATCH /user/settings` (Server1 (gitea))
- **Signature**: `UpdateUserSettings(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<UserSettings>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateUserVariable
- **HTTP**: `PUT /user/actions/variables/{variablename}` (Server1 (gitea))
- **Signature**: `UpdateUserVariable(string variablename, UpdateVariableOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateUserVariableError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserAddEmail
- **HTTP**: `POST /user/emails` (Server1 (gitea))
- **Signature**: `UserAddEmail(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Email>`
- **Error**: `SdkException<UserAddEmailError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserBlockUser
- **HTTP**: `PUT /user/blocks/{username}` (Server1 (gitea))
- **Signature**: `UserBlockUser(string username, string? note, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `note` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `note` ← `note`
- **Returns**: `void` (Task)
- **Error**: `SdkException<UserBlockUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserCheckFollowing
- **HTTP**: `GET /users/{username}/following/{target}` (Server1 (gitea))
- **Signature**: `UserCheckFollowing(string username, string target, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UserCheckFollowingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserCheckUserBlock
- **HTTP**: `GET /user/blocks/{username}` (Server1 (gitea))
- **Signature**: `UserCheckUserBlock(string username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UserCheckUserBlockError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserCreateHook
- **HTTP**: `POST /user/hooks` (Server1 (gitea))
- **Signature**: `UserCreateHook(CreateHookOption body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Hook`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UserCreateOauth2Application
- **HTTP**: `POST /user/applications/oauth2` (Server1 (gitea))
- **Signature**: `UserCreateOauth2Application(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Oauth2ApplicationRepresentsAnOauth2Application`
- **Error**: `SdkException<UserCreateOauth2ApplicationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserCreateRunnerRegistrationToken
- **HTTP**: `POST /user/actions/runners/registration-token` (Server1 (gitea))
- **Signature**: `UserCreateRunnerRegistrationToken(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UserCreateToken
- **HTTP**: `POST /users/{username}/tokens` (Server1 (gitea))
- **Signature**: `UserCreateToken(string username, CreateAccessTokenOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AccessTokenRepresentsAnApiAccessToken`
- **Error**: `SdkException<UserCreateTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserCurrentCheckFollowing
- **HTTP**: `GET /user/following/{username}` (Server1 (gitea))
- **Signature**: `UserCurrentCheckFollowing(string username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UserCurrentCheckFollowingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserCurrentCheckStarring
- **HTTP**: `GET /user/starred/{owner}/{repo}` (Server1 (gitea))
- **Signature**: `UserCurrentCheckStarring(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UserCurrentCheckStarringError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserCurrentDeleteFollow
- **HTTP**: `DELETE /user/following/{username}` (Server1 (gitea))
- **Signature**: `UserCurrentDeleteFollow(string username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UserCurrentDeleteFollowError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserCurrentDeleteGpgkey
- **HTTP**: `DELETE /user/gpg_keys/{id}` (Server1 (gitea))
- **Signature**: `UserCurrentDeleteGpgkey(long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UserCurrentDeleteGpgkeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserCurrentDeleteKey
- **HTTP**: `DELETE /user/keys/{id}` (Server1 (gitea))
- **Signature**: `UserCurrentDeleteKey(long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UserCurrentDeleteKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserCurrentDeleteStar
- **HTTP**: `DELETE /user/starred/{owner}/{repo}` (Server1 (gitea))
- **Signature**: `UserCurrentDeleteStar(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UserCurrentDeleteStarError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserCurrentGetGpgkey
- **HTTP**: `GET /user/gpg_keys/{id}` (Server1 (gitea))
- **Signature**: `UserCurrentGetGpgkey(long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Gpgkey`
- **Error**: `SdkException<UserCurrentGetGpgkeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserCurrentGetKey
- **HTTP**: `GET /user/keys/{id}` (Server1 (gitea))
- **Signature**: `UserCurrentGetKey(long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PublicKey`
- **Error**: `SdkException<UserCurrentGetKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserCurrentListFollowers
- **HTTP**: `GET /user/followers` (Server1 (gitea))
- **Signature**: `UserCurrentListFollowers(int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<User>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UserCurrentListFollowing
- **HTTP**: `GET /user/following` (Server1 (gitea))
- **Signature**: `UserCurrentListFollowing(int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<User>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UserCurrentListGpgkeys
- **HTTP**: `GET /user/gpg_keys` (Server1 (gitea))
- **Signature**: `UserCurrentListGpgkeys(int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Gpgkey>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UserCurrentListKeys
- **HTTP**: `GET /user/keys` (Server1 (gitea))
- **Signature**: `UserCurrentListKeys(string? fingerprint, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fingerprint` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `fingerprint` ← `fingerprint`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<PublicKey>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UserCurrentListRepos
- **HTTP**: `GET /user/repos` (Server1 (gitea))
- **Signature**: `UserCurrentListRepos(int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Repository>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UserCurrentListStarred
- **HTTP**: `GET /user/starred` (Server1 (gitea))
- **Signature**: `UserCurrentListStarred(int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Repository>`
- **Error**: `SdkException<UserCurrentListStarredError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UserCurrentListSubscriptions
- **HTTP**: `GET /user/subscriptions` (Server1 (gitea))
- **Signature**: `UserCurrentListSubscriptions(int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Repository>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UserCurrentPostGpgkey
- **HTTP**: `POST /user/gpg_keys` (Server1 (gitea))
- **Signature**: `UserCurrentPostGpgkey(CreateGpgkeyOption? form, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `form` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Gpgkey`
- **Error**: `SdkException<UserCurrentPostGpgkeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserCurrentPostKey
- **HTTP**: `POST /user/keys` (Server1 (gitea))
- **Signature**: `UserCurrentPostKey(CreateKeyOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PublicKey`
- **Error**: `SdkException<UserCurrentPostKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserCurrentPutFollow
- **HTTP**: `PUT /user/following/{username}` (Server1 (gitea))
- **Signature**: `UserCurrentPutFollow(string username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UserCurrentPutFollowError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserCurrentPutStar
- **HTTP**: `PUT /user/starred/{owner}/{repo}` (Server1 (gitea))
- **Signature**: `UserCurrentPutStar(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UserCurrentPutStarError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserCurrentTrackedTimes
- **HTTP**: `GET /user/times` (Server1 (gitea))
- **Signature**: `UserCurrentTrackedTimes(int? page, int? limit, DateTimeOffset? since, DateTimeOffset? before, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`page` … `before`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`, `since` ← `since`, `before` ← `before`
- **Returns**: `IReadOnlyList<TrackedTime>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UserDeleteAccessToken
- **HTTP**: `DELETE /users/{username}/tokens/{token}` (Server1 (gitea))
- **Signature**: `UserDeleteAccessToken(string username, string token, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UserDeleteAccessTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserDeleteAvatar
- **HTTP**: `DELETE /user/avatar` (Server1 (gitea))
- **Signature**: `UserDeleteAvatar(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UserDeleteEmail
- **HTTP**: `DELETE /user/emails` (Server1 (gitea))
- **Signature**: `UserDeleteEmail(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UserDeleteEmailError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserDeleteHook
- **HTTP**: `DELETE /user/hooks/{id}` (Server1 (gitea))
- **Signature**: `UserDeleteHook(long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UserDeleteOauth2Application
- **HTTP**: `DELETE /user/applications/oauth2/{id}` (Server1 (gitea))
- **Signature**: `UserDeleteOauth2Application(long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UserDeleteOauth2ApplicationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserEditHook
- **HTTP**: `PATCH /user/hooks/{id}` (Server1 (gitea))
- **Signature**: `UserEditHook(long id, EditHookOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Hook`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UserGet
- **HTTP**: `GET /users/{username}` (Server1 (gitea))
- **Signature**: `UserGet(string username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `User`
- **Error**: `SdkException<UserGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserGetCurrent
- **HTTP**: `GET /user` (Server1 (gitea))
- **Signature**: `UserGetCurrent(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `User`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UserGetHeatmapData
- **HTTP**: `GET /users/{username}/heatmap` (Server1 (gitea))
- **Signature**: `UserGetHeatmapData(string username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<UserHeatmapData>`
- **Error**: `SdkException<UserGetHeatmapDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserGetHook
- **HTTP**: `GET /user/hooks/{id}` (Server1 (gitea))
- **Signature**: `UserGetHook(long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Hook`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UserGetOauth2Application
- **HTTP**: `GET /user/applications/oauth2/{id}` (Server1 (gitea))
- **Signature**: `UserGetOauth2Application(long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Oauth2ApplicationRepresentsAnOauth2Application`
- **Error**: `SdkException<UserGetOauth2ApplicationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserGetOauth2Application2
- **HTTP**: `GET /user/applications/oauth2` (Server1 (gitea))
- **Signature**: `UserGetOauth2Application2(int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Oauth2ApplicationRepresentsAnOauth2Application>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UserGetStopWatches
- **HTTP**: `GET /user/stopwatches` (Server1 (gitea))
- **Signature**: `UserGetStopWatches(int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<StopWatch>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UserGetTokens
- **HTTP**: `GET /users/{username}/tokens` (Server1 (gitea))
- **Signature**: `UserGetTokens(string username, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<AccessTokenRepresentsAnApiAccessToken>`
- **Error**: `SdkException<UserGetTokensError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UserListActivityFeeds
- **HTTP**: `GET /users/{username}/activities/feeds` (Server1 (gitea))
- **Signature**: `UserListActivityFeeds(string username, bool? onlyPerformedBy, DateTimeOffset? date, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`onlyPerformedBy` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `only-performed-by` ← `onlyPerformedBy`, `date` ← `date`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Activity>`
- **Error**: `SdkException<UserListActivityFeedsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UserListBlocks
- **HTTP**: `GET /user/blocks` (Server1 (gitea))
- **Signature**: `UserListBlocks(int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<User>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UserListEmails
- **HTTP**: `GET /user/emails` (Server1 (gitea))
- **Signature**: `UserListEmails(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Email>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UserListFollowers
- **HTTP**: `GET /users/{username}/followers` (Server1 (gitea))
- **Signature**: `UserListFollowers(string username, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<User>`
- **Error**: `SdkException<UserListFollowersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UserListFollowing
- **HTTP**: `GET /users/{username}/following` (Server1 (gitea))
- **Signature**: `UserListFollowing(string username, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<User>`
- **Error**: `SdkException<UserListFollowingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UserListGpgkeys
- **HTTP**: `GET /users/{username}/gpg_keys` (Server1 (gitea))
- **Signature**: `UserListGpgkeys(string username, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Gpgkey>`
- **Error**: `SdkException<UserListGpgkeysError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UserListHooks
- **HTTP**: `GET /user/hooks` (Server1 (gitea))
- **Signature**: `UserListHooks(int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Hook>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UserListKeys
- **HTTP**: `GET /users/{username}/keys` (Server1 (gitea))
- **Signature**: `UserListKeys(string username, string? fingerprint, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fingerprint` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `fingerprint` ← `fingerprint`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<PublicKey>`
- **Error**: `SdkException<UserListKeysError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UserListRepos
- **HTTP**: `GET /users/{username}/repos` (Server1 (gitea))
- **Signature**: `UserListRepos(string username, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Repository>`
- **Error**: `SdkException<UserListReposError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UserListStarred
- **HTTP**: `GET /users/{username}/starred` (Server1 (gitea))
- **Signature**: `UserListStarred(string username, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Repository>`
- **Error**: `SdkException<UserListStarredError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UserListSubscriptions
- **HTTP**: `GET /users/{username}/subscriptions` (Server1 (gitea))
- **Signature**: `UserListSubscriptions(string username, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Repository>`
- **Error**: `SdkException<UserListSubscriptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UserListTeams
- **HTTP**: `GET /user/teams` (Server1 (gitea))
- **Signature**: `UserListTeams(int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Team>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UserSearch
- **HTTP**: `GET /users/search` (Server1 (gitea))
- **Signature**: `UserSearch(string? q, long? uid, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`q` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `q` ← `q`, `uid` ← `uid`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `UserSearchResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UserUnblockUser
- **HTTP**: `DELETE /user/blocks/{username}` (Server1 (gitea))
- **Signature**: `UserUnblockUser(string username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UserUnblockUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserUpdateAvatar
- **HTTP**: `POST /user/avatar` (Server1 (gitea))
- **Signature**: `UserUpdateAvatar(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UserUpdateOauth2Application
- **HTTP**: `PATCH /user/applications/oauth2/{id}` (Server1 (gitea))
- **Signature**: `UserUpdateOauth2Application(long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Oauth2ApplicationRepresentsAnOauth2Application`
- **Error**: `SdkException<UserUpdateOauth2ApplicationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserVerifyGpgkey
- **HTTP**: `POST /user/gpg_key_verify` (Server1 (gitea))
- **Signature**: `UserVerifyGpgkey(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Gpgkey`
- **Error**: `SdkException<UserVerifyGpgkeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
