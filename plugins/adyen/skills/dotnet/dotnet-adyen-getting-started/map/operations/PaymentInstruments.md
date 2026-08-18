<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentInstruments — operations

Accessor: `client.PaymentInstruments` · Source: `Api/PaymentInstruments.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetPaymentInstrumentsId
- **Server group**: `Default13`
- **Signature**: `GetPaymentInstrumentsId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `PaymentInstrument1`
- **Error**: `SdkException<GetPaymentInstrumentsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentInstrument1` | `Models/PaymentInstrument1.cs` |
| `GetPaymentInstrumentsIdError` | `Errors/GetPaymentInstrumentsIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetPaymentInstrumentsIdNetworkTokenActivationData
- **Server group**: `Default13`
- **Signature**: `GetPaymentInstrumentsIdNetworkTokenActivationData(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `NetworkTokenActivationDataResponse`
- **Error**: `SdkException<GetPaymentInstrumentsIdNetworkTokenActivationDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `NetworkTokenActivationDataResponse` | `Models/NetworkTokenActivationDataResponse.cs` |
| `GetPaymentInstrumentsIdNetworkTokenActivationDataError` | `Errors/GetPaymentInstrumentsIdNetworkTokenActivationDataError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetPaymentInstrumentsIdNetworkTokens
- **Server group**: `Default13`
- **Signature**: `GetPaymentInstrumentsIdNetworkTokens(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ListNetworkTokensResponse`
- **Error**: `SdkException<GetPaymentInstrumentsIdNetworkTokensError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ListNetworkTokensResponse` | `Models/ListNetworkTokensResponse.cs` |
| `GetPaymentInstrumentsIdNetworkTokensError` | `Errors/GetPaymentInstrumentsIdNetworkTokensError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetPaymentInstrumentsIdReveal
- **Server group**: `Default13`
- **Signature**: `GetPaymentInstrumentsIdReveal(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `PaymentInstrumentRevealInfo`
- **Error**: `SdkException<GetPaymentInstrumentsIdRevealError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentInstrumentRevealInfo` | `Models/PaymentInstrumentRevealInfo.cs` |
| `GetPaymentInstrumentsIdRevealError` | `Errors/GetPaymentInstrumentsIdRevealError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetPaymentInstrumentsIdTransactionRules
- **Server group**: `Default13`
- **Signature**: `GetPaymentInstrumentsIdTransactionRules(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TransactionRulesResponse`
- **Error**: `SdkException<GetPaymentInstrumentsIdTransactionRulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TransactionRulesResponse` | `Models/TransactionRulesResponse.cs` |
| `GetPaymentInstrumentsIdTransactionRulesError` | `Errors/GetPaymentInstrumentsIdTransactionRulesError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchPaymentInstrumentsId
- **Server group**: `Default13`
- **Signature**: `PatchPaymentInstrumentsId(string id, PaymentInstrumentUpdateRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `UpdatePaymentInstrument`
- **Error**: `SdkException<PatchPaymentInstrumentsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentInstrumentUpdateRequest` | `Models/PaymentInstrumentUpdateRequest.cs` |
| `UpdatePaymentInstrument` | `Models/UpdatePaymentInstrument.cs` |
| `PatchPaymentInstrumentsIdError` | `Errors/PatchPaymentInstrumentsIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostPaymentInstruments
- **Server group**: `Default13`
- **Signature**: `PostPaymentInstruments(PaymentInstrumentInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `PaymentInstrument1`
- **Error**: `SdkException<PostPaymentInstrumentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentInstrumentInfo` | `Models/PaymentInstrumentInfo.cs` |
| `PaymentInstrument1` | `Models/PaymentInstrument1.cs` |
| `PostPaymentInstrumentsError` | `Errors/PostPaymentInstrumentsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostPaymentInstrumentsIdNetworkTokenActivationData
- **Server group**: `Default13`
- **Signature**: `PostPaymentInstrumentsIdNetworkTokenActivationData(string id, NetworkTokenActivationDataRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `NetworkTokenActivationDataResponse`
- **Error**: `SdkException<PostPaymentInstrumentsIdNetworkTokenActivationDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `NetworkTokenActivationDataRequest` | `Models/NetworkTokenActivationDataRequest.cs` |
| `NetworkTokenActivationDataResponse` | `Models/NetworkTokenActivationDataResponse.cs` |
| `PostPaymentInstrumentsIdNetworkTokenActivationDataError` | `Errors/PostPaymentInstrumentsIdNetworkTokenActivationDataError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostPaymentInstrumentsReveal
- **Server group**: `Default13`
- **Signature**: `PostPaymentInstrumentsReveal(PaymentInstrumentRevealRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `PaymentInstrumentRevealResponse`
- **Error**: `SdkException<PostPaymentInstrumentsRevealError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentInstrumentRevealRequest` | `Models/PaymentInstrumentRevealRequest.cs` |
| `PaymentInstrumentRevealResponse` | `Models/PaymentInstrumentRevealResponse.cs` |
| `PostPaymentInstrumentsRevealError` | `Errors/PostPaymentInstrumentsRevealError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

