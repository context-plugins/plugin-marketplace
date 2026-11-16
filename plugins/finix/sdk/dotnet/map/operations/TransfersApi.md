<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransfersApi — operations

Accessor: `client.TransfersApi` · Source: `src/FinixApiReference/Api/TransfersApi.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateTransfer

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateTransfer(CreateTransferRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Transfer`
- **Error**: `ApiException<CreateTransferError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTransferRequest` | `src/FinixApiReference/Requests/TransfersApi/CreateTransferRequest.cs` |
| `TransfersRequest` | `src/FinixApiReference/Models/AnyOf/TransfersRequest.cs` |
| `Transfer` | `src/FinixApiReference/Models/Transfer.cs` |
| `CreateTransferError` | `src/FinixApiReference/Errors/CreateTransferError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### CreateTransferReversal

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateTransferReversal(CreateTransferReversalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransferId`, `Body`
- **Returns**: `Transfer`
- **Error**: `ApiException<CreateTransferReversalError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTransferReversalRequest` | `src/FinixApiReference/Requests/TransfersApi/CreateTransferReversalRequest.cs` |
| `TransfersReversalsRequest` | `src/FinixApiReference/Models/AnyOf/TransfersReversalsRequest.cs` |
| `Transfer` | `src/FinixApiReference/Models/Transfer.cs` |
| `CreateTransferReversalError` | `src/FinixApiReference/Errors/CreateTransferReversalError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### GetTransfer

- **Auth**: `options.BasicAuth`
- **Signature**: `GetTransfer(GetTransferRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransferId`
- **Returns**: `Transfer`
- **Error**: `ApiException<GetTransferError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTransferRequest` | `src/FinixApiReference/Requests/TransfersApi/GetTransferRequest.cs` |
| `Transfer` | `src/FinixApiReference/Models/Transfer.cs` |
| `GetTransferError` | `src/FinixApiReference/Errors/GetTransferError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListTransferReversals

- **Auth**: `options.BasicAuth`
- **Signature**: `ListTransferReversals(ListTransferReversalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransferId`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `limit` ← `Limit`
- **Returns**: `TransfersReversalsResponse`
- **Error**: `ApiException<ListTransferReversalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTransferReversalsRequest` | `src/FinixApiReference/Requests/TransfersApi/ListTransferReversalsRequest.cs` |
| `TransfersReversalsResponse` | `src/FinixApiReference/Models/TransfersReversalsResponse.cs` |
| `ListTransferReversalsError` | `src/FinixApiReference/Errors/ListTransferReversalsError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListTransfers

- **Auth**: `options.BasicAuth`
- **Signature**: `ListTransfers(ListTransfersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `amount.gt` ← `AmountGt`, `amount.gte` ← `AmountGte`, `amount.lt` ← `AmountLt`, `amount.lte` ← `AmountLte`, `amount` ← `Amount`, `bank_return_reason_code` ← `BankReturnReasonCode`, `before_cursor` ← `BeforeCursor`, `buyer_business_name` ← `BuyerBusinessName`, `buyer_business_name.like` ← `BuyerBusinessNameLike`, `buyer_doing_business_as` ← `BuyerDoingBusinessAs`, `buyer_doing_business_as.like` ← `BuyerDoingBusinessAsLike`, `buyer_identity_first_name` ← `BuyerIdentityFirstName`, `buyer_identity_first_name.like` ← `BuyerIdentityFirstNameLike`, `buyer_identity_id` ← `BuyerIdentityId`, `buyer_identity_last_name` ← `BuyerIdentityLastName`, `buyer_identity_last_name.like` ← `BuyerIdentityLastNameLike`, `buyer_identity_name` ← `BuyerIdentityName`, `buyer_identity_name.like` ← `BuyerIdentityNameLike`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `currency` ← `Currency`, `device` ← `Device`, `id` ← `Id`, `idempotency_id` ← `IdempotencyId`, `instrument_account_last4` ← `InstrumentAccountLast4`, `instrument_bin` ← `InstrumentBin`, `instrument_brand_type` ← `InstrumentBrandType`, `instrument_card_last4` ← `InstrumentCardLast4`, `instrument_issuer_country` ← `InstrumentIssuerCountry`, `instrument_name` ← `InstrumentName`, `instrument_type` ← `InstrumentType`, `limit` ← `Limit`, `merchant` ← `Merchant`, `merchant_identity_id` ← `MerchantIdentityId`, `merchant_identity_name` ← `MerchantIdentityName`, `merchant_mid` ← `MerchantMid`, `merchant_processor_id` ← `MerchantProcessorId`, `parent_transfer_id` ← `ParentTransferId`, `ready_to_settle_at.gte` ← `ReadyToSettleAtGte`, `ready_to_settle_at.lte` ← `ReadyToSettleAtLte`, `state` ← `State`, `tags.key` ← `TagsKey`, `tags.value` ← `TagsValue`, `trace_id` ← `TraceId`, `type` ← `Type`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListTransfers`
- **Error**: `ApiException<ListTransfersError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTransfersRequest` | `src/FinixApiReference/Requests/TransfersApi/ListTransfersRequest.cs` |
| `InstrumentType2` | `src/FinixApiReference/Models/Enums/InstrumentType2.cs` |
| `State24` | `src/FinixApiReference/Models/Enums/State24.cs` |
| `Type53` | `src/FinixApiReference/Models/Enums/Type53.cs` |
| `ListTransfers` | `src/FinixApiReference/Models/ListTransfers.cs` |
| `ListTransfersError` | `src/FinixApiReference/Errors/ListTransfersError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### UpdateTransfer

- **Auth**: `options.BasicAuth`
- **Signature**: `UpdateTransfer(UpdateTransferRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransferId`, `Body`
- **Returns**: `Transfer`
- **Error**: `ApiException<UpdateTransferError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateTransferRequest` | `src/FinixApiReference/Requests/TransfersApi/UpdateTransferRequest.cs` |
| `UpdateTransfer` | `src/FinixApiReference/Models/UpdateTransfer.cs` |
| `Transfer` | `src/FinixApiReference/Models/Transfer.cs` |
| `UpdateTransferError` | `src/FinixApiReference/Errors/UpdateTransferError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

