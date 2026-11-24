<!-- Generated file — do not edit; regenerated with the SDK. -->

# Funds — operations

Accessor: `client.funds` · Source: `src/resources/funds.ts` · 5 operations · Request and error types: namespace `Funds`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `givebutter`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fundsDestroy

- **Signature**: `fundsDestroy(request: Funds.FundsDestroyRequest, options?: RequestOptions): ApiPromise<undefined, Funds.FundsDestroyError>`
- **Wire**: `DELETE /v1/funds/{fund}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Funds.FundsDestroyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Funds.FundsDestroyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `fund` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### fundsIndex

- **Signature**: `fundsIndex(options?: RequestOptions): ApiPromise<V1FundsResponse, ApiError>`
- **Wire**: `GET /v1/funds`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1FundsResponse`
- **Error**: `GivebutterError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `V1FundsResponse` | `v1FundsResponseSchema` | `src/models/v1-funds-response.ts` |

### fundsShow

- **Signature**: `fundsShow(request: Funds.FundsShowRequest, options?: RequestOptions): ApiPromise<FundResource, Funds.FundsShowError>`
- **Wire**: `GET /v1/funds/{fund}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FundResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Funds.FundsShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Funds.FundsShowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `fund` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FundResource` | `fundResourceSchema` | `src/models/fund-resource.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### fundsStore

- **Signature**: `fundsStore(request: Funds.FundsStoreRequest, options?: RequestOptions): ApiPromise<FundResource, Funds.FundsStoreError>`
- **Wire**: `POST /v1/funds`
- **Auth**: `http`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FundResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Funds.FundsStoreError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationException1"` [422] `ValidationException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Funds.FundsStoreRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1FundsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1FundsRequest` | `v1FundsRequestSchema` | `src/models/v1-funds-request.ts` |
| `FundResource` | `fundResourceSchema` | `src/models/fund-resource.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |

### fundsUpdate

- **Signature**: `fundsUpdate(request: Funds.FundsUpdateRequest, options?: RequestOptions): ApiPromise<FundResource, Funds.FundsUpdateError>`
- **Wire**: `PUT /v1/funds/{fund}`
- **Auth**: `http`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FundResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Funds.FundsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationException1"` [422] `ValidationException1` · `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Funds.FundsUpdateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `fund` | `path` | `string` | yes |
| `body` | `body` | `V1FundsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1FundsRequest` | `v1FundsRequestSchema` | `src/models/v1-funds-request.ts` |
| `FundResource` | `fundResourceSchema` | `src/models/fund-resource.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

