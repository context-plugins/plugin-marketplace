<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuthorizedCardUsers — operations

Accessor: `client.AuthorizedCardUsers` · Source: `Api/AuthorizedCardUsers.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers
- **Server group**: `Default13`
- **Signature**: `DeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(string paymentInstrumentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError` | `Errors/DeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### GetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers
- **Server group**: `Default13`
- **Signature**: `GetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(string paymentInstrumentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `AuthorisedCardUsers`
- **Error**: `SdkException<GetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 404, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AuthorisedCardUsers` | `Models/AuthorisedCardUsers.cs` |
| `GetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError` | `Errors/GetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers
- **Server group**: `Default13`
- **Signature**: `PatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(string paymentInstrumentId, AuthorisedCardUsers body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<PatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AuthorisedCardUsers` | `Models/AuthorisedCardUsers.cs` |
| `PatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError` | `Errors/PatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers
- **Server group**: `Default13`
- **Signature**: `PostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(string paymentInstrumentId, AuthorisedCardUsers body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<PostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AuthorisedCardUsers` | `Models/AuthorisedCardUsers.cs` |
| `PostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError` | `Errors/PostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

