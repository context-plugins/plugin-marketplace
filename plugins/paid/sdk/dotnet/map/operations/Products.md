<!-- Generated file — do not edit; regenerated with the SDK. -->

# Products — operations

Accessor: `client.Products` · Source: `src/Paid/Api/Products.cs` · 12 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Create5

- **Signature**: `Create5(Create5Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `Product`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Create5Request` | `src/Paid/Requests/Products/Create5Request.cs` |
| `ProductCreate` | `src/Paid/Models/ProductCreate.cs` |
| `Product` | `src/Paid/Models/Product.cs` |

### CreateProduct

- **Signature**: `CreateProduct(CreateProductOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `Product1`
- **Error**: `ApiException<CreateProductError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateProductOperationRequest` | `src/Paid/Requests/Products/CreateProductOperationRequest.cs` |
| `CreateProductRequest` | `src/Paid/Models/CreateProductRequest.cs` |
| `Product1` | `src/Paid/Models/Product1.cs` |
| `CreateProductError` | `src/Paid/Errors/CreateProductError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### Delete5

- **Signature**: `Delete5(Delete5Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProductId`, `Authorization`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Delete5Request` | `src/Paid/Requests/Products/Delete5Request.cs` |

### DeleteByExternalId4

- **Signature**: `DeleteByExternalId4(DeleteByExternalId4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExternalId`, `Authorization`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteByExternalId4Request` | `src/Paid/Requests/Products/DeleteByExternalId4Request.cs` |

### Get5

- **Signature**: `Get5(Get5Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProductId`, `Authorization`
- **Returns**: `Product`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Get5Request` | `src/Paid/Requests/Products/Get5Request.cs` |
| `Product` | `src/Paid/Models/Product.cs` |

### GetByExternalId4

- **Signature**: `GetByExternalId4(GetByExternalId4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExternalId`, `Authorization`
- **Returns**: `Product`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetByExternalId4Request` | `src/Paid/Requests/Products/GetByExternalId4Request.cs` |
| `Product` | `src/Paid/Models/Product.cs` |

### GetProductById

- **Signature**: `GetProductById(GetProductByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `ProductDetail`
- **Error**: `ApiException<GetProductByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProductByIdRequest` | `src/Paid/Requests/Products/GetProductByIdRequest.cs` |
| `ProductDetail` | `src/Paid/Models/ProductDetail.cs` |
| `GetProductByIdError` | `src/Paid/Errors/GetProductByIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### List5

- **Signature**: `List5(List5Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `IReadOnlyList<Product>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `List5Request` | `src/Paid/Requests/Products/List5Request.cs` |
| `Product` | `src/Paid/Models/Product.cs` |

### ListProducts

- **Signature**: `ListProducts(ListProductsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `name` ← `Name`, `active` ← `Active`, `archived` ← `Archived`
- **Returns**: `ProductListResponse`
- **Error**: `ApiException<ListProductsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListProductsRequest` | `src/Paid/Requests/Products/ListProductsRequest.cs` |
| `ProductListResponse` | `src/Paid/Models/ProductListResponse.cs` |
| `ListProductsError` | `src/Paid/Errors/ListProductsError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### Update4

- **Signature**: `Update4(Update4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProductId`, `Authorization`
- **Returns**: `Product`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Update4Request` | `src/Paid/Requests/Products/Update4Request.cs` |
| `ProductUpdate` | `src/Paid/Models/ProductUpdate.cs` |
| `Product` | `src/Paid/Models/Product.cs` |

### UpdateByExternalId3

- **Signature**: `UpdateByExternalId3(UpdateByExternalId3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExternalId`, `Authorization`
- **Returns**: `Product`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdateByExternalId3Request` | `src/Paid/Requests/Products/UpdateByExternalId3Request.cs` |
| `ProductUpdate` | `src/Paid/Models/ProductUpdate.cs` |
| `Product` | `src/Paid/Models/Product.cs` |

### UpdateProductById

- **Signature**: `UpdateProductById(UpdateProductByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `ProductDetail`
- **Error**: `ApiException<UpdateProductByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateProductByIdRequest` | `src/Paid/Requests/Products/UpdateProductByIdRequest.cs` |
| `UpdateProductRequest` | `src/Paid/Models/UpdateProductRequest.cs` |
| `ProductDetail` | `src/Paid/Models/ProductDetail.cs` |
| `UpdateProductByIdError` | `src/Paid/Errors/UpdateProductByIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

