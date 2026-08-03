# Treasury — operations

Accessor: `client.Treasury` · Source: `Api/Treasury.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateDeposit
- **HTTP**: `POST /treasury/deposit` (Default (tesser-platform-v1-pull-51-me-98e48a7))
- **Notes**: Create a deposit payment.
- **Signature**: `CreateDeposit(string authorization, CreateDepositRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PaymentResponse`
- **Error**: `SdkException<CreateDepositError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject(out object)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateWithdrawal
- **HTTP**: `POST /treasury/withdrawal` (Default (tesser-platform-v1-pull-51-me-98e48a7))
- **Notes**: Create a withdrawal payment.
- **Signature**: `CreateWithdrawal(string authorization, CreateWithdrawalRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PaymentResponse`
- **Error**: `SdkException<CreateWithdrawalError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject(out object)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
