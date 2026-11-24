<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaxInvoice — operations

Accessor: `client.TaxInvoice` · Source: `src/FlowAccount/Api/TaxInvoice.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### TaxInvoiceChangeStatusByKey

- **Auth**: `options.Bearer`
- **Signature**: `TaxInvoiceChangeStatusByKey(TaxInvoiceChangeStatusByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DocumentId`, `StatusKey`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaxInvoiceChangeStatusByKeyRequest` | `src/FlowAccount/Requests/TaxInvoice/TaxInvoiceChangeStatusByKeyRequest.cs` |

### TaxInvoiceCreate

- **Auth**: `options.Bearer`
- **Signature**: `TaxInvoiceCreate(TaxInvoiceCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `MessageSent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaxInvoiceCreateRequest` | `src/FlowAccount/Requests/TaxInvoice/TaxInvoiceCreateRequest.cs` |
| `SimpleDocument` | `src/FlowAccount/Models/SimpleDocument.cs` |
| `MessageSent` | `src/FlowAccount/Models/MessageSent.cs` |

### TaxInvoiceCreate2

- **Auth**: `options.Bearer`
- **Signature**: `TaxInvoiceCreate2(TaxInvoiceCreate2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `MessageSent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaxInvoiceCreate2Request` | `src/FlowAccount/Requests/TaxInvoice/TaxInvoiceCreate2Request.cs` |
| `InlineDocument` | `src/FlowAccount/Models/InlineDocument.cs` |
| `MessageSent` | `src/FlowAccount/Models/MessageSent.cs` |

### TaxInvoiceDelete

- **Auth**: `options.Bearer`
- **Signature**: `TaxInvoiceDelete(TaxInvoiceDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaxInvoiceDeleteRequest` | `src/FlowAccount/Requests/TaxInvoice/TaxInvoiceDeleteRequest.cs` |

### TaxInvoiceDetails

- **Auth**: `options.Bearer`
- **Signature**: `TaxInvoiceDetails(TaxInvoiceDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaxInvoiceDetailsRequest` | `src/FlowAccount/Requests/TaxInvoice/TaxInvoiceDetailsRequest.cs` |

### TaxInvoiceEdit

- **Auth**: `options.Bearer`
- **Signature**: `TaxInvoiceEdit(TaxInvoiceEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaxInvoiceEditRequest` | `src/FlowAccount/Requests/TaxInvoice/TaxInvoiceEditRequest.cs` |
| `SimpleDocument` | `src/FlowAccount/Models/SimpleDocument.cs` |

### TaxInvoiceEdit2

- **Auth**: `options.Bearer`
- **Signature**: `TaxInvoiceEdit2(TaxInvoiceEdit2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaxInvoiceEdit2Request` | `src/FlowAccount/Requests/TaxInvoice/TaxInvoiceEdit2Request.cs` |
| `InlineDocument` | `src/FlowAccount/Models/InlineDocument.cs` |

### TaxInvoiceGetCumulativeDocumentReferenceList

- **Auth**: `options.Bearer`
- **Signature**: `TaxInvoiceGetCumulativeDocumentReferenceList(TaxInvoiceGetCumulativeDocumentReferenceListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaxInvoiceGetCumulativeDocumentReferenceListRequest` | `src/FlowAccount/Requests/TaxInvoice/TaxInvoiceGetCumulativeDocumentReferenceListRequest.cs` |

### TaxInvoiceIndex

- **Auth**: `options.Bearer`
- **Signature**: `TaxInvoiceIndex(TaxInvoiceIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Query params (wire ← C#)**: `SortBy` ← `SortBy`, `CurrentPage` ← `CurrentPage`, `PageSize` ← `PageSize`, `Filter` ← `Filter`, `SearchString` ← `SearchString`, `CustomDocumentModels` ← `CustomDocumentModels`, `Range` ← `Range`, `Month` ← `Month`, `Year` ← `Year`, `StartDate` ← `StartDate`, `EndDate` ← `EndDate`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaxInvoiceIndexRequest` | `src/FlowAccount/Requests/TaxInvoice/TaxInvoiceIndexRequest.cs` |

### TaxInvoiceReceivePayment

- **Auth**: `options.Bearer`
- **Signature**: `TaxInvoiceReceivePayment(TaxInvoiceReceivePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaxInvoiceReceivePaymentRequest` | `src/FlowAccount/Requests/TaxInvoice/TaxInvoiceReceivePaymentRequest.cs` |
| `PaymentModel` | `src/FlowAccount/Models/PaymentModel.cs` |

