<!-- Generated file — do not edit; regenerated with the SDK. -->

# BillingNote — operations

Accessor: `client.BillingNote` · Source: `src/FlowAccount/Api/BillingNote.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BillingNoteChangeStatusByKey

- **Auth**: `options.Bearer`
- **Signature**: `BillingNoteChangeStatusByKey(BillingNoteChangeStatusByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DocumentId`, `StatusKey`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BillingNoteChangeStatusByKeyRequest` | `src/FlowAccount/Requests/BillingNote/BillingNoteChangeStatusByKeyRequest.cs` |

### BillingNoteCreate

- **Auth**: `options.Bearer`
- **Signature**: `BillingNoteCreate(BillingNoteCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `MessageSent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BillingNoteCreateRequest` | `src/FlowAccount/Requests/BillingNote/BillingNoteCreateRequest.cs` |
| `SimpleDocument` | `src/FlowAccount/Models/SimpleDocument.cs` |
| `MessageSent` | `src/FlowAccount/Models/MessageSent.cs` |

### BillingNoteCreate2

- **Auth**: `options.Bearer`
- **Signature**: `BillingNoteCreate2(BillingNoteCreate2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `MessageSent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BillingNoteCreate2Request` | `src/FlowAccount/Requests/BillingNote/BillingNoteCreate2Request.cs` |
| `InlineDocument` | `src/FlowAccount/Models/InlineDocument.cs` |
| `MessageSent` | `src/FlowAccount/Models/MessageSent.cs` |

### BillingNoteDelete

- **Auth**: `options.Bearer`
- **Signature**: `BillingNoteDelete(BillingNoteDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BillingNoteDeleteRequest` | `src/FlowAccount/Requests/BillingNote/BillingNoteDeleteRequest.cs` |

### BillingNoteDetails

- **Auth**: `options.Bearer`
- **Signature**: `BillingNoteDetails(BillingNoteDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BillingNoteDetailsRequest` | `src/FlowAccount/Requests/BillingNote/BillingNoteDetailsRequest.cs` |

### BillingNoteEdit

- **Auth**: `options.Bearer`
- **Signature**: `BillingNoteEdit(BillingNoteEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BillingNoteEditRequest` | `src/FlowAccount/Requests/BillingNote/BillingNoteEditRequest.cs` |
| `SimpleDocument` | `src/FlowAccount/Models/SimpleDocument.cs` |

### BillingNoteEdit2

- **Auth**: `options.Bearer`
- **Signature**: `BillingNoteEdit2(BillingNoteEdit2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BillingNoteEdit2Request` | `src/FlowAccount/Requests/BillingNote/BillingNoteEdit2Request.cs` |
| `InlineDocument` | `src/FlowAccount/Models/InlineDocument.cs` |

### BillingNoteIndex

- **Auth**: `options.Bearer`
- **Signature**: `BillingNoteIndex(BillingNoteIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Query params (wire ← C#)**: `SortBy` ← `SortBy`, `CurrentPage` ← `CurrentPage`, `PageSize` ← `PageSize`, `Filter` ← `Filter`, `SearchString` ← `SearchString`, `CustomDocumentModels` ← `CustomDocumentModels`, `Range` ← `Range`, `Month` ← `Month`, `Year` ← `Year`, `StartDate` ← `StartDate`, `EndDate` ← `EndDate`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BillingNoteIndexRequest` | `src/FlowAccount/Requests/BillingNote/BillingNoteIndexRequest.cs` |

### BillingNoteReceivePayment

- **Auth**: `options.Bearer`
- **Signature**: `BillingNoteReceivePayment(BillingNoteReceivePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BillingNoteReceivePaymentRequest` | `src/FlowAccount/Requests/BillingNote/BillingNoteReceivePaymentRequest.cs` |
| `PaymentModel` | `src/FlowAccount/Models/PaymentModel.cs` |

