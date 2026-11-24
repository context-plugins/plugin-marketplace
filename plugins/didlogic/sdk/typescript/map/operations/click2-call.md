<!-- Generated file — do not edit; regenerated with the SDK. -->

# Click2Call — operations

Accessor: `client.click2Call` · Source: `src/resources/click2-call.ts` · 4 operations · Request and error types: namespace `Click2Call`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `didlogic`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### click2CallCreate

- **Signature**: `click2CallCreate(request?: Click2Call.Click2CallCreateRequest, options?: RequestOptions): ApiPromise<ApiV1Click2CallResponse, Click2Call.Click2CallCreateError>`
- **Wire**: `POST /api/v1/click2call`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1Click2CallResponse`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `Click2Call.Click2CallCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Click2Call401Error1"` [401] `ApiV1Click2Call401Error1` · `"apiV1Click2Call402Error1"` [402] `ApiV1Click2Call402Error1` · `"apiV1Click2Call403Error1"` [403] `ApiV1Click2Call403Error1` · `"apiV1Click2Call409Error1"` [409] `ApiV1Click2Call409Error1` · `"apiV1Click2Call422Error1"` [422] `ApiV1Click2Call422Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Click2Call.Click2CallCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1Click2CallRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1Click2CallRequest` | `apiV1Click2CallRequestSchema` | `src/models/api-v1-click2-call-request.ts` |
| `ApiV1Click2CallResponse` | `apiV1Click2CallResponseSchema` | `src/models/api-v1-click2-call-response.ts` |
| `ApiV1Click2Call401Error1` | `apiV1Click2Call401Error1Schema` | `src/models/api-v1-click2-call401-error1.ts` |
| `ApiV1Click2Call402Error1` | `apiV1Click2Call402Error1Schema` | `src/models/api-v1-click2-call402-error1.ts` |
| `ApiV1Click2Call403Error1` | `apiV1Click2Call403Error1Schema` | `src/models/api-v1-click2-call403-error1.ts` |
| `ApiV1Click2Call409Error1` | `apiV1Click2Call409Error1Schema` | `src/models/api-v1-click2-call409-error1.ts` |
| `ApiV1Click2Call422Error1` | `apiV1Click2Call422Error1Schema` | `src/models/api-v1-click2-call422-error1.ts` |

### click2CallDestroy

- **Signature**: `click2CallDestroy(request: Click2Call.Click2CallDestroyRequest, options?: RequestOptions): ApiPromise<undefined, Click2Call.Click2CallDestroyError>`
- **Wire**: `DELETE /api/v1/click2call/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `Click2Call.Click2CallDestroyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Click2Call401Error1"` [401] `ApiV1Click2Call401Error1` · `"apiV1Click2Call403Error1"` [403] `ApiV1Click2Call403Error1` · `"apiV1Click2Call404Error1"` [404] `ApiV1Click2Call404Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Click2Call.Click2CallDestroyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1Click2Call401Error1` | `apiV1Click2Call401Error1Schema` | `src/models/api-v1-click2-call401-error1.ts` |
| `ApiV1Click2Call403Error1` | `apiV1Click2Call403Error1Schema` | `src/models/api-v1-click2-call403-error1.ts` |
| `ApiV1Click2Call404Error1` | `apiV1Click2Call404Error1Schema` | `src/models/api-v1-click2-call404-error1.ts` |

### click2CallShow

- **Signature**: `click2CallShow(request: Click2Call.Click2CallShowRequest, options?: RequestOptions): ApiPromise<ApiV1Click2CallResponse1, Click2Call.Click2CallShowError>`
- **Wire**: `GET /api/v1/click2call/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1Click2CallResponse1`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `Click2Call.Click2CallShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Click2Call401Error1"` [401] `ApiV1Click2Call401Error1` · `"apiV1Click2Call403Error1"` [403] `ApiV1Click2Call403Error1` · `"apiV1Click2Call404Error1"` [404] `ApiV1Click2Call404Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Click2Call.Click2CallShowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1Click2CallResponse1` | `apiV1Click2CallResponse1Schema` | `src/models/api-v1-click2-call-response1.ts` |
| `ApiV1Click2Call401Error1` | `apiV1Click2Call401Error1Schema` | `src/models/api-v1-click2-call401-error1.ts` |
| `ApiV1Click2Call403Error1` | `apiV1Click2Call403Error1Schema` | `src/models/api-v1-click2-call403-error1.ts` |
| `ApiV1Click2Call404Error1` | `apiV1Click2Call404Error1Schema` | `src/models/api-v1-click2-call404-error1.ts` |

### recordingsShow

- **Signature**: `recordingsShow(request: Click2Call.RecordingsShowRequest, options?: RequestOptions): ApiPromise<undefined, Click2Call.RecordingsShowError>`
- **Wire**: `GET /api/v1/recordings/{user_id}/{token}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `Click2Call.RecordingsShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error302"` [302] `string` · `"error"` [404] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Click2Call.RecordingsShowRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `token` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

