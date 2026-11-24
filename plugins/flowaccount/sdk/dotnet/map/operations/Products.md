<!-- Generated file — do not edit; regenerated with the SDK. -->

# Products — operations

Accessor: `client.Products` · Source: `src/FlowAccount/Api/Products.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ProductsCreate

- **Auth**: `options.Bearer`
- **Signature**: `ProductsCreate(ProductsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `ApiResponseOfISimpleListResultOfIProductResult`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProductsCreateRequest` | `src/FlowAccount/Requests/Products/ProductsCreateRequest.cs` |
| `ProductResult` | `src/FlowAccount/Models/ProductResult.cs` |
| `ApiResponseOfISimpleListResultOfIProductResult` | `src/FlowAccount/Models/ApiResponseOfISimpleListResultOfIProductResult.cs` |

### ProductsGetById

- **Auth**: `options.Bearer`
- **Signature**: `ProductsGetById(ProductsGetByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `ApiResponseOfISimpleListResultOfIProductResult`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProductsGetByIdRequest` | `src/FlowAccount/Requests/Products/ProductsGetByIdRequest.cs` |
| `ApiResponseOfISimpleListResultOfIProductResult` | `src/FlowAccount/Models/ApiResponseOfISimpleListResultOfIProductResult.cs` |

### ProductsGetList

- **Auth**: `options.Bearer`
- **Signature**: `ProductsGetList(ProductsGetListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Query params (wire ← C#)**: `SortBy` ← `SortBy`, `CurrentPage` ← `CurrentPage`, `PageSize` ← `PageSize`, `Filter` ← `Filter`, `SearchString` ← `SearchString`, `CustomDocumentModels` ← `CustomDocumentModels`, `Range` ← `Range`, `Month` ← `Month`, `Year` ← `Year`, `StartDate` ← `StartDate`, `EndDate` ← `EndDate`, `id` ← `Id`
- **Returns**: `ApiResponseOfISimpleListResultOfIProductResult`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProductsGetListRequest` | `src/FlowAccount/Requests/Products/ProductsGetListRequest.cs` |
| `ApiResponseOfISimpleListResultOfIProductResult` | `src/FlowAccount/Models/ApiResponseOfISimpleListResultOfIProductResult.cs` |

### ProductsRemove

- **Auth**: `options.Bearer`
- **Signature**: `ProductsRemove(ProductsRemoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `ApiResponseOfBoolean`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProductsRemoveRequest` | `src/FlowAccount/Requests/Products/ProductsRemoveRequest.cs` |
| `ApiResponseOfBoolean` | `src/FlowAccount/Models/ApiResponseOfBoolean.cs` |

### ProductsSearch

- **Auth**: `options.Bearer`
- **Signature**: `ProductsSearch(ProductsSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Query params (wire ← C#)**: `SortBy` ← `SortBy`, `CurrentPage` ← `CurrentPage`, `PageSize` ← `PageSize`, `Filter` ← `Filter`, `SearchString` ← `SearchString`, `CustomDocumentModels` ← `CustomDocumentModels`, `Range` ← `Range`, `Month` ← `Month`, `Year` ← `Year`, `StartDate` ← `StartDate`, `EndDate` ← `EndDate`
- **Returns**: `ApiResponseOfISimpleListResultOfIProductResult`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProductsSearchRequest` | `src/FlowAccount/Requests/Products/ProductsSearchRequest.cs` |
| `ApiResponseOfISimpleListResultOfIProductResult` | `src/FlowAccount/Models/ApiResponseOfISimpleListResultOfIProductResult.cs` |

### ProductsUpdate

- **Auth**: `options.Bearer`
- **Signature**: `ProductsUpdate(ProductsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `ApiResponseOfISimpleListResultOfIProductResult`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProductsUpdateRequest` | `src/FlowAccount/Requests/Products/ProductsUpdateRequest.cs` |
| `ProductResult` | `src/FlowAccount/Models/ProductResult.cs` |
| `ApiResponseOfISimpleListResultOfIProductResult` | `src/FlowAccount/Models/ApiResponseOfISimpleListResultOfIProductResult.cs` |

