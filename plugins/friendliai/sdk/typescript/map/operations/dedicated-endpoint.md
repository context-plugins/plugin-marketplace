<!-- Generated file — do not edit; regenerated with the SDK. -->

# DedicatedEndpoint — operations

Accessor: `client.dedicatedEndpoint` · Source: `src/resources/dedicated-endpoint.ts` · 12 operations · Request and error types: namespace `DedicatedEndpoint`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### dedicatedCreateEndpoint

- **Signature**: `dedicatedCreateEndpoint(request: DedicatedEndpoint.DedicatedCreateEndpointRequest, options?: RequestOptions): ApiPromise<DedicatedEndpointStatus, DedicatedEndpoint.DedicatedCreateEndpointError>`
- **Wire**: `POST /dedicated/beta/endpoint`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DedicatedEndpointStatus`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedEndpoint.DedicatedCreateEndpointError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedEndpoint.DedicatedCreateEndpointRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `DedicatedEndpointCreateBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DedicatedEndpointCreateBody` | `dedicatedEndpointCreateBodySchema` | `src/models/dedicated-endpoint-create-body.ts` |
| `DedicatedEndpointStatus` | `dedicatedEndpointStatusSchema` | `src/models/dedicated-endpoint-status.ts` |

### dedicatedDeleteEndpoint

- **Signature**: `dedicatedDeleteEndpoint(request: DedicatedEndpoint.DedicatedDeleteEndpointRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, DedicatedEndpoint.DedicatedDeleteEndpointError>`
- **Wire**: `DELETE /dedicated/beta/endpoint/{endpoint_id}`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedEndpoint.DedicatedDeleteEndpointError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedEndpoint.DedicatedDeleteEndpointRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `endpointId` | `path` | `endpoint_id` | `string` | yes |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### dedicatedEndpointWandbArtifactCreate

- **Signature**: `dedicatedEndpointWandbArtifactCreate(request: DedicatedEndpoint.DedicatedEndpointWandbArtifactCreateRequest, options?: RequestOptions): ApiPromise<DedicatedEndpointWandbArtifactCreateResponse, DedicatedEndpoint.DedicatedEndpointWandbArtifactCreateError>`
- **Wire**: `POST /dedicated/endpoint/wandb-artifact-create`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DedicatedEndpointWandbArtifactCreateResponse`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedEndpoint.DedicatedEndpointWandbArtifactCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedEndpoint.DedicatedEndpointWandbArtifactCreateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `DedicatedEndpointWandbArtifactCreateBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DedicatedEndpointWandbArtifactCreateBody` | `dedicatedEndpointWandbArtifactCreateBodySchema` | `src/models/dedicated-endpoint-wandb-artifact-create-body.ts` |
| `DedicatedEndpointWandbArtifactCreateResponse` | `dedicatedEndpointWandbArtifactCreateResponseSchema` | `src/models/dedicated-endpoint-wandb-artifact-create-response.ts` |

### dedicatedGetEndpoint

- **Signature**: `dedicatedGetEndpoint(request: DedicatedEndpoint.DedicatedGetEndpointRequest, options?: RequestOptions): ApiPromise<DedicatedEndpointSpec, DedicatedEndpoint.DedicatedGetEndpointError>`
- **Wire**: `GET /dedicated/beta/endpoint/{endpoint_id}`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DedicatedEndpointSpec`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedEndpoint.DedicatedGetEndpointError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedEndpoint.DedicatedGetEndpointRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `endpointId` | `path` | `endpoint_id` | `string` | yes |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DedicatedEndpointSpec` | `dedicatedEndpointSpecSchema` | `src/models/dedicated-endpoint-spec.ts` |

### dedicatedGetEndpointStatus

- **Signature**: `dedicatedGetEndpointStatus(request: DedicatedEndpoint.DedicatedGetEndpointStatusRequest, options?: RequestOptions): ApiPromise<DedicatedEndpointStatus, DedicatedEndpoint.DedicatedGetEndpointStatusError>`
- **Wire**: `GET /dedicated/beta/endpoint/{endpoint_id}/status`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DedicatedEndpointStatus`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedEndpoint.DedicatedGetEndpointStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedEndpoint.DedicatedGetEndpointStatusRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `endpointId` | `path` | `endpoint_id` | `string` | yes |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DedicatedEndpointStatus` | `dedicatedEndpointStatusSchema` | `src/models/dedicated-endpoint-status.ts` |

### dedicatedGetEndpointVersionHistory

- **Signature**: `dedicatedGetEndpointVersionHistory(request: DedicatedEndpoint.DedicatedGetEndpointVersionHistoryRequest, options?: RequestOptions): ApiPromise<DedicatedEndpointVersionHistoryResponse, DedicatedEndpoint.DedicatedGetEndpointVersionHistoryError>`
- **Wire**: `GET /dedicated/beta/endpoint/{endpoint_id}/version`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DedicatedEndpointVersionHistoryResponse`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedEndpoint.DedicatedGetEndpointVersionHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedEndpoint.DedicatedGetEndpointVersionHistoryRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `endpointId` | `path` | `endpoint_id` | `string` | yes |
| `cursor` | `query` | — | `Cursor` | no |
| `limit` | `query` | — | `Limit` | no |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Cursor` | `cursorSchema` | `src/models/unions/cursor.ts` |
| `Limit` | `limitSchema` | `src/models/unions/limit.ts` |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DedicatedEndpointVersionHistoryResponse` | `dedicatedEndpointVersionHistoryResponseSchema` | `src/models/dedicated-endpoint-version-history-response.ts` |

### dedicatedListEndpoints

- **Signature**: `dedicatedListEndpoints(request: DedicatedEndpoint.DedicatedListEndpointsRequest, options?: RequestOptions): ApiPromise<DedicatedEndpointListResponse, DedicatedEndpoint.DedicatedListEndpointsError>`
- **Wire**: `GET /dedicated/beta/endpoint`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DedicatedEndpointListResponse`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedEndpoint.DedicatedListEndpointsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedEndpoint.DedicatedListEndpointsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `query` | `project_id` | `ProjectId1` | no |
| `cursor` | `query` | — | `Cursor` | no |
| `limit` | `query` | — | `Limit` | no |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectId1` | `projectId1Schema` | `src/models/unions/project-id1.ts` |
| `Cursor` | `cursorSchema` | `src/models/unions/cursor.ts` |
| `Limit` | `limitSchema` | `src/models/unions/limit.ts` |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DedicatedEndpointListResponse` | `dedicatedEndpointListResponseSchema` | `src/models/dedicated-endpoint-list-response.ts` |

### dedicatedRestartEndpoint

- **Signature**: `dedicatedRestartEndpoint(request: DedicatedEndpoint.DedicatedRestartEndpointRequest, options?: RequestOptions): ApiPromise<DedicatedEndpointStatus, DedicatedEndpoint.DedicatedRestartEndpointError>`
- **Wire**: `PUT /dedicated/beta/endpoint/{endpoint_id}/restart`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DedicatedEndpointStatus`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedEndpoint.DedicatedRestartEndpointError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedEndpoint.DedicatedRestartEndpointRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `endpointId` | `path` | `endpoint_id` | `string` | yes |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DedicatedEndpointStatus` | `dedicatedEndpointStatusSchema` | `src/models/dedicated-endpoint-status.ts` |

### dedicatedSleepEndpoint

- **Signature**: `dedicatedSleepEndpoint(request: DedicatedEndpoint.DedicatedSleepEndpointRequest, options?: RequestOptions): ApiPromise<DedicatedEndpointStatus, DedicatedEndpoint.DedicatedSleepEndpointError>`
- **Wire**: `PUT /dedicated/beta/endpoint/{endpoint_id}/sleep`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DedicatedEndpointStatus`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedEndpoint.DedicatedSleepEndpointError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedEndpoint.DedicatedSleepEndpointRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `endpointId` | `path` | `endpoint_id` | `string` | yes |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DedicatedEndpointStatus` | `dedicatedEndpointStatusSchema` | `src/models/dedicated-endpoint-status.ts` |

### dedicatedTerminateEndpoint

- **Signature**: `dedicatedTerminateEndpoint(request: DedicatedEndpoint.DedicatedTerminateEndpointRequest, options?: RequestOptions): ApiPromise<DedicatedEndpointStatus, DedicatedEndpoint.DedicatedTerminateEndpointError>`
- **Wire**: `PUT /dedicated/beta/endpoint/{endpoint_id}/terminate`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DedicatedEndpointStatus`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedEndpoint.DedicatedTerminateEndpointError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedEndpoint.DedicatedTerminateEndpointRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `endpointId` | `path` | `endpoint_id` | `string` | yes |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DedicatedEndpointStatus` | `dedicatedEndpointStatusSchema` | `src/models/dedicated-endpoint-status.ts` |

### dedicatedUpdateEndpoint

- **Signature**: `dedicatedUpdateEndpoint(request: DedicatedEndpoint.DedicatedUpdateEndpointRequest, options?: RequestOptions): ApiPromise<DedicatedEndpointSpec, DedicatedEndpoint.DedicatedUpdateEndpointError>`
- **Wire**: `PUT /dedicated/beta/endpoint/{endpoint_id}`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DedicatedEndpointSpec`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedEndpoint.DedicatedUpdateEndpointError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedEndpoint.DedicatedUpdateEndpointRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `endpointId` | `path` | `endpoint_id` | `string` | yes |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `DedicatedEndpointUpdateBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DedicatedEndpointUpdateBody` | `dedicatedEndpointUpdateBodySchema` | `src/models/dedicated-endpoint-update-body.ts` |
| `DedicatedEndpointSpec` | `dedicatedEndpointSpecSchema` | `src/models/dedicated-endpoint-spec.ts` |

### dedicatedWakeEndpoint

- **Signature**: `dedicatedWakeEndpoint(request: DedicatedEndpoint.DedicatedWakeEndpointRequest, options?: RequestOptions): ApiPromise<DedicatedEndpointStatus, DedicatedEndpoint.DedicatedWakeEndpointError>`
- **Wire**: `PUT /dedicated/beta/endpoint/{endpoint_id}/wake`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DedicatedEndpointStatus`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedEndpoint.DedicatedWakeEndpointError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedEndpoint.DedicatedWakeEndpointRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `endpointId` | `path` | `endpoint_id` | `string` | yes |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DedicatedEndpointStatus` | `dedicatedEndpointStatusSchema` | `src/models/dedicated-endpoint-status.ts` |

