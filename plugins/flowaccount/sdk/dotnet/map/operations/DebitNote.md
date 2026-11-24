<!-- Generated file — do not edit; regenerated with the SDK. -->

# DebitNote — operations

Accessor: `client.DebitNote` · Source: `src/FlowAccount/Api/DebitNote.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DebitNoteChangeStatusByKey

- **Auth**: `options.Bearer`
- **Signature**: `DebitNoteChangeStatusByKey(DebitNoteChangeStatusByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DocumentId`, `StatusKey`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DebitNoteChangeStatusByKeyRequest` | `src/FlowAccount/Requests/DebitNote/DebitNoteChangeStatusByKeyRequest.cs` |

### DebitNoteCreate

- **Auth**: `options.Bearer`
- **Signature**: `DebitNoteCreate(DebitNoteCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `MessageSent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DebitNoteCreateRequest` | `src/FlowAccount/Requests/DebitNote/DebitNoteCreateRequest.cs` |
| `SimpleDocument` | `src/FlowAccount/Models/SimpleDocument.cs` |
| `MessageSent` | `src/FlowAccount/Models/MessageSent.cs` |

### DebitNoteCreate2

- **Auth**: `options.Bearer`
- **Signature**: `DebitNoteCreate2(DebitNoteCreate2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `MessageSent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DebitNoteCreate2Request` | `src/FlowAccount/Requests/DebitNote/DebitNoteCreate2Request.cs` |
| `InlineDocument` | `src/FlowAccount/Models/InlineDocument.cs` |
| `MessageSent` | `src/FlowAccount/Models/MessageSent.cs` |

### DebitNoteDelete

- **Auth**: `options.Bearer`
- **Signature**: `DebitNoteDelete(DebitNoteDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DebitNoteDeleteRequest` | `src/FlowAccount/Requests/DebitNote/DebitNoteDeleteRequest.cs` |

### DebitNoteDetails

- **Auth**: `options.Bearer`
- **Signature**: `DebitNoteDetails(DebitNoteDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DebitNoteDetailsRequest` | `src/FlowAccount/Requests/DebitNote/DebitNoteDetailsRequest.cs` |

### DebitNoteEdit

- **Auth**: `options.Bearer`
- **Signature**: `DebitNoteEdit(DebitNoteEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DebitNoteEditRequest` | `src/FlowAccount/Requests/DebitNote/DebitNoteEditRequest.cs` |
| `SimpleDocument` | `src/FlowAccount/Models/SimpleDocument.cs` |

### DebitNoteEdit2

- **Auth**: `options.Bearer`
- **Signature**: `DebitNoteEdit2(DebitNoteEdit2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DebitNoteEdit2Request` | `src/FlowAccount/Requests/DebitNote/DebitNoteEdit2Request.cs` |
| `InlineDocument` | `src/FlowAccount/Models/InlineDocument.cs` |

### DebitNoteGetCumulativeDocumentReferenceList

- **Auth**: `options.Bearer`
- **Signature**: `DebitNoteGetCumulativeDocumentReferenceList(DebitNoteGetCumulativeDocumentReferenceListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DebitNoteGetCumulativeDocumentReferenceListRequest` | `src/FlowAccount/Requests/DebitNote/DebitNoteGetCumulativeDocumentReferenceListRequest.cs` |

### DebitNoteIndex

- **Auth**: `options.Bearer`
- **Signature**: `DebitNoteIndex(DebitNoteIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Query params (wire ← C#)**: `SortBy` ← `SortBy`, `CurrentPage` ← `CurrentPage`, `PageSize` ← `PageSize`, `Filter` ← `Filter`, `SearchString` ← `SearchString`, `CustomDocumentModels` ← `CustomDocumentModels`, `Range` ← `Range`, `Month` ← `Month`, `Year` ← `Year`, `StartDate` ← `StartDate`, `EndDate` ← `EndDate`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DebitNoteIndexRequest` | `src/FlowAccount/Requests/DebitNote/DebitNoteIndexRequest.cs` |

### DebitNoteReceivePayment

- **Auth**: `options.Bearer`
- **Signature**: `DebitNoteReceivePayment(DebitNoteReceivePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DebitNoteReceivePaymentRequest` | `src/FlowAccount/Requests/DebitNote/DebitNoteReceivePaymentRequest.cs` |
| `PaymentModel` | `src/FlowAccount/Models/PaymentModel.cs` |

