<!-- Generated file — do not edit; regenerated with the SDK. -->

# Faxes — operations

Accessor: `client.faxes` · Source: `src/resources/faxes.ts` · 5 operations · Request and error types: namespace `Faxes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `call-node`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteFax

- **Signature**: `deleteFax(request: Faxes.DeleteFaxRequest, options?: RequestOptions): ApiPromise<undefined, Faxes.DeleteFaxError>`
- **Wire**: `DELETE /api/v1/faxes/{id}`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `Faxes.DeleteFaxError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [409] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Faxes.DeleteFaxRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### downloadFax

- **Signature**: `downloadFax(request: Faxes.DownloadFaxRequest, options?: RequestOptions): ApiPromise<BinaryContent, Faxes.DownloadFaxError>`
- **Wire**: `GET /api/v1/faxes/{id}/download`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `Faxes.DownloadFaxError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Faxes.DownloadFaxRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `id` | `path` | `string` | yes | — |
| `format` | `query` | `Format` | no | `Format.Pdf` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getFax

- **Signature**: `getFax(request: Faxes.GetFaxRequest, options?: RequestOptions): ApiPromise<Fax, Faxes.GetFaxError>`
- **Wire**: `GET /api/v1/faxes/{id}`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Fax`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `Faxes.GetFaxError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Faxes.GetFaxRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Fax` | `faxSchema` | `src/models/fax.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listFaxes

- **Signature**: `listFaxes(request?: Faxes.ListFaxesRequest, options?: RequestOptions): ApiPromise<ApiV1FaxesResponse, Faxes.ListFaxesError>`
- **Wire**: `GET /api/v1/faxes`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1FaxesResponse`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `Faxes.ListFaxesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Faxes.ListFaxesRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `direction` | `query` | `Direction` | no | — |
| `status` | `query` | `StatusCallnodeIoFaxesApi` | no | — |
| `limit` | `query` | `number` | no | `25` |
| `cursor` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `StatusCallnodeIoFaxesApi` | `statusCallnodeIoFaxesApiSchema` | `src/models/status-callnode-io-faxes-api.ts` |
| `ApiV1FaxesResponse` | `apiV1FaxesResponseSchema` | `src/models/api-v1-faxes-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sendFax

- **Signature**: `sendFax(request: Faxes.SendFaxRequestParams, options?: RequestOptions): ApiPromise<Fax, Faxes.SendFaxError>`
- **Wire**: `POST /api/v1/faxes`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Fax`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `Faxes.SendFaxError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [402] `Error` · `"error4"` [403] `Error` · `"error5"` [413] `Error` · `"error6"` [415] `Error` · `"error7"` [422] `Error` · `"error8"` [429] `Error` · `"error9"` [502] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Faxes.SendFaxRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xIdempotencyKey` | `header` | `X-Idempotency-Key` | `string` | no |
| `body` | `body` | — | `SendFaxRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SendFaxRequest` | `sendFaxRequestSchema` | `src/models/send-fax-request.ts` |
| `Fax` | `faxSchema` | `src/models/fax.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

