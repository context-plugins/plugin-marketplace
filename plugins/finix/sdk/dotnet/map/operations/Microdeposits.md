<!-- Generated file — do not edit; regenerated with the SDK. -->

# Microdeposits — operations

Accessor: `client.Microdeposits` · Source: `src/FinixApiReference/Api/Microdeposits.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetMicroDeposit

- **Auth**: `options.BasicAuth`
- **Signature**: `GetMicroDeposit(GetMicroDepositRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MicrodepositId`
- **Returns**: `Microdeposit`
- **Error**: `ApiException<GetMicroDepositError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMicroDepositRequest` | `src/FinixApiReference/Requests/Microdeposits/GetMicroDepositRequest.cs` |
| `Microdeposit` | `src/FinixApiReference/Models/Microdeposit.cs` |
| `GetMicroDepositError` | `src/FinixApiReference/Errors/GetMicroDepositError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListMicroDeposits

- **Auth**: `options.BasicAuth`
- **Signature**: `ListMicroDeposits(ListMicroDepositsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `limit` ← `Limit`, `payment_instrument_id` ← `PaymentInstrumentId`
- **Returns**: `ListMicroDeposits`
- **Error**: `ApiException<ListMicroDepositsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMicroDepositsRequest` | `src/FinixApiReference/Requests/Microdeposits/ListMicroDepositsRequest.cs` |
| `ListMicroDeposits` | `src/FinixApiReference/Models/ListMicroDeposits.cs` |
| `ListMicroDepositsError` | `src/FinixApiReference/Errors/ListMicroDepositsError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

