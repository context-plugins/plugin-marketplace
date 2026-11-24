<!-- Generated file — do not edit; regenerated with the SDK. -->

# CashInvoice — operations

Accessor: `client.CashInvoice` · Source: `src/FlowAccount/Api/CashInvoice.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CashInvoiceChangeStatusByKey

- **Auth**: `options.Bearer`
- **Signature**: `CashInvoiceChangeStatusByKey(CashInvoiceChangeStatusByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DocumentId`, `StatusKey`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CashInvoiceChangeStatusByKeyRequest` | `src/FlowAccount/Requests/CashInvoice/CashInvoiceChangeStatusByKeyRequest.cs` |

### CashInvoiceCreate

- **Auth**: `options.Bearer`
- **Signature**: `CashInvoiceCreate(CashInvoiceCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `MessageSent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CashInvoiceCreateRequest` | `src/FlowAccount/Requests/CashInvoice/CashInvoiceCreateRequest.cs` |
| `SimpleDocument` | `src/FlowAccount/Models/SimpleDocument.cs` |
| `MessageSent` | `src/FlowAccount/Models/MessageSent.cs` |

### CashInvoiceCreate2

- **Auth**: `options.Bearer`
- **Signature**: `CashInvoiceCreate2(CashInvoiceCreate2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `MessageSent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CashInvoiceCreate2Request` | `src/FlowAccount/Requests/CashInvoice/CashInvoiceCreate2Request.cs` |
| `InlineDocument` | `src/FlowAccount/Models/InlineDocument.cs` |
| `MessageSent` | `src/FlowAccount/Models/MessageSent.cs` |

### CashInvoiceDelete

- **Auth**: `options.Bearer`
- **Signature**: `CashInvoiceDelete(CashInvoiceDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CashInvoiceDeleteRequest` | `src/FlowAccount/Requests/CashInvoice/CashInvoiceDeleteRequest.cs` |

### CashInvoiceDetails

- **Auth**: `options.Bearer`
- **Signature**: `CashInvoiceDetails(CashInvoiceDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CashInvoiceDetailsRequest` | `src/FlowAccount/Requests/CashInvoice/CashInvoiceDetailsRequest.cs` |

### CashInvoiceEdit

- **Auth**: `options.Bearer`
- **Signature**: `CashInvoiceEdit(CashInvoiceEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CashInvoiceEditRequest` | `src/FlowAccount/Requests/CashInvoice/CashInvoiceEditRequest.cs` |
| `SimpleDocument` | `src/FlowAccount/Models/SimpleDocument.cs` |

### CashInvoiceEdit2

- **Auth**: `options.Bearer`
- **Signature**: `CashInvoiceEdit2(CashInvoiceEdit2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CashInvoiceEdit2Request` | `src/FlowAccount/Requests/CashInvoice/CashInvoiceEdit2Request.cs` |
| `InlineDocument` | `src/FlowAccount/Models/InlineDocument.cs` |

### CashInvoiceIndex

- **Auth**: `options.Bearer`
- **Signature**: `CashInvoiceIndex(CashInvoiceIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Query params (wire ← C#)**: `SortBy` ← `SortBy`, `CurrentPage` ← `CurrentPage`, `PageSize` ← `PageSize`, `Filter` ← `Filter`, `SearchString` ← `SearchString`, `CustomDocumentModels` ← `CustomDocumentModels`, `Range` ← `Range`, `Month` ← `Month`, `Year` ← `Year`, `StartDate` ← `StartDate`, `EndDate` ← `EndDate`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CashInvoiceIndexRequest` | `src/FlowAccount/Requests/CashInvoice/CashInvoiceIndexRequest.cs` |

### CashInvoiceReceivePayment

- **Auth**: `options.Bearer`
- **Signature**: `CashInvoiceReceivePayment(CashInvoiceReceivePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CashInvoiceReceivePaymentRequest` | `src/FlowAccount/Requests/CashInvoice/CashInvoiceReceivePaymentRequest.cs` |
| `PaymentModel` | `src/FlowAccount/Models/PaymentModel.cs` |

