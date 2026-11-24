<!-- Generated file — do not edit; regenerated with the SDK. -->

# SipTrunks — operations

Accessor: `client.sipTrunks` · Source: `src/resources/sip-trunks.ts` · 6 operations · Request and error types: namespace `SipTrunks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `call-node`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSipTrunk

- **Signature**: `createSipTrunk(request: SipTrunks.CreateSipTrunkRequest, options?: RequestOptions): ApiPromise<SipTrunk, SipTrunks.CreateSipTrunkError>`
- **Wire**: `POST /api/v1/trunks`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SipTrunk`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `SipTrunks.CreateSipTrunkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [402] `Error` · `"error4"` [403] `Error` · `"error5"` [409] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SipTrunks.CreateSipTrunkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateTrunkRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateTrunkRequest` | `createTrunkRequestSchema` | `src/models/create-trunk-request.ts` |
| `SipTrunk` | `sipTrunkSchema` | `src/models/sip-trunk.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteSipTrunk

- **Signature**: `deleteSipTrunk(request: SipTrunks.DeleteSipTrunkRequest, options?: RequestOptions): ApiPromise<ApiV1TrunksResponse1, SipTrunks.DeleteSipTrunkError>`
- **Wire**: `DELETE /api/v1/trunks/{id}`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1TrunksResponse1`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `SipTrunks.DeleteSipTrunkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [409] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SipTrunks.DeleteSipTrunkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TrunksResponse1` | `apiV1TrunksResponse1Schema` | `src/models/api-v1-trunks-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getSipTrunk

- **Signature**: `getSipTrunk(request: SipTrunks.GetSipTrunkRequest, options?: RequestOptions): ApiPromise<SipTrunk, SipTrunks.GetSipTrunkError>`
- **Wire**: `GET /api/v1/trunks/{id}`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SipTrunk`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `SipTrunks.GetSipTrunkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SipTrunks.GetSipTrunkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SipTrunk` | `sipTrunkSchema` | `src/models/sip-trunk.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listSipTrunks

- **Signature**: `listSipTrunks(options?: RequestOptions): ApiPromise<ApiV1TrunksResponse, SipTrunks.ListSipTrunksError>`
- **Wire**: `GET /api/v1/trunks`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1TrunksResponse`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `SipTrunks.ListSipTrunksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TrunksResponse` | `apiV1TrunksResponseSchema` | `src/models/api-v1-trunks-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### rotateSipTrunkCredentials

- **Signature**: `rotateSipTrunkCredentials(request: SipTrunks.RotateSipTrunkCredentialsRequest, options?: RequestOptions): ApiPromise<SipTrunk, SipTrunks.RotateSipTrunkCredentialsError>`
- **Wire**: `POST /api/v1/trunks/{id}/rotate-credentials`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SipTrunk`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `SipTrunks.RotateSipTrunkCredentialsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SipTrunks.RotateSipTrunkCredentialsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SipTrunk` | `sipTrunkSchema` | `src/models/sip-trunk.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateSipTrunk

- **Signature**: `updateSipTrunk(request: SipTrunks.UpdateSipTrunkRequest, options?: RequestOptions): ApiPromise<SipTrunk, SipTrunks.UpdateSipTrunkError>`
- **Wire**: `PATCH /api/v1/trunks/{id}`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SipTrunk`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `SipTrunks.UpdateSipTrunkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SipTrunks.UpdateSipTrunkRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `UpdateTrunkRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateTrunkRequest` | `updateTrunkRequestSchema` | `src/models/update-trunk-request.ts` |
| `SipTrunk` | `sipTrunkSchema` | `src/models/sip-trunk.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

