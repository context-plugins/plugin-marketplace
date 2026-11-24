<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transfers — operations

Accessor: `client.Transfers` · Source: `src/Curlec/Api/Transfers.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateDirectTransfer

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CreateDirectTransfer(CreateDirectTransferRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `TransferRazorpayTransfersApi`
- **Error**: `ApiException<CreateDirectTransferError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateDirectTransferRequest` | `src/Curlec/Requests/Transfers/CreateDirectTransferRequest.cs` |
| `TransfersRequest` | `src/Curlec/Models/TransfersRequest.cs` |
| `TransferRazorpayTransfersApi` | `src/Curlec/Models/TransferRazorpayTransfersApi.cs` |
| `CreateDirectTransferError` | `src/Curlec/Errors/CreateDirectTransferError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### CreateTransfersFromPayment

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CreateTransfersFromPayment(CreateTransfersFromPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `PaymentsTransfersResponse`
- **Error**: `ApiException<CreateTransfersFromPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTransfersFromPaymentRequest` | `src/Curlec/Requests/Transfers/CreateTransfersFromPaymentRequest.cs` |
| `PaymentsTransfersRequest` | `src/Curlec/Models/PaymentsTransfersRequest.cs` |
| `PaymentsTransfersResponse` | `src/Curlec/Models/PaymentsTransfersResponse.cs` |
| `CreateTransfersFromPaymentError` | `src/Curlec/Errors/CreateTransfersFromPaymentError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchTransfer

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchTransfer(FetchTransferRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `TransferRazorpayTransfersApi`
- **Error**: `ApiException<FetchTransferError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchTransferRequest` | `src/Curlec/Requests/Transfers/FetchTransferRequest.cs` |
| `TransferRazorpayTransfersApi` | `src/Curlec/Models/TransferRazorpayTransfersApi.cs` |
| `FetchTransferError` | `src/Curlec/Errors/FetchTransferError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchTransfersForPayment

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchTransfersForPayment(FetchTransfersForPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `PaymentsTransfersResponse`
- **Error**: `ApiException<FetchTransfersForPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchTransfersForPaymentRequest` | `src/Curlec/Requests/Transfers/FetchTransfersForPaymentRequest.cs` |
| `PaymentsTransfersResponse` | `src/Curlec/Models/PaymentsTransfersResponse.cs` |
| `FetchTransfersForPaymentError` | `src/Curlec/Errors/FetchTransfersForPaymentError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### ListReversals

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `ListReversals(ListReversalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `TransfersReversalsResponse`
- **Error**: `ApiException<ListReversalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListReversalsRequest` | `src/Curlec/Requests/Transfers/ListReversalsRequest.cs` |
| `TransfersReversalsResponse` | `src/Curlec/Models/TransfersReversalsResponse.cs` |
| `ListReversalsError` | `src/Curlec/Errors/ListReversalsError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### ListTransfers

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `ListTransfers(ListTransfersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `from` ← `From`, `to` ← `To`, `count` ← `Count`, `skip` ← `Skip`, `recipient_settlement_id` ← `RecipientSettlementId`, `expand[]` ← `Expand`
- **Returns**: `TransfersResponse`
- **Error**: `ApiException<ListTransfersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTransfersRequest` | `src/Curlec/Requests/Transfers/ListTransfersRequest.cs` |
| `ExpandRazorpayTransfersApi` | `src/Curlec/Models/Enums/ExpandRazorpayTransfersApi.cs` |
| `TransfersResponse` | `src/Curlec/Models/TransfersResponse.cs` |
| `ListTransfersError` | `src/Curlec/Errors/ListTransfersError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### ModifyTransferSettlementHold

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `ModifyTransferSettlementHold(ModifyTransferSettlementHoldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `TransferRazorpayTransfersApi`
- **Error**: `ApiException<ModifyTransferSettlementHoldError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ModifyTransferSettlementHoldRequest` | `src/Curlec/Requests/Transfers/ModifyTransferSettlementHoldRequest.cs` |
| `TransfersRequest1` | `src/Curlec/Models/TransfersRequest1.cs` |
| `TransferRazorpayTransfersApi` | `src/Curlec/Models/TransferRazorpayTransfersApi.cs` |
| `ModifyTransferSettlementHoldError` | `src/Curlec/Errors/ModifyTransferSettlementHoldError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### ReverseTransfer

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `ReverseTransfer(ReverseTransferRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Reversal`
- **Error**: `ApiException<ReverseTransferError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReverseTransferRequest` | `src/Curlec/Requests/Transfers/ReverseTransferRequest.cs` |
| `TransfersReversalsRequest` | `src/Curlec/Models/TransfersReversalsRequest.cs` |
| `Reversal` | `src/Curlec/Models/Reversal.cs` |
| `ReverseTransferError` | `src/Curlec/Errors/ReverseTransferError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

