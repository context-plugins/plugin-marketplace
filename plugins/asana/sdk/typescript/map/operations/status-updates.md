<!-- Generated file — do not edit; regenerated with the SDK. -->

# StatusUpdates — operations

Accessor: `client.statusUpdates` · Source: `src/resources/status-updates.ts` · 4 operations · Request and error types: namespace `StatusUpdates`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createStatusForObject

- **Signature**: `createStatusForObject(request: StatusUpdates.CreateStatusForObjectRequest, options?: RequestOptions): ApiPromise<StatusUpdatesResponse, StatusUpdates.CreateStatusForObjectError>`
- **Wire**: `POST /status_updates`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StatusUpdatesResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `StatusUpdates.CreateStatusForObjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StatusUpdates.CreateStatusForObjectRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |
| `body` | `body` | — | `StatusUpdatesRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusUpdatesRequest` | `statusUpdatesRequestSchema` | `src/models/status-updates-request.ts` |
| `StatusUpdatesResponse` | `statusUpdatesResponseSchema` | `src/models/status-updates-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteStatus

- **Signature**: `deleteStatus(request: StatusUpdates.DeleteStatusRequest, options?: RequestOptions): ApiPromise<StatusUpdatesResponse1, StatusUpdates.DeleteStatusError>`
- **Wire**: `DELETE /status_updates/{status_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StatusUpdatesResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `StatusUpdates.DeleteStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StatusUpdates.DeleteStatusRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `statusGid` | `path` | `status_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusUpdatesResponse1` | `statusUpdatesResponse1Schema` | `src/models/status-updates-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getStatus

- **Signature**: `getStatus(request: StatusUpdates.GetStatusRequest, options?: RequestOptions): ApiPromise<StatusUpdatesResponse, StatusUpdates.GetStatusError>`
- **Wire**: `GET /status_updates/{status_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StatusUpdatesResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `StatusUpdates.GetStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StatusUpdates.GetStatusRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `statusGid` | `path` | `status_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusUpdatesResponse` | `statusUpdatesResponseSchema` | `src/models/status-updates-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getStatusesForObject

- **Signature**: `getStatusesForObject(request: StatusUpdates.GetStatusesForObjectRequest, options?: RequestOptions): ApiPromise<StatusUpdatesResponse2, StatusUpdates.GetStatusesForObjectError>`
- **Wire**: `GET /status_updates`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StatusUpdatesResponse2`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `StatusUpdates.GetStatusesForObjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StatusUpdates.GetStatusesForObjectRequest` (6):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `parent` | `query` | — | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |
| `createdSince` | `query` | `created_since` | `Date` (date-time) | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusUpdatesResponse2` | `statusUpdatesResponse2Schema` | `src/models/status-updates-response2.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

