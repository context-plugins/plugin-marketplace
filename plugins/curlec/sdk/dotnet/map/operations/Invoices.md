<!-- Generated file — do not edit; regenerated with the SDK. -->

# Invoices — operations

Accessor: `client.Invoices` · Source: `src/Curlec/Api/Invoices.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelInvoice

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CancelInvoice(CancelInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Invoice`
- **Error**: `ApiException<CancelInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelInvoiceRequest` | `src/Curlec/Requests/Invoices/CancelInvoiceRequest.cs` |
| `Invoice` | `src/Curlec/Models/Invoice.cs` |
| `CancelInvoiceError` | `src/Curlec/Errors/CancelInvoiceError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### CreateInvoice

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CreateInvoice(CreateInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Invoice`
- **Error**: `ApiException<CreateInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateInvoiceRequest` | `src/Curlec/Requests/Invoices/CreateInvoiceRequest.cs` |
| `InvoicesRequest` | `src/Curlec/Models/InvoicesRequest.cs` |
| `Invoice` | `src/Curlec/Models/Invoice.cs` |
| `CreateInvoiceError` | `src/Curlec/Errors/CreateInvoiceError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### DeleteInvoice

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `DeleteInvoice(DeleteInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `object`
- **Error**: `ApiException<DeleteInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteInvoiceRequest` | `src/Curlec/Requests/Invoices/DeleteInvoiceRequest.cs` |
| `DeleteInvoiceError` | `src/Curlec/Errors/DeleteInvoiceError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchInvoice

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchInvoice(FetchInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Invoice`
- **Error**: `ApiException<FetchInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchInvoiceRequest` | `src/Curlec/Requests/Invoices/FetchInvoiceRequest.cs` |
| `Invoice` | `src/Curlec/Models/Invoice.cs` |
| `FetchInvoiceError` | `src/Curlec/Errors/FetchInvoiceError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### IssueInvoice

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `IssueInvoice(IssueInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Invoice`
- **Error**: `ApiException<IssueInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IssueInvoiceRequest` | `src/Curlec/Requests/Invoices/IssueInvoiceRequest.cs` |
| `Invoice` | `src/Curlec/Models/Invoice.cs` |
| `IssueInvoiceError` | `src/Curlec/Errors/IssueInvoiceError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### ListInvoices

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `ListInvoices(ListInvoicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `type` ← `Type`, `payment_id` ← `PaymentId`, `customer_id` ← `CustomerId`, `subscription_id` ← `SubscriptionId`, `from` ← `From`, `to` ← `To`, `count` ← `Count`, `skip` ← `Skip`
- **Returns**: `InvoicesResponse`
- **Error**: `ApiException<ListInvoicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListInvoicesRequest` | `src/Curlec/Requests/Invoices/ListInvoicesRequest.cs` |
| `Type3` | `src/Curlec/Models/Enums/Type3.cs` |
| `InvoicesResponse` | `src/Curlec/Models/InvoicesResponse.cs` |
| `ListInvoicesError` | `src/Curlec/Errors/ListInvoicesError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### SendInvoiceNotification

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `SendInvoiceNotification(SendInvoiceNotificationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Medium`
- **Returns**: `InvoicesNotifyByResponse`
- **Error**: `ApiException<SendInvoiceNotificationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SendInvoiceNotificationRequest` | `src/Curlec/Requests/Invoices/SendInvoiceNotificationRequest.cs` |
| `Medium` | `src/Curlec/Models/Enums/Medium.cs` |
| `InvoicesNotifyByResponse` | `src/Curlec/Models/InvoicesNotifyByResponse.cs` |
| `SendInvoiceNotificationError` | `src/Curlec/Errors/SendInvoiceNotificationError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### UpdateInvoice

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `UpdateInvoice(UpdateInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `Invoice`
- **Error**: `ApiException<UpdateInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateInvoiceRequest` | `src/Curlec/Requests/Invoices/UpdateInvoiceRequest.cs` |
| `InvoicesRequest1` | `src/Curlec/Models/InvoicesRequest1.cs` |
| `Invoice` | `src/Curlec/Models/Invoice.cs` |
| `UpdateInvoiceError` | `src/Curlec/Errors/UpdateInvoiceError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

