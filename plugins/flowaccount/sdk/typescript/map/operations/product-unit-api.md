<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProductUnitApi — operations

Accessor: `client.productUnitApi` · Source: `src/resources/product-unit-api.ts` · 4 operations · Request types: namespace `ProductUnitApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `flow-account`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### productUnitCreateProductUnit

- **Signature**: `productUnitCreateProductUnit(request: ProductUnitApi.ProductUnitCreateProductUnitRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `POST /{culture}/products/units`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProductUnitApi.ProductUnitCreateProductUnitRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `ProductUnit` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductUnit` | `productUnitSchema` | `src/models/product-unit.ts` |

### productUnitDeleteProductUnit

- **Signature**: `productUnitDeleteProductUnit(request: ProductUnitApi.ProductUnitDeleteProductUnitRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `DELETE /{culture}/products/units/{id}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProductUnitApi.ProductUnitDeleteProductUnitRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |

### productUnitGetProductUnitList

- **Signature**: `productUnitGetProductUnitList(request: ProductUnitApi.ProductUnitGetProductUnitListRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /{culture}/products/units`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProductUnitApi.ProductUnitGetProductUnitListRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |

### productUnitUpdateProductUnit

- **Signature**: `productUnitUpdateProductUnit(request: ProductUnitApi.ProductUnitUpdateProductUnitRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `PUT /{culture}/products/units/{id}`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProductUnitApi.ProductUnitUpdateProductUnitRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `ProductUnit` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductUnit` | `productUnitSchema` | `src/models/product-unit.ts` |

