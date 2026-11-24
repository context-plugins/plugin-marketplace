<!-- Generated file — do not edit; regenerated with the SDK. -->

# ReceivableInvoiceApi — operations

Accessor: `client.ReceivableInvoiceApi` · Source: `src/FlowAccount/Api/ReceivableInvoiceApi.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ReceivableInvoiceChangeStatusByKey

- **Auth**: `options.Bearer`
- **Signature**: `ReceivableInvoiceChangeStatusByKey(ReceivableInvoiceChangeStatusByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DocumentId`, `StatusKey`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReceivableInvoiceChangeStatusByKeyRequest` | `src/FlowAccount/Requests/ReceivableInvoiceApi/ReceivableInvoiceChangeStatusByKeyRequest.cs` |

### ReceivableInvoiceCreate

- **Auth**: `options.Bearer`
- **Signature**: `ReceivableInvoiceCreate(ReceivableInvoiceCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `MessageSent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReceivableInvoiceCreateRequest` | `src/FlowAccount/Requests/ReceivableInvoiceApi/ReceivableInvoiceCreateRequest.cs` |
| `SimpleDocument` | `src/FlowAccount/Models/SimpleDocument.cs` |
| `MessageSent` | `src/FlowAccount/Models/MessageSent.cs` |

### ReceivableInvoiceCreate2

- **Auth**: `options.Bearer`
- **Signature**: `ReceivableInvoiceCreate2(ReceivableInvoiceCreate2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `MessageSent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReceivableInvoiceCreate2Request` | `src/FlowAccount/Requests/ReceivableInvoiceApi/ReceivableInvoiceCreate2Request.cs` |
| `InlineDocument` | `src/FlowAccount/Models/InlineDocument.cs` |
| `MessageSent` | `src/FlowAccount/Models/MessageSent.cs` |

### ReceivableInvoiceDelete

- **Auth**: `options.Bearer`
- **Signature**: `ReceivableInvoiceDelete(ReceivableInvoiceDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReceivableInvoiceDeleteRequest` | `src/FlowAccount/Requests/ReceivableInvoiceApi/ReceivableInvoiceDeleteRequest.cs` |

### ReceivableInvoiceDetails

- **Auth**: `options.Bearer`
- **Signature**: `ReceivableInvoiceDetails(ReceivableInvoiceDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReceivableInvoiceDetailsRequest` | `src/FlowAccount/Requests/ReceivableInvoiceApi/ReceivableInvoiceDetailsRequest.cs` |

### ReceivableInvoiceEdit

- **Auth**: `options.Bearer`
- **Signature**: `ReceivableInvoiceEdit(ReceivableInvoiceEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReceivableInvoiceEditRequest` | `src/FlowAccount/Requests/ReceivableInvoiceApi/ReceivableInvoiceEditRequest.cs` |
| `SimpleDocument` | `src/FlowAccount/Models/SimpleDocument.cs` |

### ReceivableInvoiceEdit2

- **Auth**: `options.Bearer`
- **Signature**: `ReceivableInvoiceEdit2(ReceivableInvoiceEdit2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReceivableInvoiceEdit2Request` | `src/FlowAccount/Requests/ReceivableInvoiceApi/ReceivableInvoiceEdit2Request.cs` |
| `InlineDocument` | `src/FlowAccount/Models/InlineDocument.cs` |

### ReceivableInvoiceIndex

- **Auth**: `options.Bearer`
- **Signature**: `ReceivableInvoiceIndex(ReceivableInvoiceIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Query params (wire ← C#)**: `SortBy` ← `SortBy`, `CurrentPage` ← `CurrentPage`, `PageSize` ← `PageSize`, `Filter` ← `Filter`, `SearchString` ← `SearchString`, `CustomDocumentModels` ← `CustomDocumentModels`, `Range` ← `Range`, `Month` ← `Month`, `Year` ← `Year`, `StartDate` ← `StartDate`, `EndDate` ← `EndDate`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReceivableInvoiceIndexRequest` | `src/FlowAccount/Requests/ReceivableInvoiceApi/ReceivableInvoiceIndexRequest.cs` |

### ReceivableInvoiceReceivePayment

- **Auth**: `options.Bearer`
- **Signature**: `ReceivableInvoiceReceivePayment(ReceivableInvoiceReceivePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReceivableInvoiceReceivePaymentRequest` | `src/FlowAccount/Requests/ReceivableInvoiceApi/ReceivableInvoiceReceivePaymentRequest.cs` |
| `PaymentModel` | `src/FlowAccount/Models/PaymentModel.cs` |

