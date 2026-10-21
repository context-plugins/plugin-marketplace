<!-- Generated file — do not edit; regenerated with the SDK. -->

# EndUserApIs — operations

Accessor: `client.endUserApIs` · Source: `src/resources/end-user-ap-is.ts` · 3 operations · Request and error types: namespace `EndUserApIs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `gbg-go-next-gen-flow-captain-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deviceConnect

- **Signature**: `deviceConnect(request: EndUserApIs.DeviceConnectRequest, options?: RequestOptions): ApiPromise<JourneyDeviceConnectResponse, EndUserApIs.DeviceConnectError>`
- **Wire**: `POST /journey/device/connect`
- **Auth**: `deviceConnect`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JourneyDeviceConnectResponse`
- **Error**: `GbgGoNextGenFlowCaptainApiError` with `kind: "api"`, an instance of `EndUserApIs.DeviceConnectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error405"` [405] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EndUserApIs.DeviceConnectRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `JourneyDeviceConnectRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JourneyDeviceConnectRequest` | `journeyDeviceConnectRequestSchema` | `src/models/journey-device-connect-request.ts` |
| `JourneyDeviceConnectResponse` | `journeyDeviceConnectResponseSchema` | `src/models/journey-device-connect-response.ts` |

### getTasks

- **Signature**: `getTasks(request: EndUserApIs.GetTasksRequest, options?: RequestOptions): ApiPromise<JourneyTaskListResponse, EndUserApIs.GetTasksError>`
- **Wire**: `POST /journey/task/list`
- **Auth**: `pingId`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JourneyTaskListResponse`
- **Error**: `GbgGoNextGenFlowCaptainApiError` with `kind: "api"`, an instance of `EndUserApIs.GetTasksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error405"` [405] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EndUserApIs.GetTasksRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `JourneyTaskListRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JourneyTaskListRequest` | `journeyTaskListRequestSchema` | `src/models/journey-task-list-request.ts` |
| `JourneyTaskListResponse` | `journeyTaskListResponseSchema` | `src/models/journey-task-list-response.ts` |

### updateTask

- **Signature**: `updateTask(request: EndUserApIs.UpdateTaskRequest, options?: RequestOptions): ApiPromise<JourneyTaskUpdateResponse, EndUserApIs.UpdateTaskError>`
- **Wire**: `POST /journey/task/update`
- **Auth**: `pingId`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JourneyTaskUpdateResponse`
- **Error**: `GbgGoNextGenFlowCaptainApiError` with `kind: "api"`, an instance of `EndUserApIs.UpdateTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error405"` [405] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EndUserApIs.UpdateTaskRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `JourneyTaskUpdateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JourneyTaskUpdateRequest` | `journeyTaskUpdateRequestSchema` | `src/models/journey-task-update-request.ts` |
| `JourneyTaskUpdateResponse` | `journeyTaskUpdateResponseSchema` | `src/models/journey-task-update-response.ts` |

