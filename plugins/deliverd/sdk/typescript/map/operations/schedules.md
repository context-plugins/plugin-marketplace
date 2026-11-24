<!-- Generated file — do not edit; regenerated with the SDK. -->

# Schedules — operations

Accessor: `client.schedules` · Source: `src/resources/schedules.ts` · 4 operations · Request and error types: namespace `Schedules`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteApiV1SchedulesById

- **Signature**: `deleteApiV1SchedulesById(request: Schedules.DeleteApiV1SchedulesByIdRequest, options?: RequestOptions): ApiPromise<undefined, Schedules.DeleteApiV1SchedulesByIdError>`
- **Wire**: `DELETE /api/v1/schedules/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Schedules.DeleteApiV1SchedulesByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Schedules.DeleteApiV1SchedulesByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### getApiV1Schedules

- **Signature**: `getApiV1Schedules(request?: Schedules.GetApiV1SchedulesRequest, options?: RequestOptions): ApiPromise<ApiV1SchedulesResponse, ApiError>`
- **Wire**: `GET /api/v1/schedules`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1SchedulesResponse`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Schedules.GetApiV1SchedulesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `due` | `query` | `Due` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Due` | `dueSchema` | `src/models/due.ts` |
| `ApiV1SchedulesResponse` | `apiV1SchedulesResponseSchema` | `src/models/api-v1-schedules-response.ts` |

### patchApiV1SchedulesById

- **Signature**: `patchApiV1SchedulesById(request: Schedules.PatchApiV1SchedulesByIdRequest, options?: RequestOptions): ApiPromise<ApiV1SchedulesResponse1, Schedules.PatchApiV1SchedulesByIdError>`
- **Wire**: `PATCH /api/v1/schedules/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1SchedulesResponse1`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Schedules.PatchApiV1SchedulesByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Schedules.PatchApiV1SchedulesByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1SchedulesRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SchedulesRequest1` | `apiV1SchedulesRequest1Schema` | `src/models/api-v1-schedules-request1.ts` |
| `ApiV1SchedulesResponse1` | `apiV1SchedulesResponse1Schema` | `src/models/api-v1-schedules-response1.ts` |

### postApiV1Schedules

- **Signature**: `postApiV1Schedules(request?: Schedules.PostApiV1SchedulesRequest, options?: RequestOptions): ApiPromise<ApiV1SchedulesResponse1, Schedules.PostApiV1SchedulesError>`
- **Wire**: `POST /api/v1/schedules`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1SchedulesResponse1`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Schedules.PostApiV1SchedulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Schedules.PostApiV1SchedulesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1SchedulesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SchedulesRequest` | `apiV1SchedulesRequestSchema` | `src/models/api-v1-schedules-request.ts` |
| `ApiV1SchedulesResponse1` | `apiV1SchedulesResponse1Schema` | `src/models/api-v1-schedules-response1.ts` |

