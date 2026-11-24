<!-- Generated file — do not edit; regenerated with the SDK. -->

# PurchaseOrders — operations

Accessor: `client.purchaseOrders` · Source: `src/resources/purchase-orders.ts` · 6 operations · Request and error types: namespace `PurchaseOrders`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `microsoft-dynamics-nav`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createPurchaseOrder

- **Signature**: `createPurchaseOrder(request: PurchaseOrders.CreatePurchaseOrderRequest, options?: RequestOptions): ApiPromise<PurchaseOrder, PurchaseOrders.CreatePurchaseOrderError>`
- **Wire**: `POST /companies({company_id})/purchaseOrders`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PurchaseOrder`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `PurchaseOrders.CreatePurchaseOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PurchaseOrders.CreatePurchaseOrderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `body` | `body` | — | `PurchaseOrderCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PurchaseOrderCreate` | `purchaseOrderCreateSchema` | `src/models/purchase-order-create.ts` |
| `PurchaseOrder` | `purchaseOrderSchema` | `src/models/purchase-order.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deletePurchaseOrder

- **Signature**: `deletePurchaseOrder(request: PurchaseOrders.DeletePurchaseOrderRequest, options?: RequestOptions): ApiPromise<undefined, PurchaseOrders.DeletePurchaseOrderError>`
- **Wire**: `DELETE /companies({company_id})/purchaseOrders({purchaseOrder_id})`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `PurchaseOrders.DeletePurchaseOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PurchaseOrders.DeletePurchaseOrderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `purchaseOrderId` | `path` | `purchaseOrder_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getPurchaseOrder

- **Signature**: `getPurchaseOrder(request: PurchaseOrders.GetPurchaseOrderRequest, options?: RequestOptions): ApiPromise<PurchaseOrder, PurchaseOrders.GetPurchaseOrderError>`
- **Wire**: `GET /companies({company_id})/purchaseOrders({purchaseOrder_id})`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PurchaseOrder`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `PurchaseOrders.GetPurchaseOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PurchaseOrders.GetPurchaseOrderRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `purchaseOrderId` | `path` | `purchaseOrder_id` | `string` | yes |
| `select` | `query` | `$select` | `string` | no |
| `expand` | `query` | `$expand` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PurchaseOrder` | `purchaseOrderSchema` | `src/models/purchase-order.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listPurchaseOrderLines

- **Signature**: `listPurchaseOrderLines(request: PurchaseOrders.ListPurchaseOrderLinesRequest, options?: RequestOptions): ApiPromise<CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse, PurchaseOrders.ListPurchaseOrderLinesError>`
- **Wire**: `GET /companies({company_id})/purchaseOrders({purchaseOrder_id})/purchaseOrderLines`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `PurchaseOrders.ListPurchaseOrderLinesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PurchaseOrders.ListPurchaseOrderLinesRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `purchaseOrderId` | `path` | `purchaseOrder_id` | `string` | yes |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `filter` | `query` | `$filter` | `string` | no |
| `select` | `query` | `$select` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse` | `companiesApiPurchaseOrdersApiPurchaseOrderLinesResponseSchema` | `src/models/companies-api-purchase-orders-api-purchase-order-lines-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listPurchaseOrders

- **Signature**: `listPurchaseOrders(request: PurchaseOrders.ListPurchaseOrdersRequest, options?: RequestOptions): ApiPromise<CompaniesApiPurchaseOrdersResponse, PurchaseOrders.ListPurchaseOrdersError>`
- **Wire**: `GET /companies({company_id})/purchaseOrders`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiPurchaseOrdersResponse`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `PurchaseOrders.ListPurchaseOrdersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PurchaseOrders.ListPurchaseOrdersRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `filter` | `query` | `$filter` | `string` | no |
| `orderby` | `query` | `$orderby` | `string` | no |
| `select` | `query` | `$select` | `string` | no |
| `expand` | `query` | `$expand` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiPurchaseOrdersResponse` | `companiesApiPurchaseOrdersResponseSchema` | `src/models/companies-api-purchase-orders-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updatePurchaseOrder

- **Signature**: `updatePurchaseOrder(request: PurchaseOrders.UpdatePurchaseOrderRequest, options?: RequestOptions): ApiPromise<PurchaseOrder, PurchaseOrders.UpdatePurchaseOrderError>`
- **Wire**: `PATCH /companies({company_id})/purchaseOrders({purchaseOrder_id})`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PurchaseOrder`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `PurchaseOrders.UpdatePurchaseOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PurchaseOrders.UpdatePurchaseOrderRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `purchaseOrderId` | `path` | `purchaseOrder_id` | `string` | yes |
| `ifMatch` | `header` | `If-Match` | `string` | yes |
| `body` | `body` | — | `PurchaseOrderUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PurchaseOrderUpdate` | `purchaseOrderUpdateSchema` | `src/models/purchase-order-update.ts` |
| `PurchaseOrder` | `purchaseOrderSchema` | `src/models/purchase-order.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

