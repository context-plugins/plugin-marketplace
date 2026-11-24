<!-- Generated file — do not edit; regenerated with the SDK. -->

# CreditNote — operations

Accessor: `client.CreditNote` · Source: `src/FlowAccount/Api/CreditNote.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreditNoteChangeStatusByKey

- **Auth**: `options.Bearer`
- **Signature**: `CreditNoteChangeStatusByKey(CreditNoteChangeStatusByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DocumentId`, `StatusKey`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreditNoteChangeStatusByKeyRequest` | `src/FlowAccount/Requests/CreditNote/CreditNoteChangeStatusByKeyRequest.cs` |

### CreditNoteCreate

- **Auth**: `options.Bearer`
- **Signature**: `CreditNoteCreate(CreditNoteCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `MessageSent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreditNoteCreateRequest` | `src/FlowAccount/Requests/CreditNote/CreditNoteCreateRequest.cs` |
| `SimpleDocument` | `src/FlowAccount/Models/SimpleDocument.cs` |
| `MessageSent` | `src/FlowAccount/Models/MessageSent.cs` |

### CreditNoteCreate2

- **Auth**: `options.Bearer`
- **Signature**: `CreditNoteCreate2(CreditNoteCreate2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `MessageSent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreditNoteCreate2Request` | `src/FlowAccount/Requests/CreditNote/CreditNoteCreate2Request.cs` |
| `InlineDocument` | `src/FlowAccount/Models/InlineDocument.cs` |
| `MessageSent` | `src/FlowAccount/Models/MessageSent.cs` |

### CreditNoteDelete

- **Auth**: `options.Bearer`
- **Signature**: `CreditNoteDelete(CreditNoteDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreditNoteDeleteRequest` | `src/FlowAccount/Requests/CreditNote/CreditNoteDeleteRequest.cs` |

### CreditNoteDetails

- **Auth**: `options.Bearer`
- **Signature**: `CreditNoteDetails(CreditNoteDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreditNoteDetailsRequest` | `src/FlowAccount/Requests/CreditNote/CreditNoteDetailsRequest.cs` |

### CreditNoteEdit

- **Auth**: `options.Bearer`
- **Signature**: `CreditNoteEdit(CreditNoteEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreditNoteEditRequest` | `src/FlowAccount/Requests/CreditNote/CreditNoteEditRequest.cs` |
| `SimpleDocument` | `src/FlowAccount/Models/SimpleDocument.cs` |

### CreditNoteEdit2

- **Auth**: `options.Bearer`
- **Signature**: `CreditNoteEdit2(CreditNoteEdit2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreditNoteEdit2Request` | `src/FlowAccount/Requests/CreditNote/CreditNoteEdit2Request.cs` |
| `InlineDocument` | `src/FlowAccount/Models/InlineDocument.cs` |

### CreditNoteGetCumulativeDocumentReferenceList

- **Auth**: `options.Bearer`
- **Signature**: `CreditNoteGetCumulativeDocumentReferenceList(CreditNoteGetCumulativeDocumentReferenceListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreditNoteGetCumulativeDocumentReferenceListRequest` | `src/FlowAccount/Requests/CreditNote/CreditNoteGetCumulativeDocumentReferenceListRequest.cs` |

### CreditNoteIndex

- **Auth**: `options.Bearer`
- **Signature**: `CreditNoteIndex(CreditNoteIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Query params (wire ← C#)**: `SortBy` ← `SortBy`, `CurrentPage` ← `CurrentPage`, `PageSize` ← `PageSize`, `Filter` ← `Filter`, `SearchString` ← `SearchString`, `CustomDocumentModels` ← `CustomDocumentModels`, `Range` ← `Range`, `Month` ← `Month`, `Year` ← `Year`, `StartDate` ← `StartDate`, `EndDate` ← `EndDate`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreditNoteIndexRequest` | `src/FlowAccount/Requests/CreditNote/CreditNoteIndexRequest.cs` |

### CreditNoteReceivePayment

- **Auth**: `options.Bearer`
- **Signature**: `CreditNoteReceivePayment(CreditNoteReceivePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreditNoteReceivePaymentRequest` | `src/FlowAccount/Requests/CreditNote/CreditNoteReceivePaymentRequest.cs` |
| `PaymentModel` | `src/FlowAccount/Models/PaymentModel.cs` |

