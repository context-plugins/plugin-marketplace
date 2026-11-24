<!-- Generated file — do not edit; regenerated with the SDK. -->

# OutboundCalls — operations

Accessor: `client.outboundCalls` · Source: `src/resources/outbound-calls.ts` · 5 operations · Request and error types: namespace `OutboundCalls`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `call-node`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelCall

- **Signature**: `cancelCall(request: OutboundCalls.CancelCallRequest, options?: RequestOptions): ApiPromise<ApiV1OutboundCallsResponse1, OutboundCalls.CancelCallError>`
- **Wire**: `DELETE /api/v1/outbound/calls/{callId}`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1OutboundCallsResponse1`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `OutboundCalls.CancelCallError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OutboundCalls.CancelCallRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `callId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1OutboundCallsResponse1` | `apiV1OutboundCallsResponse1Schema` | `src/models/api-v1-outbound-calls-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCall

- **Signature**: `getCall(request: OutboundCalls.GetCallRequest, options?: RequestOptions): ApiPromise<Call, OutboundCalls.GetCallError>`
- **Wire**: `GET /api/v1/outbound/calls/{callId}`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Call`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `OutboundCalls.GetCallError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OutboundCalls.GetCallRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `callId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Call` | `callSchema` | `src/models/call.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listCalls

- **Signature**: `listCalls(request?: OutboundCalls.ListCallsRequest, options?: RequestOptions): ApiPromise<ApiV1OutboundCallsResponse, OutboundCalls.ListCallsError>`
- **Wire**: `GET /api/v1/outbound/calls`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1OutboundCallsResponse`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `OutboundCalls.ListCallsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OutboundCalls.ListCallsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `status` | `query` | `CallStatus` | no | — |
| `limit` | `query` | `number` | no | `50` |
| `cursor` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CallStatus` | `callStatusSchema` | `src/models/call-status.ts` |
| `ApiV1OutboundCallsResponse` | `apiV1OutboundCallsResponseSchema` | `src/models/api-v1-outbound-calls-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### originateCall

- **Signature**: `originateCall(request: OutboundCalls.OriginateCallRequest, options?: RequestOptions): ApiPromise<OriginateResponse, OutboundCalls.OriginateCallError>`
- **Wire**: `POST /api/v1/outbound/calls`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OriginateResponse`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `OutboundCalls.OriginateCallError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OutboundCalls.OriginateCallRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xIdempotencyKey` | `header` | `X-Idempotency-Key` | `string` | no |
| `body` | `body` | — | `OriginateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OriginateRequest` | `originateRequestSchema` | `src/models/originate-request.ts` |
| `OriginateResponse` | `originateResponseSchema` | `src/models/originate-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferCall

- **Signature**: `transferCall(request: OutboundCalls.TransferCallRequest, options?: RequestOptions): ApiPromise<ApiV1CallsTransferResponse, OutboundCalls.TransferCallError>`
- **Wire**: `POST /api/v1/calls/{callId}/transfer`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1CallsTransferResponse`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `OutboundCalls.TransferCallError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error403"` [403] no body · `"error404"` [404] no body · `"error409"` [409] no body · `"error422"` [422] no body · `"error502"` [502] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OutboundCalls.TransferCallRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `callId` | `path` | `string` | yes |
| `body` | `body` | `ApiV1CallsTransferRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CallsTransferRequest` | `apiV1CallsTransferRequestSchema` | `src/models/api-v1-calls-transfer-request.ts` |
| `ApiV1CallsTransferResponse` | `apiV1CallsTransferResponseSchema` | `src/models/api-v1-calls-transfer-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

