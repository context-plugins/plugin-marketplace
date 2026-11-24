<!-- Generated file — do not edit; regenerated with the SDK. -->

# Purchase — operations

Accessor: `client.Purchase` · Source: `src/FlowAccount/Api/Purchase.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PurchaseChangeStatusByKey

- **Auth**: `options.Bearer`
- **Signature**: `PurchaseChangeStatusByKey(PurchaseChangeStatusByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DocumentId`, `StatusKey`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PurchaseChangeStatusByKeyRequest` | `src/FlowAccount/Requests/Purchase/PurchaseChangeStatusByKeyRequest.cs` |

### PurchaseCreate

- **Auth**: `options.Bearer`
- **Signature**: `PurchaseCreate(PurchaseCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `MessageSent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PurchaseCreateRequest` | `src/FlowAccount/Requests/Purchase/PurchaseCreateRequest.cs` |
| `SimpleDocument` | `src/FlowAccount/Models/SimpleDocument.cs` |
| `MessageSent` | `src/FlowAccount/Models/MessageSent.cs` |

### PurchaseCreate2

- **Auth**: `options.Bearer`
- **Signature**: `PurchaseCreate2(PurchaseCreate2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `MessageSent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PurchaseCreate2Request` | `src/FlowAccount/Requests/Purchase/PurchaseCreate2Request.cs` |
| `InlineDocument` | `src/FlowAccount/Models/InlineDocument.cs` |
| `MessageSent` | `src/FlowAccount/Models/MessageSent.cs` |

### PurchaseDelete

- **Auth**: `options.Bearer`
- **Signature**: `PurchaseDelete(PurchaseDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PurchaseDeleteRequest` | `src/FlowAccount/Requests/Purchase/PurchaseDeleteRequest.cs` |

### PurchaseDetails

- **Auth**: `options.Bearer`
- **Signature**: `PurchaseDetails(PurchaseDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PurchaseDetailsRequest` | `src/FlowAccount/Requests/Purchase/PurchaseDetailsRequest.cs` |

### PurchaseEdit

- **Auth**: `options.Bearer`
- **Signature**: `PurchaseEdit(PurchaseEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PurchaseEditRequest` | `src/FlowAccount/Requests/Purchase/PurchaseEditRequest.cs` |
| `SimpleDocument` | `src/FlowAccount/Models/SimpleDocument.cs` |

### PurchaseEdit2

- **Auth**: `options.Bearer`
- **Signature**: `PurchaseEdit2(PurchaseEdit2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PurchaseEdit2Request` | `src/FlowAccount/Requests/Purchase/PurchaseEdit2Request.cs` |
| `InlineDocument` | `src/FlowAccount/Models/InlineDocument.cs` |

### PurchaseIndex

- **Auth**: `options.Bearer`
- **Signature**: `PurchaseIndex(PurchaseIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Query params (wire ← C#)**: `SortBy` ← `SortBy`, `CurrentPage` ← `CurrentPage`, `PageSize` ← `PageSize`, `Filter` ← `Filter`, `SearchString` ← `SearchString`, `CustomDocumentModels` ← `CustomDocumentModels`, `Range` ← `Range`, `Month` ← `Month`, `Year` ← `Year`, `StartDate` ← `StartDate`, `EndDate` ← `EndDate`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PurchaseIndexRequest` | `src/FlowAccount/Requests/Purchase/PurchaseIndexRequest.cs` |

### PurchaseReceivePayment

- **Auth**: `options.Bearer`
- **Signature**: `PurchaseReceivePayment(PurchaseReceivePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PurchaseReceivePaymentRequest` | `src/FlowAccount/Requests/Purchase/PurchaseReceivePaymentRequest.cs` |
| `PaymentModel` | `src/FlowAccount/Models/PaymentModel.cs` |

