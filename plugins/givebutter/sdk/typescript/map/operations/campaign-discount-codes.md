<!-- Generated file — do not edit; regenerated with the SDK. -->

# CampaignDiscountCodes — operations

Accessor: `client.campaignDiscountCodes` · Source: `src/resources/campaign-discount-codes.ts` · 5 operations · Request and error types: namespace `CampaignDiscountCodes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `givebutter`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### campaignsDiscountCodesDestroy

- **Signature**: `campaignsDiscountCodesDestroy(request: CampaignDiscountCodes.CampaignsDiscountCodesDestroyRequest, options?: RequestOptions): ApiPromise<undefined, CampaignDiscountCodes.CampaignsDiscountCodesDestroyError>`
- **Wire**: `DELETE /v1/campaigns/{campaign}/discount-codes/{discountCode}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `CampaignDiscountCodes.CampaignsDiscountCodesDestroyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v1CampaignsDiscountCodes422Error1"` [422] `V1CampaignsDiscountCodes422Error1` · `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignDiscountCodes.CampaignsDiscountCodesDestroyRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `campaign` | `path` | `number` | yes |
| `discountCode` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CampaignsDiscountCodes422Error1` | `v1CampaignsDiscountCodes422Error1Schema` | `src/models/v1-campaigns-discount-codes422-error1.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### campaignsDiscountCodesIndex

- **Signature**: `campaignsDiscountCodesIndex(request: CampaignDiscountCodes.CampaignsDiscountCodesIndexRequest, options?: RequestOptions): ApiPromise<V1CampaignsDiscountCodesResponse, CampaignDiscountCodes.CampaignsDiscountCodesIndexError>`
- **Wire**: `GET /v1/campaigns/{campaign}/discount-codes`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CampaignsDiscountCodesResponse`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `CampaignDiscountCodes.CampaignsDiscountCodesIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignDiscountCodes.CampaignsDiscountCodesIndexRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `campaign` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CampaignsDiscountCodesResponse` | `v1CampaignsDiscountCodesResponseSchema` | `src/models/v1-campaigns-discount-codes-response.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### campaignsDiscountCodesShow

- **Signature**: `campaignsDiscountCodesShow(request: CampaignDiscountCodes.CampaignsDiscountCodesShowRequest, options?: RequestOptions): ApiPromise<CampaignDiscountCodeResource, CampaignDiscountCodes.CampaignsDiscountCodesShowError>`
- **Wire**: `GET /v1/campaigns/{campaign}/discount-codes/{discountCode}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CampaignDiscountCodeResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `CampaignDiscountCodes.CampaignsDiscountCodesShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignDiscountCodes.CampaignsDiscountCodesShowRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `campaign` | `path` | `number` | yes |
| `discountCode` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CampaignDiscountCodeResource` | `campaignDiscountCodeResourceSchema` | `src/models/campaign-discount-code-resource.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### campaignsDiscountCodesStore

- **Signature**: `campaignsDiscountCodesStore(request: CampaignDiscountCodes.CampaignsDiscountCodesStoreRequest, options?: RequestOptions): ApiPromise<CampaignDiscountCodeResource, CampaignDiscountCodes.CampaignsDiscountCodesStoreError>`
- **Wire**: `POST /v1/campaigns/{campaign}/discount-codes`
- **Auth**: `http`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CampaignDiscountCodeResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `CampaignDiscountCodes.CampaignsDiscountCodesStoreError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"validationException1"` [422] `ValidationException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignDiscountCodes.CampaignsDiscountCodesStoreRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `campaign` | `path` | `number` | yes |
| `body` | `body` | `StoreCampaignDiscountCodeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoreCampaignDiscountCodeRequest` | `storeCampaignDiscountCodeRequestSchema` | `src/models/store-campaign-discount-code-request.ts` |
| `CampaignDiscountCodeResource` | `campaignDiscountCodeResourceSchema` | `src/models/campaign-discount-code-resource.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |

### campaignsDiscountCodesUpdate

- **Signature**: `campaignsDiscountCodesUpdate(request: CampaignDiscountCodes.CampaignsDiscountCodesUpdateRequest, options?: RequestOptions): ApiPromise<CampaignDiscountCodeResource, CampaignDiscountCodes.CampaignsDiscountCodesUpdateError>`
- **Wire**: `PUT /v1/campaigns/{campaign}/discount-codes/{discountCode}`
- **Auth**: `http`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CampaignDiscountCodeResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `CampaignDiscountCodes.CampaignsDiscountCodesUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"validationException1"` [422] `ValidationException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignDiscountCodes.CampaignsDiscountCodesUpdateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `campaign` | `path` | `number` | yes |
| `discountCode` | `path` | `number` | yes |
| `body` | `body` | `UpdateCampaignDiscountCodeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCampaignDiscountCodeRequest` | `updateCampaignDiscountCodeRequestSchema` | `src/models/update-campaign-discount-code-request.ts` |
| `CampaignDiscountCodeResource` | `campaignDiscountCodeResourceSchema` | `src/models/campaign-discount-code-resource.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |

