# Vault — operations

Accessor: `client.Vault` · Source: `Api/Vault.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreatePaymentToken
- **HTTP**: `POST /v3/vault/payment-tokens` (Default (api-m))
- **Notes**: Creates a Payment Token from the given payment source and adds it to the Vault of the associated customer.
- **Signature**: `CreatePaymentToken(string? payPalRequestId, PaymentTokenRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `payPalRequestId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentTokenResponse`
- **Error**: `SdkException<CreatePaymentTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateSetupToken
- **HTTP**: `POST /v3/vault/setup-tokens` (Default (api-m))
- **Notes**: Creates a Setup Token from the given payment source and adds it to the Vault of the associated customer.
- **Signature**: `CreateSetupToken(string? payPalRequestId, SetupTokenRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `payPalRequestId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SetupTokenResponse`
- **Error**: `SdkException<CreateSetupTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeletePaymentToken
- **HTTP**: `DELETE /v3/vault/payment-tokens/{id}` (Default (api-m))
- **Notes**: Delete the payment token associated with the payment token id.
- **Signature**: `DeletePaymentToken(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeletePaymentTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPaymentToken
- **HTTP**: `GET /v3/vault/payment-tokens/{id}` (Default (api-m))
- **Notes**: Returns a readable representation of vaulted payment source associated with the payment token id.
- **Signature**: `GetPaymentToken(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PaymentTokenResponse`
- **Error**: `SdkException<GetPaymentTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSetupToken
- **HTTP**: `GET /v3/vault/setup-tokens/{id}` (Default (api-m))
- **Notes**: Returns a readable representation of temporarily vaulted payment source associated with the setup token id.
- **Signature**: `GetSetupToken(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SetupTokenResponse`
- **Error**: `SdkException<GetSetupTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListCustomerPaymentTokens
- **HTTP**: `GET /v3/vault/payment-tokens` (Default (api-m))
- **Notes**: Returns all payment tokens for a customer.
- **Signature**: `ListCustomerPaymentTokens(string customerId, int? pageSize = 5, int? page = 1, bool? totalRequired = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `pageSize` = 5, `page` = 1, `totalRequired` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `customer_id` ← `customerId`, `page_size` ← `pageSize`, `page` ← `page`, `total_required` ← `totalRequired`
- **Returns**: `CustomerVaultPaymentTokensResponse`
- **Error**: `SdkException<ListCustomerPaymentTokensError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
