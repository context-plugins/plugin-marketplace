<!-- Generated file — do not edit; regenerated with the SDK. -->

# Builds — operations

Accessor: `client.builds` · Source: `src/resources/builds.ts` · 6 operations · Request and error types: namespace `Builds`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-code-build`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### batchDeleteBuilds2

- **Signature**: `batchDeleteBuilds2(request: Builds.BatchDeleteBuilds2Request, options?: RequestOptions): ApiPromise<undefined, Builds.BatchDeleteBuilds2Error>`
- **Wire**: `POST /#BatchDeleteBuilds`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `Builds.BatchDeleteBuilds2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Builds.BatchDeleteBuilds2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi` | `xAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema` | `src/models/xamz-target-aws-code-build-aws-codebuild-xamz-target-codebuild-api.ts` |

### batchGetBuilds2

- **Signature**: `batchGetBuilds2(request: Builds.BatchGetBuilds2Request, options?: RequestOptions): ApiPromise<undefined, Builds.BatchGetBuilds2Error>`
- **Wire**: `POST /#BatchGetBuilds`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `Builds.BatchGetBuilds2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Builds.BatchGetBuilds2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi` | `xAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema` | `src/models/xamz-target1-aws-code-build-aws-codebuild-xamz-target-codebuild-api.ts` |

### listBuilds2

- **Signature**: `listBuilds2(request: Builds.ListBuilds2Request, options?: RequestOptions): ApiPromise<undefined, Builds.ListBuilds2Error>`
- **Wire**: `POST /#ListBuilds`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `Builds.ListBuilds2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Builds.ListBuilds2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AwsCodeBuildBuildsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AwsCodeBuildBuildsApi` | `xAmzTarget2AwsCodeBuildBuildsApiSchema` | `src/models/xamz-target2-aws-code-build-builds-api.ts` |

### listBuildsForProject2

- **Signature**: `listBuildsForProject2(request: Builds.ListBuildsForProject2Request, options?: RequestOptions): ApiPromise<undefined, Builds.ListBuildsForProject2Error>`
- **Wire**: `POST /#ListBuildsForProject`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `Builds.ListBuildsForProject2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Builds.ListBuildsForProject2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AwsCodeBuildBuildsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AwsCodeBuildBuildsApi` | `xAmzTarget3AwsCodeBuildBuildsApiSchema` | `src/models/xamz-target3-aws-code-build-builds-api.ts` |

### startBuild2

- **Signature**: `startBuild2(request: Builds.StartBuild2Request, options?: RequestOptions): ApiPromise<undefined, Builds.StartBuild2Error>`
- **Wire**: `POST /#StartBuild`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `Builds.StartBuild2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Builds.StartBuild2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4AwsCodeBuildBuildsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4AwsCodeBuildBuildsApi` | `xAmzTarget4AwsCodeBuildBuildsApiSchema` | `src/models/xamz-target4-aws-code-build-builds-api.ts` |

### stopBuild2

- **Signature**: `stopBuild2(request: Builds.StopBuild2Request, options?: RequestOptions): ApiPromise<undefined, Builds.StopBuild2Error>`
- **Wire**: `POST /#StopBuild`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `Builds.StopBuild2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Builds.StopBuild2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget5AwsCodeBuildBuildsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget5AwsCodeBuildBuildsApi` | `xAmzTarget5AwsCodeBuildBuildsApiSchema` | `src/models/xamz-target5-aws-code-build-builds-api.ts` |

