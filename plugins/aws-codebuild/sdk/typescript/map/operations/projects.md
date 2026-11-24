<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.projects` · Source: `src/resources/projects.ts` · 5 operations · Request and error types: namespace `Projects`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-code-build`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### batchGetProjects2

- **Signature**: `batchGetProjects2(request: Projects.BatchGetProjects2Request, options?: RequestOptions): ApiPromise<undefined, Projects.BatchGetProjects2Error>`
- **Wire**: `POST /#BatchGetProjects`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `Projects.BatchGetProjects2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.BatchGetProjects2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAwsCodeBuildProjectsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAwsCodeBuildProjectsApi` | `xAmzTargetAwsCodeBuildProjectsApiSchema` | `src/models/xamz-target-aws-code-build-projects-api.ts` |

### createProject2

- **Signature**: `createProject2(request: Projects.CreateProject2Request, options?: RequestOptions): ApiPromise<undefined, Projects.CreateProject2Error>`
- **Wire**: `POST /#CreateProject`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `Projects.CreateProject2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.CreateProject2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AwsCodeBuildProjectsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AwsCodeBuildProjectsApi` | `xAmzTarget1AwsCodeBuildProjectsApiSchema` | `src/models/xamz-target1-aws-code-build-projects-api.ts` |

### deleteProject2

- **Signature**: `deleteProject2(request: Projects.DeleteProject2Request, options?: RequestOptions): ApiPromise<undefined, Projects.DeleteProject2Error>`
- **Wire**: `POST /#DeleteProject`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `Projects.DeleteProject2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.DeleteProject2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AwsCodeBuildProjectsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AwsCodeBuildProjectsApi` | `xAmzTarget2AwsCodeBuildProjectsApiSchema` | `src/models/xamz-target2-aws-code-build-projects-api.ts` |

### listProjects2

- **Signature**: `listProjects2(request: Projects.ListProjects2Request, options?: RequestOptions): ApiPromise<undefined, Projects.ListProjects2Error>`
- **Wire**: `POST /#ListProjects`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `Projects.ListProjects2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ListProjects2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AwsCodeBuildProjectsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AwsCodeBuildProjectsApi` | `xAmzTarget3AwsCodeBuildProjectsApiSchema` | `src/models/xamz-target3-aws-code-build-projects-api.ts` |

### updateProject2

- **Signature**: `updateProject2(request: Projects.UpdateProject2Request, options?: RequestOptions): ApiPromise<undefined, Projects.UpdateProject2Error>`
- **Wire**: `POST /#UpdateProject`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `Projects.UpdateProject2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.UpdateProject2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4AwsCodeBuildProjectsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4AwsCodeBuildProjectsApi` | `xAmzTarget4AwsCodeBuildProjectsApiSchema` | `src/models/xamz-target4-aws-code-build-projects-api.ts` |

