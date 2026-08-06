# RepositoryApi — operations

Accessor: `client.RepositoryApi` · Source: `Api/RepositoryApi.cs` · 202 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ActionsDisableWorkflow
- **HTTP**: `PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable` (Server1)
- **Signature**: `ActionsDisableWorkflow(string owner, string repo, string workflowId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ActionsDisableWorkflowError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ActionsDispatchWorkflow
- **HTTP**: `POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches` (Server1)
- **Signature**: `ActionsDispatchWorkflow(string owner, string repo, string workflowId, bool? returnRunDetails, long? scopedWorkflowSourceRepoId, CreateActionWorkflowDispatch? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `returnRunDetails` — nullable, no default → **must pass explicitly**
  - `scopedWorkflowSourceRepoId` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `return_run_details` ← `returnRunDetails`, `scoped_workflow_source_repo_id` ← `scopedWorkflowSourceRepoId`
- **Returns**: `RunDetails`
- **Error**: `SdkException<ActionsDispatchWorkflowError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ActionsEnableWorkflow
- **HTTP**: `PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable` (Server1)
- **Signature**: `ActionsEnableWorkflow(string owner, string repo, string workflowId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ActionsEnableWorkflowError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404, 409, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ActionsGetWorkflow
- **HTTP**: `GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}` (Server1)
- **Signature**: `ActionsGetWorkflow(string owner, string repo, string workflowId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ActionWorkflow`
- **Error**: `SdkException<ActionsGetWorkflowError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ActionsListRepositoryWorkflows
- **HTTP**: `GET /repos/{owner}/{repo}/actions/workflows` (Server1)
- **Signature**: `ActionsListRepositoryWorkflows(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ActionWorkflowResponse`
- **Error**: `SdkException<ActionsListRepositoryWorkflowsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ActionsListWorkflowRuns
- **HTTP**: `GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs` (Server1)
- **Signature**: `ActionsListWorkflowRuns(string owner, string repo, string workflowId, string? @event, string? branch, string? status, string? actor, string? headSha, bool? excludePullRequests, long? scopedWorkflowSourceRepoId, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`@event` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `branch` ← `branch`, `status` ← `status`, `actor` ← `actor`, `head_sha` ← `headSha`, `exclude_pull_requests` ← `excludePullRequests`, `scoped_workflow_source_repo_id` ← `scopedWorkflowSourceRepoId`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `ActionWorkflowRunsResponse`
- **Error**: `SdkException<ActionsListWorkflowRunsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetAnnotatedTag
- **HTTP**: `GET /repos/{owner}/{repo}/git/tags/{sha}` (Server1)
- **Signature**: `GetAnnotatedTag(string owner, string repo, string sha, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AnnotatedTag`
- **Error**: `SdkException<GetAnnotatedTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBlob
- **HTTP**: `GET /repos/{owner}/{repo}/git/blobs/{sha}` (Server1)
- **Signature**: `GetBlob(string owner, string repo, string sha, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GitBlobResponse`
- **Error**: `SdkException<GetBlobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetTree
- **HTTP**: `GET /repos/{owner}/{repo}/git/trees/{sha}` (Server1)
- **Signature**: `GetTree(string owner, string repo, string sha, bool? recursive, int? page, int? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recursive` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `recursive` ← `recursive`, `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `GitTreeResponse`
- **Error**: `SdkException<GetTreeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetWorkflowRun
- **HTTP**: `GET /repos/{owner}/{repo}/actions/runs/{run}` (Server1)
- **Signature**: `GetWorkflowRun(string owner, string repo, int run, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ActionWorkflowRun`
- **Error**: `SdkException<GetWorkflowRunError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListActionTasks
- **HTTP**: `GET /repos/{owner}/{repo}/actions/tasks` (Server1)
- **Signature**: `ListActionTasks(string owner, string repo, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `ActionTaskResponse`
- **Error**: `SdkException<ListActionTasksError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404, 409, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### AcceptRepoTransfer
- **HTTP**: `POST /repos/{owner}/{repo}/transfer/accept` (Server1)
- **Signature**: `AcceptRepoTransfer(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Repository`
- **Error**: `SdkException<AcceptRepoTransferError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateCurrentUserRepo
- **HTTP**: `POST /user/repos` (Server1)
- **Signature**: `CreateCurrentUserRepo(CreateRepoOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Repository`
- **Error**: `SdkException<CreateCurrentUserRepoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 409, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateFork
- **HTTP**: `POST /repos/{owner}/{repo}/forks` (Server1)
- **Signature**: `CreateFork(string owner, string repo, CreateForkOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Repository`
- **Error**: `SdkException<CreateForkError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 409, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateRepoVariable
- **HTTP**: `POST /repos/{owner}/{repo}/actions/variables/{variablename}` (Server1)
- **Signature**: `CreateRepoVariable(string owner, string repo, string variablename, CreateVariableOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateRepoVariableError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteActionRun
- **HTTP**: `DELETE /repos/{owner}/{repo}/actions/runs/{run}` (Server1)
- **Signature**: `DeleteActionRun(string owner, string repo, int run, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteActionRunError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteArtifact
- **HTTP**: `DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}` (Server1)
- **Signature**: `DeleteArtifact(string owner, string repo, string artifactId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteArtifactError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteRepoRunner
- **HTTP**: `DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}` (Server1)
- **Signature**: `DeleteRepoRunner(string owner, string repo, string runnerId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteRepoRunnerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteRepoSecret
- **HTTP**: `DELETE /repos/{owner}/{repo}/actions/secrets/{secretname}` (Server1)
- **Signature**: `DeleteRepoSecret(string owner, string repo, string secretname, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteRepoSecretError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteRepoVariable
- **HTTP**: `DELETE /repos/{owner}/{repo}/actions/variables/{variablename}` (Server1)
- **Signature**: `DeleteRepoVariable(string owner, string repo, string variablename, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ActionVariable`
- **Error**: `SdkException<DeleteRepoVariableError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DownloadActionsRunJobLogs
- **HTTP**: `GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs` (Server1)
- **Signature**: `DownloadActionsRunJobLogs(string owner, string repo, int jobId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DownloadActionsRunJobLogsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DownloadArtifact
- **HTTP**: `GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/zip` (Server1)
- **Signature**: `DownloadArtifact(string owner, string repo, string artifactId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DownloadArtifactError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GenerateRepo
- **HTTP**: `POST /repos/{template_owner}/{template_repo}/generate` (Server1)
- **Signature**: `GenerateRepo(string templateOwner, string templateRepo, GenerateRepoOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Repository`
- **Error**: `SdkException<GenerateRepoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 409, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetArtifact
- **HTTP**: `GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}` (Server1)
- **Signature**: `GetArtifact(string owner, string repo, string artifactId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ActionArtifact`
- **Error**: `SdkException<GetArtifactError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetArtifacts
- **HTTP**: `GET /repos/{owner}/{repo}/actions/artifacts` (Server1)
- **Signature**: `GetArtifacts(string owner, string repo, string? name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `name` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`
- **Returns**: `ActionArtifactsResponse`
- **Error**: `SdkException<GetArtifactsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetArtifactsOfRun
- **HTTP**: `GET /repos/{owner}/{repo}/actions/runs/{run}/artifacts` (Server1)
- **Signature**: `GetArtifactsOfRun(string owner, string repo, int run, string? name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `name` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`
- **Returns**: `ActionArtifactsResponse`
- **Error**: `SdkException<GetArtifactsOfRunError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetRepoRunner
- **HTTP**: `GET /repos/{owner}/{repo}/actions/runners/{runner_id}` (Server1)
- **Signature**: `GetRepoRunner(string owner, string repo, string runnerId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ActionRunner`
- **Error**: `SdkException<GetRepoRunnerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetRepoRunners
- **HTTP**: `GET /repos/{owner}/{repo}/actions/runners` (Server1)
- **Signature**: `GetRepoRunners(string owner, string repo, bool? disabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `disabled` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `disabled` ← `disabled`
- **Returns**: `ActionRunnersResponse`
- **Error**: `SdkException<GetRepoRunnersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetRepoVariable
- **HTTP**: `GET /repos/{owner}/{repo}/actions/variables/{variablename}` (Server1)
- **Signature**: `GetRepoVariable(string owner, string repo, string variablename, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ActionVariable`
- **Error**: `SdkException<GetRepoVariableError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetRepoVariablesList
- **HTTP**: `GET /repos/{owner}/{repo}/actions/variables` (Server1)
- **Signature**: `GetRepoVariablesList(string owner, string repo, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<ActionVariable>`
- **Error**: `SdkException<GetRepoVariablesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetWorkflowJob
- **HTTP**: `GET /repos/{owner}/{repo}/actions/jobs/{job_id}` (Server1)
- **Signature**: `GetWorkflowJob(string owner, string repo, string jobId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ActionWorkflowJob`
- **Error**: `SdkException<GetWorkflowJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetWorkflowRunAttempt
- **HTTP**: `GET /repos/{owner}/{repo}/actions/runs/{run}/attempts/{attempt}` (Server1)
- **Signature**: `GetWorkflowRunAttempt(string owner, string repo, int run, int attempt, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ActionWorkflowRun`
- **Error**: `SdkException<GetWorkflowRunAttemptError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetWorkflowRuns
- **HTTP**: `GET /repos/{owner}/{repo}/actions/runs` (Server1)
- **Signature**: `GetWorkflowRuns(string owner, string repo, string? @event, string? branch, string? status, string? actor, string? headSha, bool? excludePullRequests, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`@event` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `branch` ← `branch`, `status` ← `status`, `actor` ← `actor`, `head_sha` ← `headSha`, `exclude_pull_requests` ← `excludePullRequests`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `ActionWorkflowRunsResponse`
- **Error**: `SdkException<GetWorkflowRunsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListForks
- **HTTP**: `GET /repos/{owner}/{repo}/forks` (Server1)
- **Signature**: `ListForks(string owner, string repo, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Repository>`
- **Error**: `SdkException<ListForksError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListWorkflowJobs
- **HTTP**: `GET /repos/{owner}/{repo}/actions/jobs` (Server1)
- **Signature**: `ListWorkflowJobs(string owner, string repo, string? status, int? page, int? limit, string? sort, string? order, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`status` … `order`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `status` ← `status`, `page` ← `page`, `limit` ← `limit`, `sort` ← `sort`, `order` ← `order`
- **Returns**: `ActionWorkflowJobsResponse`
- **Error**: `SdkException<ListWorkflowJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListWorkflowRunAttemptJobs
- **HTTP**: `GET /repos/{owner}/{repo}/actions/runs/{run}/attempts/{attempt}/jobs` (Server1)
- **Signature**: `ListWorkflowRunAttemptJobs(string owner, string repo, int run, int attempt, string? status, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `status` ← `status`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `ActionWorkflowJobsResponse`
- **Error**: `SdkException<ListWorkflowRunAttemptJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListWorkflowRunJobs
- **HTTP**: `GET /repos/{owner}/{repo}/actions/runs/{run}/jobs` (Server1)
- **Signature**: `ListWorkflowRunJobs(string owner, string repo, int run, string? status, int? page, int? limit, string? sort, string? order, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`status` … `order`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `status` ← `status`, `page` ← `page`, `limit` ← `limit`, `sort` ← `sort`, `order` ← `order`
- **Returns**: `ActionWorkflowJobsResponse`
- **Error**: `SdkException<ListWorkflowRunJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RejectRepoTransfer
- **HTTP**: `POST /repos/{owner}/{repo}/transfer/reject` (Server1)
- **Signature**: `RejectRepoTransfer(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Repository`
- **Error**: `SdkException<RejectRepoTransferError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoAddCollaborator
- **HTTP**: `PUT /repos/{owner}/{repo}/collaborators/{collaborator}` (Server1)
- **Signature**: `RepoAddCollaborator(string owner, string repo, string collaborator, AddCollaboratorOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoAddCollaboratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoAddPushMirror
- **HTTP**: `POST /repos/{owner}/{repo}/push_mirrors` (Server1)
- **Signature**: `RepoAddPushMirror(string owner, string repo, CreatePushMirrorOptionRepresentsNeedInformationToCreateAPushMirrorOfARepository? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PushMirror`
- **Error**: `SdkException<RepoAddPushMirrorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoAddTeam
- **HTTP**: `PUT /repos/{owner}/{repo}/teams/{team}` (Server1)
- **Signature**: `RepoAddTeam(string owner, string repo, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoAddTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 405, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoAddTopic
- **HTTP**: `PUT /repos/{owner}/{repo}/topics/{topic}` (Server1)
- **Signature**: `RepoAddTopic(string owner, string repo, string topic, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoAddTopicError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoApplyDiffPatch
- **HTTP**: `POST /repos/{owner}/{repo}/diffpatch` (Server1)
- **Signature**: `RepoApplyDiffPatch(string owner, string repo, ApplyDiffPatchFileOptions body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FileResponse`
- **Error**: `SdkException<RepoApplyDiffPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoCancelScheduledAutoMerge
- **HTTP**: `DELETE /repos/{owner}/{repo}/pulls/{index}/merge` (Server1)
- **Signature**: `RepoCancelScheduledAutoMerge(string owner, string repo, long index, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoCancelScheduledAutoMergeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoChangeFiles
- **HTTP**: `POST /repos/{owner}/{repo}/contents` (Server1)
- **Signature**: `RepoChangeFiles(string owner, string repo, ChangeFilesOptions body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FilesResponse`
- **Error**: `SdkException<RepoChangeFilesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 422, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoCheckAssignee
- **HTTP**: `GET /repos/{owner}/{repo}/assignees/{assignee}` (Server1)
- **Signature**: `RepoCheckAssignee(string owner, string repo, string assignee, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoCheckAssigneeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoCheckCollaborator
- **HTTP**: `GET /repos/{owner}/{repo}/collaborators/{collaborator}` (Server1)
- **Signature**: `RepoCheckCollaborator(string owner, string repo, string collaborator, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoCheckCollaboratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoCheckTeam
- **HTTP**: `GET /repos/{owner}/{repo}/teams/{team}` (Server1)
- **Signature**: `RepoCheckTeam(string owner, string repo, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Team`
- **Error**: `SdkException<RepoCheckTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 405] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoCompareDiff
- **HTTP**: `GET /repos/{owner}/{repo}/compare/{basehead}` (Server1)
- **Signature**: `RepoCompareDiff(string owner, string repo, string basehead, Output? output, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `output` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `output` ← `output`
- **Returns**: `CompareRepresentsAComparisonBetweenTwoCommits`
- **Error**: `SdkException<RepoCompareDiffError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoCreateBranch
- **HTTP**: `POST /repos/{owner}/{repo}/branches` (Server1)
- **Signature**: `RepoCreateBranch(string owner, string repo, CreateBranchRepoOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Branch`
- **Error**: `SdkException<RepoCreateBranchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 409, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoCreateBranchProtection
- **HTTP**: `POST /repos/{owner}/{repo}/branch_protections` (Server1)
- **Signature**: `RepoCreateBranchProtection(string owner, string repo, CreateBranchProtectionOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `BranchProtection`
- **Error**: `SdkException<RepoCreateBranchProtectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 422, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoCreateFile
- **HTTP**: `POST /repos/{owner}/{repo}/contents/{filepath}` (Server1)
- **Signature**: `RepoCreateFile(string owner, string repo, string filepath, CreateFileOptions body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FileResponse`
- **Error**: `SdkException<RepoCreateFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 422, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoCreateHook
- **HTTP**: `POST /repos/{owner}/{repo}/hooks` (Server1)
- **Signature**: `RepoCreateHook(string owner, string repo, CreateHookOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Hook`
- **Error**: `SdkException<RepoCreateHookError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoCreateKey
- **HTTP**: `POST /repos/{owner}/{repo}/keys` (Server1)
- **Signature**: `RepoCreateKey(string owner, string repo, CreateKeyOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `DeployKey`
- **Error**: `SdkException<RepoCreateKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoCreatePullRequest
- **HTTP**: `POST /repos/{owner}/{repo}/pulls` (Server1)
- **Signature**: `RepoCreatePullRequest(string owner, string repo, CreatePullRequestOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PullRequest`
- **Error**: `SdkException<RepoCreatePullRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 409, 422, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoCreatePullReview
- **HTTP**: `POST /repos/{owner}/{repo}/pulls/{index}/reviews` (Server1)
- **Signature**: `RepoCreatePullReview(string owner, string repo, long index, CreatePullReviewOptions body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PullReview`
- **Error**: `SdkException<RepoCreatePullReviewError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoCreatePullReviewCommentReply
- **HTTP**: `POST /repos/{owner}/{repo}/pulls/{index}/comments/{id}/replies` (Server1)
- **Signature**: `RepoCreatePullReviewCommentReply(string owner, string repo, long index, long id, CreatePullReviewCommentReplyOptions body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PullReviewComment`
- **Error**: `SdkException<RepoCreatePullReviewCommentReplyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoCreatePullReviewRequests
- **HTTP**: `POST /repos/{owner}/{repo}/pulls/{index}/requested_reviewers` (Server1)
- **Signature**: `RepoCreatePullReviewRequests(string owner, string repo, long index, PullReviewRequestOptions body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PullReview>`
- **Error**: `SdkException<RepoCreatePullReviewRequestsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoCreateRelease
- **HTTP**: `POST /repos/{owner}/{repo}/releases` (Server1)
- **Signature**: `RepoCreateRelease(string owner, string repo, CreateReleaseOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Release`
- **Error**: `SdkException<RepoCreateReleaseError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 409, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoCreateReleaseAttachment
- **HTTP**: `POST /repos/{owner}/{repo}/releases/{id}/assets` (Server1)
- **Signature**: `RepoCreateReleaseAttachment(string owner, string repo, long id, string? name, BinaryContent? attachment, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `name` — nullable, no default → **must pass explicitly**
  - `attachment` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`
- **Returns**: `Attachment`
- **Error**: `SdkException<RepoCreateReleaseAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404, 413] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoCreateRunnerRegistrationToken
- **HTTP**: `POST /repos/{owner}/{repo}/actions/runners/registration-token` (Server1)
- **Signature**: `RepoCreateRunnerRegistrationToken(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RepoCreateStatus
- **HTTP**: `POST /repos/{owner}/{repo}/statuses/{sha}` (Server1)
- **Signature**: `RepoCreateStatus(string owner, string repo, string sha, CreateStatusOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CommitStatus`
- **Error**: `SdkException<RepoCreateStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoCreateTag
- **HTTP**: `POST /repos/{owner}/{repo}/tags` (Server1)
- **Signature**: `RepoCreateTag(string owner, string repo, CreateTagOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Tag`
- **Error**: `SdkException<RepoCreateTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 405, 409, 422, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoCreateTagProtection
- **HTTP**: `POST /repos/{owner}/{repo}/tag_protections` (Server1)
- **Signature**: `RepoCreateTagProtection(string owner, string repo, CreateTagProtectionOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TagProtection`
- **Error**: `SdkException<RepoCreateTagProtectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 422, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoCreateWikiPage
- **HTTP**: `POST /repos/{owner}/{repo}/wiki/new` (Server1)
- **Signature**: `RepoCreateWikiPage(string owner, string repo, CreateWikiPageOptions? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WikiPage`
- **Error**: `SdkException<RepoCreateWikiPageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoDelete
- **HTTP**: `DELETE /repos/{owner}/{repo}` (Server1)
- **Signature**: `RepoDelete(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoDeleteAvatar
- **HTTP**: `DELETE /repos/{owner}/{repo}/avatar` (Server1)
- **Signature**: `RepoDeleteAvatar(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoDeleteAvatarError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoDeleteBranch
- **HTTP**: `DELETE /repos/{owner}/{repo}/branches/{branch}` (Server1)
- **Signature**: `RepoDeleteBranch(string owner, string repo, string branch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoDeleteBranchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoDeleteBranchProtection
- **HTTP**: `DELETE /repos/{owner}/{repo}/branch_protections/{name}` (Server1)
- **Signature**: `RepoDeleteBranchProtection(string owner, string repo, string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoDeleteBranchProtectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoDeleteCollaborator
- **HTTP**: `DELETE /repos/{owner}/{repo}/collaborators/{collaborator}` (Server1)
- **Signature**: `RepoDeleteCollaborator(string owner, string repo, string collaborator, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoDeleteCollaboratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoDeleteFile
- **HTTP**: `DELETE /repos/{owner}/{repo}/contents/{filepath}` (Server1)
- **Signature**: `RepoDeleteFile(string owner, string repo, string filepath, DeleteFileOptions body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FileDeleteResponse`
- **Error**: `SdkException<RepoDeleteFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404, 422, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoDeleteGitHook
- **HTTP**: `DELETE /repos/{owner}/{repo}/hooks/git/{id}` (Server1)
- **Signature**: `RepoDeleteGitHook(string owner, string repo, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoDeleteGitHookError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoDeleteHook
- **HTTP**: `DELETE /repos/{owner}/{repo}/hooks/{id}` (Server1)
- **Signature**: `RepoDeleteHook(string owner, string repo, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoDeleteHookError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoDeleteKey
- **HTTP**: `DELETE /repos/{owner}/{repo}/keys/{id}` (Server1)
- **Signature**: `RepoDeleteKey(string owner, string repo, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoDeleteKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoDeletePullReview
- **HTTP**: `DELETE /repos/{owner}/{repo}/pulls/{index}/reviews/{id}` (Server1)
- **Signature**: `RepoDeletePullReview(string owner, string repo, long index, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoDeletePullReviewError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoDeletePullReviewRequests
- **HTTP**: `DELETE /repos/{owner}/{repo}/pulls/{index}/requested_reviewers` (Server1)
- **Signature**: `RepoDeletePullReviewRequests(string owner, string repo, long index, PullReviewRequestOptions body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoDeletePullReviewRequestsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoDeletePushMirror
- **HTTP**: `DELETE /repos/{owner}/{repo}/push_mirrors/{name}` (Server1)
- **Signature**: `RepoDeletePushMirror(string owner, string repo, string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoDeletePushMirrorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoDeleteRelease
- **HTTP**: `DELETE /repos/{owner}/{repo}/releases/{id}` (Server1)
- **Signature**: `RepoDeleteRelease(string owner, string repo, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoDeleteReleaseError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoDeleteReleaseAttachment
- **HTTP**: `DELETE /repos/{owner}/{repo}/releases/{id}/assets/{attachment_id}` (Server1)
- **Signature**: `RepoDeleteReleaseAttachment(string owner, string repo, long id, long attachmentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoDeleteReleaseAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoDeleteReleaseByTag
- **HTTP**: `DELETE /repos/{owner}/{repo}/releases/tags/{tag}` (Server1)
- **Signature**: `RepoDeleteReleaseByTag(string owner, string repo, string tag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoDeleteReleaseByTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoDeleteTag
- **HTTP**: `DELETE /repos/{owner}/{repo}/tags/{tag}` (Server1)
- **Signature**: `RepoDeleteTag(string owner, string repo, string tag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoDeleteTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 405, 409, 422, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoDeleteTagProtection
- **HTTP**: `DELETE /repos/{owner}/{repo}/tag_protections/{id}` (Server1)
- **Signature**: `RepoDeleteTagProtection(string owner, string repo, int id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoDeleteTagProtectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoDeleteTeam
- **HTTP**: `DELETE /repos/{owner}/{repo}/teams/{team}` (Server1)
- **Signature**: `RepoDeleteTeam(string owner, string repo, string team, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoDeleteTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 405, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoDeleteTopic
- **HTTP**: `DELETE /repos/{owner}/{repo}/topics/{topic}` (Server1)
- **Signature**: `RepoDeleteTopic(string owner, string repo, string topic, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoDeleteTopicError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoDeleteWikiPage
- **HTTP**: `DELETE /repos/{owner}/{repo}/wiki/page/{pageName}` (Server1)
- **Signature**: `RepoDeleteWikiPage(string owner, string repo, string pageName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoDeleteWikiPageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoDismissPullReview
- **HTTP**: `POST /repos/{owner}/{repo}/pulls/{index}/reviews/{id}/dismissals` (Server1)
- **Signature**: `RepoDismissPullReview(string owner, string repo, long index, long id, DismissPullReviewOptions body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PullReview`
- **Error**: `SdkException<RepoDismissPullReviewError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoDownloadCommitDiffOrPatch
- **HTTP**: `GET /repos/{owner}/{repo}/git/commits/{sha}.{diffType}` (Server1)
- **Signature**: `RepoDownloadCommitDiffOrPatch(string owner, string repo, string sha, DiffType diffType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `string`
- **Error**: `SdkException<RepoDownloadCommitDiffOrPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoDownloadPullDiffOrPatch
- **HTTP**: `GET /repos/{owner}/{repo}/pulls/{index}.{diffType}` (Server1)
- **Signature**: `RepoDownloadPullDiffOrPatch(string owner, string repo, long index, DiffType diffType, bool? binary, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `binary` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `binary` ← `binary`
- **Returns**: `string`
- **Error**: `SdkException<RepoDownloadPullDiffOrPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoEdit
- **HTTP**: `PATCH /repos/{owner}/{repo}` (Server1)
- **Signature**: `RepoEdit(string owner, string repo, EditRepoOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Repository`
- **Error**: `SdkException<RepoEditError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoEditBranchProtection
- **HTTP**: `PATCH /repos/{owner}/{repo}/branch_protections/{name}` (Server1)
- **Signature**: `RepoEditBranchProtection(string owner, string repo, string name, EditBranchProtectionOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `BranchProtection`
- **Error**: `SdkException<RepoEditBranchProtectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoEditGitHook
- **HTTP**: `PATCH /repos/{owner}/{repo}/hooks/git/{id}` (Server1)
- **Signature**: `RepoEditGitHook(string owner, string repo, string id, EditGitHookOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GitHook`
- **Error**: `SdkException<RepoEditGitHookError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoEditHook
- **HTTP**: `PATCH /repos/{owner}/{repo}/hooks/{id}` (Server1)
- **Signature**: `RepoEditHook(string owner, string repo, long id, EditHookOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Hook`
- **Error**: `SdkException<RepoEditHookError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoEditPullRequest
- **HTTP**: `PATCH /repos/{owner}/{repo}/pulls/{index}` (Server1)
- **Signature**: `RepoEditPullRequest(string owner, string repo, long index, EditPullRequestOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PullRequest`
- **Error**: `SdkException<RepoEditPullRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 409, 412, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoEditRelease
- **HTTP**: `PATCH /repos/{owner}/{repo}/releases/{id}` (Server1)
- **Signature**: `RepoEditRelease(string owner, string repo, long id, EditReleaseOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Release`
- **Error**: `SdkException<RepoEditReleaseError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoEditReleaseAttachment
- **HTTP**: `PATCH /repos/{owner}/{repo}/releases/{id}/assets/{attachment_id}` (Server1)
- **Signature**: `RepoEditReleaseAttachment(string owner, string repo, long id, long attachmentId, EditAttachmentOptions? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Attachment`
- **Error**: `SdkException<RepoEditReleaseAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoEditTagProtection
- **HTTP**: `PATCH /repos/{owner}/{repo}/tag_protections/{id}` (Server1)
- **Signature**: `RepoEditTagProtection(string owner, string repo, int id, EditTagProtectionOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TagProtection`
- **Error**: `SdkException<RepoEditTagProtectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoEditWikiPage
- **HTTP**: `PATCH /repos/{owner}/{repo}/wiki/page/{pageName}` (Server1)
- **Signature**: `RepoEditWikiPage(string owner, string repo, string pageName, CreateWikiPageOptions? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WikiPage`
- **Error**: `SdkException<RepoEditWikiPageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGet
- **HTTP**: `GET /repos/{owner}/{repo}` (Server1)
- **Signature**: `RepoGet(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Repository`
- **Error**: `SdkException<RepoGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetAllCommits
- **HTTP**: `GET /repos/{owner}/{repo}/commits` (Server1)
- **Signature**: `RepoGetAllCommits(string owner, string repo, string? sha, string? path, DateTimeOffset? since, DateTimeOffset? until, bool? stat, bool? verification, bool? files, int? page, int? limit, string? not, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`sha` … `not`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `sha` ← `sha`, `path` ← `path`, `since` ← `since`, `until` ← `until`, `stat` ← `stat`, `verification` ← `verification`, `files` ← `files`, `page` ← `page`, `limit` ← `limit`, `not` ← `not`
- **Returns**: `IReadOnlyList<CommitContainsInformationGeneratedFromAGitCommit>`
- **Error**: `SdkException<RepoGetAllCommitsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetApierrorModel(out ApierrorModel)` [409] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RepoGetArchive
- **HTTP**: `GET /repos/{owner}/{repo}/archive/{archive}` (Server1)
- **Signature**: `RepoGetArchive(string owner, string repo, string archive, IReadOnlyList<string>? path, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `path` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `path` ← `path`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoGetArchiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetAssignees
- **HTTP**: `GET /repos/{owner}/{repo}/assignees` (Server1)
- **Signature**: `RepoGetAssignees(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<User>`
- **Error**: `SdkException<RepoGetAssigneesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetBranch
- **HTTP**: `GET /repos/{owner}/{repo}/branches/{branch}` (Server1)
- **Signature**: `RepoGetBranch(string owner, string repo, string branch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Branch`
- **Error**: `SdkException<RepoGetBranchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetBranchProtection
- **HTTP**: `GET /repos/{owner}/{repo}/branch_protections/{name}` (Server1)
- **Signature**: `RepoGetBranchProtection(string owner, string repo, string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BranchProtection`
- **Error**: `SdkException<RepoGetBranchProtectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetById
- **HTTP**: `GET /repositories/{id}` (Server1)
- **Signature**: `RepoGetById(long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Repository`
- **Error**: `SdkException<RepoGetByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetCombinedStatusByRef
- **HTTP**: `GET /repos/{owner}/{repo}/commits/{ref}/status` (Server1)
- **Signature**: `RepoGetCombinedStatusByRef(string owner, string repo, string @ref, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `CombinedStatus`
- **Error**: `SdkException<RepoGetCombinedStatusByRefError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RepoGetCommitPullRequest
- **HTTP**: `GET /repos/{owner}/{repo}/commits/{sha}/pull` (Server1)
- **Signature**: `RepoGetCommitPullRequest(string owner, string repo, string sha, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PullRequest`
- **Error**: `SdkException<RepoGetCommitPullRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetContents
- **HTTP**: `GET /repos/{owner}/{repo}/contents/{filepath}` (Server1)
- **Signature**: `RepoGetContents(string owner, string repo, string filepath, string? @ref, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `@ref` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ContentsResponse`
- **Error**: `SdkException<RepoGetContentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetContentsExt
- **HTTP**: `GET /repos/{owner}/{repo}/contents-ext/{filepath}` (Server1)
- **Signature**: `RepoGetContentsExt(string owner, string repo, string filepath, string? @ref, string? includes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `@ref` — nullable, no default → **must pass explicitly**
  - `includes` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `includes` ← `includes`
- **Returns**: `ContentsExtResponse`
- **Error**: `SdkException<RepoGetContentsExtError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetContentsList
- **HTTP**: `GET /repos/{owner}/{repo}/contents` (Server1)
- **Signature**: `RepoGetContentsList(string owner, string repo, string? @ref, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `@ref` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ContentsResponse>`
- **Error**: `SdkException<RepoGetContentsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetEditorConfig
- **HTTP**: `GET /repos/{owner}/{repo}/editorconfig/{filepath}` (Server1)
- **Signature**: `RepoGetEditorConfig(string owner, string repo, string filepath, string? @ref, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `@ref` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoGetEditorConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetFileContents
- **HTTP**: `GET /repos/{owner}/{repo}/file-contents` (Server1)
- **Signature**: `RepoGetFileContents(string owner, string repo, string body, string? @ref, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `@ref` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `body` ← `body`
- **Returns**: `IReadOnlyList<ContentsResponse>`
- **Error**: `SdkException<RepoGetFileContentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetFileContentsPost
- **HTTP**: `POST /repos/{owner}/{repo}/file-contents` (Server1)
- **Signature**: `RepoGetFileContentsPost(string owner, string repo, string? @ref, GetFilesOptions body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `@ref` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ContentsResponse>`
- **Error**: `SdkException<RepoGetFileContentsPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetGitHook
- **HTTP**: `GET /repos/{owner}/{repo}/hooks/git/{id}` (Server1)
- **Signature**: `RepoGetGitHook(string owner, string repo, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GitHook`
- **Error**: `SdkException<RepoGetGitHookError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetHook
- **HTTP**: `GET /repos/{owner}/{repo}/hooks/{id}` (Server1)
- **Signature**: `RepoGetHook(string owner, string repo, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Hook`
- **Error**: `SdkException<RepoGetHookError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetIssueConfig
- **HTTP**: `GET /repos/{owner}/{repo}/issue_config` (Server1)
- **Signature**: `RepoGetIssueConfig(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IssueConfig`
- **Error**: `SdkException<RepoGetIssueConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetIssueTemplates
- **HTTP**: `GET /repos/{owner}/{repo}/issue_templates` (Server1)
- **Signature**: `RepoGetIssueTemplates(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<IssueTemplate>`
- **Error**: `SdkException<RepoGetIssueTemplatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetKey
- **HTTP**: `GET /repos/{owner}/{repo}/keys/{id}` (Server1)
- **Signature**: `RepoGetKey(string owner, string repo, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeployKey`
- **Error**: `SdkException<RepoGetKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetLanguages
- **HTTP**: `GET /repos/{owner}/{repo}/languages` (Server1)
- **Signature**: `RepoGetLanguages(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyDictionary<string, long>`
- **Error**: `SdkException<RepoGetLanguagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetLatestRelease
- **HTTP**: `GET /repos/{owner}/{repo}/releases/latest` (Server1)
- **Signature**: `RepoGetLatestRelease(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Release`
- **Error**: `SdkException<RepoGetLatestReleaseError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetLicenses
- **HTTP**: `GET /repos/{owner}/{repo}/licenses` (Server1)
- **Signature**: `RepoGetLicenses(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<string>`
- **Error**: `SdkException<RepoGetLicensesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetNote
- **HTTP**: `GET /repos/{owner}/{repo}/git/notes/{sha}` (Server1)
- **Signature**: `RepoGetNote(string owner, string repo, string sha, bool? verification, bool? files, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `verification` — nullable, no default → **must pass explicitly**
  - `files` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `verification` ← `verification`, `files` ← `files`
- **Returns**: `Note`
- **Error**: `SdkException<RepoGetNoteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetPullRequest
- **HTTP**: `GET /repos/{owner}/{repo}/pulls/{index}` (Server1)
- **Signature**: `RepoGetPullRequest(string owner, string repo, long index, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PullRequest`
- **Error**: `SdkException<RepoGetPullRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetPullRequestByBaseHead
- **HTTP**: `GET /repos/{owner}/{repo}/pulls/{base}/{head}` (Server1)
- **Signature**: `RepoGetPullRequestByBaseHead(string owner, string repo, string @base, string head, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PullRequest`
- **Error**: `SdkException<RepoGetPullRequestByBaseHeadError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetPullRequestCommits
- **HTTP**: `GET /repos/{owner}/{repo}/pulls/{index}/commits` (Server1)
- **Signature**: `RepoGetPullRequestCommits(string owner, string repo, long index, int? page, int? limit, bool? verification, bool? files, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`page` … `files`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`, `verification` ← `verification`, `files` ← `files`
- **Returns**: `IReadOnlyList<CommitContainsInformationGeneratedFromAGitCommit>`
- **Error**: `SdkException<RepoGetPullRequestCommitsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RepoGetPullRequestFiles
- **HTTP**: `GET /repos/{owner}/{repo}/pulls/{index}/files` (Server1)
- **Signature**: `RepoGetPullRequestFiles(string owner, string repo, long index, string? skipTo, Whitespace? whitespace, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`skipTo` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `skip-to` ← `skipTo`, `whitespace` ← `whitespace`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<ChangedFile>`
- **Error**: `SdkException<RepoGetPullRequestFilesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RepoGetPullReview
- **HTTP**: `GET /repos/{owner}/{repo}/pulls/{index}/reviews/{id}` (Server1)
- **Signature**: `RepoGetPullReview(string owner, string repo, long index, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PullReview`
- **Error**: `SdkException<RepoGetPullReviewError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetPullReviewComments
- **HTTP**: `GET /repos/{owner}/{repo}/pulls/{index}/reviews/{id}/comments` (Server1)
- **Signature**: `RepoGetPullReviewComments(string owner, string repo, long index, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PullReviewComment>`
- **Error**: `SdkException<RepoGetPullReviewCommentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetPushMirrorByRemoteName
- **HTTP**: `GET /repos/{owner}/{repo}/push_mirrors/{name}` (Server1)
- **Signature**: `RepoGetPushMirrorByRemoteName(string owner, string repo, string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PushMirror`
- **Error**: `SdkException<RepoGetPushMirrorByRemoteNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetRawFile
- **HTTP**: `GET /repos/{owner}/{repo}/raw/{filepath}` (Server1)
- **Signature**: `RepoGetRawFile(string owner, string repo, string filepath, string? @ref, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `@ref` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RepoGetRawFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetRawFileOrLfs
- **HTTP**: `GET /repos/{owner}/{repo}/media/{filepath}` (Server1)
- **Signature**: `RepoGetRawFileOrLfs(string owner, string repo, string filepath, string? @ref, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `@ref` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RepoGetRawFileOrLfsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetRelease
- **HTTP**: `GET /repos/{owner}/{repo}/releases/{id}` (Server1)
- **Signature**: `RepoGetRelease(string owner, string repo, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Release`
- **Error**: `SdkException<RepoGetReleaseError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetReleaseAttachment
- **HTTP**: `GET /repos/{owner}/{repo}/releases/{id}/assets/{attachment_id}` (Server1)
- **Signature**: `RepoGetReleaseAttachment(string owner, string repo, long id, long attachmentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Attachment`
- **Error**: `SdkException<RepoGetReleaseAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetReleaseByTag
- **HTTP**: `GET /repos/{owner}/{repo}/releases/tags/{tag}` (Server1)
- **Signature**: `RepoGetReleaseByTag(string owner, string repo, string tag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Release`
- **Error**: `SdkException<RepoGetReleaseByTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetRepoPermissions
- **HTTP**: `GET /repos/{owner}/{repo}/collaborators/{collaborator}/permission` (Server1)
- **Signature**: `RepoGetRepoPermissions(string owner, string repo, string collaborator, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RepoCollaboratorPermission`
- **Error**: `SdkException<RepoGetRepoPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetReviewers
- **HTTP**: `GET /repos/{owner}/{repo}/reviewers` (Server1)
- **Signature**: `RepoGetReviewers(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<User>`
- **Error**: `SdkException<RepoGetReviewersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetSingleCommit
- **HTTP**: `GET /repos/{owner}/{repo}/git/commits/{sha}` (Server1)
- **Signature**: `RepoGetSingleCommit(string owner, string repo, string sha, bool? stat, bool? verification, bool? files, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `stat` — nullable, no default → **must pass explicitly**
  - `verification` — nullable, no default → **must pass explicitly**
  - `files` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `stat` ← `stat`, `verification` ← `verification`, `files` ← `files`
- **Returns**: `CommitContainsInformationGeneratedFromAGitCommit`
- **Error**: `SdkException<RepoGetSingleCommitError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetTag
- **HTTP**: `GET /repos/{owner}/{repo}/tags/{tag}` (Server1)
- **Signature**: `RepoGetTag(string owner, string repo, string tag, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Tag`
- **Error**: `SdkException<RepoGetTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetTagProtection
- **HTTP**: `GET /repos/{owner}/{repo}/tag_protections/{id}` (Server1)
- **Signature**: `RepoGetTagProtection(string owner, string repo, int id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TagProtection`
- **Error**: `SdkException<RepoGetTagProtectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetWikiPage
- **HTTP**: `GET /repos/{owner}/{repo}/wiki/page/{pageName}` (Server1)
- **Signature**: `RepoGetWikiPage(string owner, string repo, string pageName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WikiPage`
- **Error**: `SdkException<RepoGetWikiPageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoGetWikiPageRevisions
- **HTTP**: `GET /repos/{owner}/{repo}/wiki/revisions/{pageName}` (Server1)
- **Signature**: `RepoGetWikiPageRevisions(string owner, string repo, string pageName, int? page, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`
- **Returns**: `WikiCommitList`
- **Error**: `SdkException<RepoGetWikiPageRevisionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RepoGetWikiPages
- **HTTP**: `GET /repos/{owner}/{repo}/wiki/pages` (Server1)
- **Signature**: `RepoGetWikiPages(string owner, string repo, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<WikiPageMetaData>`
- **Error**: `SdkException<RepoGetWikiPagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RepoListActionsSecrets
- **HTTP**: `GET /repos/{owner}/{repo}/actions/secrets` (Server1)
- **Signature**: `RepoListActionsSecrets(string owner, string repo, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Secret>`
- **Error**: `SdkException<RepoListActionsSecretsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RepoListActivityFeeds
- **HTTP**: `GET /repos/{owner}/{repo}/activities/feeds` (Server1)
- **Signature**: `RepoListActivityFeeds(string owner, string repo, DateTimeOffset? date, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `date` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `date` ← `date`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Activity>`
- **Error**: `SdkException<RepoListActivityFeedsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RepoListAllGitRefs
- **HTTP**: `GET /repos/{owner}/{repo}/git/refs` (Server1)
- **Signature**: `RepoListAllGitRefs(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ReferenceRepresentsAGitReference>`
- **Error**: `SdkException<RepoListAllGitRefsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoListBranchProtection
- **HTTP**: `GET /repos/{owner}/{repo}/branch_protections` (Server1)
- **Signature**: `RepoListBranchProtection(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<BranchProtection>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RepoListBranches
- **HTTP**: `GET /repos/{owner}/{repo}/branches` (Server1)
- **Signature**: `RepoListBranches(string owner, string repo, int? page, int? limit, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`, `q` ← `q`
- **Returns**: `IReadOnlyList<Branch>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RepoListCollaborators
- **HTTP**: `GET /repos/{owner}/{repo}/collaborators` (Server1)
- **Signature**: `RepoListCollaborators(string owner, string repo, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<User>`
- **Error**: `SdkException<RepoListCollaboratorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RepoListGitHooks
- **HTTP**: `GET /repos/{owner}/{repo}/hooks/git` (Server1)
- **Signature**: `RepoListGitHooks(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GitHook>`
- **Error**: `SdkException<RepoListGitHooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoListGitRefs
- **HTTP**: `GET /repos/{owner}/{repo}/git/refs/{ref}` (Server1)
- **Signature**: `RepoListGitRefs(string owner, string repo, string @ref, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ReferenceRepresentsAGitReference>`
- **Error**: `SdkException<RepoListGitRefsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoListHooks
- **HTTP**: `GET /repos/{owner}/{repo}/hooks` (Server1)
- **Signature**: `RepoListHooks(string owner, string repo, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Hook>`
- **Error**: `SdkException<RepoListHooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RepoListKeys
- **HTTP**: `GET /repos/{owner}/{repo}/keys` (Server1)
- **Signature**: `RepoListKeys(string owner, string repo, int? keyId, string? fingerprint, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`keyId` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `key_id` ← `keyId`, `fingerprint` ← `fingerprint`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<DeployKey>`
- **Error**: `SdkException<RepoListKeysError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RepoListPinnedIssues
- **HTTP**: `GET /repos/{owner}/{repo}/issues/pinned` (Server1)
- **Signature**: `RepoListPinnedIssues(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Issue>`
- **Error**: `SdkException<RepoListPinnedIssuesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoListPinnedPullRequests
- **HTTP**: `GET /repos/{owner}/{repo}/pulls/pinned` (Server1)
- **Signature**: `RepoListPinnedPullRequests(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PullRequest>`
- **Error**: `SdkException<RepoListPinnedPullRequestsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoListPullRequests
- **HTTP**: `GET /repos/{owner}/{repo}/pulls` (Server1)
- **Signature**: `RepoListPullRequests(string owner, string repo, string? baseBranch, State9? state, Sort1? sort, long? milestone, IReadOnlyList<long>? labels, string? poster, int? limit, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`baseBranch` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `base_branch` ← `baseBranch`, `state` ← `state`, `sort` ← `sort`, `milestone` ← `milestone`, `labels` ← `labels`, `poster` ← `poster`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<PullRequest>`
- **Error**: `SdkException<RepoListPullRequestsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RepoListPullReviews
- **HTTP**: `GET /repos/{owner}/{repo}/pulls/{index}/reviews` (Server1)
- **Signature**: `RepoListPullReviews(string owner, string repo, long index, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<PullReview>`
- **Error**: `SdkException<RepoListPullReviewsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RepoListPushMirrors
- **HTTP**: `GET /repos/{owner}/{repo}/push_mirrors` (Server1)
- **Signature**: `RepoListPushMirrors(string owner, string repo, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<PushMirror>`
- **Error**: `SdkException<RepoListPushMirrorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RepoListReleaseAttachments
- **HTTP**: `GET /repos/{owner}/{repo}/releases/{id}/assets` (Server1)
- **Signature**: `RepoListReleaseAttachments(string owner, string repo, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Attachment>`
- **Error**: `SdkException<RepoListReleaseAttachmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoListReleases
- **HTTP**: `GET /repos/{owner}/{repo}/releases` (Server1)
- **Signature**: `RepoListReleases(string owner, string repo, bool? draft, bool? preRelease, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`draft` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `draft` ← `draft`, `pre-release` ← `preRelease`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Release>`
- **Error**: `SdkException<RepoListReleasesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RepoListStargazers
- **HTTP**: `GET /repos/{owner}/{repo}/stargazers` (Server1)
- **Signature**: `RepoListStargazers(string owner, string repo, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<User>`
- **Error**: `SdkException<RepoListStargazersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RepoListStatuses
- **HTTP**: `GET /repos/{owner}/{repo}/statuses/{sha}` (Server1)
- **Signature**: `RepoListStatuses(string owner, string repo, string sha, Sort? sort, State10? state, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`sort` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `sort` ← `sort`, `state` ← `state`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<CommitStatus>`
- **Error**: `SdkException<RepoListStatusesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RepoListStatusesByRef
- **HTTP**: `GET /repos/{owner}/{repo}/commits/{ref}/statuses` (Server1)
- **Signature**: `RepoListStatusesByRef(string owner, string repo, string @ref, Sort? sort, State10? state, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`sort` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `sort` ← `sort`, `state` ← `state`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<CommitStatus>`
- **Error**: `SdkException<RepoListStatusesByRefError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RepoListSubscribers
- **HTTP**: `GET /repos/{owner}/{repo}/subscribers` (Server1)
- **Signature**: `RepoListSubscribers(string owner, string repo, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<User>`
- **Error**: `SdkException<RepoListSubscribersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RepoListTagProtection
- **HTTP**: `GET /repos/{owner}/{repo}/tag_protections` (Server1)
- **Signature**: `RepoListTagProtection(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TagProtection>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RepoListTags
- **HTTP**: `GET /repos/{owner}/{repo}/tags` (Server1)
- **Signature**: `RepoListTags(string owner, string repo, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Tag>`
- **Error**: `SdkException<RepoListTagsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RepoListTeams
- **HTTP**: `GET /repos/{owner}/{repo}/teams` (Server1)
- **Signature**: `RepoListTeams(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Team>`
- **Error**: `SdkException<RepoListTeamsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoListTopics
- **HTTP**: `GET /repos/{owner}/{repo}/topics` (Server1)
- **Signature**: `RepoListTopics(string owner, string repo, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `TopicName`
- **Error**: `SdkException<RepoListTopicsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RepoMergePullRequest
- **HTTP**: `POST /repos/{owner}/{repo}/pulls/{index}/merge` (Server1)
- **Signature**: `RepoMergePullRequest(string owner, string repo, long index, MergePullRequestOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoMergePullRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 405, 409, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoMergeUpstream
- **HTTP**: `POST /repos/{owner}/{repo}/merge-upstream` (Server1)
- **Signature**: `RepoMergeUpstream(string owner, string repo, MergeUpstreamRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `MergeUpstreamResponse`
- **Error**: `SdkException<RepoMergeUpstreamError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoMigrate
- **HTTP**: `POST /repos/migrate` (Server1)
- **Signature**: `RepoMigrate(MigrateRepoOptions? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Repository`
- **Error**: `SdkException<RepoMigrateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 409, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoMirrorSync
- **HTTP**: `POST /repos/{owner}/{repo}/mirror-sync` (Server1)
- **Signature**: `RepoMirrorSync(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoMirrorSyncError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoNewPinAllowed
- **HTTP**: `GET /repos/{owner}/{repo}/new_pin_allowed` (Server1)
- **Signature**: `RepoNewPinAllowed(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `NewIssuePinsAllowed`
- **Error**: `SdkException<RepoNewPinAllowedError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoPullRequestIsMerged
- **HTTP**: `GET /repos/{owner}/{repo}/pulls/{index}/merge` (Server1)
- **Signature**: `RepoPullRequestIsMerged(string owner, string repo, long index, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoPullRequestIsMergedError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoPushMirrorSync
- **HTTP**: `POST /repos/{owner}/{repo}/push_mirrors-sync` (Server1)
- **Signature**: `RepoPushMirrorSync(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoPushMirrorSyncError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoRenameBranch
- **HTTP**: `PATCH /repos/{owner}/{repo}/branches/{branch}` (Server1)
- **Signature**: `RepoRenameBranch(string owner, string repo, string branch, RenameBranchRepoOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoRenameBranchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoResolvePullReviewComment
- **HTTP**: `POST /repos/{owner}/{repo}/pulls/comments/{id}/resolve` (Server1)
- **Signature**: `RepoResolvePullReviewComment(string owner, string repo, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoResolvePullReviewCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoSearch
- **HTTP**: `GET /repos/search` (Server1)
- **Signature**: `RepoSearch(string? q, bool? topic, bool? includeDesc, long? uid, long? priorityOwnerId, long? teamId, long? starredBy, bool? @private, bool? isPrivate, bool? template, bool? archived, string? mode, bool? exclusive, string? sort, string? order, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 17 params (`q` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `q` ← `q`, `topic` ← `topic`, `includeDesc` ← `includeDesc`, `uid` ← `uid`, `priority_owner_id` ← `priorityOwnerId`, `team_id` ← `teamId`, `starredBy` ← `starredBy`, `is_private` ← `isPrivate`, `template` ← `template`, `archived` ← `archived`, `mode` ← `mode`, `exclusive` ← `exclusive`, `sort` ← `sort`, `order` ← `order`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `SearchResults`
- **Error**: `SdkException<RepoSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RepoSigningKey
- **HTTP**: `GET /repos/{owner}/{repo}/signing-key.gpg` (Server1)
- **Signature**: `RepoSigningKey(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `string`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RepoSigningKeySsh
- **HTTP**: `GET /repos/{owner}/{repo}/signing-key.pub` (Server1)
- **Signature**: `RepoSigningKeySsh(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `string`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RepoSubmitPullReview
- **HTTP**: `POST /repos/{owner}/{repo}/pulls/{index}/reviews/{id}` (Server1)
- **Signature**: `RepoSubmitPullReview(string owner, string repo, long index, long id, SubmitPullReviewOptions body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PullReview`
- **Error**: `SdkException<RepoSubmitPullReviewError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoTestHook
- **HTTP**: `POST /repos/{owner}/{repo}/hooks/{id}/tests` (Server1)
- **Signature**: `RepoTestHook(string owner, string repo, long id, string? @ref, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `@ref` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoTestHookError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoTrackedTimes
- **HTTP**: `GET /repos/{owner}/{repo}/times` (Server1)
- **Signature**: `RepoTrackedTimes(string owner, string repo, string? user, DateTimeOffset? since, DateTimeOffset? before, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`user` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `user` ← `user`, `since` ← `since`, `before` ← `before`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<TrackedTime>`
- **Error**: `SdkException<RepoTrackedTimesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RepoTransfer
- **HTTP**: `POST /repos/{owner}/{repo}/transfer` (Server1)
- **Signature**: `RepoTransfer(string owner, string repo, TransferRepoOption body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Repository`
- **Error**: `SdkException<RepoTransferError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoUnDismissPullReview
- **HTTP**: `POST /repos/{owner}/{repo}/pulls/{index}/reviews/{id}/undismissals` (Server1)
- **Signature**: `RepoUnDismissPullReview(string owner, string repo, long index, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PullReview`
- **Error**: `SdkException<RepoUnDismissPullReviewError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoUnresolvePullReviewComment
- **HTTP**: `POST /repos/{owner}/{repo}/pulls/comments/{id}/unresolve` (Server1)
- **Signature**: `RepoUnresolvePullReviewComment(string owner, string repo, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoUnresolvePullReviewCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoUpdateAvatar
- **HTTP**: `POST /repos/{owner}/{repo}/avatar` (Server1)
- **Signature**: `RepoUpdateAvatar(string owner, string repo, UpdateRepoAvatarOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoUpdateAvatarError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoUpdateBranch
- **HTTP**: `PUT /repos/{owner}/{repo}/branches/{branch}` (Server1)
- **Signature**: `RepoUpdateBranch(string owner, string repo, string branch, UpdateBranchRepoOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoUpdateBranchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 409, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoUpdateBranchProtectionPriories
- **HTTP**: `POST /repos/{owner}/{repo}/branch_protections/priority` (Server1)
- **Signature**: `RepoUpdateBranchProtectionPriories(string owner, string repo, UpdateBranchProtectionPriories? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoUpdateBranchProtectionPrioriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoUpdateFile
- **HTTP**: `PUT /repos/{owner}/{repo}/contents/{filepath}` (Server1)
- **Signature**: `RepoUpdateFile(string owner, string repo, string filepath, UpdateFileOptions body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FileResponse`
- **Error**: `SdkException<RepoUpdateFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 422, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoUpdatePullRequest
- **HTTP**: `POST /repos/{owner}/{repo}/pulls/{index}/update` (Server1)
- **Signature**: `RepoUpdatePullRequest(string owner, string repo, long index, Style? style, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `style` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `style` ← `style`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoUpdatePullRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 409, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoUpdateTopics
- **HTTP**: `PUT /repos/{owner}/{repo}/topics` (Server1)
- **Signature**: `RepoUpdateTopics(string owner, string repo, RepoTopicOptions? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RepoUpdateTopicsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepoValidateIssueConfig
- **HTTP**: `GET /repos/{owner}/{repo}/issue_config/validate` (Server1)
- **Signature**: `RepoValidateIssueConfig(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IssueConfigValidation`
- **Error**: `SdkException<RepoValidateIssueConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RerunFailedWorkflowRun
- **HTTP**: `POST /repos/{owner}/{repo}/actions/runs/{run}/rerun-failed-jobs` (Server1)
- **Signature**: `RerunFailedWorkflowRun(string owner, string repo, int run, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RerunFailedWorkflowRunError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404, 409, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RerunWorkflowJob
- **HTTP**: `POST /repos/{owner}/{repo}/actions/runs/{run}/jobs/{job_id}/rerun` (Server1)
- **Signature**: `RerunWorkflowJob(string owner, string repo, int run, int jobId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ActionWorkflowJob`
- **Error**: `SdkException<RerunWorkflowJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404, 409, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RerunWorkflowRun
- **HTTP**: `POST /repos/{owner}/{repo}/actions/runs/{run}/rerun` (Server1)
- **Signature**: `RerunWorkflowRun(string owner, string repo, int run, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ActionWorkflowRun`
- **Error**: `SdkException<RerunWorkflowRunError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404, 409, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TopicSearch
- **HTTP**: `GET /topics/search` (Server1)
- **Signature**: `TopicSearch(string q, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `q` ← `q`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<TopicResponse>`
- **Error**: `SdkException<TopicSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateRepoRunner
- **HTTP**: `PATCH /repos/{owner}/{repo}/actions/runners/{runner_id}` (Server1)
- **Signature**: `UpdateRepoRunner(string owner, string repo, string runnerId, EditActionRunnerOptionRepresentsTheEditableFieldsForARunner? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ActionRunner`
- **Error**: `SdkException<UpdateRepoRunnerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateRepoSecret
- **HTTP**: `PUT /repos/{owner}/{repo}/actions/secrets/{secretname}` (Server1)
- **Signature**: `UpdateRepoSecret(string owner, string repo, string secretname, CreateOrUpdateSecretOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateRepoSecretError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateRepoVariable
- **HTTP**: `PUT /repos/{owner}/{repo}/actions/variables/{variablename}` (Server1)
- **Signature**: `UpdateRepoVariable(string owner, string repo, string variablename, UpdateVariableOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateRepoVariableError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserCurrentCheckSubscription
- **HTTP**: `GET /repos/{owner}/{repo}/subscription` (Server1)
- **Signature**: `UserCurrentCheckSubscription(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WatchInfo`
- **Error**: `SdkException<UserCurrentCheckSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserCurrentDeleteSubscription
- **HTTP**: `DELETE /repos/{owner}/{repo}/subscription` (Server1)
- **Signature**: `UserCurrentDeleteSubscription(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UserCurrentDeleteSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserCurrentPutSubscription
- **HTTP**: `PUT /repos/{owner}/{repo}/subscription` (Server1)
- **Signature**: `UserCurrentPutSubscription(string owner, string repo, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WatchInfo`
- **Error**: `SdkException<UserCurrentPutSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UserTrackedTimes
- **HTTP**: `GET /repos/{owner}/{repo}/times/{user}` (Server1)
- **Signature**: `UserTrackedTimes(string owner, string repo, string user, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TrackedTime>`
- **Error**: `SdkException<UserTrackedTimesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
