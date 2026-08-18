<!-- Generated file — do not edit; regenerated with the SDK. -->

# DirectDebitMandates — operations

Accessor: `client.DirectDebitMandates` · Source: `Api/DirectDebitMandates.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetMandates
- **Server group**: `Default13`
- **Signature**: `GetMandates(string? balanceAccountId, string? paymentInstrumentId, string? cursor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `balanceAccountId` — nullable, no default → **must pass explicitly**
  - `paymentInstrumentId` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `balanceAccountId` ← `balanceAccountId`, `paymentInstrumentId` ← `paymentInstrumentId`, `cursor` ← `cursor`
- **Returns**: `ListMandatesResponse`
- **Error**: `SdkException<GetMandatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ListMandatesResponse` | `Models/ListMandatesResponse.cs` |
| `GetMandatesError` | `Errors/GetMandatesError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### GetMandatesMandateId
- **Server group**: `Default13`
- **Signature**: `GetMandatesMandateId(string mandateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `Mandate1`
- **Error**: `SdkException<GetMandatesMandateIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Mandate1` | `Models/Mandate1.cs` |
| `GetMandatesMandateIdError` | `Errors/GetMandatesMandateIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PatchMandatesMandateId
- **Server group**: `Default13`
- **Signature**: `PatchMandatesMandateId(string mandateId, MandateUpdate body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<PatchMandatesMandateIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `MandateUpdate` | `Models/MandateUpdate.cs` |
| `PatchMandatesMandateIdError` | `Errors/PatchMandatesMandateIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostMandatesMandateIdCancel
- **Server group**: `Default13`
- **Signature**: `PostMandatesMandateIdCancel(string mandateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<PostMandatesMandateIdCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PostMandatesMandateIdCancelError` | `Errors/PostMandatesMandateIdCancelError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

