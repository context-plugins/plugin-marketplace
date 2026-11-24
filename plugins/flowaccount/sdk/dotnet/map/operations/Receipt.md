<!-- Generated file — do not edit; regenerated with the SDK. -->

# Receipt — operations

Accessor: `client.Receipt` · Source: `src/FlowAccount/Api/Receipt.cs` · 11 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ReceiptChangeStatusByKey

- **Auth**: `options.Bearer`
- **Signature**: `ReceiptChangeStatusByKey(ReceiptChangeStatusByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DocumentId`, `StatusKey`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReceiptChangeStatusByKeyRequest` | `src/FlowAccount/Requests/Receipt/ReceiptChangeStatusByKeyRequest.cs` |

### ReceiptCreate

- **Auth**: `options.Bearer`
- **Signature**: `ReceiptCreate(ReceiptCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `MessageSent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReceiptCreateRequest` | `src/FlowAccount/Requests/Receipt/ReceiptCreateRequest.cs` |
| `SimpleDocument` | `src/FlowAccount/Models/SimpleDocument.cs` |
| `MessageSent` | `src/FlowAccount/Models/MessageSent.cs` |

### ReceiptCreate2

- **Auth**: `options.Bearer`
- **Signature**: `ReceiptCreate2(ReceiptCreate2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `MessageSent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReceiptCreate2Request` | `src/FlowAccount/Requests/Receipt/ReceiptCreate2Request.cs` |
| `InlineDocument` | `src/FlowAccount/Models/InlineDocument.cs` |
| `MessageSent` | `src/FlowAccount/Models/MessageSent.cs` |

### ReceiptDelete

- **Auth**: `options.Bearer`
- **Signature**: `ReceiptDelete(ReceiptDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReceiptDeleteRequest` | `src/FlowAccount/Requests/Receipt/ReceiptDeleteRequest.cs` |

### ReceiptDetails

- **Auth**: `options.Bearer`
- **Signature**: `ReceiptDetails(ReceiptDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReceiptDetailsRequest` | `src/FlowAccount/Requests/Receipt/ReceiptDetailsRequest.cs` |

### ReceiptEdit

- **Auth**: `options.Bearer`
- **Signature**: `ReceiptEdit(ReceiptEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReceiptEditRequest` | `src/FlowAccount/Requests/Receipt/ReceiptEditRequest.cs` |
| `SimpleDocument` | `src/FlowAccount/Models/SimpleDocument.cs` |

### ReceiptEdit2

- **Auth**: `options.Bearer`
- **Signature**: `ReceiptEdit2(ReceiptEdit2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReceiptEdit2Request` | `src/FlowAccount/Requests/Receipt/ReceiptEdit2Request.cs` |
| `InlineDocument` | `src/FlowAccount/Models/InlineDocument.cs` |

### ReceiptGetBusinessCategories

- **Auth**: `options.Bearer`
- **Signature**: `ReceiptGetBusinessCategories(ReceiptGetBusinessCategoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReceiptGetBusinessCategoriesRequest` | `src/FlowAccount/Requests/Receipt/ReceiptGetBusinessCategoriesRequest.cs` |

### ReceiptGetChartOfAccounts

- **Auth**: `options.Bearer`
- **Signature**: `ReceiptGetChartOfAccounts(ReceiptGetChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReceiptGetChartOfAccountsRequest` | `src/FlowAccount/Requests/Receipt/ReceiptGetChartOfAccountsRequest.cs` |

### ReceiptIndex

- **Auth**: `options.Bearer`
- **Signature**: `ReceiptIndex(ReceiptIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Query params (wire ← C#)**: `SortBy` ← `SortBy`, `CurrentPage` ← `CurrentPage`, `PageSize` ← `PageSize`, `Filter` ← `Filter`, `SearchString` ← `SearchString`, `CustomDocumentModels` ← `CustomDocumentModels`, `Range` ← `Range`, `Month` ← `Month`, `Year` ← `Year`, `StartDate` ← `StartDate`, `EndDate` ← `EndDate`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReceiptIndexRequest` | `src/FlowAccount/Requests/Receipt/ReceiptIndexRequest.cs` |

### ReceiptReceivePayment

- **Auth**: `options.Bearer`
- **Signature**: `ReceiptReceivePayment(ReceiptReceivePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReceiptReceivePaymentRequest` | `src/FlowAccount/Requests/Receipt/ReceiptReceivePaymentRequest.cs` |
| `PaymentModel` | `src/FlowAccount/Models/PaymentModel.cs` |

