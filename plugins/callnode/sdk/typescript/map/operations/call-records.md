<!-- Generated file — do not edit; regenerated with the SDK. -->

# CallRecords — operations

Accessor: `client.callRecords` · Source: `src/resources/call-records.ts` · 2 operations · Request and error types: namespace `CallRecords`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `call-node`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCallRecord

- **Signature**: `getCallRecord(request: CallRecords.GetCallRecordRequest, options?: RequestOptions): ApiPromise<ApiV1CallsResponse1, CallRecords.GetCallRecordError>`
- **Wire**: `GET /api/v1/calls/{callId}`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1CallsResponse1`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `CallRecords.GetCallRecordError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CallRecords.GetCallRecordRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `callId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CallsResponse1` | `apiV1CallsResponse1Schema` | `src/models/api-v1-calls-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listCallRecords

- **Signature**: `listCallRecords(request?: CallRecords.ListCallRecordsRequest, options?: RequestOptions): ApiPromise<ApiV1CallsResponse, CallRecords.ListCallRecordsError>`
- **Wire**: `GET /api/v1/calls`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1CallsResponse`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `CallRecords.ListCallRecordsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CallRecords.ListCallRecordsRequest` (7):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `number` | `query` | `string` | no | — |
| `direction` | `query` | `Direction` | no | — |
| `status` | `query` | `Status` | no | — |
| `since` | `query` | `Date` (date-time) | no | — |
| `until` | `query` | `Date` (date-time) | no | — |
| `before` | `query` | `Date` (date-time) | no | — |
| `limit` | `query` | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Status` | `statusSchema` | `src/models/status.ts` |
| `ApiV1CallsResponse` | `apiV1CallsResponseSchema` | `src/models/api-v1-calls-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

