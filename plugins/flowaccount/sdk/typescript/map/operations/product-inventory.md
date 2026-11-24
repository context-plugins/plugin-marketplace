<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProductInventory — operations

Accessor: `client.productInventory` · Source: `src/resources/product-inventory.ts` · 3 operations · Request types: namespace `ProductInventory`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `flow-account`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### productInventoryAdjust

- **Signature**: `productInventoryAdjust(request: ProductInventory.ProductInventoryAdjustRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `POST /{culture}/product-inventories/adjust`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProductInventory.ProductInventoryAdjustRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `StockCard` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StockCard` | `stockCardSchema` | `src/models/stock-card.ts` |

### productInventoryDeleteProductInventory

- **Signature**: `productInventoryDeleteProductInventory(request: ProductInventory.ProductInventoryDeleteProductInventoryRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `DELETE /{culture}/product-inventories/{id}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProductInventory.ProductInventoryDeleteProductInventoryRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `culture` | `path` | `string` | yes |

### productInventoryGetList

- **Signature**: `productInventoryGetList(request: ProductInventory.ProductInventoryGetListRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /{culture}/product-inventories/{id}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProductInventory.ProductInventoryGetListRequest` (13):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `number` | no | `0` |
| `culture` | `path` | — | `string` | yes | — |
| `sortBy` | `query` | `SortBy` | `string` | no | — |
| `currentPage` | `query` | `CurrentPage` | `string` | no | — |
| `pageSize` | `query` | `PageSize` | `string` | no | — |
| `filter` | `query` | `Filter` | `string` | no | — |
| `searchString` | `query` | `SearchString` | `string` | no | — |
| `customDocumentModels` | `query` | `CustomDocumentModels` | `string` | no | — |
| `range` | `query` | `Range` | `string` | no | — |
| `month` | `query` | `Month` | `string` | no | — |
| `year` | `query` | `Year` | `string` | no | — |
| `startDate` | `query` | `StartDate` | `string` | no | — |
| `endDate` | `query` | `EndDate` | `string` | no | — |

