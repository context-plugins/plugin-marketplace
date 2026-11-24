<!-- Generated file — do not edit; regenerated with the SDK. -->

# Project — operations

Accessor: `client.project` · Source: `src/resources/project.ts` · 3 operations · Request and error types: namespace `Project`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-rekognition`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createProject

- **Signature**: `createProject(request: Project.CreateProjectRequestParams, options?: RequestOptions): ApiPromise<undefined, Project.CreateProjectError>`
- **Wire**: `POST /#CreateProject`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `Project.CreateProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Project.CreateProjectRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonRekognitionProjectApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonRekognitionProjectApi` | `xAmzTargetAmazonRekognitionProjectApiSchema` | `src/models/xamz-target-amazon-rekognition-project-api.ts` |

### deleteProject

- **Signature**: `deleteProject(request: Project.DeleteProjectRequestParams, options?: RequestOptions): ApiPromise<undefined, Project.DeleteProjectError>`
- **Wire**: `POST /#DeleteProject`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `Project.DeleteProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Project.DeleteProjectRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonRekognitionProjectApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonRekognitionProjectApi` | `xAmzTarget1AmazonRekognitionProjectApiSchema` | `src/models/xamz-target1-amazon-rekognition-project-api.ts` |

### describeProjects

- **Signature**: `describeProjects(request: Project.DescribeProjectsRequestParams, options?: RequestOptions): ApiPromise<undefined, Project.DescribeProjectsError>`
- **Wire**: `POST /#DescribeProjects`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `Project.DescribeProjectsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Project.DescribeProjectsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonRekognitionProjectApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonRekognitionProjectApi` | `xAmzTarget2AmazonRekognitionProjectApiSchema` | `src/models/xamz-target2-amazon-rekognition-project-api.ts` |

