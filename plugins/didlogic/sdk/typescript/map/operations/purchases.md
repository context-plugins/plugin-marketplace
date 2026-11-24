<!-- Generated file — do not edit; regenerated with the SDK. -->

# Purchases — operations

Accessor: `client.purchases` · Source: `src/resources/purchases.ts` · 1 operation · Request and error types: namespace `Purchases`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `didlogic`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### purchasesIndex

- **Signature**: `purchasesIndex(request?: Purchases.PurchasesIndexRequest, options?: RequestOptions): ApiPromise<ApiV1PurchasesResponse, Purchases.PurchasesIndexError>`
- **Wire**: `GET /api/v1/purchases`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1PurchasesResponse`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `Purchases.PurchasesIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Purchases403Error1"` [403] `ApiV1Purchases403Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Purchases.PurchasesIndexRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `number` | no | `1` |
| `perPage` | `query` | `per_page` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PurchasesResponse` | `apiV1PurchasesResponseSchema` | `src/models/api-v1-purchases-response.ts` |
| `ApiV1Purchases403Error1` | `apiV1Purchases403Error1Schema` | `src/models/api-v1-purchases403-error1.ts` |

