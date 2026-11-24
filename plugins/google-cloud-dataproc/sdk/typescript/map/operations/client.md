<!-- Generated file — do not edit; regenerated with the SDK. -->

# GoogleCloudDataprocClient — ungrouped operations

Accessor: `client` (the client itself) · Source: `src/client.ts` · 180 operations · Request and error types: namespace `GoogleCloudDataprocClient`

Operations the spec leaves untagged are methods on the client rather than on a resource, so there is no accessor property to go through. The request type still lives in a namespace merged onto the exported class, so you write `GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesCreateRequest`.

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-cloud-dataproc`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### dataprocProjectsLocationsAutoscalingPoliciesCreate

- **Signature**: `dataprocProjectsLocationsAutoscalingPoliciesCreate(request: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesCreateRequest, options?: RequestOptions): ApiPromise<AutoscalingPolicy, GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AutoscalingPolicy`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `body` | `body` | `AutoscalingPolicy` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AutoscalingPolicy` | `autoscalingPolicySchema` | `src/models/autoscaling-policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsAutoscalingPoliciesDelete

- **Signature**: `dataprocProjectsLocationsAutoscalingPoliciesDelete(request: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies/{autoscalingPoliciesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `autoscalingPoliciesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsAutoscalingPoliciesGet

- **Signature**: `dataprocProjectsLocationsAutoscalingPoliciesGet(request: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesGetRequest, options?: RequestOptions): ApiPromise<AutoscalingPolicy, GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies/{autoscalingPoliciesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AutoscalingPolicy`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `autoscalingPoliciesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AutoscalingPolicy` | `autoscalingPolicySchema` | `src/models/autoscaling-policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsAutoscalingPoliciesGetIamPolicy

- **Signature**: `dataprocProjectsLocationsAutoscalingPoliciesGetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies/{autoscalingPoliciesId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `autoscalingPoliciesId` | `path` | `string` | yes |
| `body` | `body` | `GetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetIamPolicyRequest` | `getIamPolicyRequestSchema` | `src/models/get-iam-policy-request.ts` |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsAutoscalingPoliciesList

- **Signature**: `dataprocProjectsLocationsAutoscalingPoliciesList(request: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesListRequest, options?: RequestOptions): ApiPromise<ListAutoscalingPoliciesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListAutoscalingPoliciesResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListAutoscalingPoliciesResponse` | `listAutoscalingPoliciesResponseSchema` | `src/models/list-autoscaling-policies-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsAutoscalingPoliciesSetIamPolicy

- **Signature**: `dataprocProjectsLocationsAutoscalingPoliciesSetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies/{autoscalingPoliciesId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `autoscalingPoliciesId` | `path` | `string` | yes |
| `body` | `body` | `SetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetIamPolicyRequest` | `setIamPolicyRequestSchema` | `src/models/set-iam-policy-request.ts` |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsAutoscalingPoliciesTestIamPermissions

- **Signature**: `dataprocProjectsLocationsAutoscalingPoliciesTestIamPermissions(request: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsRequest, options?: RequestOptions): ApiPromise<TestIamPermissionsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies/{autoscalingPoliciesId}:testIamPermissions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `autoscalingPoliciesId` | `path` | `string` | yes |
| `body` | `body` | `TestIamPermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestIamPermissionsRequest` | `testIamPermissionsRequestSchema` | `src/models/test-iam-permissions-request.ts` |
| `TestIamPermissionsResponse` | `testIamPermissionsResponseSchema` | `src/models/test-iam-permissions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsAutoscalingPoliciesUpdate

- **Signature**: `dataprocProjectsLocationsAutoscalingPoliciesUpdate(request: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesUpdateRequest, options?: RequestOptions): ApiPromise<AutoscalingPolicy, GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesUpdateError>`
- **Wire**: `PUT /v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies/{autoscalingPoliciesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AutoscalingPolicy`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesUpdateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `autoscalingPoliciesId` | `path` | `string` | yes |
| `body` | `body` | `AutoscalingPolicy` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AutoscalingPolicy` | `autoscalingPolicySchema` | `src/models/autoscaling-policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesAnalyze

- **Signature**: `dataprocProjectsLocationsBatchesAnalyze(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesAnalyzeRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesAnalyzeError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}:analyze`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesAnalyzeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesAnalyzeRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |
| `body` | `body` | `AnalyzeBatchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnalyzeBatchRequest` | `analyzeBatchRequestSchema` | `src/models/analyze-batch-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesCreate

- **Signature**: `dataprocProjectsLocationsBatchesCreate(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesCreateRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/batches`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesCreateRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchId` | `query` | `string` | no |
| `requestId` | `query` | `string` | no |
| `body` | `body` | `Batch` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Batch` | `batchSchema` | `src/models/batch.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesDelete

- **Signature**: `dataprocProjectsLocationsBatchesDelete(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesGet

- **Signature**: `dataprocProjectsLocationsBatchesGet(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesGetRequest, options?: RequestOptions): ApiPromise<Batch, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Batch`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Batch` | `batchSchema` | `src/models/batch.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesList

- **Signature**: `dataprocProjectsLocationsBatchesList(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesListRequest, options?: RequestOptions): ApiPromise<ListBatchesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListBatchesResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesListRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `orderBy` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListBatchesResponse` | `listBatchesResponseSchema` | `src/models/list-batches-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesSparkApplicationsAccess

- **Signature**: `dataprocProjectsLocationsBatchesSparkApplicationsAccess(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessRequest, options?: RequestOptions): ApiPromise<AccessSparkApplicationResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:access`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccessSparkApplicationResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `parent` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessSparkApplicationResponse` | `accessSparkApplicationResponseSchema` | `src/models/access-spark-application-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfo

- **Signature**: `dataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfo(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoRequest, options?: RequestOptions): ApiPromise<AccessSparkApplicationEnvironmentInfoResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessEnvironmentInfo`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccessSparkApplicationEnvironmentInfoResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `parent` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessSparkApplicationEnvironmentInfoResponse` | `accessSparkApplicationEnvironmentInfoResponseSchema` | `src/models/access-spark-application-environment-info-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesSparkApplicationsAccessJob

- **Signature**: `dataprocProjectsLocationsBatchesSparkApplicationsAccessJob(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessJobRequest, options?: RequestOptions): ApiPromise<AccessSparkApplicationJobResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessJobError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessJob`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccessSparkApplicationJobResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessJobRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `jobId` | `query` | `string` | no |
| `parent` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessSparkApplicationJobResponse` | `accessSparkApplicationJobResponseSchema` | `src/models/access-spark-application-job-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfo

- **Signature**: `dataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfo(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoRequest, options?: RequestOptions): ApiPromise<AccessSparkApplicationNativeBuildInfoResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessNativeBuildInfo`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccessSparkApplicationNativeBuildInfoResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `parent` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessSparkApplicationNativeBuildInfoResponse` | `accessSparkApplicationNativeBuildInfoResponseSchema` | `src/models/access-spark-application-native-build-info-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQuery

- **Signature**: `dataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQuery(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryRequest, options?: RequestOptions): ApiPromise<AccessSparkApplicationNativeSqlQueryResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessNativeSqlQuery`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccessSparkApplicationNativeSqlQueryResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `executionId` | `query` | `string` | no |
| `parent` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessSparkApplicationNativeSqlQueryResponse` | `accessSparkApplicationNativeSqlQueryResponseSchema` | `src/models/access-spark-application-native-sql-query-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlan

- **Signature**: `dataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlan(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanRequest, options?: RequestOptions): ApiPromise<AccessSparkApplicationSqlSparkPlanGraphResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessSqlPlan`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccessSparkApplicationSqlSparkPlanGraphResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `executionId` | `query` | `string` | no |
| `parent` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessSparkApplicationSqlSparkPlanGraphResponse` | `accessSparkApplicationSqlSparkPlanGraphResponseSchema` | `src/models/access-spark-application-sql-spark-plan-graph-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQuery

- **Signature**: `dataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQuery(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryRequest, options?: RequestOptions): ApiPromise<AccessSparkApplicationSqlQueryResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessSqlQuery`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccessSparkApplicationSqlQueryResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `details` | `query` | `boolean` | no |
| `executionId` | `query` | `string` | no |
| `parent` | `query` | `string` | no |
| `planDescription` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessSparkApplicationSqlQueryResponse` | `accessSparkApplicationSqlQueryResponseSchema` | `src/models/access-spark-application-sql-query-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttempt

- **Signature**: `dataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttempt(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptRequest, options?: RequestOptions): ApiPromise<AccessSparkApplicationStageAttemptResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessStageAttempt`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccessSparkApplicationStageAttemptResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `parent` | `query` | `string` | no |
| `stageAttemptId` | `query` | `number` | no |
| `stageId` | `query` | `string` | no |
| `summaryMetricsMask` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessSparkApplicationStageAttemptResponse` | `accessSparkApplicationStageAttemptResponseSchema` | `src/models/access-spark-application-stage-attempt-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraph

- **Signature**: `dataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraph(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphRequest, options?: RequestOptions): ApiPromise<AccessSparkApplicationStageRddOperationGraphResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessStageRddGraph`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccessSparkApplicationStageRddOperationGraphResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `parent` | `query` | `string` | no |
| `stageId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessSparkApplicationStageRddOperationGraphResponse` | `accessSparkApplicationStageRddOperationGraphResponseSchema` | `src/models/access-spark-application-stage-rdd-operation-graph-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfig

- **Signature**: `dataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfig(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigRequest, options?: RequestOptions): ApiPromise<ComputeTuningConfigResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:computeTuningConfig`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ComputeTuningConfigResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `executionId` | `query` | `string` | no |
| `parent` | `query` | `string` | no |
| `semanticQueryId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ComputeTuningConfigResponse` | `computeTuningConfigResponseSchema` | `src/models/compute-tuning-config-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesSparkApplicationsSearch

- **Signature**: `dataprocProjectsLocationsBatchesSparkApplicationsSearch(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchRequest, options?: RequestOptions): ApiPromise<SearchSparkApplicationsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications:search`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchSparkApplicationsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |
| `applicationStatus` | `query` | `ApplicationStatus` | no |
| `maxEndTime` | `query` | `string` | no |
| `maxTime` | `query` | `string` | no |
| `minEndTime` | `query` | `string` | no |
| `minTime` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApplicationStatus` | `applicationStatusSchema` | `src/models/application-status.ts` |
| `SearchSparkApplicationsResponse` | `searchSparkApplicationsResponseSchema` | `src/models/search-spark-applications-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummary

- **Signature**: `dataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummary(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryRequest, options?: RequestOptions): ApiPromise<SearchSparkApplicationExecutorStageSummaryResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchExecutorStageSummary`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchSparkApplicationExecutorStageSummaryResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `parent` | `query` | `string` | no |
| `stageAttemptId` | `query` | `number` | no |
| `stageId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchSparkApplicationExecutorStageSummaryResponse` | `searchSparkApplicationExecutorStageSummaryResponseSchema` | `src/models/search-spark-application-executor-stage-summary-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesSparkApplicationsSearchExecutors

- **Signature**: `dataprocProjectsLocationsBatchesSparkApplicationsSearchExecutors(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsRequest, options?: RequestOptions): ApiPromise<SearchSparkApplicationExecutorsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchExecutors`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchSparkApplicationExecutorsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `executorStatus` | `query` | `ExecutorStatus` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `parent` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExecutorStatus` | `executorStatusSchema` | `src/models/executor-status.ts` |
| `SearchSparkApplicationExecutorsResponse` | `searchSparkApplicationExecutorsResponseSchema` | `src/models/search-spark-application-executors-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesSparkApplicationsSearchJobs

- **Signature**: `dataprocProjectsLocationsBatchesSparkApplicationsSearchJobs(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsRequest, options?: RequestOptions): ApiPromise<SearchSparkApplicationJobsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchJobs`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchSparkApplicationJobsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `jobStatus` | `query` | `JobStatus2` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `parent` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JobStatus2` | `jobStatus2Schema` | `src/models/job-status2.ts` |
| `SearchSparkApplicationJobsResponse` | `searchSparkApplicationJobsResponseSchema` | `src/models/search-spark-application-jobs-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueries

- **Signature**: `dataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueries(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesRequest, options?: RequestOptions): ApiPromise<SearchSparkApplicationNativeSqlQueriesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchNativeSqlQueries`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchSparkApplicationNativeSqlQueriesResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `parent` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchSparkApplicationNativeSqlQueriesResponse` | `searchSparkApplicationNativeSqlQueriesResponseSchema` | `src/models/search-spark-application-native-sql-queries-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueries

- **Signature**: `dataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueries(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesRequest, options?: RequestOptions): ApiPromise<SearchSparkApplicationSqlQueriesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchSqlQueries`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchSparkApplicationSqlQueriesResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `details` | `query` | `boolean` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `parent` | `query` | `string` | no |
| `planDescription` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchSparkApplicationSqlQueriesResponse` | `searchSparkApplicationSqlQueriesResponseSchema` | `src/models/search-spark-application-sql-queries-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasks

- **Signature**: `dataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasks(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksRequest, options?: RequestOptions): ApiPromise<SearchSparkApplicationStageAttemptTasksResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchStageAttemptTasks`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchSparkApplicationStageAttemptTasksResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksRequest` (11):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `parent` | `query` | `string` | no |
| `sortRuntime` | `query` | `boolean` | no |
| `stageAttemptId` | `query` | `number` | no |
| `stageId` | `query` | `string` | no |
| `taskStatus` | `query` | `TaskStatus` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskStatus` | `taskStatusSchema` | `src/models/task-status.ts` |
| `SearchSparkApplicationStageAttemptTasksResponse` | `searchSparkApplicationStageAttemptTasksResponseSchema` | `src/models/search-spark-application-stage-attempt-tasks-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttempts

- **Signature**: `dataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttempts(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsRequest, options?: RequestOptions): ApiPromise<SearchSparkApplicationStageAttemptsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchStageAttempts`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchSparkApplicationStageAttemptsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `parent` | `query` | `string` | no |
| `stageId` | `query` | `string` | no |
| `summaryMetricsMask` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchSparkApplicationStageAttemptsResponse` | `searchSparkApplicationStageAttemptsResponseSchema` | `src/models/search-spark-application-stage-attempts-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesSparkApplicationsSearchStages

- **Signature**: `dataprocProjectsLocationsBatchesSparkApplicationsSearchStages(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesRequest, options?: RequestOptions): ApiPromise<SearchSparkApplicationStagesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchStages`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchSparkApplicationStagesResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `parent` | `query` | `string` | no |
| `stageStatus` | `query` | `StageStatus` | no |
| `summaryMetricsMask` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StageStatus` | `stageStatusSchema` | `src/models/stage-status.ts` |
| `SearchSparkApplicationStagesResponse` | `searchSparkApplicationStagesResponseSchema` | `src/models/search-spark-application-stages-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutors

- **Signature**: `dataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutors(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsRequest, options?: RequestOptions): ApiPromise<SummarizeSparkApplicationExecutorsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:summarizeExecutors`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SummarizeSparkApplicationExecutorsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `parent` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SummarizeSparkApplicationExecutorsResponse` | `summarizeSparkApplicationExecutorsResponseSchema` | `src/models/summarize-spark-application-executors-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobs

- **Signature**: `dataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobs(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsRequest, options?: RequestOptions): ApiPromise<SummarizeSparkApplicationJobsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:summarizeJobs`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SummarizeSparkApplicationJobsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `parent` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SummarizeSparkApplicationJobsResponse` | `summarizeSparkApplicationJobsResponseSchema` | `src/models/summarize-spark-application-jobs-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasks

- **Signature**: `dataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasks(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksRequest, options?: RequestOptions): ApiPromise<SummarizeSparkApplicationStageAttemptTasksResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:summarizeStageAttemptTasks`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SummarizeSparkApplicationStageAttemptTasksResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `parent` | `query` | `string` | no |
| `stageAttemptId` | `query` | `number` | no |
| `stageId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SummarizeSparkApplicationStageAttemptTasksResponse` | `summarizeSparkApplicationStageAttemptTasksResponseSchema` | `src/models/summarize-spark-application-stage-attempt-tasks-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesSparkApplicationsSummarizeStages

- **Signature**: `dataprocProjectsLocationsBatchesSparkApplicationsSummarizeStages(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesRequest, options?: RequestOptions): ApiPromise<SummarizeSparkApplicationStagesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:summarizeStages`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SummarizeSparkApplicationStagesResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `parent` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SummarizeSparkApplicationStagesResponse` | `summarizeSparkApplicationStagesResponseSchema` | `src/models/summarize-spark-application-stages-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsBatchesSparkApplicationsWrite

- **Signature**: `dataprocProjectsLocationsBatchesSparkApplicationsWrite(request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsWriteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsWriteError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:write`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsWriteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsWriteRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `batchesId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `body` | `body` | `WriteSparkApplicationContextRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WriteSparkApplicationContextRequest` | `writeSparkApplicationContextRequestSchema` | `src/models/write-spark-application-context-request.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsOperationsCancel

- **Signature**: `dataprocProjectsLocationsOperationsCancel(request: GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsCancelRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsCancelError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsCancelRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsOperationsDelete

- **Signature**: `dataprocProjectsLocationsOperationsDelete(request: GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsOperationsGet

- **Signature**: `dataprocProjectsLocationsOperationsGet(request: GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsGetRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsOperationsList

- **Signature**: `dataprocProjectsLocationsOperationsList(request: GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsListRequest, options?: RequestOptions): ApiPromise<ListOperationsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/operations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListOperationsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsListRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `returnPartialSuccess` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListOperationsResponse` | `listOperationsResponseSchema` | `src/models/list-operations-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionTemplatesCreate

- **Signature**: `dataprocProjectsLocationsSessionTemplatesCreate(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesCreateRequest, options?: RequestOptions): ApiPromise<SessionTemplate, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/sessionTemplates`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SessionTemplate`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `body` | `body` | `SessionTemplate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionTemplate` | `sessionTemplateSchema` | `src/models/session-template.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionTemplatesDelete

- **Signature**: `dataprocProjectsLocationsSessionTemplatesDelete(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/sessionTemplates/{sessionTemplatesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionTemplatesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionTemplatesGet

- **Signature**: `dataprocProjectsLocationsSessionTemplatesGet(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesGetRequest, options?: RequestOptions): ApiPromise<SessionTemplate, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessionTemplates/{sessionTemplatesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SessionTemplate`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionTemplatesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionTemplate` | `sessionTemplateSchema` | `src/models/session-template.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionTemplatesList

- **Signature**: `dataprocProjectsLocationsSessionTemplatesList(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesListRequest, options?: RequestOptions): ApiPromise<ListSessionTemplatesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessionTemplates`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSessionTemplatesResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSessionTemplatesResponse` | `listSessionTemplatesResponseSchema` | `src/models/list-session-templates-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionTemplatesPatch

- **Signature**: `dataprocProjectsLocationsSessionTemplatesPatch(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesPatchRequest, options?: RequestOptions): ApiPromise<SessionTemplate, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/sessionTemplates/{sessionTemplatesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SessionTemplate`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesPatchRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionTemplatesId` | `path` | `string` | yes |
| `body` | `body` | `SessionTemplate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionTemplate` | `sessionTemplateSchema` | `src/models/session-template.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsCreate

- **Signature**: `dataprocProjectsLocationsSessionsCreate(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsCreateRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/sessions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsCreateRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `requestId` | `query` | `string` | no |
| `sessionId` | `query` | `string` | no |
| `body` | `body` | `Session` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Session` | `sessionSchema` | `src/models/session.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsDelete

- **Signature**: `dataprocProjectsLocationsSessionsDelete(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsDeleteRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsDeleteRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionsId` | `path` | `string` | yes |
| `requestId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsGet

- **Signature**: `dataprocProjectsLocationsSessionsGet(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsGetRequest, options?: RequestOptions): ApiPromise<Session, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Session`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Session` | `sessionSchema` | `src/models/session.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsList

- **Signature**: `dataprocProjectsLocationsSessionsList(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsListRequest, options?: RequestOptions): ApiPromise<ListSessionsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSessionsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSessionsResponse` | `listSessionsResponseSchema` | `src/models/list-sessions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsSparkApplicationsAccess

- **Signature**: `dataprocProjectsLocationsSessionsSparkApplicationsAccess(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessRequest, options?: RequestOptions): ApiPromise<AccessSessionSparkApplicationResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:access`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccessSessionSparkApplicationResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionsId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `parent` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessSessionSparkApplicationResponse` | `accessSessionSparkApplicationResponseSchema` | `src/models/access-session-spark-application-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfo

- **Signature**: `dataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfo(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoRequest, options?: RequestOptions): ApiPromise<AccessSessionSparkApplicationEnvironmentInfoResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessEnvironmentInfo`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccessSessionSparkApplicationEnvironmentInfoResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionsId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `parent` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessSessionSparkApplicationEnvironmentInfoResponse` | `accessSessionSparkApplicationEnvironmentInfoResponseSchema` | `src/models/access-session-spark-application-environment-info-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsSparkApplicationsAccessJob

- **Signature**: `dataprocProjectsLocationsSessionsSparkApplicationsAccessJob(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessJobRequest, options?: RequestOptions): ApiPromise<AccessSessionSparkApplicationJobResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessJobError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessJob`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccessSessionSparkApplicationJobResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessJobRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionsId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `jobId` | `query` | `string` | no |
| `parent` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessSessionSparkApplicationJobResponse` | `accessSessionSparkApplicationJobResponseSchema` | `src/models/access-session-spark-application-job-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfo

- **Signature**: `dataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfo(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoRequest, options?: RequestOptions): ApiPromise<AccessSessionSparkApplicationNativeBuildInfoResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessNativeBuildInfo`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccessSessionSparkApplicationNativeBuildInfoResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionsId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `parent` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessSessionSparkApplicationNativeBuildInfoResponse` | `accessSessionSparkApplicationNativeBuildInfoResponseSchema` | `src/models/access-session-spark-application-native-build-info-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQuery

- **Signature**: `dataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQuery(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryRequest, options?: RequestOptions): ApiPromise<AccessSessionSparkApplicationNativeSqlQueryResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessNativeSqlQuery`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccessSessionSparkApplicationNativeSqlQueryResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionsId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `executionId` | `query` | `string` | no |
| `parent` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessSessionSparkApplicationNativeSqlQueryResponse` | `accessSessionSparkApplicationNativeSqlQueryResponseSchema` | `src/models/access-session-spark-application-native-sql-query-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlan

- **Signature**: `dataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlan(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanRequest, options?: RequestOptions): ApiPromise<AccessSessionSparkApplicationSqlSparkPlanGraphResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessSqlPlan`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccessSessionSparkApplicationSqlSparkPlanGraphResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionsId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `executionId` | `query` | `string` | no |
| `parent` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessSessionSparkApplicationSqlSparkPlanGraphResponse` | `accessSessionSparkApplicationSqlSparkPlanGraphResponseSchema` | `src/models/access-session-spark-application-sql-spark-plan-graph-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQuery

- **Signature**: `dataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQuery(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryRequest, options?: RequestOptions): ApiPromise<AccessSessionSparkApplicationSqlQueryResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessSqlQuery`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccessSessionSparkApplicationSqlQueryResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionsId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `details` | `query` | `boolean` | no |
| `executionId` | `query` | `string` | no |
| `parent` | `query` | `string` | no |
| `planDescription` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessSessionSparkApplicationSqlQueryResponse` | `accessSessionSparkApplicationSqlQueryResponseSchema` | `src/models/access-session-spark-application-sql-query-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttempt

- **Signature**: `dataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttempt(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptRequest, options?: RequestOptions): ApiPromise<AccessSessionSparkApplicationStageAttemptResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessStageAttempt`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccessSessionSparkApplicationStageAttemptResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionsId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `parent` | `query` | `string` | no |
| `stageAttemptId` | `query` | `number` | no |
| `stageId` | `query` | `string` | no |
| `summaryMetricsMask` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessSessionSparkApplicationStageAttemptResponse` | `accessSessionSparkApplicationStageAttemptResponseSchema` | `src/models/access-session-spark-application-stage-attempt-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraph

- **Signature**: `dataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraph(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphRequest, options?: RequestOptions): ApiPromise<AccessSessionSparkApplicationStageRddOperationGraphResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessStageRddGraph`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccessSessionSparkApplicationStageRddOperationGraphResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionsId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `parent` | `query` | `string` | no |
| `stageId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessSessionSparkApplicationStageRddOperationGraphResponse` | `accessSessionSparkApplicationStageRddOperationGraphResponseSchema` | `src/models/access-session-spark-application-stage-rdd-operation-graph-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsSparkApplicationsSearch

- **Signature**: `dataprocProjectsLocationsSessionsSparkApplicationsSearch(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchRequest, options?: RequestOptions): ApiPromise<SearchSessionSparkApplicationsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications:search`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchSessionSparkApplicationsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionsId` | `path` | `string` | yes |
| `applicationStatus` | `query` | `ApplicationStatus` | no |
| `maxEndTime` | `query` | `string` | no |
| `maxTime` | `query` | `string` | no |
| `minEndTime` | `query` | `string` | no |
| `minTime` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApplicationStatus` | `applicationStatusSchema` | `src/models/application-status.ts` |
| `SearchSessionSparkApplicationsResponse` | `searchSessionSparkApplicationsResponseSchema` | `src/models/search-session-spark-applications-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummary

- **Signature**: `dataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummary(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryRequest, options?: RequestOptions): ApiPromise<SearchSessionSparkApplicationExecutorStageSummaryResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchExecutorStageSummary`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchSessionSparkApplicationExecutorStageSummaryResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionsId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `parent` | `query` | `string` | no |
| `stageAttemptId` | `query` | `number` | no |
| `stageId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchSessionSparkApplicationExecutorStageSummaryResponse` | `searchSessionSparkApplicationExecutorStageSummaryResponseSchema` | `src/models/search-session-spark-application-executor-stage-summary-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsSparkApplicationsSearchExecutors

- **Signature**: `dataprocProjectsLocationsSessionsSparkApplicationsSearchExecutors(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsRequest, options?: RequestOptions): ApiPromise<SearchSessionSparkApplicationExecutorsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchExecutors`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchSessionSparkApplicationExecutorsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionsId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `executorStatus` | `query` | `ExecutorStatus` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `parent` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExecutorStatus` | `executorStatusSchema` | `src/models/executor-status.ts` |
| `SearchSessionSparkApplicationExecutorsResponse` | `searchSessionSparkApplicationExecutorsResponseSchema` | `src/models/search-session-spark-application-executors-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsSparkApplicationsSearchJobs

- **Signature**: `dataprocProjectsLocationsSessionsSparkApplicationsSearchJobs(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsRequest, options?: RequestOptions): ApiPromise<SearchSessionSparkApplicationJobsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchJobs`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchSessionSparkApplicationJobsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionsId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `jobIds` | `query` | `string[]` | no |
| `jobStatus` | `query` | `JobStatus2` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `parent` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JobStatus2` | `jobStatus2Schema` | `src/models/job-status2.ts` |
| `SearchSessionSparkApplicationJobsResponse` | `searchSessionSparkApplicationJobsResponseSchema` | `src/models/search-session-spark-application-jobs-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueries

- **Signature**: `dataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueries(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesRequest, options?: RequestOptions): ApiPromise<SearchSessionSparkApplicationNativeSqlQueriesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchNativeSqlQueries`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchSessionSparkApplicationNativeSqlQueriesResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionsId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `parent` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchSessionSparkApplicationNativeSqlQueriesResponse` | `searchSessionSparkApplicationNativeSqlQueriesResponseSchema` | `src/models/search-session-spark-application-native-sql-queries-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueries

- **Signature**: `dataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueries(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesRequest, options?: RequestOptions): ApiPromise<SearchSessionSparkApplicationSqlQueriesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchSqlQueries`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchSessionSparkApplicationSqlQueriesResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionsId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `details` | `query` | `boolean` | no |
| `operationIds` | `query` | `string[]` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `parent` | `query` | `string` | no |
| `planDescription` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchSessionSparkApplicationSqlQueriesResponse` | `searchSessionSparkApplicationSqlQueriesResponseSchema` | `src/models/search-session-spark-application-sql-queries-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasks

- **Signature**: `dataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasks(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksRequest, options?: RequestOptions): ApiPromise<SearchSessionSparkApplicationStageAttemptTasksResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchStageAttemptTasks`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchSessionSparkApplicationStageAttemptTasksResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksRequest` (11):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionsId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `parent` | `query` | `string` | no |
| `sortRuntime` | `query` | `boolean` | no |
| `stageAttemptId` | `query` | `number` | no |
| `stageId` | `query` | `string` | no |
| `taskStatus` | `query` | `TaskStatus` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskStatus` | `taskStatusSchema` | `src/models/task-status.ts` |
| `SearchSessionSparkApplicationStageAttemptTasksResponse` | `searchSessionSparkApplicationStageAttemptTasksResponseSchema` | `src/models/search-session-spark-application-stage-attempt-tasks-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttempts

- **Signature**: `dataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttempts(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsRequest, options?: RequestOptions): ApiPromise<SearchSessionSparkApplicationStageAttemptsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchStageAttempts`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchSessionSparkApplicationStageAttemptsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionsId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `parent` | `query` | `string` | no |
| `stageId` | `query` | `string` | no |
| `summaryMetricsMask` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchSessionSparkApplicationStageAttemptsResponse` | `searchSessionSparkApplicationStageAttemptsResponseSchema` | `src/models/search-session-spark-application-stage-attempts-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsSparkApplicationsSearchStages

- **Signature**: `dataprocProjectsLocationsSessionsSparkApplicationsSearchStages(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesRequest, options?: RequestOptions): ApiPromise<SearchSessionSparkApplicationStagesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchStages`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchSessionSparkApplicationStagesResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionsId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `parent` | `query` | `string` | no |
| `stageIds` | `query` | `string[]` | no |
| `stageStatus` | `query` | `StageStatus` | no |
| `summaryMetricsMask` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StageStatus` | `stageStatusSchema` | `src/models/stage-status.ts` |
| `SearchSessionSparkApplicationStagesResponse` | `searchSessionSparkApplicationStagesResponseSchema` | `src/models/search-session-spark-application-stages-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutors

- **Signature**: `dataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutors(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsRequest, options?: RequestOptions): ApiPromise<SummarizeSessionSparkApplicationExecutorsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:summarizeExecutors`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SummarizeSessionSparkApplicationExecutorsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionsId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `parent` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SummarizeSessionSparkApplicationExecutorsResponse` | `summarizeSessionSparkApplicationExecutorsResponseSchema` | `src/models/summarize-session-spark-application-executors-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobs

- **Signature**: `dataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobs(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsRequest, options?: RequestOptions): ApiPromise<SummarizeSessionSparkApplicationJobsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:summarizeJobs`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SummarizeSessionSparkApplicationJobsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionsId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `jobIds` | `query` | `string[]` | no |
| `parent` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SummarizeSessionSparkApplicationJobsResponse` | `summarizeSessionSparkApplicationJobsResponseSchema` | `src/models/summarize-session-spark-application-jobs-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasks

- **Signature**: `dataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasks(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksRequest, options?: RequestOptions): ApiPromise<SummarizeSessionSparkApplicationStageAttemptTasksResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:summarizeStageAttemptTasks`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SummarizeSessionSparkApplicationStageAttemptTasksResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionsId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `parent` | `query` | `string` | no |
| `stageAttemptId` | `query` | `number` | no |
| `stageId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SummarizeSessionSparkApplicationStageAttemptTasksResponse` | `summarizeSessionSparkApplicationStageAttemptTasksResponseSchema` | `src/models/summarize-session-spark-application-stage-attempt-tasks-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsSparkApplicationsSummarizeStages

- **Signature**: `dataprocProjectsLocationsSessionsSparkApplicationsSummarizeStages(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesRequest, options?: RequestOptions): ApiPromise<SummarizeSessionSparkApplicationStagesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:summarizeStages`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SummarizeSessionSparkApplicationStagesResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionsId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `parent` | `query` | `string` | no |
| `stageIds` | `query` | `string[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SummarizeSessionSparkApplicationStagesResponse` | `summarizeSessionSparkApplicationStagesResponseSchema` | `src/models/summarize-session-spark-application-stages-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsSparkApplicationsWrite

- **Signature**: `dataprocProjectsLocationsSessionsSparkApplicationsWrite(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsWriteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsWriteError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:write`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsWriteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsWriteRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionsId` | `path` | `string` | yes |
| `sparkApplicationsId` | `path` | `string` | yes |
| `body` | `body` | `WriteSessionSparkApplicationContextRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WriteSessionSparkApplicationContextRequest` | `writeSessionSparkApplicationContextRequestSchema` | `src/models/write-session-spark-application-context-request.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsSessionsTerminate

- **Signature**: `dataprocProjectsLocationsSessionsTerminate(request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsTerminateRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsTerminateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}:terminate`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsTerminateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsTerminateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `sessionsId` | `path` | `string` | yes |
| `body` | `body` | `TerminateSessionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminateSessionRequest` | `terminateSessionRequestSchema` | `src/models/terminate-session-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsWorkflowTemplatesCreate

- **Signature**: `dataprocProjectsLocationsWorkflowTemplatesCreate(request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesCreateRequest, options?: RequestOptions): ApiPromise<WorkflowTemplate, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkflowTemplate`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `body` | `body` | `WorkflowTemplate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkflowTemplate` | `workflowTemplateSchema` | `src/models/workflow-template.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsWorkflowTemplatesDelete

- **Signature**: `dataprocProjectsLocationsWorkflowTemplatesDelete(request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesDeleteRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `workflowTemplatesId` | `path` | `string` | yes |
| `version` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsWorkflowTemplatesGet

- **Signature**: `dataprocProjectsLocationsWorkflowTemplatesGet(request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesGetRequest, options?: RequestOptions): ApiPromise<WorkflowTemplate, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkflowTemplate`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `workflowTemplatesId` | `path` | `string` | yes |
| `version` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkflowTemplate` | `workflowTemplateSchema` | `src/models/workflow-template.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsWorkflowTemplatesGetIamPolicy

- **Signature**: `dataprocProjectsLocationsWorkflowTemplatesGetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `workflowTemplatesId` | `path` | `string` | yes |
| `body` | `body` | `GetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetIamPolicyRequest` | `getIamPolicyRequestSchema` | `src/models/get-iam-policy-request.ts` |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsWorkflowTemplatesInstantiate

- **Signature**: `dataprocProjectsLocationsWorkflowTemplatesInstantiate(request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesInstantiateRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesInstantiateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}:instantiate`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesInstantiateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesInstantiateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `workflowTemplatesId` | `path` | `string` | yes |
| `body` | `body` | `InstantiateWorkflowTemplateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InstantiateWorkflowTemplateRequest` | `instantiateWorkflowTemplateRequestSchema` | `src/models/instantiate-workflow-template-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsWorkflowTemplatesInstantiateInline

- **Signature**: `dataprocProjectsLocationsWorkflowTemplatesInstantiateInline(request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates:instantiateInline`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `requestId` | `query` | `string` | no |
| `body` | `body` | `WorkflowTemplate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkflowTemplate` | `workflowTemplateSchema` | `src/models/workflow-template.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsWorkflowTemplatesList

- **Signature**: `dataprocProjectsLocationsWorkflowTemplatesList(request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesListRequest, options?: RequestOptions): ApiPromise<ListWorkflowTemplatesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListWorkflowTemplatesResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListWorkflowTemplatesResponse` | `listWorkflowTemplatesResponseSchema` | `src/models/list-workflow-templates-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsWorkflowTemplatesSetIamPolicy

- **Signature**: `dataprocProjectsLocationsWorkflowTemplatesSetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `workflowTemplatesId` | `path` | `string` | yes |
| `body` | `body` | `SetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetIamPolicyRequest` | `setIamPolicyRequestSchema` | `src/models/set-iam-policy-request.ts` |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsWorkflowTemplatesTestIamPermissions

- **Signature**: `dataprocProjectsLocationsWorkflowTemplatesTestIamPermissions(request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsRequest, options?: RequestOptions): ApiPromise<TestIamPermissionsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}:testIamPermissions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `workflowTemplatesId` | `path` | `string` | yes |
| `body` | `body` | `TestIamPermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestIamPermissionsRequest` | `testIamPermissionsRequestSchema` | `src/models/test-iam-permissions-request.ts` |
| `TestIamPermissionsResponse` | `testIamPermissionsResponseSchema` | `src/models/test-iam-permissions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsLocationsWorkflowTemplatesUpdate

- **Signature**: `dataprocProjectsLocationsWorkflowTemplatesUpdate(request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesUpdateRequest, options?: RequestOptions): ApiPromise<WorkflowTemplate, GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesUpdateError>`
- **Wire**: `PUT /v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkflowTemplate`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesUpdateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `workflowTemplatesId` | `path` | `string` | yes |
| `body` | `body` | `WorkflowTemplate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkflowTemplate` | `workflowTemplateSchema` | `src/models/workflow-template.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsAutoscalingPoliciesCreate

- **Signature**: `dataprocProjectsRegionsAutoscalingPoliciesCreate(request: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesCreateRequest, options?: RequestOptions): ApiPromise<AutoscalingPolicy, GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AutoscalingPolicy`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `body` | `body` | `AutoscalingPolicy` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AutoscalingPolicy` | `autoscalingPolicySchema` | `src/models/autoscaling-policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsAutoscalingPoliciesDelete

- **Signature**: `dataprocProjectsRegionsAutoscalingPoliciesDelete(request: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies/{autoscalingPoliciesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `autoscalingPoliciesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsAutoscalingPoliciesGet

- **Signature**: `dataprocProjectsRegionsAutoscalingPoliciesGet(request: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesGetRequest, options?: RequestOptions): ApiPromise<AutoscalingPolicy, GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies/{autoscalingPoliciesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AutoscalingPolicy`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `autoscalingPoliciesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AutoscalingPolicy` | `autoscalingPolicySchema` | `src/models/autoscaling-policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsAutoscalingPoliciesGetIamPolicy

- **Signature**: `dataprocProjectsRegionsAutoscalingPoliciesGetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies/{autoscalingPoliciesId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `autoscalingPoliciesId` | `path` | `string` | yes |
| `body` | `body` | `GetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetIamPolicyRequest` | `getIamPolicyRequestSchema` | `src/models/get-iam-policy-request.ts` |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsAutoscalingPoliciesList

- **Signature**: `dataprocProjectsRegionsAutoscalingPoliciesList(request: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesListRequest, options?: RequestOptions): ApiPromise<ListAutoscalingPoliciesResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesListError>`
- **Wire**: `GET /v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListAutoscalingPoliciesResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListAutoscalingPoliciesResponse` | `listAutoscalingPoliciesResponseSchema` | `src/models/list-autoscaling-policies-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsAutoscalingPoliciesSetIamPolicy

- **Signature**: `dataprocProjectsRegionsAutoscalingPoliciesSetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies/{autoscalingPoliciesId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `autoscalingPoliciesId` | `path` | `string` | yes |
| `body` | `body` | `SetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetIamPolicyRequest` | `setIamPolicyRequestSchema` | `src/models/set-iam-policy-request.ts` |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsAutoscalingPoliciesTestIamPermissions

- **Signature**: `dataprocProjectsRegionsAutoscalingPoliciesTestIamPermissions(request: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsRequest, options?: RequestOptions): ApiPromise<TestIamPermissionsResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsError>`
- **Wire**: `POST /v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies/{autoscalingPoliciesId}:testIamPermissions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `autoscalingPoliciesId` | `path` | `string` | yes |
| `body` | `body` | `TestIamPermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestIamPermissionsRequest` | `testIamPermissionsRequestSchema` | `src/models/test-iam-permissions-request.ts` |
| `TestIamPermissionsResponse` | `testIamPermissionsResponseSchema` | `src/models/test-iam-permissions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsAutoscalingPoliciesUpdate

- **Signature**: `dataprocProjectsRegionsAutoscalingPoliciesUpdate(request: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesUpdateRequest, options?: RequestOptions): ApiPromise<AutoscalingPolicy, GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesUpdateError>`
- **Wire**: `PUT /v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies/{autoscalingPoliciesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AutoscalingPolicy`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesUpdateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `autoscalingPoliciesId` | `path` | `string` | yes |
| `body` | `body` | `AutoscalingPolicy` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AutoscalingPolicy` | `autoscalingPolicySchema` | `src/models/autoscaling-policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsClustersCreate

- **Signature**: `dataprocProjectsRegionsClustersCreate(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersCreateRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersCreateError>`
- **Wire**: `POST /v1/projects/{projectId}/regions/{region}/clusters`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersCreateRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `path` | `string` | yes |
| `region` | `path` | `string` | yes |
| `actionOnFailedPrimaryWorkers` | `query` | `ActionOnFailedPrimaryWorkers` | no |
| `requestId` | `query` | `string` | no |
| `body` | `body` | `Cluster` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ActionOnFailedPrimaryWorkers` | `actionOnFailedPrimaryWorkersSchema` | `src/models/action-on-failed-primary-workers.ts` |
| `Cluster` | `clusterSchema` | `src/models/cluster.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsClustersDelete

- **Signature**: `dataprocProjectsRegionsClustersDelete(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersDeleteRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersDeleteRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `path` | `string` | yes |
| `region` | `path` | `string` | yes |
| `clusterName` | `path` | `string` | yes |
| `clusterUuid` | `query` | `string` | no |
| `gracefulTerminationTimeout` | `query` | `string` | no |
| `requestId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsClustersDiagnose

- **Signature**: `dataprocProjectsRegionsClustersDiagnose(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersDiagnoseRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersDiagnoseError>`
- **Wire**: `POST /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:diagnose`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersDiagnoseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersDiagnoseRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `path` | `string` | yes |
| `region` | `path` | `string` | yes |
| `clusterName` | `path` | `string` | yes |
| `body` | `body` | `DiagnoseClusterRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DiagnoseClusterRequest` | `diagnoseClusterRequestSchema` | `src/models/diagnose-cluster-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsClustersGet

- **Signature**: `dataprocProjectsRegionsClustersGet(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersGetRequest, options?: RequestOptions): ApiPromise<Cluster, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersGetError>`
- **Wire**: `GET /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Cluster`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `path` | `string` | yes |
| `region` | `path` | `string` | yes |
| `clusterName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Cluster` | `clusterSchema` | `src/models/cluster.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsClustersGetIamPolicy

- **Signature**: `dataprocProjectsRegionsClustersGetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersGetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersGetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersGetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `clustersId` | `path` | `string` | yes |
| `body` | `body` | `GetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetIamPolicyRequest` | `getIamPolicyRequestSchema` | `src/models/get-iam-policy-request.ts` |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsClustersInjectCredentials

- **Signature**: `dataprocProjectsRegionsClustersInjectCredentials(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersInjectCredentialsRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersInjectCredentialsError>`
- **Wire**: `POST /v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}:injectCredentials`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersInjectCredentialsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersInjectCredentialsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `clustersId` | `path` | `string` | yes |
| `body` | `body` | `InjectCredentialsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InjectCredentialsRequest` | `injectCredentialsRequestSchema` | `src/models/inject-credentials-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsClustersList

- **Signature**: `dataprocProjectsRegionsClustersList(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersListRequest, options?: RequestOptions): ApiPromise<ListClustersResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersListError>`
- **Wire**: `GET /v1/projects/{projectId}/regions/{region}/clusters`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListClustersResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `path` | `string` | yes |
| `region` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListClustersResponse` | `listClustersResponseSchema` | `src/models/list-clusters-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsClustersNodeGroupsCreate

- **Signature**: `dataprocProjectsRegionsClustersNodeGroupsCreate(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsCreateRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}/nodeGroups`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsCreateRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `clustersId` | `path` | `string` | yes |
| `nodeGroupId` | `query` | `string` | no |
| `parentOperationId` | `query` | `string` | no |
| `requestId` | `query` | `string` | no |
| `body` | `body` | `NodeGroup` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NodeGroup` | `nodeGroupSchema` | `src/models/node-group.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsClustersNodeGroupsGet

- **Signature**: `dataprocProjectsRegionsClustersNodeGroupsGet(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsGetRequest, options?: RequestOptions): ApiPromise<NodeGroup, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}/nodeGroups/{nodeGroupsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NodeGroup`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `clustersId` | `path` | `string` | yes |
| `nodeGroupsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NodeGroup` | `nodeGroupSchema` | `src/models/node-group.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsClustersNodeGroupsRepair

- **Signature**: `dataprocProjectsRegionsClustersNodeGroupsRepair(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsRepairRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsRepairError>`
- **Wire**: `POST /v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}/nodeGroups/{nodeGroupsId}:repair`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsRepairError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsRepairRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `clustersId` | `path` | `string` | yes |
| `nodeGroupsId` | `path` | `string` | yes |
| `body` | `body` | `RepairNodeGroupRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RepairNodeGroupRequest` | `repairNodeGroupRequestSchema` | `src/models/repair-node-group-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsClustersNodeGroupsResize

- **Signature**: `dataprocProjectsRegionsClustersNodeGroupsResize(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsResizeRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsResizeError>`
- **Wire**: `POST /v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}/nodeGroups/{nodeGroupsId}:resize`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsResizeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsResizeRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `clustersId` | `path` | `string` | yes |
| `nodeGroupsId` | `path` | `string` | yes |
| `body` | `body` | `ResizeNodeGroupRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResizeNodeGroupRequest` | `resizeNodeGroupRequestSchema` | `src/models/resize-node-group-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsClustersPatch

- **Signature**: `dataprocProjectsRegionsClustersPatch(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersPatchRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersPatchError>`
- **Wire**: `PATCH /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersPatchRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `path` | `string` | yes |
| `region` | `path` | `string` | yes |
| `clusterName` | `path` | `string` | yes |
| `gracefulDecommissionTimeout` | `query` | `string` | no |
| `requestId` | `query` | `string` | no |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `Cluster` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Cluster` | `clusterSchema` | `src/models/cluster.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsClustersRepair

- **Signature**: `dataprocProjectsRegionsClustersRepair(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersRepairRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersRepairError>`
- **Wire**: `POST /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:repair`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersRepairError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersRepairRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `path` | `string` | yes |
| `region` | `path` | `string` | yes |
| `clusterName` | `path` | `string` | yes |
| `body` | `body` | `RepairClusterRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RepairClusterRequest` | `repairClusterRequestSchema` | `src/models/repair-cluster-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsClustersSetIamPolicy

- **Signature**: `dataprocProjectsRegionsClustersSetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersSetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersSetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersSetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `clustersId` | `path` | `string` | yes |
| `body` | `body` | `SetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetIamPolicyRequest` | `setIamPolicyRequestSchema` | `src/models/set-iam-policy-request.ts` |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsClustersStart

- **Signature**: `dataprocProjectsRegionsClustersStart(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersStartRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersStartError>`
- **Wire**: `POST /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:start`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersStartError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersStartRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `path` | `string` | yes |
| `region` | `path` | `string` | yes |
| `clusterName` | `path` | `string` | yes |
| `body` | `body` | `StartClusterRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StartClusterRequest` | `startClusterRequestSchema` | `src/models/start-cluster-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsClustersStop

- **Signature**: `dataprocProjectsRegionsClustersStop(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersStopRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersStopError>`
- **Wire**: `POST /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:stop`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersStopError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersStopRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `path` | `string` | yes |
| `region` | `path` | `string` | yes |
| `clusterName` | `path` | `string` | yes |
| `body` | `body` | `StopClusterRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StopClusterRequest` | `stopClusterRequestSchema` | `src/models/stop-cluster-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsClustersTestIamPermissions

- **Signature**: `dataprocProjectsRegionsClustersTestIamPermissions(request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersTestIamPermissionsRequest, options?: RequestOptions): ApiPromise<TestIamPermissionsResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersTestIamPermissionsError>`
- **Wire**: `POST /v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}:testIamPermissions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersTestIamPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsClustersTestIamPermissionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `clustersId` | `path` | `string` | yes |
| `body` | `body` | `TestIamPermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestIamPermissionsRequest` | `testIamPermissionsRequestSchema` | `src/models/test-iam-permissions-request.ts` |
| `TestIamPermissionsResponse` | `testIamPermissionsResponseSchema` | `src/models/test-iam-permissions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsJobsCancel

- **Signature**: `dataprocProjectsRegionsJobsCancel(request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsCancelRequest, options?: RequestOptions): ApiPromise<Job, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsCancelError>`
- **Wire**: `POST /v1/projects/{projectId}/regions/{region}/jobs/{jobId}:cancel`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Job`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsJobsCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsJobsCancelRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `path` | `string` | yes |
| `region` | `path` | `string` | yes |
| `jobId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Job` | `jobSchema` | `src/models/job.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsJobsDelete

- **Signature**: `dataprocProjectsRegionsJobsDelete(request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectId}/regions/{region}/jobs/{jobId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsJobsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsJobsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `path` | `string` | yes |
| `region` | `path` | `string` | yes |
| `jobId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsJobsGet

- **Signature**: `dataprocProjectsRegionsJobsGet(request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsGetRequest, options?: RequestOptions): ApiPromise<Job, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsGetError>`
- **Wire**: `GET /v1/projects/{projectId}/regions/{region}/jobs/{jobId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Job`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsJobsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsJobsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `path` | `string` | yes |
| `region` | `path` | `string` | yes |
| `jobId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Job` | `jobSchema` | `src/models/job.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsJobsGetIamPolicy

- **Signature**: `dataprocProjectsRegionsJobsGetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsGetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsGetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/regions/{regionsId}/jobs/{jobsId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsJobsGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsJobsGetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `jobsId` | `path` | `string` | yes |
| `body` | `body` | `GetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetIamPolicyRequest` | `getIamPolicyRequestSchema` | `src/models/get-iam-policy-request.ts` |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsJobsList

- **Signature**: `dataprocProjectsRegionsJobsList(request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsListRequest, options?: RequestOptions): ApiPromise<ListJobsResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsListError>`
- **Wire**: `GET /v1/projects/{projectId}/regions/{region}/jobs`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListJobsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsJobsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsJobsListRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `path` | `string` | yes |
| `region` | `path` | `string` | yes |
| `clusterName` | `query` | `string` | no |
| `filter` | `query` | `string` | no |
| `jobStateMatcher` | `query` | `JobStateMatcher` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JobStateMatcher` | `jobStateMatcherSchema` | `src/models/job-state-matcher.ts` |
| `ListJobsResponse` | `listJobsResponseSchema` | `src/models/list-jobs-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsJobsPatch

- **Signature**: `dataprocProjectsRegionsJobsPatch(request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsPatchRequest, options?: RequestOptions): ApiPromise<Job, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsPatchError>`
- **Wire**: `PATCH /v1/projects/{projectId}/regions/{region}/jobs/{jobId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Job`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsJobsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsJobsPatchRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `path` | `string` | yes |
| `region` | `path` | `string` | yes |
| `jobId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `Job` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Job` | `jobSchema` | `src/models/job.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsJobsSetIamPolicy

- **Signature**: `dataprocProjectsRegionsJobsSetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/regions/{regionsId}/jobs/{jobsId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `jobsId` | `path` | `string` | yes |
| `body` | `body` | `SetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetIamPolicyRequest` | `setIamPolicyRequestSchema` | `src/models/set-iam-policy-request.ts` |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsJobsSubmit

- **Signature**: `dataprocProjectsRegionsJobsSubmit(request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSubmitRequest, options?: RequestOptions): ApiPromise<Job, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSubmitError>`
- **Wire**: `POST /v1/projects/{projectId}/regions/{region}/jobs:submit`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Job`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSubmitError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSubmitRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `path` | `string` | yes |
| `region` | `path` | `string` | yes |
| `body` | `body` | `SubmitJobRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubmitJobRequest` | `submitJobRequestSchema` | `src/models/submit-job-request.ts` |
| `Job` | `jobSchema` | `src/models/job.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsJobsSubmitAsOperation

- **Signature**: `dataprocProjectsRegionsJobsSubmitAsOperation(request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSubmitAsOperationRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSubmitAsOperationError>`
- **Wire**: `POST /v1/projects/{projectId}/regions/{region}/jobs:submitAsOperation`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSubmitAsOperationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSubmitAsOperationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `path` | `string` | yes |
| `region` | `path` | `string` | yes |
| `body` | `body` | `SubmitJobRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubmitJobRequest` | `submitJobRequestSchema` | `src/models/submit-job-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsJobsTestIamPermissions

- **Signature**: `dataprocProjectsRegionsJobsTestIamPermissions(request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsTestIamPermissionsRequest, options?: RequestOptions): ApiPromise<TestIamPermissionsResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsTestIamPermissionsError>`
- **Wire**: `POST /v1/projects/{projectsId}/regions/{regionsId}/jobs/{jobsId}:testIamPermissions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsJobsTestIamPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsJobsTestIamPermissionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `jobsId` | `path` | `string` | yes |
| `body` | `body` | `TestIamPermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestIamPermissionsRequest` | `testIamPermissionsRequestSchema` | `src/models/test-iam-permissions-request.ts` |
| `TestIamPermissionsResponse` | `testIamPermissionsResponseSchema` | `src/models/test-iam-permissions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsOperationsCancel

- **Signature**: `dataprocProjectsRegionsOperationsCancel(request: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsCancelRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsCancelError>`
- **Wire**: `POST /v1/projects/{projectsId}/regions/{regionsId}/operations/{operationsId}:cancel`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsCancelRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsOperationsDelete

- **Signature**: `dataprocProjectsRegionsOperationsDelete(request: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/regions/{regionsId}/operations/{operationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsOperationsGet

- **Signature**: `dataprocProjectsRegionsOperationsGet(request: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsGetRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/regions/{regionsId}/operations/{operationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsOperationsGetIamPolicy

- **Signature**: `dataprocProjectsRegionsOperationsGetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsGetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsGetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/regions/{regionsId}/operations/{operationsId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsGetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |
| `body` | `body` | `GetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetIamPolicyRequest` | `getIamPolicyRequestSchema` | `src/models/get-iam-policy-request.ts` |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsOperationsList

- **Signature**: `dataprocProjectsRegionsOperationsList(request: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsListRequest, options?: RequestOptions): ApiPromise<ListOperationsResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/regions/{regionsId}/operations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListOperationsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsListRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `returnPartialSuccess` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListOperationsResponse` | `listOperationsResponseSchema` | `src/models/list-operations-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsOperationsSetIamPolicy

- **Signature**: `dataprocProjectsRegionsOperationsSetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsSetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsSetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/regions/{regionsId}/operations/{operationsId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsSetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |
| `body` | `body` | `SetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetIamPolicyRequest` | `setIamPolicyRequestSchema` | `src/models/set-iam-policy-request.ts` |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsOperationsTestIamPermissions

- **Signature**: `dataprocProjectsRegionsOperationsTestIamPermissions(request: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsTestIamPermissionsRequest, options?: RequestOptions): ApiPromise<TestIamPermissionsResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsTestIamPermissionsError>`
- **Wire**: `POST /v1/projects/{projectsId}/regions/{regionsId}/operations/{operationsId}:testIamPermissions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsTestIamPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsTestIamPermissionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |
| `body` | `body` | `TestIamPermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestIamPermissionsRequest` | `testIamPermissionsRequestSchema` | `src/models/test-iam-permissions-request.ts` |
| `TestIamPermissionsResponse` | `testIamPermissionsResponseSchema` | `src/models/test-iam-permissions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsWorkflowTemplatesCreate

- **Signature**: `dataprocProjectsRegionsWorkflowTemplatesCreate(request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesCreateRequest, options?: RequestOptions): ApiPromise<WorkflowTemplate, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkflowTemplate`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `body` | `body` | `WorkflowTemplate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkflowTemplate` | `workflowTemplateSchema` | `src/models/workflow-template.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsWorkflowTemplatesDelete

- **Signature**: `dataprocProjectsRegionsWorkflowTemplatesDelete(request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesDeleteRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `workflowTemplatesId` | `path` | `string` | yes |
| `version` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsWorkflowTemplatesGet

- **Signature**: `dataprocProjectsRegionsWorkflowTemplatesGet(request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesGetRequest, options?: RequestOptions): ApiPromise<WorkflowTemplate, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkflowTemplate`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `workflowTemplatesId` | `path` | `string` | yes |
| `version` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkflowTemplate` | `workflowTemplateSchema` | `src/models/workflow-template.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsWorkflowTemplatesGetIamPolicy

- **Signature**: `dataprocProjectsRegionsWorkflowTemplatesGetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `workflowTemplatesId` | `path` | `string` | yes |
| `body` | `body` | `GetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetIamPolicyRequest` | `getIamPolicyRequestSchema` | `src/models/get-iam-policy-request.ts` |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsWorkflowTemplatesInstantiate

- **Signature**: `dataprocProjectsRegionsWorkflowTemplatesInstantiate(request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesInstantiateError>`
- **Wire**: `POST /v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}:instantiate`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesInstantiateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `workflowTemplatesId` | `path` | `string` | yes |
| `body` | `body` | `InstantiateWorkflowTemplateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InstantiateWorkflowTemplateRequest` | `instantiateWorkflowTemplateRequestSchema` | `src/models/instantiate-workflow-template-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsWorkflowTemplatesInstantiateInline

- **Signature**: `dataprocProjectsRegionsWorkflowTemplatesInstantiateInline(request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineError>`
- **Wire**: `POST /v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates:instantiateInline`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `requestId` | `query` | `string` | no |
| `body` | `body` | `WorkflowTemplate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkflowTemplate` | `workflowTemplateSchema` | `src/models/workflow-template.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsWorkflowTemplatesList

- **Signature**: `dataprocProjectsRegionsWorkflowTemplatesList(request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesListRequest, options?: RequestOptions): ApiPromise<ListWorkflowTemplatesResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesListError>`
- **Wire**: `GET /v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListWorkflowTemplatesResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListWorkflowTemplatesResponse` | `listWorkflowTemplatesResponseSchema` | `src/models/list-workflow-templates-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsWorkflowTemplatesSetIamPolicy

- **Signature**: `dataprocProjectsRegionsWorkflowTemplatesSetIamPolicy(request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `workflowTemplatesId` | `path` | `string` | yes |
| `body` | `body` | `SetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetIamPolicyRequest` | `setIamPolicyRequestSchema` | `src/models/set-iam-policy-request.ts` |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsWorkflowTemplatesTestIamPermissions

- **Signature**: `dataprocProjectsRegionsWorkflowTemplatesTestIamPermissions(request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest, options?: RequestOptions): ApiPromise<TestIamPermissionsResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsError>`
- **Wire**: `POST /v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}:testIamPermissions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `workflowTemplatesId` | `path` | `string` | yes |
| `body` | `body` | `TestIamPermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestIamPermissionsRequest` | `testIamPermissionsRequestSchema` | `src/models/test-iam-permissions-request.ts` |
| `TestIamPermissionsResponse` | `testIamPermissionsResponseSchema` | `src/models/test-iam-permissions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### dataprocProjectsRegionsWorkflowTemplatesUpdate

- **Signature**: `dataprocProjectsRegionsWorkflowTemplatesUpdate(request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesUpdateRequest, options?: RequestOptions): ApiPromise<WorkflowTemplate, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesUpdateError>`
- **Wire**: `PUT /v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkflowTemplate`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesUpdateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `regionsId` | `path` | `string` | yes |
| `workflowTemplatesId` | `path` | `string` | yes |
| `body` | `body` | `WorkflowTemplate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkflowTemplate` | `workflowTemplateSchema` | `src/models/workflow-template.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsFederationsCreate

- **Signature**: `metastoreProjectsLocationsFederationsCreate(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsCreateRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/federations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsCreateRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `federationId` | `query` | `string` | no |
| `requestId` | `query` | `string` | no |
| `body` | `body` | `Federation` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Federation` | `federationSchema` | `src/models/federation.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsFederationsDelete

- **Signature**: `metastoreProjectsLocationsFederationsDelete(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsDeleteRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/federations/{federationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsDeleteRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `federationsId` | `path` | `string` | yes |
| `requestId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsFederationsGet

- **Signature**: `metastoreProjectsLocationsFederationsGet(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsGetRequest, options?: RequestOptions): ApiPromise<Federation, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/federations/{federationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Federation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `federationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Federation` | `federationSchema` | `src/models/federation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsFederationsGetIamPolicy

- **Signature**: `metastoreProjectsLocationsFederationsGetIamPolicy(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsGetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsGetIamPolicyError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/federations/{federationsId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Policy2`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsGetIamPolicyRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectsId` | `path` | — | `string` | yes |
| `locationsId` | `path` | — | `string` | yes |
| `federationsId` | `path` | — | `string` | yes |
| `optionsRequestedPolicyVersion` | `query` | `options.requestedPolicyVersion` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Policy2` | `policy2Schema` | `src/models/policy2.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsFederationsList

- **Signature**: `metastoreProjectsLocationsFederationsList(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsListRequest, options?: RequestOptions): ApiPromise<ListFederationsResponse, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/federations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListFederationsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsListRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `orderBy` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListFederationsResponse` | `listFederationsResponseSchema` | `src/models/list-federations-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsFederationsPatch

- **Signature**: `metastoreProjectsLocationsFederationsPatch(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsPatchRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/federations/{federationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsPatchRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `federationsId` | `path` | `string` | yes |
| `requestId` | `query` | `string` | no |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `Federation` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Federation` | `federationSchema` | `src/models/federation.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsFederationsSetIamPolicy

- **Signature**: `metastoreProjectsLocationsFederationsSetIamPolicy(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsSetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsSetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/federations/{federationsId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy2`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsSetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `federationsId` | `path` | `string` | yes |
| `body` | `body` | `SetIamPolicyRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetIamPolicyRequest2` | `setIamPolicyRequest2Schema` | `src/models/set-iam-policy-request2.ts` |
| `Policy2` | `policy2Schema` | `src/models/policy2.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsFederationsTestIamPermissions

- **Signature**: `metastoreProjectsLocationsFederationsTestIamPermissions(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsTestIamPermissionsRequest, options?: RequestOptions): ApiPromise<TestIamPermissionsResponse, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsTestIamPermissionsError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/federations/{federationsId}:testIamPermissions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsTestIamPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsTestIamPermissionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `federationsId` | `path` | `string` | yes |
| `body` | `body` | `TestIamPermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestIamPermissionsRequest` | `testIamPermissionsRequestSchema` | `src/models/test-iam-permissions-request.ts` |
| `TestIamPermissionsResponse` | `testIamPermissionsResponseSchema` | `src/models/test-iam-permissions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsGet

- **Signature**: `metastoreProjectsLocationsGet(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsGetRequest, options?: RequestOptions): ApiPromise<Location, GoogleCloudDataprocClient.MetastoreProjectsLocationsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Location`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Location` | `locationSchema` | `src/models/location.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsList

- **Signature**: `metastoreProjectsLocationsList(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsListRequest, options?: RequestOptions): ApiPromise<ListLocationsResponse, GoogleCloudDataprocClient.MetastoreProjectsLocationsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListLocationsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `extraLocationTypes` | `query` | `string[]` | no |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListLocationsResponse` | `listLocationsResponseSchema` | `src/models/list-locations-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesAlterLocation

- **Signature**: `metastoreProjectsLocationsServicesAlterLocation(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesAlterLocationRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesAlterLocationError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:alterLocation`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesAlterLocationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesAlterLocationRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `body` | `body` | `AlterMetadataResourceLocationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AlterMetadataResourceLocationRequest` | `alterMetadataResourceLocationRequestSchema` | `src/models/alter-metadata-resource-location-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesAlterTableProperties

- **Signature**: `metastoreProjectsLocationsServicesAlterTableProperties(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesAlterTablePropertiesRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesAlterTablePropertiesError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:alterTableProperties`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesAlterTablePropertiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesAlterTablePropertiesRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `body` | `body` | `AlterTablePropertiesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AlterTablePropertiesRequest` | `alterTablePropertiesRequestSchema` | `src/models/alter-table-properties-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesBackupsCreate

- **Signature**: `metastoreProjectsLocationsServicesBackupsCreate(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsCreateRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/backups`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsCreateRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `backupId` | `query` | `string` | no |
| `requestId` | `query` | `string` | no |
| `body` | `body` | `Backup` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Backup` | `backupSchema` | `src/models/backup.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesBackupsDelete

- **Signature**: `metastoreProjectsLocationsServicesBackupsDelete(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsDeleteRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/backups/{backupsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsDeleteRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `backupsId` | `path` | `string` | yes |
| `requestId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesBackupsGet

- **Signature**: `metastoreProjectsLocationsServicesBackupsGet(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsGetRequest, options?: RequestOptions): ApiPromise<Backup, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/backups/{backupsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Backup`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `backupsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Backup` | `backupSchema` | `src/models/backup.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesBackupsGetIamPolicy

- **Signature**: `metastoreProjectsLocationsServicesBackupsGetIamPolicy(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsGetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsGetIamPolicyError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/backups/{backupsId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Policy2`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsGetIamPolicyRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectsId` | `path` | — | `string` | yes |
| `locationsId` | `path` | — | `string` | yes |
| `servicesId` | `path` | — | `string` | yes |
| `backupsId` | `path` | — | `string` | yes |
| `optionsRequestedPolicyVersion` | `query` | `options.requestedPolicyVersion` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Policy2` | `policy2Schema` | `src/models/policy2.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesBackupsList

- **Signature**: `metastoreProjectsLocationsServicesBackupsList(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsListRequest, options?: RequestOptions): ApiPromise<ListBackupsResponse, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/backups`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListBackupsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsListRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `orderBy` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListBackupsResponse` | `listBackupsResponseSchema` | `src/models/list-backups-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesBackupsSetIamPolicy

- **Signature**: `metastoreProjectsLocationsServicesBackupsSetIamPolicy(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsSetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsSetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/backups/{backupsId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy2`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsSetIamPolicyRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `backupsId` | `path` | `string` | yes |
| `body` | `body` | `SetIamPolicyRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetIamPolicyRequest2` | `setIamPolicyRequest2Schema` | `src/models/set-iam-policy-request2.ts` |
| `Policy2` | `policy2Schema` | `src/models/policy2.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesCancelMigration

- **Signature**: `metastoreProjectsLocationsServicesCancelMigration(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCancelMigrationRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCancelMigrationError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:cancelMigration`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCancelMigrationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCancelMigrationRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesCompleteMigration

- **Signature**: `metastoreProjectsLocationsServicesCompleteMigration(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCompleteMigrationRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCompleteMigrationError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:completeMigration`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCompleteMigrationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCompleteMigrationRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesCreate

- **Signature**: `metastoreProjectsLocationsServicesCreate(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCreateRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCreateRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `requestId` | `query` | `string` | no |
| `serviceId` | `query` | `string` | no |
| `body` | `body` | `Service` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Service` | `serviceSchema` | `src/models/service.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesDatabasesGetIamPolicy

- **Signature**: `metastoreProjectsLocationsServicesDatabasesGetIamPolicy(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesGetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesGetIamPolicyError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/databases/{databasesId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Policy2`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesGetIamPolicyRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectsId` | `path` | — | `string` | yes |
| `locationsId` | `path` | — | `string` | yes |
| `servicesId` | `path` | — | `string` | yes |
| `databasesId` | `path` | — | `string` | yes |
| `optionsRequestedPolicyVersion` | `query` | `options.requestedPolicyVersion` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Policy2` | `policy2Schema` | `src/models/policy2.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesDatabasesSetIamPolicy

- **Signature**: `metastoreProjectsLocationsServicesDatabasesSetIamPolicy(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesSetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesSetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/databases/{databasesId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy2`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesSetIamPolicyRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `databasesId` | `path` | `string` | yes |
| `body` | `body` | `SetIamPolicyRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetIamPolicyRequest2` | `setIamPolicyRequest2Schema` | `src/models/set-iam-policy-request2.ts` |
| `Policy2` | `policy2Schema` | `src/models/policy2.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy

- **Signature**: `metastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/databases/{databasesId}/tables/{tablesId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Policy2`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectsId` | `path` | — | `string` | yes |
| `locationsId` | `path` | — | `string` | yes |
| `servicesId` | `path` | — | `string` | yes |
| `databasesId` | `path` | — | `string` | yes |
| `tablesId` | `path` | — | `string` | yes |
| `optionsRequestedPolicyVersion` | `query` | `options.requestedPolicyVersion` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Policy2` | `policy2Schema` | `src/models/policy2.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy

- **Signature**: `metastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/databases/{databasesId}/tables/{tablesId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy2`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `databasesId` | `path` | `string` | yes |
| `tablesId` | `path` | `string` | yes |
| `body` | `body` | `SetIamPolicyRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetIamPolicyRequest2` | `setIamPolicyRequest2Schema` | `src/models/set-iam-policy-request2.ts` |
| `Policy2` | `policy2Schema` | `src/models/policy2.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesDelete

- **Signature**: `metastoreProjectsLocationsServicesDelete(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDeleteRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDeleteRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `requestId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesExportMetadata

- **Signature**: `metastoreProjectsLocationsServicesExportMetadata(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesExportMetadataRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesExportMetadataError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:exportMetadata`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesExportMetadataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesExportMetadataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `body` | `body` | `ExportMetadataRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExportMetadataRequest` | `exportMetadataRequestSchema` | `src/models/export-metadata-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesGet

- **Signature**: `metastoreProjectsLocationsServicesGet(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesGetRequest, options?: RequestOptions): ApiPromise<Service, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Service`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Service` | `serviceSchema` | `src/models/service.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesGetIamPolicy

- **Signature**: `metastoreProjectsLocationsServicesGetIamPolicy(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesGetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesGetIamPolicyError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Policy2`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesGetIamPolicyRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectsId` | `path` | — | `string` | yes |
| `locationsId` | `path` | — | `string` | yes |
| `servicesId` | `path` | — | `string` | yes |
| `optionsRequestedPolicyVersion` | `query` | `options.requestedPolicyVersion` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Policy2` | `policy2Schema` | `src/models/policy2.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesList

- **Signature**: `metastoreProjectsLocationsServicesList(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesListRequest, options?: RequestOptions): ApiPromise<ListServicesResponse, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/services`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListServicesResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesListRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `orderBy` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListServicesResponse` | `listServicesResponseSchema` | `src/models/list-services-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesMetadataImportsCreate

- **Signature**: `metastoreProjectsLocationsServicesMetadataImportsCreate(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsCreateRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/metadataImports`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsCreateRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `metadataImportId` | `query` | `string` | no |
| `requestId` | `query` | `string` | no |
| `body` | `body` | `MetadataImport` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetadataImport` | `metadataImportSchema` | `src/models/metadata-import.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesMetadataImportsGet

- **Signature**: `metastoreProjectsLocationsServicesMetadataImportsGet(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsGetRequest, options?: RequestOptions): ApiPromise<MetadataImport, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/metadataImports/{metadataImportsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MetadataImport`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `metadataImportsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetadataImport` | `metadataImportSchema` | `src/models/metadata-import.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesMetadataImportsList

- **Signature**: `metastoreProjectsLocationsServicesMetadataImportsList(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsListRequest, options?: RequestOptions): ApiPromise<ListMetadataImportsResponse, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/metadataImports`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListMetadataImportsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsListRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `orderBy` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListMetadataImportsResponse` | `listMetadataImportsResponseSchema` | `src/models/list-metadata-imports-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesMetadataImportsPatch

- **Signature**: `metastoreProjectsLocationsServicesMetadataImportsPatch(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsPatchRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/metadataImports/{metadataImportsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsPatchRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `metadataImportsId` | `path` | `string` | yes |
| `requestId` | `query` | `string` | no |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `MetadataImport` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetadataImport` | `metadataImportSchema` | `src/models/metadata-import.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesMigrationExecutionsDelete

- **Signature**: `metastoreProjectsLocationsServicesMigrationExecutionsDelete(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsDeleteRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/migrationExecutions/{migrationExecutionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsDeleteRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `migrationExecutionsId` | `path` | `string` | yes |
| `requestId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesMigrationExecutionsGet

- **Signature**: `metastoreProjectsLocationsServicesMigrationExecutionsGet(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsGetRequest, options?: RequestOptions): ApiPromise<MigrationExecution, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/migrationExecutions/{migrationExecutionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MigrationExecution`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `migrationExecutionsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MigrationExecution` | `migrationExecutionSchema` | `src/models/migration-execution.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesMigrationExecutionsList

- **Signature**: `metastoreProjectsLocationsServicesMigrationExecutionsList(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsListRequest, options?: RequestOptions): ApiPromise<ListMigrationExecutionsResponse, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/migrationExecutions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListMigrationExecutionsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsListRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `orderBy` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListMigrationExecutionsResponse` | `listMigrationExecutionsResponseSchema` | `src/models/list-migration-executions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesMoveTableToDatabase

- **Signature**: `metastoreProjectsLocationsServicesMoveTableToDatabase(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMoveTableToDatabaseError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:moveTableToDatabase`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMoveTableToDatabaseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `body` | `body` | `MoveTableToDatabaseRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MoveTableToDatabaseRequest` | `moveTableToDatabaseRequestSchema` | `src/models/move-table-to-database-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesPatch

- **Signature**: `metastoreProjectsLocationsServicesPatch(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesPatchRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesPatchRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `requestId` | `query` | `string` | no |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `Service` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Service` | `serviceSchema` | `src/models/service.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesQueryMetadata

- **Signature**: `metastoreProjectsLocationsServicesQueryMetadata(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesQueryMetadataRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesQueryMetadataError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:queryMetadata`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesQueryMetadataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesQueryMetadataRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `body` | `body` | `QueryMetadataRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `QueryMetadataRequest` | `queryMetadataRequestSchema` | `src/models/query-metadata-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesRestore

- **Signature**: `metastoreProjectsLocationsServicesRestore(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesRestoreRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesRestoreError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:restore`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesRestoreError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesRestoreRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `body` | `body` | `RestoreServiceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RestoreServiceRequest` | `restoreServiceRequestSchema` | `src/models/restore-service-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesSetIamPolicy

- **Signature**: `metastoreProjectsLocationsServicesSetIamPolicy(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesSetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesSetIamPolicyError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy2`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesSetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `body` | `body` | `SetIamPolicyRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetIamPolicyRequest2` | `setIamPolicyRequest2Schema` | `src/models/set-iam-policy-request2.ts` |
| `Policy2` | `policy2Schema` | `src/models/policy2.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesStartMigration

- **Signature**: `metastoreProjectsLocationsServicesStartMigration(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesStartMigrationRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesStartMigrationError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:startMigration`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesStartMigrationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesStartMigrationRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `body` | `body` | `StartMigrationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StartMigrationRequest` | `startMigrationRequestSchema` | `src/models/start-migration-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### metastoreProjectsLocationsServicesTestIamPermissions

- **Signature**: `metastoreProjectsLocationsServicesTestIamPermissions(request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesTestIamPermissionsRequest, options?: RequestOptions): ApiPromise<TestIamPermissionsResponse, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesTestIamPermissionsError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:testIamPermissions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `GoogleCloudDataprocError` with `kind: "api"`, an instance of `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesTestIamPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesTestIamPermissionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `servicesId` | `path` | `string` | yes |
| `body` | `body` | `TestIamPermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestIamPermissionsRequest` | `testIamPermissionsRequestSchema` | `src/models/test-iam-permissions-request.ts` |
| `TestIamPermissionsResponse` | `testIamPermissionsResponseSchema` | `src/models/test-iam-permissions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

