<!-- Generated file — do not edit; regenerated with the SDK. -->

# SmsApi — operations

Accessor: `client.smsApi` · Source: `src/resources/sms-api.ts` · 3 operations · Request and error types: namespace `SmsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `didlogic`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### smsCreate

- **Signature**: `smsCreate(request: SmsApi.SmsCreateRequest, options?: RequestOptions): ApiPromise<ApiV1SmsResponse1, SmsApi.SmsCreateError>`
- **Wire**: `POST /api/v1/sms`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1SmsResponse1`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `SmsApi.SmsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"apiV1Sms403Error1"` [403] `ApiV1Sms403Error1` · `"apiV1SmsResponse21"` [422] `ApiV1SmsResponse21` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SmsApi.SmsCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1SmsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SmsRequest` | `apiV1SmsRequestSchema` | `src/models/api-v1-sms-request.ts` |
| `ApiV1SmsResponse1` | `apiV1SmsResponse1Schema` | `src/models/api-v1-sms-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `ApiV1Sms403Error1` | `apiV1Sms403Error1Schema` | `src/models/api-v1-sms403-error1.ts` |
| `ApiV1SmsResponse21` | `apiV1SmsResponse21Schema` | `src/models/unions/api-v1-sms-response21.ts` |

### smsIndex

- **Signature**: `smsIndex(request?: SmsApi.SmsIndexRequest, options?: RequestOptions): ApiPromise<ApiV1SmsResponse, SmsApi.SmsIndexError>`
- **Wire**: `GET /api/v1/sms`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1SmsResponse`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `SmsApi.SmsIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Sms403Error1"` [403] `ApiV1Sms403Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SmsApi.SmsIndexRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `string` | no | `"1"` |
| `perPage` | `query` | `per_page` | `string` | no | `"20"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SmsResponse` | `apiV1SmsResponseSchema` | `src/models/api-v1-sms-response.ts` |
| `ApiV1Sms403Error1` | `apiV1Sms403Error1Schema` | `src/models/api-v1-sms403-error1.ts` |

### smsShow

- **Signature**: `smsShow(request: SmsApi.SmsShowRequest, options?: RequestOptions): ApiPromise<ApiV1SmsResponse3, SmsApi.SmsShowError>`
- **Wire**: `GET /api/v1/sms/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1SmsResponse3`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `SmsApi.SmsShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Sms403Error1"` [403] `ApiV1Sms403Error1` · `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SmsApi.SmsShowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SmsResponse3` | `apiV1SmsResponse3Schema` | `src/models/api-v1-sms-response3.ts` |
| `ApiV1Sms403Error1` | `apiV1Sms403Error1Schema` | `src/models/api-v1-sms403-error1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

