<!-- Generated file — do not edit; regenerated with the SDK. -->

# Security — operations

Accessor: `client.security` · Source: `src/resources/security.ts` · 4 operations · Request and error types: namespace `Security`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### csrparser

- **Signature**: `csrparser(request: Security.CsrparserRequest, options?: RequestOptions): ApiPromise<V1CsrparserResponse, Security.CsrparserError>`
- **Wire**: `POST /v1/csrparser`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1CsrparserResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Security.CsrparserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Security.CsrparserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1CsrparserRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CsrparserRequest` | `v1CsrparserRequestSchema` | `src/models/v1-csrparser-request.ts` |
| `V1CsrparserResponse` | `v1CsrparserResponseSchema` | `src/models/v1-csrparser-response.ts` |

### danevalidator

- **Signature**: `danevalidator(request: Security.DanevalidatorRequest, options?: RequestOptions): ApiPromise<V1DanevalidatorResponse, Security.DanevalidatorError>`
- **Wire**: `POST /v1/danevalidator`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1DanevalidatorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Security.DanevalidatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Security.DanevalidatorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1DanevalidatorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DanevalidatorRequest` | `v1DanevalidatorRequestSchema` | `src/models/v1-danevalidator-request.ts` |
| `V1DanevalidatorResponse` | `v1DanevalidatorResponseSchema` | `src/models/v1-danevalidator-response.ts` |

### hashgenerator

- **Signature**: `hashgenerator(request: Security.HashgeneratorRequest, options?: RequestOptions): ApiPromise<V1HashgeneratorResponse, Security.HashgeneratorError>`
- **Wire**: `GET /v1/hashgenerator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1HashgeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Security.HashgeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Security.HashgeneratorRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `text` | `query` | `string` | yes |
| `algorithms` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1HashgeneratorResponse` | `v1HashgeneratorResponseSchema` | `src/models/v1-hashgenerator-response.ts` |

### hmac

- **Signature**: `hmac(request: Security.HmacRequest, options?: RequestOptions): ApiPromise<V1HmacResponse, Security.HmacError>`
- **Wire**: `POST /v1/hmac`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1HmacResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Security.HmacError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Security.HmacRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1HmacRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1HmacRequest` | `v1HmacRequestSchema` | `src/models/v1-hmac-request.ts` |
| `V1HmacResponse` | `v1HmacResponseSchema` | `src/models/v1-hmac-response.ts` |

