<!-- Generated file — do not edit; regenerated with the SDK. -->

# ScheduleApi — operations

Accessor: `client.scheduleApi` · Source: `src/resources/schedule-api.ts` · 5 operations · Request and error types: namespace `ScheduleApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `circle-ci`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSchedule

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createSchedule(request: ScheduleApi.CreateScheduleRequestParams, options?: RequestOptions): ApiPromise<Schedule, ScheduleApi.CreateScheduleError>`
- **Wire**: `POST /project/{project-slug}/schedule`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Schedule`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ScheduleApi.CreateScheduleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScheduleApi.CreateScheduleRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectSlug` | `path` | `project-slug` | `string` | yes |
| `body` | `body` | — | `CreateScheduleRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateScheduleRequest` | `createScheduleRequestSchema` | `src/models/create-schedule-request.ts` |
| `Schedule` | `scheduleSchema` | `src/models/schedule.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteSchedule

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteSchedule(request: ScheduleApi.DeleteScheduleRequest, options?: RequestOptions): ApiPromise<MessageResponse, ScheduleApi.DeleteScheduleError>`
- **Wire**: `DELETE /schedule/{schedule-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageResponse`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ScheduleApi.DeleteScheduleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScheduleApi.DeleteScheduleRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `scheduleId` | `path` | `schedule-id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getSchedule

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getSchedule(request: ScheduleApi.GetScheduleRequest, options?: RequestOptions): ApiPromise<Schedule, ScheduleApi.GetScheduleError>`
- **Wire**: `GET /schedule/{schedule-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Schedule`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ScheduleApi.GetScheduleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScheduleApi.GetScheduleRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `scheduleId` | `path` | `schedule-id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Schedule` | `scheduleSchema` | `src/models/schedule.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listSchedules

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listSchedules(request: ScheduleApi.ListSchedulesRequest, options?: RequestOptions): ApiPromise<ScheduleList, ScheduleApi.ListSchedulesError>`
- **Wire**: `GET /project/{project-slug}/schedule`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScheduleList`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ScheduleApi.ListSchedulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScheduleApi.ListSchedulesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectSlug` | `path` | `project-slug` | `string` | yes |
| `pageToken` | `query` | `page-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScheduleList` | `scheduleListSchema` | `src/models/schedule-list.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateSchedule

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateSchedule(request: ScheduleApi.UpdateScheduleRequestParams, options?: RequestOptions): ApiPromise<Schedule, ScheduleApi.UpdateScheduleError>`
- **Wire**: `PATCH /schedule/{schedule-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Schedule`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ScheduleApi.UpdateScheduleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScheduleApi.UpdateScheduleRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `scheduleId` | `path` | `schedule-id` | `string` | yes |
| `body` | `body` | — | `UpdateScheduleRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateScheduleRequest` | `updateScheduleRequestSchema` | `src/models/update-schedule-request.ts` |
| `Schedule` | `scheduleSchema` | `src/models/schedule.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

