<!-- Generated file — do not edit; regenerated with the SDK. -->

# Quotation — operations

Accessor: `client.Quotation` · Source: `src/FlowAccount/Api/Quotation.cs` · 11 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### QuotationChangeStatusByKey

- **Auth**: `options.Bearer`
- **Signature**: `QuotationChangeStatusByKey(QuotationChangeStatusByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DocumentId`, `StatusKey`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `QuotationChangeStatusByKeyRequest` | `src/FlowAccount/Requests/Quotation/QuotationChangeStatusByKeyRequest.cs` |

### QuotationCreate

- **Auth**: `options.Bearer`
- **Signature**: `QuotationCreate(QuotationCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `MessageSent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `QuotationCreateRequest` | `src/FlowAccount/Requests/Quotation/QuotationCreateRequest.cs` |
| `SimpleDocument` | `src/FlowAccount/Models/SimpleDocument.cs` |
| `MessageSent` | `src/FlowAccount/Models/MessageSent.cs` |

### QuotationCreate2

- **Auth**: `options.Bearer`
- **Signature**: `QuotationCreate2(QuotationCreate2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `MessageSent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `QuotationCreate2Request` | `src/FlowAccount/Requests/Quotation/QuotationCreate2Request.cs` |
| `InlineDocument` | `src/FlowAccount/Models/InlineDocument.cs` |
| `MessageSent` | `src/FlowAccount/Models/MessageSent.cs` |

### QuotationCreatePartialManualPayall

- **Auth**: `options.Bearer`
- **Signature**: `QuotationCreatePartialManualPayall(QuotationCreatePartialManualPayallRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `QuotationCreatePartialManualPayallRequest` | `src/FlowAccount/Requests/Quotation/QuotationCreatePartialManualPayallRequest.cs` |

### QuotationDelete

- **Auth**: `options.Bearer`
- **Signature**: `QuotationDelete(QuotationDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `QuotationDeleteRequest` | `src/FlowAccount/Requests/Quotation/QuotationDeleteRequest.cs` |

### QuotationDetails

- **Auth**: `options.Bearer`
- **Signature**: `QuotationDetails(QuotationDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `QuotationDetailsRequest` | `src/FlowAccount/Requests/Quotation/QuotationDetailsRequest.cs` |

### QuotationEdit

- **Auth**: `options.Bearer`
- **Signature**: `QuotationEdit(QuotationEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `QuotationEditRequest` | `src/FlowAccount/Requests/Quotation/QuotationEditRequest.cs` |
| `SimpleDocument` | `src/FlowAccount/Models/SimpleDocument.cs` |

### QuotationEdit2

- **Auth**: `options.Bearer`
- **Signature**: `QuotationEdit2(QuotationEdit2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `QuotationEdit2Request` | `src/FlowAccount/Requests/Quotation/QuotationEdit2Request.cs` |
| `InlineDocument` | `src/FlowAccount/Models/InlineDocument.cs` |

### QuotationIndex

- **Auth**: `options.Bearer`
- **Signature**: `QuotationIndex(QuotationIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Query params (wire ← C#)**: `SortBy` ← `SortBy`, `CurrentPage` ← `CurrentPage`, `PageSize` ← `PageSize`, `Filter` ← `Filter`, `SearchString` ← `SearchString`, `CustomDocumentModels` ← `CustomDocumentModels`, `Range` ← `Range`, `Month` ← `Month`, `Year` ← `Year`, `StartDate` ← `StartDate`, `EndDate` ← `EndDate`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `QuotationIndexRequest` | `src/FlowAccount/Requests/Quotation/QuotationIndexRequest.cs` |

### QuotationPartialManualCancel

- **Auth**: `options.Bearer`
- **Signature**: `QuotationPartialManualCancel(QuotationPartialManualCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `QuotationPartialManualCancelRequest` | `src/FlowAccount/Requests/Quotation/QuotationPartialManualCancelRequest.cs` |

### QuotationReceivePayment

- **Auth**: `options.Bearer`
- **Signature**: `QuotationReceivePayment(QuotationReceivePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `QuotationReceivePaymentRequest` | `src/FlowAccount/Requests/Quotation/QuotationReceivePaymentRequest.cs` |
| `PaymentModel` | `src/FlowAccount/Models/PaymentModel.cs` |

