<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomerApIs — operations

Accessor: `client.customerApIs` · Source: `src/resources/customer-ap-is.ts` · 6 operations · Request and error types: namespace `CustomerApIs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `gbg-go-next-gen-flow-captain-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addDevice

- **Signature**: `addDevice(request: CustomerApIs.AddDeviceRequest, options?: RequestOptions): ApiPromise<JourneyDeviceStartResponse, CustomerApIs.AddDeviceError>`
- **Wire**: `POST /journey/device/start`
- **Auth**: `customerAccess`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JourneyDeviceStartResponse`
- **Error**: `GbgGoNextGenFlowCaptainApiError` with `kind: "api"`, an instance of `CustomerApIs.AddDeviceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error405"` [405] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerApIs.AddDeviceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `JourneyDeviceStartRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JourneyDeviceStartRequest` | `journeyDeviceStartRequestSchema` | `src/models/journey-device-start-request.ts` |
| `JourneyDeviceStartResponse` | `journeyDeviceStartResponseSchema` | `src/models/journey-device-start-response.ts` |

### deleteInstance

- **Signature**: `deleteInstance(request: CustomerApIs.DeleteInstanceRequest, options?: RequestOptions): ApiPromise<JourneyStateDeleteResponse, CustomerApIs.DeleteInstanceError>`
- **Wire**: `POST /journey/state/delete`
- **Auth**: `customerAccess`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JourneyStateDeleteResponse`
- **Error**: `GbgGoNextGenFlowCaptainApiError` with `kind: "api"`, an instance of `CustomerApIs.DeleteInstanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error405"` [405] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerApIs.DeleteInstanceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `JourneyStateDeleteRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JourneyStateDeleteRequest` | `journeyStateDeleteRequestSchema` | `src/models/journey-state-delete-request.ts` |
| `JourneyStateDeleteResponse` | `journeyStateDeleteResponseSchema` | `src/models/journey-state-delete-response.ts` |

### getJourneyState

- **Signature**: `getJourneyState(request: CustomerApIs.GetJourneyStateRequest, options?: RequestOptions): ApiPromise<JourneyStateFetchResponse, CustomerApIs.GetJourneyStateError>`
- **Wire**: `POST /journey/state/fetch`
- **Auth**: `customerAccess`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JourneyStateFetchResponse`
- **Error**: `GbgGoNextGenFlowCaptainApiError` with `kind: "api"`, an instance of `CustomerApIs.GetJourneyStateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error405"` [405] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerApIs.GetJourneyStateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `JourneyStateFetchRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JourneyStateFetchRequest` | `journeyStateFetchRequestSchema` | `src/models/journey-state-fetch-request.ts` |
| `JourneyStateFetchResponse` | `journeyStateFetchResponseSchema` | `src/models/journey-state-fetch-response.ts` |

### getTaskSchema

- **Signature**: `getTaskSchema(request: CustomerApIs.GetTaskSchemaRequest, options?: RequestOptions): ApiPromise<JourneyTaskSchemaResponse, CustomerApIs.GetTaskSchemaError>`
- **Wire**: `POST /journey/task/schema`
- **Auth**: `customerAccess`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JourneyTaskSchemaResponse`
- **Error**: `GbgGoNextGenFlowCaptainApiError` with `kind: "api"`, an instance of `CustomerApIs.GetTaskSchemaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error405"` [405] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerApIs.GetTaskSchemaRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `JourneyTaskSchemaRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JourneyTaskSchemaRequest` | `journeyTaskSchemaRequestSchema` | `src/models/journey-task-schema-request.ts` |
| `JourneyTaskSchemaResponse` | `journeyTaskSchemaResponseSchema` | `src/models/journey-task-schema-response.ts` |

### getTasksSchema

- **Signature**: `getTasksSchema(request: CustomerApIs.GetTasksSchemaRequest, options?: RequestOptions): ApiPromise<JourneyTaskListSchemaResponse, CustomerApIs.GetTasksSchemaError>`
- **Wire**: `POST /journey/task/list/schema`
- **Auth**: `customerAccess`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JourneyTaskListSchemaResponse`
- **Error**: `GbgGoNextGenFlowCaptainApiError` with `kind: "api"`, an instance of `CustomerApIs.GetTasksSchemaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error405"` [405] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerApIs.GetTasksSchemaRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `JourneyTaskListSchemaRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JourneyTaskListSchemaRequest` | `journeyTaskListSchemaRequestSchema` | `src/models/journey-task-list-schema-request.ts` |
| `JourneyTaskListSchemaResponse` | `journeyTaskListSchemaResponseSchema` | `src/models/journey-task-list-schema-response.ts` |

### startJourney

- **Signature**: `startJourney(request: CustomerApIs.StartJourneyRequest, options?: RequestOptions): ApiPromise<JourneyStartResponse, CustomerApIs.StartJourneyError>`
- **Wire**: `POST /journey/start`
- **Auth**: `customerAccess`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JourneyStartResponse`
- **Error**: `GbgGoNextGenFlowCaptainApiError` with `kind: "api"`, an instance of `CustomerApIs.StartJourneyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error405"` [405] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerApIs.StartJourneyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `JourneyStartRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JourneyStartRequest` | `journeyStartRequestSchema` | `src/models/journey-start-request.ts` |
| `JourneyStartResponse` | `journeyStartResponseSchema` | `src/models/journey-start-response.ts` |

