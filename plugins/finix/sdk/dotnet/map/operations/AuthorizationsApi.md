<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuthorizationsApi — operations

Accessor: `client.AuthorizationsApi` · Source: `src/FinixApiReference/Api/AuthorizationsApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CaptureAuthorization

- **Auth**: `options.BasicAuth`
- **Signature**: `CaptureAuthorization(CaptureAuthorizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AuthorizationId`
- **Returns**: `Authorization`
- **Error**: `ApiException<CaptureAuthorizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CaptureAuthorizationRequest` | `src/FinixApiReference/Requests/AuthorizationsApi/CaptureAuthorizationRequest.cs` |
| `AuthorizationsRequest1` | `src/FinixApiReference/Models/AnyOf/AuthorizationsRequest1.cs` |
| `Authorization` | `src/FinixApiReference/Models/Authorization.cs` |
| `CaptureAuthorizationError` | `src/FinixApiReference/Errors/CaptureAuthorizationError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### CreateAuthorization

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateAuthorization(CreateAuthorizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `Authorization`
- **Error**: `ApiException<CreateAuthorizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 402, 403, 404, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateAuthorizationRequest` | `src/FinixApiReference/Requests/AuthorizationsApi/CreateAuthorizationRequest.cs` |
| `AuthorizationsRequest` | `src/FinixApiReference/Models/AnyOf/AuthorizationsRequest.cs` |
| `Authorization` | `src/FinixApiReference/Models/Authorization.cs` |
| `CreateAuthorizationError` | `src/FinixApiReference/Errors/CreateAuthorizationError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### GetAuthorization

- **Auth**: `options.BasicAuth`
- **Signature**: `GetAuthorization(GetAuthorizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AuthorizationId`
- **Returns**: `Authorization`
- **Error**: `ApiException<GetAuthorizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAuthorizationRequest` | `src/FinixApiReference/Requests/AuthorizationsApi/GetAuthorizationRequest.cs` |
| `Authorization` | `src/FinixApiReference/Models/Authorization.cs` |
| `GetAuthorizationError` | `src/FinixApiReference/Errors/GetAuthorizationError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListAuthorizations

- **Auth**: `options.BasicAuth`
- **Signature**: `ListAuthorizations(ListAuthorizationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `amount.gt` ← `AmountGt`, `amount.gte` ← `AmountGte`, `amount.lt` ← `AmountLt`, `amount.lte` ← `AmountLte`, `amount` ← `Amount`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `currency` ← `Currency`, `device` ← `Device`, `idempotency_id` ← `IdempotencyId`, `instrument_account_last4` ← `InstrumentAccountLast4`, `instrument_bin` ← `InstrumentBin`, `instrument_brand_type` ← `InstrumentBrandType`, `instrument_card_last4` ← `InstrumentCardLast4`, `instrument_name` ← `InstrumentName`, `is_void` ← `IsVoid`, `limit` ← `Limit`, `merchant` ← `Merchant`, `merchant_identity_name` ← `MerchantIdentityName`, `merchant_mid` ← `MerchantMid`, `merchant_processor_id` ← `MerchantProcessorId`, `state` ← `State`, `tags.key` ← `TagsKey`, `tags.value` ← `TagsValue`, `trace_id` ← `TraceId`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListAuthorizations`
- **Error**: `ApiException<ListAuthorizationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAuthorizationsRequest` | `src/FinixApiReference/Requests/AuthorizationsApi/ListAuthorizationsRequest.cs` |
| `State21` | `src/FinixApiReference/Models/Enums/State21.cs` |
| `ListAuthorizations` | `src/FinixApiReference/Models/ListAuthorizations.cs` |
| `ListAuthorizationsError` | `src/FinixApiReference/Errors/ListAuthorizationsError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### VoidAuthorization

- **Auth**: `options.BasicAuth`
- **Signature**: `VoidAuthorization(VoidAuthorizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AuthorizationIdVoidTo`, `Body`
- **Returns**: `Authorization`
- **Error**: `ApiException<VoidAuthorizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VoidAuthorizationRequest` | `src/FinixApiReference/Requests/AuthorizationsApi/VoidAuthorizationRequest.cs` |
| `VoidAnAuthorization` | `src/FinixApiReference/Models/VoidAnAuthorization.cs` |
| `Authorization` | `src/FinixApiReference/Models/Authorization.cs` |
| `VoidAuthorizationError` | `src/FinixApiReference/Errors/VoidAuthorizationError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

