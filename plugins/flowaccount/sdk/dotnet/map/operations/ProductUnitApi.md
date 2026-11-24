<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProductUnitApi — operations

Accessor: `client.ProductUnitApi` · Source: `src/FlowAccount/Api/ProductUnitApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ProductUnitCreateProductUnit

- **Auth**: `options.Bearer`
- **Signature**: `ProductUnitCreateProductUnit(ProductUnitCreateProductUnitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProductUnitCreateProductUnitRequest` | `src/FlowAccount/Requests/ProductUnitApi/ProductUnitCreateProductUnitRequest.cs` |
| `ProductUnit` | `src/FlowAccount/Models/ProductUnit.cs` |

### ProductUnitDeleteProductUnit

- **Auth**: `options.Bearer`
- **Signature**: `ProductUnitDeleteProductUnit(ProductUnitDeleteProductUnitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProductUnitDeleteProductUnitRequest` | `src/FlowAccount/Requests/ProductUnitApi/ProductUnitDeleteProductUnitRequest.cs` |

### ProductUnitGetProductUnitList

- **Auth**: `options.Bearer`
- **Signature**: `ProductUnitGetProductUnitList(ProductUnitGetProductUnitListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProductUnitGetProductUnitListRequest` | `src/FlowAccount/Requests/ProductUnitApi/ProductUnitGetProductUnitListRequest.cs` |

### ProductUnitUpdateProductUnit

- **Auth**: `options.Bearer`
- **Signature**: `ProductUnitUpdateProductUnit(ProductUnitUpdateProductUnitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProductUnitUpdateProductUnitRequest` | `src/FlowAccount/Requests/ProductUnitApi/ProductUnitUpdateProductUnitRequest.cs` |
| `ProductUnit` | `src/FlowAccount/Models/ProductUnit.cs` |

