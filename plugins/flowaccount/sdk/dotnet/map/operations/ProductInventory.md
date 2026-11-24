<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProductInventory — operations

Accessor: `client.ProductInventory` · Source: `src/FlowAccount/Api/ProductInventory.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ProductInventoryAdjust

- **Auth**: `options.Bearer`
- **Signature**: `ProductInventoryAdjust(ProductInventoryAdjustRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProductInventoryAdjustRequest` | `src/FlowAccount/Requests/ProductInventory/ProductInventoryAdjustRequest.cs` |
| `StockCard` | `src/FlowAccount/Models/StockCard.cs` |

### ProductInventoryDeleteProductInventory

- **Auth**: `options.Bearer`
- **Signature**: `ProductInventoryDeleteProductInventory(ProductInventoryDeleteProductInventoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProductInventoryDeleteProductInventoryRequest` | `src/FlowAccount/Requests/ProductInventory/ProductInventoryDeleteProductInventoryRequest.cs` |

### ProductInventoryGetList

- **Auth**: `options.Bearer`
- **Signature**: `ProductInventoryGetList(ProductInventoryGetListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Query params (wire ← C#)**: `SortBy` ← `SortBy`, `CurrentPage` ← `CurrentPage`, `PageSize` ← `PageSize`, `Filter` ← `Filter`, `SearchString` ← `SearchString`, `CustomDocumentModels` ← `CustomDocumentModels`, `Range` ← `Range`, `Month` ← `Month`, `Year` ← `Year`, `StartDate` ← `StartDate`, `EndDate` ← `EndDate`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProductInventoryGetListRequest` | `src/FlowAccount/Requests/ProductInventory/ProductInventoryGetListRequest.cs` |

