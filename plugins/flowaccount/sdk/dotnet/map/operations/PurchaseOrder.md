<!-- Generated file — do not edit; regenerated with the SDK. -->

# PurchaseOrder — operations

Accessor: `client.PurchaseOrder` · Source: `src/FlowAccount/Api/PurchaseOrder.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PurchaseOrderChangeStatusByKey

- **Auth**: `options.Bearer`
- **Signature**: `PurchaseOrderChangeStatusByKey(PurchaseOrderChangeStatusByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DocumentId`, `StatusKey`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PurchaseOrderChangeStatusByKeyRequest` | `src/FlowAccount/Requests/PurchaseOrder/PurchaseOrderChangeStatusByKeyRequest.cs` |

### PurchaseOrderCreate

- **Auth**: `options.Bearer`
- **Signature**: `PurchaseOrderCreate(PurchaseOrderCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `MessageSent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PurchaseOrderCreateRequest` | `src/FlowAccount/Requests/PurchaseOrder/PurchaseOrderCreateRequest.cs` |
| `SimpleDocument` | `src/FlowAccount/Models/SimpleDocument.cs` |
| `MessageSent` | `src/FlowAccount/Models/MessageSent.cs` |

### PurchaseOrderCreate2

- **Auth**: `options.Bearer`
- **Signature**: `PurchaseOrderCreate2(PurchaseOrderCreate2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `MessageSent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PurchaseOrderCreate2Request` | `src/FlowAccount/Requests/PurchaseOrder/PurchaseOrderCreate2Request.cs` |
| `InlineDocument` | `src/FlowAccount/Models/InlineDocument.cs` |
| `MessageSent` | `src/FlowAccount/Models/MessageSent.cs` |

### PurchaseOrderDelete

- **Auth**: `options.Bearer`
- **Signature**: `PurchaseOrderDelete(PurchaseOrderDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PurchaseOrderDeleteRequest` | `src/FlowAccount/Requests/PurchaseOrder/PurchaseOrderDeleteRequest.cs` |

### PurchaseOrderDetails

- **Auth**: `options.Bearer`
- **Signature**: `PurchaseOrderDetails(PurchaseOrderDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PurchaseOrderDetailsRequest` | `src/FlowAccount/Requests/PurchaseOrder/PurchaseOrderDetailsRequest.cs` |

### PurchaseOrderEdit

- **Auth**: `options.Bearer`
- **Signature**: `PurchaseOrderEdit(PurchaseOrderEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PurchaseOrderEditRequest` | `src/FlowAccount/Requests/PurchaseOrder/PurchaseOrderEditRequest.cs` |
| `SimpleDocument` | `src/FlowAccount/Models/SimpleDocument.cs` |

### PurchaseOrderEdit2

- **Auth**: `options.Bearer`
- **Signature**: `PurchaseOrderEdit2(PurchaseOrderEdit2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PurchaseOrderEdit2Request` | `src/FlowAccount/Requests/PurchaseOrder/PurchaseOrderEdit2Request.cs` |
| `InlineDocument` | `src/FlowAccount/Models/InlineDocument.cs` |

### PurchaseOrderIndex

- **Auth**: `options.Bearer`
- **Signature**: `PurchaseOrderIndex(PurchaseOrderIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Query params (wire ← C#)**: `SortBy` ← `SortBy`, `CurrentPage` ← `CurrentPage`, `PageSize` ← `PageSize`, `Filter` ← `Filter`, `SearchString` ← `SearchString`, `CustomDocumentModels` ← `CustomDocumentModels`, `Range` ← `Range`, `Month` ← `Month`, `Year` ← `Year`, `StartDate` ← `StartDate`, `EndDate` ← `EndDate`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PurchaseOrderIndexRequest` | `src/FlowAccount/Requests/PurchaseOrder/PurchaseOrderIndexRequest.cs` |

### PurchaseOrderReceivePayment

- **Auth**: `options.Bearer`
- **Signature**: `PurchaseOrderReceivePayment(PurchaseOrderReceivePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PurchaseOrderReceivePaymentRequest` | `src/FlowAccount/Requests/PurchaseOrder/PurchaseOrderReceivePaymentRequest.cs` |
| `PaymentModel` | `src/FlowAccount/Models/PaymentModel.cs` |

