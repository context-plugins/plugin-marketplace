<!-- Generated file — do not edit; regenerated with the SDK. -->

# Vendors — operations

Accessor: `client.vendors` · Source: `src/resources/vendors.ts` · 3 operations · Request and error types: namespace `Vendors`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `common-elements`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### vendorsDetail

- **Signature**: `vendorsDetail(request: Vendors.VendorsDetailRequest, options?: RequestOptions): ApiPromise<ApiV1VendorsResponse1, Vendors.VendorsDetailError>`
- **Wire**: `GET /api/v1/vendors/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1VendorsResponse1`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `Vendors.VendorsDetailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vendors.VendorsDetailRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1VendorsResponse1` | `apiV1VendorsResponse1Schema` | `src/models/api-v1-vendors-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### vendorsList

- **Signature**: `vendorsList(request?: Vendors.VendorsListRequest, options?: RequestOptions): ApiPromise<ApiV1VendorsResponse, Vendors.VendorsListError>`
- **Wire**: `GET /api/v1/vendors`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1VendorsResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `Vendors.VendorsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vendors.VendorsListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `q` | `query` | `string` | no |
| `state` | `query` | `string` | no |
| `category` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1VendorsResponse` | `apiV1VendorsResponseSchema` | `src/models/api-v1-vendors-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### vendorsReviews

- **Signature**: `vendorsReviews(request: Vendors.VendorsReviewsRequest, options?: RequestOptions): ApiPromise<ApiV1VendorsReviewsResponse, Vendors.VendorsReviewsError>`
- **Wire**: `GET /api/v1/vendors/{id}/reviews`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1VendorsReviewsResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `Vendors.VendorsReviewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vendors.VendorsReviewsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1VendorsReviewsResponse` | `apiV1VendorsReviewsResponseSchema` | `src/models/api-v1-vendors-reviews-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

