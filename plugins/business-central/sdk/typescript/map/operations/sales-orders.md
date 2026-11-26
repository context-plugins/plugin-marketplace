<!-- Generated file — do not edit; regenerated with the SDK. -->

# SalesOrders — operations

Accessor: `client.salesOrders` · Source: `src/resources/sales-orders.ts` · 6 operations · Request and error types: namespace `SalesOrders`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamics-365-business-central`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSalesOrder

- **Signature**: `createSalesOrder(request: SalesOrders.CreateSalesOrderRequest, options?: RequestOptions): ApiPromise<SalesOrder, SalesOrders.CreateSalesOrderError>`
- **Wire**: `POST /companies({company_id})/salesOrders`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SalesOrder`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `SalesOrders.CreateSalesOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SalesOrders.CreateSalesOrderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `body` | `body` | — | `SalesOrderCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SalesOrderCreate` | `salesOrderCreateSchema` | `src/models/sales-order-create.ts` |
| `SalesOrder` | `salesOrderSchema` | `src/models/sales-order.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteSalesOrder

- **Signature**: `deleteSalesOrder(request: SalesOrders.DeleteSalesOrderRequest, options?: RequestOptions): ApiPromise<undefined, SalesOrders.DeleteSalesOrderError>`
- **Wire**: `DELETE /companies({company_id})/salesOrders({salesOrder_id})`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `SalesOrders.DeleteSalesOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SalesOrders.DeleteSalesOrderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `salesOrderId` | `path` | `salesOrder_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getSalesOrder

- **Signature**: `getSalesOrder(request: SalesOrders.GetSalesOrderRequest, options?: RequestOptions): ApiPromise<SalesOrder, SalesOrders.GetSalesOrderError>`
- **Wire**: `GET /companies({company_id})/salesOrders({salesOrder_id})`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SalesOrder`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `SalesOrders.GetSalesOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SalesOrders.GetSalesOrderRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `salesOrderId` | `path` | `salesOrder_id` | `string` | yes |
| `select` | `query` | `$select` | `string` | no |
| `expand` | `query` | `$expand` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SalesOrder` | `salesOrderSchema` | `src/models/sales-order.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listSalesOrderLines

- **Signature**: `listSalesOrderLines(request: SalesOrders.ListSalesOrderLinesRequest, options?: RequestOptions): ApiPromise<CompaniesApiSalesOrdersApiSalesOrderLinesResponse, SalesOrders.ListSalesOrderLinesError>`
- **Wire**: `GET /companies({company_id})/salesOrders({salesOrder_id})/salesOrderLines`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiSalesOrdersApiSalesOrderLinesResponse`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `SalesOrders.ListSalesOrderLinesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SalesOrders.ListSalesOrderLinesRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `salesOrderId` | `path` | `salesOrder_id` | `string` | yes |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `filter` | `query` | `$filter` | `string` | no |
| `select` | `query` | `$select` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiSalesOrdersApiSalesOrderLinesResponse` | `companiesApiSalesOrdersApiSalesOrderLinesResponseSchema` | `src/models/companies-api-sales-orders-api-sales-order-lines-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listSalesOrders

- **Signature**: `listSalesOrders(request: SalesOrders.ListSalesOrdersRequest, options?: RequestOptions): ApiPromise<CompaniesApiSalesOrdersResponse, SalesOrders.ListSalesOrdersError>`
- **Wire**: `GET /companies({company_id})/salesOrders`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiSalesOrdersResponse`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `SalesOrders.ListSalesOrdersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SalesOrders.ListSalesOrdersRequest` (7):

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
| `CompaniesApiSalesOrdersResponse` | `companiesApiSalesOrdersResponseSchema` | `src/models/companies-api-sales-orders-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateSalesOrder

- **Signature**: `updateSalesOrder(request: SalesOrders.UpdateSalesOrderRequest, options?: RequestOptions): ApiPromise<SalesOrder, SalesOrders.UpdateSalesOrderError>`
- **Wire**: `PATCH /companies({company_id})/salesOrders({salesOrder_id})`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SalesOrder`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `SalesOrders.UpdateSalesOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SalesOrders.UpdateSalesOrderRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `salesOrderId` | `path` | `salesOrder_id` | `string` | yes |
| `ifMatch` | `header` | `If-Match` | `string` | yes |
| `body` | `body` | — | `SalesOrderUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SalesOrderUpdate` | `salesOrderUpdateSchema` | `src/models/sales-order-update.ts` |
| `SalesOrder` | `salesOrderSchema` | `src/models/sales-order.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

