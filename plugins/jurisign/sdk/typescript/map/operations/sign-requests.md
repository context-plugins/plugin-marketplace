<!-- Generated file — do not edit; regenerated with the SDK. -->

# SignRequests — operations

Accessor: `client.signRequests` · Source: `src/resources/sign-requests.ts` · 7 operations · Request and error types: namespace `SignRequests`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `juri-sign`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelSignRequest

- **Signature**: `cancelSignRequest(request: SignRequests.CancelSignRequestRequest, options?: RequestOptions): ApiPromise<SignRequestsCancelResponse, SignRequests.CancelSignRequestError>`
- **Wire**: `POST /sign-requests/{id}/cancel`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignRequestsCancelResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `SignRequests.CancelSignRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthenticated1"` [401] `Unauthenticated1` · `"notFound1"` [404] `NotFound1` · `"error1"` [422] `Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignRequests.CancelSignRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignRequestsCancelResponse` | `signRequestsCancelResponseSchema` | `src/models/sign-requests-cancel-response.ts` |
| `Unauthenticated1` | `unauthenticated1Schema` | `src/models/unauthenticated1.ts` |
| `NotFound1` | `notFound1Schema` | `src/models/not-found1.ts` |
| `Error1` | `error1Schema` | `src/models/error1.ts` |

### createSignRequest

- **Signature**: `createSignRequest(request: SignRequests.CreateSignRequestRequest, options?: RequestOptions): ApiPromise<SignRequestsResponse1, SignRequests.CreateSignRequestError>`
- **Wire**: `POST /sign-requests`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SignRequestsResponse1`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `SignRequests.CreateSignRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthenticated1"` [401] `Unauthenticated1` · `"validationError1"` [422] `ValidationError1` · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignRequests.CreateSignRequestRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `CreateSignRequestInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateSignRequestInput` | `createSignRequestInputSchema` | `src/models/create-sign-request-input.ts` |
| `SignRequestsResponse1` | `signRequestsResponse1Schema` | `src/models/sign-requests-response1.ts` |
| `Unauthenticated1` | `unauthenticated1Schema` | `src/models/unauthenticated1.ts` |
| `ValidationError1` | `validationError1Schema` | `src/models/validation-error1.ts` |

### downloadProof

- **Signature**: `downloadProof(request: SignRequests.DownloadProofRequest, options?: RequestOptions): ApiPromise<BinaryContent, SignRequests.DownloadProofError>`
- **Wire**: `GET /sign-requests/{id}/proof`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `SignRequests.DownloadProofError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthenticated1"` [401] `Unauthenticated1` · `"notFound1"` [404] `NotFound1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignRequests.DownloadProofRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthenticated1` | `unauthenticated1Schema` | `src/models/unauthenticated1.ts` |
| `NotFound1` | `notFound1Schema` | `src/models/not-found1.ts` |

### downloadSignedPdf

- **Signature**: `downloadSignedPdf(request: SignRequests.DownloadSignedPdfRequest, options?: RequestOptions): ApiPromise<BinaryContent, SignRequests.DownloadSignedPdfError>`
- **Wire**: `GET /sign-requests/{id}/download`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `SignRequests.DownloadSignedPdfError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthenticated1"` [401] `Unauthenticated1` · `"notFound1"` [404] `NotFound1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignRequests.DownloadSignedPdfRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthenticated1` | `unauthenticated1Schema` | `src/models/unauthenticated1.ts` |
| `NotFound1` | `notFound1Schema` | `src/models/not-found1.ts` |

### getSignRequest

- **Signature**: `getSignRequest(request: SignRequests.GetSignRequestRequest, options?: RequestOptions): ApiPromise<SignRequestsResponse2, SignRequests.GetSignRequestError>`
- **Wire**: `GET /sign-requests/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SignRequestsResponse2`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `SignRequests.GetSignRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthenticated1"` [401] `Unauthenticated1` · `"notFound1"` [404] `NotFound1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignRequests.GetSignRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignRequestsResponse2` | `signRequestsResponse2Schema` | `src/models/sign-requests-response2.ts` |
| `Unauthenticated1` | `unauthenticated1Schema` | `src/models/unauthenticated1.ts` |
| `NotFound1` | `notFound1Schema` | `src/models/not-found1.ts` |

### listSignRequests

- **Signature**: `listSignRequests(request?: SignRequests.ListSignRequestsRequest, options?: RequestOptions): ApiPromise<SignRequestsResponse, SignRequests.ListSignRequestsError>`
- **Wire**: `GET /sign-requests`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SignRequestsResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `SignRequests.ListSignRequestsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthenticated1"` [401] `Unauthenticated1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignRequests.ListSignRequestsRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `status` | `query` | — | `StatusJuriSignSignRequestsApi` | no | — |
| `perPage` | `query` | `per_page` | `number` | no | `20` |
| `page` | `query` | — | `number` | no | `1` |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusJuriSignSignRequestsApi` | `statusJuriSignSignRequestsApiSchema` | `src/models/status-juri-sign-sign-requests-api.ts` |
| `SignRequestsResponse` | `signRequestsResponseSchema` | `src/models/sign-requests-response.ts` |
| `Unauthenticated1` | `unauthenticated1Schema` | `src/models/unauthenticated1.ts` |

### sendSignRequest

- **Signature**: `sendSignRequest(request: SignRequests.SendSignRequestRequest, options?: RequestOptions): ApiPromise<SignRequestsSendResponse, SignRequests.SendSignRequestError>`
- **Wire**: `POST /sign-requests/{id}/send`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignRequestsSendResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `SignRequests.SendSignRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthenticated1"` [401] `Unauthenticated1` · `"notFound1"` [404] `NotFound1` · `"error1"` [422] `Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignRequests.SendSignRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignRequestsSendResponse` | `signRequestsSendResponseSchema` | `src/models/sign-requests-send-response.ts` |
| `Unauthenticated1` | `unauthenticated1Schema` | `src/models/unauthenticated1.ts` |
| `NotFound1` | `notFound1Schema` | `src/models/not-found1.ts` |
| `Error1` | `error1Schema` | `src/models/error1.ts` |

