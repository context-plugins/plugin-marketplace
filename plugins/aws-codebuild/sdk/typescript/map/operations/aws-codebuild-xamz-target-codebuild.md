<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsCodebuildXAmzTargetCodebuild — operations

Accessor: `client.awsCodebuildXAmzTargetCodebuild` · Source: `src/resources/aws-codebuild-xamz-target-codebuild.ts` · 38 operations · Request and error types: namespace `AwsCodebuildXAmzTargetCodebuild`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-code-build`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### batchDeleteBuilds

- **Signature**: `batchDeleteBuilds(request: AwsCodebuildXAmzTargetCodebuild.BatchDeleteBuildsRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.BatchDeleteBuildsError>`
- **Wire**: `POST /#BatchDeleteBuilds`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.BatchDeleteBuildsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.BatchDeleteBuildsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi` | `xAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema` | `src/models/xamz-target-aws-code-build-aws-codebuild-xamz-target-codebuild-api.ts` |

### batchGetBuildBatches

- **Signature**: `batchGetBuildBatches(request: AwsCodebuildXAmzTargetCodebuild.BatchGetBuildBatchesRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.BatchGetBuildBatchesError>`
- **Wire**: `POST /#BatchGetBuildBatches`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.BatchGetBuildBatchesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.BatchGetBuildBatchesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3` | `xAmzTarget3Schema` | `src/models/xamz-target3.ts` |

### batchGetBuilds

- **Signature**: `batchGetBuilds(request: AwsCodebuildXAmzTargetCodebuild.BatchGetBuildsRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.BatchGetBuildsError>`
- **Wire**: `POST /#BatchGetBuilds`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.BatchGetBuildsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.BatchGetBuildsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi` | `xAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema` | `src/models/xamz-target1-aws-code-build-aws-codebuild-xamz-target-codebuild-api.ts` |

### batchGetProjects

- **Signature**: `batchGetProjects(request: AwsCodebuildXAmzTargetCodebuild.BatchGetProjectsRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.BatchGetProjectsError>`
- **Wire**: `POST /#BatchGetProjects`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.BatchGetProjectsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.BatchGetProjectsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget6` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget6` | `xAmzTarget6Schema` | `src/models/xamz-target6.ts` |

### batchGetReportGroups

- **Signature**: `batchGetReportGroups(request: AwsCodebuildXAmzTargetCodebuild.BatchGetReportGroupsRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.BatchGetReportGroupsError>`
- **Wire**: `POST /#BatchGetReportGroups`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.BatchGetReportGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.BatchGetReportGroupsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget10` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget10` | `xAmzTarget10Schema` | `src/models/xamz-target10.ts` |

### batchGetReports

- **Signature**: `batchGetReports(request: AwsCodebuildXAmzTargetCodebuild.BatchGetReportsRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.BatchGetReportsError>`
- **Wire**: `POST /#BatchGetReports`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.BatchGetReportsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.BatchGetReportsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget15` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget15` | `xAmzTarget15Schema` | `src/models/xamz-target15.ts` |

### createProject

- **Signature**: `createProject(request: AwsCodebuildXAmzTargetCodebuild.CreateProjectRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.CreateProjectError>`
- **Wire**: `POST /#CreateProject`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.CreateProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.CreateProjectRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget7` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget7` | `xAmzTarget7Schema` | `src/models/xamz-target7.ts` |

### createReportGroup

- **Signature**: `createReportGroup(request: AwsCodebuildXAmzTargetCodebuild.CreateReportGroupRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.CreateReportGroupError>`
- **Wire**: `POST /#CreateReportGroup`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.CreateReportGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.CreateReportGroupRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget11` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget11` | `xAmzTarget11Schema` | `src/models/xamz-target11.ts` |

### createWebhook

- **Signature**: `createWebhook(request: AwsCodebuildXAmzTargetCodebuild.CreateWebhookRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.CreateWebhookError>`
- **Wire**: `POST /#CreateWebhook`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.CreateWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.CreateWebhookRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget17` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget17` | `xAmzTarget17Schema` | `src/models/xamz-target17.ts` |

### deleteBuildBatch

- **Signature**: `deleteBuildBatch(request: AwsCodebuildXAmzTargetCodebuild.DeleteBuildBatchRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.DeleteBuildBatchError>`
- **Wire**: `POST /#DeleteBuildBatch`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.DeleteBuildBatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.DeleteBuildBatchRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget20` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget20` | `xAmzTarget20Schema` | `src/models/xamz-target20.ts` |

### deleteProject

- **Signature**: `deleteProject(request: AwsCodebuildXAmzTargetCodebuild.DeleteProjectRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.DeleteProjectError>`
- **Wire**: `POST /#DeleteProject`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.DeleteProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.DeleteProjectRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget8` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget8` | `xAmzTarget8Schema` | `src/models/xamz-target8.ts` |

### deleteReportGroup

- **Signature**: `deleteReportGroup(request: AwsCodebuildXAmzTargetCodebuild.DeleteReportGroupRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.DeleteReportGroupError>`
- **Wire**: `POST /#DeleteReportGroup`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.DeleteReportGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.DeleteReportGroupRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget12` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget12` | `xAmzTarget12Schema` | `src/models/xamz-target12.ts` |

### deleteResourcePolicy

- **Signature**: `deleteResourcePolicy(request: AwsCodebuildXAmzTargetCodebuild.DeleteResourcePolicyRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.DeleteResourcePolicyError>`
- **Wire**: `POST /#DeleteResourcePolicy`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.DeleteResourcePolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.DeleteResourcePolicyRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget23` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget23` | `xAmzTarget23Schema` | `src/models/xamz-target23.ts` |

### deleteSourceCredentials

- **Signature**: `deleteSourceCredentials(request: AwsCodebuildXAmzTargetCodebuild.DeleteSourceCredentialsRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.DeleteSourceCredentialsError>`
- **Wire**: `POST /#DeleteSourceCredentials`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.DeleteSourceCredentialsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.DeleteSourceCredentialsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget26` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget26` | `xAmzTarget26Schema` | `src/models/xamz-target26.ts` |

### deleteWebhook

- **Signature**: `deleteWebhook(request: AwsCodebuildXAmzTargetCodebuild.DeleteWebhookRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.DeleteWebhookError>`
- **Wire**: `POST /#DeleteWebhook`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.DeleteWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.DeleteWebhookRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget18` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget18` | `xAmzTarget18Schema` | `src/models/xamz-target18.ts` |

### describeCodeCoverages

- **Signature**: `describeCodeCoverages(request: AwsCodebuildXAmzTargetCodebuild.DescribeCodeCoveragesRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.DescribeCodeCoveragesError>`
- **Wire**: `POST /#DescribeCodeCoverages`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.DescribeCodeCoveragesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.DescribeCodeCoveragesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget29` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget29` | `xAmzTarget29Schema` | `src/models/xamz-target29.ts` |

### describeTestCases

- **Signature**: `describeTestCases(request: AwsCodebuildXAmzTargetCodebuild.DescribeTestCasesRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.DescribeTestCasesError>`
- **Wire**: `POST /#DescribeTestCases`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.DescribeTestCasesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.DescribeTestCasesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget30` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget30` | `xAmzTarget30Schema` | `src/models/xamz-target30.ts` |

### getReportGroupTrend

- **Signature**: `getReportGroupTrend(request: AwsCodebuildXAmzTargetCodebuild.GetReportGroupTrendRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.GetReportGroupTrendError>`
- **Wire**: `POST /#GetReportGroupTrend`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.GetReportGroupTrendError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.GetReportGroupTrendRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget31` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget31` | `xAmzTarget31Schema` | `src/models/xamz-target31.ts` |

### getResourcePolicy

- **Signature**: `getResourcePolicy(request: AwsCodebuildXAmzTargetCodebuild.GetResourcePolicyRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.GetResourcePolicyError>`
- **Wire**: `POST /#GetResourcePolicy`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.GetResourcePolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.GetResourcePolicyRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget24` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget24` | `xAmzTarget24Schema` | `src/models/xamz-target24.ts` |

### importSourceCredentials

- **Signature**: `importSourceCredentials(request: AwsCodebuildXAmzTargetCodebuild.ImportSourceCredentialsRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.ImportSourceCredentialsError>`
- **Wire**: `POST /#ImportSourceCredentials`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.ImportSourceCredentialsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.ImportSourceCredentialsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget27` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget27` | `xAmzTarget27Schema` | `src/models/xamz-target27.ts` |

### invalidateProjectCache

- **Signature**: `invalidateProjectCache(request: AwsCodebuildXAmzTargetCodebuild.InvalidateProjectCacheRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.InvalidateProjectCacheError>`
- **Wire**: `POST /#InvalidateProjectCache`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.InvalidateProjectCacheError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.InvalidateProjectCacheRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget32` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget32` | `xAmzTarget32Schema` | `src/models/xamz-target32.ts` |

### listBuildBatches

- **Signature**: `listBuildBatches(request: AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesError>`
- **Wire**: `POST /#ListBuildBatches`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4` | `xAmzTarget4Schema` | `src/models/xamz-target4.ts` |

### listBuildBatchesForProject

- **Signature**: `listBuildBatchesForProject(request: AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesForProjectRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesForProjectError>`
- **Wire**: `POST /#ListBuildBatchesForProject`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesForProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesForProjectRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget5` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget5` | `xAmzTarget5Schema` | `src/models/xamz-target5.ts` |

### listBuildsForProject

- **Signature**: `listBuildsForProject(request: AwsCodebuildXAmzTargetCodebuild.ListBuildsForProjectRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.ListBuildsForProjectError>`
- **Wire**: `POST /#ListBuildsForProject`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.ListBuildsForProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.ListBuildsForProjectRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi` | `xAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema` | `src/models/xamz-target2-aws-code-build-aws-codebuild-xamz-target-codebuild-api.ts` |

### listCuratedEnvironmentImages

- **Signature**: `listCuratedEnvironmentImages(request: AwsCodebuildXAmzTargetCodebuild.ListCuratedEnvironmentImagesRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /#ListCuratedEnvironmentImages`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.ListCuratedEnvironmentImagesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget34` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget34` | `xAmzTarget34Schema` | `src/models/xamz-target34.ts` |

### listReportGroups

- **Signature**: `listReportGroups(request: AwsCodebuildXAmzTargetCodebuild.ListReportGroupsRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.ListReportGroupsError>`
- **Wire**: `POST /#ListReportGroups`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.ListReportGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.ListReportGroupsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget13` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget13` | `xAmzTarget13Schema` | `src/models/xamz-target13.ts` |

### listReportsForReportGroup

- **Signature**: `listReportsForReportGroup(request: AwsCodebuildXAmzTargetCodebuild.ListReportsForReportGroupRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.ListReportsForReportGroupError>`
- **Wire**: `POST /#ListReportsForReportGroup`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.ListReportsForReportGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.ListReportsForReportGroupRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget16` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget16` | `xAmzTarget16Schema` | `src/models/xamz-target16.ts` |

### listSharedProjects

- **Signature**: `listSharedProjects(request: AwsCodebuildXAmzTargetCodebuild.ListSharedProjectsRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.ListSharedProjectsError>`
- **Wire**: `POST /#ListSharedProjects`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.ListSharedProjectsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.ListSharedProjectsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget35` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget35` | `xAmzTarget35Schema` | `src/models/xamz-target35.ts` |

### listSharedReportGroups

- **Signature**: `listSharedReportGroups(request: AwsCodebuildXAmzTargetCodebuild.ListSharedReportGroupsRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.ListSharedReportGroupsError>`
- **Wire**: `POST /#ListSharedReportGroups`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.ListSharedReportGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.ListSharedReportGroupsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget36` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget36` | `xAmzTarget36Schema` | `src/models/xamz-target36.ts` |

### listSourceCredentials

- **Signature**: `listSourceCredentials(request: AwsCodebuildXAmzTargetCodebuild.ListSourceCredentialsRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.ListSourceCredentialsError>`
- **Wire**: `POST /#ListSourceCredentials`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.ListSourceCredentialsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.ListSourceCredentialsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget28` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget28` | `xAmzTarget28Schema` | `src/models/xamz-target28.ts` |

### putResourcePolicy

- **Signature**: `putResourcePolicy(request: AwsCodebuildXAmzTargetCodebuild.PutResourcePolicyRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.PutResourcePolicyError>`
- **Wire**: `POST /#PutResourcePolicy`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.PutResourcePolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.PutResourcePolicyRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget25` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget25` | `xAmzTarget25Schema` | `src/models/xamz-target25.ts` |

### retryBuildBatch

- **Signature**: `retryBuildBatch(request: AwsCodebuildXAmzTargetCodebuild.RetryBuildBatchRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.RetryBuildBatchError>`
- **Wire**: `POST /#RetryBuildBatch`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.RetryBuildBatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.RetryBuildBatchRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget33` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget33` | `xAmzTarget33Schema` | `src/models/xamz-target33.ts` |

### startBuildBatch

- **Signature**: `startBuildBatch(request: AwsCodebuildXAmzTargetCodebuild.StartBuildBatchRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.StartBuildBatchError>`
- **Wire**: `POST /#StartBuildBatch`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.StartBuildBatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.StartBuildBatchRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget21` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget21` | `xAmzTarget21Schema` | `src/models/xamz-target21.ts` |

### stopBuildBatch

- **Signature**: `stopBuildBatch(request: AwsCodebuildXAmzTargetCodebuild.StopBuildBatchRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.StopBuildBatchError>`
- **Wire**: `POST /#StopBuildBatch`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.StopBuildBatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.StopBuildBatchRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget22` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget22` | `xAmzTarget22Schema` | `src/models/xamz-target22.ts` |

### updateProject

- **Signature**: `updateProject(request: AwsCodebuildXAmzTargetCodebuild.UpdateProjectRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.UpdateProjectError>`
- **Wire**: `POST /#UpdateProject`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.UpdateProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.UpdateProjectRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget9` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget9` | `xAmzTarget9Schema` | `src/models/xamz-target9.ts` |

### updateProjectVisibility

- **Signature**: `updateProjectVisibility(request: AwsCodebuildXAmzTargetCodebuild.UpdateProjectVisibilityRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.UpdateProjectVisibilityError>`
- **Wire**: `POST /#UpdateProjectVisibility`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.UpdateProjectVisibilityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.UpdateProjectVisibilityRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget37` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget37` | `xAmzTarget37Schema` | `src/models/xamz-target37.ts` |

### updateReportGroup

- **Signature**: `updateReportGroup(request: AwsCodebuildXAmzTargetCodebuild.UpdateReportGroupRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.UpdateReportGroupError>`
- **Wire**: `POST /#UpdateReportGroup`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.UpdateReportGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.UpdateReportGroupRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget14` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget14` | `xAmzTarget14Schema` | `src/models/xamz-target14.ts` |

### updateWebhook

- **Signature**: `updateWebhook(request: AwsCodebuildXAmzTargetCodebuild.UpdateWebhookRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.UpdateWebhookError>`
- **Wire**: `POST /#UpdateWebhook`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild.UpdateWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild.UpdateWebhookRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget19` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget19` | `xAmzTarget19Schema` | `src/models/xamz-target19.ts` |

