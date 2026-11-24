<!-- Generated file — do not edit; regenerated with the SDK. -->

# Expense — operations

Accessor: `client.Expense` · Source: `src/FlowAccount/Api/Expense.cs` · 13 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ExpenseChangeStatusByKey

- **Auth**: `options.Bearer`
- **Signature**: `ExpenseChangeStatusByKey(ExpenseChangeStatusByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DocumentId`, `StatusKey`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ExpenseChangeStatusByKeyRequest` | `src/FlowAccount/Requests/Expense/ExpenseChangeStatusByKeyRequest.cs` |

### ExpenseCreate

- **Auth**: `options.Bearer`
- **Signature**: `ExpenseCreate(ExpenseCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `MessageSent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ExpenseCreateRequest` | `src/FlowAccount/Requests/Expense/ExpenseCreateRequest.cs` |
| `SimpleDocument` | `src/FlowAccount/Models/SimpleDocument.cs` |
| `MessageSent` | `src/FlowAccount/Models/MessageSent.cs` |

### ExpenseCreate2

- **Auth**: `options.Bearer`
- **Signature**: `ExpenseCreate2(ExpenseCreate2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `MessageSent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ExpenseCreate2Request` | `src/FlowAccount/Requests/Expense/ExpenseCreate2Request.cs` |
| `InlineDocument` | `src/FlowAccount/Models/InlineDocument.cs` |
| `MessageSent` | `src/FlowAccount/Models/MessageSent.cs` |

### ExpenseDelete

- **Auth**: `options.Bearer`
- **Signature**: `ExpenseDelete(ExpenseDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ExpenseDeleteRequest` | `src/FlowAccount/Requests/Expense/ExpenseDeleteRequest.cs` |

### ExpenseDetails

- **Auth**: `options.Bearer`
- **Signature**: `ExpenseDetails(ExpenseDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ExpenseDetailsRequest` | `src/FlowAccount/Requests/Expense/ExpenseDetailsRequest.cs` |

### ExpenseEdit

- **Auth**: `options.Bearer`
- **Signature**: `ExpenseEdit(ExpenseEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ExpenseEditRequest` | `src/FlowAccount/Requests/Expense/ExpenseEditRequest.cs` |
| `SimpleDocument` | `src/FlowAccount/Models/SimpleDocument.cs` |

### ExpenseEdit2

- **Auth**: `options.Bearer`
- **Signature**: `ExpenseEdit2(ExpenseEdit2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ExpenseEdit2Request` | `src/FlowAccount/Requests/Expense/ExpenseEdit2Request.cs` |
| `InlineDocument` | `src/FlowAccount/Models/InlineDocument.cs` |

### ExpenseGetBusinessCategories

- **Auth**: `options.Bearer`
- **Signature**: `ExpenseGetBusinessCategories(ExpenseGetBusinessCategoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ExpenseGetBusinessCategoriesRequest` | `src/FlowAccount/Requests/Expense/ExpenseGetBusinessCategoriesRequest.cs` |

### ExpenseGetBusinessCategoriesWithoutAsset

- **Auth**: `options.Bearer`
- **Signature**: `ExpenseGetBusinessCategoriesWithoutAsset(ExpenseGetBusinessCategoriesWithoutAssetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ExpenseGetBusinessCategoriesWithoutAssetRequest` | `src/FlowAccount/Requests/Expense/ExpenseGetBusinessCategoriesWithoutAssetRequest.cs` |

### ExpenseGetChartOfAccounts

- **Auth**: `options.Bearer`
- **Signature**: `ExpenseGetChartOfAccounts(ExpenseGetChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ExpenseGetChartOfAccountsRequest` | `src/FlowAccount/Requests/Expense/ExpenseGetChartOfAccountsRequest.cs` |

### ExpenseGetChartOfAccountsWithoutAsset

- **Auth**: `options.Bearer`
- **Signature**: `ExpenseGetChartOfAccountsWithoutAsset(ExpenseGetChartOfAccountsWithoutAssetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ExpenseGetChartOfAccountsWithoutAssetRequest` | `src/FlowAccount/Requests/Expense/ExpenseGetChartOfAccountsWithoutAssetRequest.cs` |

### ExpenseIndex

- **Auth**: `options.Bearer`
- **Signature**: `ExpenseIndex(ExpenseIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Query params (wire ← C#)**: `SortBy` ← `SortBy`, `CurrentPage` ← `CurrentPage`, `PageSize` ← `PageSize`, `Filter` ← `Filter`, `SearchString` ← `SearchString`, `CustomDocumentModels` ← `CustomDocumentModels`, `Range` ← `Range`, `Month` ← `Month`, `Year` ← `Year`, `StartDate` ← `StartDate`, `EndDate` ← `EndDate`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ExpenseIndexRequest` | `src/FlowAccount/Requests/Expense/ExpenseIndexRequest.cs` |

### ExpenseReceivePayment

- **Auth**: `options.Bearer`
- **Signature**: `ExpenseReceivePayment(ExpenseReceivePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ExpenseReceivePaymentRequest` | `src/FlowAccount/Requests/Expense/ExpenseReceivePaymentRequest.cs` |
| `PaymentModel` | `src/FlowAccount/Models/PaymentModel.cs` |

