<!-- Generated file — do not edit; regenerated with the SDK. -->

# SipAccounts — operations

Accessor: `client.sipAccounts` · Source: `src/resources/sip-accounts.ts` · 8 operations · Request and error types: namespace `SipAccounts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `didlogic`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### sipaccountsAllowedIpsCreate

- **Signature**: `sipaccountsAllowedIpsCreate(request: SipAccounts.SipaccountsAllowedIpsCreateRequest, options?: RequestOptions): ApiPromise<ApiV1SipaccountsAllowedIpsResponse1, SipAccounts.SipaccountsAllowedIpsCreateError>`
- **Wire**: `POST /api/v1/sipaccounts/{sipaccount_id}/allowed_ips`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1SipaccountsAllowedIpsResponse1`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `SipAccounts.SipaccountsAllowedIpsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1SipaccountsAllowedIps403Error1"` [403] `ApiV1SipaccountsAllowedIps403Error1` · `"error"` [404] `Error` · `"error2"` [422] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SipAccounts.SipaccountsAllowedIpsCreateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sipaccountId` | `path` | `sipaccount_id` | `string` | yes |
| `body` | `body` | — | `ApiV1SipaccountsAllowedIpsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SipaccountsAllowedIpsRequest` | `apiV1SipaccountsAllowedIpsRequestSchema` | `src/models/api-v1-sipaccounts-allowed-ips-request.ts` |
| `ApiV1SipaccountsAllowedIpsResponse1` | `apiV1SipaccountsAllowedIpsResponse1Schema` | `src/models/api-v1-sipaccounts-allowed-ips-response1.ts` |
| `ApiV1SipaccountsAllowedIps403Error1` | `apiV1SipaccountsAllowedIps403Error1Schema` | `src/models/api-v1-sipaccounts-allowed-ips403-error1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sipaccountsAllowedIpsDestroy

- **Signature**: `sipaccountsAllowedIpsDestroy(request: SipAccounts.SipaccountsAllowedIpsDestroyRequest, options?: RequestOptions): ApiPromise<undefined, SipAccounts.SipaccountsAllowedIpsDestroyError>`
- **Wire**: `DELETE /api/v1/sipaccounts/{sipaccount_id}/allowed_ips`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `SipAccounts.SipaccountsAllowedIpsDestroyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1SipaccountsAllowedIps403Error1"` [403] `ApiV1SipaccountsAllowedIps403Error1` · `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SipAccounts.SipaccountsAllowedIpsDestroyRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sipaccountId` | `path` | `sipaccount_id` | `string` | yes |
| `ip` | `query` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SipaccountsAllowedIps403Error1` | `apiV1SipaccountsAllowedIps403Error1Schema` | `src/models/api-v1-sipaccounts-allowed-ips403-error1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sipaccountsAllowedIpsIndex

- **Signature**: `sipaccountsAllowedIpsIndex(request: SipAccounts.SipaccountsAllowedIpsIndexRequest, options?: RequestOptions): ApiPromise<ApiV1SipaccountsAllowedIpsResponse, SipAccounts.SipaccountsAllowedIpsIndexError>`
- **Wire**: `GET /api/v1/sipaccounts/{sipaccount_id}/allowed_ips`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1SipaccountsAllowedIpsResponse`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `SipAccounts.SipaccountsAllowedIpsIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1SipaccountsAllowedIps403Error1"` [403] `ApiV1SipaccountsAllowedIps403Error1` · `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SipAccounts.SipaccountsAllowedIpsIndexRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sipaccountId` | `path` | `sipaccount_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SipaccountsAllowedIpsResponse` | `apiV1SipaccountsAllowedIpsResponseSchema` | `src/models/api-v1-sipaccounts-allowed-ips-response.ts` |
| `ApiV1SipaccountsAllowedIps403Error1` | `apiV1SipaccountsAllowedIps403Error1Schema` | `src/models/api-v1-sipaccounts-allowed-ips403-error1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sipaccountsCreate

- **Signature**: `sipaccountsCreate(request: SipAccounts.SipaccountsCreateRequest, options?: RequestOptions): ApiPromise<ApiV1SipaccountsResponse2, SipAccounts.SipaccountsCreateError>`
- **Wire**: `POST /api/v1/sipaccounts`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1SipaccountsResponse2`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `SipAccounts.SipaccountsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1SipaccountsResponse11"` [403] `ApiV1SipaccountsResponse11` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SipAccounts.SipaccountsCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1SipaccountsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SipaccountsRequest` | `apiV1SipaccountsRequestSchema` | `src/models/api-v1-sipaccounts-request.ts` |
| `ApiV1SipaccountsResponse2` | `apiV1SipaccountsResponse2Schema` | `src/models/api-v1-sipaccounts-response2.ts` |
| `ApiV1SipaccountsResponse11` | `apiV1SipaccountsResponse11Schema` | `src/models/unions/api-v1-sipaccounts-response11.ts` |

### sipaccountsDestroy

- **Signature**: `sipaccountsDestroy(request: SipAccounts.SipaccountsDestroyRequest, options?: RequestOptions): ApiPromise<undefined, SipAccounts.SipaccountsDestroyError>`
- **Wire**: `DELETE /api/v1/sipaccounts/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `SipAccounts.SipaccountsDestroyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Sipaccounts403Error1"` [403] `ApiV1Sipaccounts403Error1` · `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SipAccounts.SipaccountsDestroyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1Sipaccounts403Error1` | `apiV1Sipaccounts403Error1Schema` | `src/models/api-v1-sipaccounts403-error1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sipaccountsIndex

- **Signature**: `sipaccountsIndex(options?: RequestOptions): ApiPromise<ApiV1SipaccountsResponse, SipAccounts.SipaccountsIndexError>`
- **Wire**: `GET /api/v1/sipaccounts`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1SipaccountsResponse`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `SipAccounts.SipaccountsIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1SipaccountsResponse11"` [403] `ApiV1SipaccountsResponse11` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SipaccountsResponse` | `apiV1SipaccountsResponseSchema` | `src/models/api-v1-sipaccounts-response.ts` |
| `ApiV1SipaccountsResponse11` | `apiV1SipaccountsResponse11Schema` | `src/models/unions/api-v1-sipaccounts-response11.ts` |

### sipaccountsShow

- **Signature**: `sipaccountsShow(request: SipAccounts.SipaccountsShowRequest, options?: RequestOptions): ApiPromise<ApiV1SipaccountsResponse4, SipAccounts.SipaccountsShowError>`
- **Wire**: `GET /api/v1/sipaccounts/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1SipaccountsResponse4`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `SipAccounts.SipaccountsShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Sipaccounts403Error1"` [403] `ApiV1Sipaccounts403Error1` · `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SipAccounts.SipaccountsShowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SipaccountsResponse4` | `apiV1SipaccountsResponse4Schema` | `src/models/api-v1-sipaccounts-response4.ts` |
| `ApiV1Sipaccounts403Error1` | `apiV1Sipaccounts403Error1Schema` | `src/models/api-v1-sipaccounts403-error1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sipaccountsUpdate

- **Signature**: `sipaccountsUpdate(request: SipAccounts.SipaccountsUpdateRequest, options?: RequestOptions): ApiPromise<ApiV1SipaccountsResponse5, SipAccounts.SipaccountsUpdateError>`
- **Wire**: `PATCH /api/v1/sipaccounts/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1SipaccountsResponse5`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `SipAccounts.SipaccountsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Sipaccounts403Error1"` [403] `ApiV1Sipaccounts403Error1` · `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SipAccounts.SipaccountsUpdateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1SipaccountsRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SipaccountsRequest1` | `apiV1SipaccountsRequest1Schema` | `src/models/api-v1-sipaccounts-request1.ts` |
| `ApiV1SipaccountsResponse5` | `apiV1SipaccountsResponse5Schema` | `src/models/api-v1-sipaccounts-response5.ts` |
| `ApiV1Sipaccounts403Error1` | `apiV1Sipaccounts403Error1Schema` | `src/models/api-v1-sipaccounts403-error1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

