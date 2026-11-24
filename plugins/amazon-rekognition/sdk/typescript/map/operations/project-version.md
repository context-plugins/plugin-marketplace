<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProjectVersion — operations

Accessor: `client.projectVersion` · Source: `src/resources/project-version.ts` · 5 operations · Request and error types: namespace `ProjectVersion`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-rekognition`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createProjectVersion

- **Signature**: `createProjectVersion(request: ProjectVersion.CreateProjectVersionRequestParams, options?: RequestOptions): ApiPromise<undefined, ProjectVersion.CreateProjectVersionError>`
- **Wire**: `POST /#CreateProjectVersion`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `ProjectVersion.CreateProjectVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectVersion.CreateProjectVersionRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonRekognitionProjectVersionApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonRekognitionProjectVersionApi` | `xAmzTargetAmazonRekognitionProjectVersionApiSchema` | `src/models/xamz-target-amazon-rekognition-project-version-api.ts` |

### deleteProjectVersion

- **Signature**: `deleteProjectVersion(request: ProjectVersion.DeleteProjectVersionRequestParams, options?: RequestOptions): ApiPromise<undefined, ProjectVersion.DeleteProjectVersionError>`
- **Wire**: `POST /#DeleteProjectVersion`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `ProjectVersion.DeleteProjectVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectVersion.DeleteProjectVersionRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonRekognitionProjectVersionApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonRekognitionProjectVersionApi` | `xAmzTarget1AmazonRekognitionProjectVersionApiSchema` | `src/models/xamz-target1-amazon-rekognition-project-version-api.ts` |

### describeProjectVersions

- **Signature**: `describeProjectVersions(request: ProjectVersion.DescribeProjectVersionsRequestParams, options?: RequestOptions): ApiPromise<undefined, ProjectVersion.DescribeProjectVersionsError>`
- **Wire**: `POST /#DescribeProjectVersions`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `ProjectVersion.DescribeProjectVersionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectVersion.DescribeProjectVersionsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonRekognitionProjectVersionApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonRekognitionProjectVersionApi` | `xAmzTarget2AmazonRekognitionProjectVersionApiSchema` | `src/models/xamz-target2-amazon-rekognition-project-version-api.ts` |

### startProjectVersion

- **Signature**: `startProjectVersion(request: ProjectVersion.StartProjectVersionRequestParams, options?: RequestOptions): ApiPromise<undefined, ProjectVersion.StartProjectVersionError>`
- **Wire**: `POST /#StartProjectVersion`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `ProjectVersion.StartProjectVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectVersion.StartProjectVersionRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AmazonRekognitionProjectVersionApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AmazonRekognitionProjectVersionApi` | `xAmzTarget3AmazonRekognitionProjectVersionApiSchema` | `src/models/xamz-target3-amazon-rekognition-project-version-api.ts` |

### stopProjectVersion

- **Signature**: `stopProjectVersion(request: ProjectVersion.StopProjectVersionRequestParams, options?: RequestOptions): ApiPromise<undefined, ProjectVersion.StopProjectVersionError>`
- **Wire**: `POST /#StopProjectVersion`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `ProjectVersion.StopProjectVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectVersion.StopProjectVersionRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4AmazonRekognitionProjectVersionApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4AmazonRekognitionProjectVersionApi` | `xAmzTarget4AmazonRekognitionProjectVersionApiSchema` | `src/models/xamz-target4-amazon-rekognition-project-version-api.ts` |

