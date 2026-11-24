<!-- Generated file — do not edit; regenerated with the SDK. -->

# PricingApi — operations

Accessor: `client.pricingApi` · Source: `src/resources/pricing-api.ts` · 3 operations · Request and error types: namespace `PricingApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPricing

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getPricing(request: PricingApi.GetPricingRequest, options?: RequestOptions): ApiPromise<PricingResponse, PricingApi.GetPricingError>`
- **Wire**: `GET /pricing/{productAttributeId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PricingResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `PricingApi.GetPricingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PricingApi.GetPricingRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `productAttributeId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PricingResponse` | `pricingResponseSchema` | `src/models/pricing-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listPricing

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listPricing(request: PricingApi.ListPricingRequest, options?: RequestOptions): ApiPromise<PricingListResponse, PricingApi.ListPricingError>`
- **Wire**: `GET /pricing/`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PricingListResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `PricingApi.ListPricingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PricingApi.ListPricingRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `productId` | `query` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PricingListResponse` | `pricingListResponseSchema` | `src/models/pricing-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updatePricing

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updatePricing(request: PricingApi.UpdatePricingRequestParams, options?: RequestOptions): ApiPromise<PricingResponse, PricingApi.UpdatePricingError>`
- **Wire**: `PUT /pricing/{productAttributeId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PricingResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `PricingApi.UpdatePricingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PricingApi.UpdatePricingRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `productAttributeId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `UpdatePricingRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdatePricingRequest` | `updatePricingRequestSchema` | `src/models/update-pricing-request.ts` |
| `PricingResponse` | `pricingResponseSchema` | `src/models/pricing-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

