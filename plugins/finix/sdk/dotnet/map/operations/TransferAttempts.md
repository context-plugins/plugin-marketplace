<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransferAttempts — operations

Accessor: `client.TransferAttempts` · Source: `src/FinixApiReference/Api/TransferAttempts.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetTransferAttempt

- **Auth**: `options.BasicAuth`
- **Signature**: `GetTransferAttempt(GetTransferAttemptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransferAttemptId`
- **Returns**: `TransferAttemptsResponse`
- **Error**: `ApiException<GetTransferAttemptError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTransferAttemptRequest` | `src/FinixApiReference/Requests/TransferAttempts/GetTransferAttemptRequest.cs` |
| `TransferAttemptsResponse` | `src/FinixApiReference/Models/AnyOf/TransferAttemptsResponse.cs` |
| `GetTransferAttemptError` | `src/FinixApiReference/Errors/GetTransferAttemptError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListTransferAttempts

- **Auth**: `options.BasicAuth`
- **Signature**: `ListTransferAttempts(ListTransferAttemptsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `amount` ← `Amount`, `amount.gt` ← `AmountGt`, `amount.gte` ← `AmountGte`, `amount.lt` ← `AmountLt`, `amount.lte` ← `AmountLte`, `application_id` ← `ApplicationId`, `authorization_id` ← `AuthorizationId`, `buyer_email` ← `BuyerEmail`, `buyer_email.like` ← `BuyerEmailLike`, `buyer_first_name` ← `BuyerFirstName`, `buyer_first_name.like` ← `BuyerFirstNameLike`, `buyer_last_name` ← `BuyerLastName`, `buyer_last_name.like` ← `BuyerLastNameLike`, `entity_id` ← `EntityId`, `entity_type` ← `EntityType`, `is_authorization` ← `IsAuthorization`, `merchant_id` ← `MerchantId`, `payment_instrument_id` ← `PaymentInstrumentId`, `state` ← `State`, `transfer_id` ← `TransferId`, `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `id` ← `Id`, `limit` ← `Limit`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListTransferAttempts`
- **Error**: `ApiException<ListTransferAttemptsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTransferAttemptsRequest` | `src/FinixApiReference/Requests/TransferAttempts/ListTransferAttemptsRequest.cs` |
| `EntityType10` | `src/FinixApiReference/Models/Enums/EntityType10.cs` |
| `State25` | `src/FinixApiReference/Models/Enums/State25.cs` |
| `ListTransferAttempts` | `src/FinixApiReference/Models/ListTransferAttempts.cs` |
| `ListTransferAttemptsError` | `src/FinixApiReference/Errors/ListTransferAttemptsError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

