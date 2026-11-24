<!-- Generated file — do not edit; regenerated with the SDK. -->

# Products — operations

Accessor: `client.products` · Source: `paid/apis/products.py` · 12 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.products.create_product

- **Route**: `POST /products/`
- **Server**: `default`
- **Signature**: `def create_product(authorization: str, *, body: CreateProductRequest | CreateProductRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Product1`
- **Returns (raw)**: `ApiResult[Product1, CreateProductErrorBody]`
- **Error**: `CreateProductErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateProductRequest` | `paid/models/create_product_request.py` |
| `CreateProductRequestDict` | `paid/models/create_product_request.py` |
| `Product1` | `paid/models/product1.py` |
| `CreateProductErrorBody` | `paid/errors/create_product_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.products.create5

- **Route**: `POST /products`
- **Server**: `default`
- **Signature**: `def create5(authorization: str, *, body: ProductCreate | ProductCreateDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Product`
- **Returns (raw)**: `ApiResult[Product, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ProductCreate` | `paid/models/product_create.py` |
| `ProductCreateDict` | `paid/models/product_create.py` |
| `Product` | `paid/models/product.py` |

### client.products.delete_by_external_id4

- **Route**: `DELETE /products/external/{externalId}`
- **Server**: `default`
- **Signature**: `def delete_by_external_id4(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `external_id`, `authorization`
- **Params**: `external_id` — path `externalId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.products.delete5

- **Route**: `DELETE /products/{productId}`
- **Server**: `default`
- **Signature**: `def delete5(product_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `product_id`, `authorization`
- **Params**: `product_id` — path `productId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.products.get_by_external_id4

- **Route**: `GET /products/external/{externalId}`
- **Server**: `default`
- **Signature**: `def get_by_external_id4(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `external_id`, `authorization`
- **Params**: `external_id` — path `externalId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Product`
- **Returns (raw)**: `ApiResult[Product, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Product` | `paid/models/product.py` |

### client.products.get_product_by_id

- **Route**: `GET /products/{id}`
- **Server**: `default`
- **Signature**: `def get_product_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization`
- **Returns (parsed)**: `ProductDetail`
- **Returns (raw)**: `ApiResult[ProductDetail, GetProductByIdErrorBody]`
- **Error**: `GetProductByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProductDetail` | `paid/models/product_detail.py` |
| `GetProductByIdErrorBody` | `paid/errors/get_product_by_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.products.get5

- **Route**: `GET /products/{productId}`
- **Server**: `default`
- **Signature**: `def get5(product_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `product_id`, `authorization`
- **Params**: `product_id` — path `productId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Product`
- **Returns (raw)**: `ApiResult[Product, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Product` | `paid/models/product.py` |

### client.products.list_products

- **Route**: `GET /products/`
- **Server**: `default`
- **Signature**: `def list_products(authorization: str, *, limit: int | None = 10, offset: int | None = None, name: str | None = None, active: bool | None = None, archived: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `limit` — query · `offset` — query · `name` — query · `active` — query · `archived` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `ProductListResponse`
- **Returns (raw)**: `ApiResult[ProductListResponse, ListProductsErrorBody]`
- **Error**: `ListProductsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProductListResponse` | `paid/models/product_list_response.py` |
| `ListProductsErrorBody` | `paid/errors/list_products_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.products.list5

- **Route**: `GET /products`
- **Server**: `default`
- **Signature**: `def list5(authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization`
- **Returns (parsed)**: `list[Product]`
- **Returns (raw)**: `ApiResult[list[Product], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Product` | `paid/models/product.py` |

### client.products.update_by_external_id3

- **Route**: `PUT /products/external/{externalId}`
- **Server**: `default`
- **Signature**: `def update_by_external_id3(external_id: str, authorization: str, *, body: ProductUpdate | ProductUpdateDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `external_id`, `authorization`
- **Params**: `external_id` — path `externalId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Product`
- **Returns (raw)**: `ApiResult[Product, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ProductUpdate` | `paid/models/product_update.py` |
| `ProductUpdateDict` | `paid/models/product_update.py` |
| `Product` | `paid/models/product.py` |

### client.products.update_product_by_id

- **Route**: `PUT /products/{id}`
- **Server**: `default`
- **Signature**: `def update_product_by_id(id_: str, authorization: str, *, body: UpdateProductRequest | UpdateProductRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `ProductDetail`
- **Returns (raw)**: `ApiResult[ProductDetail, UpdateProductByIdErrorBody]`
- **Error**: `UpdateProductByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateProductRequest` | `paid/models/update_product_request.py` |
| `UpdateProductRequestDict` | `paid/models/update_product_request.py` |
| `ProductDetail` | `paid/models/product_detail.py` |
| `UpdateProductByIdErrorBody` | `paid/errors/update_product_by_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.products.update4

- **Route**: `PUT /products/{productId}`
- **Server**: `default`
- **Signature**: `def update4(product_id: str, authorization: str, *, body: ProductUpdate | ProductUpdateDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `product_id`, `authorization`
- **Params**: `product_id` — path `productId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Product`
- **Returns (raw)**: `ApiResult[Product, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ProductUpdate` | `paid/models/product_update.py` |
| `ProductUpdateDict` | `paid/models/product_update.py` |
| `Product` | `paid/models/product.py` |

