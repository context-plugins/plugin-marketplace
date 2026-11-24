<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProjectPolicyApi — operations

Accessor: `client.projectPolicyApi` · Source: `src/resources/project-policy-api.ts` · 3 operations · Request and error types: namespace `ProjectPolicyApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-rekognition`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteProjectPolicy

- **Signature**: `deleteProjectPolicy(request: ProjectPolicyApi.DeleteProjectPolicyRequestParams, options?: RequestOptions): ApiPromise<undefined, ProjectPolicyApi.DeleteProjectPolicyError>`
- **Wire**: `POST /#DeleteProjectPolicy`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `ProjectPolicyApi.DeleteProjectPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectPolicyApi.DeleteProjectPolicyRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonRekognitionProjectPolicyApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonRekognitionProjectPolicyApi` | `xAmzTargetAmazonRekognitionProjectPolicyApiSchema` | `src/models/xamz-target-amazon-rekognition-project-policy-api.ts` |

### listProjectPolicies

- **Signature**: `listProjectPolicies(request: ProjectPolicyApi.ListProjectPoliciesRequestParams, options?: RequestOptions): ApiPromise<undefined, ProjectPolicyApi.ListProjectPoliciesError>`
- **Wire**: `POST /#ListProjectPolicies`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `ProjectPolicyApi.ListProjectPoliciesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectPolicyApi.ListProjectPoliciesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonRekognitionProjectPolicyApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonRekognitionProjectPolicyApi` | `xAmzTarget1AmazonRekognitionProjectPolicyApiSchema` | `src/models/xamz-target1-amazon-rekognition-project-policy-api.ts` |

### putProjectPolicy

- **Signature**: `putProjectPolicy(request: ProjectPolicyApi.PutProjectPolicyRequestParams, options?: RequestOptions): ApiPromise<undefined, ProjectPolicyApi.PutProjectPolicyError>`
- **Wire**: `POST /#PutProjectPolicy`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `ProjectPolicyApi.PutProjectPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectPolicyApi.PutProjectPolicyRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonRekognitionProjectPolicyApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonRekognitionProjectPolicyApi` | `xAmzTarget2AmazonRekognitionProjectPolicyApiSchema` | `src/models/xamz-target2-amazon-rekognition-project-policy-api.ts` |

