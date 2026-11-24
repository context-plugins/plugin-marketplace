<!-- Generated file — do not edit; regenerated with the SDK. -->

# Invoices — operations

Accessor: `client.Invoices` · Source: `src/Paid/Api/Invoices.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetInvoiceById

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `GetInvoiceById(GetInvoiceByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `Invoice`
- **Error**: `ApiException<GetInvoiceByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetInvoiceByIdRequest` | `src/Paid/Requests/Invoices/GetInvoiceByIdRequest.cs` |
| `Invoice` | `src/Paid/Models/Invoice.cs` |
| `GetInvoiceByIdError` | `src/Paid/Errors/GetInvoiceByIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### GetInvoiceLines

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `GetInvoiceLines(GetInvoiceLinesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `InvoiceLinesResponse`
- **Error**: `ApiException<GetInvoiceLinesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetInvoiceLinesRequest` | `src/Paid/Requests/Invoices/GetInvoiceLinesRequest.cs` |
| `InvoiceLinesResponse` | `src/Paid/Models/InvoiceLinesResponse.cs` |
| `GetInvoiceLinesError` | `src/Paid/Errors/GetInvoiceLinesError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### ListInvoices

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `ListInvoices(ListInvoicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `customerId` ← `CustomerId`, `externalCustomerId` ← `ExternalCustomerId`, `orderId` ← `OrderId`, `status` ← `Status`, `paymentStatus` ← `PaymentStatus`, `issueDateFrom` ← `IssueDateFrom`, `issueDateTo` ← `IssueDateTo`, `dueDateFrom` ← `DueDateFrom`, `dueDateTo` ← `DueDateTo`, `displayNumber` ← `DisplayNumber`, `purchaseOrderReference` ← `PurchaseOrderReference`, `currency` ← `Currency`
- **Returns**: `InvoiceListResponse`
- **Error**: `ApiException<ListInvoicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListInvoicesRequest` | `src/Paid/Requests/Invoices/ListInvoicesRequest.cs` |
| `InvoicesGetParametersStatus` | `src/Paid/Models/Enums/InvoicesGetParametersStatus.cs` |
| `InvoicesGetParametersPaymentStatus` | `src/Paid/Models/Enums/InvoicesGetParametersPaymentStatus.cs` |
| `InvoiceListResponse` | `src/Paid/Models/InvoiceListResponse.cs` |
| `ListInvoicesError` | `src/Paid/Errors/ListInvoicesError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### UpdateInvoiceById

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `UpdateInvoiceById(UpdateInvoiceByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `Invoice`
- **Error**: `ApiException<UpdateInvoiceByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateInvoiceByIdRequest` | `src/Paid/Requests/Invoices/UpdateInvoiceByIdRequest.cs` |
| `UpdateInvoiceRequest` | `src/Paid/Models/UpdateInvoiceRequest.cs` |
| `Invoice` | `src/Paid/Models/Invoice.cs` |
| `UpdateInvoiceByIdError` | `src/Paid/Errors/UpdateInvoiceByIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

