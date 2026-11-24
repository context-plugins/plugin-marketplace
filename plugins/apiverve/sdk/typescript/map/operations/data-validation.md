<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataValidation — operations

Accessor: `client.dataValidation` · Source: `src/resources/data-validation.ts` · 9 operations · Request and error types: namespace `DataValidation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cardvalidator

- **Signature**: `cardvalidator(request: DataValidation.CardvalidatorRequest, options?: RequestOptions): ApiPromise<V1CardvalidatorResponse, DataValidation.CardvalidatorError>`
- **Wire**: `GET /v1/cardvalidator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CardvalidatorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataValidation.CardvalidatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataValidation.CardvalidatorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `number` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CardvalidatorResponse` | `v1CardvalidatorResponseSchema` | `src/models/v1-cardvalidator-response.ts` |

### disposablephone

- **Signature**: `disposablephone(request: DataValidation.DisposablephoneRequest, options?: RequestOptions): ApiPromise<V1DisposablephoneResponse, DataValidation.DisposablephoneError>`
- **Wire**: `GET /v1/disposablephone`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1DisposablephoneResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataValidation.DisposablephoneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataValidation.DisposablephoneRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `phone` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DisposablephoneResponse` | `v1DisposablephoneResponseSchema` | `src/models/v1-disposablephone-response.ts` |

### emaildisposablechecker

- **Signature**: `emaildisposablechecker(request: DataValidation.EmaildisposablecheckerRequest, options?: RequestOptions): ApiPromise<V1EmaildisposablecheckerResponse, DataValidation.EmaildisposablecheckerError>`
- **Wire**: `GET /v1/emaildisposablechecker`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1EmaildisposablecheckerResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataValidation.EmaildisposablecheckerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataValidation.EmaildisposablecheckerRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1EmaildisposablecheckerResponse` | `v1EmaildisposablecheckerResponseSchema` | `src/models/v1-emaildisposablechecker-response.ts` |

### emailvalidator

- **Signature**: `emailvalidator(request: DataValidation.EmailvalidatorRequest, options?: RequestOptions): ApiPromise<V1EmailvalidatorResponse, DataValidation.EmailvalidatorError>`
- **Wire**: `GET /v1/emailvalidator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1EmailvalidatorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataValidation.EmailvalidatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataValidation.EmailvalidatorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1EmailvalidatorResponse` | `v1EmailvalidatorResponseSchema` | `src/models/v1-emailvalidator-response.ts` |

### passwordstrength

- **Signature**: `passwordstrength(request: DataValidation.PasswordstrengthRequest, options?: RequestOptions): ApiPromise<V1PasswordstrengthResponse, DataValidation.PasswordstrengthError>`
- **Wire**: `GET /v1/passwordstrength`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1PasswordstrengthResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataValidation.PasswordstrengthError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataValidation.PasswordstrengthRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `password` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1PasswordstrengthResponse` | `v1PasswordstrengthResponseSchema` | `src/models/v1-passwordstrength-response.ts` |

### phonenumbervalidator

- **Signature**: `phonenumbervalidator(request: DataValidation.PhonenumbervalidatorRequest, options?: RequestOptions): ApiPromise<V1PhonenumbervalidatorResponse, DataValidation.PhonenumbervalidatorError>`
- **Wire**: `GET /v1/phonenumbervalidator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1PhonenumbervalidatorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataValidation.PhonenumbervalidatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataValidation.PhonenumbervalidatorRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `number` | `query` | `string` | yes |
| `country` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1PhonenumbervalidatorResponse` | `v1PhonenumbervalidatorResponseSchema` | `src/models/v1-phonenumbervalidator-response.ts` |

### seovalidator

- **Signature**: `seovalidator(request: DataValidation.SeovalidatorRequest, options?: RequestOptions): ApiPromise<V1SeovalidatorResponse, DataValidation.SeovalidatorError>`
- **Wire**: `POST /v1/seovalidator`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1SeovalidatorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataValidation.SeovalidatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataValidation.SeovalidatorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1SeovalidatorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SeovalidatorRequest` | `v1SeovalidatorRequestSchema` | `src/models/v1-seovalidator-request.ts` |
| `V1SeovalidatorResponse` | `v1SeovalidatorResponseSchema` | `src/models/v1-seovalidator-response.ts` |

### spamdetector

- **Signature**: `spamdetector(request: DataValidation.SpamdetectorRequest, options?: RequestOptions): ApiPromise<V1SpamdetectorResponse, DataValidation.SpamdetectorError>`
- **Wire**: `POST /v1/spamdetector`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1SpamdetectorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataValidation.SpamdetectorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataValidation.SpamdetectorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1SpamdetectorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SpamdetectorRequest` | `v1SpamdetectorRequestSchema` | `src/models/v1-spamdetector-request.ts` |
| `V1SpamdetectorResponse` | `v1SpamdetectorResponseSchema` | `src/models/v1-spamdetector-response.ts` |

### usernameprofanity

- **Signature**: `usernameprofanity(request: DataValidation.UsernameprofanityRequest, options?: RequestOptions): ApiPromise<V1UsernameprofanityResponse, DataValidation.UsernameprofanityError>`
- **Wire**: `GET /v1/usernameprofanity`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1UsernameprofanityResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataValidation.UsernameprofanityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataValidation.UsernameprofanityRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `username` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1UsernameprofanityResponse` | `v1UsernameprofanityResponseSchema` | `src/models/v1-usernameprofanity-response.ts` |

