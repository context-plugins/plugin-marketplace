<!-- Generated file — do not edit; regenerated with the SDK. -->

# GoogleCloudTasksClient — ungrouped operations

Accessor: `client` (the client itself) · Source: `src/client.ts` · 24 operations · Request and error types: namespace `GoogleCloudTasksClient`

Operations the spec leaves untagged are methods on the client rather than on a resource, so there is no accessor property to go through. The request type still lives in a namespace merged onto the exported class, so you write `GoogleCloudTasksClient.CloudtasksProjectsLocationsGetRequest`.

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-cloud-tasks`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cloudtasksProjectsLocationsGet

- **Signature**: `cloudtasksProjectsLocationsGet(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsGetRequest, options?: RequestOptions): ApiPromise<Location, GoogleCloudTasksClient.CloudtasksProjectsLocationsGetError>`
- **Wire**: `GET /v2/projects/{projectsId}/locations/{locationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Location`
- **Error**: `GoogleCloudTasksError` with `kind: "api"`, an instance of `GoogleCloudTasksClient.CloudtasksProjectsLocationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTasksClient.CloudtasksProjectsLocationsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Location` | `locationSchema` | `src/models/location.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudtasksProjectsLocationsGetCmekConfig

- **Signature**: `cloudtasksProjectsLocationsGetCmekConfig(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsGetCmekConfigRequest, options?: RequestOptions): ApiPromise<CmekConfig, GoogleCloudTasksClient.CloudtasksProjectsLocationsGetCmekConfigError>`
- **Wire**: `GET /v2/projects/{projectsId}/locations/{locationsId}/cmekConfig`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CmekConfig`
- **Error**: `GoogleCloudTasksError` with `kind: "api"`, an instance of `GoogleCloudTasksClient.CloudtasksProjectsLocationsGetCmekConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTasksClient.CloudtasksProjectsLocationsGetCmekConfigRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CmekConfig` | `cmekConfigSchema` | `src/models/cmek-config.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudtasksProjectsLocationsList

- **Signature**: `cloudtasksProjectsLocationsList(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsListRequest, options?: RequestOptions): ApiPromise<ListLocationsResponse, GoogleCloudTasksClient.CloudtasksProjectsLocationsListError>`
- **Wire**: `GET /v2/projects/{projectsId}/locations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListLocationsResponse`
- **Error**: `GoogleCloudTasksError` with `kind: "api"`, an instance of `GoogleCloudTasksClient.CloudtasksProjectsLocationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTasksClient.CloudtasksProjectsLocationsListRequest` (5):

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

### cloudtasksProjectsLocationsOperationsGet

- **Signature**: `cloudtasksProjectsLocationsOperationsGet(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsOperationsGetRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudTasksClient.CloudtasksProjectsLocationsOperationsGetError>`
- **Wire**: `GET /v2/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Operation`
- **Error**: `GoogleCloudTasksError` with `kind: "api"`, an instance of `GoogleCloudTasksClient.CloudtasksProjectsLocationsOperationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTasksClient.CloudtasksProjectsLocationsOperationsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudtasksProjectsLocationsQueuesCreate

- **Signature**: `cloudtasksProjectsLocationsQueuesCreate(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesCreateRequest, options?: RequestOptions): ApiPromise<Queue, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesCreateError>`
- **Wire**: `POST /v2/projects/{projectsId}/locations/{locationsId}/queues`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Queue`
- **Error**: `GoogleCloudTasksError` with `kind: "api"`, an instance of `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `body` | `body` | `Queue` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Queue` | `queueSchema` | `src/models/queue.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudtasksProjectsLocationsQueuesDelete

- **Signature**: `cloudtasksProjectsLocationsQueuesDelete(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesDeleteError>`
- **Wire**: `DELETE /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudTasksError` with `kind: "api"`, an instance of `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `queuesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudtasksProjectsLocationsQueuesGet

- **Signature**: `cloudtasksProjectsLocationsQueuesGet(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesGetRequest, options?: RequestOptions): ApiPromise<Queue, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesGetError>`
- **Wire**: `GET /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Queue`
- **Error**: `GoogleCloudTasksError` with `kind: "api"`, an instance of `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `queuesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Queue` | `queueSchema` | `src/models/queue.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudtasksProjectsLocationsQueuesGetIamPolicy

- **Signature**: `cloudtasksProjectsLocationsQueuesGetIamPolicy(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesGetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesGetIamPolicyError>`
- **Wire**: `POST /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy`
- **Error**: `GoogleCloudTasksError` with `kind: "api"`, an instance of `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesGetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `queuesId` | `path` | `string` | yes |
| `body` | `body` | `GetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetIamPolicyRequest` | `getIamPolicyRequestSchema` | `src/models/get-iam-policy-request.ts` |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudtasksProjectsLocationsQueuesList

- **Signature**: `cloudtasksProjectsLocationsQueuesList(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesListRequest, options?: RequestOptions): ApiPromise<ListQueuesResponse, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesListError>`
- **Wire**: `GET /v2/projects/{projectsId}/locations/{locationsId}/queues`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListQueuesResponse`
- **Error**: `GoogleCloudTasksError` with `kind: "api"`, an instance of `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListQueuesResponse` | `listQueuesResponseSchema` | `src/models/list-queues-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudtasksProjectsLocationsQueuesPatch

- **Signature**: `cloudtasksProjectsLocationsQueuesPatch(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPatchRequest, options?: RequestOptions): ApiPromise<Queue, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPatchError>`
- **Wire**: `PATCH /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Queue`
- **Error**: `GoogleCloudTasksError` with `kind: "api"`, an instance of `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPatchRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `queuesId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `Queue` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Queue` | `queueSchema` | `src/models/queue.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudtasksProjectsLocationsQueuesPause

- **Signature**: `cloudtasksProjectsLocationsQueuesPause(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPauseRequest, options?: RequestOptions): ApiPromise<Queue, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPauseError>`
- **Wire**: `POST /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:pause`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Queue`
- **Error**: `GoogleCloudTasksError` with `kind: "api"`, an instance of `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPauseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPauseRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `queuesId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Queue` | `queueSchema` | `src/models/queue.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudtasksProjectsLocationsQueuesPurge

- **Signature**: `cloudtasksProjectsLocationsQueuesPurge(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPurgeRequest, options?: RequestOptions): ApiPromise<Queue, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPurgeError>`
- **Wire**: `POST /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:purge`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Queue`
- **Error**: `GoogleCloudTasksError` with `kind: "api"`, an instance of `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPurgeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPurgeRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `queuesId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Queue` | `queueSchema` | `src/models/queue.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudtasksProjectsLocationsQueuesResume

- **Signature**: `cloudtasksProjectsLocationsQueuesResume(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesResumeRequest, options?: RequestOptions): ApiPromise<Queue, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesResumeError>`
- **Wire**: `POST /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:resume`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Queue`
- **Error**: `GoogleCloudTasksError` with `kind: "api"`, an instance of `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesResumeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesResumeRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `queuesId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Queue` | `queueSchema` | `src/models/queue.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudtasksProjectsLocationsQueuesSetIamPolicy

- **Signature**: `cloudtasksProjectsLocationsQueuesSetIamPolicy(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesSetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesSetIamPolicyError>`
- **Wire**: `POST /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy`
- **Error**: `GoogleCloudTasksError` with `kind: "api"`, an instance of `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesSetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `queuesId` | `path` | `string` | yes |
| `body` | `body` | `SetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetIamPolicyRequest` | `setIamPolicyRequestSchema` | `src/models/set-iam-policy-request.ts` |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudtasksProjectsLocationsQueuesTasksBatchCreate

- **Signature**: `cloudtasksProjectsLocationsQueuesTasksBatchCreate(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBatchCreateRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBatchCreateError>`
- **Wire**: `POST /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks:batchCreate`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudTasksError` with `kind: "api"`, an instance of `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBatchCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBatchCreateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `queuesId` | `path` | `string` | yes |
| `body` | `body` | `BatchCreateTasksRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchCreateTasksRequest` | `batchCreateTasksRequestSchema` | `src/models/batch-create-tasks-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudtasksProjectsLocationsQueuesTasksBatchDelete

- **Signature**: `cloudtasksProjectsLocationsQueuesTasksBatchDelete(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBatchDeleteRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBatchDeleteError>`
- **Wire**: `POST /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks:batchDelete`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudTasksError` with `kind: "api"`, an instance of `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBatchDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBatchDeleteRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `queuesId` | `path` | `string` | yes |
| `body` | `body` | `BatchDeleteTasksRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchDeleteTasksRequest` | `batchDeleteTasksRequestSchema` | `src/models/batch-delete-tasks-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudtasksProjectsLocationsQueuesTasksBuffer

- **Signature**: `cloudtasksProjectsLocationsQueuesTasksBuffer(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBufferRequest, options?: RequestOptions): ApiPromise<BufferTaskResponse, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBufferError>`
- **Wire**: `POST /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks/{taskId}:buffer`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BufferTaskResponse`
- **Error**: `GoogleCloudTasksError` with `kind: "api"`, an instance of `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBufferError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBufferRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `queuesId` | `path` | `string` | yes |
| `taskId` | `path` | `string` | yes |
| `body` | `body` | `BufferTaskRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BufferTaskRequest` | `bufferTaskRequestSchema` | `src/models/buffer-task-request.ts` |
| `BufferTaskResponse` | `bufferTaskResponseSchema` | `src/models/buffer-task-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudtasksProjectsLocationsQueuesTasksCreate

- **Signature**: `cloudtasksProjectsLocationsQueuesTasksCreate(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksCreateRequest, options?: RequestOptions): ApiPromise<Task, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksCreateError>`
- **Wire**: `POST /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Task`
- **Error**: `GoogleCloudTasksError` with `kind: "api"`, an instance of `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksCreateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `queuesId` | `path` | `string` | yes |
| `body` | `body` | `CreateTaskRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateTaskRequest` | `createTaskRequestSchema` | `src/models/create-task-request.ts` |
| `Task` | `taskSchema` | `src/models/task.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudtasksProjectsLocationsQueuesTasksDelete

- **Signature**: `cloudtasksProjectsLocationsQueuesTasksDelete(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksDeleteError>`
- **Wire**: `DELETE /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks/{tasksId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudTasksError` with `kind: "api"`, an instance of `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksDeleteRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `queuesId` | `path` | `string` | yes |
| `tasksId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudtasksProjectsLocationsQueuesTasksGet

- **Signature**: `cloudtasksProjectsLocationsQueuesTasksGet(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksGetRequest, options?: RequestOptions): ApiPromise<Task, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksGetError>`
- **Wire**: `GET /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks/{tasksId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Task`
- **Error**: `GoogleCloudTasksError` with `kind: "api"`, an instance of `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksGetRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `queuesId` | `path` | `string` | yes |
| `tasksId` | `path` | `string` | yes |
| `responseView` | `query` | `ResponseView2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResponseView2` | `responseView2Schema` | `src/models/response-view2.ts` |
| `Task` | `taskSchema` | `src/models/task.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudtasksProjectsLocationsQueuesTasksList

- **Signature**: `cloudtasksProjectsLocationsQueuesTasksList(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksListRequest, options?: RequestOptions): ApiPromise<ListTasksResponse, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksListError>`
- **Wire**: `GET /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListTasksResponse`
- **Error**: `GoogleCloudTasksError` with `kind: "api"`, an instance of `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksListRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `queuesId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `responseView` | `query` | `ResponseView2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResponseView2` | `responseView2Schema` | `src/models/response-view2.ts` |
| `ListTasksResponse` | `listTasksResponseSchema` | `src/models/list-tasks-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudtasksProjectsLocationsQueuesTasksRun

- **Signature**: `cloudtasksProjectsLocationsQueuesTasksRun(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksRunRequest, options?: RequestOptions): ApiPromise<Task, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksRunError>`
- **Wire**: `POST /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks/{tasksId}:run`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Task`
- **Error**: `GoogleCloudTasksError` with `kind: "api"`, an instance of `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksRunError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksRunRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `queuesId` | `path` | `string` | yes |
| `tasksId` | `path` | `string` | yes |
| `body` | `body` | `RunTaskRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RunTaskRequest` | `runTaskRequestSchema` | `src/models/run-task-request.ts` |
| `Task` | `taskSchema` | `src/models/task.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudtasksProjectsLocationsQueuesTestIamPermissions

- **Signature**: `cloudtasksProjectsLocationsQueuesTestIamPermissions(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest, options?: RequestOptions): ApiPromise<TestIamPermissionsResponse, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTestIamPermissionsError>`
- **Wire**: `POST /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:testIamPermissions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `GoogleCloudTasksError` with `kind: "api"`, an instance of `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTestIamPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `queuesId` | `path` | `string` | yes |
| `body` | `body` | `TestIamPermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestIamPermissionsRequest` | `testIamPermissionsRequestSchema` | `src/models/test-iam-permissions-request.ts` |
| `TestIamPermissionsResponse` | `testIamPermissionsResponseSchema` | `src/models/test-iam-permissions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudtasksProjectsLocationsUpdateCmekConfig

- **Signature**: `cloudtasksProjectsLocationsUpdateCmekConfig(request: GoogleCloudTasksClient.CloudtasksProjectsLocationsUpdateCmekConfigRequest, options?: RequestOptions): ApiPromise<CmekConfig, GoogleCloudTasksClient.CloudtasksProjectsLocationsUpdateCmekConfigError>`
- **Wire**: `PATCH /v2/projects/{projectsId}/locations/{locationsId}/cmekConfig`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CmekConfig`
- **Error**: `GoogleCloudTasksError` with `kind: "api"`, an instance of `GoogleCloudTasksClient.CloudtasksProjectsLocationsUpdateCmekConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudTasksClient.CloudtasksProjectsLocationsUpdateCmekConfigRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `CmekConfig` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CmekConfig` | `cmekConfigSchema` | `src/models/cmek-config.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

