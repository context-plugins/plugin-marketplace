<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentInstrumentGroups — operations

Accessor: `client.PaymentInstrumentGroups` · Source: `Api/PaymentInstrumentGroups.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetPaymentInstrumentGroupsId
- **Server group**: `Default13`
- **Signature**: `GetPaymentInstrumentGroupsId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `PaymentInstrumentGroup`
- **Error**: `SdkException<GetPaymentInstrumentGroupsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentInstrumentGroup` | `Models/PaymentInstrumentGroup.cs` |
| `GetPaymentInstrumentGroupsIdError` | `Errors/GetPaymentInstrumentGroupsIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetPaymentInstrumentGroupsIdTransactionRules
- **Server group**: `Default13`
- **Signature**: `GetPaymentInstrumentGroupsIdTransactionRules(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TransactionRulesResponse`
- **Error**: `SdkException<GetPaymentInstrumentGroupsIdTransactionRulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TransactionRulesResponse` | `Models/TransactionRulesResponse.cs` |
| `GetPaymentInstrumentGroupsIdTransactionRulesError` | `Errors/GetPaymentInstrumentGroupsIdTransactionRulesError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostPaymentInstrumentGroups
- **Server group**: `Default13`
- **Signature**: `PostPaymentInstrumentGroups(PaymentInstrumentGroupInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `PaymentInstrumentGroup`
- **Error**: `SdkException<PostPaymentInstrumentGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentInstrumentGroupInfo` | `Models/PaymentInstrumentGroupInfo.cs` |
| `PaymentInstrumentGroup` | `Models/PaymentInstrumentGroup.cs` |
| `PostPaymentInstrumentGroupsError` | `Errors/PostPaymentInstrumentGroupsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

