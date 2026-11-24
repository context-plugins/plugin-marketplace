<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProductCategoryApi — operations

Accessor: `client.ProductCategoryApi` · Source: `src/FlowAccount/Api/ProductCategoryApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ProductCategoryCreateProductCategory

- **Auth**: `options.Bearer`
- **Signature**: `ProductCategoryCreateProductCategory(ProductCategoryCreateProductCategoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProductCategoryCreateProductCategoryRequest` | `src/FlowAccount/Requests/ProductCategoryApi/ProductCategoryCreateProductCategoryRequest.cs` |
| `ProductCategory` | `src/FlowAccount/Models/ProductCategory.cs` |

### ProductCategoryDeleteProductCategory

- **Auth**: `options.Bearer`
- **Signature**: `ProductCategoryDeleteProductCategory(ProductCategoryDeleteProductCategoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProductCategoryDeleteProductCategoryRequest` | `src/FlowAccount/Requests/ProductCategoryApi/ProductCategoryDeleteProductCategoryRequest.cs` |

### ProductCategoryGetProductCategory

- **Auth**: `options.Bearer`
- **Signature**: `ProductCategoryGetProductCategory(ProductCategoryGetProductCategoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Query params (wire ← C#)**: `currentPage` ← `CurrentPage`, `pageSize` ← `PageSize`
- **Returns**: `IReadOnlyList<ProductCategory>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProductCategoryGetProductCategoryRequest` | `src/FlowAccount/Requests/ProductCategoryApi/ProductCategoryGetProductCategoryRequest.cs` |
| `ProductCategory` | `src/FlowAccount/Models/ProductCategory.cs` |

### ProductCategoryUpdateProductCategory

- **Auth**: `options.Bearer`
- **Signature**: `ProductCategoryUpdateProductCategory(ProductCategoryUpdateProductCategoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProductCategoryUpdateProductCategoryRequest` | `src/FlowAccount/Requests/ProductCategoryApi/ProductCategoryUpdateProductCategoryRequest.cs` |
| `ProductCategory` | `src/FlowAccount/Models/ProductCategory.cs` |

