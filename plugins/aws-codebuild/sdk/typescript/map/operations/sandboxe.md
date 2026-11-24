<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sandboxe — operations

Accessor: `client.sandboxe` · Source: `src/resources/sandboxe.ts` · 3 operations · Request and error types: namespace `Sandboxe`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-code-build`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### batchGetSandboxes

- **Signature**: `batchGetSandboxes(request: Sandboxe.BatchGetSandboxesRequest, options?: RequestOptions): ApiPromise<undefined, Sandboxe.BatchGetSandboxesError>`
- **Wire**: `POST /#BatchGetSandboxes`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `Sandboxe.BatchGetSandboxesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sandboxe.BatchGetSandboxesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAwsCodeBuildSandboxeApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAwsCodeBuildSandboxeApi` | `xAmzTargetAwsCodeBuildSandboxeApiSchema` | `src/models/xamz-target-aws-code-build-sandboxe-api.ts` |

### listSandboxes

- **Signature**: `listSandboxes(request: Sandboxe.ListSandboxesRequest, options?: RequestOptions): ApiPromise<undefined, Sandboxe.ListSandboxesError>`
- **Wire**: `POST /#ListSandboxes`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `Sandboxe.ListSandboxesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sandboxe.ListSandboxesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AwsCodeBuildSandboxeApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AwsCodeBuildSandboxeApi` | `xAmzTarget1AwsCodeBuildSandboxeApiSchema` | `src/models/xamz-target1-aws-code-build-sandboxe-api.ts` |

### listSandboxesForProject

- **Signature**: `listSandboxesForProject(request: Sandboxe.ListSandboxesForProjectRequest, options?: RequestOptions): ApiPromise<undefined, Sandboxe.ListSandboxesForProjectError>`
- **Wire**: `POST /#ListSandboxesForProject`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `Sandboxe.ListSandboxesForProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sandboxe.ListSandboxesForProjectRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AwsCodeBuildSandboxeApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AwsCodeBuildSandboxeApi` | `xAmzTarget2AwsCodeBuildSandboxeApiSchema` | `src/models/xamz-target2-aws-code-build-sandboxe-api.ts` |

