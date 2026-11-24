<!-- Generated file — do not edit; regenerated with the SDK. -->

# LiliClient — operations

Accessor: `client` · Source: `src/Lili/LiliClient.cs` · 11 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddWebhook

- **Auth**: `options.AccessKey`
- **Signature**: `AddWebhook(AddWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `WebhookCreateResponse`
- **Error**: `ApiException<AddWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetJsonErrorResponse([NotNullWhen(true)] out JsonErrorResponse? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddWebhookRequest` | `src/Lili/Requests/AddWebhookRequest.cs` |
| `WebhookRequestModel` | `src/Lili/Models/WebhookRequestModel.cs` |
| `WebhookCreateResponse` | `src/Lili/Models/WebhookCreateResponse.cs` |
| `AddWebhookError` | `src/Lili/Errors/AddWebhookError.cs` |
| `JsonErrorResponse` | `src/Lili/Models/JsonErrorResponse.cs` |

### CreatePaymentNotification

- **Auth**: `options.AccessKey`
- **Signature**: `CreatePaymentNotification(CreatePaymentNotificationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreatePaymentNotificationRequest` | `src/Lili/Requests/CreatePaymentNotificationRequest.cs` |

### DeleteWebhook

- **Auth**: `options.AccessKey`
- **Signature**: `DeleteWebhook(DeleteWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetJsonErrorResponse([NotNullWhen(true)] out JsonErrorResponse? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWebhookRequest` | `src/Lili/Requests/DeleteWebhookRequest.cs` |
| `DeleteWebhookError` | `src/Lili/Errors/DeleteWebhookError.cs` |
| `JsonErrorResponse` | `src/Lili/Models/JsonErrorResponse.cs` |

### GetAll

- **Auth**: `options.AccessKey`
- **Signature**: `GetAll(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `WebhookListResponse`
- **Error**: `ApiException<GetAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetJsonErrorResponse([NotNullWhen(true)] out JsonErrorResponse? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebhookListResponse` | `src/Lili/Models/WebhookListResponse.cs` |
| `GetAllError` | `src/Lili/Errors/GetAllError.cs` |
| `JsonErrorResponse` | `src/Lili/Models/JsonErrorResponse.cs` |

### GetWebhook

- **Auth**: `options.AccessKey`
- **Signature**: `GetWebhook(GetWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookId`
- **Returns**: `WebhookResponse`
- **Error**: `ApiException<GetWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetJsonErrorResponse([NotNullWhen(true)] out JsonErrorResponse? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWebhookRequest` | `src/Lili/Requests/GetWebhookRequest.cs` |
| `WebhookResponse` | `src/Lili/Models/WebhookResponse.cs` |
| `GetWebhookError` | `src/Lili/Errors/GetWebhookError.cs` |
| `JsonErrorResponse` | `src/Lili/Models/JsonErrorResponse.cs` |

### PaymentList

- **Auth**: `options.AccessKey`
- **Signature**: `PaymentList(PaymentListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `customerId` ← `CustomerId`, `receiverAccountNumber` ← `ReceiverAccountNumber`, `startDate` ← `StartDate`, `endDate` ← `EndDate`
- **Returns**: `PaymentListResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PaymentListRequest` | `src/Lili/Requests/PaymentListRequest.cs` |
| `PaymentListResponse` | `src/Lili/Models/PaymentListResponse.cs` |

### PutLiliApiV1Payments

- **Auth**: `options.AccessKey`
- **Signature**: `PutLiliApiV1Payments(PutLiliApiV1PaymentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `PaymentResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PutLiliApiV1PaymentsRequest` | `src/Lili/Requests/PutLiliApiV1PaymentsRequest.cs` |
| `PaymentRequest` | `src/Lili/Models/PaymentRequest.cs` |
| `PaymentResponse` | `src/Lili/Models/PaymentResponse.cs` |

### RegisterAccount

- **Auth**: `options.AccessKey`
- **Signature**: `RegisterAccount(RegisterAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `LeadResponse`
- **Error**: `ApiException<RegisterAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject([NotNullWhen(true)] out object? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RegisterAccountRequest` | `src/Lili/Requests/RegisterAccountRequest.cs` |
| `LeadRequest` | `src/Lili/Models/LeadRequest.cs` |
| `LeadResponse` | `src/Lili/Models/LeadResponse.cs` |
| `RegisterAccountError` | `src/Lili/Errors/RegisterAccountError.cs` |

### UpdateLead

- **Auth**: `options.AccessKey`
- **Signature**: `UpdateLead(UpdateLeadRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateLeadError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject([NotNullWhen(true)] out object? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateLeadRequest` | `src/Lili/Requests/UpdateLeadRequest.cs` |
| `LeadRequest` | `src/Lili/Models/LeadRequest.cs` |
| `UpdateLeadError` | `src/Lili/Errors/UpdateLeadError.cs` |

### UpdateWebhook

- **Auth**: `options.AccessKey`
- **Signature**: `UpdateWebhook(UpdateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookId`, `Body`
- **Returns**: `WebhookResponse`
- **Error**: `ApiException<UpdateWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetJsonErrorResponse([NotNullWhen(true)] out JsonErrorResponse? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateWebhookRequest` | `src/Lili/Requests/UpdateWebhookRequest.cs` |
| `WebhookRequestModel` | `src/Lili/Models/WebhookRequestModel.cs` |
| `WebhookResponse` | `src/Lili/Models/WebhookResponse.cs` |
| `UpdateWebhookError` | `src/Lili/Errors/UpdateWebhookError.cs` |
| `JsonErrorResponse` | `src/Lili/Models/JsonErrorResponse.cs` |

### UploadAdditionalDoc

- **Auth**: `options.AccessKey`
- **Signature**: `UploadAdditionalDoc(UploadAdditionalDocRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UploadAdditionalDocError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject([NotNullWhen(true)] out object? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadAdditionalDocRequest` | `src/Lili/Requests/UploadAdditionalDocRequest.cs` |
| `LeadUpload` | `src/Lili/Models/LeadUpload.cs` |
| `UploadAdditionalDocError` | `src/Lili/Errors/UploadAdditionalDocError.cs` |

