<!-- Generated file — do not edit; regenerated with the SDK. -->

# EnrichApi — operations

Accessor: `client.enrichApi` · Source: `src/resources/enrich-api.ts` · 3 operations · Request and error types: namespace `EnrichApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `basiq`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### enrich

- **Signature**: `enrich(request: EnrichApi.EnrichRequest, options?: RequestOptions): ApiPromise<EnrichResponse, EnrichApi.EnrichError>`
- **Wire**: `GET /enrich`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EnrichResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `EnrichApi.EnrichError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"enrich400Error1"` [400] `Enrich400Error1` · `"enrich403Error1"` [403] `Enrich403Error1` · `"enrich500Error1"` [500] `Enrich500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EnrichApi.EnrichRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `q` | `query` | `string` | yes |
| `institution` | `query` | `string` | yes |
| `country` | `query` | `string` | yes |
| `mcc` | `query` | `string` | no |
| `accountType` | `query` | `string` | no |
| `amount` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EnrichResponse` | `enrichResponseSchema` | `src/models/enrich-response.ts` |
| `Enrich400Error1` | `enrich400Error1Schema` | `src/models/enrich400-error1.ts` |
| `Enrich403Error1` | `enrich403Error1Schema` | `src/models/enrich403-error1.ts` |
| `Enrich500Error1` | `enrich500Error1Schema` | `src/models/enrich500-error1.ts` |

### getMerchantById

- **Signature**: `getMerchantById(request: EnrichApi.GetMerchantByIdRequest, options?: RequestOptions): ApiPromise<SingleMerchantResponse, EnrichApi.GetMerchantByIdError>`
- **Wire**: `GET /merchants/{merchantId}`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SingleMerchantResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `EnrichApi.GetMerchantByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"merchantNotFoundError"` [404] `MerchantNotFoundError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EnrichApi.GetMerchantByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SingleMerchantResponse` | `singleMerchantResponseSchema` | `src/models/single-merchant-response.ts` |
| `MerchantNotFoundError` | `merchantNotFoundErrorSchema` | `src/models/merchant-not-found-error.ts` |

### merchantSearch

- **Signature**: `merchantSearch(request?: EnrichApi.MerchantSearchRequest, options?: RequestOptions): ApiPromise<MerchantsResponse, ApiError>`
- **Wire**: `GET /merchants`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MerchantsResponse`
- **Error**: `BasiqError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `EnrichApi.MerchantSearchRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `abn` | `query` | `string` | no |
| `merchantName` | `query` | `string` | no |
| `suburb` | `query` | `string` | no |
| `entityType` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MerchantsResponse` | `merchantsResponseSchema` | `src/models/merchants-response.ts` |

