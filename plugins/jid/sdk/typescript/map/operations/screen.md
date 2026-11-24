<!-- Generated file — do not edit; regenerated with the SDK. -->

# Screen — operations

Accessor: `client.screen` · Source: `src/resources/screen.ts` · 3 operations · Request and error types: namespace `Screen`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `jid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### emailCheck

- **Signature**: `emailCheck(request: Screen.EmailCheckRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Screen.EmailCheckError>`
- **Wire**: `POST /v1/email-check`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `JidError` with `kind: "api"`, an instance of `Screen.EmailCheckError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Screen.EmailCheckRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1EmailCheckRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1EmailCheckRequest` | `v1EmailCheckRequestSchema` | `src/models/v1-email-check-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### screen

- **Signature**: `screen(request: Screen.ScreenRequest, options?: RequestOptions): ApiPromise<ScreenResult, Screen.ScreenError>`
- **Wire**: `POST /v1/screen`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ScreenResult`
- **Error**: `JidError` with `kind: "api"`, an instance of `Screen.ScreenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Screen.ScreenRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1ScreenRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ScreenRequest` | `v1ScreenRequestSchema` | `src/models/v1-screen-request.ts` |
| `ScreenResult` | `screenResultSchema` | `src/models/screen-result.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### screenGet

- **Signature**: `screenGet(request?: Screen.ScreenGetRequest, options?: RequestOptions): ApiPromise<ScreenResult, Screen.ScreenGetError>`
- **Wire**: `GET /v1/screen`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScreenResult`
- **Error**: `JidError` with `kind: "api"`, an instance of `Screen.ScreenGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Screen.ScreenGetRequest` (17):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `domain` | `query` | — | `string` | no |
| `url` | `query` | — | `string` | no |
| `email` | `query` | — | `string` | no |
| `phone` | `query` | — | `string` | no |
| `companyName` | `query` | `company_name` | `string` | no |
| `name` | `query` | — | `string` | no |
| `context` | `query` | — | `string` | no |
| `policy` | `query` | — | `string` | no |
| `amount` | `query` | — | `number` | no |
| `country` | `query` | — | `string` | no |
| `ipCountry` | `query` | `ip_country` | `string` | no |
| `ipRegion` | `query` | `ip_region` | `string` | no |
| `ipAsn` | `query` | `ip_asn` | `string` | no |
| `browserTimezone` | `query` | `browser_timezone` | `string` | no |
| `statedCountry` | `query` | `stated_country` | `string` | no |
| `signal` | `query` | — | `string` | no |
| `site` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScreenResult` | `screenResultSchema` | `src/models/screen-result.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

